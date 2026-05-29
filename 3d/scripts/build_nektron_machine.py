import math
import os

import bpy
from mathutils import Vector


ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
EXPORT_DIR = os.path.join(ROOT, "exports")
os.makedirs(EXPORT_DIR, exist_ok=True)


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()


def material(name, color, metallic=0.0, roughness=0.35, alpha=1.0, emission=None, strength=0.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs["Base Color"].default_value = color
        bsdf.inputs["Metallic"].default_value = metallic
        bsdf.inputs["Roughness"].default_value = roughness
        bsdf.inputs["Alpha"].default_value = alpha
        if emission:
            bsdf.inputs["Emission Color"].default_value = emission
            bsdf.inputs["Emission Strength"].default_value = strength
    mat.blend_method = "BLEND" if alpha < 1 else "OPAQUE"
    return mat


MAT_BODY = None
MAT_LED = None
MAT_GLASS = None
MAT_SCREEN = None
MAT_UV = None
MAT_AIR = None
MAT_METAL = None
MAT_BOARD = None
MAT_TERMINAL = None
MAT_RUBBER = None
MAT_DUCT = None
MAT_WIRE_BLUE = None
MAT_WIRE_ORANGE = None
MAT_WIRE_PURPLE = None
MAT_WIRE_YELLOW = None
MAT_WIRE_RED = None


def cube(name, location, scale, mat):
    bpy.ops.mesh.primitive_cube_add(size=1, location=location)
    obj = bpy.context.object
    obj.name = name
    obj.dimensions = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    if mat:
        obj.data.materials.append(mat)
    bevel = obj.modifiers.new("softened_edges", "BEVEL")
    bevel.width = 0.035
    bevel.segments = 4
    obj.modifiers.new("weighted_normals", "WEIGHTED_NORMAL")
    return obj


def cylinder(name, location, radius, depth, mat, vertices=64, rotation=(0, 0, 0)):
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices, radius=radius, depth=depth, location=location, rotation=rotation)
    obj = bpy.context.object
    obj.name = name
    if mat:
        obj.data.materials.append(mat)
    obj.modifiers.new("weighted_normals", "WEIGHTED_NORMAL")
    return obj


def add_text(name, text, location, size, mat):
    bpy.ops.object.text_add(location=location, rotation=(math.radians(90), 0, 0))
    obj = bpy.context.object
    obj.name = name
    obj.data.body = text
    obj.data.align_x = "CENTER"
    obj.data.align_y = "CENTER"
    obj.data.size = size
    obj.data.extrude = 0.003
    obj.data.materials.append(mat)
    return obj


def add_wire(name, points, mat, bevel=0.004):
    curve = bpy.data.curves.new(name, "CURVE")
    curve.dimensions = "3D"
    curve.resolution_u = 16
    curve.bevel_depth = bevel
    curve.bevel_resolution = 3
    polyline = curve.splines.new("POLY")
    polyline.points.add(len(points) - 1)
    for point, coord in zip(polyline.points, points):
        point.co = (coord[0], coord[1], coord[2], 1)
    obj = bpy.data.objects.new(name, curve)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(mat)
    return obj


def add_wire_label(name, text, location, mat):
    return add_text(name, text, location, 0.018, mat)


def fan_assembly(prefix, center, radius):
    cylinder(f"{prefix}_outer_guard_ring", center, radius, 0.012, MAT_SCREEN, vertices=64, rotation=(math.radians(90), 0, 0))
    cylinder(f"{prefix}_central_hub", (center[0], center[1] - 0.012, center[2]), radius * 0.32, 0.018, MAT_METAL, vertices=32, rotation=(math.radians(90), 0, 0))
    for index in range(5):
        blade = cube(f"{prefix}_curved_blade_{index + 1}", (center[0], center[1] - 0.02, center[2]), (radius * 1.35, 0.008, radius * 0.22), MAT_METAL)
        blade.rotation_euler[1] = math.radians(index * 72 + 18)
    for sx in [-1, 1]:
        for sz in [-1, 1]:
            cylinder(f"{prefix}_guard_screw_{sx}_{sz}", (center[0] + sx * radius * 0.68, center[1] - 0.026, center[2] + sz * radius * 0.68), radius * 0.11, 0.01, MAT_TERMINAL, vertices=20, rotation=(math.radians(90), 0, 0))


