(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function o_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var o0={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var no=Symbol.for("react.element"),l_=Symbol.for("react.portal"),c_=Symbol.for("react.fragment"),u_=Symbol.for("react.strict_mode"),d_=Symbol.for("react.profiler"),f_=Symbol.for("react.provider"),h_=Symbol.for("react.context"),p_=Symbol.for("react.forward_ref"),m_=Symbol.for("react.suspense"),g_=Symbol.for("react.memo"),v_=Symbol.for("react.lazy"),$f=Symbol.iterator;function __(n){return n===null||typeof n!="object"?null:(n=$f&&n[$f]||n["@@iterator"],typeof n=="function"?n:null)}var l0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c0=Object.assign,u0={};function Ks(n,e,t){this.props=n,this.context=e,this.refs=u0,this.updater=t||l0}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ks.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function d0(){}d0.prototype=Ks.prototype;function zd(n,e,t){this.props=n,this.context=e,this.refs=u0,this.updater=t||l0}var Bd=zd.prototype=new d0;Bd.constructor=zd;c0(Bd,Ks.prototype);Bd.isPureReactComponent=!0;var Zf=Array.isArray,f0=Object.prototype.hasOwnProperty,Hd={current:null},h0={key:!0,ref:!0,__self:!0,__source:!0};function p0(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)f0.call(e,i)&&!h0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:no,type:n,key:s,ref:a,props:r,_owner:Hd.current}}function y_(n,e){return{$$typeof:no,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Vd(n){return typeof n=="object"&&n!==null&&n.$$typeof===no}function x_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Qf=/\/+/g;function Sc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?x_(""+n.key):e.toString(36)}function nl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case no:case l_:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+Sc(a,0):i,Zf(r)?(t="",n!=null&&(t=n.replace(Qf,"$&/")+"/"),nl(r,e,t,"",function(c){return c})):r!=null&&(Vd(r)&&(r=y_(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Qf,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Zf(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+Sc(s,o);a+=nl(s,e,t,l,r)}else if(l=__(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+Sc(s,o++),a+=nl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function co(n,e,t){if(n==null)return n;var i=[],r=0;return nl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function S_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var en={current:null},il={transition:null},E_={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:il,ReactCurrentOwner:Hd};function m0(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:co,forEach:function(n,e,t){co(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return co(n,function(){e++}),e},toArray:function(n){return co(n,function(e){return e})||[]},only:function(n){if(!Vd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ye.Component=Ks;Ye.Fragment=c_;Ye.Profiler=d_;Ye.PureComponent=zd;Ye.StrictMode=u_;Ye.Suspense=m_;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E_;Ye.act=m0;Ye.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=c0({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Hd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)f0.call(e,l)&&!h0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:no,type:n.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(n){return n={$$typeof:h_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:f_,_context:n},n.Consumer=n};Ye.createElement=p0;Ye.createFactory=function(n){var e=p0.bind(null,n);return e.type=n,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(n){return{$$typeof:p_,render:n}};Ye.isValidElement=Vd;Ye.lazy=function(n){return{$$typeof:v_,_payload:{_status:-1,_result:n},_init:S_}};Ye.memo=function(n,e){return{$$typeof:g_,type:n,compare:e===void 0?null:e}};Ye.startTransition=function(n){var e=il.transition;il.transition={};try{n()}finally{il.transition=e}};Ye.unstable_act=m0;Ye.useCallback=function(n,e){return en.current.useCallback(n,e)};Ye.useContext=function(n){return en.current.useContext(n)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(n){return en.current.useDeferredValue(n)};Ye.useEffect=function(n,e){return en.current.useEffect(n,e)};Ye.useId=function(){return en.current.useId()};Ye.useImperativeHandle=function(n,e,t){return en.current.useImperativeHandle(n,e,t)};Ye.useInsertionEffect=function(n,e){return en.current.useInsertionEffect(n,e)};Ye.useLayoutEffect=function(n,e){return en.current.useLayoutEffect(n,e)};Ye.useMemo=function(n,e){return en.current.useMemo(n,e)};Ye.useReducer=function(n,e,t){return en.current.useReducer(n,e,t)};Ye.useRef=function(n){return en.current.useRef(n)};Ye.useState=function(n){return en.current.useState(n)};Ye.useSyncExternalStore=function(n,e,t){return en.current.useSyncExternalStore(n,e,t)};Ye.useTransition=function(){return en.current.useTransition()};Ye.version="18.3.1";o0.exports=Ye;var be=o0.exports;const E=o_(be);var g0={exports:{}},yn={},v0={exports:{}},_0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(O,F){var L=O.length;O.push(F);e:for(;0<L;){var V=L-1>>>1,ce=O[V];if(0<r(ce,F))O[V]=F,O[L]=ce,L=V;else break e}}function t(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var F=O[0],L=O.pop();if(L!==F){O[0]=L;e:for(var V=0,ce=O.length,ye=ce>>>1;V<ye;){var N=2*(V+1)-1,Z=O[N],ge=N+1,ue=O[ge];if(0>r(Z,L))ge<ce&&0>r(ue,Z)?(O[V]=ue,O[ge]=L,V=ge):(O[V]=Z,O[N]=L,V=N);else if(ge<ce&&0>r(ue,L))O[V]=ue,O[ge]=L,V=ge;else break e}}return F}function r(O,F){var L=O.sortIndex-F.sortIndex;return L!==0?L:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,u=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var F=t(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=O)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=t(c)}}function M(O){if(y=!1,v(O),!g)if(t(l)!==null)g=!0,ee(R);else{var F=t(c);F!==null&&ae(M,F.startTime-O)}}function R(O,F){g=!1,y&&(y=!1,d(I),I=-1),p=!0;var L=u;try{for(v(F),h=t(l);h!==null&&(!(h.expirationTime>F)||O&&!k());){var V=h.callback;if(typeof V=="function"){h.callback=null,u=h.priorityLevel;var ce=V(h.expirationTime<=F);F=n.unstable_now(),typeof ce=="function"?h.callback=ce:h===t(l)&&i(l),v(F)}else i(l);h=t(l)}if(h!==null)var ye=!0;else{var N=t(c);N!==null&&ae(M,N.startTime-F),ye=!1}return ye}finally{h=null,u=L,p=!1}}var C=!1,b=null,I=-1,T=5,S=-1;function k(){return!(n.unstable_now()-S<T)}function K(){if(b!==null){var O=n.unstable_now();S=O;var F=!0;try{F=b(!0,O)}finally{F?U():(C=!1,b=null)}}else C=!1}var U;if(typeof _=="function")U=function(){_(K)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,$=j.port2;j.port1.onmessage=K,U=function(){$.postMessage(null)}}else U=function(){m(K,0)};function ee(O){b=O,C||(C=!0,U())}function ae(O,F){I=m(function(){O(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,ee(R))},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return u},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(O){switch(u){case 1:case 2:case 3:var F=3;break;default:F=u}var L=u;u=F;try{return O()}finally{u=L}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var L=u;u=O;try{return F()}finally{u=L}},n.unstable_scheduleCallback=function(O,F,L){var V=n.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?V+L:V):L=V,O){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=L+ce,O={id:f++,callback:F,priorityLevel:O,startTime:L,expirationTime:ce,sortIndex:-1},L>V?(O.sortIndex=L,e(c,O),t(l)===null&&O===t(c)&&(y?(d(I),I=-1):y=!0,ae(M,L-V))):(O.sortIndex=ce,e(l,O),g||p||(g=!0,ee(R))),O},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(O){var F=u;return function(){var L=u;u=F;try{return O.apply(this,arguments)}finally{u=L}}}})(_0);v0.exports=_0;var M_=v0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_=be,_n=M_;function oe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y0=new Set,Fa={};function kr(n,e){Us(n,e),Us(n+"Capture",e)}function Us(n,e){for(Fa[n]=e,n=0;n<e.length;n++)y0.add(e[n])}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=Object.prototype.hasOwnProperty,T_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jf={},eh={};function A_(n){return ku.call(eh,n)?!0:ku.call(Jf,n)?!1:T_.test(n)?eh[n]=!0:(Jf[n]=!0,!1)}function b_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function C_(n,e,t,i){if(e===null||typeof e>"u"||b_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Bt[n]=new tn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Bt[e]=new tn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Bt[n]=new tn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Bt[n]=new tn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Bt[n]=new tn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Bt[n]=new tn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Bt[n]=new tn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Bt[n]=new tn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Bt[n]=new tn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Wd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Gd,Wd);Bt[e]=new tn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Gd,Wd);Bt[e]=new tn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Gd,Wd);Bt[e]=new tn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Bt[n]=new tn(n,1,!1,n.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Bt[n]=new tn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Xd(n,e,t,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(C_(e,t,r,i)&&(t=null),i||r===null?A_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ei=w_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),Fu=Symbol.for("react.profiler"),x0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),zu=Symbol.for("react.suspense"),Bu=Symbol.for("react.suspense_list"),qd=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),E0=Symbol.for("react.offscreen"),th=Symbol.iterator;function Js(n){return n===null||typeof n!="object"?null:(n=th&&n[th]||n["@@iterator"],typeof n=="function"?n:null)}var xt=Object.assign,Ec;function Sa(n){if(Ec===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+n}var Mc=!1;function wc(n,e){if(!n||Mc)return"";Mc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Mc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Sa(n):""}function R_(n){switch(n.tag){case 5:return Sa(n.type);case 16:return Sa("Lazy");case 13:return Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 2:case 15:return n=wc(n.type,!1),n;case 11:return n=wc(n.type.render,!1),n;case 1:return n=wc(n.type,!0),n;default:return""}}function Hu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ps:return"Fragment";case hs:return"Portal";case Fu:return"Profiler";case Kd:return"StrictMode";case zu:return"Suspense";case Bu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case S0:return(n.displayName||"Context")+".Consumer";case x0:return(n._context.displayName||"Context")+".Provider";case Yd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case qd:return e=n.displayName||null,e!==null?e:Hu(n.type)||"Memo";case Ui:e=n._payload,n=n._init;try{return Hu(n(e))}catch{}}return null}function P_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hu(e);case 8:return e===Kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function M0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function L_(n){var e=M0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function fo(n){n._valueTracker||(n._valueTracker=L_(n))}function w0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=M0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function gl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Vu(n,e){var t=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function nh(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=tr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function T0(n,e){e=e.checked,e!=null&&Xd(n,"checked",e,!1)}function Gu(n,e){T0(n,e);var t=tr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Wu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Wu(n,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function ih(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Wu(n,e,t){(e!=="number"||gl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ea=Array.isArray;function As(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+tr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Xu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function rh(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(oe(92));if(Ea(t)){if(1<t.length)throw Error(oe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:tr(t)}}function A0(n,e){var t=tr(e.value),i=tr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function sh(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function b0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?b0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ho,C0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ho.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function za(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D_=["Webkit","ms","Moz","O"];Object.keys(Aa).forEach(function(n){D_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Aa[e]=Aa[n]})});function R0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Aa.hasOwnProperty(n)&&Aa[n]?(""+e).trim():e+"px"}function P0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=R0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var N_=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(n,e){if(e){if(N_[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function qu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=null;function jd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var $u=null,bs=null,Cs=null;function ah(n){if(n=so(n)){if(typeof $u!="function")throw Error(oe(280));var e=n.stateNode;e&&(e=Jl(e),$u(n.stateNode,n.type,e))}}function L0(n){bs?Cs?Cs.push(n):Cs=[n]:bs=n}function D0(){if(bs){var n=bs,e=Cs;if(Cs=bs=null,ah(n),e)for(n=0;n<e.length;n++)ah(e[n])}}function N0(n,e){return n(e)}function I0(){}var Tc=!1;function U0(n,e,t){if(Tc)return n(e,t);Tc=!0;try{return N0(n,e,t)}finally{Tc=!1,(bs!==null||Cs!==null)&&(I0(),D0())}}function Ba(n,e){var t=n.stateNode;if(t===null)return null;var i=Jl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(oe(231,e,typeof t));return t}var Zu=!1;if(_i)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{Zu=!1}function I_(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(f){this.onError(f)}}var ba=!1,vl=null,_l=!1,Qu=null,U_={onError:function(n){ba=!0,vl=n}};function O_(n,e,t,i,r,s,a,o,l){ba=!1,vl=null,I_.apply(U_,arguments)}function k_(n,e,t,i,r,s,a,o,l){if(O_.apply(this,arguments),ba){if(ba){var c=vl;ba=!1,vl=null}else throw Error(oe(198));_l||(_l=!0,Qu=c)}}function Fr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function O0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function oh(n){if(Fr(n)!==n)throw Error(oe(188))}function F_(n){var e=n.alternate;if(!e){if(e=Fr(n),e===null)throw Error(oe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return oh(r),n;if(s===i)return oh(r),e;s=s.sibling}throw Error(oe(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(oe(189))}}if(t.alternate!==i)throw Error(oe(190))}if(t.tag!==3)throw Error(oe(188));return t.stateNode.current===t?n:e}function k0(n){return n=F_(n),n!==null?F0(n):null}function F0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=F0(n);if(e!==null)return e;n=n.sibling}return null}var z0=_n.unstable_scheduleCallback,lh=_n.unstable_cancelCallback,z_=_n.unstable_shouldYield,B_=_n.unstable_requestPaint,Et=_n.unstable_now,H_=_n.unstable_getCurrentPriorityLevel,$d=_n.unstable_ImmediatePriority,B0=_n.unstable_UserBlockingPriority,yl=_n.unstable_NormalPriority,V_=_n.unstable_LowPriority,H0=_n.unstable_IdlePriority,jl=null,ei=null;function G_(n){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(jl,n,void 0,(n.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:K_,W_=Math.log,X_=Math.LN2;function K_(n){return n>>>=0,n===0?32:31-(W_(n)/X_|0)|0}var po=64,mo=4194304;function Ma(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function xl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Ma(o):(s&=a,s!==0&&(i=Ma(s)))}else a=t&~r,a!==0?i=Ma(a):s!==0&&(i=Ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Wn(e),r=1<<t,i|=n[t],e&=~r;return i}function Y_(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q_(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-Wn(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=Y_(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Ju(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function V0(){var n=po;return po<<=1,!(po&4194240)&&(po=64),n}function Ac(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function io(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Wn(e),n[e]=t}function j_(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Wn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Zd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Wn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var nt=0;function G0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var W0,Qd,X0,K0,Y0,ed=!1,go=[],Wi=null,Xi=null,Ki=null,Ha=new Map,Va=new Map,Fi=[],$_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(n,e){switch(n){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":Ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(e.pointerId)}}function ta(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=so(e),e!==null&&Qd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Z_(n,e,t,i,r){switch(e){case"focusin":return Wi=ta(Wi,n,e,t,i,r),!0;case"dragenter":return Xi=ta(Xi,n,e,t,i,r),!0;case"mouseover":return Ki=ta(Ki,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ha.set(s,ta(Ha.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Va.set(s,ta(Va.get(s)||null,n,e,t,i,r)),!0}return!1}function q0(n){var e=Er(n.target);if(e!==null){var t=Fr(e);if(t!==null){if(e=t.tag,e===13){if(e=O0(t),e!==null){n.blockedOn=e,Y0(n.priority,function(){X0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function rl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=td(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);ju=i,t.target.dispatchEvent(i),ju=null}else return e=so(t),e!==null&&Qd(e),n.blockedOn=t,!1;e.shift()}return!0}function uh(n,e,t){rl(n)&&t.delete(e)}function Q_(){ed=!1,Wi!==null&&rl(Wi)&&(Wi=null),Xi!==null&&rl(Xi)&&(Xi=null),Ki!==null&&rl(Ki)&&(Ki=null),Ha.forEach(uh),Va.forEach(uh)}function na(n,e){n.blockedOn===e&&(n.blockedOn=null,ed||(ed=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,Q_)))}function Ga(n){function e(r){return na(r,n)}if(0<go.length){na(go[0],n);for(var t=1;t<go.length;t++){var i=go[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Wi!==null&&na(Wi,n),Xi!==null&&na(Xi,n),Ki!==null&&na(Ki,n),Ha.forEach(e),Va.forEach(e),t=0;t<Fi.length;t++)i=Fi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Fi.length&&(t=Fi[0],t.blockedOn===null);)q0(t),t.blockedOn===null&&Fi.shift()}var Rs=Ei.ReactCurrentBatchConfig,Sl=!0;function J_(n,e,t,i){var r=nt,s=Rs.transition;Rs.transition=null;try{nt=1,Jd(n,e,t,i)}finally{nt=r,Rs.transition=s}}function ey(n,e,t,i){var r=nt,s=Rs.transition;Rs.transition=null;try{nt=4,Jd(n,e,t,i)}finally{nt=r,Rs.transition=s}}function Jd(n,e,t,i){if(Sl){var r=td(n,e,t,i);if(r===null)Oc(n,e,i,El,t),ch(n,i);else if(Z_(r,n,e,t,i))i.stopPropagation();else if(ch(n,i),e&4&&-1<$_.indexOf(n)){for(;r!==null;){var s=so(r);if(s!==null&&W0(s),s=td(n,e,t,i),s===null&&Oc(n,e,i,El,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Oc(n,e,i,null,t)}}var El=null;function td(n,e,t,i){if(El=null,n=jd(i),n=Er(n),n!==null)if(e=Fr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=O0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return El=n,null}function j0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H_()){case $d:return 1;case B0:return 4;case yl:case V_:return 16;case H0:return 536870912;default:return 16}default:return 16}}var Hi=null,ef=null,sl=null;function $0(){if(sl)return sl;var n,e=ef,t=e.length,i,r="value"in Hi?Hi.value:Hi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return sl=r.slice(n,1<i?1-i:void 0)}function al(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function vo(){return!0}function dh(){return!1}function xn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vo:dh,this.isPropagationStopped=dh,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),e}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=xn(Ys),ro=xt({},Ys,{view:0,detail:0}),ty=xn(ro),bc,Cc,ia,$l=xt({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ia&&(ia&&n.type==="mousemove"?(bc=n.screenX-ia.screenX,Cc=n.screenY-ia.screenY):Cc=bc=0,ia=n),bc)},movementY:function(n){return"movementY"in n?n.movementY:Cc}}),fh=xn($l),ny=xt({},$l,{dataTransfer:0}),iy=xn(ny),ry=xt({},ro,{relatedTarget:0}),Rc=xn(ry),sy=xt({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=xn(sy),oy=xt({},Ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ly=xn(oy),cy=xt({},Ys,{data:0}),hh=xn(cy),uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=fy[n])?!!e[n]:!1}function nf(){return hy}var py=xt({},ro,{key:function(n){if(n.key){var e=uy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=al(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(n){return n.type==="keypress"?al(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?al(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),my=xn(py),gy=xt({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=xn(gy),vy=xt({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),_y=xn(vy),yy=xt({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),xy=xn(yy),Sy=xt({},$l,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ey=xn(Sy),My=[9,13,27,32],rf=_i&&"CompositionEvent"in window,Ca=null;_i&&"documentMode"in document&&(Ca=document.documentMode);var wy=_i&&"TextEvent"in window&&!Ca,Z0=_i&&(!rf||Ca&&8<Ca&&11>=Ca),mh=" ",gh=!1;function Q0(n,e){switch(n){case"keyup":return My.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function Ty(n,e){switch(n){case"compositionend":return J0(e);case"keypress":return e.which!==32?null:(gh=!0,mh);case"textInput":return n=e.data,n===mh&&gh?null:n;default:return null}}function Ay(n,e){if(ms)return n==="compositionend"||!rf&&Q0(n,e)?(n=$0(),sl=ef=Hi=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Z0&&e.locale!=="ko"?null:e.data;default:return null}}var by={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!by[n.type]:e==="textarea"}function eg(n,e,t,i){L0(i),e=Ml(e,"onChange"),0<e.length&&(t=new tf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ra=null,Wa=null;function Cy(n){dg(n,0)}function Zl(n){var e=_s(n);if(w0(e))return n}function Ry(n,e){if(n==="change")return e}var tg=!1;if(_i){var Pc;if(_i){var Lc="oninput"in document;if(!Lc){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),Lc=typeof _h.oninput=="function"}Pc=Lc}else Pc=!1;tg=Pc&&(!document.documentMode||9<document.documentMode)}function yh(){Ra&&(Ra.detachEvent("onpropertychange",ng),Wa=Ra=null)}function ng(n){if(n.propertyName==="value"&&Zl(Wa)){var e=[];eg(e,Wa,n,jd(n)),U0(Cy,e)}}function Py(n,e,t){n==="focusin"?(yh(),Ra=e,Wa=t,Ra.attachEvent("onpropertychange",ng)):n==="focusout"&&yh()}function Ly(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Zl(Wa)}function Dy(n,e){if(n==="click")return Zl(e)}function Ny(n,e){if(n==="input"||n==="change")return Zl(e)}function Iy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Kn=typeof Object.is=="function"?Object.is:Iy;function Xa(n,e){if(Kn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ku.call(e,r)||!Kn(n[r],e[r]))return!1}return!0}function xh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sh(n,e){var t=xh(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xh(t)}}function ig(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?ig(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function rg(){for(var n=window,e=gl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=gl(n.document)}return e}function sf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Uy(n){var e=rg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&ig(t.ownerDocument.documentElement,t)){if(i!==null&&sf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Sh(t,s);var a=Sh(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Oy=_i&&"documentMode"in document&&11>=document.documentMode,gs=null,nd=null,Pa=null,id=!1;function Eh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;id||gs==null||gs!==gl(i)||(i=gs,"selectionStart"in i&&sf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pa&&Xa(Pa,i)||(Pa=i,i=Ml(nd,"onSelect"),0<i.length&&(e=new tf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=gs)))}function _o(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var vs={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},Dc={},sg={};_i&&(sg=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Ql(n){if(Dc[n])return Dc[n];if(!vs[n])return n;var e=vs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in sg)return Dc[n]=e[t];return n}var ag=Ql("animationend"),og=Ql("animationiteration"),lg=Ql("animationstart"),cg=Ql("transitionend"),ug=new Map,Mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(n,e){ug.set(n,e),kr(e,[n])}for(var Nc=0;Nc<Mh.length;Nc++){var Ic=Mh[Nc],ky=Ic.toLowerCase(),Fy=Ic[0].toUpperCase()+Ic.slice(1);ar(ky,"on"+Fy)}ar(ag,"onAnimationEnd");ar(og,"onAnimationIteration");ar(lg,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(cg,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zy=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function wh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,k_(i,e,void 0,n),n.currentTarget=null}function dg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;wh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;wh(r,o,c),s=l}}}if(_l)throw n=Qu,_l=!1,Qu=null,n}function ut(n,e){var t=e[ld];t===void 0&&(t=e[ld]=new Set);var i=n+"__bubble";t.has(i)||(fg(e,n,2,!1),t.add(i))}function Uc(n,e,t){var i=0;e&&(i|=4),fg(t,n,i,e)}var yo="_reactListening"+Math.random().toString(36).slice(2);function Ka(n){if(!n[yo]){n[yo]=!0,y0.forEach(function(t){t!=="selectionchange"&&(zy.has(t)||Uc(t,!1,n),Uc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[yo]||(e[yo]=!0,Uc("selectionchange",!1,e))}}function fg(n,e,t,i){switch(j0(e)){case 1:var r=J_;break;case 4:r=ey;break;default:r=Jd}t=r.bind(null,e,t,n),r=void 0,!Zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Oc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Er(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}U0(function(){var c=s,f=jd(t),h=[];e:{var u=ug.get(n);if(u!==void 0){var p=tf,g=n;switch(n){case"keypress":if(al(t)===0)break e;case"keydown":case"keyup":p=my;break;case"focusin":g="focus",p=Rc;break;case"focusout":g="blur",p=Rc;break;case"beforeblur":case"afterblur":p=Rc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_y;break;case ag:case og:case lg:p=ay;break;case cg:p=xy;break;case"scroll":p=ty;break;case"wheel":p=Ey;break;case"copy":case"cut":case"paste":p=ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ph}var y=(e&4)!==0,m=!y&&n==="scroll",d=y?u!==null?u+"Capture":null:u;y=[];for(var _=c,v;_!==null;){v=_;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,d!==null&&(M=Ba(_,d),M!=null&&y.push(Ya(_,M,v)))),m)break;_=_.return}0<y.length&&(u=new p(u,g,null,t,f),h.push({event:u,listeners:y}))}}if(!(e&7)){e:{if(u=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",u&&t!==ju&&(g=t.relatedTarget||t.fromElement)&&(Er(g)||g[yi]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Er(g):null,g!==null&&(m=Fr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=fh,M="onMouseLeave",d="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(y=ph,M="onPointerLeave",d="onPointerEnter",_="pointer"),m=p==null?u:_s(p),v=g==null?u:_s(g),u=new y(M,_+"leave",p,t,f),u.target=m,u.relatedTarget=v,M=null,Er(f)===c&&(y=new y(d,_+"enter",g,t,f),y.target=v,y.relatedTarget=m,M=y),m=M,p&&g)t:{for(y=p,d=g,_=0,v=y;v;v=Vr(v))_++;for(v=0,M=d;M;M=Vr(M))v++;for(;0<_-v;)y=Vr(y),_--;for(;0<v-_;)d=Vr(d),v--;for(;_--;){if(y===d||d!==null&&y===d.alternate)break t;y=Vr(y),d=Vr(d)}y=null}else y=null;p!==null&&Th(h,u,p,y,!1),g!==null&&m!==null&&Th(h,m,g,y,!0)}}e:{if(u=c?_s(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var R=Ry;else if(vh(u))if(tg)R=Ny;else{R=Ly;var C=Py}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(R=Dy);if(R&&(R=R(n,c))){eg(h,R,t,f);break e}C&&C(n,u,c),n==="focusout"&&(C=u._wrapperState)&&C.controlled&&u.type==="number"&&Wu(u,"number",u.value)}switch(C=c?_s(c):window,n){case"focusin":(vh(C)||C.contentEditable==="true")&&(gs=C,nd=c,Pa=null);break;case"focusout":Pa=nd=gs=null;break;case"mousedown":id=!0;break;case"contextmenu":case"mouseup":case"dragend":id=!1,Eh(h,t,f);break;case"selectionchange":if(Oy)break;case"keydown":case"keyup":Eh(h,t,f)}var b;if(rf)e:{switch(n){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ms?Q0(n,t)&&(I="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(Z0&&t.locale!=="ko"&&(ms||I!=="onCompositionStart"?I==="onCompositionEnd"&&ms&&(b=$0()):(Hi=f,ef="value"in Hi?Hi.value:Hi.textContent,ms=!0)),C=Ml(c,I),0<C.length&&(I=new hh(I,n,null,t,f),h.push({event:I,listeners:C}),b?I.data=b:(b=J0(t),b!==null&&(I.data=b)))),(b=wy?Ty(n,t):Ay(n,t))&&(c=Ml(c,"onBeforeInput"),0<c.length&&(f=new hh("onBeforeInput","beforeinput",null,t,f),h.push({event:f,listeners:c}),f.data=b))}dg(h,e)})}function Ya(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ml(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ba(n,t),s!=null&&i.unshift(Ya(n,s,r)),s=Ba(n,e),s!=null&&i.push(Ya(n,s,r))),n=n.return}return i}function Vr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Th(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ba(t,s),l!=null&&a.unshift(Ya(t,l,o))):r||(l=Ba(t,s),l!=null&&a.push(Ya(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var By=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function Ah(n){return(typeof n=="string"?n:""+n).replace(By,`
`).replace(Hy,"")}function xo(n,e,t){if(e=Ah(e),Ah(n)!==e&&t)throw Error(oe(425))}function wl(){}var rd=null,sd=null;function ad(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var od=typeof setTimeout=="function"?setTimeout:void 0,Vy=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(n){return bh.resolve(null).then(n).catch(Wy)}:od;function Wy(n){setTimeout(function(){throw n})}function kc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ga(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ga(e)}function Yi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Ch(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var qs=Math.random().toString(36).slice(2),Zn="__reactFiber$"+qs,qa="__reactProps$"+qs,yi="__reactContainer$"+qs,ld="__reactEvents$"+qs,Xy="__reactListeners$"+qs,Ky="__reactHandles$"+qs;function Er(n){var e=n[Zn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[yi]||t[Zn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ch(n);n!==null;){if(t=n[Zn])return t;n=Ch(n)}return e}n=t,t=n.parentNode}return null}function so(n){return n=n[Zn]||n[yi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(oe(33))}function Jl(n){return n[qa]||null}var cd=[],ys=-1;function or(n){return{current:n}}function ft(n){0>ys||(n.current=cd[ys],cd[ys]=null,ys--)}function ot(n,e){ys++,cd[ys]=n.current,n.current=e}var nr={},qt=or(nr),an=or(!1),Rr=nr;function Os(n,e){var t=n.type.contextTypes;if(!t)return nr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function on(n){return n=n.childContextTypes,n!=null}function Tl(){ft(an),ft(qt)}function Rh(n,e,t){if(qt.current!==nr)throw Error(oe(168));ot(qt,e),ot(an,t)}function hg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,P_(n)||"Unknown",r));return xt({},t,i)}function Al(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||nr,Rr=qt.current,ot(qt,n),ot(an,an.current),!0}function Ph(n,e,t){var i=n.stateNode;if(!i)throw Error(oe(169));t?(n=hg(n,e,Rr),i.__reactInternalMemoizedMergedChildContext=n,ft(an),ft(qt),ot(qt,n)):ft(an),ot(an,t)}var fi=null,ec=!1,Fc=!1;function pg(n){fi===null?fi=[n]:fi.push(n)}function Yy(n){ec=!0,pg(n)}function lr(){if(!Fc&&fi!==null){Fc=!0;var n=0,e=nt;try{var t=fi;for(nt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}fi=null,ec=!1}catch(r){throw fi!==null&&(fi=fi.slice(n+1)),z0($d,lr),r}finally{nt=e,Fc=!1}}return null}var xs=[],Ss=0,bl=null,Cl=0,Tn=[],An=0,Pr=null,pi=1,mi="";function vr(n,e){xs[Ss++]=Cl,xs[Ss++]=bl,bl=n,Cl=e}function mg(n,e,t){Tn[An++]=pi,Tn[An++]=mi,Tn[An++]=Pr,Pr=n;var i=pi;n=mi;var r=32-Wn(i)-1;i&=~(1<<r),t+=1;var s=32-Wn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,pi=1<<32-Wn(e)+r|t<<r|i,mi=s+n}else pi=1<<s|t<<r|i,mi=n}function af(n){n.return!==null&&(vr(n,1),mg(n,1,0))}function of(n){for(;n===bl;)bl=xs[--Ss],xs[Ss]=null,Cl=xs[--Ss],xs[Ss]=null;for(;n===Pr;)Pr=Tn[--An],Tn[An]=null,mi=Tn[--An],Tn[An]=null,pi=Tn[--An],Tn[An]=null}var vn=null,gn=null,mt=!1,Hn=null;function gg(n,e){var t=bn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Lh(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,vn=n,gn=Yi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,vn=n,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Pr!==null?{id:pi,overflow:mi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=bn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,vn=n,gn=null,!0):!1;default:return!1}}function ud(n){return(n.mode&1)!==0&&(n.flags&128)===0}function dd(n){if(mt){var e=gn;if(e){var t=e;if(!Lh(n,e)){if(ud(n))throw Error(oe(418));e=Yi(t.nextSibling);var i=vn;e&&Lh(n,e)?gg(i,t):(n.flags=n.flags&-4097|2,mt=!1,vn=n)}}else{if(ud(n))throw Error(oe(418));n.flags=n.flags&-4097|2,mt=!1,vn=n}}}function Dh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;vn=n}function So(n){if(n!==vn)return!1;if(!mt)return Dh(n),mt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ad(n.type,n.memoizedProps)),e&&(e=gn)){if(ud(n))throw vg(),Error(oe(418));for(;e;)gg(n,e),e=Yi(e.nextSibling)}if(Dh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(oe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){gn=Yi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}gn=null}}else gn=vn?Yi(n.stateNode.nextSibling):null;return!0}function vg(){for(var n=gn;n;)n=Yi(n.nextSibling)}function ks(){gn=vn=null,mt=!1}function lf(n){Hn===null?Hn=[n]:Hn.push(n)}var qy=Ei.ReactCurrentBatchConfig;function ra(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(oe(309));var i=t.stateNode}if(!i)throw Error(oe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(oe(284));if(!t._owner)throw Error(oe(290,n))}return n}function Eo(n,e){throw n=Object.prototype.toString.call(e),Error(oe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Nh(n){var e=n._init;return e(n._payload)}function _g(n){function e(d,_){if(n){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function t(d,_){if(!n)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=Zi(d,_),d.index=0,d.sibling=null,d}function s(d,_,v){return d.index=v,n?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function a(d){return n&&d.alternate===null&&(d.flags|=2),d}function o(d,_,v,M){return _===null||_.tag!==6?(_=Xc(v,d.mode,M),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,M){var R=v.type;return R===ps?f(d,_,v.props.children,M,v.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ui&&Nh(R)===_.type)?(M=r(_,v.props),M.ref=ra(d,_,v),M.return=d,M):(M=hl(v.type,v.key,v.props,null,d.mode,M),M.ref=ra(d,_,v),M.return=d,M)}function c(d,_,v,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Kc(v,d.mode,M),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function f(d,_,v,M,R){return _===null||_.tag!==7?(_=Cr(v,d.mode,M,R),_.return=d,_):(_=r(_,v),_.return=d,_)}function h(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Xc(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case uo:return v=hl(_.type,_.key,_.props,null,d.mode,v),v.ref=ra(d,null,_),v.return=d,v;case hs:return _=Kc(_,d.mode,v),_.return=d,_;case Ui:var M=_._init;return h(d,M(_._payload),v)}if(Ea(_)||Js(_))return _=Cr(_,d.mode,v,null),_.return=d,_;Eo(d,_)}return null}function u(d,_,v,M){var R=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:o(d,_,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case uo:return v.key===R?l(d,_,v,M):null;case hs:return v.key===R?c(d,_,v,M):null;case Ui:return R=v._init,u(d,_,R(v._payload),M)}if(Ea(v)||Js(v))return R!==null?null:f(d,_,v,M,null);Eo(d,v)}return null}function p(d,_,v,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(v)||null,o(_,d,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case uo:return d=d.get(M.key===null?v:M.key)||null,l(_,d,M,R);case hs:return d=d.get(M.key===null?v:M.key)||null,c(_,d,M,R);case Ui:var C=M._init;return p(d,_,v,C(M._payload),R)}if(Ea(M)||Js(M))return d=d.get(v)||null,f(_,d,M,R,null);Eo(_,M)}return null}function g(d,_,v,M){for(var R=null,C=null,b=_,I=_=0,T=null;b!==null&&I<v.length;I++){b.index>I?(T=b,b=null):T=b.sibling;var S=u(d,b,v[I],M);if(S===null){b===null&&(b=T);break}n&&b&&S.alternate===null&&e(d,b),_=s(S,_,I),C===null?R=S:C.sibling=S,C=S,b=T}if(I===v.length)return t(d,b),mt&&vr(d,I),R;if(b===null){for(;I<v.length;I++)b=h(d,v[I],M),b!==null&&(_=s(b,_,I),C===null?R=b:C.sibling=b,C=b);return mt&&vr(d,I),R}for(b=i(d,b);I<v.length;I++)T=p(b,d,I,v[I],M),T!==null&&(n&&T.alternate!==null&&b.delete(T.key===null?I:T.key),_=s(T,_,I),C===null?R=T:C.sibling=T,C=T);return n&&b.forEach(function(k){return e(d,k)}),mt&&vr(d,I),R}function y(d,_,v,M){var R=Js(v);if(typeof R!="function")throw Error(oe(150));if(v=R.call(v),v==null)throw Error(oe(151));for(var C=R=null,b=_,I=_=0,T=null,S=v.next();b!==null&&!S.done;I++,S=v.next()){b.index>I?(T=b,b=null):T=b.sibling;var k=u(d,b,S.value,M);if(k===null){b===null&&(b=T);break}n&&b&&k.alternate===null&&e(d,b),_=s(k,_,I),C===null?R=k:C.sibling=k,C=k,b=T}if(S.done)return t(d,b),mt&&vr(d,I),R;if(b===null){for(;!S.done;I++,S=v.next())S=h(d,S.value,M),S!==null&&(_=s(S,_,I),C===null?R=S:C.sibling=S,C=S);return mt&&vr(d,I),R}for(b=i(d,b);!S.done;I++,S=v.next())S=p(b,d,I,S.value,M),S!==null&&(n&&S.alternate!==null&&b.delete(S.key===null?I:S.key),_=s(S,_,I),C===null?R=S:C.sibling=S,C=S);return n&&b.forEach(function(K){return e(d,K)}),mt&&vr(d,I),R}function m(d,_,v,M){if(typeof v=="object"&&v!==null&&v.type===ps&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case uo:e:{for(var R=v.key,C=_;C!==null;){if(C.key===R){if(R=v.type,R===ps){if(C.tag===7){t(d,C.sibling),_=r(C,v.props.children),_.return=d,d=_;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ui&&Nh(R)===C.type){t(d,C.sibling),_=r(C,v.props),_.ref=ra(d,C,v),_.return=d,d=_;break e}t(d,C);break}else e(d,C);C=C.sibling}v.type===ps?(_=Cr(v.props.children,d.mode,M,v.key),_.return=d,d=_):(M=hl(v.type,v.key,v.props,null,d.mode,M),M.ref=ra(d,_,v),M.return=d,d=M)}return a(d);case hs:e:{for(C=v.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{t(d,_);break}else e(d,_);_=_.sibling}_=Kc(v,d.mode,M),_.return=d,d=_}return a(d);case Ui:return C=v._init,m(d,_,C(v._payload),M)}if(Ea(v))return g(d,_,v,M);if(Js(v))return y(d,_,v,M);Eo(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(d,_.sibling),_=r(_,v),_.return=d,d=_):(t(d,_),_=Xc(v,d.mode,M),_.return=d,d=_),a(d)):t(d,_)}return m}var Fs=_g(!0),yg=_g(!1),Rl=or(null),Pl=null,Es=null,cf=null;function uf(){cf=Es=Pl=null}function df(n){var e=Rl.current;ft(Rl),n._currentValue=e}function fd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ps(n,e){Pl=n,cf=Es=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(sn=!0),n.firstContext=null)}function Ln(n){var e=n._currentValue;if(cf!==n)if(n={context:n,memoizedValue:e,next:null},Es===null){if(Pl===null)throw Error(oe(308));Es=n,Pl.dependencies={lanes:0,firstContext:n}}else Es=Es.next=n;return e}var Mr=null;function ff(n){Mr===null?Mr=[n]:Mr.push(n)}function xg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,ff(e)):(t.next=r.next,r.next=t),e.interleaved=t,xi(n,i)}function xi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Oi=!1;function hf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(n,t)}return r=i.interleaved,r===null?(e.next=e,ff(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(n,t)}function ol(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Zd(n,t)}}function Ih(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ll(n,e,t,i){var r=n.updateQueue;Oi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=n.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var u=o.lane,p=o.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=n,y=o;switch(u=e,p=t,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,u);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,u=typeof g=="function"?g.call(p,h,u):g,u==null)break e;h=xt({},h,u);break e;case 2:Oi=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else p={eventTime:p,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Dr|=a,n.lanes=a,n.memoizedState=h}}function Uh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var ao={},ti=or(ao),ja=or(ao),$a=or(ao);function wr(n){if(n===ao)throw Error(oe(174));return n}function pf(n,e){switch(ot($a,e),ot(ja,n),ot(ti,ao),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ku(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ku(e,n)}ft(ti),ot(ti,e)}function zs(){ft(ti),ft(ja),ft($a)}function Eg(n){wr($a.current);var e=wr(ti.current),t=Ku(e,n.type);e!==t&&(ot(ja,n),ot(ti,t))}function mf(n){ja.current===n&&(ft(ti),ft(ja))}var _t=or(0);function Dl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zc=[];function gf(){for(var n=0;n<zc.length;n++)zc[n]._workInProgressVersionPrimary=null;zc.length=0}var ll=Ei.ReactCurrentDispatcher,Bc=Ei.ReactCurrentBatchConfig,Lr=0,yt=null,bt=null,It=null,Nl=!1,La=!1,Za=0,jy=0;function Gt(){throw Error(oe(321))}function vf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Kn(n[t],e[t]))return!1;return!0}function _f(n,e,t,i,r,s){if(Lr=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=n===null||n.memoizedState===null?Jy:ex,n=t(i,r),La){s=0;do{if(La=!1,Za=0,25<=s)throw Error(oe(301));s+=1,It=bt=null,e.updateQueue=null,ll.current=tx,n=t(i,r)}while(La)}if(ll.current=Il,e=bt!==null&&bt.next!==null,Lr=0,It=bt=yt=null,Nl=!1,e)throw Error(oe(300));return n}function yf(){var n=Za!==0;return Za=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?yt.memoizedState=It=n:It=It.next=n,It}function Dn(){if(bt===null){var n=yt.alternate;n=n!==null?n.memoizedState:null}else n=bt.next;var e=It===null?yt.memoizedState:It.next;if(e!==null)It=e,bt=n;else{if(n===null)throw Error(oe(310));bt=n,n={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},It===null?yt.memoizedState=It=n:It=It.next=n}return It}function Qa(n,e){return typeof e=="function"?e(n):e}function Hc(n){var e=Dn(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=bt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Lr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,yt.lanes|=f,Dr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Kn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,yt.lanes|=s,Dr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Vc(n){var e=Dn(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);Kn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Mg(){}function wg(n,e){var t=yt,i=Dn(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,xf(bg.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(t.flags|=2048,Ja(9,Ag.bind(null,t,i,r,e),void 0,null),Ot===null)throw Error(oe(349));Lr&30||Tg(t,e,r)}return r}function Tg(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ag(n,e,t,i){e.value=t,e.getSnapshot=i,Cg(e)&&Rg(n)}function bg(n,e,t){return t(function(){Cg(e)&&Rg(n)})}function Cg(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Kn(n,t)}catch{return!0}}function Rg(n){var e=xi(n,1);e!==null&&Xn(e,n,1,-1)}function Oh(n){var e=qn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:n},e.queue=n,n=n.dispatch=Qy.bind(null,yt,n),[e.memoizedState,n]}function Ja(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Pg(){return Dn().memoizedState}function cl(n,e,t,i){var r=qn();yt.flags|=n,r.memoizedState=Ja(1|e,t,void 0,i===void 0?null:i)}function tc(n,e,t,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&vf(i,a.deps)){r.memoizedState=Ja(e,t,s,i);return}}yt.flags|=n,r.memoizedState=Ja(1|e,t,s,i)}function kh(n,e){return cl(8390656,8,n,e)}function xf(n,e){return tc(2048,8,n,e)}function Lg(n,e){return tc(4,2,n,e)}function Dg(n,e){return tc(4,4,n,e)}function Ng(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Ig(n,e,t){return t=t!=null?t.concat([n]):null,tc(4,4,Ng.bind(null,e,n),t)}function Sf(){}function Ug(n,e){var t=Dn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&vf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Og(n,e){var t=Dn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&vf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function kg(n,e,t){return Lr&21?(Kn(t,e)||(t=V0(),yt.lanes|=t,Dr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,sn=!0),n.memoizedState=t)}function $y(n,e){var t=nt;nt=t!==0&&4>t?t:4,n(!0);var i=Bc.transition;Bc.transition={};try{n(!1),e()}finally{nt=t,Bc.transition=i}}function Fg(){return Dn().memoizedState}function Zy(n,e,t){var i=$i(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},zg(n))Bg(e,t);else if(t=xg(n,e,t,i),t!==null){var r=Qt();Xn(t,n,i,r),Hg(t,e,i)}}function Qy(n,e,t){var i=$i(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(zg(n))Bg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,Kn(o,a)){var l=e.interleaved;l===null?(r.next=r,ff(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=xg(n,e,r,i),t!==null&&(r=Qt(),Xn(t,n,i,r),Hg(t,e,i))}}function zg(n){var e=n.alternate;return n===yt||e!==null&&e===yt}function Bg(n,e){La=Nl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Hg(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Zd(n,t)}}var Il={readContext:Ln,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},Jy={readContext:Ln,useCallback:function(n,e){return qn().memoizedState=[n,e===void 0?null:e],n},useContext:Ln,useEffect:kh,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,cl(4194308,4,Ng.bind(null,e,n),t)},useLayoutEffect:function(n,e){return cl(4194308,4,n,e)},useInsertionEffect:function(n,e){return cl(4,2,n,e)},useMemo:function(n,e){var t=qn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=qn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Zy.bind(null,yt,n),[i.memoizedState,n]},useRef:function(n){var e=qn();return n={current:n},e.memoizedState=n},useState:Oh,useDebugValue:Sf,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=Oh(!1),e=n[0];return n=$y.bind(null,n[1]),qn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=yt,r=qn();if(mt){if(t===void 0)throw Error(oe(407));t=t()}else{if(t=e(),Ot===null)throw Error(oe(349));Lr&30||Tg(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,kh(bg.bind(null,i,s,n),[n]),i.flags|=2048,Ja(9,Ag.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=qn(),e=Ot.identifierPrefix;if(mt){var t=mi,i=pi;t=(i&~(1<<32-Wn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Za++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=jy++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},ex={readContext:Ln,useCallback:Ug,useContext:Ln,useEffect:xf,useImperativeHandle:Ig,useInsertionEffect:Lg,useLayoutEffect:Dg,useMemo:Og,useReducer:Hc,useRef:Pg,useState:function(){return Hc(Qa)},useDebugValue:Sf,useDeferredValue:function(n){var e=Dn();return kg(e,bt.memoizedState,n)},useTransition:function(){var n=Hc(Qa)[0],e=Dn().memoizedState;return[n,e]},useMutableSource:Mg,useSyncExternalStore:wg,useId:Fg,unstable_isNewReconciler:!1},tx={readContext:Ln,useCallback:Ug,useContext:Ln,useEffect:xf,useImperativeHandle:Ig,useInsertionEffect:Lg,useLayoutEffect:Dg,useMemo:Og,useReducer:Vc,useRef:Pg,useState:function(){return Vc(Qa)},useDebugValue:Sf,useDeferredValue:function(n){var e=Dn();return bt===null?e.memoizedState=n:kg(e,bt.memoizedState,n)},useTransition:function(){var n=Vc(Qa)[0],e=Dn().memoizedState;return[n,e]},useMutableSource:Mg,useSyncExternalStore:wg,useId:Fg,unstable_isNewReconciler:!1};function Fn(n,e){if(n&&n.defaultProps){e=xt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function hd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:xt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var nc={isMounted:function(n){return(n=n._reactInternals)?Fr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Qt(),r=$i(n),s=vi(i,r);s.payload=e,t!=null&&(s.callback=t),e=qi(n,s,r),e!==null&&(Xn(e,n,r,i),ol(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Qt(),r=$i(n),s=vi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=qi(n,s,r),e!==null&&(Xn(e,n,r,i),ol(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Qt(),i=$i(n),r=vi(t,i);r.tag=2,e!=null&&(r.callback=e),e=qi(n,r,i),e!==null&&(Xn(e,n,i,t),ol(e,n,i))}};function Fh(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Xa(t,i)||!Xa(r,s):!0}function Vg(n,e,t){var i=!1,r=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=on(e)?Rr:qt.current,i=e.contextTypes,s=(i=i!=null)?Os(n,r):nr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function zh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&nc.enqueueReplaceState(e,e.state,null)}function pd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},hf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=on(e)?Rr:qt.current,r.context=Os(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&nc.enqueueReplaceState(r,r.state,null),Ll(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Bs(n,e){try{var t="",i=e;do t+=R_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Gc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function md(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var nx=typeof WeakMap=="function"?WeakMap:Map;function Gg(n,e,t){t=vi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ol||(Ol=!0,Td=i),md(n,e)},t}function Wg(n,e,t){t=vi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){md(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){md(n,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Bh(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new nx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=gx.bind(null,n,e,t),e.then(n,n))}function Hh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Vh(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=vi(-1,1),e.tag=2,qi(t,e,1))),t.lanes|=1),n)}var ix=Ei.ReactCurrentOwner,sn=!1;function Zt(n,e,t,i){e.child=n===null?yg(e,null,t,i):Fs(e,n.child,t,i)}function Gh(n,e,t,i,r){t=t.render;var s=e.ref;return Ps(e,r),i=_f(n,e,t,i,s,r),t=yf(),n!==null&&!sn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Si(n,e,r)):(mt&&t&&af(e),e.flags|=1,Zt(n,e,i,r),e.child)}function Wh(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Rf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Xg(n,e,s,i,r)):(n=hl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:Xa,t(a,i)&&n.ref===e.ref)return Si(n,e,r)}return e.flags|=1,n=Zi(s,i),n.ref=e.ref,n.return=e,e.child=n}function Xg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Xa(s,i)&&n.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(sn=!0);else return e.lanes=n.lanes,Si(n,e,r)}return gd(n,e,t,i,r)}function Kg(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(ws,pn),pn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ot(ws,pn),pn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ot(ws,pn),pn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ot(ws,pn),pn|=i;return Zt(n,e,r,t),e.child}function Yg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function gd(n,e,t,i,r){var s=on(t)?Rr:qt.current;return s=Os(e,s),Ps(e,r),t=_f(n,e,t,i,s,r),i=yf(),n!==null&&!sn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Si(n,e,r)):(mt&&i&&af(e),e.flags|=1,Zt(n,e,t,r),e.child)}function Xh(n,e,t,i,r){if(on(t)){var s=!0;Al(e)}else s=!1;if(Ps(e,r),e.stateNode===null)ul(n,e),Vg(e,t,i),pd(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ln(c):(c=on(t)?Rr:qt.current,c=Os(e,c));var f=t.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&zh(e,a,i,c),Oi=!1;var u=e.memoizedState;a.state=u,Ll(e,i,a,r),l=e.memoizedState,o!==i||u!==l||an.current||Oi?(typeof f=="function"&&(hd(e,t,f,i),l=e.memoizedState),(o=Oi||Fh(e,t,o,i,u,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Sg(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:Fn(e.type,o),a.props=c,h=e.pendingProps,u=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=on(t)?Rr:qt.current,l=Os(e,l));var p=t.getDerivedStateFromProps;(f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||u!==l)&&zh(e,a,i,l),Oi=!1,u=e.memoizedState,a.state=u,Ll(e,i,a,r);var g=e.memoizedState;o!==h||u!==g||an.current||Oi?(typeof p=="function"&&(hd(e,t,p,i),g=e.memoizedState),(c=Oi||Fh(e,t,c,i,u,g,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&u===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&u===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&u===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&u===n.memoizedState||(e.flags|=1024),i=!1)}return vd(n,e,t,i,s,r)}function vd(n,e,t,i,r,s){Yg(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Ph(e,t,!1),Si(n,e,s);i=e.stateNode,ix.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=Fs(e,n.child,null,s),e.child=Fs(e,null,o,s)):Zt(n,e,o,s),e.memoizedState=i.state,r&&Ph(e,t,!0),e.child}function qg(n){var e=n.stateNode;e.pendingContext?Rh(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Rh(n,e.context,!1),pf(n,e.containerInfo)}function Kh(n,e,t,i,r){return ks(),lf(r),e.flags|=256,Zt(n,e,t,i),e.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function yd(n){return{baseLanes:n,cachePool:null,transitions:null}}function jg(n,e,t){var i=e.pendingProps,r=_t.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ot(_t,r&1),n===null)return dd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=sc(a,i,0,null),n=Cr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=yd(t),e.memoizedState=_d,n):Ef(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return rx(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Zi(o,s):(s=Cr(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?yd(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=_d,i}return s=n.child,n=s.sibling,i=Zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Ef(n,e){return e=sc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Mo(n,e,t,i){return i!==null&&lf(i),Fs(e,n.child,null,t),n=Ef(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function rx(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=Gc(Error(oe(422))),Mo(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=sc({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Fs(e,n.child,null,a),e.child.memoizedState=yd(a),e.memoizedState=_d,s);if(!(e.mode&1))return Mo(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(oe(419)),i=Gc(s,i,void 0),Mo(n,e,a,i)}if(o=(a&n.childLanes)!==0,sn||o){if(i=Ot,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(n,r),Xn(i,n,r,-1))}return Cf(),i=Gc(Error(oe(421))),Mo(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=vx.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,gn=Yi(r.nextSibling),vn=e,mt=!0,Hn=null,n!==null&&(Tn[An++]=pi,Tn[An++]=mi,Tn[An++]=Pr,pi=n.id,mi=n.overflow,Pr=e),e=Ef(e,i.children),e.flags|=4096,e)}function Yh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),fd(n.return,e,t)}function Wc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function $g(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(n,e,i.children,t),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yh(n,t,e);else if(n.tag===19)Yh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ot(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Dl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Wc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Dl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Wc(e,!0,t,null,s);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ul(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Si(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Dr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(oe(153));if(e.child!==null){for(n=e.child,t=Zi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Zi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function sx(n,e,t){switch(e.tag){case 3:qg(e),ks();break;case 5:Eg(e);break;case 1:on(e.type)&&Al(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Rl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(_t,_t.current&1),e.flags|=128,null):t&e.child.childLanes?jg(n,e,t):(ot(_t,_t.current&1),n=Si(n,e,t),n!==null?n.sibling:null);ot(_t,_t.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return $g(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Kg(n,e,t)}return Si(n,e,t)}var Zg,xd,Qg,Jg;Zg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};xd=function(){};Qg=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,wr(ti.current);var s=null;switch(t){case"input":r=Vu(n,r),i=Vu(n,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Xu(n,r),i=Xu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=wl)}Yu(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Jg=function(n,e,t,i){t!==i&&(e.flags|=4)};function sa(n,e){if(!mt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Wt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function ax(n,e,t){var i=e.pendingProps;switch(of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return on(e.type)&&Tl(),Wt(e),null;case 3:return i=e.stateNode,zs(),ft(an),ft(qt),gf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(So(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Cd(Hn),Hn=null))),xd(n,e),Wt(e),null;case 5:mf(e);var r=wr($a.current);if(t=e.type,n!==null&&e.stateNode!=null)Qg(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Wt(e),null}if(n=wr(ti.current),So(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[qa]=s,n=(e.mode&1)!==0,t){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<wa.length;r++)ut(wa[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":nh(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":rh(i,s),ut("invalid",i)}Yu(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&xo(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&xo(i.textContent,o,n),r=["children",""+o]):Fa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(t){case"input":fo(i),ih(i,s,!0);break;case"textarea":fo(i),sh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=b0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Zn]=e,n[qa]=i,Zg(n,e,!1,!1),e.stateNode=n;e:{switch(a=qu(t,i),t){case"dialog":ut("cancel",n),ut("close",n),r=i;break;case"iframe":case"object":case"embed":ut("load",n),r=i;break;case"video":case"audio":for(r=0;r<wa.length;r++)ut(wa[r],n);r=i;break;case"source":ut("error",n),r=i;break;case"img":case"image":case"link":ut("error",n),ut("load",n),r=i;break;case"details":ut("toggle",n),r=i;break;case"input":nh(n,i),r=Vu(n,i),ut("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ut("invalid",n);break;case"textarea":rh(n,i),r=Xu(n,i),ut("invalid",n);break;default:r=i}Yu(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?P0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&C0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&za(n,l):typeof l=="number"&&za(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",n):l!=null&&Xd(n,s,l,a))}switch(t){case"input":fo(n),ih(n,i,!1);break;case"textarea":fo(n),sh(n);break;case"option":i.value!=null&&n.setAttribute("value",""+tr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?As(n,!!i.multiple,s,!1):i.defaultValue!=null&&As(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=wl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(n&&e.stateNode!=null)Jg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(t=wr($a.current),wr(ti.current),So(e)){if(i=e.stateNode,t=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==t)&&(n=vn,n!==null))switch(n.tag){case 3:xo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return Wt(e),null;case 13:if(ft(_t),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(mt&&gn!==null&&e.mode&1&&!(e.flags&128))vg(),ks(),e.flags|=98560,s=!1;else if(s=So(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Zn]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Hn!==null&&(Cd(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||_t.current&1?Ct===0&&(Ct=3):Cf())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return zs(),xd(n,e),n===null&&Ka(e.stateNode.containerInfo),Wt(e),null;case 10:return df(e.type._context),Wt(e),null;case 17:return on(e.type)&&Tl(),Wt(e),null;case 19:if(ft(_t),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)sa(s,!1);else{if(Ct!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=Dl(n),a!==null){for(e.flags|=128,sa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ot(_t,_t.current&1|2),e.child}n=n.sibling}s.tail!==null&&Et()>Hs&&(e.flags|=128,i=!0,sa(s,!1),e.lanes=4194304)}else{if(!i)if(n=Dl(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return Wt(e),null}else 2*Et()-s.renderingStartTime>Hs&&t!==1073741824&&(e.flags|=128,i=!0,sa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,t=_t.current,ot(_t,i?t&1|2:t&1),e):(Wt(e),null);case 22:case 23:return bf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function ox(n,e){switch(of(e),e.tag){case 1:return on(e.type)&&Tl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return zs(),ft(an),ft(qt),gf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return mf(e),null;case 13:if(ft(_t),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));ks()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ft(_t),null;case 4:return zs(),null;case 10:return df(e.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var wo=!1,Yt=!1,lx=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Ms(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){St(n,e,i)}else t.current=null}function Sd(n,e,t){try{t()}catch(i){St(n,e,i)}}var qh=!1;function cx(n,e){if(rd=Sl,n=rg(),sf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=n,u=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===n)break t;if(u===t&&++c===r&&(o=a),u===s&&++f===i&&(l=a),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(sd={focusedElem:n,selectionRange:t},Sl=!1,_e=e;_e!==null;)if(e=_e,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,_e=n;else for(;_e!==null;){e=_e;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Fn(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(M){St(e,e.return,M)}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}return g=qh,qh=!1,g}function Da(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sd(e,t,s)}r=r.next}while(r!==i)}}function ic(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ed(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function ev(n){var e=n.alternate;e!==null&&(n.alternate=null,ev(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Zn],delete e[qa],delete e[ld],delete e[Xy],delete e[Ky])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tv(n){return n.tag===5||n.tag===3||n.tag===4}function jh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Md(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=wl));else if(i!==4&&(n=n.child,n!==null))for(Md(n,e,t),n=n.sibling;n!==null;)Md(n,e,t),n=n.sibling}function wd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(wd(n,e,t),n=n.sibling;n!==null;)wd(n,e,t),n=n.sibling}var kt=null,zn=!1;function bi(n,e,t){for(t=t.child;t!==null;)nv(n,e,t),t=t.sibling}function nv(n,e,t){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(jl,t)}catch{}switch(t.tag){case 5:Yt||Ms(t,e);case 6:var i=kt,r=zn;kt=null,bi(n,e,t),kt=i,zn=r,kt!==null&&(zn?(n=kt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):kt.removeChild(t.stateNode));break;case 18:kt!==null&&(zn?(n=kt,t=t.stateNode,n.nodeType===8?kc(n.parentNode,t):n.nodeType===1&&kc(n,t),Ga(n)):kc(kt,t.stateNode));break;case 4:i=kt,r=zn,kt=t.stateNode.containerInfo,zn=!0,bi(n,e,t),kt=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Sd(t,e,a),r=r.next}while(r!==i)}bi(n,e,t);break;case 1:if(!Yt&&(Ms(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){St(t,e,o)}bi(n,e,t);break;case 21:bi(n,e,t);break;case 22:t.mode&1?(Yt=(i=Yt)||t.memoizedState!==null,bi(n,e,t),Yt=i):bi(n,e,t);break;default:bi(n,e,t)}}function $h(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new lx),e.forEach(function(i){var r=_x.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Nn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:kt=o.stateNode,zn=!1;break e;case 3:kt=o.stateNode.containerInfo,zn=!0;break e;case 4:kt=o.stateNode.containerInfo,zn=!0;break e}o=o.return}if(kt===null)throw Error(oe(160));nv(s,a,r),kt=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)iv(e,n),e=e.sibling}function iv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Nn(e,n),Yn(n),i&4){try{Da(3,n,n.return),ic(3,n)}catch(y){St(n,n.return,y)}try{Da(5,n,n.return)}catch(y){St(n,n.return,y)}}break;case 1:Nn(e,n),Yn(n),i&512&&t!==null&&Ms(t,t.return);break;case 5:if(Nn(e,n),Yn(n),i&512&&t!==null&&Ms(t,t.return),n.flags&32){var r=n.stateNode;try{za(r,"")}catch(y){St(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&T0(r,s),qu(o,a);var c=qu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?P0(r,h):f==="dangerouslySetInnerHTML"?C0(r,h):f==="children"?za(r,h):Xd(r,f,h,c)}switch(o){case"input":Gu(r,s);break;case"textarea":A0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?As(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?As(r,!!s.multiple,s.defaultValue,!0):As(r,!!s.multiple,s.multiple?[]:"",!1))}r[qa]=s}catch(y){St(n,n.return,y)}}break;case 6:if(Nn(e,n),Yn(n),i&4){if(n.stateNode===null)throw Error(oe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){St(n,n.return,y)}}break;case 3:if(Nn(e,n),Yn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(y){St(n,n.return,y)}break;case 4:Nn(e,n),Yn(n);break;case 13:Nn(e,n),Yn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Tf=Et())),i&4&&$h(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(Yt=(c=Yt)||f,Nn(e,n),Yt=c):Nn(e,n),Yn(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!f&&n.mode&1)for(_e=n,f=n.child;f!==null;){for(h=_e=f;_e!==null;){switch(u=_e,p=u.child,u.tag){case 0:case 11:case 14:case 15:Da(4,u,u.return);break;case 1:Ms(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,t=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){St(i,t,y)}}break;case 5:Ms(u,u.return);break;case 22:if(u.memoizedState!==null){Qh(h);continue}}p!==null?(p.return=u,_e=p):Qh(h)}f=f.sibling}e:for(f=null,h=n;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=R0("display",a))}catch(y){St(n,n.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){St(n,n.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nn(e,n),Yn(n),i&4&&$h(n);break;case 21:break;default:Nn(e,n),Yn(n)}}function Yn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(tv(t)){var i=t;break e}t=t.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(za(r,""),i.flags&=-33);var s=jh(n);wd(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=jh(n);Md(n,o,a);break;default:throw Error(oe(161))}}catch(l){St(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function ux(n,e,t){_e=n,rv(n)}function rv(n,e,t){for(var i=(n.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||wo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Yt;o=wo;var c=Yt;if(wo=a,(Yt=l)&&!c)for(_e=r;_e!==null;)a=_e,l=a.child,a.tag===22&&a.memoizedState!==null?Jh(r):l!==null?(l.return=a,_e=l):Jh(r);for(;s!==null;)_e=s,rv(s),s=s.sibling;_e=r,wo=o,Yt=c}Zh(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Zh(n)}}function Zh(n){for(;_e!==null;){var e=_e;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Fn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Uh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Uh(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ga(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Yt||e.flags&512&&Ed(e)}catch(u){St(e,e.return,u)}}if(e===n){_e=null;break}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}}function Qh(n){for(;_e!==null;){var e=_e;if(e===n){_e=null;break}var t=e.sibling;if(t!==null){t.return=e.return,_e=t;break}_e=e.return}}function Jh(n){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ic(4,e)}catch(l){St(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Ed(e)}catch(l){St(e,s,l)}break;case 5:var a=e.return;try{Ed(e)}catch(l){St(e,a,l)}}}catch(l){St(e,e.return,l)}if(e===n){_e=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_e=o;break}_e=e.return}}var dx=Math.ceil,Ul=Ei.ReactCurrentDispatcher,Mf=Ei.ReactCurrentOwner,Rn=Ei.ReactCurrentBatchConfig,je=0,Ot=null,At=null,zt=0,pn=0,ws=or(0),Ct=0,eo=null,Dr=0,rc=0,wf=0,Na=null,rn=null,Tf=0,Hs=1/0,di=null,Ol=!1,Td=null,ji=null,To=!1,Vi=null,kl=0,Ia=0,Ad=null,dl=-1,fl=0;function Qt(){return je&6?Et():dl!==-1?dl:dl=Et()}function $i(n){return n.mode&1?je&2&&zt!==0?zt&-zt:qy.transition!==null?(fl===0&&(fl=V0()),fl):(n=nt,n!==0||(n=window.event,n=n===void 0?16:j0(n.type)),n):1}function Xn(n,e,t,i){if(50<Ia)throw Ia=0,Ad=null,Error(oe(185));io(n,t,i),(!(je&2)||n!==Ot)&&(n===Ot&&(!(je&2)&&(rc|=t),Ct===4&&zi(n,zt)),ln(n,i),t===1&&je===0&&!(e.mode&1)&&(Hs=Et()+500,ec&&lr()))}function ln(n,e){var t=n.callbackNode;q_(n,e);var i=xl(n,n===Ot?zt:0);if(i===0)t!==null&&lh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&lh(t),e===1)n.tag===0?Yy(ep.bind(null,n)):pg(ep.bind(null,n)),Gy(function(){!(je&6)&&lr()}),t=null;else{switch(G0(i)){case 1:t=$d;break;case 4:t=B0;break;case 16:t=yl;break;case 536870912:t=H0;break;default:t=yl}t=fv(t,sv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function sv(n,e){if(dl=-1,fl=0,je&6)throw Error(oe(327));var t=n.callbackNode;if(Ls()&&n.callbackNode!==t)return null;var i=xl(n,n===Ot?zt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Fl(n,i);else{e=i;var r=je;je|=2;var s=ov();(Ot!==n||zt!==e)&&(di=null,Hs=Et()+500,br(n,e));do try{px();break}catch(o){av(n,o)}while(!0);uf(),Ul.current=s,je=r,At!==null?e=0:(Ot=null,zt=0,e=Ct)}if(e!==0){if(e===2&&(r=Ju(n),r!==0&&(i=r,e=bd(n,r))),e===1)throw t=eo,br(n,0),zi(n,i),ln(n,Et()),t;if(e===6)zi(n,i);else{if(r=n.current.alternate,!(i&30)&&!fx(r)&&(e=Fl(n,i),e===2&&(s=Ju(n),s!==0&&(i=s,e=bd(n,s))),e===1))throw t=eo,br(n,0),zi(n,i),ln(n,Et()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:_r(n,rn,di);break;case 3:if(zi(n,i),(i&130023424)===i&&(e=Tf+500-Et(),10<e)){if(xl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Qt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=od(_r.bind(null,n,rn,di),e);break}_r(n,rn,di);break;case 4:if(zi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-Wn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dx(i/1960))-i,10<i){n.timeoutHandle=od(_r.bind(null,n,rn,di),i);break}_r(n,rn,di);break;case 5:_r(n,rn,di);break;default:throw Error(oe(329))}}}return ln(n,Et()),n.callbackNode===t?sv.bind(null,n):null}function bd(n,e){var t=Na;return n.current.memoizedState.isDehydrated&&(br(n,e).flags|=256),n=Fl(n,e),n!==2&&(e=rn,rn=t,e!==null&&Cd(e)),n}function Cd(n){rn===null?rn=n:rn.push.apply(rn,n)}function fx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(n,e){for(e&=~wf,e&=~rc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Wn(e),i=1<<t;n[t]=-1,e&=~i}}function ep(n){if(je&6)throw Error(oe(327));Ls();var e=xl(n,0);if(!(e&1))return ln(n,Et()),null;var t=Fl(n,e);if(n.tag!==0&&t===2){var i=Ju(n);i!==0&&(e=i,t=bd(n,i))}if(t===1)throw t=eo,br(n,0),zi(n,e),ln(n,Et()),t;if(t===6)throw Error(oe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,_r(n,rn,di),ln(n,Et()),null}function Af(n,e){var t=je;je|=1;try{return n(e)}finally{je=t,je===0&&(Hs=Et()+500,ec&&lr())}}function Nr(n){Vi!==null&&Vi.tag===0&&!(je&6)&&Ls();var e=je;je|=1;var t=Rn.transition,i=nt;try{if(Rn.transition=null,nt=1,n)return n()}finally{nt=i,Rn.transition=t,je=e,!(je&6)&&lr()}}function bf(){pn=ws.current,ft(ws)}function br(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Vy(t)),At!==null)for(t=At.return;t!==null;){var i=t;switch(of(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Tl();break;case 3:zs(),ft(an),ft(qt),gf();break;case 5:mf(i);break;case 4:zs();break;case 13:ft(_t);break;case 19:ft(_t);break;case 10:df(i.type._context);break;case 22:case 23:bf()}t=t.return}if(Ot=n,At=n=Zi(n.current,null),zt=pn=e,Ct=0,eo=null,wf=rc=Dr=0,rn=Na=null,Mr!==null){for(e=0;e<Mr.length;e++)if(t=Mr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Mr=null}return n}function av(n,e){do{var t=At;try{if(uf(),ll.current=Il,Nl){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nl=!1}if(Lr=0,It=bt=yt=null,La=!1,Za=0,Mf.current=null,t===null||t.return===null){Ct=1,eo=e,At=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=zt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Hh(a);if(p!==null){p.flags&=-257,Vh(p,a,o,s,e),p.mode&1&&Bh(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Bh(s,c,e),Cf();break e}l=Error(oe(426))}}else if(mt&&o.mode&1){var m=Hh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Vh(m,a,o,s,e),lf(Bs(l,o));break e}}s=l=Bs(l,o),Ct!==4&&(Ct=2),Na===null?Na=[s]:Na.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Gg(s,l,e);Ih(s,d);break e;case 1:o=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ji===null||!ji.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Wg(s,o,e);Ih(s,M);break e}}s=s.return}while(s!==null)}cv(t)}catch(R){e=R,At===t&&t!==null&&(At=t=t.return);continue}break}while(!0)}function ov(){var n=Ul.current;return Ul.current=Il,n===null?Il:n}function Cf(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Ot===null||!(Dr&268435455)&&!(rc&268435455)||zi(Ot,zt)}function Fl(n,e){var t=je;je|=2;var i=ov();(Ot!==n||zt!==e)&&(di=null,br(n,e));do try{hx();break}catch(r){av(n,r)}while(!0);if(uf(),je=t,Ul.current=i,At!==null)throw Error(oe(261));return Ot=null,zt=0,Ct}function hx(){for(;At!==null;)lv(At)}function px(){for(;At!==null&&!z_();)lv(At)}function lv(n){var e=dv(n.alternate,n,pn);n.memoizedProps=n.pendingProps,e===null?cv(n):At=e,Mf.current=null}function cv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=ox(t,e),t!==null){t.flags&=32767,At=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ct=6,At=null;return}}else if(t=ax(t,e,pn),t!==null){At=t;return}if(e=e.sibling,e!==null){At=e;return}At=e=n}while(e!==null);Ct===0&&(Ct=5)}function _r(n,e,t){var i=nt,r=Rn.transition;try{Rn.transition=null,nt=1,mx(n,e,t,i)}finally{Rn.transition=r,nt=i}return null}function mx(n,e,t,i){do Ls();while(Vi!==null);if(je&6)throw Error(oe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(oe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(j_(n,s),n===Ot&&(At=Ot=null,zt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||To||(To=!0,fv(yl,function(){return Ls(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var a=nt;nt=1;var o=je;je|=4,Mf.current=null,cx(n,t),iv(t,n),Uy(sd),Sl=!!rd,sd=rd=null,n.current=t,ux(t),B_(),je=o,nt=a,Rn.transition=s}else n.current=t;if(To&&(To=!1,Vi=n,kl=r),s=n.pendingLanes,s===0&&(ji=null),G_(t.stateNode),ln(n,Et()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ol)throw Ol=!1,n=Td,Td=null,n;return kl&1&&n.tag!==0&&Ls(),s=n.pendingLanes,s&1?n===Ad?Ia++:(Ia=0,Ad=n):Ia=0,lr(),null}function Ls(){if(Vi!==null){var n=G0(kl),e=Rn.transition,t=nt;try{if(Rn.transition=null,nt=16>n?16:n,Vi===null)var i=!1;else{if(n=Vi,Vi=null,kl=0,je&6)throw Error(oe(331));var r=je;for(je|=4,_e=n.current;_e!==null;){var s=_e,a=s.child;if(_e.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(_e=c;_e!==null;){var f=_e;switch(f.tag){case 0:case 11:case 15:Da(8,f,s)}var h=f.child;if(h!==null)h.return=f,_e=h;else for(;_e!==null;){f=_e;var u=f.sibling,p=f.return;if(ev(f),f===c){_e=null;break}if(u!==null){u.return=p,_e=u;break}_e=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}_e=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,_e=a;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var _=n.current;for(_e=_;_e!==null;){a=_e;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,_e=v;else e:for(a=_;_e!==null;){if(o=_e,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ic(9,o)}}catch(R){St(o,o.return,R)}if(o===a){_e=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,_e=M;break e}_e=o.return}}if(je=r,lr(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(jl,n)}catch{}i=!0}return i}finally{nt=t,Rn.transition=e}}return!1}function tp(n,e,t){e=Bs(t,e),e=Gg(n,e,1),n=qi(n,e,1),e=Qt(),n!==null&&(io(n,1,e),ln(n,e))}function St(n,e,t){if(n.tag===3)tp(n,n,t);else for(;e!==null;){if(e.tag===3){tp(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){n=Bs(t,n),n=Wg(e,n,1),e=qi(e,n,1),n=Qt(),e!==null&&(io(e,1,n),ln(e,n));break}}e=e.return}}function gx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Qt(),n.pingedLanes|=n.suspendedLanes&t,Ot===n&&(zt&t)===t&&(Ct===4||Ct===3&&(zt&130023424)===zt&&500>Et()-Tf?br(n,0):wf|=t),ln(n,e)}function uv(n,e){e===0&&(n.mode&1?(e=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):e=1);var t=Qt();n=xi(n,e),n!==null&&(io(n,e,t),ln(n,t))}function vx(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),uv(n,t)}function _x(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),uv(n,t)}var dv;dv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||an.current)sn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return sn=!1,sx(n,e,t);sn=!!(n.flags&131072)}else sn=!1,mt&&e.flags&1048576&&mg(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ul(n,e),n=e.pendingProps;var r=Os(e,qt.current);Ps(e,t),r=_f(null,e,i,n,r,t);var s=yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,Al(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hf(e),r.updater=nc,e.stateNode=r,r._reactInternals=e,pd(e,i,n,t),e=vd(null,e,i,!0,s,t)):(e.tag=0,mt&&s&&af(e),Zt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ul(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xx(i),n=Fn(i,n),r){case 0:e=gd(null,e,i,n,t);break e;case 1:e=Xh(null,e,i,n,t);break e;case 11:e=Gh(null,e,i,n,t);break e;case 14:e=Wh(null,e,i,Fn(i.type,n),t);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),gd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Xh(n,e,i,r,t);case 3:e:{if(qg(e),n===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Sg(n,e),Ll(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(oe(423)),e),e=Kh(n,e,i,t,r);break e}else if(i!==r){r=Bs(Error(oe(424)),e),e=Kh(n,e,i,t,r);break e}else for(gn=Yi(e.stateNode.containerInfo.firstChild),vn=e,mt=!0,Hn=null,t=yg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ks(),i===r){e=Si(n,e,t);break e}Zt(n,e,i,t)}e=e.child}return e;case 5:return Eg(e),n===null&&dd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,ad(i,r)?a=null:s!==null&&ad(i,s)&&(e.flags|=32),Yg(n,e),Zt(n,e,a,t),e.child;case 6:return n===null&&dd(e),null;case 13:return jg(n,e,t);case 4:return pf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Fs(e,null,i,t):Zt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Gh(n,e,i,r,t);case 7:return Zt(n,e,e.pendingProps,t),e.child;case 8:return Zt(n,e,e.pendingProps.children,t),e.child;case 12:return Zt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ot(Rl,i._currentValue),i._currentValue=a,s!==null)if(Kn(s.value,a)){if(s.children===r.children&&!an.current){e=Si(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),fd(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),fd(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Zt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,t),r=Ln(r),i=i(r),e.flags|=1,Zt(n,e,i,t),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),Wh(n,e,i,r,t);case 15:return Xg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),ul(n,e),e.tag=1,on(i)?(n=!0,Al(e)):n=!1,Ps(e,t),Vg(e,i,r),pd(e,i,r,t),vd(null,e,i,!0,n,t);case 19:return $g(n,e,t);case 22:return Kg(n,e,t)}throw Error(oe(156,e.tag))};function fv(n,e){return z0(n,e)}function yx(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(n,e,t,i){return new yx(n,e,t,i)}function Rf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xx(n){if(typeof n=="function")return Rf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Yd)return 11;if(n===qd)return 14}return 2}function Zi(n,e){var t=n.alternate;return t===null?(t=bn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function hl(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Rf(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case ps:return Cr(t.children,r,s,e);case Kd:a=8,r|=8;break;case Fu:return n=bn(12,t,e,r|2),n.elementType=Fu,n.lanes=s,n;case zu:return n=bn(13,t,e,r),n.elementType=zu,n.lanes=s,n;case Bu:return n=bn(19,t,e,r),n.elementType=Bu,n.lanes=s,n;case E0:return sc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x0:a=10;break e;case S0:a=9;break e;case Yd:a=11;break e;case qd:a=14;break e;case Ui:a=16,i=null;break e}throw Error(oe(130,n==null?n:typeof n,""))}return e=bn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Cr(n,e,t,i){return n=bn(7,n,i,e),n.lanes=t,n}function sc(n,e,t,i){return n=bn(22,n,i,e),n.elementType=E0,n.lanes=t,n.stateNode={isHidden:!1},n}function Xc(n,e,t){return n=bn(6,n,null,e),n.lanes=t,n}function Kc(n,e,t){return e=bn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Sx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Pf(n,e,t,i,r,s,a,o,l){return n=new Sx(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hf(s),n}function Ex(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function hv(n){if(!n)return nr;n=n._reactInternals;e:{if(Fr(n)!==n||n.tag!==1)throw Error(oe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(n.tag===1){var t=n.type;if(on(t))return hg(n,t,e)}return e}function pv(n,e,t,i,r,s,a,o,l){return n=Pf(t,i,!0,n,r,s,a,o,l),n.context=hv(null),t=n.current,i=Qt(),r=$i(t),s=vi(i,r),s.callback=e??null,qi(t,s,r),n.current.lanes=r,io(n,r,i),ln(n,i),n}function ac(n,e,t,i){var r=e.current,s=Qt(),a=$i(r);return t=hv(t),e.context===null?e.context=t:e.pendingContext=t,e=vi(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=qi(r,e,a),n!==null&&(Xn(n,r,a,s),ol(n,r,a)),a}function zl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function np(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Lf(n,e){np(n,e),(n=n.alternate)&&np(n,e)}function Mx(){return null}var mv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Df(n){this._internalRoot=n}oc.prototype.render=Df.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(oe(409));ac(n,e,null,null)};oc.prototype.unmount=Df.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Nr(function(){ac(null,n,null,null)}),e[yi]=null}};function oc(n){this._internalRoot=n}oc.prototype.unstable_scheduleHydration=function(n){if(n){var e=K0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Fi.length&&e!==0&&e<Fi[t].priority;t++);Fi.splice(t,0,n),t===0&&q0(n)}};function Nf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function lc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ip(){}function wx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=zl(a);s.call(c)}}var a=pv(e,i,n,0,null,!1,!1,"",ip);return n._reactRootContainer=a,n[yi]=a.current,Ka(n.nodeType===8?n.parentNode:n),Nr(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=zl(l);o.call(c)}}var l=Pf(n,0,!1,null,null,!1,!1,"",ip);return n._reactRootContainer=l,n[yi]=l.current,Ka(n.nodeType===8?n.parentNode:n),Nr(function(){ac(e,l,t,i)}),l}function cc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=zl(a);o.call(l)}}ac(e,a,n,r)}else a=wx(t,e,n,r,i);return zl(a)}W0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ma(e.pendingLanes);t!==0&&(Zd(e,t|1),ln(e,Et()),!(je&6)&&(Hs=Et()+500,lr()))}break;case 13:Nr(function(){var i=xi(n,1);if(i!==null){var r=Qt();Xn(i,n,1,r)}}),Lf(n,1)}};Qd=function(n){if(n.tag===13){var e=xi(n,134217728);if(e!==null){var t=Qt();Xn(e,n,134217728,t)}Lf(n,134217728)}};X0=function(n){if(n.tag===13){var e=$i(n),t=xi(n,e);if(t!==null){var i=Qt();Xn(t,n,e,i)}Lf(n,e)}};K0=function(){return nt};Y0=function(n,e){var t=nt;try{return nt=n,e()}finally{nt=t}};$u=function(n,e,t){switch(e){case"input":if(Gu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Jl(i);if(!r)throw Error(oe(90));w0(i),Gu(i,r)}}}break;case"textarea":A0(n,t);break;case"select":e=t.value,e!=null&&As(n,!!t.multiple,e,!1)}};N0=Af;I0=Nr;var Tx={usingClientEntryPoint:!1,Events:[so,_s,Jl,L0,D0,Af]},aa={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ax={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=k0(n),n===null?null:n.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||Mx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{jl=Ao.inject(Ax),ei=Ao}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tx;yn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(e))throw Error(oe(200));return Ex(n,e,null,t)};yn.createRoot=function(n,e){if(!Nf(n))throw Error(oe(299));var t=!1,i="",r=mv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Pf(n,1,!1,null,null,t,!1,i,r),n[yi]=e.current,Ka(n.nodeType===8?n.parentNode:n),new Df(e)};yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(oe(188)):(n=Object.keys(n).join(","),Error(oe(268,n)));return n=k0(e),n=n===null?null:n.stateNode,n};yn.flushSync=function(n){return Nr(n)};yn.hydrate=function(n,e,t){if(!lc(e))throw Error(oe(200));return cc(null,n,e,!0,t)};yn.hydrateRoot=function(n,e,t){if(!Nf(n))throw Error(oe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=mv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=pv(e,null,n,1,t??null,r,!1,s,a),n[yi]=e.current,Ka(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new oc(e)};yn.render=function(n,e,t){if(!lc(e))throw Error(oe(200));return cc(null,n,e,!1,t)};yn.unmountComponentAtNode=function(n){if(!lc(n))throw Error(oe(40));return n._reactRootContainer?(Nr(function(){cc(null,null,n,!1,function(){n._reactRootContainer=null,n[yi]=null})}),!0):!1};yn.unstable_batchedUpdates=Af;yn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!lc(t))throw Error(oe(200));if(n==null||n._reactInternals===void 0)throw Error(oe(38));return cc(n,e,t,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gv)}catch(n){console.error(n)}}gv(),g0.exports=yn;var bx=g0.exports,vv,rp=bx;vv=rp.createRoot,rp.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_v=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=be.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>be.createElement("svg",{ref:l,...Rx,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:_v("lucide",r),...o},[...a.map(([c,f])=>be.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=(n,e)=>{const t=be.forwardRef(({className:i,...r},s)=>be.createElement(Px,{ref:s,iconNode:e,className:_v(`lucide-${Cx(n)}`,i),...r}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=$e("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=$e("BadgeIndianRupee",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=$e("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=$e("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=$e("Cable",[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",key:"10bnsj"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",key:"1eqmu1"}],["path",{d:"M21 21v-2h-4",key:"14zm7j"}],["path",{d:"M3 5h4V3",key:"z442eg"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",key:"ebdjd7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=$e("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=$e("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=$e("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=$e("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=$e("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=$e("Cuboid",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=$e("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=$e("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=$e("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=$e("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=$e("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=$e("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=$e("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=$e("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=$e("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=$e("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=$e("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=$e("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=$e("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=$e("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=$e("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=$e("ScanSearch",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=$e("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=$e("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=$e("SquareDashedMousePointer",[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=$e("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=$e("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=$e("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const If="164",Gr={ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n1=0,fp=1,i1=2,yv=1,r1=2,ui=3,ir=0,cn=1,hi=2,Qi=0,Ds=1,hp=2,pp=3,mp=4,s1=5,xr=100,a1=101,o1=102,l1=103,c1=104,u1=200,d1=201,f1=202,h1=203,Rd=204,Pd=205,p1=206,m1=207,g1=208,v1=209,_1=210,y1=211,x1=212,S1=213,E1=214,M1=0,w1=1,T1=2,Bl=3,A1=4,b1=5,C1=6,R1=7,xv=0,P1=1,L1=2,Ji=0,D1=1,N1=2,I1=3,U1=4,O1=5,k1=6,F1=7,Sv=300,Vs=301,Gs=302,Ld=303,Dd=304,uc=306,Nd=1e3,Tr=1001,Id=1002,Cn=1003,z1=1004,bo=1005,Vn=1006,qc=1007,Ar=1008,rr=1009,B1=1010,H1=1011,Ev=1012,Mv=1013,Ws=1014,Gi=1015,dc=1016,wv=1017,Tv=1018,oo=1020,V1=35902,G1=1021,W1=1022,Jn=1023,X1=1024,K1=1025,Ns=1026,to=1027,Y1=1028,Av=1029,q1=1030,bv=1031,Cv=1033,jc=33776,$c=33777,Zc=33778,Qc=33779,gp=35840,vp=35841,_p=35842,yp=35843,xp=36196,Sp=37492,Ep=37496,Mp=37808,wp=37809,Tp=37810,Ap=37811,bp=37812,Cp=37813,Rp=37814,Pp=37815,Lp=37816,Dp=37817,Np=37818,Ip=37819,Up=37820,Op=37821,Jc=36492,kp=36494,Fp=36495,j1=36283,zp=36284,Bp=36285,Hp=36286,$1=3200,Z1=3201,Rv=0,Q1=1,Bi="",jn="srgb",cr="srgb-linear",Uf="display-p3",fc="display-p3-linear",Hl="linear",dt="srgb",Vl="rec709",Gl="p3",Xr=7680,Vp=519,J1=512,eS=513,tS=514,Pv=515,nS=516,iS=517,rS=518,sS=519,Ud=35044,Gp="300 es",gi=2e3,Wl=2001;class zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=Math.PI/180,Od=180/Math.PI;function er(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function aS(n,e){return(n%e+e)%e}function eu(n,e,t){return(1-t)*n+t*e}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const oS={DEG2RAD:pl};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],p=i[5],g=i[8],y=r[0],m=r[3],d=r[6],_=r[1],v=r[4],M=r[7],R=r[2],C=r[5],b=r[8];return s[0]=a*y+o*_+l*R,s[3]=a*m+o*v+l*C,s[6]=a*d+o*M+l*b,s[1]=c*y+f*_+h*R,s[4]=c*m+f*v+h*C,s[7]=c*d+f*M+h*b,s[2]=u*y+p*_+g*R,s[5]=u*m+p*v+g*C,s[8]=u*d+p*M+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,u=o*l-f*s,p=c*s-a*l,g=t*h+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(r*c-f*i)*y,e[2]=(o*i-r*a)*y,e[3]=u*y,e[4]=(f*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tu.makeScale(e,t)),this}rotate(e){return this.premultiply(tu.makeRotation(-e)),this}translate(e,t){return this.premultiply(tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tu=new He;function Lv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lS(){const n=Xl("canvas");return n.style.display="block",n}const Wp={};function Dv(n){n in Wp||(Wp[n]=!0,console.warn(n))}const Xp=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kp=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Co={[cr]:{transfer:Hl,primaries:Vl,toReference:n=>n,fromReference:n=>n},[jn]:{transfer:dt,primaries:Vl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[fc]:{transfer:Hl,primaries:Gl,toReference:n=>n.applyMatrix3(Kp),fromReference:n=>n.applyMatrix3(Xp)},[Uf]:{transfer:dt,primaries:Gl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Kp),fromReference:n=>n.applyMatrix3(Xp).convertLinearToSRGB()}},cS=new Set([cr,fc]),st={enabled:!0,_workingColorSpace:cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!cS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Co[e].toReference,r=Co[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Co[n].primaries},getTransfer:function(n){return n===Bi?Hl:Co[n].transfer}};function Is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Kr;class uS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Kr===void 0&&(Kr=Xl("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Kr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Is(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Is(t[i]/255)*255):t[i]=Is(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dS=0;class Nv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=er(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(iu(r[a].image)):s.push(iu(r[a]))}else s=iu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function iu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fS=0;class Jt extends zr{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=Tr,r=Tr,s=Vn,a=Ar,o=Jn,l=rr,c=Jt.DEFAULT_ANISOTROPY,f=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=er(),this.name="",this.source=new Nv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Sv;Jt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],p=l[5],g=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(p+1)/2,R=(d+1)/2,C=(f+u)/4,b=(h+y)/4,I=(g+m)/4;return v>M&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=b/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=I/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=b/s,r=I/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(u-f)*(u-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-y)/_,this.z=(u-f)/_,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hS extends zr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends hS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Iv extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pS extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const u=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(h!==y||l!==u||c!==p||f!==g){let m=1-o;const d=l*u+c*p+f*g+h*y,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),C=Math.atan2(R,d*_);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const M=o*_;if(l=l*m+u*M,c=c*m+p*M,f=f*m+g*M,h=h*m+y*M,m===1-o){const R=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=R,c*=R,f*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+f*h+l*p-c*u,e[t+1]=l*g+f*u+c*h-o*p,e[t+2]=c*g+f*p+o*u-l*h,e[t+3]=f*g-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*f*h+c*p*g,this._y=c*p*h-u*f*g,this._z=c*f*g+u*p*h,this._w=c*f*h-u*p*g;break;case"YXZ":this._x=u*f*h+c*p*g,this._y=c*p*h-u*f*g,this._z=c*f*g-u*p*h,this._w=c*f*h+u*p*g;break;case"ZXY":this._x=u*f*h-c*p*g,this._y=c*p*h+u*f*g,this._z=c*f*g+u*p*h,this._w=c*f*h-u*p*g;break;case"ZYX":this._x=u*f*h-c*p*g,this._y=c*p*h+u*f*g,this._z=c*f*g-u*p*h,this._w=c*f*h+u*p*g;break;case"YZX":this._x=u*f*h+c*p*g,this._y=c*p*h+u*f*g,this._z=c*f*g-u*p*h,this._w=c*f*h-u*p*g;break;case"XZY":this._x=u*f*h-c*p*g,this._y=c*p*h-u*f*g,this._z=c*f*g+u*p*h,this._w=c*f*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],h=t[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),h=Math.sin((1-t)*f)/c,u=Math.sin(t*f)/c;return this._w=a*h+this._w*u,this._x=i*h+this._x*u,this._y=r*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ru=new D,Yp=new Ur;class Or{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(s,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Po.subVectors(this.max,oa),Yr.subVectors(e.a,oa),qr.subVectors(e.b,oa),jr.subVectors(e.c,oa),Ci.subVectors(qr,Yr),Ri.subVectors(jr,qr),dr.subVectors(Yr,jr);let t=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-dr.z,dr.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,dr.z,0,-dr.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-dr.y,dr.x,0];return!su(t,Yr,qr,jr,Po)||(t=[1,0,0,0,1,0,0,0,1],!su(t,Yr,qr,jr,Po))?!1:(Lo.crossVectors(Ci,Ri),t=[Lo.x,Lo.y,Lo.z],su(t,Yr,qr,jr,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new D,new D,new D,new D,new D,new D,new D,new D],In=new D,Ro=new Or,Yr=new D,qr=new D,jr=new D,Ci=new D,Ri=new D,dr=new D,oa=new D,Po=new D,Lo=new D,fr=new D;function su(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){fr.fromArray(n,s);const o=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),c=t.dot(fr),f=i.dot(fr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const mS=new Or,la=new D,au=new D;class hc{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(la,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(au)),this.expandByPoint(la.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new D,ou=new D,Do=new D,Pi=new D,lu=new D,No=new D,cu=new D;class pc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ou.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(ou);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Do),o=Pi.dot(this.direction),l=-Pi.dot(Do),c=Pi.lengthSq(),f=Math.abs(1-a*a);let h,u,p,g;if(f>0)if(h=a*l-o,u=a*o-l,g=s*f,h>=0)if(u>=-g)if(u<=g){const y=1/f;h*=y,u*=y,p=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ou).addScaledVector(Do,u),p}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,r,s){lu.subVectors(t,e),No.subVectors(i,e),cu.crossVectors(lu,No);let a=this.direction.dot(cu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);const l=o*this.direction.dot(No.crossVectors(Pi,No));if(l<0)return null;const c=o*this.direction.dot(lu.cross(Pi));if(c<0||l+c>a)return null;const f=-o*Pi.dot(cu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,r,s,a,o,l,c,f,h,u,p,g,y,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,f,h,u,p,g,y,m)}set(e,t,i,r,s,a,o,l,c,f,h,u,p,g,y,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),a=1/$r.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*f,p=a*h,g=o*f,y=o*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*f,p=l*h,g=c*f,y=c*h;t[0]=u+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=p*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*f,p=l*h,g=c*f,y=c*h;t[0]=u-y*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*f,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*f,p=a*h,g=o*f,y=o*h;t[0]=l*f,t[4]=g*c-p,t[8]=u*c+y,t[1]=l*h,t[5]=y*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*f,t[4]=y-u*h,t[8]=g*h+p,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=p*h+g,t[10]=u-y*h}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=u*h+y,t[5]=a*f,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*f,t[10]=y*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gS,e,vS)}lookAt(e,t,i){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Li.crossVectors(i,dn),Li.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Li.crossVectors(i,dn)),Li.normalize(),Io.crossVectors(dn,Li),r[0]=Li.x,r[4]=Io.x,r[8]=dn.x,r[1]=Li.y,r[5]=Io.y,r[9]=dn.y,r[2]=Li.z,r[6]=Io.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],p=i[13],g=i[2],y=i[6],m=i[10],d=i[14],_=i[3],v=i[7],M=i[11],R=i[15],C=r[0],b=r[4],I=r[8],T=r[12],S=r[1],k=r[5],K=r[9],U=r[13],j=r[2],$=r[6],ee=r[10],ae=r[14],O=r[3],F=r[7],L=r[11],V=r[15];return s[0]=a*C+o*S+l*j+c*O,s[4]=a*b+o*k+l*$+c*F,s[8]=a*I+o*K+l*ee+c*L,s[12]=a*T+o*U+l*ae+c*V,s[1]=f*C+h*S+u*j+p*O,s[5]=f*b+h*k+u*$+p*F,s[9]=f*I+h*K+u*ee+p*L,s[13]=f*T+h*U+u*ae+p*V,s[2]=g*C+y*S+m*j+d*O,s[6]=g*b+y*k+m*$+d*F,s[10]=g*I+y*K+m*ee+d*L,s[14]=g*T+y*U+m*ae+d*V,s[3]=_*C+v*S+M*j+R*O,s[7]=_*b+v*k+M*$+R*F,s[11]=_*I+v*K+M*ee+R*L,s[15]=_*T+v*U+M*ae+R*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],p=e[14],g=e[3],y=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*o*u+i*c*u+r*o*p-i*l*p)+y*(+t*l*p-t*c*u+s*a*u-r*a*p+r*c*f-s*l*f)+m*(+t*c*h-t*o*p-s*a*h+i*a*p+s*o*f-i*c*f)+d*(-r*o*f-t*l*h+t*o*u+r*a*h-i*a*u+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],p=e[11],g=e[12],y=e[13],m=e[14],d=e[15],_=h*m*c-y*u*c+y*l*p-o*m*p-h*l*d+o*u*d,v=g*u*c-f*m*c-g*l*p+a*m*p+f*l*d-a*u*d,M=f*y*c-g*h*c+g*o*p-a*y*p-f*o*d+a*h*d,R=g*h*l-f*y*l-g*o*u+a*y*u+f*o*m-a*h*m,C=t*_+i*v+r*M+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=_*b,e[1]=(y*u*s-h*m*s-y*r*p+i*m*p+h*r*d-i*u*d)*b,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*d+i*l*d)*b,e[3]=(h*l*s-o*u*s-h*r*c+i*u*c+o*r*p-i*l*p)*b,e[4]=v*b,e[5]=(f*m*s-g*u*s+g*r*p-t*m*p-f*r*d+t*u*d)*b,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*d-t*l*d)*b,e[7]=(a*u*s-f*l*s+f*r*c-t*u*c-a*r*p+t*l*p)*b,e[8]=M*b,e[9]=(g*h*s-f*y*s-g*i*p+t*y*p+f*i*d-t*h*d)*b,e[10]=(a*y*s-g*o*s+g*i*c-t*y*c-a*i*d+t*o*d)*b,e[11]=(f*o*s-a*h*s-f*i*c+t*h*c+a*i*p-t*o*p)*b,e[12]=R*b,e[13]=(f*y*r-g*h*r+g*i*u-t*y*u-f*i*m+t*h*m)*b,e[14]=(g*o*r-a*y*r-g*i*l+t*y*l+a*i*m-t*o*m)*b,e[15]=(a*h*r-f*o*r+f*i*l-t*h*l-a*i*u+t*o*u)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,h=o+o,u=s*c,p=s*f,g=s*h,y=a*f,m=a*h,d=o*h,_=l*c,v=l*f,M=l*h,R=i.x,C=i.y,b=i.z;return r[0]=(1-(y+d))*R,r[1]=(p+M)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(p-M)*C,r[5]=(1-(u+d))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(g+v)*b,r[9]=(m-_)*b,r[10]=(1-(u+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=$r.set(r[0],r[1],r[2]).length();const a=$r.set(r[4],r[5],r[6]).length(),o=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const c=1/s,f=1/a,h=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=f,Un.elements[5]*=f,Un.elements[6]*=f,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=gi){const l=this.elements,c=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),u=(i+r)/(i-r);let p,g;if(o===gi)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Wl)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=gi){const l=this.elements,c=1/(t-e),f=1/(i-r),h=1/(a-s),u=(t+e)*c,p=(i+r)*f;let g,y;if(o===gi)g=(a+s)*h,y=-2*h;else if(o===Wl)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $r=new D,Un=new lt,gS=new D(0,0,0),vS=new D(1,1,1),Li=new D,Io=new D,dn=new D,qp=new lt,jp=new Ur;class ni{constructor(e=0,t=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jp.setFromEuler(this),this.setFromQuaternion(jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class Of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _S=0;const $p=new D,Zr=new Ur,oi=new lt,Uo=new D,ca=new D,yS=new D,xS=new Ur,Zp=new D(1,0,0),Qp=new D(0,1,0),Jp=new D(0,0,1),em={type:"added"},SS={type:"removed"},Qr={type:"childadded",child:null},uu={type:"childremoved",child:null};class Rt extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new D,t=new ni,i=new Ur,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new He}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(Qp,e)}rotateZ(e){return this.rotateOnAxis(Jp,e)}translateOnAxis(e,t){return $p.copy(e).applyQuaternion(this.quaternion),this.position.add($p.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(Qp,e)}translateZ(e){return this.translateOnAxis(Jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uo.copy(e):Uo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(ca,Uo,this.up):oi.lookAt(Uo,ca,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(oi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(em),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(SS),uu.child=e,this.dispatchEvent(uu),uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(em),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,yS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,xS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new D(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new D,li=new D,du=new D,ci=new D,Jr=new D,es=new D,tm=new D,fu=new D,hu=new D,pu=new D;class Gn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),On.subVectors(e,t),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){On.subVectors(r,t),li.subVectors(i,t),du.subVectors(e,t);const a=On.dot(On),o=On.dot(li),l=On.dot(du),c=li.dot(li),f=li.dot(du),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-o*f)*u,g=(a*f-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static isFrontFacing(e,t,i,r){return On.subVectors(i,t),li.subVectors(e,t),On.cross(li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),li.subVectors(this.a,this.b),On.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Jr.subVectors(r,i),es.subVectors(s,i),fu.subVectors(e,i);const l=Jr.dot(fu),c=es.dot(fu);if(l<=0&&c<=0)return t.copy(i);hu.subVectors(e,r);const f=Jr.dot(hu),h=es.dot(hu);if(f>=0&&h<=f)return t.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(Jr,a);pu.subVectors(e,s);const p=Jr.dot(pu),g=es.dot(pu);if(g>=0&&p<=g)return t.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(es,o);const m=f*g-p*h;if(m<=0&&h-f>=0&&p-g>=0)return tm.subVectors(s,r),o=(h-f)/(h-f+(p-g)),t.copy(r).addScaledVector(tm,o);const d=1/(m+y+u);return a=y*d,o=u*d,t.copy(i).addScaledVector(Jr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function mu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=aS(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=mu(a,s,e+1/3),this.g=mu(a,s,e),this.b=mu(a,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const i=Uv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=nu(e.r),this.g=nu(e.g),this.b=nu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return st.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Ut(Kt.r*255,0,255))*65536+Math.round(Ut(Kt.g*255,0,255))*256+Math.round(Ut(Kt.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Kt.copy(this),t);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=jn){st.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,r=Kt.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Oo);const i=eu(Di.h,Oo.h,t),r=eu(Di.s,Oo.s,t),s=eu(Di.l,Oo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Ke;Ke.NAMES=Uv;let ES=0;class Br extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Ds,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Pd,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rd&&(i.blendSrc=this.blendSrc),this.blendDst!==Pd&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ov extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new D,ko=new me;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ud,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Dv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ud&&(e.usage=this.usage),e}}class kv extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fv extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ht extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let MS=0;const Mn=new lt,gu=new Rt,ts=new D,fn=new Or,ua=new Or,Nt=new D;class nn extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lv(e)?Fv:kv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(fn.min,ua.min),fn.expandByPoint(Nt),Nt.addVectors(fn.max,ua.max),fn.expandByPoint(Nt)):(fn.expandByPoint(ua.min),fn.expandByPoint(ua.max))}fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Nt.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Nt.add(ts)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new D,l[I]=new D;const c=new D,f=new D,h=new D,u=new me,p=new me,g=new me,y=new D,m=new D;function d(I,T,S){c.fromBufferAttribute(i,I),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),u.fromBufferAttribute(s,I),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),f.sub(c),h.sub(c),p.sub(u),g.sub(u);const k=1/(p.x*g.y-g.x*p.y);isFinite(k)&&(y.copy(f).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(k),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(k),o[I].add(y),o[T].add(y),o[S].add(y),l[I].add(m),l[T].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,T=_.length;I<T;++I){const S=_[I],k=S.start,K=S.count;for(let U=k,j=k+K;U<j;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new D,M=new D,R=new D,C=new D;function b(I){R.fromBufferAttribute(r,I),C.copy(R);const T=o[I];v.copy(T),v.sub(R.multiplyScalar(R.dot(T))).normalize(),M.crossVectors(C,T);const k=M.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,k)}for(let I=0,T=_.length;I<T;++I){const S=_[I],k=S.start,K=S.count;for(let U=k,j=k+K;U<j;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,f=new D,h=new D;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,u=new c.constructor(l.length*f);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*f;for(let d=0;d<f;d++)u[g++]=c[p++]}return new Pn(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const u=c[f],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,p=h.length;u<p;u++)f.push(h[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nm=new lt,hr=new pc,Fo=new hc,im=new D,ns=new D,is=new D,rs=new D,vu=new D,zo=new D,Bo=new me,Ho=new me,Vo=new me,rm=new D,sm=new D,am=new D,Go=new D,Wo=new D;class Ft extends Rt{constructor(e=new nn,t=new Ov){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(vu.fromBufferAttribute(h,e),a?zo.addScaledVector(vu,f):zo.addScaledVector(vu.sub(t),f))}t.add(zo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(Fo.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Fo,im)===null||hr.origin.distanceToSquared(im)>(e.far-e.near)**2))&&(nm.copy(s).invert(),hr.copy(e.ray).applyMatrix4(nm),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const m=u[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,R=v;M<R;M+=3){const C=o.getX(M),b=o.getX(M+1),I=o.getX(M+2);r=Xo(this,d,e,i,c,f,h,C,b,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const _=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);r=Xo(this,a,e,i,c,f,h,_,v,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const m=u[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,R=v;M<R;M+=3){const C=M,b=M+1,I=M+2;r=Xo(this,d,e,i,c,f,h,C,b,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const _=m,v=m+1,M=m+2;r=Xo(this,a,e,i,c,f,h,_,v,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function wS(n,e,t,i,r,s,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ir,o),l===null)return null;Wo.copy(o),Wo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wo);return c<t.near||c>t.far?null:{distance:c,point:Wo.clone(),object:n}}function Xo(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ns),n.getVertexPosition(l,is),n.getVertexPosition(c,rs);const f=wS(n,e,t,i,ns,is,rs,Go);if(f){r&&(Bo.fromBufferAttribute(r,o),Ho.fromBufferAttribute(r,l),Vo.fromBufferAttribute(r,c),f.uv=Gn.getInterpolation(Go,ns,is,rs,Bo,Ho,Vo,new me)),s&&(Bo.fromBufferAttribute(s,o),Ho.fromBufferAttribute(s,l),Vo.fromBufferAttribute(s,c),f.uv1=Gn.getInterpolation(Go,ns,is,rs,Bo,Ho,Vo,new me)),a&&(rm.fromBufferAttribute(a,o),sm.fromBufferAttribute(a,l),am.fromBufferAttribute(a,c),f.normal=Gn.getInterpolation(Go,ns,is,rs,rm,sm,am,new D),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new D,materialIndex:0};Gn.getNormal(ns,is,rs,h.normal),f.face=h}return f}class Hr extends nn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(h,2));function g(y,m,d,_,v,M,R,C,b,I,T){const S=M/b,k=R/I,K=M/2,U=R/2,j=C/2,$=b+1,ee=I+1;let ae=0,O=0;const F=new D;for(let L=0;L<ee;L++){const V=L*k-U;for(let ce=0;ce<$;ce++){const ye=ce*S-K;F[y]=ye*_,F[m]=V*v,F[d]=j,c.push(F.x,F.y,F.z),F[y]=0,F[m]=0,F[d]=C>0?1:-1,f.push(F.x,F.y,F.z),h.push(ce/b),h.push(1-L/I),ae+=1}}for(let L=0;L<I;L++)for(let V=0;V<b;V++){const ce=u+V+$*L,ye=u+V+$*(L+1),N=u+(V+1)+$*(L+1),Z=u+(V+1)+$*L;l.push(ce,ye,Z),l.push(ye,N,Z),O+=6}o.addGroup(p,O,T),p+=O,u+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=Xs(n[t]);for(const r in i)e[r]=i[r]}return e}function TS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const AS={clone:Xs,merge:$t};var bS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bS,this.fragmentShader=CS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=TS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bv extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new D,om=new me,lm=new me;class mn extends Bv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Od*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,om,lm),t.subVectors(lm,om)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,as=1;class RS extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(ss,as,e,t);r.layers=this.layers,this.add(r);const s=new mn(ss,as,e,t);s.layers=this.layers,this.add(s);const a=new mn(ss,as,e,t);a.layers=this.layers,this.add(a);const o=new mn(ss,as,e,t);o.layers=this.layers,this.add(o);const l=new mn(ss,as,e,t);l.layers=this.layers,this.add(l);const c=new mn(ss,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(h,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hv extends Jt{constructor(e,t,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],t=t!==void 0?t:Vs,super(e,t,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PS extends Ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Hr(5,5,5),s=new sr({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Qi});s.uniforms.tEquirect.value=t;const a=new Ft(r,s),o=t.minFilter;return t.minFilter===Ar&&(t.minFilter=Vn),new RS(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const _u=new D,LS=new D,DS=new He;class ki{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_u.subVectors(i,t).cross(LS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||DS.getNormalMatrix(e),r=this.coplanarPoint(_u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new hc,Ko=new D;class kf{constructor(e=new ki,t=new ki,i=new ki,r=new ki,s=new ki,a=new ki){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],h=r[6],u=r[7],p=r[8],g=r[9],y=r[10],m=r[11],d=r[12],_=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,u-c,m-p,M-d).normalize(),i[1].setComponents(l+s,u+c,m+p,M+d).normalize(),i[2].setComponents(l+a,u+f,m+g,M+_).normalize(),i[3].setComponents(l-a,u-f,m-g,M-_).normalize(),i[4].setComponents(l-o,u-h,m-y,M-v).normalize(),t===gi)i[5].setComponents(l+o,u+h,m+y,M+v).normalize();else if(t===Wl)i[5].setComponents(o,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ko.x=r.normal.x>0?e.max.x:e.min.x,Ko.y=r.normal.y>0?e.max.y:e.min.y,Ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vv(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function NS(n){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l._updateRange,u=l.updateRanges;if(n.bindBuffer(c,o),h.count===-1&&u.length===0&&n.bufferSubData(c,0,f),u.length!==0){for(let p=0,g=u.length;p<g;p++){const y=u[p];n.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class mc extends nn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,u=t/l,p=[],g=[],y=[],m=[];for(let d=0;d<f;d++){const _=d*u-a;for(let v=0;v<c;v++){const M=v*h-s;g.push(M,-_,0),y.push(0,0,1),m.push(v/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const v=_+c*d,M=_+c*(d+1),R=_+1+c*(d+1),C=_+1+c*d;p.push(v,M,C),p.push(M,R,C)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.widthSegments,e.heightSegments)}}var IS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,US=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,OS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,WS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uE="gl_FragColor = linearToOutputTexel( gl_FragColor );",dE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ME=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ZE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,gM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_M=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,HM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ew=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:IS,alphahash_pars_fragment:US,alphamap_fragment:OS,alphamap_pars_fragment:kS,alphatest_fragment:FS,alphatest_pars_fragment:zS,aomap_fragment:BS,aomap_pars_fragment:HS,batching_pars_vertex:VS,batching_vertex:GS,begin_vertex:WS,beginnormal_vertex:XS,bsdfs:KS,iridescence_fragment:YS,bumpmap_pars_fragment:qS,clipping_planes_fragment:jS,clipping_planes_pars_fragment:$S,clipping_planes_pars_vertex:ZS,clipping_planes_vertex:QS,color_fragment:JS,color_pars_fragment:eE,color_pars_vertex:tE,color_vertex:nE,common:iE,cube_uv_reflection_fragment:rE,defaultnormal_vertex:sE,displacementmap_pars_vertex:aE,displacementmap_vertex:oE,emissivemap_fragment:lE,emissivemap_pars_fragment:cE,colorspace_fragment:uE,colorspace_pars_fragment:dE,envmap_fragment:fE,envmap_common_pars_fragment:hE,envmap_pars_fragment:pE,envmap_pars_vertex:mE,envmap_physical_pars_fragment:AE,envmap_vertex:gE,fog_vertex:vE,fog_pars_vertex:_E,fog_fragment:yE,fog_pars_fragment:xE,gradientmap_pars_fragment:SE,lightmap_pars_fragment:EE,lights_lambert_fragment:ME,lights_lambert_pars_fragment:wE,lights_pars_begin:TE,lights_toon_fragment:bE,lights_toon_pars_fragment:CE,lights_phong_fragment:RE,lights_phong_pars_fragment:PE,lights_physical_fragment:LE,lights_physical_pars_fragment:DE,lights_fragment_begin:NE,lights_fragment_maps:IE,lights_fragment_end:UE,logdepthbuf_fragment:OE,logdepthbuf_pars_fragment:kE,logdepthbuf_pars_vertex:FE,logdepthbuf_vertex:zE,map_fragment:BE,map_pars_fragment:HE,map_particle_fragment:VE,map_particle_pars_fragment:GE,metalnessmap_fragment:WE,metalnessmap_pars_fragment:XE,morphinstance_vertex:KE,morphcolor_vertex:YE,morphnormal_vertex:qE,morphtarget_pars_vertex:jE,morphtarget_vertex:$E,normal_fragment_begin:ZE,normal_fragment_maps:QE,normal_pars_fragment:JE,normal_pars_vertex:eM,normal_vertex:tM,normalmap_pars_fragment:nM,clearcoat_normal_fragment_begin:iM,clearcoat_normal_fragment_maps:rM,clearcoat_pars_fragment:sM,iridescence_pars_fragment:aM,opaque_fragment:oM,packing:lM,premultiplied_alpha_fragment:cM,project_vertex:uM,dithering_fragment:dM,dithering_pars_fragment:fM,roughnessmap_fragment:hM,roughnessmap_pars_fragment:pM,shadowmap_pars_fragment:mM,shadowmap_pars_vertex:gM,shadowmap_vertex:vM,shadowmask_pars_fragment:_M,skinbase_vertex:yM,skinning_pars_vertex:xM,skinning_vertex:SM,skinnormal_vertex:EM,specularmap_fragment:MM,specularmap_pars_fragment:wM,tonemapping_fragment:TM,tonemapping_pars_fragment:AM,transmission_fragment:bM,transmission_pars_fragment:CM,uv_pars_fragment:RM,uv_pars_vertex:PM,uv_vertex:LM,worldpos_vertex:DM,background_vert:NM,background_frag:IM,backgroundCube_vert:UM,backgroundCube_frag:OM,cube_vert:kM,cube_frag:FM,depth_vert:zM,depth_frag:BM,distanceRGBA_vert:HM,distanceRGBA_frag:VM,equirect_vert:GM,equirect_frag:WM,linedashed_vert:XM,linedashed_frag:KM,meshbasic_vert:YM,meshbasic_frag:qM,meshlambert_vert:jM,meshlambert_frag:$M,meshmatcap_vert:ZM,meshmatcap_frag:QM,meshnormal_vert:JM,meshnormal_frag:ew,meshphong_vert:tw,meshphong_frag:nw,meshphysical_vert:iw,meshphysical_frag:rw,meshtoon_vert:sw,meshtoon_frag:aw,points_vert:ow,points_frag:lw,shadow_vert:cw,shadow_frag:uw,sprite_vert:dw,sprite_frag:fw},pe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},$n={basic:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:$t([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:$t([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:$t([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:$t([pe.points,pe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:$t([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:$t([pe.common,pe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:$t([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:$t([pe.sprite,pe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:$t([pe.common,pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:$t([pe.lights,pe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};$n.physical={uniforms:$t([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Yo={r:0,b:0,g:0},mr=new ni,hw=new lt;function pw(n,e,t,i,r,s,a){const o=new Ke(0);let l=s===!0?0:1,c,f,h=null,u=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function y(_){let v=!1;const M=g(_);M===null?d(o,l):M&&M.isColor&&(d(M,1),v=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(_,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===uc)?(f===void 0&&(f=new Ft(new Hr(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Xs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),mr.copy(v.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(hw.makeRotationFromEuler(mr)),f.material.toneMapped=st.getTransfer(M.colorSpace)!==dt,(h!==M||u!==M.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,h=M,u=M.version,p=n.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ft(new mc(2,2),new sr({name:"BackgroundMaterial",uniforms:Xs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,v){_.getRGB(Yo,zv(n)),i.buffers.color.setClear(Yo.r,Yo.g,Yo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(o,l)},render:y,addToRenderList:m}}function mw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(S,k,K,U,j){let $=!1;const ee=h(U,K,k);s!==ee&&(s=ee,c(s.object)),$=p(S,U,K,j),$&&g(S,U,K,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(S,k,K,U),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function f(S){return n.deleteVertexArray(S)}function h(S,k,K){const U=K.wireframe===!0;let j=i[S.id];j===void 0&&(j={},i[S.id]=j);let $=j[k.id];$===void 0&&($={},j[k.id]=$);let ee=$[U];return ee===void 0&&(ee=u(l()),$[U]=ee),ee}function u(S){const k=[],K=[],U=[];for(let j=0;j<t;j++)k[j]=0,K[j]=0,U[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:U,object:S,attributes:{},index:null}}function p(S,k,K,U){const j=s.attributes,$=k.attributes;let ee=0;const ae=K.getAttributes();for(const O in ae)if(ae[O].location>=0){const L=j[O];let V=$[O];if(V===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),L===void 0||L.attribute!==V||V&&L.data!==V.data)return!0;ee++}return s.attributesNum!==ee||s.index!==U}function g(S,k,K,U){const j={},$=k.attributes;let ee=0;const ae=K.getAttributes();for(const O in ae)if(ae[O].location>=0){let L=$[O];L===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(L=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(L=S.instanceColor));const V={};V.attribute=L,L&&L.data&&(V.data=L.data),j[O]=V,ee++}s.attributes=j,s.attributesNum=ee,s.index=U}function y(){const S=s.newAttributes;for(let k=0,K=S.length;k<K;k++)S[k]=0}function m(S){d(S,0)}function d(S,k){const K=s.newAttributes,U=s.enabledAttributes,j=s.attributeDivisors;K[S]=1,U[S]===0&&(n.enableVertexAttribArray(S),U[S]=1),j[S]!==k&&(n.vertexAttribDivisor(S,k),j[S]=k)}function _(){const S=s.newAttributes,k=s.enabledAttributes;for(let K=0,U=k.length;K<U;K++)k[K]!==S[K]&&(n.disableVertexAttribArray(K),k[K]=0)}function v(S,k,K,U,j,$,ee){ee===!0?n.vertexAttribIPointer(S,k,K,j,$):n.vertexAttribPointer(S,k,K,U,j,$)}function M(S,k,K,U){y();const j=U.attributes,$=K.getAttributes(),ee=k.defaultAttributeValues;for(const ae in $){const O=$[ae];if(O.location>=0){let F=j[ae];if(F===void 0&&(ae==="instanceMatrix"&&S.instanceMatrix&&(F=S.instanceMatrix),ae==="instanceColor"&&S.instanceColor&&(F=S.instanceColor)),F!==void 0){const L=F.normalized,V=F.itemSize,ce=e.get(F);if(ce===void 0)continue;const ye=ce.buffer,N=ce.type,Z=ce.bytesPerElement,ge=N===n.INT||N===n.UNSIGNED_INT||F.gpuType===Mv;if(F.isInterleavedBufferAttribute){const ue=F.data,ke=ue.stride,Ne=F.offset;if(ue.isInstancedInterleavedBuffer){for(let H=0;H<O.locationSize;H++)d(O.location+H,ue.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let H=0;H<O.locationSize;H++)m(O.location+H);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let H=0;H<O.locationSize;H++)v(O.location+H,V/O.locationSize,N,L,ke*Z,(Ne+V/O.locationSize*H)*Z,ge)}else{if(F.isInstancedBufferAttribute){for(let ue=0;ue<O.locationSize;ue++)d(O.location+ue,F.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ue=0;ue<O.locationSize;ue++)m(O.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let ue=0;ue<O.locationSize;ue++)v(O.location+ue,V/O.locationSize,N,L,V*Z,V/O.locationSize*ue*Z,ge)}}else if(ee!==void 0){const L=ee[ae];if(L!==void 0)switch(L.length){case 2:n.vertexAttrib2fv(O.location,L);break;case 3:n.vertexAttrib3fv(O.location,L);break;case 4:n.vertexAttrib4fv(O.location,L);break;default:n.vertexAttrib1fv(O.location,L)}}}}_()}function R(){I();for(const S in i){const k=i[S];for(const K in k){const U=k[K];for(const j in U)f(U[j].object),delete U[j];delete k[K]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const k=i[S.id];for(const K in k){const U=k[K];for(const j in U)f(U[j].object),delete U[j];delete k[K]}delete i[S.id]}function b(S){for(const k in i){const K=i[k];if(K[S.id]===void 0)continue;const U=K[S.id];for(const j in U)f(U[j].object),delete U[j];delete K[S.id]}}function I(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function gw(n,e,t){let i;function r(c){i=c}function s(c,f){n.drawArrays(i,c,f),t.update(f,i,1)}function a(c,f,h){h!==0&&(n.drawArraysInstanced(i,c,f,h),t.update(f,i,h))}function o(c,f,h){if(h===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<h;p++)this.render(c[p],f[p]);else{u.multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let g=0;g<h;g++)p+=f[g];t.update(p,i,1)}}function l(c,f,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],f[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,u,0,h);let g=0;for(let y=0;y<h;y++)g+=f[y];for(let y=0;y<u.length;y++)t.update(g,i,u[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Jn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const b=C===dc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==rr&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Gi&&!b)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:M,maxSamples:R}}function _w(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ki,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=f(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?f(null):c();else{const _=s?0:i,v=_*4;let M=d.clippingState||null;l.value=M,M=f(g,u,v,p);for(let R=0;R!==v;++R)M[R]=t[R];d.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,p,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const d=p+y*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,M=p;v!==y;++v,M+=4)a.copy(h[v]).applyMatrix4(_,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function yw(n){let e=new WeakMap;function t(a,o){return o===Ld?a.mapping=Vs:o===Dd&&(a.mapping=Gs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ld||o===Dd)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new PS(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Gv extends Bv{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,cm=[.125,.215,.35,.446,.526,.582],Sr=20,yu=new Gv,um=new Ke;let xu=null,Su=0,Eu=0,Mu=!1;const yr=(1+Math.sqrt(5))/2,os=1/yr,dm=[new D(-yr,os,0),new D(yr,os,0),new D(-os,0,yr),new D(os,0,yr),new D(0,yr,-os),new D(0,yr,os),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){xu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xu,Su,Eu),this._renderer.xr.enabled=Mu,e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:dc,format:Jn,colorSpace:cr,depthBuffer:!1},r=hm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xw(s)),this._blurMaterial=Sw(s,e,t)}return r}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,yu)}_sceneToCubeUV(e,t,i,r){const o=new mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(um),f.toneMapping=Ji,f.autoClear=!1;const p=new Ov({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Ft(new Hr,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(um),y=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):_===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;qo(r,_*v,d>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(g,o),f.render(e,o)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=u,f.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Vs||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,yu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=dm[(r-s-1)%dm.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Ft(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),y=s/g,m=isFinite(s)?1+Math.floor(f*y):Sr;m>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const d=[];let _=0;for(let b=0;b<Sr;++b){const I=b/y,T=Math.exp(-I*I/2);d.push(T),b===0?_+=T:b<m&&(_+=2*T)}for(let b=0;b<d.length;b++)d[b]=d[b]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;const M=this._sizeLods[r],R=3*M*(r>v-Ts?r-v+Ts:0),C=4*(this._cubeSize-M);qo(t,R,C,3*M,2*M),l.setRenderTarget(t),l.render(h,yu)}}function xw(n){const e=[],t=[],i=[];let r=n;const s=n-Ts+1+cm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ts?l=cm[a-n+Ts-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,g=6,y=3,m=2,d=1,_=new Float32Array(y*g*p),v=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,I=C>2?0:-1,T=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];_.set(T,y*g*C),v.set(u,m*g*C);const S=[C,C,C,C,C,C];M.set(S,d*g*C)}const R=new nn;R.setAttribute("position",new Pn(_,y)),R.setAttribute("uv",new Pn(v,m)),R.setAttribute("faceIndex",new Pn(M,d)),e.push(R),r>Ts&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hm(n,e,t){const i=new Ir(n,e,t);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Sw(n,e,t){const i=new Float32Array(Sr),r=new D(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function pm(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function mm(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ff(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ew(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ld||l===Dd,f=l===Vs||l===Gs;if(c||f){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new fm(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||f&&p&&r(p)?(t===null&&(t=new fm(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Mw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ww(n,e,t,i){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const y=u.morphAttributes[g];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const y=p[g];for(let m=0,d=y.length;m<d;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(h){const u=[],p=h.index,g=h.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let v=0,M=_.length;v<M;v+=3){const R=_[v+0],C=_[v+1],b=_[v+2];u.push(R,C,C,b,b,R)}}else if(g!==void 0){const _=g.array;y=g.version;for(let v=0,M=_.length/3-1;v<M;v+=3){const R=v+0,C=v+1,b=v+2;u.push(R,C,C,b,b,R)}}else return;const m=new(Lv(u)?Fv:kv)(u,1);m.version=y;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function f(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Tw(n,e,t){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,p){n.drawElements(i,p,s,u*a),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,u*a,g),t.update(p,i,g))}function f(u,p,g){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<g;m++)this.render(u[m]/a,p[m]);else{y.multiDrawElementsWEBGL(i,p,0,s,u,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}}function h(u,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/a,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,y,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_];for(let _=0;_<y.length;_++)t.update(d,i,y[_])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Aw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bw(n,e,t){const i=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let S=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let R=o.attributes.position.count*M,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*C*4*h),I=new Iv(b,R,C,h);I.type=Gi,I.needsUpdate=!0;const T=M*4;for(let k=0;k<h;k++){const K=d[k],U=_[k],j=v[k],$=R*C*4*k;for(let ee=0;ee<K.count;ee++){const ae=ee*T;g===!0&&(r.fromBufferAttribute(K,ee),b[$+ae+0]=r.x,b[$+ae+1]=r.y,b[$+ae+2]=r.z,b[$+ae+3]=0),y===!0&&(r.fromBufferAttribute(U,ee),b[$+ae+4]=r.x,b[$+ae+5]=r.y,b[$+ae+6]=r.z,b[$+ae+7]=0),m===!0&&(r.fromBufferAttribute(j,ee),b[$+ae+8]=r.x,b[$+ae+9]=r.y,b[$+ae+10]=r.z,b[$+ae+11]=j.itemSize===4?r.w:1)}}u={count:h,texture:I,size:new me(R,C)},i.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Cw(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Wv extends Jt{constructor(e,t,i,r,s,a,o,l,c,f){if(f=f!==void 0?f:Ns,f!==Ns&&f!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ns&&(i=Ws),i===void 0&&f===to&&(i=oo),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xv=new Jt,Kv=new Wv(1,1);Kv.compareFunction=Pv;const Yv=new Iv,qv=new pS,jv=new Hv,gm=[],vm=[],_m=new Float32Array(16),ym=new Float32Array(9),xm=new Float32Array(4);function js(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=gm[r];if(s===void 0&&(s=new Float32Array(r),gm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gc(n,e){let t=vm[e];t===void 0&&(t=new Int32Array(e),vm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Rw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Pw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Lw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function Dw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Nw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;xm.set(i),n.uniformMatrix2fv(this.addr,!1,xm),Lt(t,i)}}function Iw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;ym.set(i),n.uniformMatrix3fv(this.addr,!1,ym),Lt(t,i)}}function Uw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;_m.set(i),n.uniformMatrix4fv(this.addr,!1,_m),Lt(t,i)}}function Ow(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Fw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function zw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function Bw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Gw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Ww(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Kv:Xv;t.setTexture2D(e||s,r)}function Xw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||qv,r)}function Kw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||jv,r)}function Yw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Yv,r)}function qw(n){switch(n){case 5126:return Rw;case 35664:return Pw;case 35665:return Lw;case 35666:return Dw;case 35674:return Nw;case 35675:return Iw;case 35676:return Uw;case 5124:case 35670:return Ow;case 35667:case 35671:return kw;case 35668:case 35672:return Fw;case 35669:case 35673:return zw;case 5125:return Bw;case 36294:return Hw;case 36295:return Vw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return Xw;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Yw}}function jw(n,e){n.uniform1fv(this.addr,e)}function $w(n,e){const t=js(e,this.size,2);n.uniform2fv(this.addr,t)}function Zw(n,e){const t=js(e,this.size,3);n.uniform3fv(this.addr,t)}function Qw(n,e){const t=js(e,this.size,4);n.uniform4fv(this.addr,t)}function Jw(n,e){const t=js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function e2(n,e){const t=js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function t2(n,e){const t=js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function n2(n,e){n.uniform1iv(this.addr,e)}function i2(n,e){n.uniform2iv(this.addr,e)}function r2(n,e){n.uniform3iv(this.addr,e)}function s2(n,e){n.uniform4iv(this.addr,e)}function a2(n,e){n.uniform1uiv(this.addr,e)}function o2(n,e){n.uniform2uiv(this.addr,e)}function l2(n,e){n.uniform3uiv(this.addr,e)}function c2(n,e){n.uniform4uiv(this.addr,e)}function u2(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Xv,s[a])}function d2(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||qv,s[a])}function f2(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||jv,s[a])}function h2(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Yv,s[a])}function p2(n){switch(n){case 5126:return jw;case 35664:return $w;case 35665:return Zw;case 35666:return Qw;case 35674:return Jw;case 35675:return e2;case 35676:return t2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return r2;case 35669:case 35673:return s2;case 5125:return a2;case 36294:return o2;case 36295:return l2;case 36296:return c2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return d2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return h2}}class m2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qw(t.type)}}class g2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p2(t.type)}}class v2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const wu=/(\w+)(\])?(\[|\.)?/g;function Sm(n,e){n.seq.push(e),n.map[e.id]=e}function _2(n,e,t){const i=n.name,r=i.length;for(wu.lastIndex=0;;){const s=wu.exec(i),a=wu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Sm(t,c===void 0?new m2(o,n,e):new g2(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new v2(o),Sm(t,h)),t=h}}}class ml{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);_2(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Em(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const y2=37297;let x2=0;function S2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function E2(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===Gl&&t===Vl?i="LinearDisplayP3ToLinearSRGB":e===Vl&&t===Gl&&(i="LinearSRGBToLinearDisplayP3"),n){case cr:case fc:return[i,"LinearTransferOETF"];case jn:case Uf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Mm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+S2(n.getShaderSource(e),a)}else return r}function M2(n,e){const t=E2(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function w2(n,e){let t;switch(e){case D1:t="Linear";break;case N1:t="Reinhard";break;case I1:t="OptimizedCineon";break;case U1:t="ACESFilmic";break;case k1:t="AgX";break;case F1:t="Neutral";break;case O1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function T2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function A2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function b2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ta(n){return n!==""}function wm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C2=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(n){return n.replace(C2,P2)}const R2=new Map;function P2(n,e){let t=Be[e];if(t===void 0){const i=R2.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kd(t)}const L2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(n){return n.replace(L2,D2)}function D2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function N2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===r1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function I2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function O2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xv:e="ENVMAP_BLENDING_MULTIPLY";break;case P1:e="ENVMAP_BLENDING_MIX";break;case L1:e="ENVMAP_BLENDING_ADD";break}return e}function k2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function F2(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=N2(t),c=I2(t),f=U2(t),h=O2(t),u=k2(t),p=T2(t),g=A2(s),y=r.createProgram();let m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ta).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ta).join(`
`),d.length>0&&(d+=`
`)):(m=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),d=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Be.tonemapping_pars_fragment:"",t.toneMapping!==Ji?w2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,M2("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),a=kd(a),a=wm(a,t),a=Tm(a,t),o=kd(o),o=wm(o,t),o=Tm(o,t),a=Am(a),o=Am(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=_+m+a,M=_+d+o,R=Em(r,r.VERTEX_SHADER,v),C=Em(r,r.FRAGMENT_SHADER,M);r.attachShader(y,R),r.attachShader(y,C),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function b(k){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(y).trim(),U=r.getShaderInfoLog(R).trim(),j=r.getShaderInfoLog(C).trim();let $=!0,ee=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,R,C);else{const ae=Mm(r,R,"vertex"),O=Mm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+K+`
`+ae+`
`+O)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(U===""||j==="")&&(ee=!1);ee&&(k.diagnostics={runnable:$,programLog:K,vertexShader:{log:U,prefix:m},fragmentShader:{log:j,prefix:d}})}r.deleteShader(R),r.deleteShader(C),I=new ml(r,y),T=b2(r,y)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,y2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=C,this}let z2=0;class B2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new H2(e),t.set(e,i)),i}}class H2{constructor(e){this.id=z2++,this.code=e,this.usedTimes=0}}function V2(n,e,t,i,r,s,a){const o=new Of,l=new B2,c=new Set,f=[],h=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,k,K,U){const j=K.fog,$=U.geometry,ee=T.isMeshStandardMaterial?K.environment:null,ae=(T.isMeshStandardMaterial?t:e).get(T.envMap||ee),O=ae&&ae.mapping===uc?ae.image.height:null,F=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const L=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,V=L!==void 0?L.length:0;let ce=0;$.morphAttributes.position!==void 0&&(ce=1),$.morphAttributes.normal!==void 0&&(ce=2),$.morphAttributes.color!==void 0&&(ce=3);let ye,N,Z,ge;if(F){const Je=$n[F];ye=Je.vertexShader,N=Je.fragmentShader}else ye=T.vertexShader,N=T.fragmentShader,l.update(T),Z=l.getVertexShaderID(T),ge=l.getFragmentShaderID(T);const ue=n.getRenderTarget(),ke=U.isInstancedMesh===!0,Ne=U.isBatchedMesh===!0,H=!!T.map,Ze=!!T.matcap,Te=!!ae,Qe=!!T.aoMap,Me=!!T.lightMap,Ie=!!T.bumpMap,Pe=!!T.normalMap,Ve=!!T.displacementMap,at=!!T.emissiveMap,P=!!T.metalnessMap,w=!!T.roughnessMap,Y=T.anisotropy>0,Q=T.clearcoat>0,ne=T.dispersion>0,se=T.iridescence>0,fe=T.sheen>0,le=T.transmission>0,ie=Y&&!!T.anisotropyMap,he=Q&&!!T.clearcoatMap,J=Q&&!!T.clearcoatNormalMap,Se=Q&&!!T.clearcoatRoughnessMap,qe=se&&!!T.iridescenceMap,Ae=se&&!!T.iridescenceThicknessMap,xe=fe&&!!T.sheenColorMap,Ue=fe&&!!T.sheenRoughnessMap,Ge=!!T.specularMap,it=!!T.specularColorMap,Fe=!!T.specularIntensityMap,x=le&&!!T.transmissionMap,z=le&&!!T.thicknessMap,G=!!T.gradientMap,re=!!T.alphaMap,de=T.alphaTest>0,Oe=!!T.alphaHash,We=!!T.extensions;let vt=Ji;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Dt={shaderID:F,shaderType:T.type,shaderName:T.name,vertexShader:ye,fragmentShader:N,defines:T.defines,customVertexShaderID:Z,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ne,instancing:ke,instancingColor:ke&&U.instanceColor!==null,instancingMorph:ke&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:cr,alphaToCoverage:!!T.alphaToCoverage,map:H,matcap:Ze,envMap:Te,envMapMode:Te&&ae.mapping,envMapCubeUVHeight:O,aoMap:Qe,lightMap:Me,bumpMap:Ie,normalMap:Pe,displacementMap:u&&Ve,emissiveMap:at,normalMapObjectSpace:Pe&&T.normalMapType===Q1,normalMapTangentSpace:Pe&&T.normalMapType===Rv,metalnessMap:P,roughnessMap:w,anisotropy:Y,anisotropyMap:ie,clearcoat:Q,clearcoatMap:he,clearcoatNormalMap:J,clearcoatRoughnessMap:Se,dispersion:ne,iridescence:se,iridescenceMap:qe,iridescenceThicknessMap:Ae,sheen:fe,sheenColorMap:xe,sheenRoughnessMap:Ue,specularMap:Ge,specularColorMap:it,specularIntensityMap:Fe,transmission:le,transmissionMap:x,thicknessMap:z,gradientMap:G,opaque:T.transparent===!1&&T.blending===Ds&&T.alphaToCoverage===!1,alphaMap:re,alphaTest:de,alphaHash:Oe,combine:T.combine,mapUv:H&&y(T.map.channel),aoMapUv:Qe&&y(T.aoMap.channel),lightMapUv:Me&&y(T.lightMap.channel),bumpMapUv:Ie&&y(T.bumpMap.channel),normalMapUv:Pe&&y(T.normalMap.channel),displacementMapUv:Ve&&y(T.displacementMap.channel),emissiveMapUv:at&&y(T.emissiveMap.channel),metalnessMapUv:P&&y(T.metalnessMap.channel),roughnessMapUv:w&&y(T.roughnessMap.channel),anisotropyMapUv:ie&&y(T.anisotropyMap.channel),clearcoatMapUv:he&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:J&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&y(T.sheenRoughnessMap.channel),specularMapUv:Ge&&y(T.specularMap.channel),specularColorMapUv:it&&y(T.specularColorMap.channel),specularIntensityMapUv:Fe&&y(T.specularIntensityMap.channel),transmissionMapUv:x&&y(T.transmissionMap.channel),thicknessMapUv:z&&y(T.thicknessMap.channel),alphaMapUv:re&&y(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Pe||Y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&(H||re),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:H&&T.map.isVideoTexture===!0&&st.getTransfer(T.map.colorSpace)===dt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===hi,flipSided:T.side===cn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:We&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:We&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function d(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)S.push(k),S.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(_(S,T),v(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function _(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function v(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),T.push(o.mask)}function M(T){const S=g[T.type];let k;if(S){const K=$n[S];k=AS.clone(K.uniforms)}else k=T.uniforms;return k}function R(T,S){let k;for(let K=0,U=f.length;K<U;K++){const j=f[K];if(j.cacheKey===S){k=j,++k.usedTimes;break}}return k===void 0&&(k=new F2(n,S,T,s),f.push(k)),k}function C(T){if(--T.usedTimes===0){const S=f.indexOf(T);f[S]=f[f.length-1],f.pop(),T.destroy()}}function b(T){l.remove(T)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:R,releaseProgram:C,releaseShaderCache:b,programs:f,dispose:I}}function G2(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function W2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,u,p,g,y,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=u,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=y,d.group=m),e++,d}function o(h,u,p,g,y,m){const d=a(h,u,p,g,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,u,p,g,y,m){const d=a(h,u,p,g,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,u){t.length>1&&t.sort(h||W2),i.length>1&&i.sort(u||Cm),r.length>1&&r.sort(u||Cm)}function f(){for(let h=e,u=n.length;h<u;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function X2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Rm,n.set(i,[a])):r>=s.length?(a=new Rm,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function K2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ke};break;case"SpotLight":t={position:new D,direction:new D,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Y2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let q2=0;function j2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $2(n){const e=new K2,t=Y2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new lt,a=new lt;function o(c,f){let h=0,u=0,p=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let g=0,y=0,m=0,d=0,_=0,v=0,M=0,R=0,C=0,b=0,I=0;c.sort(j2);const T=f===!0?Math.PI:1;for(let k=0,K=c.length;k<K;k++){const U=c[k],j=U.color,$=U.intensity,ee=U.distance,ae=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=j.r*$*T,u+=j.g*$*T,p+=j.b*$*T;else if(U.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(U.sh.coefficients[O],$);I++}else if(U.isDirectionalLight){const O=e.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const F=U.shadow,L=t.get(U);L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,i.directionalShadow[g]=L,i.directionalShadowMap[g]=ae,i.directionalShadowMatrix[g]=U.shadow.matrix,v++}i.directional[g]=O,g++}else if(U.isSpotLight){const O=e.get(U);O.position.setFromMatrixPosition(U.matrixWorld),O.color.copy(j).multiplyScalar($*T),O.distance=ee,O.coneCos=Math.cos(U.angle),O.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),O.decay=U.decay,i.spot[m]=O;const F=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,F.updateMatrices(U),U.castShadow&&b++),i.spotLightMatrix[m]=F.matrix,U.castShadow){const L=t.get(U);L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,i.spotShadow[m]=L,i.spotShadowMap[m]=ae,R++}m++}else if(U.isRectAreaLight){const O=e.get(U);O.color.copy(j).multiplyScalar($),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),i.rectArea[d]=O,d++}else if(U.isPointLight){const O=e.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity*T),O.distance=U.distance,O.decay=U.decay,U.castShadow){const F=U.shadow,L=t.get(U);L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,L.shadowCameraNear=F.camera.near,L.shadowCameraFar=F.camera.far,i.pointShadow[y]=L,i.pointShadowMap[y]=ae,i.pointShadowMatrix[y]=U.shadow.matrix,M++}i.point[y]=O,y++}else if(U.isHemisphereLight){const O=e.get(U);O.skyColor.copy(U.color).multiplyScalar($*T),O.groundColor.copy(U.groundColor).multiplyScalar($*T),i.hemi[_]=O,_++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;const S=i.hash;(S.directionalLength!==g||S.pointLength!==y||S.spotLength!==m||S.rectAreaLength!==d||S.hemiLength!==_||S.numDirectionalShadows!==v||S.numPointShadows!==M||S.numSpotShadows!==R||S.numSpotMaps!==C||S.numLightProbes!==I)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=d,i.point.length=y,i.hemi.length=_,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=R+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=I,S.directionalLength=g,S.pointLength=y,S.spotLength=m,S.rectAreaLength=d,S.hemiLength=_,S.numDirectionalShadows=v,S.numPointShadows=M,S.numSpotShadows=R,S.numSpotMaps=C,S.numLightProbes=I,i.version=q2++)}function l(c,f){let h=0,u=0,p=0,g=0,y=0;const m=f.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const v=c[d];if(v.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Pm(n){const e=new $2(n),t=[],i=[];function r(f){c.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function a(f){i.push(f)}function o(f){e.setup(t,f)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Z2(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Pm(n),e.set(r,[o])):s>=a.length?(o=new Pm(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Q2 extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J2 extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nT(n,e,t){let i=new kf;const r=new me,s=new me,a=new gt,o=new Q2({depthPacking:Z1}),l=new J2,c={},f=t.maxTextureSize,h={[ir]:cn,[cn]:ir,[hi]:hi},u=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:eT,fragmentShader:tT}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ft(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yv;let d=this.type;this.render=function(C,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=n.getRenderTarget(),S=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Qi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const U=d!==ui&&this.type===ui,j=d===ui&&this.type!==ui;for(let $=0,ee=C.length;$<ee;$++){const ae=C[$],O=ae.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const F=O.getFrameExtents();if(r.multiply(F),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/F.x),r.x=s.x*F.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/F.y),r.y=s.y*F.y,O.mapSize.y=s.y)),O.map===null||U===!0||j===!0){const V=this.type!==ui?{minFilter:Cn,magFilter:Cn}:{};O.map!==null&&O.map.dispose(),O.map=new Ir(r.x,r.y,V),O.map.texture.name=ae.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const L=O.getViewportCount();for(let V=0;V<L;V++){const ce=O.getViewport(V);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),K.viewport(a),O.updateMatrices(ae,V),i=O.getFrustum(),M(b,I,O.camera,ae,this.type)}O.isPointLightShadow!==!0&&this.type===ui&&_(O,I),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,S,k)};function _(C,b){const I=e.update(y);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ir(r.x,r.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,I,u,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,I,p,y,null)}function v(C,b,I,T){let S=null;const k=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)S=k;else if(S=I.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const K=S.uuid,U=b.uuid;let j=c[K];j===void 0&&(j={},c[K]=j);let $=j[U];$===void 0&&($=S.clone(),j[U]=$,b.addEventListener("dispose",R)),S=$}if(S.visible=b.visible,S.wireframe=b.wireframe,T===ui?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const K=n.properties.get(S);K.light=I}return S}function M(C,b,I,T,S){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ui)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const U=e.update(C),j=C.material;if(Array.isArray(j)){const $=U.groups;for(let ee=0,ae=$.length;ee<ae;ee++){const O=$[ee],F=j[O.materialIndex];if(F&&F.visible){const L=v(C,F,T,S);C.onBeforeShadow(n,C,b,I,U,L,O),n.renderBufferDirect(I,null,U,L,C,O),C.onAfterShadow(n,C,b,I,U,L,O)}}}else if(j.visible){const $=v(C,j,T,S);C.onBeforeShadow(n,C,b,I,U,$,null),n.renderBufferDirect(I,null,U,$,C,null),C.onAfterShadow(n,C,b,I,U,$,null)}}const K=C.children;for(let U=0,j=K.length;U<j;U++)M(K[U],b,I,T,S)}function R(C){C.target.removeEventListener("dispose",R);for(const I in c){const T=c[I],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function iT(n){function e(){let x=!1;const z=new gt;let G=null;const re=new gt(0,0,0,0);return{setMask:function(de){G!==de&&!x&&(n.colorMask(de,de,de,de),G=de)},setLocked:function(de){x=de},setClear:function(de,Oe,We,vt,Dt){Dt===!0&&(de*=vt,Oe*=vt,We*=vt),z.set(de,Oe,We,vt),re.equals(z)===!1&&(n.clearColor(de,Oe,We,vt),re.copy(z))},reset:function(){x=!1,G=null,re.set(-1,0,0,0)}}}function t(){let x=!1,z=null,G=null,re=null;return{setTest:function(de){de?ge(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(de){z!==de&&!x&&(n.depthMask(de),z=de)},setFunc:function(de){if(G!==de){switch(de){case M1:n.depthFunc(n.NEVER);break;case w1:n.depthFunc(n.ALWAYS);break;case T1:n.depthFunc(n.LESS);break;case Bl:n.depthFunc(n.LEQUAL);break;case A1:n.depthFunc(n.EQUAL);break;case b1:n.depthFunc(n.GEQUAL);break;case C1:n.depthFunc(n.GREATER);break;case R1:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}G=de}},setLocked:function(de){x=de},setClear:function(de){re!==de&&(n.clearDepth(de),re=de)},reset:function(){x=!1,z=null,G=null,re=null}}}function i(){let x=!1,z=null,G=null,re=null,de=null,Oe=null,We=null,vt=null,Dt=null;return{setTest:function(Je){x||(Je?ge(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(Je){z!==Je&&!x&&(n.stencilMask(Je),z=Je)},setFunc:function(Je,Mt,ct){(G!==Je||re!==Mt||de!==ct)&&(n.stencilFunc(Je,Mt,ct),G=Je,re=Mt,de=ct)},setOp:function(Je,Mt,ct){(Oe!==Je||We!==Mt||vt!==ct)&&(n.stencilOp(Je,Mt,ct),Oe=Je,We=Mt,vt=ct)},setLocked:function(Je){x=Je},setClear:function(Je){Dt!==Je&&(n.clearStencil(Je),Dt=Je)},reset:function(){x=!1,z=null,G=null,re=null,de=null,Oe=null,We=null,vt=null,Dt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},f={},h=new WeakMap,u=[],p=null,g=!1,y=null,m=null,d=null,_=null,v=null,M=null,R=null,C=new Ke(0,0,0),b=0,I=!1,T=null,S=null,k=null,K=null,U=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ee=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ae)[1]),$=ee>=1):ae.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),$=ee>=2);let O=null,F={};const L=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),ce=new gt().fromArray(L),ye=new gt().fromArray(V);function N(x,z,G,re){const de=new Uint8Array(4),Oe=n.createTexture();n.bindTexture(x,Oe),n.texParameteri(x,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(x,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<G;We++)x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?n.texImage3D(z,0,n.RGBA,1,1,re,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(z+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Oe}const Z={};Z[n.TEXTURE_2D]=N(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=N(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=N(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=N(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),s.setFunc(Bl),Ie(!1),Pe(fp),ge(n.CULL_FACE),Qe(Qi);function ge(x){c[x]!==!0&&(n.enable(x),c[x]=!0)}function ue(x){c[x]!==!1&&(n.disable(x),c[x]=!1)}function ke(x,z){return f[x]!==z?(n.bindFramebuffer(x,z),f[x]=z,x===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=z),x===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=z),!0):!1}function Ne(x,z){let G=u,re=!1;if(x){G=h.get(z),G===void 0&&(G=[],h.set(z,G));const de=x.textures;if(G.length!==de.length||G[0]!==n.COLOR_ATTACHMENT0){for(let Oe=0,We=de.length;Oe<We;Oe++)G[Oe]=n.COLOR_ATTACHMENT0+Oe;G.length=de.length,re=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,re=!0);re&&n.drawBuffers(G)}function H(x){return p!==x?(n.useProgram(x),p=x,!0):!1}const Ze={[xr]:n.FUNC_ADD,[a1]:n.FUNC_SUBTRACT,[o1]:n.FUNC_REVERSE_SUBTRACT};Ze[l1]=n.MIN,Ze[c1]=n.MAX;const Te={[u1]:n.ZERO,[d1]:n.ONE,[f1]:n.SRC_COLOR,[Rd]:n.SRC_ALPHA,[_1]:n.SRC_ALPHA_SATURATE,[g1]:n.DST_COLOR,[p1]:n.DST_ALPHA,[h1]:n.ONE_MINUS_SRC_COLOR,[Pd]:n.ONE_MINUS_SRC_ALPHA,[v1]:n.ONE_MINUS_DST_COLOR,[m1]:n.ONE_MINUS_DST_ALPHA,[y1]:n.CONSTANT_COLOR,[x1]:n.ONE_MINUS_CONSTANT_COLOR,[S1]:n.CONSTANT_ALPHA,[E1]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(x,z,G,re,de,Oe,We,vt,Dt,Je){if(x===Qi){g===!0&&(ue(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),x!==s1){if(x!==y||Je!==I){if((m!==xr||v!==xr)&&(n.blendEquation(n.FUNC_ADD),m=xr,v=xr),Je)switch(x){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hp:n.blendFunc(n.ONE,n.ONE);break;case pp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}d=null,_=null,M=null,R=null,C.set(0,0,0),b=0,y=x,I=Je}return}de=de||z,Oe=Oe||G,We=We||re,(z!==m||de!==v)&&(n.blendEquationSeparate(Ze[z],Ze[de]),m=z,v=de),(G!==d||re!==_||Oe!==M||We!==R)&&(n.blendFuncSeparate(Te[G],Te[re],Te[Oe],Te[We]),d=G,_=re,M=Oe,R=We),(vt.equals(C)===!1||Dt!==b)&&(n.blendColor(vt.r,vt.g,vt.b,Dt),C.copy(vt),b=Dt),y=x,I=!1}function Me(x,z){x.side===hi?ue(n.CULL_FACE):ge(n.CULL_FACE);let G=x.side===cn;z&&(G=!G),Ie(G),x.blending===Ds&&x.transparent===!1?Qe(Qi):Qe(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),r.setMask(x.colorWrite);const re=x.stencilWrite;a.setTest(re),re&&(a.setMask(x.stencilWriteMask),a.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),a.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),at(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(x){T!==x&&(x?n.frontFace(n.CW):n.frontFace(n.CCW),T=x)}function Pe(x){x!==n1?(ge(n.CULL_FACE),x!==S&&(x===fp?n.cullFace(n.BACK):x===i1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),S=x}function Ve(x){x!==k&&($&&n.lineWidth(x),k=x)}function at(x,z,G){x?(ge(n.POLYGON_OFFSET_FILL),(K!==z||U!==G)&&(n.polygonOffset(z,G),K=z,U=G)):ue(n.POLYGON_OFFSET_FILL)}function P(x){x?ge(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function w(x){x===void 0&&(x=n.TEXTURE0+j-1),O!==x&&(n.activeTexture(x),O=x)}function Y(x,z,G){G===void 0&&(O===null?G=n.TEXTURE0+j-1:G=O);let re=F[G];re===void 0&&(re={type:void 0,texture:void 0},F[G]=re),(re.type!==x||re.texture!==z)&&(O!==G&&(n.activeTexture(G),O=G),n.bindTexture(x,z||Z[x]),re.type=x,re.texture=z)}function Q(){const x=F[O];x!==void 0&&x.type!==void 0&&(n.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function fe(){try{n.texSubImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function J(){try{n.texStorage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function qe(){try{n.texImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function xe(x){ce.equals(x)===!1&&(n.scissor(x.x,x.y,x.z,x.w),ce.copy(x))}function Ue(x){ye.equals(x)===!1&&(n.viewport(x.x,x.y,x.z,x.w),ye.copy(x))}function Ge(x,z){let G=l.get(z);G===void 0&&(G=new WeakMap,l.set(z,G));let re=G.get(x);re===void 0&&(re=n.getUniformBlockIndex(z,x.name),G.set(x,re))}function it(x,z){const re=l.get(z).get(x);o.get(z)!==re&&(n.uniformBlockBinding(z,re,x.__bindingPointIndex),o.set(z,re))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},O=null,F={},f={},h=new WeakMap,u=[],p=null,g=!1,y=null,m=null,d=null,_=null,v=null,M=null,R=null,C=new Ke(0,0,0),b=0,I=!1,T=null,S=null,k=null,K=null,U=null,ce.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ge,disable:ue,bindFramebuffer:ke,drawBuffers:Ne,useProgram:H,setBlending:Qe,setMaterial:Me,setFlipSided:Ie,setCullFace:Pe,setLineWidth:Ve,setPolygonOffset:at,setScissorTest:P,activeTexture:w,bindTexture:Y,unbindTexture:Q,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:qe,texImage3D:Ae,updateUBOMapping:Ge,uniformBlockBinding:it,texStorage2D:J,texStorage3D:Se,texSubImage2D:fe,texSubImage3D:le,compressedTexSubImage2D:ie,compressedTexSubImage3D:he,scissor:xe,viewport:Ue,reset:Fe}}function rT(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,f=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):Xl("canvas")}function y(P,w,Y){let Q=1;const ne=at(P);if((ne.width>Y||ne.height>Y)&&(Q=Y/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const se=Math.floor(Q*ne.width),fe=Math.floor(Q*ne.height);h===void 0&&(h=g(se,fe));const le=w?g(se,fe):h;return le.width=se,le.height=fe,le.getContext("2d").drawImage(P,0,0,se,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+se+"x"+fe+")."),le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Cn&&P.minFilter!==Vn}function d(P){n.generateMipmap(P)}function _(P,w,Y,Q,ne=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=w;if(w===n.RED&&(Y===n.FLOAT&&(se=n.R32F),Y===n.HALF_FLOAT&&(se=n.R16F),Y===n.UNSIGNED_BYTE&&(se=n.R8)),w===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(se=n.R8UI),Y===n.UNSIGNED_SHORT&&(se=n.R16UI),Y===n.UNSIGNED_INT&&(se=n.R32UI),Y===n.BYTE&&(se=n.R8I),Y===n.SHORT&&(se=n.R16I),Y===n.INT&&(se=n.R32I)),w===n.RG&&(Y===n.FLOAT&&(se=n.RG32F),Y===n.HALF_FLOAT&&(se=n.RG16F),Y===n.UNSIGNED_BYTE&&(se=n.RG8)),w===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(se=n.RG8UI),Y===n.UNSIGNED_SHORT&&(se=n.RG16UI),Y===n.UNSIGNED_INT&&(se=n.RG32UI),Y===n.BYTE&&(se=n.RG8I),Y===n.SHORT&&(se=n.RG16I),Y===n.INT&&(se=n.RG32I)),w===n.RGB&&Y===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),w===n.RGBA){const fe=ne?Hl:st.getTransfer(Q);Y===n.FLOAT&&(se=n.RGBA32F),Y===n.HALF_FLOAT&&(se=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(se=fe===dt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function v(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Cn&&P.minFilter!==Vn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function M(P){const w=P.target;w.removeEventListener("dispose",M),C(w),w.isVideoTexture&&f.delete(w)}function R(P){const w=P.target;w.removeEventListener("dispose",R),I(w)}function C(P){const w=i.get(P);if(w.__webglInit===void 0)return;const Y=P.source,Q=u.get(Y);if(Q){const ne=Q[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(P),Object.keys(Q).length===0&&u.delete(Y)}i.remove(P)}function b(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const Y=P.source,Q=u.get(Y);delete Q[w.__cacheKey],a.memory.textures--}function I(P){const w=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let ne=0;ne<w.__webglFramebuffer[Q].length;ne++)n.deleteFramebuffer(w.__webglFramebuffer[Q][ne]);else n.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)n.deleteFramebuffer(w.__webglFramebuffer[Q]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=P.textures;for(let Q=0,ne=Y.length;Q<ne;Q++){const se=i.get(Y[Q]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(Y[Q])}i.remove(P)}let T=0;function S(){T=0}function k(){const P=T;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),T+=1,P}function K(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function U(P,w){const Y=i.get(P);if(P.isVideoTexture&&Pe(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Y,P,w);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+w)}function j(P,w){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ce(Y,P,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+w)}function $(P,w){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ce(Y,P,w);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+w)}function ee(P,w){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ye(Y,P,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+w)}const ae={[Nd]:n.REPEAT,[Tr]:n.CLAMP_TO_EDGE,[Id]:n.MIRRORED_REPEAT},O={[Cn]:n.NEAREST,[z1]:n.NEAREST_MIPMAP_NEAREST,[bo]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[qc]:n.LINEAR_MIPMAP_NEAREST,[Ar]:n.LINEAR_MIPMAP_LINEAR},F={[J1]:n.NEVER,[sS]:n.ALWAYS,[eS]:n.LESS,[Pv]:n.LEQUAL,[tS]:n.EQUAL,[rS]:n.GEQUAL,[nS]:n.GREATER,[iS]:n.NOTEQUAL};function L(P,w){if(w.type===Gi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Vn||w.magFilter===qc||w.magFilter===bo||w.magFilter===Ar||w.minFilter===Vn||w.minFilter===qc||w.minFilter===bo||w.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ae[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ae[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ae[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,O[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,O[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Cn||w.minFilter!==bo&&w.minFilter!==Ar||w.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function V(P,w){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",M));const Q=w.source;let ne=u.get(Q);ne===void 0&&(ne={},u.set(Q,ne));const se=K(w);if(se!==P.__cacheKey){ne[se]===void 0&&(ne[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ne[se].usedTimes++;const fe=ne[P.__cacheKey];fe!==void 0&&(ne[P.__cacheKey].usedTimes--,fe.usedTimes===0&&b(w)),P.__cacheKey=se,P.__webglTexture=ne[se].texture}return Y}function ce(P,w,Y){let Q=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=n.TEXTURE_3D);const ne=V(P,w),se=w.source;t.bindTexture(Q,P.__webglTexture,n.TEXTURE0+Y);const fe=i.get(se);if(se.version!==fe.__version||ne===!0){t.activeTexture(n.TEXTURE0+Y);const le=st.getPrimaries(st.workingColorSpace),ie=w.colorSpace===Bi?null:st.getPrimaries(w.colorSpace),he=w.colorSpace===Bi||le===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let J=y(w.image,!1,r.maxTextureSize);J=Ve(w,J);const Se=s.convert(w.format,w.colorSpace),qe=s.convert(w.type);let Ae=_(w.internalFormat,Se,qe,w.colorSpace,w.isVideoTexture);L(Q,w);let xe;const Ue=w.mipmaps,Ge=w.isVideoTexture!==!0,it=fe.__version===void 0||ne===!0,Fe=se.dataReady,x=v(w,J);if(w.isDepthTexture)Ae=n.DEPTH_COMPONENT16,w.type===Gi?Ae=n.DEPTH_COMPONENT32F:w.type===Ws?Ae=n.DEPTH_COMPONENT24:w.type===oo&&(Ae=n.DEPTH24_STENCIL8),it&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,Ae,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ae,J.width,J.height,0,Se,qe,null));else if(w.isDataTexture)if(Ue.length>0){Ge&&it&&t.texStorage2D(n.TEXTURE_2D,x,Ae,Ue[0].width,Ue[0].height);for(let z=0,G=Ue.length;z<G;z++)xe=Ue[z],Ge?Fe&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,xe.width,xe.height,Se,qe,xe.data):t.texImage2D(n.TEXTURE_2D,z,Ae,xe.width,xe.height,0,Se,qe,xe.data);w.generateMipmaps=!1}else Ge?(it&&t.texStorage2D(n.TEXTURE_2D,x,Ae,J.width,J.height),Fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Se,qe,J.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,J.width,J.height,0,Se,qe,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,x,Ae,Ue[0].width,Ue[0].height,J.depth);for(let z=0,G=Ue.length;z<G;z++)xe=Ue[z],w.format!==Jn?Se!==null?Ge?Fe&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,xe.width,xe.height,J.depth,Se,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,Ae,xe.width,xe.height,J.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,xe.width,xe.height,J.depth,Se,qe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,z,Ae,xe.width,xe.height,J.depth,0,Se,qe,xe.data)}else{Ge&&it&&t.texStorage2D(n.TEXTURE_2D,x,Ae,Ue[0].width,Ue[0].height);for(let z=0,G=Ue.length;z<G;z++)xe=Ue[z],w.format!==Jn?Se!==null?Ge?Fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,z,Ae,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Fe&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,xe.width,xe.height,Se,qe,xe.data):t.texImage2D(n.TEXTURE_2D,z,Ae,xe.width,xe.height,0,Se,qe,xe.data)}else if(w.isDataArrayTexture)Ge?(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,x,Ae,J.width,J.height,J.depth),Fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Se,qe,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,J.width,J.height,J.depth,0,Se,qe,J.data);else if(w.isData3DTexture)Ge?(it&&t.texStorage3D(n.TEXTURE_3D,x,Ae,J.width,J.height,J.depth),Fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Se,qe,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,J.width,J.height,J.depth,0,Se,qe,J.data);else if(w.isFramebufferTexture){if(it)if(Ge)t.texStorage2D(n.TEXTURE_2D,x,Ae,J.width,J.height);else{let z=J.width,G=J.height;for(let re=0;re<x;re++)t.texImage2D(n.TEXTURE_2D,re,Ae,z,G,0,Se,qe,null),z>>=1,G>>=1}}else if(Ue.length>0){if(Ge&&it){const z=at(Ue[0]);t.texStorage2D(n.TEXTURE_2D,x,Ae,z.width,z.height)}for(let z=0,G=Ue.length;z<G;z++)xe=Ue[z],Ge?Fe&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,Se,qe,xe):t.texImage2D(n.TEXTURE_2D,z,Ae,Se,qe,xe);w.generateMipmaps=!1}else if(Ge){if(it){const z=at(J);t.texStorage2D(n.TEXTURE_2D,x,Ae,z.width,z.height)}Fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,qe,J)}else t.texImage2D(n.TEXTURE_2D,0,Ae,Se,qe,J);m(w)&&d(Q),fe.__version=se.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ye(P,w,Y){if(w.image.length!==6)return;const Q=V(P,w),ne=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Y);const se=i.get(ne);if(ne.version!==se.__version||Q===!0){t.activeTexture(n.TEXTURE0+Y);const fe=st.getPrimaries(st.workingColorSpace),le=w.colorSpace===Bi?null:st.getPrimaries(w.colorSpace),ie=w.colorSpace===Bi||fe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const he=w.isCompressedTexture||w.image[0].isCompressedTexture,J=w.image[0]&&w.image[0].isDataTexture,Se=[];for(let G=0;G<6;G++)!he&&!J?Se[G]=y(w.image[G],!0,r.maxCubemapSize):Se[G]=J?w.image[G].image:w.image[G],Se[G]=Ve(w,Se[G]);const qe=Se[0],Ae=s.convert(w.format,w.colorSpace),xe=s.convert(w.type),Ue=_(w.internalFormat,Ae,xe,w.colorSpace),Ge=w.isVideoTexture!==!0,it=se.__version===void 0||Q===!0,Fe=ne.dataReady;let x=v(w,qe);L(n.TEXTURE_CUBE_MAP,w);let z;if(he){Ge&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,x,Ue,qe.width,qe.height);for(let G=0;G<6;G++){z=Se[G].mipmaps;for(let re=0;re<z.length;re++){const de=z[re];w.format!==Jn?Ae!==null?Ge?Fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,0,0,de.width,de.height,Ae,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,Ue,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,0,0,de.width,de.height,Ae,xe,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,Ue,de.width,de.height,0,Ae,xe,de.data)}}}else{if(z=w.mipmaps,Ge&&it){z.length>0&&x++;const G=at(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,x,Ue,G.width,G.height)}for(let G=0;G<6;G++)if(J){Ge?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Se[G].width,Se[G].height,Ae,xe,Se[G].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ue,Se[G].width,Se[G].height,0,Ae,xe,Se[G].data);for(let re=0;re<z.length;re++){const Oe=z[re].image[G].image;Ge?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,0,0,Oe.width,Oe.height,Ae,xe,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,Ue,Oe.width,Oe.height,0,Ae,xe,Oe.data)}}else{Ge?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ae,xe,Se[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ue,Ae,xe,Se[G]);for(let re=0;re<z.length;re++){const de=z[re];Ge?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,0,0,Ae,xe,de.image[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,Ue,Ae,xe,de.image[G])}}}m(w)&&d(n.TEXTURE_CUBE_MAP),se.__version=ne.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function N(P,w,Y,Q,ne,se){const fe=s.convert(Y.format,Y.colorSpace),le=s.convert(Y.type),ie=_(Y.internalFormat,fe,le,Y.colorSpace);if(!i.get(w).__hasExternalTextures){const J=Math.max(1,w.width>>se),Se=Math.max(1,w.height>>se);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,se,ie,J,Se,w.depth,0,fe,le,null):t.texImage2D(ne,se,ie,J,Se,0,fe,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ie(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ne,i.get(Y).__webglTexture,0,Me(w)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ne,i.get(Y).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(P,w,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer&&!w.stencilBuffer){let Q=n.DEPTH_COMPONENT24;if(Y||Ie(w)){const ne=w.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Gi?Q=n.DEPTH_COMPONENT32F:ne.type===Ws&&(Q=n.DEPTH_COMPONENT24));const se=Me(w);Ie(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,Q,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,Q,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(w.depthBuffer&&w.stencilBuffer){const Q=Me(w);Y&&Ie(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,w.width,w.height):Ie(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const Q=w.textures;for(let ne=0;ne<Q.length;ne++){const se=Q[ne],fe=s.convert(se.format,se.colorSpace),le=s.convert(se.type),ie=_(se.internalFormat,fe,le,se.colorSpace),he=Me(w);Y&&Ie(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,ie,w.width,w.height):Ie(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,ie,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ie,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const Q=i.get(w.depthTexture).__webglTexture,ne=Me(w);if(w.depthTexture.format===Ns)Ie(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(w.depthTexture.format===to)Ie(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ue(P){const w=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ge(w.__webglFramebuffer,P)}else if(Y){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=n.createRenderbuffer(),Z(w.__webglDepthbuffer[Q],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Z(w.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(P,w,Y){const Q=i.get(P);w!==void 0&&N(Q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&ue(P)}function Ne(P){const w=P.texture,Y=i.get(P),Q=i.get(w);P.addEventListener("dispose",R);const ne=P.textures,se=P.isWebGLCubeRenderTarget===!0,fe=ne.length>1;if(fe||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=w.version,a.memory.textures++),se){Y.__webglFramebuffer=[];for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[le]=[];for(let ie=0;ie<w.mipmaps.length;ie++)Y.__webglFramebuffer[le][ie]=n.createFramebuffer()}else Y.__webglFramebuffer[le]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)Y.__webglFramebuffer[le]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(fe)for(let le=0,ie=ne.length;le<ie;le++){const he=i.get(ne[le]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&Ie(P)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let le=0;le<ne.length;le++){const ie=ne[le];Y.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[le]);const he=s.convert(ie.format,ie.colorSpace),J=s.convert(ie.type),Se=_(ie.internalFormat,he,J,ie.colorSpace,P.isXRRenderTarget===!0),qe=Me(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Se,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,Y.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),L(n.TEXTURE_CUBE_MAP,w);for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0)for(let ie=0;ie<w.mipmaps.length;ie++)N(Y.__webglFramebuffer[le][ie],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ie);else N(Y.__webglFramebuffer[le],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(w)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let le=0,ie=ne.length;le<ie;le++){const he=ne[le],J=i.get(he);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),L(n.TEXTURE_2D,he),N(Y.__webglFramebuffer,P,he,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(he)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),L(le,w),w.mipmaps&&w.mipmaps.length>0)for(let ie=0;ie<w.mipmaps.length;ie++)N(Y.__webglFramebuffer[ie],P,w,n.COLOR_ATTACHMENT0,le,ie);else N(Y.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,le,0);m(w)&&d(le),t.unbindTexture()}P.depthBuffer&&ue(P)}function H(P){const w=P.textures;for(let Y=0,Q=w.length;Y<Q;Y++){const ne=w[Y];if(m(ne)){const se=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(ne).__webglTexture;t.bindTexture(se,fe),d(se),t.unbindTexture()}}}const Ze=[],Te=[];function Qe(P){if(P.samples>0){if(Ie(P)===!1){const w=P.textures,Y=P.width,Q=P.height;let ne=n.COLOR_BUFFER_BIT;const se=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(P),le=w.length>1;if(le)for(let ie=0;ie<w.length;ie++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ie=0;ie<w.length;ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ie]);const he=i.get(w[ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,ne,n.NEAREST),l===!0&&(Ze.length=0,Te.length=0,Ze.push(n.COLOR_ATTACHMENT0+ie),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ze.push(se),Te.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let ie=0;ie<w.length;ie++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ie]);const he=i.get(w[ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Me(P){return Math.min(r.maxSamples,P.samples)}function Ie(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pe(P){const w=a.render.frame;f.get(P)!==w&&(f.set(P,w),P.update())}function Ve(P,w){const Y=P.colorSpace,Q=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==cr&&Y!==Bi&&(st.getTransfer(Y)===dt?(Q!==Jn||ne!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function at(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=S,this.setTexture2D=U,this.setTexture2DArray=j,this.setTexture3D=$,this.setTextureCube=ee,this.rebindTextures=ke,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=N,this.useMultisampledRTT=Ie}function sT(n,e){function t(i,r=Bi){let s;const a=st.getTransfer(r);if(i===rr)return n.UNSIGNED_BYTE;if(i===wv)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tv)return n.UNSIGNED_SHORT_5_5_5_1;if(i===V1)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===B1)return n.BYTE;if(i===H1)return n.SHORT;if(i===Ev)return n.UNSIGNED_SHORT;if(i===Mv)return n.INT;if(i===Ws)return n.UNSIGNED_INT;if(i===Gi)return n.FLOAT;if(i===dc)return n.HALF_FLOAT;if(i===G1)return n.ALPHA;if(i===W1)return n.RGB;if(i===Jn)return n.RGBA;if(i===X1)return n.LUMINANCE;if(i===K1)return n.LUMINANCE_ALPHA;if(i===Ns)return n.DEPTH_COMPONENT;if(i===to)return n.DEPTH_STENCIL;if(i===Y1)return n.RED;if(i===Av)return n.RED_INTEGER;if(i===q1)return n.RG;if(i===bv)return n.RG_INTEGER;if(i===Cv)return n.RGBA_INTEGER;if(i===jc||i===$c||i===Zc||i===Qc)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===jc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===jc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$c)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gp||i===vp||i===_p||i===yp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_p)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xp||i===Sp||i===Ep)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xp||i===Sp)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ep)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mp||i===wp||i===Tp||i===Ap||i===bp||i===Cp||i===Rp||i===Pp||i===Lp||i===Dp||i===Np||i===Ip||i===Up||i===Op)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mp)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wp)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tp)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ap)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bp)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cp)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rp)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pp)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lp)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dp)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Np)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ip)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Up)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Op)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jc||i===kp||i===Fp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jc)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===j1||i===zp||i===Bp||i===Hp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class aT extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bn extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oT={type:"move"};class Tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(oT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const lT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new sr({vertexShader:lT,fragmentShader:cT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ft(new mc(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class dT extends zr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,u=null,p=null,g=null;const y=new uT,m=t.getContextAttributes();let d=null,_=null;const v=[],M=[],R=new me;let C=null;const b=new mn;b.layers.enable(1),b.viewport=new gt;const I=new mn;I.layers.enable(2),I.viewport=new gt;const T=[b,I],S=new aT;S.layers.enable(1),S.layers.enable(2);let k=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Z=v[N];return Z===void 0&&(Z=new Tu,v[N]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(N){let Z=v[N];return Z===void 0&&(Z=new Tu,v[N]=Z),Z.getGripSpace()},this.getHand=function(N){let Z=v[N];return Z===void 0&&(Z=new Tu,v[N]=Z),Z.getHandSpace()};function U(N){const Z=M.indexOf(N.inputSource);if(Z===-1)return;const ge=v[Z];ge!==void 0&&(ge.update(N.inputSource,N.frame,c||a),ge.dispatchEvent({type:N.type,data:N.inputSource}))}function j(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",$);for(let N=0;N<v.length;N++){const Z=M[N];Z!==null&&(M[N]=null,v[N].disconnect(Z))}k=null,K=null,y.reset(),e.setRenderTarget(d),p=null,u=null,h=null,r=null,_=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",j),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ir(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ge=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?to:Ns,ge=m.stencil?oo:Ws);const ke={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,t),u=h.createProjectionLayer(ke),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Ir(u.textureWidth,u.textureHeight,{format:Jn,type:rr,depthTexture:new Wv(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ye.setContext(r),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(N){for(let Z=0;Z<N.removed.length;Z++){const ge=N.removed[Z],ue=M.indexOf(ge);ue>=0&&(M[ue]=null,v[ue].disconnect(ge))}for(let Z=0;Z<N.added.length;Z++){const ge=N.added[Z];let ue=M.indexOf(ge);if(ue===-1){for(let Ne=0;Ne<v.length;Ne++)if(Ne>=M.length){M.push(ge),ue=Ne;break}else if(M[Ne]===null){M[Ne]=ge,ue=Ne;break}if(ue===-1)break}const ke=v[ue];ke&&ke.connect(ge)}}const ee=new D,ae=new D;function O(N,Z,ge){ee.setFromMatrixPosition(Z.matrixWorld),ae.setFromMatrixPosition(ge.matrixWorld);const ue=ee.distanceTo(ae),ke=Z.projectionMatrix.elements,Ne=ge.projectionMatrix.elements,H=ke[14]/(ke[10]-1),Ze=ke[14]/(ke[10]+1),Te=(ke[9]+1)/ke[5],Qe=(ke[9]-1)/ke[5],Me=(ke[8]-1)/ke[0],Ie=(Ne[8]+1)/Ne[0],Pe=H*Me,Ve=H*Ie,at=ue/(-Me+Ie),P=at*-Me;Z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(P),N.translateZ(at),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const w=H+at,Y=Ze+at,Q=Pe-P,ne=Ve+(ue-P),se=Te*Ze/Y*w,fe=Qe*Ze/Y*w;N.projectionMatrix.makePerspective(Q,ne,se,fe,w,Y),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function F(N,Z){Z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;y.texture!==null&&(N.near=y.depthNear,N.far=y.depthFar),S.near=I.near=b.near=N.near,S.far=I.far=b.far=N.far,(k!==S.near||K!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),k=S.near,K=S.far,b.near=k,b.far=K,I.near=k,I.far=K,b.updateProjectionMatrix(),I.updateProjectionMatrix(),N.updateProjectionMatrix());const Z=N.parent,ge=S.cameras;F(S,Z);for(let ue=0;ue<ge.length;ue++)F(ge[ue],Z);ge.length===2?O(S,b,I):S.projectionMatrix.copy(b.projectionMatrix),L(N,S,Z)};function L(N,Z,ge){ge===null?N.matrix.copy(Z.matrixWorld):(N.matrix.copy(ge.matrixWorld),N.matrix.invert(),N.matrix.multiply(Z.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(Z.projectionMatrix),N.projectionMatrixInverse.copy(Z.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Od*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(N){l=N,u!==null&&(u.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)},this.hasDepthSensing=function(){return y.texture!==null};let V=null;function ce(N,Z){if(f=Z.getViewerPose(c||a),g=Z,f!==null){const ge=f.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ue=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Ne=0;Ne<ge.length;Ne++){const H=ge[Ne];let Ze=null;if(p!==null)Ze=p.getViewport(H);else{const Qe=h.getViewSubImage(u,H);Ze=Qe.viewport,Ne===0&&(e.setRenderTargetTextures(_,Qe.colorTexture,u.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(_))}let Te=T[Ne];Te===void 0&&(Te=new mn,Te.layers.enable(Ne),Te.viewport=new gt,T[Ne]=Te),Te.matrix.fromArray(H.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(H.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ne===0&&(S.matrix.copy(Te.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(Te)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const Ne=h.getDepthInformation(ge[0]);Ne&&Ne.isValid&&Ne.texture&&y.init(e,Ne,r.renderState)}}for(let ge=0;ge<v.length;ge++){const ue=M[ge],ke=v[ge];ue!==null&&ke!==void 0&&ke.update(ue,Z,c||a)}y.render(e,S),V&&V(N,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ye=new Vv;ye.setAnimationLoop(ce),this.setAnimationLoop=function(N){V=N},this.dispose=function(){}}}const gr=new ni,fT=new lt;function hT(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,zv(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,_,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===cn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===cn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),v=_.envMap,M=_.envMapRotation;if(v&&(m.envMap.value=v,gr.copy(M),gr.x*=-1,gr.y*=-1,gr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),m.envMapRotation.value.setFromMatrix4(fT.makeRotationFromEuler(gr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const R=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*R,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pT(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const M=v.program;i.uniformBlockBinding(_,M)}function c(_,v){let M=r[_.id];M===void 0&&(g(_),M=f(_),r[_.id]=M,_.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(_,R);const C=e.render.frame;s[_.id]!==C&&(u(_),s[_.id]=C)}function f(_){const v=h();_.__bindingPointIndex=v;const M=n.createBuffer(),R=_.__size,C=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const v=r[_.id],M=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,b=M.length;C<b;C++){const I=Array.isArray(M[C])?M[C]:[M[C]];for(let T=0,S=I.length;T<S;T++){const k=I[T];if(p(k,C,T,R)===!0){const K=k.__offset,U=Array.isArray(k.value)?k.value:[k.value];let j=0;for(let $=0;$<U.length;$++){const ee=U[$],ae=y(ee);typeof ee=="number"||typeof ee=="boolean"?(k.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,K+j,k.__data)):ee.isMatrix3?(k.__data[0]=ee.elements[0],k.__data[1]=ee.elements[1],k.__data[2]=ee.elements[2],k.__data[3]=0,k.__data[4]=ee.elements[3],k.__data[5]=ee.elements[4],k.__data[6]=ee.elements[5],k.__data[7]=0,k.__data[8]=ee.elements[6],k.__data[9]=ee.elements[7],k.__data[10]=ee.elements[8],k.__data[11]=0):(ee.toArray(k.__data,j),j+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,v,M,R){const C=_.value,b=v+"_"+M;if(R[b]===void 0)return typeof C=="number"||typeof C=="boolean"?R[b]=C:R[b]=C.clone(),!0;{const I=R[b];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return R[b]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(_){const v=_.uniforms;let M=0;const R=16;for(let b=0,I=v.length;b<I;b++){const T=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,k=T.length;S<k;S++){const K=T[S],U=Array.isArray(K.value)?K.value:[K.value];for(let j=0,$=U.length;j<$;j++){const ee=U[j],ae=y(ee),O=M%R;O!==0&&R-O<ae.boundary&&(M+=R-O),K.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=ae.storage}}}const C=M%R;return C>0&&(M+=R-C),_.__size=M,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const _ in r)n.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class mT{constructor(e={}){const{canvas:t=lS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const d=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;const v=this;let M=!1,R=0,C=0,b=null,I=-1,T=null;const S=new gt,k=new gt;let K=null;const U=new Ke(0);let j=0,$=t.width,ee=t.height,ae=1,O=null,F=null;const L=new gt(0,0,$,ee),V=new gt(0,0,$,ee);let ce=!1;const ye=new kf;let N=!1,Z=!1;const ge=new lt,ue=new D,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return b===null?ae:1}let H=i;function Ze(A,B){return t.getContext(A,B)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${If}`),t.addEventListener("webglcontextlost",x,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",G,!1),H===null){const B="webgl2";if(H=Ze(B,A),H===null)throw Ze(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Te,Qe,Me,Ie,Pe,Ve,at,P,w,Y,Q,ne,se,fe,le,ie,he,J,Se,qe,Ae,xe,Ue,Ge;function it(){Te=new Mw(H),Te.init(),xe=new sT(H,Te),Qe=new vw(H,Te,e,xe),Me=new iT(H),Ie=new Aw(H),Pe=new G2,Ve=new rT(H,Te,Me,Pe,Qe,xe,Ie),at=new yw(v),P=new Ew(v),w=new NS(H),Ue=new mw(H,w),Y=new ww(H,w,Ie,Ue),Q=new Cw(H,Y,w,Ie),Se=new bw(H,Qe,Ve),ie=new _w(Pe),ne=new V2(v,at,P,Te,Qe,Ue,ie),se=new hT(v,Pe),fe=new X2,le=new Z2(Te),J=new pw(v,at,P,Me,Q,u,l),he=new nT(v,Q,Qe),Ge=new pT(H,Ie,Qe,Me),qe=new gw(H,Te,Ie),Ae=new Tw(H,Te,Ie),Ie.programs=ne.programs,v.capabilities=Qe,v.extensions=Te,v.properties=Pe,v.renderLists=fe,v.shadowMap=he,v.state=Me,v.info=Ie}it();const Fe=new dT(v,H);this.xr=Fe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=Te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize($,ee,!1))},this.getSize=function(A){return A.set($,ee)},this.setSize=function(A,B,q=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,ee=B,t.width=Math.floor(A*ae),t.height=Math.floor(B*ae),q===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set($*ae,ee*ae).floor()},this.setDrawingBufferSize=function(A,B,q){$=A,ee=B,ae=q,t.width=Math.floor(A*q),t.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,B,q,W){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,B,q,W),Me.viewport(S.copy(L).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(V)},this.setScissor=function(A,B,q,W){A.isVector4?V.set(A.x,A.y,A.z,A.w):V.set(A,B,q,W),Me.scissor(k.copy(V).multiplyScalar(ae).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){Me.setScissorTest(ce=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){F=A},this.getClearColor=function(A){return A.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(A=!0,B=!0,q=!0){let W=0;if(A){let X=!1;if(b!==null){const ve=b.texture.format;X=ve===Cv||ve===bv||ve===Av}if(X){const ve=b.texture.type,Ee=ve===rr||ve===Ws||ve===Ev||ve===oo||ve===wv||ve===Tv,we=J.getClearColor(),Ce=J.getClearAlpha(),Le=we.r,ze=we.g,Xe=we.b;Ee?(p[0]=Le,p[1]=ze,p[2]=Xe,p[3]=Ce,H.clearBufferuiv(H.COLOR,0,p)):(g[0]=Le,g[1]=ze,g[2]=Xe,g[3]=Ce,H.clearBufferiv(H.COLOR,0,g))}else W|=H.COLOR_BUFFER_BIT}B&&(W|=H.DEPTH_BUFFER_BIT),q&&(W|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",x,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",G,!1),fe.dispose(),le.dispose(),Pe.dispose(),at.dispose(),P.dispose(),Q.dispose(),Ue.dispose(),Ge.dispose(),ne.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Je),Fe.removeEventListener("sessionend",Mt),ct.stop()};function x(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Ie.autoReset,B=he.enabled,q=he.autoUpdate,W=he.needsUpdate,X=he.type;it(),Ie.autoReset=A,he.enabled=B,he.autoUpdate=q,he.needsUpdate=W,he.type=X}function G(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function re(A){const B=A.target;B.removeEventListener("dispose",re),de(B)}function de(A){Oe(A),Pe.remove(A)}function Oe(A){const B=Pe.get(A).programs;B!==void 0&&(B.forEach(function(q){ne.releaseProgram(q)}),A.isShaderMaterial&&ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,W,X,ve){B===null&&(B=ke);const Ee=X.isMesh&&X.matrixWorld.determinant()<0,we=i_(A,B,q,W,X);Me.setMaterial(W,Ee);let Ce=q.index,Le=1;if(W.wireframe===!0){if(Ce=Y.getWireframeAttribute(q),Ce===void 0)return;Le=2}const ze=q.drawRange,Xe=q.attributes.position;let wt=ze.start*Le,Ht=(ze.start+ze.count)*Le;ve!==null&&(wt=Math.max(wt,ve.start*Le),Ht=Math.min(Ht,(ve.start+ve.count)*Le)),Ce!==null?(wt=Math.max(wt,0),Ht=Math.min(Ht,Ce.count)):Xe!=null&&(wt=Math.max(wt,0),Ht=Math.min(Ht,Xe.count));const un=Ht-wt;if(un<0||un===1/0)return;Ue.setup(X,W,we,q,Ce);let ri,tt=qe;if(Ce!==null&&(ri=w.get(Ce),tt=Ae,tt.setIndex(ri)),X.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*Ne()),tt.setMode(H.LINES)):tt.setMode(H.TRIANGLES);else if(X.isLine){let De=W.linewidth;De===void 0&&(De=1),Me.setLineWidth(De*Ne()),X.isLineSegments?tt.setMode(H.LINES):X.isLineLoop?tt.setMode(H.LINE_LOOP):tt.setMode(H.LINE_STRIP)}else X.isPoints?tt.setMode(H.POINTS):X.isSprite&&tt.setMode(H.TRIANGLES);if(X.isBatchedMesh)X._multiDrawInstances!==null?tt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances):tt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)tt.renderInstances(wt,un,X.count);else if(q.isInstancedBufferGeometry){const De=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Zs=Math.min(q.instanceCount,De);tt.renderInstances(wt,un,Zs)}else tt.render(wt,un)};function We(A,B,q){A.transparent===!0&&A.side===hi&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,lo(A,B,q),A.side=ir,A.needsUpdate=!0,lo(A,B,q),A.side=hi):lo(A,B,q)}this.compile=function(A,B,q=null){q===null&&(q=A),m=le.get(q),m.init(B),_.push(m),q.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),A!==q&&A.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(v._useLegacyLights);const W=new Set;return A.traverse(function(X){const ve=X.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const we=ve[Ee];We(we,q,X),W.add(we)}else We(ve,q,X),W.add(ve)}),_.pop(),m=null,W},this.compileAsync=function(A,B,q=null){const W=this.compile(A,B,q);return new Promise(X=>{function ve(){if(W.forEach(function(Ee){Pe.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){X(A);return}setTimeout(ve,10)}Te.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let vt=null;function Dt(A){vt&&vt(A)}function Je(){ct.stop()}function Mt(){ct.start()}const ct=new Vv;ct.setAnimationLoop(Dt),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(A){vt=A,Fe.setAnimationLoop(A),A===null?ct.stop():ct.start()},Fe.addEventListener("sessionstart",Je),Fe.addEventListener("sessionend",Mt),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(B),B=Fe.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,B,b),m=le.get(A,_.length),m.init(B),_.push(m),ge.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ye.setFromProjectionMatrix(ge),Z=this.localClippingEnabled,N=ie.init(this.clippingPlanes,Z),y=fe.get(A,d.length),y.init(),d.push(y),wi(A,B,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(O,F);const q=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1;q&&J.addToRenderList(y,A),this.info.render.frame++,N===!0&&ie.beginShadows();const W=m.state.shadowsArray;he.render(W,A,B),N===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=y.opaque,ve=y.transmissive;if(m.setupLights(v._useLegacyLights),B.isArrayCamera){const Ee=B.cameras;if(ve.length>0)for(let we=0,Ce=Ee.length;we<Ce;we++){const Le=Ee[we];Ti(X,ve,A,Le)}q&&J.render(A);for(let we=0,Ce=Ee.length;we<Ce;we++){const Le=Ee[we];Sn(y,A,Le,Le.viewport)}}else ve.length>0&&Ti(X,ve,A,B),q&&J.render(A),Sn(y,A,B);b!==null&&(Ve.updateMultisampleRenderTarget(b),Ve.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(v,A,B),Ue.resetDefaultState(),I=-1,T=null,_.pop(),_.length>0?(m=_[_.length-1],N===!0&&ie.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function wi(A,B,q,W){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ye.intersectsSprite(A)){W&&ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const Ee=Q.update(A),we=A.material;we.visible&&y.push(A,Ee,we,q,ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ye.intersectsObject(A))){const Ee=Q.update(A),we=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ue.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ue.copy(Ee.boundingSphere.center)),ue.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(we)){const Ce=Ee.groups;for(let Le=0,ze=Ce.length;Le<ze;Le++){const Xe=Ce[Le],wt=we[Xe.materialIndex];wt&&wt.visible&&y.push(A,Ee,wt,q,ue.z,Xe)}}else we.visible&&y.push(A,Ee,we,q,ue.z,null)}}const ve=A.children;for(let Ee=0,we=ve.length;Ee<we;Ee++)wi(ve[Ee],B,q,W)}function Sn(A,B,q,W){const X=A.opaque,ve=A.transmissive,Ee=A.transparent;m.setupLightsView(q),N===!0&&ie.setGlobalState(v.clippingPlanes,q),W&&Me.viewport(S.copy(W)),X.length>0&&ii(X,B,q),ve.length>0&&ii(ve,B,q),Ee.length>0&&ii(Ee,B,q),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ti(A,B,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Ir(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?dc:rr,minFilter:Ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ve=m.state.transmissionRenderTarget[W.id],Ee=W.viewport||S;ve.setSize(Ee.z,Ee.w);const we=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(U),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear();const Ce=v.toneMapping;v.toneMapping=Ji;const Le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),N===!0&&ie.setGlobalState(v.clippingPlanes,W),ii(A,q,W),Ve.updateMultisampleRenderTarget(ve),Ve.updateRenderTargetMipmap(ve),Te.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Xe=0,wt=B.length;Xe<wt;Xe++){const Ht=B[Xe],un=Ht.object,ri=Ht.geometry,tt=Ht.material,De=Ht.group;if(tt.side===hi&&un.layers.test(W.layers)){const Zs=tt.side;tt.side=cn,tt.needsUpdate=!0,$s(un,q,W,ri,tt,De),tt.side=Zs,tt.needsUpdate=!0,ze=!0}}ze===!0&&(Ve.updateMultisampleRenderTarget(ve),Ve.updateRenderTargetMipmap(ve))}v.setRenderTarget(we),v.setClearColor(U,j),Le!==void 0&&(W.viewport=Le),v.toneMapping=Ce}function ii(A,B,q){const W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,ve=A.length;X<ve;X++){const Ee=A[X],we=Ee.object,Ce=Ee.geometry,Le=W===null?Ee.material:W,ze=Ee.group;we.layers.test(q.layers)&&$s(we,B,q,Ce,Le,ze)}}function $s(A,B,q,W,X,ve){A.onBeforeRender(v,B,q,W,X,ve),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(v,B,q,W,A,ve),X.transparent===!0&&X.side===hi&&X.forceSinglePass===!1?(X.side=cn,X.needsUpdate=!0,v.renderBufferDirect(q,B,W,X,A,ve),X.side=ir,X.needsUpdate=!0,v.renderBufferDirect(q,B,W,X,A,ve),X.side=hi):v.renderBufferDirect(q,B,W,X,A,ve),A.onAfterRender(v,B,q,W,X,ve)}function lo(A,B,q){B.isScene!==!0&&(B=ke);const W=Pe.get(A),X=m.state.lights,ve=m.state.shadowsArray,Ee=X.state.version,we=ne.getParameters(A,X.state,ve,B,q),Ce=ne.getProgramCacheKey(we);let Le=W.programs;W.environment=A.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(A.isMeshStandardMaterial?P:at).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Le===void 0&&(A.addEventListener("dispose",re),Le=new Map,W.programs=Le);let ze=Le.get(Ce);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===Ee)return Yf(A,we),ze}else we.uniforms=ne.getUniforms(A),A.onBuild(q,we,v),A.onBeforeCompile(we,v),ze=ne.acquireProgram(we,Ce),Le.set(Ce,ze),W.uniforms=we.uniforms;const Xe=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=ie.uniform),Yf(A,we),W.needsLights=s_(A),W.lightsStateVersion=Ee,W.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMap.value=X.state.directionalShadowMap,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotShadowMap.value=X.state.spotShadowMap,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMap.value=X.state.pointShadowMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function Kf(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=ml.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Yf(A,B){const q=Pe.get(A);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function i_(A,B,q,W,X){B.isScene!==!0&&(B=ke),Ve.resetTextureUnits();const ve=B.fog,Ee=W.isMeshStandardMaterial?B.environment:null,we=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:cr,Ce=(W.isMeshStandardMaterial?P:at).get(W.envMap||Ee),Le=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Xe=!!q.morphAttributes.position,wt=!!q.morphAttributes.normal,Ht=!!q.morphAttributes.color;let un=Ji;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(un=v.toneMapping);const ri=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,tt=ri!==void 0?ri.length:0,De=Pe.get(W),Zs=m.state.lights;if(N===!0&&(Z===!0||A!==T)){const En=A===T&&W.id===I;ie.setState(W,A,En)}let pt=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Zs.state.version||De.outputColorSpace!==we||X.isBatchedMesh&&De.batching===!1||!X.isBatchedMesh&&De.batching===!0||X.isInstancedMesh&&De.instancing===!1||!X.isInstancedMesh&&De.instancing===!0||X.isSkinnedMesh&&De.skinning===!1||!X.isSkinnedMesh&&De.skinning===!0||X.isInstancedMesh&&De.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&De.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&De.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&De.instancingMorph===!1&&X.morphTexture!==null||De.envMap!==Ce||W.fog===!0&&De.fog!==ve||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ie.numPlanes||De.numIntersection!==ie.numIntersection)||De.vertexAlphas!==Le||De.vertexTangents!==ze||De.morphTargets!==Xe||De.morphNormals!==wt||De.morphColors!==Ht||De.toneMapping!==un||De.morphTargetsCount!==tt)&&(pt=!0):(pt=!0,De.__version=W.version);let ur=De.currentProgram;pt===!0&&(ur=lo(W,B,X));let qf=!1,Qs=!1,_c=!1;const Vt=ur.getUniforms(),Ai=De.uniforms;if(Me.useProgram(ur.program)&&(qf=!0,Qs=!0,_c=!0),W.id!==I&&(I=W.id,Qs=!0),qf||T!==A){Vt.setValue(H,"projectionMatrix",A.projectionMatrix),Vt.setValue(H,"viewMatrix",A.matrixWorldInverse);const En=Vt.map.cameraPosition;En!==void 0&&En.setValue(H,ue.setFromMatrixPosition(A.matrixWorld)),Qe.logarithmicDepthBuffer&&Vt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Vt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Qs=!0,_c=!0)}if(X.isSkinnedMesh){Vt.setOptional(H,X,"bindMatrix"),Vt.setOptional(H,X,"bindMatrixInverse");const En=X.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Vt.setValue(H,"boneTexture",En.boneTexture,Ve))}X.isBatchedMesh&&(Vt.setOptional(H,X,"batchingTexture"),Vt.setValue(H,"batchingTexture",X._matricesTexture,Ve));const yc=q.morphAttributes;if((yc.position!==void 0||yc.normal!==void 0||yc.color!==void 0)&&Se.update(X,q,ur),(Qs||De.receiveShadow!==X.receiveShadow)&&(De.receiveShadow=X.receiveShadow,Vt.setValue(H,"receiveShadow",X.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ai.envMap.value=Ce,Ai.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Ai.envMapIntensity.value=B.environmentIntensity),Qs&&(Vt.setValue(H,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&r_(Ai,_c),ve&&W.fog===!0&&se.refreshFogUniforms(Ai,ve),se.refreshMaterialUniforms(Ai,W,ae,ee,m.state.transmissionRenderTarget[A.id]),ml.upload(H,Kf(De),Ai,Ve)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ml.upload(H,Kf(De),Ai,Ve),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Vt.setValue(H,"center",X.center),Vt.setValue(H,"modelViewMatrix",X.modelViewMatrix),Vt.setValue(H,"normalMatrix",X.normalMatrix),Vt.setValue(H,"modelMatrix",X.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const En=W.uniformsGroups;for(let xc=0,a_=En.length;xc<a_;xc++){const jf=En[xc];Ge.update(jf,ur),Ge.bind(jf,ur)}}return ur}function r_(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function s_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,B,q){Pe.get(A.texture).__webglTexture=B,Pe.get(A.depthTexture).__webglTexture=q;const W=Pe.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=q===void 0,W.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const q=Pe.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,q=0){b=A,R=B,C=q;let W=!0,X=null,ve=!1,Ee=!1;if(A){const Ce=Pe.get(A);Ce.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(H.FRAMEBUFFER,null),W=!1):Ce.__webglFramebuffer===void 0?Ve.setupRenderTarget(A):Ce.__hasExternalTextures&&Ve.rebindTextures(A,Pe.get(A.texture).__webglTexture,Pe.get(A.depthTexture).__webglTexture);const Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ee=!0);const ze=Pe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?X=ze[B][q]:X=ze[B],ve=!0):A.samples>0&&Ve.useMultisampledRTT(A)===!1?X=Pe.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?X=ze[q]:X=ze,S.copy(A.viewport),k.copy(A.scissor),K=A.scissorTest}else S.copy(L).multiplyScalar(ae).floor(),k.copy(V).multiplyScalar(ae).floor(),K=ce;if(Me.bindFramebuffer(H.FRAMEBUFFER,X)&&W&&Me.drawBuffers(A,X),Me.viewport(S),Me.scissor(k),Me.setScissorTest(K),ve){const Ce=Pe.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ce.__webglTexture,q)}else if(Ee){const Ce=Pe.get(A.texture),Le=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ce.__webglTexture,q||0,Le)}I=-1},this.readRenderTargetPixels=function(A,B,q,W,X,ve,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){Me.bindFramebuffer(H.FRAMEBUFFER,we);try{const Ce=A.texture,Le=Ce.format,ze=Ce.type;if(!Qe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-W&&q>=0&&q<=A.height-X&&H.readPixels(B,q,W,X,xe.convert(Le),xe.convert(ze),ve)}finally{const Ce=b!==null?Pe.get(b).__webglFramebuffer:null;Me.bindFramebuffer(H.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(A,B,q=0){const W=Math.pow(2,-q),X=Math.floor(B.image.width*W),ve=Math.floor(B.image.height*W);Ve.setTexture2D(B,0),H.copyTexSubImage2D(H.TEXTURE_2D,q,0,0,A.x,A.y,X,ve),Me.unbindTexture()},this.copyTextureToTexture=function(A,B,q,W=0){const X=B.image.width,ve=B.image.height,Ee=xe.convert(q.format),we=xe.convert(q.type);Ve.setTexture2D(q,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,W,A.x,A.y,X,ve,Ee,we,B.image.data):B.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,W,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,Ee,B.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,W,A.x,A.y,Ee,we,B.image),W===0&&q.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(A,B,q,W,X=0){const ve=A.max.x-A.min.x,Ee=A.max.y-A.min.y,we=A.max.z-A.min.z,Ce=xe.convert(W.format),Le=xe.convert(W.type);let ze;if(W.isData3DTexture)Ve.setTexture3D(W,0),ze=H.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Ve.setTexture2DArray(W,0),ze=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const Xe=H.getParameter(H.UNPACK_ROW_LENGTH),wt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ht=H.getParameter(H.UNPACK_SKIP_PIXELS),un=H.getParameter(H.UNPACK_SKIP_ROWS),ri=H.getParameter(H.UNPACK_SKIP_IMAGES),tt=q.isCompressedTexture?q.mipmaps[X]:q.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,tt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,tt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,A.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,A.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?H.texSubImage3D(ze,X,B.x,B.y,B.z,ve,Ee,we,Ce,Le,tt.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(ze,X,B.x,B.y,B.z,ve,Ee,we,Ce,tt.data):H.texSubImage3D(ze,X,B.x,B.y,B.z,ve,Ee,we,Ce,Le,tt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Xe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,wt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ht),H.pixelStorei(H.UNPACK_SKIP_ROWS,un),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ri),X===0&&W.generateMipmaps&&H.generateMipmap(ze),Me.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ve.setTextureCube(A,0):A.isData3DTexture?Ve.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ve.setTexture2DArray(A,0):Ve.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){R=0,C=0,b=null,Me.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Uf?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===fc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class gT extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ud,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=er()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Dv("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new D;class Kl{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $v extends Br{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const da=new D,cs=new D,us=new D,ds=new me,fa=new me,Zv=new lt,jo=new D,ha=new D,$o=new D,Lm=new me,Au=new me,Dm=new me;class _T extends Rt{constructor(e=new $v){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new nn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vT(t,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Kl(i,3,0,!1)),ls.setAttribute("uv",new Kl(i,2,3,!1))}this.geometry=ls,this.material=e,this.center=new me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Zv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Zo(jo.set(-.5,-.5,0),us,a,cs,r,s),Zo(ha.set(.5,-.5,0),us,a,cs,r,s),Zo($o.set(.5,.5,0),us,a,cs,r,s),Lm.set(0,0),Au.set(1,0),Dm.set(1,1);let o=e.ray.intersectTriangle(jo,ha,$o,!1,da);if(o===null&&(Zo(ha.set(-.5,.5,0),us,a,cs,r,s),Au.set(0,1),o=e.ray.intersectTriangle(jo,$o,ha,!1,da),o===null))return;const l=e.ray.origin.distanceTo(da);l<e.near||l>e.far||t.push({distance:l,point:da.clone(),uv:Gn.getInterpolation(da,jo,ha,$o,Lm,Au,Dm,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zo(n,e,t,i,r,s){ds.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(fa.x=s*ds.x-r*ds.y,fa.y=r*ds.x+s*ds.y):fa.copy(ds),n.copy(e),n.x+=fa.x,n.y+=fa.y,n.applyMatrix4(Zv)}class Qv extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yl=new D,ql=new D,Nm=new lt,pa=new pc,Qo=new hc,bu=new D,Im=new D;class yT extends Rt{constructor(e=new nn,t=new Qv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Yl.fromBufferAttribute(t,r-1),ql.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Yl.distanceTo(ql);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),Qo.radius+=s,e.ray.intersectsSphere(Qo)===!1)return;Nm.copy(r).invert(),pa.copy(e.ray).applyMatrix4(Nm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){const d=f.getX(y),_=f.getX(y+1),v=Jo(this,e,pa,l,d,_);v&&t.push(v)}if(this.isLineLoop){const y=f.getX(g-1),m=f.getX(p),d=Jo(this,e,pa,l,y,m);d&&t.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){const d=Jo(this,e,pa,l,y,y+1);d&&t.push(d)}if(this.isLineLoop){const y=Jo(this,e,pa,l,g-1,p);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jo(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Yl.fromBufferAttribute(a,r),ql.fromBufferAttribute(a,s),t.distanceSqToSegment(Yl,ql,bu,Im)>i)return;bu.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(bu);if(!(l<e.near||l>e.far))return{distance:l,point:Im.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Um=new D,Om=new D;class xT extends yT{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Um.fromBufferAttribute(t,r),Om.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Um.distanceTo(Om);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zf extends Jt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const f=i[r],u=i[r+1]-f,p=(a-f)/u;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new me:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,r=[],s=[],a=[],o=new D,l=new lt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),u=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ut(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ut(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jv extends Mi{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*f-p*h+this.aX,c=u*h+p*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ST extends Jv{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bf(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,f,h){let u=(a-s)/c-(o-s)/(c+f)+(o-a)/f,p=(o-a)/f-(l-a)/(f+h)+(l-o)/h;u*=f,p*=f,r(a,o,u,p)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const el=new D,Cu=new Bf,Ru=new Bf,Pu=new Bf;class e_ extends Mi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new D){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,f;this.closed||o>0?c=r[(o-1)%s]:(el.subVectors(r[0],r[1]).add(r[0]),c=el);const h=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?f=r[(o+2)%s]:(el.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=el),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(f),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Cu.initNonuniformCatmullRom(c.x,h.x,u.x,f.x,g,y,m),Ru.initNonuniformCatmullRom(c.y,h.y,u.y,f.y,g,y,m),Pu.initNonuniformCatmullRom(c.z,h.z,u.z,f.z,g,y,m)}else this.curveType==="catmullrom"&&(Cu.initCatmullRom(c.x,h.x,u.x,f.x,this.tension),Ru.initCatmullRom(c.y,h.y,u.y,f.y,this.tension),Pu.initCatmullRom(c.z,h.z,u.z,f.z,this.tension));return i.set(Cu.calc(l),Ru.calc(l),Pu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function km(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function ET(n,e){const t=1-n;return t*t*e}function MT(n,e){return 2*(1-n)*n*e}function wT(n,e){return n*n*e}function Ua(n,e,t,i){return ET(n,e)+MT(n,t)+wT(n,i)}function TT(n,e){const t=1-n;return t*t*t*e}function AT(n,e){const t=1-n;return 3*t*t*n*e}function bT(n,e){return 3*(1-n)*n*n*e}function CT(n,e){return n*n*n*e}function Oa(n,e,t,i,r){return TT(n,e)+AT(n,t)+bT(n,i)+CT(n,r)}class RT extends Mi{constructor(e=new me,t=new me,i=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new me){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Oa(e,r.x,s.x,a.x,o.x),Oa(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class PT extends Mi{constructor(e=new D,t=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Oa(e,r.x,s.x,a.x,o.x),Oa(e,r.y,s.y,a.y,o.y),Oa(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LT extends Mi{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DT extends Mi{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class NT extends Mi{constructor(e=new me,t=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new me){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ua(e,r.x,s.x,a.x),Ua(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class t_ extends Mi{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ua(e,r.x,s.x,a.x),Ua(e,r.y,s.y,a.y),Ua(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class IT extends Mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],f=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(km(o,l.x,c.x,f.x,h.x),km(o,l.y,c.y,f.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new me().fromArray(r))}return this}}var UT=Object.freeze({__proto__:null,ArcCurve:ST,CatmullRomCurve3:e_,CubicBezierCurve:RT,CubicBezierCurve3:PT,EllipseCurve:Jv,LineCurve:LT,LineCurve3:DT,QuadraticBezierCurve:NT,QuadraticBezierCurve3:t_,SplineCurve:IT});class Hf extends nn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new D,f=new me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const p=i+h/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[u]/e+1)/2,f.y=(a[u+1]/e+1)/2,l.push(f.x,f.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vf extends nn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],u=[],p=[];let g=0;const y=[],m=i/2;let d=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(p,2));function _(){const M=new D,R=new D;let C=0;const b=(t-e)/i;for(let I=0;I<=s;I++){const T=[],S=I/s,k=S*(t-e)+e;for(let K=0;K<=r;K++){const U=K/r,j=U*l+o,$=Math.sin(j),ee=Math.cos(j);R.x=k*$,R.y=-S*i+m,R.z=k*ee,h.push(R.x,R.y,R.z),M.set($,b,ee).normalize(),u.push(M.x,M.y,M.z),p.push(U,1-S),T.push(g++)}y.push(T)}for(let I=0;I<r;I++)for(let T=0;T<s;T++){const S=y[T][I],k=y[T+1][I],K=y[T+1][I+1],U=y[T][I+1];f.push(S,k,U),f.push(k,K,U),C+=6}c.addGroup(d,C,0),d+=C}function v(M){const R=g,C=new me,b=new D;let I=0;const T=M===!0?e:t,S=M===!0?1:-1;for(let K=1;K<=r;K++)h.push(0,m*S,0),u.push(0,S,0),p.push(.5,.5),g++;const k=g;for(let K=0;K<=r;K++){const j=K/r*l+o,$=Math.cos(j),ee=Math.sin(j);b.x=T*ee,b.y=m*S,b.z=T*$,h.push(b.x,b.y,b.z),u.push(0,S,0),C.x=$*.5+.5,C.y=ee*.5*S+.5,p.push(C.x,C.y),g++}for(let K=0;K<r;K++){const U=R+K,j=k+K;M===!0?f.push(j,j+1,U):f.push(j+1,j,U),I+=3}c.addGroup(d,I,M===!0?1:2),d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ka extends nn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new D,u=new D,p=[],g=[],y=[],m=[];for(let d=0;d<=i;d++){const _=[],v=d/i;let M=0;d===0&&a===0?M=.5/t:d===i&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){const C=R/t;h.x=-e*Math.cos(r+C*s)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(r+C*s)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),u.copy(h).normalize(),y.push(u.x,u.y,u.z),m.push(C+M,1-v),_.push(c++)}f.push(_)}for(let d=0;d<i;d++)for(let _=0;_<t;_++){const v=f[d][_+1],M=f[d][_],R=f[d+1][_],C=f[d+1][_+1];(d!==0||a>0)&&p.push(v,M,C),(d!==i-1||l<Math.PI)&&p.push(M,R,C)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gf extends nn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],f=new D,h=new D,u=new D;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const y=g/r*s,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(y),h.y=(e+t*Math.cos(m))*Math.sin(y),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),u.subVectors(h,f).normalize(),l.push(u.x,u.y,u.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const y=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,_=(r+1)*p+g;a.push(y,m,_),a.push(m,d,_)}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wf extends nn{constructor(e=new t_(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new me;let f=new D;const h=[],u=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(p,2));function y(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),_(),d()}function m(v){f=e.getPointAt(v/t,f);const M=a.normals[v],R=a.binormals[v];for(let C=0;C<=r;C++){const b=C/r*Math.PI*2,I=Math.sin(b),T=-Math.cos(b);l.x=T*M.x+I*R.x,l.y=T*M.y+I*R.y,l.z=T*M.z+I*R.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=f.x+i*l.x,o.y=f.y+i*l.y,o.z=f.z+i*l.z,h.push(o.x,o.y,o.z)}}function d(){for(let v=1;v<=t;v++)for(let M=1;M<=r;M++){const R=(r+1)*(v-1)+(M-1),C=(r+1)*v+(M-1),b=(r+1)*v+M,I=(r+1)*(v-1)+M;g.push(R,C,I),g.push(C,b,I)}}function _(){for(let v=0;v<=t;v++)for(let M=0;M<=r;M++)c.x=v/t,c.y=M/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Wf(new UT[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class et extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rv,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lu extends et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xf extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class OT extends Xf{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Du=new lt,Fm=new D,zm=new D;class n_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kf,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Fm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fm),zm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zm),t.updateMatrixWorld(),Du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bm=new lt,ma=new D,Nu=new D;class kT extends n_{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ma.setFromMatrixPosition(e.matrixWorld),i.position.copy(ma),Nu.copy(i.position),Nu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Nu),i.updateMatrixWorld(),r.makeTranslation(-ma.x,-ma.y,-ma.z),Bm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bm)}}class Hm extends Xf{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new kT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class FT extends n_{constructor(){super(new Gv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vm extends Xf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new FT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gm(){return(typeof performance>"u"?Date:performance).now()}const Wm=new lt;class BT{constructor(e,t,i=0,r=1/0){this.ray=new pc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Of,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wm),this}intersectObject(e,t=!0,i=[]){return Fd(e,this,i,t),i.sort(Xm),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Fd(e[r],this,i,t);return i.sort(Xm),i}}function Xm(n,e){return n.distance-e.distance}function Fd(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Fd(r[s],e,t,!0)}}class Km{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class HT extends xT{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new nn;s.setIndex(new Pn(i,1)),s.setAttribute("position",new ht(r,3)),super(s,new Qv({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:If}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=If);const Ym={type:"change"},Iu={type:"start"},qm={type:"end"},tl=new pc,jm=new ki,VT=Math.cos(70*oS.DEG2RAD);class GT extends zr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",he),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ym),i.update(),s=r.NONE},this.update=function(){const x=new D,z=new Ur().setFromUnitVectors(e.up,new D(0,1,0)),G=z.clone().invert(),re=new D,de=new Ur,Oe=new D,We=2*Math.PI;return function(Dt=null){const Je=i.object.position;x.copy(Je).sub(i.target),x.applyQuaternion(z),o.setFromVector3(x),i.autoRotate&&s===r.NONE&&K(S(Dt)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Mt=i.minAzimuthAngle,ct=i.maxAzimuthAngle;isFinite(Mt)&&isFinite(ct)&&(Mt<-Math.PI?Mt+=We:Mt>Math.PI&&(Mt-=We),ct<-Math.PI?ct+=We:ct>Math.PI&&(ct-=We),Mt<=ct?o.theta=Math.max(Mt,Math.min(ct,o.theta)):o.theta=o.theta>(Mt+ct)/2?Math.max(Mt,o.theta):Math.min(ct,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let wi=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)o.radius=L(o.radius);else{const Sn=o.radius;o.radius=L(o.radius*c),wi=Sn!=o.radius}if(x.setFromSpherical(o),x.applyQuaternion(G),Je.copy(i.target).add(x),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&C){let Sn=null;if(i.object.isPerspectiveCamera){const Ti=x.length();Sn=L(Ti*c);const ii=Ti-Sn;i.object.position.addScaledVector(M,ii),i.object.updateMatrixWorld(),wi=!!ii}else if(i.object.isOrthographicCamera){const Ti=new D(R.x,R.y,0);Ti.unproject(i.object);const ii=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),wi=ii!==i.object.zoom;const $s=new D(R.x,R.y,0);$s.unproject(i.object),i.object.position.sub($s).add(Ti),i.object.updateMatrixWorld(),Sn=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Sn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Sn).add(i.object.position):(tl.origin.copy(i.object.position),tl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(tl.direction))<VT?e.lookAt(i.target):(jm.setFromNormalAndCoplanarPoint(i.object.up,i.target),tl.intersectPlane(jm,i.target))))}else if(i.object.isOrthographicCamera){const Sn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),Sn!==i.object.zoom&&(i.object.updateProjectionMatrix(),wi=!0)}return c=1,C=!1,wi||re.distanceToSquared(i.object.position)>a||8*(1-de.dot(i.object.quaternion))>a||Oe.distanceToSquared(i.target)>a?(i.dispatchEvent(Ym),re.copy(i.object.position),de.copy(i.object.quaternion),Oe.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",qe),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",Y),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",Y),i.domElement.getRootNode().removeEventListener("keydown",le,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",he),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Km,l=new Km;let c=1;const f=new D,h=new me,u=new me,p=new me,g=new me,y=new me,m=new me,d=new me,_=new me,v=new me,M=new D,R=new me;let C=!1;const b=[],I={};let T=!1;function S(x){return x!==null?2*Math.PI/60*i.autoRotateSpeed*x:2*Math.PI/60/60*i.autoRotateSpeed}function k(x){const z=Math.abs(x*.01);return Math.pow(.95,i.zoomSpeed*z)}function K(x){l.theta-=x}function U(x){l.phi-=x}const j=function(){const x=new D;return function(G,re){x.setFromMatrixColumn(re,0),x.multiplyScalar(-G),f.add(x)}}(),$=function(){const x=new D;return function(G,re){i.screenSpacePanning===!0?x.setFromMatrixColumn(re,1):(x.setFromMatrixColumn(re,0),x.crossVectors(i.object.up,x)),x.multiplyScalar(G),f.add(x)}}(),ee=function(){const x=new D;return function(G,re){const de=i.domElement;if(i.object.isPerspectiveCamera){const Oe=i.object.position;x.copy(Oe).sub(i.target);let We=x.length();We*=Math.tan(i.object.fov/2*Math.PI/180),j(2*G*We/de.clientHeight,i.object.matrix),$(2*re*We/de.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(G*(i.object.right-i.object.left)/i.object.zoom/de.clientWidth,i.object.matrix),$(re*(i.object.top-i.object.bottom)/i.object.zoom/de.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ae(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(x,z){if(!i.zoomToCursor)return;C=!0;const G=i.domElement.getBoundingClientRect(),re=x-G.left,de=z-G.top,Oe=G.width,We=G.height;R.x=re/Oe*2-1,R.y=-(de/We)*2+1,M.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function L(x){return Math.max(i.minDistance,Math.min(i.maxDistance,x))}function V(x){h.set(x.clientX,x.clientY)}function ce(x){F(x.clientX,x.clientX),d.set(x.clientX,x.clientY)}function ye(x){g.set(x.clientX,x.clientY)}function N(x){u.set(x.clientX,x.clientY),p.subVectors(u,h).multiplyScalar(i.rotateSpeed);const z=i.domElement;K(2*Math.PI*p.x/z.clientHeight),U(2*Math.PI*p.y/z.clientHeight),h.copy(u),i.update()}function Z(x){_.set(x.clientX,x.clientY),v.subVectors(_,d),v.y>0?ae(k(v.y)):v.y<0&&O(k(v.y)),d.copy(_),i.update()}function ge(x){y.set(x.clientX,x.clientY),m.subVectors(y,g).multiplyScalar(i.panSpeed),ee(m.x,m.y),g.copy(y),i.update()}function ue(x){F(x.clientX,x.clientY),x.deltaY<0?O(k(x.deltaY)):x.deltaY>0&&ae(k(x.deltaY)),i.update()}function ke(x){let z=!1;switch(x.code){case i.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(0,i.keyPanSpeed),z=!0;break;case i.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(0,-i.keyPanSpeed),z=!0;break;case i.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(i.keyPanSpeed,0),z=!0;break;case i.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(-i.keyPanSpeed,0),z=!0;break}z&&(x.preventDefault(),i.update())}function Ne(x){if(b.length===1)h.set(x.pageX,x.pageY);else{const z=it(x),G=.5*(x.pageX+z.x),re=.5*(x.pageY+z.y);h.set(G,re)}}function H(x){if(b.length===1)g.set(x.pageX,x.pageY);else{const z=it(x),G=.5*(x.pageX+z.x),re=.5*(x.pageY+z.y);g.set(G,re)}}function Ze(x){const z=it(x),G=x.pageX-z.x,re=x.pageY-z.y,de=Math.sqrt(G*G+re*re);d.set(0,de)}function Te(x){i.enableZoom&&Ze(x),i.enablePan&&H(x)}function Qe(x){i.enableZoom&&Ze(x),i.enableRotate&&Ne(x)}function Me(x){if(b.length==1)u.set(x.pageX,x.pageY);else{const G=it(x),re=.5*(x.pageX+G.x),de=.5*(x.pageY+G.y);u.set(re,de)}p.subVectors(u,h).multiplyScalar(i.rotateSpeed);const z=i.domElement;K(2*Math.PI*p.x/z.clientHeight),U(2*Math.PI*p.y/z.clientHeight),h.copy(u)}function Ie(x){if(b.length===1)y.set(x.pageX,x.pageY);else{const z=it(x),G=.5*(x.pageX+z.x),re=.5*(x.pageY+z.y);y.set(G,re)}m.subVectors(y,g).multiplyScalar(i.panSpeed),ee(m.x,m.y),g.copy(y)}function Pe(x){const z=it(x),G=x.pageX-z.x,re=x.pageY-z.y,de=Math.sqrt(G*G+re*re);_.set(0,de),v.set(0,Math.pow(_.y/d.y,i.zoomSpeed)),ae(v.y),d.copy(_);const Oe=(x.pageX+z.x)*.5,We=(x.pageY+z.y)*.5;F(Oe,We)}function Ve(x){i.enableZoom&&Pe(x),i.enablePan&&Ie(x)}function at(x){i.enableZoom&&Pe(x),i.enableRotate&&Me(x)}function P(x){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(x.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",Y)),!Ue(x)&&(Ae(x),x.pointerType==="touch"?J(x):Q(x)))}function w(x){i.enabled!==!1&&(x.pointerType==="touch"?Se(x):ne(x))}function Y(x){switch(xe(x),b.length){case 0:i.domElement.releasePointerCapture(x.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",Y),i.dispatchEvent(qm),s=r.NONE;break;case 1:const z=b[0],G=I[z];J({pointerId:z,pageX:G.x,pageY:G.y});break}}function Q(x){let z;switch(x.button){case 0:z=i.mouseButtons.LEFT;break;case 1:z=i.mouseButtons.MIDDLE;break;case 2:z=i.mouseButtons.RIGHT;break;default:z=-1}switch(z){case Gr.DOLLY:if(i.enableZoom===!1)return;ce(x),s=r.DOLLY;break;case Gr.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enablePan===!1)return;ye(x),s=r.PAN}else{if(i.enableRotate===!1)return;V(x),s=r.ROTATE}break;case Gr.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enableRotate===!1)return;V(x),s=r.ROTATE}else{if(i.enablePan===!1)return;ye(x),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Iu)}function ne(x){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;N(x);break;case r.DOLLY:if(i.enableZoom===!1)return;Z(x);break;case r.PAN:if(i.enablePan===!1)return;ge(x);break}}function se(x){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(x.preventDefault(),i.dispatchEvent(Iu),ue(fe(x)),i.dispatchEvent(qm))}function fe(x){const z=x.deltaMode,G={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(z){case 1:G.deltaY*=16;break;case 2:G.deltaY*=100;break}return x.ctrlKey&&!T&&(G.deltaY*=10),G}function le(x){x.key==="Control"&&(T=!0,i.domElement.getRootNode().addEventListener("keyup",ie,{passive:!0,capture:!0}))}function ie(x){x.key==="Control"&&(T=!1,i.domElement.getRootNode().removeEventListener("keyup",ie,{passive:!0,capture:!0}))}function he(x){i.enabled===!1||i.enablePan===!1||ke(x)}function J(x){switch(Ge(x),b.length){case 1:switch(i.touches.ONE){case Wr.ROTATE:if(i.enableRotate===!1)return;Ne(x),s=r.TOUCH_ROTATE;break;case Wr.PAN:if(i.enablePan===!1)return;H(x),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Wr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Te(x),s=r.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Qe(x),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Iu)}function Se(x){switch(Ge(x),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Me(x),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ie(x),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ve(x),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;at(x),i.update();break;default:s=r.NONE}}function qe(x){i.enabled!==!1&&x.preventDefault()}function Ae(x){b.push(x.pointerId)}function xe(x){delete I[x.pointerId];for(let z=0;z<b.length;z++)if(b[z]==x.pointerId){b.splice(z,1);return}}function Ue(x){for(let z=0;z<b.length;z++)if(b[z]==x.pointerId)return!0;return!1}function Ge(x){let z=I[x.pointerId];z===void 0&&(z=new me,I[x.pointerId]=z),z.set(x.pageX,x.pageY)}function it(x){const z=x.pointerId===b[0]?b[1]:b[0];return I[z]}i.domElement.addEventListener("contextmenu",qe),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",Y),i.domElement.addEventListener("wheel",se,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}const ga=new D;function wn(n,e,t,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;ga.copy(e),ga[i]=0,ga.normalize();const c=.5*a/(a+o),f=1-ga.angleTo(n)/l;return Math.sign(ga[t])===1?f*c:o/(a+o)+c+c*(1-f)}class WT extends Hr{constructor(e=1,t=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new D,l=new D,c=new D(e,t,i).divideScalar(2).subScalar(s),f=this.attributes.position.array,h=this.attributes.normal.array,u=this.attributes.uv.array,p=f.length/6,g=new D,y=.5/r;for(let m=0,d=0;m<f.length;m+=3,d+=2)switch(o.fromArray(f,m),l.copy(o),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),f[m+0]=c.x*Math.sign(o.x)+l.x*s,f[m+1]=c.y*Math.sign(o.y)+l.y*s,f[m+2]=c.z*Math.sign(o.z)+l.z*s,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),u[d+0]=wn(g,l,"z","y",s,i),u[d+1]=1-wn(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),u[d+0]=1-wn(g,l,"z","y",s,i),u[d+1]=1-wn(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),u[d+0]=1-wn(g,l,"x","z",s,e),u[d+1]=wn(g,l,"z","x",s,i);break;case 3:g.set(0,-1,0),u[d+0]=1-wn(g,l,"x","z",s,e),u[d+1]=1-wn(g,l,"z","x",s,i);break;case 4:g.set(0,0,1),u[d+0]=1-wn(g,l,"x","y",s,e),u[d+1]=1-wn(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),u[d+0]=wn(g,l,"x","y",s,e),u[d+1]=1-wn(g,l,"y","x",s,t);break}}}const $m={idle:"Idle QR display",starting:"Door lock and safety check",air_cleaning:"Blower airflow cleaning",uv_sanitizing:"UV tube sanitization",mist_deodorizing:"Mist deodorizer pulse",drying:"PTC heater + blower drying",done:"Cycle complete",error:"Fault state"},Ii=[{id:"customer",label:"Customer View",mode:"external",camera:"front",stage:"idle",selected:"display",title:"Customer payment face",detail:"QR display, ad screen, status lights, safety button, and branded kiosk body."},{id:"open",label:"Internal View",mode:"backOpen",camera:"backOpen",stage:"starting",selected:"body",title:"Open view internal",detail:"Large glass door, fan module, helmet, UV bars, bottles, pump, power supply, and wiring harness."},{id:"cycle",label:"Cleaning Cycle",mode:"backOpen",camera:"backOpen",stage:"uv_sanitizing",selected:"uv",title:"3 minute cleaning sequence",detail:"Fans spin, UV bars pulse, mist particles move, and heat/airflow effects show the process."},{id:"service",label:"Service View",mode:"backOpen",camera:"service",stage:"mist_deodorizing",selected:"service",title:"Maintainable lower bay",detail:"Refill bottles, pump, AC/DC supply, ESP32, relay module, cable glands, and service tray are visible."},{id:"wiring",label:"Wiring Proof",mode:"circuit",camera:"service",stage:"drying",selected:"wiring",title:"Relay and sensor map",detail:"Color-coded wires explain blower, heater, UV, mist, LEDs, door interlock, and liquid sensing."}],va={body:{number:"01",title:"Body shell",detail:"Matte black compact cabinet with red LED perimeter and rounded kiosk face.",placement:"Outer structural enclosure around the chamber and service bay.",wiring:"Grounded metal body, separated low-voltage LED wiring channel.",pins:"LED frame GPIO 33 through MOSFET/driver",preview:"body"},display:{number:"02",title:"Front display",detail:"10.1 inch front screen for ads, QR prompt, price, timer, and process status.",placement:"Upper front panel, above the helmet chamber.",wiring:"Powered from regulated DC rail; data from media controller/backend player.",pins:"Display controller / HDMI or serial media board",preview:"display"},status:{number:"03",title:"QR/status strip",detail:"Scan QR, Pay & Start, Helmet Cleaning, and Done indicator stack.",placement:"Right side of the front panel for quick process visibility.",wiring:"Low-voltage LED indicators from ESP32 output driver.",pins:"Status LEDs mapped beside GPIO 33 frame output",preview:"status"},chamber:{number:"04",title:"Glass chamber",detail:"Transparent red-lit helmet chamber door with side handle and hinge blocks.",placement:"Front center, sealed from the lower electronics bay.",wiring:"Door interlock enters ESP32 safety input before UV/heater can start.",pins:"Door sensor GPIO 32",preview:"chamber"},stand:{number:"05",title:"Helmet stand",detail:"Central post and support plate positions one helmet inside the cleaning airflow.",placement:"Center of chamber floor, below UV tubes and mist nozzle.",wiring:"Passive mechanical part; no direct wiring.",pins:"Mechanical assembly",preview:"stand"},blower:{number:"06",title:"Dual fan blower",detail:"Rear/top fan module pushes air around helmet shell for cleaning and drying.",placement:"Upper rear of cleaning chamber with duct opening into the cabin.",wiring:"Relay/SSR switched AC/DC fan line with current sensor planned later.",pins:"Blower relay GPIO 14",preview:"fan"},heater:{number:"07",title:"PTC heater block",detail:"Hot-air drying element placed after the fan path.",placement:"Upper chamber air path, isolated from direct helmet contact.",wiring:"SSR controlled heater line, disabled on over-temperature.",pins:"Heater relay GPIO 27, temperature GPIO 4",preview:"heater"},uv:{number:"08",title:"UV tubes",detail:"Vertical UV-C bars on both chamber sides for sanitization exposure.",placement:"Left and right inside chamber walls behind the glass door.",wiring:"Relay-switched UV ballast/driver with door interlock safety.",pins:"UV relay GPIO 26",preview:"uv"},mist:{number:"09",title:"Mist nozzle",detail:"High-pressure deodorizer mist outlet aimed across the helmet surface.",placement:"Top-center chamber roof, angled into the helmet volume.",wiring:"Mist maker/pump relay, blocked when liquid sensor reports empty.",pins:"Mist relay GPIO 25, liquid sensor GPIO 35",preview:"mist"},service:{number:"10",title:"Service bay",detail:"ESP32, relay board, power supply, fan access, and mist/chemical bottles.",placement:"Bottom electronics/service section behind maintenance panel.",wiring:"Main harness origin: AC in, DC supply, ESP32, relay board, sensors, loads.",pins:"ESP32 control board and relay outputs",preview:"service"},wiring:{number:"11",title:"Circuit wiring harness",detail:"Color-coded routed wires from service bay to blower, heater, UV, mist, LEDs, sensors.",placement:"Side channel and rear path, away from wet mist zone and service access.",wiring:"Red power, yellow signal, cyan sensor, purple UV, orange heater, blue blower.",pins:"GPIO 14, 27, 26, 25, 33, 32, 4, 35",preview:"wiring"}};function vc(n,e="#ffffff"){const t=document.createElement("canvas");t.width=512,t.height=128;const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),i.fillStyle="rgba(5, 5, 5, 0.72)",i.strokeStyle=e,i.lineWidth=4,i.roundRect(8,18,496,86,18),i.fill(),i.stroke(),i.font="700 34px Inter, Arial, sans-serif",i.fillStyle=e,i.textAlign="center",i.textBaseline="middle",i.fillText(n,256,64);const r=new zf(t),s=new $v({map:r,transparent:!0}),a=new _T(s);return a.scale.set(.48,.12,1),a}function te(n,e,t,i,r,s={}){var l,c,f;const a=s.rounded?new WT(t[0],t[1],t[2],s.segments||5,s.radius||.05):new Hr(...t),o=new Ft(a,r);if(o.name=e,o.userData.componentKey=s.componentKey,o.position.set(...i),s.rotation&&o.rotation.set(...s.rotation),o.castShadow=!0,o.receiveShadow=!0,n.add(o),s.label){const h=vc(s.label,s.color||"#ffffff");h.userData.componentKey=s.componentKey,h.userData.isPartLabel=!0,h.position.set(i[0]+(((l=s.labelOffset)==null?void 0:l[0])||0),i[1]+(((c=s.labelOffset)==null?void 0:c[1])||0),i[2]+(((f=s.labelOffset)==null?void 0:f[2])||0)),n.add(h)}return o}function Zm(n,e,t,i,r="#ffffff",s="body"){const a=vc(e,r);return a.name=`${e} decal`,a.userData.componentKey=s,a.position.set(...t),a.scale.set(...i,1),n.add(a),a}function _a(n,e,t,i,r,s,a="body"){for(let o=0;o<t;o+=1)for(let l=0;l<i;l+=1)te(n,`punched side vent ${o+1}-${l+1}`,[.036,.014,.014],[e[0],e[1]+l*r[0],e[2]-o*r[1]],s,{componentKey:a})}function XT(n,e,t,i,r="body"){t.forEach((s,a)=>{Re(n,`${e} bolt ${a+1}`,.018,.014,s,i,[Math.PI/2,0,0],{componentKey:r})})}function Re(n,e,t,i,r,s,a=[0,0,0],o={}){var c,f,h;const l=new Ft(new Vf(t,t,i,48),s);if(l.name=e,l.userData.componentKey=o.componentKey,l.position.set(...r),l.rotation.set(...a),l.castShadow=!0,l.receiveShadow=!0,n.add(l),o.label){const u=vc(o.label,o.color||"#ffffff");u.userData.componentKey=o.componentKey,u.userData.isPartLabel=!0,u.position.set(r[0]+(((c=o.labelOffset)==null?void 0:c[0])||0),r[1]+(((f=o.labelOffset)==null?void 0:f[1])||0),r[2]+(((h=o.labelOffset)==null?void 0:h[2])||0)),n.add(u)}return l}function KT(n,e,t,i,r,s,a=[0,0,0],o={}){const l=new Ft(new Gf(t,i,12,72),s);return l.name=e,l.userData.componentKey=o.componentKey,l.position.set(...r),l.rotation.set(...a),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function hn(n,e,t,i,r="wiring"){const s=new e_(t.map(([o,l,c])=>new D(o,l,c))),a=new Ft(new Wf(s,36,.012,10,!1),i);return a.name=e,a.userData.componentKey=r,n.add(a),a}function kn(n,e,t,i="#facc15"){const r=vc(e,i);return r.name=`wire tag ${e}`,r.userData.componentKey="wiring",r.userData.isPartLabel=!0,r.position.set(...t),r.scale.set(.36,.09,1),n.add(r),r}function fs(n,e,t,i,r,s="body"){const a=te(n,`${e} engraved equipment tag`,i,t,r,{rounded:!0,radius:Math.min(i[0],i[2])*.12,segments:4,componentKey:s});return a.userData.isEngravedTag=!0,a}function Qm(n,e,t,i="wiring"){e.forEach((r,s)=>{te(n,`snap cable clip ${s+1}`,[.09,.035,.035],r,t,{rounded:!0,radius:.01,componentKey:i})})}function Jm(n,e,t,i){te(n,`${t} brow vent intake`,[.34,.035,.045],[0,i-.34,2.84],e.satinEdge,{rounded:!0,radius:.018,componentKey:"stand"}),[-.2,0,.2].forEach((r,s)=>{te(n,`${t} top shell vent slot ${s+1}`,[.09,.026,.035],[r,i-.22,3.05],e.rubber,{rounded:!0,radius:.014,componentKey:"stand"})}),[-.44,.44].forEach((r,s)=>{Re(n,`${t} visor hinge pivot ${s+1}`,.055,.038,[r,i-.38,2.67],e.metal,[Math.PI/2,0,0],{componentKey:"stand"}),te(n,`${t} cheek padding insert ${s+1}`,[.11,.04,.2],[r*.72,i-.44,2.44],e.rubber,{rounded:!0,radius:.025,componentKey:"stand"})})}function e0(){const n=document.createElement("canvas");n.width=768,n.height=432;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,n.width,n.height);t.addColorStop(0,"#090b12"),t.addColorStop(1,"#010103"),e.fillStyle=t,e.fillRect(0,0,n.width,n.height),e.strokeStyle="#ef233c",e.lineWidth=6,e.strokeRect(18,18,n.width-36,n.height-36),e.fillStyle="#ffffff",e.font="700 54px Inter, Arial, sans-serif",e.fillText("Helmet Cleaning",60,105),e.fillText("in 3 Minutes",60,165),e.fillStyle="#ef233c",e.font="900 76px Inter, Arial, sans-serif",e.fillText("₹49",60,255),e.fillStyle="#d4d4d8",e.font="600 25px Inter, Arial, sans-serif",e.fillText("Scan QR to start",60,315),e.strokeStyle="#9ca3af",e.lineWidth=3,e.beginPath(),e.ellipse(575,205,95,62,-.25,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(502,210),e.quadraticCurveTo(574,120,668,188),e.quadraticCurveTo(646,292,523,266),e.stroke(),e.fillStyle="#ffffff",e.fillRect(610,285,62,62),e.fillStyle="#111";for(let i=0;i<5;i+=1)for(let r=0;r<5;r+=1)((i+r)%2===0||i===0||r===4)&&e.fillRect(616+i*11,291+r*11,8,8);return new zf(n)}function t0(){const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#050505",e.fillRect(0,0,512,512),e.strokeStyle="#ef233c",e.lineWidth=18,e.beginPath(),e.arc(256,256,220,0,Math.PI*2),e.stroke(),e.fillStyle="#ffffff",e.fillRect(178,168,156,156),e.fillStyle="#111";for(let t=0;t<9;t+=1)for(let i=0;i<9;i+=1)(t*3+i*5)%4<2&&e.fillRect(190+t*16,180+i*16,11,11);return e.fillStyle="#f8fafc",e.font="800 38px Inter, Arial",e.textAlign="center",e.fillText("SCAN",256,370),e.fillText("NEK-001",256,414),new zf(n)}function Uu(n,e,t,i,r){Re(n,"fan outer guard ring",t,.025,e,i,[Math.PI/2,0,0],{componentKey:r}),Re(n,"fan central hub",t*.28,.04,[e[0],e[1]-.02,e[2]],i,[Math.PI/2,0,0],{componentKey:r});for(let s=0;s<5;s+=1){const a=te(n,`fan curved blade ${s+1}`,[t*.82,.018,t*.16],[e[0],e[1]-.034,e[2]],i,{componentKey:r});a.rotation.y=Math.PI*2*s/5+.32}for(let s=0;s<4;s+=1){const a=Re(n,`fan guard screw ${s+1}`,.014,.018,[e[0]+Math.cos(Math.PI*2*s/4)*t*.74,e[1]-.046,e[2]+Math.sin(Math.PI*2*s/4)*t*.74],i,[Math.PI/2,0,0],{componentKey:r});a.scale.z=.5}}function n0(n,e,t,i,r){const s=i.metal;te(n,"square fan housing with rounded corners",[t*2.25,.05,t*2.25],e,i.duct,{rounded:!0,radius:.035,segments:5,componentKey:r}),[.98,.72,.46].forEach((a,o)=>{KT(n,`concentric circular fan guard ${o+1}`,t*a,.008,[e[0],e[1]-.04,e[2]],s,[Math.PI/2,0,0],{componentKey:r})}),Re(n,"front fan center cap",t*.23,.04,[e[0],e[1]-.055,e[2]],i.satinEdge,[Math.PI/2,0,0],{componentKey:r});for(let a=0;a<8;a+=1){const o=te(n,`radial fan guard spoke ${a+1}`,[t*1.72,.018,.014],[e[0],e[1]-.062,e[2]],s,{componentKey:r});o.rotation.y=Math.PI*2*a/8}for(let a=0;a<5;a+=1){const o=te(n,`dark fan blade behind grille ${a+1}`,[t*.72,.016,t*.16],[e[0],e[1]-.08,e[2]],i.rubber,{componentKey:r});o.rotation.y=Math.PI*2*a/5+.35}}function i0(n,e,t,i,r){Re(n,"rear visible fan guard disc",t,.035,e,i.rubber,[0,0,0],{componentKey:r}),Re(n,"rear visible fan hub",t*.25,.045,[e[0],e[1]+.03,e[2]],i.metal,[0,0,0],{componentKey:r});for(let s=0;s<5;s+=1){const a=te(n,`rear visible fan blade ${s+1}`,[t*.72,.025,t*.14],[e[0],e[1]+.05,e[2]],i.satinEdge,{componentKey:r});a.rotation.y=Math.PI*2*s/5}Re(n,"rear visible fan chrome rim",t*1.08,.018,[e[0],e[1]+.06,e[2]],i.metal,[0,0,0],{componentKey:r})}function YT(n,e){te(n,"real LCD metal bezel",[1.3,.075,.54],[-.14,-.505,4.04],e.rubber,{rounded:!0,radius:.04,segments:6,componentKey:"display"});const t=new et({map:e0(),color:"#ffffff",emissive:"#ffffff",emissiveMap:e0(),emissiveIntensity:.55,roughness:.18});te(n,"real 10.1 inch LCD screen with UI",[1.14,.035,.4],[-.14,-.55,4.04],t,{rounded:!0,radius:.025,segments:5,label:"10.1 inch LCD",color:"#fecdd3",labelOffset:[0,-.2,.36],componentKey:"display"}),te(n,"LCD driver board behind screen",[.46,.05,.18],[-.14,-.25,4.04],e.board,{componentKey:"display"})}function qT(n,e){Re(n,"circular display black bezel",.24,.08,[.62,-.515,4.04],e.rubber,[Math.PI/2,0,0],{componentKey:"display"});const t=new et({map:t0(),color:"#ffffff",emissive:"#ffffff",emissiveMap:t0(),emissiveIntensity:.7,roughness:.12});Re(n,"real circular QR status display glass",.19,.035,[.62,-.565,4.04],t,[Math.PI/2,0,0],{label:"Circular QR display",color:"#fecdd3",labelOffset:[.5,-.08,.18],componentKey:"display"})}function ya(n,e,t,i,r){for(let s=0;s<t;s+=1)te(n,`relay terminal block ${s+1}`,[.07,.055,.035],[e[0]+s*.082,e[1],e[2]],i,{componentKey:r}),Re(n,`terminal screw ${s+1}`,.012,.012,[e[0]+s*.082,e[1]-.035,e[2]+.004],i,[Math.PI/2,0,0],{componentKey:r})}function jT(n){const e=new Bn;e.name="NEKTRON engineering machine",e.scale.setScalar(.78),e.position.z=1.65,n.add(e);const t={body:new et({color:"#25272e",metalness:.38,roughness:.4}),face:new et({color:"#1b1d23",metalness:.2,roughness:.3}),satinEdge:new et({color:"#4c5562",metalness:.42,roughness:.3}),innerBody:new et({color:"#4a535f",metalness:.12,roughness:.5}),glass:new Lu({color:"#9bdcff",transparent:!0,opacity:.22,roughness:.04,transmission:.45}),led:new et({color:"#ff1f3d",emissive:"#ff1238",emissiveIntensity:2.3}),screen:new et({color:"#151b24",metalness:.08,roughness:.2}),uv:new et({color:"#9567ff",emissive:"#8b5cf6",emissiveIntensity:1.5}),air:new et({color:"#5ad7ff",emissive:"#38bdf8",emissiveIntensity:1.1,transparent:!0,opacity:.78}),mist:new et({color:"#d8fbff",emissive:"#a5f3fc",emissiveIntensity:1,transparent:!0,opacity:.55}),heat:new et({color:"#ff6b35",emissive:"#ff4d00",emissiveIntensity:1.2}),metal:new et({color:"#6b7280",metalness:.65,roughness:.24}),wirePower:new et({color:"#ef233c",emissive:"#ef233c",emissiveIntensity:.65}),wireSignal:new et({color:"#facc15",emissive:"#f59e0b",emissiveIntensity:.45}),wireSensor:new et({color:"#38bdf8",emissive:"#38bdf8",emissiveIntensity:.55}),wireUv:new et({color:"#a78bfa",emissive:"#8b5cf6",emissiveIntensity:.55}),wireHeat:new et({color:"#fb923c",emissive:"#f97316",emissiveIntensity:.55}),board:new et({color:"#0f7a47",metalness:.08,roughness:.42}),terminal:new et({color:"#f59e0b",metalness:.2,roughness:.3}),rubber:new et({color:"#0b0c10",metalness:.04,roughness:.82}),duct:new et({color:"#596371",metalness:.28,roughness:.38}),copper:new et({color:"#b45309",metalness:.6,roughness:.22}),warning:new et({color:"#facc15",emissive:"#f59e0b",emissiveIntensity:.4,roughness:.28}),blueSeal:new et({color:"#2563eb",metalness:.18,roughness:.36}),translucentRed:new Lu({color:"#ef233c",transparent:!0,opacity:.34,roughness:.08,transmission:.18}),helmetShell:new et({color:"#11131a",metalness:.32,roughness:.24}),visorGlass:new Lu({color:"#111827",transparent:!0,opacity:.72,roughness:.02,transmission:.12})},i=new Bn;i.name="External body shell";const r=new Bn;r.name="Internal cleaning system";const s=new Bn;s.name="Animated airflow and mist";const a=new Bn;a.name="Circuit wiring harness",e.add(i,r,s,a),te(i,"wide weighted base plinth with bevel",[2.42,1.12,.24],[0,.02,.13],t.body,{rounded:!0,radius:.08,segments:8,componentKey:"body"}),te(i,"raised machine foot pad",[2.02,.78,.12],[0,.01,.33],t.satinEdge,{rounded:!0,radius:.045,segments:6,componentKey:"body"}),[[-.82,-.34],[.82,-.34],[-.82,.36],[.82,.36]].forEach(([g,y],m)=>{Re(i,`adjustable leveling foot ${m+1}`,.085,.08,[g,y,-.02],t.rubber,[0,0,0],{componentKey:"body"}),Re(i,`stainless leveling foot washer ${m+1}`,.105,.018,[g,y,.04],t.metal,[0,0,0],{componentKey:"body"})}),te(i,"front anti-slip base tread",[1.18,.06,.035],[0,-.57,.24],t.rubber,{rounded:!0,radius:.018,componentKey:"body"}),fs(i,"serial NEK-001",[-.52,-.57,.42],[.34,.026,.08],t.metal,"body"),fs(i,"warning UV interlock",[.52,-.57,.42],[.38,.026,.08],t.warning,"chamber"),XT(i,"base plinth",[[-.86,-.5,.28],[.86,-.5,.28],[-.86,.5,.28],[.86,.5,.28]],t.metal,"body"),te(i,"matte black rounded kiosk body 1020x600x430",[2,.72,4.2],[0,0,2.55],t.body,{rounded:!0,radius:.11,segments:10,label:"Matte black outer body",color:"#fda4af",labelOffset:[0,-.85,2.1],componentKey:"body"}),te(i,"glossy front inset face panel",[1.78,.045,3.84],[0,-.385,2.63],t.face,{rounded:!0,radius:.095,segments:8,componentKey:"body"}),te(i,"top rounded cap seam",[1.86,.08,.12],[0,-.36,4.92],t.satinEdge,{rounded:!0,radius:.055,segments:6,componentKey:"body"}),Zm(i,"NEKTRON",[0,-.43,4.62],[.72,.16],"#ffffff","body"),Zm(i,"POWERED BY LAILA",[0,-.43,4.42],[.45,.09],"#fecdd3","body"),te(i,"thick red acrylic chamber frame",[1.62,.08,1.96],[0,-.36,2.72],t.led,{rounded:!0,radius:.08,segments:8,componentKey:"chamber"}),te(i,"black chamber frame cutout face",[1.5,.09,1.82],[0,-.39,2.72],t.rubber,{rounded:!0,radius:.07,segments:8,componentKey:"chamber"}),te(i,"transparent acrylic chamber door",[1.42,.06,1.72],[0,-.44,2.72],t.glass.clone(),{rounded:!0,radius:.065,segments:8,label:"Glass chamber door",color:"#bae6fd",labelOffset:[.9,-.3,.2],componentKey:"chamber"}),te(i,"rubber door gasket top",[1.48,.035,.055],[0,-.47,3.61],t.rubber,{rounded:!0,radius:.02,componentKey:"chamber"}),te(i,"rubber door gasket bottom",[1.48,.035,.055],[0,-.47,1.83],t.rubber,{rounded:!0,radius:.02,componentKey:"chamber"}),te(i,"rubber door gasket left",[.055,.035,1.78],[-.74,-.47,2.72],t.rubber,{rounded:!0,radius:.02,componentKey:"chamber"}),te(i,"rubber door gasket right",[.055,.035,1.78],[.74,-.47,2.72],t.rubber,{rounded:!0,radius:.02,componentKey:"chamber"});const o=new Bn;o.name="left hinged open chamber door assembly",o.userData.componentKey="chamber",i.add(o),te(o,"open helmet chamber door thick dark inner panel",[.92,.085,2.28],[-1.36,-.52,2.62],t.rubber,{rounded:!0,radius:.09,segments:8,componentKey:"chamber"}),te(o,"open helmet chamber door thick silver rounded frame",[1.02,.105,2.46],[-1.36,-.515,2.62],t.metal,{rounded:!0,radius:.115,segments:8,componentKey:"chamber"}),te(o,"open helmet chamber door smoked glass panel",[.8,.115,2.08],[-1.36,-.59,2.62],t.glass.clone(),{rounded:!0,radius:.085,segments:8,componentKey:"chamber"}),te(o,"open door inner rubber gasket top",[.76,.04,.045],[-1.36,-.65,3.62],t.rubber,{rounded:!0,radius:.014,componentKey:"chamber"}),te(o,"open door inner rubber gasket bottom",[.76,.04,.045],[-1.36,-.65,1.62],t.rubber,{rounded:!0,radius:.014,componentKey:"chamber"}),fs(o,"tempered glass",[-1.36,-.665,3.42],[.42,.024,.06],t.satinEdge,"chamber"),fs(o,"magnetic seal",[-1.36,-.665,1.82],[.36,.024,.06],t.satinEdge,"chamber"),Re(o,"open helmet door long vertical pull handle",.04,.98,[-1.94,-.66,2.54],t.metal,[0,0,0],{componentKey:"chamber"}),te(o,"open door upper handle standoff",[.1,.12,.14],[-1.9,-.61,3.02],t.metal,{rounded:!0,radius:.034,componentKey:"chamber"}),te(o,"open door lower handle standoff",[.1,.12,.14],[-1.9,-.61,2.06],t.metal,{rounded:!0,radius:.034,componentKey:"chamber"}),o.visible=!1,YT(i,t),qT(i,t),te(i,"right process status strip",[.28,.085,1.42],[.74,-.455,3.25],t.screen,{rounded:!0,radius:.055,segments:6,label:"Scan / Pay / Clean / Done strip",color:"#fecdd3",labelOffset:[.58,-.18,.22],componentKey:"status"}),te(i,"recessed QR scanner lens housing",[.18,.065,.18],[.74,-.508,3.76],t.rubber,{rounded:!0,radius:.025,segments:5,componentKey:"status"}),te(i,"gloss scanner camera glass",[.11,.022,.11],[.74,-.55,3.76],t.glass.clone(),{rounded:!0,radius:.016,segments:5,componentKey:"status"}),te(i,"UPI NFC reader contact plate",[.19,.03,.12],[.74,-.555,3.57],t.blueSeal,{rounded:!0,radius:.018,segments:5,componentKey:"status"}),Re(i,"emergency stop red mushroom button",.075,.055,[.74,-.55,2.48],t.translucentRed,[Math.PI/2,0,0],{componentKey:"status"}),te(i,"laser etched safety label",[.34,.026,.12],[-.46,-.545,1.55],t.warning,{rounded:!0,radius:.014,segments:4,componentKey:"chamber"}),Re(i,"pay and start red lamp",.055,.035,[.74,-.52,3.42],t.led,[Math.PI/2,0,0],{componentKey:"status"}),Re(i,"helmet cleaning red lamp",.055,.035,[.74,-.52,3.08],t.led,[Math.PI/2,0,0],{componentKey:"status"}),Re(i,"done green lamp",.055,.035,[.74,-.52,2.73],new et({color:"#22c55e",emissive:"#22c55e",emissiveIntensity:2}),[Math.PI/2,0,0],{componentKey:"status"}),te(i,"rounded tubular door handle left standoff",[.09,.1,.12],[-.83,-.52,2.9],t.metal,{rounded:!0,radius:.035,componentKey:"chamber"}),te(i,"rounded tubular door handle right standoff",[.09,.1,.12],[-.83,-.52,2.36],t.metal,{rounded:!0,radius:.035,componentKey:"chamber"}),Re(i,"curved vertical door pull handle",.035,.58,[-.86,-.56,2.63],t.metal,[0,0,0],{componentKey:"chamber"}),te(i,"upper chamber hinge block with pins",[.1,.14,.3],[.82,-.51,3.08],t.metal,{rounded:!0,radius:.022,componentKey:"chamber"}),te(i,"lower chamber hinge block with pins",[.1,.14,.3],[.82,-.51,2.32],t.metal,{rounded:!0,radius:.022,componentKey:"chamber"}),te(i,"right side upper recessed vent panel",[.04,.42,.66],[1.03,.03,4],t.satinEdge,{rounded:!0,radius:.03,componentKey:"body"}),te(i,"right side lower recessed vent panel",[.04,.42,.52],[1.03,.03,1],t.satinEdge,{rounded:!0,radius:.03,componentKey:"body"}),_a(i,[1.058,-.13,4.2],6,7,[.048,.07],t.rubber,"body"),_a(i,[1.058,-.13,1.16],5,7,[.048,.07],t.rubber,"body"),te(i,"removable rear back sheet service door",[1.62,.06,3.58],[0,.405,2.68],t.satinEdge,{rounded:!0,radius:.075,segments:8,label:"Removable back sheet",color:"#fecdd3",labelOffset:[0,.28,1.92],componentKey:"body"}),te(i,"rear upper ventilation grille panel",[.78,.045,.46],[0,.448,4.1],t.rubber,{rounded:!0,radius:.035,componentKey:"body"}),_a(i,[-.33,.482,4.22],5,12,[.06,.06],t.satinEdge,"body"),Re(i,"rear service exhaust fan guard",.22,.04,[0,.458,1.72],t.rubber,[Math.PI/2,0,0],{componentKey:"body"}),Uu(i,[0,.49,1.72],.16,t.satinEdge,"body"),te(i,"rear AC inlet socket",[.18,.035,.12],[-.48,.46,.74],t.rubber,{rounded:!0,radius:.018,componentKey:"service"}),te(i,"rear master rocker switch",[.14,.035,.1],[.48,.46,.74],t.led,{rounded:!0,radius:.018,componentKey:"service"}),[-.68,.68].forEach(g=>{[.98,4.36].forEach(y=>Re(i,"rear panel captive screw",.026,.018,[g,.462,y],t.metal,[Math.PI/2,0,0],{componentKey:"body"}))}),te(i,"left red LED frame",[.052,.07,3.88],[-.86,-.47,2.62],t.led,{rounded:!0,radius:.026,componentKey:"body"}),te(i,"right red LED frame",[.052,.07,3.88],[.86,-.47,2.62],t.led,{rounded:!0,radius:.026,componentKey:"body"}),te(i,"top red LED frame",[1.72,.07,.052],[0,-.47,4.56],t.led,{rounded:!0,radius:.026,componentKey:"body"}),te(i,"bottom red LED frame",[1.72,.07,.052],[0,-.47,.68],t.led,{rounded:!0,radius:.026,componentKey:"body"}),te(i,"bottom electronics service bay",[1.42,.08,.5],[0,-.455,.85],t.screen,{rounded:!0,radius:.055,segments:6,label:"Service bay",color:"#e5e7eb",labelOffset:[.74,-.22,-.15],componentKey:"service"}),te(i,"removable lower service access panel",[1.28,.045,.38],[0,-.51,.85],t.duct,{rounded:!0,radius:.035,componentKey:"service"}),[-.55,.55].forEach(g=>{[.72,.98].forEach(y=>Re(i,"quarter turn service panel screw",.022,.016,[g,-.545,y],t.metal,[Math.PI/2,0,0],{componentKey:"service"}))}),te(r,"single helmet container stainless chamber tub",[1.42,.78,1.82],[0,.08,2.72],t.innerBody,{rounded:!0,radius:.055,segments:6,componentKey:"chamber"}),te(r,"helmet container rear wall",[1.3,.055,1.64],[0,.43,2.72],t.duct,{rounded:!0,radius:.04,segments:5,componentKey:"chamber"}),te(r,"helmet container bottom tray",[1.18,.64,.08],[0,.02,1.84],t.metal,{rounded:!0,radius:.04,componentKey:"chamber"}),te(r,"removable perforated drain grate",[.74,.42,.035],[0,-.02,1.91],t.satinEdge,{rounded:!0,radius:.026,componentKey:"chamber"}),_a(r,[-.3,-.17,1.94],4,9,[.075,.055],t.rubber,"chamber"),te(r,"magnetic door interlock sensor",[.08,.05,.16],[.69,-.38,2.42],t.blueSeal,{rounded:!0,radius:.018,label:"Door interlock",color:"#bfdbfe",labelOffset:[.38,-.18,-.04],componentKey:"chamber"}),te(r,"UV safety micro-switch strike plate",[.04,.04,.18],[.78,-.43,2.42],t.metal,{rounded:!0,radius:.012,componentKey:"chamber"}),te(r,"left helmet guide rail",[.08,.62,.07],[-.48,-.02,2.12],t.metal,{componentKey:"stand"}),te(r,"right helmet guide rail",[.08,.62,.07],[.48,-.02,2.12],t.metal,{componentKey:"stand"}),te(r,"drain and mist collection channel",[.58,.08,.04],[0,-.25,1.95],t.rubber,{componentKey:"chamber"}),Re(r,"helmet stand post",.055,.78,[0,-.02,2.04],t.metal,[0,0,0],{componentKey:"stand"}),Re(r,"helmet stand plate",.38,.06,[0,-.02,2.45],t.metal,[0,0,0],{componentKey:"stand"});const l=new Ft(new ka(.44,64,32,0,Math.PI*2,0,Math.PI*.74),t.helmetShell);l.name="helmet reference object",l.userData.componentKey="stand",l.position.set(0,-.02,2.7),l.scale.set(1.15,.85,.62),r.add(l);const c=te(r,"helmet smoked curved visor",[.62,.035,.18],[0,-.42,2.72],t.visorGlass,{rounded:!0,radius:.035,segments:6,componentKey:"stand"});c.rotation.x=-.08,te(r,"helmet lower chin guard",[.48,.08,.11],[0,-.42,2.52],t.helmetShell,{rounded:!0,radius:.04,segments:6,componentKey:"stand"}),te(r,"helmet top air scoop",[.26,.08,.055],[0,-.25,3.02],t.rubber,{rounded:!0,radius:.025,segments:5,componentKey:"stand"}),Re(r,"helmet left visor hinge",.035,.035,[-.42,-.39,2.72],t.metal,[Math.PI/2,0,0],{componentKey:"stand"}),Re(r,"helmet right visor hinge",.035,.035,[.42,-.39,2.72],t.metal,[Math.PI/2,0,0],{componentKey:"stand"}),Jm(r,t,"front helmet",-.02);const f=te(r,"rear mounted dual fan blower module",[1,.16,.42],[0,.45,3.5],t.metal,{rounded:!0,radius:.04,segments:5,label:"Rear dual fans",color:"#93c5fd",labelOffset:[-.8,.2,.22],componentKey:"blower"});Uu(r,[-.26,.36,3.52],.17,t.screen,"blower"),Uu(r,[.26,.36,3.52],.17,t.screen,"blower"),te(r,"open view top fan mounting plate",[.9,.055,.44],[0,-.47,3.48],t.duct,{rounded:!0,radius:.03,componentKey:"blower"}),n0(r,[-.28,-.54,3.5],.17,t,"blower"),n0(r,[.28,-.54,3.5],.17,t,"blower"),i0(r,[-.27,.58,3.58],.18,t,"blower"),i0(r,[.27,.58,3.58],.18,t,"blower"),te(r,"blower HEPA filter cassette",[.9,.08,.24],[0,.3,3.18],t.rubber,{rounded:!0,radius:.03,componentKey:"blower"}),te(r,"removable fan service cover",[1.08,.045,.54],[0,.52,3.5],t.glass.clone(),{rounded:!0,radius:.045,componentKey:"blower"}),te(r,"blower outlet duct",[.94,.32,.18],[0,.24,3.18],t.duct,{rounded:!0,radius:.035,componentKey:"blower"}),te(r,"left vertical air return duct",[.16,.56,1.22],[-.67,.08,2.65],t.duct,{rounded:!0,radius:.035,componentKey:"blower"}),te(r,"right vertical air return duct",[.16,.56,1.22],[.67,.08,2.65],t.duct,{rounded:!0,radius:.035,componentKey:"blower"}),te(r,"PTC heater block",[.56,.18,.24],[.42,.28,3.18],t.heat,{rounded:!0,radius:.035,segments:5,label:"PTC heater",color:"#fed7aa",labelOffset:[.42,.24,.16],componentKey:"heater"});for(let g=0;g<6;g+=1)te(r,`ptc heater aluminum fin ${g+1}`,[.035,.2,.28],[.27+g*.058,.22,3.18],t.metal,{componentKey:"heater"});Re(r,"left UV tube",.042,1.5,[-.58,-.32,2.72],t.uv,[0,0,0],{label:"UV tubes",color:"#ddd6fe",labelOffset:[-.54,-.28,.72],componentKey:"uv"}),Re(r,"right UV tube",.042,1.5,[.58,-.32,2.72],t.uv,[0,0,0],{componentKey:"uv"}),Re(r,"left red sanitizer light bar open view",.035,1.42,[-.55,-.46,2.72],t.led,[0,0,0],{componentKey:"uv"}),Re(r,"right red sanitizer light bar open view",.035,1.42,[.55,-.46,2.72],t.led,[0,0,0],{componentKey:"uv"}),te(r,"open view center shelf separating chamber and service bay",[1.18,.08,.055],[0,-.44,1.72],t.metal,{rounded:!0,radius:.018,componentKey:"service"});const h=new Ft(new ka(.43,64,32,0,Math.PI*2,0,Math.PI*.78),t.helmetShell);h.name="open view centered helmet silhouette",h.userData.componentKey="stand",h.position.set(0,-.58,2.55),h.scale.set(1.18,.82,.98),r.add(h),te(r,"open view glossy helmet visor",[.54,.04,.16],[0,-.9,2.56],t.visorGlass,{rounded:!0,radius:.03,segments:6,componentKey:"stand"}),Jm(r,t,"open view helmet",-.58),te(r,"left UV aluminum guard rail",[.1,.06,1.58],[-.58,-.36,2.72],t.metal,{rounded:!0,radius:.018,componentKey:"uv"}),te(r,"right UV aluminum guard rail",[.1,.06,1.58],[.58,-.36,2.72],t.metal,{rounded:!0,radius:.018,componentKey:"uv"}),Re(r,"mist nozzle",.055,.26,[0,-.34,3.54],t.mist,[Math.PI/2,0,0],{label:"Mist nozzle",color:"#cffafe",labelOffset:[0,-.32,.26],componentKey:"mist"}),hn(r,"transparent mist feed tube",[[.55,.03,1.03],[.42,-.08,1.65],[.2,-.22,2.5],[0,-.3,3.55]],t.mist,"mist"),hn(r,"condensate drain hose",[[0,-.12,1.9],[.34,-.2,1.45],[.55,.03,.98]],t.blueSeal,"mist"),te(r,"relay board and ESP32 control plate",[.82,.22,.34],[-.36,.02,.78],t.metal,{label:"ESP32 + relay board",color:"#bbf7d0",labelOffset:[-.28,.3,-.04],componentKey:"service"}),te(r,"green relay pcb board",[.72,.05,.28],[-.36,-.11,.79],t.board,{componentKey:"service"}),te(r,"ESP32 dev module",[.2,.045,.12],[-.62,-.15,.79],t.screen,{componentKey:"service"}),te(r,"four channel relay module",[.28,.05,.16],[-.28,-.15,.79],t.board,{componentKey:"service"}),ya(r,[-.02,-.18,.89],5,t.terminal,"service"),ya(r,[-.02,-.18,.69],5,t.terminal,"service"),Qm(r,[[-.52,-.2,.98],[-.18,-.22,1.08],[.24,-.22,1],[.58,-.16,1.12]],t.satinEdge,"wiring"),te(r,"5V regulator power supply",[.18,.055,.16],[-.62,-.15,.58],t.duct,{componentKey:"service"}),te(r,"AC inlet fuse switch module",[.2,.055,.12],[-.08,-.16,.55],t.rubber,{componentKey:"service"}),Re(r,"mist liquid tank",.16,.48,[.55,.03,.76],t.mist,[0,0,0],{label:"Mist tank",color:"#cffafe",labelOffset:[.46,.25,.04],componentKey:"service"}),Re(r,"mist tank screw cap",.095,.055,[.55,.03,1.03],t.terminal,[0,0,0],{componentKey:"service"}),Re(r,"cleaning chemical bottle",.13,.42,[.18,.03,.74],t.mist,[0,0,0],{componentKey:"service"}),Re(r,"chemical bottle screw cap",.075,.045,[.18,.03,.98],t.terminal,[0,0,0],{componentKey:"service"}),te(r,"cable gland bundle entry",[.18,.08,.08],[.84,-.08,.86],t.rubber,{componentKey:"wiring"}),te(r,"rear access galvanized mounting plate",[1.28,.045,.76],[0,.5,1.05],t.metal,{rounded:!0,radius:.035,label:"Rear access electronics",color:"#bbf7d0",labelOffset:[0,.2,.52],componentKey:"service"}),te(r,"left vertical DIN mounting rail",[.045,.04,.68],[-.62,.555,1.08],t.satinEdge,{rounded:!0,radius:.012,componentKey:"service"}),te(r,"right vertical DIN mounting rail",[.045,.04,.68],[.62,.555,1.08],t.satinEdge,{rounded:!0,radius:.012,componentKey:"service"}),te(r,"rear cable duct left with slotted cover",[.08,.045,.62],[-.76,.555,1.12],t.rubber,{rounded:!0,radius:.014,componentKey:"wiring"}),te(r,"rear cable duct right with slotted cover",[.08,.045,.62],[.76,.555,1.12],t.rubber,{rounded:!0,radius:.014,componentKey:"wiring"}),te(r,"upper blower mounting cross bracket",[1.08,.045,.055],[0,.565,3.88],t.metal,{rounded:!0,radius:.014,componentKey:"blower"}),te(r,"lower blower mounting cross bracket",[1.08,.045,.055],[0,.565,3.22],t.metal,{rounded:!0,radius:.014,componentKey:"blower"}),te(r,"rear visible ESP32 controller",[.26,.04,.16],[-.44,.54,1.16],t.screen,{rounded:!0,radius:.018,componentKey:"service"}),te(r,"rear visible relay board",[.42,.04,.22],[-.04,.54,1.16],t.board,{rounded:!0,radius:.018,componentKey:"service"}),ya(r,[-.18,.565,1.28],5,t.terminal,"service"),te(r,"rear visible AC power supply",[.3,.05,.18],[.44,.54,1.16],t.duct,{rounded:!0,radius:.02,componentKey:"service"}),te(r,"rear visible fuse inlet module",[.2,.04,.12],[.44,.545,.88],t.rubber,{rounded:!0,radius:.018,componentKey:"service"}),Re(r,"rear visible mist refill bottle",.12,.36,[-.48,.46,.78],t.mist,[0,0,0],{componentKey:"service"}),Re(r,"rear visible deodorizer bottle",.1,.32,[-.22,.46,.76],t.mist,[0,0,0],{componentKey:"service"}),Re(r,"open view white refill bottle",.14,.52,[-.42,-.48,1.05],new et({color:"#e5e7eb",metalness:.04,roughness:.38}),[0,0,0],{componentKey:"service"}),Re(r,"open view teal deodorizer bottle",.12,.42,[-.08,-.48,.98],new et({color:"#0f766e",metalness:.08,roughness:.34}),[0,0,0],{componentKey:"service"}),Re(r,"open view white bottle blue cap",.07,.05,[-.42,-.48,1.33],t.blueSeal,[0,0,0],{componentKey:"service"}),Re(r,"open view teal bottle dark cap",.065,.045,[-.08,-.48,1.22],t.rubber,[0,0,0],{componentKey:"service"}),te(r,"open view compact pump module",[.22,.1,.24],[.24,-.52,.98],t.duct,{rounded:!0,radius:.025,componentKey:"service"}),Re(r,"open view pump pressure head",.05,.075,[.24,-.6,1.11],t.metal,[Math.PI/2,0,0],{componentKey:"service"}),te(r,"open view vented power supply case",[.32,.08,.38],[.58,-.52,1.02],t.duct,{rounded:!0,radius:.02,componentKey:"service"}),_a(r,[.46,-.57,1.16],4,4,[.055,.055],t.rubber,"service"),te(r,"open view small relay PCB",[.34,.055,.16],[.1,-.58,.73],t.board,{rounded:!0,radius:.018,componentKey:"service"}),Qm(r,[[-.3,-.61,1.22],[.05,-.62,1.18],[.36,-.62,1.4],[.48,-.58,.82]],t.satinEdge,"wiring"),fs(r,"24V AC/DC",[.58,-.585,1.26],[.22,.022,.06],t.metal,"service"),fs(r,"pump 12V",[.24,-.605,.82],[.18,.022,.05],t.metal,"service"),hn(r,"open view bottle to pump hose",[[-.08,-.5,1.18],[.08,-.6,1.14],[.24,-.6,1.1]],t.mist,"service"),hn(r,"open view pump to nozzle hose",[[.24,-.6,1.12],[.42,-.6,1.7],[.28,-.55,2.2],[.05,-.5,3.3]],t.mist,"service"),hn(r,"open view power harness red",[[.58,-.58,.86],[.3,-.62,.78],[.05,-.58,.75]],t.wirePower,"wiring"),hn(r,"open view sensor harness yellow",[[.05,-.58,.75],[-.22,-.58,1.1],[-.4,-.52,1.35]],t.wireSignal,"wiring"),Re(r,"rear refill bottle cap",.07,.04,[-.48,.46,.98],t.terminal,[0,0,0],{componentKey:"service"}),Re(r,"rear deodorizer bottle cap",.06,.04,[-.22,.46,.94],t.terminal,[0,0,0],{componentKey:"service"}),kn(r,"ESP32",[-.44,.6,1.4],"#bbf7d0"),kn(r,"4CH RELAY",[-.04,.6,1.42],"#facc15"),kn(r,"AC/DC",[.44,.6,1.4],"#fb923c");const u=new Bn;u.name="slide out service tray with real parts",r.add(u),te(u,"sliding metal service tray",[1.08,.08,.08],[0,-.64,.82],t.duct,{label:"Slide-out service tray",color:"#e5e7eb",labelOffset:[0,-.22,.15],componentKey:"service"}),te(u,"visible ESP32 dev board on tray",[.25,.045,.14],[-.35,-.69,.94],t.screen,{componentKey:"service"}),te(u,"visible green relay board on tray",[.38,.045,.16],[.05,-.69,.94],t.board,{componentKey:"service"}),ya(u,[-.08,-.73,1.05],5,t.terminal,"service"),ya(u,[-.08,-.73,.83],5,t.terminal,"service"),te(u,"visible AC to DC power supply",[.25,.06,.16],[.42,-.69,.94],t.duct,{componentKey:"service"}),te(u,"visible fuse and inlet switch",[.18,.055,.12],[.42,-.7,.73],t.rubber,{componentKey:"service"}),Re(u,"visible mist tank cap",.08,.04,[-.55,-.69,1.02],t.terminal,[0,0,0],{componentKey:"service"}),Re(u,"visible chemical bottle cap",.065,.035,[-.55,-.69,.82],t.terminal,[0,0,0],{componentKey:"service"}),kn(u,"ESP32",[-.35,-.78,1.08],"#bbf7d0"),kn(u,"RELAY TERMINALS",[.08,-.78,1.12],"#facc15"),kn(u,"POWER + FUSE",[.42,-.78,1.06],"#fb923c"),hn(a,"GPIO 14 blower wiring",[[-.36,.18,.96],[-.86,.3,1.9],[-.88,.28,3.45],[-.55,.08,3.72]],t.wireSensor,"blower"),hn(a,"GPIO 27 heater wiring",[[-.24,.18,.96],[.82,.28,1.8],[.88,.28,3.46],[.55,.08,3.7]],t.wireHeat,"heater"),hn(a,"GPIO 26 UV wiring",[[-.46,.18,.85],[-.78,.2,1.7],[-.64,-.12,2.9],[.64,-.12,2.9]],t.wireUv,"uv"),hn(a,"GPIO 25 mist wiring",[[-.16,.18,.84],[.28,.26,1.9],[.28,-.18,3.34],[0,-.3,3.62]],t.wireSignal,"mist"),hn(a,"GPIO 33 LED frame wiring",[[-.55,.18,.78],[-1,.12,1.2],[-1,-.3,2.9],[-.92,-.36,4.9]],t.wirePower,"body"),hn(a,"GPIO 32 door sensor wiring",[[-.08,.18,.72],[.92,.18,1.6],[.93,-.34,2.38],[.83,-.44,2.38]],t.wireSensor,"chamber"),hn(a,"temperature and liquid sensor wiring",[[.02,.18,.72],[.52,.2,.88],[.78,.2,2.7],[.55,.08,3.7]],t.wireSignal,"wiring"),kn(a,"GPIO14 BLOWER",[-.82,.33,2.35],"#38bdf8"),kn(a,"GPIO27 HEATER",[.92,.33,2.55],"#fb923c"),kn(a,"GPIO26 UV",[-.72,.25,2.08],"#a78bfa"),kn(a,"GPIO25 MIST",[.35,.3,2.28],"#facc15"),kn(a,"GPIO32 DOOR",[.94,.23,1.72],"#38bdf8");for(let g=0;g<7;g+=1){const y=Re(s,`airflow vector ${g+1}`,.025,.58,[-.48+g*.16,-.32,3.16-g%3*.22],t.air,[Math.PI/2,0,0]);y.userData.baseX=y.position.x,y.userData.phase=g*.35}for(let g=0;g<10;g+=1){const y=new Ft(new ka(.04,16,12),t.mist);y.name=`mist particle ${g+1}`,y.position.set(-.36+g*.08,-.36,3.38-g%4*.16),y.userData.phase=g*.42,s.add(y)}const p={exterior:i,internal:r,airflow:s,wiring:a,ledFrame:i.children.filter(g=>g.name.includes("LED frame")),uvTubes:r.children.filter(g=>g.name.includes("UV tube")),heater:r.children.find(g=>g.name.includes("heater")),blower:f,fanBlades:r.children.filter(g=>g.name.includes("fan blade")),openHelmet:h,serviceTray:u,rearPanel:i.children.filter(g=>g.name.includes("rear")||g.name.includes("back sheet")),mistParticles:s.children.filter(g=>g.name.includes("mist particle")),airVectors:s.children.filter(g=>g.name.includes("airflow vector")),door:i.children.find(g=>g.name.includes("door")),openDoor:o,root:e};return{root:e,parts:p,materials:t}}const r0=[["body","Body shell","Compact 1020 x 600 x 430 mm kiosk cabinet"],["display","Front display","10.1 inch ad, price, QR prompt, and timer screen"],["status","Status strip","Scan QR, Pay & Start, Helmet Cleaning, Done indicators"],["chamber","Glass chamber","Transparent red-lit door, handle, and hinges"],["stand","Helmet stand","Center stand and support plate"],["blower","Dual fans","Rear/top air movement and exhaust"],["heater","PTC heater","Hot-air drying source"],["uv","UV tubes","Sanitization bars"],["mist","Spray nozzle","High-pressure mist/deodorizer outlet"],["service","Service bay","ESP32, relay board, supply, bottles, fan, vents"],["wiring","Wiring harness","ESP32 relay and sensor routing inside the machine"]],xa={front:{label:"Front",position:[0,-16,2.55],target:[0,-.08,2.12]},side:{label:"Side",position:[13.4,-5.2,2.55],target:[0,-.02,2.12]},rear:{label:"Rear",position:[0,15,2.55],target:[0,.04,2.15]},backOpen:{label:"Back Open",position:[0,-5.35,2.62],target:[0,-.52,2.5]},top:{label:"Top",position:[.2,-.3,8.5],target:[0,0,2.35]},service:{label:"Service bay",position:[3.6,-5.2,1.55],target:[.12,.02,.95]}};function $T({type:n}){return E.createElement("div",{className:`component-preview component-${n}`},E.createElement("span",{className:"preview-shadow"}),E.createElement("span",{className:"preview-body"}),E.createElement("span",{className:"preview-detail a"}),E.createElement("span",{className:"preview-detail b"}),E.createElement("span",{className:"preview-detail c"}))}function ZT({stage:n="idle",variant:e="embedded"}){const t=be.useRef(null),i=be.useRef(null),r=be.useRef(null),s=be.useRef(null),a=be.useRef(n),o=be.useRef(!0),l=be.useRef("body"),c=be.useRef("external"),f=be.useRef(!1),h=be.useRef(()=>{}),[u,p]=be.useState("external"),[g,y]=be.useState(!0),[m,d]=be.useState("body"),[_,v]=be.useState("front"),[M,R]=be.useState(!1),[C,b]=be.useState(!1),[I,T]=be.useState(0),[S,k]=be.useState(""),K=Ii[I]||Ii[0],U=S||n,j=va[m]||va.body;be.useEffect(()=>{var L;l.current=m,(L=h.current)==null||L.call(h,m)},[m]),be.useEffect(()=>{c.current=u},[u]),be.useEffect(()=>{a.current=U},[U]),be.useEffect(()=>{o.current=g},[g]),be.useEffect(()=>{f.current=M},[M]),be.useEffect(()=>{if(!C)return;R(!0);const L=window.setInterval(()=>{T(V=>(V+1)%Ii.length)},3600);return()=>window.clearInterval(L)},[C]),be.useEffect(()=>{if(!C)return;const L=Ii[I]||Ii[0];p(L.mode),v(L.camera),d(L.selected),k(L.stage),y(!0)},[C,I]),be.useEffect(()=>{const L=xa[_],V=r.current,ce=s.current;if(!L||!V||!ce)return;const ye=[...L.position],N=[...L.target];if(M&&u==="backOpen"){const Z=window.innerWidth<640;ye[1]=Z?-6.2:-5.95,ye[2]=Z?2.74:2.72,N[1]=-.55,N[2]=Z?2.6:2.62,V.zoom=Z?1.06:1.18}else V.zoom=1;V.updateProjectionMatrix(),V.position.set(...ye),ce.target.set(...N),V.lookAt(...N),ce.update()},[_,M,u]),be.useEffect(()=>{const L=t.current;if(!L)return;const V=new gT;V.background=null,V.fog=null;const ce=new mn(62,L.clientWidth/L.clientHeight,.1,100);ce.up.set(0,0,1),ce.position.set(...xa.front.position),ce.lookAt(...xa.front.target),r.current=ce;const ye=new mT({antialias:!0,alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!0});ye.setClearColor(0,0),ye.setSize(L.clientWidth,L.clientHeight),ye.setPixelRatio(Math.min(window.devicePixelRatio,2)),ye.shadowMap.enabled=!0,L.appendChild(ye.domElement);const N=new GT(ce,ye.domElement);N.target.set(...xa.front.target),N.enableDamping=!0,N.dampingFactor=.08,N.minDistance=2.7,N.maxDistance=13,N.screenSpacePanning=!0,s.current=N;const Z=new OT("#ffffff","#454850",3.45);V.add(Z);const ge=new Vm("#ffffff",4.35);ge.position.set(3,-5,6),ge.castShadow=!0,V.add(ge);const ue=new Vm("#f8fafc",2.85);ue.position.set(-4,-3,4),V.add(ue);const ke=new Hm("#f8fafc",3.75,7);ke.position.set(0,-3.2,2.8),V.add(ke);const Ne=new Hm("#ff1238",5,6);Ne.position.set(0,-1.3,3.6),V.add(Ne);const H=new Ft(new Hf(3.4,96),new et({color:"#474852",metalness:.08,roughness:.78,transparent:!0,opacity:.24}));H.name="transparent inspection floor",H.position.z=-.16,H.receiveShadow=!0,V.add(H);const Ze=jT(V);i.current=Ze;const Te=new BT,Qe=new me,Me=new HT(new Or,"#ff4d63");Me.name="selected component bounding box",Me.visible=!1,V.add(Me);const Ie=fe=>{const le=va[fe]?fe:"body";Me.visible=!1;const ie=[];if(Ze.root.traverse(he=>{if(he.isSprite){he.visible=!f.current&&c.current!=="backOpen"&&he.userData.isPartLabel&&(he.userData.componentKey===le||le==="display"&&["display","status"].includes(he.userData.componentKey));return}if(!he.isMesh)return;const J=he.userData.componentKey===le;he.userData.isSelected=J,J&&ie.push(he),he.material&&"emissiveIntensity"in he.material&&(he.material.emissiveIntensity=he.userData.baseEmissiveIntensity??he.material.emissiveIntensity)}),ie.length){const he=new Or;ie.forEach(J=>he.expandByObject(J)),Me.box.copy(he),Me.visible=le!=="body"&&!f.current&&c.current!=="backOpen"}};h.current=Ie,Ie(l.current);let Pe=null;const Ve=fe=>{const le=ye.domElement.getBoundingClientRect();Qe.x=(fe.clientX-le.left)/le.width*2-1,Qe.y=-((fe.clientY-le.top)/le.height)*2+1},at=fe=>{Pe={x:fe.clientX,y:fe.clientY}},P=fe=>{if(!Pe)return;const le=Math.hypot(fe.clientX-Pe.x,fe.clientY-Pe.y);if(Pe=null,le>5)return;Ve(fe),Te.setFromCamera(Qe,ce);const ie=Te.intersectObjects(Ze.root.children,!0).filter(he=>he.object.userData.componentKey);if(ie[0]){const he=ie[0].object.userData.componentKey;d(he),Ie(he)}};ye.domElement.addEventListener("pointerdown",at),ye.domElement.addEventListener("pointerup",P);let w=0;const Y=new zT,Q=()=>{const fe=Y.getElapsedTime(),{root:le,parts:ie}=i.current,he=a.current;if(N.update(),(c.current==="backOpen"||f.current)&&(Me.visible=!1,le.traverse(J=>{J.isSprite&&(J.visible=!1)})),o.current){if(ie.airVectors.forEach(J=>{J.position.y=-.42+(fe*.75+J.userData.phase)%1*.42,J.scale.z=he==="air_cleaning"||he==="drying"?1.45:.65}),ie.mistParticles.forEach(J=>{J.position.y=-.36+Math.sin(fe*2.2+J.userData.phase)*.08,J.position.z+=Math.sin(fe+J.userData.phase)*8e-4,J.visible=he==="mist_deodorizing"||u!=="external"}),ie.uvTubes.forEach(J=>{J.scale.setScalar(he==="uv_sanitizing"?1.28+Math.sin(fe*8)*.06:1)}),ie.heater&&ie.heater.scale.setScalar(he==="drying"?1.08+Math.sin(fe*5)*.03:1),ie.door&&(ie.door.position.x=he==="starting"?Math.sin(fe*3)*.05:0),ie.wiring.children.forEach((J,Se)=>{J.scale.setScalar(J.userData.componentKey===l.current?1.35+Math.sin(fe*5+Se)*.03:1)}),ie.ledFrame.forEach((J,Se)=>{J.material.emissiveIntensity=1.8+Math.sin(fe*2.2+Se)*.28}),ie.blower&&(ie.blower.rotation.z=he==="air_cleaning"||he==="drying"?Math.sin(fe*8)*.015:0),ie.fanBlades.forEach((J,Se)=>{(["air_cleaning","drying","uv_sanitizing"].includes(he)||c.current==="backOpen")&&(J.rotation.y+=.12+Se*.002)}),ie.openDoor){const J=c.current==="backOpen"?Math.sin(fe*1.4)*.018:0;ie.openDoor.rotation.z=-.04+J}ie.openHelmet&&(ie.openHelmet.rotation.z=Math.sin(fe*.8)*.025),ie.serviceTray&&(ie.serviceTray.position.y=c.current==="backOpen"?-.02+Math.sin(fe*.9)*.01:0)}ye.render(V,ce),w=requestAnimationFrame(Q)};Q();const ne=()=>{ce.aspect=L.clientWidth/L.clientHeight,ce.updateProjectionMatrix(),ye.setSize(L.clientWidth,L.clientHeight)},se=new ResizeObserver(ne);return se.observe(L),window.addEventListener("resize",ne),()=>{cancelAnimationFrame(w),window.removeEventListener("resize",ne),se.disconnect(),ye.domElement.removeEventListener("pointerdown",at),ye.domElement.removeEventListener("pointerup",P),N.dispose(),ye.dispose(),L.removeChild(ye.domElement)}},[]),be.useEffect(()=>{const L=i.current;if(!L)return;const{parts:V}=L,ce=u!=="external",ye=u==="internal"?.24:u==="section"?.1:u==="exploded"?.38:u==="circuit"?.14:1;V.internal.visible=ce,V.airflow.visible=ce||["air_cleaning","mist_deodorizing","drying"].includes(U),V.wiring.visible=u==="circuit",V.openDoor.visible=u==="backOpen",V.root.traverse(N=>{if(N.isSprite){if(M||u==="backOpen"){N.visible=!1;return}N.visible=N.userData.isPartLabel&&(N.userData.componentKey===m||m==="display"&&["display","status"].includes(N.userData.componentKey))}}),V.exterior.children.forEach(N=>{if(N.visible=!0,u==="backOpen"){if(N===V.openDoor)return;if(N.userData.componentKey==="display"||N.userData.componentKey==="status"||N.name.includes("black chamber frame cutout face")||N.name.includes("transparent acrylic chamber door")||N.name.includes("rounded tubular door handle")||N.name.includes("curved vertical door pull handle")||N.name.includes("hinge block")||N.name.includes("rear")||N.name.includes("back sheet")||N.name.includes("bottom electronics service bay")||N.name.includes("removable lower service access panel")){N.visible=!1;return}}if(N.material&&N.name.includes("transparent acrylic chamber door")){const Z=u==="external"?.24:u==="internal"?.14:.1;N.material.transparent=!0,N.material.opacity=Z;return}if(N.material&&(N.name.includes("kiosk body")||N.userData.componentKey==="body")&&(N.material.transparent=ye<1,N.material.opacity=ye),N.material&&(N.name.includes("service")||N.name.includes("gasket"))){const Z=u==="external"?1:u==="internal"?.3:u==="backOpen"?.12:u==="circuit"?.18:.42;N.material.transparent=Z<1,N.material.opacity=Z}if(N.name.includes("removable lower service access panel")||N.name.includes("bottom electronics service bay")){const Z=m==="service"||m==="wiring";N.material.transparent=Z||u!=="external",N.material.opacity=Z?.08:u==="external"?1:.2,N.name.includes("removable lower service access panel")&&(N.position.x=Z?1.05:0,N.position.y=Z?-.72:-.392,N.position.z=Z?.62:.74)}}),V.rearPanel.forEach(N=>{if(!N.material)return;const Z=u==="backOpen";N.visible=!Z,!Z&&(N.material.transparent=Z||ye<1,N.material.opacity=Z?.08:ye<1?Math.min(ye+.08,.34):1,N.name.includes("removable rear back sheet service door")&&(N.position.x=Z?2.15:0,N.position.y=Z?.88:.405,N.rotation.z=Z?-.18:0))}),V.internal.children.forEach(N=>{if(N.visible=!0,!N.material)return;const Z=N.userData.componentKey===m;if(N.name.includes("fan service cover")){N.material.transparent=!0,N.material.opacity=u==="external"?.22:.12;return}if(u==="backOpen"){if(N.name.includes("single helmet container")){N.material.transparent=!0,N.material.opacity=.08;return}if(N.name.includes("helmet container rear wall")){N.material.transparent=!1,N.material.opacity=1;return}N.material.transparent=N.userData.componentKey==="mist",N.material.opacity=N.userData.componentKey==="mist"?.58:1;return}N.material.transparent=u==="circuit"&&!Z,u==="circuit"&&!Z&&(N.material.opacity=.38),u!=="circuit"&&N.material.opacity<1&&N.userData.componentKey!=="mist"&&(N.material.opacity=1)}),V.serviceTray&&(V.serviceTray.visible=m==="service"||_==="service"),u==="exploded"?(V.internal.position.set(1.15,.2,0),V.airflow.position.set(1.15,.2,0),V.wiring.position.set(.45,.16,0)):u==="backOpen"?(V.internal.position.set(0,0,0),V.airflow.position.set(0,0,0),V.wiring.position.set(0,.02,0)):u==="section"?(V.internal.position.set(.34,.08,0),V.airflow.position.set(.34,.08,0),V.wiring.position.set(.12,.04,0)):u==="circuit"?(V.internal.position.set(.16,.04,0),V.airflow.position.set(.16,.04,0),V.wiring.position.set(0,0,0)):(V.internal.position.set(0,0,0),V.airflow.position.set(0,0,0),V.wiring.position.set(0,0,0))},[u,U,m,_,M]);const $=L=>{b(!1),k(""),d(L),L==="service"?(p("backOpen"),v("backOpen")):L==="wiring"?(p("circuit"),v("service")):["blower","heater"].includes(L)?(p("backOpen"),v("backOpen")):["uv","mist","stand","chamber"].includes(L)?(p("internal"),v("front")):(L==="body"||L==="display"||L==="status")&&(p("external"),v("front"))},ee=L=>{b(!1),k(""),p(L),L==="external"?(v("front"),d("body")):L==="circuit"?(v("service"),d("wiring")):L==="backOpen"?(v("backOpen"),d("body")):v(L==="exploded"||L==="section"?"side":"front")},ae=L=>{const V=Ii[L]||Ii[0];b(!1),T(L),k(V.stage),p(V.mode),v(V.camera),d(V.selected),y(!0)},O=()=>{var ce;const L=(ce=t.current)==null?void 0:ce.querySelector("canvas");if(!L)return;const V=document.createElement("a");V.download=`nektron-${u}-pitch.png`,V.href=L.toDataURL("image/png"),V.click()},F=()=>{window.print()};return e==="cad"?E.createElement("main",{className:M?`cad-shell presentation-mode${C?" demo-mode":""}`:"cad-shell"},E.createElement("header",{className:"cad-topbar"},E.createElement("a",{className:"cad-brand",href:"/","aria-label":"Back to NEKTRON operation page"},E.createElement("span",null,"N"),E.createElement("strong",null,"NEKTRON CAD")),E.createElement("div",{className:"cad-toolstrip","aria-label":"CAD tools"},E.createElement("button",{className:u==="external"?"active":"",onClick:()=>ee("external")},E.createElement(lp,{size:16})," Exterior"),E.createElement("button",{className:u==="internal"?"active":"",onClick:()=>ee("internal")},E.createElement($x,{size:16})," X-Ray"),E.createElement("button",{className:u==="backOpen"?"active":"",onClick:()=>ee("backOpen")},E.createElement(Yc,{size:16})," Back Open"),E.createElement("button",{className:u==="section"?"active":"",onClick:()=>ee("section")},E.createElement(Qx,{size:16})," Section"),E.createElement("button",{className:u==="exploded"?"active":"",onClick:()=>ee("exploded")},E.createElement(Nx,{size:16})," Exploded"),E.createElement("button",{className:u==="circuit"?"active":"",onClick:()=>ee("circuit")},E.createElement(sp,{size:16})," Wiring"),E.createElement("button",{className:g?"active":"",onClick:()=>y(L=>!L)},E.createElement(ap,{size:16})," Motion"),E.createElement("button",{className:C?"active demo-toggle":"demo-toggle",onClick:()=>b(L=>!L)},E.createElement(Yx,{size:16})," Demo"),E.createElement("button",{className:M?"active present-toggle":"present-toggle",onClick:()=>R(L=>!L)},E.createElement(up,{size:16})," Present")),E.createElement("div",{className:"cad-export-group"},E.createElement("button",{className:"cad-export",onClick:O},E.createElement(Fx,{size:16})," Screenshot"),E.createElement("button",{className:"cad-export",onClick:F},E.createElement(zx,{size:16})," PDF"),E.createElement("a",{className:"cad-export",href:"/models/nektron_machine.usdz"},E.createElement(up,{size:16})," AR"))),E.createElement("section",{className:"cad-workspace"},E.createElement("aside",{className:"cad-panel cad-tree"},E.createElement("div",{className:"cad-panel-title"},E.createElement(cp,{size:16})," Assembly"),E.createElement("div",{className:"assembly-list"},r0.map(([L,V,ce])=>{var ye;return E.createElement("button",{key:L,className:m===L?"active":"",onClick:()=>$(L)},E.createElement("span",null,E.createElement("b",null,(ye=va[L])==null?void 0:ye.number),V),E.createElement("small",null,ce))}))),E.createElement("section",{className:"cad-viewport-wrap"},E.createElement("div",{className:"cad-viewport-header"},E.createElement("div",null,E.createElement("strong",null,"NEKTRON Smart Helmet Cleaning Station · Powered by Laila"),E.createElement("span",null,"Use camera presets for clear engineering views, then drag to inspect every side.")),E.createElement("div",{className:"cad-view-actions"},Object.entries(xa).map(([L,V])=>E.createElement("button",{key:L,className:_===L?"active":"",onClick:()=>v(L)},V.label)),E.createElement("button",{className:M?"active":"",onClick:()=>R(L=>!L)},M?"Exit":"Present"),E.createElement("div",{className:"cad-stage-chip"},E.createElement(Bx,{size:16}),$m[U]||U))),E.createElement("div",{className:"cad-viewer-frame",ref:t},E.createElement("div",{className:"demo-scene-strip"},Ii.map((L,V)=>E.createElement("button",{key:L.id,className:K.id===L.id?"active":"",onClick:()=>ae(V)},L.label))),E.createElement("div",{className:"viewer-hud"},E.createElement("div",{className:"orbit-help"},"Drag rotate · Scroll zoom · Click part"),E.createElement("div",{className:"view-explainer"},E.createElement("strong",null,C?K.title:u==="external"?"External body":u==="internal"?"X-Ray internal":u==="backOpen"?"Open view internal":u==="section"?"Section view":u==="exploded"?"Exploded layout":"Circuit routing"),E.createElement("span",null,C?K.detail:u==="external"?"Final kiosk shell and front design.":u==="internal"?"Transparent shell reveals internals.":u==="backOpen"?"Helmet door open with fans, UV bars, helmet, bottles, pump, power supply, and harness visible.":u==="section"?"Offset internals for placement review.":u==="exploded"?"Separated assemblies show where modules go.":"Color-coded ESP32 relay paths."))),E.createElement("div",{className:"dimension dim-height"},"1020 mm height"),E.createElement("div",{className:"dimension dim-width"},"600 mm width"),E.createElement("div",{className:"dimension dim-depth"},"430 mm depth"),u==="circuit"&&E.createElement("div",{className:"wiring-legend"},E.createElement("span",null,E.createElement("i",{className:"wire-red"})," LED / power"),E.createElement("span",null,E.createElement("i",{className:"wire-orange"})," Heater"),E.createElement("span",null,E.createElement("i",{className:"wire-purple"})," UV"),E.createElement("span",null,E.createElement("i",{className:"wire-blue"})," Blower / sensors"),E.createElement("span",null,E.createElement("i",{className:"wire-yellow"})," Mist / signal")),E.createElement("div",{className:"callout-board"},r0.slice(0,6).map(([L,V])=>{var ce;return E.createElement("button",{key:L,className:m===L?"active":"",onClick:()=>$(L)},E.createElement("b",null,(ce=va[L])==null?void 0:ce.number),E.createElement("span",null,V))})),E.createElement("div",{className:"axis-widget"},E.createElement("span",{className:"axis-z"},"Z"),E.createElement("span",{className:"axis-y"},"Y"),E.createElement("span",{className:"axis-x"},"X")))),E.createElement("aside",{className:"cad-panel cad-properties"},E.createElement("div",{className:"cad-panel-title"},E.createElement(Ux,{size:16})," Properties"),E.createElement("div",{className:"property-group selected-component"},E.createElement("h3",null,E.createElement("span",{className:"component-number"},j.number),j.title),E.createElement($T,{type:j.preview}),E.createElement("p",null,E.createElement("span",null,"Placement"),E.createElement("strong",null,j.placement)),E.createElement("p",null,E.createElement("span",null,"Control"),E.createElement("strong",null,j.pins)),E.createElement("p",null,E.createElement("span",null,"Wiring"),E.createElement("strong",null,j.wiring)),E.createElement("small",null,j.detail)),E.createElement("div",{className:"property-group"},E.createElement("h3",null,"Machine Envelope"),E.createElement("p",null,E.createElement("span",null,"Height"),E.createElement("strong",null,"1020 mm")),E.createElement("p",null,E.createElement("span",null,"Width"),E.createElement("strong",null,"600 mm")),E.createElement("p",null,E.createElement("span",null,"Depth"),E.createElement("strong",null,"430 mm")),E.createElement("p",null,E.createElement("span",null,"Weight"),E.createElement("strong",null,"65 kg")),E.createElement("p",null,E.createElement("span",null,"Body"),E.createElement("strong",null,"Matte black")),E.createElement("p",null,E.createElement("span",null,"LED"),E.createElement("strong",null,"Red emission frame"))),E.createElement("div",{className:"property-group"},E.createElement("h3",null,"Cleaning Hardware"),E.createElement("p",null,E.createElement("span",null,"Air"),E.createElement("strong",null,"Blower relay GPIO 14")),E.createElement("p",null,E.createElement("span",null,"Heat"),E.createElement("strong",null,"PTC relay GPIO 27")),E.createElement("p",null,E.createElement("span",null,"UV"),E.createElement("strong",null,"UV relay GPIO 26")),E.createElement("p",null,E.createElement("span",null,"Mist"),E.createElement("strong",null,"Mist relay GPIO 25")),E.createElement("p",null,E.createElement("span",null,"Power"),E.createElement("strong",null,"220V AC · 850W")),E.createElement("p",null,E.createElement("span",null,"Cycle"),E.createElement("strong",null,"3 minutes · ₹49"))),E.createElement("div",{className:"property-group"},E.createElement("h3",null,"Color Variants"),E.createElement("div",{className:"variant-swatches"},E.createElement("span",{className:"swatch black-red"},"Black + red"),E.createElement("span",{className:"swatch white-red"},"White + red"),E.createElement("span",{className:"swatch black-mono"},"Black mono"),E.createElement("span",{className:"swatch white-mono"},"White mono"))),E.createElement("div",{className:"property-group"},E.createElement("h3",null,"Reference Videos"),E.createElement("div",{className:"reference-videos"},E.createElement("video",{src:"/media/nektron-reference-031838.mp4",controls:!0,muted:!0,playsInline:!0,preload:"metadata"}),E.createElement("video",{src:"/media/nektron-reference-033150.mp4",controls:!0,muted:!0,playsInline:!0,preload:"metadata"}))),E.createElement("div",{className:"property-group"},E.createElement("h3",null,"Engineer Checks"),E.createElement("ul",null,E.createElement("li",null,"Door interlock before UV/heater"),E.createElement("li",null,"Service bay separated from wet chamber"),E.createElement("li",null,"Refill tank reachable from lower bay"),E.createElement("li",null,"Airflow vectors clear helmet shell"))))),E.createElement("footer",{className:"cad-statusbar"},E.createElement("span",null,E.createElement(Wx,{size:14})," Drag orbit and zoom enabled"),E.createElement("span",null,E.createElement(qx,{size:14})," Dimension annotations visible"),E.createElement("span",null,E.createElement(op,{size:14})," ESP32 relay map aligned with firmware")),E.createElement("section",{className:"cad-pitch-board"},E.createElement("div",{className:"pitch-copy"},E.createElement("span",null,"Pitch summary"),E.createElement("h2",null,"Smart helmet cleaning kiosk with payment, safety interlocks, and serviceable internals."),E.createElement("p",null,"Use this board with Demo mode for investor/client walkthroughs: customer QR flow, open internal view, cleaning cycle, service bay, wiring proof, and revenue logic.")),E.createElement("div",{className:"pitch-grid"},E.createElement("article",null,E.createElement("b",null,"Problem"),E.createElement("strong",null,"Shared helmets carry sweat, odor, and hygiene concerns."),E.createElement("span",null,"High-frequency riders need a quick visible cleaning step before reuse.")),E.createElement("article",null,E.createElement("b",null,"Solution"),E.createElement("strong",null,"Scan, pay, insert helmet, run a 3-minute automated cycle."),E.createElement("span",null,"Airflow, UV, deodorizer mist, and drying are presented as a compact self-service kiosk.")),E.createElement("article",null,E.createElement("b",null,"Revenue"),E.createElement("strong",null,"₹49 quick clean with deployable kiosk fleet tracking."),E.createElement("span",null,"Good for malls, petrol pumps, bike parking, delivery hubs, and campuses.")),E.createElement("article",null,E.createElement("b",null,"Technical proof"),E.createElement("strong",null,"ESP32 relay map, door interlock, UV safety, pump, fans, and AC/DC bay."),E.createElement("span",null,"CAD views expose the parts buyers will ask about during demo discussions."))),E.createElement("div",{className:"pitch-proof-row"},E.createElement("span",null,"Safety path: Door sensor → ESP32 → relay lockout → UV/heater disabled when open"),E.createElement("span",null,"Service path: lower tray → bottles + pump → cable glands → relay board → power supply"),E.createElement("span",null,"Demo exports: screenshot button + browser PDF print flow")))):E.createElement("article",{className:"engineering-panel"},E.createElement("div",{className:"engineering-copy"},E.createElement("div",{className:"panel-title"},E.createElement(cp,{size:18}),"Engineering 3D Visualization"),E.createElement("h2",null,"External shell, internal cleaning hardware, and animated process flow."),E.createElement("p",null,"Use this model as a prototype review surface for body layout, service bay placement, chamber internals, airflow path, UV position, heater zone, mist nozzle, and ESP32 relay bay."),E.createElement("div",{className:"viewer-controls"},E.createElement("button",{className:u==="external"?"active":"",onClick:()=>p("external")},E.createElement(lp,{size:16})," External"),E.createElement("button",{className:u==="internal"?"active":"",onClick:()=>p("internal")},E.createElement(op,{size:16})," Internal"),E.createElement("button",{className:u==="backOpen"?"active":"",onClick:()=>p("backOpen")},E.createElement(Yc,{size:16})," Back Open"),E.createElement("button",{className:u==="exploded"?"active":"",onClick:()=>p("exploded")},E.createElement(Yc,{size:16})," Exploded"),E.createElement("button",{className:u==="circuit"?"active":"",onClick:()=>p("circuit")},E.createElement(sp,{size:16})," Wiring"),E.createElement("button",{className:g?"active":"",onClick:()=>y(L=>!L)},E.createElement(ap,{size:16})," ",g?"Animating":"Paused")),E.createElement("div",{className:"stage-readout"},E.createElement("strong",null,$m[U]||U),E.createElement("span",null,"Current stage drives UV glow, mist particles, heater pulse, and airflow vectors."))),E.createElement("div",{className:"viewer-frame",ref:t}))}const QT="http://localhost:4000",s0="user_demo",Ou=["starting","air_cleaning","uv_sanitizing","mist_deodorizing","drying","done"],a0={idle:"Ready",starting:"Starting",air_cleaning:"Air Cleaning",uv_sanitizing:"UV Sanitizing",mist_deodorizing:"Mist Deodorizing",drying:"Drying",done:"Complete",error:"Error",service_required:"Service Required"};function JT(){return window.Razorpay?Promise.resolve():new Promise((n,e)=>{const t=document.createElement("script");t.src="https://checkout.razorpay.com/v1/checkout.js",t.async=!0,t.onload=n,t.onerror=()=>e(new Error("Unable to load Razorpay Checkout")),document.body.appendChild(t)})}function eA(){var $,ee,ae,O;const[n,e]=be.useState(window.location.pathname),[t,i]=be.useState("NEK-DEL-001"),[r,s]=be.useState(null),[a,o]=be.useState(null),[l,c]=be.useState(null),[f,h]=be.useState(null),[u,p]=be.useState([]),[g,y]=be.useState(""),[m,d]=be.useState(null),[_,v]=be.useState("Scan or enter a NEKTRON machine code to begin."),[M,R]=be.useState(!1),C=(a==null?void 0:a.current_stage)||(r==null?void 0:r.current_stage)||"idle",b=be.useMemo(()=>{const F=Ou.indexOf(C);return C==="done"?100:F<0?0:Math.round((F+1)/Ou.length*100)},[C]);async function I(F,L={}){const V=await fetch(`${QT}${F}`,{headers:{"Content-Type":"application/json",...L.headers||{}},...L}),ce=await V.json();if(!V.ok)throw new Error(ce.error||"Request failed");return ce}async function T(F){F==null||F.preventDefault(),R(!0);try{const L=await I("/scan",{method:"POST",body:JSON.stringify({machine_code:t.trim()})});s(L.machine),o(null),c(null),v(`${L.machine.name} detected at ${L.machine.location_name}.`);const V=await I(`/qr/${L.machine.machine_code}`);y(V.qrDataUrl),await k()}catch(L){v(L.message)}finally{R(!1)}}async function S(F=r){if(!F)return;const L=await I(`/machines/${F.machine_code}/status`);o(L.status)}async function k(){const F=await I(`/users/${s0}/history`);p(F.history);const L=F.history[0];if(L!=null&&L.id){const V=await I(`/usage/${L.id}/report`);d(V.report)}}async function K(){if(r){R(!0);try{const F=await I("/payments/create-order",{method:"POST",body:JSON.stringify({machine_code:r.machine_code,amount:r.price})});c(F.order),v(F.order.provider==="razorpay"?"Razorpay order created. Complete checkout to start Quick Clean.":"Mock Razorpay order created. Confirm payment to start Quick Clean.")}catch(F){v(F.message)}finally{R(!1)}}}async function U(){if(!(!r||!l)){R(!0);try{let F;if(l.provider==="razorpay"){await JT();const V=await new Promise((ce,ye)=>{new window.Razorpay({key:l.checkout_key_id,amount:l.amount_subunits,currency:l.currency,name:"NEKTRON",description:"Quick helmet cleaning",order_id:l.provider_order_id,prefill:{contact:"9999999999"},theme:{color:"#ef233c"},handler:ce,modal:{ondismiss:()=>ye(new Error("Payment cancelled"))}}).open()});F=await I("/payments/verify",{method:"POST",body:JSON.stringify({order_id:l.id,razorpay_order_id:V.razorpay_order_id,razorpay_payment_id:V.razorpay_payment_id,razorpay_signature:V.razorpay_signature})})}else F=await I("/payments/verify",{method:"POST",body:JSON.stringify({order_id:l.id,paymentStatus:"success"})});const L=await I(`/machines/${r.machine_code}/start`,{method:"POST",body:JSON.stringify({user_id:s0,service_type:"quick_clean",amount:l.amount,payment_id:F.payment.payment_id,payment_status:"paid"})});h(L.session),d(L.session.sanitization_report),s(L.machine),v("Quick Clean started. Keep the helmet inside until the cycle completes."),await S(L.machine),await k()}catch(F){v(F.message)}finally{R(!1)}}}be.useEffect(()=>{const F=()=>e(window.location.pathname);return window.addEventListener("popstate",F),()=>window.removeEventListener("popstate",F)},[]);function j(F){window.history.pushState({},"",F),e(F),window.scrollTo({top:0,behavior:"smooth"})}return be.useEffect(()=>{T()},[]),be.useEffect(()=>{if(!r)return;const F=setInterval(()=>{S().catch(L=>v(L.message)),k().catch(()=>{})},1800);return()=>clearInterval(F)},[r==null?void 0:r.machine_code]),n==="/engineering"?E.createElement(ZT,{stage:C,variant:"cad"}):E.createElement("main",{className:"app-shell"},E.createElement("section",{className:"hero-panel"},E.createElement("nav",{className:"topbar"},E.createElement("div",{className:"brand-mark"},E.createElement("span",{className:"brand-icon"},"N"),E.createElement("span",null,"NEKTRON")),E.createElement("div",{className:"top-actions"},E.createElement("button",{className:"nav-action active",onClick:()=>j("/")},E.createElement(Vx,{size:16}),"Operate"),E.createElement("button",{className:"nav-action",onClick:()=>j("/engineering")},E.createElement(kx,{size:16}),"3D CAD"),E.createElement("div",{className:"status-pill"},a!=null&&a.is_online?E.createElement(t1,{size:16}):E.createElement(e1,{size:16}),a!=null&&a.is_online?"Machine online":"Machine offline"))),E.createElement("div",{className:"hero-grid"},E.createElement("div",{className:"hero-copy"},E.createElement("h1",null,"Smart helmet cleaning from your phone."),E.createElement("p",null,"Scan the kiosk QR, pay ₹49, place the helmet, and watch the 3-minute cleaning cycle update live."),E.createElement("form",{className:"scan-box",onSubmit:T},E.createElement("label",{htmlFor:"machineCode"},"Machine QR / Code"),E.createElement("div",{className:"scan-row"},E.createElement("input",{id:"machineCode",value:t,onChange:F=>i(F.target.value),placeholder:"NEK-DEL-001"}),E.createElement("button",{type:"submit",disabled:M},E.createElement(jx,{size:18}),"Scan"))),E.createElement("div",{className:"message-line"},_)),E.createElement("div",{className:"machine-card"},E.createElement("div",{className:"ad-screen"},E.createElement(Jx,{size:18}),"Powered by Laila · Hygiene loop"),E.createElement("div",{className:"kiosk"},E.createElement("div",{className:"kiosk-led"}),E.createElement("div",{className:"round-display"},C==="idle"?E.createElement(Kx,{size:42}):E.createElement(Lx,{size:42}),E.createElement("span",null,a0[C])),E.createElement("div",{className:"kiosk-brand"},"NEKTRON"),E.createElement("div",{className:"status-strip"},E.createElement("span",null,"SCAN QR"),E.createElement("i",{className:"red"}),E.createElement("span",null,"PAY & START"),E.createElement("i",{className:"red glow"}),E.createElement("span",null,"DONE"),E.createElement("i",{className:"green"})),E.createElement("div",{className:"glass-door"},E.createElement("div",{className:"helmet-shape"}),E.createElement("div",{className:"uv-line one"}),E.createElement("div",{className:"uv-line two"}),E.createElement("div",{className:"mist-cloud"})),E.createElement("div",{className:"safe-ride"},"CLEAN HELMET. SAFE RIDE."),E.createElement("div",{className:"service-bay"}))))),E.createElement("section",{className:"workflow-grid"},E.createElement("article",{className:"panel machine-detail"},E.createElement("div",{className:"panel-title"},E.createElement(Gx,{size:18}),"Machine Detail"),r?E.createElement(E.Fragment,null,E.createElement("h2",null,r.name),E.createElement("dl",null,E.createElement("div",null,E.createElement("dt",null,"ID"),E.createElement("dd",null,r.machine_code)),E.createElement("div",null,E.createElement("dt",null,"Location"),E.createElement("dd",null,r.location_name)),E.createElement("div",null,E.createElement("dt",null,"Status"),E.createElement("dd",null,(a==null?void 0:a.status)||r.status)),E.createElement("div",null,E.createElement("dt",null,"Helmet Cleaning"),E.createElement("dd",null,"₹",r.price," · ",r.estimated_minutes," min"))),E.createElement("div",{className:"sensor-strip"},E.createElement("span",null,a!=null&&a.door_closed?"Door closed":"Door open"),E.createElement("span",null,(a==null?void 0:a.temperature)??r.temperature,"°C"),E.createElement("span",null,(a==null?void 0:a.mist_level)??r.mist_level,"% mist")),g&&E.createElement("div",{className:"machine-qr-card"},E.createElement("img",{src:g,alt:`${r.machine_code} QR`}),E.createElement("span",null,"Machine QR value: ",r.qr_code_value)),E.createElement("button",{className:"primary-action",onClick:K,disabled:M||!(a!=null&&a.is_online)},E.createElement(Dx,{size:18}),"Create Payment")):E.createElement("p",null,"No machine selected.")),E.createElement("article",{className:"panel payment-panel"},E.createElement("div",{className:"panel-title"},E.createElement(dp,{size:18}),"Payment & Start"),E.createElement("div",{className:"payment-card"},E.createElement("div",null,E.createElement("span",null,"Service"),E.createElement("strong",null,"Helmet Cleaning")),E.createElement("div",null,E.createElement("span",null,"Payment"),E.createElement("strong",null,l?`₹${l.amount} ready`:"Not created"))),E.createElement("button",{className:"start-action",onClick:U,disabled:M||!l},E.createElement(Xx,{size:18}),"Pay & Start Cleaning"),f&&E.createElement("p",{className:"session-note"},"Session ",f.id," is linked to this clean.")),E.createElement("article",{className:"panel live-panel"},E.createElement("div",{className:"panel-title"},E.createElement(Zx,{size:18}),"Live Cleaning"),E.createElement("div",{className:"progress-ring",style:{"--progress":`${b}%`}},E.createElement("span",null,b,"%")),E.createElement("div",{className:"stage-list"},Ou.map(F=>E.createElement("div",{className:F===C||C==="done"&&F==="done"?"stage active":"stage",key:F},E.createElement(Ix,{size:16}),a0[F]))))),E.createElement("section",{className:"report-section"},E.createElement("article",{className:"panel report-panel"},E.createElement("div",{className:"panel-title"},E.createElement(dp,{size:18}),"Helmet Sanitization Report"),m?E.createElement(E.Fragment,null,E.createElement("div",{className:"report-status"},E.createElement("span",null,m.status==="complete"?"After-clean report ready":"Before-clean baseline ready"),E.createElement("strong",null,m.method)),E.createElement("div",{className:"before-after-grid"},E.createElement("div",{className:"report-card before"},E.createElement("span",null,"Before"),E.createElement("strong",null,m.before.hygiene_score,"/100"),E.createElement("small",null,"Germ load: ",m.before.estimated_germ_load),E.createElement("small",null,"Odor: ",m.before.odor_level),E.createElement("small",null,"Moisture: ",m.before.moisture_level)),E.createElement("div",{className:"report-card after"},E.createElement("span",null,"After"),E.createElement("strong",null,m.after?`${m.after.hygiene_score}/100`:"Pending"),E.createElement("small",null,"Germ load: ",(($=m.after)==null?void 0:$.estimated_germ_load)||"Pending"),E.createElement("small",null,"Odor: ",((ee=m.after)==null?void 0:ee.odor_level)||"Pending"),E.createElement("small",null,"Drying: ",((ae=m.after)==null?void 0:ae.hot_air_drying)||"Pending"))),E.createElement("div",{className:"report-proof"},E.createElement("span",null,"UV-C"),E.createElement("span",null,"Mist deodorized"),E.createElement("span",null,"Hot-air dried"),E.createElement("strong",null,((O=m.improvement)==null?void 0:O.rider_message)||"Report will complete when the cycle finishes."))):E.createElement("p",null,"Start a helmet cleaning session to generate the before/after sanitization report."))),E.createElement("section",{className:"lower-grid"},E.createElement("article",{className:"panel"},E.createElement("div",{className:"panel-title"},E.createElement(Hx,{size:18}),"History"),E.createElement("div",{className:"history-list"},u.length===0?E.createElement("p",null,"No cleans yet."):u.slice(0,5).map(F=>E.createElement("div",{className:"history-item",key:F.id},E.createElement("span",null,F.service_type),E.createElement("strong",null,"₹",F.amount),E.createElement("small",null,F.machine_status))))),E.createElement("article",{className:"panel tutorial-panel"},E.createElement("div",{className:"panel-title"},E.createElement(Ox,{size:18}),"Tutorial"),E.createElement("ol",null,E.createElement("li",null,"Place helmet on the chamber stand."),E.createElement("li",null,"Close the transparent front door."),E.createElement("li",null,"Scan QR, pay, and wait for completion.")))))}vv(document.getElementById("root")).render(E.createElement(eA,null));
