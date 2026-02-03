(function(){const U=document.createElement("link").relList;if(U&&U.supports&&U.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))m(T);new MutationObserver(T=>{for(const Q of T)if(Q.type==="childList")for(const P of Q.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&m(P)}).observe(document,{childList:!0,subtree:!0});function B(T){const Q={};return T.integrity&&(Q.integrity=T.integrity),T.referrerPolicy&&(Q.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?Q.credentials="include":T.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function m(T){if(T.ep)return;T.ep=!0;const Q=B(T);fetch(T.href,Q)}})();function Dd(z){return z&&z.__esModule&&Object.prototype.hasOwnProperty.call(z,"default")?z.default:z}var sc={exports:{}},On={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function tv(){if(bd)return On;bd=1;var z=Symbol.for("react.transitional.element"),U=Symbol.for("react.fragment");function B(m,T,Q){var P=null;if(Q!==void 0&&(P=""+Q),T.key!==void 0&&(P=""+T.key),"key"in T){Q={};for(var ae in T)ae!=="key"&&(Q[ae]=T[ae])}else Q=T;return T=Q.ref,{$$typeof:z,type:m,key:P,ref:T!==void 0?T:null,props:Q}}return On.Fragment=U,On.jsx=B,On.jsxs=B,On}var Sd;function lv(){return Sd||(Sd=1,sc.exports=tv()),sc.exports}var p=lv(),rc={exports:{}},L={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function nv(){if(Ed)return L;Ed=1;var z=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),P=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),le=Symbol.iterator;function De(r){return r===null||typeof r!="object"?null:(r=le&&r[le]||r["@@iterator"],typeof r=="function"?r:null)}var Qe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qe=Object.assign,pa={};function we(r,E,N){this.props=r,this.context=E,this.refs=pa,this.updater=N||Qe}we.prototype.isReactComponent={},we.prototype.setState=function(r,E){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,E,"setState")},we.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function ha(){}ha.prototype=we.prototype;function Ce(r,E,N){this.props=r,this.context=E,this.refs=pa,this.updater=N||Qe}var ke=Ce.prototype=new ha;ke.constructor=Ce,qe(ke,we.prototype),ke.isPureReactComponent=!0;var ga=Array.isArray;function je(){}var K={H:null,A:null,T:null,S:null},Ue=Object.prototype.hasOwnProperty;function na(r,E,N){var M=N.ref;return{$$typeof:z,type:r,key:E,ref:M!==void 0?M:null,props:N}}function lt(r,E){return na(r.type,E,r.props)}function ye(r){return typeof r=="object"&&r!==null&&r.$$typeof===z}function Be(r){var E={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(N){return E[N]})}var Ba=/\/+/g;function Na(r,E){return typeof r=="object"&&r!==null&&r.key!=null?Be(""+r.key):E.toString(36)}function ua(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(je,je):(r.status="pending",r.then(function(E){r.status==="pending"&&(r.status="fulfilled",r.value=E)},function(E){r.status==="pending"&&(r.status="rejected",r.reason=E)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function y(r,E,N,M,X){var k=typeof r;(k==="undefined"||k==="boolean")&&(r=null);var x=!1;if(r===null)x=!0;else switch(k){case"bigint":case"string":case"number":x=!0;break;case"object":switch(r.$$typeof){case z:case U:x=!0;break;case w:return x=r._init,y(x(r._payload),E,N,M,X)}}if(x)return X=X(r),x=M===""?"."+Na(r,0):M,ga(X)?(N="",x!=null&&(N=x.replace(Ba,"$&/")+"/"),y(X,E,N,"",function(te){return te})):X!=null&&(ye(X)&&(X=lt(X,N+(X.key==null||r&&r.key===X.key?"":(""+X.key).replace(Ba,"$&/")+"/")+x)),E.push(X)),1;x=0;var A=M===""?".":M+":";if(ga(r))for(var Y=0;Y<r.length;Y++)M=r[Y],k=A+Na(M,Y),x+=y(M,E,N,k,X);else if(Y=De(r),typeof Y=="function")for(r=Y.call(r),Y=0;!(M=r.next()).done;)M=M.value,k=A+Na(M,Y++),x+=y(M,E,N,k,X);else if(k==="object"){if(typeof r.then=="function")return y(ua(r),E,N,M,X);throw E=String(r),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return x}function O(r,E,N){if(r==null)return r;var M=[],X=0;return y(r,M,"","",function(k){return E.call(N,k,X++)}),M}function G(r){if(r._status===-1){var E=r._result;E=E(),E.then(function(N){(r._status===0||r._status===-1)&&(r._status=1,r._result=N)},function(N){(r._status===0||r._status===-1)&&(r._status=2,r._result=N)}),r._status===-1&&(r._status=0,r._result=E)}if(r._status===1)return r._result.default;throw r._result}var ie=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},ce={map:O,forEach:function(r,E,N){O(r,function(){E.apply(this,arguments)},N)},count:function(r){var E=0;return O(r,function(){E++}),E},toArray:function(r){return O(r,function(E){return E})||[]},only:function(r){if(!ye(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return L.Activity=H,L.Children=ce,L.Component=we,L.Fragment=B,L.Profiler=T,L.PureComponent=Ce,L.StrictMode=m,L.Suspense=C,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,L.__COMPILER_RUNTIME={__proto__:null,c:function(r){return K.H.useMemoCache(r)}},L.cache=function(r){return function(){return r.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(r,E,N){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var M=qe({},r.props),X=r.key;if(E!=null)for(k in E.key!==void 0&&(X=""+E.key),E)!Ue.call(E,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&E.ref===void 0||(M[k]=E[k]);var k=arguments.length-2;if(k===1)M.children=N;else if(1<k){for(var x=Array(k),A=0;A<k;A++)x[A]=arguments[A+2];M.children=x}return na(r.type,X,M)},L.createContext=function(r){return r={$$typeof:P,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:Q,_context:r},r},L.createElement=function(r,E,N){var M,X={},k=null;if(E!=null)for(M in E.key!==void 0&&(k=""+E.key),E)Ue.call(E,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(X[M]=E[M]);var x=arguments.length-2;if(x===1)X.children=N;else if(1<x){for(var A=Array(x),Y=0;Y<x;Y++)A[Y]=arguments[Y+2];X.children=A}if(r&&r.defaultProps)for(M in x=r.defaultProps,x)X[M]===void 0&&(X[M]=x[M]);return na(r,k,X)},L.createRef=function(){return{current:null}},L.forwardRef=function(r){return{$$typeof:ae,render:r}},L.isValidElement=ye,L.lazy=function(r){return{$$typeof:w,_payload:{_status:-1,_result:r},_init:G}},L.memo=function(r,E){return{$$typeof:q,type:r,compare:E===void 0?null:E}},L.startTransition=function(r){var E=K.T,N={};K.T=N;try{var M=r(),X=K.S;X!==null&&X(N,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(je,ie)}catch(k){ie(k)}finally{E!==null&&N.types!==null&&(E.types=N.types),K.T=E}},L.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},L.use=function(r){return K.H.use(r)},L.useActionState=function(r,E,N){return K.H.useActionState(r,E,N)},L.useCallback=function(r,E){return K.H.useCallback(r,E)},L.useContext=function(r){return K.H.useContext(r)},L.useDebugValue=function(){},L.useDeferredValue=function(r,E){return K.H.useDeferredValue(r,E)},L.useEffect=function(r,E){return K.H.useEffect(r,E)},L.useEffectEvent=function(r){return K.H.useEffectEvent(r)},L.useId=function(){return K.H.useId()},L.useImperativeHandle=function(r,E,N){return K.H.useImperativeHandle(r,E,N)},L.useInsertionEffect=function(r,E){return K.H.useInsertionEffect(r,E)},L.useLayoutEffect=function(r,E){return K.H.useLayoutEffect(r,E)},L.useMemo=function(r,E){return K.H.useMemo(r,E)},L.useOptimistic=function(r,E){return K.H.useOptimistic(r,E)},L.useReducer=function(r,E,N){return K.H.useReducer(r,E,N)},L.useRef=function(r){return K.H.useRef(r)},L.useState=function(r){return K.H.useState(r)},L.useSyncExternalStore=function(r,E,N){return K.H.useSyncExternalStore(r,E,N)},L.useTransition=function(){return K.H.useTransition()},L.version="19.2.4",L}var qd;function gc(){return qd||(qd=1,rc.exports=nv()),rc.exports}var ve=gc();const uv=Dd(ve);var fc={exports:{}},Tn={},dc={exports:{}},mc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function ov(){return zd||(zd=1,(function(z){function U(y,O){var G=y.length;y.push(O);e:for(;0<G;){var ie=G-1>>>1,ce=y[ie];if(0<T(ce,O))y[ie]=O,y[G]=ce,G=ie;else break e}}function B(y){return y.length===0?null:y[0]}function m(y){if(y.length===0)return null;var O=y[0],G=y.pop();if(G!==O){y[0]=G;e:for(var ie=0,ce=y.length,r=ce>>>1;ie<r;){var E=2*(ie+1)-1,N=y[E],M=E+1,X=y[M];if(0>T(N,G))M<ce&&0>T(X,N)?(y[ie]=X,y[M]=G,ie=M):(y[ie]=N,y[E]=G,ie=E);else if(M<ce&&0>T(X,G))y[ie]=X,y[M]=G,ie=M;else break e}}return O}function T(y,O){var G=y.sortIndex-O.sortIndex;return G!==0?G:y.id-O.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Q=performance;z.unstable_now=function(){return Q.now()}}else{var P=Date,ae=P.now();z.unstable_now=function(){return P.now()-ae}}var C=[],q=[],w=1,H=null,le=3,De=!1,Qe=!1,qe=!1,pa=!1,we=typeof setTimeout=="function"?setTimeout:null,ha=typeof clearTimeout=="function"?clearTimeout:null,Ce=typeof setImmediate<"u"?setImmediate:null;function ke(y){for(var O=B(q);O!==null;){if(O.callback===null)m(q);else if(O.startTime<=y)m(q),O.sortIndex=O.expirationTime,U(C,O);else break;O=B(q)}}function ga(y){if(qe=!1,ke(y),!Qe)if(B(C)!==null)Qe=!0,je||(je=!0,Be());else{var O=B(q);O!==null&&ua(ga,O.startTime-y)}}var je=!1,K=-1,Ue=5,na=-1;function lt(){return pa?!0:!(z.unstable_now()-na<Ue)}function ye(){if(pa=!1,je){var y=z.unstable_now();na=y;var O=!0;try{e:{Qe=!1,qe&&(qe=!1,ha(K),K=-1),De=!0;var G=le;try{a:{for(ke(y),H=B(C);H!==null&&!(H.expirationTime>y&&lt());){var ie=H.callback;if(typeof ie=="function"){H.callback=null,le=H.priorityLevel;var ce=ie(H.expirationTime<=y);if(y=z.unstable_now(),typeof ce=="function"){H.callback=ce,ke(y),O=!0;break a}H===B(C)&&m(C),ke(y)}else m(C);H=B(C)}if(H!==null)O=!0;else{var r=B(q);r!==null&&ua(ga,r.startTime-y),O=!1}}break e}finally{H=null,le=G,De=!1}O=void 0}}finally{O?Be():je=!1}}}var Be;if(typeof Ce=="function")Be=function(){Ce(ye)};else if(typeof MessageChannel<"u"){var Ba=new MessageChannel,Na=Ba.port2;Ba.port1.onmessage=ye,Be=function(){Na.postMessage(null)}}else Be=function(){we(ye,0)};function ua(y,O){K=we(function(){y(z.unstable_now())},O)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(y){y.callback=null},z.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<y?Math.floor(1e3/y):5},z.unstable_getCurrentPriorityLevel=function(){return le},z.unstable_next=function(y){switch(le){case 1:case 2:case 3:var O=3;break;default:O=le}var G=le;le=O;try{return y()}finally{le=G}},z.unstable_requestPaint=function(){pa=!0},z.unstable_runWithPriority=function(y,O){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var G=le;le=y;try{return O()}finally{le=G}},z.unstable_scheduleCallback=function(y,O,G){var ie=z.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ie+G:ie):G=ie,y){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=G+ce,y={id:w++,callback:O,priorityLevel:y,startTime:G,expirationTime:ce,sortIndex:-1},G>ie?(y.sortIndex=G,U(q,y),B(C)===null&&y===B(q)&&(qe?(ha(K),K=-1):qe=!0,ua(ga,G-ie))):(y.sortIndex=ce,U(C,y),Qe||De||(Qe=!0,je||(je=!0,Be()))),y},z.unstable_shouldYield=lt,z.unstable_wrapCallback=function(y){var O=le;return function(){var G=le;le=O;try{return y.apply(this,arguments)}finally{le=G}}}})(mc)),mc}var Ad;function iv(){return Ad||(Ad=1,dc.exports=ov()),dc.exports}var _c={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function cv(){if(xd)return Ke;xd=1;var z=gc();function U(C){var q="https://react.dev/errors/"+C;if(1<arguments.length){q+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)q+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+C+"; visit "+q+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function B(){}var m={d:{f:B,r:function(){throw Error(U(522))},D:B,C:B,L:B,m:B,X:B,S:B,M:B},p:0,findDOMNode:null},T=Symbol.for("react.portal");function Q(C,q,w){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:H==null?null:""+H,children:C,containerInfo:q,implementation:w}}var P=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ae(C,q){if(C==="font")return"";if(typeof q=="string")return q==="use-credentials"?q:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,Ke.createPortal=function(C,q){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!q||q.nodeType!==1&&q.nodeType!==9&&q.nodeType!==11)throw Error(U(299));return Q(C,q,null,w)},Ke.flushSync=function(C){var q=P.T,w=m.p;try{if(P.T=null,m.p=2,C)return C()}finally{P.T=q,m.p=w,m.d.f()}},Ke.preconnect=function(C,q){typeof C=="string"&&(q?(q=q.crossOrigin,q=typeof q=="string"?q==="use-credentials"?q:"":void 0):q=null,m.d.C(C,q))},Ke.prefetchDNS=function(C){typeof C=="string"&&m.d.D(C)},Ke.preinit=function(C,q){if(typeof C=="string"&&q&&typeof q.as=="string"){var w=q.as,H=ae(w,q.crossOrigin),le=typeof q.integrity=="string"?q.integrity:void 0,De=typeof q.fetchPriority=="string"?q.fetchPriority:void 0;w==="style"?m.d.S(C,typeof q.precedence=="string"?q.precedence:void 0,{crossOrigin:H,integrity:le,fetchPriority:De}):w==="script"&&m.d.X(C,{crossOrigin:H,integrity:le,fetchPriority:De,nonce:typeof q.nonce=="string"?q.nonce:void 0})}},Ke.preinitModule=function(C,q){if(typeof C=="string")if(typeof q=="object"&&q!==null){if(q.as==null||q.as==="script"){var w=ae(q.as,q.crossOrigin);m.d.M(C,{crossOrigin:w,integrity:typeof q.integrity=="string"?q.integrity:void 0,nonce:typeof q.nonce=="string"?q.nonce:void 0})}}else q==null&&m.d.M(C)},Ke.preload=function(C,q){if(typeof C=="string"&&typeof q=="object"&&q!==null&&typeof q.as=="string"){var w=q.as,H=ae(w,q.crossOrigin);m.d.L(C,w,{crossOrigin:H,integrity:typeof q.integrity=="string"?q.integrity:void 0,nonce:typeof q.nonce=="string"?q.nonce:void 0,type:typeof q.type=="string"?q.type:void 0,fetchPriority:typeof q.fetchPriority=="string"?q.fetchPriority:void 0,referrerPolicy:typeof q.referrerPolicy=="string"?q.referrerPolicy:void 0,imageSrcSet:typeof q.imageSrcSet=="string"?q.imageSrcSet:void 0,imageSizes:typeof q.imageSizes=="string"?q.imageSizes:void 0,media:typeof q.media=="string"?q.media:void 0})}},Ke.preloadModule=function(C,q){if(typeof C=="string")if(q){var w=ae(q.as,q.crossOrigin);m.d.m(C,{as:typeof q.as=="string"&&q.as!=="script"?q.as:void 0,crossOrigin:w,integrity:typeof q.integrity=="string"?q.integrity:void 0})}else m.d.m(C)},Ke.requestFormReset=function(C){m.d.r(C)},Ke.unstable_batchedUpdates=function(C,q){return C(q)},Ke.useFormState=function(C,q,w){return P.H.useFormState(C,q,w)},Ke.useFormStatus=function(){return P.H.useHostTransitionStatus()},Ke.version="19.2.4",Ke}var Od;function sv(){if(Od)return _c.exports;Od=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(U){console.error(U)}}return z(),_c.exports=cv(),_c.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function rv(){if(Td)return Tn;Td=1;var z=iv(),U=gc(),B=sv();function m(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Q(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function P(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function ae(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function C(e){if(Q(e)!==e)throw Error(m(188))}function q(e){var a=e.alternate;if(!a){if(a=Q(e),a===null)throw Error(m(188));return a!==e?null:e}for(var t=e,l=a;;){var n=t.return;if(n===null)break;var u=n.alternate;if(u===null){if(l=n.return,l!==null){t=l;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===t)return C(n),e;if(u===l)return C(n),a;u=u.sibling}throw Error(m(188))}if(t.return!==l.return)t=n,l=u;else{for(var o=!1,i=n.child;i;){if(i===t){o=!0,t=n,l=u;break}if(i===l){o=!0,l=n,t=u;break}i=i.sibling}if(!o){for(i=u.child;i;){if(i===t){o=!0,t=u,l=n;break}if(i===l){o=!0,l=u,t=n;break}i=i.sibling}if(!o)throw Error(m(189))}}if(t.alternate!==l)throw Error(m(190))}if(t.tag!==3)throw Error(m(188));return t.stateNode.current===t?e:a}function w(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=w(e),a!==null)return a;e=e.sibling}return null}var H=Object.assign,le=Symbol.for("react.element"),De=Symbol.for("react.transitional.element"),Qe=Symbol.for("react.portal"),qe=Symbol.for("react.fragment"),pa=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),ha=Symbol.for("react.consumer"),Ce=Symbol.for("react.context"),ke=Symbol.for("react.forward_ref"),ga=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),na=Symbol.for("react.activity"),lt=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var Ba=Symbol.for("react.client.reference");function Na(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ba?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qe:return"Fragment";case we:return"Profiler";case pa:return"StrictMode";case ga:return"Suspense";case je:return"SuspenseList";case na:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Qe:return"Portal";case Ce:return e.displayName||"Context";case ha:return(e._context.displayName||"Context")+".Consumer";case ke:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return a=e.displayName||null,a!==null?a:Na(e.type)||"Memo";case Ue:a=e._payload,e=e._init;try{return Na(e(a))}catch{}}return null}var ua=Array.isArray,y=U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ie=[],ce=-1;function r(e){return{current:e}}function E(e){0>ce||(e.current=ie[ce],ie[ce]=null,ce--)}function N(e,a){ce++,ie[ce]=e.current,e.current=a}var M=r(null),X=r(null),k=r(null),x=r(null);function A(e,a){switch(N(k,a),N(X,e),N(M,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Lf(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Lf(a),e=Zf(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(M),N(M,e)}function Y(){E(M),E(X),E(k)}function te(e){e.memoizedState!==null&&N(x,e);var a=M.current,t=Zf(a,e.type);a!==t&&(N(X,e),N(M,t))}function pe(e){X.current===e&&(E(M),E(X)),x.current===e&&(E(x),qn._currentValue=G)}var ja,Ze;function We(e){if(ja===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);ja=a&&a[1]||"",Ze=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ja+e+Ze}var Cl=!1;function jl(e,a){if(!e||Cl)return"";Cl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(h){var v=h}Reflect.construct(e,[],S)}else{try{S.call()}catch(h){v=h}e.call(S.prototype)}}else{try{throw Error()}catch(h){v=h}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(h){if(h&&v&&typeof h.stack=="string")return[h.stack,v.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),o=u[0],i=u[1];if(o&&i){var c=o.split(`
`),_=i.split(`
`);for(n=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;n<_.length&&!_[n].includes("DetermineComponentFrameRoot");)n++;if(l===c.length||n===_.length)for(l=c.length-1,n=_.length-1;1<=l&&0<=n&&c[l]!==_[n];)n--;for(;1<=l&&0<=n;l--,n--)if(c[l]!==_[n]){if(l!==1||n!==1)do if(l--,n--,0>n||c[l]!==_[n]){var g=`
`+c[l].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=l&&0<=n);break}}}finally{Cl=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?We(t):""}function jd(e,a){switch(e.tag){case 26:case 27:case 5:return We(e.type);case 16:return We("Lazy");case 13:return e.child!==a&&a!==null?We("Suspense Fallback"):We("Suspense");case 19:return We("SuspenseList");case 0:case 15:return jl(e.type,!1);case 11:return jl(e.type.render,!1);case 1:return jl(e.type,!0);case 31:return We("Activity");default:return""}}function yc(e){try{var a="",t=null;do a+=jd(e,t),t=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var wu=Object.prototype.hasOwnProperty,ku=z.unstable_scheduleCallback,$u=z.unstable_cancelCallback,Ud=z.unstable_shouldYield,Rd=z.unstable_requestPaint,oa=z.unstable_now,Hd=z.unstable_getCurrentPriorityLevel,bc=z.unstable_ImmediatePriority,Sc=z.unstable_UserBlockingPriority,Mn=z.unstable_NormalPriority,Qd=z.unstable_LowPriority,Ec=z.unstable_IdlePriority,Bd=z.log,Yd=z.unstable_setDisableYieldValue,Ul=null,ia=null;function nt(e){if(typeof Bd=="function"&&Yd(e),ia&&typeof ia.setStrictMode=="function")try{ia.setStrictMode(Ul,e)}catch{}}var ca=Math.clz32?Math.clz32:Xd,Vd=Math.log,Gd=Math.LN2;function Xd(e){return e>>>=0,e===0?32:31-(Vd(e)/Gd|0)|0}var Dn=256,Cn=262144,jn=4194304;function Nt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Un(e,a,t){var l=e.pendingLanes;if(l===0)return 0;var n=0,u=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var i=l&134217727;return i!==0?(l=i&~u,l!==0?n=Nt(l):(o&=i,o!==0?n=Nt(o):t||(t=i&~e,t!==0&&(n=Nt(t))))):(i=l&~u,i!==0?n=Nt(i):o!==0?n=Nt(o):t||(t=l&~e,t!==0&&(n=Nt(t)))),n===0?0:a!==0&&a!==n&&(a&u)===0&&(u=n&-n,t=a&-a,u>=t||u===32&&(t&4194048)!==0)?a:n}function Rl(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Ld(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qc(){var e=jn;return jn<<=1,(jn&62914560)===0&&(jn=4194304),e}function Wu(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Hl(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zd(e,a,t,l,n,u){var o=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var i=e.entanglements,c=e.expirationTimes,_=e.hiddenUpdates;for(t=o&~t;0<t;){var g=31-ca(t),S=1<<g;i[g]=0,c[g]=-1;var v=_[g];if(v!==null)for(_[g]=null,g=0;g<v.length;g++){var h=v[g];h!==null&&(h.lane&=-536870913)}t&=~S}l!==0&&zc(e,l,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(o&~a))}function zc(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-ca(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Ac(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var l=31-ca(t),n=1<<l;n&a|e[l]&a&&(e[l]|=a),t&=~n}}function xc(e,a){var t=a&-a;return t=(t&42)!==0?1:Fu(t),(t&(e.suspendedLanes|a))!==0?0:t}function Fu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Iu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oc(){var e=O.p;return e!==0?e:(e=window.event,e===void 0?32:md(e.type))}function Tc(e,a){var t=O.p;try{return O.p=e,a()}finally{O.p=t}}var ut=Math.random().toString(36).slice(2),Ye="__reactFiber$"+ut,Fe="__reactProps$"+ut,wt="__reactContainer$"+ut,Pu="__reactEvents$"+ut,Kd="__reactListeners$"+ut,Jd="__reactHandles$"+ut,Nc="__reactResources$"+ut,Ql="__reactMarker$"+ut;function eo(e){delete e[Ye],delete e[Fe],delete e[Pu],delete e[Kd],delete e[Jd]}function kt(e){var a=e[Ye];if(a)return a;for(var t=e.parentNode;t;){if(a=t[wt]||t[Ye]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Ff(e);e!==null;){if(t=e[Ye])return t;e=Ff(e)}return a}e=t,t=e.parentNode}return null}function $t(e){if(e=e[Ye]||e[wt]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Bl(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(m(33))}function Wt(e){var a=e[Nc];return a||(a=e[Nc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Re(e){e[Ql]=!0}var Mc=new Set,Dc={};function Mt(e,a){Ft(e,a),Ft(e+"Capture",a)}function Ft(e,a){for(Dc[e]=a,e=0;e<a.length;e++)Mc.add(a[e])}var wd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cc={},jc={};function kd(e){return wu.call(jc,e)?!0:wu.call(Cc,e)?!1:wd.test(e)?jc[e]=!0:(Cc[e]=!0,!1)}function Rn(e,a,t){if(kd(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function Hn(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Ya(e,a,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+l)}}function ya(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function $d(e,a,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,u=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(o){t=""+o,u.call(this,o)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(o){t=""+o},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function ao(e){if(!e._valueTracker){var a=Uc(e)?"checked":"value";e._valueTracker=$d(e,a,""+e[a])}}function Rc(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return e&&(l=Uc(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1}function Qn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wd=/[\n"\\]/g;function ba(e){return e.replace(Wd,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function to(e,a,t,l,n,u,o,i){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),a!=null?o==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ya(a)):e.value!==""+ya(a)&&(e.value=""+ya(a)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),a!=null?lo(e,o,ya(a)):t!=null?lo(e,o,ya(t)):l!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.name=""+ya(i):e.removeAttribute("name")}function Hc(e,a,t,l,n,u,o,i){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),a!=null||t!=null){if(!(u!=="submit"&&u!=="reset"||a!=null)){ao(e);return}t=t!=null?""+ya(t):"",a=a!=null?""+ya(a):t,i||a===e.value||(e.value=a),e.defaultValue=a}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=i?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),ao(e)}function lo(e,a,t){a==="number"&&Qn(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function It(e,a,t,l){if(e=e.options,a){a={};for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=a.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&l&&(e[t].defaultSelected=!0)}else{for(t=""+ya(t),a=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function Qc(e,a,t){if(a!=null&&(a=""+ya(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+ya(t):""}function Bc(e,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(m(92));if(ua(l)){if(1<l.length)throw Error(m(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=ya(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),ao(e)}function Pt(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Fd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yc(e,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||Fd.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Vc(e,a,t){if(a!=null&&typeof a!="object")throw Error(m(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in a)l=a[n],a.hasOwnProperty(n)&&t[n]!==l&&Yc(e,n,l)}else for(var u in a)a.hasOwnProperty(u)&&Yc(e,u,a[u])}function no(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Id=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bn(e){return Pd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Va(){}var uo=null;function oo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,al=null;function Gc(e){var a=$t(e);if(a&&(e=a.stateNode)){var t=e[Fe]||null;e:switch(e=a.stateNode,a.type){case"input":if(to(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ba(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==e&&l.form===e.form){var n=l[Fe]||null;if(!n)throw Error(m(90));to(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&Rc(l)}break e;case"textarea":Qc(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&It(e,!!t.multiple,a,!1)}}}var io=!1;function Xc(e,a,t){if(io)return e(a,t);io=!0;try{var l=e(a);return l}finally{if(io=!1,(el!==null||al!==null)&&(Au(),el&&(a=el,e=al,al=el=null,Gc(a),e)))for(a=0;a<e.length;a++)Gc(e[a])}}function Yl(e,a){var t=e.stateNode;if(t===null)return null;var l=t[Fe]||null;if(l===null)return null;t=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(m(231,a,typeof t));return t}var Ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),co=!1;if(Ga)try{var Vl={};Object.defineProperty(Vl,"passive",{get:function(){co=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{co=!1}var ot=null,so=null,Yn=null;function Lc(){if(Yn)return Yn;var e,a=so,t=a.length,l,n="value"in ot?ot.value:ot.textContent,u=n.length;for(e=0;e<t&&a[e]===n[e];e++);var o=t-e;for(l=1;l<=o&&a[t-l]===n[u-l];l++);return Yn=n.slice(e,1<l?1-l:void 0)}function Vn(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Gn(){return!0}function Zc(){return!1}function Ie(e){function a(t,l,n,u,o){this._reactName=t,this._targetInst=n,this.type=l,this.nativeEvent=u,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(u):u[i]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Gn:Zc,this.isPropagationStopped=Zc,this}return H(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Gn)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Gn)},persist:function(){},isPersistent:Gn}),a}var Dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xn=Ie(Dt),Gl=H({},Dt,{view:0,detail:0}),em=Ie(Gl),ro,fo,Xl,Ln=H({},Gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_o,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xl&&(Xl&&e.type==="mousemove"?(ro=e.screenX-Xl.screenX,fo=e.screenY-Xl.screenY):fo=ro=0,Xl=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:fo}}),Kc=Ie(Ln),am=H({},Ln,{dataTransfer:0}),tm=Ie(am),lm=H({},Gl,{relatedTarget:0}),mo=Ie(lm),nm=H({},Dt,{animationName:0,elapsedTime:0,pseudoElement:0}),um=Ie(nm),om=H({},Dt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),im=Ie(om),cm=H({},Dt,{data:0}),Jc=Ie(cm),sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=fm[e])?!!a[e]:!1}function _o(){return dm}var mm=H({},Gl,{key:function(e){if(e.key){var a=sm[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Vn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_o,charCode:function(e){return e.type==="keypress"?Vn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_m=Ie(mm),vm=H({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=Ie(vm),pm=H({},Gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_o}),hm=Ie(pm),gm=H({},Dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),ym=Ie(gm),bm=H({},Ln,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sm=Ie(bm),Em=H({},Dt,{newState:0,oldState:0}),qm=Ie(Em),zm=[9,13,27,32],vo=Ga&&"CompositionEvent"in window,Ll=null;Ga&&"documentMode"in document&&(Ll=document.documentMode);var Am=Ga&&"TextEvent"in window&&!Ll,kc=Ga&&(!vo||Ll&&8<Ll&&11>=Ll),$c=" ",Wc=!1;function Fc(e,a){switch(e){case"keyup":return zm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ic(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tl=!1;function xm(e,a){switch(e){case"compositionend":return Ic(a);case"keypress":return a.which!==32?null:(Wc=!0,$c);case"textInput":return e=a.data,e===$c&&Wc?null:e;default:return null}}function Om(e,a){if(tl)return e==="compositionend"||!vo&&Fc(e,a)?(e=Lc(),Yn=so=ot=null,tl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return kc&&a.locale!=="ko"?null:a.data;default:return null}}var Tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Tm[e.type]:a==="textarea"}function es(e,a,t,l){el?al?al.push(l):al=[l]:el=l,a=Cu(a,"onChange"),0<a.length&&(t=new Xn("onChange","change",null,t,l),e.push({event:t,listeners:a}))}var Zl=null,Kl=null;function Nm(e){Qf(e,0)}function Zn(e){var a=Bl(e);if(Rc(a))return e}function as(e,a){if(e==="change")return a}var ts=!1;if(Ga){var po;if(Ga){var ho="oninput"in document;if(!ho){var ls=document.createElement("div");ls.setAttribute("oninput","return;"),ho=typeof ls.oninput=="function"}po=ho}else po=!1;ts=po&&(!document.documentMode||9<document.documentMode)}function ns(){Zl&&(Zl.detachEvent("onpropertychange",us),Kl=Zl=null)}function us(e){if(e.propertyName==="value"&&Zn(Kl)){var a=[];es(a,Kl,e,oo(e)),Xc(Nm,a)}}function Mm(e,a,t){e==="focusin"?(ns(),Zl=a,Kl=t,Zl.attachEvent("onpropertychange",us)):e==="focusout"&&ns()}function Dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zn(Kl)}function Cm(e,a){if(e==="click")return Zn(a)}function jm(e,a){if(e==="input"||e==="change")return Zn(a)}function Um(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var sa=typeof Object.is=="function"?Object.is:Um;function Jl(e,a){if(sa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var n=t[l];if(!wu.call(a,n)||!sa(e[n],a[n]))return!1}return!0}function os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function is(e,a){var t=os(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=a&&l>=a)return{node:t,offset:a-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=os(t)}}function cs(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?cs(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function ss(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Qn(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Qn(e.document)}return a}function go(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Rm=Ga&&"documentMode"in document&&11>=document.documentMode,ll=null,yo=null,wl=null,bo=!1;function rs(e,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bo||ll==null||ll!==Qn(l)||(l=ll,"selectionStart"in l&&go(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),wl&&Jl(wl,l)||(wl=l,l=Cu(yo,"onSelect"),0<l.length&&(a=new Xn("onSelect","select",null,a,t),e.push({event:a,listeners:l}),a.target=ll)))}function Ct(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var nl={animationend:Ct("Animation","AnimationEnd"),animationiteration:Ct("Animation","AnimationIteration"),animationstart:Ct("Animation","AnimationStart"),transitionrun:Ct("Transition","TransitionRun"),transitionstart:Ct("Transition","TransitionStart"),transitioncancel:Ct("Transition","TransitionCancel"),transitionend:Ct("Transition","TransitionEnd")},So={},fs={};Ga&&(fs=document.createElement("div").style,"AnimationEvent"in window||(delete nl.animationend.animation,delete nl.animationiteration.animation,delete nl.animationstart.animation),"TransitionEvent"in window||delete nl.transitionend.transition);function jt(e){if(So[e])return So[e];if(!nl[e])return e;var a=nl[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in fs)return So[e]=a[t];return e}var ds=jt("animationend"),ms=jt("animationiteration"),_s=jt("animationstart"),Hm=jt("transitionrun"),Qm=jt("transitionstart"),Bm=jt("transitioncancel"),vs=jt("transitionend"),ps=new Map,Eo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eo.push("scrollEnd");function Ma(e,a){ps.set(e,a),Mt(a,[e])}var Kn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Sa=[],ul=0,qo=0;function Jn(){for(var e=ul,a=qo=ul=0;a<e;){var t=Sa[a];Sa[a++]=null;var l=Sa[a];Sa[a++]=null;var n=Sa[a];Sa[a++]=null;var u=Sa[a];if(Sa[a++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}u!==0&&hs(t,n,u)}}function wn(e,a,t,l){Sa[ul++]=e,Sa[ul++]=a,Sa[ul++]=t,Sa[ul++]=l,qo|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function zo(e,a,t,l){return wn(e,a,t,l),kn(e)}function Ut(e,a){return wn(e,null,null,a),kn(e)}function hs(e,a,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var n=!1,u=e.return;u!==null;)u.childLanes|=t,l=u.alternate,l!==null&&(l.childLanes|=t),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&a!==null&&(n=31-ca(t),e=u.hiddenUpdates,l=e[n],l===null?e[n]=[a]:l.push(a),a.lane=t|536870912),u):null}function kn(e){if(50<pn)throw pn=0,ji=null,Error(m(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var ol={};function Ym(e,a,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ra(e,a,t,l){return new Ym(e,a,t,l)}function Ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xa(e,a){var t=e.alternate;return t===null?(t=ra(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function gs(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function $n(e,a,t,l,n,u){var o=0;if(l=e,typeof e=="function")Ao(e)&&(o=1);else if(typeof e=="string")o=Z_(e,t,M.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case na:return e=ra(31,t,a,n),e.elementType=na,e.lanes=u,e;case qe:return Rt(t.children,n,u,a);case pa:o=8,n|=24;break;case we:return e=ra(12,t,a,n|2),e.elementType=we,e.lanes=u,e;case ga:return e=ra(13,t,a,n),e.elementType=ga,e.lanes=u,e;case je:return e=ra(19,t,a,n),e.elementType=je,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:o=10;break e;case ha:o=9;break e;case ke:o=11;break e;case K:o=14;break e;case Ue:o=16,l=null;break e}o=29,t=Error(m(130,e===null?"null":typeof e,"")),l=null}return a=ra(o,t,a,n),a.elementType=e,a.type=l,a.lanes=u,a}function Rt(e,a,t,l){return e=ra(7,e,l,a),e.lanes=t,e}function xo(e,a,t){return e=ra(6,e,null,a),e.lanes=t,e}function ys(e){var a=ra(18,null,null,0);return a.stateNode=e,a}function Oo(e,a,t){return a=ra(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var bs=new WeakMap;function Ea(e,a){if(typeof e=="object"&&e!==null){var t=bs.get(e);return t!==void 0?t:(a={value:e,source:a,stack:yc(a)},bs.set(e,a),a)}return{value:e,source:a,stack:yc(a)}}var il=[],cl=0,Wn=null,kl=0,qa=[],za=0,it=null,Ua=1,Ra="";function La(e,a){il[cl++]=kl,il[cl++]=Wn,Wn=e,kl=a}function Ss(e,a,t){qa[za++]=Ua,qa[za++]=Ra,qa[za++]=it,it=e;var l=Ua;e=Ra;var n=32-ca(l)-1;l&=~(1<<n),t+=1;var u=32-ca(a)+n;if(30<u){var o=n-n%5;u=(l&(1<<o)-1).toString(32),l>>=o,n-=o,Ua=1<<32-ca(a)+n|t<<n|l,Ra=u+e}else Ua=1<<u|t<<n|l,Ra=e}function To(e){e.return!==null&&(La(e,1),Ss(e,1,0))}function No(e){for(;e===Wn;)Wn=il[--cl],il[cl]=null,kl=il[--cl],il[cl]=null;for(;e===it;)it=qa[--za],qa[za]=null,Ra=qa[--za],qa[za]=null,Ua=qa[--za],qa[za]=null}function Es(e,a){qa[za++]=Ua,qa[za++]=Ra,qa[za++]=it,Ua=a.id,Ra=a.overflow,it=e}var Ve=null,he=null,ee=!1,ct=null,Aa=!1,Mo=Error(m(519));function st(e){var a=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $l(Ea(a,e)),Mo}function qs(e){var a=e.stateNode,t=e.type,l=e.memoizedProps;switch(a[Ye]=e,a[Fe]=l,t){case"dialog":W("cancel",a),W("close",a);break;case"iframe":case"object":case"embed":W("load",a);break;case"video":case"audio":for(t=0;t<gn.length;t++)W(gn[t],a);break;case"source":W("error",a);break;case"img":case"image":case"link":W("error",a),W("load",a);break;case"details":W("toggle",a);break;case"input":W("invalid",a),Hc(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":W("invalid",a);break;case"textarea":W("invalid",a),Bc(a,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||Gf(a.textContent,t)?(l.popover!=null&&(W("beforetoggle",a),W("toggle",a)),l.onScroll!=null&&W("scroll",a),l.onScrollEnd!=null&&W("scrollend",a),l.onClick!=null&&(a.onclick=Va),a=!0):a=!1,a||st(e,!0)}function zs(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:Aa=!1;return;case 27:case 3:Aa=!0;return;default:Ve=Ve.return}}function sl(e){if(e!==Ve)return!1;if(!ee)return zs(e),ee=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||ki(e.type,e.memoizedProps)),t=!t),t&&he&&st(e),zs(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));he=Wf(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));he=Wf(e)}else a===27?(a=he,qt(e.type)?(e=Pi,Pi=null,he=e):he=a):he=Ve?Oa(e.stateNode.nextSibling):null;return!0}function Ht(){he=Ve=null,ee=!1}function Do(){var e=ct;return e!==null&&(ta===null?ta=e:ta.push.apply(ta,e),ct=null),e}function $l(e){ct===null?ct=[e]:ct.push(e)}var Co=r(null),Qt=null,Za=null;function rt(e,a,t){N(Co,a._currentValue),a._currentValue=t}function Ka(e){e._currentValue=Co.current,E(Co)}function jo(e,a,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;e=e.return}}function Uo(e,a,t,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var o=n.child;u=u.firstContext;e:for(;u!==null;){var i=u;u=n;for(var c=0;c<a.length;c++)if(i.context===a[c]){u.lanes|=t,i=u.alternate,i!==null&&(i.lanes|=t),jo(u.return,t,e),l||(o=null);break e}u=i.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(m(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),jo(o,t,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function rl(e,a,t,l){e=null;for(var n=a,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(m(387));if(o=o.memoizedProps,o!==null){var i=n.type;sa(n.pendingProps.value,o.value)||(e!==null?e.push(i):e=[i])}}else if(n===x.current){if(o=n.alternate,o===null)throw Error(m(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(qn):e=[qn])}n=n.return}e!==null&&Uo(a,e,t,l),a.flags|=262144}function Fn(e){for(e=e.firstContext;e!==null;){if(!sa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Bt(e){Qt=e,Za=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return As(Qt,e)}function In(e,a){return Qt===null&&Bt(e),As(e,a)}function As(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Za===null){if(e===null)throw Error(m(308));Za=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Za=Za.next=a;return t}var Vm=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Gm=z.unstable_scheduleCallback,Xm=z.unstable_NormalPriority,xe={$$typeof:Ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ro(){return{controller:new Vm,data:new Map,refCount:0}}function Wl(e){e.refCount--,e.refCount===0&&Gm(Xm,function(){e.controller.abort()})}var Fl=null,Ho=0,fl=0,dl=null;function Lm(e,a){if(Fl===null){var t=Fl=[];Ho=0,fl=Yi(),dl={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Ho++,a.then(xs,xs),a}function xs(){if(--Ho===0&&Fl!==null){dl!==null&&(dl.status="fulfilled");var e=Fl;Fl=null,fl=0,dl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Zm(e,a){var t=[],l={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var n=0;n<t.length;n++)(0,t[n])(a)},function(n){for(l.status="rejected",l.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),l}var Os=y.S;y.S=function(e,a){ff=oa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Lm(e,a),Os!==null&&Os(e,a)};var Yt=r(null);function Qo(){var e=Yt.current;return e!==null?e:_e.pooledCache}function Pn(e,a){a===null?N(Yt,Yt.current):N(Yt,a.pool)}function Ts(){var e=Qo();return e===null?null:{parent:xe._currentValue,pool:e}}var ml=Error(m(460)),Bo=Error(m(474)),eu=Error(m(542)),au={then:function(){}};function Ns(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ms(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Va,Va),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Cs(e),e;default:if(typeof a.status=="string")a.then(Va,Va);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=l}},function(l){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Cs(e),e}throw Gt=a,ml}}function Vt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Gt=t,ml):t}}var Gt=null;function Ds(){if(Gt===null)throw Error(m(459));var e=Gt;return Gt=null,e}function Cs(e){if(e===ml||e===eu)throw Error(m(483))}var _l=null,Il=0;function tu(e){var a=Il;return Il+=1,_l===null&&(_l=[]),Ms(_l,e,a)}function Pl(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function lu(e,a){throw a.$$typeof===le?Error(m(525)):(e=Object.prototype.toString.call(a),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function js(e){function a(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function t(f,s){if(!e)return null;for(;s!==null;)a(f,s),s=s.sibling;return null}function l(f){for(var s=new Map;f!==null;)f.key!==null?s.set(f.key,f):s.set(f.index,f),f=f.sibling;return s}function n(f,s){return f=Xa(f,s),f.index=0,f.sibling=null,f}function u(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=67108866,s):d):(f.flags|=67108866,s)):(f.flags|=1048576,s)}function o(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function i(f,s,d,b){return s===null||s.tag!==6?(s=xo(d,f.mode,b),s.return=f,s):(s=n(s,d),s.return=f,s)}function c(f,s,d,b){var R=d.type;return R===qe?g(f,s,d.props.children,b,d.key):s!==null&&(s.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ue&&Vt(R)===s.type)?(s=n(s,d.props),Pl(s,d),s.return=f,s):(s=$n(d.type,d.key,d.props,null,f.mode,b),Pl(s,d),s.return=f,s)}function _(f,s,d,b){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Oo(d,f.mode,b),s.return=f,s):(s=n(s,d.children||[]),s.return=f,s)}function g(f,s,d,b,R){return s===null||s.tag!==7?(s=Rt(d,f.mode,b,R),s.return=f,s):(s=n(s,d),s.return=f,s)}function S(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=xo(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case De:return d=$n(s.type,s.key,s.props,null,f.mode,d),Pl(d,s),d.return=f,d;case Qe:return s=Oo(s,f.mode,d),s.return=f,s;case Ue:return s=Vt(s),S(f,s,d)}if(ua(s)||Be(s))return s=Rt(s,f.mode,d,null),s.return=f,s;if(typeof s.then=="function")return S(f,tu(s),d);if(s.$$typeof===Ce)return S(f,In(f,s),d);lu(f,s)}return null}function v(f,s,d,b){var R=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return R!==null?null:i(f,s,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case De:return d.key===R?c(f,s,d,b):null;case Qe:return d.key===R?_(f,s,d,b):null;case Ue:return d=Vt(d),v(f,s,d,b)}if(ua(d)||Be(d))return R!==null?null:g(f,s,d,b,null);if(typeof d.then=="function")return v(f,s,tu(d),b);if(d.$$typeof===Ce)return v(f,s,In(f,d),b);lu(f,d)}return null}function h(f,s,d,b,R){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return f=f.get(d)||null,i(s,f,""+b,R);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case De:return f=f.get(b.key===null?d:b.key)||null,c(s,f,b,R);case Qe:return f=f.get(b.key===null?d:b.key)||null,_(s,f,b,R);case Ue:return b=Vt(b),h(f,s,d,b,R)}if(ua(b)||Be(b))return f=f.get(d)||null,g(s,f,b,R,null);if(typeof b.then=="function")return h(f,s,d,tu(b),R);if(b.$$typeof===Ce)return h(f,s,d,In(s,b),R);lu(s,b)}return null}function D(f,s,d,b){for(var R=null,ne=null,j=s,J=s=0,I=null;j!==null&&J<d.length;J++){j.index>J?(I=j,j=null):I=j.sibling;var ue=v(f,j,d[J],b);if(ue===null){j===null&&(j=I);break}e&&j&&ue.alternate===null&&a(f,j),s=u(ue,s,J),ne===null?R=ue:ne.sibling=ue,ne=ue,j=I}if(J===d.length)return t(f,j),ee&&La(f,J),R;if(j===null){for(;J<d.length;J++)j=S(f,d[J],b),j!==null&&(s=u(j,s,J),ne===null?R=j:ne.sibling=j,ne=j);return ee&&La(f,J),R}for(j=l(j);J<d.length;J++)I=h(j,f,J,d[J],b),I!==null&&(e&&I.alternate!==null&&j.delete(I.key===null?J:I.key),s=u(I,s,J),ne===null?R=I:ne.sibling=I,ne=I);return e&&j.forEach(function(Tt){return a(f,Tt)}),ee&&La(f,J),R}function V(f,s,d,b){if(d==null)throw Error(m(151));for(var R=null,ne=null,j=s,J=s=0,I=null,ue=d.next();j!==null&&!ue.done;J++,ue=d.next()){j.index>J?(I=j,j=null):I=j.sibling;var Tt=v(f,j,ue.value,b);if(Tt===null){j===null&&(j=I);break}e&&j&&Tt.alternate===null&&a(f,j),s=u(Tt,s,J),ne===null?R=Tt:ne.sibling=Tt,ne=Tt,j=I}if(ue.done)return t(f,j),ee&&La(f,J),R;if(j===null){for(;!ue.done;J++,ue=d.next())ue=S(f,ue.value,b),ue!==null&&(s=u(ue,s,J),ne===null?R=ue:ne.sibling=ue,ne=ue);return ee&&La(f,J),R}for(j=l(j);!ue.done;J++,ue=d.next())ue=h(j,f,J,ue.value,b),ue!==null&&(e&&ue.alternate!==null&&j.delete(ue.key===null?J:ue.key),s=u(ue,s,J),ne===null?R=ue:ne.sibling=ue,ne=ue);return e&&j.forEach(function(av){return a(f,av)}),ee&&La(f,J),R}function me(f,s,d,b){if(typeof d=="object"&&d!==null&&d.type===qe&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case De:e:{for(var R=d.key;s!==null;){if(s.key===R){if(R=d.type,R===qe){if(s.tag===7){t(f,s.sibling),b=n(s,d.props.children),b.return=f,f=b;break e}}else if(s.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ue&&Vt(R)===s.type){t(f,s.sibling),b=n(s,d.props),Pl(b,d),b.return=f,f=b;break e}t(f,s);break}else a(f,s);s=s.sibling}d.type===qe?(b=Rt(d.props.children,f.mode,b,d.key),b.return=f,f=b):(b=$n(d.type,d.key,d.props,null,f.mode,b),Pl(b,d),b.return=f,f=b)}return o(f);case Qe:e:{for(R=d.key;s!==null;){if(s.key===R)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){t(f,s.sibling),b=n(s,d.children||[]),b.return=f,f=b;break e}else{t(f,s);break}else a(f,s);s=s.sibling}b=Oo(d,f.mode,b),b.return=f,f=b}return o(f);case Ue:return d=Vt(d),me(f,s,d,b)}if(ua(d))return D(f,s,d,b);if(Be(d)){if(R=Be(d),typeof R!="function")throw Error(m(150));return d=R.call(d),V(f,s,d,b)}if(typeof d.then=="function")return me(f,s,tu(d),b);if(d.$$typeof===Ce)return me(f,s,In(f,d),b);lu(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,s!==null&&s.tag===6?(t(f,s.sibling),b=n(s,d),b.return=f,f=b):(t(f,s),b=xo(d,f.mode,b),b.return=f,f=b),o(f)):t(f,s)}return function(f,s,d,b){try{Il=0;var R=me(f,s,d,b);return _l=null,R}catch(j){if(j===ml||j===eu)throw j;var ne=ra(29,j,null,f.mode);return ne.lanes=b,ne.return=f,ne}finally{}}}var Xt=js(!0),Us=js(!1),ft=!1;function Yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vo(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function dt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function mt(e,a,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(oe&2)!==0){var n=l.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),l.pending=a,a=kn(e),hs(e,null,t),a}return wn(e,l,a,t),kn(e)}function en(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Ac(e,t)}}function Go(e,a){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var n=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var o={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};u===null?n=u=o:u=u.next=o,t=t.next}while(t!==null);u===null?n=u=a:u=u.next=a}else n=u=a;t={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Xo=!1;function an(){if(Xo){var e=dl;if(e!==null)throw e}}function tn(e,a,t,l){Xo=!1;var n=e.updateQueue;ft=!1;var u=n.firstBaseUpdate,o=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var c=i,_=c.next;c.next=null,o===null?u=_:o.next=_,o=c;var g=e.alternate;g!==null&&(g=g.updateQueue,i=g.lastBaseUpdate,i!==o&&(i===null?g.firstBaseUpdate=_:i.next=_,g.lastBaseUpdate=c))}if(u!==null){var S=n.baseState;o=0,g=_=c=null,i=u;do{var v=i.lane&-536870913,h=v!==i.lane;if(h?(F&v)===v:(l&v)===v){v!==0&&v===fl&&(Xo=!0),g!==null&&(g=g.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var D=e,V=i;v=a;var me=t;switch(V.tag){case 1:if(D=V.payload,typeof D=="function"){S=D.call(me,S,v);break e}S=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=V.payload,v=typeof D=="function"?D.call(me,S,v):D,v==null)break e;S=H({},S,v);break e;case 2:ft=!0}}v=i.callback,v!==null&&(e.flags|=64,h&&(e.flags|=8192),h=n.callbacks,h===null?n.callbacks=[v]:h.push(v))}else h={lane:v,tag:i.tag,payload:i.payload,callback:i.callback,next:null},g===null?(_=g=h,c=S):g=g.next=h,o|=v;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;h=i,i=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);g===null&&(c=S),n.baseState=c,n.firstBaseUpdate=_,n.lastBaseUpdate=g,u===null&&(n.shared.lanes=0),gt|=o,e.lanes=o,e.memoizedState=S}}function Rs(e,a){if(typeof e!="function")throw Error(m(191,e));e.call(a)}function Hs(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Rs(t[e],a)}var vl=r(null),nu=r(0);function Qs(e,a){e=et,N(nu,e),N(vl,a),et=e|a.baseLanes}function Lo(){N(nu,et),N(vl,vl.current)}function Zo(){et=nu.current,E(vl),E(nu)}var fa=r(null),xa=null;function _t(e){var a=e.alternate;N(ze,ze.current&1),N(fa,e),xa===null&&(a===null||vl.current!==null||a.memoizedState!==null)&&(xa=e)}function Ko(e){N(ze,ze.current),N(fa,e),xa===null&&(xa=e)}function Bs(e){e.tag===22?(N(ze,ze.current),N(fa,e),xa===null&&(xa=e)):vt()}function vt(){N(ze,ze.current),N(fa,fa.current)}function da(e){E(fa),xa===e&&(xa=null),E(ze)}var ze=r(0);function uu(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Fi(t)||Ii(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ja=0,Z=null,fe=null,Oe=null,ou=!1,pl=!1,Lt=!1,iu=0,ln=0,hl=null,Km=0;function Se(){throw Error(m(321))}function Jo(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!sa(e[t],a[t]))return!1;return!0}function wo(e,a,t,l,n,u){return Ja=u,Z=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,y.H=e===null||e.memoizedState===null?Sr:ci,Lt=!1,u=t(l,n),Lt=!1,pl&&(u=Vs(a,t,l,n)),Ys(e),u}function Ys(e){y.H=on;var a=fe!==null&&fe.next!==null;if(Ja=0,Oe=fe=Z=null,ou=!1,ln=0,hl=null,a)throw Error(m(300));e===null||Te||(e=e.dependencies,e!==null&&Fn(e)&&(Te=!0))}function Vs(e,a,t,l){Z=e;var n=0;do{if(pl&&(hl=null),ln=0,pl=!1,25<=n)throw Error(m(301));if(n+=1,Oe=fe=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}y.H=Er,u=a(t,l)}while(pl);return u}function Jm(){var e=y.H,a=e.useState()[0];return a=typeof a.then=="function"?nn(a):a,e=e.useState()[0],(fe!==null?fe.memoizedState:null)!==e&&(Z.flags|=1024),a}function ko(){var e=iu!==0;return iu=0,e}function $o(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Wo(e){if(ou){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}ou=!1}Ja=0,Oe=fe=Z=null,pl=!1,ln=iu=0,hl=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Z.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Ae(){if(fe===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var a=Oe===null?Z.memoizedState:Oe.next;if(a!==null)Oe=a,fe=e;else{if(e===null)throw Z.alternate===null?Error(m(467)):Error(m(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},Oe===null?Z.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nn(e){var a=ln;return ln+=1,hl===null&&(hl=[]),e=Ms(hl,e,a),a=Z,(Oe===null?a.memoizedState:Oe.next)===null&&(a=a.alternate,y.H=a===null||a.memoizedState===null?Sr:ci),e}function su(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return nn(e);if(e.$$typeof===Ce)return Ge(e)}throw Error(m(438,String(e)))}function Fo(e){var a=null,t=Z.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=Z.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=cu(),Z.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=lt;return a.index++,t}function wa(e,a){return typeof a=="function"?a(e):a}function ru(e){var a=Ae();return Io(a,fe,e)}function Io(e,a,t){var l=e.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=t;var n=e.baseQueue,u=l.pending;if(u!==null){if(n!==null){var o=n.next;n.next=u.next,u.next=o}a.baseQueue=n=u,l.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{a=n.next;var i=o=null,c=null,_=a,g=!1;do{var S=_.lane&-536870913;if(S!==_.lane?(F&S)===S:(Ja&S)===S){var v=_.revertLane;if(v===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),S===fl&&(g=!0);else if((Ja&v)===v){_=_.next,v===fl&&(g=!0);continue}else S={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},c===null?(i=c=S,o=u):c=c.next=S,Z.lanes|=v,gt|=v;S=_.action,Lt&&t(u,S),u=_.hasEagerState?_.eagerState:t(u,S)}else v={lane:S,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},c===null?(i=c=v,o=u):c=c.next=v,Z.lanes|=S,gt|=S;_=_.next}while(_!==null&&_!==a);if(c===null?o=u:c.next=i,!sa(u,e.memoizedState)&&(Te=!0,g&&(t=dl,t!==null)))throw t;e.memoizedState=u,e.baseState=o,e.baseQueue=c,l.lastRenderedState=u}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Po(e){var a=Ae(),t=a.queue;if(t===null)throw Error(m(311));t.lastRenderedReducer=e;var l=t.dispatch,n=t.pending,u=a.memoizedState;if(n!==null){t.pending=null;var o=n=n.next;do u=e(u,o.action),o=o.next;while(o!==n);sa(u,a.memoizedState)||(Te=!0),a.memoizedState=u,a.baseQueue===null&&(a.baseState=u),t.lastRenderedState=u}return[u,l]}function Gs(e,a,t){var l=Z,n=Ae(),u=ee;if(u){if(t===void 0)throw Error(m(407));t=t()}else t=a();var o=!sa((fe||n).memoizedState,t);if(o&&(n.memoizedState=t,Te=!0),n=n.queue,ti(Zs.bind(null,l,n,e),[e]),n.getSnapshot!==a||o||Oe!==null&&Oe.memoizedState.tag&1){if(l.flags|=2048,gl(9,{destroy:void 0},Ls.bind(null,l,n,t,a),null),_e===null)throw Error(m(349));u||(Ja&127)!==0||Xs(l,a,t)}return t}function Xs(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=Z.updateQueue,a===null?(a=cu(),Z.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Ls(e,a,t,l){a.value=t,a.getSnapshot=l,Ks(a)&&Js(e)}function Zs(e,a,t){return t(function(){Ks(a)&&Js(e)})}function Ks(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!sa(e,t)}catch{return!0}}function Js(e){var a=Ut(e,2);a!==null&&la(a,e,2)}function ei(e){var a=$e();if(typeof e=="function"){var t=e;if(e=t(),Lt){nt(!0);try{t()}finally{nt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},a}function ws(e,a,t,l){return e.baseState=t,Io(e,fe,typeof l=="function"?l:wa)}function wm(e,a,t,l,n){if(mu(e))throw Error(m(485));if(e=a.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){u.listeners.push(o)}};y.T!==null?t(!0):u.isTransition=!1,l(u),t=a.pending,t===null?(u.next=a.pending=u,ks(a,u)):(u.next=t.next,a.pending=t.next=u)}}function ks(e,a){var t=a.action,l=a.payload,n=e.state;if(a.isTransition){var u=y.T,o={};y.T=o;try{var i=t(n,l),c=y.S;c!==null&&c(o,i),$s(e,a,i)}catch(_){ai(e,a,_)}finally{u!==null&&o.types!==null&&(u.types=o.types),y.T=u}}else try{u=t(n,l),$s(e,a,u)}catch(_){ai(e,a,_)}}function $s(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Ws(e,a,l)},function(l){return ai(e,a,l)}):Ws(e,a,t)}function Ws(e,a,t){a.status="fulfilled",a.value=t,Fs(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,ks(e,t)))}function ai(e,a,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,Fs(a),a=a.next;while(a!==l)}e.action=null}function Fs(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Is(e,a){return a}function Ps(e,a){if(ee){var t=_e.formState;if(t!==null){e:{var l=Z;if(ee){if(he){a:{for(var n=he,u=Aa;n.nodeType!==8;){if(!u){n=null;break a}if(n=Oa(n.nextSibling),n===null){n=null;break a}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){he=Oa(n.nextSibling),l=n.data==="F!";break e}}st(l)}l=!1}l&&(a=t[0])}}return t=$e(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:a},t.queue=l,t=gr.bind(null,Z,l),l.dispatch=t,l=ei(!1),u=ii.bind(null,Z,!1,l.queue),l=$e(),n={state:a,dispatch:null,action:e,pending:null},l.queue=n,t=wm.bind(null,Z,n,u,t),n.dispatch=t,l.memoizedState=e,[a,t,!1]}function er(e){var a=Ae();return ar(a,fe,e)}function ar(e,a,t){if(a=Io(e,a,Is)[0],e=ru(wa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=nn(a)}catch(o){throw o===ml?eu:o}else l=a;a=Ae();var n=a.queue,u=n.dispatch;return t!==a.memoizedState&&(Z.flags|=2048,gl(9,{destroy:void 0},km.bind(null,n,t),null)),[l,u,e]}function km(e,a){e.action=a}function tr(e){var a=Ae(),t=fe;if(t!==null)return ar(a,t,e);Ae(),a=a.memoizedState,t=Ae();var l=t.queue.dispatch;return t.memoizedState=e,[a,l,!1]}function gl(e,a,t,l){return e={tag:e,create:t,deps:l,inst:a,next:null},a=Z.updateQueue,a===null&&(a=cu(),Z.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e}function lr(){return Ae().memoizedState}function fu(e,a,t,l){var n=$e();Z.flags|=e,n.memoizedState=gl(1|a,{destroy:void 0},t,l===void 0?null:l)}function du(e,a,t,l){var n=Ae();l=l===void 0?null:l;var u=n.memoizedState.inst;fe!==null&&l!==null&&Jo(l,fe.memoizedState.deps)?n.memoizedState=gl(a,u,t,l):(Z.flags|=e,n.memoizedState=gl(1|a,u,t,l))}function nr(e,a){fu(8390656,8,e,a)}function ti(e,a){du(2048,8,e,a)}function $m(e){Z.flags|=4;var a=Z.updateQueue;if(a===null)a=cu(),Z.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function ur(e){var a=Ae().memoizedState;return $m({ref:a,nextImpl:e}),function(){if((oe&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}function or(e,a){return du(4,2,e,a)}function ir(e,a){return du(4,4,e,a)}function cr(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function sr(e,a,t){t=t!=null?t.concat([e]):null,du(4,4,cr.bind(null,a,e),t)}function li(){}function rr(e,a){var t=Ae();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&Jo(a,l[1])?l[0]:(t.memoizedState=[e,a],e)}function fr(e,a){var t=Ae();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&Jo(a,l[1]))return l[0];if(l=e(),Lt){nt(!0);try{e()}finally{nt(!1)}}return t.memoizedState=[l,a],l}function ni(e,a,t){return t===void 0||(Ja&1073741824)!==0&&(F&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=mf(),Z.lanes|=e,gt|=e,t)}function dr(e,a,t,l){return sa(t,a)?t:vl.current!==null?(e=ni(e,t,l),sa(e,a)||(Te=!0),e):(Ja&42)===0||(Ja&1073741824)!==0&&(F&261930)===0?(Te=!0,e.memoizedState=t):(e=mf(),Z.lanes|=e,gt|=e,a)}function mr(e,a,t,l,n){var u=O.p;O.p=u!==0&&8>u?u:8;var o=y.T,i={};y.T=i,ii(e,!1,a,t);try{var c=n(),_=y.S;if(_!==null&&_(i,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var g=Zm(c,l);un(e,a,g,va(e))}else un(e,a,l,va(e))}catch(S){un(e,a,{then:function(){},status:"rejected",reason:S},va())}finally{O.p=u,o!==null&&i.types!==null&&(o.types=i.types),y.T=o}}function Wm(){}function ui(e,a,t,l){if(e.tag!==5)throw Error(m(476));var n=_r(e).queue;mr(e,n,a,G,t===null?Wm:function(){return vr(e),t(l)})}function _r(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:G},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function vr(e){var a=_r(e);a.next===null&&(a=e.alternate.memoizedState),un(e,a.next.queue,{},va())}function oi(){return Ge(qn)}function pr(){return Ae().memoizedState}function hr(){return Ae().memoizedState}function Fm(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=va();e=dt(t);var l=mt(a,e,t);l!==null&&(la(l,a,t),en(l,a,t)),a={cache:Ro()},e.payload=a;return}a=a.return}}function Im(e,a,t){var l=va();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},mu(e)?yr(a,t):(t=zo(e,a,t,l),t!==null&&(la(t,e,l),br(t,a,l)))}function gr(e,a,t){var l=va();un(e,a,t,l)}function un(e,a,t,l){var n={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(mu(e))yr(a,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=a.lastRenderedReducer,u!==null))try{var o=a.lastRenderedState,i=u(o,t);if(n.hasEagerState=!0,n.eagerState=i,sa(i,o))return wn(e,a,n,0),_e===null&&Jn(),!1}catch{}finally{}if(t=zo(e,a,n,l),t!==null)return la(t,e,l),br(t,a,l),!0}return!1}function ii(e,a,t,l){if(l={lane:2,revertLane:Yi(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},mu(e)){if(a)throw Error(m(479))}else a=zo(e,t,l,2),a!==null&&la(a,e,2)}function mu(e){var a=e.alternate;return e===Z||a!==null&&a===Z}function yr(e,a){pl=ou=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function br(e,a,t){if((t&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Ac(e,t)}}var on={readContext:Ge,use:su,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se,useHostTransitionStatus:Se,useFormState:Se,useActionState:Se,useOptimistic:Se,useMemoCache:Se,useCacheRefresh:Se};on.useEffectEvent=Se;var Sr={readContext:Ge,use:su,useCallback:function(e,a){return $e().memoizedState=[e,a===void 0?null:a],e},useContext:Ge,useEffect:nr,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,fu(4194308,4,cr.bind(null,a,e),t)},useLayoutEffect:function(e,a){return fu(4194308,4,e,a)},useInsertionEffect:function(e,a){fu(4,2,e,a)},useMemo:function(e,a){var t=$e();a=a===void 0?null:a;var l=e();if(Lt){nt(!0);try{e()}finally{nt(!1)}}return t.memoizedState=[l,a],l},useReducer:function(e,a,t){var l=$e();if(t!==void 0){var n=t(a);if(Lt){nt(!0);try{t(a)}finally{nt(!1)}}}else n=a;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Im.bind(null,Z,e),[l.memoizedState,e]},useRef:function(e){var a=$e();return e={current:e},a.memoizedState=e},useState:function(e){e=ei(e);var a=e.queue,t=gr.bind(null,Z,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:li,useDeferredValue:function(e,a){var t=$e();return ni(t,e,a)},useTransition:function(){var e=ei(!1);return e=mr.bind(null,Z,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var l=Z,n=$e();if(ee){if(t===void 0)throw Error(m(407));t=t()}else{if(t=a(),_e===null)throw Error(m(349));(F&127)!==0||Xs(l,a,t)}n.memoizedState=t;var u={value:t,getSnapshot:a};return n.queue=u,nr(Zs.bind(null,l,u,e),[e]),l.flags|=2048,gl(9,{destroy:void 0},Ls.bind(null,l,u,t,a),null),t},useId:function(){var e=$e(),a=_e.identifierPrefix;if(ee){var t=Ra,l=Ua;t=(l&~(1<<32-ca(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=iu++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Km++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:oi,useFormState:Ps,useActionState:Ps,useOptimistic:function(e){var a=$e();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=ii.bind(null,Z,!0,t),t.dispatch=a,[e,a]},useMemoCache:Fo,useCacheRefresh:function(){return $e().memoizedState=Fm.bind(null,Z)},useEffectEvent:function(e){var a=$e(),t={impl:e};return a.memoizedState=t,function(){if((oe&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}},ci={readContext:Ge,use:su,useCallback:rr,useContext:Ge,useEffect:ti,useImperativeHandle:sr,useInsertionEffect:or,useLayoutEffect:ir,useMemo:fr,useReducer:ru,useRef:lr,useState:function(){return ru(wa)},useDebugValue:li,useDeferredValue:function(e,a){var t=Ae();return dr(t,fe.memoizedState,e,a)},useTransition:function(){var e=ru(wa)[0],a=Ae().memoizedState;return[typeof e=="boolean"?e:nn(e),a]},useSyncExternalStore:Gs,useId:pr,useHostTransitionStatus:oi,useFormState:er,useActionState:er,useOptimistic:function(e,a){var t=Ae();return ws(t,fe,e,a)},useMemoCache:Fo,useCacheRefresh:hr};ci.useEffectEvent=ur;var Er={readContext:Ge,use:su,useCallback:rr,useContext:Ge,useEffect:ti,useImperativeHandle:sr,useInsertionEffect:or,useLayoutEffect:ir,useMemo:fr,useReducer:Po,useRef:lr,useState:function(){return Po(wa)},useDebugValue:li,useDeferredValue:function(e,a){var t=Ae();return fe===null?ni(t,e,a):dr(t,fe.memoizedState,e,a)},useTransition:function(){var e=Po(wa)[0],a=Ae().memoizedState;return[typeof e=="boolean"?e:nn(e),a]},useSyncExternalStore:Gs,useId:pr,useHostTransitionStatus:oi,useFormState:tr,useActionState:tr,useOptimistic:function(e,a){var t=Ae();return fe!==null?ws(t,fe,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Fo,useCacheRefresh:hr};Er.useEffectEvent=ur;function si(e,a,t,l){a=e.memoizedState,t=t(l,a),t=t==null?a:H({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ri={enqueueSetState:function(e,a,t){e=e._reactInternals;var l=va(),n=dt(l);n.payload=a,t!=null&&(n.callback=t),a=mt(e,n,l),a!==null&&(la(a,e,l),en(a,e,l))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var l=va(),n=dt(l);n.tag=1,n.payload=a,t!=null&&(n.callback=t),a=mt(e,n,l),a!==null&&(la(a,e,l),en(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=va(),l=dt(t);l.tag=2,a!=null&&(l.callback=a),a=mt(e,l,t),a!==null&&(la(a,e,t),en(a,e,t))}};function qr(e,a,t,l,n,u,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,o):a.prototype&&a.prototype.isPureReactComponent?!Jl(t,l)||!Jl(n,u):!0}function zr(e,a,t,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&ri.enqueueReplaceState(a,a.state,null)}function Zt(e,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(e=e.defaultProps){t===a&&(t=H({},t));for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}function Ar(e){Kn(e)}function xr(e){console.error(e)}function Or(e){Kn(e)}function _u(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Tr(e,a,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fi(e,a,t){return t=dt(t),t.tag=3,t.payload={element:null},t.callback=function(){_u(e,a)},t}function Nr(e){return e=dt(e),e.tag=3,e}function Mr(e,a,t,l){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var u=l.value;e.payload=function(){return n(u)},e.callback=function(){Tr(a,t,l)}}var o=t.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Tr(a,t,l),typeof n!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var i=l.stack;this.componentDidCatch(l.value,{componentStack:i!==null?i:""})})}function Pm(e,a,t,l,n){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&rl(a,t,n,!0),t=fa.current,t!==null){switch(t.tag){case 31:case 13:return xa===null?xu():t.alternate===null&&Ee===0&&(Ee=3),t.flags&=-257,t.flags|=65536,t.lanes=n,l===au?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),Hi(e,l,n)),!1;case 22:return t.flags|=65536,l===au?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),Hi(e,l,n)),!1}throw Error(m(435,t.tag))}return Hi(e,l,n),xu(),!1}if(ee)return a=fa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,l!==Mo&&(e=Error(m(422),{cause:l}),$l(Ea(e,t)))):(l!==Mo&&(a=Error(m(423),{cause:l}),$l(Ea(a,t))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Ea(l,t),n=fi(e.stateNode,l,n),Go(e,n),Ee!==4&&(Ee=2)),!1;var u=Error(m(520),{cause:l});if(u=Ea(u,t),vn===null?vn=[u]:vn.push(u),Ee!==4&&(Ee=2),a===null)return!0;l=Ea(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,e=fi(t.stateNode,l,e),Go(t,e),!1;case 1:if(a=t.type,u=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(yt===null||!yt.has(u))))return t.flags|=65536,n&=-n,t.lanes|=n,n=Nr(n),Mr(n,e,t,l),Go(t,n),!1}t=t.return}while(t!==null);return!1}var di=Error(m(461)),Te=!1;function Xe(e,a,t,l){a.child=e===null?Us(a,null,t,l):Xt(a,e.child,t,l)}function Dr(e,a,t,l,n){t=t.render;var u=a.ref;if("ref"in l){var o={};for(var i in l)i!=="ref"&&(o[i]=l[i])}else o=l;return Bt(a),l=wo(e,a,t,o,u,n),i=ko(),e!==null&&!Te?($o(e,a,n),ka(e,a,n)):(ee&&i&&To(a),a.flags|=1,Xe(e,a,l,n),a.child)}function Cr(e,a,t,l,n){if(e===null){var u=t.type;return typeof u=="function"&&!Ao(u)&&u.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=u,jr(e,a,u,l,n)):(e=$n(t.type,null,l,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(u=e.child,!bi(e,n)){var o=u.memoizedProps;if(t=t.compare,t=t!==null?t:Jl,t(o,l)&&e.ref===a.ref)return ka(e,a,n)}return a.flags|=1,e=Xa(u,l),e.ref=a.ref,e.return=a,a.child=e}function jr(e,a,t,l,n){if(e!==null){var u=e.memoizedProps;if(Jl(u,l)&&e.ref===a.ref)if(Te=!1,a.pendingProps=l=u,bi(e,n))(e.flags&131072)!==0&&(Te=!0);else return a.lanes=e.lanes,ka(e,a,n)}return mi(e,a,t,l,n)}function Ur(e,a,t,l){var n=l.children,u=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(u=u!==null?u.baseLanes|t:t,e!==null){for(l=a.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~u}else l=0,a.child=null;return Rr(e,a,u,t,l)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pn(a,u!==null?u.cachePool:null),u!==null?Qs(a,u):Lo(),Bs(a);else return l=a.lanes=536870912,Rr(e,a,u!==null?u.baseLanes|t:t,t,l)}else u!==null?(Pn(a,u.cachePool),Qs(a,u),vt(),a.memoizedState=null):(e!==null&&Pn(a,null),Lo(),vt());return Xe(e,a,n,t),a.child}function cn(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Rr(e,a,t,l,n){var u=Qo();return u=u===null?null:{parent:xe._currentValue,pool:u},a.memoizedState={baseLanes:t,cachePool:u},e!==null&&Pn(a,null),Lo(),Bs(a),e!==null&&rl(e,a,l,!0),a.childLanes=n,null}function vu(e,a){return a=hu({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Hr(e,a,t){return Xt(a,e.child,null,t),e=vu(a,a.pendingProps),e.flags|=2,da(a),a.memoizedState=null,e}function e_(e,a,t){var l=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(ee){if(l.mode==="hidden")return e=vu(a,l),a.lanes=536870912,cn(null,e);if(Ko(a),(e=he)?(e=$f(e,Aa),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:it!==null?{id:Ua,overflow:Ra}:null,retryLane:536870912,hydrationErrors:null},t=ys(e),t.return=a,a.child=t,Ve=a,he=null)):e=null,e===null)throw st(a);return a.lanes=536870912,null}return vu(a,l)}var u=e.memoizedState;if(u!==null){var o=u.dehydrated;if(Ko(a),n)if(a.flags&256)a.flags&=-257,a=Hr(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(m(558));else if(Te||rl(e,a,t,!1),n=(t&e.childLanes)!==0,Te||n){if(l=_e,l!==null&&(o=xc(l,t),o!==0&&o!==u.retryLane))throw u.retryLane=o,Ut(e,o),la(l,e,o),di;xu(),a=Hr(e,a,t)}else e=u.treeContext,he=Oa(o.nextSibling),Ve=a,ee=!0,ct=null,Aa=!1,e!==null&&Es(a,e),a=vu(a,l),a.flags|=4096;return a}return e=Xa(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function pu(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(m(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function mi(e,a,t,l,n){return Bt(a),t=wo(e,a,t,l,void 0,n),l=ko(),e!==null&&!Te?($o(e,a,n),ka(e,a,n)):(ee&&l&&To(a),a.flags|=1,Xe(e,a,t,n),a.child)}function Qr(e,a,t,l,n,u){return Bt(a),a.updateQueue=null,t=Vs(a,l,t,n),Ys(e),l=ko(),e!==null&&!Te?($o(e,a,u),ka(e,a,u)):(ee&&l&&To(a),a.flags|=1,Xe(e,a,t,u),a.child)}function Br(e,a,t,l,n){if(Bt(a),a.stateNode===null){var u=ol,o=t.contextType;typeof o=="object"&&o!==null&&(u=Ge(o)),u=new t(l,u),a.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ri,a.stateNode=u,u._reactInternals=a,u=a.stateNode,u.props=l,u.state=a.memoizedState,u.refs={},Yo(a),o=t.contextType,u.context=typeof o=="object"&&o!==null?Ge(o):ol,u.state=a.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(si(a,t,o,l),u.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(o=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),o!==u.state&&ri.enqueueReplaceState(u,u.state,null),tn(a,l,u,n),an(),u.state=a.memoizedState),typeof u.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){u=a.stateNode;var i=a.memoizedProps,c=Zt(t,i);u.props=c;var _=u.context,g=t.contextType;o=ol,typeof g=="object"&&g!==null&&(o=Ge(g));var S=t.getDerivedStateFromProps;g=typeof S=="function"||typeof u.getSnapshotBeforeUpdate=="function",i=a.pendingProps!==i,g||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i||_!==o)&&zr(a,u,l,o),ft=!1;var v=a.memoizedState;u.state=v,tn(a,l,u,n),an(),_=a.memoizedState,i||v!==_||ft?(typeof S=="function"&&(si(a,t,S,l),_=a.memoizedState),(c=ft||qr(a,t,c,l,v,_,o))?(g||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(a.flags|=4194308)):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=_),u.props=l,u.state=_,u.context=o,l=c):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{u=a.stateNode,Vo(e,a),o=a.memoizedProps,g=Zt(t,o),u.props=g,S=a.pendingProps,v=u.context,_=t.contextType,c=ol,typeof _=="object"&&_!==null&&(c=Ge(_)),i=t.getDerivedStateFromProps,(_=typeof i=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==S||v!==c)&&zr(a,u,l,c),ft=!1,v=a.memoizedState,u.state=v,tn(a,l,u,n),an();var h=a.memoizedState;o!==S||v!==h||ft||e!==null&&e.dependencies!==null&&Fn(e.dependencies)?(typeof i=="function"&&(si(a,t,i,l),h=a.memoizedState),(g=ft||qr(a,t,g,l,v,h,c)||e!==null&&e.dependencies!==null&&Fn(e.dependencies))?(_||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,h,c),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,h,c)),typeof u.componentDidUpdate=="function"&&(a.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof u.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=h),u.props=l,u.state=h,u.context=c,l=g):(typeof u.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(a.flags|=1024),l=!1)}return u=l,pu(e,a),l=(a.flags&128)!==0,u||l?(u=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:u.render(),a.flags|=1,e!==null&&l?(a.child=Xt(a,e.child,null,n),a.child=Xt(a,null,t,n)):Xe(e,a,t,n),a.memoizedState=u.state,e=a.child):e=ka(e,a,n),e}function Yr(e,a,t,l){return Ht(),a.flags|=256,Xe(e,a,t,l),a.child}var _i={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vi(e){return{baseLanes:e,cachePool:Ts()}}function pi(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=_a),e}function Vr(e,a,t){var l=a.pendingProps,n=!1,u=(a.flags&128)!==0,o;if((o=u)||(o=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),o&&(n=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,e===null){if(ee){if(n?_t(a):vt(),(e=he)?(e=$f(e,Aa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:it!==null?{id:Ua,overflow:Ra}:null,retryLane:536870912,hydrationErrors:null},t=ys(e),t.return=a,a.child=t,Ve=a,he=null)):e=null,e===null)throw st(a);return Ii(e)?a.lanes=32:a.lanes=536870912,null}var i=l.children;return l=l.fallback,n?(vt(),n=a.mode,i=hu({mode:"hidden",children:i},n),l=Rt(l,n,t,null),i.return=a,l.return=a,i.sibling=l,a.child=i,l=a.child,l.memoizedState=vi(t),l.childLanes=pi(e,o,t),a.memoizedState=_i,cn(null,l)):(_t(a),hi(a,i))}var c=e.memoizedState;if(c!==null&&(i=c.dehydrated,i!==null)){if(u)a.flags&256?(_t(a),a.flags&=-257,a=gi(e,a,t)):a.memoizedState!==null?(vt(),a.child=e.child,a.flags|=128,a=null):(vt(),i=l.fallback,n=a.mode,l=hu({mode:"visible",children:l.children},n),i=Rt(i,n,t,null),i.flags|=2,l.return=a,i.return=a,l.sibling=i,a.child=l,Xt(a,e.child,null,t),l=a.child,l.memoizedState=vi(t),l.childLanes=pi(e,o,t),a.memoizedState=_i,a=cn(null,l));else if(_t(a),Ii(i)){if(o=i.nextSibling&&i.nextSibling.dataset,o)var _=o.dgst;o=_,l=Error(m(419)),l.stack="",l.digest=o,$l({value:l,source:null,stack:null}),a=gi(e,a,t)}else if(Te||rl(e,a,t,!1),o=(t&e.childLanes)!==0,Te||o){if(o=_e,o!==null&&(l=xc(o,t),l!==0&&l!==c.retryLane))throw c.retryLane=l,Ut(e,l),la(o,e,l),di;Fi(i)||xu(),a=gi(e,a,t)}else Fi(i)?(a.flags|=192,a.child=e.child,a=null):(e=c.treeContext,he=Oa(i.nextSibling),Ve=a,ee=!0,ct=null,Aa=!1,e!==null&&Es(a,e),a=hi(a,l.children),a.flags|=4096);return a}return n?(vt(),i=l.fallback,n=a.mode,c=e.child,_=c.sibling,l=Xa(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,_!==null?i=Xa(_,i):(i=Rt(i,n,t,null),i.flags|=2),i.return=a,l.return=a,l.sibling=i,a.child=l,cn(null,l),l=a.child,i=e.child.memoizedState,i===null?i=vi(t):(n=i.cachePool,n!==null?(c=xe._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=Ts(),i={baseLanes:i.baseLanes|t,cachePool:n}),l.memoizedState=i,l.childLanes=pi(e,o,t),a.memoizedState=_i,cn(e.child,l)):(_t(a),t=e.child,e=t.sibling,t=Xa(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,e!==null&&(o=a.deletions,o===null?(a.deletions=[e],a.flags|=16):o.push(e)),a.child=t,a.memoizedState=null,t)}function hi(e,a){return a=hu({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function hu(e,a){return e=ra(22,e,null,a),e.lanes=0,e}function gi(e,a,t){return Xt(a,e.child,null,t),e=hi(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Gr(e,a,t){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),jo(e.return,a,t)}function yi(e,a,t,l,n,u){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:n,treeForkCount:u}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=t,o.tailMode=n,o.treeForkCount=u)}function Xr(e,a,t){var l=a.pendingProps,n=l.revealOrder,u=l.tail;l=l.children;var o=ze.current,i=(o&2)!==0;if(i?(o=o&1|2,a.flags|=128):o&=1,N(ze,o),Xe(e,a,l,t),l=ee?kl:0,!i&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gr(e,t,a);else if(e.tag===19)Gr(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(t=a.child,n=null;t!==null;)e=t.alternate,e!==null&&uu(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),yi(a,!1,n,t,u,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&uu(e)===null){a.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}yi(a,!0,t,null,u,l);break;case"together":yi(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function ka(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),gt|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(rl(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(m(153));if(a.child!==null){for(e=a.child,t=Xa(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Xa(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function bi(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Fn(e)))}function a_(e,a,t){switch(a.tag){case 3:A(a,a.stateNode.containerInfo),rt(a,xe,e.memoizedState.cache),Ht();break;case 27:case 5:te(a);break;case 4:A(a,a.stateNode.containerInfo);break;case 10:rt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ko(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(_t(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Vr(e,a,t):(_t(a),e=ka(e,a,t),e!==null?e.sibling:null);_t(a);break;case 19:var n=(e.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(rl(e,a,t,!1),l=(t&a.childLanes)!==0),n){if(l)return Xr(e,a,t);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),N(ze,ze.current),l)break;return null;case 22:return a.lanes=0,Ur(e,a,t,a.pendingProps);case 24:rt(a,xe,e.memoizedState.cache)}return ka(e,a,t)}function Lr(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Te=!0;else{if(!bi(e,t)&&(a.flags&128)===0)return Te=!1,a_(e,a,t);Te=(e.flags&131072)!==0}else Te=!1,ee&&(a.flags&1048576)!==0&&Ss(a,kl,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=Vt(a.elementType),a.type=e,typeof e=="function")Ao(e)?(l=Zt(e,l),a.tag=1,a=Br(null,a,e,l,t)):(a.tag=0,a=mi(null,a,e,l,t));else{if(e!=null){var n=e.$$typeof;if(n===ke){a.tag=11,a=Dr(null,a,e,l,t);break e}else if(n===K){a.tag=14,a=Cr(null,a,e,l,t);break e}}throw a=Na(e)||e,Error(m(306,a,""))}}return a;case 0:return mi(e,a,a.type,a.pendingProps,t);case 1:return l=a.type,n=Zt(l,a.pendingProps),Br(e,a,l,n,t);case 3:e:{if(A(a,a.stateNode.containerInfo),e===null)throw Error(m(387));l=a.pendingProps;var u=a.memoizedState;n=u.element,Vo(e,a),tn(a,l,null,t);var o=a.memoizedState;if(l=o.cache,rt(a,xe,l),l!==u.cache&&Uo(a,[xe],t,!0),an(),l=o.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=u,a.memoizedState=u,a.flags&256){a=Yr(e,a,l,t);break e}else if(l!==n){n=Ea(Error(m(424)),a),$l(n),a=Yr(e,a,l,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(he=Oa(e.firstChild),Ve=a,ee=!0,ct=null,Aa=!0,t=Us(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Ht(),l===n){a=ka(e,a,t);break e}Xe(e,a,l,t)}a=a.child}return a;case 26:return pu(e,a),e===null?(t=ad(a.type,null,a.pendingProps,null))?a.memoizedState=t:ee||(t=a.type,e=a.pendingProps,l=ju(k.current).createElement(t),l[Ye]=a,l[Fe]=e,Le(l,t,e),Re(l),a.stateNode=l):a.memoizedState=ad(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return te(a),e===null&&ee&&(l=a.stateNode=If(a.type,a.pendingProps,k.current),Ve=a,Aa=!0,n=he,qt(a.type)?(Pi=n,he=Oa(l.firstChild)):he=n),Xe(e,a,a.pendingProps.children,t),pu(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&ee&&((n=l=he)&&(l=D_(l,a.type,a.pendingProps,Aa),l!==null?(a.stateNode=l,Ve=a,he=Oa(l.firstChild),Aa=!1,n=!0):n=!1),n||st(a)),te(a),n=a.type,u=a.pendingProps,o=e!==null?e.memoizedProps:null,l=u.children,ki(n,u)?l=null:o!==null&&ki(n,o)&&(a.flags|=32),a.memoizedState!==null&&(n=wo(e,a,Jm,null,null,t),qn._currentValue=n),pu(e,a),Xe(e,a,l,t),a.child;case 6:return e===null&&ee&&((e=t=he)&&(t=C_(t,a.pendingProps,Aa),t!==null?(a.stateNode=t,Ve=a,he=null,e=!0):e=!1),e||st(a)),null;case 13:return Vr(e,a,t);case 4:return A(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Xt(a,null,l,t):Xe(e,a,l,t),a.child;case 11:return Dr(e,a,a.type,a.pendingProps,t);case 7:return Xe(e,a,a.pendingProps,t),a.child;case 8:return Xe(e,a,a.pendingProps.children,t),a.child;case 12:return Xe(e,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,rt(a,a.type,l.value),Xe(e,a,l.children,t),a.child;case 9:return n=a.type._context,l=a.pendingProps.children,Bt(a),n=Ge(n),l=l(n),a.flags|=1,Xe(e,a,l,t),a.child;case 14:return Cr(e,a,a.type,a.pendingProps,t);case 15:return jr(e,a,a.type,a.pendingProps,t);case 19:return Xr(e,a,t);case 31:return e_(e,a,t);case 22:return Ur(e,a,t,a.pendingProps);case 24:return Bt(a),l=Ge(xe),e===null?(n=Qo(),n===null&&(n=_e,u=Ro(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=t),n=u),a.memoizedState={parent:l,cache:n},Yo(a),rt(a,xe,n)):((e.lanes&t)!==0&&(Vo(e,a),tn(a,null,null,t),an()),n=e.memoizedState,u=a.memoizedState,n.parent!==l?(n={parent:l,cache:l},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),rt(a,xe,l)):(l=u.cache,rt(a,xe,l),l!==n.cache&&Uo(a,[xe],t,!0))),Xe(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(m(156,a.tag))}function $a(e){e.flags|=4}function Si(e,a,t,l,n){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(hf())e.flags|=8192;else throw Gt=au,Bo}else e.flags&=-16777217}function Zr(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!od(a))if(hf())e.flags|=8192;else throw Gt=au,Bo}function gu(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?qc():536870912,e.lanes|=a,El|=a)}function sn(e,a){if(!ee)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ge(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(a)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=t,a}function t_(e,a,t){var l=a.pendingProps;switch(No(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(a),null;case 1:return ge(a),null;case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Ka(xe),Y(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(sl(a)?$a(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Do())),ge(a),null;case 26:var n=a.type,u=a.memoizedState;return e===null?($a(a),u!==null?(ge(a),Zr(a,u)):(ge(a),Si(a,n,null,l,t))):u?u!==e.memoizedState?($a(a),ge(a),Zr(a,u)):(ge(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&$a(a),ge(a),Si(a,n,e,l,t)),null;case 27:if(pe(a),t=k.current,n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&$a(a);else{if(!l){if(a.stateNode===null)throw Error(m(166));return ge(a),null}e=M.current,sl(a)?qs(a):(e=If(n,l,t),a.stateNode=e,$a(a))}return ge(a),null;case 5:if(pe(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&$a(a);else{if(!l){if(a.stateNode===null)throw Error(m(166));return ge(a),null}if(u=M.current,sl(a))qs(a);else{var o=ju(k.current);switch(u){case 1:u=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=o.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}u[Ye]=a,u[Fe]=l;e:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)u.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=u;e:switch(Le(u,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&$a(a)}}return ge(a),Si(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&$a(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(m(166));if(e=k.current,sl(a)){if(e=a.stateNode,t=a.memoizedProps,l=null,n=Ve,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ye]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Gf(e.nodeValue,t)),e||st(a,!0)}else e=ju(e).createTextNode(l),e[Ye]=a,a.stateNode=e}return ge(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(l=sl(a),t!==null){if(e===null){if(!l)throw Error(m(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[Ye]=a}else Ht(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ge(a),e=!1}else t=Do(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(da(a),a):(da(a),null);if((a.flags&128)!==0)throw Error(m(558))}return ge(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=sl(a),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(m(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[Ye]=a}else Ht(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ge(a),n=!1}else n=Do(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(da(a),a):(da(a),null)}return da(a),(a.flags&128)!==0?(a.lanes=t,a):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=a.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==n&&(l.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),gu(a,a.updateQueue),ge(a),null);case 4:return Y(),e===null&&Li(a.stateNode.containerInfo),ge(a),null;case 10:return Ka(a.type),ge(a),null;case 19:if(E(ze),l=a.memoizedState,l===null)return ge(a),null;if(n=(a.flags&128)!==0,u=l.rendering,u===null)if(n)sn(l,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(u=uu(e),u!==null){for(a.flags|=128,sn(l,!1),e=u.updateQueue,a.updateQueue=e,gu(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)gs(t,e),t=t.sibling;return N(ze,ze.current&1|2),ee&&La(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&oa()>qu&&(a.flags|=128,n=!0,sn(l,!1),a.lanes=4194304)}else{if(!n)if(e=uu(u),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,gu(a,e),sn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!ee)return ge(a),null}else 2*oa()-l.renderingStartTime>qu&&t!==536870912&&(a.flags|=128,n=!0,sn(l,!1),a.lanes=4194304);l.isBackwards?(u.sibling=a.child,a.child=u):(e=l.last,e!==null?e.sibling=u:a.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=oa(),e.sibling=null,t=ze.current,N(ze,n?t&1|2:t&1),ee&&La(a,l.treeForkCount),e):(ge(a),null);case 22:case 23:return da(a),Zo(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(ge(a),a.subtreeFlags&6&&(a.flags|=8192)):ge(a),t=a.updateQueue,t!==null&&gu(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&E(Yt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Ka(xe),ge(a),null;case 25:return null;case 30:return null}throw Error(m(156,a.tag))}function l_(e,a){switch(No(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ka(xe),Y(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return pe(a),null;case 31:if(a.memoizedState!==null){if(da(a),a.alternate===null)throw Error(m(340));Ht()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(da(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(m(340));Ht()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return E(ze),null;case 4:return Y(),null;case 10:return Ka(a.type),null;case 22:case 23:return da(a),Zo(),e!==null&&E(Yt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Ka(xe),null;case 25:return null;default:return null}}function Kr(e,a){switch(No(a),a.tag){case 3:Ka(xe),Y();break;case 26:case 27:case 5:pe(a);break;case 4:Y();break;case 31:a.memoizedState!==null&&da(a);break;case 13:da(a);break;case 19:E(ze);break;case 10:Ka(a.type);break;case 22:case 23:da(a),Zo(),e!==null&&E(Yt);break;case 24:Ka(xe)}}function rn(e,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var n=l.next;t=n;do{if((t.tag&e)===e){l=void 0;var u=t.create,o=t.inst;l=u(),o.destroy=l}t=t.next}while(t!==n)}}catch(i){re(a,a.return,i)}}function pt(e,a,t){try{var l=a.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var u=n.next;l=u;do{if((l.tag&e)===e){var o=l.inst,i=o.destroy;if(i!==void 0){o.destroy=void 0,n=a;var c=t,_=i;try{_()}catch(g){re(n,c,g)}}}l=l.next}while(l!==u)}}catch(g){re(a,a.return,g)}}function Jr(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Hs(a,t)}catch(l){re(e,e.return,l)}}}function wr(e,a,t){t.props=Zt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){re(e,a,l)}}function fn(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(n){re(e,a,n)}}function Ha(e,a){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(n){re(e,a,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){re(e,a,n)}else t.current=null}function kr(e){var a=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(n){re(e,e.return,n)}}function Ei(e,a,t){try{var l=e.stateNode;A_(l,e.type,t,a),l[Fe]=a}catch(n){re(e,e.return,n)}}function $r(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qt(e.type)||e.tag===4}function qi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$r(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zi(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Va));else if(l!==4&&(l===27&&qt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(zi(e,a,t),e=e.sibling;e!==null;)zi(e,a,t),e=e.sibling}function yu(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(l!==4&&(l===27&&qt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(yu(e,a,t),e=e.sibling;e!==null;)yu(e,a,t),e=e.sibling}function Wr(e){var a=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Le(a,l,t),a[Ye]=e,a[Fe]=t}catch(u){re(e,e.return,u)}}var Wa=!1,Ne=!1,Ai=!1,Fr=typeof WeakSet=="function"?WeakSet:Set,He=null;function n_(e,a){if(e=e.containerInfo,Ji=Vu,e=ss(e),go(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var n=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var o=0,i=-1,c=-1,_=0,g=0,S=e,v=null;a:for(;;){for(var h;S!==t||n!==0&&S.nodeType!==3||(i=o+n),S!==u||l!==0&&S.nodeType!==3||(c=o+l),S.nodeType===3&&(o+=S.nodeValue.length),(h=S.firstChild)!==null;)v=S,S=h;for(;;){if(S===e)break a;if(v===t&&++_===n&&(i=o),v===u&&++g===l&&(c=o),(h=S.nextSibling)!==null)break;S=v,v=S.parentNode}S=h}t=i===-1||c===-1?null:{start:i,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(wi={focusedElem:e,selectionRange:t},Vu=!1,He=a;He!==null;)if(a=He,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,He=e;else for(;He!==null;){switch(a=He,u=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)n=e[t],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,t=a,n=u.memoizedProps,u=u.memoizedState,l=t.stateNode;try{var D=Zt(t.type,n);e=l.getSnapshotBeforeUpdate(D,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(V){re(t,t.return,V)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)Wi(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wi(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=a.sibling,e!==null){e.return=a.return,He=e;break}He=a.return}}function Ir(e,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ia(e,t),l&4&&rn(5,t);break;case 1:if(Ia(e,t),l&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(o){re(t,t.return,o)}else{var n=Zt(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(o){re(t,t.return,o)}}l&64&&Jr(t),l&512&&fn(t,t.return);break;case 3:if(Ia(e,t),l&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Hs(e,a)}catch(o){re(t,t.return,o)}}break;case 27:a===null&&l&4&&Wr(t);case 26:case 5:Ia(e,t),a===null&&l&4&&kr(t),l&512&&fn(t,t.return);break;case 12:Ia(e,t);break;case 31:Ia(e,t),l&4&&af(e,t);break;case 13:Ia(e,t),l&4&&tf(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=m_.bind(null,t),j_(e,t))));break;case 22:if(l=t.memoizedState!==null||Wa,!l){a=a!==null&&a.memoizedState!==null||Ne,n=Wa;var u=Ne;Wa=l,(Ne=a)&&!u?Pa(e,t,(t.subtreeFlags&8772)!==0):Ia(e,t),Wa=n,Ne=u}break;case 30:break;default:Ia(e,t)}}function Pr(e){var a=e.alternate;a!==null&&(e.alternate=null,Pr(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&eo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,Pe=!1;function Fa(e,a,t){for(t=t.child;t!==null;)ef(e,a,t),t=t.sibling}function ef(e,a,t){if(ia&&typeof ia.onCommitFiberUnmount=="function")try{ia.onCommitFiberUnmount(Ul,t)}catch{}switch(t.tag){case 26:Ne||Ha(t,a),Fa(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ne||Ha(t,a);var l=be,n=Pe;qt(t.type)&&(be=t.stateNode,Pe=!1),Fa(e,a,t),bn(t.stateNode),be=l,Pe=n;break;case 5:Ne||Ha(t,a);case 6:if(l=be,n=Pe,be=null,Fa(e,a,t),be=l,Pe=n,be!==null)if(Pe)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(t.stateNode)}catch(u){re(t,a,u)}else try{be.removeChild(t.stateNode)}catch(u){re(t,a,u)}break;case 18:be!==null&&(Pe?(e=be,wf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ml(e)):wf(be,t.stateNode));break;case 4:l=be,n=Pe,be=t.stateNode.containerInfo,Pe=!0,Fa(e,a,t),be=l,Pe=n;break;case 0:case 11:case 14:case 15:pt(2,t,a),Ne||pt(4,t,a),Fa(e,a,t);break;case 1:Ne||(Ha(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&wr(t,a,l)),Fa(e,a,t);break;case 21:Fa(e,a,t);break;case 22:Ne=(l=Ne)||t.memoizedState!==null,Fa(e,a,t),Ne=l;break;default:Fa(e,a,t)}}function af(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ml(e)}catch(t){re(a,a.return,t)}}}function tf(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(t){re(a,a.return,t)}}function u_(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Fr),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Fr),a;default:throw Error(m(435,e.tag))}}function bu(e,a){var t=u_(e);a.forEach(function(l){if(!t.has(l)){t.add(l);var n=__.bind(null,e,l);l.then(n,n)}})}function ea(e,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var n=t[l],u=e,o=a,i=o;e:for(;i!==null;){switch(i.tag){case 27:if(qt(i.type)){be=i.stateNode,Pe=!1;break e}break;case 5:be=i.stateNode,Pe=!1;break e;case 3:case 4:be=i.stateNode.containerInfo,Pe=!0;break e}i=i.return}if(be===null)throw Error(m(160));ef(u,o,n),be=null,Pe=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)lf(a,e),a=a.sibling}var Da=null;function lf(e,a){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ea(a,e),aa(e),l&4&&(pt(3,e,e.return),rn(3,e),pt(5,e,e.return));break;case 1:ea(a,e),aa(e),l&512&&(Ne||t===null||Ha(t,t.return)),l&64&&Wa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var n=Da;if(ea(a,e),aa(e),l&512&&(Ne||t===null||Ha(t,t.return)),l&4){var u=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,n=n.ownerDocument||n;a:switch(l){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ql]||u[Ye]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(l),n.head.insertBefore(u,n.querySelector("head > title"))),Le(u,l,t),u[Ye]=e,Re(u),l=u;break e;case"link":var o=nd("link","href",n).get(l+(t.href||""));if(o){for(var i=0;i<o.length;i++)if(u=o[i],u.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&u.getAttribute("rel")===(t.rel==null?null:t.rel)&&u.getAttribute("title")===(t.title==null?null:t.title)&&u.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(i,1);break a}}u=n.createElement(l),Le(u,l,t),n.head.appendChild(u);break;case"meta":if(o=nd("meta","content",n).get(l+(t.content||""))){for(i=0;i<o.length;i++)if(u=o[i],u.getAttribute("content")===(t.content==null?null:""+t.content)&&u.getAttribute("name")===(t.name==null?null:t.name)&&u.getAttribute("property")===(t.property==null?null:t.property)&&u.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&u.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(i,1);break a}}u=n.createElement(l),Le(u,l,t),n.head.appendChild(u);break;default:throw Error(m(468,l))}u[Ye]=e,Re(u),l=u}e.stateNode=l}else ud(n,e.type,e.stateNode);else e.stateNode=ld(n,l,e.memoizedProps);else u!==l?(u===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):u.count--,l===null?ud(n,e.type,e.stateNode):ld(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ei(e,e.memoizedProps,t.memoizedProps)}break;case 27:ea(a,e),aa(e),l&512&&(Ne||t===null||Ha(t,t.return)),t!==null&&l&4&&Ei(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ea(a,e),aa(e),l&512&&(Ne||t===null||Ha(t,t.return)),e.flags&32){n=e.stateNode;try{Pt(n,"")}catch(D){re(e,e.return,D)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Ei(e,n,t!==null?t.memoizedProps:n)),l&1024&&(Ai=!0);break;case 6:if(ea(a,e),aa(e),l&4){if(e.stateNode===null)throw Error(m(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(D){re(e,e.return,D)}}break;case 3:if(Hu=null,n=Da,Da=Uu(a.containerInfo),ea(a,e),Da=n,aa(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Ml(a.containerInfo)}catch(D){re(e,e.return,D)}Ai&&(Ai=!1,nf(e));break;case 4:l=Da,Da=Uu(e.stateNode.containerInfo),ea(a,e),aa(e),Da=l;break;case 12:ea(a,e),aa(e);break;case 31:ea(a,e),aa(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bu(e,l)));break;case 13:ea(a,e),aa(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Eu=oa()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bu(e,l)));break;case 22:n=e.memoizedState!==null;var c=t!==null&&t.memoizedState!==null,_=Wa,g=Ne;if(Wa=_||n,Ne=g||c,ea(a,e),Ne=g,Wa=_,aa(e),l&8192)e:for(a=e.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(t===null||c||Wa||Ne||Kt(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){c=t=a;try{if(u=c.stateNode,n)o=u.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{i=c.stateNode;var S=c.memoizedProps.style,v=S!=null&&S.hasOwnProperty("display")?S.display:null;i.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(D){re(c,c.return,D)}}}else if(a.tag===6){if(t===null){c=a;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(D){re(c,c.return,D)}}}else if(a.tag===18){if(t===null){c=a;try{var h=c.stateNode;n?kf(h,!0):kf(c.stateNode,!1)}catch(D){re(c,c.return,D)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,bu(e,t))));break;case 19:ea(a,e),aa(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bu(e,l)));break;case 30:break;case 21:break;default:ea(a,e),aa(e)}}function aa(e){var a=e.flags;if(a&2){try{for(var t,l=e.return;l!==null;){if($r(l)){t=l;break}l=l.return}if(t==null)throw Error(m(160));switch(t.tag){case 27:var n=t.stateNode,u=qi(e);yu(e,u,n);break;case 5:var o=t.stateNode;t.flags&32&&(Pt(o,""),t.flags&=-33);var i=qi(e);yu(e,i,o);break;case 3:case 4:var c=t.stateNode.containerInfo,_=qi(e);zi(e,_,c);break;default:throw Error(m(161))}}catch(g){re(e,e.return,g)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function nf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;nf(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ia(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Ir(e,a.alternate,a),a=a.sibling}function Kt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:pt(4,a,a.return),Kt(a);break;case 1:Ha(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&wr(a,a.return,t),Kt(a);break;case 27:bn(a.stateNode);case 26:case 5:Ha(a,a.return),Kt(a);break;case 22:a.memoizedState===null&&Kt(a);break;case 30:Kt(a);break;default:Kt(a)}e=e.sibling}}function Pa(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,n=e,u=a,o=u.flags;switch(u.tag){case 0:case 11:case 15:Pa(n,u,t),rn(4,u);break;case 1:if(Pa(n,u,t),l=u,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(_){re(l,l.return,_)}if(l=u,n=l.updateQueue,n!==null){var i=l.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Rs(c[n],i)}catch(_){re(l,l.return,_)}}t&&o&64&&Jr(u),fn(u,u.return);break;case 27:Wr(u);case 26:case 5:Pa(n,u,t),t&&l===null&&o&4&&kr(u),fn(u,u.return);break;case 12:Pa(n,u,t);break;case 31:Pa(n,u,t),t&&o&4&&af(n,u);break;case 13:Pa(n,u,t),t&&o&4&&tf(n,u);break;case 22:u.memoizedState===null&&Pa(n,u,t),fn(u,u.return);break;case 30:break;default:Pa(n,u,t)}a=a.sibling}}function xi(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Wl(t))}function Oi(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Wl(e))}function Ca(e,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)uf(e,a,t,l),a=a.sibling}function uf(e,a,t,l){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ca(e,a,t,l),n&2048&&rn(9,a);break;case 1:Ca(e,a,t,l);break;case 3:Ca(e,a,t,l),n&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Wl(e)));break;case 12:if(n&2048){Ca(e,a,t,l),e=a.stateNode;try{var u=a.memoizedProps,o=u.id,i=u.onPostCommit;typeof i=="function"&&i(o,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){re(a,a.return,c)}}else Ca(e,a,t,l);break;case 31:Ca(e,a,t,l);break;case 13:Ca(e,a,t,l);break;case 23:break;case 22:u=a.stateNode,o=a.alternate,a.memoizedState!==null?u._visibility&2?Ca(e,a,t,l):dn(e,a):u._visibility&2?Ca(e,a,t,l):(u._visibility|=2,yl(e,a,t,l,(a.subtreeFlags&10256)!==0||!1)),n&2048&&xi(o,a);break;case 24:Ca(e,a,t,l),n&2048&&Oi(a.alternate,a);break;default:Ca(e,a,t,l)}}function yl(e,a,t,l,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var u=e,o=a,i=t,c=l,_=o.flags;switch(o.tag){case 0:case 11:case 15:yl(u,o,i,c,n),rn(8,o);break;case 23:break;case 22:var g=o.stateNode;o.memoizedState!==null?g._visibility&2?yl(u,o,i,c,n):dn(u,o):(g._visibility|=2,yl(u,o,i,c,n)),n&&_&2048&&xi(o.alternate,o);break;case 24:yl(u,o,i,c,n),n&&_&2048&&Oi(o.alternate,o);break;default:yl(u,o,i,c,n)}a=a.sibling}}function dn(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,l=a,n=l.flags;switch(l.tag){case 22:dn(t,l),n&2048&&xi(l.alternate,l);break;case 24:dn(t,l),n&2048&&Oi(l.alternate,l);break;default:dn(t,l)}a=a.sibling}}var mn=8192;function bl(e,a,t){if(e.subtreeFlags&mn)for(e=e.child;e!==null;)of(e,a,t),e=e.sibling}function of(e,a,t){switch(e.tag){case 26:bl(e,a,t),e.flags&mn&&e.memoizedState!==null&&K_(t,Da,e.memoizedState,e.memoizedProps);break;case 5:bl(e,a,t);break;case 3:case 4:var l=Da;Da=Uu(e.stateNode.containerInfo),bl(e,a,t),Da=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=mn,mn=16777216,bl(e,a,t),mn=l):bl(e,a,t));break;default:bl(e,a,t)}}function cf(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function _n(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];He=l,rf(l,e)}cf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sf(e),e=e.sibling}function sf(e){switch(e.tag){case 0:case 11:case 15:_n(e),e.flags&2048&&pt(9,e,e.return);break;case 3:_n(e);break;case 12:_n(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Su(e)):_n(e);break;default:_n(e)}}function Su(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];He=l,rf(l,e)}cf(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:pt(8,a,a.return),Su(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Su(a));break;default:Su(a)}e=e.sibling}}function rf(e,a){for(;He!==null;){var t=He;switch(t.tag){case 0:case 11:case 15:pt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wl(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,He=l;else e:for(t=e;He!==null;){l=He;var n=l.sibling,u=l.return;if(Pr(l),l===t){He=null;break e}if(n!==null){n.return=u,He=n;break e}He=u}}}var o_={getCacheForType:function(e){var a=Ge(xe),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return Ge(xe).controller.signal}},i_=typeof WeakMap=="function"?WeakMap:Map,oe=0,_e=null,$=null,F=0,se=0,ma=null,ht=!1,Sl=!1,Ti=!1,et=0,Ee=0,gt=0,Jt=0,Ni=0,_a=0,El=0,vn=null,ta=null,Mi=!1,Eu=0,ff=0,qu=1/0,zu=null,yt=null,Me=0,bt=null,ql=null,at=0,Di=0,Ci=null,df=null,pn=0,ji=null;function va(){return(oe&2)!==0&&F!==0?F&-F:y.T!==null?Yi():Oc()}function mf(){if(_a===0)if((F&536870912)===0||ee){var e=Cn;Cn<<=1,(Cn&3932160)===0&&(Cn=262144),_a=e}else _a=536870912;return e=fa.current,e!==null&&(e.flags|=32),_a}function la(e,a,t){(e===_e&&(se===2||se===9)||e.cancelPendingCommit!==null)&&(zl(e,0),St(e,F,_a,!1)),Hl(e,t),((oe&2)===0||e!==_e)&&(e===_e&&((oe&2)===0&&(Jt|=t),Ee===4&&St(e,F,_a,!1)),Qa(e))}function _f(e,a,t){if((oe&6)!==0)throw Error(m(327));var l=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Rl(e,a),n=l?r_(e,a):Ri(e,a,!0),u=l;do{if(n===0){Sl&&!l&&St(e,a,0,!1);break}else{if(t=e.current.alternate,u&&!c_(t)){n=Ri(e,a,!1),u=!1;continue}if(n===2){if(u=a,e.errorRecoveryDisabledLanes&u)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;e:{var i=e;n=vn;var c=i.current.memoizedState.isDehydrated;if(c&&(zl(i,o).flags|=256),o=Ri(i,o,!1),o!==2){if(Ti&&!c){i.errorRecoveryDisabledLanes|=u,Jt|=u,n=4;break e}u=ta,ta=n,u!==null&&(ta===null?ta=u:ta.push.apply(ta,u))}n=o}if(u=!1,n!==2)continue}}if(n===1){zl(e,0),St(e,a,0,!0);break}e:{switch(l=e,u=n,u){case 0:case 1:throw Error(m(345));case 4:if((a&4194048)!==a)break;case 6:St(l,a,_a,!ht);break e;case 2:ta=null;break;case 3:case 5:break;default:throw Error(m(329))}if((a&62914560)===a&&(n=Eu+300-oa(),10<n)){if(St(l,a,_a,!ht),Un(l,0,!0)!==0)break e;at=a,l.timeoutHandle=Kf(vf.bind(null,l,t,ta,zu,Mi,a,_a,Jt,El,ht,u,"Throttled",-0,0),n);break e}vf(l,t,ta,zu,Mi,a,_a,Jt,El,ht,u,null,-0,0)}}break}while(!0);Qa(e)}function vf(e,a,t,l,n,u,o,i,c,_,g,S,v,h){if(e.timeoutHandle=-1,S=a.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Va},of(a,u,S);var D=(u&62914560)===u?Eu-oa():(u&4194048)===u?ff-oa():0;if(D=J_(S,D),D!==null){at=u,e.cancelPendingCommit=D(qf.bind(null,e,a,u,t,l,n,o,i,c,g,S,null,v,h)),St(e,u,o,!_);return}}qf(e,a,u,t,l,n,o,i,c)}function c_(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var n=t[l],u=n.getSnapshot;n=n.value;try{if(!sa(u(),n))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function St(e,a,t,l){a&=~Ni,a&=~Jt,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var n=a;0<n;){var u=31-ca(n),o=1<<u;l[u]=-1,n&=~o}t!==0&&zc(e,t,a)}function Au(){return(oe&6)===0?(hn(0),!1):!0}function Ui(){if($!==null){if(se===0)var e=$.return;else e=$,Za=Qt=null,Wo(e),_l=null,Il=0,e=$;for(;e!==null;)Kr(e.alternate,e),e=e.return;$=null}}function zl(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,T_(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),at=0,Ui(),_e=e,$=t=Xa(e.current,null),F=a,se=0,ma=null,ht=!1,Sl=Rl(e,a),Ti=!1,El=_a=Ni=Jt=gt=Ee=0,ta=vn=null,Mi=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var n=31-ca(l),u=1<<n;a|=e[n],l&=~u}return et=a,Jn(),t}function pf(e,a){Z=null,y.H=on,a===ml||a===eu?(a=Ds(),se=3):a===Bo?(a=Ds(),se=4):se=a===di?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ma=a,$===null&&(Ee=1,_u(e,Ea(a,e.current)))}function hf(){var e=fa.current;return e===null?!0:(F&4194048)===F?xa===null:(F&62914560)===F||(F&536870912)!==0?e===xa:!1}function gf(){var e=y.H;return y.H=on,e===null?on:e}function yf(){var e=y.A;return y.A=o_,e}function xu(){Ee=4,ht||(F&4194048)!==F&&fa.current!==null||(Sl=!0),(gt&134217727)===0&&(Jt&134217727)===0||_e===null||St(_e,F,_a,!1)}function Ri(e,a,t){var l=oe;oe|=2;var n=gf(),u=yf();(_e!==e||F!==a)&&(zu=null,zl(e,a)),a=!1;var o=Ee;e:do try{if(se!==0&&$!==null){var i=$,c=ma;switch(se){case 8:Ui(),o=6;break e;case 3:case 2:case 9:case 6:fa.current===null&&(a=!0);var _=se;if(se=0,ma=null,Al(e,i,c,_),t&&Sl){o=0;break e}break;default:_=se,se=0,ma=null,Al(e,i,c,_)}}s_(),o=Ee;break}catch(g){pf(e,g)}while(!0);return a&&e.shellSuspendCounter++,Za=Qt=null,oe=l,y.H=n,y.A=u,$===null&&(_e=null,F=0,Jn()),o}function s_(){for(;$!==null;)bf($)}function r_(e,a){var t=oe;oe|=2;var l=gf(),n=yf();_e!==e||F!==a?(zu=null,qu=oa()+500,zl(e,a)):Sl=Rl(e,a);e:do try{if(se!==0&&$!==null){a=$;var u=ma;a:switch(se){case 1:se=0,ma=null,Al(e,a,u,1);break;case 2:case 9:if(Ns(u)){se=0,ma=null,Sf(a);break}a=function(){se!==2&&se!==9||_e!==e||(se=7),Qa(e)},u.then(a,a);break e;case 3:se=7;break e;case 4:se=5;break e;case 7:Ns(u)?(se=0,ma=null,Sf(a)):(se=0,ma=null,Al(e,a,u,7));break;case 5:var o=null;switch($.tag){case 26:o=$.memoizedState;case 5:case 27:var i=$;if(o?od(o):i.stateNode.complete){se=0,ma=null;var c=i.sibling;if(c!==null)$=c;else{var _=i.return;_!==null?($=_,Ou(_)):$=null}break a}}se=0,ma=null,Al(e,a,u,5);break;case 6:se=0,ma=null,Al(e,a,u,6);break;case 8:Ui(),Ee=6;break e;default:throw Error(m(462))}}f_();break}catch(g){pf(e,g)}while(!0);return Za=Qt=null,y.H=l,y.A=n,oe=t,$!==null?0:(_e=null,F=0,Jn(),Ee)}function f_(){for(;$!==null&&!Ud();)bf($)}function bf(e){var a=Lr(e.alternate,e,et);e.memoizedProps=e.pendingProps,a===null?Ou(e):$=a}function Sf(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Qr(t,a,a.pendingProps,a.type,void 0,F);break;case 11:a=Qr(t,a,a.pendingProps,a.type.render,a.ref,F);break;case 5:Wo(a);default:Kr(t,a),a=$=gs(a,et),a=Lr(t,a,et)}e.memoizedProps=e.pendingProps,a===null?Ou(e):$=a}function Al(e,a,t,l){Za=Qt=null,Wo(a),_l=null,Il=0;var n=a.return;try{if(Pm(e,n,a,t,F)){Ee=1,_u(e,Ea(t,e.current)),$=null;return}}catch(u){if(n!==null)throw $=n,u;Ee=1,_u(e,Ea(t,e.current)),$=null;return}a.flags&32768?(ee||l===1?e=!0:Sl||(F&536870912)!==0?e=!1:(ht=e=!0,(l===2||l===9||l===3||l===6)&&(l=fa.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ef(a,e)):Ou(a)}function Ou(e){var a=e;do{if((a.flags&32768)!==0){Ef(a,ht);return}e=a.return;var t=t_(a.alternate,a,et);if(t!==null){$=t;return}if(a=a.sibling,a!==null){$=a;return}$=a=e}while(a!==null);Ee===0&&(Ee=5)}function Ef(e,a){do{var t=l_(e.alternate,e);if(t!==null){t.flags&=32767,$=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){$=e;return}$=e=t}while(e!==null);Ee=6,$=null}function qf(e,a,t,l,n,u,o,i,c){e.cancelPendingCommit=null;do Tu();while(Me!==0);if((oe&6)!==0)throw Error(m(327));if(a!==null){if(a===e.current)throw Error(m(177));if(u=a.lanes|a.childLanes,u|=qo,Zd(e,t,u,o,i,c),e===_e&&($=_e=null,F=0),ql=a,bt=e,at=t,Di=u,Ci=n,df=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,v_(Mn,function(){return Tf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=y.T,y.T=null,n=O.p,O.p=2,o=oe,oe|=4;try{n_(e,a,t)}finally{oe=o,O.p=n,y.T=l}}Me=1,zf(),Af(),xf()}}function zf(){if(Me===1){Me=0;var e=bt,a=ql,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=y.T,y.T=null;var l=O.p;O.p=2;var n=oe;oe|=4;try{lf(a,e);var u=wi,o=ss(e.containerInfo),i=u.focusedElem,c=u.selectionRange;if(o!==i&&i&&i.ownerDocument&&cs(i.ownerDocument.documentElement,i)){if(c!==null&&go(i)){var _=c.start,g=c.end;if(g===void 0&&(g=_),"selectionStart"in i)i.selectionStart=_,i.selectionEnd=Math.min(g,i.value.length);else{var S=i.ownerDocument||document,v=S&&S.defaultView||window;if(v.getSelection){var h=v.getSelection(),D=i.textContent.length,V=Math.min(c.start,D),me=c.end===void 0?V:Math.min(c.end,D);!h.extend&&V>me&&(o=me,me=V,V=o);var f=is(i,V),s=is(i,me);if(f&&s&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==s.node||h.focusOffset!==s.offset)){var d=S.createRange();d.setStart(f.node,f.offset),h.removeAllRanges(),V>me?(h.addRange(d),h.extend(s.node,s.offset)):(d.setEnd(s.node,s.offset),h.addRange(d))}}}}for(S=[],h=i;h=h.parentNode;)h.nodeType===1&&S.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<S.length;i++){var b=S[i];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Vu=!!Ji,wi=Ji=null}finally{oe=n,O.p=l,y.T=t}}e.current=a,Me=2}}function Af(){if(Me===2){Me=0;var e=bt,a=ql,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=y.T,y.T=null;var l=O.p;O.p=2;var n=oe;oe|=4;try{Ir(e,a.alternate,a)}finally{oe=n,O.p=l,y.T=t}}Me=3}}function xf(){if(Me===4||Me===3){Me=0,Rd();var e=bt,a=ql,t=at,l=df;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Me=5:(Me=0,ql=bt=null,Of(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(yt=null),Iu(t),a=a.stateNode,ia&&typeof ia.onCommitFiberRoot=="function")try{ia.onCommitFiberRoot(Ul,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=y.T,n=O.p,O.p=2,y.T=null;try{for(var u=e.onRecoverableError,o=0;o<l.length;o++){var i=l[o];u(i.value,{componentStack:i.stack})}}finally{y.T=a,O.p=n}}(at&3)!==0&&Tu(),Qa(e),n=e.pendingLanes,(t&261930)!==0&&(n&42)!==0?e===ji?pn++:(pn=0,ji=e):pn=0,hn(0)}}function Of(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Wl(a)))}function Tu(){return zf(),Af(),xf(),Tf()}function Tf(){if(Me!==5)return!1;var e=bt,a=Di;Di=0;var t=Iu(at),l=y.T,n=O.p;try{O.p=32>t?32:t,y.T=null,t=Ci,Ci=null;var u=bt,o=at;if(Me=0,ql=bt=null,at=0,(oe&6)!==0)throw Error(m(331));var i=oe;if(oe|=4,sf(u.current),uf(u,u.current,o,t),oe=i,hn(0,!1),ia&&typeof ia.onPostCommitFiberRoot=="function")try{ia.onPostCommitFiberRoot(Ul,u)}catch{}return!0}finally{O.p=n,y.T=l,Of(e,a)}}function Nf(e,a,t){a=Ea(t,a),a=fi(e.stateNode,a,2),e=mt(e,a,2),e!==null&&(Hl(e,2),Qa(e))}function re(e,a,t){if(e.tag===3)Nf(e,e,t);else for(;a!==null;){if(a.tag===3){Nf(a,e,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(yt===null||!yt.has(l))){e=Ea(t,e),t=Nr(2),l=mt(a,t,2),l!==null&&(Mr(t,l,a,e),Hl(l,2),Qa(l));break}}a=a.return}}function Hi(e,a,t){var l=e.pingCache;if(l===null){l=e.pingCache=new i_;var n=new Set;l.set(a,n)}else n=l.get(a),n===void 0&&(n=new Set,l.set(a,n));n.has(t)||(Ti=!0,n.add(t),e=d_.bind(null,e,a,t),a.then(e,e))}function d_(e,a,t){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,_e===e&&(F&t)===t&&(Ee===4||Ee===3&&(F&62914560)===F&&300>oa()-Eu?(oe&2)===0&&zl(e,0):Ni|=t,El===F&&(El=0)),Qa(e)}function Mf(e,a){a===0&&(a=qc()),e=Ut(e,a),e!==null&&(Hl(e,a),Qa(e))}function m_(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Mf(e,t)}function __(e,a){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(m(314))}l!==null&&l.delete(a),Mf(e,t)}function v_(e,a){return ku(e,a)}var Nu=null,xl=null,Qi=!1,Mu=!1,Bi=!1,Et=0;function Qa(e){e!==xl&&e.next===null&&(xl===null?Nu=xl=e:xl=xl.next=e),Mu=!0,Qi||(Qi=!0,h_())}function hn(e,a){if(!Bi&&Mu){Bi=!0;do for(var t=!1,l=Nu;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var u=0;else{var o=l.suspendedLanes,i=l.pingedLanes;u=(1<<31-ca(42|e)+1)-1,u&=n&~(o&~i),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(t=!0,Uf(l,u))}else u=F,u=Un(l,l===_e?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Rl(l,u)||(t=!0,Uf(l,u));l=l.next}while(t);Bi=!1}}function p_(){Df()}function Df(){Mu=Qi=!1;var e=0;Et!==0&&O_()&&(e=Et);for(var a=oa(),t=null,l=Nu;l!==null;){var n=l.next,u=Cf(l,a);u===0?(l.next=null,t===null?Nu=n:t.next=n,n===null&&(xl=t)):(t=l,(e!==0||(u&3)!==0)&&(Mu=!0)),l=n}Me!==0&&Me!==5||hn(e),Et!==0&&(Et=0)}function Cf(e,a){for(var t=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var o=31-ca(u),i=1<<o,c=n[o];c===-1?((i&t)===0||(i&l)!==0)&&(n[o]=Ld(i,a)):c<=a&&(e.expiredLanes|=i),u&=~i}if(a=_e,t=F,t=Un(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&(se===2||se===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&$u(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Rl(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(l!==null&&$u(l),Iu(t)){case 2:case 8:t=Sc;break;case 32:t=Mn;break;case 268435456:t=Ec;break;default:t=Mn}return l=jf.bind(null,e),t=ku(t,l),e.callbackPriority=a,e.callbackNode=t,a}return l!==null&&l!==null&&$u(l),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,a){if(Me!==0&&Me!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Tu()&&e.callbackNode!==t)return null;var l=F;return l=Un(e,e===_e?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(_f(e,l,a),Cf(e,oa()),e.callbackNode!=null&&e.callbackNode===t?jf.bind(null,e):null)}function Uf(e,a){if(Tu())return null;_f(e,a,!0)}function h_(){N_(function(){(oe&6)!==0?ku(bc,p_):Df()})}function Yi(){if(Et===0){var e=fl;e===0&&(e=Dn,Dn<<=1,(Dn&261888)===0&&(Dn=256)),Et=e}return Et}function Rf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bn(""+e)}function Hf(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function g_(e,a,t,l,n){if(a==="submit"&&t&&t.stateNode===n){var u=Rf((n[Fe]||null).action),o=l.submitter;o&&(a=(a=o[Fe]||null)?Rf(a.formAction):o.getAttribute("formAction"),a!==null&&(u=a,o=null));var i=new Xn("action","action",null,l,n);e.push({event:i,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Et!==0){var c=o?Hf(n,o):new FormData(n);ui(t,{pending:!0,data:c,method:n.method,action:u},null,c)}}else typeof u=="function"&&(i.preventDefault(),c=o?Hf(n,o):new FormData(n),ui(t,{pending:!0,data:c,method:n.method,action:u},u,c))},currentTarget:n}]})}}for(var Vi=0;Vi<Eo.length;Vi++){var Gi=Eo[Vi],y_=Gi.toLowerCase(),b_=Gi[0].toUpperCase()+Gi.slice(1);Ma(y_,"on"+b_)}Ma(ds,"onAnimationEnd"),Ma(ms,"onAnimationIteration"),Ma(_s,"onAnimationStart"),Ma("dblclick","onDoubleClick"),Ma("focusin","onFocus"),Ma("focusout","onBlur"),Ma(Hm,"onTransitionRun"),Ma(Qm,"onTransitionStart"),Ma(Bm,"onTransitionCancel"),Ma(vs,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn));function Qf(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],n=l.event;l=l.listeners;e:{var u=void 0;if(a)for(var o=l.length-1;0<=o;o--){var i=l[o],c=i.instance,_=i.currentTarget;if(i=i.listener,c!==u&&n.isPropagationStopped())break e;u=i,n.currentTarget=_;try{u(n)}catch(g){Kn(g)}n.currentTarget=null,u=c}else for(o=0;o<l.length;o++){if(i=l[o],c=i.instance,_=i.currentTarget,i=i.listener,c!==u&&n.isPropagationStopped())break e;u=i,n.currentTarget=_;try{u(n)}catch(g){Kn(g)}n.currentTarget=null,u=c}}}}function W(e,a){var t=a[Pu];t===void 0&&(t=a[Pu]=new Set);var l=e+"__bubble";t.has(l)||(Bf(a,e,2,!1),t.add(l))}function Xi(e,a,t){var l=0;a&&(l|=4),Bf(t,e,l,a)}var Du="_reactListening"+Math.random().toString(36).slice(2);function Li(e){if(!e[Du]){e[Du]=!0,Mc.forEach(function(t){t!=="selectionchange"&&(S_.has(t)||Xi(t,!1,e),Xi(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Du]||(a[Du]=!0,Xi("selectionchange",!1,a))}}function Bf(e,a,t,l){switch(md(a)){case 2:var n=$_;break;case 8:n=W_;break;default:n=nc}t=n.bind(null,a,t,e),n=void 0,!co||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(a,t,{capture:!0,passive:n}):e.addEventListener(a,t,!0):n!==void 0?e.addEventListener(a,t,{passive:n}):e.addEventListener(a,t,!1)}function Zi(e,a,t,l,n){var u=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var i=l.stateNode.containerInfo;if(i===n)break;if(o===4)for(o=l.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;i!==null;){if(o=kt(i),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){l=u=o;continue e}i=i.parentNode}}l=l.return}Xc(function(){var _=u,g=oo(t),S=[];e:{var v=ps.get(e);if(v!==void 0){var h=Xn,D=e;switch(e){case"keypress":if(Vn(t)===0)break e;case"keydown":case"keyup":h=_m;break;case"focusin":D="focus",h=mo;break;case"focusout":D="blur",h=mo;break;case"beforeblur":case"afterblur":h=mo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=hm;break;case ds:case ms:case _s:h=um;break;case vs:h=ym;break;case"scroll":case"scrollend":h=em;break;case"wheel":h=Sm;break;case"copy":case"cut":case"paste":h=im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=wc;break;case"toggle":case"beforetoggle":h=qm}var V=(a&4)!==0,me=!V&&(e==="scroll"||e==="scrollend"),f=V?v!==null?v+"Capture":null:v;V=[];for(var s=_,d;s!==null;){var b=s;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||f===null||(b=Yl(s,f),b!=null&&V.push(yn(s,b,d))),me)break;s=s.return}0<V.length&&(v=new h(v,D,null,t,g),S.push({event:v,listeners:V}))}}if((a&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",v&&t!==uo&&(D=t.relatedTarget||t.fromElement)&&(kt(D)||D[wt]))break e;if((h||v)&&(v=g.window===g?g:(v=g.ownerDocument)?v.defaultView||v.parentWindow:window,h?(D=t.relatedTarget||t.toElement,h=_,D=D?kt(D):null,D!==null&&(me=Q(D),V=D.tag,D!==me||V!==5&&V!==27&&V!==6)&&(D=null)):(h=null,D=_),h!==D)){if(V=Kc,b="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(V=wc,b="onPointerLeave",f="onPointerEnter",s="pointer"),me=h==null?v:Bl(h),d=D==null?v:Bl(D),v=new V(b,s+"leave",h,t,g),v.target=me,v.relatedTarget=d,b=null,kt(g)===_&&(V=new V(f,s+"enter",D,t,g),V.target=d,V.relatedTarget=me,b=V),me=b,h&&D)a:{for(V=E_,f=h,s=D,d=0,b=f;b;b=V(b))d++;b=0;for(var R=s;R;R=V(R))b++;for(;0<d-b;)f=V(f),d--;for(;0<b-d;)s=V(s),b--;for(;d--;){if(f===s||s!==null&&f===s.alternate){V=f;break a}f=V(f),s=V(s)}V=null}else V=null;h!==null&&Yf(S,v,h,V,!1),D!==null&&me!==null&&Yf(S,me,D,V,!0)}}e:{if(v=_?Bl(_):window,h=v.nodeName&&v.nodeName.toLowerCase(),h==="select"||h==="input"&&v.type==="file")var ne=as;else if(Pc(v))if(ts)ne=jm;else{ne=Dm;var j=Mm}else h=v.nodeName,!h||h.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?_&&no(_.elementType)&&(ne=as):ne=Cm;if(ne&&(ne=ne(e,_))){es(S,ne,t,g);break e}j&&j(e,v,_),e==="focusout"&&_&&v.type==="number"&&_.memoizedProps.value!=null&&lo(v,"number",v.value)}switch(j=_?Bl(_):window,e){case"focusin":(Pc(j)||j.contentEditable==="true")&&(ll=j,yo=_,wl=null);break;case"focusout":wl=yo=ll=null;break;case"mousedown":bo=!0;break;case"contextmenu":case"mouseup":case"dragend":bo=!1,rs(S,t,g);break;case"selectionchange":if(Rm)break;case"keydown":case"keyup":rs(S,t,g)}var J;if(vo)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else tl?Fc(e,t)&&(I="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(kc&&t.locale!=="ko"&&(tl||I!=="onCompositionStart"?I==="onCompositionEnd"&&tl&&(J=Lc()):(ot=g,so="value"in ot?ot.value:ot.textContent,tl=!0)),j=Cu(_,I),0<j.length&&(I=new Jc(I,e,null,t,g),S.push({event:I,listeners:j}),J?I.data=J:(J=Ic(t),J!==null&&(I.data=J)))),(J=Am?xm(e,t):Om(e,t))&&(I=Cu(_,"onBeforeInput"),0<I.length&&(j=new Jc("onBeforeInput","beforeinput",null,t,g),S.push({event:j,listeners:I}),j.data=J)),g_(S,e,_,t,g)}Qf(S,a)})}function yn(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Cu(e,a){for(var t=a+"Capture",l=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Yl(e,t),n!=null&&l.unshift(yn(e,n,u)),n=Yl(e,a),n!=null&&l.push(yn(e,n,u))),e.tag===3)return l;e=e.return}return[]}function E_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yf(e,a,t,l,n){for(var u=a._reactName,o=[];t!==null&&t!==l;){var i=t,c=i.alternate,_=i.stateNode;if(i=i.tag,c!==null&&c===l)break;i!==5&&i!==26&&i!==27||_===null||(c=_,n?(_=Yl(t,u),_!=null&&o.unshift(yn(t,_,c))):n||(_=Yl(t,u),_!=null&&o.push(yn(t,_,c)))),t=t.return}o.length!==0&&e.push({event:a,listeners:o})}var q_=/\r\n?/g,z_=/\u0000|\uFFFD/g;function Vf(e){return(typeof e=="string"?e:""+e).replace(q_,`
`).replace(z_,"")}function Gf(e,a){return a=Vf(a),Vf(e)===a}function de(e,a,t,l,n,u){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Pt(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Pt(e,""+l);break;case"className":Hn(e,"class",l);break;case"tabIndex":Hn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Hn(e,t,l);break;case"style":Vc(e,l,u);break;case"data":if(a!=="object"){Hn(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Bn(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(t==="formAction"?(a!=="input"&&de(e,a,"name",n.name,n,null),de(e,a,"formEncType",n.formEncType,n,null),de(e,a,"formMethod",n.formMethod,n,null),de(e,a,"formTarget",n.formTarget,n,null)):(de(e,a,"encType",n.encType,n,null),de(e,a,"method",n.method,n,null),de(e,a,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Bn(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=Va);break;case"onScroll":l!=null&&W("scroll",e);break;case"onScrollEnd":l!=null&&W("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=Bn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":W("beforetoggle",e),W("toggle",e),Rn(e,"popover",l);break;case"xlinkActuate":Ya(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ya(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ya(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ya(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ya(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ya(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ya(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ya(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ya(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Rn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Id.get(t)||t,Rn(e,t,l))}}function Ki(e,a,t,l,n,u){switch(t){case"style":Vc(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=t}}break;case"children":typeof l=="string"?Pt(e,l):(typeof l=="number"||typeof l=="bigint")&&Pt(e,""+l);break;case"onScroll":l!=null&&W("scroll",e);break;case"onScrollEnd":l!=null&&W("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Va);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),a=t.slice(2,n?t.length-7:void 0),u=e[Fe]||null,u=u!=null?u[t]:null,typeof u=="function"&&e.removeEventListener(a,u,n),typeof l=="function")){typeof u!="function"&&u!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,l,n);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):Rn(e,t,l)}}}function Le(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",e),W("load",e);var l=!1,n=!1,u;for(u in t)if(t.hasOwnProperty(u)){var o=t[u];if(o!=null)switch(u){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:de(e,a,u,o,t,null)}}n&&de(e,a,"srcSet",t.srcSet,t,null),l&&de(e,a,"src",t.src,t,null);return;case"input":W("invalid",e);var i=u=o=n=null,c=null,_=null;for(l in t)if(t.hasOwnProperty(l)){var g=t[l];if(g!=null)switch(l){case"name":n=g;break;case"type":o=g;break;case"checked":c=g;break;case"defaultChecked":_=g;break;case"value":u=g;break;case"defaultValue":i=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,a));break;default:de(e,a,l,g,t,null)}}Hc(e,u,i,c,_,o,n,!1);return;case"select":W("invalid",e),l=o=u=null;for(n in t)if(t.hasOwnProperty(n)&&(i=t[n],i!=null))switch(n){case"value":u=i;break;case"defaultValue":o=i;break;case"multiple":l=i;default:de(e,a,n,i,t,null)}a=u,t=o,e.multiple=!!l,a!=null?It(e,!!l,a,!1):t!=null&&It(e,!!l,t,!0);return;case"textarea":W("invalid",e),u=n=l=null;for(o in t)if(t.hasOwnProperty(o)&&(i=t[o],i!=null))switch(o){case"value":l=i;break;case"defaultValue":n=i;break;case"children":u=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(m(91));break;default:de(e,a,o,i,t,null)}Bc(e,l,n,u);return;case"option":for(c in t)if(t.hasOwnProperty(c)&&(l=t[c],l!=null))switch(c){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:de(e,a,c,l,t,null)}return;case"dialog":W("beforetoggle",e),W("toggle",e),W("cancel",e),W("close",e);break;case"iframe":case"object":W("load",e);break;case"video":case"audio":for(l=0;l<gn.length;l++)W(gn[l],e);break;case"image":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"embed":case"source":case"link":W("error",e),W("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in t)if(t.hasOwnProperty(_)&&(l=t[_],l!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:de(e,a,_,l,t,null)}return;default:if(no(a)){for(g in t)t.hasOwnProperty(g)&&(l=t[g],l!==void 0&&Ki(e,a,g,l,t,void 0));return}}for(i in t)t.hasOwnProperty(i)&&(l=t[i],l!=null&&de(e,a,i,l,t,null))}function A_(e,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,o=null,i=null,c=null,_=null,g=null;for(h in t){var S=t[h];if(t.hasOwnProperty(h)&&S!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":c=S;default:l.hasOwnProperty(h)||de(e,a,h,null,l,S)}}for(var v in l){var h=l[v];if(S=t[v],l.hasOwnProperty(v)&&(h!=null||S!=null))switch(v){case"type":u=h;break;case"name":n=h;break;case"checked":_=h;break;case"defaultChecked":g=h;break;case"value":o=h;break;case"defaultValue":i=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(m(137,a));break;default:h!==S&&de(e,a,v,h,l,S)}}to(e,o,i,c,_,g,u,n);return;case"select":h=o=i=v=null;for(u in t)if(c=t[u],t.hasOwnProperty(u)&&c!=null)switch(u){case"value":break;case"multiple":h=c;default:l.hasOwnProperty(u)||de(e,a,u,null,l,c)}for(n in l)if(u=l[n],c=t[n],l.hasOwnProperty(n)&&(u!=null||c!=null))switch(n){case"value":v=u;break;case"defaultValue":i=u;break;case"multiple":o=u;default:u!==c&&de(e,a,n,u,l,c)}a=i,t=o,l=h,v!=null?It(e,!!t,v,!1):!!l!=!!t&&(a!=null?It(e,!!t,a,!0):It(e,!!t,t?[]:"",!1));return;case"textarea":h=v=null;for(i in t)if(n=t[i],t.hasOwnProperty(i)&&n!=null&&!l.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:de(e,a,i,null,l,n)}for(o in l)if(n=l[o],u=t[o],l.hasOwnProperty(o)&&(n!=null||u!=null))switch(o){case"value":v=n;break;case"defaultValue":h=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==u&&de(e,a,o,n,l,u)}Qc(e,v,h);return;case"option":for(var D in t)if(v=t[D],t.hasOwnProperty(D)&&v!=null&&!l.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:de(e,a,D,null,l,v)}for(c in l)if(v=l[c],h=t[c],l.hasOwnProperty(c)&&v!==h&&(v!=null||h!=null))switch(c){case"selected":e.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:de(e,a,c,v,l,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in t)v=t[V],t.hasOwnProperty(V)&&v!=null&&!l.hasOwnProperty(V)&&de(e,a,V,null,l,v);for(_ in l)if(v=l[_],h=t[_],l.hasOwnProperty(_)&&v!==h&&(v!=null||h!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,a));break;default:de(e,a,_,v,l,h)}return;default:if(no(a)){for(var me in t)v=t[me],t.hasOwnProperty(me)&&v!==void 0&&!l.hasOwnProperty(me)&&Ki(e,a,me,void 0,l,v);for(g in l)v=l[g],h=t[g],!l.hasOwnProperty(g)||v===h||v===void 0&&h===void 0||Ki(e,a,g,v,l,h);return}}for(var f in t)v=t[f],t.hasOwnProperty(f)&&v!=null&&!l.hasOwnProperty(f)&&de(e,a,f,null,l,v);for(S in l)v=l[S],h=t[S],!l.hasOwnProperty(S)||v===h||v==null&&h==null||de(e,a,S,v,l,h)}function Xf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function x_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var n=t[l],u=n.transferSize,o=n.initiatorType,i=n.duration;if(u&&i&&Xf(o)){for(o=0,i=n.responseEnd,l+=1;l<t.length;l++){var c=t[l],_=c.startTime;if(_>i)break;var g=c.transferSize,S=c.initiatorType;g&&Xf(S)&&(c=c.responseEnd,o+=g*(c<i?1:(i-_)/(c-_)))}if(--l,a+=8*(u+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ji=null,wi=null;function ju(e){return e.nodeType===9?e:e.ownerDocument}function Lf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zf(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function ki(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var $i=null;function O_(){var e=window.event;return e&&e.type==="popstate"?e===$i?!1:($i=e,!0):($i=null,!1)}var Kf=typeof setTimeout=="function"?setTimeout:void 0,T_=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,N_=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(e){return Jf.resolve(null).then(e).catch(M_)}:Kf;function M_(e){setTimeout(function(){throw e})}function qt(e){return e==="head"}function wf(e,a){var t=a,l=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(n),Ml(a);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")bn(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,bn(t);for(var u=t.firstChild;u;){var o=u.nextSibling,i=u.nodeName;u[Ql]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&u.rel.toLowerCase()==="stylesheet"||t.removeChild(u),u=o}}else t==="body"&&bn(e.ownerDocument.body);t=n}while(t);Ml(a)}function kf(e,a){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function Wi(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Wi(t),eo(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function D_(e,a,t,l){for(;e.nodeType===1;){var n=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ql])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Oa(e.nextSibling),e===null)break}return null}function C_(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Oa(e.nextSibling),e===null))return null;return e}function $f(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Oa(e.nextSibling),e===null))return null;return e}function Fi(e){return e.data==="$?"||e.data==="$~"}function Ii(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function j_(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Oa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Pi=null;function Wf(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Oa(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Ff(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function If(e,a,t){switch(a=ju(t),e){case"html":if(e=a.documentElement,!e)throw Error(m(452));return e;case"head":if(e=a.head,!e)throw Error(m(453));return e;case"body":if(e=a.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function bn(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);eo(e)}var Ta=new Map,Pf=new Set;function Uu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var tt=O.d;O.d={f:U_,r:R_,D:H_,C:Q_,L:B_,m:Y_,X:G_,S:V_,M:X_};function U_(){var e=tt.f(),a=Au();return e||a}function R_(e){var a=$t(e);a!==null&&a.tag===5&&a.type==="form"?vr(a):tt.r(e)}var Ol=typeof document>"u"?null:document;function ed(e,a,t){var l=Ol;if(l&&typeof a=="string"&&a){var n=ba(a);n='link[rel="'+e+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),Pf.has(n)||(Pf.add(n),e={rel:e,crossOrigin:t,href:a},l.querySelector(n)===null&&(a=l.createElement("link"),Le(a,"link",e),Re(a),l.head.appendChild(a)))}}function H_(e){tt.D(e),ed("dns-prefetch",e,null)}function Q_(e,a){tt.C(e,a),ed("preconnect",e,a)}function B_(e,a,t){tt.L(e,a,t);var l=Ol;if(l&&e&&a){var n='link[rel="preload"][as="'+ba(a)+'"]';a==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+ba(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+ba(t.imageSizes)+'"]')):n+='[href="'+ba(e)+'"]';var u=n;switch(a){case"style":u=Tl(e);break;case"script":u=Nl(e)}Ta.has(u)||(e=H({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Ta.set(u,e),l.querySelector(n)!==null||a==="style"&&l.querySelector(Sn(u))||a==="script"&&l.querySelector(En(u))||(a=l.createElement("link"),Le(a,"link",e),Re(a),l.head.appendChild(a)))}}function Y_(e,a){tt.m(e,a);var t=Ol;if(t&&e){var l=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+ba(l)+'"][href="'+ba(e)+'"]',u=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Nl(e)}if(!Ta.has(u)&&(e=H({rel:"modulepreload",href:e},a),Ta.set(u,e),t.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(En(u)))return}l=t.createElement("link"),Le(l,"link",e),Re(l),t.head.appendChild(l)}}}function V_(e,a,t){tt.S(e,a,t);var l=Ol;if(l&&e){var n=Wt(l).hoistableStyles,u=Tl(e);a=a||"default";var o=n.get(u);if(!o){var i={loading:0,preload:null};if(o=l.querySelector(Sn(u)))i.loading=5;else{e=H({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Ta.get(u))&&ec(e,t);var c=o=l.createElement("link");Re(c),Le(c,"link",e),c._p=new Promise(function(_,g){c.onload=_,c.onerror=g}),c.addEventListener("load",function(){i.loading|=1}),c.addEventListener("error",function(){i.loading|=2}),i.loading|=4,Ru(o,a,l)}o={type:"stylesheet",instance:o,count:1,state:i},n.set(u,o)}}}function G_(e,a){tt.X(e,a);var t=Ol;if(t&&e){var l=Wt(t).hoistableScripts,n=Nl(e),u=l.get(n);u||(u=t.querySelector(En(n)),u||(e=H({src:e,async:!0},a),(a=Ta.get(n))&&ac(e,a),u=t.createElement("script"),Re(u),Le(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function X_(e,a){tt.M(e,a);var t=Ol;if(t&&e){var l=Wt(t).hoistableScripts,n=Nl(e),u=l.get(n);u||(u=t.querySelector(En(n)),u||(e=H({src:e,async:!0,type:"module"},a),(a=Ta.get(n))&&ac(e,a),u=t.createElement("script"),Re(u),Le(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function ad(e,a,t,l){var n=(n=k.current)?Uu(n):null;if(!n)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Tl(t.href),t=Wt(n).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Tl(t.href);var u=Wt(n).hoistableStyles,o=u.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,o),(u=n.querySelector(Sn(e)))&&!u._p&&(o.instance=u,o.state.loading=5),Ta.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ta.set(e,t),u||L_(n,e,t,o.state))),a&&l===null)throw Error(m(528,""));return o}if(a&&l!==null)throw Error(m(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Nl(t),t=Wt(n).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function Tl(e){return'href="'+ba(e)+'"'}function Sn(e){return'link[rel="stylesheet"]['+e+"]"}function td(e){return H({},e,{"data-precedence":e.precedence,precedence:null})}function L_(e,a,t,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Le(a,"link",t),Re(a),e.head.appendChild(a))}function Nl(e){return'[src="'+ba(e)+'"]'}function En(e){return"script[async]"+e}function ld(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+ba(t.href)+'"]');if(l)return a.instance=l,Re(l),l;var n=H({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Re(l),Le(l,"style",n),Ru(l,t.precedence,e),a.instance=l;case"stylesheet":n=Tl(t.href);var u=e.querySelector(Sn(n));if(u)return a.state.loading|=4,a.instance=u,Re(u),u;l=td(t),(n=Ta.get(n))&&ec(l,n),u=(e.ownerDocument||e).createElement("link"),Re(u);var o=u;return o._p=new Promise(function(i,c){o.onload=i,o.onerror=c}),Le(u,"link",l),a.state.loading|=4,Ru(u,t.precedence,e),a.instance=u;case"script":return u=Nl(t.src),(n=e.querySelector(En(u)))?(a.instance=n,Re(n),n):(l=t,(n=Ta.get(u))&&(l=H({},t),ac(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Re(n),Le(n,"link",l),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(m(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Ru(l,t.precedence,e));return a.instance}function Ru(e,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,u=n,o=0;o<l.length;o++){var i=l[o];if(i.dataset.precedence===a)u=i;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function ec(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function ac(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Hu=null;function nd(e,a,t){if(Hu===null){var l=new Map,n=Hu=new Map;n.set(t,l)}else n=Hu,l=n.get(t),l||(l=new Map,n.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++){var u=t[n];if(!(u[Ql]||u[Ye]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var o=u.getAttribute(a)||"";o=e+o;var i=l.get(o);i?i.push(u):l.set(o,[u])}}return l}function ud(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Z_(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function od(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function K_(e,a,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Tl(l.href),u=a.querySelector(Sn(n));if(u){a=u._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Qu.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=u,Re(u);return}u=a.ownerDocument||a,l=td(l),(n=Ta.get(n))&&ec(l,n),u=u.createElement("link"),Re(u);var o=u;o._p=new Promise(function(i,c){o.onload=i,o.onerror=c}),Le(u,"link",l),t.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Qu.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var tc=0;function J_(e,a){return e.stylesheets&&e.count===0&&Yu(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&Yu(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+a);0<e.imgBytes&&tc===0&&(tc=62500*x_());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Yu(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>tc?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Qu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function Yu(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,a.forEach(w_,e),Bu=null,Qu.call(e))}function w_(e,a){if(!(a.state.loading&4)){var t=Bu.get(e);if(t)var l=t.get(null);else{t=new Map,Bu.set(e,t);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var o=n[u];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(t.set(o.dataset.precedence,o),l=o)}l&&t.set(null,l)}n=a.instance,o=n.getAttribute("data-precedence"),u=t.get(o)||l,u===l&&t.set(null,n),t.set(o,n),this.count++,l=Qu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4}}var qn={$$typeof:Ce,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function k_(e,a,t,l,n,u,o,i,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wu(0),this.hiddenUpdates=Wu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function id(e,a,t,l,n,u,o,i,c,_,g,S){return e=new k_(e,a,t,o,c,_,g,S,i),a=1,u===!0&&(a|=24),u=ra(3,null,null,a),e.current=u,u.stateNode=e,a=Ro(),a.refCount++,e.pooledCache=a,a.refCount++,u.memoizedState={element:l,isDehydrated:t,cache:a},Yo(u),e}function cd(e){return e?(e=ol,e):ol}function sd(e,a,t,l,n,u){n=cd(n),l.context===null?l.context=n:l.pendingContext=n,l=dt(a),l.payload={element:t},u=u===void 0?null:u,u!==null&&(l.callback=u),t=mt(e,l,a),t!==null&&(la(t,e,a),en(t,e,a))}function rd(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function lc(e,a){rd(e,a),(e=e.alternate)&&rd(e,a)}function fd(e){if(e.tag===13||e.tag===31){var a=Ut(e,67108864);a!==null&&la(a,e,67108864),lc(e,67108864)}}function dd(e){if(e.tag===13||e.tag===31){var a=va();a=Fu(a);var t=Ut(e,a);t!==null&&la(t,e,a),lc(e,a)}}var Vu=!0;function $_(e,a,t,l){var n=y.T;y.T=null;var u=O.p;try{O.p=2,nc(e,a,t,l)}finally{O.p=u,y.T=n}}function W_(e,a,t,l){var n=y.T;y.T=null;var u=O.p;try{O.p=8,nc(e,a,t,l)}finally{O.p=u,y.T=n}}function nc(e,a,t,l){if(Vu){var n=uc(l);if(n===null)Zi(e,a,l,Gu,t),_d(e,l);else if(I_(n,e,a,t,l))l.stopPropagation();else if(_d(e,l),a&4&&-1<F_.indexOf(e)){for(;n!==null;){var u=$t(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var o=Nt(u.pendingLanes);if(o!==0){var i=u;for(i.pendingLanes|=2,i.entangledLanes|=2;o;){var c=1<<31-ca(o);i.entanglements[1]|=c,o&=~c}Qa(u),(oe&6)===0&&(qu=oa()+500,hn(0))}}break;case 31:case 13:i=Ut(u,2),i!==null&&la(i,u,2),Au(),lc(u,2)}if(u=uc(l),u===null&&Zi(e,a,l,Gu,t),u===n)break;n=u}n!==null&&l.stopPropagation()}else Zi(e,a,l,null,t)}}function uc(e){return e=oo(e),oc(e)}var Gu=null;function oc(e){if(Gu=null,e=kt(e),e!==null){var a=Q(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=P(a),e!==null)return e;e=null}else if(t===31){if(e=ae(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Gu=e,null}function md(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hd()){case bc:return 2;case Sc:return 8;case Mn:case Qd:return 32;case Ec:return 268435456;default:return 32}default:return 32}}var ic=!1,zt=null,At=null,xt=null,zn=new Map,An=new Map,Ot=[],F_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _d(e,a){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":zn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(a.pointerId)}}function xn(e,a,t,l,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:u,targetContainers:[n]},a!==null&&(a=$t(a),a!==null&&fd(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function I_(e,a,t,l,n){switch(a){case"focusin":return zt=xn(zt,e,a,t,l,n),!0;case"dragenter":return At=xn(At,e,a,t,l,n),!0;case"mouseover":return xt=xn(xt,e,a,t,l,n),!0;case"pointerover":var u=n.pointerId;return zn.set(u,xn(zn.get(u)||null,e,a,t,l,n)),!0;case"gotpointercapture":return u=n.pointerId,An.set(u,xn(An.get(u)||null,e,a,t,l,n)),!0}return!1}function vd(e){var a=kt(e.target);if(a!==null){var t=Q(a);if(t!==null){if(a=t.tag,a===13){if(a=P(t),a!==null){e.blockedOn=a,Tc(e.priority,function(){dd(t)});return}}else if(a===31){if(a=ae(t),a!==null){e.blockedOn=a,Tc(e.priority,function(){dd(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xu(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=uc(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);uo=l,t.target.dispatchEvent(l),uo=null}else return a=$t(t),a!==null&&fd(a),e.blockedOn=t,!1;a.shift()}return!0}function pd(e,a,t){Xu(e)&&t.delete(a)}function P_(){ic=!1,zt!==null&&Xu(zt)&&(zt=null),At!==null&&Xu(At)&&(At=null),xt!==null&&Xu(xt)&&(xt=null),zn.forEach(pd),An.forEach(pd)}function Lu(e,a){e.blockedOn===a&&(e.blockedOn=null,ic||(ic=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,P_)))}var Zu=null;function hd(e){Zu!==e&&(Zu=e,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Zu===e&&(Zu=null);for(var a=0;a<e.length;a+=3){var t=e[a],l=e[a+1],n=e[a+2];if(typeof l!="function"){if(oc(l||t)===null)continue;break}var u=$t(t);u!==null&&(e.splice(a,3),a-=3,ui(u,{pending:!0,data:n,method:t.method,action:l},l,n))}}))}function Ml(e){function a(c){return Lu(c,e)}zt!==null&&Lu(zt,e),At!==null&&Lu(At,e),xt!==null&&Lu(xt,e),zn.forEach(a),An.forEach(a);for(var t=0;t<Ot.length;t++){var l=Ot[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ot.length&&(t=Ot[0],t.blockedOn===null);)vd(t),t.blockedOn===null&&Ot.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var n=t[l],u=t[l+1],o=n[Fe]||null;if(typeof u=="function")o||hd(t);else if(o){var i=null;if(u&&u.hasAttribute("formAction")){if(n=u,o=u[Fe]||null)i=o.formAction;else if(oc(n)!==null)continue}else i=o.action;typeof i=="function"?t[l+1]=i:(t.splice(l,3),l-=3),hd(t)}}}function gd(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function cc(e){this._internalRoot=e}Ku.prototype.render=cc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(m(409));var t=a.current,l=va();sd(t,l,e,a,null,null)},Ku.prototype.unmount=cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;sd(e.current,2,null,e,null,null),Au(),a[wt]=null}};function Ku(e){this._internalRoot=e}Ku.prototype.unstable_scheduleHydration=function(e){if(e){var a=Oc();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Ot.length&&a!==0&&a<Ot[t].priority;t++);Ot.splice(t,0,e),t===0&&vd(e)}};var yd=U.version;if(yd!=="19.2.4")throw Error(m(527,yd,"19.2.4"));O.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=q(a),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var ev={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ju.isDisabled&&Ju.supportsFiber)try{Ul=Ju.inject(ev),ia=Ju}catch{}}return Tn.createRoot=function(e,a){if(!T(e))throw Error(m(299));var t=!1,l="",n=Ar,u=xr,o=Or;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=id(e,1,!1,null,null,t,l,null,n,u,o,gd),e[wt]=a.current,Li(e),new cc(a)},Tn.hydrateRoot=function(e,a,t){if(!T(e))throw Error(m(299));var l=!1,n="",u=Ar,o=xr,i=Or,c=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError),t.formState!==void 0&&(c=t.formState)),a=id(e,1,!0,a,t??null,l,n,c,u,o,i,gd),a.context=cd(null),t=a.current,l=va(),l=Fu(l),n=dt(l),n.callback=null,mt(t,n,l),t=l,a.current.lanes=t,Hl(a,t),Qa(a),e[wt]=a.current,Li(e),new Ku(a)},Tn.version="19.2.4",Tn}var Nd;function fv(){if(Nd)return fc.exports;Nd=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(U){console.error(U)}}return z(),fc.exports=rv(),fc.exports}var dv=fv();const mv=Dd(dv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=(...z)=>z.filter((U,B,m)=>!!U&&U.trim()!==""&&m.indexOf(U)===B).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=z=>z.replace(/^([A-Z])|[\s-_]+(\w)/g,(U,B,m)=>m?m.toUpperCase():B.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=z=>{const U=vv(z);return U.charAt(0).toUpperCase()+U.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=z=>{for(const U in z)if(U.startsWith("aria-")||U==="role"||U==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ve.forwardRef(({color:z="currentColor",size:U=24,strokeWidth:B=2,absoluteStrokeWidth:m,className:T="",children:Q,iconNode:P,...ae},C)=>ve.createElement("svg",{ref:C,...pv,width:U,height:U,stroke:z,strokeWidth:m?Number(B)*24/Number(U):B,className:Cd("lucide",T),...!Q&&!hv(ae)&&{"aria-hidden":"true"},...ae},[...P.map(([q,w])=>ve.createElement(q,w)),...Array.isArray(Q)?Q:[Q]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=(z,U)=>{const B=ve.forwardRef(({className:m,...T},Q)=>ve.createElement(gv,{ref:Q,iconNode:U,className:Cd(`lucide-${_v(Md(z))}`,`lucide-${z}`,m),...T}));return B.displayName=Md(z),B};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],bv=Je("book-open",yv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ev=Je("chevron-down",Sv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],zv=Je("chevron-up",qv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],xv=Je("coffee",Av);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Tv=Je("download",Ov);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Mv=Je("eye-off",Nv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Cv=Je("eye",Dv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Uv=Je("menu",jv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],vc=Je("message-square-plus",Rv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Qv=Je("moon",Hv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Yv=Je("sun",Bv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],Gv=Je("text-align-justify",Vv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 19H3",key:"z6ezky"}]],Lv=Je("text-align-start",Xv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Kv=Je("trash-2",Zv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],wv=Je("type",Jv);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],pc=Je("x",kv),hc="O Eu que Sobra",$v="Marcos Vinx",Wv=[{title:"PARTE I — O QUE TE AFASTOU DE VOCÊ",items:["Capítulo 1 — O Silêncio Que Você Temeu","Capítulo 2 — A Sociedade Que Te Desenhou Sem Te Perguntar","Capítulo 3 — O Peso Invisível dos Outros em Você"]},{title:"PARTE II — QUEM VOCÊ SEMPRE FOI",items:["Capítulo 4 — O Seu Campo: A Energia Que Te Precede","Capítulo 5 — O Ego: O Guardião Mal-Interpretado","Capítulo 6 — A Identidade Essencial: O Eu Que Permanece"]},{title:"PARTE III — A VOLTA PARA O CENTRO",items:["Capítulo 7 — O Autodomínio Que Reorganiza a Vida","Capítulo 8 — A Vida Construída de Dentro Para Fora","Capítulo 9 — O Eixo: Viver a Partir do Eu Que Sobra"]},{title:"EPÍLOGO — O Ser Que Lembra de Si",items:[]},{title:"EXTRA — Caderno de Práticas Internas",items:["Exercícios","Perguntas","Rituais","Exercícios de presença","Práticas de clareza (estilo eugente)"]}],Fv=`
📘 INTRODUÇÃO — A ÉTICA DO RETORNO A SI
Existe uma pergunta que quase ninguém faz, mas todos deveriam enfrentar ao menos uma vez na vida:
“Quem eu sou quando ninguém está olhando?”
Pode parecer simples, mas a simplicidade às vezes carrega verdade demais.
É por isso que tantas pessoas evitam essa pergunta. Porque, sem perceber, elas se tornaram personagens dentro de suas próprias histórias — moldadas por expectativas, urgências, opiniões, medos e demandas que as afastaram do centro.
Vivemos tão ocupados em nos adaptar que esquecemos de nos escutar.
Nos querem produtivos.
Nos querem úteis.
Nos querem presentes, mas quase nunca presentes em nós.
O mundo moderno é uma máquina de ruído — e o ruído é mestre em apagar a verdade interna.
Quando você tenta encaixar-se em cada espaço, atender cada voz, cumprir cada papel, o que sobra de você?
A resposta é dura, mas libertadora:
Quase nada.
Não porque você não exista.
Mas porque você se diluiu tentando existir para os outros.
Este livro nasce exatamente aqui — na fronteira entre quem você virou e quem você é de verdade.
________________


O Chamado do Silêncio
Há momentos na vida em que o universo sussurra:
pare, respire, escute.
Mas nós não ouvimos.
Ouvimos notificações.
Ouvimos comparações.
Ouvimos medo travestido de urgência.
Só que existe um tipo de silêncio que não pede — ele exige.
É aquele silêncio que chega quando a vida já te mostrou que continuar vivendo desconectado de si é caro demais.
Quando o cansaço não é físico, mas existencial.
Quando as conquistas não preenchem.
Quando a presença não significa conexão.
Quando há pessoas ao redor, mas você se sente invisível para si mesmo.
Esse silêncio não te abandona.
Ele te espera.
E quando ele finalmente te alcança, você entende:
A vida começa de verdade quando você desacelera o suficiente para se escutar.
O silêncio não é vazio.
É território sagrado.
É o espaço onde você volta a existir.
________________


O Peso Invisível
Muito antes de você saber quem era, disseram quem você deveria ser.
Disseram como se comportar.
Disseram o que é sucesso.
Disseram quando falar, quando calar, como agir, como sentir.
E você tentou.
Tentou tanto que quase se esqueceu de reparar no peso imenso que carregava — um peso que não era seu.
Algumas gotas desse peso são visíveis.
A maioria não.
Ele se esconde em frases como:
“Você precisa ser forte.”
“Você precisa ser melhor.”
“Você precisa fazer mais.”
“Você precisa corresponder.”
E cada “precisa” foi tirando um pedaço do que você realmente queria.
Este livro é o processo de devolução.
De todas as expectativas que você aceitou sem perceber.
De todas as molduras que não te servem mais.
De todos os papéis que distorceram sua identidade.
Aqui, você vai aprender a devolver o que não te pertence.
E recuperar o que sempre foi seu.
________________


O Eu Que Sobra
Existe uma versão sua que nunca foi corrompida.
Nunca foi condicionada.
Nunca foi comparada.
Nunca foi diminuída.
Ela sempre esteve aí — silenciosa, intacta, esperando que você removesse tudo aquilo que colocaram sobre ela.
Essa versão é o Eu Que Sobra.
O Eu que permanece depois das camadas.
Depois das expectativas.
Depois dos medos.
Depois dos ruídos.
Depois dos papéis.
A sua identidade essencial não é construída.
Ela é revelada.
Você não vai se reinventar neste livro.
Você vai se lembrar.
________________


O Movimento do Retorno
O caminho de volta para si é um movimento.
Um retorno gradual, profundo, consciente.
Não exige velocidade.
Exige honestidade.
Ao longo deste livro, você vai:
   * silenciar ruídos que te distorcem

   * remover pesos que nunca foram seus

   * entender seu campo energético e emocional

   * equilibrar seu ego sem demonizá-lo

   * reorganizar sua mente

   * recuperar presença

   * reconstruir sua identidade a partir de dentro

   * criar uma vida centrada no seu eixo interno

Não será um processo de descobrir algo novo.
Será um processo de reconhecer o que sempre existiu em você.
________________


Este Livro é um Espelho
Não espere que eu te diga quem você deve ser.
Minha função aqui não é te entregar uma forma.
É te ajudar a encontrar o espaço interno onde a sua forma verdadeira pode emergir.
Cada capítulo é uma pausa.
Cada pausa é um retorno.
Cada retorno é uma lembrança.
A lembrança de que você não está perdido.
Você só está envolvido demais no personagem que precisou criar para sobreviver.
Mas agora começa outra fase.
A fase de viver.
E para viver, você não precisa de mais personagens.
Precisa de menos.
Precisa de você.
Do Eu que sobra quando o mundo inteiro se afasta.
________________


Se você permitir, este livro vai te acompanhar até o centro da sua existência — onde a vida finalmente faz sentido porque você voltou a ocupar o seu lugar nela.
O lugar que sempre foi seu.
O lugar do Eu que sobra.


📘 CAPÍTULO 1 — O SILÊNCIO QUE VOCÊ TEMEU
Existe um tipo de barulho que não vem de fora.
Ele vem de dentro.
É o barulho que você usa para não ouvir a si mesmo.
Parece paradoxal — um barulho interno para abafar o interno —
mas é exatamente isso que a mente faz quando ela teme aquilo que pode encontrar no silêncio.
Por isso, a maioria das pessoas evita qualquer momento de quietude real.
Preferem a sensação de ocupação constante, ainda que exaustiva, do que a vulnerabilidade de ficar a sós com o próprio mundo interno.
O silêncio é mais perigoso que o caos porque ele não mente.
E quando você entra nele… não há para onde correr.
________________


1. O Silêncio é o Lugar Onde Você se Encontra
O silêncio é um espelho.
E é impossível olhar para um espelho sem encontrar sua própria verdade.
A verdade não negociada.
A verdade não editada.
A verdade que sobra quando você não está tentando impressionar ninguém.
O silêncio te coloca frente a frente com perguntas que você não soube responder —
ou preferiu fingir que não existiam.
“Por que eu estou vivendo assim?”
“Por que eu aceito o que me machuca?”
“O que eu realmente quero?”
“Por que estou sempre cansado?”
“Quando foi que me perdi de mim?”
Perguntas assim não aparecem quando a mente está ocupada.
Elas só surgem quando a mente se aquieta — e o silêncio começa a falar.
________________


2. O Medo da Revelação
As pessoas dizem que têm medo da solidão, mas não têm.
O medo real é de encontrar algo dentro delas que exija mudança.
Mudança custa.
Mudança confronta.
Mudança mexe em estruturas que você amortizou por anos.
Então, a mente cria “ocupação”.
Trabalho demais.
Agenda demais.
Rolagem infinita nas redes.
Apego a entretenimentos vazios.
Conversas superficiais que preenchem sem nutrir.
Tudo isso são estratégias inconscientes para evitar a revelação que o silêncio traz.
Porque o silêncio revela o que você tem adiando.
E é impossível desver aquilo que foi visto.
________________


3. A Vida que se Grita Porque Não Quer se Ouvir
Observe o mundo moderno:
• música constante
• notificações intermináveis
• séries automáticas
• conversas aceleradas
• excesso de opinião
• urgências fabricadas
• conteúdo sem pausa
• estímulos sem digestão
Nada disso é por acaso.
Nós, como espécie, criamos um sistema onde o barulho é celebrado.
O barulho distrai.
E a distração mantém você longe de si.
A pergunta é:
por que existimos em tanta pressa para não sentir?
Porque sentir exige coragem.
E coragem sempre começa no silêncio.
________________


4. O Silêncio é Onde a Identidade se Reorganiza
Você pode até evitar seus pensamentos.
Mas não pode evitar a sensação interna de desalinhamento.
A pessoa que vive desconectada de si sempre sente:
      * um estranhamento leve

      * uma insatisfação silenciosa

      * uma ansiedade que não tem nome

      * uma vontade difusa de fugir

      * um cansaço que não descansa

      * uma falta que nada preenche

Essa falta não é falta de algo externo.
É falta de você.
E o único jeito de se reencontrar
é dando ao seu ser o que ele mais precisa:
um espaço onde ele possa existir.
O silêncio é esse espaço.
Não o silêncio físico —
mas o silêncio interno, aquele que acontece quando você para de argumentar consigo mesmo.
________________


5. O Primeiro Contato Consigo Mesmo
O primeiro silêncio verdadeiro é estranho.
Para algumas pessoas, ele vem como uma paz inesperada.
Para outras, como um peso acumulado.
Para outras, como lágrimas antigas.
E para muitas, como um desconforto que não sabem explicar.
Mas todas passam pelo mesmo ponto:
o reconhecimento do eu esquecido.
O eu que ficou para trás enquanto você corria.
O eu que você prometeu cuidar “mais tarde”.
O eu que você abandonou por sobrevivência, mas não por escolha.
Esse eu nunca desistiu de você.
Ele só esperou o momento em que você tivesse consciência o suficiente para voltar.
E esse momento começa agora.
________________


6. A Simples Verdade Sobre o Silêncio
O silêncio é o professor mais honesto que você terá na vida.
Ele não grita.
Não força.
Não humilha.
Não pressiona.
Ele apenas mostra.
Mostra aquilo que precisa ser visto.
Mostra a dor que você adiou.
Mostra o desejo que você abafou.
Mostra o cansaço que você ignorou.
Mostra a verdade que você enterrou.
E quando você olha…
entende porque passou tanto tempo fugindo.
Mas também entende algo maior:
nada é tão assustador quanto continuar desconectado de si.
________________


7. Um Novo Começo Exige Silêncio
Toda redefinição começa com uma pausa.
Toda clareza começa com uma interrupção.
Toda cura começa com um vazio.
O silêncio é o solo fértil onde o Eu Que Sobra começa a emergir.
Não porque o silêncio te transforma,
mas porque ele revela o que já estava pronto para aparecer.
É por isso que o mundo teme o silêncio:
porque ele devolve você a você mesmo.
E, paradoxalmente, é por isso que você precisa dele.
________________


✦ PRÁTICA FINAL — “Os 5 Minutos de Retorno”
(exercício simples, poderoso e editorial)
Durante os próximos 7 dias, faça este ritual:
         1. Sente-se sem música, sem celular, sem estímulos.

         2. Coloque as mãos sobre as pernas.

         3. Respire fundo 4 vezes.

         4. Pergunte silenciosamente a si mesmo:
“O que dentro de mim está pedindo para ser ouvido?”

         5. Não responda.
Apenas escute.

         6. Observe o que surge: emoção, memória, sensação, silêncio.

         7. Agradeça a presença — e encerre.

Não é meditação.
Não é técnica.
É reencontro.


📘 CAPÍTULO 2 — A SOCIEDADE QUE TE DESENHOU SEM TE PERGUNTAR
Antes de você aprender a dizer “eu”, o mundo já estava te dizendo “você é assim”.
Antes de você sonhar seus próprios caminhos, alguém já havia imaginado caminhos para você.
Antes de você construir sua identidade, mil influências já estavam competindo para moldá-la.
Você nasceu no meio de um projeto que não foi seu.
Um projeto feito de expectativas herdadas, crenças antigas, narrativas familiares, padrões comportamentais e estruturas sociais que operam muito antes de você estar consciente delas.
Este capítulo não é sobre culpar.
É sobre entender o terreno onde sua personalidade foi plantada.
Porque ninguém desperta sem compreender de onde vem as suas raízes —
e que muitas delas não são suas.
________________


1. O Roteiro Invisível que te Acompanhou
A maior parte do que você acredita sobre si não nasceu em você —
nasceu ao seu redor.
Desde o primeiro dia, você recebeu:
            * histórias sobre quem deveria ser

            * regras sobre como deveria agir

            * modelos silenciosos sobre como deveria viver

            * expectativas sobre como deveria sentir

            * padrões que você nem percebeu que absorveu

E essas informações não chegaram como conselhos;
chegaram como realidade.
Crianças não questionam o mundo.
Elas absorvem.
E você, sem perceber, absorveu ideias que moldaram seus próximos 20, 30, 40 anos:
“Isso é certo.”
“Isso é errado.”
“Isso é bonito.”
“Isso é feio.”
“Isso é possível.”
“Isso é ousado demais.”
“Isso não é para você.”
“Isso é o que você precisa ser.”
Você cresceu acreditando que estava se tornando alguém…
mas estava, na verdade, reagindo ao mundo.
E há uma diferença enorme entre ser e reagir.
________________


2. A Família: A Primeira Arquitetura do Seu Eu
Toda família é uma estrutura energética — e você nasceu dentro da sua antes mesmo de entender o que era energia.
Você absorveu:
• medos que não eram seus
• inseguranças que não eram suas
• padrões emocionais que não eram seus
• crenças limitantes que não eram suas
• formas de lidar com o mundo que não eram suas
Algumas famílias ensinam coragem.
Outras ensinam medo.
Algumas ensinam liberdade.
Outras ensinam obediência.
Algumas ensinam amor aberto.
Outras ensinam amor condicionado.
Mas todas — absolutamente todas — moldam profundamente a percepção que você tem de si.
E o mais importante:
essa moldura foi construída sem sua permissão.
Você não escolheu a energia em que nasceu.
Mas agora, adulto, você pode escolher em qual energia deseja viver.
E essa é a chave da libertação.
________________


3. A Escola: A Fábrica de Formatos
A escola não foi apenas um lugar onde você aprendeu conteúdos.
Foi o lugar onde você aprendeu como deveria se comportar.
Sente quieto.
Levante a mão.
Não questione.
Não erre.
Não chore.
Não se atrase.
Não interrompa.
Não pense diferente.
O sistema educacional foi construído para formar pessoas “corretas”, não pessoas conscientes.
E você, tentando sobreviver dentro dele, aprendeu a caber.
Aprendeu a diminuir.
Aprendeu a obedecer.
Aprendeu a esconder pensamentos.
Aprendeu a buscar aprovação externa.
Aprendeu algo que se tornaria um dos maiores obstáculos da vida adulta:
você aprendeu a ser aceito, não a ser você.
________________


4. A Cultura: O Manual de Como Viver Sem Pensar
Cada cultura entrega um manual invisível sobre como viver.
Um manual cheio de:
               * rotinas esperadas

               * papéis pré-definidos

               * modelos de sucesso engessados

               * hierarquias sociais

               * padrões de comportamento

               * sonhos que são “certos”

               * escolhas que são “erradas”

Se você seguir o manual, é aplaudido.
Se você questiona, é estranho.
Se você desafia, é quebrado.
A sociedade não nos treina para a autenticidade.
Nos treina para funcionar.
O problema?
Funcionar não é viver.
E chega uma fase da vida em que você percebe:
está funcionando bem demais…
mas vivendo de menos.
________________


5. A Identidade Construída em Camadas que Não São Suas
Você cresceu acreditando que suas escolhas eram suas.
Mas muitas delas eram apenas repetições automáticas do ambiente onde você foi moldado.
Se você olhar com atenção, vai perceber:
                  * medos que você carrega vêm de outras pessoas

                  * limites que você impôs foram herdados, não escolhidos

                  * inseguranças foram plantadas antes de você entender o mundo

                  * padrões emocionais foram copiados, não criados

                  * expectativas sobre você não nasceram em você

                  * a forma como você ama foi aprendida

                  * a forma como você se protege foi herdada

O “eu” que você acha que é…
pode ser apenas o personagem que precisou ser.
Mas existe outro Eu.
O Eu que não foi desenhado de fora pra dentro.
O Eu que nasceu para existir — não para se adaptar.
O Eu que sobra quando você remove tudo isso.
Este livro é sobre reencontrá-lo.
________________


6. Quando o Mundo te Define, Você Envelhece Sem se Conhecer
Há pessoas que chegam aos 30, 40, 50 anos com uma sensação estranha:
“Eu vivi tudo isso…
mas não sei se vivi como eu mesmo.”
Elas cumpriram papéis.
Elas seguiram mapas.
Elas foram o que se esperava.
Mas lá dentro — naquele lugar que só o silêncio alcança —
elas sabem que algo está faltando.
Essa falta não é falta de conquista.
É falta de identidade.
E essa é a dor mais profunda do ser humano:
ter vivido, mas não ter sido.
________________


7. O Despertar: Quando Você Percebe que Não Quer Ser o que Te Fizeram Ser
Chega um dia em que algo muda.
Às vezes é uma crise.
Às vezes é um cansaço.
Às vezes é um rompimento.
Às vezes é um silêncio profundo.
Mas sempre vem um momento de verdade:
“Eu não quero continuar vivendo assim.”
Esse é o início do despertar.
Não é dramático.
Não é cinematográfico.
É só honesto.
E toda honestidade interna é um portal.
A partir desse portal, uma nova pergunta surge:
“Se eu não sou o que o mundo fez de mim…
então quem sou eu?”
A resposta?
O Eu que sobra.
________________


✦ PRÁTICA FINAL — “O Inventário das Vozes”
(exercício profundo, simples e transformador)
Durante os próximos 3 dias, faça o exercício abaixo:
1. Pegue uma folha e divida ao meio.
Escreva nas duas colunas:
💬 Coluna 1:
 “O que me disseram que eu deveria ser?”
💬 Coluna 2:
 “O que eu realmente desejo ser?”
Não filtre.
Não racionalize.
Apenas escreva.
2. Observe contrastes.
Eles mostrarão com clareza:
                     * onde você está preso

                     * onde você está desconectado

                     * onde você se traiu

                     * onde você se esqueceu

3. Circule apenas 1 item da segunda coluna.
Aquele que mais chama sua atenção.
Esse é o seu primeiro passo rumo ao Eu que sobra.
4. Durante 24 horas, aja como se ele fosse verdade.
Apenas 24 horas.
Para sentir a energia de ser você.
Esse exercício muda rumos.
Árvores internas começam a se mover.
E verdades adormecidas começam a acordar.


📘 CAPÍTULO 3 — O PESO INVISÍVEL DOS OUTROS EM VOCÊ
Há um fenômeno silencioso que acontece com todos nós, independentemente da idade, da história ou do tipo de vida que levamos:
carregamos fardos que não nos pertencem.
Fardos que não escolhemos.
Fardos que nunca questionamos.
Fardos que se tornaram tão familiares que confundimos com identidade.
Mas não são identidade.
São apenas eco.
Eco das dores dos outros.
Eco das expectativas dos outros.
Eco dos medos dos outros.
Eco das crenças dos outros.
Eco das projeções dos outros.
E, ao longo de anos, esse eco se torna tão alto que você passa a acreditar que ele é você.
Este capítulo é um desmanchar.
Uma limpeza.
Um retorno ao espaço interno onde sua energia não está contaminada.
________________


1. O Peso que Ninguém Vê, Mas Todo Mundo Sente
O maior peso que existe não está nos ombros.
Está no peito.
É aquele peso silencioso, discreto, constante.
Aquele que te acompanha por anos, te tirando 3% de energia todos os dias — até que, quando você percebe, já está vivendo no negativo.
Esse peso aparece como:
                        * um cansaço que nunca passa

                        * uma dificuldade de respirar fundo

                        * um pensamento repetitivo

                        * uma culpa que não tem nome

                        * uma ansiedade que não tem origem

                        * uma sensação de inadequação

                        * uma autocobrança agressiva

                        * uma irritação sem motivo

                        * uma tristeza que você esconde até de si mesmo

As pessoas ao redor podem não perceber, mas você percebe.
E percebe há anos.
O problema é que, como não tem forma,
você não sabe como se livrar dele.
Mas a verdade é simples:
esse peso tem dono — e provavelmente não é você.
________________


2. A Dor que Não é Sua, Mas Que Você Aprendeu a Carregar
Uma das grandes tragédias silenciosas da vida humana é que herdamos não apenas a genética, mas a emocionalidade da nossa origem.
Você absorveu:
                           * culpas da sua mãe

                           * frustrações do seu pai

                           * tensões emocionais da sua casa

                           * medos que não eram seus

                           * inseguranças que vieram antes de você nascer

                           * expectativas que não faziam sentido para sua alma

                           * responsabilidades que pertenciam a outros

                           * dores não processadas por gerações

E tudo isso foi entrando em você tão cedo
que você nem percebeu a invasão.
Crianças não questionam emoções.
Apenas copiam.
E o que é copiado cedo demais é carregado por tempo demais.
________________


3. O Peso Invisível da Comparação
Existe um tipo de peso que corrói a alma por dentro:
a comparação.
Não é a comparação óbvia das redes sociais.
É uma comparação muito mais profunda e ancestral:
                              * “Por que eu não sou como eles queriam?”

                              * “Por que eu não consigo ser igual ao meu irmão?”

                              * “Por que não sou bom o suficiente?”

                              * “Por que nunca pareço corresponder?”

                              * “Por que eu sempre sinto que falta algo?”

Essas perguntas são cargas emocionais ocultas que drenam sua identidade real.
Porque quando você vive tentando atender um ideal que nunca foi seu,
você vive em falência emocional.
E quando você vive em falência emocional,
você perde acesso ao seu verdadeiro eu.
________________


4. A Culpa que Não é Culpa — é Memória
Culpa é uma emoção poderosa.
Mas a culpa que mais machuca não vem das nossas ações.
Vem das narrativas que herdamos.
Culpa por não ser perfeito.
Culpa por não corresponder.
Culpa por sentir demais.
Culpa por sentir de menos.
Culpa por querer algo diferente.
Culpa por se afastar do que machuca.
Culpa por escolher a própria paz.
Culpa não nasce espontaneamente.
Culpa é ensinada.
E quando você aprende culpa cedo demais,
cresce acreditando que é responsável pelo mundo inteiro — menos por si mesmo.
Essa culpa não é sua.
É um condicionamento.
E condicionamentos podem ser desfeitos.
________________


5. As Projeções que Adoecem
As pessoas não veem você.
Elas veem o que conseguem ver a partir das lentes que carregam.
Quando alguém te diz “você é difícil”,
está dizendo, na verdade:
“não sei lidar com o que você desperta em mim”.
Quando alguém te diz “você é exagerado”,
está dizendo:
“não sei como sentir o que você sente”.
Quando alguém te diz “você é demais”,
está dizendo:
“não tenho espaço emocional para esse tamanho”.
O erro está em acreditar nessas projeções
como se fossem verdades.
E quando você acredita,
assume como identidade coisas que nunca foram suas.
________________


6. O Peso dos Silêncios
Às vezes o peso não vem do que foi dito.
Vem do que nunca foi dito.
Do amor que você queria ouvir e não ouviu.
Do abraço que você esperou e não veio.
Da validação que sempre faltou.
Da permissão que nunca existiu.
Da presença que foi ausente demais.
Da ausência que foi presente demais.
O silêncio também pesa.
E pesa de uma forma difícil de explicar —
porque é um vazio com forma.
Mas mesmo o silêncio herdado pode ser devolvido.
________________


7. Reconhecer é Começar a Devolver
Quando você reconhece que está carregando algo que não é seu,
o fardo começa a se desfazer.
Porque o peso invisível só permanece invisível
enquanto você acredita que ele é natural.
A partir do momento em que você diz:
“Isso não é meu.”
algo interno se realinha.
O corpo respira de outro jeito.
A mente expande alguns centímetros.
A alma avança um passo silencioso.
Não é libertação total.
Mas é o início dela.
E todo início é sagrado.
________________


✦ PRÁTICA FINAL — “A Devolução Silenciosa”
(exercício profundo para desligar pesos herdados)
Durante os próximos 5 dias, repita este ritual de forma simples:
1. Sente-se por 2 minutos.
Respire profundamente.
2. Coloque uma mão no peito e outra no abdômen.
3. Imagine mentalmente uma caixa diante de você.
Uma caixa neutra, sem cor, sem peso.
4. Diga silenciosamente:
“Tudo o que não me pertence, eu devolvo.”
5. Observe o que seu corpo entrega à caixa.
Pode vir em forma de:
                                 * uma sensação

                                 * uma memória

                                 * uma emoção

                                 * uma imagem

                                 * um peso

                                 * um nome

                                 * um silêncio

6. Quando algo surgir, diga:
“Eu não carrego mais isso.”
7. Feche a caixa mentalmente.
E se levante.
Esse ritual, repetido por poucos dias, reorganiza profundamente seu campo emocional.
Porque o que é seu fica.
Mas o que não é seu…
finalmente vai embora.


📘 CAPÍTULO 4 — O SEU CAMPO: A ENERGIA QUE TE PRECEDE
Antes mesmo de você abrir a boca, antes de dar um passo, antes de pensar em como se posicionar, já existe algo em ação:
seu campo energético.
Não importa se você acredita ou não.
Não importa se entende ou não.
Não importa se percebe ou não.
O fato é simples:
tudo que existe em você comunica — e comunica antes da sua fala.
Você já sentiu isso.
Quando entra em uma sala e sente um peso.
Quando conversa com alguém e se sente drenado.
Quando conhece uma pessoa e sente confiança imediata.
Quando alguém passa perto e parece expandir o ambiente inteiro.
Quando outra passa e parece encolher tudo ao redor.
Nada disso é coincidência.
É campo.
________________


1. O Campo Não é Místico — é Natural
Se você jogar uma pedra num lago, a água reage.
Se aproximar um ímã de um metal, ele responde.
Se aproximar calor de gelo, ele derrete.
Tudo tem campo.
Tudo influencia o que está próximo.
A diferença é que, no ser humano, esse campo é também emocional, psicológico e vibracional.
Você carrega uma assinatura.
Uma vibração.
Uma atmosfera interna.
Uma presença.
E essa presença vai à sua frente.
Ela anuncia você antes de você se anunciar.
Seu corpo chega depois.
Seu campo chega primeiro.
________________


2. O Campo é Construído por Três Forças
Existem três forças que moldam seu campo diariamente:
1) A energia que você cultiva internamente
Seu estado emocional predominante:
                                    * raiva

                                    * leveza

                                    * medo

                                    * paz

                                    * ansiedade

                                    * centramento

                                    * insegurança

                                    * força

                                    * pressa

                                    * presença

Tudo isso cria frequência.
2) A narrativa que você sustenta sobre si
O que você acredita:
                                       * “eu sou suficiente”

                                       * “eu sou fraco”

                                       * “eu não pertenço aqui”

                                       * “ninguém me vê”

                                       * “eu mereço”

                                       * “eu não posso falhar”

A energia segue o pensamento — e o pensamento constrói identidade.
3) Seu nível de presença
Quanto mais você está:
                                          * disperso

                                          * reativo

                                          * ansioso

                                          * desconectado

                                          * ausente

mais fraco seu campo fica.
Quanto mais você está:
                                             * atento

                                             * centrado

                                             * respirando

                                             * consciente

                                             * aqui e agora

mais forte seu campo se torna.
________________


3. A Lei do Campo: “Você Rege o Espaço que Consegue Sentir”
Você nunca domina um ambiente tentando dominá-lo.
O ambiente é dominado quando você domina a si mesmo dentro dele.
Essa é a grande lei:
Quem controla o próprio estado interno controla o campo.
Quem controla o campo controla a atmosfera.
Quem controla a atmosfera controla o ambiente.
Não se trata de poder.
Trata-se de presença.
Poder força.
Presença estabiliza.
E o mundo se curva para quem está estável.
________________


4. Como Seu Campo É Lido pelos Outros
As pessoas não respondem às suas palavras.
Respondem ao que você transmite por baixo delas.
É por isso que:
                                                * um “bom dia” pode parecer falso

                                                * um “não” pode parecer fraco

                                                * um elogio pode parecer ataque

                                                * uma opinião pode parecer soberba

                                                * um silêncio pode parecer agressivo

                                                * uma presença pode parecer magnética

Não é o que você diz.
É a energia que sustenta o que você diz.
Assim como um perfume que fica no ar,
seu campo deixa rastro.
Alguns deixam rastro de paz.
Outros de tensão.
Outros de pressa.
Outros de dúvida.
Outros de confiança.
Outros de verdade.
E o mais importante:
o rastro não mente.
________________


5. O Campo Fraco: Quando Sua Energia te Trai
Um campo enfraquecido cria distorções na sua vida:
                                                   * você fala e ninguém leva a sério

                                                   * você entra e ninguém percebe

                                                   * você pede e ninguém atende

                                                   * você tenta se explicar e não é compreendido

                                                   * você trabalha e ninguém valoriza

                                                   * você dá e ninguém reconhece

                                                   * você está presente, mas parece invisível

Nada disso tem a ver com competência.
Tem a ver com campo.
Se seu campo está fragmentado, sua presença desaparece.
Você some energeticamente — mesmo estando ali fisicamente.
________________


6. O Campo Forte: Quando Sua Presença Chega Antes de Você
Um campo fortalecido reorganiza tudo:
                                                      * sua fala ganha peso

                                                      * sua presença ganha profundidade

                                                      * seu olhar ganha clareza

                                                      * seu corpo transmite segurança

                                                      * pessoas te ouvem sem esforço

                                                      * ambientes se alinham à sua energia

                                                      * conflitos diminuem

                                                      * oportunidades aparecem

                                                      * você influencia sem tentar

Não porque você exige.
Mas porque você existe presente.
O campo forte não é um campo de poder.
É um campo de coerência.
Coerência é irresistível.
________________


7. A Respiração Como Arquitetura do Campo
O campo é moldado pela respiração.
A respiração:
                                                         * estabiliza

                                                         * desacelera

                                                         * limpa

                                                         * expande

                                                         * organiza

                                                         * fortalece

Respirar não é só fisiológico.
É energético.
Quem respira consciente
ancora o ambiente inteiro.
Quem respira raso
é ancorado pelo ambiente.
A diferença é brutal.
________________


8. O Seu Campo é Sua Casa Interna
O mundo pode te tirar tudo:
                                                            * estabilidade

                                                            * dinheiro

                                                            * rotina

                                                            * direção

                                                            * relações

                                                            * certezas

Mas não pode tirar seu campo —
a não ser que você entregue.
Quando você fortalece seu campo,
você cria uma casa interna onde pode habitar em qualquer lugar.
E essa casa vai com você:
no trabalho,
na família,
nos conflitos,
nos escolhas,
nos encontros,
nos silêncios.
Esse é o Eu Que Sobra.
O eu que permanece mesmo quando tudo desmorona.
O eu que não pode ser roubado.
O eu que não se adapta ao caos — ele reorganiza o caos ao redor.
________________


✦ PRÁTICA FINAL — “O Campo de 1 Metro”
(exercício profundo para fortalecer presença)
Durante os próximos 7 dias, pratique esta técnica simples:
1. Ao entrar em qualquer ambiente, pare por 2 segundos.
2. Imagine um campo invisível de 1 metro ao seu redor.
3. Sinta seu corpo ocupando esse espaço com consciência.
4. Respire fundo 3 vezes.
5. Diga internamente:
“Eu estou aqui.”
6. Caminhe como quem carrega esse campo.
Sem arrogância.
Sem tensão.
Sem pressa.
Apenas presença.
Você perceberá:
                                                               * mudanças na sua postura

                                                               * mudanças na reação das pessoas

                                                               * mudanças na sua percepção

                                                               * mudanças na sua energia

                                                               * mudanças na sua autoridade natural

Essa prática é transformadora.
Porque ela não te ensina a ser forte.
Ela te lembra que você já é.


📘 CAPÍTULO 5 — O Ego: O Guardião Mal-Interpretado
O ego não é o vilão.
Nunca foi.
Ele apenas assumiu um papel maior do que deveria.
Desde cedo, o ego nasce como um mecanismo de sobrevivência.
Ele aprende nomes, limites, perigos.
Aprende a dizer “isso sou eu” e “isso não sou eu”.
Sem ele, a criança se dissolve no mundo.
O problema não é o ego existir.
O problema é ele continuar governando quando já não é mais necessário.
O ego foi criado para proteger.
Mas, quando não é educado, ele passa a controlar.
E controle não é consciência.
É medo organizado.
________________


O erro mais comum
A maioria das pessoas acredita que precisa matar o ego.
Outras acreditam que precisa alimentá-lo.
Ambas estão erradas.
Quem tenta destruir o ego se perde.
Quem o alimenta demais se aprisiona.
O caminho é outro:
o ego precisa ser colocado no lugar certo.
Ele não é o rei.
Ele é o porteiro.
________________


O ego como filtro
O ego filtra experiências.
Ele interpreta o mundo com base em memórias passadas.
Por isso, duas pessoas vivem a mesma situação —
e reagem de formas completamente diferentes.
Não é o mundo que muda.
É o filtro.
Quando o ego está no comando, você reage antes de perceber.
Defende antes de entender.
Ataca antes de escutar.
Quando a consciência assume o comando, o ego continua ali —
mas agora obediente.
________________


A armadilha da identidade
O ego se apega a histórias:
                                                                  * “Eu sempre fui assim”

                                                                  * “Isso não é pra mim”

                                                                  * “As pessoas sempre me fazem isso”

                                                                  * “Eu preciso provar algo”

Essas frases não são verdades.
São âncoras.
Enquanto você defende uma identidade, você deixa de evoluir.
Porque toda defesa é resistência.
O Eu Que Sobra não precisa ser defendido.
Ele apenas é.
________________


O silêncio como sinal de maturidade
Observe pessoas realmente centradas.
Elas falam menos.
Reagem menos.
Não explicam demais.
Não porque são frias —
mas porque não precisam se proteger o tempo todo.
O ego grita.
A consciência observa.
Quem fala demais geralmente está tentando convencer —
o outro ou a si mesmo.
________________


Quando o ego está no lugar certo
Quando o ego está alinhado:
• Ele protege sem sabotar
• Ele dá identidade sem rigidez
• Ele sustenta limites sem agressividade
• Ele serve à consciência, não o contrário
Nesse ponto, algo muda profundamente:
Você deixa de viver em reação.
E começa a viver em presença.
________________


Exercício silencioso
Não responda agora.
Apenas observe.
Em quais situações você reage automaticamente?
Onde você sente necessidade de provar algo?
Em que momentos você se sente ameaçado sem motivo real?
Esses pontos não são falhas.
São portas.
E toda porta leva para dentro.


📘 CAPÍTULO 6 — A Energia Antes da Palavra
Antes de qualquer palavra existir, algo já foi comunicado.
Antes de qualquer gesto, algo já foi sentido.
Antes de qualquer decisão, algo já se moveu.
Esse algo é a energia.
Não no sentido místico.
No sentido real, perceptível, cotidiano.
Você já sentiu alguém entrar em um ambiente e “pesar” o ar.
Já sentiu outra pessoa entrar e trazer leveza sem dizer nada.
Já sentiu confiança — e desconfiança — sem explicação lógica.
Isso não é intuição mágica.
É leitura de campo.
________________


O mundo não escuta palavras. Ele sente estados.
A maior ilusão moderna é acreditar que a comunicação começa na fala.
Não começa.
A comunicação começa no estado interno de quem comunica.
Por isso:
                                                                     * há pessoas que dizem coisas certas e não convencem

                                                                     * há pessoas que dizem pouco e transformam ambientes

                                                                     * há discursos perfeitos que soam vazios

                                                                     * há silêncios que reorganizam tudo

A palavra é apenas o veículo.
A energia é o conteúdo real.
________________


A incoerência que o corpo denuncia
Você pode dizer “está tudo bem”,
mas seu corpo diz “não está”.
Pode dizer “estou confiante”,
mas sua respiração diz “estou em alerta”.
Pode dizer “não me importo”,
mas seu tom diz “estou ferido”.
As pessoas não acreditam no que você fala.
Elas acreditam no que seu corpo sustenta.
O corpo não mente porque ele não sabe mentir.
Ele apenas responde ao estado interno real.
________________


A raiz de todo conflito
Grande parte dos conflitos humanos não nasce da discordância de ideias.
Nasce da discordância energética.
Uma pessoa fala a partir do medo.
Outra escuta a partir da defesa.
Uma fala tentando controlar.
Outra escuta tentando se proteger.
E nenhuma delas percebe que o problema não é o assunto.
É o estado.
Quando dois estados desorganizados se encontram, nasce o atrito.
Quando um estado estável encontra outro instável, nasce o domínio silencioso.
________________


O verdadeiro poder não tenta convencer
Convencer é esforço.
Presença é gravidade.
Tudo que tenta demais revela insegurança.
Tudo que força demais revela medo de não ser suficiente.
O Eu Que Sobra não força.
Ele sustenta.
E quando algo é sustentado com coerência, o mundo se ajusta ao redor.
Não por submissão.
Mas por ressonância.
________________


A energia decide antes da mente
Você acha que escolhe racionalmente.
Mas a decisão já foi tomada no corpo segundos antes.
A mente apenas constrói a justificativa depois.
Por isso você:
                                                                        * sente rejeição sem saber por quê

                                                                        * confia sem motivo lógico

                                                                        * se afasta sem explicação clara

                                                                        * se aproxima sem planejar

O corpo lê o campo.
A mente narra a história depois.
Quando você entende isso, para de lutar contra o mundo
e começa a regular o próprio estado.
________________


Regular o estado muda tudo
Quem aprende a regular o próprio estado interno:
                                                                           * fala menos, impacta mais

                                                                           * reage menos, resolve mais

                                                                           * se explica menos, é mais compreendido

                                                                           * disputa menos, ocupa mais espaço

                                                                           * convence sem tentar

Não porque virou “melhor”.
Mas porque está alinhado.
Alinhamento é quando pensamento, emoção e corpo apontam na mesma direção.
Isso cria densidade.
Isso cria presença.
Isso cria autoridade natural.
________________


O silêncio como ferramenta de poder
O silêncio não é ausência de comunicação.
É comunicação em estado puro.
Quando você silencia sem tensão, você força o outro a se revelar.
Quando você não reage, você desloca o eixo do ambiente.
Quando você sustenta presença, o caos perde força.
O silêncio do Eu Que Sobra não é fuga.
É estabilidade.
E estabilidade é rara.
________________


Exercício de consciência
Durante os próximos dias, observe:
Antes de falar, como está seu corpo?
Antes de responder, como está sua respiração?
Antes de decidir, qual emoção já está presente?
Não tente mudar nada ainda.
Apenas perceba.
Percepção é o início de todo domínio real.
________________


O ponto de virada
Quando você entende que a energia vem antes da palavra,
você para de tentar controlar o mundo.
E começa a organizar a si mesmo.
A partir daqui, o livro muda de tom.
Saímos da desmontagem…
e entramos na reconstrução consciente.


📘 CAPÍTULO 7 — Autodomínio: a Arquitetura do Centro
Autodomínio não é controle.
Nunca foi.
Controle é tensão.
Autodomínio é ordem interna.
Quem tenta se controlar está em guerra consigo mesmo.
Quem se domina está em acordo.
O Eu Que Sobra não luta contra impulsos.
Ele os compreende, regula e direciona.
E isso muda tudo.
________________


O erro de confundir força com rigidez
A maioria das pessoas acredita que autodomínio é:
                                                                              * reprimir emoções

                                                                              * engolir reações

                                                                              * ser “forte” o tempo todo

                                                                              * não demonstrar nada

                                                                              * endurecer

Isso não é autodomínio.
Isso é acúmulo.
E tudo o que é acumulado sem consciência explode — cedo ou tarde.
O verdadeiro domínio é flexível.
Ele sente, mas não se perde.
Ele reage, mas não se afoga.
Ele age, mas não é impulsivo.
________________


O centro interno
Imagine um eixo.
Quando você está centrado, tudo gira ao redor de você.
Quando você perde o centro, você gira ao redor do mundo.
Quem gira demais cansa.
Quem é eixo sustenta.
Autodomínio é aprender a voltar para o centro, independentemente do que acontece fora.
Críticas.
Conflitos.
Perdas.
Pressões.
Elogios.
Sucesso.
Tudo isso testa seu eixo.
________________


Emoção não é inimiga — é sinal
Toda emoção traz uma informação.
Raiva aponta limite.
Medo aponta risco.
Tristeza aponta perda.
Alegria aponta alinhamento.
O problema não é sentir.
O problema é agir sem ler o sinal.
O Eu Que Sobra não elimina emoções.
Ele as traduz.
Quando você traduz a emoção antes de agir,
você deixa de ser refém dela.
________________


O intervalo entre estímulo e resposta
Entre o que acontece e o que você faz, existe um espaço.
Esse espaço é invisível para a maioria das pessoas.
Elas reagem direto.
Autodomínio nasce quando você expande esse espaço.
Um segundo a mais de silêncio.
Uma respiração consciente.
Uma pausa antes da palavra.
Nesse intervalo, você escolhe.
E escolha consciente é liberdade real.
________________


O corpo como âncora
O centro não está só na mente.
Ele está no corpo.
Quem perde o corpo perde o eixo.
Postura curvada gera submissão interna.
Respiração curta gera ansiedade.
Tensão constante gera reação.
Autodomínio começa no simples:
• pés no chão
• respiração profunda
• olhar estável
• presença no agora
O corpo organiza a mente.
Não o contrário.
________________


Disciplina sem violência
Autodomínio não exige brutalidade consigo mesmo.
Exige ritmo.
Pequenas decisões consistentes constroem um centro inabalável.
Dormir melhor.
Comer com atenção.
Mover o corpo.
Silenciar diariamente.
Dizer menos “sim”.
Dizer mais “não”.
Essas escolhas parecem simples.
Mas elas constroem respeito interno.
E quem se respeita…
não se trai.
________________


Quando o centro está firme
Quando seu eixo está estável:
                                                                                 * o mundo não te puxa tanto

                                                                                 * opiniões não te atravessam

                                                                                 * conflitos não te consomem

                                                                                 * urgências perdem poder

                                                                                 * decisões ficam mais claras

Você não se torna frio.
Você se torna claro.
Clareza é calma em forma de consciência.
________________


Exercício de eixo
Sempre que algo te tirar do centro, faça apenas isso:
                                                                                    1. Pare por 3 segundos

                                                                                    2. Sinta os pés no chão

                                                                                    3. Respire fundo uma vez

                                                                                    4. Pergunte internamente:
“O que aqui é meu e o que não é?”

Só isso.
Essa pergunta reorganiza o campo interno quase instantaneamente.
________________


O ponto de maturidade
Autodomínio não te afasta da vida.
Ele te devolve a ela.
Você sente mais.
Mas se perde menos.
Você vive intensamente.
Mas não caoticamente.
Esse é o estado do Eu Que Sobra:
presente, íntegro e inteiro.


📘 CAPÍTULO 8 — Reconstruir a Vida de Dentro para Fora
Agora entramos na fase de reconstrução consciente.
Aqui o livro deixa de ser apenas introspectivo e se torna estrutural — mostrando como o Eu Que Sobra começa a organizar a vida real.
________________


Reconstruir a Vida de Dentro para Fora
Toda vida desorganizada é reflexo de um centro confuso.
E toda vida clara nasce de um eixo firme.
O erro da maioria das pessoas é tentar mudar o cenário antes de mudar o ponto de onde observa.
Trocam de cidade.
Trocam de trabalho.
Trocam de relação.
Trocam de rotina.
Mas levam consigo o mesmo estado interno.
Resultado:
o cenário muda,
o padrão se repete.
Reconstruir de dentro para fora é entender que a vida obedece ao estado.
________________


O mundo responde à sua coerência
A vida não responde às suas intenções.
Responde à sua frequência sustentada.
Não ao que você diz querer.
Mas ao que você vive diariamente.
Quando há desalinhamento interno:
                                                                                       * escolhas se confundem

                                                                                       * relações drenam

                                                                                       * oportunidades somem

                                                                                       * energia se perde

                                                                                       * decisões pesam

Quando há alinhamento:
                                                                                          * o caminho se simplifica

                                                                                          * pessoas certas permanecem

                                                                                          * excessos caem sozinhos

                                                                                          * limites surgem naturalmente

Não é mágica.
É coerência em ação.
________________


Relações: o primeiro espelho
Nada revela mais seu estado interno do que suas relações.
Você não se relaciona com quem quer.
Você se relaciona com quem combina com sua frequência atual.
Quando você se organiza por dentro, algo inevitável acontece:
                                                                                             * relações desalinhadas começam a incomodar

                                                                                             * conversas vazias cansam

                                                                                             * dramas perdem graça

                                                                                             * vínculos baseados em medo se rompem

Isso não é frieza.
É maturidade.
O Eu Que Sobra não mantém vínculos por carência.
Ele escolhe por afinidade real.
________________


Trabalho e propósito
Propósito não é algo que você encontra.
É algo que emerge quando você está alinhado.
Quando você tenta “descobrir seu propósito” sem centro,
você projeta desejos do ego.
Quando você constrói centro,
o propósito aparece como consequência.
Você começa a perceber:
                                                                                                * o que te drena

                                                                                                * o que te expande

                                                                                                * onde sua energia flui

                                                                                                * onde sua presença faz diferença

O trabalho deixa de ser fuga.
E vira extensão.
________________


Tempo: o recurso mais honesto
Nada denuncia mais um estado interno do que o uso do tempo.
Quem está perdido se ocupa demais.
Quem está centrado escolhe.
Reconstruir de dentro para fora exige recuperar o tempo.
Menos distração.
Menos ruído.
Menos urgência artificial.
Mais presença.
Mais profundidade.
Mais intenção.
O Eu Que Sobra não corre.
Ele caminha com peso.
________________


Decisões simples, efeitos profundos
A reconstrução não começa com grandes atos.
Começa com pequenas escolhas diárias.
Escolher dormir melhor.
Escolher comer com atenção.
Escolher sair de conversas vazias.
Escolher não responder no impulso.
Escolher silêncio quando antes havia explicação.
Essas escolhas parecem pequenas.
Mas elas mudam o eixo.
E quando o eixo muda, a vida acompanha.
________________


O medo da simplicidade
Muitos têm medo de viver alinhados porque alinhar simplifica.
E simplicidade expõe.
Quando você vive alinhado, não há onde se esconder.
Não há excesso para disfarçar.
Não há ruído para anestesiar.
Só você.
E isso assusta.
Mas é exatamente aí que a vida começa a fazer sentido.
________________


Exercício de reconstrução
Pergunte-se, sem julgamento:
O que na minha vida existe apenas por hábito?
O que eu manteria se ninguém estivesse olhando?
O que eu faria se estivesse profundamente alinhado comigo?
Não responda tudo agora.
Anote mentalmente.
Essas perguntas são bússolas.
________________


O início de uma vida mais verdadeira
Reconstruir de dentro para fora não cria uma vida perfeita.
Cria uma vida honesta.
E honestidade gera leveza.
Gera presença.
Gera paz funcional.
Não a paz do isolamento.
Mas a paz de quem sabe onde pisa.


📘 CAPÍTULO 9 — O Eixo: Viver a Partir do Eu Que Sobra
Depois de tudo o que foi desmontado, compreendido e reorganizado, resta uma pergunta simples:
Como viver, daqui para frente?
Não como ideal.
Não como promessa.
Mas como prática diária.
A resposta é menos complexa do que parece:
vivendo a partir do eixo.
________________


O que é o eixo
O eixo não é rigidez.
Não é isolamento.
Não é superioridade.
O eixo é estabilidade interna em movimento.
É quando você:
                                                                                                   * sabe quem é, mesmo quando duvida

                                                                                                   * sente emoções, sem se perder nelas

                                                                                                   * escuta o mundo, sem se dissolver nele

                                                                                                   * se adapta, sem se trair

                                                                                                   * muda, sem se abandonar

Viver a partir do eixo é estar no mundo sem ser engolido por ele.
________________


Quando o eixo está firme
Quando você vive a partir do Eu Que Sobra:
                                                                                                      * você não reage a tudo

                                                                                                      * você não explica tudo

                                                                                                      * você não aceita tudo

                                                                                                      * você não luta por tudo

Você escolhe.
E escolha consciente reduz drasticamente o ruído da vida.
Não porque os problemas acabam,
mas porque eles param de te desorganizar.
________________


O fim da busca externa
Uma das maiores mudanças internas acontece aqui:
você para de procurar fora o que só existe dentro.
Menos busca por validação.
Menos necessidade de aprovação.
Menos comparação.
Menos urgência de provar algo.
Não porque você desistiu do mundo,
mas porque voltou para si.
O Eu Que Sobra não compete.
Ele ocupa.
________________


Autoridade silenciosa
Existe um tipo de autoridade que não vem do cargo, do dinheiro ou da fala.
Ela vem da coerência.
Pessoas coerentes:
                                                                                                         * não precisam se impor

                                                                                                         * não precisam convencer

                                                                                                         * não precisam impressionar

                                                                                                         * não precisam dominar

Elas sustentam presença.
E o mundo reconhece isso, mesmo sem entender por quê.
________________


O caos deixa de ser inimigo
Quando você está no eixo, o caos perde o poder de te assustar.
Crises passam a ser informação.
Conflitos passam a ser dados.
Erros passam a ser ajustes.
Quedas passam a ser leitura de rota.
Você não romantiza o caos.
Mas também não foge dele.
Você o atravessa.
________________


O Eu Que Sobra em ação
Viver a partir do Eu Que Sobra significa:
• agir com clareza
• falar com intenção
• silenciar com presença
• decidir com consciência
• parar quando necessário
• avançar quando alinhado
Nada forçado.
Nada teatral.
Nada teatral.
A vida volta ao tamanho certo.
________________


Exercício final do eixo
Sempre que se sentir perdido, faça apenas isso:
                                                                                                            1. Pare

                                                                                                            2. Respire

                                                                                                            3. Pergunte:
“Se eu estivesse no meu eixo, o que faria agora?”

Não busque a resposta perfeita.
Busque a resposta honesta.
Ela sempre aparece.
________________


Um novo tipo de força
A força do Eu Que Sobra não é agressiva.
É inegociável.
Você não se explica demais.
Não se justifica demais.
Não se abandona.
E isso muda tudo.


📘 EPÍLOGO — O Ser que Lembra de Si
No fim, tudo se resume a isso:
lembrar.
Você nunca esteve quebrado.
Nunca esteve faltando.
Nunca esteve atrasado.
Você apenas se afastou de si para sobreviver.
E sobreviver exige adaptações.
Máscaras.
Silêncios.
Durezas.
Concessões.
Nada disso foi erro.
Foi estratégia.
Mas chega um momento em que a estratégia cansa.
E o que antes protegia começa a sufocar.
É aí que o retorno acontece.
________________


O retorno não é um evento
Ele é um movimento contínuo.
Você não “chega” ao Eu Que Sobra.
Você volta a ele, repetidas vezes.
Cada vez que:
                                                                                                               * escolhe a verdade em vez da conveniência

                                                                                                               * escolhe silêncio em vez de reação

                                                                                                               * escolhe presença em vez de distração

                                                                                                               * escolhe respeito interno em vez de aprovação externa

você retorna.
________________


A maturidade do ser
Maturidade não é endurecer.
É simplificar sem perder profundidade.
Você passa a viver com menos ruído,
menos conflito interno,
menos urgência inventada.
E com mais clareza,
mais presença,
mais consistência.
A vida deixa de ser uma batalha constante.
E passa a ser um caminho habitável.
________________


O mundo continua o mesmo
As pessoas continuam confusas.
O caos continua existindo.
As pressões continuam chegando.
O que muda é onde você está quando tudo isso acontece.
Você não está mais espalhado.
Você está em si.
E isso é tudo.
________________


O Eu Que Sobra
O Eu Que Sobra não é um ideal espiritual.
Não é um personagem evoluído.
Não é alguém acima dos outros.
É apenas você —
sem excesso,
sem ruído,
sem medo como guia.
É o você que consegue ficar sozinho sem fugir.
Que consegue estar com outros sem se perder.
Que consegue sentir sem se afogar.
É o você que lembrou de si.
________________


Se este livro funcionou
Se algo aqui tocou você,
não tente guardar tudo.
Guarde apenas isso:
Voltar para si é sempre possível.
Basta parar de se abandonar.
E quando esquecer — porque você vai esquecer —
volte.
O caminho nunca fecha.
________________


Fim
(ou começo)
Este livro termina aqui.
Mas o movimento que ele aponta não termina.
Ele apenas começa
toda vez que você escolhe viver
a partir do eixo.
A partir do Eu que sobra.


📘 EXTRA — CADERNO DE PRÁTICAS INTERNAS
(Para acessar, sustentar e viver o Eu Que Sobra)
Este caderno não é para ser lido com pressa.
É para ser habitado.
Não execute tudo.
Escolha o que ressoa.
O resto se revela com o tempo.
________________


I · EXERCÍCIOS DE PRESENÇA
(Para sair da mente e voltar ao corpo)
1. O Ponto de Retorno
Duração: 2 minutos
                                                                                                                  1. Pare onde estiver

                                                                                                                  2. Sinta os pés tocando o chão

                                                                                                                  3. Leve a atenção para a respiração

                                                                                                                  4. Não mude nada

                                                                                                                  5. Apenas perceba

Frase interna:
“Estou aqui.”
Esse exercício não acalma.
Ele ancora.
________________


2. O Corpo como Centro
Duração: 3 minutos
                                                                                                                     1. Endireite suavemente a coluna

                                                                                                                     2. Solte os ombros

                                                                                                                     3. Relaxe a mandíbula

                                                                                                                     4. Inspire profundo uma vez

                                                                                                                     5. Expire lentamente

Observe:
                                                                                                                        * tensão

                                                                                                                        * peso

                                                                                                                        * alinhamento

Onde o corpo se organiza,
a mente acompanha.
________________


3. O Olhar Presente
Duração: 1 minuto
Escolha um ponto fixo.
Olhe sem pensar.
Sem julgar.
Sem interpretar.
Quando o olhar estabiliza,
o campo interno se alinha.
________________


II · PRÁTICAS DE CLAREZA
(Estilo Eugente — simples, diretas, estruturais)
4. A Pergunta-Eixo
Sempre que estiver confuso:
“O que aqui é essencial e o que é ruído?”
Não responda rápido.
A resposta certa costuma vir em silêncio.
________________


5. A Regra do Centro
Antes de qualquer decisão:
“Isso fortalece ou enfraquece meu eixo?”
Se enfraquece, não é agora.
Se fortalece, avance.
________________


6. O Filtro Eugente
Use este filtro mental:
                                                                                                                           * Estou reagindo ou escolhendo?

                                                                                                                           * Estou tentando agradar ou sendo coerente?

                                                                                                                           * Isso vem do medo ou da clareza?

Responda sem se justificar.
________________


III · RITUAIS SIMPLES
(Para sustentar o estado ao longo do dia)
7. Ritual de Início do Dia
Duração: 1 minuto
Antes de pegar o celular:
                                                                                                                              1. Respire fundo uma vez

                                                                                                                              2. Diga internamente:


“Hoje, eu ajo a partir do centro.”


Nada mais.
________________


8. Ritual de Encerramento
Duração: 2 minutos
Antes de dormir, pergunte:
                                                                                                                                 * Onde me mantive presente?

                                                                                                                                 * Onde me perdi?

Não julgue.
Apenas registre mentalmente.
Consciência precede ajuste.
________________


9. Ritual de Silêncio Sem Função
1 vez por semana — 5 minutos
Sente-se sem objetivo.
Sem música.
Sem técnica.
Sem celular.
Apenas esteja.
Esse ritual reorganiza mais do que parece.
________________


IV · EXERCÍCIOS INTERNOS
(Para dissolver ruído emocional)
10. A Devolução
Quando algo pesar:
“Isso é meu ou estou carregando de outro?”
Se não for seu, solte.
Não precisa entender tudo para soltar.
________________


11. A Pausa Consciente
Entre estímulo e resposta:
                                                                                                                                    1. Pause 3 segundos

                                                                                                                                    2. Respire uma vez

                                                                                                                                    3. Escolha conscientemente

Esse intervalo muda destinos.
________________


12. O Não Limpo
Pratique dizer “não” sem justificar.
Não rude.
Não agressivo.
Apenas limpo.
Limite claro é amor próprio funcional.
________________


V · PERGUNTAS DE REORGANIZAÇÃO
(Não responda todas de uma vez)
                                                                                                                                       * Onde estou vivendo no automático?

                                                                                                                                       * O que faço apenas por hábito?

                                                                                                                                       * Onde estou me abandonando?

                                                                                                                                       * O que estou evitando sentir?

                                                                                                                                       * O que estou sustentando que já não faz sentido?

                                                                                                                                       * O que eu faria se estivesse no meu eixo agora?

Essas perguntas não cobram.
Elas revelam.
________________


VI · PRÁTICAS DE RETORNO
(Para dias difíceis)
13. O Retorno em 60 Segundos
Quando tudo estiver demais:
                                                                                                                                          1. Pare

                                                                                                                                          2. Respire

                                                                                                                                          3. Sinta o corpo

                                                                                                                                          4. Diga:


“Eu volto para mim.”


Simples.
E poderoso.
________________


14. O Dia Essencial
Escolha um dia da semana para:
                                                                                                                                             * menos falar

                                                                                                                                             * menos consumir

                                                                                                                                             * menos explicar

                                                                                                                                             * mais sentir

                                                                                                                                             * mais estar

Não é isolamento.
É recalibração.
________________


VII · INTEGRAÇÃO FINAL
(O estado que se busca)
Você não precisa fazer tudo.
Não precisa fazer perfeito.
Não precisa fazer sempre.
Basta não se abandonar.
Sempre que lembrar, volte.
Sempre que esquecer, recomece.
Esse é o caminho do Eu Que Sobra.
________________


ENCERRAMENTO DO CADERNO
Este caderno não termina.
Ele acompanha.
Porque o Eu Que Sobra não é um destino.
É um estado praticável.
E agora…
você sabe voltar.


📘 DEDICATÓRIA
Este livro é dedicado
a quem precisou se afastar de si
para sobreviver.
A quem aprendeu a se adaptar,
a se calar,
a se moldar,
a ser forte antes de estar pronto.
A quem carregou pesos que não eram seus
e, mesmo assim, seguiu.
Que este livro seja um lembrete silencioso:
você não se perdeu.
Você apenas estava longe demais de casa.


🙏 ORAÇÃO SILENCIOSA
Deus,
Se este livro existe,
é porque houve permissão.
Permissão para atravessar,
para aprender,
para cair,
para levantar
e para lembrar.
Que estas palavras não confundam,
mas revelem.
Que não distraiam,
mas silenciem.
Que não imponham,
mas conduzam.
Que cada página seja lida
no tempo certo,
com o coração aberto
e o espírito presente.
Que aquilo que não for verdade
se dissolva.
E que aquilo que for essencial
permaneça.
Que este livro não leve ninguém para longe,
mas traga de volta.
Para o centro.
Para a consciência.
Para a verdade.
E que tudo o que aqui foi escrito
sirva, antes de tudo,
à clareza,
à integridade
e ao propósito.
Amém.
`,Dl={yellow:{bg:"bg-yellow-200",darkBg:"bg-yellow-900/50",sepiaBg:"bg-yellow-200/50",label:"Insight"},blue:{bg:"bg-blue-200",darkBg:"bg-blue-900/50",sepiaBg:"bg-blue-200/50",label:"Ideia"},green:{bg:"bg-green-200",darkBg:"bg-green-900/50",sepiaBg:"bg-green-200/50",label:"Ação"},purple:{bg:"bg-purple-200",darkBg:"bg-purple-900/50",sepiaBg:"bg-purple-200/50",label:"Reflexão"}},Iv={sm:"text-base",base:"text-lg",lg:"text-xl",xl:"text-2xl"},Pv={sm:"max-w-xl",md:"max-w-2xl",lg:"max-w-3xl"},ep=()=>{const[z,U]=ve.useState(null),B=ve.useCallback(()=>{const T=window.getSelection();if(!T||T.rangeCount===0||T.isCollapsed){U(null);return}const Q=T.getRangeAt(0),P=Q.commonAncestorContainer;let ae=P.nodeType===3?P.parentElement:P;for(;ae&&!ae.getAttribute("data-paragraph-index")&&ae.parentElement;)ae=ae.parentElement;if(!ae||!ae.getAttribute("data-paragraph-index")){U(null);return}const C=parseInt(ae.getAttribute("data-paragraph-index")||"0",10),q=Q.cloneRange();q.selectNodeContents(ae),q.setEnd(Q.startContainer,Q.startOffset);const w=q.toString().length,H=Q.toString(),le=w+H.length,De=Q.getBoundingClientRect();U({paragraphIndex:C,startOffset:w,endOffset:le,text:H,rect:De})},[]);return ve.useEffect(()=>(document.addEventListener("selectionchange",B),()=>{document.removeEventListener("selectionchange",B)}),[B]),{selection:z,clearSelection:()=>{var T;(T=window.getSelection())==null||T.removeAllRanges(),U(null)}}},Nn=({className:z,...U})=>p.jsx("button",{className:`p-2 rounded-full transition-colors duration-200 hover:bg-opacity-10 hover:bg-gray-500 ${z}`,...U});function ap(){var M,X,k;const[z,U]=ve.useState([]),[B,m]=ve.useState([]),[T,Q]=ve.useState("light"),[P,ae]=ve.useState("base"),[C,q]=ve.useState("md"),[w,H]=ve.useState("left"),[le,De]=ve.useState(!1),[Qe,qe]=ve.useState(!1),[pa,we]=ve.useState(!1),[ha,Ce]=ve.useState(0),[ke,ga]=ve.useState({}),[je,K]=ve.useState(null),[Ue,na]=ve.useState(""),lt=ve.useRef(null),{selection:ye,clearSelection:Be}=ep();ve.useEffect(()=>{const x=localStorage.getItem("lumina-ebook-data-v1");if(x)try{const A=JSON.parse(x);A.highlights&&U(A.highlights),A.reflections&&m(A.reflections),A.theme&&Q(A.theme),A.fontSize&&ae(A.fontSize),A.maxWidth&&q(A.maxWidth),A.lastReadPosition&&setTimeout(()=>{const Y=document.documentElement.scrollHeight-document.documentElement.clientHeight;window.scrollTo({top:Y*A.lastReadPosition,behavior:"instant"})},100)}catch(A){console.error("Failed to load saved data",A)}},[]),ve.useEffect(()=>{const x={highlights:z,reflections:B,lastReadPosition:ha,theme:T,fontSize:P,maxWidth:C,isFocusMode:le};localStorage.setItem("lumina-ebook-data-v1",JSON.stringify(x))},[z,B,ha,T,P,C,le]),ve.useEffect(()=>{const x=()=>{const A=window.scrollY,Y=document.documentElement.scrollHeight-document.documentElement.clientHeight,te=Y>0?A/Y:0;Ce(te)};return window.addEventListener("scroll",x),()=>window.removeEventListener("scroll",x)},[]);const Ba=ve.useMemo(()=>Fv.split(`

`).filter(x=>x.trim().length>0),[]),Na=x=>{if(!ye||ye.paragraphIndex===null)return;const A=z.findIndex(Y=>Y.paragraphIndex===ye.paragraphIndex&&Y.startOffset===ye.startOffset&&Y.endOffset===ye.endOffset);if(A!==-1){const Y=z[A];Y.color===x?U(te=>te.filter((pe,ja)=>ja!==A)):U(te=>{const pe=[...te];return pe[A]={...Y,color:x},pe})}else{const Y={id:Date.now().toString()+Math.random().toString().slice(2),paragraphIndex:ye.paragraphIndex,startOffset:ye.startOffset,endOffset:ye.endOffset,text:ye.text,color:x,createdAt:Date.now()};U(te=>[...te,Y])}Be()},ua=x=>{U(A=>A.filter(Y=>Y.id!==x))},y=x=>{if(!Ue.trim()){K(null);return}const A={id:Date.now().toString(),paragraphIndex:x,text:Ue,createdAt:Date.now()};m(Y=>[...Y,A]),na(""),K(null)},O=x=>{m(A=>A.filter(Y=>Y.id!==x))},G=()=>{const x={book:hc,exportedAt:new Date().toISOString(),highlights:z,reflections:B},A=new Blob([JSON.stringify(x,null,2)],{type:"application/json"}),Y=URL.createObjectURL(A),te=document.createElement("a");te.href=Y,te.download=`lumina-export-${Date.now()}.json`,document.body.appendChild(te),te.click(),document.body.removeChild(te)},ie=x=>{ga(A=>({...A,[x]:!A[x]}))},ce=x=>{const A=x.trim();return/^_{3,}$/.test(A)?"hr":A.match(/^(INTRODUÇÃO\s—|PARTE [IVX]+|CAPÍTULO \d+|EPÍLOGO|EXTRA|DEDICATÓRIA|ENCERRAMENTO|🙏|🏰|🪨|📘)/i)?"h2":(A.match(/^(\d+\.|[IVX]+ ·)\s/)||A.match(/^[IVX]+\s·\s/))&&A.length<100?"h3":A.match(/^[\*•-]\s/)?"list":A.startsWith("“")&&A.endsWith("”")||A.startsWith('"')&&A.endsWith('"')?"quote":"p"},r=(x,A)=>{const Y=z.filter(Ze=>Ze.paragraphIndex===A).sort((Ze,We)=>Ze.startOffset-We.startOffset);if(Y.length===0)return p.jsx("span",{children:x});const te=[];let pe=0;const ja=x;return Y.forEach(Ze=>{const We=Math.max(Ze.startOffset,pe);if(We>=Ze.endOffset)return;We>pe&&te.push(p.jsx("span",{children:ja.slice(pe,We)},`${A}-text-${pe}`));const Cl=T==="dark"?Dl[Ze.color].darkBg:T==="sepia"?Dl[Ze.color].sepiaBg:Dl[Ze.color].bg;te.push(p.jsx("span",{className:`${Cl} cursor-pointer hover:underline decoration-dotted relative group rounded-sm px-0.5 box-decoration-clone animate-in fade-in duration-500`,onClick:jl=>{jl.stopPropagation(),ua(Ze.id)},title:"Clique para remover destaque",children:ja.slice(We,Ze.endOffset)},Ze.id)),pe=Ze.endOffset}),pe<ja.length&&te.push(p.jsx("span",{children:ja.slice(pe)},`${A}-text-${pe}`)),te},E=T==="sepia"?"bg-sepia-50 text-sepia-900":T==="dark"?"bg-dark-bg text-dark-text":"bg-white text-gray-800",N=T==="sepia"?"bg-sepia-50/95 border-sepia-200":T==="dark"?"bg-dark-bg/95 border-gray-800":"bg-white/95 border-gray-100";return p.jsxs("div",{className:`min-h-screen transition-colors duration-300 font-serif ${E} ${le?"":"pt-16"}`,children:[p.jsx("div",{className:"fixed top-0 left-0 h-1 bg-blue-600/80 z-50 transition-all duration-300",style:{width:`${ha*100}%`}}),!le&&p.jsxs("nav",{className:`fixed top-0 w-full z-40 border-b transition-colors duration-300 backdrop-blur-sm ${N}`,children:[p.jsxs("div",{className:"max-w-5xl mx-auto px-4 h-16 flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center gap-2 cursor-pointer group",onClick:()=>qe(!0),children:[p.jsx(Uv,{size:20,className:"opacity-70 group-hover:opacity-100"}),p.jsx("span",{className:"font-display font-semibold text-lg tracking-tight opacity-90 group-hover:opacity-100",children:hc})]}),p.jsxs("div",{className:"flex items-center gap-1 md:gap-2",children:[p.jsx(Nn,{onClick:()=>De(!0),title:"Modo Foco",children:p.jsx(Mv,{size:18})}),p.jsx(Nn,{onClick:()=>we(!pa),title:"Configurações",children:p.jsx(wv,{size:18})}),p.jsx(Nn,{onClick:G,title:"Exportar Notas",children:p.jsx(Tv,{size:18})})]})]}),pa&&p.jsx("div",{className:`absolute top-16 right-4 p-5 rounded-2xl shadow-2xl border w-72 animate-in fade-in slide-in-from-top-2 z-50 ${T==="dark"?"bg-dark-surface border-gray-700":T==="sepia"?"bg-sepia-100 border-sepia-200":"bg-white border-gray-100"}`,children:p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs uppercase tracking-widest opacity-50 font-sans font-bold mb-3 block",children:"Tema"}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:()=>Q("light"),className:`flex-1 h-10 rounded-lg border flex items-center justify-center transition-all ${T==="light"?"ring-2 ring-blue-500 border-transparent bg-gray-50":"border-gray-200 hover:bg-gray-50"}`,children:p.jsx(Yv,{size:18})}),p.jsx("button",{onClick:()=>Q("sepia"),className:`flex-1 h-10 rounded-lg border flex items-center justify-center transition-all bg-[#fbf0d9] text-[#5f4b32] ${T==="sepia"?"ring-2 ring-blue-500 border-transparent":"border-[#efe0bc]"}`,children:p.jsx(xv,{size:18})}),p.jsx("button",{onClick:()=>Q("dark"),className:`flex-1 h-10 rounded-lg border flex items-center justify-center transition-all bg-[#1a1a1a] text-gray-200 ${T==="dark"?"ring-2 ring-blue-500 border-transparent":"border-gray-700"}`,children:p.jsx(Qv,{size:18})})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs uppercase tracking-widest opacity-50 font-sans font-bold mb-3 block",children:"Tamanho da Fonte"}),p.jsxs("div",{className:"flex items-center justify-between bg-current/5 rounded-lg p-1",children:[p.jsx("button",{onClick:()=>ae("sm"),className:`w-8 h-8 flex items-center justify-center rounded transition-all ${P==="sm"?"bg-white/90 shadow-sm text-black":"opacity-60"}`,children:p.jsx("span",{className:"text-xs",children:"A"})}),p.jsx("button",{onClick:()=>ae("base"),className:`w-8 h-8 flex items-center justify-center rounded transition-all ${P==="base"?"bg-white/90 shadow-sm text-black":"opacity-60"}`,children:p.jsx("span",{className:"text-sm",children:"A"})}),p.jsx("button",{onClick:()=>ae("lg"),className:`w-8 h-8 flex items-center justify-center rounded transition-all ${P==="lg"?"bg-white/90 shadow-sm text-black":"opacity-60"}`,children:p.jsx("span",{className:"text-base",children:"A"})}),p.jsx("button",{onClick:()=>ae("xl"),className:`w-8 h-8 flex items-center justify-center rounded transition-all ${P==="xl"?"bg-white/90 shadow-sm text-black":"opacity-60"}`,children:p.jsx("span",{className:"text-lg",children:"A"})})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs uppercase tracking-widest opacity-50 font-sans font-bold mb-3 block",children:"Largura do Texto"}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:()=>q("sm"),className:`flex-1 text-xs py-2 rounded-lg border transition-all ${C==="sm"?"bg-blue-50 border-blue-500 text-blue-700 font-medium":"border-current/20 opacity-60"}`,children:"Estreito"}),p.jsx("button",{onClick:()=>q("md"),className:`flex-1 text-xs py-2 rounded-lg border transition-all ${C==="md"?"bg-blue-50 border-blue-500 text-blue-700 font-medium":"border-current/20 opacity-60"}`,children:"Normal"}),p.jsx("button",{onClick:()=>q("lg"),className:`flex-1 text-xs py-2 rounded-lg border transition-all ${C==="lg"?"bg-blue-50 border-blue-500 text-blue-700 font-medium":"border-current/20 opacity-60"}`,children:"Largo"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs uppercase tracking-widest opacity-50 font-sans font-bold mb-3 block",children:"Alinhamento"}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:()=>H("left"),className:`flex-1 p-2 rounded-lg border flex justify-center ${w==="left"?"bg-blue-50 border-blue-500 text-blue-700":"border-current/20 opacity-60"}`,children:p.jsx(Lv,{size:18})}),p.jsx("button",{onClick:()=>H("justify"),className:`flex-1 p-2 rounded-lg border flex justify-center ${w==="justify"?"bg-blue-50 border-blue-500 text-blue-700":"border-current/20 opacity-60"}`,children:p.jsx(Gv,{size:18})})]})]})]})})]}),p.jsx("div",{className:`fixed inset-y-0 left-0 w-80 z-50 transform transition-transform duration-300 shadow-2xl overflow-y-auto ${Qe?"translate-x-0":"-translate-x-full"} ${T==="dark"?"bg-dark-surface border-r border-gray-800":T==="sepia"?"bg-sepia-100 border-r border-sepia-200":"bg-gray-50 border-r border-gray-200"}`,children:p.jsxs("div",{className:"p-6",children:[p.jsxs("div",{className:"flex items-center justify-between mb-8",children:[p.jsx("h2",{className:"font-display text-2xl font-semibold",children:"Minha Jornada"}),p.jsx(Nn,{onClick:()=>qe(!1),children:p.jsx(pc,{size:20})})]}),p.jsxs("div",{className:"space-y-10",children:[p.jsxs("div",{children:[p.jsxs("h3",{className:"text-xs font-sans font-bold uppercase tracking-widest opacity-40 mb-4 flex items-center gap-2",children:[p.jsx(bv,{size:14})," Destaques"]}),z.length===0?p.jsx("p",{className:"text-sm opacity-50 italic pl-1",children:"Você ainda não destacou nada."}):p.jsx("div",{className:"space-y-4",children:z.map(x=>p.jsxs("div",{onClick:()=>{var A;qe(!1),(A=document.getElementById(`para-${x.paragraphIndex}`))==null||A.scrollIntoView({behavior:"smooth",block:"center"})},className:`p-4 rounded-lg cursor-pointer transition-all hover:scale-[1.02] active:scale-95 text-sm leading-relaxed border-l-[3px] shadow-sm ${T==="dark"?"bg-gray-800/50 hover:bg-gray-800":T==="sepia"?"bg-white/40 hover:bg-white/60":"bg-white hover:shadow-md"}`,style:{borderLeftColor:x.color==="yellow"?"#facc15":x.color==="blue"?"#60a5fa":x.color==="green"?"#4ade80":"#c084fc"},children:[p.jsxs("p",{className:"font-serif opacity-90 line-clamp-3",children:['"',x.text,'"']}),p.jsx("p",{className:"text-[10px] uppercase tracking-wider opacity-40 mt-2 font-sans",children:new Date(x.createdAt).toLocaleDateString()})]},x.id))})]}),p.jsxs("div",{children:[p.jsxs("h3",{className:"text-xs font-sans font-bold uppercase tracking-widest opacity-40 mb-4 flex items-center gap-2",children:[p.jsx(vc,{size:14})," Reflexões"]}),B.length===0?p.jsx("p",{className:"text-sm opacity-50 italic pl-1",children:"Nenhuma reflexão salva."}):p.jsx("div",{className:"space-y-4",children:B.map(x=>p.jsxs("div",{onClick:()=>{var A;qe(!1),(A=document.getElementById(`para-${x.paragraphIndex}`))==null||A.scrollIntoView({behavior:"smooth",block:"center"})},className:`p-4 rounded-lg cursor-pointer transition-all hover:scale-[1.02] text-sm relative group border ${T==="dark"?"bg-gray-800/30 border-gray-700":T==="sepia"?"bg-white/30 border-sepia-200":"bg-white border-gray-100 shadow-sm"}`,children:[p.jsxs("span",{className:"font-bold font-sans uppercase tracking-wider text-[10px] opacity-40 block mb-2",children:["Trecho ",x.paragraphIndex+1]}),p.jsx("p",{className:"font-serif italic opacity-90",children:x.text}),p.jsx("button",{onClick:A=>{A.stopPropagation(),O(x.id)},className:"absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1.5 hover:text-red-500 hover:bg-red-50 rounded-full transition-all",children:p.jsx(Kv,{size:12})})]},x.id))})]})]})]})}),Qe&&p.jsx("div",{className:"fixed inset-0 bg-black/40 z-40 backdrop-blur-[2px] transition-opacity",onClick:()=>qe(!1)}),p.jsxs("main",{className:`mx-auto px-6 pb-32 transition-all duration-300 ${Pv[C]} ${Iv[P]}`,ref:lt,children:[p.jsxs("header",{className:"pt-24 pb-16 text-center mb-4 select-none",children:[p.jsx("p",{className:"font-sans uppercase tracking-[0.2em] text-xs font-bold opacity-50 mb-6",children:"eBook Interativo"}),p.jsx("h1",{className:"text-4xl md:text-6xl font-display font-bold mb-6 leading-[1.1] tracking-tight text-balance",children:hc}),p.jsxs("div",{className:"flex items-center justify-center gap-2 opacity-60 font-serif italic",children:[p.jsx("span",{children:"por"}),p.jsx("span",{className:"font-semibold not-italic",children:$v})]})]}),p.jsx("div",{className:"max-w-xl mx-auto mb-16 space-y-3",children:Wv.map((x,A)=>p.jsxs("div",{className:`border rounded-lg overflow-hidden transition-all duration-300 ${T==="dark"?"border-gray-800 bg-gray-900/50":T==="sepia"?"border-sepia-200 bg-sepia-100/50":"border-gray-100 bg-gray-50/50"}`,children:[p.jsxs("button",{onClick:()=>ie(A),className:"w-full px-5 py-4 flex items-center justify-between text-left group",children:[p.jsx("span",{className:"font-sans text-sm font-semibold tracking-wide opacity-80 group-hover:opacity-100 transition-opacity",children:x.title}),ke[A]?p.jsx(zv,{size:16,className:"opacity-50"}):p.jsx(Ev,{size:16,className:"opacity-50"})]}),p.jsx("div",{className:`transition-all duration-300 ease-in-out overflow-hidden ${ke[A]?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,children:p.jsx("div",{className:`px-5 pb-5 pt-0 text-sm opacity-70 space-y-2 leading-relaxed ${x.items.length===0?"italic opacity-50":""}`,children:x.items.length>0?p.jsx("ul",{className:"space-y-2",children:x.items.map((Y,te)=>p.jsxs("li",{className:"flex items-start gap-2",children:[p.jsx("span",{className:"opacity-30 select-none",children:"•"}),p.jsx("span",{children:Y})]},te))}):p.jsx("span",{children:"(Conteúdo breve)"})})})]},A))}),Ba.map((x,A)=>{const Y=B.filter(pe=>pe.paragraphIndex===A),te=ce(x);return p.jsxs("div",{id:`para-${A}`,className:"group relative","data-paragraph-index":A,children:[te==="h2"&&p.jsxs("div",{className:"mt-24 mb-10 text-center",children:[p.jsx("h2",{className:"text-3xl md:text-4xl font-display font-bold text-current leading-tight text-balance",children:r(x,A)}),p.jsx("div",{className:"w-12 h-1 bg-current opacity-10 mx-auto mt-6 rounded-full"})]}),te==="h3"&&p.jsx("h3",{className:"text-xl md:text-2xl font-display font-semibold mt-12 mb-6 opacity-95 leading-snug text-balance",children:r(x,A)}),te==="hr"&&p.jsxs("div",{className:"py-12 flex justify-center opacity-20 items-center gap-4",children:[p.jsx("div",{className:"h-px w-8 bg-current"}),p.jsx("div",{className:"font-display text-xl italic",children:"~"}),p.jsx("div",{className:"h-px w-8 bg-current"})]}),te==="list"&&p.jsx("div",{className:`mb-4 pl-4 leading-relaxed opacity-90 ${w==="justify"?"text-justify":"text-left"}`,children:p.jsx("ul",{className:"book-list text-current",children:p.jsx("li",{children:r(x.replace(/^[\*•-]\s/,""),A)})})}),te==="quote"&&p.jsx("blockquote",{className:"my-10 pl-8 pr-4 py-2 border-l-4 border-current border-opacity-20 italic text-xl md:text-2xl opacity-80 leading-relaxed font-display text-balance",children:r(x,A)}),te==="p"&&p.jsx("p",{className:`leading-loose opacity-90 mb-6 ${w==="justify"?"text-justify":"text-left"} text-pretty`,children:r(x,A)}),["p","quote","list"].includes(te)&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"absolute -right-16 top-0 h-full opacity-0 group-hover:opacity-100 transition-opacity hidden xl:flex items-start pt-1.5",children:p.jsx("button",{onClick:()=>K(je===A?null:A),className:"p-2.5 text-current opacity-20 hover:opacity-100 hover:bg-current/5 rounded-full transition-all",title:"Adicionar Reflexão",children:p.jsx(vc,{size:18})})}),p.jsx("div",{className:"xl:hidden mt-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity mb-4",children:p.jsxs("button",{onClick:()=>K(je===A?null:A),className:"text-[10px] uppercase font-bold tracking-wider opacity-40 flex items-center gap-1 py-1 px-2 rounded hover:bg-current/5",children:[p.jsx(vc,{size:12})," Nota"]})})]}),je===A&&p.jsxs("div",{className:`my-6 p-5 rounded-xl animate-in fade-in slide-in-from-top-2 border shadow-lg ${T==="dark"?"bg-gray-800 border-gray-700":T==="sepia"?"bg-[#fffbf0] border-sepia-200":"bg-white border-gray-100"}`,children:[p.jsx("label",{className:"text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2 block",children:"Sua Reflexão"}),p.jsx("textarea",{className:"w-full bg-transparent border-none resize-none focus:ring-0 text-base font-serif p-0 placeholder-current placeholder-opacity-30 leading-relaxed",placeholder:"O que este trecho te fez pensar?",rows:3,autoFocus:!0,value:Ue,onChange:pe=>na(pe.target.value)}),p.jsxs("div",{className:"flex justify-end gap-3 mt-4 pt-3 border-t border-current/5",children:[p.jsx("button",{onClick:()=>K(null),className:"px-4 py-1.5 text-xs font-bold uppercase tracking-wider opacity-50 hover:opacity-100 transition-opacity",children:"Cancelar"}),p.jsx("button",{onClick:()=>y(A),className:"px-5 py-1.5 text-xs font-bold uppercase tracking-wider bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm",children:"Salvar"})]})]}),Y.length>0&&p.jsx("div",{className:"my-6 space-y-3 pl-6 border-l-2 border-purple-400/30",children:Y.map(pe=>p.jsxs("div",{className:"text-base font-serif italic opacity-75 flex justify-between group/note items-start animate-in fade-in slide-in-from-left-2 duration-500",children:[p.jsxs("span",{className:"leading-relaxed",children:['"',pe.text,'"']}),p.jsx("button",{onClick:()=>O(pe.id),className:"opacity-0 group-hover/note:opacity-40 hover:text-red-500 ml-2 mt-1 transition-opacity",children:p.jsx(pc,{size:14})})]},pe.id))})]},A)}),p.jsxs("div",{className:"mt-32 pt-16 border-t border-current border-opacity-10 text-center opacity-40 font-sans text-xs uppercase tracking-widest",children:[p.jsx("p",{className:"mb-8",children:"Fim do Livro"}),p.jsx(Nn,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"mx-auto block",children:"Voltar ao Topo"})]})]}),ye&&!le&&p.jsxs("div",{className:"fixed z-50 flex items-center gap-1.5 p-1.5 rounded-full shadow-2xl animate-in zoom-in-95 duration-200 border border-black/5",style:{top:`${(((M=ye.rect)==null?void 0:M.top)||0)+window.scrollY-70}px`,left:`${(((X=ye.rect)==null?void 0:X.left)||0)+(((k=ye.rect)==null?void 0:k.width)||0)/2}px`,transform:"translateX(-50%)",backgroundColor:T==="dark"?"#262626":T==="sepia"?"#fbf0d9":"white"},children:[Object.keys(Dl).map(x=>p.jsx("button",{onClick:()=>Na(x),className:`w-8 h-8 rounded-full transition-transform hover:scale-110 active:scale-95 ${Dl[x].bg} border border-black/5 shadow-sm`,title:Dl[x].label},x)),p.jsx("div",{className:"w-px h-5 bg-current opacity-10 mx-1"}),p.jsx("button",{onClick:Be,className:"p-2 rounded-full hover:bg-black/5 transition-colors opacity-40 hover:opacity-100",children:p.jsx(pc,{size:14})})]}),le&&p.jsx("button",{onClick:()=>De(!1),className:"fixed bottom-8 right-8 p-4 bg-white/10 backdrop-blur text-current border border-current/10 rounded-full shadow-2xl hover:bg-white/20 transition-all hover:scale-105 z-50 group",title:"Sair do Modo Foco",children:p.jsx(Cv,{size:24,className:"opacity-50 group-hover:opacity-100"})})]})}window.onerror=(z,U,B,m,T)=>{const Q=document.getElementById("root");return Q&&(Q.innerHTML=`
      <div style="padding: 20px; color: #721c24; background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 4px; margin: 20px; font-family: sans-serif;">
        <h3 style="margin-top: 0;">Erro de Inicialização</h3>
        <p>${z}</p>
        <small style="opacity: 0.7;">${U} (line ${B})</small>
      </div>
    `),!1};try{const z=document.getElementById("root");if(!z)throw new Error("Não foi possível encontrar o elemento #root no HTML.");mv.createRoot(z).render(p.jsx(uv.StrictMode,{children:p.jsx(ap,{})}))}catch(z){console.error("Mounting error:",z);const U=document.getElementById("root");U&&(U.innerHTML=`<div style="padding: 20px; color: red;">Erro ao carregar App: ${z instanceof Error?z.message:String(z)}</div>`)}