def terminal_strip(prefix, origin, count):
    for index in range(count):
        x = origin[0] + index * 0.028
        cube(f"{prefix}_terminal_block_{index + 1}", (x, origin[1], origin[2]), (0.022, 0.02, 0.014), MAT_TERMINAL)
        cylinder(f"{prefix}_terminal_screw_{index + 1}", (x, origin[1] - 0.014, origin[2]), 0.005, 0.006, MAT_METAL, vertices=18, rotation=(math.radians(90), 0, 0))


def add_qr_pattern(prefix, origin, size, mat):
    cell = size / 9
    for x in range(9):
        for z in range(9):
            if ((x * 3 + z * 5) % 4 < 2) or x in [0, 8] or z in [0, 8]:
                cube(f"{prefix}_qr_cell_{x}_{z}", (origin[0] + (x - 4) * cell, origin[1], origin[2] + (z - 4) * cell), (cell * 0.72, 0.004, cell * 0.72), mat)


def build_lcd_and_circular_displays():
    cube("real_lcd_black_metal_bezel", (-0.055, -0.232, 0.76), (0.43, 0.026, 0.22), MAT_RUBBER)
    cube("real_10_1_lcd_screen_glass", (-0.055, -0.252, 0.76), (0.38, 0.006, 0.18), MAT_SCREEN)
    add_text("lcd_line_helmet_cleaning", "Helmet Cleaning", (-0.12, -0.257, 0.805), 0.022, MAT_GLASS)
    add_text("lcd_line_three_minutes", "in 3 Minutes", (-0.125, -0.257, 0.775), 0.02, MAT_GLASS)
    add_text("lcd_price_49", "Rs 49", (-0.14, -0.257, 0.72), 0.034, MAT_LED)
    add_text("lcd_scan_prompt", "Scan QR to Start", (-0.12, -0.257, 0.685), 0.012, MAT_GLASS)
    cube("lcd_driver_board_behind_screen", (-0.055, -0.19, 0.76), (0.16, 0.018, 0.08), MAT_BOARD)
    cube("lcd_flat_flex_ribbon", (-0.055, -0.205, 0.67), (0.055, 0.006, 0.08), MAT_WIRE_YELLOW)

    cylinder("real_circular_display_black_bezel", (-0.055, -0.248, 0.61), 0.08, 0.026, MAT_RUBBER, vertices=96, rotation=(math.radians(90), 0, 0))
    cylinder("real_circular_qr_status_display", (-0.055, -0.267, 0.61), 0.064, 0.006, MAT_SCREEN, vertices=96, rotation=(math.radians(90), 0, 0))
    cylinder("circular_display_red_led_ring", (-0.055, -0.272, 0.61), 0.071, 0.004, MAT_LED, vertices=96, rotation=(math.radians(90), 0, 0))
    cube("circular_display_qr_white_plate", (-0.055, -0.276, 0.61), (0.064, 0.004, 0.064), MAT_GLASS)
    add_qr_pattern("circular_display", (-0.055, -0.281, 0.61), 0.056, MAT_SCREEN)
    add_text("circular_display_scan_text", "SCAN", (-0.055, -0.286, 0.535), 0.012, MAT_LED)


