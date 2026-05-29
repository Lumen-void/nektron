import os
import zipfile


ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
EXPORT_DIR = os.path.join(ROOT, "exports")
USD_PATH = os.path.join(EXPORT_DIR, "nektron_machine.usd")
USDZ_PATH = os.path.join(EXPORT_DIR, "nektron_machine.usdz")


def main():
    if not os.path.exists(USD_PATH):
        raise FileNotFoundError(f"Missing USD file: {USD_PATH}")

    # USDZ is a zero-compression ZIP package. Keep the USD file first.
    with zipfile.ZipFile(USDZ_PATH, "w", compression=zipfile.ZIP_STORED) as archive:
        archive.write(USD_PATH, arcname="nektron_machine.usd")

    print(f"Created {USDZ_PATH}")


if __name__ == "__main__":
    main()
