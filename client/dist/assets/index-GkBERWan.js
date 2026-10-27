function Pu(d,u){for(var o=0;o<u.length;o++){const m=u[o];if(typeof m!="string"&&!Array.isArray(m)){for(const c in m)if(c!=="default"&&!(c in d)){const b=Object.getOwnPropertyDescriptor(m,c);b&&Object.defineProperty(d,c,b.get?b:{enumerable:!0,get:()=>m[c]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))m(c);new MutationObserver(c=>{for(const b of c)if(b.type==="childList")for(const E of b.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&m(E)}).observe(document,{childList:!0,subtree:!0});function o(c){const b={};return c.integrity&&(b.integrity=c.integrity),c.referrerPolicy&&(b.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?b.credentials="include":c.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function m(c){if(c.ep)return;c.ep=!0;const b=o(c);fetch(c.href,b)}})();function Iu(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var _s={exports:{}},Er={},As={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Bu(){if(Hd)return Y;Hd=1;var d=Symbol.for("react.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),E=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),O=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),P=Symbol.iterator;function H(x){return x===null||typeof x!="object"?null:(x=P&&x[P]||x["@@iterator"],typeof x=="function"?x:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,G={};function T(x,j,V){this.props=x,this.context=j,this.refs=G,this.updater=V||te}T.prototype.isReactComponent={},T.prototype.setState=function(x,j){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,j,"setState")},T.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ae(){}ae.prototype=T.prototype;function ce(x,j,V){this.props=x,this.context=j,this.refs=G,this.updater=V||te}var fe=ce.prototype=new ae;fe.constructor=ce,ne(fe,T.prototype),fe.isPureReactComponent=!0;var ve=Array.isArray,Le=Object.prototype.hasOwnProperty,_e={current:null},Me={key:!0,ref:!0,__self:!0,__source:!0};function Je(x,j,V){var Q,J={},Z=null,se=null;if(j!=null)for(Q in j.ref!==void 0&&(se=j.ref),j.key!==void 0&&(Z=""+j.key),j)Le.call(j,Q)&&!Me.hasOwnProperty(Q)&&(J[Q]=j[Q]);var re=arguments.length-2;if(re===1)J.children=V;else if(1<re){for(var pe=Array(re),Ve=0;Ve<re;Ve++)pe[Ve]=arguments[Ve+2];J.children=pe}if(x&&x.defaultProps)for(Q in re=x.defaultProps,re)J[Q]===void 0&&(J[Q]=re[Q]);return{$$typeof:d,type:x,key:Z,ref:se,props:J,_owner:_e.current}}function Bn(x,j){return{$$typeof:d,type:x.type,key:j,ref:x.ref,props:x.props,_owner:x._owner}}function wn(x){return typeof x=="object"&&x!==null&&x.$$typeof===d}function Jn(x){var j={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(V){return j[V]})}var hn=/\/+/g;function Ge(x,j){return typeof x=="object"&&x!==null&&x.key!=null?Jn(""+x.key):j.toString(36)}function sn(x,j,V,Q,J){var Z=typeof x;(Z==="undefined"||Z==="boolean")&&(x=null);var se=!1;if(x===null)se=!0;else switch(Z){case"string":case"number":se=!0;break;case"object":switch(x.$$typeof){case d:case u:se=!0}}if(se)return se=x,J=J(se),x=Q===""?"."+Ge(se,0):Q,ve(J)?(V="",x!=null&&(V=x.replace(hn,"$&/")+"/"),sn(J,j,V,"",function(Ve){return Ve})):J!=null&&(wn(J)&&(J=Bn(J,V+(!J.key||se&&se.key===J.key?"":(""+J.key).replace(hn,"$&/")+"/")+x)),j.push(J)),1;if(se=0,Q=Q===""?".":Q+":",ve(x))for(var re=0;re<x.length;re++){Z=x[re];var pe=Q+Ge(Z,re);se+=sn(Z,j,V,pe,J)}else if(pe=H(x),typeof pe=="function")for(x=pe.call(x),re=0;!(Z=x.next()).done;)Z=Z.value,pe=Q+Ge(Z,re++),se+=sn(Z,j,V,pe,J);else if(Z==="object")throw j=String(x),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return se}function fn(x,j,V){if(x==null)return x;var Q=[],J=0;return sn(x,Q,"","",function(Z){return j.call(V,Z,J++)}),Q}function Fe(x){if(x._status===-1){var j=x._result;j=j(),j.then(function(V){(x._status===0||x._status===-1)&&(x._status=1,x._result=V)},function(V){(x._status===0||x._status===-1)&&(x._status=2,x._result=V)}),x._status===-1&&(x._status=0,x._result=j)}if(x._status===1)return x._result.default;throw x._result}var xe={current:null},B={transition:null},$={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:B,ReactCurrentOwner:_e};function _(){throw Error("act(...) is not supported in production builds of React.")}return Y.Children={map:fn,forEach:function(x,j,V){fn(x,function(){j.apply(this,arguments)},V)},count:function(x){var j=0;return fn(x,function(){j++}),j},toArray:function(x){return fn(x,function(j){return j})||[]},only:function(x){if(!wn(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Y.Component=T,Y.Fragment=o,Y.Profiler=c,Y.PureComponent=ce,Y.StrictMode=m,Y.Suspense=S,Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,Y.act=_,Y.cloneElement=function(x,j,V){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Q=ne({},x.props),J=x.key,Z=x.ref,se=x._owner;if(j!=null){if(j.ref!==void 0&&(Z=j.ref,se=_e.current),j.key!==void 0&&(J=""+j.key),x.type&&x.type.defaultProps)var re=x.type.defaultProps;for(pe in j)Le.call(j,pe)&&!Me.hasOwnProperty(pe)&&(Q[pe]=j[pe]===void 0&&re!==void 0?re[pe]:j[pe])}var pe=arguments.length-2;if(pe===1)Q.children=V;else if(1<pe){re=Array(pe);for(var Ve=0;Ve<pe;Ve++)re[Ve]=arguments[Ve+2];Q.children=re}return{$$typeof:d,type:x.type,key:J,ref:Z,props:Q,_owner:se}},Y.createContext=function(x){return x={$$typeof:E,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:b,_context:x},x.Consumer=x},Y.createElement=Je,Y.createFactory=function(x){var j=Je.bind(null,x);return j.type=x,j},Y.createRef=function(){return{current:null}},Y.forwardRef=function(x){return{$$typeof:I,render:x}},Y.isValidElement=wn,Y.lazy=function(x){return{$$typeof:F,_payload:{_status:-1,_result:x},_init:Fe}},Y.memo=function(x,j){return{$$typeof:O,type:x,compare:j===void 0?null:j}},Y.startTransition=function(x){var j=B.transition;B.transition={};try{x()}finally{B.transition=j}},Y.unstable_act=_,Y.useCallback=function(x,j){return xe.current.useCallback(x,j)},Y.useContext=function(x){return xe.current.useContext(x)},Y.useDebugValue=function(){},Y.useDeferredValue=function(x){return xe.current.useDeferredValue(x)},Y.useEffect=function(x,j){return xe.current.useEffect(x,j)},Y.useId=function(){return xe.current.useId()},Y.useImperativeHandle=function(x,j,V){return xe.current.useImperativeHandle(x,j,V)},Y.useInsertionEffect=function(x,j){return xe.current.useInsertionEffect(x,j)},Y.useLayoutEffect=function(x,j){return xe.current.useLayoutEffect(x,j)},Y.useMemo=function(x,j){return xe.current.useMemo(x,j)},Y.useReducer=function(x,j,V){return xe.current.useReducer(x,j,V)},Y.useRef=function(x){return xe.current.useRef(x)},Y.useState=function(x){return xe.current.useState(x)},Y.useSyncExternalStore=function(x,j,V){return xe.current.useSyncExternalStore(x,j,V)},Y.useTransition=function(){return xe.current.useTransition()},Y.version="18.3.1",Y}var $d;function Ws(){return $d||($d=1,As.exports=Bu()),As.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function Ru(){if(Wd)return Er;Wd=1;var d=Ws(),u=Symbol.for("react.element"),o=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,c=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function E(I,S,O){var F,P={},H=null,te=null;O!==void 0&&(H=""+O),S.key!==void 0&&(H=""+S.key),S.ref!==void 0&&(te=S.ref);for(F in S)m.call(S,F)&&!b.hasOwnProperty(F)&&(P[F]=S[F]);if(I&&I.defaultProps)for(F in S=I.defaultProps,S)P[F]===void 0&&(P[F]=S[F]);return{$$typeof:u,type:I,key:H,ref:te,props:P,_owner:c.current}}return Er.Fragment=o,Er.jsx=E,Er.jsxs=E,Er}var Gd;function zu(){return Gd||(Gd=1,_s.exports=Ru()),_s.exports}var e=zu(),R=Ws();const Tu=Iu(R),Lu=Pu({__proto__:null,default:Tu},[R]);var Mi={},Ds={exports:{}},We={},Ms={exports:{}},Fs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function _u(){return Vd||(Vd=1,(function(d){function u(B,$){var _=B.length;B.push($);e:for(;0<_;){var x=_-1>>>1,j=B[x];if(0<c(j,$))B[x]=$,B[_]=j,_=x;else break e}}function o(B){return B.length===0?null:B[0]}function m(B){if(B.length===0)return null;var $=B[0],_=B.pop();if(_!==$){B[0]=_;e:for(var x=0,j=B.length,V=j>>>1;x<V;){var Q=2*(x+1)-1,J=B[Q],Z=Q+1,se=B[Z];if(0>c(J,_))Z<j&&0>c(se,J)?(B[x]=se,B[Z]=_,x=Z):(B[x]=J,B[Q]=_,x=Q);else if(Z<j&&0>c(se,_))B[x]=se,B[Z]=_,x=Z;else break e}}return $}function c(B,$){var _=B.sortIndex-$.sortIndex;return _!==0?_:B.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;d.unstable_now=function(){return b.now()}}else{var E=Date,I=E.now();d.unstable_now=function(){return E.now()-I}}var S=[],O=[],F=1,P=null,H=3,te=!1,ne=!1,G=!1,T=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function fe(B){for(var $=o(O);$!==null;){if($.callback===null)m(O);else if($.startTime<=B)m(O),$.sortIndex=$.expirationTime,u(S,$);else break;$=o(O)}}function ve(B){if(G=!1,fe(B),!ne)if(o(S)!==null)ne=!0,Fe(Le);else{var $=o(O);$!==null&&xe(ve,$.startTime-B)}}function Le(B,$){ne=!1,G&&(G=!1,ae(Je),Je=-1),te=!0;var _=H;try{for(fe($),P=o(S);P!==null&&(!(P.expirationTime>$)||B&&!Jn());){var x=P.callback;if(typeof x=="function"){P.callback=null,H=P.priorityLevel;var j=x(P.expirationTime<=$);$=d.unstable_now(),typeof j=="function"?P.callback=j:P===o(S)&&m(S),fe($)}else m(S);P=o(S)}if(P!==null)var V=!0;else{var Q=o(O);Q!==null&&xe(ve,Q.startTime-$),V=!1}return V}finally{P=null,H=_,te=!1}}var _e=!1,Me=null,Je=-1,Bn=5,wn=-1;function Jn(){return!(d.unstable_now()-wn<Bn)}function hn(){if(Me!==null){var B=d.unstable_now();wn=B;var $=!0;try{$=Me(!0,B)}finally{$?Ge():(_e=!1,Me=null)}}else _e=!1}var Ge;if(typeof ce=="function")Ge=function(){ce(hn)};else if(typeof MessageChannel<"u"){var sn=new MessageChannel,fn=sn.port2;sn.port1.onmessage=hn,Ge=function(){fn.postMessage(null)}}else Ge=function(){T(hn,0)};function Fe(B){Me=B,_e||(_e=!0,Ge())}function xe(B,$){Je=T(function(){B(d.unstable_now())},$)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(B){B.callback=null},d.unstable_continueExecution=function(){ne||te||(ne=!0,Fe(Le))},d.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Bn=0<B?Math.floor(1e3/B):5},d.unstable_getCurrentPriorityLevel=function(){return H},d.unstable_getFirstCallbackNode=function(){return o(S)},d.unstable_next=function(B){switch(H){case 1:case 2:case 3:var $=3;break;default:$=H}var _=H;H=$;try{return B()}finally{H=_}},d.unstable_pauseExecution=function(){},d.unstable_requestPaint=function(){},d.unstable_runWithPriority=function(B,$){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var _=H;H=B;try{return $()}finally{H=_}},d.unstable_scheduleCallback=function(B,$,_){var x=d.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?x+_:x):_=x,B){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=_+j,B={id:F++,callback:$,priorityLevel:B,startTime:_,expirationTime:j,sortIndex:-1},_>x?(B.sortIndex=_,u(O,B),o(S)===null&&B===o(O)&&(G?(ae(Je),Je=-1):G=!0,xe(ve,_-x))):(B.sortIndex=j,u(S,B),ne||te||(ne=!0,Fe(Le))),B},d.unstable_shouldYield=Jn,d.unstable_wrapCallback=function(B){var $=H;return function(){var _=H;H=$;try{return B.apply(this,arguments)}finally{H=_}}}})(Fs)),Fs}var Yd;function Au(){return Yd||(Yd=1,Ms.exports=_u()),Ms.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function Du(){if(Qd)return We;Qd=1;var d=Ws(),u=Au();function o(n){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+n,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,c={};function b(n,t){E(n,t),E(n+"Capture",t)}function E(n,t){for(c[n]=t,n=0;n<t.length;n++)m.add(t[n])}var I=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,O=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,F={},P={};function H(n){return S.call(P,n)?!0:S.call(F,n)?!1:O.test(n)?P[n]=!0:(F[n]=!0,!1)}function te(n,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function ne(n,t,r,i){if(t===null||typeof t>"u"||te(n,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function G(n,t,r,i,a,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=n,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){T[n]=new G(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var t=n[0];T[t]=new G(t,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){T[n]=new G(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){T[n]=new G(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){T[n]=new G(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){T[n]=new G(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){T[n]=new G(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){T[n]=new G(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){T[n]=new G(n,5,!1,n.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function ce(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var t=n.replace(ae,ce);T[t]=new G(t,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var t=n.replace(ae,ce);T[t]=new G(t,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var t=n.replace(ae,ce);T[t]=new G(t,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){T[n]=new G(n,1,!1,n.toLowerCase(),null,!1,!1)}),T.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){T[n]=new G(n,1,!1,n.toLowerCase(),null,!0,!0)});function fe(n,t,r,i){var a=T.hasOwnProperty(t)?T[t]:null;(a!==null?a.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ne(t,r,a,i)&&(r=null),i||a===null?H(t)&&(r===null?n.removeAttribute(t):n.setAttribute(t,""+r)):a.mustUseProperty?n[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,i=a.attributeNamespace,r===null?n.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,i?n.setAttributeNS(i,t,r):n.setAttribute(t,r))))}var ve=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Le=Symbol.for("react.element"),_e=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),Je=Symbol.for("react.strict_mode"),Bn=Symbol.for("react.profiler"),wn=Symbol.for("react.provider"),Jn=Symbol.for("react.context"),hn=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),sn=Symbol.for("react.suspense_list"),fn=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),B=Symbol.iterator;function $(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var _=Object.assign,x;function j(n){if(x===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+n}var V=!1;function Q(n,t){if(!n||V)return"";V=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var i=y}Reflect.construct(n,[],t)}else{try{t.call()}catch(y){i=y}n.call(t.prototype)}else{try{throw Error()}catch(y){i=y}n()}}catch(y){if(y&&i&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),s=i.stack.split(`
`),l=a.length-1,p=s.length-1;1<=l&&0<=p&&a[l]!==s[p];)p--;for(;1<=l&&0<=p;l--,p--)if(a[l]!==s[p]){if(l!==1||p!==1)do if(l--,p--,0>p||a[l]!==s[p]){var h=`
`+a[l].replace(" at new "," at ");return n.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",n.displayName)),h}while(1<=l&&0<=p);break}}}finally{V=!1,Error.prepareStackTrace=r}return(n=n?n.displayName||n.name:"")?j(n):""}function J(n){switch(n.tag){case 5:return j(n.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Z(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Me:return"Fragment";case _e:return"Portal";case Bn:return"Profiler";case Je:return"StrictMode";case Ge:return"Suspense";case sn:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Jn:return(n.displayName||"Context")+".Consumer";case wn:return(n._context.displayName||"Context")+".Provider";case hn:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fn:return t=n.displayName||null,t!==null?t:Z(n.type)||"Memo";case Fe:t=n._payload,n=n._init;try{return Z(n(t))}catch{}}return null}function se(n){var t=n.type;switch(n.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=t.render,n=n.displayName||n.name||"",t.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(t);case 8:return t===Je?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pe(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ve(n){var t=pe(n)?"checked":"value",r=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),i=""+n[t];if(!n.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,s=r.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){i=""+l,s.call(this,l)}}),Object.defineProperty(n,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function Pr(n){n._valueTracker||(n._valueTracker=Ve(n))}function Ys(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return n&&(i=pe(n)?n.checked?"true":"false":n.value),n=i,n!==r?(t.setValue(n),!0):!1}function Ir(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function qi(n,t){var r=t.checked;return _({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??n._wrapperState.initialChecked})}function Qs(n,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=re(t.value!=null?t.value:r),n._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ks(n,t){t=t.checked,t!=null&&fe(n,"checked",t,!1)}function Hi(n,t){Ks(n,t);var r=re(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+r):n.value!==""+r&&(n.value=""+r);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}t.hasOwnProperty("value")?$i(n,t.type,r):t.hasOwnProperty("defaultValue")&&$i(n,t.type,re(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(n.defaultChecked=!!t.defaultChecked)}function Xs(n,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+n._wrapperState.initialValue,r||t===n.value||(n.value=t),n.defaultValue=t}r=n.name,r!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,r!==""&&(n.name=r)}function $i(n,t,r){(t!=="number"||Ir(n.ownerDocument)!==n)&&(r==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+r&&(n.defaultValue=""+r))}var Ot=Array.isArray;function mt(n,t,r,i){if(n=n.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<n.length;r++)a=t.hasOwnProperty("$"+n[r].value),n[r].selected!==a&&(n[r].selected=a),a&&i&&(n[r].defaultSelected=!0)}else{for(r=""+re(r),t=null,a=0;a<n.length;a++){if(n[a].value===r){n[a].selected=!0,i&&(n[a].defaultSelected=!0);return}t!==null||n[a].disabled||(t=n[a])}t!==null&&(t.selected=!0)}}function Wi(n,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return _({},t,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Js(n,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(Ot(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}n._wrapperState={initialValue:re(r)}}function Zs(n,t){var r=re(t.value),i=re(t.defaultValue);r!=null&&(r=""+r,r!==n.value&&(n.value=r),t.defaultValue==null&&n.defaultValue!==r&&(n.defaultValue=r)),i!=null&&(n.defaultValue=""+i)}function eo(n){var t=n.textContent;t===n._wrapperState.initialValue&&t!==""&&t!==null&&(n.value=t)}function no(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gi(n,t){return n==null||n==="http://www.w3.org/1999/xhtml"?no(t):n==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Br,to=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,a){MSApp.execUnsafeLocalFunction(function(){return n(t,r,i,a)})}:n})(function(n,t){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=t;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Br.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;t.firstChild;)n.appendChild(t.firstChild)}});function Ut(n,t){if(t){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=t;return}}n.textContent=t}var qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zc=["Webkit","ms","Moz","O"];Object.keys(qt).forEach(function(n){zc.forEach(function(t){t=t+n.charAt(0).toUpperCase()+n.substring(1),qt[t]=qt[n]})});function ro(n,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||qt.hasOwnProperty(n)&&qt[n]?(""+t).trim():t+"px"}function io(n,t){n=n.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,a=ro(r,t[r],i);r==="float"&&(r="cssFloat"),i?n.setProperty(r,a):n[r]=a}}var Tc=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vi(n,t){if(t){if(Tc[n]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,n));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function Yi(n,t){if(n.indexOf("-")===-1)return typeof t.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qi=null;function Ki(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Xi=null,ht=null,ft=null;function ao(n){if(n=cr(n)){if(typeof Xi!="function")throw Error(o(280));var t=n.stateNode;t&&(t=Zr(t),Xi(n.stateNode,n.type,t))}}function so(n){ht?ft?ft.push(n):ft=[n]:ht=n}function oo(){if(ht){var n=ht,t=ft;if(ft=ht=null,ao(n),t)for(n=0;n<t.length;n++)ao(t[n])}}function lo(n,t){return n(t)}function co(){}var Ji=!1;function po(n,t,r){if(Ji)return n(t,r);Ji=!0;try{return lo(n,t,r)}finally{Ji=!1,(ht!==null||ft!==null)&&(co(),oo())}}function Ht(n,t){var r=n.stateNode;if(r===null)return null;var i=Zr(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var Zi=!1;if(I)try{var $t={};Object.defineProperty($t,"passive",{get:function(){Zi=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch{Zi=!1}function Lc(n,t,r,i,a,s,l,p,h){var y=Array.prototype.slice.call(arguments,3);try{t.apply(r,y)}catch(N){this.onError(N)}}var Wt=!1,Rr=null,zr=!1,ea=null,_c={onError:function(n){Wt=!0,Rr=n}};function Ac(n,t,r,i,a,s,l,p,h){Wt=!1,Rr=null,Lc.apply(_c,arguments)}function Dc(n,t,r,i,a,s,l,p,h){if(Ac.apply(this,arguments),Wt){if(Wt){var y=Rr;Wt=!1,Rr=null}else throw Error(o(198));zr||(zr=!0,ea=y)}}function Zn(n){var t=n,r=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,(t.flags&4098)!==0&&(r=t.return),n=t.return;while(n)}return t.tag===3?r:null}function uo(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function mo(n){if(Zn(n)!==n)throw Error(o(188))}function Mc(n){var t=n.alternate;if(!t){if(t=Zn(n),t===null)throw Error(o(188));return t!==n?null:n}for(var r=n,i=t;;){var a=r.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){r=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===r)return mo(a),n;if(s===i)return mo(a),t;s=s.sibling}throw Error(o(188))}if(r.return!==i.return)r=a,i=s;else{for(var l=!1,p=a.child;p;){if(p===r){l=!0,r=a,i=s;break}if(p===i){l=!0,i=a,r=s;break}p=p.sibling}if(!l){for(p=s.child;p;){if(p===r){l=!0,r=s,i=a;break}if(p===i){l=!0,i=s,r=a;break}p=p.sibling}if(!l)throw Error(o(189))}}if(r.alternate!==i)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?n:t}function ho(n){return n=Mc(n),n!==null?fo(n):null}function fo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var t=fo(n);if(t!==null)return t;n=n.sibling}return null}var xo=u.unstable_scheduleCallback,go=u.unstable_cancelCallback,Fc=u.unstable_shouldYield,Oc=u.unstable_requestPaint,ye=u.unstable_now,Uc=u.unstable_getCurrentPriorityLevel,na=u.unstable_ImmediatePriority,vo=u.unstable_UserBlockingPriority,Tr=u.unstable_NormalPriority,qc=u.unstable_LowPriority,yo=u.unstable_IdlePriority,Lr=null,xn=null;function Hc(n){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Lr,n,void 0,(n.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:Gc,$c=Math.log,Wc=Math.LN2;function Gc(n){return n>>>=0,n===0?32:31-($c(n)/Wc|0)|0}var _r=64,Ar=4194304;function Gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Dr(n,t){var r=n.pendingLanes;if(r===0)return 0;var i=0,a=n.suspendedLanes,s=n.pingedLanes,l=r&268435455;if(l!==0){var p=l&~a;p!==0?i=Gt(p):(s&=l,s!==0&&(i=Gt(s)))}else l=r&~a,l!==0?i=Gt(l):s!==0&&(i=Gt(s));if(i===0)return 0;if(t!==0&&t!==i&&(t&a)===0&&(a=i&-i,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=n.entangledLanes,t!==0)for(n=n.entanglements,t&=i;0<t;)r=31-on(t),a=1<<r,i|=n[r],t&=~a;return i}function Vc(n,t){switch(n){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yc(n,t){for(var r=n.suspendedLanes,i=n.pingedLanes,a=n.expirationTimes,s=n.pendingLanes;0<s;){var l=31-on(s),p=1<<l,h=a[l];h===-1?((p&r)===0||(p&i)!==0)&&(a[l]=Vc(p,t)):h<=t&&(n.expiredLanes|=p),s&=~p}}function ta(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bo(){var n=_r;return _r<<=1,(_r&4194240)===0&&(_r=64),n}function ra(n){for(var t=[],r=0;31>r;r++)t.push(n);return t}function Vt(n,t,r){n.pendingLanes|=t,t!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,t=31-on(t),n[t]=r}function Qc(n,t){var r=n.pendingLanes&~t;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=t,n.mutableReadLanes&=t,n.entangledLanes&=t,t=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<r;){var a=31-on(r),s=1<<a;t[a]=0,i[a]=-1,n[a]=-1,r&=~s}}function ia(n,t){var r=n.entangledLanes|=t;for(n=n.entanglements;r;){var i=31-on(r),a=1<<i;a&t|n[i]&t&&(n[i]|=t),r&=~a}}var ie=0;function wo(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var jo,aa,No,ko,Eo,sa=!1,Mr=[],Rn=null,zn=null,Tn=null,Yt=new Map,Qt=new Map,Ln=[],Kc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function So(n,t){switch(n){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Yt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qt.delete(t.pointerId)}}function Kt(n,t,r,i,a,s){return n===null||n.nativeEvent!==s?(n={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=cr(t),t!==null&&aa(t)),n):(n.eventSystemFlags|=i,t=n.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),n)}function Xc(n,t,r,i,a){switch(t){case"focusin":return Rn=Kt(Rn,n,t,r,i,a),!0;case"dragenter":return zn=Kt(zn,n,t,r,i,a),!0;case"mouseover":return Tn=Kt(Tn,n,t,r,i,a),!0;case"pointerover":var s=a.pointerId;return Yt.set(s,Kt(Yt.get(s)||null,n,t,r,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Qt.set(s,Kt(Qt.get(s)||null,n,t,r,i,a)),!0}return!1}function Co(n){var t=et(n.target);if(t!==null){var r=Zn(t);if(r!==null){if(t=r.tag,t===13){if(t=uo(r),t!==null){n.blockedOn=t,Eo(n.priority,function(){No(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fr(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var r=la(n.domEventName,n.eventSystemFlags,t[0],n.nativeEvent);if(r===null){r=n.nativeEvent;var i=new r.constructor(r.type,r);Qi=i,r.target.dispatchEvent(i),Qi=null}else return t=cr(r),t!==null&&aa(t),n.blockedOn=r,!1;t.shift()}return!0}function Po(n,t,r){Fr(n)&&r.delete(t)}function Jc(){sa=!1,Rn!==null&&Fr(Rn)&&(Rn=null),zn!==null&&Fr(zn)&&(zn=null),Tn!==null&&Fr(Tn)&&(Tn=null),Yt.forEach(Po),Qt.forEach(Po)}function Xt(n,t){n.blockedOn===t&&(n.blockedOn=null,sa||(sa=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Jc)))}function Jt(n){function t(a){return Xt(a,n)}if(0<Mr.length){Xt(Mr[0],n);for(var r=1;r<Mr.length;r++){var i=Mr[r];i.blockedOn===n&&(i.blockedOn=null)}}for(Rn!==null&&Xt(Rn,n),zn!==null&&Xt(zn,n),Tn!==null&&Xt(Tn,n),Yt.forEach(t),Qt.forEach(t),r=0;r<Ln.length;r++)i=Ln[r],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ln.length&&(r=Ln[0],r.blockedOn===null);)Co(r),r.blockedOn===null&&Ln.shift()}var xt=ve.ReactCurrentBatchConfig,Or=!0;function Zc(n,t,r,i){var a=ie,s=xt.transition;xt.transition=null;try{ie=1,oa(n,t,r,i)}finally{ie=a,xt.transition=s}}function ep(n,t,r,i){var a=ie,s=xt.transition;xt.transition=null;try{ie=4,oa(n,t,r,i)}finally{ie=a,xt.transition=s}}function oa(n,t,r,i){if(Or){var a=la(n,t,r,i);if(a===null)Ea(n,t,i,Ur,r),So(n,i);else if(Xc(a,n,t,r,i))i.stopPropagation();else if(So(n,i),t&4&&-1<Kc.indexOf(n)){for(;a!==null;){var s=cr(a);if(s!==null&&jo(s),s=la(n,t,r,i),s===null&&Ea(n,t,i,Ur,r),s===a)break;a=s}a!==null&&i.stopPropagation()}else Ea(n,t,i,null,r)}}var Ur=null;function la(n,t,r,i){if(Ur=null,n=Ki(i),n=et(n),n!==null)if(t=Zn(n),t===null)n=null;else if(r=t.tag,r===13){if(n=uo(t),n!==null)return n;n=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null);return Ur=n,null}function Io(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uc()){case na:return 1;case vo:return 4;case Tr:case qc:return 16;case yo:return 536870912;default:return 16}default:return 16}}var _n=null,da=null,qr=null;function Bo(){if(qr)return qr;var n,t=da,r=t.length,i,a="value"in _n?_n.value:_n.textContent,s=a.length;for(n=0;n<r&&t[n]===a[n];n++);var l=r-n;for(i=1;i<=l&&t[r-i]===a[s-i];i++);return qr=a.slice(n,1<i?1-i:void 0)}function Hr(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function $r(){return!0}function Ro(){return!1}function Ye(n){function t(r,i,a,s,l){this._reactName=r,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var p in n)n.hasOwnProperty(p)&&(r=n[p],this[p]=r?r(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$r:Ro,this.isPropagationStopped=Ro,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=Ye(gt),Zt=_({},gt,{view:0,detail:0}),np=Ye(Zt),pa,ua,er,Wr=_({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ha,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==er&&(er&&n.type==="mousemove"?(pa=n.screenX-er.screenX,ua=n.screenY-er.screenY):ua=pa=0,er=n),pa)},movementY:function(n){return"movementY"in n?n.movementY:ua}}),zo=Ye(Wr),tp=_({},Wr,{dataTransfer:0}),rp=Ye(tp),ip=_({},Zt,{relatedTarget:0}),ma=Ye(ip),ap=_({},gt,{animationName:0,elapsedTime:0,pseudoElement:0}),sp=Ye(ap),op=_({},gt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),lp=Ye(op),dp=_({},gt,{data:0}),To=Ye(dp),cp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mp(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=up[n])?!!t[n]:!1}function ha(){return mp}var hp=_({},Zt,{key:function(n){if(n.key){var t=cp[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=Hr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?pp[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ha,charCode:function(n){return n.type==="keypress"?Hr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Hr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fp=Ye(hp),xp=_({},Wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lo=Ye(xp),gp=_({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ha}),vp=Ye(gp),yp=_({},gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),bp=Ye(yp),wp=_({},Wr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),jp=Ye(wp),Np=[9,13,27,32],fa=I&&"CompositionEvent"in window,nr=null;I&&"documentMode"in document&&(nr=document.documentMode);var kp=I&&"TextEvent"in window&&!nr,_o=I&&(!fa||nr&&8<nr&&11>=nr),Ao=" ",Do=!1;function Mo(n,t){switch(n){case"keyup":return Np.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fo(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var vt=!1;function Ep(n,t){switch(n){case"compositionend":return Fo(t);case"keypress":return t.which!==32?null:(Do=!0,Ao);case"textInput":return n=t.data,n===Ao&&Do?null:n;default:return null}}function Sp(n,t){if(vt)return n==="compositionend"||!fa&&Mo(n,t)?(n=Bo(),qr=da=_n=null,vt=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _o&&t.locale!=="ko"?null:t.data;default:return null}}var Cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oo(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!Cp[n.type]:t==="textarea"}function Uo(n,t,r,i){so(i),t=Kr(t,"onChange"),0<t.length&&(r=new ca("onChange","change",null,r,i),n.push({event:r,listeners:t}))}var tr=null,rr=null;function Pp(n){al(n,0)}function Gr(n){var t=Nt(n);if(Ys(t))return n}function Ip(n,t){if(n==="change")return t}var qo=!1;if(I){var xa;if(I){var ga="oninput"in document;if(!ga){var Ho=document.createElement("div");Ho.setAttribute("oninput","return;"),ga=typeof Ho.oninput=="function"}xa=ga}else xa=!1;qo=xa&&(!document.documentMode||9<document.documentMode)}function $o(){tr&&(tr.detachEvent("onpropertychange",Wo),rr=tr=null)}function Wo(n){if(n.propertyName==="value"&&Gr(rr)){var t=[];Uo(t,rr,n,Ki(n)),po(Pp,t)}}function Bp(n,t,r){n==="focusin"?($o(),tr=t,rr=r,tr.attachEvent("onpropertychange",Wo)):n==="focusout"&&$o()}function Rp(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Gr(rr)}function zp(n,t){if(n==="click")return Gr(t)}function Tp(n,t){if(n==="input"||n==="change")return Gr(t)}function Lp(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var ln=typeof Object.is=="function"?Object.is:Lp;function ir(n,t){if(ln(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var r=Object.keys(n),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var a=r[i];if(!S.call(t,a)||!ln(n[a],t[a]))return!1}return!0}function Go(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vo(n,t){var r=Go(n);n=0;for(var i;r;){if(r.nodeType===3){if(i=n+r.textContent.length,n<=t&&i>=t)return{node:r,offset:t-n};n=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Go(r)}}function Yo(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?Yo(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function Qo(){for(var n=window,t=Ir();t instanceof n.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)n=t.contentWindow;else break;t=Ir(n.document)}return t}function va(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}function _p(n){var t=Qo(),r=n.focusedElem,i=n.selectionRange;if(t!==r&&r&&r.ownerDocument&&Yo(r.ownerDocument.documentElement,r)){if(i!==null&&va(r)){if(t=i.start,n=i.end,n===void 0&&(n=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(n,r.value.length);else if(n=(t=r.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var a=r.textContent.length,s=Math.min(i.start,a);i=i.end===void 0?s:Math.min(i.end,a),!n.extend&&s>i&&(a=i,i=s,s=a),a=Vo(r,s);var l=Vo(r,i);a&&l&&(n.rangeCount!==1||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==l.node||n.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),n.removeAllRanges(),s>i?(n.addRange(t),n.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),n.addRange(t)))}}for(t=[],n=r;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)n=t[r],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ap=I&&"documentMode"in document&&11>=document.documentMode,yt=null,ya=null,ar=null,ba=!1;function Ko(n,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ba||yt==null||yt!==Ir(i)||(i=yt,"selectionStart"in i&&va(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ar&&ir(ar,i)||(ar=i,i=Kr(ya,"onSelect"),0<i.length&&(t=new ca("onSelect","select",null,t,r),n.push({event:t,listeners:i}),t.target=yt)))}function Vr(n,t){var r={};return r[n.toLowerCase()]=t.toLowerCase(),r["Webkit"+n]="webkit"+t,r["Moz"+n]="moz"+t,r}var bt={animationend:Vr("Animation","AnimationEnd"),animationiteration:Vr("Animation","AnimationIteration"),animationstart:Vr("Animation","AnimationStart"),transitionend:Vr("Transition","TransitionEnd")},wa={},Xo={};I&&(Xo=document.createElement("div").style,"AnimationEvent"in window||(delete bt.animationend.animation,delete bt.animationiteration.animation,delete bt.animationstart.animation),"TransitionEvent"in window||delete bt.transitionend.transition);function Yr(n){if(wa[n])return wa[n];if(!bt[n])return n;var t=bt[n],r;for(r in t)if(t.hasOwnProperty(r)&&r in Xo)return wa[n]=t[r];return n}var Jo=Yr("animationend"),Zo=Yr("animationiteration"),el=Yr("animationstart"),nl=Yr("transitionend"),tl=new Map,rl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(n,t){tl.set(n,t),b(t,[n])}for(var ja=0;ja<rl.length;ja++){var Na=rl[ja],Dp=Na.toLowerCase(),Mp=Na[0].toUpperCase()+Na.slice(1);An(Dp,"on"+Mp)}An(Jo,"onAnimationEnd"),An(Zo,"onAnimationIteration"),An(el,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(nl,"onTransitionEnd"),E("onMouseEnter",["mouseout","mouseover"]),E("onMouseLeave",["mouseout","mouseover"]),E("onPointerEnter",["pointerout","pointerover"]),E("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fp=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function il(n,t,r){var i=n.type||"unknown-event";n.currentTarget=r,Dc(i,t,void 0,n),n.currentTarget=null}function al(n,t){t=(t&4)!==0;for(var r=0;r<n.length;r++){var i=n[r],a=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var l=i.length-1;0<=l;l--){var p=i[l],h=p.instance,y=p.currentTarget;if(p=p.listener,h!==s&&a.isPropagationStopped())break e;il(a,p,y),s=h}else for(l=0;l<i.length;l++){if(p=i[l],h=p.instance,y=p.currentTarget,p=p.listener,h!==s&&a.isPropagationStopped())break e;il(a,p,y),s=h}}}if(zr)throw n=ea,zr=!1,ea=null,n}function le(n,t){var r=t[Ra];r===void 0&&(r=t[Ra]=new Set);var i=n+"__bubble";r.has(i)||(sl(t,n,2,!1),r.add(i))}function ka(n,t,r){var i=0;t&&(i|=4),sl(r,n,i,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function or(n){if(!n[Qr]){n[Qr]=!0,m.forEach(function(r){r!=="selectionchange"&&(Fp.has(r)||ka(r,!1,n),ka(r,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,ka("selectionchange",!1,t))}}function sl(n,t,r,i){switch(Io(t)){case 1:var a=Zc;break;case 4:a=ep;break;default:a=oa}r=a.bind(null,t,r,n),a=void 0,!Zi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?n.addEventListener(t,r,{capture:!0,passive:a}):n.addEventListener(t,r,!0):a!==void 0?n.addEventListener(t,r,{passive:a}):n.addEventListener(t,r,!1)}function Ea(n,t,r,i,a){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var p=i.stateNode.containerInfo;if(p===a||p.nodeType===8&&p.parentNode===a)break;if(l===4)for(l=i.return;l!==null;){var h=l.tag;if((h===3||h===4)&&(h=l.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;l=l.return}for(;p!==null;){if(l=et(p),l===null)return;if(h=l.tag,h===5||h===6){i=s=l;continue e}p=p.parentNode}}i=i.return}po(function(){var y=s,N=Ki(r),k=[];e:{var w=tl.get(n);if(w!==void 0){var z=ca,A=n;switch(n){case"keypress":if(Hr(r)===0)break e;case"keydown":case"keyup":z=fp;break;case"focusin":A="focus",z=ma;break;case"focusout":A="blur",z=ma;break;case"beforeblur":case"afterblur":z=ma;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=vp;break;case Jo:case Zo:case el:z=sp;break;case nl:z=bp;break;case"scroll":z=np;break;case"wheel":z=jp;break;case"copy":case"cut":case"paste":z=lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Lo}var D=(t&4)!==0,be=!D&&n==="scroll",g=D?w!==null?w+"Capture":null:w;D=[];for(var f=y,v;f!==null;){v=f;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=Ht(f,g),C!=null&&D.push(lr(f,C,v)))),be)break;f=f.return}0<D.length&&(w=new z(w,A,null,r,N),k.push({event:w,listeners:D}))}}if((t&7)===0){e:{if(w=n==="mouseover"||n==="pointerover",z=n==="mouseout"||n==="pointerout",w&&r!==Qi&&(A=r.relatedTarget||r.fromElement)&&(et(A)||A[jn]))break e;if((z||w)&&(w=N.window===N?N:(w=N.ownerDocument)?w.defaultView||w.parentWindow:window,z?(A=r.relatedTarget||r.toElement,z=y,A=A?et(A):null,A!==null&&(be=Zn(A),A!==be||A.tag!==5&&A.tag!==6)&&(A=null)):(z=null,A=y),z!==A)){if(D=zo,C="onMouseLeave",g="onMouseEnter",f="mouse",(n==="pointerout"||n==="pointerover")&&(D=Lo,C="onPointerLeave",g="onPointerEnter",f="pointer"),be=z==null?w:Nt(z),v=A==null?w:Nt(A),w=new D(C,f+"leave",z,r,N),w.target=be,w.relatedTarget=v,C=null,et(N)===y&&(D=new D(g,f+"enter",A,r,N),D.target=v,D.relatedTarget=be,C=D),be=C,z&&A)n:{for(D=z,g=A,f=0,v=D;v;v=wt(v))f++;for(v=0,C=g;C;C=wt(C))v++;for(;0<f-v;)D=wt(D),f--;for(;0<v-f;)g=wt(g),v--;for(;f--;){if(D===g||g!==null&&D===g.alternate)break n;D=wt(D),g=wt(g)}D=null}else D=null;z!==null&&ol(k,w,z,D,!1),A!==null&&be!==null&&ol(k,be,A,D,!0)}}e:{if(w=y?Nt(y):window,z=w.nodeName&&w.nodeName.toLowerCase(),z==="select"||z==="input"&&w.type==="file")var M=Ip;else if(Oo(w))if(qo)M=Tp;else{M=Rp;var U=Bp}else(z=w.nodeName)&&z.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(M=zp);if(M&&(M=M(n,y))){Uo(k,M,r,N);break e}U&&U(n,w,y),n==="focusout"&&(U=w._wrapperState)&&U.controlled&&w.type==="number"&&$i(w,"number",w.value)}switch(U=y?Nt(y):window,n){case"focusin":(Oo(U)||U.contentEditable==="true")&&(yt=U,ya=y,ar=null);break;case"focusout":ar=ya=yt=null;break;case"mousedown":ba=!0;break;case"contextmenu":case"mouseup":case"dragend":ba=!1,Ko(k,r,N);break;case"selectionchange":if(Ap)break;case"keydown":case"keyup":Ko(k,r,N)}var q;if(fa)e:{switch(n){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else vt?Mo(n,r)&&(W="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(W="onCompositionStart");W&&(_o&&r.locale!=="ko"&&(vt||W!=="onCompositionStart"?W==="onCompositionEnd"&&vt&&(q=Bo()):(_n=N,da="value"in _n?_n.value:_n.textContent,vt=!0)),U=Kr(y,W),0<U.length&&(W=new To(W,n,null,r,N),k.push({event:W,listeners:U}),q?W.data=q:(q=Fo(r),q!==null&&(W.data=q)))),(q=kp?Ep(n,r):Sp(n,r))&&(y=Kr(y,"onBeforeInput"),0<y.length&&(N=new To("onBeforeInput","beforeinput",null,r,N),k.push({event:N,listeners:y}),N.data=q))}al(k,t)})}function lr(n,t,r){return{instance:n,listener:t,currentTarget:r}}function Kr(n,t){for(var r=t+"Capture",i=[];n!==null;){var a=n,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Ht(n,r),s!=null&&i.unshift(lr(n,s,a)),s=Ht(n,t),s!=null&&i.push(lr(n,s,a))),n=n.return}return i}function wt(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ol(n,t,r,i,a){for(var s=t._reactName,l=[];r!==null&&r!==i;){var p=r,h=p.alternate,y=p.stateNode;if(h!==null&&h===i)break;p.tag===5&&y!==null&&(p=y,a?(h=Ht(r,s),h!=null&&l.unshift(lr(r,h,p))):a||(h=Ht(r,s),h!=null&&l.push(lr(r,h,p)))),r=r.return}l.length!==0&&n.push({event:t,listeners:l})}var Op=/\r\n?/g,Up=/\u0000|\uFFFD/g;function ll(n){return(typeof n=="string"?n:""+n).replace(Op,`
`).replace(Up,"")}function Xr(n,t,r){if(t=ll(t),ll(n)!==t&&r)throw Error(o(425))}function Jr(){}var Sa=null,Ca=null;function Pa(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ia=typeof setTimeout=="function"?setTimeout:void 0,qp=typeof clearTimeout=="function"?clearTimeout:void 0,dl=typeof Promise=="function"?Promise:void 0,Hp=typeof queueMicrotask=="function"?queueMicrotask:typeof dl<"u"?function(n){return dl.resolve(null).then(n).catch($p)}:Ia;function $p(n){setTimeout(function(){throw n})}function Ba(n,t){var r=t,i=0;do{var a=r.nextSibling;if(n.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(i===0){n.removeChild(a),Jt(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=a}while(r);Jt(t)}function Dn(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return n}function cl(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return n;t--}else r==="/$"&&t++}n=n.previousSibling}return null}var jt=Math.random().toString(36).slice(2),gn="__reactFiber$"+jt,dr="__reactProps$"+jt,jn="__reactContainer$"+jt,Ra="__reactEvents$"+jt,Wp="__reactListeners$"+jt,Gp="__reactHandles$"+jt;function et(n){var t=n[gn];if(t)return t;for(var r=n.parentNode;r;){if(t=r[jn]||r[gn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(n=cl(n);n!==null;){if(r=n[gn])return r;n=cl(n)}return t}n=r,r=n.parentNode}return null}function cr(n){return n=n[gn]||n[jn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Nt(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(o(33))}function Zr(n){return n[dr]||null}var za=[],kt=-1;function Mn(n){return{current:n}}function de(n){0>kt||(n.current=za[kt],za[kt]=null,kt--)}function oe(n,t){kt++,za[kt]=n.current,n.current=t}var Fn={},Be=Mn(Fn),Oe=Mn(!1),nt=Fn;function Et(n,t){var r=n.type.contextTypes;if(!r)return Fn;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in r)a[s]=t[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=t,n.__reactInternalMemoizedMaskedChildContext=a),a}function Ue(n){return n=n.childContextTypes,n!=null}function ei(){de(Oe),de(Be)}function pl(n,t,r){if(Be.current!==Fn)throw Error(o(168));oe(Be,t),oe(Oe,r)}function ul(n,t,r){var i=n.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var a in i)if(!(a in t))throw Error(o(108,se(n)||"Unknown",a));return _({},r,i)}function ni(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fn,nt=Be.current,oe(Be,n),oe(Oe,Oe.current),!0}function ml(n,t,r){var i=n.stateNode;if(!i)throw Error(o(169));r?(n=ul(n,t,nt),i.__reactInternalMemoizedMergedChildContext=n,de(Oe),de(Be),oe(Be,n)):de(Oe),oe(Oe,r)}var Nn=null,ti=!1,Ta=!1;function hl(n){Nn===null?Nn=[n]:Nn.push(n)}function Vp(n){ti=!0,hl(n)}function On(){if(!Ta&&Nn!==null){Ta=!0;var n=0,t=ie;try{var r=Nn;for(ie=1;n<r.length;n++){var i=r[n];do i=i(!0);while(i!==null)}Nn=null,ti=!1}catch(a){throw Nn!==null&&(Nn=Nn.slice(n+1)),xo(na,On),a}finally{ie=t,Ta=!1}}return null}var St=[],Ct=0,ri=null,ii=0,Ze=[],en=0,tt=null,kn=1,En="";function rt(n,t){St[Ct++]=ii,St[Ct++]=ri,ri=n,ii=t}function fl(n,t,r){Ze[en++]=kn,Ze[en++]=En,Ze[en++]=tt,tt=n;var i=kn;n=En;var a=32-on(i)-1;i&=~(1<<a),r+=1;var s=32-on(t)+a;if(30<s){var l=a-a%5;s=(i&(1<<l)-1).toString(32),i>>=l,a-=l,kn=1<<32-on(t)+a|r<<a|i,En=s+n}else kn=1<<s|r<<a|i,En=n}function La(n){n.return!==null&&(rt(n,1),fl(n,1,0))}function _a(n){for(;n===ri;)ri=St[--Ct],St[Ct]=null,ii=St[--Ct],St[Ct]=null;for(;n===tt;)tt=Ze[--en],Ze[en]=null,En=Ze[--en],Ze[en]=null,kn=Ze[--en],Ze[en]=null}var Qe=null,Ke=null,ue=!1,dn=null;function xl(n,t){var r=an(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=n,t=n.deletions,t===null?(n.deletions=[r],n.flags|=16):t.push(r)}function gl(n,t){switch(n.tag){case 5:var r=n.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(n.stateNode=t,Qe=n,Ke=Dn(t.firstChild),!0):!1;case 6:return t=n.pendingProps===""||t.nodeType!==3?null:t,t!==null?(n.stateNode=t,Qe=n,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=tt!==null?{id:kn,overflow:En}:null,n.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=an(18,null,null,0),r.stateNode=t,r.return=n,n.child=r,Qe=n,Ke=null,!0):!1;default:return!1}}function Aa(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Da(n){if(ue){var t=Ke;if(t){var r=t;if(!gl(n,t)){if(Aa(n))throw Error(o(418));t=Dn(r.nextSibling);var i=Qe;t&&gl(n,t)?xl(i,r):(n.flags=n.flags&-4097|2,ue=!1,Qe=n)}}else{if(Aa(n))throw Error(o(418));n.flags=n.flags&-4097|2,ue=!1,Qe=n}}}function vl(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qe=n}function ai(n){if(n!==Qe)return!1;if(!ue)return vl(n),ue=!0,!1;var t;if((t=n.tag!==3)&&!(t=n.tag!==5)&&(t=n.type,t=t!=="head"&&t!=="body"&&!Pa(n.type,n.memoizedProps)),t&&(t=Ke)){if(Aa(n))throw yl(),Error(o(418));for(;t;)xl(n,t),t=Dn(t.nextSibling)}if(vl(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));e:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8){var r=n.data;if(r==="/$"){if(t===0){Ke=Dn(n.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}n=n.nextSibling}Ke=null}}else Ke=Qe?Dn(n.stateNode.nextSibling):null;return!0}function yl(){for(var n=Ke;n;)n=Dn(n.nextSibling)}function Pt(){Ke=Qe=null,ue=!1}function Ma(n){dn===null?dn=[n]:dn.push(n)}var Yp=ve.ReactCurrentBatchConfig;function pr(n,t,r){if(n=r.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var i=r.stateNode}if(!i)throw Error(o(147,n));var a=i,s=""+n;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var p=a.refs;l===null?delete p[s]:p[s]=l},t._stringRef=s,t)}if(typeof n!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,n))}return n}function si(n,t){throw n=Object.prototype.toString.call(t),Error(o(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n))}function bl(n){var t=n._init;return t(n._payload)}function wl(n){function t(g,f){if(n){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function r(g,f){if(!n)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function i(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function a(g,f){return g=Yn(g,f),g.index=0,g.sibling=null,g}function s(g,f,v){return g.index=v,n?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=2,f)):(g.flags|=1048576,f)}function l(g){return n&&g.alternate===null&&(g.flags|=2),g}function p(g,f,v,C){return f===null||f.tag!==6?(f=Is(v,g.mode,C),f.return=g,f):(f=a(f,v),f.return=g,f)}function h(g,f,v,C){var M=v.type;return M===Me?N(g,f,v.props.children,C,v.key):f!==null&&(f.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fe&&bl(M)===f.type)?(C=a(f,v.props),C.ref=pr(g,f,v),C.return=g,C):(C=Bi(v.type,v.key,v.props,null,g.mode,C),C.ref=pr(g,f,v),C.return=g,C)}function y(g,f,v,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Bs(v,g.mode,C),f.return=g,f):(f=a(f,v.children||[]),f.return=g,f)}function N(g,f,v,C,M){return f===null||f.tag!==7?(f=pt(v,g.mode,C,M),f.return=g,f):(f=a(f,v),f.return=g,f)}function k(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Is(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Le:return v=Bi(f.type,f.key,f.props,null,g.mode,v),v.ref=pr(g,null,f),v.return=g,v;case _e:return f=Bs(f,g.mode,v),f.return=g,f;case Fe:var C=f._init;return k(g,C(f._payload),v)}if(Ot(f)||$(f))return f=pt(f,g.mode,v,null),f.return=g,f;si(g,f)}return null}function w(g,f,v,C){var M=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:p(g,f,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Le:return v.key===M?h(g,f,v,C):null;case _e:return v.key===M?y(g,f,v,C):null;case Fe:return M=v._init,w(g,f,M(v._payload),C)}if(Ot(v)||$(v))return M!==null?null:N(g,f,v,C,null);si(g,v)}return null}function z(g,f,v,C,M){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,p(f,g,""+C,M);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Le:return g=g.get(C.key===null?v:C.key)||null,h(f,g,C,M);case _e:return g=g.get(C.key===null?v:C.key)||null,y(f,g,C,M);case Fe:var U=C._init;return z(g,f,v,U(C._payload),M)}if(Ot(C)||$(C))return g=g.get(v)||null,N(f,g,C,M,null);si(f,C)}return null}function A(g,f,v,C){for(var M=null,U=null,q=f,W=f=0,Ce=null;q!==null&&W<v.length;W++){q.index>W?(Ce=q,q=null):Ce=q.sibling;var ee=w(g,q,v[W],C);if(ee===null){q===null&&(q=Ce);break}n&&q&&ee.alternate===null&&t(g,q),f=s(ee,f,W),U===null?M=ee:U.sibling=ee,U=ee,q=Ce}if(W===v.length)return r(g,q),ue&&rt(g,W),M;if(q===null){for(;W<v.length;W++)q=k(g,v[W],C),q!==null&&(f=s(q,f,W),U===null?M=q:U.sibling=q,U=q);return ue&&rt(g,W),M}for(q=i(g,q);W<v.length;W++)Ce=z(q,g,W,v[W],C),Ce!==null&&(n&&Ce.alternate!==null&&q.delete(Ce.key===null?W:Ce.key),f=s(Ce,f,W),U===null?M=Ce:U.sibling=Ce,U=Ce);return n&&q.forEach(function(Qn){return t(g,Qn)}),ue&&rt(g,W),M}function D(g,f,v,C){var M=$(v);if(typeof M!="function")throw Error(o(150));if(v=M.call(v),v==null)throw Error(o(151));for(var U=M=null,q=f,W=f=0,Ce=null,ee=v.next();q!==null&&!ee.done;W++,ee=v.next()){q.index>W?(Ce=q,q=null):Ce=q.sibling;var Qn=w(g,q,ee.value,C);if(Qn===null){q===null&&(q=Ce);break}n&&q&&Qn.alternate===null&&t(g,q),f=s(Qn,f,W),U===null?M=Qn:U.sibling=Qn,U=Qn,q=Ce}if(ee.done)return r(g,q),ue&&rt(g,W),M;if(q===null){for(;!ee.done;W++,ee=v.next())ee=k(g,ee.value,C),ee!==null&&(f=s(ee,f,W),U===null?M=ee:U.sibling=ee,U=ee);return ue&&rt(g,W),M}for(q=i(g,q);!ee.done;W++,ee=v.next())ee=z(q,g,W,ee.value,C),ee!==null&&(n&&ee.alternate!==null&&q.delete(ee.key===null?W:ee.key),f=s(ee,f,W),U===null?M=ee:U.sibling=ee,U=ee);return n&&q.forEach(function(Cu){return t(g,Cu)}),ue&&rt(g,W),M}function be(g,f,v,C){if(typeof v=="object"&&v!==null&&v.type===Me&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Le:e:{for(var M=v.key,U=f;U!==null;){if(U.key===M){if(M=v.type,M===Me){if(U.tag===7){r(g,U.sibling),f=a(U,v.props.children),f.return=g,g=f;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fe&&bl(M)===U.type){r(g,U.sibling),f=a(U,v.props),f.ref=pr(g,U,v),f.return=g,g=f;break e}r(g,U);break}else t(g,U);U=U.sibling}v.type===Me?(f=pt(v.props.children,g.mode,C,v.key),f.return=g,g=f):(C=Bi(v.type,v.key,v.props,null,g.mode,C),C.ref=pr(g,f,v),C.return=g,g=C)}return l(g);case _e:e:{for(U=v.key;f!==null;){if(f.key===U)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){r(g,f.sibling),f=a(f,v.children||[]),f.return=g,g=f;break e}else{r(g,f);break}else t(g,f);f=f.sibling}f=Bs(v,g.mode,C),f.return=g,g=f}return l(g);case Fe:return U=v._init,be(g,f,U(v._payload),C)}if(Ot(v))return A(g,f,v,C);if($(v))return D(g,f,v,C);si(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(r(g,f.sibling),f=a(f,v),f.return=g,g=f):(r(g,f),f=Is(v,g.mode,C),f.return=g,g=f),l(g)):r(g,f)}return be}var It=wl(!0),jl=wl(!1),oi=Mn(null),li=null,Bt=null,Fa=null;function Oa(){Fa=Bt=li=null}function Ua(n){var t=oi.current;de(oi),n._currentValue=t}function qa(n,t,r){for(;n!==null;){var i=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),n===r)break;n=n.return}}function Rt(n,t){li=n,Fa=Bt=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&t)!==0&&(qe=!0),n.firstContext=null)}function nn(n){var t=n._currentValue;if(Fa!==n)if(n={context:n,memoizedValue:t,next:null},Bt===null){if(li===null)throw Error(o(308));Bt=n,li.dependencies={lanes:0,firstContext:n}}else Bt=Bt.next=n;return t}var it=null;function Ha(n){it===null?it=[n]:it.push(n)}function Nl(n,t,r,i){var a=t.interleaved;return a===null?(r.next=r,Ha(t)):(r.next=a.next,a.next=r),t.interleaved=r,Sn(n,i)}function Sn(n,t){n.lanes|=t;var r=n.alternate;for(r!==null&&(r.lanes|=t),r=n,n=n.return;n!==null;)n.childLanes|=t,r=n.alternate,r!==null&&(r.childLanes|=t),r=n,n=n.return;return r.tag===3?r.stateNode:null}var Un=!1;function $a(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kl(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Cn(n,t){return{eventTime:n,lane:t,tag:0,payload:null,callback:null,next:null}}function qn(n,t,r){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(X&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,Sn(n,r)}return a=i.interleaved,a===null?(t.next=t,Ha(i)):(t.next=a.next,a.next=t),i.interleaved=t,Sn(n,r)}function di(n,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=n.pendingLanes,r|=i,t.lanes=r,ia(n,r)}}function El(n,t){var r=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var a=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?a=s=l:s=s.next=l,r=r.next}while(r!==null);s===null?a=s=t:s=s.next=t}else a=s=t;r={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=t:n.next=t,r.lastBaseUpdate=t}function ci(n,t,r,i){var a=n.updateQueue;Un=!1;var s=a.firstBaseUpdate,l=a.lastBaseUpdate,p=a.shared.pending;if(p!==null){a.shared.pending=null;var h=p,y=h.next;h.next=null,l===null?s=y:l.next=y,l=h;var N=n.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==l&&(p===null?N.firstBaseUpdate=y:p.next=y,N.lastBaseUpdate=h))}if(s!==null){var k=a.baseState;l=0,N=y=h=null,p=s;do{var w=p.lane,z=p.eventTime;if((i&w)===w){N!==null&&(N=N.next={eventTime:z,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var A=n,D=p;switch(w=t,z=r,D.tag){case 1:if(A=D.payload,typeof A=="function"){k=A.call(z,k,w);break e}k=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=D.payload,w=typeof A=="function"?A.call(z,k,w):A,w==null)break e;k=_({},k,w);break e;case 2:Un=!0}}p.callback!==null&&p.lane!==0&&(n.flags|=64,w=a.effects,w===null?a.effects=[p]:w.push(p))}else z={eventTime:z,lane:w,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(y=N=z,h=k):N=N.next=z,l|=w;if(p=p.next,p===null){if(p=a.shared.pending,p===null)break;w=p,p=w.next,w.next=null,a.lastBaseUpdate=w,a.shared.pending=null}}while(!0);if(N===null&&(h=k),a.baseState=h,a.firstBaseUpdate=y,a.lastBaseUpdate=N,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);ot|=l,n.lanes=l,n.memoizedState=k}}function Sl(n,t,r){if(n=t.effects,t.effects=null,n!==null)for(t=0;t<n.length;t++){var i=n[t],a=i.callback;if(a!==null){if(i.callback=null,i=r,typeof a!="function")throw Error(o(191,a));a.call(i)}}}var ur={},vn=Mn(ur),mr=Mn(ur),hr=Mn(ur);function at(n){if(n===ur)throw Error(o(174));return n}function Wa(n,t){switch(oe(hr,t),oe(mr,n),oe(vn,ur),n=t.nodeType,n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gi(null,"");break;default:n=n===8?t.parentNode:t,t=n.namespaceURI||null,n=n.tagName,t=Gi(t,n)}de(vn),oe(vn,t)}function zt(){de(vn),de(mr),de(hr)}function Cl(n){at(hr.current);var t=at(vn.current),r=Gi(t,n.type);t!==r&&(oe(mr,n),oe(vn,r))}function Ga(n){mr.current===n&&(de(vn),de(mr))}var me=Mn(0);function pi(n){for(var t=n;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Va=[];function Ya(){for(var n=0;n<Va.length;n++)Va[n]._workInProgressVersionPrimary=null;Va.length=0}var ui=ve.ReactCurrentDispatcher,Qa=ve.ReactCurrentBatchConfig,st=0,he=null,je=null,Ee=null,mi=!1,fr=!1,xr=0,Qp=0;function Re(){throw Error(o(321))}function Ka(n,t){if(t===null)return!1;for(var r=0;r<t.length&&r<n.length;r++)if(!ln(n[r],t[r]))return!1;return!0}function Xa(n,t,r,i,a,s){if(st=s,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ui.current=n===null||n.memoizedState===null?Zp:eu,n=r(i,a),fr){s=0;do{if(fr=!1,xr=0,25<=s)throw Error(o(301));s+=1,Ee=je=null,t.updateQueue=null,ui.current=nu,n=r(i,a)}while(fr)}if(ui.current=xi,t=je!==null&&je.next!==null,st=0,Ee=je=he=null,mi=!1,t)throw Error(o(300));return n}function Ja(){var n=xr!==0;return xr=0,n}function yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?he.memoizedState=Ee=n:Ee=Ee.next=n,Ee}function tn(){if(je===null){var n=he.alternate;n=n!==null?n.memoizedState:null}else n=je.next;var t=Ee===null?he.memoizedState:Ee.next;if(t!==null)Ee=t,je=n;else{if(n===null)throw Error(o(310));je=n,n={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ee===null?he.memoizedState=Ee=n:Ee=Ee.next=n}return Ee}function gr(n,t){return typeof t=="function"?t(n):t}function Za(n){var t=tn(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=n;var i=je,a=i.baseQueue,s=r.pending;if(s!==null){if(a!==null){var l=a.next;a.next=s.next,s.next=l}i.baseQueue=a=s,r.pending=null}if(a!==null){s=a.next,i=i.baseState;var p=l=null,h=null,y=s;do{var N=y.lane;if((st&N)===N)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),i=y.hasEagerState?y.eagerState:n(i,y.action);else{var k={lane:N,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(p=h=k,l=i):h=h.next=k,he.lanes|=N,ot|=N}y=y.next}while(y!==null&&y!==s);h===null?l=i:h.next=p,ln(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseState=l,t.baseQueue=h,r.lastRenderedState=i}if(n=r.interleaved,n!==null){a=n;do s=a.lane,he.lanes|=s,ot|=s,a=a.next;while(a!==n)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function es(n){var t=tn(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=n;var i=r.dispatch,a=r.pending,s=t.memoizedState;if(a!==null){r.pending=null;var l=a=a.next;do s=n(s,l.action),l=l.next;while(l!==a);ln(s,t.memoizedState)||(qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,i]}function Pl(){}function Il(n,t){var r=he,i=tn(),a=t(),s=!ln(i.memoizedState,a);if(s&&(i.memoizedState=a,qe=!0),i=i.queue,ns(zl.bind(null,r,i,n),[n]),i.getSnapshot!==t||s||Ee!==null&&Ee.memoizedState.tag&1){if(r.flags|=2048,vr(9,Rl.bind(null,r,i,a,t),void 0,null),Se===null)throw Error(o(349));(st&30)!==0||Bl(r,t,a)}return a}function Bl(n,t,r){n.flags|=16384,n={getSnapshot:t,value:r},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[n]):(r=t.stores,r===null?t.stores=[n]:r.push(n))}function Rl(n,t,r,i){t.value=r,t.getSnapshot=i,Tl(t)&&Ll(n)}function zl(n,t,r){return r(function(){Tl(t)&&Ll(n)})}function Tl(n){var t=n.getSnapshot;n=n.value;try{var r=t();return!ln(n,r)}catch{return!0}}function Ll(n){var t=Sn(n,1);t!==null&&mn(t,n,1,-1)}function _l(n){var t=yn();return typeof n=="function"&&(n=n()),t.memoizedState=t.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:n},t.queue=n,n=n.dispatch=Jp.bind(null,he,n),[t.memoizedState,n]}function vr(n,t,r,i){return n={tag:n,create:t,destroy:r,deps:i,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=n.next=n):(r=t.lastEffect,r===null?t.lastEffect=n.next=n:(i=r.next,r.next=n,n.next=i,t.lastEffect=n)),n}function Al(){return tn().memoizedState}function hi(n,t,r,i){var a=yn();he.flags|=n,a.memoizedState=vr(1|t,r,void 0,i===void 0?null:i)}function fi(n,t,r,i){var a=tn();i=i===void 0?null:i;var s=void 0;if(je!==null){var l=je.memoizedState;if(s=l.destroy,i!==null&&Ka(i,l.deps)){a.memoizedState=vr(t,r,s,i);return}}he.flags|=n,a.memoizedState=vr(1|t,r,s,i)}function Dl(n,t){return hi(8390656,8,n,t)}function ns(n,t){return fi(2048,8,n,t)}function Ml(n,t){return fi(4,2,n,t)}function Fl(n,t){return fi(4,4,n,t)}function Ol(n,t){if(typeof t=="function")return n=n(),t(n),function(){t(null)};if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function Ul(n,t,r){return r=r!=null?r.concat([n]):null,fi(4,4,Ol.bind(null,t,n),r)}function ts(){}function ql(n,t){var r=tn();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Ka(t,i[1])?i[0]:(r.memoizedState=[n,t],n)}function Hl(n,t){var r=tn();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Ka(t,i[1])?i[0]:(n=n(),r.memoizedState=[n,t],n)}function $l(n,t,r){return(st&21)===0?(n.baseState&&(n.baseState=!1,qe=!0),n.memoizedState=r):(ln(r,t)||(r=bo(),he.lanes|=r,ot|=r,n.baseState=!0),t)}function Kp(n,t){var r=ie;ie=r!==0&&4>r?r:4,n(!0);var i=Qa.transition;Qa.transition={};try{n(!1),t()}finally{ie=r,Qa.transition=i}}function Wl(){return tn().memoizedState}function Xp(n,t,r){var i=Gn(n);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Gl(n))Vl(t,r);else if(r=Nl(n,t,r,i),r!==null){var a=De();mn(r,n,i,a),Yl(r,t,i)}}function Jp(n,t,r){var i=Gn(n),a={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Gl(n))Vl(t,a);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,p=s(l,r);if(a.hasEagerState=!0,a.eagerState=p,ln(p,l)){var h=t.interleaved;h===null?(a.next=a,Ha(t)):(a.next=h.next,h.next=a),t.interleaved=a;return}}catch{}finally{}r=Nl(n,t,a,i),r!==null&&(a=De(),mn(r,n,i,a),Yl(r,t,i))}}function Gl(n){var t=n.alternate;return n===he||t!==null&&t===he}function Vl(n,t){fr=mi=!0;var r=n.pending;r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t}function Yl(n,t,r){if((r&4194240)!==0){var i=t.lanes;i&=n.pendingLanes,r|=i,t.lanes=r,ia(n,r)}}var xi={readContext:nn,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Zp={readContext:nn,useCallback:function(n,t){return yn().memoizedState=[n,t===void 0?null:t],n},useContext:nn,useEffect:Dl,useImperativeHandle:function(n,t,r){return r=r!=null?r.concat([n]):null,hi(4194308,4,Ol.bind(null,t,n),r)},useLayoutEffect:function(n,t){return hi(4194308,4,n,t)},useInsertionEffect:function(n,t){return hi(4,2,n,t)},useMemo:function(n,t){var r=yn();return t=t===void 0?null:t,n=n(),r.memoizedState=[n,t],n},useReducer:function(n,t,r){var i=yn();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:t},i.queue=n,n=n.dispatch=Xp.bind(null,he,n),[i.memoizedState,n]},useRef:function(n){var t=yn();return n={current:n},t.memoizedState=n},useState:_l,useDebugValue:ts,useDeferredValue:function(n){return yn().memoizedState=n},useTransition:function(){var n=_l(!1),t=n[0];return n=Kp.bind(null,n[1]),yn().memoizedState=n,[t,n]},useMutableSource:function(){},useSyncExternalStore:function(n,t,r){var i=he,a=yn();if(ue){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),Se===null)throw Error(o(349));(st&30)!==0||Bl(i,t,r)}a.memoizedState=r;var s={value:r,getSnapshot:t};return a.queue=s,Dl(zl.bind(null,i,s,n),[n]),i.flags|=2048,vr(9,Rl.bind(null,i,s,r,t),void 0,null),r},useId:function(){var n=yn(),t=Se.identifierPrefix;if(ue){var r=En,i=kn;r=(i&~(1<<32-on(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=xr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Qp++,t=":"+t+"r"+r.toString(32)+":";return n.memoizedState=t},unstable_isNewReconciler:!1},eu={readContext:nn,useCallback:ql,useContext:nn,useEffect:ns,useImperativeHandle:Ul,useInsertionEffect:Ml,useLayoutEffect:Fl,useMemo:Hl,useReducer:Za,useRef:Al,useState:function(){return Za(gr)},useDebugValue:ts,useDeferredValue:function(n){var t=tn();return $l(t,je.memoizedState,n)},useTransition:function(){var n=Za(gr)[0],t=tn().memoizedState;return[n,t]},useMutableSource:Pl,useSyncExternalStore:Il,useId:Wl,unstable_isNewReconciler:!1},nu={readContext:nn,useCallback:ql,useContext:nn,useEffect:ns,useImperativeHandle:Ul,useInsertionEffect:Ml,useLayoutEffect:Fl,useMemo:Hl,useReducer:es,useRef:Al,useState:function(){return es(gr)},useDebugValue:ts,useDeferredValue:function(n){var t=tn();return je===null?t.memoizedState=n:$l(t,je.memoizedState,n)},useTransition:function(){var n=es(gr)[0],t=tn().memoizedState;return[n,t]},useMutableSource:Pl,useSyncExternalStore:Il,useId:Wl,unstable_isNewReconciler:!1};function cn(n,t){if(n&&n.defaultProps){t=_({},t),n=n.defaultProps;for(var r in n)t[r]===void 0&&(t[r]=n[r]);return t}return t}function rs(n,t,r,i){t=n.memoizedState,r=r(i,t),r=r==null?t:_({},t,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var gi={isMounted:function(n){return(n=n._reactInternals)?Zn(n)===n:!1},enqueueSetState:function(n,t,r){n=n._reactInternals;var i=De(),a=Gn(n),s=Cn(i,a);s.payload=t,r!=null&&(s.callback=r),t=qn(n,s,a),t!==null&&(mn(t,n,a,i),di(t,n,a))},enqueueReplaceState:function(n,t,r){n=n._reactInternals;var i=De(),a=Gn(n),s=Cn(i,a);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=qn(n,s,a),t!==null&&(mn(t,n,a,i),di(t,n,a))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var r=De(),i=Gn(n),a=Cn(r,i);a.tag=2,t!=null&&(a.callback=t),t=qn(n,a,i),t!==null&&(mn(t,n,i,r),di(t,n,i))}};function Ql(n,t,r,i,a,s,l){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,l):t.prototype&&t.prototype.isPureReactComponent?!ir(r,i)||!ir(a,s):!0}function Kl(n,t,r){var i=!1,a=Fn,s=t.contextType;return typeof s=="object"&&s!==null?s=nn(s):(a=Ue(t)?nt:Be.current,i=t.contextTypes,s=(i=i!=null)?Et(n,a):Fn),t=new t(r,s),n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gi,n.stateNode=t,t._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=a,n.__reactInternalMemoizedMaskedChildContext=s),t}function Xl(n,t,r,i){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==n&&gi.enqueueReplaceState(t,t.state,null)}function is(n,t,r,i){var a=n.stateNode;a.props=r,a.state=n.memoizedState,a.refs={},$a(n);var s=t.contextType;typeof s=="object"&&s!==null?a.context=nn(s):(s=Ue(t)?nt:Be.current,a.context=Et(n,s)),a.state=n.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(rs(n,t,s,r),a.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&gi.enqueueReplaceState(a,a.state,null),ci(n,r,a,i),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308)}function Tt(n,t){try{var r="",i=t;do r+=J(i),i=i.return;while(i);var a=r}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:t,stack:a,digest:null}}function as(n,t,r){return{value:n,source:null,stack:r??null,digest:t??null}}function ss(n,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var tu=typeof WeakMap=="function"?WeakMap:Map;function Jl(n,t,r){r=Cn(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){ki||(ki=!0,ws=i),ss(n,t)},r}function Zl(n,t,r){r=Cn(-1,r),r.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var a=t.value;r.payload=function(){return i(a)},r.callback=function(){ss(n,t)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){ss(n,t),typeof i!="function"&&($n===null?$n=new Set([this]):$n.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function ed(n,t,r){var i=n.pingCache;if(i===null){i=n.pingCache=new tu;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(r)||(a.add(r),n=xu.bind(null,n,t,r),t.then(n,n))}function nd(n){do{var t;if((t=n.tag===13)&&(t=n.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return n;n=n.return}while(n!==null);return null}function td(n,t,r,i,a){return(n.mode&1)===0?(n===t?n.flags|=65536:(n.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Cn(-1,1),t.tag=2,qn(r,t,1))),r.lanes|=1),n):(n.flags|=65536,n.lanes=a,n)}var ru=ve.ReactCurrentOwner,qe=!1;function Ae(n,t,r,i){t.child=n===null?jl(t,null,r,i):It(t,n.child,r,i)}function rd(n,t,r,i,a){r=r.render;var s=t.ref;return Rt(t,a),i=Xa(n,t,r,i,s,a),r=Ja(),n!==null&&!qe?(t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~a,Pn(n,t,a)):(ue&&r&&La(t),t.flags|=1,Ae(n,t,i,a),t.child)}function id(n,t,r,i,a){if(n===null){var s=r.type;return typeof s=="function"&&!Ps(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,ad(n,t,s,i,a)):(n=Bi(r.type,null,i,t,t.mode,a),n.ref=t.ref,n.return=t,t.child=n)}if(s=n.child,(n.lanes&a)===0){var l=s.memoizedProps;if(r=r.compare,r=r!==null?r:ir,r(l,i)&&n.ref===t.ref)return Pn(n,t,a)}return t.flags|=1,n=Yn(s,i),n.ref=t.ref,n.return=t,t.child=n}function ad(n,t,r,i,a){if(n!==null){var s=n.memoizedProps;if(ir(s,i)&&n.ref===t.ref)if(qe=!1,t.pendingProps=i=s,(n.lanes&a)!==0)(n.flags&131072)!==0&&(qe=!0);else return t.lanes=n.lanes,Pn(n,t,a)}return os(n,t,r,i,a)}function sd(n,t,r){var i=t.pendingProps,a=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(_t,Xe),Xe|=r;else{if((r&1073741824)===0)return n=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:n,cachePool:null,transitions:null},t.updateQueue=null,oe(_t,Xe),Xe|=n,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:r,oe(_t,Xe),Xe|=i}else s!==null?(i=s.baseLanes|r,t.memoizedState=null):i=r,oe(_t,Xe),Xe|=i;return Ae(n,t,a,r),t.child}function od(n,t){var r=t.ref;(n===null&&r!==null||n!==null&&n.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function os(n,t,r,i,a){var s=Ue(r)?nt:Be.current;return s=Et(t,s),Rt(t,a),r=Xa(n,t,r,i,s,a),i=Ja(),n!==null&&!qe?(t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~a,Pn(n,t,a)):(ue&&i&&La(t),t.flags|=1,Ae(n,t,r,a),t.child)}function ld(n,t,r,i,a){if(Ue(r)){var s=!0;ni(t)}else s=!1;if(Rt(t,a),t.stateNode===null)yi(n,t),Kl(t,r,i),is(t,r,i,a),i=!0;else if(n===null){var l=t.stateNode,p=t.memoizedProps;l.props=p;var h=l.context,y=r.contextType;typeof y=="object"&&y!==null?y=nn(y):(y=Ue(r)?nt:Be.current,y=Et(t,y));var N=r.getDerivedStateFromProps,k=typeof N=="function"||typeof l.getSnapshotBeforeUpdate=="function";k||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(p!==i||h!==y)&&Xl(t,l,i,y),Un=!1;var w=t.memoizedState;l.state=w,ci(t,i,l,a),h=t.memoizedState,p!==i||w!==h||Oe.current||Un?(typeof N=="function"&&(rs(t,r,N,i),h=t.memoizedState),(p=Un||Ql(t,r,p,i,w,h,y))?(k||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),l.props=i,l.state=h,l.context=y,i=p):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,kl(n,t),p=t.memoizedProps,y=t.type===t.elementType?p:cn(t.type,p),l.props=y,k=t.pendingProps,w=l.context,h=r.contextType,typeof h=="object"&&h!==null?h=nn(h):(h=Ue(r)?nt:Be.current,h=Et(t,h));var z=r.getDerivedStateFromProps;(N=typeof z=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(p!==k||w!==h)&&Xl(t,l,i,h),Un=!1,w=t.memoizedState,l.state=w,ci(t,i,l,a);var A=t.memoizedState;p!==k||w!==A||Oe.current||Un?(typeof z=="function"&&(rs(t,r,z,i),A=t.memoizedState),(y=Un||Ql(t,r,y,i,w,A,h)||!1)?(N||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,A,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,A,h)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||p===n.memoizedProps&&w===n.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||p===n.memoizedProps&&w===n.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=A),l.props=i,l.state=A,l.context=h,i=y):(typeof l.componentDidUpdate!="function"||p===n.memoizedProps&&w===n.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||p===n.memoizedProps&&w===n.memoizedState||(t.flags|=1024),i=!1)}return ls(n,t,r,i,s,a)}function ls(n,t,r,i,a,s){od(n,t);var l=(t.flags&128)!==0;if(!i&&!l)return a&&ml(t,r,!1),Pn(n,t,s);i=t.stateNode,ru.current=t;var p=l&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,n!==null&&l?(t.child=It(t,n.child,null,s),t.child=It(t,null,p,s)):Ae(n,t,p,s),t.memoizedState=i.state,a&&ml(t,r,!0),t.child}function dd(n){var t=n.stateNode;t.pendingContext?pl(n,t.pendingContext,t.pendingContext!==t.context):t.context&&pl(n,t.context,!1),Wa(n,t.containerInfo)}function cd(n,t,r,i,a){return Pt(),Ma(a),t.flags|=256,Ae(n,t,r,i),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function cs(n){return{baseLanes:n,cachePool:null,transitions:null}}function pd(n,t,r){var i=t.pendingProps,a=me.current,s=!1,l=(t.flags&128)!==0,p;if((p=l)||(p=n!==null&&n.memoizedState===null?!1:(a&2)!==0),p?(s=!0,t.flags&=-129):(n===null||n.memoizedState!==null)&&(a|=1),oe(me,a&1),n===null)return Da(t),n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((t.mode&1)===0?t.lanes=1:n.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=i.children,n=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Ri(l,i,0,null),n=pt(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,t.child.memoizedState=cs(r),t.memoizedState=ds,n):ps(t,l));if(a=n.memoizedState,a!==null&&(p=a.dehydrated,p!==null))return iu(n,t,l,i,p,a,r);if(s){s=i.fallback,l=t.mode,a=n.child,p=a.sibling;var h={mode:"hidden",children:i.children};return(l&1)===0&&t.child!==a?(i=t.child,i.childLanes=0,i.pendingProps=h,t.deletions=null):(i=Yn(a,h),i.subtreeFlags=a.subtreeFlags&14680064),p!==null?s=Yn(p,s):(s=pt(s,l,r,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=n.child.memoizedState,l=l===null?cs(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=n.childLanes&~r,t.memoizedState=ds,i}return s=n.child,n=s.sibling,i=Yn(s,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,n!==null&&(r=t.deletions,r===null?(t.deletions=[n],t.flags|=16):r.push(n)),t.child=i,t.memoizedState=null,i}function ps(n,t){return t=Ri({mode:"visible",children:t},n.mode,0,null),t.return=n,n.child=t}function vi(n,t,r,i){return i!==null&&Ma(i),It(t,n.child,null,r),n=ps(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function iu(n,t,r,i,a,s,l){if(r)return t.flags&256?(t.flags&=-257,i=as(Error(o(422))),vi(n,t,l,i)):t.memoizedState!==null?(t.child=n.child,t.flags|=128,null):(s=i.fallback,a=t.mode,i=Ri({mode:"visible",children:i.children},a,0,null),s=pt(s,a,l,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,(t.mode&1)!==0&&It(t,n.child,null,l),t.child.memoizedState=cs(l),t.memoizedState=ds,s);if((t.mode&1)===0)return vi(n,t,l,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var p=i.dgst;return i=p,s=Error(o(419)),i=as(s,i,void 0),vi(n,t,l,i)}if(p=(l&n.childLanes)!==0,qe||p){if(i=Se,i!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|l))!==0?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Sn(n,a),mn(i,n,a,-1))}return Cs(),i=as(Error(o(421))),vi(n,t,l,i)}return a.data==="$?"?(t.flags|=128,t.child=n.child,t=gu.bind(null,n),a._reactRetry=t,null):(n=s.treeContext,Ke=Dn(a.nextSibling),Qe=t,ue=!0,dn=null,n!==null&&(Ze[en++]=kn,Ze[en++]=En,Ze[en++]=tt,kn=n.id,En=n.overflow,tt=t),t=ps(t,i.children),t.flags|=4096,t)}function ud(n,t,r){n.lanes|=t;var i=n.alternate;i!==null&&(i.lanes|=t),qa(n.return,t,r)}function us(n,t,r,i,a){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=r,s.tailMode=a)}function md(n,t,r){var i=t.pendingProps,a=i.revealOrder,s=i.tail;if(Ae(n,t,i.children,r),i=me.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ud(n,r,t);else if(n.tag===19)ud(n,r,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(oe(me,i),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)n=r.alternate,n!==null&&pi(n)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),us(t,!1,a,r,s);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(n=a.alternate,n!==null&&pi(n)===null){t.child=a;break}n=a.sibling,a.sibling=r,r=a,a=n}us(t,!0,r,null,s);break;case"together":us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yi(n,t){(t.mode&1)===0&&n!==null&&(n.alternate=null,t.alternate=null,t.flags|=2)}function Pn(n,t,r){if(n!==null&&(t.dependencies=n.dependencies),ot|=t.lanes,(r&t.childLanes)===0)return null;if(n!==null&&t.child!==n.child)throw Error(o(153));if(t.child!==null){for(n=t.child,r=Yn(n,n.pendingProps),t.child=r,r.return=t;n.sibling!==null;)n=n.sibling,r=r.sibling=Yn(n,n.pendingProps),r.return=t;r.sibling=null}return t.child}function au(n,t,r){switch(t.tag){case 3:dd(t),Pt();break;case 5:Cl(t);break;case 1:Ue(t.type)&&ni(t);break;case 4:Wa(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,a=t.memoizedProps.value;oe(oi,i._currentValue),i._currentValue=a;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(oe(me,me.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?pd(n,t,r):(oe(me,me.current&1),n=Pn(n,t,r),n!==null?n.sibling:null);oe(me,me.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(n.flags&128)!==0){if(i)return md(n,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),oe(me,me.current),i)break;return null;case 22:case 23:return t.lanes=0,sd(n,t,r)}return Pn(n,t,r)}var hd,ms,fd,xd;hd=function(n,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)n.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ms=function(){},fd=function(n,t,r,i){var a=n.memoizedProps;if(a!==i){n=t.stateNode,at(vn.current);var s=null;switch(r){case"input":a=qi(n,a),i=qi(n,i),s=[];break;case"select":a=_({},a,{value:void 0}),i=_({},i,{value:void 0}),s=[];break;case"textarea":a=Wi(n,a),i=Wi(n,i),s=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Jr)}Vi(r,i);var l;r=null;for(y in a)if(!i.hasOwnProperty(y)&&a.hasOwnProperty(y)&&a[y]!=null)if(y==="style"){var p=a[y];for(l in p)p.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(c.hasOwnProperty(y)?s||(s=[]):(s=s||[]).push(y,null));for(y in i){var h=i[y];if(p=a!=null?a[y]:void 0,i.hasOwnProperty(y)&&h!==p&&(h!=null||p!=null))if(y==="style")if(p){for(l in p)!p.hasOwnProperty(l)||h&&h.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in h)h.hasOwnProperty(l)&&p[l]!==h[l]&&(r||(r={}),r[l]=h[l])}else r||(s||(s=[]),s.push(y,r)),r=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(s=s||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(s=s||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(c.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&le("scroll",n),s||p===h||(s=[])):(s=s||[]).push(y,h))}r&&(s=s||[]).push("style",r);var y=s;(t.updateQueue=y)&&(t.flags|=4)}},xd=function(n,t,r,i){r!==i&&(t.flags|=4)};function yr(n,t){if(!ue)switch(n.tailMode){case"hidden":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function ze(n){var t=n.alternate!==null&&n.alternate.child===n.child,r=0,i=0;if(t)for(var a=n.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=i,n.childLanes=r,t}function su(n,t,r){var i=t.pendingProps;switch(_a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Ue(t.type)&&ei(),ze(t),null;case 3:return i=t.stateNode,zt(),de(Oe),de(Be),Ya(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ai(t)?t.flags|=4:n===null||n.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dn!==null&&(ks(dn),dn=null))),ms(n,t),ze(t),null;case 5:Ga(t);var a=at(hr.current);if(r=t.type,n!==null&&t.stateNode!=null)fd(n,t,r,i,a),n.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(o(166));return ze(t),null}if(n=at(vn.current),ai(t)){i=t.stateNode,r=t.type;var s=t.memoizedProps;switch(i[gn]=t,i[dr]=s,n=(t.mode&1)!==0,r){case"dialog":le("cancel",i),le("close",i);break;case"iframe":case"object":case"embed":le("load",i);break;case"video":case"audio":for(a=0;a<sr.length;a++)le(sr[a],i);break;case"source":le("error",i);break;case"img":case"image":case"link":le("error",i),le("load",i);break;case"details":le("toggle",i);break;case"input":Qs(i,s),le("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},le("invalid",i);break;case"textarea":Js(i,s),le("invalid",i)}Vi(r,s),a=null;for(var l in s)if(s.hasOwnProperty(l)){var p=s[l];l==="children"?typeof p=="string"?i.textContent!==p&&(s.suppressHydrationWarning!==!0&&Xr(i.textContent,p,n),a=["children",p]):typeof p=="number"&&i.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&Xr(i.textContent,p,n),a=["children",""+p]):c.hasOwnProperty(l)&&p!=null&&l==="onScroll"&&le("scroll",i)}switch(r){case"input":Pr(i),Xs(i,s,!0);break;case"textarea":Pr(i),eo(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Jr)}i=a,t.updateQueue=i,i!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=no(r)),n==="http://www.w3.org/1999/xhtml"?r==="script"?(n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=l.createElement(r,{is:i.is}):(n=l.createElement(r),r==="select"&&(l=n,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):n=l.createElementNS(n,r),n[gn]=t,n[dr]=i,hd(n,t,!1,!1),t.stateNode=n;e:{switch(l=Yi(r,i),r){case"dialog":le("cancel",n),le("close",n),a=i;break;case"iframe":case"object":case"embed":le("load",n),a=i;break;case"video":case"audio":for(a=0;a<sr.length;a++)le(sr[a],n);a=i;break;case"source":le("error",n),a=i;break;case"img":case"image":case"link":le("error",n),le("load",n),a=i;break;case"details":le("toggle",n),a=i;break;case"input":Qs(n,i),a=qi(n,i),le("invalid",n);break;case"option":a=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},a=_({},i,{value:void 0}),le("invalid",n);break;case"textarea":Js(n,i),a=Wi(n,i),le("invalid",n);break;default:a=i}Vi(r,a),p=a;for(s in p)if(p.hasOwnProperty(s)){var h=p[s];s==="style"?io(n,h):s==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&to(n,h)):s==="children"?typeof h=="string"?(r!=="textarea"||h!=="")&&Ut(n,h):typeof h=="number"&&Ut(n,""+h):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(c.hasOwnProperty(s)?h!=null&&s==="onScroll"&&le("scroll",n):h!=null&&fe(n,s,h,l))}switch(r){case"input":Pr(n),Xs(n,i,!1);break;case"textarea":Pr(n),eo(n);break;case"option":i.value!=null&&n.setAttribute("value",""+re(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?mt(n,!!i.multiple,s,!1):i.defaultValue!=null&&mt(n,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(n.onclick=Jr)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(n&&t.stateNode!=null)xd(n,t,n.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(r=at(hr.current),at(vn.current),ai(t)){if(i=t.stateNode,r=t.memoizedProps,i[gn]=t,(s=i.nodeValue!==r)&&(n=Qe,n!==null))switch(n.tag){case 3:Xr(i.nodeValue,r,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xr(i.nodeValue,r,(n.mode&1)!==0)}s&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[gn]=t,t.stateNode=i}return ze(t),null;case 13:if(de(me),i=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ue&&Ke!==null&&(t.mode&1)!==0&&(t.flags&128)===0)yl(),Pt(),t.flags|=98560,s=!1;else if(s=ai(t),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[gn]=t}else Pt(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),s=!1}else dn!==null&&(ks(dn),dn=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(n===null||(me.current&1)!==0?Ne===0&&(Ne=3):Cs())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return zt(),ms(n,t),n===null&&or(t.stateNode.containerInfo),ze(t),null;case 10:return Ua(t.type._context),ze(t),null;case 17:return Ue(t.type)&&ei(),ze(t),null;case 19:if(de(me),s=t.memoizedState,s===null)return ze(t),null;if(i=(t.flags&128)!==0,l=s.rendering,l===null)if(i)yr(s,!1);else{if(Ne!==0||n!==null&&(n.flags&128)!==0)for(n=t.child;n!==null;){if(l=pi(n),l!==null){for(t.flags|=128,yr(s,!1),i=l.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)s=r,n=i,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,n=l.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),r=r.sibling;return oe(me,me.current&1|2),t.child}n=n.sibling}s.tail!==null&&ye()>At&&(t.flags|=128,i=!0,yr(s,!1),t.lanes=4194304)}else{if(!i)if(n=pi(l),n!==null){if(t.flags|=128,i=!0,r=n.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),yr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!ue)return ze(t),null}else 2*ye()-s.renderingStartTime>At&&r!==1073741824&&(t.flags|=128,i=!0,yr(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(r=s.last,r!==null?r.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ye(),t.sibling=null,r=me.current,oe(me,i?r&1|2:r&1),t):(ze(t),null);case 22:case 23:return Ss(),i=t.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(Xe&1073741824)!==0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function ou(n,t){switch(_a(t),t.tag){case 1:return Ue(t.type)&&ei(),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return zt(),de(Oe),de(Be),Ya(),n=t.flags,(n&65536)!==0&&(n&128)===0?(t.flags=n&-65537|128,t):null;case 5:return Ga(t),null;case 13:if(de(me),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Pt()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return de(me),null;case 4:return zt(),null;case 10:return Ua(t.type._context),null;case 22:case 23:return Ss(),null;case 24:return null;default:return null}}var bi=!1,Te=!1,lu=typeof WeakSet=="function"?WeakSet:Set,L=null;function Lt(n,t){var r=n.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){ge(n,t,i)}else r.current=null}function hs(n,t,r){try{r()}catch(i){ge(n,t,i)}}var gd=!1;function du(n,t){if(Sa=Or,n=Qo(),va(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else e:{r=(r=n.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var l=0,p=-1,h=-1,y=0,N=0,k=n,w=null;n:for(;;){for(var z;k!==r||a!==0&&k.nodeType!==3||(p=l+a),k!==s||i!==0&&k.nodeType!==3||(h=l+i),k.nodeType===3&&(l+=k.nodeValue.length),(z=k.firstChild)!==null;)w=k,k=z;for(;;){if(k===n)break n;if(w===r&&++y===a&&(p=l),w===s&&++N===i&&(h=l),(z=k.nextSibling)!==null)break;k=w,w=k.parentNode}k=z}r=p===-1||h===-1?null:{start:p,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ca={focusedElem:n,selectionRange:r},Or=!1,L=t;L!==null;)if(t=L,n=t.child,(t.subtreeFlags&1028)!==0&&n!==null)n.return=t,L=n;else for(;L!==null;){t=L;try{var A=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var D=A.memoizedProps,be=A.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?D:cn(t.type,D),be);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(C){ge(t,t.return,C)}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}return A=gd,gd=!1,A}function br(n,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var s=a.destroy;a.destroy=void 0,s!==void 0&&hs(t,r,s)}a=a.next}while(a!==i)}}function wi(n,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&n)===n){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function fs(n){var t=n.ref;if(t!==null){var r=n.stateNode;switch(n.tag){case 5:n=r;break;default:n=r}typeof t=="function"?t(n):t.current=n}}function vd(n){var t=n.alternate;t!==null&&(n.alternate=null,vd(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&(delete t[gn],delete t[dr],delete t[Ra],delete t[Wp],delete t[Gp])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function yd(n){return n.tag===5||n.tag===3||n.tag===4}function bd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||yd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xs(n,t,r){var i=n.tag;if(i===5||i===6)n=n.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(n,t):r.insertBefore(n,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(n,r)):(t=r,t.appendChild(n)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Jr));else if(i!==4&&(n=n.child,n!==null))for(xs(n,t,r),n=n.sibling;n!==null;)xs(n,t,r),n=n.sibling}function gs(n,t,r){var i=n.tag;if(i===5||i===6)n=n.stateNode,t?r.insertBefore(n,t):r.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(gs(n,t,r),n=n.sibling;n!==null;)gs(n,t,r),n=n.sibling}var Pe=null,pn=!1;function Hn(n,t,r){for(r=r.child;r!==null;)wd(n,t,r),r=r.sibling}function wd(n,t,r){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Lr,r)}catch{}switch(r.tag){case 5:Te||Lt(r,t);case 6:var i=Pe,a=pn;Pe=null,Hn(n,t,r),Pe=i,pn=a,Pe!==null&&(pn?(n=Pe,r=r.stateNode,n.nodeType===8?n.parentNode.removeChild(r):n.removeChild(r)):Pe.removeChild(r.stateNode));break;case 18:Pe!==null&&(pn?(n=Pe,r=r.stateNode,n.nodeType===8?Ba(n.parentNode,r):n.nodeType===1&&Ba(n,r),Jt(n)):Ba(Pe,r.stateNode));break;case 4:i=Pe,a=pn,Pe=r.stateNode.containerInfo,pn=!0,Hn(n,t,r),Pe=i,pn=a;break;case 0:case 11:case 14:case 15:if(!Te&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var s=a,l=s.destroy;s=s.tag,l!==void 0&&((s&2)!==0||(s&4)!==0)&&hs(r,t,l),a=a.next}while(a!==i)}Hn(n,t,r);break;case 1:if(!Te&&(Lt(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(p){ge(r,t,p)}Hn(n,t,r);break;case 21:Hn(n,t,r);break;case 22:r.mode&1?(Te=(i=Te)||r.memoizedState!==null,Hn(n,t,r),Te=i):Hn(n,t,r);break;default:Hn(n,t,r)}}function jd(n){var t=n.updateQueue;if(t!==null){n.updateQueue=null;var r=n.stateNode;r===null&&(r=n.stateNode=new lu),t.forEach(function(i){var a=vu.bind(null,n,i);r.has(i)||(r.add(i),i.then(a,a))})}}function un(n,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=r[i];try{var s=n,l=t,p=l;e:for(;p!==null;){switch(p.tag){case 5:Pe=p.stateNode,pn=!1;break e;case 3:Pe=p.stateNode.containerInfo,pn=!0;break e;case 4:Pe=p.stateNode.containerInfo,pn=!0;break e}p=p.return}if(Pe===null)throw Error(o(160));wd(s,l,a),Pe=null,pn=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(y){ge(a,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nd(t,n),t=t.sibling}function Nd(n,t){var r=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(un(t,n),bn(n),i&4){try{br(3,n,n.return),wi(3,n)}catch(D){ge(n,n.return,D)}try{br(5,n,n.return)}catch(D){ge(n,n.return,D)}}break;case 1:un(t,n),bn(n),i&512&&r!==null&&Lt(r,r.return);break;case 5:if(un(t,n),bn(n),i&512&&r!==null&&Lt(r,r.return),n.flags&32){var a=n.stateNode;try{Ut(a,"")}catch(D){ge(n,n.return,D)}}if(i&4&&(a=n.stateNode,a!=null)){var s=n.memoizedProps,l=r!==null?r.memoizedProps:s,p=n.type,h=n.updateQueue;if(n.updateQueue=null,h!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&Ks(a,s),Yi(p,l);var y=Yi(p,s);for(l=0;l<h.length;l+=2){var N=h[l],k=h[l+1];N==="style"?io(a,k):N==="dangerouslySetInnerHTML"?to(a,k):N==="children"?Ut(a,k):fe(a,N,k,y)}switch(p){case"input":Hi(a,s);break;case"textarea":Zs(a,s);break;case"select":var w=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var z=s.value;z!=null?mt(a,!!s.multiple,z,!1):w!==!!s.multiple&&(s.defaultValue!=null?mt(a,!!s.multiple,s.defaultValue,!0):mt(a,!!s.multiple,s.multiple?[]:"",!1))}a[dr]=s}catch(D){ge(n,n.return,D)}}break;case 6:if(un(t,n),bn(n),i&4){if(n.stateNode===null)throw Error(o(162));a=n.stateNode,s=n.memoizedProps;try{a.nodeValue=s}catch(D){ge(n,n.return,D)}}break;case 3:if(un(t,n),bn(n),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Jt(t.containerInfo)}catch(D){ge(n,n.return,D)}break;case 4:un(t,n),bn(n);break;case 13:un(t,n),bn(n),a=n.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(bs=ye())),i&4&&jd(n);break;case 22:if(N=r!==null&&r.memoizedState!==null,n.mode&1?(Te=(y=Te)||N,un(t,n),Te=y):un(t,n),bn(n),i&8192){if(y=n.memoizedState!==null,(n.stateNode.isHidden=y)&&!N&&(n.mode&1)!==0)for(L=n,N=n.child;N!==null;){for(k=L=N;L!==null;){switch(w=L,z=w.child,w.tag){case 0:case 11:case 14:case 15:br(4,w,w.return);break;case 1:Lt(w,w.return);var A=w.stateNode;if(typeof A.componentWillUnmount=="function"){i=w,r=w.return;try{t=i,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(D){ge(i,r,D)}}break;case 5:Lt(w,w.return);break;case 22:if(w.memoizedState!==null){Sd(k);continue}}z!==null?(z.return=w,L=z):Sd(k)}N=N.sibling}e:for(N=null,k=n;;){if(k.tag===5){if(N===null){N=k;try{a=k.stateNode,y?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=k.stateNode,h=k.memoizedProps.style,l=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=ro("display",l))}catch(D){ge(n,n.return,D)}}}else if(k.tag===6){if(N===null)try{k.stateNode.nodeValue=y?"":k.memoizedProps}catch(D){ge(n,n.return,D)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===n)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===n)break e;for(;k.sibling===null;){if(k.return===null||k.return===n)break e;N===k&&(N=null),k=k.return}N===k&&(N=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:un(t,n),bn(n),i&4&&jd(n);break;case 21:break;default:un(t,n),bn(n)}}function bn(n){var t=n.flags;if(t&2){try{e:{for(var r=n.return;r!==null;){if(yd(r)){var i=r;break e}r=r.return}throw Error(o(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Ut(a,""),i.flags&=-33);var s=bd(n);gs(n,s,a);break;case 3:case 4:var l=i.stateNode.containerInfo,p=bd(n);xs(n,p,l);break;default:throw Error(o(161))}}catch(h){ge(n,n.return,h)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function cu(n,t,r){L=n,kd(n)}function kd(n,t,r){for(var i=(n.mode&1)!==0;L!==null;){var a=L,s=a.child;if(a.tag===22&&i){var l=a.memoizedState!==null||bi;if(!l){var p=a.alternate,h=p!==null&&p.memoizedState!==null||Te;p=bi;var y=Te;if(bi=l,(Te=h)&&!y)for(L=a;L!==null;)l=L,h=l.child,l.tag===22&&l.memoizedState!==null?Cd(a):h!==null?(h.return=l,L=h):Cd(a);for(;s!==null;)L=s,kd(s),s=s.sibling;L=a,bi=p,Te=y}Ed(n)}else(a.subtreeFlags&8772)!==0&&s!==null?(s.return=a,L=s):Ed(n)}}function Ed(n){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Te||wi(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Te)if(r===null)i.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:cn(t.type,r.memoizedProps);i.componentDidUpdate(a,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Sl(t,s,i);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Sl(t,l,r)}break;case 5:var p=t.stateNode;if(r===null&&t.flags&4){r=p;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&r.focus();break;case"img":h.src&&(r.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var N=y.memoizedState;if(N!==null){var k=N.dehydrated;k!==null&&Jt(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Te||t.flags&512&&fs(t)}catch(w){ge(t,t.return,w)}}if(t===n){L=null;break}if(r=t.sibling,r!==null){r.return=t.return,L=r;break}L=t.return}}function Sd(n){for(;L!==null;){var t=L;if(t===n){L=null;break}var r=t.sibling;if(r!==null){r.return=t.return,L=r;break}L=t.return}}function Cd(n){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{wi(4,t)}catch(h){ge(t,r,h)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var a=t.return;try{i.componentDidMount()}catch(h){ge(t,a,h)}}var s=t.return;try{fs(t)}catch(h){ge(t,s,h)}break;case 5:var l=t.return;try{fs(t)}catch(h){ge(t,l,h)}}}catch(h){ge(t,t.return,h)}if(t===n){L=null;break}var p=t.sibling;if(p!==null){p.return=t.return,L=p;break}L=t.return}}var pu=Math.ceil,ji=ve.ReactCurrentDispatcher,vs=ve.ReactCurrentOwner,rn=ve.ReactCurrentBatchConfig,X=0,Se=null,we=null,Ie=0,Xe=0,_t=Mn(0),Ne=0,wr=null,ot=0,Ni=0,ys=0,jr=null,He=null,bs=0,At=1/0,In=null,ki=!1,ws=null,$n=null,Ei=!1,Wn=null,Si=0,Nr=0,js=null,Ci=-1,Pi=0;function De(){return(X&6)!==0?ye():Ci!==-1?Ci:Ci=ye()}function Gn(n){return(n.mode&1)===0?1:(X&2)!==0&&Ie!==0?Ie&-Ie:Yp.transition!==null?(Pi===0&&(Pi=bo()),Pi):(n=ie,n!==0||(n=window.event,n=n===void 0?16:Io(n.type)),n)}function mn(n,t,r,i){if(50<Nr)throw Nr=0,js=null,Error(o(185));Vt(n,r,i),((X&2)===0||n!==Se)&&(n===Se&&((X&2)===0&&(Ni|=r),Ne===4&&Vn(n,Ie)),$e(n,i),r===1&&X===0&&(t.mode&1)===0&&(At=ye()+500,ti&&On()))}function $e(n,t){var r=n.callbackNode;Yc(n,t);var i=Dr(n,n===Se?Ie:0);if(i===0)r!==null&&go(r),n.callbackNode=null,n.callbackPriority=0;else if(t=i&-i,n.callbackPriority!==t){if(r!=null&&go(r),t===1)n.tag===0?Vp(Id.bind(null,n)):hl(Id.bind(null,n)),Hp(function(){(X&6)===0&&On()}),r=null;else{switch(wo(i)){case 1:r=na;break;case 4:r=vo;break;case 16:r=Tr;break;case 536870912:r=yo;break;default:r=Tr}r=Dd(r,Pd.bind(null,n))}n.callbackPriority=t,n.callbackNode=r}}function Pd(n,t){if(Ci=-1,Pi=0,(X&6)!==0)throw Error(o(327));var r=n.callbackNode;if(Dt()&&n.callbackNode!==r)return null;var i=Dr(n,n===Se?Ie:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||t)t=Ii(n,i);else{t=i;var a=X;X|=2;var s=Rd();(Se!==n||Ie!==t)&&(In=null,At=ye()+500,dt(n,t));do try{hu();break}catch(p){Bd(n,p)}while(!0);Oa(),ji.current=s,X=a,we!==null?t=0:(Se=null,Ie=0,t=Ne)}if(t!==0){if(t===2&&(a=ta(n),a!==0&&(i=a,t=Ns(n,a))),t===1)throw r=wr,dt(n,0),Vn(n,i),$e(n,ye()),r;if(t===6)Vn(n,i);else{if(a=n.current.alternate,(i&30)===0&&!uu(a)&&(t=Ii(n,i),t===2&&(s=ta(n),s!==0&&(i=s,t=Ns(n,s))),t===1))throw r=wr,dt(n,0),Vn(n,i),$e(n,ye()),r;switch(n.finishedWork=a,n.finishedLanes=i,t){case 0:case 1:throw Error(o(345));case 2:ct(n,He,In);break;case 3:if(Vn(n,i),(i&130023424)===i&&(t=bs+500-ye(),10<t)){if(Dr(n,0)!==0)break;if(a=n.suspendedLanes,(a&i)!==i){De(),n.pingedLanes|=n.suspendedLanes&a;break}n.timeoutHandle=Ia(ct.bind(null,n,He,In),t);break}ct(n,He,In);break;case 4:if(Vn(n,i),(i&4194240)===i)break;for(t=n.eventTimes,a=-1;0<i;){var l=31-on(i);s=1<<l,l=t[l],l>a&&(a=l),i&=~s}if(i=a,i=ye()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*pu(i/1960))-i,10<i){n.timeoutHandle=Ia(ct.bind(null,n,He,In),i);break}ct(n,He,In);break;case 5:ct(n,He,In);break;default:throw Error(o(329))}}}return $e(n,ye()),n.callbackNode===r?Pd.bind(null,n):null}function Ns(n,t){var r=jr;return n.current.memoizedState.isDehydrated&&(dt(n,t).flags|=256),n=Ii(n,t),n!==2&&(t=He,He=r,t!==null&&ks(t)),n}function ks(n){He===null?He=n:He.push.apply(He,n)}function uu(n){for(var t=n;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var a=r[i],s=a.getSnapshot;a=a.value;try{if(!ln(s(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(n,t){for(t&=~ys,t&=~Ni,n.suspendedLanes|=t,n.pingedLanes&=~t,n=n.expirationTimes;0<t;){var r=31-on(t),i=1<<r;n[r]=-1,t&=~i}}function Id(n){if((X&6)!==0)throw Error(o(327));Dt();var t=Dr(n,0);if((t&1)===0)return $e(n,ye()),null;var r=Ii(n,t);if(n.tag!==0&&r===2){var i=ta(n);i!==0&&(t=i,r=Ns(n,i))}if(r===1)throw r=wr,dt(n,0),Vn(n,t),$e(n,ye()),r;if(r===6)throw Error(o(345));return n.finishedWork=n.current.alternate,n.finishedLanes=t,ct(n,He,In),$e(n,ye()),null}function Es(n,t){var r=X;X|=1;try{return n(t)}finally{X=r,X===0&&(At=ye()+500,ti&&On())}}function lt(n){Wn!==null&&Wn.tag===0&&(X&6)===0&&Dt();var t=X;X|=1;var r=rn.transition,i=ie;try{if(rn.transition=null,ie=1,n)return n()}finally{ie=i,rn.transition=r,X=t,(X&6)===0&&On()}}function Ss(){Xe=_t.current,de(_t)}function dt(n,t){n.finishedWork=null,n.finishedLanes=0;var r=n.timeoutHandle;if(r!==-1&&(n.timeoutHandle=-1,qp(r)),we!==null)for(r=we.return;r!==null;){var i=r;switch(_a(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ei();break;case 3:zt(),de(Oe),de(Be),Ya();break;case 5:Ga(i);break;case 4:zt();break;case 13:de(me);break;case 19:de(me);break;case 10:Ua(i.type._context);break;case 22:case 23:Ss()}r=r.return}if(Se=n,we=n=Yn(n.current,null),Ie=Xe=t,Ne=0,wr=null,ys=Ni=ot=0,He=jr=null,it!==null){for(t=0;t<it.length;t++)if(r=it[t],i=r.interleaved,i!==null){r.interleaved=null;var a=i.next,s=r.pending;if(s!==null){var l=s.next;s.next=a,i.next=l}r.pending=i}it=null}return n}function Bd(n,t){do{var r=we;try{if(Oa(),ui.current=xi,mi){for(var i=he.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}mi=!1}if(st=0,Ee=je=he=null,fr=!1,xr=0,vs.current=null,r===null||r.return===null){Ne=1,wr=t,we=null;break}e:{var s=n,l=r.return,p=r,h=t;if(t=Ie,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,N=p,k=N.tag;if((N.mode&1)===0&&(k===0||k===11||k===15)){var w=N.alternate;w?(N.updateQueue=w.updateQueue,N.memoizedState=w.memoizedState,N.lanes=w.lanes):(N.updateQueue=null,N.memoizedState=null)}var z=nd(l);if(z!==null){z.flags&=-257,td(z,l,p,s,t),z.mode&1&&ed(s,y,t),t=z,h=y;var A=t.updateQueue;if(A===null){var D=new Set;D.add(h),t.updateQueue=D}else A.add(h);break e}else{if((t&1)===0){ed(s,y,t),Cs();break e}h=Error(o(426))}}else if(ue&&p.mode&1){var be=nd(l);if(be!==null){(be.flags&65536)===0&&(be.flags|=256),td(be,l,p,s,t),Ma(Tt(h,p));break e}}s=h=Tt(h,p),Ne!==4&&(Ne=2),jr===null?jr=[s]:jr.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=Jl(s,h,t);El(s,g);break e;case 1:p=h;var f=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&($n===null||!$n.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var C=Zl(s,p,t);El(s,C);break e}}s=s.return}while(s!==null)}Td(r)}catch(M){t=M,we===r&&r!==null&&(we=r=r.return);continue}break}while(!0)}function Rd(){var n=ji.current;return ji.current=xi,n===null?xi:n}function Cs(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Se===null||(ot&268435455)===0&&(Ni&268435455)===0||Vn(Se,Ie)}function Ii(n,t){var r=X;X|=2;var i=Rd();(Se!==n||Ie!==t)&&(In=null,dt(n,t));do try{mu();break}catch(a){Bd(n,a)}while(!0);if(Oa(),X=r,ji.current=i,we!==null)throw Error(o(261));return Se=null,Ie=0,Ne}function mu(){for(;we!==null;)zd(we)}function hu(){for(;we!==null&&!Fc();)zd(we)}function zd(n){var t=Ad(n.alternate,n,Xe);n.memoizedProps=n.pendingProps,t===null?Td(n):we=t,vs.current=null}function Td(n){var t=n;do{var r=t.alternate;if(n=t.return,(t.flags&32768)===0){if(r=su(r,t,Xe),r!==null){we=r;return}}else{if(r=ou(r,t),r!==null){r.flags&=32767,we=r;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ne=6,we=null;return}}if(t=t.sibling,t!==null){we=t;return}we=t=n}while(t!==null);Ne===0&&(Ne=5)}function ct(n,t,r){var i=ie,a=rn.transition;try{rn.transition=null,ie=1,fu(n,t,r,i)}finally{rn.transition=a,ie=i}return null}function fu(n,t,r,i){do Dt();while(Wn!==null);if((X&6)!==0)throw Error(o(327));r=n.finishedWork;var a=n.finishedLanes;if(r===null)return null;if(n.finishedWork=null,n.finishedLanes=0,r===n.current)throw Error(o(177));n.callbackNode=null,n.callbackPriority=0;var s=r.lanes|r.childLanes;if(Qc(n,s),n===Se&&(we=Se=null,Ie=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Ei||(Ei=!0,Dd(Tr,function(){return Dt(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=rn.transition,rn.transition=null;var l=ie;ie=1;var p=X;X|=4,vs.current=null,du(n,r),Nd(r,n),_p(Ca),Or=!!Sa,Ca=Sa=null,n.current=r,cu(r),Oc(),X=p,ie=l,rn.transition=s}else n.current=r;if(Ei&&(Ei=!1,Wn=n,Si=a),s=n.pendingLanes,s===0&&($n=null),Hc(r.stateNode),$e(n,ye()),t!==null)for(i=n.onRecoverableError,r=0;r<t.length;r++)a=t[r],i(a.value,{componentStack:a.stack,digest:a.digest});if(ki)throw ki=!1,n=ws,ws=null,n;return(Si&1)!==0&&n.tag!==0&&Dt(),s=n.pendingLanes,(s&1)!==0?n===js?Nr++:(Nr=0,js=n):Nr=0,On(),null}function Dt(){if(Wn!==null){var n=wo(Si),t=rn.transition,r=ie;try{if(rn.transition=null,ie=16>n?16:n,Wn===null)var i=!1;else{if(n=Wn,Wn=null,Si=0,(X&6)!==0)throw Error(o(331));var a=X;for(X|=4,L=n.current;L!==null;){var s=L,l=s.child;if((L.flags&16)!==0){var p=s.deletions;if(p!==null){for(var h=0;h<p.length;h++){var y=p[h];for(L=y;L!==null;){var N=L;switch(N.tag){case 0:case 11:case 15:br(8,N,s)}var k=N.child;if(k!==null)k.return=N,L=k;else for(;L!==null;){N=L;var w=N.sibling,z=N.return;if(vd(N),N===y){L=null;break}if(w!==null){w.return=z,L=w;break}L=z}}}var A=s.alternate;if(A!==null){var D=A.child;if(D!==null){A.child=null;do{var be=D.sibling;D.sibling=null,D=be}while(D!==null)}}L=s}}if((s.subtreeFlags&2064)!==0&&l!==null)l.return=s,L=l;else e:for(;L!==null;){if(s=L,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:br(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,L=g;break e}L=s.return}}var f=n.current;for(L=f;L!==null;){l=L;var v=l.child;if((l.subtreeFlags&2064)!==0&&v!==null)v.return=l,L=v;else e:for(l=f;L!==null;){if(p=L,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:wi(9,p)}}catch(M){ge(p,p.return,M)}if(p===l){L=null;break e}var C=p.sibling;if(C!==null){C.return=p.return,L=C;break e}L=p.return}}if(X=a,On(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Lr,n)}catch{}i=!0}return i}finally{ie=r,rn.transition=t}}return!1}function Ld(n,t,r){t=Tt(r,t),t=Jl(n,t,1),n=qn(n,t,1),t=De(),n!==null&&(Vt(n,1,t),$e(n,t))}function ge(n,t,r){if(n.tag===3)Ld(n,n,r);else for(;t!==null;){if(t.tag===3){Ld(t,n,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($n===null||!$n.has(i))){n=Tt(r,n),n=Zl(t,n,1),t=qn(t,n,1),n=De(),t!==null&&(Vt(t,1,n),$e(t,n));break}}t=t.return}}function xu(n,t,r){var i=n.pingCache;i!==null&&i.delete(t),t=De(),n.pingedLanes|=n.suspendedLanes&r,Se===n&&(Ie&r)===r&&(Ne===4||Ne===3&&(Ie&130023424)===Ie&&500>ye()-bs?dt(n,0):ys|=r),$e(n,t)}function _d(n,t){t===0&&((n.mode&1)===0?t=1:(t=Ar,Ar<<=1,(Ar&130023424)===0&&(Ar=4194304)));var r=De();n=Sn(n,t),n!==null&&(Vt(n,t,r),$e(n,r))}function gu(n){var t=n.memoizedState,r=0;t!==null&&(r=t.retryLane),_d(n,r)}function vu(n,t){var r=0;switch(n.tag){case 13:var i=n.stateNode,a=n.memoizedState;a!==null&&(r=a.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(t),_d(n,r)}var Ad;Ad=function(n,t,r){if(n!==null)if(n.memoizedProps!==t.pendingProps||Oe.current)qe=!0;else{if((n.lanes&r)===0&&(t.flags&128)===0)return qe=!1,au(n,t,r);qe=(n.flags&131072)!==0}else qe=!1,ue&&(t.flags&1048576)!==0&&fl(t,ii,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;yi(n,t),n=t.pendingProps;var a=Et(t,Be.current);Rt(t,r),a=Xa(null,t,i,n,a,r);var s=Ja();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(i)?(s=!0,ni(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,$a(t),a.updater=gi,t.stateNode=a,a._reactInternals=t,is(t,i,n,r),t=ls(null,t,i,!0,s,r)):(t.tag=0,ue&&s&&La(t),Ae(null,t,a,r),t=t.child),t;case 16:i=t.elementType;e:{switch(yi(n,t),n=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=bu(i),n=cn(i,n),a){case 0:t=os(null,t,i,n,r);break e;case 1:t=ld(null,t,i,n,r);break e;case 11:t=rd(null,t,i,n,r);break e;case 14:t=id(null,t,i,cn(i.type,n),r);break e}throw Error(o(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:cn(i,a),os(n,t,i,a,r);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:cn(i,a),ld(n,t,i,a,r);case 3:e:{if(dd(t),n===null)throw Error(o(387));i=t.pendingProps,s=t.memoizedState,a=s.element,kl(n,t),ci(t,i,null,r);var l=t.memoizedState;if(i=l.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=Tt(Error(o(423)),t),t=cd(n,t,i,r,a);break e}else if(i!==a){a=Tt(Error(o(424)),t),t=cd(n,t,i,r,a);break e}else for(Ke=Dn(t.stateNode.containerInfo.firstChild),Qe=t,ue=!0,dn=null,r=jl(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Pt(),i===a){t=Pn(n,t,r);break e}Ae(n,t,i,r)}t=t.child}return t;case 5:return Cl(t),n===null&&Da(t),i=t.type,a=t.pendingProps,s=n!==null?n.memoizedProps:null,l=a.children,Pa(i,a)?l=null:s!==null&&Pa(i,s)&&(t.flags|=32),od(n,t),Ae(n,t,l,r),t.child;case 6:return n===null&&Da(t),null;case 13:return pd(n,t,r);case 4:return Wa(t,t.stateNode.containerInfo),i=t.pendingProps,n===null?t.child=It(t,null,i,r):Ae(n,t,i,r),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:cn(i,a),rd(n,t,i,a,r);case 7:return Ae(n,t,t.pendingProps,r),t.child;case 8:return Ae(n,t,t.pendingProps.children,r),t.child;case 12:return Ae(n,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,s=t.memoizedProps,l=a.value,oe(oi,i._currentValue),i._currentValue=l,s!==null)if(ln(s.value,l)){if(s.children===a.children&&!Oe.current){t=Pn(n,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var p=s.dependencies;if(p!==null){l=s.child;for(var h=p.firstContext;h!==null;){if(h.context===i){if(s.tag===1){h=Cn(-1,r&-r),h.tag=2;var y=s.updateQueue;if(y!==null){y=y.shared;var N=y.pending;N===null?h.next=h:(h.next=N.next,N.next=h),y.pending=h}}s.lanes|=r,h=s.alternate,h!==null&&(h.lanes|=r),qa(s.return,r,t),p.lanes|=r;break}h=h.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(o(341));l.lanes|=r,p=l.alternate,p!==null&&(p.lanes|=r),qa(l,r,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Ae(n,t,a.children,r),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Rt(t,r),a=nn(a),i=i(a),t.flags|=1,Ae(n,t,i,r),t.child;case 14:return i=t.type,a=cn(i,t.pendingProps),a=cn(i.type,a),id(n,t,i,a,r);case 15:return ad(n,t,t.type,t.pendingProps,r);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:cn(i,a),yi(n,t),t.tag=1,Ue(i)?(n=!0,ni(t)):n=!1,Rt(t,r),Kl(t,i,a),is(t,i,a,r),ls(null,t,i,!0,n,r);case 19:return md(n,t,r);case 22:return sd(n,t,r)}throw Error(o(156,t.tag))};function Dd(n,t){return xo(n,t)}function yu(n,t,r,i){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(n,t,r,i){return new yu(n,t,r,i)}function Ps(n){return n=n.prototype,!(!n||!n.isReactComponent)}function bu(n){if(typeof n=="function")return Ps(n)?1:0;if(n!=null){if(n=n.$$typeof,n===hn)return 11;if(n===fn)return 14}return 2}function Yn(n,t){var r=n.alternate;return r===null?(r=an(n.tag,t,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=t,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&14680064,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,t=n.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r}function Bi(n,t,r,i,a,s){var l=2;if(i=n,typeof n=="function")Ps(n)&&(l=1);else if(typeof n=="string")l=5;else e:switch(n){case Me:return pt(r.children,a,s,t);case Je:l=8,a|=8;break;case Bn:return n=an(12,r,t,a|2),n.elementType=Bn,n.lanes=s,n;case Ge:return n=an(13,r,t,a),n.elementType=Ge,n.lanes=s,n;case sn:return n=an(19,r,t,a),n.elementType=sn,n.lanes=s,n;case xe:return Ri(r,a,s,t);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case wn:l=10;break e;case Jn:l=9;break e;case hn:l=11;break e;case fn:l=14;break e;case Fe:l=16,i=null;break e}throw Error(o(130,n==null?n:typeof n,""))}return t=an(l,r,t,a),t.elementType=n,t.type=i,t.lanes=s,t}function pt(n,t,r,i){return n=an(7,n,i,t),n.lanes=r,n}function Ri(n,t,r,i){return n=an(22,n,i,t),n.elementType=xe,n.lanes=r,n.stateNode={isHidden:!1},n}function Is(n,t,r){return n=an(6,n,null,t),n.lanes=r,n}function Bs(n,t,r){return t=an(4,n.children!==null?n.children:[],n.key,t),t.lanes=r,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}function wu(n,t,r,i,a){this.tag=t,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Rs(n,t,r,i,a,s,l,p,h){return n=new wu(n,t,r,p,h),t===1?(t=1,s===!0&&(t|=8)):t=0,s=an(3,null,null,t),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(s),n}function ju(n,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:i==null?null:""+i,children:n,containerInfo:t,implementation:r}}function Md(n){if(!n)return Fn;n=n._reactInternals;e:{if(Zn(n)!==n||n.tag!==1)throw Error(o(170));var t=n;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(n.tag===1){var r=n.type;if(Ue(r))return ul(n,r,t)}return t}function Fd(n,t,r,i,a,s,l,p,h){return n=Rs(r,i,!0,n,a,s,l,p,h),n.context=Md(null),r=n.current,i=De(),a=Gn(r),s=Cn(i,a),s.callback=t??null,qn(r,s,a),n.current.lanes=a,Vt(n,a,i),$e(n,i),n}function zi(n,t,r,i){var a=t.current,s=De(),l=Gn(a);return r=Md(r),t.context===null?t.context=r:t.pendingContext=r,t=Cn(s,l),t.payload={element:n},i=i===void 0?null:i,i!==null&&(t.callback=i),n=qn(a,t,l),n!==null&&(mn(n,a,l,s),di(n,a,l)),l}function Ti(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Od(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<t?r:t}}function zs(n,t){Od(n,t),(n=n.alternate)&&Od(n,t)}function Nu(){return null}var Ud=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ts(n){this._internalRoot=n}Li.prototype.render=Ts.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(o(409));zi(n,t,null,null)},Li.prototype.unmount=Ts.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;lt(function(){zi(null,n,null,null)}),t[jn]=null}};function Li(n){this._internalRoot=n}Li.prototype.unstable_scheduleHydration=function(n){if(n){var t=ko();n={blockedOn:null,target:n,priority:t};for(var r=0;r<Ln.length&&t!==0&&t<Ln[r].priority;r++);Ln.splice(r,0,n),r===0&&Co(n)}};function Ls(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _i(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function qd(){}function ku(n,t,r,i,a){if(a){if(typeof i=="function"){var s=i;i=function(){var y=Ti(l);s.call(y)}}var l=Fd(t,i,n,0,null,!1,!1,"",qd);return n._reactRootContainer=l,n[jn]=l.current,or(n.nodeType===8?n.parentNode:n),lt(),l}for(;a=n.lastChild;)n.removeChild(a);if(typeof i=="function"){var p=i;i=function(){var y=Ti(h);p.call(y)}}var h=Rs(n,0,!1,null,null,!1,!1,"",qd);return n._reactRootContainer=h,n[jn]=h.current,or(n.nodeType===8?n.parentNode:n),lt(function(){zi(t,h,r,i)}),h}function Ai(n,t,r,i,a){var s=r._reactRootContainer;if(s){var l=s;if(typeof a=="function"){var p=a;a=function(){var h=Ti(l);p.call(h)}}zi(t,l,n,a)}else l=ku(r,t,n,a,i);return Ti(l)}jo=function(n){switch(n.tag){case 3:var t=n.stateNode;if(t.current.memoizedState.isDehydrated){var r=Gt(t.pendingLanes);r!==0&&(ia(t,r|1),$e(t,ye()),(X&6)===0&&(At=ye()+500,On()))}break;case 13:lt(function(){var i=Sn(n,1);if(i!==null){var a=De();mn(i,n,1,a)}}),zs(n,1)}},aa=function(n){if(n.tag===13){var t=Sn(n,134217728);if(t!==null){var r=De();mn(t,n,134217728,r)}zs(n,134217728)}},No=function(n){if(n.tag===13){var t=Gn(n),r=Sn(n,t);if(r!==null){var i=De();mn(r,n,t,i)}zs(n,t)}},ko=function(){return ie},Eo=function(n,t){var r=ie;try{return ie=n,t()}finally{ie=r}},Xi=function(n,t,r){switch(t){case"input":if(Hi(n,r),t=r.name,r.type==="radio"&&t!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==n&&i.form===n.form){var a=Zr(i);if(!a)throw Error(o(90));Ys(i),Hi(i,a)}}}break;case"textarea":Zs(n,r);break;case"select":t=r.value,t!=null&&mt(n,!!r.multiple,t,!1)}},lo=Es,co=lt;var Eu={usingClientEntryPoint:!1,Events:[cr,Nt,Zr,so,oo,Es]},kr={findFiberByHostInstance:et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Su={bundleType:kr.bundleType,version:kr.version,rendererPackageName:kr.rendererPackageName,rendererConfig:kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ho(n),n===null?null:n.stateNode},findFiberByHostInstance:kr.findFiberByHostInstance||Nu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Di.isDisabled&&Di.supportsFiber)try{Lr=Di.inject(Su),xn=Di}catch{}}return We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eu,We.createPortal=function(n,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ls(t))throw Error(o(200));return ju(n,t,null,r)},We.createRoot=function(n,t){if(!Ls(n))throw Error(o(299));var r=!1,i="",a=Ud;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Rs(n,1,!1,null,null,r,!1,i,a),n[jn]=t.current,or(n.nodeType===8?n.parentNode:n),new Ts(t)},We.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(o(188)):(n=Object.keys(n).join(","),Error(o(268,n)));return n=ho(t),n=n===null?null:n.stateNode,n},We.flushSync=function(n){return lt(n)},We.hydrate=function(n,t,r){if(!_i(t))throw Error(o(200));return Ai(null,n,t,!0,r)},We.hydrateRoot=function(n,t,r){if(!Ls(n))throw Error(o(405));var i=r!=null&&r.hydratedSources||null,a=!1,s="",l=Ud;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=Fd(t,null,n,1,r??null,a,!1,s,l),n[jn]=t.current,or(n),i)for(n=0;n<i.length;n++)r=i[n],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Li(t)},We.render=function(n,t,r){if(!_i(t))throw Error(o(200));return Ai(null,n,t,!1,r)},We.unmountComponentAtNode=function(n){if(!_i(n))throw Error(o(40));return n._reactRootContainer?(lt(function(){Ai(null,null,n,!1,function(){n._reactRootContainer=null,n[jn]=null})}),!0):!1},We.unstable_batchedUpdates=Es,We.unstable_renderSubtreeIntoContainer=function(n,t,r,i){if(!_i(r))throw Error(o(200));if(n==null||n._reactInternals===void 0)throw Error(o(38));return Ai(n,t,r,!1,i)},We.version="18.3.1-next-f1338f8080-20240426",We}var Kd;function bc(){if(Kd)return Ds.exports;Kd=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(u){console.error(u)}}return d(),Ds.exports=Du(),Ds.exports}var Xd;function Mu(){if(Xd)return Mi;Xd=1;var d=bc();return Mi.createRoot=d.createRoot,Mi.hydrateRoot=d.hydrateRoot,Mi}var Fu=Mu();bc();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sr(){return Sr=Object.assign?Object.assign.bind():function(d){for(var u=1;u<arguments.length;u++){var o=arguments[u];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(d[m]=o[m])}return d},Sr.apply(this,arguments)}var Xn;(function(d){d.Pop="POP",d.Push="PUSH",d.Replace="REPLACE"})(Xn||(Xn={}));const Jd="popstate";function Ou(d){d===void 0&&(d={});function u(m,c){let{pathname:b,search:E,hash:I}=m.location;return Hs("",{pathname:b,search:E,hash:I},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(m,c){return typeof c=="string"?c:jc(c)}return qu(u,o,null,d)}function ke(d,u){if(d===!1||d===null||typeof d>"u")throw new Error(u)}function wc(d,u){if(!d){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Uu(){return Math.random().toString(36).substr(2,8)}function Zd(d,u){return{usr:d.state,key:d.key,idx:u}}function Hs(d,u,o,m){return o===void 0&&(o=null),Sr({pathname:typeof d=="string"?d:d.pathname,search:"",hash:""},typeof u=="string"?Mt(u):u,{state:o,key:u&&u.key||m||Uu()})}function jc(d){let{pathname:u="/",search:o="",hash:m=""}=d;return o&&o!=="?"&&(u+=o.charAt(0)==="?"?o:"?"+o),m&&m!=="#"&&(u+=m.charAt(0)==="#"?m:"#"+m),u}function Mt(d){let u={};if(d){let o=d.indexOf("#");o>=0&&(u.hash=d.substr(o),d=d.substr(0,o));let m=d.indexOf("?");m>=0&&(u.search=d.substr(m),d=d.substr(0,m)),d&&(u.pathname=d)}return u}function qu(d,u,o,m){m===void 0&&(m={});let{window:c=document.defaultView,v5Compat:b=!1}=m,E=c.history,I=Xn.Pop,S=null,O=F();O==null&&(O=0,E.replaceState(Sr({},E.state,{idx:O}),""));function F(){return(E.state||{idx:null}).idx}function P(){I=Xn.Pop;let T=F(),ae=T==null?null:T-O;O=T,S&&S({action:I,location:G.location,delta:ae})}function H(T,ae){I=Xn.Push;let ce=Hs(G.location,T,ae);O=F()+1;let fe=Zd(ce,O),ve=G.createHref(ce);try{E.pushState(fe,"",ve)}catch(Le){if(Le instanceof DOMException&&Le.name==="DataCloneError")throw Le;c.location.assign(ve)}b&&S&&S({action:I,location:G.location,delta:1})}function te(T,ae){I=Xn.Replace;let ce=Hs(G.location,T,ae);O=F();let fe=Zd(ce,O),ve=G.createHref(ce);E.replaceState(fe,"",ve),b&&S&&S({action:I,location:G.location,delta:0})}function ne(T){let ae=c.location.origin!=="null"?c.location.origin:c.location.href,ce=typeof T=="string"?T:jc(T);return ce=ce.replace(/ $/,"%20"),ke(ae,"No window.location.(origin|href) available to create URL for href: "+ce),new URL(ce,ae)}let G={get action(){return I},get location(){return d(c,E)},listen(T){if(S)throw new Error("A history only accepts one active listener");return c.addEventListener(Jd,P),S=T,()=>{c.removeEventListener(Jd,P),S=null}},createHref(T){return u(c,T)},createURL:ne,encodeLocation(T){let ae=ne(T);return{pathname:ae.pathname,search:ae.search,hash:ae.hash}},push:H,replace:te,go(T){return E.go(T)}};return G}var ec;(function(d){d.data="data",d.deferred="deferred",d.redirect="redirect",d.error="error"})(ec||(ec={}));function Hu(d,u,o){return o===void 0&&(o="/"),$u(d,u,o)}function $u(d,u,o,m){let c=typeof u=="string"?Mt(u):u,b=Ec(c.pathname||"/",o);if(b==null)return null;let E=Nc(d);Wu(E);let I=null;for(let S=0;I==null&&S<E.length;++S){let O=rm(b);I=em(E[S],O)}return I}function Nc(d,u,o,m){u===void 0&&(u=[]),o===void 0&&(o=[]),m===void 0&&(m="");let c=(b,E,I)=>{let S={relativePath:I===void 0?b.path||"":I,caseSensitive:b.caseSensitive===!0,childrenIndex:E,route:b};S.relativePath.startsWith("/")&&(ke(S.relativePath.startsWith(m),'Absolute route path "'+S.relativePath+'" nested under path '+('"'+m+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),S.relativePath=S.relativePath.slice(m.length));let O=ut([m,S.relativePath]),F=o.concat(S);b.children&&b.children.length>0&&(ke(b.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+O+'".')),Nc(b.children,u,F,O)),!(b.path==null&&!b.index)&&u.push({path:O,score:Ju(O,b.index),routesMeta:F})};return d.forEach((b,E)=>{var I;if(b.path===""||!((I=b.path)!=null&&I.includes("?")))c(b,E);else for(let S of kc(b.path))c(b,E,S)}),u}function kc(d){let u=d.split("/");if(u.length===0)return[];let[o,...m]=u,c=o.endsWith("?"),b=o.replace(/\?$/,"");if(m.length===0)return c?[b,""]:[b];let E=kc(m.join("/")),I=[];return I.push(...E.map(S=>S===""?b:[b,S].join("/"))),c&&I.push(...E),I.map(S=>d.startsWith("/")&&S===""?"/":S)}function Wu(d){d.sort((u,o)=>u.score!==o.score?o.score-u.score:Zu(u.routesMeta.map(m=>m.childrenIndex),o.routesMeta.map(m=>m.childrenIndex)))}const Gu=/^:[\w-]+$/,Vu=3,Yu=2,Qu=1,Ku=10,Xu=-2,nc=d=>d==="*";function Ju(d,u){let o=d.split("/"),m=o.length;return o.some(nc)&&(m+=Xu),u&&(m+=Yu),o.filter(c=>!nc(c)).reduce((c,b)=>c+(Gu.test(b)?Vu:b===""?Qu:Ku),m)}function Zu(d,u){return d.length===u.length&&d.slice(0,-1).every((m,c)=>m===u[c])?d[d.length-1]-u[u.length-1]:0}function em(d,u,o){let{routesMeta:m}=d,c={},b="/",E=[];for(let I=0;I<m.length;++I){let S=m[I],O=I===m.length-1,F=b==="/"?u:u.slice(b.length)||"/",P=nm({path:S.relativePath,caseSensitive:S.caseSensitive,end:O},F),H=S.route;if(!P)return null;Object.assign(c,P.params),E.push({params:c,pathname:ut([b,P.pathname]),pathnameBase:dm(ut([b,P.pathnameBase])),route:H}),P.pathnameBase!=="/"&&(b=ut([b,P.pathnameBase]))}return E}function nm(d,u){typeof d=="string"&&(d={path:d,caseSensitive:!1,end:!0});let[o,m]=tm(d.path,d.caseSensitive,d.end),c=u.match(o);if(!c)return null;let b=c[0],E=b.replace(/(.)\/+$/,"$1"),I=c.slice(1);return{params:m.reduce((O,F,P)=>{let{paramName:H,isOptional:te}=F;if(H==="*"){let G=I[P]||"";E=b.slice(0,b.length-G.length).replace(/(.)\/+$/,"$1")}const ne=I[P];return te&&!ne?O[H]=void 0:O[H]=(ne||"").replace(/%2F/g,"/"),O},{}),pathname:b,pathnameBase:E,pattern:d}}function tm(d,u,o){u===void 0&&(u=!1),o===void 0&&(o=!0),wc(d==="*"||!d.endsWith("*")||d.endsWith("/*"),'Route path "'+d+'" will be treated as if it were '+('"'+d.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+d.replace(/\*$/,"/*")+'".'));let m=[],c="^"+d.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(E,I,S)=>(m.push({paramName:I,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)"));return d.endsWith("*")?(m.push({paramName:"*"}),c+=d==="*"||d==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":d!==""&&d!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,u?void 0:"i"),m]}function rm(d){try{return d.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return wc(!1,'The URL path "'+d+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+u+").")),d}}function Ec(d,u){if(u==="/")return d;if(!d.toLowerCase().startsWith(u.toLowerCase()))return null;let o=u.endsWith("/")?u.length-1:u.length,m=d.charAt(o);return m&&m!=="/"?null:d.slice(o)||"/"}function im(d,u){u===void 0&&(u="/");let{pathname:o,search:m="",hash:c=""}=typeof d=="string"?Mt(d):d;return{pathname:o?o.startsWith("/")?o:am(o,u):u,search:cm(m),hash:pm(c)}}function am(d,u){let o=u.replace(/\/+$/,"").split("/");return d.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function Os(d,u,o,m){return"Cannot include a '"+d+"' character in a manually specified "+("`to."+u+"` field ["+JSON.stringify(m)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sm(d){return d.filter((u,o)=>o===0||u.route.path&&u.route.path.length>0)}function om(d,u){let o=sm(d);return u?o.map((m,c)=>c===o.length-1?m.pathname:m.pathnameBase):o.map(m=>m.pathnameBase)}function lm(d,u,o,m){m===void 0&&(m=!1);let c;typeof d=="string"?c=Mt(d):(c=Sr({},d),ke(!c.pathname||!c.pathname.includes("?"),Os("?","pathname","search",c)),ke(!c.pathname||!c.pathname.includes("#"),Os("#","pathname","hash",c)),ke(!c.search||!c.search.includes("#"),Os("#","search","hash",c)));let b=d===""||c.pathname==="",E=b?"/":c.pathname,I;if(E==null)I=o;else{let P=u.length-1;if(!m&&E.startsWith("..")){let H=E.split("/");for(;H[0]==="..";)H.shift(),P-=1;c.pathname=H.join("/")}I=P>=0?u[P]:"/"}let S=im(c,I),O=E&&E!=="/"&&E.endsWith("/"),F=(b||E===".")&&o.endsWith("/");return!S.pathname.endsWith("/")&&(O||F)&&(S.pathname+="/"),S}const ut=d=>d.join("/").replace(/\/\/+/g,"/"),dm=d=>d.replace(/\/+$/,"").replace(/^\/*/,"/"),cm=d=>!d||d==="?"?"":d.startsWith("?")?d:"?"+d,pm=d=>!d||d==="#"?"":d.startsWith("#")?d:"#"+d;function um(d){return d!=null&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.internal=="boolean"&&"data"in d}const Sc=["post","put","patch","delete"];new Set(Sc);const mm=["get",...Sc];new Set(mm);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cr(){return Cr=Object.assign?Object.assign.bind():function(d){for(var u=1;u<arguments.length;u++){var o=arguments[u];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(d[m]=o[m])}return d},Cr.apply(this,arguments)}const Gs=R.createContext(null),hm=R.createContext(null),Fi=R.createContext(null),Oi=R.createContext(null),Ft=R.createContext({outlet:null,matches:[],isDataRoute:!1}),Cc=R.createContext(null);function Ui(){return R.useContext(Oi)!=null}function Vs(){return Ui()||ke(!1),R.useContext(Oi).location}function Pc(d){R.useContext(Fi).static||R.useLayoutEffect(d)}function fm(){let{isDataRoute:d}=R.useContext(Ft);return d?Pm():xm()}function xm(){Ui()||ke(!1);let d=R.useContext(Gs),{basename:u,future:o,navigator:m}=R.useContext(Fi),{matches:c}=R.useContext(Ft),{pathname:b}=Vs(),E=JSON.stringify(om(c,o.v7_relativeSplatPath)),I=R.useRef(!1);return Pc(()=>{I.current=!0}),R.useCallback(function(O,F){if(F===void 0&&(F={}),!I.current)return;if(typeof O=="number"){m.go(O);return}let P=lm(O,JSON.parse(E),b,F.relative==="path");d==null&&u!=="/"&&(P.pathname=P.pathname==="/"?u:ut([u,P.pathname])),(F.replace?m.replace:m.push)(P,F.state,F)},[u,m,E,b,d])}function gm(d,u){return vm(d,u)}function vm(d,u,o,m){Ui()||ke(!1);let{navigator:c}=R.useContext(Fi),{matches:b}=R.useContext(Ft),E=b[b.length-1],I=E?E.params:{};E&&E.pathname;let S=E?E.pathnameBase:"/";E&&E.route;let O=Vs(),F;if(u){var P;let T=typeof u=="string"?Mt(u):u;S==="/"||(P=T.pathname)!=null&&P.startsWith(S)||ke(!1),F=T}else F=O;let H=F.pathname||"/",te=H;if(S!=="/"){let T=S.replace(/^\//,"").split("/");te="/"+H.replace(/^\//,"").split("/").slice(T.length).join("/")}let ne=Hu(d,{pathname:te}),G=Nm(ne&&ne.map(T=>Object.assign({},T,{params:Object.assign({},I,T.params),pathname:ut([S,c.encodeLocation?c.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?S:ut([S,c.encodeLocation?c.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),b,o,m);return u&&G?R.createElement(Oi.Provider,{value:{location:Cr({pathname:"/",search:"",hash:"",state:null,key:"default"},F),navigationType:Xn.Pop}},G):G}function ym(){let d=Cm(),u=um(d)?d.status+" "+d.statusText:d instanceof Error?d.message:JSON.stringify(d),o=d instanceof Error?d.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},u),o?R.createElement("pre",{style:c},o):null,null)}const bm=R.createElement(ym,null);class wm extends R.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,o){return o.location!==u.location||o.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:o.error,location:o.location,revalidation:u.revalidation||o.revalidation}}componentDidCatch(u,o){console.error("React Router caught the following error during render",u,o)}render(){return this.state.error!==void 0?R.createElement(Ft.Provider,{value:this.props.routeContext},R.createElement(Cc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jm(d){let{routeContext:u,match:o,children:m}=d,c=R.useContext(Gs);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),R.createElement(Ft.Provider,{value:u},m)}function Nm(d,u,o,m){var c;if(u===void 0&&(u=[]),o===void 0&&(o=null),m===void 0&&(m=null),d==null){var b;if(!o)return null;if(o.errors)d=o.matches;else if((b=m)!=null&&b.v7_partialHydration&&u.length===0&&!o.initialized&&o.matches.length>0)d=o.matches;else return null}let E=d,I=(c=o)==null?void 0:c.errors;if(I!=null){let F=E.findIndex(P=>P.route.id&&(I==null?void 0:I[P.route.id])!==void 0);F>=0||ke(!1),E=E.slice(0,Math.min(E.length,F+1))}let S=!1,O=-1;if(o&&m&&m.v7_partialHydration)for(let F=0;F<E.length;F++){let P=E[F];if((P.route.HydrateFallback||P.route.hydrateFallbackElement)&&(O=F),P.route.id){let{loaderData:H,errors:te}=o,ne=P.route.loader&&H[P.route.id]===void 0&&(!te||te[P.route.id]===void 0);if(P.route.lazy||ne){S=!0,O>=0?E=E.slice(0,O+1):E=[E[0]];break}}}return E.reduceRight((F,P,H)=>{let te,ne=!1,G=null,T=null;o&&(te=I&&P.route.id?I[P.route.id]:void 0,G=P.route.errorElement||bm,S&&(O<0&&H===0?(Im("route-fallback"),ne=!0,T=null):O===H&&(ne=!0,T=P.route.hydrateFallbackElement||null)));let ae=u.concat(E.slice(0,H+1)),ce=()=>{let fe;return te?fe=G:ne?fe=T:P.route.Component?fe=R.createElement(P.route.Component,null):P.route.element?fe=P.route.element:fe=F,R.createElement(jm,{match:P,routeContext:{outlet:F,matches:ae,isDataRoute:o!=null},children:fe})};return o&&(P.route.ErrorBoundary||P.route.errorElement||H===0)?R.createElement(wm,{location:o.location,revalidation:o.revalidation,component:G,error:te,children:ce(),routeContext:{outlet:null,matches:ae,isDataRoute:!0}}):ce()},null)}var Ic=(function(d){return d.UseBlocker="useBlocker",d.UseRevalidator="useRevalidator",d.UseNavigateStable="useNavigate",d})(Ic||{}),Bc=(function(d){return d.UseBlocker="useBlocker",d.UseLoaderData="useLoaderData",d.UseActionData="useActionData",d.UseRouteError="useRouteError",d.UseNavigation="useNavigation",d.UseRouteLoaderData="useRouteLoaderData",d.UseMatches="useMatches",d.UseRevalidator="useRevalidator",d.UseNavigateStable="useNavigate",d.UseRouteId="useRouteId",d})(Bc||{});function km(d){let u=R.useContext(Gs);return u||ke(!1),u}function Em(d){let u=R.useContext(hm);return u||ke(!1),u}function Sm(d){let u=R.useContext(Ft);return u||ke(!1),u}function Rc(d){let u=Sm(),o=u.matches[u.matches.length-1];return o.route.id||ke(!1),o.route.id}function Cm(){var d;let u=R.useContext(Cc),o=Em(),m=Rc();return u!==void 0?u:(d=o.errors)==null?void 0:d[m]}function Pm(){let{router:d}=km(Ic.UseNavigateStable),u=Rc(Bc.UseNavigateStable),o=R.useRef(!1);return Pc(()=>{o.current=!0}),R.useCallback(function(c,b){b===void 0&&(b={}),o.current&&(typeof c=="number"?d.navigate(c):d.navigate(c,Cr({fromRouteId:u},b)))},[d,u])}const tc={};function Im(d,u,o){tc[d]||(tc[d]=!0)}function Bm(d,u){d==null||d.v7_startTransition,d==null||d.v7_relativeSplatPath}function K(d){ke(!1)}function Rm(d){let{basename:u="/",children:o=null,location:m,navigationType:c=Xn.Pop,navigator:b,static:E=!1,future:I}=d;Ui()&&ke(!1);let S=u.replace(/^\/*/,"/"),O=R.useMemo(()=>({basename:S,navigator:b,static:E,future:Cr({v7_relativeSplatPath:!1},I)}),[S,I,b,E]);typeof m=="string"&&(m=Mt(m));let{pathname:F="/",search:P="",hash:H="",state:te=null,key:ne="default"}=m,G=R.useMemo(()=>{let T=Ec(F,S);return T==null?null:{location:{pathname:T,search:P,hash:H,state:te,key:ne},navigationType:c}},[S,F,P,H,te,ne,c]);return G==null?null:R.createElement(Fi.Provider,{value:O},R.createElement(Oi.Provider,{children:o,value:G}))}function zm(d){let{children:u,location:o}=d;return gm($s(u),o)}new Promise(()=>{});function $s(d,u){u===void 0&&(u=[]);let o=[];return R.Children.forEach(d,(m,c)=>{if(!R.isValidElement(m))return;let b=[...u,c];if(m.type===R.Fragment){o.push.apply(o,$s(m.props.children,b));return}m.type!==K&&ke(!1),!m.props.index||!m.props.children||ke(!1);let E={id:m.props.id||b.join("-"),caseSensitive:m.props.caseSensitive,element:m.props.element,Component:m.props.Component,index:m.props.index,path:m.props.path,loader:m.props.loader,action:m.props.action,errorElement:m.props.errorElement,ErrorBoundary:m.props.ErrorBoundary,hasErrorBoundary:m.props.ErrorBoundary!=null||m.props.errorElement!=null,shouldRevalidate:m.props.shouldRevalidate,handle:m.props.handle,lazy:m.props.lazy};m.props.children&&(E.children=$s(m.props.children,b)),o.push(E)}),o}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Tm="6";try{window.__reactRouterVersion=Tm}catch{}const Lm="startTransition",rc=Lu[Lm];function _m(d){let{basename:u,children:o,future:m,window:c}=d,b=R.useRef();b.current==null&&(b.current=Ou({window:c,v5Compat:!0}));let E=b.current,[I,S]=R.useState({action:E.action,location:E.location}),{v7_startTransition:O}=m||{},F=R.useCallback(P=>{O&&rc?rc(()=>S(P)):S(P)},[S,O]);return R.useLayoutEffect(()=>E.listen(F),[E,F]),R.useEffect(()=>Bm(m),[m]),R.createElement(Rm,{basename:u,children:o,location:I.location,navigationType:I.action,navigator:E,future:m})}var ic;(function(d){d.UseScrollRestoration="useScrollRestoration",d.UseSubmit="useSubmit",d.UseSubmitFetcher="useSubmitFetcher",d.UseFetcher="useFetcher",d.useViewTransitionState="useViewTransitionState"})(ic||(ic={}));var ac;(function(d){d.UseFetcher="useFetcher",d.UseFetchers="useFetchers",d.UseScrollRestoration="useScrollRestoration"})(ac||(ac={}));const Am="Emergency Assistance",Dm=`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
      }

      body {
        background: #f7f8fa;
      }

      .hero {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 60px;
        padding: 80px 8%;
      }

      .hero-text {
        flex: 1;
      }

      .tag {
        color: #ff6b00;
        font-weight: 600;
      }

      .hero-text h1 {
        font-size: 60px;
        color: #0d2257;
        margin: 20px 0;
      }

      .hero-text p {
        line-height: 1.8;
        color: #555;
      }

      .hero-btn {
        display: inline-block;
        margin-top: 25px;
        padding: 14px 30px;
        background: #ff6b00;
        color: white;
        text-decoration: none;
        border-radius: 30px;
      }

      .hero-image {
        flex: 1;
      }

      .hero-image img {
        width: 100%;
        border-radius: 25px;
      }

      .emergency-section {
        padding: 50px 8%;
      }

      .emergency-card {
        display: flex;
        align-items: center;
        gap: 60px;
        margin-bottom: 100px;
      }

      .reverse {
        flex-direction: row-reverse;
      }

      .emergency-image {
        flex: 1;
      }

      .emergency-image img {
        width: 100%;
        border-radius: 25px;
      }

      .emergency-content {
        flex: 1;
      }

      .small-title {
        color: #ff6b00;
        font-weight: 600;
      }

      .emergency-content h2 {
        font-size: 50px;
        margin: 15px 0;
        color: #0d2257;
      }

      .emergency-content p {
        line-height: 1.8;
        margin-bottom: 20px;
      }

      .emergency-content ul {
        margin-left: 20px;
        margin-bottom: 20px;
      }

      .emergency-content li {
        margin-bottom: 10px;
      }

      .video-btn {
        display: inline-block;
        padding: 12px 25px;
        background: #0d2257;
        color: white;
        text-decoration: none;
        border-radius: 30px;
      }

      .contact-emergency {
        padding: 80px 8%;
        text-align: center;
        background: white;
      }

      .contact-emergency h2 {
        font-size: 45px;
        margin-bottom: 50px;
      }

      .numbers {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 30px;
      }

      .number-card {
        background: #f3f5f8;
        padding: 40px;
        border-radius: 20px;
      }

      .number-card h3 {
        margin-top: 15px;
        font-size: 30px;
        color: #0d2257;
      }

      @media (max-width: 992px) {
        .hero {
          flex-direction: column;
        }

        .hero-text h1 {
          font-size: 40px;
        }

        .emergency-card,
        .reverse {
          flex-direction: column;
        }

        .emergency-content h2 {
          font-size: 35px;
        }
      }
    `,Mm=["/legacy/api.js",`
      renderBackButton(16);
    `];function sc(){return R.useEffect(()=>{document.title=Am;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=Dm,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of Mm)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mediwell-page-root",children:[e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-text",children:[e.jsx("span",{className:"tag",children:"// EMERGENCY ASSISTANCE //"}),e.jsx("h1",{children:"Know What To Do During A Medical Emergency"}),e.jsx("p",{children:"Quick guidance can save lives. Learn the immediate steps to take during common medical emergencies and access professional help quickly."}),e.jsx("a",{href:"#guides",className:"hero-btn",children:" Emergency Guides → "})]}),e.jsx("div",{className:"hero-image",children:e.jsx("img",{src:"Image/emergency img.webp",alt:"Emergency"})})]}),e.jsxs("section",{id:"guides",className:"emergency-section",children:[e.jsxs("div",{className:"emergency-card",children:[e.jsx("div",{className:"emergency-image",children:e.jsx("img",{src:"Image/heart atack img.webp",alt:"Heart attack"})}),e.jsxs("div",{className:"emergency-content",children:[e.jsx("span",{className:"small-title",children:" // HEART ATTACK // "}),e.jsx("h2",{children:"Heart Attack Emergency"}),e.jsx("p",{children:"Symptoms include chest pain, breathing difficulty, sweating and pain in the left arm."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Call Ambulance Immediately"}),e.jsx("li",{children:"Keep Patient Calm"}),e.jsx("li",{children:"Loosen Tight Clothing"}),e.jsx("li",{children:"Give Aspirin If Recommended"})]}),e.jsx("a",{href:"https://www.youtube.com/results?search_query=heart+attack+first+aid",target:"_blank",className:"video-btn",children:"▶ Watch Video"})]})]}),e.jsxs("div",{className:"emergency-card reverse",children:[e.jsx("div",{className:"emergency-image",children:e.jsx("img",{src:"Image/stroke img.jpg",alt:"Stroke"})}),e.jsxs("div",{className:"emergency-content",children:[e.jsx("span",{className:"small-title",children:" // STROKE // "}),e.jsx("h2",{children:"Stroke Emergency"}),e.jsx("p",{children:"Recognize FAST: Face drooping, Arm weakness, Speech difficulty, Time to call help."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Call Emergency Services"}),e.jsx("li",{children:"Note Symptom Start Time"}),e.jsx("li",{children:"Keep Patient Comfortable"}),e.jsx("li",{children:"Do Not Give Food"})]}),e.jsx("a",{href:"https://www.youtube.com/results?search_query=stroke+first+aid",target:"_blank",className:"video-btn",children:"▶ Watch Video"})]})]}),e.jsxs("div",{className:"emergency-card",children:[e.jsx("div",{className:"emergency-image",children:e.jsx("img",{src:"Image/burn img.webp",alt:"Burn"})}),e.jsxs("div",{className:"emergency-content",children:[e.jsx("span",{className:"small-title",children:" // BURNS // "}),e.jsx("h2",{children:"Burn Injury"}),e.jsx("p",{children:"Immediate care reduces damage and complications."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Cool Burn With Water"}),e.jsx("li",{children:"Do Not Apply Ice"}),e.jsx("li",{children:"Cover With Clean Cloth"}),e.jsx("li",{children:"Seek Medical Help"})]}),e.jsx("a",{href:"https://www.youtube.com/results?search_query=burn+first+aid",target:"_blank",className:"video-btn",children:"▶ Watch Video"})]})]}),e.jsxs("div",{className:"emergency-card reverse",children:[e.jsx("div",{className:"emergency-image",children:e.jsx("img",{src:"Image/bleeding img.webp",alt:""})}),e.jsxs("div",{className:"emergency-content",children:[e.jsx("span",{className:"small-title",children:" // BLEEDING // "}),e.jsx("h2",{children:"Severe Bleeding"}),e.jsx("p",{children:"Heavy bleeding can become life threatening quickly."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Apply Firm Pressure"}),e.jsx("li",{children:"Elevate Wound If Possible"}),e.jsx("li",{children:"Use Clean Bandage"}),e.jsx("li",{children:"Call Ambulance"})]}),e.jsx("a",{href:"https://www.youtube.com/results?search_query=bleeding+first+aid",target:"_blank",className:"video-btn",children:"▶ Watch Video"})]})]})]}),e.jsx("section",{className:"emergency-section",children:e.jsx("div",{className:"emergency-block",children:e.jsxs("div",{className:"emergency-content",children:[e.jsx("span",{className:"small-title",children:" // CPR // "}),e.jsx("h2",{children:"Cardiopulmonary Resuscitation (CPR)"}),e.jsx("p",{children:"Use CPR on an adult who is unresponsive and not breathing normally. Call for emergency help (or have someone else call) before or as soon as you start."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Check responsiveness - tap and shout, check for normal breathing"}),e.jsx("li",{children:"Call for emergency help immediately"}),e.jsx("li",{children:"Place the person on their back on a firm, flat surface"}),e.jsx("li",{children:"Kneel beside them, place the heel of one hand on the center of the chest, other hand on top"}),e.jsx("li",{children:"Push hard and fast - about 5-6 cm deep, at 100-120 compressions per minute"}),e.jsx("li",{children:"Let the chest fully rise between compressions"}),e.jsx("li",{children:"Continue until help arrives, an AED is available, or the person starts breathing"})]}),e.jsx("p",{style:{fontSize:"13px",color:"#888",marginTop:"8px"},children:"This is general guidance, not medical training - a certified first-aid/CPR course is the best way to learn this properly."}),e.jsx("a",{href:"https://www.youtube.com/results?search_query=how+to+do+cpr",target:"_blank",className:"video-btn",children:"▶ Watch Video"})]})})}),e.jsxs("section",{className:"contact-emergency",children:[e.jsx("h2",{children:"Emergency Contact Numbers"}),e.jsxs("div",{className:"numbers",children:[e.jsxs("div",{className:"number-card",children:["🚑 Ambulance",e.jsx("h3",{children:"108"})]}),e.jsxs("div",{className:"number-card",children:["👮 Police",e.jsx("h3",{children:"100"})]}),e.jsxs("div",{className:"number-card",children:["🔥 Fire Service",e.jsx("h3",{children:"101"})]}),e.jsxs("div",{className:"number-card",children:["🏥 Hospital",e.jsx("h3",{children:"+91 9876543210"})]})]})]})]})})}const Fm="Contact Us",Om=`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
      }

      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        background:
          radial-gradient(
            circle at left,
            rgba(190, 255, 180, 0.35),
            transparent 35%
          ),
          radial-gradient(
            circle at right,
            rgba(180, 200, 255, 0.35),
            transparent 35%
          ),
          #f5f7fa;
      }

      .contact-wrapper {
        width: 100%;
        min-height: 100vh; /* Full screen height */
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px;
      }

      .contact-container {
        width: 100%;
        max-width: 1100px;
        background: #fff;
        border-radius: 30px;
        padding: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      }

      /* LEFT SIDE */

      .contact-left h1 {
        font-size: 48px;
        margin-bottom: 15px;
        color: #111;
      }

      .contact-left p {
        color: #555;
        line-height: 1.7;
        margin-bottom: 30px;
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      .info-card {
        border: 1px solid #e5e5e5;
        border-radius: 18px;
        padding: 25px;
        transition: 0.3s;
      }

      .info-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
      }

      .icon-box {
        width: 45px;
        height: 45px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 18px;
        font-size: 18px;
      }

      .blue {
        background: #eef4ff;
        color: #4d7cff;
      }

      .purple {
        background: #f2eaff;
        color: #9b6dff;
      }

      .lightblue {
        background: #edf5ff;
        color: #5d8dff;
      }

      .orange {
        background: #fff0e7;
        color: #ff8b47;
      }

      .info-card h3 {
        margin-bottom: 10px;
        color: #111;
      }

      .info-card p,
      .info-card a {
        color: #444;
        text-decoration: none;
        font-size: 15px;
      }

      /* RIGHT SIDE */

      .contact-form {
        background: #fafafa;
        padding: 25px;
        border-radius: 20px;
      }

      .form-group {
        margin-bottom: 22px;
      }

      .form-group label {
        display: block;
        margin-bottom: 10px;
        font-size: 17px;
        font-weight: 600;
        color: #333;
      }

      .form-control {
        width: 100%;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 10px;
        font-size: 16px;
        outline: none;
      }

      .form-control:focus {
        border-color: #5b6df6;
      }

      textarea.form-control {
        resize: none;
        height: 140px;
      }

      .submit-btn {
        width: 100%;
        padding: 16px;
        border: none;
        border-radius: 12px;
        background: linear-gradient(to right, #5d6ef5, #5a7cf5);
        color: white;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.3s;
      }

      .submit-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(93, 110, 245, 0.3);
      }

      /* Responsive */

      @media (max-width: 992px) {
        .contact-container {
          grid-template-columns: 1fr;
        }

        .contact-left h1 {
          font-size: 40px;
        }
      }

      @media (max-width: 768px) {
        .contact-wrapper {
          padding: 20px;
        }

        .contact-container {
          padding: 25px;
        }

        .info-grid {
          grid-template-columns: 1fr;
        }

        .contact-left h1 {
          font-size: 34px;
        }
      }

      @media (max-width: 480px) {
        .contact-left h1 {
          font-size: 28px;
        }

        .form-group label {
          font-size: 15px;
        }
      }
    `,Um=["/legacy/api.js",`
      renderBackButton(16);

      document.getElementById("contactSubmitBtn").addEventListener("click", async () => {
        const btn = document.getElementById("contactSubmitBtn");
        const fields = {
          fullName: document.getElementById("contactName").value.trim(),
          email: document.getElementById("contactEmail").value.trim(),
          phone: document.getElementById("contactPhone").value.trim(),
          message: document.getElementById("contactMessage").value.trim(),
        };

        if (!fields.fullName || !fields.email || !fields.message) {
          alert("Please fill in your name, email, and message before submitting.");
          return;
        }

        btn.disabled = true;
        btn.textContent = "Sending…";

        try {
          const result = await submitContactForm(fields);
          alert(
            "Thank you, " + fields.fullName + "! " + result.message
          );
          document.getElementById("contactName").value = "";
          document.getElementById("contactEmail").value = "";
          document.getElementById("contactPhone").value = "";
          document.getElementById("contactMessage").value = "";
        } catch (err) {
          alert("Something went wrong: " + err.message);
        } finally {
          btn.disabled = false;
          btn.textContent = "Submit";
        }
      });
    `];function oc(){return R.useEffect(()=>{document.title=Fm;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=Om,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of Um)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"mediwell-page-root",children:e.jsx("div",{className:"contact-wrapper",children:e.jsxs("div",{className:"contact-container",children:[e.jsxs("div",{className:"contact-left",children:[e.jsx("h1",{children:"Contact Us"}),e.jsx("p",{children:"We'll show you self-help options first. Additional help is available if you need it, including live chat with our specialist."}),e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-card",children:[e.jsx("div",{className:"icon-box blue",children:e.jsx("i",{className:"fa-solid fa-file-lines"})}),e.jsx("h3",{children:"Documentation"}),e.jsx("a",{href:"#",children:"mediwellhealthcare.com/docs"})]}),e.jsxs("div",{className:"info-card",children:[e.jsx("div",{className:"icon-box purple",children:e.jsx("i",{className:"fa-solid fa-envelope"})}),e.jsx("h3",{children:"Our Email"}),e.jsx("p",{children:"support@mediwellhealthcare.com"})]}),e.jsxs("div",{className:"info-card",children:[e.jsx("div",{className:"icon-box lightblue",children:e.jsx("i",{className:"fa-solid fa-phone"})}),e.jsx("h3",{children:"Phone"}),e.jsx("p",{children:"+91 98765 43210"})]}),e.jsxs("div",{className:"info-card",children:[e.jsx("div",{className:"icon-box orange",children:e.jsx("i",{className:"fa-solid fa-location-dot"})}),e.jsx("h3",{children:"Visit Us"}),e.jsx("p",{children:"Bokaro Steel City, Jharkhand, India"})]})]})]}),e.jsxs("div",{className:"contact-form",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Full Name"}),e.jsx("input",{type:"text",className:"form-control",id:"contactName",placeholder:"Full Name"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Email Address"}),e.jsx("input",{type:"email",className:"form-control",id:"contactEmail",placeholder:"Enter your email address"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Phone Number (optional)"}),e.jsx("input",{type:"tel",className:"form-control",id:"contactPhone",placeholder:"Enter your phone number"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"About your inquiry"}),e.jsx("textarea",{className:"form-control",id:"contactMessage",placeholder:"Enter your message"})]}),e.jsx("button",{className:"submit-btn",id:"contactSubmitBtn",children:"Submit"})]})]})})})})}const qm="MediWell Health Care — Doctor Registration",Hm=`
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@500;600&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap");

      /* @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@500;600&display=swap"); */

      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      :root {
        --teal: #0f766e;
        --teal-lt: #ccfbf1;
        --teal-dk: #0d5c56;
        --rose: #e11d48;
        --slate-900: #0f172a;
        --slate-700: #334155;
        --slate-400: #94a3b8;
        --slate-200: #e2e8f0;
        --slate-50: #f8fafc;
        --white: #ffffff;
      }

      body {
        font-family: "Inter", sans-serif;
        background: linear-gradient(
          135deg,
          #eef9f8 0%,
          #f0f9ff 50%,
          #fff7ed 100%
        );
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      /* ── NAV ── */
      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 48px;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--slate-200);
        position: sticky;
        top: 0;
        z-index: 100;
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
      }
      .logo-icon {
        width: 36px;
        height: 36px;
        background: var(--teal);
        border-radius: 10px;
        display: grid;
        place-items: center;
      }
      .logo-icon svg {
        width: 20px;
        height: 20px;
        fill: white;
      }
      .logo-text {
        font-family: "Lora", serif;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--slate-900);
      }
      .nav-link {
        font-size: 0.875rem;
        color: var(--slate-700);
      }
      .nav-link a {
        color: var(--teal);
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
      }
      .nav-link a:hover {
        text-decoration: underline;
      }

      /* ── PAGE WRAPPER ── */
      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
      }

      .page-header {
        text-align: center;
        margin-bottom: 36px;
      }
      .page-header h1 {
        font-family: "Lora", serif;
        font-size: 2rem;
        font-weight: 600;
        color: var(--slate-900);
      }
      .page-header p {
        margin-top: 6px;
        font-size: 0.95rem;
        color: var(--slate-400);
      }

      /* ── STEPPER ── */
      .stepper {
        display: flex;
        align-items: center;
        gap: 0;
        margin-bottom: 40px;
      }
      .step {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--slate-400);
        cursor: default;
      }
      .step.active {
        color: var(--teal);
      }
      .step.complete {
        color: var(--teal);
      }

      .step-num {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 2px solid var(--slate-200);
        display: grid;
        place-items: center;
        font-weight: 600;
        font-size: 0.875rem;
        background: var(--white);
        transition: all 0.3s;
      }
      .step.active .step-num {
        border-color: var(--teal);
        color: var(--teal);
      }
      .step.complete .step-num {
        border-color: var(--teal);
        background: var(--teal);
        color: white;
      }

      .step-line {
        width: 80px;
        height: 2px;
        background: var(--slate-200);
        margin: 0 4px;
        transition: background 0.3s;
      }
      .step-line.done {
        background: var(--teal);
      }

      /* ── CARD ── */
      .card {
        background: white;
        border-radius: 20px;
        box-shadow:
          0 4px 24px rgba(15, 118, 110, 0.08),
          0 1px 4px rgba(0, 0, 0, 0.04);
        padding: 40px 48px;
        width: 100%;
        max-width: 780px;
      }

      /* ── FORM GRID ── */
      .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 22px 28px;
      }
      .col-span-2 {
        grid-column: span 2;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .field label {
        font-size: 0.8125rem;
        font-weight: 500;
        color: var(--slate-700);
      }
      .field label .req {
        color: var(--rose);
        margin-left: 2px;
      }

      .field input,
      .field select,
      .field textarea {
        width: 100%;
        padding: 10px 14px;
        border: 1.5px solid var(--slate-200);
        border-radius: 10px;
        font-size: 0.9rem;
        font-family: inherit;
        color: var(--slate-900);
        background: var(--slate-50);
        outline: none;
        transition:
          border-color 0.2s,
          box-shadow 0.2s;
        appearance: none;
      }
      .field input:focus,
      .field select:focus,
      .field textarea:focus {
        border-color: var(--teal);
        background: white;
        box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.12);
      }
      .field input.error,
      .field select.error {
        border-color: var(--rose);
      }
      .field .err-msg {
        font-size: 0.75rem;
        color: var(--rose);
        margin-top: 2px;
        display: none;
      }
      .field.has-error .err-msg {
        display: block;
      }
      .field.has-error input,
      .field.has-error select {
        border-color: var(--rose);
      }

      .field .input-wrap {
        position: relative;
      }
      .field .input-wrap input {
        padding-right: 40px;
      }
      .field .input-wrap .icon {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--slate-400);
        pointer-events: none;
      }

      select {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 12px center;
        padding-right: 36px;
      }

      /* ── SECTION LABEL ── */
      .section-label {
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--teal);
        border-bottom: 1px solid var(--slate-200);
        padding-bottom: 8px;
        margin-bottom: 20px;
      }

      /* ── RADIO & CHECKBOX ── */
      .radio-group,
      .check-group {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      .radio-option,
      .check-option {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.875rem;
        color: var(--slate-700);
        cursor: pointer;
      }
      .radio-option input[type="radio"],
      .check-option input[type="checkbox"] {
        display: none;
      }
      .radio-option .rb,
      .check-option .cb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid var(--slate-200);
        background: var(--slate-50);
        display: grid;
        place-items: center;
        flex-shrink: 0;
        transition: all 0.2s;
      }
      .check-option .cb {
        border-radius: 5px;
      }
      .radio-option input:checked ~ .rb {
        border-color: var(--teal);
      }
      .radio-option input:checked ~ .rb::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--teal);
      }
      .check-option input:checked ~ .cb {
        border-color: var(--teal);
        background: var(--teal);
      }
      .check-option input:checked ~ .cb::after {
        content: "";
        width: 10px;
        height: 7px;
        border-left: 2px solid white;
        border-bottom: 2px solid white;
        transform: rotate(-45deg) translateY(-1px);
      }

      /* ── STEP PANELS ── */
      .step-panel {
        display: none;
      }
      .step-panel.active {
        display: block;
      }

      /* ── PRICING CARD ── */
      .pricing-box {
        background: var(--slate-50);
        border: 1.5px solid var(--slate-200);
        border-radius: 14px;
        padding: 24px 28px;
        margin-bottom: 28px;
      }
      .pricing-box h3 {
        font-family: "Lora", serif;
        font-size: 1.1rem;
        color: var(--slate-900);
        margin-bottom: 4px;
      }
      .pricing-box .sub {
        font-size: 0.8rem;
        color: var(--slate-400);
        margin-bottom: 18px;
      }
      .pricing-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: var(--slate-700);
        padding: 10px 0;
        border-bottom: 1px dashed var(--slate-200);
      }
      .pricing-row.total {
        border-bottom: none;
        font-weight: 700;
        font-size: 1rem;
        color: var(--slate-900);
        padding-top: 14px;
      }
      .pricing-row.total .price-val {
        color: var(--teal);
      }

      /* ── SUBSCRIPTION ── */
      .subscribe-wrap {
        margin-bottom: 28px;
      }
      .subscribe-wrap p {
        font-size: 0.875rem;
        color: var(--slate-700);
        margin-bottom: 10px;
        font-weight: 500;
      }
      .subscribe-wrap .note {
        font-size: 0.75rem;
        color: var(--slate-400);
        margin-top: 8px;
        line-height: 1.5;
      }

      /* ── ACTIONS ── */
      .actions {
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-top: 32px;
      }
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 32px;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        font-family: inherit;
        cursor: pointer;
        border: none;
        transition: all 0.2s;
        text-decoration: none;
      }
      .btn-primary {
        background: var(--teal);
        color: white;
      }
      .btn-primary:hover {
        background: var(--teal-dk);
        transform: translateY(-1px);
        box-shadow: 0 4px 14px rgba(15, 118, 110, 0.35);
      }
      .btn-outline {
        background: transparent;
        color: var(--teal);
        border: 1.5px solid var(--teal);
      }
      .btn-outline:hover {
        background: var(--teal-lt);
      }

      /* ── SUCCESS ── */
      #step-success {
        text-align: center;
        padding: 20px 0;
      }
      .success-icon {
        width: 72px;
        height: 72px;
        background: var(--teal-lt);
        border-radius: 50%;
        display: grid;
        place-items: center;
        margin: 0 auto 20px;
      }
      .success-icon svg {
        width: 36px;
        height: 36px;
        stroke: var(--teal);
      }
      #step-success h2 {
        font-family: "Lora", serif;
        font-size: 1.6rem;
        color: var(--slate-900);
        margin-bottom: 8px;
      }
      #step-success p {
        font-size: 0.9rem;
        color: var(--slate-400);
      }

      /* ── PAGE VIEWS ── */
      .page-view {
        display: none;
        flex-direction: column;
        align-items: center;
        padding: 40px 16px 60px;
        flex: 1;
      }
      .page-view.active {
        display: flex;
      }

      /* ── SIGN IN CARD ── */
      .signin-card {
        background: white;
        border-radius: 20px;
        box-shadow:
          0 4px 24px rgba(15, 118, 110, 0.08),
          0 1px 4px rgba(0, 0, 0, 0.04);
        padding: 44px 48px;
        width: 100%;
        max-width: 460px;
      }
      .signin-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 28px;
      }
      .signin-logo .logo-icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
      }
      .signin-logo .logo-icon svg {
        width: 24px;
        height: 24px;
      }
      .signin-logo span {
        font-family: "Lora", serif;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--slate-900);
      }

      .signin-title {
        text-align: center;
        margin-bottom: 30px;
      }
      .signin-title h2 {
        font-family: "Lora", serif;
        font-size: 1.6rem;
        color: var(--slate-900);
        margin-bottom: 6px;
      }
      .signin-title p {
        font-size: 0.875rem;
        color: var(--slate-400);
      }

      .signin-fields {
        display: flex;
        flex-direction: column;
        gap: 18px;
        margin-bottom: 10px;
      }

      .pw-wrap {
        position: relative;
      }
      .pw-wrap input {
        padding-right: 44px;
      }
      .pw-toggle {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        color: var(--slate-400);
        padding: 0;
        display: grid;
        place-items: center;
      }
      .pw-toggle:hover {
        color: var(--teal);
      }

      .forgot-row {
        text-align: right;
        margin-bottom: 22px;
      }
      .forgot-row a {
        font-size: 0.8125rem;
        color: var(--teal);
        text-decoration: none;
        font-weight: 500;
      }
      .forgot-row a:hover {
        text-decoration: underline;
      }

      .btn-full {
        width: 100%;
        justify-content: center;
        padding: 13px 20px;
        font-size: 0.95rem;
      }

      .divider {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 22px 0;
        color: var(--slate-400);
        font-size: 0.8rem;
      }
      .divider::before,
      .divider::after {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--slate-200);
      }

      .social-btns {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .btn-social {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 11px 20px;
        border-radius: 10px;
        font-size: 0.875rem;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        border: 1.5px solid var(--slate-200);
        background: white;
        color: var(--slate-700);
        transition: all 0.2s;
      }
      .btn-social:hover {
        border-color: var(--teal);
        background: var(--teal-lt);
        color: var(--teal);
      }
      .btn-social svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }

      .register-prompt {
        text-align: center;
        margin-top: 24px;
        font-size: 0.875rem;
        color: var(--slate-400);
      }
      .register-prompt a {
        color: var(--teal);
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
      }
      .register-prompt a:hover {
        text-decoration: underline;
      }

      /* forgot password modal */
      .modal-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.4);
        backdrop-filter: blur(4px);
        z-index: 200;
        place-items: center;
      }
      .modal-overlay.open {
        display: grid;
      }
      .modal {
        background: white;
        border-radius: 18px;
        padding: 36px 40px;
        width: 100%;
        max-width: 420px;
        margin: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        animation: popIn 0.25s ease;
      }
      @keyframes popIn {
        from {
          transform: scale(0.92);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
      .modal h3 {
        font-family: "Lora", serif;
        font-size: 1.25rem;
        color: var(--slate-900);
        margin-bottom: 6px;
      }
      .modal p {
        font-size: 0.875rem;
        color: var(--slate-400);
        margin-bottom: 22px;
      }
      .modal-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
      }
      .modal-actions .btn {
        flex: 1;
        justify-content: center;
      }

      /* sign-in success */
      .signin-success {
        text-align: center;
        padding: 16px 0;
      }
      .signin-success .success-icon {
        margin: 0 auto 20px;
      }
      .signin-success h2 {
        font-family: "Lora", serif;
        font-size: 1.5rem;
        color: var(--slate-900);
        margin-bottom: 8px;
      }
      .signin-success p {
        font-size: 0.875rem;
        color: var(--slate-400);
      }
    `,$m=["/legacy/api.js",`
  renderBackButton(90);
  let currentStep=1;
  function generateMedicalRegistrationNumber(){return 'MW-'+new Date().getFullYear()+'-'+Math.floor(100000+Math.random()*900000);}
  function ensureMedicalRegistrationNumber(){
    const a=document.getElementById('guardianFirst'), b=document.getElementById('medicalRegistrationNumber');
    const value=(a&&a.value.trim())||(b&&b.value.trim())||generateMedicalRegistrationNumber();
    if(a&&!a.value.trim()) a.value=value; if(b&&!b.value.trim()) b.value=value; return value;
  }
  function showPage(page){
    document.getElementById('view-register').classList.toggle('active',page!=='signin');
    document.getElementById('view-signin').classList.toggle('active',page==='signin');
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function togglePw(){const i=document.getElementById('si-password');if(i)i.type=i.type==='password'?'text':'password';}
  async function doSignIn(){
    const email=document.getElementById('si-email').value.trim(), pw=document.getElementById('si-password').value;
    const err=document.getElementById('si-pw-err'); if(err)err.style.display='none';
    try{const result=await login(email,pw);if(result.data.role!=='DOCTOR'){await logout();throw new Error('This sign-in is for doctor accounts only.');}window.location.href='/doctor';}
    catch(e){if(err){err.textContent=e.message;err.style.display='block';}}
  }
  let forgotStep='request', resendTimer=null;
  function openForgot(){forgotStep='request';document.getElementById('forgot-modal')?.classList.add('open');}
  function closeForgot(){document.getElementById('forgot-modal')?.classList.remove('open');}
  async function sendReset(){
    const email=document.getElementById('forgot-email')?.value.trim(), err=document.getElementById('forgot-err');
    try{
      if(forgotStep==='request'){
        if(!isValidEmail(email)){throw new Error('Please enter a valid email.');}
        const result=await forgotPassword(email); forgotStep='reset';
        if(result.devResetCode) console.log('MediWell password reset code:',result.devResetCode);
        document.getElementById('forgot-desc').textContent='Reset code sent. Check the browser console for the demo code.';
        document.getElementById('forgot-email-field').style.display='none';
        document.getElementById('forgot-code-field').style.display='block';
        document.getElementById('forgot-newpw-field').style.display='block';
        document.getElementById('forgot-action-btn').textContent='Reset Password';
      }else{
        const code=document.getElementById('forgot-code').value.trim(), pw=document.getElementById('forgot-newpw').value;
        await resetPassword(email,code,pw); closeForgot(); alert('Password updated. You can now sign in.');
      }
    }catch(e){if(err){err.textContent=e.message;err.style.display='block';}}
  }
  function validateStep(step){
    let ok=true;
    const req=(id,test)=>{const el=document.getElementById(id);if(!el)return;const field=el.closest('.field');const fail=test?!test(el.value):!String(el.value||'').trim();field?.classList.toggle('has-error',fail);if(fail)ok=false;};
    if(step===1){ensureMedicalRegistrationNumber();req('firstName');req('gender');req('dob');req('guardianFirst');req('email',v=>isValidEmail(v));req('pinCode',v=>/^\\d{6}$/.test(v.trim()));req('country');req('phone');req('regPassword',v=>isStrongPassword(v));}
    if(step===2){req('department');req('apptDate');req('medicalRegistrationNumber');}
    return ok;
  }
  function buildDoctorSummary(){
    ensureMedicalRegistrationNumber();
    const box=document.querySelector('#step-3 .pricing-box'); if(!box)return;
    const val=id=>document.getElementById(id)?.value||'Not provided';
    box.innerHTML='<h3>Doctor Registration Summary</h3><p class="sub">Please review the details below before submitting your profile.</p>'+
      [['Doctor name',val('firstName')+' '+val('lastName')],['Medical registration no.',val('medicalRegistrationNumber')],['Medical council',val('guardianLast')],['Professional email',val('email')],['Phone',val('phone')],['Primary specialty',val('department')],['Clinical experience',val('apptDate')+' years'],['Qualification',val('bloodGroup')],['Practice PIN',val('pinCode')]].map(x=>'<div class="pricing-row"><span>'+x[0]+'</span><span>'+x[1]+'</span></div>').join('');
    const sub=document.querySelector('#step-3 .subscribe-wrap');if(sub)sub.style.display='none';
  }
  function goToStep(next){if(next>currentStep&&!validateStep(currentStep))return;if(next===3)buildDoctorSummary();document.getElementById('step-'+currentStep)?.classList.remove('active');currentStep=next;document.getElementById('step-'+currentStep)?.classList.add('active');updateStepper();window.scrollTo({top:0,behavior:'smooth'});}
  function updateStepper(){for(let i=1;i<=3;i++){const x=document.getElementById('s'+i);if(!x)continue;x.classList.remove('active','complete');if(i<currentStep)x.classList.add('complete');else if(i===currentStep)x.classList.add('active');}for(let i=1;i<=2;i++)document.getElementById('l'+i)?.classList.toggle('done',i<currentStep);}
  async function submitForm(){
    if(!validateStep(1)||!validateStep(2))return;
    const first=document.getElementById('firstName').value.trim()||'Doctor', last=document.getElementById('lastName').value.trim();
    const fields={fullName:'Dr. '+first+(last?' '+last:''),email:document.getElementById('email').value.trim(),password:document.getElementById('regPassword').value,phone:document.getElementById('phone').value.trim(),firstName:first,lastName:last,gender:document.getElementById('gender').value||null,dob:document.getElementById('dob').value||null,department:document.getElementById('department').value||null,specialization:document.getElementById('specialization').value||null,medicalRegistrationNumber:ensureMedicalRegistrationNumber(),experienceYears:document.getElementById('apptDate').value||null,qualifications:document.getElementById('bloodGroup').value||null,clinicLocation:document.getElementById('insurance').value.trim()||null,bio:document.getElementById('notes').value.trim()||null,consultationFee:document.getElementById('consultationFee').value||800};
    try{
      const result=await registerDoctor(fields);
      document.querySelectorAll('.step-panel').forEach(p=>p.classList.remove('active'));document.getElementById('step-success').classList.add('active');document.querySelector('.stepper').style.opacity='0';
      const reg=result.data?.medicalRegistrationNumber||fields.medicalRegistrationNumber; alert('Doctor registration successful. Medical Registration No.: '+reg+'\\nPlease sign in.');
      setTimeout(()=>window.location.href='/login',700);
    }catch(e){alert('Registration failed: '+e.message);}
  }
  function resetForm(){location.reload();}
  window.addEventListener('load',()=>ensureMedicalRegistrationNumber());
  (async function guard(){try{const r=await getCurrentUser();if(r.data.role==='DOCTOR')window.location.href='/doctor';}catch(e){}})();
`];function lc(){return R.useEffect(()=>{document.title=qm;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=Hm,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of $m)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mediwell-page-root",children:[e.jsxs("nav",{id:"site-nav",children:[e.jsxs("a",{className:"logo",href:"#",children:[e.jsx("div",{className:"logo-icon",children:e.jsx("svg",{viewbox:"0 0 24 24",children:e.jsx("path",{d:"M12 2a10 10 0 100 20A10 10 0 0012 2zm1 14h-2v-5H9v-2h2V7h2v2h2v2h-2v5z"})})}),e.jsx("span",{className:"logo-text",children:"MediWell Health care"})]}),e.jsxs("span",{className:"nav-link",children:["Already registered? ",e.jsx("a",{onClick:()=>window.__mediwellRun("showPage('signin')"),children:"Sign In"})]})]}),e.jsxs("div",{className:"page-view",id:"view-signin",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Welcome Back"}),e.jsx("p",{children:"Sign in to your MediCare account"})]}),e.jsxs("div",{className:"signin-card",children:[e.jsxs("div",{id:"signin-form-wrap",children:[e.jsxs("div",{className:"signin-fields",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Email Address ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"email",id:"si-email",placeholder:"patient@example.com"}),e.jsx("span",{className:"err-msg",children:"Please enter a valid email"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Password ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("div",{className:"pw-wrap",children:[e.jsx("input",{type:"password",id:"si-password",placeholder:"Enter your password"}),e.jsx("button",{className:"pw-toggle",onClick:()=>window.__mediwellRun("togglePw()"),type:"button",id:"pw-toggle-btn",children:e.jsxs("svg",{id:"eye-icon",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2",viewbox:"0 0 24 24",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})]}),e.jsx("span",{className:"err-msg",id:"si-pw-err",children:"Password is required"})]})]}),e.jsx("div",{className:"forgot-row",children:e.jsx("a",{onClick:()=>window.__mediwellRun("openForgot()"),children:"Forgot password?"})}),e.jsx("button",{className:"btn btn-primary btn-full",onClick:()=>window.__mediwellRun("doSignIn()"),children:"Sign In"}),e.jsx("div",{className:"divider",children:"or continue with"}),e.jsxs("div",{className:"social-btns",children:[e.jsxs("button",{className:"btn-social",children:[e.jsxs("svg",{viewbox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),e.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),e.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z",fill:"#FBBC05"}),e.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),"Continue with Google"]}),e.jsxs("button",{className:"btn-social",children:[e.jsx("svg",{viewbox:"0 0 24 24",fill:"#0078D4",children:e.jsx("path",{d:"M21.579 6.855c.14.42.21.865.21 1.33C21.789 13.67 17.566 18 12 18a9.86 9.86 0 01-5.032-1.378A7.03 7.03 0 0012 15.13a3.514 3.514 0 01-3.28-2.437c.214.04.434.063.66.063.32 0 .63-.043.924-.124A3.513 3.513 0 016.87 9.28v-.044c.446.248.956.397 1.498.414a3.51 3.51 0 01-1.085-4.686 9.963 9.963 0 007.23 3.665 3.956 3.956 0 01-.089-.8A3.511 3.511 0 0117.935 4.5a3.5 3.5 0 012.56 1.107 7.03 7.03 0 002.228-.852 3.525 3.525 0 01-1.543 1.942 7.01 7.01 0 002.018-.548 7.13 7.13 0 01-1.619 1.706z"})}),"Continue with Microsoft"]})]}),e.jsxs("div",{className:"register-prompt",children:["Don't have an account?",e.jsx("a",{onClick:()=>window.__mediwellRun("showPage('register')"),children:"Register here"})]})]}),e.jsxs("div",{className:"signin-success",id:"signin-success",style:{display:"none"},children:[e.jsx("div",{className:"success-icon",style:{width:"72px",height:"72px",background:"var(--teal-lt)",borderRadius:"50%",display:"grid",placeItems:"center"},children:e.jsx("svg",{width:"36",height:"36",fill:"none",stroke:"var(--teal)","stroke-width":"2.5",viewbox:"0 0 24 24",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}),e.jsx("h2",{children:"Welcome Back!"}),e.jsxs("p",{children:["You've signed in successfully.",e.jsx("br",{}),"Redirecting to your dashboard…"]}),e.jsx("button",{className:"btn btn-outline btn-full",style:{marginTop:"24px"},onClick:()=>window.__mediwellRun("window.location.href = '/login'"),children:"Continue to Dashboard →"})]})]})]}),e.jsx("div",{className:"modal-overlay",id:"forgot-modal",children:e.jsxs("div",{className:"modal",children:[e.jsx("h3",{id:"forgot-title",children:"Reset Password"}),e.jsx("p",{id:"forgot-desc",children:"Enter your registered email and we'll send you a reset code."}),e.jsxs("div",{className:"field",id:"forgot-email-field",children:[e.jsxs("label",{children:["Email Address ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"email",id:"forgot-email",placeholder:"doctor@example.com"}),e.jsx("span",{className:"err-msg",id:"forgot-err",style:{display:"none"},children:"Please enter a valid email"})]}),e.jsxs("div",{className:"field",id:"forgot-code-field",style:{display:"none"},children:[e.jsxs("label",{children:["Reset Code (OTP) ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",id:"forgot-code",maxLength:"6",inputMode:"numeric",placeholder:"6-digit code"}),e.jsx("span",{className:"err-msg",id:"forgot-resend",style:{display:"block",color:"#0f766e",cursor:"pointer",textDecoration:"underline"},onClick:()=>window.__mediwellRun("resendCode()"),children:"Resend code"})]}),e.jsxs("div",{className:"field",id:"forgot-newpw-field",style:{display:"none"},children:[e.jsxs("label",{children:["New Password ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"password",id:"forgot-newpw",placeholder:"At least 8 characters"}),e.jsx("span",{className:"err-msg",id:"forgot-newpw-hint",style:{display:"block",color:"#888"},children:"At least 8 characters, with an uppercase, lowercase, number, and special character."})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"btn btn-outline",onClick:()=>window.__mediwellRun("closeForgot()"),children:"Cancel"}),e.jsx("button",{className:"btn btn-primary",id:"forgot-action-btn",onClick:()=>window.__mediwellRun("sendReset()"),children:"Send Reset Code"})]})]})}),e.jsxs("main",{id:"view-register",className:"page-view active",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Doctor Registration"}),e.jsx("p",{children:"Complete the steps below to create your verified doctor profile"})]}),e.jsxs("div",{className:"stepper",children:[e.jsxs("div",{className:"step active",id:"s1",children:[e.jsx("div",{className:"step-num",children:"1"}),e.jsx("span",{className:"step-label",children:"Professional Profile"})]}),e.jsx("div",{className:"step-line",id:"l1"}),e.jsxs("div",{className:"step",id:"s2",children:[e.jsx("div",{className:"step-num",children:"2"}),e.jsx("span",{className:"step-label",children:"Practice Details"})]}),e.jsx("div",{className:"step-line",id:"l2"}),e.jsxs("div",{className:"step",id:"s3",children:[e.jsx("div",{className:"step-num",children:"3"}),e.jsx("span",{className:"step-label",children:"Confirm & Submit"})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"step-panel active",id:"step-1",children:[e.jsx("p",{className:"section-label",children:"Doctor Profile"}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["First Name ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",id:"firstName",placeholder:"e.g. Ananya"}),e.jsx("span",{className:"err-msg",children:"First name is required"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Last Name"}),e.jsx("input",{type:"text",id:"lastName",placeholder:"e.g. Sharma"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Gender ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{id:"gender",children:[e.jsx("option",{value:"",children:"Select gender"}),e.jsx("option",{children:"Male"}),e.jsx("option",{children:"Female"}),e.jsx("option",{children:"Other"}),e.jsx("option",{children:"Prefer not to say"})]}),e.jsx("span",{className:"err-msg",children:"Please select gender"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Date of Birth ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("div",{className:"input-wrap",children:[e.jsx("input",{type:"date",id:"dob"}),e.jsx("span",{className:"icon calendar-icon","aria-hidden":"true",children:e.jsx("img",{src:"/calendar-logo.png",alt:""})})]}),e.jsx("span",{className:"err-msg",children:"Please enter date of birth"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Medical Registration Number ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",id:"guardianFirst",placeholder:"e.g. MCI-123456"}),e.jsx("span",{className:"err-msg",children:"Medical registration number is required"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Medical Council / Issuing Authority"}),e.jsx("input",{type:"text",id:"guardianLast",placeholder:"e.g. National Medical Commission"})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsxs("label",{children:["Professional Email Address ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"email",id:"email",placeholder:"doctor@hospital.com"}),e.jsx("span",{className:"err-msg",children:"Please enter a valid email"})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsxs("label",{children:["Password ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"password",id:"regPassword",placeholder:"e.g. MediWell@2026"}),e.jsx("span",{className:"err-msg",style:{display:"block",color:"#888"},children:"8+ characters, with an uppercase letter, a lowercase letter, a number, and a special character."})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Practice Location PIN Code ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",id:"pinCode",maxLength:"6",placeholder:"6-digit pin"}),e.jsx("span",{className:"err-msg",children:"Enter a valid 6-digit pin"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Country ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{id:"country",children:[e.jsx("option",{value:"",children:"Select country"}),e.jsx("option",{children:"India"}),e.jsx("option",{children:"United States"}),e.jsx("option",{children:"United Kingdom"}),e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Australia"}),e.jsx("option",{children:"Other"})]}),e.jsx("span",{className:"err-msg",children:"Please select a country"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Time Zone ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{id:"timezone",children:[e.jsx("option",{value:"IST",children:"IST — Indian Standard Time (GMT +5:30)"}),e.jsx("option",{value:"UTC",children:"UTC — Coordinated Universal Time"}),e.jsx("option",{value:"EST",children:"EST — Eastern Standard Time (GMT −5)"}),e.jsx("option",{value:"PST",children:"PST — Pacific Standard Time (GMT −8)"})]})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Phone Number (with country code)",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"tel",id:"phone",placeholder:"+91 98765 43210"}),e.jsx("span",{className:"err-msg",children:"Phone number is required"})]})]}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"btn btn-primary",onClick:()=>window.__mediwellRun("goToStep(2)"),children:"Next →"})})]}),e.jsxs("div",{className:"step-panel",id:"step-2",children:[e.jsx("p",{className:"section-label",children:"Clinical Practice Details"}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Primary Specialty ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{id:"department",children:[e.jsx("option",{value:"",children:"Select specialty"}),e.jsx("option",{children:"General Medicine"}),e.jsx("option",{children:"Cardiology"}),e.jsx("option",{children:"Orthopaedics"}),e.jsx("option",{children:"Paediatrics"}),e.jsx("option",{children:"Neurology"}),e.jsx("option",{children:"Gynaecology"}),e.jsx("option",{children:"Dermatology"}),e.jsx("option",{children:"ENT"})]}),e.jsx("span",{className:"err-msg",children:"Please select your primary specialty"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Specialization / Title"}),e.jsx("input",{type:"text",id:"specialization",placeholder:"e.g. Interventional Cardiologist"})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsxs("label",{children:["Medical Registration Number ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",id:"medicalRegistrationNumber",placeholder:"e.g. MCI-2024-10234"}),e.jsx("span",{className:"err-msg",style:{display:"block",color:"#888"},children:"Registration is limited to pre-verified doctors - contact the hospital administrator if you don't have a number."})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Years of Clinical Experience ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("div",{className:"input-wrap",children:[e.jsx("input",{type:"number",id:"apptDate",min:"0",max:"70",placeholder:"e.g. 8"}),e.jsx("span",{className:"icon calendar-icon","aria-hidden":"true",children:e.jsx("img",{src:"/calendar-logo.png",alt:""})})]}),e.jsx("span",{className:"err-msg",children:"Please enter your years of experience"})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsxs("label",{children:["Consultation Mode Offered ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("div",{className:"radio-group",id:"timeSlot",children:[e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"slot",value:"In-person consultation"}),e.jsx("div",{className:"rb"}),"In-person consultation"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"slot",value:"Video consultation"}),e.jsx("div",{className:"rb"}),"Video consultation"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"slot",value:"Both in-person and video",defaultChecked:!0}),e.jsx("div",{className:"rb"}),"Both in-person and video"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"slot",value:"Home visit"}),e.jsx("div",{className:"rb"}),"Home visit"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"slot",value:"Telephonic consultation"}),e.jsx("div",{className:"rb"}),"Telephonic consultation"]})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Highest Medical Qualification"}),e.jsxs("select",{id:"bloodGroup",children:[e.jsx("option",{value:"",children:"Select qualification"}),e.jsx("option",{children:"MBBS"}),e.jsx("option",{children:"MD"}),e.jsx("option",{children:"MS"}),e.jsx("option",{children:"DNB"}),e.jsx("option",{children:"DM"}),e.jsx("option",{children:"MCh"}),e.jsx("option",{children:"BDS"}),e.jsx("option",{children:"BHMS"}),e.jsx("option",{children:"BAMS"}),e.jsx("option",{children:"Other"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Current Hospital / Clinic"}),e.jsx("input",{type:"text",id:"insurance",placeholder:"e.g. City General Hospital"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Consultation Fee (₹)"}),e.jsx("input",{type:"number",id:"consultationFee",min:"0",placeholder:"e.g. 600"})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsx("label",{children:"Areas of Expertise / Services Offered"}),e.jsx("textarea",{id:"notes",rows:"3",placeholder:"List any allergies or ongoing medications\\u2026",style:{resize:"vertical"}})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsx("label",{children:"Professional Preferences"}),e.jsxs("div",{className:"check-group",children:[e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",id:"chkSms",defaultChecked:!0}),e.jsx("div",{className:"cb"}),"Receive appointment alerts by SMS"]}),e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",id:"chkEmail"}),e.jsx("div",{className:"cb"}),"Receive hospital email updates"]}),e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",id:"chkReport",defaultChecked:!0}),e.jsx("div",{className:"cb"}),"Allow patients to share reports digitally"]})]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn btn-outline",onClick:()=>window.__mediwellRun("goToStep(1)"),children:"← Back"}),e.jsx("button",{className:"btn btn-primary",onClick:()=>window.__mediwellRun("goToStep(3)"),children:"Next →"})]})]}),e.jsxs("div",{className:"step-panel",id:"step-3",children:[e.jsx("p",{className:"section-label",children:"Confirm & Submit"}),e.jsxs("div",{className:"pricing-box",children:[e.jsx("h3",{children:"Appointment Summary"}),e.jsx("p",{className:"sub",children:"Your fee breakdown is shown below"}),e.jsxs("div",{className:"pricing-row",children:[e.jsx("span",{children:"Consultation Fee"}),e.jsx("span",{children:"₹800"})]}),e.jsxs("div",{className:"pricing-row",children:[e.jsx("span",{children:"Registration Charges"}),e.jsx("span",{children:"₹200"})]}),e.jsxs("div",{className:"pricing-row total",children:[e.jsx("span",{children:"Total"}),e.jsx("span",{className:"price-val",children:"₹1,000"})]})]}),e.jsxs("div",{className:"subscribe-wrap",children:[e.jsx("p",{children:"I wish to subscribe to MediCare health updates"}),e.jsxs("div",{className:"radio-group",children:[e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"subscribe",value:"yes",defaultChecked:!0}),e.jsx("div",{className:"rb"}),"Yes"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"subscribe",value:"no"}),e.jsx("div",{className:"rb"}),"No"]})]}),e.jsx("p",{className:"note",children:"* By selecting 'Yes' you allow MediCare to send appointment reminders, health tips, and updates via WhatsApp and email."})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn btn-outline",onClick:()=>window.__mediwellRun("goToStep(2)"),children:"← Back"}),e.jsx("button",{className:"btn btn-primary",onClick:()=>window.__mediwellRun("submitForm()"),children:"Submit Registration"})]})]}),e.jsxs("div",{className:"step-panel",id:"step-success",children:[e.jsx("div",{className:"success-icon",children:e.jsx("svg",{fill:"none",stroke:"currentColor","stroke-width":"2.5",viewbox:"0 0 24 24",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}),e.jsx("h2",{children:"Doctor Registration Successful!"}),e.jsx("p",{children:"Your doctor profile has been submitted successfully. A confirmation has been sent to your professional email address."}),e.jsxs("div",{className:"actions",style:{marginTop:"24px"},children:[e.jsx("button",{className:"btn btn-primary",onClick:()=>window.__mediwellRun("window.location.href = '/login'"),children:"Go to Dashboard →"}),e.jsx("button",{className:"btn btn-outline",onClick:()=>window.__mediwellRun("resetForm()"),children:"Register Another Doctor"})]})]})]})]})]})})}const Wm="Request a Demo",Gm=`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
      }

      body {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 20px;
        background:
          radial-gradient(
            circle at left,
            rgba(190, 255, 180, 0.35),
            transparent 35%
          ),
          radial-gradient(
            circle at right,
            rgba(180, 200, 255, 0.35),
            transparent 35%
          ),
          #f5f7fa;
      }

      .demo-wrapper {
        width: 100%;
        max-width: 1300px;
      }

      .demo-container {
        background: #fff;
        border-radius: 30px;
        padding: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      }

      /* LEFT SIDE */

      .demo-left h1 {
        font-size: 48px;
        margin-bottom: 15px;
        color: #111;
      }

      .demo-left p {
        color: #555;
        line-height: 1.8;
        margin-bottom: 30px;
      }

      .benefits-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      .benefit-card {
        border: 1px solid #e8e8e8;
        border-radius: 18px;
        padding: 25px;
        transition: 0.3s;
      }

      .benefit-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
      }

      .icon-box {
        width: 50px;
        height: 50px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        font-size: 20px;
      }

      .blue {
        background: #eef4ff;
        color: #4d7cff;
      }

      .green {
        background: #eafaf3;
        color: #27ae60;
      }

      .orange {
        background: #fff3e7;
        color: #ff8b47;
      }

      .purple {
        background: #f3ebff;
        color: #9b59b6;
      }

      .benefit-card h3 {
        margin-bottom: 10px;
      }

      .benefit-card p {
        font-size: 14px;
        margin-bottom: 0;
      }

      /* RIGHT SIDE */

      .demo-form {
        background: #fafafa;
        border-radius: 20px;
        padding: 30px;
      }

      .form-group {
        margin-bottom: 20px;
      }

      .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
        color: #333;
      }

      .form-control {
        width: 100%;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 10px;
        outline: none;
        font-size: 15px;
      }

      .form-control:focus {
        border-color: #0d6a7d;
      }

      textarea.form-control {
        resize: none;
        height: 120px;
      }

      .demo-btn {
        width: 100%;
        border: none;
        padding: 16px;
        border-radius: 12px;
        background: #0d6a7d;
        color: white;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.3s;
      }

      .demo-btn:hover {
        background: #084d5c;
      }

      /* Responsive */

      @media (max-width: 992px) {
        .demo-container {
          grid-template-columns: 1fr;
        }

        .demo-left h1 {
          font-size: 38px;
        }
      }

      @media (max-width: 768px) {
        .demo-container {
          padding: 25px;
        }

        .benefits-grid {
          grid-template-columns: 1fr;
        }

        .demo-left h1 {
          font-size: 30px;
        }
      }
    `,Vm=["/legacy/api.js",`
      renderBackButton(16);

      document.getElementById("demoSubmitBtn").addEventListener("click", async () => {
        const btn = document.getElementById("demoSubmitBtn");
        const fields = {
          fullName: document.getElementById("demoName").value.trim(),
          email: document.getElementById("demoEmail").value.trim(),
          phone: document.getElementById("demoPhone").value.trim(),
          preferredDate: document.getElementById("demoDate").value || null,
          preferredTime: document.getElementById("demoTime").value || null,
          requirement: document.getElementById("demoRequirement").value.trim(),
        };

        if (!fields.fullName || !fields.email || !fields.requirement) {
          alert("Please fill in your name, email, and what you need before submitting.");
          return;
        }

        btn.disabled = true;
        btn.textContent = "Matching you with a doctor…";

        try {
          const result = await submitDemoRequest(fields);
          const d = result.data;
          const dateStr = d.preferredDate || "a date to be confirmed";
          const timeStr = d.preferredTime || "a time to be confirmed";

          if (d.doctor && d.bookedForPatient) {
            const paymentLine = d.bill
              ? \`₹\${d.bill.amount} is pending — pay it via UPI/QR from your patient dashboard before your visit.\`
              : "";
            alert(
              \`You're matched with \${d.doctor.name} (\${d.matchedDepartment}).\\n\\n\` +
                \`Your appointment is booked for \${dateStr} at \${timeStr}.\\n\` +
                \`\${paymentLine}\\n\\nYou can see it on your patient dashboard now.\`
            );
            window.location.href = "/patient";
          } else if (d.doctor) {
            alert(
              \`Based on what you told us, we'd recommend \${d.doctor.name} (\${d.matchedDepartment}) \` +
                \`for \${dateStr} at \${timeStr}.\\n\\n\` +
                \`Log in or create a patient account to confirm this booking and pay - \` +
                \`we've saved your request either way and our team will also follow up by email.\`
            );
            window.location.href = "/login";
          } else {
            alert(
              "Thanks! We don't have a doctor listed for that specialty yet, " +
                "but we've saved your request and our team will contact you within 24 hours."
            );
          }

          document.getElementById("demoName").value = "";
          document.getElementById("demoEmail").value = "";
          document.getElementById("demoPhone").value = "";
          document.getElementById("demoDate").value = "";
          document.getElementById("demoTime").value = "";
          document.getElementById("demoRequirement").value = "";
        } catch (err) {
          alert("Something went wrong: " + err.message);
        } finally {
          btn.disabled = false;
          btn.textContent = "Request Demo";
        }
      });
    `];function dc(){return R.useEffect(()=>{document.title=Wm;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=Gm,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of Vm)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"mediwell-page-root",children:e.jsx("div",{className:"demo-wrapper",children:e.jsxs("div",{className:"demo-container",children:[e.jsxs("div",{className:"demo-left",children:[e.jsx("h1",{children:"Request a Demo"}),e.jsx("p",{children:"See how MediWell Healthcare can simplify patient management, appointment scheduling, medical records, and hospital operations. Book a personalized demonstration with our experts."}),e.jsxs("div",{className:"benefits-grid",children:[e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"icon-box blue",children:e.jsx("i",{className:"fa-solid fa-calendar-check"})}),e.jsx("h3",{children:"Smart Appointments"}),e.jsx("p",{children:"Efficient appointment booking and management."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"icon-box green",children:e.jsx("i",{className:"fa-solid fa-user-doctor"})}),e.jsx("h3",{children:"Doctor Management"}),e.jsx("p",{children:"Manage doctors, schedules, and patient visits."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"icon-box orange",children:e.jsx("i",{className:"fa-solid fa-file-medical"})}),e.jsx("h3",{children:"Digital Records"}),e.jsx("p",{children:"Secure patient records and medical history."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"icon-box purple",children:e.jsx("i",{className:"fa-solid fa-chart-line"})}),e.jsx("h3",{children:"Hospital Analytics"}),e.jsx("p",{children:"Track performance and healthcare operations."})]})]})]}),e.jsxs("div",{className:"demo-form",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Full Name"}),e.jsx("input",{type:"text",className:"form-control",id:"demoName",placeholder:"Enter your name"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Email Address"}),e.jsx("input",{type:"email",className:"form-control",id:"demoEmail",placeholder:"Enter your email"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Phone Number"}),e.jsx("input",{type:"text",className:"form-control",id:"demoPhone",placeholder:"Enter phone number"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Preferred Date"}),e.jsxs("div",{className:"date-input-with-logo",children:[e.jsx("img",{src:"/calendar-logo.png",alt:""}),e.jsx("input",{type:"date",className:"form-control",id:"demoDate"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Preferred Time"}),e.jsxs("select",{className:"form-control",id:"demoTime",children:[e.jsx("option",{value:"",children:"Select a time"}),e.jsx("option",{children:"09:00 AM"}),e.jsx("option",{children:"10:00 AM"}),e.jsx("option",{children:"11:00 AM"}),e.jsx("option",{children:"02:00 PM"}),e.jsx("option",{children:"03:00 PM"}),e.jsx("option",{children:"04:00 PM"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"What do you need? (symptom, checkup, or service)"}),e.jsx("textarea",{className:"form-control",id:"demoRequirement",placeholder:"e.g. I've been having chest pain and shortness of breath"})]}),e.jsx("div",{className:"form-group",children:e.jsxs("p",{style:{fontSize:"13px",color:"#64748b",margin:"0"},children:["If we're able to book you in with a doctor, the consultation fee will show up as ",e.jsx("b",{children:"pending"})," on your patient dashboard — pay it there anytime via UPI/QR before your visit."]})}),e.jsx("button",{className:"demo-btn",id:"demoSubmitBtn",children:"Request Demo"})]})]})})})})}const Ym="Billing & Payment",Qm=`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f5f5f5;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }

      .container {
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        max-width: 920px;
        width: 100%;
        padding: 30px 35px;
      }

      .header {
        display: flex;
        align-items: center;
        margin-bottom: 28px;
        padding-bottom: 14px;
        border-bottom: 2px solid #e8e8e8;
      }

      .header h1 {
        color: #2c5aa0;
        font-size: 20px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .header::before {
        content: "📋";
        font-size: 24px;
      }

      .main-content {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 35px;
      }

      .left-section {
        display: flex;
        flex-direction: column;
        gap: 22px;
      }

      .section-title {
        font-size: 14px;
        font-weight: 600;
        color: #2c5aa0;
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 12px;
      }

      .section-title::before {
        font-size: 16px;
      }

      .select-date::before {
        content: "📅";
      }

      .select-doctor::before {
        content: "👨‍⚕️";
      }

      .time-slots-label::before {
        content: "⏰";
      }

      .patient-details::before {
        content: "👤";
      }

      /* Doctor Selection */
      .doctor-section {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .doctor-card {
        padding: 12px 14px;
        border: 1.5px solid #e5e5e5;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.25s ease;
        background: white;
      }

      .doctor-card:hover {
        border-color: #2c5aa0;
        background-color: #f8fafb;
      }

      .doctor-card input[type="radio"] {
        margin-right: 10px;
        cursor: pointer;
        accent-color: #2c5aa0;
      }

      .doctor-card label {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        font-size: 14px;
      }

      .doctor-info {
        flex: 1;
      }

      .doctor-name {
        font-weight: 600;
        color: #333;
        margin-bottom: 2px;
        font-size: 14px;
      }

      .doctor-speciality {
        font-size: 12px;
        color: #888;
      }

      .doctor-card.selected {
        border-color: #2c5aa0;
        background-color: #f0f5fb;
      }

      /* Date Selection */
      .date-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
      }

      .date-card {
        padding: 16px 10px;
        text-align: center;
        border: 1.5px solid #e5e5e5;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.25s ease;
        background: white;
      }

      .date-card:hover {
        border-color: #2c5aa0;
        background-color: #f8fafb;
      }

      .date-card.selected {
        border-color: #2c5aa0;
        background-color: #2c5aa0;
        color: white;
      }

      .date-day {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 3px;
      }

      .date-label {
        font-size: 11px;
        font-weight: 500;
        opacity: 0.8;
      }

      /* Time Slots */
      .time-slots {
        display: flex;
        flex-direction: column;
        gap: 0;
      }

      .time-slot {
        padding: 10px 12px;
        border: none;
        text-align: left;
        cursor: pointer;
        transition: all 0.25s ease;
        background: white;
        font-size: 14px;
        color: #888;
      }

      .time-slot:hover {
        background-color: #f8fafb;
        color: #2c5aa0;
      }

      .time-slot.selected {
        background-color: #2c5aa0;
        color: white;
        font-weight: 500;
      }

      .time-slot.slot-taken {
        background-color: #f1f1f1;
        color: #b0b0b0;
        text-decoration: line-through;
        cursor: not-allowed;
      }
      .time-slot.slot-taken:hover {
        background-color: #f1f1f1;
        color: #b0b0b0;
      }

      .no-slots {
        padding: 16px 12px;
        text-align: center;
        color: #999;
        font-size: 13px;
      }

      /* Patient Details */
      .patient-recap {
        background: #fafafa;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 14px 16px;
        font-size: 13.5px;
        color: #333;
        line-height: 1.7;
      }
      .patient-recap b {
        color: #111;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-bottom: 12px;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
      }

      label {
        font-size: 13px;
        color: #555;
        font-weight: 500;
      }

      input,
      select {
        padding: 9px 11px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 13px;
        font-family: inherit;
        transition: border-color 0.25s ease;
        background: #fafafa;
      }

      input:focus,
      select:focus {
        outline: none;
        border-color: #2c5aa0;
        background: white;
      }

      input::placeholder {
        color: #aaa;
      }

      /* Right Section - Summary */
      .right-section {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .summary-box {
        background: #f9fbfd;
        padding: 18px;
        border-radius: 6px;
        border-left: 4px solid #2c5aa0;
      }

      .summary-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;
        font-size: 13px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e8e8e8;
      }

      .summary-item:last-of-type {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
      }

      .summary-label {
        color: #666;
        font-weight: 500;
      }

      .summary-value {
        color: #1a7d5f;
        font-weight: 600;
        text-align: right;
      }

      .summary-value.not-selected {
        color: #d32f2f;
        font-weight: 600;
      }

      .fee-section {
        padding-top: 0;
        border-top: none;
      }

      .consultation-fee {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 700;
        margin-top: 8px;
      }

      .fee-amount {
        color: #d32f2f;
      }

      /* Payment Options */
      .payment-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .payment-section .section-title {
        margin-bottom: 8px;
      }

      .payment-options {
        display: flex;
        gap: 10px;
      }

      .payment-btn {
        flex: 1;
        padding: 10px;
        border: 1.5px solid #e5e5e5;
        background: white;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.25s ease;
        font-size: 13px;
        color: #666;
      }

      .payment-btn:hover {
        border-color: #2c5aa0;
        background-color: #f8fafb;
      }

      .payment-btn.selected {
        border-color: #1a7d5f;
        background-color: #1a7d5f;
        color: white;
      }

      /* Confirm Button */
      .confirm-btn {
        width: 100%;
        padding: 12px;
        background: #e8e8e8;
        color: #999;
        border: none;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 600;
        cursor: not-allowed;
        transition: all 0.25s ease;
      }

      #paymentStep .confirm-btn:not(:disabled) {
        background: #1a1a2e;
        border-radius: 30px;
        padding: 15px;
      }
      #paymentStep .confirm-btn:not(:disabled):hover {
        background: #0f0f1e;
      }

      .confirm-btn:not(:disabled) {
        background: #9d7dcf;
        color: white;
        cursor: pointer;
      }

      .confirm-btn:not(:disabled):hover {
        background: #8a6bbf;
      }

      /* ===== Step 2: Billing & Payment (two-column checkout layout) ===== */
      .billing-summary {
        max-width: 980px;
        margin: 0 auto;
      }

      .back-link {
        background: none;
        border: none;
        color: #7c5cbf;
        font-size: 14px;
        cursor: pointer;
        padding: 0;
        margin-bottom: 14px;
      }
      .back-link:hover {
        text-decoration: underline;
      }

      .checkout-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 22px;
      }
      .checkout-header h2 {
        margin: 0 0 4px;
        font-size: 22px;
      }
      .checkout-subtitle {
        margin: 0;
        font-size: 13px;
        color: #888;
      }
      .secure-badge {
        font-size: 12.5px;
        font-weight: 600;
        color: #444;
        background: #f4f4f4;
        border-radius: 20px;
        padding: 7px 14px;
        white-space: nowrap;
      }

      .checkout-grid {
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 22px;
        align-items: start;
      }

      .checkout-card {
        border: 1px solid #eee;
        border-radius: 14px;
        padding: 18px;
        margin-bottom: 18px;
        background: #fff;
      }
      .checkout-card-title {
        font-size: 11.5px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #888;
        margin-bottom: 12px;
      }
      .checkout-line {
        display: flex;
        justify-content: space-between;
        font-size: 13.5px;
        color: #444;
        padding: 6px 0;
      }
      .checkout-line-value {
        font-weight: 600;
        color: #222;
        text-align: right;
      }
      .checkout-divider {
        height: 1px;
        background: #eee;
        margin: 8px 0;
      }
      .checkout-total {
        font-size: 15px;
        font-weight: 700;
        color: #111;
      }
      .checkout-patient-recap {
        font-size: 13.5px;
        color: #333;
        line-height: 1.7;
      }

      .pay-method-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-bottom: 18px;
      }
      .pay-method-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 13px 14px;
        border: 1px solid #eee;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.15s ease;
        background: #fff;
      }
      .pay-method-row:hover {
        border-color: #b9d6da;
      }
      .pay-method-icon {
        font-size: 18px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: #f4f9fa;
        flex-shrink: 0;
      }
      .pay-method-label {
        flex: 1;
        font-size: 13.5px;
        font-weight: 600;
        color: #333;
      }
      .pay-method-check {
        width: 18px;
        height: 18px;
        border-radius: 5px;
        border: 1.5px solid #ccc;
        flex-shrink: 0;
        position: relative;
      }
      .pay-method-row.selected {
        border-color: #1a7a8a;
        background: #f4f9fa;
        box-shadow: 0 0 0 1px #1a7a8a;
      }
      .pay-method-row.selected .pay-method-check {
        border-color: #1a7a8a;
        background: #1a7a8a;
      }
      .pay-method-row.selected .pay-method-check::after {
        content: "✓";
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
      }

      .pay-method-detail {
        border: 1.5px solid #1a7a8a;
        border-radius: 14px;
        padding: 18px;
        background: #f9fdfd;
      }

      .card-brands {
        font-size: 11.5px;
        font-weight: 700;
        color: #888;
        letter-spacing: 0.03em;
        margin-bottom: 12px;
      }

      .checkout-checkbox-row {
        display: flex !important;
        flex-direction: row !important;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 500 !important;
        color: #555;
      }

      .checkout-footer {
        display: flex;
        justify-content: flex-end;
        margin-top: 22px;
      }
      .checkout-footer .confirm-btn {
        max-width: 340px;
      }

      .pay-panel {
        display: none;
      }
      .pay-panel.active {
        display: block;
      }

      .pay-hint {
        font-size: 13px;
        color: #777;
        line-height: 1.5;
        margin: 8px 0 0;
      }

      .utr-field {
        margin: 18px auto 0;
        max-width: 280px;
        text-align: left;
      }
      .utr-field label {
        display: block;
        font-size: 13px;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 6px;
      }
      .utr-field input {
        width: 100%;
        padding: 11px 12px;
        border: 1.5px solid #cbd5e1;
        border-radius: 8px;
        font-size: 1rem;
        letter-spacing: 1px;
        font-weight: 600;
        text-align: center;
      }
      .utr-field input:focus {
        outline: none;
        border-color: #005f78;
      }
      .utr-field .utr-error {
        color: #dc2626;
        font-size: 12.5px;
        margin-top: 6px;
        display: none;
      }

      @media (max-width: 700px) {
        .checkout-grid {
          grid-template-columns: 1fr;
        }
        .pay-method-grid {
          grid-template-columns: 1fr;
        }
        .checkout-footer {
          justify-content: stretch;
        }
        .checkout-footer .confirm-btn {
          max-width: none;
          width: 100%;
        }
      }

      .card-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .card-form label {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 13px;
        color: #444;
        font-weight: 600;
      }
      .card-form input {
        padding: 10px 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 400;
      }
      .card-form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .qr-panel {
        text-align: center;
        padding: 10px 0;
      }
      #qrcodeBox {
        display: inline-block;
        padding: 12px;
        background: #fff;
        border: 1px solid #eee;
        border-radius: 10px;
      }
      .upi-id-row {
        display: flex;
        align-items: center;
        gap: 8px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 10px 14px;
        margin: 16px auto 0;
        max-width: 280px;
      }
      .upi-id-row code {
        flex: 1;
        font-size: 0.92rem;
        font-weight: 700;
        color: #1e293b;
      }
      .copy-btn {
        border: none;
        background: #005f78;
        color: #fff;
        padding: 6px 10px;
        border-radius: 7px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .copy-btn:hover {
        background: #00475a;
      }
      .upi-app-link {
        display: inline-block;
        width: 100%;
        max-width: 280px;
        padding: 12px;
        background: #005f78;
        color: #fff;
        text-decoration: none;
        font-weight: 700;
        border-radius: 10px;
        margin-top: 14px;
        font-size: 0.92rem;
      }
      .upi-app-link:hover {
        background: #00475a;
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .container {
          padding: 20px;
        }

        .main-content {
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .date-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .form-row {
          grid-template-columns: 1fr;
        }

        .card-form-row {
          grid-template-columns: 1fr;
        }
      }
    `,Km=["https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js","/legacy/api.js",`
      renderBackButton(16);

      // Doctors are loaded from the backend (see loadDoctors below) instead
      // of being hardcoded here.
      let doctors = [];
      let currentPatient = null; // filled in from the logged-in patient's profile, if any
      let isLoggedInPatient = false;

      async function loadDoctors() {
        const result = await listDoctors();
        doctors = result.data.map((d) => ({
          id: d.doctor_id,
          name: "Dr. " + d.first_name + " " + d.last_name,
          speciality: d.specialization || d.department || "General Medicine",
          fee: d.consultation_fee || null,
        }));
      }

      async function checkLoginAndPrefill() {
        const banner = document.getElementById("authBanner");
        const recap = document.getElementById("patientRecap");
        try {
          const me = await getCurrentUser();
          if (me.data.role !== "PATIENT") {
            isLoggedInPatient = false;
            banner.textContent =
              "You're signed in as " + me.data.role + ". Only patient accounts can book appointments.";
            banner.style.display = "block";
            updateConfirmButton();
            return;
          }
          isLoggedInPatient = true;
          banner.style.display = "none";
          const profile = await apiRequest("/patients?self=true", "GET");
          currentPatient = profile.data;
          recap.innerHTML = \`
            <div><b>\${currentPatient.first_name} \${currentPatient.last_name}</b></div>
            <div>\${currentPatient.phone || "No phone on file"}\${currentPatient.email ? " · " + currentPatient.email : ""}</div>
            \${currentPatient.gender ? \`<div>\${currentPatient.gender}</div>\` : ""}
          \`;
          updateConfirmButton();
        } catch (e) {
          isLoggedInPatient = false;
          banner.innerHTML =
            'Please <a href="/login">log in</a> as a patient to book an appointment.';
          banner.style.display = "block";
          recap.innerHTML = "<p>Log in to see your details here.</p>";
          updateConfirmButton();
        }
      }


      // Generate dates (4 dates starting from today)
      function generateDates() {
        const dates = [];
        const today = new Date();
        for (let i = 0; i < 4; i++) {
          const date = new Date(today);
          date.setDate(date.getDate() + i);
          dates.push(date);
        }
        return dates;
      }

      const dates = generateDates();

      // Time slots
      const timeSlots = [
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
      ];

      // State
      let selectedDoctor = null;
      let selectedDate = null;
      let selectedTime = null;
      let selectedPayment = "UPI";

      // Initialize doctor selection
      function initializeDoctors() {
        const container = document.getElementById("doctorContainer");
        container.innerHTML = "";
        doctors.forEach((doctor) => {
          const card = document.createElement("div");
          card.className = "doctor-card";
          card.innerHTML = \`
                    <label>
                        <input type="radio" name="doctor" value="\${doctor.id}" onchange="selectDoctor(\${doctor.id})">
                        <div class="doctor-info">
                            <div class="doctor-name">\${doctor.name}</div>
                            <div class="doctor-speciality">\${doctor.speciality}</div>
                        </div>
                    </label>
                \`;
          container.appendChild(card);
        });
      }

      // Initialize date selection
      function initializeDates() {
        const container = document.getElementById("dateGrid");
        container.innerHTML = "";
        dates.forEach((date, index) => {
          const card = document.createElement("div");
          card.className = "date-card";
          card.onclick = () => selectDate(index, date);
          const dayName = date.toLocaleDateString("en-US", {
            weekday: "short",
          });
          const day = date.getDate();
          const month = date.toLocaleDateString("en-US", { month: "short" });
          card.innerHTML = \`
                    <div class="date-day">\${dayName}</div>
                    <div class="date-label">\${day}<br>\${month}</div>
                \`;
          container.appendChild(card);
        });
      }

      // Initialize time slots
      async function initializeTimeSlots() {
        const container = document.getElementById("timeSlots");
        container.innerHTML = "";
        if (!selectedDate) {
          container.innerHTML =
            '<div class="no-slots">No time slots for this date.</div>';
          return;
        }

        // Grey out slots already booked for this doctor on this date, so
        // it's obvious before someone tries to pick one.
        let bookedSlots = [];
        if (selectedDoctor) {
          try {
            const result = await getBookedDoctorSlots(
              selectedDoctor.id,
              toLocalDateString(selectedDate.date),
            );
            bookedSlots = result.data || [];
          } catch (e) {
            // Don't block booking attempts if this check fails - the real
            // protection is server-side, this is just a helpful hint.
          }
        }

        timeSlots.forEach((slot) => {
          const btn = document.createElement("button");
          btn.className = "time-slot";
          btn.textContent = slot;
          if (bookedSlots.includes(slot)) {
            btn.classList.add("slot-taken");
            btn.disabled = true;
            btn.title = "Already booked - please choose another time";
          } else {
            btn.onclick = () => selectTime(slot);
          }
          container.appendChild(btn);
        });
      }

      // Select doctor
      function selectDoctor(doctorId) {
        selectedDoctor = doctors.find((d) => d.id === doctorId);
        updateDoctorCard();
        updateSummary();
      }

      // Update doctor card styling
      function updateDoctorCard() {
        document.querySelectorAll(".doctor-card").forEach((card) => {
          const input = card.querySelector("input");
          if (input.value == selectedDoctor.id) {
            card.classList.add("selected");
          } else {
            card.classList.remove("selected");
          }
        });
      }

      // Select date
      function selectDate(index, date) {
        selectedDate = { index, date };
        selectedTime = null;
        updateDateCards();
        initializeTimeSlots();
        updateSummary();
      }

      // Update date card styling
      function updateDateCards() {
        document.querySelectorAll(".date-card").forEach((card, index) => {
          if (selectedDate && index === selectedDate.index) {
            card.classList.add("selected");
          } else {
            card.classList.remove("selected");
          }
        });
      }

      // Select time
      function selectTime(slot) {
        selectedTime = slot;
        document.querySelectorAll(".time-slot").forEach((btn) => {
          if (btn.textContent === slot) {
            btn.classList.add("selected");
          } else {
            btn.classList.remove("selected");
          }
        });
        updateSummary();
      }

      // Payment is UPI-only now - this just (re)renders the QR + wires the
      // "Pay via UPI App" deep link and the copy-to-clipboard button.
      const MEDIWELL_UPI_ID = "ashishsinghjii@axl";

      function buildUpiString(amount, note) {
        const amt = Number(amount) > 0 ? Number(amount) : 500;
        return \`upi://pay?pa=\${encodeURIComponent(MEDIWELL_UPI_ID)}&pn=\${encodeURIComponent(
          "MediWell Healthcare",
        )}&am=\${amt}&cu=INR&tn=\${encodeURIComponent(note || "Consultation")}\`;
      }

      function setupUpiPayment() {
        selectedPayment = "UPI";
        const amount = selectedDoctor && selectedDoctor.fee ? selectedDoctor.fee : 500;
        const note = selectedDoctor ? \`Consultation with \${selectedDoctor.name}\` : "Consultation";
        renderPaymentQR(amount, note);

        const appLink = document.getElementById("upiAppLink");
        if (appLink) appLink.href = buildUpiString(amount, note);

        const copyBtn = document.getElementById("copyUpiIdBtn");
        if (copyBtn && !copyBtn.dataset.wired) {
          copyBtn.dataset.wired = "true";
          copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(MEDIWELL_UPI_ID).then(() => {
              const original = copyBtn.textContent;
              copyBtn.textContent = "Copied!";
              setTimeout(() => (copyBtn.textContent = original), 1500);
            });
          });
        }

        // Reset the UTR field each time the payment step is (re)entered,
        // and only allow digits (a real UTR is numeric).
        const utrInput = document.getElementById("utrInput");
        if (utrInput) {
          utrInput.value = "";
          document.getElementById("utrError").style.display = "none";
          if (!utrInput.dataset.wired) {
            utrInput.dataset.wired = "true";
            utrInput.addEventListener("input", () => {
              utrInput.value = utrInput.value.replace(/\\D/g, "").slice(0, 12);
              document.getElementById("utrError").style.display = "none";
            });
          }
        }
      }

      // Renders a QR code encoding a real UPI payment string (your UPI ID)
      // for the currently selected doctor/fee. Regenerated whenever the
      // payment step is (re)shown, since the amount can change per doctor.
      function renderPaymentQR(amount, note) {
        const box = document.getElementById("qrcodeBox");
        box.innerHTML = "";
        const upiString = buildUpiString(amount, note);
        if (window.QRCode) {
          new QRCode(box, { text: upiString, width: 170, height: 170 });
        } else {
          box.textContent = "QR code unavailable - use the UPI ID below.";
        }
      }

      // Update summary
      function updateSummary() {
        const doctorDisplay = document.getElementById("selectedDoctorDisplay");
        const specialityDisplay = document.getElementById(
          "selectedSpecialityDisplay",
        );
        const dateDisplay = document.getElementById("selectedDateDisplay");
        const timeDisplay = document.getElementById("selectedTimeDisplay");
        const feeDisplay = document.getElementById("consultationFeeDisplay");

        if (selectedDoctor) {
          doctorDisplay.textContent = selectedDoctor.name;
          doctorDisplay.classList.remove("not-selected");
          specialityDisplay.textContent = selectedDoctor.speciality;
          specialityDisplay.classList.remove("not-selected");
          feeDisplay.textContent = selectedDoctor.fee
            ? \`₹\${selectedDoctor.fee}\`
            : "Payable at hospital";
        } else {
          doctorDisplay.textContent = "Not selected";
          doctorDisplay.classList.add("not-selected");
          specialityDisplay.textContent = "Not selected";
          specialityDisplay.classList.add("not-selected");
          feeDisplay.textContent = "Payable at hospital";
        }

        if (selectedDate) {
          const date = selectedDate.date;
          const dateStr = date.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });
          dateDisplay.textContent = dateStr;
          dateDisplay.classList.remove("not-selected");
        } else {
          dateDisplay.textContent = "Not selected";
          dateDisplay.classList.add("not-selected");
        }

        if (selectedTime) {
          timeDisplay.textContent = selectedTime;
          timeDisplay.classList.remove("not-selected");
        } else {
          timeDisplay.textContent = "Not selected";
          timeDisplay.classList.add("not-selected");
        }

        updateConfirmButton();
      }

      // Validate form
      function validateForm() {
        if (!isLoggedInPatient) {
          alert("Please log in as a patient before booking an appointment.");
          return false;
        }
        if (!selectedDoctor) {
          alert("Please select a doctor");
          return false;
        }
        if (!selectedDate) {
          alert("Please select a date");
          return false;
        }
        if (!selectedTime) {
          alert("Please select a time slot");
          return false;
        }
        return true;
      }

      // Update Proceed to Payment button state (step 1)
      function updateConfirmButton() {
        const proceedBtn = document.getElementById("proceedBtn");
        const isComplete =
          isLoggedInPatient && selectedDoctor && selectedDate && selectedTime;
        proceedBtn.disabled = !isComplete;
      }

      // Move from Step 1 (selection) to Step 2 (billing & payment)
      function proceedToPayment() {
        if (!validateForm()) return;

        document.getElementById("paySummaryDoctor").textContent = selectedDoctor.name;
        document.getElementById("paySummarySpeciality").textContent = selectedDoctor.speciality;
        document.getElementById("paySummaryDate").textContent = selectedDate.date.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
        document.getElementById("paySummaryTime").textContent = selectedTime;
        const feeText = selectedDoctor.fee ? \`₹\${selectedDoctor.fee}\` : "Payable at hospital";
        document.getElementById("paySummaryFee").textContent = feeText;
        document.getElementById("paySummarySubtotal").textContent = feeText;

        const recapEl = document.getElementById("paySummaryPatient");
        if (currentPatient) {
          recapEl.innerHTML = \`
            <div><b>\${currentPatient.first_name} \${currentPatient.last_name}</b></div>
            <div>\${currentPatient.phone || "No phone on file"}\${currentPatient.email ? " · " + currentPatient.email : ""}</div>
          \`;
        }

        setupUpiPayment();

        document.getElementById("selectionStep").style.display = "none";
        document.getElementById("paymentStep").style.display = "block";
        window.scrollTo(0, 0);
      }

      function backToSelection() {
        document.getElementById("paymentStep").style.display = "none";
        document.getElementById("selectionStep").style.display = "block";
        window.scrollTo(0, 0);
      }

      // Payment is UPI-only now - the one thing that DOES need validating
      // is the UPI transaction ID (UTR), which proves a payment actually
      // happened. Without it, this alerts clearly and blocks the booking -
      // that's what stops "clicked Paid without paying".
      function validatePaymentMethodInputs() {
        const utrInput = document.getElementById("utrInput");
        const errorEl = document.getElementById("utrError");
        const value = utrInput ? utrInput.value.trim() : "";

        if (!/^[0-9]{12}$/.test(value)) {
          const message = !value
            ? "Payment not received. Please complete the payment via the QR code or UPI ID above, then enter the 12-digit UPI transaction ID (UTR) from your UPI app before confirming."
            : "That doesn't look like a valid UTR — it should be exactly 12 digits, exactly as shown in your UPI app.";
          if (errorEl) {
            errorEl.textContent = message;
            errorEl.style.display = "block";
          }
          alert(message);
          if (utrInput) utrInput.focus();
          return false;
        }
        return true;
      }

      // Format a JS Date as a local YYYY-MM-DD string (avoids the UTC
      // off-by-one-day issue that toISOString() has near midnight).
      function toLocalDateString(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return \`\${y}-\${m}-\${d}\`;
      }

      // Confirm booking
      async function confirmBooking() {
        if (!validateForm() || !validatePaymentMethodInputs()) {
          return;
        }

        const confirmBtn = document.getElementById("confirmBtn");
        const utrValue = document.getElementById("utrInput").value.trim();
        confirmBtn.disabled = true;
        confirmBtn.textContent = "Verifying payment…";

        try {
          const result = await bookAppointment({
            doctorId: selectedDoctor.id,
            appointmentDate: toLocalDateString(selectedDate.date),
            slotTime: selectedTime,
            visitType: "In-person",
            reason: null,
            paymentMethod: selectedPayment,
            transactionRef: utrValue,
          });

          const bill = result.data.bill;
          const paymentLine =
            bill.paymentStatus === "Paid"
              ? \`Payment of ₹\${bill.amount} received via \${selectedPayment}. You're all set.\`
              : \`₹\${bill.amount} due at the hospital - pay at the reception during your visit.\`;

          alert(
            \`Appointment confirmed with \${selectedDoctor.name} on \` +
              \`\${selectedDate.date.toLocaleDateString("en-IN")} at \${selectedTime}.\\n\\n\` +
              \`\${paymentLine}\\n\\nYou'll find it on your dashboard now.\`
          );
          window.location.href = "/patient";
        } catch (err) {
          alert(err.message || "Booking failed. Please try again.");
          confirmBtn.disabled = false;
          confirmBtn.textContent = "I've Paid — Confirm Booking";
        }
      }

      // Initialize on page load
      window.addEventListener("DOMContentLoaded", async () => {
        await loadDoctors();
        initializeDoctors();
        initializeDates();
        initializeTimeSlots();
        updateSummary();
        await checkLoginAndPrefill();

        // Support deep-linking from a doctor card elsewhere on the site,
        // e.g. appointment.html?doctorId=3
        const params = new URLSearchParams(window.location.search);
        const preselectId = Number(params.get("doctorId"));
        if (preselectId) {
          const radio = document.querySelector(
            \`input[name="doctor"][value="\${preselectId}"]\`
          );
          if (radio) {
            radio.checked = true;
            selectDoctor(preselectId);
          }
        }
        // Payment is UPI-only now, so there's nothing left to preselect -
        // setupUpiPayment() always runs once Step 2 is reached.
      });
    `];function cc(){return R.useEffect(()=>{document.title=Ym;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=Qm,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of Km)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"mediwell-page-root",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"header",children:e.jsx("h1",{children:"Billing & Payment"})}),e.jsx("div",{id:"authBanner",style:{display:"none",background:"#fff3cd",color:"#664d03",border:"1px solid #ffe69c",borderRadius:"8px",padding:"12px 16px",marginBottom:"16px",fontSize:"14px"}}),e.jsx("div",{id:"selectionStep",children:e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"left-section",children:[e.jsxs("div",{className:"doctor-section",children:[e.jsx("div",{className:"section-title select-doctor",children:"Select Doctor"}),e.jsx("div",{id:"doctorContainer"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"section-title select-date",children:"Select Date"}),e.jsx("div",{className:"date-grid",id:"dateGrid"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"section-title patient-details",children:"Booking For"}),e.jsx("div",{id:"patientRecap",className:"patient-recap",children:e.jsx("p",{children:"Log in to see your details here."})})]})]}),e.jsxs("div",{className:"right-section",children:[e.jsxs("div",{className:"summary-box",children:[e.jsxs("div",{className:"summary-item",children:[e.jsx("span",{className:"summary-label",children:"Selected Doctor:"}),e.jsx("span",{className:"summary-value not-selected",id:"selectedDoctorDisplay",children:"Not selected"})]}),e.jsxs("div",{className:"summary-item",children:[e.jsx("span",{className:"summary-label",children:"Doctor Speciality:"}),e.jsx("span",{className:"summary-value not-selected",id:"selectedSpecialityDisplay",children:"Not selected"})]}),e.jsxs("div",{className:"summary-item",children:[e.jsx("span",{className:"summary-label",children:"Selected Date:"}),e.jsx("span",{className:"summary-value not-selected",id:"selectedDateDisplay",children:"Not selected"})]}),e.jsxs("div",{className:"summary-item",children:[e.jsx("span",{className:"summary-label",children:"Selected Time:"}),e.jsx("span",{className:"summary-value not-selected",id:"selectedTimeDisplay",children:"Not selected"})]}),e.jsx("div",{className:"fee-section",children:e.jsxs("div",{className:"consultation-fee",children:[e.jsx("span",{className:"summary-label",children:"Consultation Fee:"}),e.jsx("span",{className:"fee-amount",id:"consultationFeeDisplay",children:"₹600"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"section-title time-slots-label",children:"Available Time Slots"}),e.jsx("div",{className:"time-slots",id:"timeSlots"})]}),e.jsx("button",{className:"confirm-btn",id:"proceedBtn",onClick:()=>window.__mediwellRun("proceedToPayment()"),disabled:"",children:"Proceed to Payment"})]})]})}),e.jsx("div",{id:"paymentStep",style:{display:"none"},children:e.jsxs("div",{className:"billing-summary",children:[e.jsx("button",{className:"back-link",onClick:()=>window.__mediwellRun("backToSelection()"),children:"← Back to selection"}),e.jsxs("div",{className:"checkout-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Billing & Payment"}),e.jsx("p",{className:"checkout-subtitle",children:"Review your appointment and pay via UPI"})]}),e.jsx("span",{className:"secure-badge",children:"🔒 100% Secure Checkout"})]}),e.jsxs("div",{className:"checkout-grid",children:[e.jsxs("div",{className:"checkout-col-left",children:[e.jsxs("div",{className:"checkout-card",children:[e.jsx("div",{className:"checkout-card-title",children:"Billing Summary"}),e.jsxs("div",{className:"checkout-line",children:[e.jsx("span",{children:"Doctor"}),e.jsx("span",{id:"paySummaryDoctor",className:"checkout-line-value"})]}),e.jsxs("div",{className:"checkout-line",children:[e.jsx("span",{children:"Speciality"}),e.jsx("span",{id:"paySummarySpeciality",className:"checkout-line-value"})]}),e.jsxs("div",{className:"checkout-line",children:[e.jsx("span",{children:"Date"}),e.jsx("span",{id:"paySummaryDate",className:"checkout-line-value"})]}),e.jsxs("div",{className:"checkout-line",children:[e.jsx("span",{children:"Time"}),e.jsx("span",{id:"paySummaryTime",className:"checkout-line-value"})]}),e.jsxs("div",{className:"checkout-line",children:[e.jsx("span",{children:"Consultation Fee"}),e.jsx("span",{id:"paySummarySubtotal",className:"checkout-line-value"})]}),e.jsx("div",{className:"checkout-divider"}),e.jsxs("div",{className:"checkout-line checkout-total",children:[e.jsx("span",{children:"Total Due"}),e.jsx("span",{id:"paySummaryFee",className:"fee-amount",children:"₹600"})]})]}),e.jsxs("div",{className:"checkout-card",children:[e.jsx("div",{className:"checkout-card-title",children:"Booking For"}),e.jsx("div",{id:"paySummaryPatient",className:"checkout-patient-recap"})]})]}),e.jsxs("div",{className:"checkout-col-right",children:[e.jsx("div",{className:"checkout-card-title",children:"Pay via UPI"}),e.jsx("div",{className:"pay-method-detail",id:"payMethodPanel",children:e.jsx("div",{className:"pay-panel active","data-panel":"UPI",children:e.jsxs("div",{className:"qr-panel",children:[e.jsx("div",{id:"qrcodeBox"}),e.jsxs("div",{className:"upi-id-row",children:[e.jsx("code",{id:"upiIdText",children:"ashishsinghjii@axl"}),e.jsx("button",{type:"button",className:"copy-btn",id:"copyUpiIdBtn",children:"Copy"})]}),e.jsx("a",{href:"#",id:"upiAppLink",className:"upi-app-link",children:"Pay via UPI App"}),e.jsx("p",{className:"pay-hint",children:'Scan the QR code with any UPI app (Google Pay, PhonePe, Paytm, etc.) or tap "Pay via UPI App" on your phone to pay.'}),e.jsxs("div",{className:"utr-field",children:[e.jsxs("label",{htmlFor:"utrInput",children:["UPI Transaction ID (UTR) ",e.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),e.jsx("input",{type:"text",id:"utrInput",inputMode:"numeric",maxLength:"12",placeholder:"e.g. 402812345678",autoComplete:"off"}),e.jsx("div",{className:"utr-error",id:"utrError"})]}),e.jsxs("p",{className:"pay-hint",children:["After paying, open your UPI app's transaction history and enter the ",e.jsx("b",{children:"12-digit transaction ID (UTR)"})," above — that's what confirms your payment."]})]})})})]})]}),e.jsx("div",{className:"checkout-footer",children:e.jsx("button",{className:"confirm-btn",id:"confirmBtn",onClick:()=>window.__mediwellRun("confirmBooking()"),children:"I've Paid — Confirm Booking"})})]})})]})})})}const Xm="MediWell Health Care — Payment",Jm=`
      :root {
        --primary: #1a7a8a;
        --primary-dk: #135e6b;
        --ink: #1e293b;
        --muted: #64748b;
        --line: #e2e8f0;
        --bg: #f4f8f8;
        --green: #16a34a;
      }
      * {
        box-sizing: border-box;
      }
      body {
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: var(--bg);
        color: var(--ink);
        margin: 0;
        padding: 40px 20px;
        min-height: 100vh;
      }
      .pay-page {
        max-width: 960px;
        margin: 0 auto;
      }
      .pay-header {
        text-align: center;
        margin-bottom: 28px;
      }
      .pay-header h1 {
        font-size: 1.7rem;
        margin: 0 0 6px;
        color: var(--ink);
      }
      .pay-header p {
        color: var(--muted);
        margin: 0;
        font-size: 0.95rem;
      }
      .pay-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
        background: #fff;
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
      }
      @media (max-width: 760px) {
        .pay-container {
          grid-template-columns: 1fr;
        }
      }

      /* LEFT: order / booking summary */
      .summary-side {
        padding: 36px 34px;
        border-right: 1px solid var(--line);
        display: flex;
        flex-direction: column;
      }
      @media (max-width: 760px) {
        .summary-side {
          border-right: none;
          border-bottom: 1px solid var(--line);
        }
      }
      .summary-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--ink);
        margin-bottom: 20px;
      }
      .summary-line {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        padding: 10px 0;
        border-bottom: 1px dashed var(--line);
        font-size: 0.92rem;
      }
      .summary-line span:first-child {
        color: var(--muted);
      }
      .summary-line span:last-child {
        font-weight: 600;
        text-align: right;
      }
      .summary-total {
        margin-top: 18px;
        padding-top: 18px;
        border-top: 2px solid var(--line);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .summary-total span:first-child {
        font-weight: 700;
        color: var(--ink);
      }
      .summary-total span:last-child {
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--primary);
      }
      .secure-note {
        margin-top: auto;
        padding-top: 24px;
        font-size: 12.5px;
        color: var(--muted);
        display: flex;
        align-items: center;
        gap: 6px;
      }

      /* RIGHT: UPI / QR payment */
      .pay-side {
        padding: 36px 34px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .pay-side h3 {
        margin: 0 0 6px;
        font-size: 1.05rem;
      }
      .pay-side .pay-sub {
        color: var(--muted);
        font-size: 0.88rem;
        margin: 0 0 22px;
      }
      #qrcodeBox {
        padding: 14px;
        background: #fff;
        border: 1px solid var(--line);
        border-radius: 14px;
        margin-bottom: 18px;
        min-height: 190px;
        min-width: 190px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .upi-id-row {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--bg);
        border: 1px solid var(--line);
        border-radius: 10px;
        padding: 10px 14px;
        margin-bottom: 16px;
        width: 100%;
        max-width: 300px;
      }
      .upi-id-row code {
        flex: 1;
        font-size: 0.92rem;
        font-weight: 700;
        color: var(--ink);
        letter-spacing: 0.2px;
      }
      .copy-btn {
        border: none;
        background: var(--primary);
        color: #fff;
        padding: 6px 10px;
        border-radius: 7px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .copy-btn:hover {
        background: var(--primary-dk);
      }
      .upi-app-btn {
        display: inline-block;
        width: 100%;
        max-width: 300px;
        padding: 13px;
        background: var(--primary);
        color: #fff;
        text-decoration: none;
        font-weight: 700;
        border-radius: 10px;
        margin-bottom: 22px;
        font-size: 0.95rem;
      }
      .upi-app-btn:hover {
        background: var(--primary-dk);
      }
      .pay-hint {
        font-size: 12px;
        color: var(--muted);
        margin-bottom: 22px;
        max-width: 320px;
      }
      .confirm-pay-btn {
        width: 100%;
        max-width: 300px;
        padding: 14px;
        background: var(--green);
        color: #fff;
        border: none;
        border-radius: 10px;
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;
      }
      .confirm-pay-btn:hover {
        background: #128a3e;
      }
      .confirm-pay-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .utr-field {
        margin: 0 0 18px;
        width: 100%;
        max-width: 300px;
        text-align: left;
      }
      .utr-field label {
        display: block;
        font-size: 13px;
        font-weight: 700;
        color: var(--ink);
        margin-bottom: 6px;
      }
      .utr-field input {
        width: 100%;
        padding: 11px 12px;
        border: 1.5px solid #cbd5e1;
        border-radius: 8px;
        font-size: 1rem;
        letter-spacing: 1px;
        font-weight: 600;
        text-align: center;
      }
      .utr-field input:focus {
        outline: none;
        border-color: var(--primary);
      }
      .utr-field .utr-error {
        color: #dc2626;
        font-size: 12.5px;
        margin-top: 6px;
        display: none;
      }

      /* Success state */
      .pay-success {
        text-align: center;
        padding: 60px 30px;
      }
      .pay-success .check-circle {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: #dcfce7;
        color: var(--green);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 34px;
        margin: 0 auto 18px;
      }
      .pay-success h2 {
        margin: 0 0 10px;
      }
      .pay-success p {
        color: var(--muted);
        margin: 0 0 26px;
      }
      .pay-success .home-btn {
        display: inline-block;
        padding: 12px 26px;
        background: var(--primary);
        color: #fff;
        text-decoration: none;
        border-radius: 10px;
        font-weight: 700;
      }

      .pay-error-box {
        max-width: 520px;
        margin: 60px auto;
        text-align: center;
        background: #fff;
        border-radius: 16px;
        padding: 40px 30px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
      }
      .pay-error-box a {
        color: var(--primary);
        font-weight: 700;
      }
    `,Zm=["https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js","/legacy/api.js",`
      const UPI_ID = "ashishsinghjii@axl";
      const UPI_PAYEE_NAME = "MediWell Healthcare";

      const params = new URLSearchParams(window.location.search);
      const mode = params.get("mode"); // "doctor" | "service"
      const payPage = document.getElementById("payPage");

      function buildUpiString(amount, note) {
        const amt = Number(amount) > 0 ? Number(amount) : 1;
        return \`upi://pay?pa=\${encodeURIComponent(UPI_ID)}&pn=\${encodeURIComponent(
          UPI_PAYEE_NAME,
        )}&am=\${amt}&cu=INR&tn=\${encodeURIComponent(note || "Payment")}\`;
      }

      function renderErrorPage(message, linkHref, linkLabel) {
        payPage.innerHTML = \`
          <div class="pay-error-box">
            <h2>Nothing to pay for yet</h2>
            <p>\${message}</p>
            <a href="\${linkHref}">\${linkLabel}</a>
          </div>
        \`;
      }

      function renderQR(amount, note) {
        const box = document.getElementById("qrcodeBox");
        box.innerHTML = "";
        if (window.QRCode) {
          new QRCode(box, { text: buildUpiString(amount, note), width: 180, height: 180 });
        } else {
          box.textContent = "QR unavailable — use the UPI ID below.";
        }
      }

      function wireCommonPayRightSide(amount, note) {
        renderQR(amount, note);
        document.getElementById("upiAppBtn").href = buildUpiString(amount, note);
        document.getElementById("copyUpiBtn").addEventListener("click", () => {
          navigator.clipboard.writeText(UPI_ID).then(() => {
            const btn = document.getElementById("copyUpiBtn");
            const original = btn.textContent;
            btn.textContent = "Copied!";
            setTimeout(() => (btn.textContent = original), 1500);
          });
        });
        const utrInput = document.getElementById("utrInput");
        utrInput.addEventListener("input", () => {
          utrInput.value = utrInput.value.replace(/\\D/g, "").slice(0, 12);
          document.getElementById("utrError").style.display = "none";
        });
      }

      // Reads + validates the UPI transaction ID (UTR). Returns the
      // trimmed value on success; on failure it shows the inline error,
      // fires a blocking alert, and returns null - this is what stops
      // "I've Paid" from doing anything when nothing was actually paid.
      function readAndValidateUtr() {
        const utrInput = document.getElementById("utrInput");
        const errorEl = document.getElementById("utrError");
        const value = utrInput.value.trim();
        if (!/^[0-9]{12}$/.test(value)) {
          const message = !value
            ? "Payment not received. Please complete the payment via the QR code or UPI ID above, then enter the 12-digit UPI transaction ID (UTR) from your UPI app before confirming."
            : "That doesn't look like a valid UTR — it should be exactly 12 digits, exactly as shown in your UPI app.";
          errorEl.textContent = message;
          errorEl.style.display = "block";
          alert(message);
          utrInput.focus();
          return null;
        }
        return value;
      }

      function payRightSideHtml(confirmLabel) {
        return \`
          <div class="pay-side">
            <h3>Scan &amp; Pay via UPI</h3>
            <p class="pay-sub">Use any UPI app — Google Pay, PhonePe, Paytm, etc.</p>
            <div id="qrcodeBox"></div>
            <div class="upi-id-row">
              <code>\${UPI_ID}</code>
              <button type="button" class="copy-btn" id="copyUpiBtn">Copy</button>
            </div>
            <a href="#" id="upiAppBtn" class="upi-app-btn">Pay via UPI App</a>
            <p class="pay-hint">Scan the QR code or tap the button above on your phone and complete the payment in your UPI app.</p>
            <div class="utr-field">
              <label for="utrInput">UPI Transaction ID (UTR) <span style="color:#dc2626">*</span></label>
              <input type="text" id="utrInput" inputmode="numeric" maxlength="12" placeholder="e.g. 402812345678" autocomplete="off" />
              <div class="utr-error" id="utrError"></div>
            </div>
            <p class="pay-hint">Find this 12-digit number in your UPI app's transaction history after paying.</p>
            <button type="button" class="confirm-pay-btn" id="confirmPayBtn">\${confirmLabel}</button>
          </div>
        \`;
      }

      function renderSuccess(title, message, homeHref, homeLabel) {
        payPage.innerHTML = \`
          <div class="pay-container" style="grid-template-columns: 1fr;">
            <div class="pay-success">
              <div class="check-circle">✓</div>
              <h2>\${title}</h2>
              <p>\${message}</p>
              <a class="home-btn" href="\${homeHref}">\${homeLabel}</a>
            </div>
          </div>
        \`;
      }

      /* ================= DOCTOR APPOINTMENT MODE ================= */
      /* Requires a logged-in patient. Carries doctorId/date/time from the
         doctor-profile overlay on the homepage, and on confirmation makes
         the same real booking call appointment.html would - so this page
         creates a real appointment + bill just like the full booking flow. */
      async function initDoctorMode() {
        const doctorId = params.get("doctorId");
        const doctorName = params.get("doctorName") || "Selected Doctor";
        const speciality = params.get("speciality") || "";
        const fee = params.get("fee") || "";
        const date = params.get("date"); // YYYY-MM-DD
        const dateLabel = params.get("dateLabel") || date;
        const time = params.get("time");

        if (!doctorId || !date || !time) {
          renderErrorPage(
            "We couldn't find your appointment details. Please pick a doctor, date, and time first.",
            "/appointment",
            "Go to Book Appointment →",
          );
          return;
        }

        let session;
        try {
          const me = await getCurrentUser();
          if (me.data.role !== "PATIENT") throw new Error("not a patient");
          session = me.data;
        } catch (e) {
          window.location.href = "/login";
          return;
        }

        const amount = fee || "500";

        payPage.innerHTML = \`
          <div class="pay-header">
            <h1>Confirm &amp; Pay for Your Appointment</h1>
            <p>Complete your payment to lock in your appointment slot.</p>
          </div>
          <div class="pay-container">
            <div class="summary-side">
              <div class="summary-title">Appointment Summary</div>
              <div class="summary-line"><span>Doctor</span><span>\${doctorName}</span></div>
              <div class="summary-line"><span>Speciality</span><span>\${speciality || "—"}</span></div>
              <div class="summary-line"><span>Date</span><span>\${dateLabel}</span></div>
              <div class="summary-line"><span>Time</span><span>\${time}</span></div>
              <div class="summary-line"><span>Patient</span><span>\${session.fullName}</span></div>
              <div class="summary-total"><span>Total Due</span><span>₹\${amount}</span></div>
              <div class="secure-note">🔒 100% secure — nothing is charged until you confirm.</div>
            </div>
            \${payRightSideHtml("I've Paid — Confirm Booking")}
          </div>
        \`;

        wireCommonPayRightSide(amount, \`Consultation with \${doctorName}\`);

        document.getElementById("confirmPayBtn").addEventListener("click", async (e) => {
          const btn = e.currentTarget;
          const utr = readAndValidateUtr();
          if (!utr) return;

          btn.disabled = true;
          btn.textContent = "Verifying payment…";
          try {
            const result = await bookAppointment({
              doctorId: Number(doctorId),
              appointmentDate: date,
              slotTime: time,
              visitType: "In-person",
              reason: null,
              paymentMethod: "UPI",
              transactionRef: utr,
            });
            const bill = result.data.bill;
            renderSuccess(
              "Payment received & appointment booked!",
              \`₹\${bill.amount} paid via UPI (ref: \${bill.transactionRef}). Your appointment with \${doctorName} on \${dateLabel} at \${time} is confirmed.\`,
              "/patient",
              "Go to my dashboard →",
            );
          } catch (err) {
            alert(err.message || "Booking failed. Please try again.");
            btn.disabled = false;
            btn.textContent = "I've Paid — Confirm Booking";
          }
        });
      }

      /* ================= SERVICE PAYMENT MODE ================= */
      /* Used by the homepage "Our Services" booking modal. On confirm this
         reserves the service+date+time slot via the backend, so a second
         person can't book the exact same service at the exact same time -
         they'll get a clear alert instead. */
      function initServiceMode() {
        const item = params.get("item");
        const amount = params.get("amount");
        const date = params.get("date");
        const time = params.get("time");
        const guestName = params.get("guestName") || "";
        const guestPhone = params.get("guestPhone") || "";
        const guestEmail = params.get("guestEmail") || "";

        if (!item || !amount) {
          renderErrorPage(
            "We couldn't find any service details to pay for.",
            "index.html#services",
            "Browse our services →",
          );
          return;
        }

        payPage.innerHTML = \`
          <div class="pay-header">
            <h1>Complete Your Payment</h1>
            <p>Scan the QR code or use the UPI ID to pay for your selected service.</p>
          </div>
          <div class="pay-container">
            <div class="summary-side">
              <div class="summary-title">Order Summary</div>
              <div class="summary-line"><span>Service</span><span>\${item}</span></div>
              \${date ? \`<div class="summary-line"><span>Date</span><span>\${date}</span></div>\` : ""}
              \${time ? \`<div class="summary-line"><span>Time</span><span>\${time}</span></div>\` : ""}
              <div class="summary-line"><span>Tax (GST)</span><span>₹0</span></div>
              <div class="summary-line"><span>Convenience Fee</span><span>₹0</span></div>
              <div class="summary-total"><span>Total</span><span>₹\${amount}</span></div>
              <div class="secure-note">🔒 100% secure checkout.</div>
            </div>
            \${payRightSideHtml("I've Paid")}
          </div>
        \`;

        wireCommonPayRightSide(amount, item);

        document.getElementById("confirmPayBtn").addEventListener("click", async (e) => {
          const btn = e.currentTarget;
          const utr = readAndValidateUtr();
          if (!utr) return;

          btn.disabled = true;
          btn.textContent = "Verifying payment…";

          // No date/time was captured (shouldn't normally happen, since the
          // booking form requires both) - still require a real UTR before
          // showing success, just skip the slot-reservation call.
          if (!date || !time) {
            renderSuccess(
              "Payment received!",
              \`Thanks — we've received your payment of ₹\${amount} for \${item} (ref: \${utr}). Our team will be in touch shortly.\`,
              "/index",
              "Back to Home →",
            );
            return;
          }

          try {
            await bookServiceSlot({
              serviceName: item,
              bookingDate: date,
              slotTime: time,
              guestName,
              guestPhone,
              guestEmail,
              transactionRef: utr,
            });
            renderSuccess(
              "Payment received & slot reserved!",
              \`Thanks — your \${item} appointment on \${date} at \${time} is confirmed (ref: \${utr}). Our team will be in touch shortly.\`,
              "/index",
              "Back to Home →",
            );
          } catch (err) {
            // 409 = someone already booked this exact service+date+time.
            alert(err.message);
            btn.disabled = false;
            btn.textContent = "I've Paid";
          }
        });
      }

      if (mode === "doctor") {
        initDoctorMode();
      } else if (mode === "service") {
        initServiceMode();
      } else {
        renderErrorPage(
          "Please start from a doctor's profile or a service on the homepage.",
          "/index",
          "Back to Home →",
        );
      }
    `];function pc(){return R.useEffect(()=>{document.title=Xm;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=Jm,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of Zm)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"mediwell-page-root",children:e.jsx("div",{className:"pay-page",id:"payPage"})})})}const eh="MediWell Health Care — Patient Dashboard",nh=`
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@500;600&display=swap");

      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      :root {
        --teal: #0f766e;
        --teal-lt: #ccfbf1;
        --teal-dk: #0d5c56;
        --rose: #e11d48;
        --slate-900: #0f172a;
        --slate-700: #334155;
        --slate-400: #94a3b8;
        --slate-200: #e2e8f0;
        --slate-50: #f8fafc;
        --white: #ffffff;
      }

      body {
        font-family: "Inter", sans-serif;
        background: linear-gradient(
          135deg,
          #eef9f8 0%,
          #f0f9ff 50%,
          #fff7ed 100%
        );
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      /* ── NAV ── */
      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 48px;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--slate-200);
        position: sticky;
        top: 0;
        z-index: 100;
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
      }
      .logo-icon {
        width: 36px;
        height: 36px;
        background: var(--teal);
        border-radius: 10px;
        display: grid;
        place-items: center;
      }
      .logo-icon svg {
        width: 20px;
        height: 20px;
        fill: white;
      }
      .logo-text {
        font-family: "Lora", serif;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--slate-900);
      }
      .nav-link {
        font-size: 0.875rem;
        color: var(--slate-700);
      }
      .nav-link a {
        color: var(--teal);
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
      }
      .nav-link a:hover {
        text-decoration: underline;
      }

      /* ── PAGE WRAPPER ── */
      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
      }

      .page-header {
        text-align: center;
        margin-bottom: 36px;
      }
      .page-header h1 {
        font-family: "Lora", serif;
        font-size: 2rem;
        font-weight: 600;
        color: var(--slate-900);
      }
      .page-header p {
        margin-top: 6px;
        font-size: 0.95rem;
        color: var(--slate-400);
      }

      /* ── STEPPER ── */
      .stepper {
        display: flex;
        align-items: center;
        gap: 0;
        margin-bottom: 40px;
      }
      .step {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--slate-400);
        cursor: default;
      }
      .step.active {
        color: var(--teal);
      }
      .step.complete {
        color: var(--teal);
      }
      .step-num {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 2px solid var(--slate-200);
        display: grid;
        place-items: center;
        font-weight: 600;
        font-size: 0.875rem;
        background: var(--white);
        transition: all 0.3s;
      }
      .step.active .step-num {
        border-color: var(--teal);
        color: var(--teal);
      }
      .step.complete .step-num {
        border-color: var(--teal);
        background: var(--teal);
        color: white;
      }
      .step-line {
        width: 80px;
        height: 2px;
        background: var(--slate-200);
        margin: 0 4px;
        transition: background 0.3s;
      }
      .step-line.done {
        background: var(--teal);
      }

      /* ── CARD ── */
      .card {
        background: white;
        border-radius: 20px;
        box-shadow:
          0 4px 24px rgba(15, 118, 110, 0.08),
          0 1px 4px rgba(0, 0, 0, 0.04);
        padding: 40px 48px;
        width: 100%;
        max-width: 780px;
      }

      /* ── FORM GRID ── */
      .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 22px 28px;
      }
      .col-span-2 {
        grid-column: span 2;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .field label {
        font-size: 0.8125rem;
        font-weight: 500;
        color: var(--slate-700);
      }
      .field label .req {
        color: var(--rose);
        margin-left: 2px;
      }

      .field input,
      .field select,
      .field textarea {
        width: 100%;
        padding: 10px 14px;
        border: 1.5px solid var(--slate-200);
        border-radius: 10px;
        font-size: 0.9rem;
        font-family: inherit;
        color: var(--slate-900);
        background: var(--slate-50);
        outline: none;
        transition:
          border-color 0.2s,
          box-shadow 0.2s;
        appearance: none;
      }
      .field input:focus,
      .field select:focus,
      .field textarea:focus {
        border-color: var(--teal);
        background: white;
        box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.12);
      }
      .field .err-msg {
        font-size: 0.75rem;
        color: var(--rose);
        margin-top: 2px;
        display: none;
      }
      .field.has-error .err-msg {
        display: block;
      }
      .field.has-error input,
      .field.has-error select {
        border-color: var(--rose);
      }

      .field .input-wrap {
        position: relative;
      }
      .field .input-wrap input {
        padding-right: 40px;
      }
      .field .input-wrap .icon {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--slate-400);
        pointer-events: none;
      }

      select {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 12px center;
        padding-right: 36px;
      }

      /* ── SECTION LABEL ── */
      .section-label {
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--teal);
        border-bottom: 1px solid var(--slate-200);
        padding-bottom: 8px;
        margin-bottom: 20px;
      }

      /* ── SUB-SECTION LABEL (inside step 2) ── */
      .sub-section-label {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--slate-400);
        margin-top: 8px;
        margin-bottom: 4px;
        grid-column: span 2;
        padding-top: 14px;
        border-top: 1px dashed var(--slate-200);
      }
      .sub-section-label:first-child {
        border-top: none;
        padding-top: 0;
      }

      /* ── RADIO & CHECKBOX ── */
      .radio-group,
      .check-group {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      .radio-option,
      .check-option {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.875rem;
        color: var(--slate-700);
        cursor: pointer;
      }
      .radio-option input[type="radio"],
      .check-option input[type="checkbox"] {
        display: none;
      }
      .radio-option .rb,
      .check-option .cb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid var(--slate-200);
        background: var(--slate-50);
        display: grid;
        place-items: center;
        flex-shrink: 0;
        transition: all 0.2s;
      }
      .check-option .cb {
        border-radius: 5px;
      }
      .radio-option input:checked ~ .rb {
        border-color: var(--teal);
      }
      .radio-option input:checked ~ .rb::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--teal);
      }
      .check-option input:checked ~ .cb {
        border-color: var(--teal);
        background: var(--teal);
      }
      .check-option input:checked ~ .cb::after {
        content: "";
        width: 10px;
        height: 7px;
        border-left: 2px solid white;
        border-bottom: 2px solid white;
        transform: rotate(-45deg) translateY(-1px);
      }

      /* ── PAIN SCALE ── */
      .pain-scale {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .pain-btn {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 2px solid var(--slate-200);
        background: var(--slate-50);
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--slate-500);
        cursor: pointer;
        transition: all 0.18s;
        display: grid;
        place-items: center;
        font-family: inherit;
      }
      .pain-btn:hover {
        border-color: var(--teal);
        color: var(--teal);
        background: var(--teal-lt);
      }
      .pain-btn.selected {
        background: var(--teal);
        color: white;
        border-color: var(--teal);
      }
      /* .pain-btn [data-level="8"],
      .pain-btn [data-level="9"],
      .pain-btn [data-level="10"] {
      } */
      .pain-btn.selected[data-level="8"],
      .pain-btn.selected[data-level="9"],
      .pain-btn.selected[data-level="10"] {
        background: #e11d48;
        border-color: #e11d48;
      }
      .pain-label-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.7rem;
        color: var(--slate-400);
        margin-top: 4px;
      }

      /* ── STEP PANELS ── */
      .step-panel {
        display: none;
      }
      .step-panel.active {
        display: block;
      }

      /* ── PRICING CARD ── */
      .pricing-box {
        background: var(--slate-50);
        border: 1.5px solid var(--slate-200);
        border-radius: 14px;
        padding: 24px 28px;
        margin-bottom: 28px;
      }
      .pricing-box h3 {
        font-family: "Lora", serif;
        font-size: 1.1rem;
        color: var(--slate-900);
        margin-bottom: 4px;
      }
      .pricing-box .sub {
        font-size: 0.8rem;
        color: var(--slate-400);
        margin-bottom: 18px;
      }
      .pricing-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: var(--slate-700);
        padding: 10px 0;
        border-bottom: 1px dashed var(--slate-200);
      }
      .pricing-row.total {
        border-bottom: none;
        font-weight: 700;
        font-size: 1rem;
        color: var(--slate-900);
        padding-top: 14px;
      }
      .pricing-row.total .price-val {
        color: var(--teal);
      }

      /* ── SUBSCRIPTION ── */
      .subscribe-wrap {
        margin-bottom: 28px;
      }
      .subscribe-wrap p {
        font-size: 0.875rem;
        color: var(--slate-700);
        margin-bottom: 10px;
        font-weight: 500;
      }
      .subscribe-wrap .note {
        font-size: 0.75rem;
        color: var(--slate-400);
        margin-top: 8px;
        line-height: 1.5;
      }

      /* ── ACTIONS ── */
      .actions {
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-top: 32px;
      }
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 32px;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        font-family: inherit;
        cursor: pointer;
        border: none;
        transition: all 0.2s;
        text-decoration: none;
      }
      .btn-primary {
        background: var(--teal);
        color: white;
      }
      .btn-primary:hover {
        background: var(--teal-dk);
        transform: translateY(-1px);
        box-shadow: 0 4px 14px rgba(15, 118, 110, 0.35);
      }
      .btn-outline {
        background: transparent;
        color: var(--teal);
        border: 1.5px solid var(--teal);
      }
      .btn-outline:hover {
        background: var(--teal-lt);
      }

      /* ── SUCCESS ── */
      #step-success {
        text-align: center;
        padding: 20px 0;
      }
      .success-icon {
        width: 72px;
        height: 72px;
        background: var(--teal-lt);
        border-radius: 50%;
        display: grid;
        place-items: center;
        margin: 0 auto 20px;
      }
      .success-icon svg {
        width: 36px;
        height: 36px;
        stroke: var(--teal);
      }
      #step-success h2 {
        font-family: "Lora", serif;
        font-size: 1.6rem;
        color: var(--slate-900);
        margin-bottom: 8px;
      }
      #step-success p {
        font-size: 0.9rem;
        color: var(--slate-400);
      }

      /* ── PAGE VIEWS ── */
      .page-view {
        display: none;
        flex-direction: column;
        align-items: center;
        padding: 40px 16px 60px;
        flex: 1;
      }
      .page-view.active {
        display: flex;
      }

      /* ── SIGN IN CARD ── */
      .signin-card {
        background: white;
        border-radius: 20px;
        box-shadow:
          0 4px 24px rgba(15, 118, 110, 0.08),
          0 1px 4px rgba(0, 0, 0, 0.04);
        padding: 44px 48px;
        width: 100%;
        max-width: 460px;
      }
      .signin-fields {
        display: flex;
        flex-direction: column;
        gap: 18px;
        margin-bottom: 10px;
      }
      .pw-wrap {
        position: relative;
      }
      .pw-wrap input {
        padding-right: 44px;
      }
      .pw-toggle {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        color: var(--slate-400);
        padding: 0;
        display: grid;
        place-items: center;
      }
      .pw-toggle:hover {
        color: var(--teal);
      }
      .forgot-row {
        text-align: right;
        margin-bottom: 22px;
      }
      .forgot-row a {
        font-size: 0.8125rem;
        color: var(--teal);
        text-decoration: none;
        font-weight: 500;
        cursor: pointer;
      }
      .forgot-row a:hover {
        text-decoration: underline;
      }
      .btn-full {
        width: 100%;
        justify-content: center;
        padding: 13px 20px;
        font-size: 0.95rem;
      }
      .divider {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 22px 0;
        color: var(--slate-400);
        font-size: 0.8rem;
      }
      .divider::before,
      .divider::after {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--slate-200);
      }
      .social-btns {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .btn-social {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 11px 20px;
        border-radius: 10px;
        font-size: 0.875rem;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        border: 1.5px solid var(--slate-200);
        background: white;
        color: var(--slate-700);
        transition: all 0.2s;
      }
      .btn-social:hover {
        border-color: var(--teal);
        background: var(--teal-lt);
        color: var(--teal);
      }
      .btn-social svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }
      .register-prompt {
        text-align: center;
        margin-top: 24px;
        font-size: 0.875rem;
        color: var(--slate-400);
      }
      .register-prompt a {
        color: var(--teal);
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
      }
      .register-prompt a:hover {
        text-decoration: underline;
      }

      /* ── MODAL ── */
      .modal-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.4);
        backdrop-filter: blur(4px);
        z-index: 200;
        place-items: center;
      }
      .modal-overlay.open {
        display: grid;
      }
      .modal {
        background: white;
        border-radius: 18px;
        padding: 36px 40px;
        width: 100%;
        max-width: 420px;
        margin: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        animation: popIn 0.25s ease;
      }
      @keyframes popIn {
        from {
          transform: scale(0.92);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
      .modal h3 {
        font-family: "Lora", serif;
        font-size: 1.25rem;
        color: var(--slate-900);
        margin-bottom: 6px;
      }
      .modal p {
        font-size: 0.875rem;
        color: var(--slate-400);
        margin-bottom: 22px;
      }
      .modal-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
      }
      .modal-actions .btn {
        flex: 1;
        justify-content: center;
      }

      /* ── SIGN-IN SUCCESS ── */
      .signin-success {
        text-align: center;
        padding: 16px 0;
      }
      .signin-success h2 {
        font-family: "Lora", serif;
        font-size: 1.5rem;
        color: var(--slate-900);
        margin-bottom: 8px;
      }
      .signin-success p {
        font-size: 0.875rem;
        color: var(--slate-400);
      }

      /* ── INFO CHIP (helper text under label) ── */
      .field .hint {
        font-size: 0.72rem;
        color: var(--slate-400);
        margin-top: -2px;
      }

      @media (max-width: 640px) {
        nav {
          padding: 14px 20px;
        }
        .card {
          padding: 28px 20px;
        }
        .form-grid {
          grid-template-columns: 1fr;
        }
        .col-span-2 {
          grid-column: span 1;
        }
        .sub-section-label {
          grid-column: span 1;
        }
        .step-line {
          width: 40px;
        }
        .step-label {
          display: none;
        }
        .pain-btn {
          width: 32px;
          height: 32px;
          font-size: 0.72rem;
        }
      }
      /* Patient dashboard */
      #view-patient-dashboard {
        display: none;
        background: #f4f8f8;
        min-height: 100vh;
        color: #18323b;
        font-family: "Inter", sans-serif;
      }
      #view-patient-dashboard.active {
        display: block;
      }
      body.patient-dashboard-active > nav,
      body.patient-dashboard-active > #view-register,
      body.patient-dashboard-active > #view-signin {
        display: none;
      }
      .pt-shell {
        display: grid;
        grid-template-columns: 245px 1fr;
      }
      .pt-side {
        background: #fff;
        border-right: 1px solid #dce7e8;
        padding: 24px 14px;
        min-height: 100vh;
      }
      .pt-brand {
        font-size: 26px;
        font-weight: 800;
        color: #005f78;
        padding: 0 12px 28px;
      }
      .pt-brand i {
        font-style: normal;
        background: #005f78;
        color: #fff;
        border-radius: 9px;
        padding: 4px;
        margin-right: 8px;
      }
      .pt-nav {
        display: block !important;
        padding: 0 !important;
        background: transparent !important;
        border: 0 !important;
        position: static !important;
        backdrop-filter: none !important;
      }
      .pt-nav button {
        display: flex;
        width: 100%;
        gap: 12px;
        border: 0;
        background: transparent;
        color: #5b6e73;
        padding: 12px;
        border-radius: 9px;
        text-align: left;
        font-weight: 600;
        cursor: pointer;
      }
      .pt-nav button.active,
      .pt-nav button:hover {
        background: #e1f2f5;
        color: #005f78;
      }
      .pt-top {
        height: 82px;
        background: #fff;
        border-bottom: 1px solid #dce7e8;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 18px;
        padding: 0 32px;
      }
      .pt-profile {
        display: flex;
        gap: 10px;
        align-items: center;
        font-weight: 700;
      }
      .pt-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: #d6eef0;
        color: #005f78;
      }
      .pt-main {
        display: block !important;
        align-items: stretch !important;
        padding: 30px;
        max-width: 1500px;
      }
      .pt-main h1 {
        margin: 0 0 5px;
        font-size: 28px;
      }
      .pt-sub {
        color: #718287;
        margin: 0 0 22px;
        font-size: 14px;
      }
      .pt-grid {
        display: grid;
        grid-template-columns: 1.4fr 1fr;
        gap: 20px;
      }
      .pt-stack {
        display: grid;
        gap: 20px;
      }
      .pt-card {
        background: #fff;
        border: 1px solid #dce7e8;
        border-radius: 15px;
        padding: 20px;
        box-shadow: 0 2px 8px #1736420b;
      }
      .pt-card h2 {
        font-size: 18px;
        margin: 0 0 15px;
      }
      .pt-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
      }
      .pt-stat {
        background: #e1f2f5;
        border-radius: 11px;
        padding: 15px;
      }
      .pt-stat:nth-child(2) {
        background: #edf7e9;
      }
      .pt-stat:nth-child(3) {
        background: #fff1e7;
      }
      .pt-stat span {
        display: block;
        color: #64757a;
        font-size: 12px;
      }
      .pt-stat b {
        font-size: 25px;
        margin-top: 5px;
        display: block;
        color: #005f78;
      }
      .pt-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #e7eeee;
        padding: 13px 0;
        gap: 10px;
      }
      .pt-row:first-of-type {
        border-top: 0;
      }
      .pt-row b,
      .pt-row small {
        display: block;
      }
      .pt-row b {
        font-size: 14px;
      }
      .pt-row small {
        font-size: 12px;
        color: #718287;
        margin-top: 3px;
      }
      .pt-btn {
        border: 1px solid #005f78;
        color: #005f78;
        background: #fff;
        border-radius: 7px;
        padding: 8px 11px;
        font-weight: 700;
        font-size: 12px;
        cursor: pointer;
      }
      .pt-btn.primary {
        background: #005f78;
        color: #fff;
      }
      .pt-actions {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }
      .pt-action {
        border: 1px solid #dce7e8;
        background: #fff;
        border-radius: 11px;
        padding: 15px;
        text-align: left;
        color: #18323b;
        font-weight: 700;
        cursor: pointer;
      }
      .pt-action:hover {
        border-color: #005f78;
        color: #005f78;
      }
      .pt-action span {
        display: block;
        color: #718287;
        font-size: 11px;
        font-weight: 400;
        margin-top: 4px;
      }
      .pt-pills {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      .pt-pill {
        background: #e1f2f5;
        color: #005f78;
        border-radius: 20px;
        padding: 6px 10px;
        font-size: 12px;
      }
      .pt-toast {
        position: fixed;
        right: 20px;
        bottom: 20px;
        background: #16333c;
        color: #fff;
        padding: 13px 16px;
        border-radius: 8px;
        opacity: 0;
        transform: translateY(30px);
        transition: 0.25s;
        z-index: 20;
      }
      .pt-toast.show {
        opacity: 1;
        transform: translateY(0);
      }
      .pt-modal {
        display: none;
        position: fixed;
        inset: 0;
        background: #0d2a3355;
        place-items: center;
        z-index: 10;
      }
      .pt-modal.open {
        display: grid;
      }
      .pt-modal-box {
        background: #fff;
        border-radius: 14px;
        padding: 24px;
        width: min(430px, 90vw);
      }
      .pt-modal-box h2 {
        margin: 0 0 14px;
      }
      .pt-modal-box textarea,
      .pt-modal-box input,
      .pt-modal-box select {
        width: 100%;
        padding: 10px;
        border: 1px solid #dce7e8;
        border-radius: 7px;
        margin: 5px 0 12px;
      }
      .pt-modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 9px;
      }
      @media (max-width: 900px) {
        .pt-shell {
          grid-template-columns: 1fr;
        }
        .pt-side {
          min-height: 0;
          padding: 12px;
        }
        .pt-nav {
          display: flex !important;
          overflow: auto;
        }
        .pt-nav button {
          white-space: nowrap;
          width: auto;
        }
        .pt-brand {
          padding-bottom: 10px;
        }
        .pt-grid {
          grid-template-columns: 1fr;
        }
        .pt-main {
          padding: 20px;
        }
      }
      @media (max-width: 560px) {
        .pt-stats,
        .pt-actions {
          grid-template-columns: 1fr;
        }
        .pt-top {
          padding: 0 15px;
        }
        .pt-main {
          padding: 16px;
        }
      }
      .otp-modal-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        align-items: center;
        justify-content: center;
        padding: 16px;
      }
      .otp-modal-overlay.open {
        display: flex;
      }
      .otp-modal-box {
        background: #fff;
        border-radius: 14px;
        padding: 28px 24px;
        width: 100%;
        max-width: 360px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
      }
      .otp-modal-box h3 {
        margin: 0 0 8px;
        font-size: 19px;
      }
      .otp-modal-hint {
        font-size: 13px;
        color: #666;
        line-height: 1.5;
        margin: 0 0 16px;
      }
      .otp-modal-hint b {
        color: #222;
      }
      .otp-modal-input {
        width: 100%;
        box-sizing: border-box;
        padding: 12px 14px;
        font-size: 20px;
        letter-spacing: 6px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 8px;
        margin-bottom: 10px;
      }
      .otp-modal-error {
        color: #d33;
        font-size: 13px;
        margin-bottom: 10px;
      }
      .otp-modal-submit {
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 8px;
        background: #16a085;
        color: #fff;
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        margin-bottom: 8px;
      }
      .otp-modal-submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .otp-modal-cancel {
        width: 100%;
        padding: 10px;
        border: none;
        background: none;
        color: #888;
        font-size: 14px;
        cursor: pointer;
      }
      @media (max-width: 480px) {
        .otp-modal-box {
          padding: 22px 18px;
        }
      }
      /* ── Standalone dashboard page nav (patient.html) ── */
      #pt-page-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 32px;
        background: rgba(255, 255, 255, 0.92);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--slate-200, #e2e8f0);
        position: sticky;
        top: 0;
        z-index: 500;
      }
      #pt-page-nav .pt-page-logo {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: var(--teal, #0f766e);
        font-weight: 700;
        font-size: 1.05rem;
      }
      #pt-page-nav .pt-page-links {
        display: flex;
        align-items: center;
        gap: 18px;
        font-size: 14px;
        font-weight: 600;
      }
      #pt-page-nav .pt-page-links a,
      #pt-page-nav .pt-page-links button {
        color: var(--teal-dk, #0d5c56);
        text-decoration: none;
        background: none;
        border: none;
        font: inherit;
        cursor: pointer;
      }
      #pt-page-nav .pt-page-links button {
        color: var(--rose, #e11d48);
      }
      /* ---- Real UPI/QR payment widget inside the Pay Now modal ---- */
      .hms-upi-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
      }
      .hms-upi-qr {
        padding: 12px;
        background: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        margin-bottom: 14px;
        min-height: 170px;
        min-width: 170px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .hms-upi-id-row {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--bg, #f4f8f8);
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 9px 12px;
        margin-bottom: 12px;
        width: 100%;
        max-width: 280px;
      }
      .hms-upi-id-row code {
        flex: 1;
        font-size: 0.9rem;
        font-weight: 700;
        color: #1e293b;
      }
      .hms-upi-copy-btn {
        border: none;
        background: var(--teal, #0f766e);
        color: #fff;
        padding: 6px 10px;
        border-radius: 7px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .hms-upi-app-btn {
        display: inline-block;
        width: 100%;
        max-width: 280px;
        padding: 11px;
        background: var(--teal, #0f766e);
        color: #fff;
        text-decoration: none;
        font-weight: 700;
        border-radius: 10px;
        margin-bottom: 14px;
        font-size: 0.9rem;
      }
      .hms-upi-hint {
        font-size: 12px;
        color: #64748b;
        margin: 0 0 14px;
        max-width: 300px;
        line-height: 1.5;
      }
      .hms-utr-label {
        align-self: flex-start;
        font-size: 13px;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 6px;
      }
      .hms-utr-input {
        width: 100%;
        max-width: 280px;
        padding: 11px 12px;
        border: 1.5px solid #cbd5e1;
        border-radius: 8px;
        font-size: 1rem;
        letter-spacing: 1px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 6px;
      }
      .hms-utr-input:focus {
        outline: none;
        border-color: var(--teal, #0f766e);
      }
      .hms-utr-error {
        color: #dc2626;
        font-size: 12.5px;
        max-width: 300px;
        margin-bottom: 6px;
      }
    `,th=["https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js","/legacy/api.js",`
      /* ── AUTH GUARD: only signed-in patients may view this page ── */
      (async function guardAndLoad() {
        try {
          const result = await getCurrentUser();
          if (result.data.role !== "PATIENT") {
            window.location.href = "/login";
            return;
          }
          await loadPatientDashboard(result.data);
        } catch (e) {
          window.location.href = "/login";
        }
      })();

      document.getElementById("ptPageLogoutBtn").addEventListener("click", () => {
        confirmLogout(async () => {
          await logout();
          window.location.href = "/login";
        });
      });

      /* ── DASHBOARD DATA ── */
      async function loadPatientDashboard(session) {
        document.getElementById("ptName").textContent = session.fullName;
        const parts = session.fullName.trim().split(/\\s+/);
        document.getElementById("ptAvatar").textContent = (
          (parts[0]?.[0] || "") + (parts[1]?.[0] || "")
        ).toUpperCase();

        try {
          const profileResult = await apiRequest("/patients?self=true", "GET");
          const p = profileResult.data;
          const pillsEl = document.getElementById("ptHealthPills");
          const pills = [];
          pills.push(
            \`<span class="pt-pill">Blood Group: \${p.blood_group || "Not provided"}</span>\`,
          );
          if (p.smoking_status)
            pills.push(
              \`<span class="pt-pill">Smoking: \${p.smoking_status}</span>\`,
            );
          if (p.alcohol_status)
            pills.push(
              \`<span class="pt-pill">Alcohol: \${p.alcohol_status}</span>\`,
            );
          pillsEl.innerHTML = pills.join("");
        } catch (err) {
          console.error("Could not load patient profile:", err.message);
        }

        try {
          const apptResult = await listAppointments();
          const list = document.getElementById("ptAppointmentsList");
          const appts = apptResult.data;

          document.getElementById("ptStatUpcoming").textContent = appts.filter(
            (a) => a.status !== "Completed" && a.status !== "Cancelled",
          ).length;
          document.getElementById("ptStatCompleted").textContent = appts.filter(
            (a) => a.status === "Completed",
          ).length;

          if (!appts.length) {
            list.innerHTML =
              '<div class="pt-row"><div><b>No appointments booked yet</b><small>Book one from the "Book Appointment" page.</small></div></div>';
          } else {
            list.innerHTML = appts
              .map(
                (a) => \`
              <div class="pt-row">
                <div>
                  <b>Dr. \${a.doctor_name}</b>
                  <small>\${a.appointment_date} · \${a.slot_time || "Time TBD"} · \${a.visit_type} · \${a.status}</small>
                </div>
              </div>\`,
              )
              .join("");
          }

          // Highlight the single soonest upcoming appointment, if any.
          const todayStr = new Date().toISOString().slice(0, 10);
          const upcoming = appts
            .filter(
              (a) => a.appointment_date >= todayStr && a.status !== "Cancelled",
            )
            .sort((a, b) =>
              a.appointment_date.localeCompare(b.appointment_date),
            );
          const nextCard = document.getElementById("ptNextApptCard");
          if (upcoming.length) {
            document.getElementById("ptNextAppt").innerHTML = \`
              <div class="pt-row">
                <div>
                  <b>Dr. \${upcoming[0].doctor_name}</b>
                  <small>\${upcoming[0].appointment_date} · \${upcoming[0].slot_time || "Time TBD"} · \${upcoming[0].visit_type} · \${upcoming[0].status}</small>
                </div>
              </div>\`;
            nextCard.style.display = "";
          } else {
            nextCard.style.display = "none";
          }
        } catch (err) {
          console.error("Could not load appointments:", err.message);
        }

        try {
          const rxResult = await listPrescriptions();
          const rx = rxResult.data;
          document.getElementById("ptStatPrescriptions").textContent =
            rx.length;
          const rxList = document.getElementById("ptPrescriptionsList");
          if (!rx.length) {
            rxList.innerHTML =
              '<div class="pt-row"><div><b>No prescriptions yet</b><small>Medications your doctor prescribes will show up here.</small></div></div>';
          } else {
            rxList.innerHTML = rx
              .map(
                (r) => \`
              <div class="pt-row">
                <div>
                  <b>\${r.medication_name}\${r.dosage ? " · " + r.dosage : ""}</b>
                  <small>Dr. \${r.doctor_name}\${r.instructions ? " · " + r.instructions : ""}</small>
                </div>
              </div>\`,
              )
              .join("");
          }
        } catch (err) {
          console.error("Could not load prescriptions:", err.message);
        }

        try {
          const billResult = await listMyBills();
          const bills = billResult.data;
          const billsList = document.getElementById("ptBillsList");
          if (!bills.length) {
            billsList.innerHTML =
              '<div class="pt-row"><div><b>No bills yet</b><small>Bills from the front desk will show up here.</small></div></div>';
          } else {
            billsList.innerHTML = bills
              .map(
                (b) => \`
              <div class="pt-row">
                <div>
                  <b>\${b.description}</b>
                  <small>₹\${b.amount} · \${b.payment_status}\${b.payment_method ? " · " + b.payment_method : ""}</small>
                </div>
                \${
                  b.payment_status === "Pending"
                    ? \`<button class="pt-btn primary" data-pay-bill="\${b.bill_id}" data-pay-amount="\${b.amount}">Pay now</button>\`
                    : \`<span class="pt-pill">Paid</span>\`
                }
              </div>\`,
              )
              .join("");
          }
        } catch (err) {
          console.error("Could not load bills:", err.message);
        }
      }

      /* Patient dashboard interactions */
      const ptToast = document.getElementById("ptToast");
      function patientToast(message) {
        ptToast.textContent = message;
        ptToast.classList.add("show");
        setTimeout(() => ptToast.classList.remove("show"), 2600);
      }
      function openPatientModal(title, content, action) {
        document.getElementById("ptModalTitle").textContent = title;
        document.getElementById("ptModalContent").innerHTML = content;
        document.getElementById("ptSubmit").textContent = action;
        document.getElementById("ptModal").classList.add("open");
      }
      document
        .querySelectorAll("[data-pt]")
        .forEach((button) =>
          button.addEventListener("click", () =>
            patientToast(button.dataset.pt),
          ),
        );
      document.querySelectorAll(".pt-nav button").forEach((button) => {
        button.addEventListener("click", () => {
          document.querySelectorAll(".pt-nav button").forEach((item) => item.classList.remove("active"));
          button.classList.add("active");
          const label = button.textContent.trim().toLowerCase();
          const words = label.includes("appointment") ? ["upcoming appointments"] : label.includes("prescription") ? ["recent prescriptions"] : label.includes("medical history") ? ["medical history"] : label.includes("lab") ? ["lab test reports"] : label.includes("payment") || label.includes("bill") ? ["payments & bills"] : label.includes("notification") ? ["notifications"] : [];
          const heading = [...document.querySelectorAll("h2")].find((h) => words.some((word) => h.textContent.trim().toLowerCase().includes(word)));
          if (heading) heading.closest("section")?.scrollIntoView({ behavior: "smooth", block: "start" });
          else window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
      document.getElementById("ptBell").onclick = () =>
        patientToast(
          "4 notifications: appointment, medicine, vaccination, and bill reminders.",
        );
      document.getElementById("ptChat").onclick = () =>
        openPatientModal(
          "Secure Chat with Doctor",
          '<textarea placeholder="Type your follow-up question for your doctor..."></textarea>',
          "Send message",
        );

      let activePayBillId = null;

      function openPayBillModal(billId, amount) {
        activePayBillId = billId;
        // Payment is UPI/QR-only - real QR + UPI ID, with a required
        // 12-digit UPI transaction ID (UTR) to actually verify the
        // payment before the bill can be marked Paid.
        openPatientModal("Pay Hospital Bill", '<div id="ptUpiPayArea"></div>', \`Pay ₹\${amount}\`);
        renderUpiPayBlock(document.getElementById("ptUpiPayArea"), amount, "Hospital bill payment");
      }

      // Sidebar "Pay Bills" shortcut just brings the Payments & Bills card
      // into view - the actual payment happens per-bill (see below), since
      // a bill has to be picked to know what's being paid.
      document.getElementById("ptPay").onclick = () =>
        document
          .getElementById("ptBillsList")
          .scrollIntoView({ behavior: "smooth", block: "center" });

      // Real per-bill "Pay now" buttons are rendered dynamically inside
      // #ptBillsList (see loadPatientDashboard), so they're wired here via
      // event delegation rather than a direct listener.
      document.getElementById("ptBillsList").addEventListener("click", (e) => {
        const btn = e.target.closest("[data-pay-bill]");
        if (!btn) return;
        openPayBillModal(btn.dataset.payBill, btn.dataset.payAmount);
      });

      document.getElementById("ptReview").onclick = () =>
        openPatientModal(
          "Rate Your Doctor",
          '<select><option>★★★★★ Excellent</option><option>★★★★ Good</option><option>★★★ Average</option><option>★★ Needs improvement</option></select><textarea placeholder="Share your experience (optional)"></textarea>',
          "Submit review",
        );
      document.getElementById("ptClose").onclick = () =>
        document.getElementById("ptModal").classList.remove("open");
      document.getElementById("ptModal").onclick = (event) => {
        if (event.target.id === "ptModal")
          event.currentTarget.classList.remove("open");
      };
      document.getElementById("ptSubmit").onclick = async () => {
        const title = document.getElementById("ptModalTitle").textContent;

        if (title === "Pay Hospital Bill" && activePayBillId) {
          // Blocks (with a clear alert) unless a valid 12-digit UPI
          // transaction ID has actually been entered - this is what
          // prevents "clicked Paid without paying".
          const utr = readAndValidateUtr();
          if (!utr) return;

          const submitBtn = document.getElementById("ptSubmit");
          submitBtn.disabled = true;
          submitBtn.textContent = "Verifying payment…";
          try {
            await payBill(activePayBillId, utr);
            document.getElementById("ptModal").classList.remove("open");
            patientToast("Payment verified — bill marked as paid.");
            activePayBillId = null;
            // Re-fetch everything fresh (not from any cache) so the
            // dashboard reflects the just-verified payment immediately.
            const me = await getCurrentUser();
            await loadPatientDashboard(me.data);
          } catch (err) {
            alert(err.message || "Payment could not be verified. Please try again.");
          } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Confirm";
          }
          return;
        }

        document.getElementById("ptModal").classList.remove("open");
        patientToast(
          title === "Rate Your Doctor"
            ? "Thank you for your review."
            : "Message sent securely to your doctor.",
        );
      };

    `];function uc(){return R.useEffect(()=>{document.title=eh;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=nh,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of th)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mediwell-page-root",children:[e.jsxs("nav",{id:"pt-page-nav",children:[e.jsxs("a",{className:"pt-page-logo",href:"/",children:[e.jsx("span",{children:"✚"}),e.jsx("span",{children:"MediWell Health Care"})]}),e.jsxs("div",{className:"pt-page-links",children:[e.jsx("a",{href:"/",children:"🏠 Home"}),e.jsx("a",{href:"/appointment",children:"📅 Appointments"}),e.jsx("button",{type:"button",id:"ptPageLogoutBtn",children:"⏻ Log Out"})]})]}),e.jsx("section",{id:"view-patient-dashboard",className:"active",children:e.jsxs("div",{children:[e.jsxs("header",{className:"pt-top",children:[e.jsx("button",{className:"pt-btn",id:"ptBell",children:"🔔 4"}),e.jsxs("div",{className:"pt-profile",children:[e.jsx("span",{className:"pt-avatar",id:"ptAvatar",children:"PS"}),e.jsx("span",{id:"ptName",children:"Patient"})]})]}),e.jsxs("main",{className:"pt-main",children:[e.jsx("h1",{children:"Patient Dashboard"}),e.jsx("p",{className:"pt-sub",children:"Manage your care, health records, appointments, and payments in one place."}),e.jsxs("div",{className:"pt-grid",children:[e.jsxs("div",{className:"pt-stack",children:[e.jsxs("section",{className:"pt-card",children:[e.jsx("h2",{children:"Your Health at a Glance"}),e.jsxs("div",{className:"pt-stats",children:[e.jsxs("div",{className:"pt-stat",children:[e.jsx("span",{children:"Upcoming appointments"}),e.jsx("b",{id:"ptStatUpcoming",children:"0"})]}),e.jsxs("div",{className:"pt-stat",children:[e.jsx("span",{children:"Active prescriptions"}),e.jsx("b",{id:"ptStatPrescriptions",children:"0"})]}),e.jsxs("div",{className:"pt-stat",children:[e.jsx("span",{children:"Completed visits"}),e.jsx("b",{id:"ptStatCompleted",children:"0"})]})]})]}),e.jsxs("section",{className:"pt-card",id:"ptNextApptCard",style:{display:"none"},children:[e.jsx("h2",{children:"Your Next Appointment"}),e.jsx("div",{id:"ptNextAppt"})]}),e.jsxs("section",{className:"pt-card",children:[e.jsx("h2",{children:"Upcoming Appointments"}),e.jsxs("div",{id:"ptAppointmentsList",children:[e.jsxs("div",{className:"pt-row",children:[e.jsxs("div",{children:[e.jsx("b",{children:"Dr. Anya Sharma · Cardiology"}),e.jsx("small",{children:"Tuesday, 28 July · 10:30 AM · Video consultation"})]}),e.jsx("button",{className:"pt-btn","data-pt":"Join video consultation",children:"Join call"})]}),e.jsxs("div",{className:"pt-row",children:[e.jsxs("div",{children:[e.jsx("b",{children:"Dr. Rahul Mehta · General Medicine"}),e.jsx("small",{children:"Friday, 31 July · 04:00 PM · In-person"})]}),e.jsx("button",{className:"pt-btn","data-pt":"Appointment details opened",children:"Details"})]})]})]}),e.jsxs("section",{className:"pt-card",children:[e.jsx("h2",{children:"Recent Prescriptions"}),e.jsxs("div",{id:"ptPrescriptionsList",children:[e.jsxs("div",{className:"pt-row",children:[e.jsxs("div",{children:[e.jsx("b",{children:"Atorvastatin 10mg"}),e.jsx("small",{children:"Dr. Anya Sharma · Take once daily after dinner"})]}),e.jsxs("div",{children:[e.jsx("button",{className:"pt-btn","data-pt":"Prescription downloaded as PDF",children:"Download"}),e.jsx("button",{className:"pt-btn","data-pt":"Preparing prescription for print",children:"Print"})]})]}),e.jsxs("div",{className:"pt-row",children:[e.jsxs("div",{children:[e.jsx("b",{children:"Vitamin D3"}),e.jsx("small",{children:"Dr. Rahul Mehta · One tablet weekly"})]}),e.jsx("button",{className:"pt-btn","data-pt":"Prescription opened",children:"View"})]})]})]}),e.jsxs("section",{className:"pt-card",children:[e.jsx("h2",{children:"Medical History"}),e.jsxs("div",{className:"pt-pills",id:"ptHealthPills",children:[e.jsx("span",{className:"pt-pill",children:"Blood Group: O+"}),e.jsx("span",{className:"pt-pill",children:"No known drug allergies"}),e.jsx("span",{className:"pt-pill",children:"Last check-up: Jul 2026"})]})]})]}),e.jsxs("div",{className:"pt-stack",children:[e.jsxs("section",{className:"pt-card",children:[e.jsx("h2",{children:"Quick Actions"}),e.jsxs("div",{className:"pt-actions",children:[e.jsxs("button",{className:"pt-action","data-pt":"Video consultation room created",children:["📹 Video call",e.jsx("span",{children:"Meet your doctor online"})]}),e.jsxs("button",{className:"pt-action","data-pt":"Audio call requested",children:["☎ Audio call",e.jsx("span",{children:"Request a call"})]}),e.jsxs("button",{className:"pt-action",id:"ptChat",children:["💬 Chat",e.jsx("span",{children:"Secure patient messaging"})]}),e.jsxs("button",{className:"pt-action","data-pt":"Lab report list opened",children:["🧪 Lab reports",e.jsx("span",{children:"Blood, X-ray, MRI, CT, ECG"})]}),e.jsxs("button",{className:"pt-action",id:"ptPay",children:["💳 Pay online",e.jsx("span",{children:"Appointments, lab fees, bills"})]}),e.jsxs("button",{className:"pt-action",id:"ptReview",children:["★ Review doctor",e.jsx("span",{children:"Rate your experience"})]})]})]}),e.jsxs("section",{className:"pt-card",children:[e.jsx("h2",{children:"Lab Test Reports"}),e.jsxs("div",{className:"pt-row",children:[e.jsxs("div",{children:[e.jsx("b",{children:"Complete Blood Count"}),e.jsx("small",{children:"Ready · 24 July 2026"})]}),e.jsx("button",{className:"pt-btn","data-pt":"Blood report downloaded",children:"Download"})]}),e.jsxs("div",{className:"pt-row",children:[e.jsxs("div",{children:[e.jsx("b",{children:"ECG Report"}),e.jsx("small",{children:"Ready · 21 July 2026"})]}),e.jsx("button",{className:"pt-btn","data-pt":"ECG report downloaded",children:"Download"})]}),e.jsxs("div",{className:"pt-row",children:[e.jsxs("div",{children:[e.jsx("b",{children:"MRI Scan"}),e.jsx("small",{children:"Ready · 17 July 2026"})]}),e.jsx("button",{className:"pt-btn","data-pt":"MRI report downloaded",children:"Download"})]})]}),e.jsxs("section",{className:"pt-card",children:[e.jsx("h2",{children:"Payments & Bills"}),e.jsx("div",{id:"ptBillsList",children:e.jsx("div",{className:"pt-row",children:e.jsxs("div",{children:[e.jsx("b",{children:"Payment options"}),e.jsx("small",{children:"UPI · Credit Card · Debit Card · Net Banking"})]})})})]}),e.jsxs("section",{className:"pt-card",children:[e.jsx("h2",{children:"Notifications"}),e.jsx("div",{className:"pt-row",children:e.jsxs("div",{children:[e.jsx("b",{children:"Medicine reminder"}),e.jsx("small",{children:"Take Atorvastatin after dinner today."})]})}),e.jsx("div",{className:"pt-row",children:e.jsxs("div",{children:[e.jsx("b",{children:"Vaccination reminder"}),e.jsx("small",{children:"Flu vaccination is due next week."})]})})]})]})]})]})]})}),e.jsx("div",{className:"pt-modal",id:"ptModal",children:e.jsxs("div",{className:"pt-modal-box",children:[e.jsx("h2",{id:"ptModalTitle",children:"Online Payment"}),e.jsx("div",{id:"ptModalContent"}),e.jsxs("div",{className:"pt-modal-actions",children:[e.jsx("button",{className:"pt-btn",id:"ptClose",children:"Cancel"}),e.jsx("button",{className:"pt-btn primary",id:"ptSubmit",children:"Confirm"})]})]})}),e.jsx("div",{className:"pt-toast",id:"ptToast"})]})})}const rh="MediCare — Patient Registration",ih=`
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@500;600&display=swap");

      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      :root {
        --teal: #0f766e;
        --teal-lt: #ccfbf1;
        --teal-dk: #0d5c56;
        --rose: #e11d48;
        --slate-900: #0f172a;
        --slate-700: #334155;
        --slate-400: #94a3b8;
        --slate-200: #e2e8f0;
        --slate-50: #f8fafc;
        --white: #ffffff;
      }

      body {
        font-family: "Inter", sans-serif;
        background: linear-gradient(
          135deg,
          #eef9f8 0%,
          #f0f9ff 50%,
          #fff7ed 100%
        );
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      /* ── NAV ── */
      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 48px;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--slate-200);
        position: sticky;
        top: 0;
        z-index: 100;
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
      }
      .logo-icon {
        width: 36px;
        height: 36px;
        background: var(--teal);
        border-radius: 10px;
        display: grid;
        place-items: center;
      }
      .logo-icon svg {
        width: 20px;
        height: 20px;
        fill: white;
      }
      .logo-text {
        font-family: "Lora", serif;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--slate-900);
      }
      .nav-link {
        font-size: 0.875rem;
        color: var(--slate-700);
      }
      .nav-link a {
        color: var(--teal);
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
      }
      .nav-link a:hover {
        text-decoration: underline;
      }

      /* ── PAGE WRAPPER ── */
      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
      }

      .page-header {
        text-align: center;
        margin-bottom: 36px;
      }
      .page-header h1 {
        font-family: "Lora", serif;
        font-size: 2rem;
        font-weight: 600;
        color: var(--slate-900);
      }
      .page-header p {
        margin-top: 6px;
        font-size: 0.95rem;
        color: var(--slate-400);
      }

      /* ── STEPPER ── */
      .stepper {
        display: flex;
        align-items: center;
        gap: 0;
        margin-bottom: 40px;
      }
      .step {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--slate-400);
        cursor: default;
      }
      .step.active {
        color: var(--teal);
      }
      .step.complete {
        color: var(--teal);
      }
      .step-num {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 2px solid var(--slate-200);
        display: grid;
        place-items: center;
        font-weight: 600;
        font-size: 0.875rem;
        background: var(--white);
        transition: all 0.3s;
      }
      .step.active .step-num {
        border-color: var(--teal);
        color: var(--teal);
      }
      .step.complete .step-num {
        border-color: var(--teal);
        background: var(--teal);
        color: white;
      }
      .step-line {
        width: 80px;
        height: 2px;
        background: var(--slate-200);
        margin: 0 4px;
        transition: background 0.3s;
      }
      .step-line.done {
        background: var(--teal);
      }

      /* ── CARD ── */
      .card {
        background: white;
        border-radius: 20px;
        box-shadow:
          0 4px 24px rgba(15, 118, 110, 0.08),
          0 1px 4px rgba(0, 0, 0, 0.04);
        padding: 40px 48px;
        width: 100%;
        max-width: 780px;
      }

      /* ── FORM GRID ── */
      .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 22px 28px;
      }
      .col-span-2 {
        grid-column: span 2;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .field label {
        font-size: 0.8125rem;
        font-weight: 500;
        color: var(--slate-700);
      }
      .field label .req {
        color: var(--rose);
        margin-left: 2px;
      }

      .field input,
      .field select,
      .field textarea {
        width: 100%;
        padding: 10px 14px;
        border: 1.5px solid var(--slate-200);
        border-radius: 10px;
        font-size: 0.9rem;
        font-family: inherit;
        color: var(--slate-900);
        background: var(--slate-50);
        outline: none;
        transition:
          border-color 0.2s,
          box-shadow 0.2s;
        appearance: none;
      }
      .field input:focus,
      .field select:focus,
      .field textarea:focus {
        border-color: var(--teal);
        background: white;
        box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.12);
      }
      .field .err-msg {
        font-size: 0.75rem;
        color: var(--rose);
        margin-top: 2px;
        display: none;
      }
      .field.has-error .err-msg {
        display: block;
      }
      .field.has-error input,
      .field.has-error select {
        border-color: var(--rose);
      }

      .field .input-wrap {
        position: relative;
      }
      .field .input-wrap input {
        padding-right: 40px;
      }
      .field .input-wrap .icon {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--slate-400);
        pointer-events: none;
      }

      select {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 12px center;
        padding-right: 36px;
      }

      /* ── SECTION LABEL ── */
      .section-label {
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--teal);
        border-bottom: 1px solid var(--slate-200);
        padding-bottom: 8px;
        margin-bottom: 20px;
      }

      /* ── SUB-SECTION LABEL (inside step 2) ── */
      .sub-section-label {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--slate-400);
        margin-top: 8px;
        margin-bottom: 4px;
        grid-column: span 2;
        padding-top: 14px;
        border-top: 1px dashed var(--slate-200);
      }
      .sub-section-label:first-child {
        border-top: none;
        padding-top: 0;
      }

      /* ── RADIO & CHECKBOX ── */
      .radio-group,
      .check-group {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      .radio-option,
      .check-option {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.875rem;
        color: var(--slate-700);
        cursor: pointer;
      }
      .radio-option input[type="radio"],
      .check-option input[type="checkbox"] {
        display: none;
      }
      .radio-option .rb,
      .check-option .cb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid var(--slate-200);
        background: var(--slate-50);
        display: grid;
        place-items: center;
        flex-shrink: 0;
        transition: all 0.2s;
      }
      .check-option .cb {
        border-radius: 5px;
      }
      .radio-option input:checked ~ .rb {
        border-color: var(--teal);
      }
      .radio-option input:checked ~ .rb::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--teal);
      }
      .check-option input:checked ~ .cb {
        border-color: var(--teal);
        background: var(--teal);
      }
      .check-option input:checked ~ .cb::after {
        content: "";
        width: 10px;
        height: 7px;
        border-left: 2px solid white;
        border-bottom: 2px solid white;
        transform: rotate(-45deg) translateY(-1px);
      }

      /* ── PAIN SCALE ── */
      .pain-scale {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .pain-btn {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 2px solid var(--slate-200);
        background: var(--slate-50);
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--slate-500);
        cursor: pointer;
        transition: all 0.18s;
        display: grid;
        place-items: center;
        font-family: inherit;
      }
      .pain-btn:hover {
        border-color: var(--teal);
        color: var(--teal);
        background: var(--teal-lt);
      }
      .pain-btn.selected {
        background: var(--teal);
        color: white;
        border-color: var(--teal);
      }
      /* .pain-btn [data-level="8"],
      .pain-btn [data-level="9"],
      .pain-btn [data-level="10"] {
      } */
      .pain-btn.selected[data-level="8"],
      .pain-btn.selected[data-level="9"],
      .pain-btn.selected[data-level="10"] {
        background: #e11d48;
        border-color: #e11d48;
      }
      .pain-label-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.7rem;
        color: var(--slate-400);
        margin-top: 4px;
      }

      /* ── STEP PANELS ── */
      .step-panel {
        display: none;
      }
      .step-panel.active {
        display: block;
      }

      /* ── PRICING CARD ── */
      .pricing-box {
        background: var(--slate-50);
        border: 1.5px solid var(--slate-200);
        border-radius: 14px;
        padding: 24px 28px;
        margin-bottom: 28px;
      }
      .pricing-box h3 {
        font-family: "Lora", serif;
        font-size: 1.1rem;
        color: var(--slate-900);
        margin-bottom: 4px;
      }
      .pricing-box .sub {
        font-size: 0.8rem;
        color: var(--slate-400);
        margin-bottom: 18px;
      }
      .pricing-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: var(--slate-700);
        padding: 10px 0;
        border-bottom: 1px dashed var(--slate-200);
      }
      .pricing-row.total {
        border-bottom: none;
        font-weight: 700;
        font-size: 1rem;
        color: var(--slate-900);
        padding-top: 14px;
      }
      .pricing-row.total .price-val {
        color: var(--teal);
      }

      /* ── SUBSCRIPTION ── */
      .subscribe-wrap {
        margin-bottom: 28px;
      }
      .subscribe-wrap p {
        font-size: 0.875rem;
        color: var(--slate-700);
        margin-bottom: 10px;
        font-weight: 500;
      }
      .subscribe-wrap .note {
        font-size: 0.75rem;
        color: var(--slate-400);
        margin-top: 8px;
        line-height: 1.5;
      }

      /* ── ACTIONS ── */
      .actions {
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-top: 32px;
      }
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 32px;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        font-family: inherit;
        cursor: pointer;
        border: none;
        transition: all 0.2s;
        text-decoration: none;
      }
      .btn-primary {
        background: var(--teal);
        color: white;
      }
      .btn-primary:hover {
        background: var(--teal-dk);
        transform: translateY(-1px);
        box-shadow: 0 4px 14px rgba(15, 118, 110, 0.35);
      }
      .btn-outline {
        background: transparent;
        color: var(--teal);
        border: 1.5px solid var(--teal);
      }
      .btn-outline:hover {
        background: var(--teal-lt);
      }

      /* ── SUCCESS ── */
      #step-success {
        text-align: center;
        padding: 20px 0;
      }
      .success-icon {
        width: 72px;
        height: 72px;
        background: var(--teal-lt);
        border-radius: 50%;
        display: grid;
        place-items: center;
        margin: 0 auto 20px;
      }
      .success-icon svg {
        width: 36px;
        height: 36px;
        stroke: var(--teal);
      }
      #step-success h2 {
        font-family: "Lora", serif;
        font-size: 1.6rem;
        color: var(--slate-900);
        margin-bottom: 8px;
      }
      #step-success p {
        font-size: 0.9rem;
        color: var(--slate-400);
      }

      /* ── PAGE VIEWS ── */
      .page-view {
        display: none;
        flex-direction: column;
        align-items: center;
        padding: 40px 16px 60px;
        flex: 1;
      }
      .page-view.active {
        display: flex;
      }

      /* ── SIGN IN CARD ── */
      .signin-card {
        background: white;
        border-radius: 20px;
        box-shadow:
          0 4px 24px rgba(15, 118, 110, 0.08),
          0 1px 4px rgba(0, 0, 0, 0.04);
        padding: 44px 48px;
        width: 100%;
        max-width: 460px;
      }
      .signin-fields {
        display: flex;
        flex-direction: column;
        gap: 18px;
        margin-bottom: 10px;
      }
      .pw-wrap {
        position: relative;
      }
      .pw-wrap input {
        padding-right: 44px;
      }
      .pw-toggle {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        color: var(--slate-400);
        padding: 0;
        display: grid;
        place-items: center;
      }
      .pw-toggle:hover {
        color: var(--teal);
      }
      .forgot-row {
        text-align: right;
        margin-bottom: 22px;
      }
      .forgot-row a {
        font-size: 0.8125rem;
        color: var(--teal);
        text-decoration: none;
        font-weight: 500;
        cursor: pointer;
      }
      .forgot-row a:hover {
        text-decoration: underline;
      }
      .btn-full {
        width: 100%;
        justify-content: center;
        padding: 13px 20px;
        font-size: 0.95rem;
      }
      .divider {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 22px 0;
        color: var(--slate-400);
        font-size: 0.8rem;
      }
      .divider::before,
      .divider::after {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--slate-200);
      }
      .social-btns {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .btn-social {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 11px 20px;
        border-radius: 10px;
        font-size: 0.875rem;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        border: 1.5px solid var(--slate-200);
        background: white;
        color: var(--slate-700);
        transition: all 0.2s;
      }
      .btn-social:hover {
        border-color: var(--teal);
        background: var(--teal-lt);
        color: var(--teal);
      }
      .btn-social svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }
      .register-prompt {
        text-align: center;
        margin-top: 24px;
        font-size: 0.875rem;
        color: var(--slate-400);
      }
      .register-prompt a {
        color: var(--teal);
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
      }
      .register-prompt a:hover {
        text-decoration: underline;
      }

      /* ── MODAL ── */
      .modal-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.4);
        backdrop-filter: blur(4px);
        z-index: 200;
        place-items: center;
      }
      .modal-overlay.open {
        display: grid;
      }
      .modal {
        background: white;
        border-radius: 18px;
        padding: 36px 40px;
        width: 100%;
        max-width: 420px;
        margin: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        animation: popIn 0.25s ease;
      }
      @keyframes popIn {
        from {
          transform: scale(0.92);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
      .modal h3 {
        font-family: "Lora", serif;
        font-size: 1.25rem;
        color: var(--slate-900);
        margin-bottom: 6px;
      }
      .modal p {
        font-size: 0.875rem;
        color: var(--slate-400);
        margin-bottom: 22px;
      }
      .modal-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
      }
      .modal-actions .btn {
        flex: 1;
        justify-content: center;
      }

      /* ── SIGN-IN SUCCESS ── */
      .signin-success {
        text-align: center;
        padding: 16px 0;
      }
      .signin-success h2 {
        font-family: "Lora", serif;
        font-size: 1.5rem;
        color: var(--slate-900);
        margin-bottom: 8px;
      }
      .signin-success p {
        font-size: 0.875rem;
        color: var(--slate-400);
      }

      /* ── INFO CHIP (helper text under label) ── */
      .field .hint {
        font-size: 0.72rem;
        color: var(--slate-400);
        margin-top: -2px;
      }

      @media (max-width: 640px) {
        nav {
          padding: 14px 20px;
        }
        .card {
          padding: 28px 20px;
        }
        .form-grid {
          grid-template-columns: 1fr;
        }
        .col-span-2 {
          grid-column: span 1;
        }
        .sub-section-label {
          grid-column: span 1;
        }
        .step-line {
          width: 40px;
        }
        .step-label {
          display: none;
        }
        .pain-btn {
          width: 32px;
          height: 32px;
          font-size: 0.72rem;
        }
      }
    `,ah=["/legacy/api.js",`
      renderBackButton(90);

      /* If already signed in as a patient, skip registration/sign-in and
         go straight to the dashboard. */
      (async function redirectIfAlreadyPatient() {
        try {
          const result = await getCurrentUser();
          if (result.data.role === "PATIENT") {
            window.location.href = "/patient";
          }
        } catch (e) {
          // not logged in - show the registration/sign-in page as normal
        }
      })();

      let currentStep = 1;

      /* ── PAGE SWITCHING ── */
      function showPage(page) {
        document.getElementById("view-register").classList.remove("active");
        document.getElementById("view-signin").classList.remove("active");
        if (page === "signin") {
          document.getElementById("view-signin").classList.add("active");
        } else {
          document.getElementById("view-register").classList.add("active");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      /* ── PAIN SCALE ── */
      function selectPain(level) {
        document
          .querySelectorAll(".pain-btn")
          .forEach((b) => b.classList.remove("selected"));
        const btn = document.querySelector(\`.pain-btn[data-level="\${level}"]\`);
        if (btn) btn.classList.add("selected");
        document.getElementById("painLevel").value = level;
      }

      /* ── SIGN IN ── */
      async function doSignIn() {
        const email = document.getElementById("si-email");
        const pw = document.getElementById("si-password");
        let ok = true;
        const validEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value);
        email.closest(".field").classList.toggle("has-error", !validEmail);
        if (!validEmail) ok = false;
        if (!pw.value.trim()) {
          pw.closest(".field").classList.add("has-error");
          ok = false;
        } else pw.closest(".field").classList.remove("has-error");
        if (!ok) return;

        try {
          const result = await login(email.value, pw.value);
          if (result.data.role !== "PATIENT") {
            alert(
              "This account is registered as " +
                result.data.role +
                ". Please use the correct sign-in page for that role.",
            );
            await logout();
            return;
          }
          document.getElementById("signin-form-wrap").style.display = "none";
          document.getElementById("signin-success").style.display = "block";
          setTimeout(() => (window.location.href = "/patient"), 900);
        } catch (err) {
          pw.closest(".field").classList.add("has-error");
          document.getElementById("si-pw-err").textContent = err.message;
          document.getElementById("si-pw-err").style.display = "block";
        }
      }

      function togglePw() {
        const inp = document.getElementById("si-password");
        const isText = inp.type === "text";
        inp.type = isText ? "password" : "text";
        document.getElementById("eye-icon").innerHTML = isText
          ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
          : '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>';
      }

      let forgotStep = "request"; // 'request' -> 'reset'
      let resendCooldownTimer = null;

      function openForgot() {
        forgotStep = "request";
        clearInterval(resendCooldownTimer);
        document.getElementById("forgot-title").textContent = "Reset Password";
        document.getElementById("forgot-desc").textContent =
          "Enter your registered email and we'll send you a reset code.";
        document.getElementById("forgot-email-field").style.display = "block";
        document.getElementById("forgot-code-field").style.display = "none";
        document.getElementById("forgot-newpw-field").style.display = "none";
        document.getElementById("forgot-action-btn").textContent =
          "Send Reset Code";
        document.getElementById("forgot-err").style.display = "none";
        document.getElementById("forgot-code").value = "";
        document.getElementById("forgot-newpw").value = "";
        document.getElementById("forgot-modal").classList.add("open");
      }
      function closeForgot() {
        document.getElementById("forgot-modal").classList.remove("open");
      }

      function startResendCooldown() {
        const el = document.getElementById("forgot-resend");
        let seconds = 30;
        el.style.pointerEvents = "none";
        el.style.color = "#999";
        el.style.textDecoration = "none";
        el.textContent = \`Resend code in \${seconds}s\`;
        clearInterval(resendCooldownTimer);
        resendCooldownTimer = setInterval(() => {
          seconds -= 1;
          if (seconds <= 0) {
            clearInterval(resendCooldownTimer);
            el.style.pointerEvents = "auto";
            el.style.color = "#0f766e";
            el.style.textDecoration = "underline";
            el.textContent = "Resend code";
          } else {
            el.textContent = \`Resend code in \${seconds}s\`;
          }
        }, 1000);
      }

      async function resendCode() {
        const email = document.getElementById("forgot-email").value.trim();
        const errEl = document.getElementById("forgot-err");
        try {
          const result = await forgotPassword(email);
          if (result.devResetCode) {
            console.log(
              "%c🔐 MediWell Health Care — Password Reset OTP (resent)",
              "font-size:14px;font-weight:bold;color:#0f766e;"
            );
            console.log(
              \`%cYour OTP for \${email} is: \${result.devResetCode}\`,
              "font-size:16px;font-weight:bold;color:#111;"
            );
          }
          startResendCooldown();
        } catch (err) {
          errEl.textContent = err.message;
          errEl.style.display = "block";
        }
      }

      async function sendReset() {
        const errEl = document.getElementById("forgot-err");
        errEl.style.display = "none";

        if (forgotStep === "request") {
          const email = document.getElementById("forgot-email").value.trim();
          const valid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
          if (!valid) {
            errEl.textContent = "Please enter a valid email";
            errEl.style.display = "block";
            return;
          }
          try {
            const result = await forgotPassword(email);
            forgotStep = "reset";

            // No real email/SMS provider is configured for this project,
            // so the OTP is logged to the browser console instead of
            // being emailed - open DevTools (F12) to see it.
            if (result.devResetCode) {
              console.log(
                "%c🔐 MediWell Health Care — Password Reset OTP",
                "font-size:14px;font-weight:bold;color:#0f766e;"
              );
              console.log(
                \`%cYour OTP for \${email} is: \${result.devResetCode}\`,
                "font-size:16px;font-weight:bold;color:#111;"
              );
              console.log("%cThis code expires in 10 minutes.", "color:#666;");
            }

            document.getElementById("forgot-desc").textContent =
              "We've sent a 6-digit code to " +
              email +
              ". Enter it below along with your new password. (No email service is configured for this demo — check your browser console, press F12, for the code.)";
            document.getElementById("forgot-email-field").style.display =
              "none";
            document.getElementById("forgot-code-field").style.display =
              "block";
            document.getElementById("forgot-newpw-field").style.display =
              "block";
            document.getElementById("forgot-action-btn").textContent =
              "Reset Password";
            startResendCooldown();
          } catch (err) {
            errEl.textContent = err.message;
            errEl.style.display = "block";
          }
          return;
        }

        // forgotStep === 'reset'
        const email = document.getElementById("forgot-email").value.trim();
        const code = document.getElementById("forgot-code").value.trim();
        const newPw = document.getElementById("forgot-newpw").value;
        if (!isStrongPassword(newPw)) {
          errEl.textContent = passwordStrengthHint();
          errEl.style.display = "block";
          return;
        }
        try {
          await resetPassword(email, code, newPw);
          closeForgot();
          alert("Password updated. You can now sign in with your new password.");
        } catch (err) {
          errEl.textContent = err.message;
          errEl.style.display = "block";
        }
      }
      document
        .getElementById("forgot-modal")
        .addEventListener("click", function (e) {
          if (e.target === this) closeForgot();
        });

      /* ── STEP NAVIGATION ── */
      function goToStep(next) {
        if (next > currentStep && !validateStep(currentStep)) return;
        document
          .getElementById("step-" + currentStep)
          .classList.remove("active");
        currentStep = next;
        document.getElementById("step-" + currentStep).classList.add("active");
        updateStepper();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      function updateStepper() {
        for (let i = 1; i <= 3; i++) {
          const s = document.getElementById("s" + i);
          s.classList.remove("active", "complete");
          if (i < currentStep) s.classList.add("complete");
          else if (i === currentStep) s.classList.add("active");
        }
        for (let i = 1; i <= 2; i++) {
          document
            .getElementById("l" + i)
            .classList.toggle("done", i < currentStep);
        }
      }

      function validateStep(step) {
        let ok = true;
        function req(id, test) {
          const el = document.getElementById(id);
          const field = el.closest(".field");
          const fail = test ? !test(el.value) : !el.value.trim();
          field.classList.toggle("has-error", fail);
          if (fail) ok = false;
        }
        if (step === 1) {
          req("firstName");
          req("gender");
          req("dob");
          req("guardianFirst");
          req("email", (v) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v));
          req("pinCode", (v) => /^\\d{6}$/.test(v.trim()));
          req("country");
          req("phone");
        }
        if (step === 2) {
          req("visitReason");
          req("symptomDuration");
          req("apptDate");
        }
        return ok;
      }

      async function submitForm() {
        const first =
          document.getElementById("firstName").value.trim() || "Patient";
        const last = document.getElementById("lastName").value.trim();
        const smoke = document.querySelector('input[name="smoke"]:checked');
        const alcohol = document.querySelector('input[name="alcohol"]:checked');

        const fields = {
          fullName: first + (last ? " " + last : ""),
          email: document.getElementById("email").value.trim(),
          password: document.getElementById("regPassword").value,
          phone: document.getElementById("phone").value.trim(),
          firstName: first,
          lastName: last,
          gender: document.getElementById("gender").value || null,
          dob: document.getElementById("dob").value || null,
          bloodGroup: document.getElementById("bloodGroup").value || null,
          guardianName:
            document.getElementById("guardianFirst").value.trim() +
            " " +
            document.getElementById("guardianLast").value.trim(),
          country: document.getElementById("country").value || null,
          smokingStatus: smoke ? smoke.value : null,
          alcoholStatus: alcohol ? alcohol.value : null,
        };

        if (!isStrongPassword(fields.password)) {
          alert("Password too weak: " + passwordStrengthHint());
          return;
        }

        try {
          const result = await registerPatient(fields);
          alert(result.message || "Patient registration successful. Please log in.");
          window.location.href = "/login?role=PATIENT&registered=1";
        } catch (err) {
          alert("Registration failed: " + err.message);
        }
      }

      function resetForm() {
        document.querySelector(".stepper").style.opacity = "1";
        document
          .querySelectorAll(".step-panel")
          .forEach((p) => p.classList.remove("active"));
        document.getElementById("step-1").classList.add("active");
        document
          .querySelectorAll(
            "input:not([type=radio]):not([type=checkbox]), select, textarea",
          )
          .forEach((el) => (el.value = ""));
        document
          .querySelectorAll(".has-error")
          .forEach((el) => el.classList.remove("has-error"));
        document
          .querySelectorAll(".pain-btn")
          .forEach((b) => b.classList.remove("selected"));
        currentStep = 1;
        updateStepper();
      }
    `,`
      // Opens the OTP modal. onVerify(code) is called each time the person
      // submits - it should return a Promise that resolves on success (the
      // modal is then closed automatically) or throws/rejects on a wrong
      // code (the modal stays open with the error shown, so they can just
      // retry instead of restarting the whole registration/login flow).
      function openOtpModal({ title, hint, onVerify, onCancel }) {
        const modal = document.getElementById("otpModal");
        const input = document.getElementById("otpModalInput");
        const errorEl = document.getElementById("otpModalError");
        const submitBtn = document.getElementById("otpModalSubmit");
        const cancelBtn = document.getElementById("otpModalCancel");

        document.getElementById("otpModalTitle").textContent = title;
        document.getElementById("otpModalHint").innerHTML = hint;
        input.value = "";
        errorEl.style.display = "none";
        submitBtn.disabled = false;
        submitBtn.textContent = "Verify";
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
        input.focus();

        function cleanup() {
          modal.classList.remove("open");
          document.body.style.overflow = "";
          submitBtn.removeEventListener("click", onSubmit);
          cancelBtn.removeEventListener("click", onCancelClick);
          input.removeEventListener("keydown", onKeydown);
        }
        async function onSubmit() {
          const code = input.value.trim();
          if (!/^\\d{6}$/.test(code)) {
            errorEl.textContent = "Enter the 6-digit code.";
            errorEl.style.display = "block";
            return;
          }
          errorEl.style.display = "none";
          submitBtn.disabled = true;
          submitBtn.textContent = "Verifying…";
          try {
            await onVerify(code);
            cleanup();
          } catch (err) {
            errorEl.textContent = err.message || "Incorrect code.";
            errorEl.style.display = "block";
          } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Verify";
          }
        }
        function onCancelClick() {
          cleanup();
          if (onCancel) onCancel();
        }
        function onKeydown(e) {
          if (e.key === "Enter") onSubmit();
        }

        submitBtn.addEventListener("click", onSubmit);
        cancelBtn.addEventListener("click", onCancelClick);
        input.addEventListener("keydown", onKeydown);
      }
    `];function mc(){return R.useEffect(()=>{document.title=rh;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=ih,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of ah)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mediwell-page-root",children:[e.jsxs("nav",{children:[e.jsxs("a",{className:"logo",href:"#",children:[e.jsx("div",{className:"logo-icon",children:e.jsx("svg",{viewbox:"0 0 24 24",children:e.jsx("path",{d:"M12 2a10 10 0 100 20A10 10 0 0012 2zm1 14h-2v-5H9v-2h2V7h2v2h2v2h-2v5z"})})}),e.jsx("span",{className:"logo-text",children:"MediWell Health Care"})]}),e.jsxs("span",{className:"nav-link",children:["Already registered? ",e.jsx("a",{onClick:()=>window.__mediwellRun("showPage('signin')"),children:"Sign In"})]})]}),e.jsxs("div",{className:"page-view",id:"view-signin",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Welcome Back"}),e.jsx("p",{children:"Sign in to your HealthCare account"})]}),e.jsxs("div",{className:"signin-card",children:[e.jsxs("div",{id:"signin-form-wrap",children:[e.jsxs("div",{className:"signin-fields",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Email Address ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"email",id:"si-email",placeholder:"patient@example.com"}),e.jsx("span",{className:"err-msg",children:"Please enter a valid email"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Password ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("div",{className:"pw-wrap",children:[e.jsx("input",{type:"password",id:"si-password",placeholder:"Enter your password"}),e.jsx("button",{className:"pw-toggle",onClick:()=>window.__mediwellRun("togglePw()"),type:"button",children:e.jsxs("svg",{id:"eye-icon",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2",viewbox:"0 0 24 24",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})]}),e.jsx("span",{className:"err-msg",children:"Password is required"})]})]}),e.jsx("div",{className:"forgot-row",children:e.jsx("a",{onClick:()=>window.__mediwellRun("openForgot()"),children:"Forgot password?"})}),e.jsx("button",{className:"btn btn-primary btn-full",onClick:()=>window.__mediwellRun("doSignIn()"),children:"Sign In"}),e.jsx("div",{className:"divider",children:"or continue with"}),e.jsxs("div",{className:"social-btns",children:[e.jsxs("button",{className:"btn-social",children:[e.jsxs("svg",{viewbox:"0 0 24 24",children:[e.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),e.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),e.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z",fill:"#FBBC05"}),e.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),"Continue with Google"]}),e.jsxs("button",{className:"btn-social",children:[e.jsx("svg",{viewbox:"0 0 24 24",fill:"#0078D4",children:e.jsx("path",{d:"M21.579 6.855c.14.42.21.865.21 1.33C21.789 13.67 17.566 18 12 18a9.86 9.86 0 01-5.032-1.378A7.03 7.03 0 0012 15.13a3.514 3.514 0 01-3.28-2.437c.214.04.434.063.66.063.32 0 .63-.043.924-.124A3.513 3.513 0 016.87 9.28v-.044c.446.248.956.397 1.498.414a3.51 3.51 0 01-1.085-4.686 9.963 9.963 0 007.23 3.665 3.956 3.956 0 01-.089-.8A3.511 3.511 0 0117.935 4.5a3.5 3.5 0 012.56 1.107 7.03 7.03 0 002.228-.852 3.525 3.525 0 01-1.543 1.942 7.01 7.01 0 002.018-.548 7.13 7.13 0 01-1.619 1.706z"})}),"Continue with Microsoft"]})]}),e.jsxs("div",{className:"register-prompt",children:["Don't have an account?",e.jsx("a",{onClick:()=>window.__mediwellRun("showPage('register')"),children:"Register here"})]})]}),e.jsxs("div",{className:"signin-success",id:"signin-success",style:{display:"none"},children:[e.jsx("div",{className:"success-icon",style:{width:"72px",height:"72px",background:"var(--teal-lt)",borderRadius:"50%",display:"grid",placeItems:"center",margin:"0 auto 20px"},children:e.jsx("svg",{width:"36",height:"36",fill:"none",stroke:"var(--teal)","stroke-width":"2.5",viewbox:"0 0 24 24",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}),e.jsx("h2",{children:"Welcome Back!"}),e.jsxs("p",{children:["You've signed in successfully.",e.jsx("br",{}),"Redirecting to your dashboard…"]}),e.jsx("button",{className:"btn btn-outline btn-full",style:{marginTop:"24px"},onClick:()=>window.__mediwellRun("showPage('register')"),children:"← Go to Registration"})]})]})]}),e.jsx("div",{className:"modal-overlay",id:"forgot-modal",children:e.jsxs("div",{className:"modal",children:[e.jsx("h3",{id:"forgot-title",children:"Reset Password"}),e.jsx("p",{id:"forgot-desc",children:"Enter your registered email and we'll send you a reset code."}),e.jsxs("div",{className:"field",id:"forgot-email-field",children:[e.jsxs("label",{children:["Email Address ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"email",id:"forgot-email",placeholder:"patient@example.com"}),e.jsx("span",{className:"err-msg",id:"forgot-err",style:{display:"none"},children:"Please enter a valid email"})]}),e.jsxs("div",{className:"field",id:"forgot-code-field",style:{display:"none"},children:[e.jsxs("label",{children:["Reset Code (OTP) ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",id:"forgot-code",maxLength:"6",inputMode:"numeric",placeholder:"6-digit code"}),e.jsx("span",{className:"err-msg",id:"forgot-resend",style:{display:"block",color:"#0f766e",cursor:"pointer",textDecoration:"underline"},onClick:()=>window.__mediwellRun("resendCode()"),children:"Resend code"})]}),e.jsxs("div",{className:"field",id:"forgot-newpw-field",style:{display:"none"},children:[e.jsxs("label",{children:["New Password ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"password",id:"forgot-newpw",placeholder:"At least 8 characters"}),e.jsx("span",{className:"err-msg",id:"forgot-newpw-hint",style:{display:"block",color:"#888"},children:"At least 8 characters, with an uppercase, lowercase, number, and special character."})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"btn btn-outline",onClick:()=>window.__mediwellRun("closeForgot()"),children:"Cancel"}),e.jsx("button",{className:"btn btn-primary",id:"forgot-action-btn",onClick:()=>window.__mediwellRun("sendReset()"),children:"Send Reset Code"})]})]})}),e.jsxs("main",{id:"view-register",className:"page-view active",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Patient Registration"}),e.jsx("p",{children:"Help us understand your health so we can take better care of you"})]}),e.jsxs("div",{className:"stepper",children:[e.jsxs("div",{className:"step active",id:"s1",children:[e.jsx("div",{className:"step-num",children:"1"}),e.jsx("span",{className:"step-label",children:"Personal Details"})]}),e.jsx("div",{className:"step-line",id:"l1"}),e.jsxs("div",{className:"step",id:"s2",children:[e.jsx("div",{className:"step-num",children:"2"}),e.jsx("span",{className:"step-label",children:"My Health Info"})]}),e.jsx("div",{className:"step-line",id:"l2"}),e.jsxs("div",{className:"step",id:"s3",children:[e.jsx("div",{className:"step-num",children:"3"}),e.jsx("span",{className:"step-label",children:"Confirm & Submit"})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"step-panel active",id:"step-1",children:[e.jsx("p",{className:"section-label",children:"Personal Information"}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["First Name ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",id:"firstName",placeholder:"e.g. Ananya"}),e.jsx("span",{className:"err-msg",children:"First name is required"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Last Name"}),e.jsx("input",{type:"text",id:"lastName",placeholder:"e.g. Sharma"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Gender ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{id:"gender",children:[e.jsx("option",{value:"",children:"Select gender"}),e.jsx("option",{children:"Male"}),e.jsx("option",{children:"Female"}),e.jsx("option",{children:"Other"}),e.jsx("option",{children:"Prefer not to say"})]}),e.jsx("span",{className:"err-msg",children:"Please select gender"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Date of Birth ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("div",{className:"input-wrap",children:[e.jsx("input",{type:"date",id:"dob"}),e.jsx("span",{className:"icon calendar-icon","aria-hidden":"true",children:e.jsx("img",{src:"/calendar-logo.png",alt:""})})]}),e.jsx("span",{className:"err-msg",children:"Please enter date of birth"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Guardian / Emergency Contact Name",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",id:"guardianFirst",placeholder:"First Name"}),e.jsx("span",{className:"err-msg",children:"Guardian name is required"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Guardian Last Name"}),e.jsx("input",{type:"text",id:"guardianLast",placeholder:"Last Name"})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsxs("label",{children:["Email Address ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"email",id:"email",placeholder:"patient@example.com"}),e.jsx("span",{className:"err-msg",children:"Please enter a valid email"})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsxs("label",{children:["Password ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"password",id:"regPassword",placeholder:"e.g. MediWell@2026"}),e.jsx("span",{className:"err-msg",style:{display:"block",color:"#888"},children:"8+ characters, with an uppercase letter, a lowercase letter, a number, and a special character."})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Pin Code ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",id:"pinCode",maxLength:"6",placeholder:"6-digit pin"}),e.jsx("span",{className:"err-msg",children:"Enter a valid 6-digit pin"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Country ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{id:"country",children:[e.jsx("option",{value:"",children:"Select country"}),e.jsx("option",{children:"India"}),e.jsx("option",{children:"United States"}),e.jsx("option",{children:"United Kingdom"}),e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Australia"}),e.jsx("option",{children:"Other"})]}),e.jsx("span",{className:"err-msg",children:"Please select a country"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Time Zone ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{id:"timezone",children:[e.jsx("option",{value:"IST",children:"IST — Indian Standard Time (GMT +5:30)"}),e.jsx("option",{value:"UTC",children:"UTC — Coordinated Universal Time"}),e.jsx("option",{value:"EST",children:"EST — Eastern Standard Time (GMT −5)"}),e.jsx("option",{value:"PST",children:"PST — Pacific Standard Time (GMT −8)"})]})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Phone Number (with country code)",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"tel",id:"phone",placeholder:"+91 98765 43210"}),e.jsx("span",{className:"err-msg",children:"Phone number is required"})]})]}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"btn btn-primary",onClick:()=>window.__mediwellRun("submitForm()"),children:"Register Patient →"})})]}),e.jsxs("div",{className:"step-panel",id:"step-2",children:[e.jsx("p",{className:"section-label",children:"My Health Information"}),e.jsxs("div",{className:"form-grid",children:[e.jsx("p",{className:"sub-section-label",children:"Why are you visiting us today?"}),e.jsxs("div",{className:"field col-span-2",children:[e.jsxs("label",{children:["Main Reason for Visit ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{id:"visitReason",children:[e.jsx("option",{value:"",children:"Select the closest match"}),e.jsx("option",{children:"I have a fever or flu-like symptoms"}),e.jsx("option",{children:"I have chest pain or breathing difficulty"}),e.jsx("option",{children:"I have persistent headaches or migraines"}),e.jsx("option",{children:"I have stomach / digestive problems"}),e.jsx("option",{children:"I have a skin rash or irritation"}),e.jsx("option",{children:"I have joint, muscle or bone pain"}),e.jsx("option",{children:"I have vision or eye problems"}),e.jsx("option",{children:"I need a routine health check-up"}),e.jsx("option",{children:"I need a second opinion"}),e.jsx("option",{children:"I need follow-up for an existing condition"}),e.jsx("option",{children:"Other"})]}),e.jsx("span",{className:"err-msg",children:"Please tell us why you are visiting"})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsx("label",{children:"Describe your symptoms in your own words"}),e.jsx("span",{className:"hint",children:"Tell us what you feel, when it started, and how it affects your daily life"}),e.jsx("textarea",{id:"symptomDesc",rows:"3",placeholder:"e.g. I have had a dull ache in my lower back for the past two weeks. It gets worse when I sit for long hours\\u2026",style:{resize:"vertical"}})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["How long have you been feeling this way?",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{id:"symptomDuration",children:[e.jsx("option",{value:"",children:"Select duration"}),e.jsx("option",{children:"Less than 24 hours"}),e.jsx("option",{children:"1 – 3 days"}),e.jsx("option",{children:"4 – 7 days"}),e.jsx("option",{children:"1 – 2 weeks"}),e.jsx("option",{children:"2 – 4 weeks"}),e.jsx("option",{children:"1 – 3 months"}),e.jsx("option",{children:"More than 3 months"})]}),e.jsx("span",{className:"err-msg",children:"Please select symptom duration"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"How would you rate your pain or discomfort right now?"}),e.jsx("span",{className:"hint",children:"0 = no pain · 10 = worst pain imaginable"}),e.jsxs("div",{className:"pain-scale",id:"painScale",children:[e.jsx("button",{className:"pain-btn","data-level":"0",type:"button",onClick:()=>window.__mediwellRun("selectPain(0)"),children:"0"}),e.jsx("button",{className:"pain-btn","data-level":"1",type:"button",onClick:()=>window.__mediwellRun("selectPain(1)"),children:"1"}),e.jsx("button",{className:"pain-btn","data-level":"2",type:"button",onClick:()=>window.__mediwellRun("selectPain(2)"),children:"2"}),e.jsx("button",{className:"pain-btn","data-level":"3",type:"button",onClick:()=>window.__mediwellRun("selectPain(3)"),children:"3"}),e.jsx("button",{className:"pain-btn","data-level":"4",type:"button",onClick:()=>window.__mediwellRun("selectPain(4)"),children:"4"}),e.jsx("button",{className:"pain-btn","data-level":"5",type:"button",onClick:()=>window.__mediwellRun("selectPain(5)"),children:"5"}),e.jsx("button",{className:"pain-btn","data-level":"6",type:"button",onClick:()=>window.__mediwellRun("selectPain(6)"),children:"6"}),e.jsx("button",{className:"pain-btn","data-level":"7",type:"button",onClick:()=>window.__mediwellRun("selectPain(7)"),children:"7"}),e.jsx("button",{className:"pain-btn","data-level":"8",type:"button",onClick:()=>window.__mediwellRun("selectPain(8)"),children:"8"}),e.jsx("button",{className:"pain-btn","data-level":"9",type:"button",onClick:()=>window.__mediwellRun("selectPain(9)"),children:"9"}),e.jsx("button",{className:"pain-btn","data-level":"10",type:"button",onClick:()=>window.__mediwellRun("selectPain(10)"),children:"10"})]}),e.jsxs("div",{className:"pain-label-row",children:[e.jsx("span",{children:"😊 None"}),e.jsx("span",{children:"😐 Moderate"}),e.jsx("span",{children:"😣 Severe"})]}),e.jsx("input",{type:"hidden",id:"painLevel",value:""})]}),e.jsx("p",{className:"sub-section-label",children:"Your Medical Background"}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Blood Group"}),e.jsxs("select",{id:"bloodGroup",children:[e.jsx("option",{value:"",children:"I don't know / Select"}),e.jsx("option",{children:"A+"}),e.jsx("option",{children:"A−"}),e.jsx("option",{children:"B+"}),e.jsx("option",{children:"B−"}),e.jsx("option",{children:"AB+"}),e.jsx("option",{children:"AB−"}),e.jsx("option",{children:"O+"}),e.jsx("option",{children:"O−"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Height"}),e.jsx("input",{type:"text",id:"height",placeholder:"e.g. 165 cm or 5 ft 5 in"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Weight"}),e.jsx("input",{type:"text",id:"weight",placeholder:"e.g. 65 kg or 143 lbs"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Do you have any of these? (select all that apply)"}),e.jsxs("div",{className:"check-group",style:{marginTop:"4px"},children:[e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",className:"existingCondition"}),e.jsx("div",{className:"cb"}),"Diabetes"]}),e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",className:"existingCondition"}),e.jsx("div",{className:"cb"}),"Hypertension"]}),e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",className:"existingCondition"}),e.jsx("div",{className:"cb"}),"Asthma"]}),e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",className:"existingCondition"}),e.jsx("div",{className:"cb"}),"Heart Disease"]}),e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",className:"existingCondition"}),e.jsx("div",{className:"cb"}),"Thyroid Disorder"]}),e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",id:"noneCondition"}),e.jsx("div",{className:"cb"}),"None of the above"]})]})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsx("label",{children:"Are you currently taking any medicines?"}),e.jsx("span",{className:"hint",children:"Include prescription drugs, vitamins, or supplements"}),e.jsx("textarea",{id:"currentMeds",rows:"2",placeholder:"e.g. Metformin 500mg twice daily, Vitamin D once a week\\u2026",style:{resize:"vertical"}})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsx("label",{children:"Do you have any known allergies?"}),e.jsx("span",{className:"hint",children:"Include medicines, foods, latex, or anything else that causes a reaction"}),e.jsx("textarea",{id:"allergies",rows:"2",placeholder:"e.g. Penicillin causes rash, Peanuts cause swelling\\u2026",style:{resize:"vertical"}})]}),e.jsx("p",{className:"sub-section-label",children:"Quick Lifestyle Questions"}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Do you smoke?"}),e.jsxs("div",{className:"radio-group",style:{marginTop:"4px"},children:[e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"smoke",value:"no"}),e.jsx("div",{className:"rb"}),"No"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"smoke",value:"ex"}),e.jsx("div",{className:"rb"}),"Ex-smoker"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"smoke",value:"yes"}),e.jsx("div",{className:"rb"}),"Yes"]})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Do you consume alcohol?"}),e.jsxs("div",{className:"radio-group",style:{marginTop:"4px"},children:[e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"alcohol",value:"no"}),e.jsx("div",{className:"rb"}),"No"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"alcohol",value:"occasional"}),e.jsx("div",{className:"rb"}),"Occasionally"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"alcohol",value:"regular"}),e.jsx("div",{className:"rb"}),"Regularly"]})]})]}),e.jsx("p",{className:"sub-section-label",children:"Appointment Preference"}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["When would you like to come in?",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("div",{className:"input-wrap",children:[e.jsx("input",{type:"date",id:"apptDate"}),e.jsx("span",{className:"icon calendar-icon","aria-hidden":"true",children:e.jsx("img",{src:"/calendar-logo.png",alt:""})})]}),e.jsx("span",{className:"err-msg",children:"Please choose a preferred date"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Preferred time of day"}),e.jsxs("div",{className:"radio-group",id:"timeSlot",style:{marginTop:"4px"},children:[e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"slot",value:"Morning"}),e.jsx("div",{className:"rb"}),"Morning (9–12)"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"slot",value:"Afternoon",defaultChecked:!0}),e.jsx("div",{className:"rb"}),"Afternoon (12–4)"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"slot",value:"Evening"}),e.jsx("div",{className:"rb"}),"Evening (4–7)"]})]})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsx("label",{children:"Would you prefer an in-person visit or a video consultation?"}),e.jsxs("div",{className:"radio-group",style:{marginTop:"4px"},children:[e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"visitType",value:"in-person",defaultChecked:!0}),e.jsx("div",{className:"rb"}),"In-Person Visit"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"visitType",value:"video"}),e.jsx("div",{className:"rb"}),"Video Consultation"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"visitType",value:"either"}),e.jsx("div",{className:"rb"}),"Either is fine"]})]})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsx("label",{children:"Is there anything else you'd like your doctor to know before the visit?"}),e.jsx("textarea",{id:"extraNotes",rows:"2",placeholder:"Any concerns, recent tests, or special needs we should be aware of\\u2026",style:{resize:"vertical"}})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsx("label",{children:"How would you like to be reminded about your appointment?"}),e.jsxs("div",{className:"check-group",style:{marginTop:"4px"},children:[e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",id:"chkSms",defaultChecked:!0}),e.jsx("div",{className:"cb"}),"SMS / WhatsApp"]}),e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",id:"chkEmail"}),e.jsx("div",{className:"cb"}),"Email"]}),e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",id:"chkCall"}),e.jsx("div",{className:"cb"}),"Phone Call"]})]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn btn-outline",onClick:()=>window.__mediwellRun("goToStep(1)"),children:"← Back"}),e.jsx("button",{className:"btn btn-primary",onClick:()=>window.__mediwellRun("goToStep(3)"),children:"Next →"})]})]}),e.jsxs("div",{className:"step-panel",id:"step-3",children:[e.jsx("p",{className:"section-label",children:"Confirm & Submit"}),e.jsxs("div",{className:"pricing-box",children:[e.jsx("h3",{children:"Appointment Summary"}),e.jsx("p",{className:"sub",children:"Your fee breakdown is shown below"}),e.jsxs("div",{className:"pricing-row",children:[e.jsx("span",{children:"Consultation Fee"}),e.jsx("span",{children:"₹800"})]}),e.jsxs("div",{className:"pricing-row",children:[e.jsx("span",{children:"Registration Charges"}),e.jsx("span",{children:"₹200"})]}),e.jsxs("div",{className:"pricing-row total",children:[e.jsx("span",{children:"Total"}),e.jsx("span",{className:"price-val",children:"₹1,000"})]})]}),e.jsxs("div",{className:"subscribe-wrap",children:[e.jsx("p",{children:"I wish to receive health tips & appointment reminders from MediCare"}),e.jsxs("div",{className:"radio-group",children:[e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"subscribe",value:"yes",defaultChecked:!0}),e.jsx("div",{className:"rb"}),"Yes, keep me informed"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"subscribe",value:"no"}),e.jsx("div",{className:"rb"}),"No thanks"]})]}),e.jsx("p",{className:"note",children:"* By selecting 'Yes' you allow MediCare to send appointment reminders, health tips, and updates via WhatsApp and email."})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn btn-outline",onClick:()=>window.__mediwellRun("goToStep(2)"),children:"← Back"}),e.jsx("button",{className:"btn btn-primary",onClick:()=>window.__mediwellRun("submitForm()"),children:"Submit Registration"})]})]}),e.jsxs("div",{className:"step-panel",id:"step-success",children:[e.jsx("div",{className:"success-icon",children:e.jsx("svg",{fill:"none",stroke:"currentColor","stroke-width":"2.5",viewbox:"0 0 24 24",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}),e.jsx("h2",{children:"You're All Set!"}),e.jsxs("p",{children:["Your registration is complete. We've sent your appointment details and a patient ID to your email.",e.jsx("br",{}),"We look forward to taking care of you at MediCare. 💚"]}),e.jsx("div",{className:"actions",style:{marginTop:"24px"},children:e.jsx("button",{className:"btn btn-primary",onClick:()=>window.__mediwellRun("resetForm()"),children:"Register Another Patient"})})]})]})]})]})})}const sh="MediCare — Patient Registration",oh=`
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@500;600&display=swap");

      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      :root {
        --teal: #0f766e;
        --teal-lt: #ccfbf1;
        --teal-dk: #0d5c56;
        --rose: #e11d48;
        --slate-900: #0f172a;
        --slate-700: #334155;
        --slate-400: #94a3b8;
        --slate-200: #e2e8f0;
        --slate-50: #f8fafc;
        --white: #ffffff;
      }

      body {
        font-family: "Inter", sans-serif;
        background: linear-gradient(
          135deg,
          #eef9f8 0%,
          #f0f9ff 50%,
          #fff7ed 100%
        );
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      /* ── NAV ── */
      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 48px;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--slate-200);
        position: sticky;
        top: 0;
        z-index: 100;
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
      }
      .logo-icon {
        width: 36px;
        height: 36px;
        background: var(--teal);
        border-radius: 10px;
        display: grid;
        place-items: center;
      }
      .logo-icon svg {
        width: 20px;
        height: 20px;
        fill: white;
      }
      .logo-text {
        font-family: "Lora", serif;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--slate-900);
      }
      .nav-link {
        font-size: 0.875rem;
        color: var(--slate-700);
      }
      .nav-link a {
        color: var(--teal);
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
      }
      .nav-link a:hover {
        text-decoration: underline;
      }

      /* ── PAGE WRAPPER ── */
      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
      }

      .page-header {
        text-align: center;
        margin-bottom: 36px;
      }
      .page-header h1 {
        font-family: "Lora", serif;
        font-size: 2rem;
        font-weight: 600;
        color: var(--slate-900);
      }
      .page-header p {
        margin-top: 6px;
        font-size: 0.95rem;
        color: var(--slate-400);
      }

      /* ── STEPPER ── */
      .stepper {
        display: flex;
        align-items: center;
        gap: 0;
        margin-bottom: 40px;
      }
      .step {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--slate-400);
        cursor: default;
      }
      .step.active {
        color: var(--teal);
      }
      .step.complete {
        color: var(--teal);
      }

      .step-num {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 2px solid var(--slate-200);
        display: grid;
        place-items: center;
        font-weight: 600;
        font-size: 0.875rem;
        background: var(--white);
        transition: all 0.3s;
      }
      .step.active .step-num {
        border-color: var(--teal);
        color: var(--teal);
      }
      .step.complete .step-num {
        border-color: var(--teal);
        background: var(--teal);
        color: white;
      }

      .step-line {
        width: 80px;
        height: 2px;
        background: var(--slate-200);
        margin: 0 4px;
        transition: background 0.3s;
      }
      .step-line.done {
        background: var(--teal);
      }

      /* ── CARD ── */
      .card {
        background: white;
        border-radius: 20px;
        box-shadow:
          0 4px 24px rgba(15, 118, 110, 0.08),
          0 1px 4px rgba(0, 0, 0, 0.04);
        padding: 40px 48px;
        width: 100%;
        max-width: 780px;
      }

      /* ── FORM GRID ── */
      .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 22px 28px;
      }
      .col-span-2 {
        grid-column: span 2;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .field label {
        font-size: 0.8125rem;
        font-weight: 500;
        color: var(--slate-700);
      }
      .field label .req {
        color: var(--rose);
        margin-left: 2px;
      }

      .field input,
      .field select,
      .field textarea {
        width: 100%;
        padding: 10px 14px;
        border: 1.5px solid var(--slate-200);
        border-radius: 10px;
        font-size: 0.9rem;
        font-family: inherit;
        color: var(--slate-900);
        background: var(--slate-50);
        outline: none;
        transition:
          border-color 0.2s,
          box-shadow 0.2s;
        appearance: none;
      }
      .field input:focus,
      .field select:focus,
      .field textarea:focus {
        border-color: var(--teal);
        background: white;
        box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.12);
      }
      .field input.error,
      .field select.error {
        border-color: var(--rose);
      }
      .field .err-msg {
        font-size: 0.75rem;
        color: var(--rose);
        margin-top: 2px;
        display: none;
      }
      .field.has-error .err-msg {
        display: block;
      }
      .field.has-error input,
      .field.has-error select {
        border-color: var(--rose);
      }

      .field .input-wrap {
        position: relative;
      }
      .field .input-wrap input {
        padding-right: 40px;
      }
      .field .input-wrap .icon {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--slate-400);
        pointer-events: none;
      }

      select {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 12px center;
        padding-right: 36px;
      }

      /* ── SECTION LABEL ── */
      .section-label {
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--teal);
        border-bottom: 1px solid var(--slate-200);
        padding-bottom: 8px;
        margin-bottom: 20px;
      }

      /* ── RADIO & CHECKBOX ── */
      .radio-group,
      .check-group {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      .radio-option,
      .check-option {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.875rem;
        color: var(--slate-700);
        cursor: pointer;
      }
      .radio-option input[type="radio"],
      .check-option input[type="checkbox"] {
        display: none;
      }
      .radio-option .rb,
      .check-option .cb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid var(--slate-200);
        background: var(--slate-50);
        display: grid;
        place-items: center;
        flex-shrink: 0;
        transition: all 0.2s;
      }
      .check-option .cb {
        border-radius: 5px;
      }
      .radio-option input:checked ~ .rb {
        border-color: var(--teal);
      }
      .radio-option input:checked ~ .rb::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--teal);
      }
      .check-option input:checked ~ .cb {
        border-color: var(--teal);
        background: var(--teal);
      }
      .check-option input:checked ~ .cb::after {
        content: "";
        width: 10px;
        height: 7px;
        border-left: 2px solid white;
        border-bottom: 2px solid white;
        transform: rotate(-45deg) translateY(-1px);
      }

      /* ── STEP PANELS ── */
      .step-panel {
        display: none;
      }
      .step-panel.active {
        display: block;
      }

      /* ── PRICING CARD ── */
      .pricing-box {
        background: var(--slate-50);
        border: 1.5px solid var(--slate-200);
        border-radius: 14px;
        padding: 24px 28px;
        margin-bottom: 28px;
      }
      .pricing-box h3 {
        font-family: "Lora", serif;
        font-size: 1.1rem;
        color: var(--slate-900);
        margin-bottom: 4px;
      }
      .pricing-box .sub {
        font-size: 0.8rem;
        color: var(--slate-400);
        margin-bottom: 18px;
      }
      .pricing-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: var(--slate-700);
        padding: 10px 0;
        border-bottom: 1px dashed var(--slate-200);
      }
      .pricing-row.total {
        border-bottom: none;
        font-weight: 700;
        font-size: 1rem;
        color: var(--slate-900);
        padding-top: 14px;
      }
      .pricing-row.total .price-val {
        color: var(--teal);
      }

      /* ── SUBSCRIPTION ── */
      .subscribe-wrap {
        margin-bottom: 28px;
      }
      .subscribe-wrap p {
        font-size: 0.875rem;
        color: var(--slate-700);
        margin-bottom: 10px;
        font-weight: 500;
      }
      .subscribe-wrap .note {
        font-size: 0.75rem;
        color: var(--slate-400);
        margin-top: 8px;
        line-height: 1.5;
      }

      /* ── ACTIONS ── */
      .actions {
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-top: 32px;
      }
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 32px;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        font-family: inherit;
        cursor: pointer;
        border: none;
        transition: all 0.2s;
        text-decoration: none;
      }
      .btn-primary {
        background: var(--teal);
        color: white;
      }
      .btn-primary:hover {
        background: var(--teal-dk);
        transform: translateY(-1px);
        box-shadow: 0 4px 14px rgba(15, 118, 110, 0.35);
      }
      .btn-outline {
        background: transparent;
        color: var(--teal);
        border: 1.5px solid var(--teal);
      }
      .btn-outline:hover {
        background: var(--teal-lt);
      }

      /* ── SUCCESS ── */
      #step-success {
        text-align: center;
        padding: 20px 0;
      }
      .success-icon {
        width: 72px;
        height: 72px;
        background: var(--teal-lt);
        border-radius: 50%;
        display: grid;
        place-items: center;
        margin: 0 auto 20px;
      }
      .success-icon svg {
        width: 36px;
        height: 36px;
        stroke: var(--teal);
      }
      #step-success h2 {
        font-family: "Lora", serif;
        font-size: 1.6rem;
        color: var(--slate-900);
        margin-bottom: 8px;
      }
      #step-success p {
        font-size: 0.9rem;
        color: var(--slate-400);
      }

      /* ── PAGE VIEWS ── */
      .page-view {
        display: none;
        flex-direction: column;
        align-items: center;
        padding: 40px 16px 60px;
        flex: 1;
      }
      .page-view.active {
        display: flex;
      }

      /* ── SIGN IN CARD ── */
      .signin-card {
        background: white;
        border-radius: 20px;
        box-shadow:
          0 4px 24px rgba(15, 118, 110, 0.08),
          0 1px 4px rgba(0, 0, 0, 0.04);
        padding: 44px 48px;
        width: 100%;
        max-width: 460px;
      }
      .signin-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 28px;
      }
      .signin-logo .logo-icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
      }
      .signin-logo .logo-icon svg {
        width: 24px;
        height: 24px;
      }
      .signin-logo span {
        font-family: "Lora", serif;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--slate-900);
      }

      .signin-title {
        text-align: center;
        margin-bottom: 30px;
      }
      .signin-title h2 {
        font-family: "Lora", serif;
        font-size: 1.6rem;
        color: var(--slate-900);
        margin-bottom: 6px;
      }
      .signin-title p {
        font-size: 0.875rem;
        color: var(--slate-400);
      }

      .signin-fields {
        display: flex;
        flex-direction: column;
        gap: 18px;
        margin-bottom: 10px;
      }

      .pw-wrap {
        position: relative;
      }
      .pw-wrap input {
        padding-right: 44px;
      }
      .pw-toggle {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        color: var(--slate-400);
        padding: 0;
        display: grid;
        place-items: center;
      }
      .pw-toggle:hover {
        color: var(--teal);
      }

      .forgot-row {
        text-align: right;
        margin-bottom: 22px;
      }
      .forgot-row a {
        font-size: 0.8125rem;
        color: var(--teal);
        text-decoration: none;
        font-weight: 500;
      }
      .forgot-row a:hover {
        text-decoration: underline;
      }

      .btn-full {
        width: 100%;
        justify-content: center;
        padding: 13px 20px;
        font-size: 0.95rem;
      }

      .divider {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 22px 0;
        color: var(--slate-400);
        font-size: 0.8rem;
      }
      .divider::before,
      .divider::after {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--slate-200);
      }

      .social-btns {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .btn-social {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 11px 20px;
        border-radius: 10px;
        font-size: 0.875rem;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        border: 1.5px solid var(--slate-200);
        background: white;
        color: var(--slate-700);
        transition: all 0.2s;
      }
      .btn-social:hover {
        border-color: var(--teal);
        background: var(--teal-lt);
        color: var(--teal);
      }
      .btn-social svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }

      .register-prompt {
        text-align: center;
        margin-top: 24px;
        font-size: 0.875rem;
        color: var(--slate-400);
      }
      .register-prompt a {
        color: var(--teal);
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
      }
      .register-prompt a:hover {
        text-decoration: underline;
      }

      /* forgot password modal */
      .modal-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.4);
        backdrop-filter: blur(4px);
        z-index: 200;
        place-items: center;
      }
      .modal-overlay.open {
        display: grid;
      }
      .modal {
        background: white;
        border-radius: 18px;
        padding: 36px 40px;
        width: 100%;
        max-width: 420px;
        margin: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        animation: popIn 0.25s ease;
      }
      @keyframes popIn {
        from {
          transform: scale(0.92);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
      .modal h3 {
        font-family: "Lora", serif;
        font-size: 1.25rem;
        color: var(--slate-900);
        margin-bottom: 6px;
      }
      .modal p {
        font-size: 0.875rem;
        color: var(--slate-400);
        margin-bottom: 22px;
      }
      .modal-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
      }
      .modal-actions .btn {
        flex: 1;
        justify-content: center;
      }

      /* sign-in success */
      .signin-success {
        text-align: center;
        padding: 16px 0;
      }
      .signin-success .success-icon {
        margin: 0 auto 20px;
      }
      .signin-success h2 {
        font-family: "Lora", serif;
        font-size: 1.5rem;
        color: var(--slate-900);
        margin-bottom: 8px;
      }
      .signin-success p {
        font-size: 0.875rem;
        color: var(--slate-400);
      }

      @media (max-width: 640px) {
        nav {
          padding: 14px 20px;
        }
        .card {
          padding: 28px 20px;
        }
        .form-grid {
          grid-template-columns: 1fr;
        }
        .col-span-2 {
          grid-column: span 1;
        }
        .step-line {
          width: 40px;
        }
        .step-label {
          display: none;
        }
      }
    `,lh=[`
      let currentStep = 1;

      /* ── PAGE SWITCHING ── */
      function showPage(page) {
        document.getElementById("view-register").classList.remove("active");
        document.getElementById("view-signin").classList.remove("active");
        if (page === "signin") {
          document.getElementById("view-signin").classList.add("active");
        } else {
          document.getElementById("view-register").classList.add("active");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      /* ── SIGN IN ── */
      function doSignIn() {
        const email = document.getElementById("si-email");
        const pw = document.getElementById("si-password");
        const emailField = email.closest(".field");
        const pwField = pw.closest(".field");
        let ok = true;

        const validEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value);
        emailField.classList.toggle("has-error", !validEmail);
        if (!validEmail) ok = false;

        if (!pw.value.trim()) {
          pwField.classList.add("has-error");
          ok = false;
        } else {
          pwField.classList.remove("has-error");
        }

        if (!ok) return;

        document.getElementById("signin-form-wrap").style.display = "none";
        document.getElementById("signin-success").style.display = "block";
      }

      function togglePw() {
        const inp = document.getElementById("si-password");
        const isText = inp.type === "text";
        inp.type = isText ? "password" : "text";
        document.getElementById("eye-icon").innerHTML = isText
          ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
          : '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>';
      }

      function openForgot() {
        document.getElementById("forgot-modal").classList.add("open");
      }
      function closeForgot() {
        document.getElementById("forgot-modal").classList.remove("open");
      }
      function sendReset() {
        const el = document.getElementById("forgot-email");
        const valid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(el.value);
        el.closest(".field").classList.toggle("has-error", !valid);
        if (!valid) return;
        closeForgot();
        alert("✅ A password reset link has been sent to " + el.value);
        el.value = "";
      }

      // close modal on overlay click
      document
        .getElementById("forgot-modal")
        .addEventListener("click", function (e) {
          if (e.target === this) closeForgot();
        });

      function goToStep(next) {
        if (next > currentStep && !validateStep(currentStep)) return;
        document
          .getElementById("step-" + currentStep)
          .classList.remove("active");
        currentStep = next;
        document.getElementById("step-" + currentStep).classList.add("active");
        updateStepper();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      function updateStepper() {
        for (let i = 1; i <= 3; i++) {
          const s = document.getElementById("s" + i);
          s.classList.remove("active", "complete");
          if (i < currentStep) s.classList.add("complete");
          else if (i === currentStep) s.classList.add("active");
        }
        for (let i = 1; i <= 2; i++) {
          const l = document.getElementById("l" + i);
          l.classList.toggle("done", i < currentStep);
        }
      }

      function validateStep(step) {
        let ok = true;

        function req(id, test) {
          const el = document.getElementById(id);
          const field = el.closest(".field");
          const fail = test ? !test(el.value) : !el.value.trim();
          field.classList.toggle("has-error", fail);
          if (fail) ok = false;
        }

        if (step === 1) {
          req("firstName");
          req("gender");
          req("dob");
          req("guardianFirst");
          req("email", (v) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v));
          req("pinCode", (v) => /^\\d{6}$/.test(v.trim()));
          req("country");
          req("phone");
        }
        if (step === 2) {
          req("department");
          req("apptDate");
        }
        return ok;
      }

      function submitForm() {
        const panels = document.querySelectorAll(".step-panel");
        panels.forEach((p) => p.classList.remove("active"));
        document.getElementById("step-success").classList.add("active");

        // hide stepper
        document.querySelector(".stepper").style.opacity = "0";
      }

      function resetForm() {
        document.querySelector(".stepper").style.opacity = "1";
        document
          .querySelectorAll(".step-panel")
          .forEach((p) => p.classList.remove("active"));
        document.getElementById("step-1").classList.add("active");
        document
          .querySelectorAll(
            "input:not([type=radio]):not([type=checkbox]), select, textarea",
          )
          .forEach((el) => (el.value = ""));
        document
          .querySelectorAll(".has-error")
          .forEach((el) => el.classList.remove("has-error"));
        currentStep = 1;
        updateStepper();
      }
    `];function hc(){return R.useEffect(()=>{document.title=sh;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=oh,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of lh)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mediwell-page-root",children:[e.jsxs("nav",{children:[e.jsxs("a",{className:"logo",href:"#",children:[e.jsx("div",{className:"logo-icon",children:e.jsx("svg",{viewbox:"0 0 24 24",children:e.jsx("path",{d:"M12 2a10 10 0 100 20A10 10 0 0012 2zm1 14h-2v-5H9v-2h2V7h2v2h2v2h-2v5z"})})}),e.jsx("span",{className:"logo-text",children:"MediWell Health care"})]}),e.jsxs("span",{className:"nav-link",children:["Already registered? ",e.jsx("a",{onClick:()=>window.__mediwellRun("showPage('signin')"),children:"Sign In"})]})]}),e.jsxs("div",{className:"page-view",id:"view-signin",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Welcome Back"}),e.jsx("p",{children:"Sign in to your MediCare account"})]}),e.jsxs("div",{className:"signin-card",children:[e.jsxs("div",{id:"signin-form-wrap",children:[e.jsxs("div",{className:"signin-fields",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Email Address ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"email",id:"si-email",placeholder:"patient@example.com"}),e.jsx("span",{className:"err-msg",children:"Please enter a valid email"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Password ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("div",{className:"pw-wrap",children:[e.jsx("input",{type:"password",id:"si-password",placeholder:"Enter your password"}),e.jsx("button",{className:"pw-toggle",onClick:()=>window.__mediwellRun("togglePw()"),type:"button",id:"pw-toggle-btn",children:e.jsxs("svg",{id:"eye-icon",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2",viewbox:"0 0 24 24",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})]}),e.jsx("span",{className:"err-msg",id:"si-pw-err",children:"Password is required"})]})]}),e.jsx("div",{className:"forgot-row",children:e.jsx("a",{onClick:()=>window.__mediwellRun("openForgot()"),children:"Forgot password?"})}),e.jsx("button",{className:"btn btn-primary btn-full",onClick:()=>window.__mediwellRun("doSignIn()"),children:"Sign In"}),e.jsx("div",{className:"divider",children:"or continue with"}),e.jsxs("div",{className:"social-btns",children:[e.jsxs("button",{className:"btn-social",children:[e.jsxs("svg",{viewbox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),e.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),e.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z",fill:"#FBBC05"}),e.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),"Continue with Google"]}),e.jsxs("button",{className:"btn-social",children:[e.jsx("svg",{viewbox:"0 0 24 24",fill:"#0078D4",children:e.jsx("path",{d:"M21.579 6.855c.14.42.21.865.21 1.33C21.789 13.67 17.566 18 12 18a9.86 9.86 0 01-5.032-1.378A7.03 7.03 0 0012 15.13a3.514 3.514 0 01-3.28-2.437c.214.04.434.063.66.063.32 0 .63-.043.924-.124A3.513 3.513 0 016.87 9.28v-.044c.446.248.956.397 1.498.414a3.51 3.51 0 01-1.085-4.686 9.963 9.963 0 007.23 3.665 3.956 3.956 0 01-.089-.8A3.511 3.511 0 0117.935 4.5a3.5 3.5 0 012.56 1.107 7.03 7.03 0 002.228-.852 3.525 3.525 0 01-1.543 1.942 7.01 7.01 0 002.018-.548 7.13 7.13 0 01-1.619 1.706z"})}),"Continue with Microsoft"]})]}),e.jsxs("div",{className:"register-prompt",children:["Don't have an account?",e.jsx("a",{onClick:()=>window.__mediwellRun("showPage('register')"),children:"Register here"})]})]}),e.jsxs("div",{className:"signin-success",id:"signin-success",style:{display:"none"},children:[e.jsx("div",{className:"success-icon",style:{width:"72px",height:"72px",background:"var(--teal-lt)",borderRadius:"50%",display:"grid",placeItems:"center"},children:e.jsx("svg",{width:"36",height:"36",fill:"none",stroke:"var(--teal)","stroke-width":"2.5",viewbox:"0 0 24 24",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}),e.jsx("h2",{children:"Welcome Back!"}),e.jsxs("p",{children:["You've signed in successfully.",e.jsx("br",{}),"Redirecting to your dashboard…"]}),e.jsx("button",{className:"btn btn-outline btn-full",style:{marginTop:"24px"},onClick:()=>window.__mediwellRun("showPage('register')"),children:"← Go to Registration"})]})]})]}),e.jsx("div",{className:"modal-overlay",id:"forgot-modal",children:e.jsxs("div",{className:"modal",children:[e.jsx("h3",{children:"Reset Password"}),e.jsx("p",{children:"Enter your registered email and we'll send you a reset link."}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Email Address ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"email",id:"forgot-email",placeholder:"patient@example.com"}),e.jsx("span",{className:"err-msg",id:"forgot-err",children:"Please enter a valid email"})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"btn btn-outline",onClick:()=>window.__mediwellRun("closeForgot()"),children:"Cancel"}),e.jsx("button",{className:"btn btn-primary",onClick:()=>window.__mediwellRun("sendReset()"),children:"Send Reset Link"})]})]})}),e.jsxs("main",{id:"view-register",className:"page-view active",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Registration Form"}),e.jsx("p",{children:"Complete the steps below to register with Health Care"})]}),e.jsxs("div",{className:"stepper",children:[e.jsxs("div",{className:"step active",id:"s1",children:[e.jsx("div",{className:"step-num",children:"1"}),e.jsx("span",{className:"step-label",children:"Personal Details"})]}),e.jsx("div",{className:"step-line",id:"l1"}),e.jsxs("div",{className:"step",id:"s2",children:[e.jsx("div",{className:"step-num",children:"2"}),e.jsx("span",{className:"step-label",children:"Medical Details"})]}),e.jsx("div",{className:"step-line",id:"l2"}),e.jsxs("div",{className:"step",id:"s3",children:[e.jsx("div",{className:"step-num",children:"3"}),e.jsx("span",{className:"step-label",children:"Confirm & Submit"})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"step-panel active",id:"step-1",children:[e.jsx("p",{className:"section-label",children:"Personal Information"}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["First Name ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",id:"firstName",placeholder:"e.g. Ananya"}),e.jsx("span",{className:"err-msg",children:"First name is required"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Last Name"}),e.jsx("input",{type:"text",id:"lastName",placeholder:"e.g. Sharma"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Gender ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{id:"gender",children:[e.jsx("option",{value:"",children:"Select gender"}),e.jsx("option",{children:"Male"}),e.jsx("option",{children:"Female"}),e.jsx("option",{children:"Other"}),e.jsx("option",{children:"Prefer not to say"})]}),e.jsx("span",{className:"err-msg",children:"Please select gender"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Date of Birth ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("div",{className:"input-wrap",children:[e.jsx("input",{type:"date",id:"dob"}),e.jsx("span",{className:"icon calendar-icon","aria-hidden":"true",children:e.jsx("img",{src:"/calendar-logo.png",alt:""})})]}),e.jsx("span",{className:"err-msg",children:"Please enter date of birth"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Guardian First Name ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",id:"guardianFirst",placeholder:"Father / Mother"}),e.jsx("span",{className:"err-msg",children:"Guardian name is required"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Guardian Last Name"}),e.jsx("input",{type:"text",id:"guardianLast",placeholder:"Last Name"})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsxs("label",{children:["Email Address ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"email",id:"email",placeholder:"patient@example.com"}),e.jsx("span",{className:"err-msg",children:"Please enter a valid email"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Pin Code ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",id:"pinCode",maxLength:"6",placeholder:"6-digit pin"}),e.jsx("span",{className:"err-msg",children:"Enter a valid 6-digit pin"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Country ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{id:"country",children:[e.jsx("option",{value:"",children:"Select country"}),e.jsx("option",{children:"India"}),e.jsx("option",{children:"United States"}),e.jsx("option",{children:"United Kingdom"}),e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Australia"}),e.jsx("option",{children:"Other"})]}),e.jsx("span",{className:"err-msg",children:"Please select a country"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Time Zone ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{id:"timezone",children:[e.jsx("option",{value:"IST",children:"IST — Indian Standard Time (GMT +5:30)"}),e.jsx("option",{value:"UTC",children:"UTC — Coordinated Universal Time"}),e.jsx("option",{value:"EST",children:"EST — Eastern Standard Time (GMT −5)"}),e.jsx("option",{value:"PST",children:"PST — Pacific Standard Time (GMT −8)"})]})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Phone Number (with country code)",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"tel",id:"phone",placeholder:"+91 98765 43210"}),e.jsx("span",{className:"err-msg",children:"Phone number is required"})]})]}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"btn btn-primary",onClick:()=>window.__mediwellRun("goToStep(2)"),children:"Next →"})})]}),e.jsxs("div",{className:"step-panel",id:"step-2",children:[e.jsx("p",{className:"section-label",children:"Medical Information"}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Department ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("select",{id:"department",children:[e.jsx("option",{value:"",children:"Select department"}),e.jsx("option",{children:"General Medicine"}),e.jsx("option",{children:"Cardiology"}),e.jsx("option",{children:"Orthopaedics"}),e.jsx("option",{children:"Paediatrics"}),e.jsx("option",{children:"Neurology"}),e.jsx("option",{children:"Gynaecology"}),e.jsx("option",{children:"Dermatology"}),e.jsx("option",{children:"ENT"})]}),e.jsx("span",{className:"err-msg",children:"Please select a department"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Appointment Date ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("div",{className:"input-wrap",children:[e.jsx("input",{type:"date",id:"apptDate"}),e.jsx("span",{className:"icon calendar-icon","aria-hidden":"true",children:e.jsx("img",{src:"/calendar-logo.png",alt:""})})]}),e.jsx("span",{className:"err-msg",children:"Please select a date"})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsxs("label",{children:["Preferred Time Slot ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("div",{className:"radio-group",id:"timeSlot",children:[e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"slot",value:"09:00 AM"}),e.jsx("div",{className:"rb"}),"9:00 AM"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"slot",value:"11:00 AM"}),e.jsx("div",{className:"rb"}),"11:00 AM"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"slot",value:"01:00 PM",defaultChecked:!0}),e.jsx("div",{className:"rb"}),"1:00 PM"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"slot",value:"03:00 PM"}),e.jsx("div",{className:"rb"}),"3:00 PM"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"slot",value:"05:00 PM"}),e.jsx("div",{className:"rb"}),"5:00 PM"]})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Blood Group"}),e.jsxs("select",{id:"bloodGroup",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{children:"A+"}),e.jsx("option",{children:"A−"}),e.jsx("option",{children:"B+"}),e.jsx("option",{children:"B−"}),e.jsx("option",{children:"AB+"}),e.jsx("option",{children:"AB−"}),e.jsx("option",{children:"O+"}),e.jsx("option",{children:"O−"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Insurance Provider"}),e.jsx("input",{type:"text",id:"insurance",placeholder:"e.g. Star Health"})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsx("label",{children:"Known Allergies / Current Medications"}),e.jsx("textarea",{id:"notes",rows:"3",placeholder:"List any allergies or ongoing medications\\u2026",style:{resize:"vertical"}})]}),e.jsxs("div",{className:"field col-span-2",children:[e.jsx("label",{children:"Preferences"}),e.jsxs("div",{className:"check-group",children:[e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",id:"chkSms",defaultChecked:!0}),e.jsx("div",{className:"cb"}),"Receive SMS reminders"]}),e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",id:"chkEmail"}),e.jsx("div",{className:"cb"}),"Receive email updates"]}),e.jsxs("label",{className:"check-option",children:[e.jsx("input",{type:"checkbox",id:"chkReport",defaultChecked:!0}),e.jsx("div",{className:"cb"}),"Share reports with doctor"]})]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn btn-outline",onClick:()=>window.__mediwellRun("goToStep(1)"),children:"← Back"}),e.jsx("button",{className:"btn btn-primary",onClick:()=>window.__mediwellRun("goToStep(3)"),children:"Next →"})]})]}),e.jsxs("div",{className:"step-panel",id:"step-3",children:[e.jsx("p",{className:"section-label",children:"Confirm & Submit"}),e.jsxs("div",{className:"pricing-box",children:[e.jsx("h3",{children:"Appointment Summary"}),e.jsx("p",{className:"sub",children:"Your fee breakdown is shown below"}),e.jsxs("div",{className:"pricing-row",children:[e.jsx("span",{children:"Consultation Fee"}),e.jsx("span",{children:"₹800"})]}),e.jsxs("div",{className:"pricing-row",children:[e.jsx("span",{children:"Registration Charges"}),e.jsx("span",{children:"₹200"})]}),e.jsxs("div",{className:"pricing-row total",children:[e.jsx("span",{children:"Total"}),e.jsx("span",{className:"price-val",children:"₹1,000"})]})]}),e.jsxs("div",{className:"subscribe-wrap",children:[e.jsx("p",{children:"I wish to subscribe to MediCare health updates"}),e.jsxs("div",{className:"radio-group",children:[e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"subscribe",value:"yes",defaultChecked:!0}),e.jsx("div",{className:"rb"}),"Yes"]}),e.jsxs("label",{className:"radio-option",children:[e.jsx("input",{type:"radio",name:"subscribe",value:"no"}),e.jsx("div",{className:"rb"}),"No"]})]}),e.jsx("p",{className:"note",children:"* By selecting 'Yes' you allow MediCare to send appointment reminders, health tips, and updates via WhatsApp and email."})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn btn-outline",onClick:()=>window.__mediwellRun("goToStep(2)"),children:"← Back"}),e.jsx("button",{className:"btn btn-primary",onClick:()=>window.__mediwellRun("submitForm()"),children:"Submit Registration"})]})]}),e.jsxs("div",{className:"step-panel",id:"step-success",children:[e.jsx("div",{className:"success-icon",children:e.jsx("svg",{fill:"none",stroke:"currentColor","stroke-width":"2.5",viewbox:"0 0 24 24",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}),e.jsx("h2",{children:"Registration Successful!"}),e.jsxs("p",{children:["Your patient ID and appointment details have been sent to your email.",e.jsx("br",{}),"We look forward to seeing you at MediCare."]}),e.jsx("div",{className:"actions",style:{marginTop:"24px"},children:e.jsx("button",{className:"btn btn-primary",onClick:()=>window.__mediwellRun("resetForm()"),children:"Register Another Patient"})})]})]})]})]})})}const dh="MediWell Healthcare",ch=["/legacy/api.js","/legacy/script.js"];function Kn(d){const o=d.currentTarget.closest(".faq-item");if(!o)return;const m=o.querySelector(".faq-answer"),c=o.classList.contains("active");document.querySelectorAll(".faq-item.active").forEach(b=>{if(b!==o){b.classList.remove("active");const E=b.querySelector(".faq-answer");E&&(E.style.maxHeight="0px")}}),o.classList.toggle("active",!c),m&&(m.style.maxHeight=c?"0px":m.scrollHeight+"px")}function Us(){return R.useEffect(()=>{document.title=dh;const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of ch)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mediwell-page-root",children:[e.jsxs("nav",{className:"navbar",children:[e.jsxs("div",{className:"left-section",children:[e.jsxs("div",{className:"hamburger",onClick:()=>window.__mediwellRun("toggleMenu()"),children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("div",{className:"logo",children:[e.jsx("span",{className:"mediwell",children:"MediWell"}),e.jsx("span",{className:"healthcare",children:"HEALTHCARE"})]})]}),e.jsxs("ul",{className:"nav-links",children:[e.jsx("li",{children:e.jsx("a",{href:"#benefits",children:"Benefits"})}),e.jsx("li",{children:e.jsx("a",{href:"#solutions",children:"Solutions"})}),e.jsx("li",{children:e.jsx("a",{href:"#services",children:"Services"})}),e.jsx("li",{children:e.jsx("a",{href:"#doctors",children:"Doctors"})}),e.jsx("li",{children:e.jsx("a",{href:"#resources",children:"Resources"})})]}),e.jsxs("div",{className:"search-container",id:"searchContainer",children:[e.jsx("input",{type:"text",className:"search-input",id:"siteSearchInput",placeholder:"Search... e.g. 'book an appointment'",autoComplete:"off"}),e.jsx("div",{className:"search-results",id:"searchResults"}),e.jsx("button",{className:"search-btn",onClick:()=>window.__mediwellRun("toggleSearch()"),children:"🔍"})]})]}),e.jsxs("div",{id:"menu",className:"menu",children:[e.jsx("button",{type:"button",id:"menuCloseButton",className:"menu-close","aria-label":"Close menu",children:"×"}),e.jsxs("div",{id:"userSection",children:[e.jsx("div",{className:"logged-in-only",children:e.jsx("div",{className:"menu-header",children:e.jsxs("div",{className:"profile-card",id:"menuProfileCard",style:{cursor:"pointer"},children:[e.jsx("div",{id:"menuProfileAvatar",className:"profile-img",style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#1a7a8a",color:"#fff",fontWeight:"700",fontSize:"32px"},children:"?"}),e.jsx("h3",{id:"menuProfileName",children:"—"}),e.jsx("p",{id:"menuProfileRole",children:"—"}),e.jsx("div",{className:"profile-stats",children:e.jsx("div",{id:"menuProfileGoto",style:{gridColumn:"1 / -1"},children:"Tap to go to my dashboard →"})})]})})}),e.jsx("div",{className:"menu-content",children:e.jsxs("div",{className:"logged-in-only menu-group",children:[e.jsxs("a",{href:"#",className:"menu-item",children:[e.jsx("span",{className:"material-symbols-outlined icon-blue",children:"home"}),"Home"]}),e.jsxs("a",{href:"#",className:"menu-item",children:[e.jsx("span",{className:"material-symbols-outlined icon-orange",children:"notifications"}),"Notifications"]}),e.jsxs("a",{href:"#",className:"menu-item",children:[e.jsx("span",{className:"material-symbols-outlined icon-purple",children:"history"}),"History"]}),e.jsxs("a",{href:"#",className:"menu-item",children:[e.jsx("span",{className:"material-symbols-outlined icon-gray",children:"settings"}),"Settings"]}),e.jsxs("a",{href:"#",className:"menu-item logout-item",id:"menuLogoutBtn",children:[e.jsx("span",{className:"material-symbols-outlined icon-red",children:"logout"}),"Logout"]})]})}),e.jsxs("div",{className:"menu-group",children:[e.jsx("div",{className:"menu-group-title",children:"Healthcare Services"}),e.jsx("div",{className:"logged-in-only",children:e.jsxs("a",{href:"/appointment",className:"menu-item",children:[e.jsx("span",{className:"material-symbols-outlined icon-orange",children:"calendar_month"}),"Book an Appointment"]})}),e.jsxs("div",{className:"guest-only",children:[e.jsx("div",{className:"expand-card",children:e.jsxs("a",{href:"/appointment",className:"menu-item expandable","aria-label":"Appointment Booking",children:[e.jsx("span",{className:"material-symbols-outlined icon-orange",children:"calendar_month"}),"Appointments"]})})]}),e.jsxs("a",{href:"#doctors",className:"menu-item",children:[e.jsx("span",{className:"material-symbols-outlined icon-purple",children:" search "}),"Find a Doctor"]}),e.jsxs("a",{href:"#services",className:"menu-item",children:[e.jsx("span",{className:"material-symbols-outlined icon-teal",children:"local_hospital"}),"Medical Services"]}),e.jsxs("a",{href:"/insurance",className:"menu-item",children:[e.jsx("span",{className:"material-symbols-outlined icon-blue",children:"health_and_safety"}),"Insurance"]}),e.jsxs("a",{href:"/billing",className:"menu-item",children:[e.jsx("span",{className:"material-symbols-outlined icon-green",children:"receipt_long"}),"Billing"]}),e.jsxs("a",{href:"#benefits",className:"menu-item",children:[e.jsx("span",{className:"material-symbols-outlined icon-orange",children:"checklist"}),"First Visit Checklist"]}),e.jsxs("a",{href:"#Faq",className:"menu-item",children:[e.jsx("span",{className:"material-symbols-outlined icon-purple",children:" help "}),"FAQ"]})]})]})]}),e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-content",children:[e.jsx("h3",{children:"THE"}),e.jsxs("h1",{children:["HOSPITAL OF THE",e.jsx("br",{}),"FUTURE, TODAY."]}),e.jsx("div",{className:"para",children:e.jsx("p",{children:"MediWell Health care supports providers, payers, and public health organizations with a secure, comprehensive suite of cloud-based solutions. Built on enterprise-grade infrastructure, our unified solutions help safeguard patient data, streamline operations, alleviate administrative burden, and deliver near real-time insights for connected, efficient care. AI is embedded into every layer of our technology—from our data platforms to our cloud applications—providing actionable insights that help you deliver efficient, enhanced care. And it all runs on our secure, scalable AI infrastructure built for the demands of healthcare."})}),e.jsxs("div",{className:"features",children:[e.jsx("span",{children:"• 100% Expert Doctors"}),e.jsx("span",{children:"• Medicine & Instrument"}),e.jsx("span",{children:"• Scientific Treatment"}),e.jsx("span",{children:"• Instant Operation"})]}),e.jsxs("div",{className:"hero-buttons",children:[e.jsx("a",{href:"/contact",className:"btn-primary",children:"Contact Us"}),e.jsx("a",{href:"/request-demo",style:{textDecoration:"none !important"},children:e.jsx("button",{className:"btn-secondary",children:"Request a Demo"})})]})]}),e.jsx("div",{className:"hero-image",children:e.jsx("img",{src:"Image/doc.png",alt:"Doctors"})})]}),e.jsxs("section",{className:"info-section",children:[e.jsxs("div",{className:"info-card",children:[e.jsx("h2",{children:"Register for MediWell Healthcare Summit 2026."}),e.jsx("p",{children:"September 22-24, 2026 | Bokaro, Jharkhand"}),e.jsx("a",{href:"/register-p",children:e.jsx("button",{className:"info-btn",children:"Register Now"})})]}),e.jsxs("div",{className:"info-card",children:[e.jsx("h2",{children:"Emergency Support Available 24/7"}),e.jsxs("div",{className:"emergency-links",children:[e.jsxs("a",{href:"tel:108",children:[e.jsx("span",{className:"material-symbols-outlined",children:" emergency "}),"Call 108"]}),e.jsxs("a",{href:"tel:1800111565",children:[e.jsx("span",{className:"material-symbols-outlined",children:" call "}),"1800 11 1565"]}),e.jsxs("a",{className:"directions-link directions-desktop",href:"https://www.google.com/maps/dir/?api=1&destination=Bokaro+General+Hospital%2C+Sector+4%2C+Bokaro+Steel+City%2C+Jharkhand+827004&travelmode=driving",target:"_blank",rel:"noopener",children:[e.jsx("span",{className:"material-symbols-outlined",children:"location_on"}),"Directions"]}),e.jsxs("a",{className:"directions-link directions-mobile",href:"geo:0,0?q=Bokaro%20General%20Hospital%2C%20Sector%204%2C%20Bokaro%20Steel%20City%2C%20Jharkhand%20827004",children:[e.jsx("span",{className:"material-symbols-outlined",children:"location_on"}),"Directions"]})]}),e.jsx("a",{href:"/emergency",children:e.jsx("button",{className:"info-btn",children:"Emergency"})})]})]}),e.jsxs("section",{className:"diagnose-ai-section",id:"diagnose-ai",children:[e.jsxs("div",{className:"section-title reveal",children:[e.jsxs("h2",{children:["Diagnose ",e.jsx("span",{children:"AI"})]}),e.jsx("p",{children:"Enter your symptoms and feelings below for instant AI clinical triage, recommended medications, and doctor specialties."})]}),e.jsxs("div",{className:"ai-container",children:[e.jsxs("div",{className:"ai-input-box",children:[e.jsx("h3",{children:"How are you feeling today?"}),e.jsx("p",{className:"ai-subtitle",children:"Describe your symptoms in your own words or choose a preset."}),e.jsxs("div",{className:"preset-pills",children:[e.jsx("button",{type:"button",onClick:()=>window.__mediwellRun("setPreset('Chest tightness and shortness of breath')"),children:"Chest Tightness"}),e.jsx("button",{type:"button",onClick:()=>window.__mediwellRun("setPreset('Severe headache with light sensitivity')"),children:"Severe Headache"}),e.jsx("button",{type:"button",onClick:()=>window.__mediwellRun("setPreset('Persistent dry cough and fever')"),children:"Cough & Fever"}),e.jsx("button",{type:"button",onClick:()=>window.__mediwellRun("setPreset('I ate junk food and now I am vomiting, my stomach feels bloated like a balloon')"),children:"Stomach Bloating"})]}),e.jsx("textarea",{id:"aiSymptomInput",placeholder:"e.g. I have a throbbing headache, sensitivity to light, and slight nausea since this morning..."}),e.jsxs("div",{className:"ai-profile-row",children:[e.jsx("input",{type:"text",id:"aiPatientName",placeholder:"Patient Name",value:"John Doe"}),e.jsx("input",{type:"number",id:"aiPatientAge",placeholder:"Age",value:"32"}),e.jsxs("select",{id:"aiPatientGender",children:[e.jsx("option",{children:"Male"}),e.jsx("option",{children:"Female"}),e.jsx("option",{children:"Other"})]})]}),e.jsx("button",{className:"ai-submit-btn",onClick:()=>window.__mediwellRun("runAiDiagnosis()"),children:"Run AI Triage & Diagnosis"})]}),e.jsx("div",{className:"ai-result-box",id:"aiResultBox",children:e.jsxs("div",{className:"ai-result-placeholder",children:[e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"48px",color:"#1a7a8a"},children:"smart_toy"}),e.jsx("h4",{children:"AI Clinical Intelligence Awaiting Input"}),e.jsx("p",{children:"Fill in your symptoms on the left and click run to see recommended medicines and doctor specialties."})]})})]})]}),e.jsxs("section",{className:"why-choose-us",id:"benefits",children:[e.jsxs("div",{className:"section-title reveal",children:[e.jsxs("h2",{children:["Why Choose ",e.jsx("span",{children:"Us"})]}),e.jsx("p",{children:"Providing world-class healthcare with trust, technology and expertise."})]}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card reveal",children:[e.jsx("span",{className:"material-symbols-outlined icon",children:"medical_services"}),e.jsx("h3",{children:"Expert Doctors"}),e.jsx("p",{children:"Highly qualified specialists delivering advanced treatments."})]}),e.jsxs("div",{className:"feature-card reveal",children:[e.jsx("span",{className:"material-symbols-outlined icon",children:"emergency"}),e.jsx("h3",{children:"24/7 Emergency"}),e.jsx("p",{children:"Immediate emergency care available around the clock."})]}),e.jsxs("div",{className:"feature-card reveal",children:[e.jsx("span",{className:"material-symbols-outlined icon",children:"monitor_heart"}),e.jsx("h3",{children:"Advanced Equipment"}),e.jsx("p",{children:"Modern medical technology for accurate diagnosis."})]}),e.jsxs("div",{className:"feature-card reveal",children:[e.jsx("span",{className:"material-symbols-outlined icon",children:"verified"}),e.jsx("h3",{children:"Trusted Care"}),e.jsx("p",{children:"Patient-centered healthcare with proven excellence."})]}),e.jsxs("div",{className:"feature-card reveal",children:[e.jsx("span",{className:"material-symbols-outlined icon",children:"vaccines"}),e.jsx("h3",{children:"Quality Treatment"}),e.jsx("p",{children:"Evidence-based treatment plans for better outcomes."})]}),e.jsxs("div",{className:"feature-card reveal",children:[e.jsx("span",{className:"material-symbols-outlined icon",children:"payments"}),e.jsx("h3",{children:"Affordable Cost"}),e.jsx("p",{children:"Transparent pricing with accessible healthcare services."})]}),e.jsxs("div",{className:"feature-card reveal",children:[e.jsx("span",{className:"material-symbols-outlined icon",children:"health_and_safety"}),e.jsx("h3",{children:"Patient Safety"}),e.jsx("p",{children:"Strict safety standards ensuring quality healthcare."})]}),e.jsxs("div",{className:"feature-card reveal",children:[e.jsx("span",{className:"material-symbols-outlined icon",children:"bolt"}),e.jsx("h3",{children:"Fast Service"}),e.jsx("p",{children:"Reduced waiting times and efficient patient management."})]})]})]}),e.jsxs("section",{className:"solution",children:[e.jsx("h3",{children:"Solutions to solve complex healthcare challenges"}),e.jsx("p",{children:"Modern healthcare demands integrated solutions. We connect patients, providers, payers, and public health organizations with AI-powered, interoperable solutions that help streamline data exchange, surface actionable insights, and drive operational efficiencies across the care continuum.we are always with you in need.we know how to take care."})]}),e.jsxs("section",{className:"solutions-section",id:"solutions",children:[e.jsxs("div",{className:"solutions-header",children:[e.jsx("h2",{children:"MediWell Healthcare Solutions"}),e.jsx("a",{href:"#",children:"Explore All Services"})]}),e.jsxs("div",{className:"solutions-grid",children:[e.jsxs("div",{className:"solution-card",children:[e.jsxs("button",{className:"accordion",children:[e.jsx("span",{className:"material-symbols-outlined",children:"medical_services"}),"Clinical Applications",e.jsx("span",{className:"material-symbols-outlined arrow",children:"keyboard_arrow_down"})]}),e.jsxs("div",{className:"panel",children:[e.jsx("button",{className:"panel-close","aria-label":"Close",children:"×"}),e.jsxs("div",{className:"panel-columns",children:[e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Clinical suite"}),e.jsx("p",{children:"Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation."}),e.jsx("a",{href:"#",children:"Explore clinical suite"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Continuum of care"}),e.jsx("p",{children:"Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health."}),e.jsx("a",{href:"#",children:"Explore continuum of care"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Interoperability"}),e.jsx("p",{children:"Centralize data exchange capabilities with our easy-to-use interoperability management console for provider clinical exchange, payment and operations, public health, labs and diagnostics, and benefits administration."}),e.jsx("a",{href:"#",children:"Explore interoperability"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Service lines and departments"}),e.jsx("p",{children:"Empower clinicians to deliver coordinated, knowledge-driven care by organizing care around conditions. Unite service lines and departments to help enhance care, streamline workflows, and drive efficiencies."}),e.jsx("a",{href:"#",children:"Explore service lines and departments"})]})]})]})]}),e.jsxs("div",{className:"solution-card",children:[e.jsxs("button",{className:"accordion",children:[e.jsx("span",{className:"material-symbols-outlined",children:"local_hospital"}),"Clinical & Financial Operations",e.jsx("span",{className:"material-symbols-outlined arrow",children:"keyboard_arrow_down"})]}),e.jsxs("div",{className:"panel",children:[e.jsx("button",{className:"panel-close","aria-label":"Close",children:"×"}),e.jsxs("div",{className:"panel-columns",children:[e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Clinical suite"}),e.jsx("p",{children:"Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation."}),e.jsx("a",{href:"#",children:"Explore clinical suite"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Continuum of care"}),e.jsx("p",{children:"Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health."}),e.jsx("a",{href:"#",children:"Explore continuum of care"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Interoperability"}),e.jsx("p",{children:"Centralize data exchange capabilities with our easy-to-use interoperability management console for provider clinical exchange, payment and operations, public health, labs and diagnostics, and benefits administration."}),e.jsx("a",{href:"#",children:"Explore interoperability"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Service lines and departments"}),e.jsx("p",{children:"Empower clinicians to deliver coordinated, knowledge-driven care by organizing care around conditions. Unite service lines and departments to help enhance care, streamline workflows, and drive efficiencies."}),e.jsx("a",{href:"#",children:"Explore service lines and departments"})]})]})]})]}),e.jsxs("div",{className:"solution-card",children:[e.jsxs("button",{className:"accordion",children:[e.jsx("span",{className:"material-symbols-outlined",children:"person"}),"Patient Experience",e.jsx("span",{className:"material-symbols-outlined arrow",children:"keyboard_arrow_down"})]}),e.jsxs("div",{className:"panel",children:[e.jsx("button",{className:"panel-close","aria-label":"Close",children:"×"}),e.jsxs("div",{className:"panel-columns",children:[e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Clinical suite"}),e.jsx("p",{children:"Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation."}),e.jsx("a",{href:"#",children:"Explore clinical suite"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Continuum of care"}),e.jsx("p",{children:"Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health."}),e.jsx("a",{href:"#",children:"Explore continuum of care"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Interoperability"}),e.jsx("p",{children:"Centralize data exchange capabilities with our easy-to-use interoperability management console for provider clinical exchange, payment and operations, public health, labs and diagnostics, and benefits administration."}),e.jsx("a",{href:"#",children:"Explore interoperability"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Service lines and departments"}),e.jsx("p",{children:"Empower clinicians to deliver coordinated, knowledge-driven care by organizing care around conditions. Unite service lines and departments to help enhance care, streamline workflows, and drive efficiencies."}),e.jsx("a",{href:"#",children:"Explore service lines and departments"})]})]})]})]}),e.jsxs("div",{className:"solution-card",children:[e.jsxs("button",{className:"accordion",children:[e.jsx("span",{className:"material-symbols-outlined",children:"payments"}),"Billing & Insurance",e.jsx("span",{className:"material-symbols-outlined arrow",children:"keyboard_arrow_down"})]}),e.jsxs("div",{className:"panel",children:[e.jsx("button",{className:"panel-close","aria-label":"Close",children:"×"}),e.jsxs("div",{className:"panel-columns",children:[e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Clinical suite"}),e.jsx("p",{children:"Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation."}),e.jsx("a",{href:"#",children:"Explore clinical suite"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Continuum of care"}),e.jsx("p",{children:"Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health."}),e.jsx("a",{href:"#",children:"Explore continuum of care"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Interoperability"}),e.jsx("p",{children:"Centralize data exchange capabilities with our easy-to-use interoperability management console for provider clinical exchange, payment and operations, public health, labs and diagnostics, and benefits administration."}),e.jsx("a",{href:"#",children:"Explore interoperability"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Service lines and departments"}),e.jsx("p",{children:"Empower clinicians to deliver coordinated, knowledge-driven care by organizing care around conditions. Unite service lines and departments to help enhance care, streamline workflows, and drive efficiencies."}),e.jsx("a",{href:"#",children:"Explore service lines and departments"})]})]})]})]}),e.jsxs("div",{className:"solution-card",children:[e.jsxs("button",{className:"accordion",children:[e.jsx("span",{className:"material-symbols-outlined",children:"groups"}),"Population Health",e.jsx("span",{className:"material-symbols-outlined arrow",children:"keyboard_arrow_down"})]}),e.jsxs("div",{className:"panel",children:[e.jsx("button",{className:"panel-close","aria-label":"Close",children:"×"}),e.jsxs("div",{className:"panel-columns",children:[e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Clinical suite"}),e.jsx("p",{children:"Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation."}),e.jsx("a",{href:"#",children:"Explore clinical suite"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Continuum of care"}),e.jsx("p",{children:"Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health."}),e.jsx("a",{href:"#",children:"Explore continuum of care"})]})]})]})]}),e.jsxs("div",{className:"solution-card",children:[e.jsxs("button",{className:"accordion",children:[e.jsx("span",{className:"material-symbols-outlined",children:"security"}),"Security",e.jsx("span",{className:"material-symbols-outlined arrow",children:"keyboard_arrow_down"})]}),e.jsxs("div",{className:"panel",children:[e.jsx("button",{className:"panel-close","aria-label":"Close",children:"×"}),e.jsxs("div",{className:"panel-columns",children:[e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Clinical suite"}),e.jsx("p",{children:"Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation."}),e.jsx("a",{href:"#",children:"Explore clinical suite"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Continuum of care"}),e.jsx("p",{children:"Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health."}),e.jsx("a",{href:"#",children:"Explore continuum of care"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Interoperability"}),e.jsx("p",{children:"Centralize data exchange capabilities with our easy-to-use interoperability management console for provider clinical exchange, payment and operations, public health, labs and diagnostics, and benefits administration."}),e.jsx("a",{href:"#",children:"Explore interoperability"})]})]})]})]}),e.jsxs("div",{className:"solution-card",children:[e.jsxs("button",{className:"accordion",children:[e.jsx("span",{className:"material-symbols-outlined",children:"support_agent"}),"Services & Support",e.jsx("span",{className:"material-symbols-outlined arrow",children:"keyboard_arrow_down"})]}),e.jsxs("div",{className:"panel",children:[e.jsx("button",{className:"panel-close","aria-label":"Close",children:"×"}),e.jsxs("div",{className:"panel-columns",children:[e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Clinical suite"}),e.jsx("p",{children:"Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation."}),e.jsx("a",{href:"#",children:"Explore clinical suite"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Continuum of care"}),e.jsx("p",{children:"Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health."}),e.jsx("a",{href:"#",children:"Explore continuum of care"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Interoperability"}),e.jsx("p",{children:"Centralize data exchange capabilities with our easy-to-use interoperability management console for provider clinical exchange, payment and operations, public health, labs and diagnostics, and benefits administration."}),e.jsx("a",{href:"#",children:"Explore interoperability"})]}),e.jsxs("div",{className:"panel-item",children:[e.jsx("h4",{children:"Service lines and departments"}),e.jsx("p",{children:"Empower clinicians to deliver coordinated, knowledge-driven care by organizing care around conditions. Unite service lines and departments to help enhance care, streamline workflows, and drive efficiencies."}),e.jsx("a",{href:"#",children:"Explore service lines and departments"})]})]})]})]}),e.jsxs("div",{className:"solution-card",children:[e.jsxs("button",{className:"accordion",children:[e.jsx("span",{className:"material-symbols-outlined",children:"apartment"}),"Enterprise Solutions",e.jsx("span",{className:"material-symbols-outlined arrow",children:"keyboard_arrow_down"})]}),e.jsxs("div",{className:"panel",children:[e.jsx("button",{className:"panel-close","aria-label":"Close",children:"×"}),e.jsx("h3",{className:"panel-title",children:"Security"}),e.jsx("p",{children:"Maintain a strong security posture for your enterprise with data security solutions that help you manage clinical identity, regulatory compliance, and security auditing."}),e.jsx("a",{href:"#",children:"Explore security"})]})]})]})]}),e.jsxs("section",{className:"services-section",id:"services",children:[e.jsx("h2",{className:"services-title",children:"Our Healthcare Services"}),e.jsxs("div",{className:"services-grid",children:[e.jsxs("div",{className:"service-card reveal2",children:[e.jsx("img",{src:"Image/full body.png",alt:"Full Body Checkup"}),e.jsx("h3",{children:"Full Body Checkup"}),e.jsx("button",{children:"Book Now"})]}),e.jsxs("div",{className:"service-card reveal2",children:[e.jsx("img",{src:"Image/radiology.webp",alt:"Imaging and Radiology"}),e.jsx("h3",{children:"Imaging and Radiology"}),e.jsx("button",{children:"Book Now"})]}),e.jsxs("div",{className:"service-card reveal2",children:[e.jsx("img",{src:"Image/heart checkup.jpg",alt:"Heart Related"}),e.jsx("h3",{children:"Heart Related"}),e.jsx("button",{children:"Book Now"})]}),e.jsxs("div",{className:"service-card reveal2",children:[e.jsx("img",{src:"Image/brain.avif",alt:"Brain Related"}),e.jsx("h3",{children:"Brain Related"}),e.jsx("button",{children:"Book Now"})]}),e.jsxs("div",{className:"service-card reveal2",children:[e.jsx("img",{src:"Image/stomach.jpg",alt:"Stomach Related"}),e.jsx("h3",{children:"Stomach Related"}),e.jsx("button",{children:"Book Now"})]}),e.jsxs("div",{className:"service-card reveal2",children:[e.jsx("img",{src:"Image/surgery.webp",alt:"Surgical Services"}),e.jsx("h3",{children:"Surgical Services"}),e.jsx("button",{children:"Book Now"})]}),e.jsxs("div",{className:"service-card reveal2",children:[e.jsx("img",{src:"Image/eyes.webp",alt:"Eye Related"}),e.jsx("h3",{children:"Eye Related"}),e.jsx("button",{children:"Book Now"})]})]}),e.jsx("div",{className:"booking-overlay",id:"bookingOverlay",children:e.jsxs("div",{className:"booking-container",children:[e.jsx("button",{className:"booking-close",id:"bookingClose","aria-label":"Close",children:"×"}),e.jsxs("div",{className:"booking-card",children:[e.jsxs("div",{className:"booking-left",children:[e.jsx("h2",{children:"Book Your"}),e.jsx("h1",{id:"bookingServiceName",children:"Full Body Checkup"}),e.jsx("p",{className:"booking-subtitle",id:"bookingSubtitle",children:"Comprehensive Health Screening Package"}),e.jsxs("div",{className:"booking-includes",children:[e.jsx("h4",{children:"Includes:"}),e.jsx("ul",{id:"bookingIncludesList"})]})]}),e.jsxs("div",{className:"booking-right",children:[e.jsx("h3",{children:"Book an Appointment"}),e.jsxs("form",{id:"bookingForm",children:[e.jsxs("div",{className:"booking-field",children:[e.jsx("span",{className:"material-symbols-outlined",children:"person"}),e.jsx("input",{type:"text",id:"fieldName",placeholder:"Full Name",required:""})]}),e.jsxs("div",{className:"booking-field",children:[e.jsx("span",{className:"material-symbols-outlined",children:"call"}),e.jsx("input",{type:"tel",id:"fieldPhone",placeholder:"Phone Number",required:""})]}),e.jsxs("div",{className:"booking-field",children:[e.jsx("span",{className:"material-symbols-outlined",children:"mail"}),e.jsx("input",{type:"email",id:"fieldEmail",placeholder:"Email Address",required:""})]}),e.jsxs("div",{className:"booking-field",children:[e.jsx("span",{className:"material-symbols-outlined",children:"cake"}),e.jsx("input",{type:"number",id:"fieldAge",placeholder:"Age",min:"1",required:""})]}),e.jsxs("div",{className:"booking-field",children:[e.jsx("span",{className:"material-symbols-outlined",children:"wc"}),e.jsxs("select",{id:"fieldGender",required:"",children:[e.jsx("option",{value:"",disabled:"",selected:"",children:"Gender"}),e.jsx("option",{children:"Male"}),e.jsx("option",{children:"Female"}),e.jsx("option",{children:"Other"})]})]}),e.jsxs("div",{className:"booking-field",children:[e.jsx("span",{className:"booking-date-icon","aria-hidden":"true",children:e.jsx("img",{src:"/calendar-logo.png",alt:""})}),e.jsx("input",{type:"date",id:"fieldDate",required:""})]}),e.jsxs("div",{className:"booking-field",children:[e.jsx("span",{className:"material-symbols-outlined",children:"schedule"}),e.jsxs("select",{id:"fieldTime",required:"",children:[e.jsx("option",{value:"",disabled:"",selected:"",children:"Preferred Time"}),e.jsx("option",{children:"9:00 AM"}),e.jsx("option",{children:"11:00 AM"}),e.jsx("option",{children:"1:00 PM"}),e.jsx("option",{children:"3:00 PM"}),e.jsx("option",{children:"5:00 PM"})]})]}),e.jsxs("div",{className:"booking-field",children:[e.jsx("span",{className:"material-symbols-outlined",children:"inventory_2"}),e.jsx("select",{id:"bookingPackageSelect",required:"",children:e.jsx("option",{value:"",disabled:"",selected:"",children:"Select Package"})})]}),e.jsx("button",{type:"submit",className:"booking-submit",children:"Book Now"})]})]})]}),e.jsxs("div",{className:"booking-footer",children:[e.jsxs("div",{className:"booking-footer-item",children:[e.jsx("span",{className:"material-symbols-outlined",children:"verified_user"})," Accurate Tests"]}),e.jsxs("div",{className:"booking-footer-item",children:[e.jsx("span",{className:"material-symbols-outlined",children:"bolt"})," Quick Service"]}),e.jsxs("div",{className:"booking-footer-item",children:[e.jsx("span",{className:"material-symbols-outlined",children:"favorite"})," Expert Care"]})]}),e.jsxs("div",{className:"booking-summary",id:"bookingSummary",children:[e.jsx("button",{className:"booking-close",id:"summaryClose","aria-label":"Close",children:"×"}),e.jsx("h2",{id:"summaryServiceName",children:"Full Body Checkup"}),e.jsxs("div",{className:"summary-block",children:[e.jsxs("h4",{children:[e.jsx("span",{className:"material-symbols-outlined",children:"description"})," About This Service"]}),e.jsx("p",{id:"summaryAbout"})]}),e.jsx("div",{className:"summary-price",id:"summaryPrice",children:"₹ 0"}),e.jsx("h4",{className:"summary-heading",children:"Pre-Test Instructions"}),e.jsx("ul",{id:"summaryInstructions"}),e.jsxs("div",{className:"summary-block",children:[e.jsx("h4",{children:"Booking Summary"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Name:"})," ",e.jsx("span",{id:"sumName",children:"Not filled"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Mobile:"})," ",e.jsx("span",{id:"sumMobile",children:"Not filled"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Age:"})," ",e.jsx("span",{id:"sumAge",children:"Not filled"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gender:"})," ",e.jsx("span",{id:"sumGender",children:"Not filled"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Date:"})," ",e.jsx("span",{id:"sumDate",children:"Not filled"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Time:"})," ",e.jsx("span",{id:"sumTime",children:"Not selected"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Payment:"})," Online"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Price:"})," ",e.jsx("span",{id:"sumPriceText",children:"₹0"})]})]}),e.jsx("button",{className:"booking-edit",id:"editDetailsBtn",children:"Edit Details"}),e.jsx("button",{className:"booking-submit",id:"confirmBookingBtn",children:"Confirm Booking"})]})]})})]}),e.jsxs("section",{className:"doctors-section",id:"doctors",children:[e.jsx("h2",{className:"doctor-title",children:"Our Expert Doctors"}),e.jsxs("div",{className:"slider-container",children:[e.jsx("button",{className:"slider-btn prev-btn",onClick:()=>window.__mediwellRun("moveLeft()"),children:"❮"}),e.jsx("div",{className:"slider-wrapper",children:e.jsx("div",{className:"doctor-track",id:"doctorTrack",children:e.jsx("p",{style:{padding:"20px",color:"#888"},children:"Loading doctors…"})})}),e.jsx("button",{className:"slider-btn next-btn",onClick:()=>window.__mediwellRun("moveRight()"),children:"❯"})]}),e.jsxs("div",{className:"doctor-profile-overlay",id:"doctorProfileOverlay",children:[e.jsxs("div",{className:"doctor-profile-header",children:[e.jsx("button",{className:"back-btn",id:"doctorBackBtn",children:"← Back"}),e.jsx("h2",{children:"Doctor Profile"}),e.jsxs("div",{className:"rating-badge",children:[e.jsx("span",{className:"material-symbols-outlined",children:"star"})," ",e.jsx("span",{id:"docRatingValue",children:"5"})]})]}),e.jsxs("div",{className:"doctor-profile-content",children:[e.jsxs("div",{className:"doctor-info-card",children:[e.jsx("img",{id:"docImage",src:"",alt:"",className:"doctor-profile-img"}),e.jsxs("div",{className:"doctor-info-main",children:[e.jsx("h1",{id:"docName",children:"Dr. Name"}),e.jsx("span",{className:"speciality-badge",id:"docSpeciality",children:"Speciality"}),e.jsxs("div",{className:"doctor-info-grid",children:[e.jsxs("div",{className:"info-box",children:[e.jsx("span",{className:"material-symbols-outlined",children:"school"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Qualifications"}),e.jsx("p",{id:"docQualifications",children:"MBBS"})]})]}),e.jsxs("div",{className:"info-box",children:[e.jsx("span",{className:"material-symbols-outlined",children:"location_on"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Location"}),e.jsx("p",{id:"docLocation",children:"Clinic"})]})]}),e.jsxs("div",{className:"info-box",children:[e.jsx("span",{className:"material-symbols-outlined",children:"payments"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Consultation Fee"}),e.jsx("p",{className:"fee-text",id:"docFee",children:"₹0"})]})]}),e.jsxs("div",{className:"info-box",children:[e.jsx("span",{className:"material-symbols-outlined",children:"event_available"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Availability"}),e.jsx("p",{id:"docAvailability",children:"Available"})]})]})]})]})]}),e.jsxs("div",{className:"doctor-stats-row",children:[e.jsxs("div",{className:"stat-box",children:[e.jsx("span",{className:"material-symbols-outlined stat-icon success",children:"favorite"}),e.jsx("h3",{id:"docSuccess",children:"General Medicine"}),e.jsx("p",{children:"Department"})]}),e.jsxs("div",{className:"stat-box",children:[e.jsx("span",{className:"material-symbols-outlined stat-icon exp",children:"military_tech"}),e.jsx("h3",{id:"docExperience",children:"5 Years"}),e.jsx("p",{children:"Experience"})]}),e.jsxs("div",{className:"stat-box",children:[e.jsx("span",{className:"material-symbols-outlined stat-icon patients",children:"groups"}),e.jsx("h3",{id:"docPatients",children:"2.6k"}),e.jsx("p",{children:"Patients"})]})]}),e.jsxs("div",{className:"about-doctor-box",children:[e.jsxs("h4",{children:[e.jsx("span",{className:"material-symbols-outlined",children:"info"})," About Doctor"]}),e.jsx("p",{id:"docAbout",children:"About text goes here."})]}),e.jsxs("div",{className:"appointment-box",children:[e.jsxs("h3",{children:[e.jsx("span",{className:"material-symbols-outlined",children:"event"})," Book Your Appointment"]}),e.jsxs("div",{className:"appointment-grid",children:[e.jsxs("div",{className:"appointment-left",children:[e.jsxs("h4",{children:[e.jsx("span",{className:"material-symbols-outlined",children:"calendar_month"})," Select Date"]}),e.jsx("div",{className:"date-pills",id:"datePills"}),e.jsxs("div",{className:"patient-details",children:[e.jsx("h4",{children:"Patient Details"}),e.jsxs("div",{className:"patient-form-row",children:[e.jsx("input",{type:"text",id:"patName",placeholder:"Full Name"}),e.jsx("input",{type:"number",id:"patAge",placeholder:"Age",min:"1"})]}),e.jsxs("div",{className:"patient-form-row",children:[e.jsx("input",{type:"tel",id:"patMobile",placeholder:"Mobile Number (10 digits)",maxLength:"10"}),e.jsxs("select",{id:"patGender",children:[e.jsx("option",{value:"",disabled:"",selected:"",children:"Gender"}),e.jsx("option",{children:"Male"}),e.jsx("option",{children:"Female"}),e.jsx("option",{children:"Other"})]})]}),e.jsx("input",{type:"email",id:"patEmail",placeholder:"Email (optional - for receipts)",className:"full-width-input"})]})]}),e.jsxs("div",{className:"appointment-right",children:[e.jsxs("h4",{children:[e.jsx("span",{className:"material-symbols-outlined",children:"schedule"})," Available Time Slots"]}),e.jsx("p",{className:"no-slots",id:"timeSlotsMsg",children:"No time slots for this date."}),e.jsx("div",{className:"time-slots",id:"timeSlotsContainer"}),e.jsxs("div",{className:"booking-summary-card",children:[e.jsxs("p",{children:[e.jsx("span",{children:"Selected Doctor:"})," ",e.jsx("strong",{id:"sumDoctorName",children:"-"})]}),e.jsxs("p",{children:[e.jsx("span",{children:"Doctor Speciality:"})," ",e.jsx("strong",{id:"sumDoctorSpeciality",children:"-"})]}),e.jsxs("p",{children:[e.jsx("span",{children:"Selected Date:"})," ",e.jsx("strong",{id:"sumSelectedDate",children:"Not selected"})]}),e.jsxs("p",{children:[e.jsx("span",{children:"Selected Time:"})," ",e.jsx("strong",{id:"sumSelectedTime",children:"Not selected"})]}),e.jsxs("p",{children:[e.jsx("span",{children:"Consultation Fee:"})," ",e.jsx("strong",{id:"sumFee",className:"fee-text",children:"₹0"})]}),e.jsxs("div",{className:"payment-row",children:[e.jsx("span",{children:"Payment:"}),e.jsx("strong",{children:"UPI / QR Code (next step)"})]}),e.jsxs("button",{className:"confirm-booking-btn",id:"confirmDoctorBookingBtn",children:[e.jsx("span",{className:"material-symbols-outlined",children:"call"})," Confirm Booking"]})]})]})]})]})]})]})]}),e.jsxs("section",{className:"quote-section",id:"resources",children:[e.jsx("div",{className:"blob-top-left"}),e.jsx("div",{className:"blob-bottom-right-teal"}),e.jsx("div",{className:"blob-bottom-right-amber"}),e.jsx("div",{className:"video-card",children:e.jsx("div",{className:"video-thumbnail",children:e.jsx("img",{src:"https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg",alt:"Doctor"})})}),e.jsxs("div",{className:"quote-content",children:[e.jsx("p",{className:"quote-text",children:'"We are absolutely committed to providing the best healthcare experience, and we have a team of dedicated doctors who are just as committed as we are."'}),e.jsx("p",{className:"quote-author-name",children:"Dr. Rajesh Sharma,"}),e.jsx("p",{className:"quote-author-role",children:"Chief Medical Officer, MediCare"})]})]}),e.jsx("section",{className:"promo-section",children:e.jsxs("div",{className:"promo-inner",children:[e.jsx("div",{className:"promo-image-placeholder",children:"Your event / team photo here"}),e.jsxs("div",{className:"promo-content",children:[e.jsx("h2",{className:"promo-title",children:"Transform healthcare with MediWell Health Care Center of Excellence"}),e.jsx("p",{className:"promo-desc",children:"Looking for the right doctors and expert guidance on your health journey? MediCare's Center of Excellence provides a clear, trusted path to better health outcomes for you and your family."}),e.jsx("a",{href:"#services",className:"promo-btn",children:"Learn more about our services"})]})]})}),e.jsxs("section",{className:"awards-section",children:[e.jsx("h2",{className:"awards-title",children:"Highly rated across the industry"}),e.jsx("p",{className:"awards-desc",children:"Our services have garnered many accolades, but we're most proud of improving the lives of patients and doctors. We continue to develop innovations that help make healthcare better for everyone."}),e.jsxs("a",{href:"#",className:"awards-link",children:["View Awards",e.jsx("span",{className:"arrow-circle",children:e.jsx("svg",{viewbox:"0 0 16 16",children:e.jsx("polyline",{points:"5,3 11,8 5,13"})})})]}),e.jsx("div",{className:"scroll-wrapper",children:e.jsxs("div",{className:"scroll-track",id:"scrollTrack",children:[e.jsx("div",{className:"badge-card",children:e.jsxs("div",{className:"badge badge-silver badge-circle",children:[e.jsx("span",{className:"badge-top",children:"Most Trusted"}),e.jsx("span",{className:"badge-main",children:"Medicare"}),e.jsx("span",{className:"badge-sub",children:"in India"}),e.jsx("span",{className:"badge-year",children:"2025"})]})}),e.jsx("div",{className:"badge-card",children:e.jsxs("div",{className:"badge badge-gold badge-circle",children:[e.jsx("span",{className:"badge-top",children:"Relevant · Accurate"}),e.jsxs("span",{className:"badge-main",children:["Best",e.jsx("br",{}),"Hospital"]}),e.jsx("span",{className:"badge-sub",children:"Unbiased source"}),e.jsx("span",{className:"badge-year",children:"2025"})]})}),e.jsx("div",{className:"badge-card",children:e.jsxs("div",{className:"badge badge-dark",children:[e.jsx("span",{className:"badge-top",children:"India's"}),e.jsxs("span",{className:"badge-main",children:["Best",e.jsx("br",{}),"Midsize",e.jsx("br",{}),"Clinic"]}),e.jsx("span",{className:"badge-sub",children:"Powered by HealthRank"}),e.jsx("span",{className:"badge-year",children:"2025"})]})}),e.jsx("div",{className:"badge-card",children:e.jsxs("div",{className:"badge badge-teal-circle badge-circle",children:[e.jsx("span",{className:"badge-top",children:"Certified"}),e.jsxs("span",{className:"badge-main",children:["ONC",e.jsx("br",{}),"Health"]}),e.jsx("span",{className:"badge-sub",children:"Certified Provider"})]})}),e.jsx("div",{className:"badge-card",children:e.jsxs("div",{className:"badge badge-shield",children:[e.jsx("span",{className:"badge-top",children:"Best Software"}),e.jsxs("span",{className:"badge-main",children:["Top",e.jsx("br",{}),"50"]}),e.jsx("span",{className:"badge-sub",children:"Healthcare"}),e.jsx("span",{className:"badge-year",children:"2025"})]})}),e.jsx("div",{className:"badge-card",children:e.jsxs("div",{className:"badge badge-gradient badge-circle",children:[e.jsx("span",{className:"badge-top",children:"Best in"}),e.jsxs("span",{className:"badge-main",children:["Patient",e.jsx("br",{}),"Care"]}),e.jsx("span",{className:"badge-sub",children:"Behavioral Health"}),e.jsx("span",{className:"badge-year",children:"2025"})]})}),e.jsx("div",{className:"badge-card",children:e.jsxs("div",{className:"badge badge-square",children:[e.jsx("span",{className:"badge-top",children:"Excellence in"}),e.jsxs("span",{className:"badge-main",children:["Digital",e.jsx("br",{}),"Health"]}),e.jsx("span",{className:"badge-sub",children:"HealthTech Awards"}),e.jsx("span",{className:"badge-year",children:"2024"})]})}),e.jsx("div",{className:"badge-card",children:e.jsxs("div",{className:"badge badge-gold badge-circle",children:[e.jsx("span",{className:"badge-top",children:"Top Rated"}),e.jsxs("span",{className:"badge-main",children:["Doctor",e.jsx("br",{}),"Portal"]}),e.jsx("span",{className:"badge-sub",children:"Unbiased Source"}),e.jsx("span",{className:"badge-year",children:"2024"})]})}),e.jsx("div",{className:"badge-card",children:e.jsxs("div",{className:"badge badge-light",children:[e.jsx("span",{className:"badge-top",children:"Awarded"}),e.jsxs("span",{className:"badge-main",children:["Best",e.jsx("br",{}),"UX"]}),e.jsx("span",{className:"badge-sub",children:"MedPortal Awards"}),e.jsx("span",{className:"badge-year",children:"2025"})]})}),e.jsx("div",{className:"badge-card",children:e.jsxs("div",{className:"badge badge-teal-circle badge-circle",children:[e.jsx("span",{className:"badge-top",children:"Drummond"}),e.jsxs("span",{className:"badge-main",children:["ISO",e.jsx("br",{}),"Cert"]}),e.jsx("span",{className:"badge-sub",children:"Health IT"}),e.jsx("span",{className:"badge-year",children:"2025"})]})})]})})]}),e.jsx("section",{className:"faq-section",id:"Faq",children:e.jsxs("div",{className:"faq-container",children:[e.jsxs("div",{className:"faq-header",children:[e.jsx("h2",{children:"Frequently Asked Questions"}),e.jsx("p",{children:"Everything you need to know about our hospital management system."}),e.jsx("div",{className:"header-line"})]}),e.jsxs("div",{className:"faq-accordion",children:[e.jsxs("div",{className:"faq-item",children:[e.jsxs("button",{className:"faq-question",onClick:Kn,children:[e.jsx("span",{children:"How do I book an appointment online?"}),e.jsx("span",{className:"faq-icon",children:"▼"})]}),e.jsx("div",{className:"faq-answer",children:e.jsx("p",{children:'To book an appointment, simply go to the "Appointments" section, select your preferred doctor and date, and click "Confirm Booking." You will receive a confirmation notification instantly.'})})]}),e.jsxs("div",{className:"faq-item",children:[e.jsxs("button",{className:"faq-question",onClick:Kn,children:[e.jsx("span",{children:"Can I access my medical records digitally?"}),e.jsx("span",{className:"faq-icon",children:"▼"})]}),e.jsx("div",{className:"faq-answer",children:e.jsx("p",{children:'Yes! Once you log in to your patient portal, navigate to "My Records." You can view and download your prescriptions, lab reports, and visit history securely.'})})]}),e.jsxs("div",{className:"faq-item",children:[e.jsxs("button",{className:"faq-question",onClick:Kn,children:[e.jsx("span",{children:"How do I cancel or reschedule an appointment?"}),e.jsx("span",{className:"faq-icon",children:"▼"})]}),e.jsx("div",{className:"faq-answer",children:e.jsx("p",{children:'Go to "My Appointments," select the appointment you wish to change, and click "Reschedule" or "Cancel." We request cancellations be made at least 24 hours in advance.'})})]}),e.jsxs("div",{className:"faq-item",children:[e.jsxs("button",{className:"faq-question",onClick:Kn,children:[e.jsx("span",{children:"Is my health data secure on this platform?"}),e.jsx("span",{className:"faq-icon",children:"▼"})]}),e.jsx("div",{className:"faq-answer",children:e.jsx("p",{children:"Absolutely. We use industry-standard encryption and strict access controls to ensure that your medical information is only accessible by you and your authorized healthcare providers."})})]}),e.jsxs("div",{className:"faq-item",children:[e.jsxs("button",{className:"faq-question",onClick:Kn,children:[e.jsx("span",{children:"Can I communicate with my doctor through the system?"}),e.jsx("span",{className:"faq-icon",children:"▼"})]}),e.jsx("div",{className:"faq-answer",children:e.jsx("p",{children:"Yes, the portal includes a secure messaging feature that allows you to send non-urgent queries to your assigned physician and receive updates on your treatment plan."})})]}),e.jsxs("div",{className:"faq-item",children:[e.jsxs("button",{className:"faq-question",onClick:Kn,children:[e.jsx("span",{children:"How does the billing system work?"}),e.jsx("span",{className:"faq-icon",children:"▼"})]}),e.jsx("div",{className:"faq-answer",children:e.jsx("p",{children:'You can view your detailed invoices under the "Billing" tab. Payments can be made online via credit card, insurance claims can be tracked, and digital receipts are issued immediately.'})})]}),e.jsxs("div",{className:"faq-item",children:[e.jsxs("button",{className:"faq-question",onClick:Kn,children:[e.jsx("span",{children:"What should I do if I forget my password?"}),e.jsx("span",{className:"faq-icon",children:"▼"})]}),e.jsx("div",{className:"faq-answer",children:e.jsx("p",{children:'On the login page, click "Forgot Password." Enter your registered email address, and we will send you a secure link to reset your password instantly.'})})]}),e.jsxs("div",{className:"faq-item",children:[e.jsxs("button",{className:"faq-question",onClick:Kn,children:[e.jsx("span",{children:"Can I manage multiple family members' accounts?"}),e.jsx("span",{className:"faq-icon",children:"▼"})]}),e.jsx("div",{className:"faq-answer",children:e.jsx("p",{children:'Yes, you can link family members (like children or elderly parents) to your primary account under "Family Management" to book appointments and track records for them.'})})]})]})]})}),e.jsxs("footer",{className:"footer",children:[e.jsxs("div",{className:"footer-top",children:[e.jsxs("div",{className:"footer-col footer-brand",children:[e.jsxs("div",{className:"logo",children:[e.jsx("span",{className:"mediwell footer-mediwell",children:"MediWell"}),e.jsx("span",{className:"healthcare footer-healthcare",children:"HEALTHCARE"})]}),e.jsx("p",{className:"footer-about",children:"MediWell Healthcare delivers secure, AI-powered solutions that connect patients, providers and payers — built for the demands of modern care."}),e.jsx("button",{id:"openFeedbackBtn",style:{background:"#16a085",color:"#fff",border:"none",padding:"10px 20px",borderRadius:"24px",fontSize:"13.5px",fontWeight:"600",cursor:"pointer",margin:"10px 0 16px"},children:"💬 Give Feedback"}),e.jsxs("div",{className:"footer-socials",children:[e.jsx("a",{href:"#","aria-label":"Facebook",children:e.jsx("span",{className:"material-symbols-outlined",children:"thumb_up"})}),e.jsx("a",{href:"#","aria-label":"Twitter / X",children:e.jsx("span",{className:"material-symbols-outlined",children:"alternate_email"})}),e.jsx("a",{href:"#","aria-label":"Instagram",children:e.jsx("span",{className:"material-symbols-outlined",children:"photo_camera"})}),e.jsx("a",{href:"#","aria-label":"LinkedIn",children:e.jsx("span",{className:"material-symbols-outlined",children:"business_center"})})]})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"Quick Links"}),e.jsx("a",{href:"#benefits",children:"Benefits"}),e.jsx("a",{href:"#solutions",children:"Solutions"}),e.jsx("a",{href:"#services",children:"Services"}),e.jsx("a",{href:"#doctors",children:"Doctors"}),e.jsx("a",{href:"#resources",children:"Resources"})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"Our Services"}),e.jsx("a",{href:"#services",children:"Full Body Checkup"}),e.jsx("a",{href:"#services",children:"Imaging & Radiology"}),e.jsx("a",{href:"#services",children:"Heart Related"}),e.jsx("a",{href:"#services",children:"Surgical Services"}),e.jsx("a",{href:"#services",children:"Eye Related"})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"Contact Us"}),e.jsxs("p",{className:"footer-contact-item",children:[e.jsx("span",{className:"material-symbols-outlined",children:"location_on"}),"Sector 4, Bokaro Steel City, Jharkhand 827004"]}),e.jsxs("p",{className:"footer-contact-item",children:[e.jsx("span",{className:"material-symbols-outlined",children:"call"}),"1800 11 1565"]}),e.jsxs("p",{className:"footer-contact-item",children:[e.jsx("span",{className:"material-symbols-outlined",children:"mail"}),"support@mediwellhealthcare.com"]})]})]}),e.jsxs("div",{className:"footer-bottom",children:[e.jsx("p",{children:"© 2026 MediWell Healthcare. All rights reserved."}),e.jsxs("div",{className:"footer-bottom-links",children:[e.jsx("a",{href:"#",children:"Privacy Policy"}),e.jsx("a",{href:"#",children:"Terms of Service"})]})]}),e.jsx("button",{className:"back-to-top",id:"backToTop","aria-label":"Back to top",children:e.jsx("span",{className:"material-symbols-outlined",children:"keyboard_arrow_up"})})]}),e.jsx("div",{id:"feedbackModal",style:{display:"none",position:"fixed",inset:"0",background:"rgba(0, 0, 0, 0.5)",zIndex:"3000",alignItems:"center",justifyContent:"center",padding:"16px"},children:e.jsxs("div",{style:{background:"#fff",borderRadius:"14px",padding:"26px 24px",width:"100%",maxWidth:"460px",maxHeight:"88vh",overflowY:"auto",position:"relative"},children:[e.jsx("button",{id:"feedbackCloseBtn","aria-label":"Close",style:{position:"absolute",top:"14px",right:"14px",width:"30px",height:"30px",border:"none",background:"#f1f5f5",color:"#444",borderRadius:"50%",fontSize:"18px",lineHeight:"1",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"}),e.jsx("h3",{style:{margin:"0 0 4px"},children:"Tell us what you think"}),e.jsx("p",{style:{fontSize:"13px",color:"#777",margin:"0 0 18px"},children:"10 quick questions, rate each 1 (poor) to 5 (excellent)."}),e.jsx("div",{id:"feedbackQuestions"}),e.jsxs("div",{style:{marginTop:"6px"},children:[e.jsx("label",{style:{fontSize:"13.5px",fontWeight:"600",display:"block",marginBottom:"6px"},children:"Anything else you'd like to share?"}),e.jsx("textarea",{id:"feedbackComments",rows:"4",maxLength:"700",placeholder:"Up to 100 words...",style:{width:"100%",boxSizing:"border-box",padding:"10px 12px",border:"1px solid #ddd",borderRadius:"8px",fontFamily:"inherit",fontSize:"13.5px",resize:"vertical"}}),e.jsx("div",{id:"feedbackWordCount",style:{fontSize:"12px",color:"#999",textAlign:"right",marginTop:"4px"},children:"0 / 100 words"})]}),e.jsx("div",{id:"feedbackError",style:{display:"none",color:"#d33",fontSize:"13px",marginTop:"10px"}}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"18px"},children:[e.jsx("button",{id:"feedbackCancelBtn",style:{flex:"1",padding:"11px",border:"1px solid #ddd",background:"#fff",borderRadius:"24px",fontWeight:"600",cursor:"pointer"},children:"Cancel"}),e.jsx("button",{id:"feedbackSubmitBtn",style:{flex:"1",padding:"11px",border:"none",background:"#16a085",color:"#fff",borderRadius:"24px",fontWeight:"600",cursor:"pointer"},children:"Submit"})]})]})}),e.jsx("div",{className:"overlay",id:"overlay"})]})})}const ph="MediWell Health Care — Doctor Dashboard",uh=`
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@500;600&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap");

      /* @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@500;600&display=swap"); */

      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      :root {
        --teal: #0f766e;
        --teal-lt: #ccfbf1;
        --teal-dk: #0d5c56;
        --rose: #e11d48;
        --slate-900: #0f172a;
        --slate-700: #334155;
        --slate-400: #94a3b8;
        --slate-200: #e2e8f0;
        --slate-50: #f8fafc;
        --white: #ffffff;
      }

      body {
        font-family: "Inter", sans-serif;
        background: linear-gradient(
          135deg,
          #eef9f8 0%,
          #f0f9ff 50%,
          #fff7ed 100%
        );
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      /* The registration/sign-in header belongs only to authentication views. */
      body.dashboard-active {
        display: block;
        background: #f4f6fa;
      }
      body.dashboard-active > #site-nav {
        display: none;
      }
      body.dashboard-active > main {
        display: none;
      }

      /* ── NAV ── */
      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 48px;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--slate-200);
        position: sticky;
        top: 0;
        z-index: 100;
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
      }
      .logo-icon {
        width: 36px;
        height: 36px;
        background: var(--teal);
        border-radius: 10px;
        display: grid;
        place-items: center;
      }
      .logo-icon svg {
        width: 20px;
        height: 20px;
        fill: white;
      }
      .logo-text {
        font-family: "Lora", serif;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--slate-900);
      }
      .nav-link {
        font-size: 0.875rem;
        color: var(--slate-700);
      }
      .nav-link a {
        color: var(--teal);
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
      }
      .nav-link a:hover {
        text-decoration: underline;
      }

      /* ── PAGE WRAPPER ── */
      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
      }

      .page-header {
        text-align: center;
        margin-bottom: 36px;
      }
      .page-header h1 {
        font-family: "Lora", serif;
        font-size: 2rem;
        font-weight: 600;
        color: var(--slate-900);
      }
      .page-header p {
        margin-top: 6px;
        font-size: 0.95rem;
        color: var(--slate-400);
      }

      /* ── STEPPER ── */
      .stepper {
        display: flex;
        align-items: center;
        gap: 0;
        margin-bottom: 40px;
      }
      .step {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--slate-400);
        cursor: default;
      }
      .step.active {
        color: var(--teal);
      }
      .step.complete {
        color: var(--teal);
      }

      .step-num {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 2px solid var(--slate-200);
        display: grid;
        place-items: center;
        font-weight: 600;
        font-size: 0.875rem;
        background: var(--white);
        transition: all 0.3s;
      }
      .step.active .step-num {
        border-color: var(--teal);
        color: var(--teal);
      }
      .step.complete .step-num {
        border-color: var(--teal);
        background: var(--teal);
        color: white;
      }

      .step-line {
        width: 80px;
        height: 2px;
        background: var(--slate-200);
        margin: 0 4px;
        transition: background 0.3s;
      }
      .step-line.done {
        background: var(--teal);
      }

      /* ── CARD ── */
      .card {
        background: white;
        border-radius: 20px;
        box-shadow:
          0 4px 24px rgba(15, 118, 110, 0.08),
          0 1px 4px rgba(0, 0, 0, 0.04);
        padding: 40px 48px;
        width: 100%;
        max-width: 780px;
      }

      /* ── FORM GRID ── */
      .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 22px 28px;
      }
      .col-span-2 {
        grid-column: span 2;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .field label {
        font-size: 0.8125rem;
        font-weight: 500;
        color: var(--slate-700);
      }
      .field label .req {
        color: var(--rose);
        margin-left: 2px;
      }

      .field input,
      .field select,
      .field textarea {
        width: 100%;
        padding: 10px 14px;
        border: 1.5px solid var(--slate-200);
        border-radius: 10px;
        font-size: 0.9rem;
        font-family: inherit;
        color: var(--slate-900);
        background: var(--slate-50);
        outline: none;
        transition:
          border-color 0.2s,
          box-shadow 0.2s;
        appearance: none;
      }
      .field input:focus,
      .field select:focus,
      .field textarea:focus {
        border-color: var(--teal);
        background: white;
        box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.12);
      }
      .field input.error,
      .field select.error {
        border-color: var(--rose);
      }
      .field .err-msg {
        font-size: 0.75rem;
        color: var(--rose);
        margin-top: 2px;
        display: none;
      }
      .field.has-error .err-msg {
        display: block;
      }
      .field.has-error input,
      .field.has-error select {
        border-color: var(--rose);
      }

      .field .input-wrap {
        position: relative;
      }
      .field .input-wrap input {
        padding-right: 40px;
      }
      .field .input-wrap .icon {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--slate-400);
        pointer-events: none;
      }

      select {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 12px center;
        padding-right: 36px;
      }

      /* ── SECTION LABEL ── */
      .section-label {
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--teal);
        border-bottom: 1px solid var(--slate-200);
        padding-bottom: 8px;
        margin-bottom: 20px;
      }

      /* ── RADIO & CHECKBOX ── */
      .radio-group,
      .check-group {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      .radio-option,
      .check-option {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.875rem;
        color: var(--slate-700);
        cursor: pointer;
      }
      .radio-option input[type="radio"],
      .check-option input[type="checkbox"] {
        display: none;
      }
      .radio-option .rb,
      .check-option .cb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid var(--slate-200);
        background: var(--slate-50);
        display: grid;
        place-items: center;
        flex-shrink: 0;
        transition: all 0.2s;
      }
      .check-option .cb {
        border-radius: 5px;
      }
      .radio-option input:checked ~ .rb {
        border-color: var(--teal);
      }
      .radio-option input:checked ~ .rb::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--teal);
      }
      .check-option input:checked ~ .cb {
        border-color: var(--teal);
        background: var(--teal);
      }
      .check-option input:checked ~ .cb::after {
        content: "";
        width: 10px;
        height: 7px;
        border-left: 2px solid white;
        border-bottom: 2px solid white;
        transform: rotate(-45deg) translateY(-1px);
      }

      /* ── STEP PANELS ── */
      .step-panel {
        display: none;
      }
      .step-panel.active {
        display: block;
      }

      /* ── PRICING CARD ── */
      .pricing-box {
        background: var(--slate-50);
        border: 1.5px solid var(--slate-200);
        border-radius: 14px;
        padding: 24px 28px;
        margin-bottom: 28px;
      }
      .pricing-box h3 {
        font-family: "Lora", serif;
        font-size: 1.1rem;
        color: var(--slate-900);
        margin-bottom: 4px;
      }
      .pricing-box .sub {
        font-size: 0.8rem;
        color: var(--slate-400);
        margin-bottom: 18px;
      }
      .pricing-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: var(--slate-700);
        padding: 10px 0;
        border-bottom: 1px dashed var(--slate-200);
      }
      .pricing-row.total {
        border-bottom: none;
        font-weight: 700;
        font-size: 1rem;
        color: var(--slate-900);
        padding-top: 14px;
      }
      .pricing-row.total .price-val {
        color: var(--teal);
      }

      /* ── SUBSCRIPTION ── */
      .subscribe-wrap {
        margin-bottom: 28px;
      }
      .subscribe-wrap p {
        font-size: 0.875rem;
        color: var(--slate-700);
        margin-bottom: 10px;
        font-weight: 500;
      }
      .subscribe-wrap .note {
        font-size: 0.75rem;
        color: var(--slate-400);
        margin-top: 8px;
        line-height: 1.5;
      }

      /* ── ACTIONS ── */
      .actions {
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-top: 32px;
      }
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 32px;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        font-family: inherit;
        cursor: pointer;
        border: none;
        transition: all 0.2s;
        text-decoration: none;
      }
      .btn-primary {
        background: var(--teal);
        color: white;
      }
      .btn-primary:hover {
        background: var(--teal-dk);
        transform: translateY(-1px);
        box-shadow: 0 4px 14px rgba(15, 118, 110, 0.35);
      }
      .btn-outline {
        background: transparent;
        color: var(--teal);
        border: 1.5px solid var(--teal);
      }
      .btn-outline:hover {
        background: var(--teal-lt);
      }

      /* ── SUCCESS ── */
      #step-success {
        text-align: center;
        padding: 20px 0;
      }
      .success-icon {
        width: 72px;
        height: 72px;
        background: var(--teal-lt);
        border-radius: 50%;
        display: grid;
        place-items: center;
        margin: 0 auto 20px;
      }
      .success-icon svg {
        width: 36px;
        height: 36px;
        stroke: var(--teal);
      }
      #step-success h2 {
        font-family: "Lora", serif;
        font-size: 1.6rem;
        color: var(--slate-900);
        margin-bottom: 8px;
      }
      #step-success p {
        font-size: 0.9rem;
        color: var(--slate-400);
      }

      /* ── PAGE VIEWS ── */
      .page-view {
        display: none;
        flex-direction: column;
        align-items: center;
        padding: 40px 16px 60px;
        flex: 1;
      }
      .page-view.active {
        display: flex;
      }

      /* ── SIGN IN CARD ── */
      .signin-card {
        background: white;
        border-radius: 20px;
        box-shadow:
          0 4px 24px rgba(15, 118, 110, 0.08),
          0 1px 4px rgba(0, 0, 0, 0.04);
        padding: 44px 48px;
        width: 100%;
        max-width: 460px;
      }
      .signin-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 28px;
      }
      .signin-logo .logo-icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
      }
      .signin-logo .logo-icon svg {
        width: 24px;
        height: 24px;
      }
      .signin-logo span {
        font-family: "Lora", serif;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--slate-900);
      }

      .signin-title {
        text-align: center;
        margin-bottom: 30px;
      }
      .signin-title h2 {
        font-family: "Lora", serif;
        font-size: 1.6rem;
        color: var(--slate-900);
        margin-bottom: 6px;
      }
      .signin-title p {
        font-size: 0.875rem;
        color: var(--slate-400);
      }

      .signin-fields {
        display: flex;
        flex-direction: column;
        gap: 18px;
        margin-bottom: 10px;
      }

      .pw-wrap {
        position: relative;
      }
      .pw-wrap input {
        padding-right: 44px;
      }
      .pw-toggle {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        color: var(--slate-400);
        padding: 0;
        display: grid;
        place-items: center;
      }
      .pw-toggle:hover {
        color: var(--teal);
      }

      .forgot-row {
        text-align: right;
        margin-bottom: 22px;
      }
      .forgot-row a {
        font-size: 0.8125rem;
        color: var(--teal);
        text-decoration: none;
        font-weight: 500;
      }
      .forgot-row a:hover {
        text-decoration: underline;
      }

      .btn-full {
        width: 100%;
        justify-content: center;
        padding: 13px 20px;
        font-size: 0.95rem;
      }

      .divider {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 22px 0;
        color: var(--slate-400);
        font-size: 0.8rem;
      }
      .divider::before,
      .divider::after {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--slate-200);
      }

      .social-btns {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .btn-social {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 11px 20px;
        border-radius: 10px;
        font-size: 0.875rem;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        border: 1.5px solid var(--slate-200);
        background: white;
        color: var(--slate-700);
        transition: all 0.2s;
      }
      .btn-social:hover {
        border-color: var(--teal);
        background: var(--teal-lt);
        color: var(--teal);
      }
      .btn-social svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }

      .register-prompt {
        text-align: center;
        margin-top: 24px;
        font-size: 0.875rem;
        color: var(--slate-400);
      }
      .register-prompt a {
        color: var(--teal);
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
      }
      .register-prompt a:hover {
        text-decoration: underline;
      }

      /* forgot password modal */
      .modal-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.4);
        backdrop-filter: blur(4px);
        z-index: 200;
        place-items: center;
      }
      .modal-overlay.open {
        display: grid;
      }
      .modal {
        background: white;
        border-radius: 18px;
        padding: 36px 40px;
        width: 100%;
        max-width: 420px;
        margin: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        animation: popIn 0.25s ease;
      }
      @keyframes popIn {
        from {
          transform: scale(0.92);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
      .modal h3 {
        font-family: "Lora", serif;
        font-size: 1.25rem;
        color: var(--slate-900);
        margin-bottom: 6px;
      }
      .modal p {
        font-size: 0.875rem;
        color: var(--slate-400);
        margin-bottom: 22px;
      }
      .modal-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
      }
      .modal-actions .btn {
        flex: 1;
        justify-content: center;
      }

      /* sign-in success */
      .signin-success {
        text-align: center;
        padding: 16px 0;
      }
      .signin-success .success-icon {
        margin: 0 auto 20px;
      }
      .signin-success h2 {
        font-family: "Lora", serif;
        font-size: 1.5rem;
        color: var(--slate-900);
        margin-bottom: 8px;
      }
      .signin-success p {
        font-size: 0.875rem;
        color: var(--slate-400);
      }

      /* ============================================
   DOCTOR DASHBOARD — City General Hospital theme
   ============================================ */
      #view-dashboard {
        display: none;
        --db-blue: #005f78;
        --db-blue-dk: #00475a;
        --db-blue-lt: #e1f2f5;
        --db-ink: #1f2937;
        --db-muted: #6b7280;
        --db-line: #e5e7eb;
        --db-bg: #f4f6fa;
        background: var(--db-bg);
        color: var(--db-ink);
        font-family: "Inter", sans-serif;
      }
      #view-dashboard.active {
        display: block;
      }
      #view-dashboard * {
        box-sizing: border-box;
      }

      #view-dashboard .db-shell {
        display: grid;
        grid-template-columns: 284px minmax(0, 1fr);
        min-height: 100vh;
      }

      /* Prevent the public-site navigation styles from leaking into the
         dashboard sidebar. This restores the vertical menu in the reference. */
      #view-dashboard nav.db-nav {
        display: block;
        padding: 0;
        background: transparent;
        border: 0;
        position: static;
        backdrop-filter: none;
      }

      /* Sidebar */
      #view-dashboard .db-sidebar {
        background: #fff;
        border-right: 1px solid var(--db-line);
        padding: 22px 12px;
        position: sticky;
        top: 0;
        height: 100vh;
        overflow-y: auto;
      }
      #view-dashboard .db-brand {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 8px 28px;
      }
      #view-dashboard .db-brand-mark {
        width: 42px;
        height: 42px;
        border-radius: 12px;
        background: var(--db-blue);
        display: grid;
        place-items: center;
        font-size: 20px;
        color: white;
        flex-shrink: 0;
      }
      #view-dashboard .db-brand span {
        font-weight: 800;
        font-size: 18px;
        line-height: 1.15;
        color: var(--db-ink);
      }
      #view-dashboard .db-nav a {
        display: flex;
        align-items: center;
        gap: 13px;
        color: var(--db-muted);
        text-decoration: none;
        padding: 11px 14px;
        border-radius: 10px;
        margin: 2px 0;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
      }
      #view-dashboard .db-nav a:hover {
        background: var(--db-blue-lt);
        color: var(--db-blue);
      }
      #view-dashboard .db-nav a.active {
        background: var(--db-blue-lt);
        color: var(--db-blue);
        font-weight: 700;
      }
      #view-dashboard .db-nav .db-icon {
        width: 20px;
        text-align: center;
        font-size: 16px;
      }

      /* Header */
      #view-dashboard .db-header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;
        padding: 18px 32px;
        background: #fff;
        border-bottom: 1px solid var(--db-line);
      }
      #view-dashboard .db-bell {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--db-bg);
        display: grid;
        place-items: center;
        cursor: pointer;
        font-size: 17px;
      }
      #view-dashboard .db-bell:after {
        content: "";
        width: 8px;
        height: 8px;
        background: #ef4444;
        border: 2px solid white;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        right: 5px;
      }
      #view-dashboard .db-profile {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }
      #view-dashboard .db-profile img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        object-fit: cover;
      }
      #view-dashboard .db-profile span {
        font-weight: 700;
        font-size: 15px;
      }

      #view-dashboard .db-main {
        padding: 34px 32px 60px;
      }
      #view-dashboard .db-page-title {
        font-size: 28px;
        font-weight: 800;
        margin-bottom: 22px;
      }

      #view-dashboard .db-layout {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 22px;
        align-items: start;
      }

      /* Stat cards */
      #view-dashboard .db-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 22px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      }
      #view-dashboard .db-stat {
        padding: 22px 26px;
      }
      #view-dashboard .db-stat h4 {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 8px;
      }
      #view-dashboard .db-stat .db-num {
        font-size: 34px;
        font-weight: 800;
      }
      #view-dashboard .db-stat.filled {
        background: var(--db-blue);
        color: white;
      }
      #view-dashboard .db-stat.tint {
        background: var(--db-blue-lt);
        color: var(--db-ink);
      }
      #view-dashboard .db-stat.plain {
        background: #fff;
        color: var(--db-ink);
      }

      /* Panels */
      #view-dashboard .db-panel {
        background: #fff;
        border: 1px solid var(--db-line);
        border-radius: 16px;
        padding: 24px;
        margin-bottom: 22px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
      }
      #view-dashboard .db-panel h3 {
        font-size: 19px;
        font-weight: 800;
        margin-bottom: 16px;
      }

      /* Appointment management */
      #view-dashboard .db-appt-toolbar {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 18px;
      }
      #view-dashboard .db-month-nav {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 700;
      }
      #view-dashboard .db-month-nav button {
        border: 1px solid var(--db-line);
        background: #fff;
        width: 30px;
        height: 30px;
        border-radius: 8px;
        cursor: pointer;
      }
      #view-dashboard .db-appt-toolbar .db-spacer {
        flex: 1;
      }
      #view-dashboard .db-btn-sm {
        border: none;
        border-radius: 8px;
        padding: 9px 16px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
      }
      #view-dashboard .db-accept-btn {
        background: #16a34a;
        color: white;
      }
      #view-dashboard .db-reject-btn {
        background: #fff;
        color: #dc2626;
        border: 1.5px solid #dc2626 !important;
      }
      #view-dashboard .db-reschedule-btn {
        background: #fff;
        color: var(--db-blue);
        border: 1.5px solid var(--db-blue) !important;
      }
      #view-dashboard .db-availability-btn {
        background: var(--db-blue);
        color: white;
      }

      #view-dashboard .db-calendar {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
      }
      #view-dashboard .db-calendar th {
        text-align: center;
        padding: 10px 6px;
        color: var(--db-muted);
        font-weight: 700;
        border-bottom: 1px solid var(--db-line);
      }
      #view-dashboard .db-calendar td {
        border: 1px solid var(--db-line);
        height: 52px;
        vertical-align: top;
        padding: 4px;
        position: relative;
        width: 19%;
      }
      #view-dashboard .db-calendar td.db-time-col {
        border: none;
        text-align: right;
        padding-right: 10px;
        color: var(--db-muted);
        width: 60px;
        font-size: 12px;
      }
      #view-dashboard .db-calendar td.db-highlight-col {
        background: var(--db-blue-lt);
      }
      #view-dashboard .db-slot {
        background: var(--db-blue);
        color: white;
        border-radius: 6px;
        padding: 4px 6px;
        font-size: 11px;
        font-weight: 600;
        line-height: 1.3;
      }
      #view-dashboard .db-slot small {
        display: block;
        font-weight: 400;
        opacity: 0.85;
      }

      /* Patient history timeline */
      #view-dashboard .db-timeline-row {
        display: grid;
        grid-template-columns: 120px 1fr;
        align-items: center;
        gap: 14px;
        margin-bottom: 22px;
      }
      #view-dashboard .db-timeline-row label {
        font-weight: 700;
        font-size: 14px;
      }
      #view-dashboard .db-track {
        position: relative;
        height: 4px;
        background: var(--db-line);
        border-radius: 2px;
      }
      #view-dashboard .db-track .db-fill {
        position: absolute;
        top: 0;
        height: 4px;
        background: var(--db-blue);
        border-radius: 2px;
      }
      #view-dashboard .db-dot {
        position: absolute;
        top: 50%;
        width: 14px;
        height: 14px;
        background: var(--db-blue);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        border: 3px solid white;
        box-shadow: 0 0 0 1.5px var(--db-blue);
      }

      /* Right column: tabs */
      #view-dashboard .db-tabs {
        display: flex;
        gap: 20px;
        border-bottom: 1px solid var(--db-line);
        margin-bottom: 18px;
        overflow-x: auto;
      }
      #view-dashboard .db-tab {
        padding: 6px 2px 12px;
        font-size: 14px;
        font-weight: 600;
        color: var(--db-muted);
        cursor: pointer;
        border-bottom: 2px solid transparent;
        white-space: nowrap;
      }
      #view-dashboard .db-tab.active {
        color: var(--db-blue);
        border-color: var(--db-blue);
      }
      #view-dashboard .db-patient-select {
        display: flex;
        align-items: center;
        gap: 10px;
        border: 1px solid var(--db-line);
        border-radius: 10px;
        padding: 10px 14px;
        font-size: 14px;
        color: var(--db-muted);
        cursor: pointer;
        margin-bottom: 8px;
      }
      #view-dashboard .db-patient-select .db-avatar-sm {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: var(--db-blue-lt);
        display: grid;
        place-items: center;
        font-size: 14px;
      }
      #view-dashboard .db-tab-content {
        font-size: 13px;
        color: var(--db-muted);
        padding: 6px 0 4px;
        min-height: 20px;
      }

      /* Digital prescription */
      #view-dashboard .db-rx-row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 12px;
        margin-bottom: 16px;
      }
      #view-dashboard .db-rx-row select,
      #view-dashboard .db-rx-row input {
        border: 1px solid var(--db-line);
        border-radius: 10px;
        padding: 11px 14px;
        font-size: 13px;
        font-family: inherit;
        width: 100%;
      }
      #view-dashboard .db-rx-actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
      }
      #view-dashboard .db-btn-outline {
        background: #fff;
        border: 1.5px solid var(--db-line);
        border-radius: 9px;
        padding: 10px 18px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        color: var(--db-ink);
      }
      #view-dashboard .db-btn-filled {
        background: var(--db-blue);
        color: white;
        border: none;
        border-radius: 9px;
        padding: 10px 20px;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
      }

      /* Lab reports */
      #view-dashboard .db-lab-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 0;
        border-top: 1px solid var(--db-line);
        flex-wrap: wrap;
      }
      #view-dashboard .db-lab-row:first-of-type {
        border-top: none;
        padding-top: 4px;
      }
      #view-dashboard .db-lab-row span.db-lab-name {
        flex: 1;
        font-size: 14px;
        font-weight: 600;
        min-width: 140px;
      }
      #view-dashboard .db-lab-row button {
        border: 1px solid var(--db-line);
        background: #fff;
        border-radius: 8px;
        padding: 7px 12px;
        font-size: 12px;
        cursor: pointer;
      }

      /* Chat / video CTA buttons */
      #view-dashboard .db-cta-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
        margin-bottom: 22px;
      }
      #view-dashboard .db-cta {
        background: var(--db-blue);
        color: white;
        border: none;
        border-radius: 12px;
        padding: 16px 18px;
        font-size: 15px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
      }
      #view-dashboard .db-cta:hover {
        background: var(--db-blue-dk);
      }

      /* Analytics chart */
      #view-dashboard .db-chart-legend {
        display: flex;
        gap: 18px;
        font-size: 12px;
        color: var(--db-muted);
        margin-bottom: 10px;
      }
      #view-dashboard .db-chart-legend span {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      #view-dashboard .db-legend-dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        display: inline-block;
      }
      #view-dashboard .db-chart-svg {
        width: 100%;
        height: auto;
      }

      /* Floating secure messaging widget */
      #view-dashboard .db-chat-widget {
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 340px;
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);
        overflow: hidden;
        z-index: 1300;
        display: none;
        flex-direction: column;
      }
      #view-dashboard .db-chat-widget.open {
        display: flex;
      }
      #view-dashboard .db-chat-widget.minimized .db-chat-body {
        display: none;
      }
      #view-dashboard .db-chat-head {
        background: var(--db-blue);
        color: white;
        padding: 14px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
      }
      #view-dashboard .db-chat-head-actions {
        display: flex;
        gap: 10px;
      }
      #view-dashboard .db-chat-head-actions button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 15px;
      }
      #view-dashboard .db-chat-body {
        display: flex;
        flex-direction: column;
        max-height: 400px;
      }
      #view-dashboard .db-chat-msgs {
        flex: 1;
        overflow-y: auto;
        padding: 14px 16px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 280px;
      }
      #view-dashboard .db-msg {
        max-width: 75%;
        padding: 9px 13px;
        border-radius: 12px;
        font-size: 13px;
        line-height: 1.4;
      }
      #view-dashboard .db-msg.received {
        background: var(--db-bg);
        align-self: flex-start;
      }
      #view-dashboard .db-msg.sent {
        background: var(--db-blue);
        color: white;
        align-self: flex-end;
      }
      #view-dashboard .db-chat-input-row {
        display: flex;
        align-items: center;
        gap: 8px;
        border-top: 1px solid var(--db-line);
        padding: 10px 12px;
      }
      #view-dashboard .db-chat-input-row input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 13px;
        padding: 8px;
      }
      #view-dashboard .db-chat-input-row button {
        background: var(--db-blue);
        color: white;
        border: none;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
      }

      @media (max-width: 1100px) {
        #view-dashboard .db-layout {
          grid-template-columns: 1fr;
        }
      }
      @media (max-width: 800px) {
        #view-dashboard .db-shell {
          display: block;
        }
        #view-dashboard .db-sidebar {
          position: relative;
          height: auto;
        }
        #view-dashboard .db-stats,
        #view-dashboard .db-rx-row,
        #view-dashboard .db-cta-row {
          grid-template-columns: 1fr;
        }
        #view-dashboard .db-chat-widget {
          width: 90vw;
          right: 5vw;
        }
      }
      @media (max-width: 640px) {
        nav {
          padding: 14px 20px;
        }
        .card {
          padding: 28px 20px;
        }
        .form-grid {
          grid-template-columns: 1fr;
        }
        .col-span-2 {
          grid-column: span 1;
        }
        .step-line {
          width: 40px;
        }
        .step-label {
          display: none;
        }
      }
      .otp-modal-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        align-items: center;
        justify-content: center;
        padding: 16px;
      }
      .otp-modal-overlay.open {
        display: flex;
      }
      .otp-modal-box {
        background: #fff;
        border-radius: 14px;
        padding: 28px 24px;
        width: 100%;
        max-width: 360px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
      }
      .otp-modal-box h3 {
        margin: 0 0 8px;
        font-size: 19px;
      }
      .otp-modal-hint {
        font-size: 13px;
        color: #666;
        line-height: 1.5;
        margin: 0 0 16px;
      }
      .otp-modal-hint b {
        color: #222;
      }
      .otp-modal-input {
        width: 100%;
        box-sizing: border-box;
        padding: 12px 14px;
        font-size: 20px;
        letter-spacing: 6px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 8px;
        margin-bottom: 10px;
      }
      .otp-modal-error {
        color: #d33;
        font-size: 13px;
        margin-bottom: 10px;
      }
      .otp-modal-submit {
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 8px;
        background: #16a085;
        color: #fff;
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        margin-bottom: 8px;
      }
      .otp-modal-submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .otp-modal-cancel {
        width: 100%;
        padding: 10px;
        border: none;
        background: none;
        color: #888;
        font-size: 14px;
        cursor: pointer;
      }
      @media (max-width: 480px) {
        .otp-modal-box {
          padding: 22px 18px;
        }
      }
      /* ── Standalone dashboard page nav (doctor.html) ── */
      #db-page-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 32px;
        background: rgba(255, 255, 255, 0.96);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--db-line, #e5e7eb);
        position: sticky;
        top: 0;
        z-index: 500;
      }
      #db-page-nav .db-page-logo {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: var(--db-blue, #005f78);
        font-weight: 700;
        font-size: 1.05rem;
      }
      #db-page-nav .db-page-links {
        display: flex;
        align-items: center;
        gap: 18px;
        font-size: 14px;
        font-weight: 600;
      }
      #db-page-nav .db-page-links a,
      #db-page-nav .db-page-links button {
        color: var(--db-blue-dk, #00475a);
        text-decoration: none;
        background: none;
        border: none;
        font: inherit;
        cursor: pointer;
      }
      #db-page-nav .db-page-links button {
        color: #e11d48;
      }
    `,mh=["/legacy/api.js",`
  let doctorSession=null;
  let doctorProfile=null;
  let dashboardAppointments=[];
  const toast=(message)=>{
    const el=document.getElementById('dashToast');
    if(!el){ alert(message); return; }
    el.textContent=message; el.classList.add('show');
    clearTimeout(window.__dashToastTimer); window.__dashToastTimer=setTimeout(()=>el.classList.remove('show'),2600);
  };
  async function logoutDoctor(){
    if(!confirm('Are you sure you want to log out?')) return;
    try{await logout();}finally{window.location.href='/login';}
  }
  function initials(name){
    return String(name||'Doctor').split(/\\s+/).filter(Boolean).slice(0,2).map(x=>x[0].toUpperCase()).join('') || 'DR';
  }
  function renderDoctorPhoto(){
    const img=document.getElementById('dbProfileImg');
    const initialsEl=document.getElementById('dbProfileInitials');
    if(!img || !doctorProfile) return;
    if(doctorProfile.profile_photo){
      img.src=doctorProfile.profile_photo; img.style.display='block';
      if(initialsEl) initialsEl.style.display='none';
    }else{
      img.removeAttribute('src'); img.style.display='none';
      if(initialsEl){initialsEl.textContent=initials(doctorSession?.fullName); initialsEl.style.display='grid';}
    }
  }
  async function loadDoctor(){
    try{
      const sessionResult=await getCurrentUser();
      if(sessionResult.data.role!=='DOCTOR'){window.location.href='/login';return;}
      doctorSession=sessionResult.data;
      const result=await apiRequest('/doctors?id='+doctorSession.linkedId,'GET');
      doctorProfile=result.data;
      document.getElementById('dbProfileName').textContent='Dr. '+(doctorProfile.first_name||doctorSession.fullName)+' ▾';
      document.querySelector('.db-page-title').textContent='Welcome, Dr. '+(doctorProfile.first_name||doctorSession.fullName)+' — '+(doctorProfile.department||'General Medicine');
      renderDoctorPhoto();
      await loadAppointments();
    }catch(err){console.error(err);window.location.href='/login';}
  }
  async function loadAppointments(){
    try{
      const result=await listAppointments(); dashboardAppointments=result.data||[]; window._doctorAllAppointments=dashboardAppointments;
      const today=new Date().toISOString().slice(0,10);
      document.getElementById('dbStatToday').textContent=dashboardAppointments.filter(a=>a.appointment_date===today).length;
      document.getElementById('dbStatUpcoming').textContent=dashboardAppointments.filter(a=>a.status!=='Cancelled').length;
      const list=document.getElementById('dbAppointmentsList');
      list.innerHTML=dashboardAppointments.length?dashboardAppointments.map(a=>'<div class="db-slot" style="margin-bottom:8px;"><b>'+escapeHtml(a.patient_name)+'</b> — '+escapeHtml(a.appointment_date)+' · '+escapeHtml(a.slot_time||'Time TBD')+'<small style="display:block;">'+escapeHtml(a.visit_type||'Visit')+' · '+escapeHtml(a.status||'Scheduled')+(a.reason?' · '+escapeHtml(a.reason):'')+'</small></div>').join(''):'<p>No appointments booked with you yet.</p>';
      const byPatient={}; dashboardAppointments.forEach(a=>{if(!byPatient[a.patient_id]||a.appointment_date>byPatient[a.patient_id].appointment_date)byPatient[a.patient_id]=a;});
      const patients=Object.values(byPatient).sort((a,b)=>String(b.appointment_date).localeCompare(String(a.appointment_date)));
      document.getElementById('dbPatientsList').innerHTML=patients.length?patients.map(a=>'<div class="db-slot" style="margin-bottom:8px;"><b>'+escapeHtml(a.patient_name)+'</b><small style="display:block;">Last visit: '+escapeHtml(a.appointment_date)+' · '+escapeHtml(a.status)+'</small></div>').join(''):'<p>No patients attended yet.</p>';
      const select=document.getElementById('dbPatientSelect');
      select.innerHTML='<option value="">Select a patient…</option>'+patients.map(a=>'<option value="'+a.patient_id+'">'+escapeHtml(a.patient_name)+'</option>').join('');
    }catch(err){console.error(err);document.getElementById('dbAppointmentsList').innerHTML='<p>Could not load appointments.</p>';}
  }
  function escapeHtml(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  async function updateFirstAppointment(status){
    const appt=dashboardAppointments.find(a=>a.status!=='Cancelled' && a.status!=='Completed');
    if(!appt){toast('No active appointment is available.');return;}
    try{await apiRequest('/appointments?id='+appt.appointment_id,'PUT',{status});toast('Appointment '+status.toLowerCase()+'.');await loadAppointments();}
    catch(err){toast(err.message);}
  }
  function scrollToSection(id){
    const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
  }
  async function savePhoto(file){
    if(!file) return;
    if(!file.type.startsWith('image/')){alert('Please choose an image file.');return;}
    if(file.size>2*1024*1024){alert('Please choose an image smaller than 2 MB.');return;}
    const reader=new FileReader();
    reader.onload=async()=>{
      try{
        const result=await updateDoctorProfile({profile_photo:reader.result});
        doctorProfile=result.data; renderDoctorPhoto(); toast('Profile photo updated.');
      }catch(err){alert('Could not update photo: '+err.message);}
    };
    reader.readAsDataURL(file);
  }
  async function editProfile(){
    const name=prompt('Doctor name:',doctorProfile?.first_name||'');
    if(name===null) return;
    try{
      const result=await updateDoctorProfile({first_name:name.trim()||doctorProfile.first_name});
      doctorProfile=result.data;
      document.getElementById('dbProfileName').textContent='Dr. '+doctorProfile.first_name+' ▾';
      document.querySelector('.db-page-title').textContent='Welcome, Dr. '+doctorProfile.first_name+' — '+(doctorProfile.department||'General Medicine');
      renderDoctorPhoto(); toast('Profile updated.');
    }catch(err){alert(err.message);}
  }
  function renderRecordTab(){
    const patientId=document.getElementById('dbPatientSelect').value, content=document.getElementById('dbRecordContent');
    const active=document.querySelector('#dbRecordTabs .db-tab.active')?.dataset.tab||'visits';
    if(!patientId){content.textContent='Select a patient to view their records.';return;}
    const record=window._doctorPatientRecords?.[patientId];
    if(!record){content.textContent='Loading…';return;}
    if(active==='visits') content.innerHTML=record.visits.length?record.visits.map(v=>'<div>'+escapeHtml(v.appointment_date)+' · '+escapeHtml(v.status)+(v.reason?' · '+escapeHtml(v.reason):'')+'</div>').join(''):'No previous visits on file for this patient.';
    else if(active==='medications') content.innerHTML=record.prescriptions.length?record.prescriptions.map(p=>'<div>'+escapeHtml(p.medication_name)+(p.dosage?' · '+escapeHtml(p.dosage):'')+(p.instructions?' · '+escapeHtml(p.instructions):'')+'</div>').join(''):'No medications prescribed for this patient yet.';
    else if(active==='diseases') content.textContent=record.medicalHistory||'No medical history on file for this patient.';
    else content.textContent='No records available for this patient yet.';
  }
  async function loadPatientRecord(id){
    if(!id){renderRecordTab();return;}
    document.getElementById('dbRecordContent').textContent='Loading…';
    window._doctorPatientRecords=window._doctorPatientRecords||{};
    try{
      const [p,rx]=await Promise.all([apiRequest('/patients?id='+id,'GET'),listPrescriptions(id)]);
      window._doctorPatientRecords[id]={medicalHistory:p.data.medical_history,visits:dashboardAppointments.filter(a=>String(a.patient_id)===String(id)),prescriptions:rx.data||[]};
    }catch(err){window._doctorPatientRecords[id]={medicalHistory:null,visits:[],prescriptions:[]};}
    renderRecordTab();
  }
  document.addEventListener('DOMContentLoaded',()=>{});
  setTimeout(()=>{
    document.getElementById('dbPageLogoutBtn')?.addEventListener('click',logoutDoctor);
    document.getElementById('dbLogoutBtn')?.addEventListener('click',logoutDoctor);
    document.getElementById('dbBell')?.addEventListener('click',()=>toast('You have 2 notifications.'));
    document.getElementById('dbEditPhotoBtn')?.addEventListener('click',()=>document.getElementById('dbPhotoInput')?.click());
    document.getElementById('dbEditProfileBtn')?.addEventListener('click',editProfile);
    document.getElementById('dbPhotoInput')?.addEventListener('change',e=>savePhoto(e.target.files?.[0]));
    document.querySelectorAll('#view-dashboard [data-section]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();document.querySelectorAll('#view-dashboard .db-nav a').forEach(a=>a.classList.remove('active'));link.classList.add('active');scrollToSection(link.dataset.section);}));
    document.querySelectorAll('#view-dashboard [data-toast]').forEach(btn=>btn.addEventListener('click',()=>toast(btn.dataset.toast)));
    document.querySelector('.db-accept-btn')?.addEventListener('click',()=>updateFirstAppointment('Confirmed'));
    document.querySelector('.db-reject-btn')?.addEventListener('click',()=>updateFirstAppointment('Cancelled'));
    document.querySelector('.db-reschedule-btn')?.addEventListener('click',()=>toast('Open the appointment booking page to choose a new date/time.'));
    document.querySelector('.db-availability-btn')?.addEventListener('click',()=>toast('Availability settings saved for your dashboard session.'));
    document.getElementById('dbPrevMonth')?.addEventListener('click',()=>{const x=document.getElementById('dbMonthLabel');x.textContent='Previous Month';});
    document.getElementById('dbNextMonth')?.addEventListener('click',()=>{const x=document.getElementById('dbMonthLabel');x.textContent='Next Month';});
    document.querySelectorAll('#dbRecordTabs .db-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('#dbRecordTabs .db-tab').forEach(t=>t.classList.remove('active'));tab.classList.add('active');renderRecordTab();}));
    document.getElementById('dbPatientSelect')?.addEventListener('change',e=>loadPatientRecord(e.target.value));
    document.getElementById('dbPrintBtn')?.addEventListener('click',()=>window.print());
    document.getElementById('dbSendRxBtn')?.addEventListener('click',async()=>{
      const patientId=document.getElementById('dbPatientSelect').value, medicationName=document.getElementById('dbRxMedicine').value, dosage=document.getElementById('dbRxDosage').value.trim(), duration=document.getElementById('dbRxDuration').value.trim();
      if(!patientId){alert('Select a patient first.');return;} if(!medicationName){alert('Select a medicine first.');return;}
      try{await addPrescription({patientId,medicationName,dosage:dosage||null,instructions:duration?'Duration: '+duration:null});toast('Prescription sent digitally.');delete window._doctorPatientRecords[patientId];await loadPatientRecord(patientId);}catch(err){alert('Could not send prescription: '+err.message);}
    });
    document.getElementById('dbChatCta')?.addEventListener('click',()=>{const msg=prompt('Message to patient:');if(msg)toast('Message queued: '+msg);});
    document.getElementById('dbVideoCta')?.addEventListener('click',()=>toast('Video consultation opened for the next available appointment.'));
    document.querySelectorAll('#view-dashboard .db-lab-row button').forEach(btn=>btn.addEventListener('click',()=>{const action=btn.textContent.trim();if(action==='View')alert('Lab report preview opened.');else if(action.includes('Comments')){const c=prompt('Add comment:');if(c)toast('Comment saved.');}else toast('Additional test recommendation saved.');}));
    loadDoctor();
  },0);
`];function fc(){return R.useEffect(()=>{document.title=ph;{const m=document.createElement("style");m.setAttribute("data-mediwell-page-style","true"),m.textContent=uh,document.head.appendChild(m)}const d=document.createElement("style");d.setAttribute("data-mediwell-page-style","true"),d.textContent=`
      #view-dashboard .db-shell{grid-template-columns:250px minmax(0,1fr);width:100%;min-height:calc(100vh - 58px);}
      #view-dashboard .db-shell > div{min-width:0;}
      #view-dashboard .db-main{max-width:none;width:100%;}
      #view-dashboard .db-header{justify-content:flex-end;position:sticky;top:58px;z-index:100;}
      #view-dashboard .db-profile{position:relative;}
      #view-dashboard .db-avatar-wrap{width:46px;height:46px;border-radius:50%;overflow:hidden;background:#e5f6f3;border:2px solid #9ad8d1;display:grid;place-items:center;color:#00667a;font-weight:800;}
      #view-dashboard .db-avatar-wrap img{width:100%;height:100%;object-fit:cover;}
      #view-dashboard #dbProfileInitials{display:grid;place-items:center;width:100%;height:100%;}
      #view-dashboard .db-profile-name-btn{border:0;background:transparent;font:inherit;color:inherit;cursor:pointer;padding:4px;}
      #view-dashboard .db-edit-photo{border:1px solid var(--db-line);background:#fff;color:var(--db-blue);border-radius:8px;padding:7px 10px;font-size:12px;font-weight:700;cursor:pointer;}
      #view-dashboard .db-edit-photo:hover{background:var(--db-blue-lt);}
      #view-dashboard .db-nav a{user-select:none;}
      #view-dashboard .dash-toast{position:fixed;right:24px;bottom:24px;background:#0f766e;color:#fff;padding:12px 18px;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.18);z-index:5000;opacity:0;transform:translateY(10px);pointer-events:none;transition:.2s;}
      #view-dashboard .dash-toast.show{opacity:1;transform:translateY(0);}
      @media(max-width:900px){#view-dashboard .db-shell{grid-template-columns:1fr;}#view-dashboard .db-sidebar{position:relative;height:auto;}.db-nav{display:grid!important;grid-template-columns:repeat(2,1fr)!important;gap:4px;}#view-dashboard .db-header{top:0;}}
    `,document.head.appendChild(d);const u=[],o=m=>new Promise(c=>{const b=document.createElement("script");m.startsWith("http")||m.startsWith("/")?b.src=m:b.text=m,b.onload=b.onerror=()=>c(),document.body.appendChild(b),u.push(b),b.src||c()});return(async()=>{for(const m of mh)await o(m);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{u.forEach(m=>m.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(m=>m.remove())}},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mediwell-page-root",children:[e.jsxs("nav",{id:"db-page-nav",children:[e.jsxs("a",{className:"db-page-logo",href:"/",children:[e.jsx("span",{children:"✚"}),e.jsx("span",{children:"MediWell Health Care"})]}),e.jsxs("div",{className:"db-page-links",children:[e.jsx("a",{href:"/",children:"🏠 Home"}),e.jsx("button",{type:"button",id:"dbPageLogoutBtn",children:"⏻ Log Out"})]})]}),e.jsxs("div",{id:"view-dashboard",className:"active",children:[e.jsxs("div",{className:"db-shell",children:[e.jsxs("aside",{className:"db-sidebar",children:[e.jsxs("div",{className:"db-brand",children:[e.jsx("span",{className:"db-brand-mark",children:"✚"}),e.jsxs("span",{children:["MediWell",e.jsx("br",{}),"Healthcare"]})]}),e.jsxs("nav",{className:"db-nav",children:[e.jsxs("a",{className:"active",href:"#dashboard","data-section":"dbDashboardTop",children:[e.jsx("span",{className:"db-icon",children:"▦"}),"Dashboard"]}),e.jsxs("a",{href:"#appointments","data-section":"dbAppointmentManagement",children:[e.jsx("span",{className:"db-icon",children:"📅"}),"Appointments"]}),e.jsxs("a",{href:"#records","data-section":"dbRecords",children:[e.jsx("span",{className:"db-icon",children:"📄"}),"Medical Records"]}),e.jsxs("a",{href:"#prescriptions","data-section":"dbPrescription",children:[e.jsx("span",{className:"db-icon",children:"📝"}),"Prescriptions"]}),e.jsxs("a",{href:"#reports","data-section":"dbLabReports",children:[e.jsx("span",{className:"db-icon",children:"🧪"}),"Lab Reports"]}),e.jsxs("a",{href:"#history","data-section":"dbPatientHistory",children:[e.jsx("span",{className:"db-icon",children:"🕘"}),"Patient History"]}),e.jsxs("a",{href:"#chat","data-section":"dbChatCta",children:[e.jsx("span",{className:"db-icon",children:"💬"}),"Chat"]}),e.jsxs("a",{href:"#video","data-section":"dbVideoCta",children:[e.jsx("span",{className:"db-icon",children:"📹"}),"Video Consultation"]}),e.jsxs("a",{href:"#analytics","data-section":"dbAnalytics",children:[e.jsx("span",{className:"db-icon",children:"📊"}),"Analytics"]}),e.jsxs("a",{href:"#logout",id:"dbLogoutBtn",style:{marginTop:"20px"},children:[e.jsx("span",{className:"db-icon",children:"⏻"}),"Log Out"]})]})]}),e.jsxs("div",{children:[e.jsxs("header",{className:"db-header",children:[e.jsx("button",{className:"db-bell",id:"dbBell",children:"🔔"}),e.jsxs("div",{className:"db-profile",children:[e.jsxs("div",{className:"db-avatar-wrap",children:[e.jsx("img",{src:"",alt:"Doctor",id:"dbProfileImg",style:{display:"none"}}),e.jsx("span",{id:"dbProfileInitials",children:"DR"})]}),e.jsx("button",{type:"button",className:"db-profile-name-btn",id:"dbEditProfileBtn",children:e.jsx("span",{id:"dbProfileName",children:"Doctor ▾"})}),e.jsx("button",{type:"button",className:"db-edit-photo",id:"dbEditPhotoBtn",children:"Edit DP"}),e.jsx("input",{id:"dbPhotoInput",type:"file",accept:"image/*",style:{display:"none"}})]})]}),e.jsxs("main",{className:"db-main",id:"dbDashboardTop",children:[e.jsx("h1",{className:"db-page-title",children:"Doctor Dashboard"}),e.jsxs("div",{className:"db-layout",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"db-stats",children:[e.jsxs("div",{className:"db-stat filled",children:[e.jsx("h4",{children:"Today's Appointments"}),e.jsx("div",{className:"db-num",id:"dbStatToday",children:"0"})]}),e.jsxs("div",{className:"db-stat tint",children:[e.jsx("h4",{children:"Upcoming Appointments"}),e.jsx("div",{className:"db-num",id:"dbStatUpcoming",children:"0"})]}),e.jsxs("div",{className:"db-stat plain",children:[e.jsx("h4",{children:"Pending Reports"}),e.jsx("div",{className:"db-num",children:"3"})]}),e.jsxs("div",{className:"db-stat plain",children:[e.jsx("h4",{children:"Notifications"}),e.jsx("div",{className:"db-num",children:"2"})]})]}),e.jsxs("div",{className:"db-panel",children:[e.jsx("h3",{children:"Upcoming Appointments"}),e.jsx("div",{id:"dbAppointmentsList",children:e.jsx("p",{style:{color:"var(--gray-500, #888)"},children:"Loading…"})})]}),e.jsxs("div",{className:"db-panel",children:[e.jsx("h3",{children:"Patients Attended"}),e.jsx("div",{id:"dbPatientsList",children:e.jsx("p",{style:{color:"var(--gray-500, #888)"},children:"Loading…"})})]}),e.jsxs("div",{className:"db-panel",id:"dbAppointmentManagement",children:[e.jsx("h3",{children:"Appointment Management"}),e.jsxs("div",{className:"db-appt-toolbar",children:[e.jsxs("div",{className:"db-month-nav",children:[e.jsx("button",{id:"dbPrevMonth",children:"‹"}),e.jsx("span",{id:"dbMonthLabel",children:"July 2026"}),e.jsx("button",{id:"dbNextMonth",children:"›"})]}),e.jsx("div",{className:"db-spacer"}),e.jsx("button",{className:"db-btn-sm db-accept-btn","data-toast":"Appointment accepted",children:"Accept"}),e.jsx("button",{className:"db-btn-sm db-reject-btn","data-toast":"Appointment declined",children:"Reject"}),e.jsx("button",{className:"db-btn-sm db-reschedule-btn","data-toast":"Reschedule requested",children:"Reschedule"}),e.jsx("button",{className:"db-btn-sm db-availability-btn","data-toast":"Availability updated",children:"Set Availability"})]}),e.jsxs("table",{className:"db-calendar",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"Mon"}),e.jsx("th",{children:"Tue"}),e.jsx("th",{children:"Wed"}),e.jsx("th",{children:"Thu"}),e.jsx("th",{children:"Fri"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"db-time-col",children:"9am"}),e.jsx("td",{}),e.jsx("td",{className:"db-highlight-col"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"db-time-col",children:"10am"}),e.jsx("td",{}),e.jsx("td",{className:"db-highlight-col",children:e.jsxs("div",{className:"db-slot",children:["12:00 PM",e.jsx("small",{children:"Scheduled"})]})}),e.jsx("td",{}),e.jsx("td",{children:e.jsxs("div",{className:"db-slot",children:["12:00 PM",e.jsx("small",{children:"Scheduled"})]})}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"db-time-col",children:"11pm"}),e.jsx("td",{children:e.jsxs("div",{className:"db-slot",children:["10:00 PM",e.jsx("small",{children:"Scheduled"})]})}),e.jsx("td",{className:"db-highlight-col"}),e.jsx("td",{children:e.jsxs("div",{className:"db-slot",children:["12:00 PM",e.jsx("small",{children:"Scheduled"})]})}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"db-time-col",children:"12pm"}),e.jsx("td",{}),e.jsx("td",{className:"db-highlight-col"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{})]})]})]})]}),e.jsxs("div",{className:"db-panel",id:"dbPatientHistory",children:[e.jsx("h3",{children:"Patient History"}),e.jsxs("div",{className:"db-timeline-row",children:[e.jsx("label",{children:"Diagnoses"}),e.jsxs("div",{className:"db-track",children:[e.jsx("div",{className:"db-dot",style:{left:"15%"}}),e.jsx("div",{className:"db-dot",style:{left:"45%"}})]})]}),e.jsxs("div",{className:"db-timeline-row",children:[e.jsx("label",{children:"Prescriptions"}),e.jsxs("div",{className:"db-track",children:[e.jsx("div",{className:"db-fill",style:{left:"20%",width:"35%"}}),e.jsx("div",{className:"db-dot",style:{left:"20%"}}),e.jsx("div",{className:"db-dot",style:{left:"55%"}})]})]}),e.jsxs("div",{className:"db-timeline-row",children:[e.jsx("label",{children:"Admissions"}),e.jsxs("div",{className:"db-track",children:[e.jsx("div",{className:"db-fill",style:{left:"65%",width:"15%"}}),e.jsx("div",{className:"db-dot",style:{left:"65%"}}),e.jsx("div",{className:"db-dot",style:{left:"80%"}})]})]}),e.jsxs("div",{className:"db-timeline-row",style:{marginBottom:"0"},children:[e.jsx("label",{children:"Operations"}),e.jsx("div",{className:"db-track",children:e.jsx("div",{className:"db-dot",style:{left:"95%"}})})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"db-panel",id:"dbRecords",children:[e.jsx("h3",{children:"Patient Medical Records"}),e.jsxs("div",{className:"db-tabs",id:"dbRecordTabs",children:[e.jsx("div",{className:"db-tab active","data-tab":"visits",children:"Previous Visits"}),e.jsx("div",{className:"db-tab","data-tab":"allergies",children:"Allergies"}),e.jsx("div",{className:"db-tab","data-tab":"diseases",children:"Diseases"}),e.jsx("div",{className:"db-tab","data-tab":"medications",children:"Medications"}),e.jsx("div",{className:"db-tab","data-tab":"reports",children:"Reports"}),e.jsx("div",{className:"db-tab","data-tab":"surgeries",children:"Surgeries"})]}),e.jsx("select",{className:"db-patient-select",id:"dbPatientSelect",children:e.jsx("option",{value:"",children:"Select a patient…"})}),e.jsx("div",{className:"db-tab-content",id:"dbRecordContent",children:"Select a patient to view their previous visits."})]}),e.jsxs("div",{className:"db-panel",id:"dbPrescription",children:[e.jsx("h3",{children:"Digital Prescription"}),e.jsxs("div",{className:"db-rx-row",children:[e.jsxs("select",{id:"dbRxMedicine",children:[e.jsx("option",{value:"",children:"Medicine"}),e.jsx("option",{children:"Paracetamol"}),e.jsx("option",{children:"Amoxicillin"}),e.jsx("option",{children:"Atorvastatin"})]}),e.jsx("input",{type:"text",id:"dbRxDosage",placeholder:"Dosage"}),e.jsx("input",{type:"text",id:"dbRxDuration",placeholder:"Duration"})]}),e.jsxs("div",{className:"db-rx-actions",children:[e.jsx("button",{className:"db-btn-outline",id:"dbPrintBtn",children:"🖨 Print"}),e.jsx("button",{className:"db-btn-filled",id:"dbSendRxBtn",children:"➤ Send Digitally"})]})]}),e.jsxs("div",{className:"db-panel",id:"dbLabReports",children:[e.jsx("h3",{children:"Lab Reports"}),e.jsxs("div",{className:"db-lab-row",children:[e.jsx("span",{className:"db-lab-name",children:"Test Test Result"}),e.jsx("button",{"data-toast":"Report opened",children:"View"}),e.jsx("button",{"data-toast":"Comment added",children:"Add Comments"}),e.jsx("button",{"data-toast":"Additional tests recommended",children:"Recommend Additional Tests"})]}),e.jsxs("div",{className:"db-lab-row",children:[e.jsx("span",{className:"db-lab-name",children:"Test Test Result"}),e.jsx("button",{"data-toast":"Report opened",children:"View"}),e.jsx("button",{"data-toast":"Comment added",children:"Add Comments"}),e.jsx("button",{"data-toast":"Additional tests recommended",children:"Recommend Additional Tests"})]})]}),e.jsxs("div",{className:"db-cta-row",children:[e.jsxs("button",{className:"db-cta",id:"dbChatCta",children:["Chat with Patients ",e.jsx("span",{children:"›"})]}),e.jsxs("button",{className:"db-cta",id:"dbVideoCta",children:["Video Consultation ",e.jsx("span",{children:"›"})]})]}),e.jsxs("div",{className:"db-panel",id:"dbAnalytics",children:[e.jsxs("h3",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Analytics",e.jsx("span",{style:{fontSize:"13px",fontWeight:"500",color:"var(--db-muted)",cursor:"pointer"},children:"Last Month ▾"})]}),e.jsxs("div",{className:"db-chart-legend",children:[e.jsxs("span",{children:[e.jsx("span",{className:"db-legend-dot",style:{background:"var(--db-blue)"}}),"Number of Patients"]}),e.jsxs("span",{children:[e.jsx("span",{className:"db-legend-dot",style:{background:"#91cdd7"}}),"Appointment Trends"]})]}),e.jsxs("svg",{viewbox:"0 0 320 140",className:"db-chart-svg",children:[e.jsx("polyline",{points:"0,90 40,60 80,95 120,40 160,70 200,20 240,55 280,15 320,10",fill:"none",stroke:"#005f78","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("polyline",{points:"0,110 40,90 80,100 120,75 160,95 200,60 240,80 280,50 320,45",fill:"none",stroke:"#91cdd7","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"})]})]})]})]})]})]})]}),e.jsx("div",{className:"dash-toast",id:"dashToast",children:"Saved successfully"})]})]})})}const hh="Page Not Found — MediWell Healthcare",fh=`
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #0f3d3e 0%, #16a085 100%);
        color: #fff;
        padding: 20px;
      }
      .error-box {
        text-align: center;
        max-width: 480px;
      }
      .error-code {
        font-size: clamp(64px, 18vw, 120px);
        font-weight: 800;
        line-height: 1;
        margin: 0;
        opacity: 0.9;
      }
      .error-icon {
        font-size: 48px;
        margin-bottom: 8px;
      }
      h1 {
        font-size: clamp(18px, 4vw, 24px);
        margin: 12px 0 8px;
      }
      p {
        font-size: 14.5px;
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.6;
        margin: 0 0 28px;
      }
      .actions {
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
      }
      .btn {
        padding: 12px 22px;
        border-radius: 24px;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        border: none;
      }
      .btn-primary {
        background: #fff;
        color: #0f3d3e;
      }
      .btn-outline {
        background: transparent;
        color: #fff;
        border: 1.5px solid rgba(255, 255, 255, 0.6);
      }
      .btn:hover {
        opacity: 0.9;
      }
      @media (max-width: 400px) {
        .actions { flex-direction: column; }
        .btn { width: 100%; }
      }
    `,xh=[`
      function goBack() {
        if (document.referrer && document.referrer.includes(window.location.host)) {
          window.location.href = document.referrer;
        } else {
          window.location.href = "/index";
        }
      }
    `];function qs(){return R.useEffect(()=>{document.title=hh;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=fh,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of xh)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"mediwell-page-root",children:e.jsxs("div",{className:"error-box",children:[e.jsx("div",{className:"error-icon",children:"🩺"}),e.jsx("p",{className:"error-code",children:"404"}),e.jsx("h1",{children:"We couldn't find that page"}),e.jsx("p",{children:"The page you're looking for doesn't exist, may have moved, or the link might be mistyped. Let's get you back on track."}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn btn-outline",onClick:()=>window.__mediwellRun("goBack()"),children:"← Go Back"}),e.jsx("a",{className:"btn btn-primary",href:"/",children:"Go to Homepage"})]})]})})})}const gh="MediWell Healthcare — Insurance & Cashless Treatment",vh=`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
      }
      :root {
        --teal: #0f766e;
        --teal-dark: #0a5a53;
        --teal-lt: #ccfbf1;
        --ink: #1e293b;
        --muted: #64748b;
        --bg: #f7faf9;
      }
      body {
        background: var(--bg);
        color: var(--ink);
        padding: 90px 20px 60px;
      }
      .wrap {
        max-width: 860px;
        margin: 0 auto;
      }
      .hero {
        text-align: center;
        margin-bottom: 36px;
      }
      .hero h1 {
        font-family: "Lora", serif;
        font-size: clamp(28px, 4vw, 38px);
        color: var(--teal-dark);
        margin-bottom: 10px;
      }
      .hero p {
        color: var(--muted);
        font-size: 15px;
        max-width: 580px;
        margin: 0 auto;
      }
      .card {
        background: #fff;
        border: 1px solid #e5eeec;
        border-radius: 16px;
        padding: 28px;
        margin-bottom: 22px;
        box-shadow: 0 2px 10px rgba(15, 118, 110, 0.05);
      }
      .card h2 {
        font-size: 19px;
        color: var(--teal-dark);
        margin-bottom: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .insurer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
        gap: 10px;
      }
      .insurer-chip {
        background: var(--teal-lt);
        color: var(--teal-dark);
        font-size: 13.5px;
        font-weight: 600;
        padding: 10px 14px;
        border-radius: 10px;
        text-align: center;
      }
      .steps {
        counter-reset: step;
        list-style: none;
      }
      .steps li {
        position: relative;
        padding: 10px 0 10px 40px;
        font-size: 13.5px;
        color: #334155;
        line-height: 1.55;
        border-bottom: 1px solid #eef2f1;
      }
      .steps li:last-child {
        border-bottom: none;
      }
      .steps li::before {
        counter-increment: step;
        content: counter(step);
        position: absolute;
        left: 0;
        top: 8px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: var(--teal);
        color: #fff;
        font-size: 12.5px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .doc-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .doc-tag {
        background: #fff7ed;
        color: #b45309;
        border: 1px solid #fde5c4;
        font-size: 12.5px;
        font-weight: 600;
        padding: 6px 12px;
        border-radius: 20px;
      }
      details {
        border-bottom: 1px solid #eef2f1;
        padding: 14px 0;
      }
      details:last-child {
        border-bottom: none;
      }
      summary {
        cursor: pointer;
        font-weight: 600;
        font-size: 14.5px;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      summary::-webkit-details-marker {
        display: none;
      }
      summary::after {
        content: "+";
        font-size: 20px;
        color: var(--teal);
        font-weight: 400;
      }
      details[open] summary::after {
        content: "−";
      }
      details p {
        margin-top: 10px;
        font-size: 13.5px;
        color: var(--muted);
        line-height: 1.6;
      }

      form .field {
        margin-bottom: 14px;
      }
      form label {
        display: block;
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 6px;
      }
      form input,
      form textarea {
        width: 100%;
        padding: 10px 12px;
        border: 1.5px solid #d9e3e1;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
      }
      form input:focus,
      form textarea:focus {
        outline: none;
        border-color: var(--teal);
      }
      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
      }
      @media (max-width: 520px) {
        .form-row {
          grid-template-columns: 1fr;
        }
      }
      .btn {
        border: none;
        background: var(--teal);
        color: #fff;
        padding: 11px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
      }
      .btn:hover {
        background: var(--teal-dark);
      }
      .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .form-msg {
        font-size: 13.5px;
        margin-top: 12px;
        padding: 10px 12px;
        border-radius: 8px;
        display: none;
      }
      .form-msg.success {
        background: #dcfce7;
        color: #15803d;
        display: block;
      }
      .form-msg.error {
        background: #fef2f2;
        color: #dc2626;
        display: block;
      }
    `,yh=["/legacy/api.js",`
      renderBackButton(16);

      // Prefill from the signed-in patient's profile, if any - guests can
      // still fill this out manually.
      (async function prefill() {
        try {
          const me = await getCurrentUser();
          if (me.data.fullName) document.getElementById("insFullName").value = me.data.fullName;
          if (me.data.email) document.getElementById("insEmail").value = me.data.email;
        } catch (err) {
          // not signed in - fine, form stays blank
        }
      })();

      document.getElementById("insuranceForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const msgEl = document.getElementById("insFormMsg");
        const btn = document.getElementById("insSubmitBtn");
        msgEl.className = "form-msg";
        msgEl.textContent = "";

        const fields = {
          fullName: document.getElementById("insFullName").value.trim(),
          email: document.getElementById("insEmail").value.trim(),
          phone: document.getElementById("insPhone").value.trim(),
          insurerName: document.getElementById("insInsurer").value.trim(),
          policyNumber: document.getElementById("insPolicy").value.trim(),
          message: document.getElementById("insMessage").value.trim(),
        };

        if (!fields.fullName || !fields.email || !fields.message) {
          msgEl.className = "form-msg error";
          msgEl.textContent = "Please fill in your name, email, and question.";
          return;
        }

        btn.disabled = true;
        btn.textContent = "Sending…";
        try {
          const result = await submitInsuranceQuery(fields);
          msgEl.className = "form-msg success";
          msgEl.textContent = result.message;
          document.getElementById("insuranceForm").reset();
        } catch (err) {
          msgEl.className = "form-msg error";
          msgEl.textContent = err.message || "Something went wrong. Please try again.";
        } finally {
          btn.disabled = false;
          btn.textContent = "Submit Query";
        }
      });
    `];function xc(){return R.useEffect(()=>{document.title=gh;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=vh,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of yh)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"mediwell-page-root",children:e.jsxs("div",{className:"wrap",children:[e.jsxs("div",{className:"hero",children:[e.jsx("h1",{children:"Insurance & Cashless Treatment"}),e.jsx("p",{children:"What we accept, how cashless approval works, and a direct way to ask us about your specific policy."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"🏥 Insurers We Work With"}),e.jsxs("div",{className:"insurer-grid",children:[e.jsx("div",{className:"insurer-chip",children:"Star Health Insurance"}),e.jsx("div",{className:"insurer-chip",children:"HDFC ERGO"}),e.jsx("div",{className:"insurer-chip",children:"ICICI Lombard"}),e.jsx("div",{className:"insurer-chip",children:"Care Health Insurance"}),e.jsx("div",{className:"insurer-chip",children:"Niva Bupa"}),e.jsx("div",{className:"insurer-chip",children:"Bajaj Allianz"}),e.jsx("div",{className:"insurer-chip",children:"New India Assurance"}),e.jsx("div",{className:"insurer-chip",children:"National Insurance Co."}),e.jsx("div",{className:"insurer-chip",children:"United India Insurance"}),e.jsx("div",{className:"insurer-chip",children:"Reliance General Insurance"}),e.jsx("div",{className:"insurer-chip",children:"SBI General Insurance"}),e.jsx("div",{className:"insurer-chip",children:"Aditya Birla Health"})]}),e.jsx("p",{style:{fontSize:"12.5px",color:"var(--muted)",marginTop:"14px"},children:"Not sure if your specific policy or TPA is on our network? Use the form below and we'll confirm for you."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"✅ Cashless Treatment — How It Works"}),e.jsxs("ol",{className:"steps",children:[e.jsx("li",{children:"Check that your insurer/TPA is in our network (see list above, or ask us)."}),e.jsx("li",{children:"Before a planned admission, share your policy details with our insurance desk to start pre-authorization."}),e.jsx("li",{children:"Present your insurance card and photo ID at the billing desk on arrival."}),e.jsx("li",{children:"Our team coordinates directly with your insurer for approval — most pre-authorizations are confirmed within a few hours for standard cases."}),e.jsx("li",{children:"On discharge, the approved amount is settled directly with your insurer. You only pay for anything outside your policy's coverage."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"💰 Reimbursement Claims (Non-Network Insurers)"}),e.jsxs("p",{style:{fontSize:"13.5px",color:"var(--muted)",lineHeight:"1.6",marginBottom:"14px"},children:["If your insurer isn't on our cashless network, you pay for treatment upfront (via UPI, see our ",e.jsx("a",{href:"/billing",style:{color:"var(--teal)",fontWeight:"600"},children:"Billing page"}),") and then claim reimbursement directly from your insurer. Keep these documents ready:"]}),e.jsxs("div",{className:"doc-list",children:[e.jsx("span",{className:"doc-tag",children:"Original bills & receipts"}),e.jsx("span",{className:"doc-tag",children:"Discharge summary"}),e.jsx("span",{className:"doc-tag",children:"Doctor's prescription"}),e.jsx("span",{className:"doc-tag",children:"Diagnostic reports"}),e.jsx("span",{className:"doc-tag",children:"Filled claim form"}),e.jsx("span",{className:"doc-tag",children:"Policy copy & ID proof"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"❓ Insurance FAQ"}),e.jsxs("details",{open:"",children:[e.jsx("summary",{children:"Is OPD (outpatient) consultation covered by insurance?"}),e.jsx("p",{children:"Most standard health policies in India cover hospitalization, not routine OPD visits, unless you specifically have an OPD add-on or a corporate policy that includes it. Check your policy wording, or ask us using the form below."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"How long does cashless pre-authorization take?"}),e.jsx("p",{children:"For planned admissions, 2-6 hours is typical once we have your complete policy details. Emergency admissions can be treated first, with authorization processed in parallel."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"What if my claim gets partially rejected?"}),e.jsx("p",{children:"This happens for reasons like a policy sub-limit or a non-covered item. You're responsible for the shortfall, but our billing desk can help you understand the breakup and, in some cases, appeal with the insurer."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can I use insurance for a video/online consultation?"}),e.jsxs("p",{children:["Currently, online appointments booked through this website are paid directly via UPI (see ",e.jsx("a",{href:"/billing",style:{color:"var(--teal)",fontWeight:"600"},children:"Billing"}),") — insurance is applied for in-person, network-hospital treatment."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"📩 Ask Us About Your Policy"}),e.jsxs("form",{id:"insuranceForm",children:[e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"insFullName",children:"Full Name *"}),e.jsx("input",{type:"text",id:"insFullName",required:""})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"insEmail",children:"Email *"}),e.jsx("input",{type:"email",id:"insEmail",required:""})]})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"insPhone",children:"Phone"}),e.jsx("input",{type:"tel",id:"insPhone"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"insInsurer",children:"Insurance Provider"}),e.jsx("input",{type:"text",id:"insInsurer",placeholder:"e.g. Star Health"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"insPolicy",children:"Policy Number (optional)"}),e.jsx("input",{type:"text",id:"insPolicy"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"insMessage",children:"Your Question *"}),e.jsx("textarea",{id:"insMessage",rows:"4",required:"",placeholder:"e.g. Is my policy accepted for a planned surgery, and how long does pre-authorization usually take?"})]}),e.jsx("button",{type:"submit",className:"btn",id:"insSubmitBtn",children:"Submit Query"}),e.jsx("div",{className:"form-msg",id:"insFormMsg"})]})]})]})})})}const bh="MediWell Healthcare — Billing & Payments",wh=`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
      }
      :root {
        --teal: #0f766e;
        --teal-dark: #0a5a53;
        --teal-lt: #ccfbf1;
        --ink: #1e293b;
        --muted: #64748b;
        --bg: #f7faf9;
      }
      body {
        background: var(--bg);
        color: var(--ink);
        padding: 90px 20px 60px;
      }
      .wrap {
        max-width: 860px;
        margin: 0 auto;
      }
      .hero {
        text-align: center;
        margin-bottom: 36px;
      }
      .hero h1 {
        font-family: "Lora", serif;
        font-size: clamp(28px, 4vw, 38px);
        color: var(--teal-dark);
        margin-bottom: 10px;
      }
      .hero p {
        color: var(--muted);
        font-size: 15px;
        max-width: 560px;
        margin: 0 auto;
      }
      .card {
        background: #fff;
        border: 1px solid #e5eeec;
        border-radius: 16px;
        padding: 28px;
        margin-bottom: 22px;
        box-shadow: 0 2px 10px rgba(15, 118, 110, 0.05);
      }
      .card h2 {
        font-size: 19px;
        color: var(--teal-dark);
        margin-bottom: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
      }
      .info-item {
        background: var(--teal-lt);
        border-radius: 12px;
        padding: 16px;
      }
      .info-item h3 {
        font-size: 14px;
        color: var(--teal-dark);
        margin-bottom: 6px;
      }
      .info-item p {
        font-size: 13.5px;
        color: #334155;
        line-height: 1.55;
      }
      details {
        border-bottom: 1px solid #eef2f1;
        padding: 14px 0;
      }
      details:last-child {
        border-bottom: none;
      }
      summary {
        cursor: pointer;
        font-weight: 600;
        font-size: 14.5px;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      summary::-webkit-details-marker {
        display: none;
      }
      summary::after {
        content: "+";
        font-size: 20px;
        color: var(--teal);
        font-weight: 400;
      }
      details[open] summary::after {
        content: "−";
      }
      details p {
        margin-top: 10px;
        font-size: 13.5px;
        color: var(--muted);
        line-height: 1.6;
      }

      /* Bills section */
      .bill-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        padding: 14px 0;
        border-bottom: 1px solid #eef2f1;
      }
      .bill-row:last-child {
        border-bottom: none;
      }
      .bill-row b {
        display: block;
        font-size: 14.5px;
      }
      .bill-row small {
        color: var(--muted);
        font-size: 12.5px;
      }
      .pill {
        font-size: 12px;
        font-weight: 700;
        padding: 5px 12px;
        border-radius: 20px;
        white-space: nowrap;
      }
      .pill.paid {
        background: #dcfce7;
        color: #15803d;
      }
      .btn {
        border: none;
        background: var(--teal);
        color: #fff;
        padding: 9px 16px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        white-space: nowrap;
      }
      .btn:hover {
        background: var(--teal-dark);
      }
      .btn.outline {
        background: #fff;
        color: var(--teal);
        border: 1.5px solid var(--teal);
      }
      .empty-state {
        text-align: center;
        padding: 24px 10px;
        color: var(--muted);
        font-size: 14px;
      }
      .signin-prompt {
        text-align: center;
        padding: 20px 10px;
      }
      .signin-prompt p {
        color: var(--muted);
        margin-bottom: 14px;
        font-size: 14px;
      }

      /* Reused UPI/QR pay widget styling (see api.js renderUpiPayBlock) */
      .hms-upi-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        padding-top: 6px;
      }
      .hms-upi-qr {
        padding: 12px;
        background: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        margin-bottom: 14px;
        min-height: 170px;
        min-width: 170px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .hms-upi-id-row {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--bg);
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 9px 12px;
        margin-bottom: 12px;
        width: 100%;
        max-width: 280px;
      }
      .hms-upi-id-row code {
        flex: 1;
        font-size: 0.9rem;
        font-weight: 700;
        color: #1e293b;
      }
      .hms-upi-copy-btn {
        border: none;
        background: var(--teal);
        color: #fff;
        padding: 6px 10px;
        border-radius: 7px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .hms-upi-app-btn {
        display: inline-block;
        width: 100%;
        max-width: 280px;
        padding: 11px;
        background: var(--teal);
        color: #fff;
        text-decoration: none;
        font-weight: 700;
        border-radius: 10px;
        margin-bottom: 14px;
        font-size: 0.9rem;
      }
      .hms-upi-hint {
        font-size: 12px;
        color: #64748b;
        margin: 0 0 14px;
        max-width: 320px;
        line-height: 1.5;
      }
      .hms-utr-label {
        align-self: flex-start;
        font-size: 13px;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 6px;
      }
      .hms-utr-input {
        width: 100%;
        max-width: 280px;
        padding: 11px 12px;
        border: 1.5px solid #cbd5e1;
        border-radius: 8px;
        font-size: 1rem;
        letter-spacing: 1px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 6px;
      }
      .hms-utr-input:focus {
        outline: none;
        border-color: var(--teal);
      }
      .hms-utr-error {
        color: #dc2626;
        font-size: 12.5px;
        max-width: 300px;
        margin-bottom: 6px;
      }
      .pay-panel {
        border-top: 1px dashed #d6e4e2;
        margin-top: 14px;
        padding-top: 16px;
      }
      .pay-panel-close {
        font-size: 12.5px;
        color: var(--muted);
        text-align: center;
        cursor: pointer;
        text-decoration: underline;
        margin-top: 10px;
      }
    `,jh=["https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js","/legacy/api.js",`
      renderBackButton(16);

      const billsArea = document.getElementById("billsArea");

      function renderSignInPrompt() {
        billsArea.innerHTML = \`
          <div class="signin-prompt">
            <p>Sign in to view and pay your bills — the general billing info above is available to everyone.</p>
            <a href="/login" class="btn" style="text-decoration:none; display:inline-block;">Sign In</a>
          </div>
        \`;
      }

      function renderNonPatientMessage(role) {
        billsArea.innerHTML = \`
          <div class="empty-state">
            You're signed in as \${role.toLowerCase()}. Billing here is shown for patient accounts —
            sign in with a patient account to view and pay bills.
          </div>
        \`;
      }

      async function renderBillsList() {
        try {
          const result = await listMyBills();
          const bills = result.data;
          if (!bills.length) {
            billsArea.innerHTML = '<div class="empty-state">No bills yet — anything from an appointment or the front desk will show up here.</div>';
            return;
          }
          billsArea.innerHTML = bills
            .map(
              (b) => \`
              <div class="bill-row">
                <div>
                  <b>\${b.description}</b>
                  <small>₹\${b.amount} · \${b.payment_status}\${b.payment_method ? " · " + b.payment_method : ""}</small>
                </div>
                \${
                  b.payment_status === "Pending"
                    ? \`<button class="btn" data-pay-bill="\${b.bill_id}" data-pay-amount="\${b.amount}">Pay now</button>\`
                    : \`<span class="pill paid">Paid</span>\`
                }
              </div>
              <div class="pay-panel" id="payPanel-\${b.bill_id}" style="display:none"></div>
            \`,
            )
            .join("");

          billsArea.querySelectorAll("[data-pay-bill]").forEach((btn) => {
            btn.addEventListener("click", () => openPayPanel(btn.dataset.payBill, btn.dataset.payAmount));
          });
        } catch (err) {
          billsArea.innerHTML = \`<div class="empty-state">Couldn't load your bills: \${err.message}</div>\`;
        }
      }

      function openPayPanel(billId, amount) {
        const panel = document.getElementById("payPanel-" + billId);
        if (!panel) return;
        const isOpen = panel.style.display !== "none";
        // Close any other open panel first, so only one pay flow is active.
        document.querySelectorAll(".pay-panel").forEach((p) => (p.style.display = "none"));
        if (isOpen) return; // was open, just closed it above

        panel.style.display = "block";
        panel.innerHTML = \`<div id="upiArea-\${billId}"></div><div class="pay-panel-close" id="cancelPay-\${billId}">Cancel</div>\`;
        renderUpiPayBlock(document.getElementById("upiArea-" + billId), amount, "Hospital bill payment");

        document.getElementById("cancelPay-" + billId).addEventListener("click", () => {
          panel.style.display = "none";
        });

        // Add a confirm button under the UTR field.
        const confirmBtn = document.createElement("button");
        confirmBtn.className = "btn";
        confirmBtn.style.marginTop = "12px";
        confirmBtn.style.width = "100%";
        confirmBtn.style.maxWidth = "280px";
        confirmBtn.textContent = \`Confirm Payment of ₹\${amount}\`;
        document.getElementById("upiArea-" + billId).appendChild(confirmBtn);

        confirmBtn.addEventListener("click", async () => {
          const utr = readAndValidateUtr();
          if (!utr) return;
          confirmBtn.disabled = true;
          confirmBtn.textContent = "Verifying payment…";
          try {
            await payBill(billId, utr);
            panel.style.display = "none";
            await renderBillsList();
          } catch (err) {
            alert(err.message || "Payment could not be verified. Please try again.");
            confirmBtn.disabled = false;
            confirmBtn.textContent = \`Confirm Payment of ₹\${amount}\`;
          }
        });
      }

      (async function init() {
        try {
          const me = await getCurrentUser();
          if (me.data.role === "PATIENT") {
            await renderBillsList();
          } else {
            renderNonPatientMessage(me.data.role);
          }
        } catch (err) {
          renderSignInPrompt();
        }
      })();
    `];function gc(){return R.useEffect(()=>{document.title=bh;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=wh,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of jh)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"mediwell-page-root",children:e.jsxs("div",{className:"wrap",children:[e.jsxs("div",{className:"hero",children:[e.jsx("h1",{children:"Billing & Payments"}),e.jsx("p",{children:"How invoices, receipts, and payments work at MediWell Healthcare — and, if you're signed in, your actual bills below."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"💳 How Billing Works"}),e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("h3",{children:"Accepted Payment Method"}),e.jsx("p",{children:"UPI/QR only — scan the code or use our UPI ID with any app (Google Pay, PhonePe, Paytm, etc.). We don't accept cards or net banking on the platform."})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("h3",{children:"Payment Verification"}),e.jsx("p",{children:"After paying, enter the 12-digit transaction ID (UTR) from your UPI app. Your bill is marked paid only once that's verified."})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("h3",{children:"Receipts"}),e.jsx("p",{children:`Once a bill is marked "Paid" on your dashboard, that's your receipt of record — it shows the amount, method, and transaction ID.`})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("h3",{children:"Corporate / TPA Billing"}),e.jsxs("p",{children:["Have insurance or a corporate policy? Visit our ",e.jsx("a",{href:"/insurance",style:{color:"var(--teal)",fontWeight:"600"},children:"Insurance page"})," to check cashless coverage before your visit."]})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"❓ Billing FAQ"}),e.jsxs("details",{open:"",children:[e.jsx("summary",{children:"I paid but my bill still shows Pending"}),e.jsx("p",{children:"Double-check the transaction ID (UTR) you entered matches exactly what your UPI app shows for that payment — it must be the full 12-digit number. If it's still stuck, contact us with your UTR and we'll verify it manually."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can I pay in cash at the hospital?"}),e.jsx("p",{children:"Appointments booked online are paid via UPI at the time of booking. Walk-in or front-desk billing may offer other methods in person — this only covers online payments made through the website."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"How do I get a refund?"}),e.jsxs("p",{children:["For a cancelled appointment or billing error, reach out via ",e.jsx("a",{href:"/contact",style:{color:"var(--teal)",fontWeight:"600"},children:"Contact Us"})," with your bill details and UTR — refunds are processed to the original payment method within 5-7 working days."]})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Does insurance cover my bill directly?"}),e.jsxs("p",{children:["For cashless network hospitals, your insurer settles directly and you may not see a bill for the covered portion. For reimbursement claims, you pay first and claim later — see the ",e.jsx("a",{href:"/insurance",style:{color:"var(--teal)",fontWeight:"600"},children:"Insurance page"})," for details."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"🧾 Your Bills"}),e.jsx("div",{id:"billsArea",children:e.jsx("div",{className:"empty-state",children:"Loading..."})})]})]})})})}const Nh="Access Denied — MediWell Healthcare",kh=`
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #3d0f0f 0%, #a01e1e 100%);
        color: #fff;
        padding: 20px;
      }
      .error-box {
        text-align: center;
        max-width: 480px;
      }
      .error-code {
        font-size: clamp(64px, 18vw, 120px);
        font-weight: 800;
        line-height: 1;
        margin: 0;
        opacity: 0.9;
      }
      .error-icon {
        font-size: 48px;
        margin-bottom: 8px;
      }
      h1 {
        font-size: clamp(18px, 4vw, 24px);
        margin: 12px 0 8px;
      }
      p {
        font-size: 14.5px;
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.6;
        margin: 0 0 28px;
      }
      .actions {
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
      }
      .btn {
        padding: 12px 22px;
        border-radius: 24px;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        border: none;
      }
      .btn-primary {
        background: #fff;
        color: #a01e1e;
      }
      .btn-outline {
        background: transparent;
        color: #fff;
        border: 1.5px solid rgba(255, 255, 255, 0.6);
      }
      .btn:hover {
        opacity: 0.9;
      }
      @media (max-width: 400px) {
        .actions { flex-direction: column; }
        .btn { width: 100%; }
      }
    `,Eh=[];function vc(){return R.useEffect(()=>{document.title=Nh;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=kh,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of Eh)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"mediwell-page-root",children:e.jsxs("div",{className:"error-box",children:[e.jsx("div",{className:"error-icon",children:"🔒"}),e.jsx("p",{className:"error-code",children:"403"}),e.jsx("h1",{children:"You don't have access to this page"}),e.jsx("p",{children:"This page is restricted to a different role or requires you to be logged in. If you think this is a mistake, try signing in with the correct account."}),e.jsxs("div",{className:"actions",children:[e.jsx("a",{className:"btn btn-outline",href:"/login",children:"Sign In"}),e.jsx("a",{className:"btn btn-primary",href:"/",children:"Go to Homepage"})]})]})})})}const Sh="login page",Ch=`
      /* =========================
   SIGN IN PAGE
========================= */

      /* Prevent inputs from becoming wider than their containers */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      /* =========================
   SIGN IN PAGE
========================= */

      .page-view {
        padding: 60px 20px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .page-header {
        text-align: center;
        margin-bottom: 30px;
      }

      .page-header h1 {
        font-size: 2.2rem;
        color: #0f172a;
        margin-bottom: 8px;
      }

      .page-header p {
        color: #64748b;
        font-size: 15px;
      }

      /* CARD */

      .signin-card {
        width: 100%;
        max-width: 500px;
        background: #fff;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
      }

      /* FIELDS */

      .signin-fields {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .field label {
        font-size: 14px;
        font-weight: 600;
        color: #334155;
      }

      .req {
        color: #e11d48;
      }

      .field input {
        width: 100%;
        padding: 12px 14px;
        border: 1.5px solid #cbd5e1;
        border-radius: 10px;
        font-size: 14px;
        outline: none;
        transition: 0.3s;
      }

      .field input:focus {
        border-color: #0f766e;
        box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.15);
      }

      .err-msg {
        display: none;
        color: #e11d48;
        font-size: 12px;
      }

      /* PASSWORD */

      .pw-wrap {
        position: relative;
        width: 100%;
      }

      .pw-wrap input {
        width: 100%;
        box-sizing: border-box;
        padding-right: 45px;
      }

      .pw-toggle {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: transparent;
        border: none;
        cursor: pointer;
        color: #94a3b8;
      }

      /* FORGOT PASSWORD */

      .forgot-row {
        text-align: right;
        margin: 15px 0 25px;
      }

      .forgot-row a {
        color: #0f766e;
        cursor: pointer;
        font-size: 14px;
        text-decoration: none;
      }

      .forgot-row a:hover {
        text-decoration: underline;
      }

      /* BUTTONS */

      .btn {
        border: none;
        cursor: pointer;
        border-radius: 10px;
        font-weight: 600;
        transition: 0.3s;
      }

      .btn-primary {
        background: #0f766e;
        color: white;
      }

      .btn-primary:hover {
        background: #0d5c56;
      }

      .btn-full {
        width: 100%;
        padding: 14px;
      }

      .btn-outline {
        background: transparent;
        border: 2px solid #0f766e;
        color: #0f766e;
      }

      /* DIVIDER */

      .divider {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 25px 0;
        color: #94a3b8;
        font-size: 14px;
      }

      .divider::before,
      .divider::after {
        content: "";
        flex: 1;
        height: 1px;
        background: #e2e8f0;
      }

      /* SOCIAL BUTTONS */

      .social-btns {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .btn-social {
        width: 100%;
        padding: 12px;
        border-radius: 10px;
        border: 1px solid #cbd5e1;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        transition: 0.3s;
      }

      .btn-social:hover {
        border-color: #0f766e;
        background: #f0fdfa;
      }

      .btn-social svg {
        width: 18px;
        height: 18px;
      }

      /* REGISTER */

      .register-prompt {
        margin-top: 25px;
        text-align: center;
        color: #64748b;
        font-size: 14px;
      }

      .register-prompt a {
        color: #0f766e;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
      }

      /* SUCCESS */

      .signin-success {
        text-align: center;
      }

      .signin-success h2 {
        margin: 20px 0 10px;
        color: #0f172a;
      }

      .signin-success p {
        color: #64748b;
      }

      /* MODAL */

      .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .modal-overlay.open {
        display: flex;
      }

      .modal {
        background: white;
        width: 90%;
        max-width: 420px;
        padding: 30px;
        border-radius: 18px;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
      }

      .modal h3 {
        margin-bottom: 10px;
      }

      .modal p {
        color: #64748b;
        margin-bottom: 20px;
      }

      .modal-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
      }

      .modal-actions .btn {
        flex: 1;
      }

      /* MOBILE */

      @media (max-width: 600px) {
        .signin-card {
          padding: 25px;
        }

        .page-header h1 {
          font-size: 1.8rem;
        }
      }
      .otp-modal-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        align-items: center;
        justify-content: center;
        padding: 16px;
      }
      .otp-modal-overlay.open {
        display: flex;
      }
      .otp-modal-box {
        background: #fff;
        border-radius: 14px;
        padding: 28px 24px;
        width: 100%;
        max-width: 360px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
      }
      .otp-modal-box h3 {
        margin: 0 0 8px;
        font-size: 19px;
      }
      .otp-modal-hint {
        font-size: 13px;
        color: #666;
        line-height: 1.5;
        margin: 0 0 16px;
      }
      .otp-modal-hint b {
        color: #222;
      }
      .otp-modal-input {
        width: 100%;
        box-sizing: border-box;
        padding: 12px 14px;
        font-size: 20px;
        letter-spacing: 6px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 8px;
        margin-bottom: 10px;
      }
      .otp-modal-error {
        color: #d33;
        font-size: 13px;
        margin-bottom: 10px;
      }
      .otp-modal-submit {
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 8px;
        background: #16a085;
        color: #fff;
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        margin-bottom: 8px;
      }
      .otp-modal-submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .otp-modal-cancel {
        width: 100%;
        padding: 10px;
        border: none;
        background: none;
        color: #888;
        font-size: 14px;
        cursor: pointer;
      }
      @media (max-width: 480px) {
        .otp-modal-box {
          padding: 22px 18px;
        }
      }
    `,Ph=["/legacy/api.js",`
      renderBackButton(16);

      function destinationFor(role) {
        if (role === "PATIENT") return "/patient";
        if (role === "DOCTOR") return "/doctor";
        return "/index";
      }

      let forgotStep = "request"; // 'request' -> 'reset'

      function openForgot() {
        forgotStep = "request";
        clearInterval(resendCooldownTimer);
        document.getElementById("forgot-title").textContent = "Reset Password";
        document.getElementById("forgot-desc").textContent =
          "Enter your registered email and we'll send you a reset code.";
        document.getElementById("forgot-email-field").style.display = "block";
        document.getElementById("forgot-code-field").style.display = "none";
        document.getElementById("forgot-newpw-field").style.display = "none";
        document.getElementById("forgot-action-btn").textContent =
          "Send Reset Code";
        document.getElementById("forgot-err").style.display = "none";
        document.getElementById("forgot-code").value = "";
        document.getElementById("forgot-newpw").value = "";
        document.getElementById("forgot-modal").classList.add("open");
        document.body.style.overflow = "hidden";
      }
      function closeForgot() {
        document.getElementById("forgot-modal").classList.remove("open");
        document.body.style.overflow = "";
      }

      let resendCooldownTimer = null;

      function startResendCooldown() {
        const el = document.getElementById("forgot-resend");
        let seconds = 30;
        el.style.pointerEvents = "none";
        el.style.color = "#999";
        el.style.textDecoration = "none";
        el.textContent = \`Resend code in \${seconds}s\`;
        clearInterval(resendCooldownTimer);
        resendCooldownTimer = setInterval(() => {
          seconds -= 1;
          if (seconds <= 0) {
            clearInterval(resendCooldownTimer);
            el.style.pointerEvents = "auto";
            el.style.color = "#0f766e";
            el.style.textDecoration = "underline";
            el.textContent = "Resend code";
          } else {
            el.textContent = \`Resend code in \${seconds}s\`;
          }
        }, 1000);
      }

      async function resendCode() {
        const email = document.getElementById("forgot-email").value.trim();
        const errEl = document.getElementById("forgot-err");
        try {
          const result = await forgotPassword(email);
          if (result.devResetCode) {
            console.log(
              "%c🔐 MediWell Health Care — Password Reset OTP (resent)",
              "font-size:14px;font-weight:bold;color:#0f766e;"
            );
            console.log(
              \`%cYour OTP for \${email} is: \${result.devResetCode}\`,
              "font-size:16px;font-weight:bold;color:#111;"
            );
          }
          startResendCooldown();
        } catch (err) {
          errEl.textContent = err.message;
          errEl.style.display = "block";
        }
      }

      async function sendReset() {
        const errEl = document.getElementById("forgot-err");
        errEl.style.display = "none";

        if (forgotStep === "request") {
          const email = document.getElementById("forgot-email").value.trim();
          if (!isValidEmail(email)) {
            errEl.textContent = "Please enter a valid email";
            errEl.style.display = "block";
            return;
          }
          try {
            const result = await forgotPassword(email);
            forgotStep = "reset";

            // No real email/SMS provider is configured for this project,
            // so the OTP is logged to the browser console instead of
            // being emailed - open DevTools (F12) to see it.
            if (result.devResetCode) {
              console.log(
                "%c🔐 MediWell Health Care — Password Reset OTP",
                "font-size:14px;font-weight:bold;color:#0f766e;"
              );
              console.log(
                \`%cYour OTP for \${email} is: \${result.devResetCode}\`,
                "font-size:16px;font-weight:bold;color:#111;"
              );
              console.log("%cThis code expires in 10 minutes.", "color:#666;");
            }

            document.getElementById("forgot-desc").textContent =
              "We've sent a 6-digit code to " +
              email +
              ". Enter it below along with your new password. (No email service is configured for this demo — check your browser console, press F12, for the code.)";
            document.getElementById("forgot-email-field").style.display =
              "none";
            document.getElementById("forgot-code-field").style.display =
              "block";
            document.getElementById("forgot-newpw-field").style.display =
              "block";
            document.getElementById("forgot-action-btn").textContent =
              "Reset Password";
            startResendCooldown();
          } catch (err) {
            errEl.textContent = err.message;
            errEl.style.display = "block";
          }
          return;
        }

        // forgotStep === 'reset'
        const email = document.getElementById("forgot-email").value.trim();
        const code = document.getElementById("forgot-code").value.trim();
        const newPw = document.getElementById("forgot-newpw").value;
        if (!isStrongPassword(newPw)) {
          errEl.textContent = passwordStrengthHint();
          errEl.style.display = "block";
          return;
        }
        try {
          await resetPassword(email, code, newPw);
          closeForgot();
          alert("Password updated. You can now log in with your new password.");
        } catch (err) {
          errEl.textContent = err.message;
          errEl.style.display = "block";
        }
      }

      // If a session already exists (e.g. the user hit "back" to this page,
      // or bookmarked it), skip the login form entirely and go straight in.
      (async function checkExistingSession() {
        try {
          const result = await getCurrentUser();
          window.location.href = destinationFor(result.data.role);
        } catch (e) {
          // not logged in - show the login form as normal
        }
      })();

      async function doSignIn() {
        const email = document.getElementById("si-email").value;
        const password = document.getElementById("si-password").value;
        const errEl = document.getElementById("si-pw-err");
        errEl.style.display = "none";

        try {
          const result = await login(email, password);
          document.getElementById("signin-form-wrap").style.display = "none";
          document.getElementById("signin-success").style.display = "block";
          setTimeout(() => {
            window.location.href = destinationFor(result.data.role);
          }, 900);
        } catch (err) {
          errEl.textContent = err.message;
          errEl.style.display = "block";
        }
      }
    `,`
      // Opens the OTP modal. onVerify(code) is called each time the person
      // submits - it should return a Promise that resolves on success (the
      // modal is then closed automatically) or throws/rejects on a wrong
      // code (the modal stays open with the error shown, so they can just
      // retry instead of restarting the whole registration/login flow).
      function openOtpModal({ title, hint, onVerify, onCancel }) {
        const modal = document.getElementById("otpModal");
        const input = document.getElementById("otpModalInput");
        const errorEl = document.getElementById("otpModalError");
        const submitBtn = document.getElementById("otpModalSubmit");
        const cancelBtn = document.getElementById("otpModalCancel");

        document.getElementById("otpModalTitle").textContent = title;
        document.getElementById("otpModalHint").innerHTML = hint;
        input.value = "";
        errorEl.style.display = "none";
        submitBtn.disabled = false;
        submitBtn.textContent = "Verify";
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
        input.focus();

        function cleanup() {
          modal.classList.remove("open");
          document.body.style.overflow = "";
          submitBtn.removeEventListener("click", onSubmit);
          cancelBtn.removeEventListener("click", onCancelClick);
          input.removeEventListener("keydown", onKeydown);
        }
        async function onSubmit() {
          const code = input.value.trim();
          if (!/^\\d{6}$/.test(code)) {
            errorEl.textContent = "Enter the 6-digit code.";
            errorEl.style.display = "block";
            return;
          }
          errorEl.style.display = "none";
          submitBtn.disabled = true;
          submitBtn.textContent = "Verifying…";
          try {
            await onVerify(code);
            cleanup();
          } catch (err) {
            errorEl.textContent = err.message || "Incorrect code.";
            errorEl.style.display = "block";
          } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Verify";
          }
        }
        function onCancelClick() {
          cleanup();
          if (onCancel) onCancel();
        }
        function onKeydown(e) {
          if (e.key === "Enter") onSubmit();
        }

        submitBtn.addEventListener("click", onSubmit);
        cancelBtn.addEventListener("click", onCancelClick);
        input.addEventListener("keydown", onKeydown);
      }
    `];function yc(){return R.useEffect(()=>{document.title=Sh;{const o=document.createElement("style");o.setAttribute("data-mediwell-page-style","true"),o.textContent=Ch,document.head.appendChild(o)}const d=[],u=o=>new Promise(m=>{const c=document.createElement("script");o.startsWith("http")||o.startsWith("/")?c.src=o:c.text=o,c.onload=c.onerror=()=>m(),document.body.appendChild(c),d.push(c),c.src||m()});return(async()=>{for(const o of Ph)await u(o);document.dispatchEvent(new Event("DOMContentLoaded"))})(),()=>{d.forEach(o=>o.remove()),document.querySelectorAll("style[data-mediwell-page-style]").forEach(o=>o.remove())}},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mediwell-page-root",children:[e.jsxs("div",{className:"page-view",id:"view-signin",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Welcome Back"}),e.jsx("p",{children:"Sign in to your MediCare account"})]}),e.jsxs("div",{className:"signin-card",children:[e.jsxs("div",{id:"signin-form-wrap",children:[e.jsxs("div",{className:"signin-fields",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Email Address ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"email",id:"si-email",placeholder:"patient@example.com"}),e.jsx("span",{className:"err-msg",children:"Please enter a valid email"})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:["Password ",e.jsx("span",{className:"req",children:"*"})]}),e.jsxs("div",{className:"pw-wrap",children:[e.jsx("input",{type:"password",id:"si-password",placeholder:"Enter your password"}),e.jsx("button",{className:"pw-toggle",onClick:()=>window.__mediwellRun("togglePw()"),type:"button",id:"pw-toggle-btn",children:e.jsxs("svg",{id:"eye-icon",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2",viewbox:"0 0 24 24",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})]}),e.jsx("span",{className:"err-msg",id:"si-pw-err",children:"Password is required"})]})]}),e.jsx("div",{className:"forgot-row",children:e.jsx("a",{onClick:()=>window.__mediwellRun("openForgot()"),children:"Forgot password?"})}),e.jsx("button",{className:"btn btn-primary btn-full",onClick:()=>window.__mediwellRun("doSignIn()"),children:"Sign In"}),e.jsx("div",{className:"divider",children:"or continue with"}),e.jsxs("div",{className:"social-btns",children:[e.jsxs("button",{className:"btn-social",children:[e.jsxs("svg",{viewbox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),e.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),e.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z",fill:"#FBBC05"}),e.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),"Continue with Google"]}),e.jsxs("button",{className:"btn-social",children:[e.jsx("svg",{viewbox:"0 0 24 24",fill:"#0078D4",children:e.jsx("path",{d:"M21.579 6.855c.14.42.21.865.21 1.33C21.789 13.67 17.566 18 12 18a9.86 9.86 0 01-5.032-1.378A7.03 7.03 0 0012 15.13a3.514 3.514 0 01-3.28-2.437c.214.04.434.063.66.063.32 0 .63-.043.924-.124A3.513 3.513 0 016.87 9.28v-.044c.446.248.956.397 1.498.414a3.51 3.51 0 01-1.085-4.686 9.963 9.963 0 007.23 3.665 3.956 3.956 0 01-.089-.8A3.511 3.511 0 0117.935 4.5a3.5 3.5 0 012.56 1.107 7.03 7.03 0 002.228-.852 3.525 3.525 0 01-1.543 1.942 7.01 7.01 0 002.018-.548 7.13 7.13 0 01-1.619 1.706z"})}),"Continue with Microsoft"]})]}),e.jsxs("div",{className:"register-prompt",children:["Don't have an account?",e.jsx("a",{onClick:()=>{window.location.href="/register"},children:"Register here"})]})]}),e.jsxs("div",{className:"signin-success",id:"signin-success",style:{display:"none"},children:[e.jsx("div",{className:"success-icon",style:{width:"72px",height:"72px",background:"var(--teal-lt)",borderRadius:"50%",display:"grid",placeItems:"center"},children:e.jsx("svg",{width:"36",height:"36",fill:"none",stroke:"var(--teal)","stroke-width":"2.5",viewbox:"0 0 24 24",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}),e.jsx("h2",{children:"Welcome Back!"}),e.jsxs("p",{children:["You've signed in successfully.",e.jsx("br",{}),"Redirecting to your dashboard…"]}),e.jsx("button",{className:"btn btn-outline btn-full",style:{marginTop:"24px"},onClick:()=>{window.location.href="/register"},children:"← Go to Registration"})]})]})]}),e.jsx("div",{className:"modal-overlay",id:"forgot-modal",children:e.jsxs("div",{className:"modal",children:[e.jsx("h3",{id:"forgot-title",children:"Reset Password"}),e.jsx("p",{id:"forgot-desc",children:"Enter your registered email and we'll send you a reset code."}),e.jsxs("div",{className:"field",id:"forgot-email-field",children:[e.jsxs("label",{children:["Email Address ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"email",id:"forgot-email",placeholder:"patient@example.com"}),e.jsx("span",{className:"err-msg",id:"forgot-err",style:{display:"none"},children:"Please enter a valid email"})]}),e.jsxs("div",{className:"field",id:"forgot-code-field",style:{display:"none"},children:[e.jsxs("label",{children:["Reset Code (OTP) ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",id:"forgot-code",maxLength:"6",inputMode:"numeric",placeholder:"6-digit code"}),e.jsx("span",{className:"err-msg",id:"forgot-resend",style:{display:"block",color:"#0f766e",cursor:"pointer",textDecoration:"underline"},onClick:()=>window.__mediwellRun("resendCode()"),children:"Resend code"})]}),e.jsxs("div",{className:"field",id:"forgot-newpw-field",style:{display:"none"},children:[e.jsxs("label",{children:["New Password ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"password",id:"forgot-newpw",placeholder:"At least 8 characters"}),e.jsx("span",{className:"err-msg",id:"forgot-newpw-hint",style:{display:"block",color:"#888"},children:"At least 8 characters, with an uppercase, lowercase, number, and special character."})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"btn btn-outline",onClick:()=>window.__mediwellRun("closeForgot()"),children:"Cancel"}),e.jsx("button",{className:"btn btn-primary",id:"forgot-action-btn",onClick:()=>window.__mediwellRun("sendReset()"),children:"Send Reset Code"})]})]})})]})})}function Ih(){const d=fm(),u=Vs();return R.useEffect(()=>{window.__mediwellNavigate=o=>{var b;if(!o)return;const m=String(o).replace(/\.html(?=($|[?#]))/,"");if(m.startsWith("http")){window.location.href=m;return}if(m.startsWith("#")){(b=document.querySelector(m))==null||b.scrollIntoView({behavior:"smooth"});return}const c=new URL(m,window.location.origin);d(c.pathname+c.search+c.hash)},window.__mediwellRun=o=>{try{const m=`return (function(){
`+String(o||"")+`
}).call(window);`;return Function("window","document",m)(window,document)}catch(m){console.error("MediWell legacy handler error:",m)}}},[d,u.pathname]),null}function Bh(){return e.jsxs(e.Fragment,{children:[e.jsx(Ih,{}),e.jsxs(zm,{children:[e.jsx(K,{path:"/emergency",element:e.jsx(sc,{})}),e.jsx(K,{path:"/contact",element:e.jsx(oc,{})}),e.jsx(K,{path:"/register",element:e.jsx(lc,{})}),e.jsx(K,{path:"/request-demo",element:e.jsx(dc,{})}),e.jsx(K,{path:"/appointment",element:e.jsx(cc,{})}),e.jsx(K,{path:"/payment",element:e.jsx(pc,{})}),e.jsx(K,{path:"/patient",element:e.jsx(uc,{})}),e.jsx(K,{path:"/register-p",element:e.jsx(mc,{})}),e.jsx(K,{path:"/register-n",element:e.jsx(hc,{})}),e.jsx(K,{path:"/",element:e.jsx(Us,{})}),e.jsx(K,{path:"/index",element:e.jsx(Us,{})}),e.jsx(K,{path:"/doctor",element:e.jsx(fc,{})}),e.jsx(K,{path:"/404",element:e.jsx(qs,{})}),e.jsx(K,{path:"/insurance",element:e.jsx(xc,{})}),e.jsx(K,{path:"/billing",element:e.jsx(gc,{})}),e.jsx(K,{path:"/403",element:e.jsx(vc,{})}),e.jsx(K,{path:"/login",element:e.jsx(yc,{})}),e.jsx(K,{path:"/emergency.html",element:e.jsx(sc,{})}),e.jsx(K,{path:"/contact.html",element:e.jsx(oc,{})}),e.jsx(K,{path:"/register.html",element:e.jsx(lc,{})}),e.jsx(K,{path:"/request-demo.html",element:e.jsx(dc,{})}),e.jsx(K,{path:"/appointment.html",element:e.jsx(cc,{})}),e.jsx(K,{path:"/payment.html",element:e.jsx(pc,{})}),e.jsx(K,{path:"/patient.html",element:e.jsx(uc,{})}),e.jsx(K,{path:"/register-p.html",element:e.jsx(mc,{})}),e.jsx(K,{path:"/register-n.html",element:e.jsx(hc,{})}),e.jsx(K,{path:"/index.html",element:e.jsx(Us,{})}),e.jsx(K,{path:"/doctor.html",element:e.jsx(fc,{})}),e.jsx(K,{path:"/insurance.html",element:e.jsx(xc,{})}),e.jsx(K,{path:"/billing.html",element:e.jsx(gc,{})}),e.jsx(K,{path:"/403.html",element:e.jsx(vc,{})}),e.jsx(K,{path:"/404.html",element:e.jsx(qs,{})}),e.jsx(K,{path:"/login.html",element:e.jsx(yc,{})}),e.jsx(K,{path:"*",element:e.jsx(qs,{})})]})]})}Fu.createRoot(document.getElementById("root")).render(e.jsx(_m,{children:e.jsx(Bh,{})}));