def build_body():
    cube("matte_black_outer_body_1020x600x430", (0, 0, 0.51), (0.6, 0.43, 1.02), MAT_BODY)
    build_lcd_and_circular_displays()
    add_text("top_display_brand_text", "NEKTRON", (0, -0.242, 0.93), 0.052, MAT_LED)
    add_text("powered_by_laila_text", "POWERED BY LAILA", (0, -0.242, 0.88), 0.018, MAT_GLASS)

    cube("right_scan_pay_clean_done_strip", (0.22, -0.238, 0.69), (0.095, 0.025, 0.36), MAT_SCREEN)
    cylinder("scan_qr_module", (0.22, -0.258, 0.8), 0.028, 0.02, MAT_SCREEN, rotation=(math.radians(90), 0, 0))
    cylinder("pay_start_red_indicator", (0.22, -0.258, 0.68), 0.018, 0.018, MAT_LED, rotation=(math.radians(90), 0, 0))
    cylinder("helmet_cleaning_red_indicator", (0.22, -0.258, 0.61), 0.018, 0.018, MAT_LED, rotation=(math.radians(90), 0, 0))
    cylinder("done_green_indicator", (0.22, -0.258, 0.54), 0.018, 0.018, material("green_done_emission", (0.1, 1, 0.35, 1), emission=(0.1, 1, 0.35, 1), strength=3), rotation=(math.radians(90), 0, 0))

    cube("transparent_front_chamber_door", (-0.025, -0.245, 0.46), (0.43, 0.024, 0.34), MAT_GLASS)
    cube("rubber_door_gasket_top", (-0.025, -0.263, 0.64), (0.46, 0.018, 0.018), MAT_RUBBER)
    cube("rubber_door_gasket_bottom", (-0.025, -0.263, 0.28), (0.46, 0.018, 0.018), MAT_RUBBER)
    cube("rubber_door_gasket_left", (-0.25, -0.263, 0.46), (0.018, 0.018, 0.34), MAT_RUBBER)
    cube("rubber_door_gasket_right", (0.2, -0.263, 0.46), (0.018, 0.018, 0.34), MAT_RUBBER)
    cube("door_handle", (-0.28, -0.27, 0.46), (0.025, 0.035, 0.18), MAT_METAL)
    cube("upper_door_hinge", (0.2, -0.27, 0.56), (0.035, 0.035, 0.07), MAT_METAL)
    cube("lower_door_hinge", (0.2, -0.27, 0.37), (0.035, 0.035, 0.07), MAT_METAL)
    cube("bottom_service_electronics_bay", (0, -0.235, 0.14), (0.48, 0.04, 0.16), MAT_METAL)
    cube("removable_service_access_panel", (0, -0.262, 0.14), (0.43, 0.018, 0.13), MAT_DUCT)
    for sx in [-0.18, 0.18]:
        for z in [0.095, 0.185]:
            cylinder("quarter_turn_panel_screw", (sx, -0.276, z), 0.008, 0.006, MAT_TERMINAL, vertices=20, rotation=(math.radians(90), 0, 0))
    cube("side_upper_vent", (0.307, 0, 0.72), (0.025, 0.16, 0.16), MAT_SCREEN)
    cube("side_lower_vent", (0.307, 0, 0.25), (0.025, 0.16, 0.13), MAT_SCREEN)

    # Red LED frame around chamber and kiosk outline.
    cube("left_red_led_frame", (-0.275, -0.262, 0.51), (0.018, 0.025, 0.9), MAT_LED)
    cube("right_red_led_frame", (0.275, -0.262, 0.51), (0.018, 0.025, 0.9), MAT_LED)
    cube("top_red_led_frame", (0, -0.262, 0.96), (0.55, 0.025, 0.018), MAT_LED)
    cube("bottom_red_led_frame", (0, -0.262, 0.06), (0.55, 0.025, 0.018), MAT_LED)


def build_chamber():
    cube("single_helmet_container_stainless_chamber_tub", (-0.025, 0.025, 0.49), (0.44, 0.28, 0.38), MAT_METAL)
    cube("helmet_container_rear_wall", (-0.025, 0.15, 0.49), (0.4, 0.025, 0.34), MAT_DUCT)
    cube("helmet_container_bottom_tray", (-0.025, 0.0, 0.3), (0.36, 0.22, 0.025), MAT_METAL)
    cube("left_helmet_guide_rail", (-0.16, -0.03, 0.34), (0.025, 0.19, 0.018), MAT_TERMINAL)
    cube("right_helmet_guide_rail", (0.11, -0.03, 0.34), (0.025, 0.19, 0.018), MAT_TERMINAL)
    cube("drain_and_mist_collection_channel", (-0.025, -0.12, 0.315), (0.18, 0.025, 0.014), MAT_RUBBER)
    cylinder("helmet_stand_post", (-0.025, -0.03, 0.34), 0.018, 0.22, MAT_METAL)
    cylinder("helmet_stand_plate", (-0.025, -0.03, 0.46), 0.11, 0.02, MAT_METAL)

    bpy.ops.mesh.primitive_uv_sphere_add(segments=48, ring_count=24, location=(-0.025, -0.035, 0.55))
    helmet = bpy.context.object
    helmet.name = "helmet_reference_shape"
    helmet.scale = (0.17, 0.13, 0.105)
    helmet.data.materials.append(MAT_METAL)

    cylinder("left_uv_tube", (-0.18, -0.18, 0.5), 0.012, 0.32, MAT_UV)
    cylinder("right_uv_tube", (0.14, -0.18, 0.5), 0.012, 0.32, MAT_UV)
    cube("dual_fan_module", (-0.12, 0.04, 0.75), (0.2, 0.11, 0.1), MAT_METAL)
    fan_assembly("blower_fan_left", (-0.17, -0.025, 0.75), 0.045)
    fan_assembly("blower_fan_right", (-0.07, -0.025, 0.75), 0.045)
    cube("blower_hepa_filter_cassette", (-0.12, -0.065, 0.69), (0.16, 0.025, 0.075), MAT_RUBBER)
    cube("removable_fan_service_cover", (-0.12, -0.092, 0.75), (0.24, 0.012, 0.13), MAT_GLASS)
    cube("blower_outlet_duct", (-0.12, -0.02, 0.675), (0.26, 0.08, 0.045), MAT_DUCT)
    cube("rear_air_return_duct", (-0.265, 0.015, 0.52), (0.055, 0.11, 0.34), MAT_DUCT)
    cube("ptc_heater_block", (0.14, 0.04, 0.74), (0.12, 0.08, 0.06), MAT_METAL)
    for index in range(6):
        cube(f"ptc_aluminum_fin_{index + 1}", (0.095 + index * 0.018, 0.02, 0.74), (0.008, 0.1, 0.075), MAT_TERMINAL)
    cylinder("mist_nozzle", (-0.025, -0.19, 0.72), 0.016, 0.06, MAT_METAL, rotation=(math.radians(90), 0, 0))
    cylinder("mist_liquid_bottle", (-0.18, 0.02, 0.18), 0.045, 0.16, MAT_GLASS)
    cylinder("mist_bottle_screw_cap", (-0.18, 0.02, 0.27), 0.03, 0.025, MAT_TERMINAL)
    cylinder("chemical_bottle", (-0.08, 0.02, 0.17), 0.04, 0.14, MAT_GLASS)
    cylinder("chemical_bottle_screw_cap", (-0.08, 0.02, 0.25), 0.026, 0.02, MAT_TERMINAL)
    cube("green_relay_pcb_board", (0.09, -0.035, 0.17), (0.23, 0.025, 0.09), MAT_BOARD)
    cube("esp32_dev_module", (0.0, -0.055, 0.17), (0.06, 0.018, 0.045), MAT_SCREEN)
    cube("four_channel_relay_module", (0.09, -0.058, 0.17), (0.09, 0.018, 0.055), MAT_BOARD)
    terminal_strip("upper_relay", (0.16, -0.075, 0.205), 5)
    terminal_strip("lower_relay", (0.16, -0.075, 0.135), 5)
    cube("five_volt_power_supply", (-0.02, -0.055, 0.08), (0.08, 0.02, 0.05), MAT_DUCT)
    cube("ac_inlet_fuse_switch", (0.15, -0.055, 0.075), (0.09, 0.02, 0.05), MAT_RUBBER)
    cube("cable_gland_bundle_entry", (0.25, -0.035, 0.18), (0.055, 0.04, 0.035), MAT_RUBBER)

    cube("slide_out_service_tray", (0.05, -0.285, 0.18), (0.42, 0.045, 0.035), MAT_DUCT)
    cube("visible_esp32_dev_board_on_tray", (-0.08, -0.315, 0.215), (0.08, 0.018, 0.04), MAT_SCREEN)
    cube("visible_relay_pcb_on_tray", (0.05, -0.315, 0.215), (0.14, 0.018, 0.045), MAT_BOARD)
    terminal_strip("visible_upper_tray_relay", (0.02, -0.332, 0.25), 5)
    terminal_strip("visible_lower_tray_relay", (0.02, -0.332, 0.18), 5)
    cube("visible_power_supply_on_tray", (0.19, -0.315, 0.215), (0.09, 0.02, 0.045), MAT_DUCT)
    cylinder("visible_mist_tank_cap_on_tray", (-0.19, -0.315, 0.25), 0.026, 0.018, MAT_TERMINAL)
    cylinder("visible_chemical_cap_on_tray", (-0.19, -0.315, 0.18), 0.022, 0.016, MAT_TERMINAL)
    add_wire_label("tray_esp32_label", "ESP32", (-0.08, -0.34, 0.27), MAT_WIRE_BLUE)
    add_wire_label("tray_relay_label", "RELAY TERMINALS", (0.06, -0.34, 0.285), MAT_WIRE_YELLOW)
    add_wire_label("tray_power_label", "POWER + FUSE", (0.19, -0.34, 0.27), MAT_WIRE_ORANGE)

    add_wire("gpio14_blower_wire", [(0.09, -0.04, 0.2), (-0.24, 0.08, 0.3), (-0.24, 0.08, 0.68), (-0.17, -0.025, 0.75)], MAT_WIRE_BLUE)
    add_wire("gpio27_heater_wire", [(0.12, -0.04, 0.2), (0.24, 0.08, 0.34), (0.24, 0.08, 0.69), (0.14, 0.04, 0.74)], MAT_WIRE_ORANGE)
    add_wire("gpio26_uv_wire", [(0.15, -0.04, 0.19), (-0.22, 0.05, 0.34), (-0.18, -0.18, 0.5), (0.14, -0.18, 0.5)], MAT_WIRE_PURPLE)
    add_wire("gpio25_mist_wire", [(0.18, -0.04, 0.18), (0.05, 0.08, 0.42), (-0.025, -0.19, 0.72)], MAT_WIRE_YELLOW)
    add_wire("gpio33_led_wire", [(0.21, -0.04, 0.18), (-0.29, 0.04, 0.34), (-0.275, -0.262, 0.77)], MAT_WIRE_RED)
    add_wire_label("gpio14_label", "GPIO14 BLOWER", (-0.245, -0.12, 0.62), MAT_WIRE_BLUE)
    add_wire_label("gpio27_label", "GPIO27 HEATER", (0.23, -0.12, 0.62), MAT_WIRE_ORANGE)
    add_wire_label("gpio26_label", "GPIO26 UV", (-0.16, -0.12, 0.39), MAT_WIRE_PURPLE)

    for index, z in enumerate([0.46, 0.56, 0.66]):
        arrow = cylinder(f"airflow_arrow_{index + 1}", (-0.07 + index * 0.07, -0.18, z), 0.009, 0.16, MAT_AIR, vertices=24, rotation=(math.radians(90), 0, 0))
        arrow.rotation_euler[2] = math.radians(18)


def add_animation():
    bpy.context.scene.frame_start = 1
    bpy.context.scene.frame_end = 160

    animated_names = ["transparent_front_chamber_door", "left_uv_tube", "right_uv_tube", "mist_nozzle"]
    for obj in bpy.context.scene.objects:
      if obj.name in animated_names:
        obj.keyframe_insert(data_path="location", frame=1)

    door = bpy.data.objects.get("transparent_front_chamber_door")
    if door:
        door.location.x = -0.24
        door.keyframe_insert(data_path="location", frame=35)
        door.location.x = 0
        door.keyframe_insert(data_path="location", frame=55)

    for name in ["left_uv_tube", "right_uv_tube"]:
        obj = bpy.data.objects.get(name)
        if obj:
            obj.scale = (1, 1, 1)
            obj.keyframe_insert(data_path="scale", frame=60)
            obj.scale = (1.35, 1.35, 1.05)
            obj.keyframe_insert(data_path="scale", frame=92)

    mist = bpy.data.objects.get("mist_nozzle")
    if mist:
        mist.scale = (1, 1, 1)
        mist.keyframe_insert(data_path="scale", frame=96)
        mist.scale = (1.5, 1.5, 1.5)
        mist.keyframe_insert(data_path="scale", frame=112)


def setup_camera_lights():
    bpy.ops.object.light_add(type="AREA", location=(0, -2.1, 2.2))
    light = bpy.context.object
    light.name = "large_softbox_reflection"
    light.data.energy = 650
    light.data.size = 4

    bpy.ops.object.camera_add(location=(0.75, -2.2, 1.25), rotation=(math.radians(63), 0, math.radians(20)))
    bpy.context.scene.camera = bpy.context.object

    bpy.context.scene.render.engine = "CYCLES"
    bpy.context.scene.cycles.samples = 64
    bpy.context.scene.view_settings.view_transform = "Filmic"
    bpy.context.scene.view_settings.look = "Medium High Contrast"


def export_scene():
    blend_path = os.path.join(EXPORT_DIR, "nektron_machine.blend")
    obj_path = os.path.join(EXPORT_DIR, "nektron_machine.obj")
    usd_path = os.path.join(EXPORT_DIR, "nektron_machine.usd")
    bpy.ops.wm.save_as_mainfile(filepath=blend_path)
    bpy.ops.wm.obj_export(filepath=obj_path)
    if hasattr(bpy.ops.wm, "usd_export"):
        bpy.ops.wm.usd_export(filepath=usd_path)
    print(f"Saved NEKTRON model to {EXPORT_DIR}")


def main():
    global MAT_BODY, MAT_LED, MAT_GLASS, MAT_SCREEN, MAT_UV, MAT_AIR, MAT_METAL
    global MAT_BOARD, MAT_TERMINAL, MAT_RUBBER, MAT_DUCT, MAT_WIRE_BLUE, MAT_WIRE_ORANGE, MAT_WIRE_PURPLE, MAT_WIRE_YELLOW, MAT_WIRE_RED
    clear_scene()
    MAT_BODY = material("matte_black_body", (0.005, 0.005, 0.006, 1), metallic=0.2, roughness=0.5)
    MAT_LED = material("red_led_emission", (1, 0.02, 0.05, 1), emission=(1, 0.02, 0.05, 1), strength=4)
    MAT_GLASS = material("transparent_glass_chamber", (0.55, 0.9, 1, 0.28), roughness=0.05, alpha=0.28)
    MAT_SCREEN = material("black_glass_screen", (0.01, 0.012, 0.016, 1), metallic=0.0, roughness=0.12)
    MAT_UV = material("uv_tube_glow", (0.45, 0.25, 1, 1), emission=(0.45, 0.25, 1, 1), strength=3)
    MAT_AIR = material("airflow_arrow_blue", (0.25, 0.75, 1, 0.55), alpha=0.55, emission=(0.25, 0.75, 1, 1), strength=1.5)
    MAT_METAL = material("service_bay_metal", (0.12, 0.12, 0.14, 1), metallic=0.45, roughness=0.32)
    MAT_BOARD = material("green_pcb_board", (0.02, 0.36, 0.18, 1), roughness=0.45)
    MAT_TERMINAL = material("brass_terminal_blocks", (0.95, 0.52, 0.08, 1), metallic=0.25, roughness=0.28)
    MAT_RUBBER = material("black_rubber_gasket", (0.002, 0.002, 0.003, 1), roughness=0.8)
    MAT_DUCT = material("dark_air_duct_and_service_panel", (0.05, 0.055, 0.07, 1), metallic=0.25, roughness=0.36)
    MAT_WIRE_BLUE = material("blue_blower_sensor_wire", (0.1, 0.65, 1, 1), emission=(0.1, 0.65, 1, 1), strength=0.9)
    MAT_WIRE_ORANGE = material("orange_heater_wire", (1, 0.38, 0.05, 1), emission=(1, 0.38, 0.05, 1), strength=0.9)
    MAT_WIRE_PURPLE = material("purple_uv_wire", (0.55, 0.32, 1, 1), emission=(0.55, 0.32, 1, 1), strength=0.9)
    MAT_WIRE_YELLOW = material("yellow_mist_signal_wire", (1, 0.82, 0.05, 1), emission=(1, 0.82, 0.05, 1), strength=0.9)
    MAT_WIRE_RED = material("red_led_power_wire", (1, 0.05, 0.12, 1), emission=(1, 0.05, 0.12, 1), strength=0.9)

    build_body()
    build_chamber()
    add_animation()
    setup_camera_lights()
    export_scene()


if __name__ == "__main__":
    main()
