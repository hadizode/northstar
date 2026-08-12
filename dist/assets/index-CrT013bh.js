(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(u){if(u.ep)return;u.ep=!0;const d=i(u);fetch(u.href,d)}})();function B1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Yc={exports:{}},Gl={};var Kv;function V1(){if(Kv)return Gl;Kv=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(o,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var m in u)m!=="key"&&(d[m]=u[m])}else d=u;return u=d.ref,{$$typeof:n,type:o,key:f,ref:u!==void 0?u:null,props:d}}return Gl.Fragment=a,Gl.jsx=i,Gl.jsxs=i,Gl}var Qv;function H1(){return Qv||(Qv=1,Yc.exports=V1()),Yc.exports}var g=H1(),qc={exports:{}},fe={};var Zv;function k1(){if(Zv)return fe;Zv=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),_=Symbol.iterator;function j(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function D(C,X,I){this.props=C,this.context=X,this.refs=A,this.updater=I||N}D.prototype.isReactComponent={},D.prototype.setState=function(C,X){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,X,"setState")},D.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function k(){}k.prototype=D.prototype;function q(C,X,I){this.props=C,this.context=X,this.refs=A,this.updater=I||N}var Z=q.prototype=new k;Z.constructor=q,w(Z,D.prototype),Z.isPureReactComponent=!0;var V=Array.isArray;function J(){}var Q={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function K(C,X,I){var te=I.ref;return{$$typeof:n,type:C,key:X,ref:te!==void 0?te:null,props:I}}function le(C,X){return K(C.type,X,C.props)}function F(C){return typeof C=="object"&&C!==null&&C.$$typeof===n}function oe(C){var X={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(I){return X[I]})}var z=/\/+/g;function W(C,X){return typeof C=="object"&&C!==null&&C.key!=null?oe(""+C.key):X.toString(36)}function re(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(J,J):(C.status="pending",C.then(function(X){C.status==="pending"&&(C.status="fulfilled",C.value=X)},function(X){C.status==="pending"&&(C.status="rejected",C.reason=X)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function R(C,X,I,te,de){var ve=typeof C;(ve==="undefined"||ve==="boolean")&&(C=null);var Ae=!1;if(C===null)Ae=!0;else switch(ve){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(C.$$typeof){case n:case a:Ae=!0;break;case y:return Ae=C._init,R(Ae(C._payload),X,I,te,de)}}if(Ae)return de=de(C),Ae=te===""?"."+W(C,0):te,V(de)?(I="",Ae!=null&&(I=Ae.replace(z,"$&/")+"/"),R(de,X,I,"",function(Ja){return Ja})):de!=null&&(F(de)&&(de=le(de,I+(de.key==null||C&&C.key===de.key?"":(""+de.key).replace(z,"$&/")+"/")+Ae)),X.push(de)),1;Ae=0;var ft=te===""?".":te+":";if(V(C))for(var Xe=0;Xe<C.length;Xe++)te=C[Xe],ve=ft+W(te,Xe),Ae+=R(te,X,I,ve,de);else if(Xe=j(C),typeof Xe=="function")for(C=Xe.call(C),Xe=0;!(te=C.next()).done;)te=te.value,ve=ft+W(te,Xe++),Ae+=R(te,X,I,ve,de);else if(ve==="object"){if(typeof C.then=="function")return R(re(C),X,I,te,de);throw X=String(C),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function G(C,X,I){if(C==null)return C;var te=[],de=0;return R(C,te,"","",function(ve){return X.call(I,ve,de++)}),te}function ee(C){if(C._status===-1){var X=C._result;X=X(),X.then(function(I){(C._status===0||C._status===-1)&&(C._status=1,C._result=I)},function(I){(C._status===0||C._status===-1)&&(C._status=2,C._result=I)}),C._status===-1&&(C._status=0,C._result=X)}if(C._status===1)return C._result.default;throw C._result}var pe=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},ce={map:G,forEach:function(C,X,I){G(C,function(){X.apply(this,arguments)},I)},count:function(C){var X=0;return G(C,function(){X++}),X},toArray:function(C){return G(C,function(X){return X})||[]},only:function(C){if(!F(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return fe.Activity=b,fe.Children=ce,fe.Component=D,fe.Fragment=i,fe.Profiler=u,fe.PureComponent=q,fe.StrictMode=o,fe.Suspense=h,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,fe.__COMPILER_RUNTIME={__proto__:null,c:function(C){return Q.H.useMemoCache(C)}},fe.cache=function(C){return function(){return C.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(C,X,I){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var te=w({},C.props),de=C.key;if(X!=null)for(ve in X.key!==void 0&&(de=""+X.key),X)!E.call(X,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&X.ref===void 0||(te[ve]=X[ve]);var ve=arguments.length-2;if(ve===1)te.children=I;else if(1<ve){for(var Ae=Array(ve),ft=0;ft<ve;ft++)Ae[ft]=arguments[ft+2];te.children=Ae}return K(C.type,de,te)},fe.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:d,_context:C},C},fe.createElement=function(C,X,I){var te,de={},ve=null;if(X!=null)for(te in X.key!==void 0&&(ve=""+X.key),X)E.call(X,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(de[te]=X[te]);var Ae=arguments.length-2;if(Ae===1)de.children=I;else if(1<Ae){for(var ft=Array(Ae),Xe=0;Xe<Ae;Xe++)ft[Xe]=arguments[Xe+2];de.children=ft}if(C&&C.defaultProps)for(te in Ae=C.defaultProps,Ae)de[te]===void 0&&(de[te]=Ae[te]);return K(C,ve,de)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(C){return{$$typeof:m,render:C}},fe.isValidElement=F,fe.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:ee}},fe.memo=function(C,X){return{$$typeof:p,type:C,compare:X===void 0?null:X}},fe.startTransition=function(C){var X=Q.T,I={};Q.T=I;try{var te=C(),de=Q.S;de!==null&&de(I,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(J,pe)}catch(ve){pe(ve)}finally{X!==null&&I.types!==null&&(X.types=I.types),Q.T=X}},fe.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},fe.use=function(C){return Q.H.use(C)},fe.useActionState=function(C,X,I){return Q.H.useActionState(C,X,I)},fe.useCallback=function(C,X){return Q.H.useCallback(C,X)},fe.useContext=function(C){return Q.H.useContext(C)},fe.useDebugValue=function(){},fe.useDeferredValue=function(C,X){return Q.H.useDeferredValue(C,X)},fe.useEffect=function(C,X){return Q.H.useEffect(C,X)},fe.useEffectEvent=function(C){return Q.H.useEffectEvent(C)},fe.useId=function(){return Q.H.useId()},fe.useImperativeHandle=function(C,X,I){return Q.H.useImperativeHandle(C,X,I)},fe.useInsertionEffect=function(C,X){return Q.H.useInsertionEffect(C,X)},fe.useLayoutEffect=function(C,X){return Q.H.useLayoutEffect(C,X)},fe.useMemo=function(C,X){return Q.H.useMemo(C,X)},fe.useOptimistic=function(C,X){return Q.H.useOptimistic(C,X)},fe.useReducer=function(C,X,I){return Q.H.useReducer(C,X,I)},fe.useRef=function(C){return Q.H.useRef(C)},fe.useState=function(C){return Q.H.useState(C)},fe.useSyncExternalStore=function(C,X,I){return Q.H.useSyncExternalStore(C,X,I)},fe.useTransition=function(){return Q.H.useTransition()},fe.version="19.2.8",fe}var Fv;function Jd(){return Fv||(Fv=1,qc.exports=k1()),qc.exports}var S=Jd();const Ve=B1(S);var Wd=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Xg=/^[\\/]{2}/;function Y1(n,a){return a+n.replace(/\\/g,"/")}var Jv="popstate";function Wv(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function q1(n={}){function a(u,d){let{pathname:f="/",search:m="",hash:h=""}=Gr(u.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),xd("",{pathname:f,search:m,hash:h},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function i(u,d){let f=u.document.querySelector("base"),m="";if(f&&f.getAttribute("href")){let h=u.location.href,p=h.indexOf("#");m=p===-1?h:h.slice(0,p)}return m+"#"+(typeof d=="string"?d:ri(d))}function o(u,d){sn(u.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return X1(a,i,o,n)}function He(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function sn(n,a){if(!n){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function G1(){return Math.random().toString(36).substring(2,10)}function Iv(n,a){return{usr:n.state,key:n.key,idx:a,masked:n.mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function xd(n,a,i=null,o,u){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof a=="string"?Gr(a):a,state:i,key:a&&a.key||o||G1(),mask:u}}function ri({pathname:n="/",search:a="",hash:i=""}){return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function Gr(n){let a={};if(n){let i=n.indexOf("#");i>=0&&(a.hash=n.substring(i),n=n.substring(0,i));let o=n.indexOf("?");o>=0&&(a.search=n.substring(o),n=n.substring(0,o)),n&&(a.pathname=n)}return a}function X1(n,a,i,o={}){let{window:u=document.defaultView,v5Compat:d=!1}=o,f=u.history,m="POP",h=null,p=y();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function y(){return(f.state||{idx:null}).idx}function b(){m="POP";let A=y(),D=A==null?null:A-p;p=A,h&&h({action:m,location:w.location,delta:D})}function _(A,D){m="PUSH";let k=Wv(A)?A:xd(w.location,A,D);i&&i(k,A),p=y()+1;let q=Iv(k,p),Z=w.createHref(k.mask||k);try{f.pushState(q,"",Z)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;u.location.assign(Z)}d&&h&&h({action:m,location:w.location,delta:1})}function j(A,D){m="REPLACE";let k=Wv(A)?A:xd(w.location,A,D);i&&i(k,A),p=y();let q=Iv(k,p),Z=w.createHref(k.mask||k);f.replaceState(q,"",Z),d&&h&&h({action:m,location:w.location,delta:0})}function N(A){return P1(u,A)}let w={get action(){return m},get location(){return n(u,f)},listen(A){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(Jv,b),h=A,()=>{u.removeEventListener(Jv,b),h=null}},createHref(A){return a(u,A)},createURL:N,encodeLocation(A){let D=N(A);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:_,replace:j,go(A){return f.go(A)}};return w}function P1(n,a,i=!1){let o="http://localhost";n&&(o=n.location.origin!=="null"?n.location.origin:n.location.href),He(o,"No window.location.(origin|href) available to create URL");let u=typeof a=="string"?a:ri(a);return u=u.replace(/ $/,"%20"),!i&&Xg.test(u)&&(u=o+u),new URL(u,o)}function Pg(n,a,i="/"){return K1(n,a,i,!1)}function K1(n,a,i,o,u){let d=typeof a=="string"?Gr(a):a,f=Un(d.pathname||"/",i);if(f==null)return null;let m=Q1(n),h=null,p=lS(f);for(let y=0;h==null&&y<m.length;++y)h=aS(m[y],p,o);return h}function Q1(n){let a=Kg(n);return Z1(a),a}function Kg(n,a=[],i=[],o="",u=!1){let d=(f,m,h=u,p)=>{let y={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(o)&&h)return;He(y.relativePath.startsWith(o),`Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(o.length)}let b=ln([o,y.relativePath]),_=i.concat(y);f.children&&f.children.length>0&&(He(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),Kg(f.children,a,_,b,h)),!(f.path==null&&!f.index)&&a.push({path:b,score:nS(b,f.index),routesMeta:_.map((j,N)=>{let[w,A]=Fg(j.relativePath,j.caseSensitive,N===_.length-1);return{...j,matcher:w,compiledParams:A}})})};return n.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))d(f,m);else for(let h of Qg(f.path))d(f,m,!0,h)}),a}function Qg(n){let a=n.split("/");if(a.length===0)return[];let[i,...o]=a,u=i.endsWith("?"),d=i.replace(/\?$/,"");if(o.length===0)return u?[d,""]:[d];let f=Qg(o.join("/")),m=[];return m.push(...f.map(h=>h===""?d:[d,h].join("/"))),u&&m.push(...f),m.map(h=>n.startsWith("/")&&h===""?"/":h)}function Z1(n){n.sort((a,i)=>a.score!==i.score?i.score-a.score:rS(a.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var F1=/^:[\w-]+$/,J1=3,W1=2,I1=1,eS=10,tS=-2,ey=n=>n==="*";function nS(n,a){let i=n.split("/"),o=i.length;return i.some(ey)&&(o+=tS),a&&(o+=W1),i.filter(u=>!ey(u)).reduce((u,d)=>u+(F1.test(d)?J1:d===""?I1:eS),o)}function rS(n,a){return n.length===a.length&&n.slice(0,-1).every((o,u)=>o===a[u])?n[n.length-1]-a[a.length-1]:0}function aS(n,a,i=!1){let{routesMeta:o}=n,u={},d="/",f=[];for(let m=0;m<o.length;++m){let h=o[m],p=m===o.length-1,y=d==="/"?a:a.slice(d.length)||"/",b={path:h.relativePath,caseSensitive:h.caseSensitive,end:p},_=h.matcher&&h.compiledParams?Zg(b,y,h.matcher,h.compiledParams):ts(b,y),j=h.route;if(!_&&p&&i&&!o[o.length-1].route.index&&(_=ts({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!_)return null;Object.assign(u,_.params),f.push({params:u,pathname:ln([d,_.pathname]),pathnameBase:sS(ln([d,_.pathnameBase])),route:j}),_.pathnameBase!=="/"&&(d=ln([d,_.pathnameBase]))}return f}function ts(n,a){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,o]=Fg(n.path,n.caseSensitive,n.end);return Zg(n,a,i,o)}function Zg(n,a,i,o){let u=a.match(i);if(!u)return null;let d=u[0],f=d.replace(/(.)\/+$/,"$1"),m=u.slice(1);return{params:o.reduce((p,{paramName:y,isOptional:b},_)=>{if(y==="*"){let N=m[_]||"";f=d.slice(0,d.length-N.length).replace(/(.)\/+$/,"$1")}const j=m[_];return b&&!j?p[y]=void 0:p[y]=(j||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:f,pattern:n}}function Fg(n,a=!1,i=!0){sn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,h,p,y)=>{if(o.push({paramName:m,isOptional:h!=null}),h){let b=y.charAt(p+f.length);return b&&b!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,a?void 0:"i"),o]}function lS(n){try{return n.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return sn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}function Un(n,a){if(a==="/")return n;if(!n.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,o=n.charAt(i);return o&&o!=="/"?null:n.slice(i)||"/"}function iS(n,a="/"){let{pathname:i,search:o="",hash:u=""}=typeof n=="string"?Gr(n):n,d;return i?(i=Wg(i),i.startsWith("/")?d=ty(i.substring(1),"/"):d=ty(i,a)):d=a,{pathname:d,search:uS(o),hash:cS(u)}}function ty(n,a){let i=ns(a).split("/");return n.split("/").forEach(u=>{u===".."?i.length>1&&i.pop():u!=="."&&i.push(u)}),i.length>1?i.join("/"):"/"}function Gc(n,a,i,o){return`Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oS(n){return n.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function Jg(n){let a=oS(n);return a.map((i,o)=>o===a.length-1?i.pathname:i.pathnameBase)}function Id(n,a,i,o=!1){let u;typeof n=="string"?u=Gr(n):(u={...n},He(!u.pathname||!u.pathname.includes("?"),Gc("?","pathname","search",u)),He(!u.pathname||!u.pathname.includes("#"),Gc("#","pathname","hash",u)),He(!u.search||!u.search.includes("#"),Gc("#","search","hash",u)));let d=n===""||u.pathname==="",f=d?"/":u.pathname,m;if(f==null)m=i;else{let b=a.length-1;if(!o&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),b-=1;u.pathname=_.join("/")}m=b>=0?a[b]:"/"}let h=iS(u,m),p=f&&f!=="/"&&f.endsWith("/"),y=(d||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(p||y)&&(h.pathname+="/"),h}var Wg=n=>n.replace(/[\\/]{2,}/g,"/"),ln=n=>Wg(n.join("/")),ns=n=>n.replace(/\/+$/,""),sS=n=>ns(n).replace(/^\/*/,"/"),uS=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,cS=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,dS=class{constructor(n,a,i,o=!1){this.status=n,this.statusText=a||"",this.internal=o,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function fS(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function mS(n){let a=n.map(i=>i.route.path).filter(Boolean);return ln(a)||"/"}var Ig=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function eb(n,a){let i=n;if(typeof i!="string"||!Wd.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let o=i,u=!1;if(Ig)try{let d=new URL(window.location.href),f=Xg.test(i)?new URL(Y1(i,d.protocol)):new URL(i),m=Un(f.pathname,a);f.origin===d.origin&&m!=null?i=m+f.search+f.hash:u=!0}catch{sn(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:u,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var tb=["POST","PUT","PATCH","DELETE"];new Set(tb);var hS=["GET",...tb];new Set(hS);var pS=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function vS(n){try{return pS.includes(new URL(n).protocol)}catch{return!1}}var Ka=S.createContext(null);Ka.displayName="DataRouter";var ms=S.createContext(null);ms.displayName="DataRouterState";var nb=S.createContext(!1);function yS(){return S.useContext(nb)}var rb=S.createContext({isTransitioning:!1});rb.displayName="ViewTransition";var gS=S.createContext(new Map);gS.displayName="Fetchers";var bS=S.createContext(null);bS.displayName="Await";var It=S.createContext(null);It.displayName="Navigation";var pi=S.createContext(null);pi.displayName="Location";var gn=S.createContext({outlet:null,matches:[],isDataRoute:!1});gn.displayName="Route";var ef=S.createContext(null);ef.displayName="RouteError";var ab="REACT_ROUTER_ERROR",xS="REDIRECT",_S="ROUTE_ERROR_RESPONSE";function SS(n){if(n.startsWith(`${ab}:${xS}:{`))try{let a=JSON.parse(n.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function ES(n){if(n.startsWith(`${ab}:${_S}:{`))try{let a=JSON.parse(n.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new dS(a.status,a.statusText,a.data)}catch{}}function TS(n,{relative:a}={}){He(vi(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=S.useContext(It),{hash:u,pathname:d,search:f}=yi(n,{relative:a}),m=d;return i!=="/"&&(m=d==="/"?i:ln([i,d])),o.createHref({pathname:m,search:f,hash:u})}function vi(){return S.useContext(pi)!=null}function Vn(){return He(vi(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(pi).location}var lb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ib(n){S.useContext(It).static||S.useLayoutEffect(n)}function tf(){let{isDataRoute:n}=S.useContext(gn);return n?BS():wS()}function wS(){He(vi(),"useNavigate() may be used only in the context of a <Router> component.");let n=S.useContext(Ka),{basename:a,navigator:i}=S.useContext(It),{matches:o}=S.useContext(gn),{pathname:u}=Vn(),d=JSON.stringify(Jg(o)),f=S.useRef(!1);return ib(()=>{f.current=!0}),S.useCallback((h,p={})=>{if(sn(f.current,lb),!f.current)return;if(typeof h=="number"){i.go(h);return}let y=Id(h,JSON.parse(d),u,p.relative==="path");n==null&&a!=="/"&&(y.pathname=y.pathname==="/"?a:ln([a,y.pathname])),(p.replace?i.replace:i.push)(y,p.state,p)},[a,i,d,u,n])}S.createContext(null);function AS(){let{matches:n}=S.useContext(gn);return n[n.length-1]?.params??{}}function yi(n,{relative:a}={}){let{matches:i}=S.useContext(gn),{pathname:o}=Vn(),u=JSON.stringify(Jg(i));return S.useMemo(()=>Id(n,JSON.parse(u),o,a==="path"),[n,u,o,a])}function jS(n,a){return ob(n,a)}function ob(n,a,i){He(vi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=S.useContext(It),{matches:u}=S.useContext(gn),d=u[u.length-1],f=d?d.params:{},m=d?d.pathname:"/",h=d?d.pathnameBase:"/",p=d&&d.route;{let A=p&&p.path||"";ub(m,!p||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let y=Vn(),b;if(a){let A=typeof a=="string"?Gr(a):a;He(h==="/"||A.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${A.pathname}" was given in the \`location\` prop.`),b=A}else b=y;let _=b.pathname||"/",j=_;if(h!=="/"){let A=h.replace(/^\//,"").split("/");j="/"+_.replace(/^\//,"").split("/").slice(A.length).join("/")}let N=i&&i.state.matches.length?i.state.matches.map(A=>Object.assign(A,{route:i.manifest[A.route.id]||A.route})):Pg(n,{pathname:j});sn(p||N!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),sn(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=RS(N&&N.map(A=>Object.assign({},A,{params:Object.assign({},f,A.params),pathname:ln([h,o.encodeLocation?o.encodeLocation(A.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?h:ln([h,o.encodeLocation?o.encodeLocation(A.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),u,i);return a&&w?S.createElement(pi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...b},navigationType:"POP"}},w):w}function CS(){let n=US(),a=fS(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:d},"ErrorBoundary")," or"," ",S.createElement("code",{style:d},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},a),i?S.createElement("pre",{style:u},i):null,f)}var NS=S.createElement(CS,null),sb=class extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){this.props.onError?this.props.onError(n,a):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const i=ES(n.digest);i&&(n=i)}let a=n!==void 0?S.createElement(gn.Provider,{value:this.props.routeContext},S.createElement(ef.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?S.createElement(MS,{error:n},a):a}};sb.contextType=nb;var Xc=new WeakMap;function MS({children:n,error:a}){let{basename:i}=S.useContext(It);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let o=SS(a.digest);if(o){let u=Xc.get(a);if(u)throw u;let d=eb(o.location,i),f=d.absoluteURL||d.to;if(vS(f))throw new Error("Invalid redirect location");if(Ig&&!Xc.get(a))if(d.isExternal||o.reloadDocument)window.location.href=f;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:o.replace}));throw Xc.set(a,m),m}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f}`})}}return n}function zS({routeContext:n,match:a,children:i}){let o=S.useContext(Ka);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),S.createElement(gn.Provider,{value:n},i)}function RS(n,a=[],i){let o=i?.state;if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(a.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let u=n,d=o?.errors;if(d!=null){let y=u.findIndex(b=>b.route.id&&d?.[b.route.id]!==void 0);He(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,y+1))}let f=!1,m=-1;if(i&&o){f=o.renderFallback;for(let y=0;y<u.length;y++){let b=u[y];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(m=y),b.route.id){let{loaderData:_,errors:j}=o,N=b.route.loader&&!_.hasOwnProperty(b.route.id)&&(!j||j[b.route.id]===void 0);if(b.route.lazy||N){i.isStatic&&(f=!0),m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}}let h=i?.onError,p=o&&h?(y,b)=>{h(y,{location:o.location,params:o.matches?.[0]?.params??{},pattern:mS(o.matches),errorInfo:b})}:void 0;return u.reduceRight((y,b,_)=>{let j,N=!1,w=null,A=null;o&&(j=d&&b.route.id?d[b.route.id]:void 0,w=b.route.errorElement||NS,f&&(m<0&&_===0?(ub("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,A=null):m===_&&(N=!0,A=b.route.hydrateFallbackElement||null)));let D=a.concat(u.slice(0,_+1)),k=()=>{let q;return j?q=w:N?q=A:b.route.Component?q=S.createElement(b.route.Component,null):b.route.element?q=b.route.element:q=y,S.createElement(zS,{match:b,routeContext:{outlet:y,matches:D,isDataRoute:o!=null},children:q})};return o&&(b.route.ErrorBoundary||b.route.errorElement||_===0)?S.createElement(sb,{location:o.location,revalidation:o.revalidation,component:w,error:j,children:k(),routeContext:{outlet:null,matches:D,isDataRoute:!0},onError:p}):k()},null)}function nf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function DS(n){let a=S.useContext(Ka);return He(a,nf(n)),a}function OS(n){let a=S.useContext(ms);return He(a,nf(n)),a}function $S(n){let a=S.useContext(gn);return He(a,nf(n)),a}function rf(n){let a=$S(n),i=a.matches[a.matches.length-1];return He(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function LS(){return rf("useRouteId")}function US(){let n=S.useContext(ef),a=OS("useRouteError"),i=rf("useRouteError");return n!==void 0?n:a.errors?.[i]}function BS(){let{router:n}=DS("useNavigate"),a=rf("useNavigate"),i=S.useRef(!1);return ib(()=>{i.current=!0}),S.useCallback(async(u,d={})=>{sn(i.current,lb),i.current&&(typeof u=="number"?await n.navigate(u):await n.navigate(u,{fromRouteId:a,...d}))},[n,a])}var ny={};function ub(n,a,i){!a&&!ny[n]&&(ny[n]=!0,sn(!1,i))}S.memo(VS);function VS({routes:n,manifest:a,future:i,state:o,isStatic:u,onError:d}){return ob(n,void 0,{manifest:a,state:o,isStatic:u,onError:d})}function _d(n){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function HS({basename:n="/",children:a=null,location:i,navigationType:o="POP",navigator:u,static:d=!1,useTransitions:f}){He(!vi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=n.replace(/^\/*/,"/"),h=S.useMemo(()=>({basename:m,navigator:u,static:d,useTransitions:f,future:{}}),[m,u,d,f]);typeof i=="string"&&(i=Gr(i));let{pathname:p="/",search:y="",hash:b="",state:_=null,key:j="default",mask:N}=i,w=S.useMemo(()=>{let A=Un(p,m);return A==null?null:{location:{pathname:A,search:y,hash:b,state:_,key:j,mask:N},navigationType:o}},[m,p,y,b,_,j,o,N]);return sn(w!=null,`<Router basename="${m}"> is not able to match the URL "${p}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:S.createElement(It.Provider,{value:h},S.createElement(pi.Provider,{children:a,value:w}))}function kS({children:n,location:a}){return jS(Sd(n),a)}function Sd(n,a=[]){let i=[];return S.Children.forEach(n,(o,u)=>{if(!S.isValidElement(o))return;let d=[...a,u];if(o.type===S.Fragment){i.push.apply(i,Sd(o.props.children,d));return}He(o.type===_d,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=Sd(o.props.children,d)),i.push(f)}),i}var Zo="get",Fo="application/x-www-form-urlencoded";function hs(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function YS(n){return hs(n)&&n.tagName.toLowerCase()==="button"}function qS(n){return hs(n)&&n.tagName.toLowerCase()==="form"}function GS(n){return hs(n)&&n.tagName.toLowerCase()==="input"}function XS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function PS(n,a){return n.button===0&&(!a||a==="_self")&&!XS(n)}var Yo=null;function KS(){if(Yo===null)try{new FormData(document.createElement("form"),0),Yo=!1}catch{Yo=!0}return Yo}var QS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pc(n){return n!=null&&!QS.has(n)?(sn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fo}"`),null):n}function ZS(n,a){let i,o,u,d,f;if(qS(n)){let m=n.getAttribute("action");o=m?Un(m,a):null,i=n.getAttribute("method")||Zo,u=Pc(n.getAttribute("enctype"))||Fo,d=new FormData(n)}else if(YS(n)||GS(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||m.getAttribute("action");if(o=h?Un(h,a):null,i=n.getAttribute("formmethod")||m.getAttribute("method")||Zo,u=Pc(n.getAttribute("formenctype"))||Pc(m.getAttribute("enctype"))||Fo,d=new FormData(m,n),!KS()){let{name:p,type:y,value:b}=n;if(y==="image"){let _=p?`${p}.`:"";d.append(`${_}x`,"0"),d.append(`${_}y`,"0")}else p&&d.append(p,b)}}else{if(hs(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Zo,o=null,u=Fo,f=n}return d&&u==="text/plain"&&(f=d,d=void 0),{action:o,method:i.toLowerCase(),encType:u,formData:d,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function af(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function cb(n,a,i,o){let u=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${o}`:u.pathname=`${u.pathname}.${o}`:u.pathname==="/"?u.pathname=`_root.${o}`:a&&Un(u.pathname,a)==="/"?u.pathname=`${ns(a)}/_root.${o}`:u.pathname=`${ns(u.pathname)}.${o}`,u}async function FS(n,a){if(n.id in a)return a[n.id];try{let i=await import(n.module);return a[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function JS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function WS(n,a,i){let o=await Promise.all(n.map(async u=>{let d=a.routes[u.route.id];if(d){let f=await FS(d,i);return f.links?f.links():[]}return[]}));return nE(o.flat(1).filter(JS).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function ry(n,a,i,o,u,d){let f=(h,p)=>i[p]?h.route.id!==i[p].route.id:!0,m=(h,p)=>i[p].pathname!==h.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==h.params["*"];return d==="assets"?a.filter((h,p)=>f(h,p)||m(h,p)):d==="data"?a.filter((h,p)=>{let y=o.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(f(h,p)||m(h,p))return!0;if(h.route.shouldRevalidate){let b=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function IS(n,a,{includeHydrateFallback:i}={}){return eE(n.map(o=>{let u=a.routes[o.route.id];if(!u)return[];let d=[u.module];return u.clientActionModule&&(d=d.concat(u.clientActionModule)),u.clientLoaderModule&&(d=d.concat(u.clientLoaderModule)),i&&u.hydrateFallbackModule&&(d=d.concat(u.hydrateFallbackModule)),u.imports&&(d=d.concat(u.imports)),d}).flat(1))}function eE(n){return[...new Set(n)]}function tE(n){let a={},i=Object.keys(n).sort();for(let o of i)a[o]=n[o];return a}function nE(n,a){let i=new Set;return new Set(a),n.reduce((o,u)=>{let d=JSON.stringify(tE(u));return i.has(d)||(i.add(d),o.push({key:d,link:u})),o},[])}function lf(){let n=S.useContext(Ka);return af(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function rE(){let n=S.useContext(ms);return af(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var of=S.createContext(void 0);of.displayName="FrameworkContext";function ps(){let n=S.useContext(of);return af(n,"You must render this element inside a <HydratedRouter> element"),n}function aE(n,a){let i=S.useContext(of),[o,u]=S.useState(!1),[d,f]=S.useState(!1),{onFocus:m,onBlur:h,onMouseEnter:p,onMouseLeave:y,onTouchStart:b}=a,_=S.useRef(null);S.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let w=D=>{D.forEach(k=>{f(k.isIntersecting)})},A=new IntersectionObserver(w,{threshold:.5});return _.current&&A.observe(_.current),()=>{A.disconnect()}}},[n]),S.useEffect(()=>{if(o){let w=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(w)}}},[o]);let j=()=>{u(!0)},N=()=>{u(!1),f(!1)};return i?n!=="intent"?[d,_,{}]:[d,_,{onFocus:Xl(m,j),onBlur:Xl(h,N),onMouseEnter:Xl(p,j),onMouseLeave:Xl(y,N),onTouchStart:Xl(b,j)}]:[!1,_,{}]}function Xl(n,a){return i=>{n&&n(i),i.defaultPrevented||a(i)}}function lE({page:n,...a}){let i=yS(),{nonce:o}=ps(),{router:u}=lf(),d=S.useMemo(()=>Pg(u.routes,n,u.basename),[u.routes,n,u.basename]);return d?(a.nonce==null&&o&&(a={...a,nonce:o}),i?S.createElement(oE,{page:n,matches:d,...a}):S.createElement(sE,{page:n,matches:d,...a})):null}function iE(n){let{manifest:a,routeModules:i}=ps(),[o,u]=S.useState([]);return S.useEffect(()=>{let d=!1;return WS(n,a,i).then(f=>{d||u(f)}),()=>{d=!0}},[n,a,i]),o}function oE({page:n,matches:a,...i}){let o=Vn(),{future:u}=ps(),{basename:d}=lf(),f=S.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let m=cb(n,d,u.v8_trailingSlashAwareDataRequests,"rsc"),h=!1,p=[];for(let y of a)typeof y.route.shouldRevalidate=="function"?h=!0:p.push(y.route.id);return h&&p.length>0&&m.searchParams.set("_routes",p.join(",")),[m.pathname+m.search]},[d,u.v8_trailingSlashAwareDataRequests,n,o,a]);return S.createElement(S.Fragment,null,f.map(m=>S.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...i})))}function sE({page:n,matches:a,...i}){let o=Vn(),{future:u,manifest:d,routeModules:f}=ps(),{basename:m}=lf(),{loaderData:h,matches:p}=rE(),y=S.useMemo(()=>ry(n,a,p,d,o,"data"),[n,a,p,d,o]),b=S.useMemo(()=>ry(n,a,p,d,o,"assets"),[n,a,p,d,o]),_=S.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let w=new Set,A=!1;if(a.forEach(k=>{let q=d.routes[k.route.id];!q||!q.hasLoader||(!y.some(Z=>Z.route.id===k.route.id)&&k.route.id in h&&f[k.route.id]?.shouldRevalidate||q.hasClientLoader?A=!0:w.add(k.route.id))}),w.size===0)return[];let D=cb(n,m,u.v8_trailingSlashAwareDataRequests,"data");return A&&w.size>0&&D.searchParams.set("_routes",a.filter(k=>w.has(k.route.id)).map(k=>k.route.id).join(",")),[D.pathname+D.search]},[m,u.v8_trailingSlashAwareDataRequests,h,o,d,y,a,n,f]),j=S.useMemo(()=>IS(b,d),[b,d]),N=iE(b);return S.createElement(S.Fragment,null,_.map(w=>S.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),j.map(w=>S.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),N.map(({key:w,link:A})=>S.createElement("link",{key:w,nonce:i.nonce,...A,crossOrigin:A.crossOrigin??i.crossOrigin})))}function uE(...n){return a=>{n.forEach(i=>{typeof i=="function"?i(a):i!=null&&(i.current=a)})}}var cE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{cE&&(window.__reactRouterVersion="7.18.2")}catch{}function dE({basename:n,children:a,useTransitions:i,window:o}){let u=S.useRef();u.current==null&&(u.current=q1({window:o,v5Compat:!0}));let d=u.current,[f,m]=S.useState({action:d.action,location:d.location}),h=S.useCallback(p=>{i===!1?m(p):S.startTransition(()=>m(p))},[i]);return S.useLayoutEffect(()=>d.listen(h),[d,h]),S.createElement(HS,{basename:n,children:a,location:f.location,navigationType:f.action,navigator:d,useTransitions:i})}var db=S.forwardRef(function({onClick:a,discover:i="render",prefetch:o="none",relative:u,reloadDocument:d,replace:f,mask:m,state:h,target:p,to:y,preventScrollReset:b,viewTransition:_,defaultShouldRevalidate:j,...N},w){let{basename:A,navigator:D,useTransitions:k}=S.useContext(It),q=typeof y=="string"&&Wd.test(y),Z=eb(y,A);y=Z.to;let V=TS(y,{relative:u}),J=Vn(),Q=null;if(m){let re=Id(m,[],J.mask?J.mask.pathname:"/",!0);A!=="/"&&(re.pathname=re.pathname==="/"?A:ln([A,re.pathname])),Q=D.createHref(re)}let[E,K,le]=aE(o,N),F=pE(y,{replace:f,mask:m,state:h,target:p,preventScrollReset:b,relative:u,viewTransition:_,defaultShouldRevalidate:j,useTransitions:k});function oe(re){a&&a(re),re.defaultPrevented||F(re)}let z=!(Z.isExternal||d),W=S.createElement("a",{...N,...le,href:(z?Q:void 0)||Z.absoluteURL||V,onClick:z?oe:a,ref:uE(w,K),target:p,"data-discover":!q&&i==="render"?"true":void 0});return E&&!q?S.createElement(S.Fragment,null,W,S.createElement(lE,{page:V})):W});db.displayName="Link";var fE=S.forwardRef(function({"aria-current":a="page",caseSensitive:i=!1,className:o="",end:u=!1,style:d,to:f,viewTransition:m,children:h,...p},y){let b=yi(f,{relative:p.relative}),_=Vn(),j=S.useContext(ms),{navigator:N,basename:w}=S.useContext(It),A=j!=null&&xE(b)&&m===!0,D=N.encodeLocation?N.encodeLocation(b).pathname:b.pathname,k=_.pathname,q=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;i||(k=k.toLowerCase(),q=q?q.toLowerCase():null,D=D.toLowerCase()),q&&w&&(q=Un(q,w)||q);const Z=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let V=k===D||!u&&k.startsWith(D)&&k.charAt(Z)==="/",J=q!=null&&(q===D||!u&&q.startsWith(D)&&q.charAt(D.length)==="/"),Q={isActive:V,isPending:J,isTransitioning:A},E=V?a:void 0,K;typeof o=="function"?K=o(Q):K=[o,V?"active":null,J?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let le=typeof d=="function"?d(Q):d;return S.createElement(db,{...p,"aria-current":E,className:K,ref:y,style:le,to:f,viewTransition:m},typeof h=="function"?h(Q):h)});fE.displayName="NavLink";var mE=S.forwardRef(({discover:n="render",fetcherKey:a,navigate:i,reloadDocument:o,replace:u,state:d,method:f=Zo,action:m,onSubmit:h,relative:p,preventScrollReset:y,viewTransition:b,defaultShouldRevalidate:_,...j},N)=>{let{useTransitions:w}=S.useContext(It),A=gE(),D=bE(m,{relative:p}),k=f.toLowerCase()==="get"?"get":"post",q=typeof m=="string"&&Wd.test(m),Z=V=>{if(h&&h(V),V.defaultPrevented)return;V.preventDefault();let J=V.nativeEvent.submitter,Q=J?.getAttribute("formmethod")||f,E=()=>A(J||V.currentTarget,{fetcherKey:a,method:Q,navigate:i,replace:u,state:d,relative:p,preventScrollReset:y,viewTransition:b,defaultShouldRevalidate:_});w&&i!==!1?S.startTransition(()=>E()):E()};return S.createElement("form",{ref:N,method:k,action:D,onSubmit:o?h:Z,...j,"data-discover":!q&&n==="render"?"true":void 0})});mE.displayName="Form";function hE(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fb(n){let a=S.useContext(Ka);return He(a,hE(n)),a}function pE(n,{target:a,replace:i,mask:o,state:u,preventScrollReset:d,relative:f,viewTransition:m,defaultShouldRevalidate:h,useTransitions:p}={}){let y=tf(),b=Vn(),_=yi(n,{relative:f});return S.useCallback(j=>{if(PS(j,a)){j.preventDefault();let N=i!==void 0?i:ri(b)===ri(_),w=()=>y(n,{replace:N,mask:o,state:u,preventScrollReset:d,relative:f,viewTransition:m,defaultShouldRevalidate:h});p?S.startTransition(()=>w()):w()}},[b,y,_,i,o,u,a,n,d,f,m,h,p])}var vE=0,yE=()=>`__${String(++vE)}__`;function gE(){let{router:n}=fb("useSubmit"),{basename:a}=S.useContext(It),i=LS(),o=n.fetch,u=n.navigate;return S.useCallback(async(d,f={})=>{let{action:m,method:h,encType:p,formData:y,body:b}=ZS(d,a);if(f.navigate===!1){let _=f.fetcherKey||yE();await o(_,i,f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:b,formMethod:f.method||h,formEncType:f.encType||p,flushSync:f.flushSync})}else await u(f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:b,formMethod:f.method||h,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[o,u,a,i])}function bE(n,{relative:a}={}){let{basename:i}=S.useContext(It),o=S.useContext(gn);He(o,"useFormAction must be used inside a RouteContext");let[u]=o.matches.slice(-1),d={...yi(n||".",{relative:a})},f=Vn();if(n==null){d.search=f.search;let m=new URLSearchParams(d.search),h=m.getAll("index");if(h.some(y=>y==="")){m.delete("index"),h.filter(b=>b).forEach(b=>m.append("index",b));let y=m.toString();d.search=y?`?${y}`:""}}return(!n||n===".")&&u.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(d.pathname=d.pathname==="/"?i:ln([i,d.pathname])),ri(d)}function xE(n,{relative:a}={}){let i=S.useContext(rb);He(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=fb("useViewTransitionState"),u=yi(n,{relative:a});if(!i.isTransitioning)return!1;let d=Un(i.currentLocation.pathname,o)||i.currentLocation.pathname,f=Un(i.nextLocation.pathname,o)||i.nextLocation.pathname;return ts(u.pathname,f)!=null||ts(u.pathname,d)!=null}var Kc={exports:{}},ut={};var ay;function _E(){if(ay)return ut;ay=1;var n=Jd();function a(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(h,p,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:h,containerInfo:p,implementation:y}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ut.createPortal=function(h,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(a(299));return d(h,p,null,y)},ut.flushSync=function(h){var p=f.T,y=o.p;try{if(f.T=null,o.p=2,h)return h()}finally{f.T=p,o.p=y,o.d.f()}},ut.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(h,p))},ut.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},ut.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var y=p.as,b=m(y,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,j=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?o.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:_,fetchPriority:j}):y==="script"&&o.d.X(h,{crossOrigin:b,integrity:_,fetchPriority:j,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ut.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=m(p.as,p.crossOrigin);o.d.M(h,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(h)},ut.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,b=m(y,p.crossOrigin);o.d.L(h,y,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ut.preloadModule=function(h,p){if(typeof h=="string")if(p){var y=m(p.as,p.crossOrigin);o.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(h)},ut.requestFormReset=function(h){o.d.r(h)},ut.unstable_batchedUpdates=function(h,p){return h(p)},ut.useFormState=function(h,p,y){return f.H.useFormState(h,p,y)},ut.useFormStatus=function(){return f.H.useHostTransitionStatus()},ut.version="19.2.8",ut}var ly;function mb(){if(ly)return Kc.exports;ly=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Kc.exports=_E(),Kc.exports}var SE=mb();function Xr(n,a){var i={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&a.indexOf(o)<0&&(i[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,o=Object.getOwnPropertySymbols(n);u<o.length;u++)a.indexOf(o[u])<0&&Object.prototype.propertyIsEnumerable.call(n,o[u])&&(i[o[u]]=n[o[u]]);return i}function Qc(n,a,i,o){function u(d){return d instanceof i?d:new i(function(f){f(d)})}return new(i||(i=Promise))(function(d,f){function m(y){try{p(o.next(y))}catch(b){f(b)}}function h(y){try{p(o.throw(y))}catch(b){f(b)}}function p(y){y.done?d(y.value):u(y.value).then(m,h)}p((o=o.apply(n,a||[])).next())})}function hb(n){var a,i,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var u=n.length;for(a=0;a<u;a++)n[a]&&(i=hb(n[a]))&&(o&&(o+=" "),o+=i)}else for(i in n)n[i]&&(o&&(o+=" "),o+=i);return o}function on(){for(var n,a,i=0,o="",u=arguments.length;i<u;i++)(n=arguments[i])&&(a=hb(n))&&(o&&(o+=" "),o+=a);return o}function en(n,a){a===void 0&&(a={});var i=a.insertAt;if(n&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",i==="top"&&o.firstChild?o.insertBefore(u,o.firstChild):o.appendChild(u),u.styleSheet?u.styleSheet.cssText=n:u.appendChild(document.createTextNode(n))}}function pb(...n){return(...a)=>{for(let i of n)typeof i=="function"&&i(...a)}}const Pr=typeof document<"u"?Ve.useLayoutEffect:()=>{};function Ft(n){const a=S.useRef(null);return Pr((()=>{a.current=n}),[n]),S.useCallback(((...i)=>{const o=a.current;return o?.(...i)}),[])}function EE(n){let[a,i]=S.useState(n),o=S.useRef(null),u=Ft((()=>{if(!o.current)return;let f=o.current.next();f.done?o.current=null:a===f.value?u():i(f.value)}));Pr((()=>{o.current&&u()}));let d=Ft((f=>{o.current=f(a),u()}));return[a,d]}const Ed={prefix:String(Math.round(1e10*Math.random())),current:0},iy=Ve.createContext(Ed),TE=Ve.createContext(!1);let wE=!!(typeof window<"u"&&window.document&&window.document.createElement),Zc=new WeakMap;const AE=typeof Ve.useId=="function"?function(n){let a=Ve.useId(),[i]=S.useState(ME()),o=i?"react-aria":`react-aria${Ed.prefix}`;return n||`${o}-${a}`}:function(n){let a=S.useContext(iy);a!==Ed||wE||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let i=(function(u=!1){let d=S.useContext(iy),f=S.useRef(null);if(f.current===null&&!u){var m,h;let p=(h=Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||h===void 0||(m=h.ReactCurrentOwner)===null||m===void 0?void 0:m.current;if(p){let y=Zc.get(p);y==null?Zc.set(p,{id:d.current,state:p.memoizedState}):p.memoizedState!==y.state&&(d.current=y.id,Zc.delete(p))}f.current=++d.current}return f.current})(!!n),o=`react-aria${a.prefix}`;return n||`${o}-${i}`};function jE(){return!1}function CE(){return!0}function NE(n){return()=>{}}function ME(){return typeof Ve.useSyncExternalStore=="function"?Ve.useSyncExternalStore(NE,jE,CE):S.useContext(TE)}let Zl,zE=!!(typeof window<"u"&&window.document&&window.document.createElement),Ya=new Map;function qa(n){let[a,i]=S.useState(n),o=S.useRef(null),u=AE(a),d=S.useRef(null);if(Zl&&Zl.register(d,u),zE){const f=Ya.get(u);f&&!f.includes(o)?f.push(o):Ya.set(u,[o])}return Pr((()=>{let f=u;return()=>{Zl&&Zl.unregister(d),Ya.delete(f)}}),[u]),S.useEffect((()=>{let f=o.current;return f&&i(f),()=>{f&&(o.current=null)}})),u}function RE(n,a){if(n===a)return n;let i=Ya.get(n);if(i)return i.forEach((u=>u.current=a)),a;let o=Ya.get(a);return o?(o.forEach((u=>u.current=n)),n):a}function oy(n=[]){let a=qa(),[i,o]=EE(a),u=S.useCallback((()=>{o((function*(){yield a,yield document.getElementById(a)?a:void 0}))}),[a,o]);return Pr(u,[a,u,...n]),i}typeof FinalizationRegistry<"u"&&(Zl=new FinalizationRegistry((n=>{Ya.delete(n)})));function yt(...n){let a={...n[0]};for(let i=1;i<n.length;i++){let o=n[i];for(let u in o){let d=a[u],f=o[u];typeof d=="function"&&typeof f=="function"&&u[0]==="o"&&u[1]==="n"&&u.charCodeAt(2)>=65&&u.charCodeAt(2)<=90?a[u]=pb(d,f):u!=="className"&&u!=="UNSAFE_className"||typeof d!="string"||typeof f!="string"?u==="id"&&d&&f?a.id=RE(d,f):a[u]=f!==void 0?f:d:a[u]=on(d,f)}}return a}function DE(...n){return n.length===1&&n[0]?n[0]:a=>{for(let i of n)typeof i=="function"?i(a):i!=null&&(i.current=a)}}function vb(n){const a=S.useRef(null);return S.useMemo((()=>({get current(){return a.current},set current(i){a.current=i,typeof n=="function"?n(i):n&&(n.current=i)}})),[n])}const OE=Symbol("default");function $E(n){let{className:a,style:i,children:o,defaultClassName:u,defaultChildren:d,defaultStyle:f,values:m}=n;return S.useMemo((()=>{let h,p,y;return h=typeof a=="function"?a({...m,defaultClassName:u}):a,p=typeof i=="function"?i({...m,defaultStyle:f||{}}):i,y=typeof o=="function"?o({...m,defaultChildren:d}):o??d,{className:h??u,style:p||f?{...f,...p}:void 0,children:y??d,"data-rac":""}}),[a,i,o,u,d,f,m])}function LE(n,a){let i=S.useContext(n);if(a===null)return null;if(i&&typeof i=="object"&&"slots"in i&&i.slots){let o=a||OE;if(!i.slots[o]){let u=new Intl.ListFormat().format(Object.keys(i.slots).map((d=>`"${d}"`)));throw new Error(`${a?`Invalid slot "${a}".`:"A slot prop is required."} Valid slot names are ${u}.`)}return i.slots[o]}return i}function UE(n,a,i){let o=LE(i,n.slot)||{},{ref:u,...d}=o,f=vb(S.useMemo((()=>DE(a,u)),[a,u])),m=yt(d,n);return"style"in d&&d.style&&"style"in n&&n.style&&(typeof d.style=="function"||typeof n.style=="function"?m.style=h=>{let p=typeof d.style=="function"?d.style(h):d.style,y={...h.defaultStyle,...p},b=typeof n.style=="function"?n.style({...h,defaultStyle:y}):n.style;return{...y,...b}}:m.style={...d.style,...n.style}),[m,f]}var sy={shadow:"elevation-module_shadow__Vsh7b",disabled:"elevation-module_disabled__La41s"};en(`.elevation-module_shadow__Vsh7b {\r
  border-radius: inherit;\r
  inset: 0px;\r
  position: absolute;\r
  transition-duration: inherit;\r
  transition-property: inherit;\r
  transition-timing-function: inherit;\r
  --md-elevation-level: var(--_container-elevation);\r
  --md-elevation-shadow-color: var(--_container-shadow-color);\r
  transition-duration: 280ms;\r
  display: flex;\r
  pointer-events: none;\r
  &:before,\r
  &:after {\r
    border-radius: inherit;\r
    inset: 0px;\r
    position: absolute;\r
    transition-duration: inherit;\r
    transition-property: inherit;\r
    transition-timing-function: inherit;\r
    content: '';\r
    transition-property: box-shadow, opacity;\r
    --_level: var(--md-elevation-level, 0);\r
    --_shadow-color: var(\r
      --md-elevation-shadow-color,\r
      var(--md-sys-color-shadow, #000)\r
    );\r
  }\r
  &:before {\r
    box-shadow: 0px\r
      calc(\r
        1px *\r
          (\r
            clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 3, 1) + 2 *\r
              clamp(0, var(--_level) - 4, 1)\r
          )\r
      )\r
      calc(\r
        1px *\r
          (\r
            2 * clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 2, 1) +\r
              clamp(0, var(--_level) - 4, 1)\r
          )\r
      )\r
      0px var(--_shadow-color);\r
    opacity: 0.3;\r
  }\r
  &:after {\r
    box-shadow: 0px\r
      calc(\r
        1px *\r
          (\r
            clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 1, 1) + 2 *\r
              clamp(0, var(--_level) - 2, 3)\r
          )\r
      )\r
      calc(\r
        1px *\r
          (3 * clamp(0, var(--_level), 2) + 2 * clamp(0, var(--_level) - 2, 3))\r
      )\r
      calc(\r
        1px * (clamp(0, var(--_level), 4) + 2 * clamp(0, var(--_level) - 4, 1))\r
      )\r
      var(--_shadow-color);\r
    opacity: 0.15;\r
  }\r
}\r
\r
.elevation-module_disabled__La41s .elevation-module_shadow__Vsh7b {\r
  transition: none 0s ease 0s;\r
  --md-elevation-level: var(--_disabled-container-elevation);\r
}\r
`);const sf=n=>{var{disabled:a=!1}=n,i=Xr(n,["disabled"]);const o=on(sy.shadow,a&&sy.disabled);return g.jsx("span",Object.assign({},i,{"aria-hidden":"true",className:o}))};sf.displayName="Actify.Elevation";const yb=S.createContext({});function BE(n){const a=S.useRef(null);return a.current===null&&(a.current=n()),a.current}const uf=typeof window<"u",VE=uf?S.useLayoutEffect:S.useEffect,cf=S.createContext(null),gb=S.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function HE(n=!0){const a=S.useContext(cf);if(a===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:u}=a,d=S.useId();S.useEffect((()=>{if(n)return u(d)}),[n]);const f=S.useCallback((()=>n&&o&&o(d)),[d,o,n]);return!i&&o?[!1,f]:[!0]}function kE(n){if(typeof Proxy>"u")return n;const a=new Map;return new Proxy(((...i)=>n(...i)),{get:(i,o)=>o==="create"?n:(a.has(o)||a.set(o,n(o)),a.get(o))})}function vs(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function uy(n){const a=[{},{}];return n?.values.forEach(((i,o)=>{a[0][o]=i.get(),a[1][o]=i.getVelocity()})),a}function df(n,a,i,o){if(typeof a=="function"){const[u,d]=uy(o);a=a(i!==void 0?i:n.custom,u,d)}if(typeof a=="string"&&(a=n.variants&&n.variants[a]),typeof a=="function"){const[u,d]=uy(o);a=a(i!==void 0?i:n.custom,u,d)}return a}function ai(n,a,i){const o=n.getProps();return df(o,a,i!==void 0?i:o.custom,n)}function ff(n,a){return n?.[a]??n?.default??n}const Wt=n=>n,qo=["read","resolveKeyframes","update","preRender","render","postRender"],cy={value:null};function YE(n,a){let i=new Set,o=new Set,u=!1,d=!1;const f=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1},h=0;function p(b){f.has(b)&&(y.schedule(b),n()),h++,b(m)}const y={schedule:(b,_=!1,j=!1)=>{const N=j&&u?i:o;return _&&f.add(b),N.has(b)||N.add(b),b},cancel:b=>{o.delete(b),f.delete(b)},process:b=>{m=b,u?d=!0:(u=!0,[i,o]=[o,i],i.forEach(p),a&&cy.value&&cy.value.frameloop[a].push(h),h=0,i.clear(),u=!1,d&&(d=!1,y.process(b)))}};return y}function bb(n,a){let i=!1,o=!0;const u={delta:0,timestamp:0,isProcessing:!1},d=()=>i=!0,f=qo.reduce(((N,w)=>(N[w]=YE(d,a?w:void 0),N)),{}),{read:m,resolveKeyframes:h,update:p,preRender:y,render:b,postRender:_}=f,j=()=>{const N=performance.now();i=!1,u.delta=o?1e3/60:Math.max(Math.min(N-u.timestamp,40),1),u.timestamp=N,u.isProcessing=!0,m.process(u),h.process(u),p.process(u),y.process(u),b.process(u),_.process(u),u.isProcessing=!1,i&&a&&(o=!1,n(j))};return{schedule:qo.reduce(((N,w)=>{const A=f[w];return N[w]=(D,k=!1,q=!1)=>(i||(i=!0,o=!0,u.isProcessing||n(j)),A.schedule(D,k,q)),N}),{}),cancel:N=>{for(let w=0;w<qo.length;w++)f[qo[w]].cancel(N)},state:u,steps:f}}const{schedule:De,cancel:hr,state:st,steps:Fc}=bb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Wt,!0),Qa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Kr=new Set(Qa),xb=new Set(["width","height","top","left","right","bottom",...Qa]);function mf(n,a){n.indexOf(a)===-1&&n.push(a)}function hf(n,a){const i=n.indexOf(a);i>-1&&n.splice(i,1)}let pf=class{constructor(){this.subscriptions=[]}add(a){return mf(this.subscriptions,a),()=>hf(this.subscriptions,a)}notify(a,i,o){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](a,i,o);else for(let d=0;d<u;d++){const f=this.subscriptions[d];f&&f(a,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}};function _b(n,a){return a?n*(1e3/a):0}const qE={useManualTiming:!1};let Jo;function GE(){Jo=void 0}const hn={now:()=>(Jo===void 0&&hn.set(st.isProcessing||qE.useManualTiming?st.timestamp:performance.now()),Jo),set:n=>{Jo=n,queueMicrotask(GE)}};let XE=class{constructor(a,i={}){this.version="12.6.3",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,u=!0)=>{const d=hn.now();this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),u&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(a),this.owner=i.owner}setCurrent(a){var i;this.current=a,this.updatedAt=hn.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=(i=this.current,!isNaN(parseFloat(i))))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,i){this.events[a]||(this.events[a]=new pf);const o=this.events[a].add(i);return a==="change"?()=>{o(),De.read((()=>{this.events.change.getSize()||this.stop()}))}:o}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,i){this.passiveEffect=a,this.stopPassiveEffect=i}set(a,i=!0){i&&this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a,i)}setWithVelocity(a,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-o}jump(a,i=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const a=hn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>30)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,30);return _b(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(a){return this.stop(),new Promise((i=>{this.hasAnimated=!0,this.animation=a(i),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function li(n,a){return new XE(n,a)}const Td=n=>Array.isArray(n),PE=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),KE=n=>Td(n)?n[n.length-1]||0:n;function QE(n,a,i){n.hasValue(a)?n.getValue(a).set(i):n.addValue(a,li(i))}function ZE(n,a){const i=ai(n,a);let{transitionEnd:o={},transition:u={},...d}=i||{};d={...d,...o};for(const f in d)QE(n,f,KE(d[f]))}const dt=n=>!!(n&&n.getVelocity);function FE(n){return!!(dt(n)&&n.add)}function wd(n,a){const i=n.getValue("willChange");if(FE(i))return i.add(a)}const vf=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),JE="framerAppearId",Sb="data-"+vf(JE);function Eb(n){return n.props[Sb]}const pn=n=>1e3*n,vn=n=>n/1e3;function yf(n){let a;return()=>(a===void 0&&(a=n()),a)}const WE=yf((()=>window.ScrollTimeline!==void 0));let IE=class{constructor(a){this.stop=()=>this.runAll("stop"),this.animations=a.filter(Boolean)}get finished(){return Promise.all(this.animations.map((a=>a.finished)))}getAll(a){return this.animations[0][a]}setAll(a,i){for(let o=0;o<this.animations.length;o++)this.animations[o][a]=i}attachTimeline(a,i){const o=this.animations.map((u=>WE()&&u.attachTimeline?u.attachTimeline(a):typeof i=="function"?i(u):void 0));return()=>{o.forEach(((u,d)=>{u&&u(),this.animations[d].stop()}))}}get time(){return this.getAll("time")}set time(a){this.setAll("time",a)}get speed(){return this.getAll("speed")}set speed(a){this.setAll("speed",a)}get startTime(){return this.getAll("startTime")}get duration(){let a=0;for(let i=0;i<this.animations.length;i++)a=Math.max(a,this.animations[i].duration);return a}runAll(a){this.animations.forEach((i=>i[a]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}},eT=class extends IE{then(a,i){return this.finished.finally(a).then((()=>{}))}};const gf=n=>Array.isArray(n)&&typeof n[0]=="number",tT={};function nT(n,a){const i=yf(n);return()=>tT[a]??i()}const ii=nT((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}),"linearEasing"),Tb=(n,a,i=10)=>{let o="";const u=Math.max(Math.round(a/i),2);for(let d=0;d<u;d++)o+=n(d/(u-1))+", ";return`linear(${o.substring(0,o.length-2)})`},Fl=([n,a,i,o])=>`cubic-bezier(${n}, ${a}, ${i}, ${o})`,Ad={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fl([0,.65,.55,1]),circOut:Fl([.55,0,1,.45]),backIn:Fl([.31,.01,.66,-.59]),backOut:Fl([.33,1.53,.69,.99])};function wb(n,a){return n?typeof n=="function"&&ii()?Tb(n,a):gf(n)?Fl(n):Array.isArray(n)?n.map((i=>wb(i,a)||Ad.easeOut)):Ad[n]:void 0}function rT(n,a,i,{delay:o=0,duration:u=300,repeat:d=0,repeatType:f="loop",ease:m="easeInOut",times:h}={},p=void 0){const y={[a]:i};h&&(y.offset=h);const b=wb(m,u);return Array.isArray(b)&&(y.easing=b),n.animate(y,{delay:o,duration:u,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal",pseudoElement:p})}function bf(n){return typeof n=="function"&&"applyToOptions"in n}function Ab(n){return!!(typeof n=="function"&&ii()||!n||typeof n=="string"&&(n in Ad||ii())||gf(n)||Array.isArray(n)&&n.every(Ab))}function dy(n,a){n.timeline=a,n.onfinish=null}const fy=(n,a,i)=>(((1-3*i+3*a)*n+(3*i-6*a))*n+3*a)*n;function Za(n,a,i,o){if(n===a&&i===o)return Wt;const u=d=>(function(f,m,h,p,y){let b,_,j=0;do _=m+(h-m)/2,b=fy(_,p,y)-f,b>0?h=_:m=_;while(Math.abs(b)>1e-7&&++j<12);return _})(d,0,1,n,i);return d=>d===0||d===1?d:fy(u(d),a,o)}const jb=n=>a=>a<=.5?n(2*a)/2:(2-n(2*(1-a)))/2,Cb=n=>a=>1-n(1-a),Nb=Za(.33,1.53,.69,.99),xf=Cb(Nb),Mb=jb(xf),zb=n=>(n*=2)<1?.5*xf(n):.5*(2-Math.pow(2,-10*(n-1))),_f=n=>1-Math.sin(Math.acos(n)),Rb=Cb(_f),Db=jb(_f),Ob=n=>/^0[^.\s]+$/u.test(n);function aT(n){return typeof n=="number"?n===0:n===null||n==="none"||n==="0"||Ob(n)}const Bn=(n,a,i)=>i>a?a:i<n?n:i,Fa={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},oi={...Fa,transform:n=>Bn(0,1,n)},Go={...Fa,default:1},Wl=n=>Math.round(1e5*n)/1e5,Sf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function lT(n){return n==null}const iT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ef=(n,a)=>i=>!!(typeof i=="string"&&iT.test(i)&&i.startsWith(n)||a&&!lT(i)&&Object.prototype.hasOwnProperty.call(i,a)),$b=(n,a,i)=>o=>{if(typeof o!="string")return o;const[u,d,f,m]=o.match(Sf);return{[n]:parseFloat(u),[a]:parseFloat(d),[i]:parseFloat(f),alpha:m!==void 0?parseFloat(m):1}},Jc={...Fa,transform:n=>Math.round((a=>Bn(0,255,a))(n))},Hr={test:Ef("rgb","red"),parse:$b("red","green","blue"),transform:({red:n,green:a,blue:i,alpha:o=1})=>"rgba("+Jc.transform(n)+", "+Jc.transform(a)+", "+Jc.transform(i)+", "+Wl(oi.transform(o))+")"},jd={test:Ef("#"),parse:function(n){let a="",i="",o="",u="";return n.length>5?(a=n.substring(1,3),i=n.substring(3,5),o=n.substring(5,7),u=n.substring(7,9)):(a=n.substring(1,2),i=n.substring(2,3),o=n.substring(3,4),u=n.substring(4,5),a+=a,i+=i,o+=o,u+=u),{red:parseInt(a,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:u?parseInt(u,16)/255:1}},transform:Hr.transform},gi=n=>({test:a=>typeof a=="string"&&a.endsWith(n)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${n}`}),mr=gi("deg"),yn=gi("%"),ue=gi("px"),oT=gi("vh"),sT=gi("vw"),my={...yn,parse:n=>yn.parse(n)/100,transform:n=>yn.transform(100*n)},$a={test:Ef("hsl","hue"),parse:$b("hue","saturation","lightness"),transform:({hue:n,saturation:a,lightness:i,alpha:o=1})=>"hsla("+Math.round(n)+", "+yn.transform(Wl(a))+", "+yn.transform(Wl(i))+", "+Wl(oi.transform(o))+")"},ct={test:n=>Hr.test(n)||jd.test(n)||$a.test(n),parse:n=>Hr.test(n)?Hr.parse(n):$a.test(n)?$a.parse(n):jd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Hr.transform(n):$a.transform(n)},uT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,Lb="number",Ub="color",cT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function si(n){const a=n.toString(),i=[],o={color:[],number:[],var:[]},u=[];let d=0;const f=a.replace(cT,(m=>(ct.test(m)?(o.color.push(d),u.push(Ub),i.push(ct.parse(m))):m.startsWith("var(")?(o.var.push(d),u.push("var"),i.push(m)):(o.number.push(d),u.push(Lb),i.push(parseFloat(m))),++d,"${}"))).split("${}");return{values:i,split:f,indexes:o,types:u}}function hy(n){return si(n).values}function py(n){const{split:a,types:i}=si(n),o=a.length;return u=>{let d="";for(let f=0;f<o;f++)if(d+=a[f],u[f]!==void 0){const m=i[f];d+=m===Lb?Wl(u[f]):m===Ub?ct.transform(u[f]):u[f]}return d}}const dT=n=>typeof n=="number"?0:n,pr={test:function(n){return isNaN(n)&&typeof n=="string"&&(n.match(Sf)?.length||0)+(n.match(uT)?.length||0)>0},parse:hy,createTransformer:py,getAnimatableNone:function(n){const a=hy(n);return py(n)(a.map(dT))}},fT=new Set(["brightness","contrast","saturate","opacity"]);function mT(n){const[a,i]=n.slice(0,-1).split("(");if(a==="drop-shadow")return n;const[o]=i.match(Sf)||[];if(!o)return n;const u=i.replace(o,"");let d=fT.has(a)?1:0;return o!==i&&(d*=100),a+"("+d+u+")"}const hT=/\b([a-z-]*)\(.*?\)/gu,Cd={...pr,getAnimatableNone:n=>{const a=n.match(hT);return a?a.map(mT).join(" "):n}},pT={borderWidth:ue,borderTopWidth:ue,borderRightWidth:ue,borderBottomWidth:ue,borderLeftWidth:ue,borderRadius:ue,radius:ue,borderTopLeftRadius:ue,borderTopRightRadius:ue,borderBottomRightRadius:ue,borderBottomLeftRadius:ue,width:ue,maxWidth:ue,height:ue,maxHeight:ue,top:ue,right:ue,bottom:ue,left:ue,padding:ue,paddingTop:ue,paddingRight:ue,paddingBottom:ue,paddingLeft:ue,margin:ue,marginTop:ue,marginRight:ue,marginBottom:ue,marginLeft:ue,backgroundPositionX:ue,backgroundPositionY:ue},vT={rotate:mr,rotateX:mr,rotateY:mr,rotateZ:mr,scale:Go,scaleX:Go,scaleY:Go,scaleZ:Go,skew:mr,skewX:mr,skewY:mr,distance:ue,translateX:ue,translateY:ue,translateZ:ue,x:ue,y:ue,z:ue,perspective:ue,transformPerspective:ue,opacity:oi,originX:my,originY:my,originZ:ue},vy={...Fa,transform:Math.round},Tf={...pT,...vT,zIndex:vy,size:ue,fillOpacity:oi,strokeOpacity:oi,numOctaves:vy},yT={...Tf,color:ct,backgroundColor:ct,outlineColor:ct,fill:ct,stroke:ct,borderColor:ct,borderTopColor:ct,borderRightColor:ct,borderBottomColor:ct,borderLeftColor:ct,filter:Cd,WebkitFilter:Cd},Bb=n=>yT[n];function Vb(n,a){let i=Bb(n);return i!==Cd&&(i=pr),i.getAnimatableNone?i.getAnimatableNone(a):void 0}const gT=new Set(["auto","none","0"]);function bT(n,a,i){let o,u=0;for(;u<n.length&&!o;){const d=n[u];typeof d=="string"&&!gT.has(d)&&si(d).values.length&&(o=n[u]),u++}if(o&&i)for(const d of a)n[d]=Vb(i,o)}const kr=n=>180*n/Math.PI,rs=n=>{const a=kr(Math.atan2(n[1],n[0]));return Nd(a)},xT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:rs,rotateZ:rs,skewX:n=>kr(Math.atan(n[1])),skewY:n=>kr(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Nd=n=>((n%=360)<0&&(n+=360),n),yy=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),gy=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),_T={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:yy,scaleY:gy,scale:n=>(yy(n)+gy(n))/2,rotateX:n=>Nd(kr(Math.atan2(n[6],n[5]))),rotateY:n=>Nd(kr(Math.atan2(-n[2],n[0]))),rotateZ:rs,rotate:rs,skewX:n=>kr(Math.atan(n[4])),skewY:n=>kr(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function by(n){return n.includes("scale")?1:0}function Md(n,a){if(!n||n==="none")return by(a);const i=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,u;if(i)o=_T,u=i;else{const m=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=xT,u=m}if(!u)return by(a);const d=o[a],f=u[1].split(",").map(ET);return typeof d=="function"?d(f):f[d]}const ST=(n,a)=>{const{transform:i="none"}=getComputedStyle(n);return Md(i,a)};function ET(n){return parseFloat(n.trim())}const xy=n=>n===Fa||n===ue,TT=new Set(["x","y","z"]),wT=Qa.filter((n=>!TT.has(n)));function AT(n){const a=[];return wT.forEach((i=>{const o=n.getValue(i);o!==void 0&&(a.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))})),a}const La={width:({x:n},{paddingLeft:a="0",paddingRight:i="0"})=>n.max-n.min-parseFloat(a)-parseFloat(i),height:({y:n},{paddingTop:a="0",paddingBottom:i="0"})=>n.max-n.min-parseFloat(a)-parseFloat(i),top:(n,{top:a})=>parseFloat(a),left:(n,{left:a})=>parseFloat(a),bottom:({y:n},{top:a})=>parseFloat(a)+(n.max-n.min),right:({x:n},{left:a})=>parseFloat(a)+(n.max-n.min),x:(n,{transform:a})=>Md(a,"x"),y:(n,{transform:a})=>Md(a,"y")};La.translateX=La.x,La.translateY=La.y;const Yr=new Set;let zd=!1,Rd=!1;function Hb(){if(Rd){const n=Array.from(Yr).filter((o=>o.needsMeasurement)),a=new Set(n.map((o=>o.element))),i=new Map;a.forEach((o=>{const u=AT(o);u.length&&(i.set(o,u),o.render())})),n.forEach((o=>o.measureInitialState())),a.forEach((o=>{o.render();const u=i.get(o);u&&u.forEach((([d,f])=>{o.getValue(d)?.set(f)}))})),n.forEach((o=>o.measureEndState())),n.forEach((o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)}))}Rd=!1,zd=!1,Yr.forEach((n=>n.complete())),Yr.clear()}function kb(){Yr.forEach((n=>{n.readKeyframes(),n.needsMeasurement&&(Rd=!0)}))}function jT(){kb(),Hb()}let wf=class{constructor(a,i,o,u,d,f=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...a],this.onComplete=i,this.name=o,this.motionValue=u,this.element=d,this.isAsync=f}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Yr.add(this),zd||(zd=!0,De.read(kb),De.resolveKeyframes(Hb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:i,element:o,motionValue:u}=this;for(let d=0;d<a.length;d++)if(a[d]===null)if(d===0){const f=u?.get(),m=a[a.length-1];if(f!==void 0)a[0]=f;else if(o&&i){const h=o.readValue(i,m);h!=null&&(a[0]=h)}a[0]===void 0&&(a[0]=m),u&&f===void 0&&u.set(a[0])}else a[d]=a[d-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Yr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Yr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}},Yb=()=>{};const qb=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),Gb=n=>a=>typeof a=="string"&&a.startsWith(n),Af=Gb("--"),CT=Gb("var(--"),jf=n=>!!CT(n)&&NT.test(n.split("/*")[0].trim()),NT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,MT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function zT(n){const a=MT.exec(n);if(!a)return[,];const[,i,o,u]=a;return[`--${i??o}`,u]}function Xb(n,a,i=1){const[o,u]=zT(n);if(!o)return;const d=window.getComputedStyle(a).getPropertyValue(o);if(d){const f=d.trim();return qb(f)?parseFloat(f):f}return jf(u)?Xb(u,a,i+1):u}const Pb=n=>a=>a.test(n),RT={test:n=>n==="auto",parse:n=>n},Kb=[Fa,ue,yn,mr,sT,oT,RT],_y=n=>Kb.find(Pb(n));let Qb=class extends wf{constructor(a,i,o,u,d){super(a,i,o,u,d,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let h=0;h<a.length;h++){let p=a[h];if(typeof p=="string"&&(p=p.trim(),jf(p))){const y=Xb(p,i.current);y!==void 0&&(a[h]=y),h===a.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!xb.has(o)||a.length!==2)return;const[u,d]=a,f=_y(u),m=_y(d);if(f!==m)if(xy(f)&&xy(m))for(let h=0;h<a.length;h++){const p=a[h];typeof p=="string"&&(a[h]=parseFloat(p))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:i}=this,o=[];for(let u=0;u<a.length;u++)aT(a[u])&&o.push(u);o.length&&bT(a,o,i)}measureInitialState(){const{element:a,unresolvedKeyframes:i,name:o}=this;if(!a||!a.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=La[o](a.measureViewportBox(),window.getComputedStyle(a.current)),i[0]=this.measuredOrigin;const u=i[i.length-1];u!==void 0&&a.getValue(o,u).jump(u,!1)}measureEndState(){const{element:a,name:i,unresolvedKeyframes:o}=this;if(!a||!a.current)return;const u=a.getValue(i);u&&u.jump(this.measuredOrigin,!1);const d=o.length-1,f=o[d];o[d]=La[i](a.measureViewportBox(),window.getComputedStyle(a.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach((([m,h])=>{a.getValue(m).set(h)})),this.resolveNoneKeyframes()}};const Sy=(n,a)=>a!=="zIndex"&&(!(typeof n!="number"&&!Array.isArray(n))||!(typeof n!="string"||!pr.test(n)&&n!=="0"||n.startsWith("url(")));function DT(n,a,i,o){const u=n[0];if(u===null)return!1;if(a==="display"||a==="visibility")return!0;const d=n[n.length-1],f=Sy(u,a),m=Sy(d,a);return!(!f||!m)&&((function(h){const p=h[0];if(h.length===1)return!0;for(let y=0;y<h.length;y++)if(h[y]!==p)return!0})(n)||(i==="spring"||bf(i))&&o)}const OT=n=>n!==null;function ys(n,{repeat:a,repeatType:i="loop"},o){const u=n.filter(OT),d=a&&i!=="loop"&&a%2==1?0:u.length-1;return d&&o!==void 0?o:u[d]}let Zb=class{constructor({autoplay:a=!0,delay:i=0,type:o="keyframes",repeat:u=0,repeatDelay:d=0,repeatType:f="loop",...m}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=hn.now(),this.options={autoplay:a,delay:i,type:o,repeat:u,repeatDelay:d,repeatType:f,...m},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||jT(),this._resolved}onKeyframesResolved(a,i){this.resolvedAt=hn.now(),this.hasAttemptedResolve=!0;const{name:o,type:u,velocity:d,delay:f,onComplete:m,onUpdate:h,isGenerator:p}=this.options;if(!p&&!DT(a,o,u,d)){if(!f)return h&&h(ys(a,this.options,i)),m&&m(),void this.resolveFinishedPromise();this.options.duration=0}const y=this.initPlayback(a,i);y!==!1&&(this._resolved={keyframes:a,finalKeyframe:i,...y},this.onPostResolved())}onPostResolved(){}then(a,i){return this.currentFinishedPromise.then(a,i)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise((a=>{this.resolveFinishedPromise=a}))}};const as=2e4;function Cf(n){let a=0,i=n.next(a);for(;!i.done&&a<as;)a+=50,i=n.next(a);return a>=as?1/0:a}const Be=(n,a,i)=>n+(a-n)*i;function Wc(n,a,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?n+6*(a-n)*i:i<.5?a:i<2/3?n+(a-n)*(2/3-i)*6:n}function $T({hue:n,saturation:a,lightness:i,alpha:o}){n/=360,i/=100;let u=0,d=0,f=0;if(a/=100){const m=i<.5?i*(1+a):i+a-i*a,h=2*i-m;u=Wc(h,m,n+1/3),d=Wc(h,m,n),f=Wc(h,m,n-1/3)}else u=d=f=i;return{red:Math.round(255*u),green:Math.round(255*d),blue:Math.round(255*f),alpha:o}}function ls(n,a){return i=>i>0?a:n}const Ic=(n,a,i)=>{const o=n*n,u=i*(a*a-o)+o;return u<0?0:Math.sqrt(u)},LT=[jd,Hr,$a];function Ey(n){const a=(i=n,LT.find((u=>u.test(i))));var i;if(!a)return!1;let o=a.parse(n);return a===$a&&(o=$T(o)),o}const Ty=(n,a)=>{const i=Ey(n),o=Ey(a);if(!i||!o)return ls(n,a);const u={...i};return d=>(u.red=Ic(i.red,o.red,d),u.green=Ic(i.green,o.green,d),u.blue=Ic(i.blue,o.blue,d),u.alpha=Be(i.alpha,o.alpha,d),Hr.transform(u))},UT=(n,a)=>i=>a(n(i)),bi=(...n)=>n.reduce(UT),Dd=new Set(["none","hidden"]);function BT(n,a){return Dd.has(n)?i=>i<=0?n:a:i=>i>=1?a:n}function VT(n,a){return i=>Be(n,a,i)}function Nf(n){return typeof n=="number"?VT:typeof n=="string"?jf(n)?ls:ct.test(n)?Ty:kT:Array.isArray(n)?Fb:typeof n=="object"?ct.test(n)?Ty:HT:ls}function Fb(n,a){const i=[...n],o=i.length,u=n.map(((d,f)=>Nf(d)(d,a[f])));return d=>{for(let f=0;f<o;f++)i[f]=u[f](d);return i}}function HT(n,a){const i={...n,...a},o={};for(const u in i)n[u]!==void 0&&a[u]!==void 0&&(o[u]=Nf(n[u])(n[u],a[u]));return u=>{for(const d in o)i[d]=o[d](u);return i}}const kT=(n,a)=>{const i=pr.createTransformer(a),o=si(n),u=si(a);return o.indexes.var.length===u.indexes.var.length&&o.indexes.color.length===u.indexes.color.length&&o.indexes.number.length>=u.indexes.number.length?Dd.has(n)&&!u.values.length||Dd.has(a)&&!o.values.length?BT(n,a):bi(Fb((function(d,f){const m=[],h={color:0,var:0,number:0};for(let p=0;p<f.values.length;p++){const y=f.types[p],b=d.indexes[y][h[y]],_=d.values[b]??0;m[p]=_,h[y]++}return m})(o,u),u.values),i):ls(n,a)};function Jb(n,a,i){return typeof n=="number"&&typeof a=="number"&&typeof i=="number"?Be(n,a,i):Nf(n)(n,a)}function YT(n,a=100,i){const o=i({...n,keyframes:[0,a]}),u=Math.min(Cf(o),as);return{type:"keyframes",ease:d=>o.next(u*d).value/a,duration:vn(u)}}function Wb(n,a,i){const o=Math.max(a-5,0);return _b(i-n(o),a-o)}const Ge={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},wy=.001;function qT({duration:n=Ge.duration,bounce:a=Ge.bounce,velocity:i=Ge.velocity,mass:o=Ge.mass}){let u,d,f=1-a;f=Bn(Ge.minDamping,Ge.maxDamping,f),n=Bn(Ge.minDuration,Ge.maxDuration,vn(n)),f<1?(u=h=>{const p=h*f,y=p*n,b=p-i,_=Od(h,f),j=Math.exp(-y);return wy-b/_*j},d=h=>{const p=h*f*n,y=p*i+i,b=Math.pow(f,2)*Math.pow(h,2)*n,_=Math.exp(-p),j=Od(Math.pow(h,2),f);return(-u(h)+wy>0?-1:1)*((y-b)*_)/j}):(u=h=>Math.exp(-h*n)*((h-i)*n+1)-.001,d=h=>Math.exp(-h*n)*(n*n*(i-h)));const m=(function(h,p,y){let b=y;for(let _=1;_<GT;_++)b-=h(b)/p(b);return b})(u,d,5/n);if(n=pn(n),isNaN(m))return{stiffness:Ge.stiffness,damping:Ge.damping,duration:n};{const h=Math.pow(m,2)*o;return{stiffness:h,damping:2*f*Math.sqrt(o*h),duration:n}}}const GT=12;function Od(n,a){return n*Math.sqrt(1-a*a)}const XT=["duration","bounce"],PT=["stiffness","damping","mass"];function Ay(n,a){return a.some((i=>n[i]!==void 0))}function is(n=Ge.visualDuration,a=Ge.bounce){const i=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:a}:n;let{restSpeed:o,restDelta:u}=i;const d=i.keyframes[0],f=i.keyframes[i.keyframes.length-1],m={done:!1,value:d},{stiffness:h,damping:p,mass:y,duration:b,velocity:_,isResolvedFromDuration:j}=(function(V){let J={velocity:Ge.velocity,stiffness:Ge.stiffness,damping:Ge.damping,mass:Ge.mass,isResolvedFromDuration:!1,...V};if(!Ay(V,PT)&&Ay(V,XT))if(V.visualDuration){const Q=V.visualDuration,E=2*Math.PI/(1.2*Q),K=E*E,le=2*Bn(.05,1,1-(V.bounce||0))*Math.sqrt(K);J={...J,mass:Ge.mass,stiffness:K,damping:le}}else{const Q=qT(V);J={...J,...Q,mass:Ge.mass},J.isResolvedFromDuration=!0}return J})({...i,velocity:-vn(i.velocity||0)}),N=_||0,w=p/(2*Math.sqrt(h*y)),A=f-d,D=vn(Math.sqrt(h/y)),k=Math.abs(A)<5;let q;if(o||(o=k?Ge.restSpeed.granular:Ge.restSpeed.default),u||(u=k?Ge.restDelta.granular:Ge.restDelta.default),w<1){const V=Od(D,w);q=J=>{const Q=Math.exp(-w*D*J);return f-Q*((N+w*D*A)/V*Math.sin(V*J)+A*Math.cos(V*J))}}else if(w===1)q=V=>f-Math.exp(-D*V)*(A+(N+D*A)*V);else{const V=D*Math.sqrt(w*w-1);q=J=>{const Q=Math.exp(-w*D*J),E=Math.min(V*J,300);return f-Q*((N+w*D*A)*Math.sinh(E)+V*A*Math.cosh(E))/V}}const Z={calculatedDuration:j&&b||null,next:V=>{const J=q(V);if(j)m.done=V>=b;else{let Q=0;w<1&&(Q=V===0?pn(N):Wb(q,V,J));const E=Math.abs(Q)<=o,K=Math.abs(f-J)<=u;m.done=E&&K}return m.value=m.done?f:J,m},toString:()=>{const V=Math.min(Cf(Z),as),J=Tb((Q=>Z.next(V*Q).value),V,30);return V+"ms "+J},toTransition:()=>{}};return Z}is.applyToOptions=n=>{const a=YT(n,100,is);return n.ease=ii()?a.ease:"easeOut",n.duration=pn(a.duration),n.type="keyframes",n};function jy({keyframes:n,velocity:a=0,power:i=.8,timeConstant:o=325,bounceDamping:u=10,bounceStiffness:d=500,modifyTarget:f,min:m,max:h,restDelta:p=.5,restSpeed:y}){const b=n[0],_={done:!1,value:b},j=Q=>m===void 0?h:h===void 0||Math.abs(m-Q)<Math.abs(h-Q)?m:h;let N=i*a;const w=b+N,A=f===void 0?w:f(w);A!==w&&(N=A-b);const D=Q=>-N*Math.exp(-Q/o),k=Q=>A+D(Q),q=Q=>{const E=D(Q),K=k(Q);_.done=Math.abs(E)<=p,_.value=_.done?A:K};let Z,V;const J=Q=>{var E;E=_.value,(m!==void 0&&E<m||h!==void 0&&E>h)&&(Z=Q,V=is({keyframes:[_.value,j(_.value)],velocity:Wb(k,Q,_.value),damping:u,stiffness:d,restDelta:p,restSpeed:y}))};return J(0),{calculatedDuration:null,next:Q=>{let E=!1;return V||Z!==void 0||(E=!0,q(Q),J(Q)),Z!==void 0&&Q>=Z?V.next(Q-Z):(!E&&q(Q),_)}}}const KT=Za(.42,0,1,1),QT=Za(0,0,.58,1),Ib=Za(.42,0,.58,1),ZT=n=>Array.isArray(n)&&typeof n[0]!="number",FT={linear:Wt,easeIn:KT,easeInOut:Ib,easeOut:QT,circIn:_f,circInOut:Db,circOut:Rb,backIn:xf,backInOut:Mb,backOut:Nb,anticipate:zb},Cy=n=>{if(gf(n)){Yb(n.length===4);const[a,i,o,u]=n;return Za(a,i,o,u)}return typeof n=="string"?FT[n]:n},ui=(n,a,i)=>{const o=a-n;return o===0?1:(i-n)/o};function JT(n,a,{clamp:i=!0,ease:o,mixer:u}={}){const d=n.length;if(Yb(d===a.length),d===1)return()=>a[0];if(d===2&&a[0]===a[1])return()=>a[1];const f=n[0]===n[1];n[0]>n[d-1]&&(n=[...n].reverse(),a=[...a].reverse());const m=(function(y,b,_){const j=[],N=_||Jb,w=y.length-1;for(let A=0;A<w;A++){let D=N(y[A],y[A+1]);if(b){const k=Array.isArray(b)?b[A]||Wt:b;D=bi(k,D)}j.push(D)}return j})(a,o,u),h=m.length,p=y=>{if(f&&y<n[0])return a[0];let b=0;if(h>1)for(;b<n.length-2&&!(y<n[b+1]);b++);const _=ui(n[b],n[b+1],y);return m[b](_)};return i?y=>p(Bn(n[0],n[d-1],y)):p}function WT(n,a){const i=n[n.length-1];for(let o=1;o<=a;o++){const u=ui(0,a,o);n.push(Be(i,1,u))}}function IT(n){const a=[0];return WT(a,n.length-1),a}function e2(n,a){return n.map((i=>i*a))}function t2(n,a){return n.map((()=>a||Ib)).splice(0,n.length-1)}function os({duration:n=300,keyframes:a,times:i,ease:o="easeInOut"}){const u=ZT(o)?o.map(Cy):Cy(o),d={done:!1,value:a[0]},f=e2(i&&i.length===a.length?i:IT(a),n),m=JT(f,a,{ease:Array.isArray(u)?u:t2(a,u)});return{calculatedDuration:n,next:h=>(d.value=m(h),d.done=h>=n,d)}}const n2=n=>{const a=({timestamp:i})=>n(i);return{start:()=>De.update(a,!0),stop:()=>hr(a),now:()=>st.isProcessing?st.timestamp:hn.now()}},r2={decay:jy,inertia:jy,tween:os,keyframes:os,spring:is},a2=n=>n/100;let $d=class extends Zb{constructor(a){super(a),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:m}=this.options;m&&m()};const{name:i,motionValue:o,element:u,keyframes:d}=this.options,f=u?.KeyframeResolver||wf;this.resolver=new f(d,((m,h)=>this.onKeyframesResolved(m,h)),i,o,u),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(a){const{type:i="keyframes",repeat:o=0,repeatDelay:u=0,repeatType:d,velocity:f=0}=this.options,m=bf(i)?i:r2[i]||os;let h,p;m!==os&&typeof a[0]!="number"&&(h=bi(a2,Jb(a[0],a[1])),a=[0,100]);const y=m({...this.options,keyframes:a});d==="mirror"&&(p=m({...this.options,keyframes:[...a].reverse(),velocity:-f})),y.calculatedDuration===null&&(y.calculatedDuration=Cf(y));const{calculatedDuration:b}=y,_=b+u;return{generator:y,mirroredGenerator:p,mapPercentToKeyframes:h,calculatedDuration:b,resolvedDuration:_,totalDuration:_*(o+1)-u}}onPostResolved(){const{autoplay:a=!0}=this.options;this.play(),this.pendingPlayState!=="paused"&&a?this.state=this.pendingPlayState:this.pause()}tick(a,i=!1){const{resolved:o}=this;if(!o){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:u,generator:d,mirroredGenerator:f,mapPercentToKeyframes:m,keyframes:h,calculatedDuration:p,totalDuration:y,resolvedDuration:b}=o;if(this.startTime===null)return d.next(0);const{delay:_,repeat:j,repeatType:N,repeatDelay:w,onUpdate:A}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-y/this.speed,this.startTime)),i?this.currentTime=a:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(a-this.startTime)*this.speed;const D=this.currentTime-_*(this.speed>=0?1:-1),k=this.speed>=0?D<0:D>y;this.currentTime=Math.max(D,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=y);let q=this.currentTime,Z=d;if(j){const E=Math.min(this.currentTime,y)/b;let K=Math.floor(E),le=E%1;!le&&E>=1&&(le=1),le===1&&K--,K=Math.min(K,j+1),K%2&&(N==="reverse"?(le=1-le,w&&(le-=w/b)):N==="mirror"&&(Z=f)),q=Bn(0,1,le)*b}const V=k?{done:!1,value:h[0]}:Z.next(q);m&&(V.value=m(V.value));let{done:J}=V;k||p===null||(J=this.speed>=0?this.currentTime>=y:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&J);return Q&&u!==void 0&&(V.value=ys(h,this.options,u)),A&&A(V.value),Q&&this.finish(),V}get duration(){const{resolved:a}=this;return a?vn(a.calculatedDuration):0}get time(){return vn(this.currentTime)}set time(a){a=pn(a),this.currentTime=a,this.holdTime!==null||this.speed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.speed)}get speed(){return this.playbackSpeed}set speed(a){const i=this.playbackSpeed!==a;this.playbackSpeed=a,i&&(this.time=vn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:a=n2,onPlay:i,startTime:o}=this.options;this.driver||(this.driver=a((d=>this.tick(d)))),i&&i();const u=this.driver.now();this.holdTime!==null?this.startTime=u-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=u):this.startTime=o??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){this._resolved?(this.state="paused",this.holdTime=this.currentTime??0):this.pendingPlayState="paused"}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:a}=this.options;a&&a()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}get finished(){return this.currentFinishedPromise}};const l2=new Set(["opacity","clipPath","filter","transform"]),i2=yf((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),Ny={anticipate:zb,backInOut:Mb,circInOut:Db};let My=class extends Zb{constructor(a){super(a);const{name:i,motionValue:o,element:u,keyframes:d}=this.options;this.resolver=new Qb(d,((f,m)=>this.onKeyframesResolved(f,m)),i,o,u),this.resolver.scheduleResolve()}initPlayback(a,i){let{duration:o=300,times:u,ease:d,type:f,motionValue:m,name:h,startTime:p}=this.options;if(!m.owner||!m.owner.current)return!1;var y;if(typeof d=="string"&&ii()&&d in Ny&&(d=Ny[d]),y=this.options,bf(y.type)||y.type==="spring"||!Ab(y.ease)){const{onComplete:_,onUpdate:j,motionValue:N,element:w,...A}=this.options,D=(function(k,q){const Z=new $d({...q,keyframes:k,repeat:0,delay:0,isGenerator:!0});let V={done:!1,value:k[0]};const J=[];let Q=0;for(;!V.done&&Q<2e4;)V=Z.sample(Q),J.push(V.value),Q+=10;return{times:void 0,keyframes:J,duration:Q-10,ease:"linear"}})(a,A);(a=D.keyframes).length===1&&(a[1]=a[0]),o=D.duration,u=D.times,d=D.ease,f="keyframes"}const b=rT(m.owner.current,h,a,{...this.options,duration:o,times:u,ease:d});return b.startTime=p??this.calcStartTime(),this.pendingTimeline?(dy(b,this.pendingTimeline),this.pendingTimeline=void 0):b.onfinish=()=>{const{onComplete:_}=this.options;m.set(ys(a,this.options,i)),_&&_(),this.cancel(),this.resolveFinishedPromise()},{animation:b,duration:o,times:u,type:f,ease:d,keyframes:a}}get duration(){const{resolved:a}=this;if(!a)return 0;const{duration:i}=a;return vn(i)}get time(){const{resolved:a}=this;if(!a)return 0;const{animation:i}=a;return vn(i.currentTime||0)}set time(a){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.currentTime=pn(a)}get speed(){const{resolved:a}=this;if(!a)return 1;const{animation:i}=a;return i.playbackRate}get finished(){return this.resolved.animation.finished}set speed(a){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.playbackRate=a}get state(){const{resolved:a}=this;if(!a)return"idle";const{animation:i}=a;return i.playState}get startTime(){const{resolved:a}=this;if(!a)return null;const{animation:i}=a;return i.startTime}attachTimeline(a){if(this._resolved){const{resolved:i}=this;if(!i)return Wt;const{animation:o}=i;dy(o,a)}else this.pendingTimeline=a;return Wt}play(){if(this.isStopped)return;const{resolved:a}=this;if(!a)return;const{animation:i}=a;i.playState==="finished"&&this.updateFinishedPromise(),i.play()}pause(){const{resolved:a}=this;if(!a)return;const{animation:i}=a;i.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:a}=this;if(!a)return;const{animation:i,keyframes:o,duration:u,type:d,ease:f,times:m}=a;if(i.playState==="idle"||i.playState==="finished")return;if(this.time){const{motionValue:p,onUpdate:y,onComplete:b,element:_,...j}=this.options,N=new $d({...j,keyframes:o,duration:u,type:d,ease:f,times:m,isGenerator:!0}),w=pn(this.time);p.setWithVelocity(N.sample(w-10).value,N.sample(w).value,10)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:a}=this;a&&a.animation.finish()}cancel(){const{resolved:a}=this;a&&a.animation.cancel()}static supports(a){const{motionValue:i,name:o,repeatDelay:u,repeatType:d,damping:f,type:m}=a;if(!(i&&i.owner&&i.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:p}=i.owner.getProps();return i2()&&o&&l2.has(o)&&(o!=="transform"||!p)&&!h&&!u&&d!=="mirror"&&f!==0&&m!=="inertia"}};const o2={type:"spring",stiffness:500,damping:25,restSpeed:10},s2={type:"keyframes",duration:.8},u2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},c2=(n,{keyframes:a})=>a.length>2?s2:Kr.has(n)?n.startsWith("scale")?{type:"spring",stiffness:550,damping:a[1]===0?2*Math.sqrt(550):30,restSpeed:10}:o2:u2;function d2({when:n,delay:a,delayChildren:i,staggerChildren:o,staggerDirection:u,repeat:d,repeatType:f,repeatDelay:m,from:h,elapsed:p,...y}){return!!Object.keys(y).length}const Mf=(n,a,i,o={},u,d)=>f=>{const m=ff(o,n)||{},h=m.delay||o.delay||0;let{elapsed:p=0}=o;p-=pn(h);let y={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:a.getVelocity(),...m,delay:-p,onUpdate:_=>{a.set(_),m.onUpdate&&m.onUpdate(_)},onComplete:()=>{f(),m.onComplete&&m.onComplete()},name:n,motionValue:a,element:d?void 0:u};d2(m)||(y={...y,...c2(n,y)}),y.duration&&(y.duration=pn(y.duration)),y.repeatDelay&&(y.repeatDelay=pn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(b=!0)),y.allowFlatten=!m.type&&!m.ease,b&&!d&&a.get()!==void 0){const _=ys(y.keyframes,m);if(_!==void 0)return De.update((()=>{y.onUpdate(_),y.onComplete()})),new eT([])}return!d&&My.supports(y)?new My(y):new $d(y)};function f2({protectedKeys:n,needsAnimating:a},i){const o=n.hasOwnProperty(i)&&a[i]!==!0;return a[i]=!1,o}function ex(n,a,{delay:i=0,transitionOverride:o,type:u}={}){let{transition:d=n.getDefaultTransition(),transitionEnd:f,...m}=a;o&&(d=o);const h=[],p=u&&n.animationState&&n.animationState.getState()[u];for(const y in m){const b=n.getValue(y,n.latestValues[y]??null),_=m[y];if(_===void 0||p&&f2(p,y))continue;const j={delay:i,...ff(d||{},y)};let N=!1;if(window.MotionHandoffAnimation){const A=Eb(n);if(A){const D=window.MotionHandoffAnimation(A,y,De);D!==null&&(j.startTime=D,N=!0)}}wd(n,y),b.start(Mf(y,b,_,n.shouldReduceMotion&&xb.has(y)?{type:!1}:j,n,N));const w=b.animation;w&&h.push(w)}return f&&Promise.all(h).then((()=>{De.update((()=>{f&&ZE(n,f)}))})),h}function Ld(n,a,i={}){const o=ai(n,a,i.type==="exit"?n.presenceContext?.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(u=i.transitionOverride);const d=o?()=>Promise.all(ex(n,o,i)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:y,staggerDirection:b}=u;return(function(_,j,N=0,w=0,A=1,D){const k=[],q=(_.variantChildren.size-1)*w,Z=A===1?(V=0)=>V*w:(V=0)=>q-V*w;return Array.from(_.variantChildren).sort(m2).forEach(((V,J)=>{V.notify("AnimationStart",j),k.push(Ld(V,j,{...D,delay:N+Z(J)}).then((()=>V.notify("AnimationComplete",j))))})),Promise.all(k)})(n,a,p+h,y,b,i)}:()=>Promise.resolve(),{when:m}=u;if(m){const[h,p]=m==="beforeChildren"?[d,f]:[f,d];return h().then((()=>p()))}return Promise.all([d(),f(i.delay)])}function m2(n,a){return n.sortNodePosition(a)}function h2(n,a,i={}){let o;if(n.notify("AnimationStart",a),Array.isArray(a)){const u=a.map((d=>Ld(n,d,i)));o=Promise.all(u)}else if(typeof a=="string")o=Ld(n,a,i);else{const u=typeof a=="function"?ai(n,a,i.custom):a;o=Promise.all(ex(n,u,i))}return o.then((()=>{n.notify("AnimationComplete",a)}))}function tx(n,a){if(!Array.isArray(a))return!1;const i=a.length;if(i!==n.length)return!1;for(let o=0;o<i;o++)if(a[o]!==n[o])return!1;return!0}function ci(n){return typeof n=="string"||Array.isArray(n)}const zf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Rf=["initial",...zf],p2=Rf.length;function nx(n){if(!n)return;if(!n.isControllingVariants){const i=n.parent&&nx(n.parent)||{};return n.props.initial!==void 0&&(i.initial=n.props.initial),i}const a={};for(let i=0;i<p2;i++){const o=Rf[i],u=n.props[o];(ci(u)||u===!1)&&(a[o]=u)}return a}const v2=[...zf].reverse(),y2=zf.length;function g2(n){let a=(function(f){return m=>Promise.all(m.map((({animation:h,options:p})=>h2(f,h,p))))})(n),i=zy(),o=!0;const u=f=>(m,h)=>{const p=ai(n,h,f==="exit"?n.presenceContext?.custom:void 0);if(p){const{transition:y,transitionEnd:b,..._}=p;m={...m,..._,...b}}return m};function d(f){const{props:m}=n,h=nx(n.parent)||{},p=[],y=new Set;let b={},_=1/0;for(let N=0;N<y2;N++){const w=v2[N],A=i[w],D=m[w]!==void 0?m[w]:h[w],k=ci(D),q=w===f?A.isActive:null;q===!1&&(_=N);let Z=D===h[w]&&D!==m[w]&&k;if(Z&&o&&n.manuallyAnimateOnMount&&(Z=!1),A.protectedKeys={...b},!A.isActive&&q===null||!D&&!A.prevProp||vs(D)||typeof D=="boolean")continue;const V=b2(A.prevProp,D);let J=V||w===f&&A.isActive&&!Z&&k||N>_&&k,Q=!1;const E=Array.isArray(D)?D:[D];let K=E.reduce(u(w),{});q===!1&&(K={});const{prevResolvedValues:le={}}=A,F={...le,...K},oe=z=>{J=!0,y.has(z)&&(Q=!0,y.delete(z)),A.needsAnimating[z]=!0;const W=n.getValue(z);W&&(W.liveStyle=!1)};for(const z in F){const W=K[z],re=le[z];if(b.hasOwnProperty(z))continue;let R=!1;R=Td(W)&&Td(re)?!tx(W,re):W!==re,R?W!=null?oe(z):y.add(z):W!==void 0&&y.has(z)?oe(z):A.protectedKeys[z]=!0}A.prevProp=D,A.prevResolvedValues=K,A.isActive&&(b={...b,...K}),o&&n.blockInitialAnimation&&(J=!1),J&&(!(Z&&V)||Q)&&p.push(...E.map((z=>({animation:z,options:{type:w}}))))}if(y.size){const N={};if(typeof m.initial!="boolean"){const w=ai(n,Array.isArray(m.initial)?m.initial[0]:m.initial);w&&w.transition&&(N.transition=w.transition)}y.forEach((w=>{const A=n.getBaseTarget(w),D=n.getValue(w);D&&(D.liveStyle=!0),N[w]=A??null})),p.push({animation:N})}let j=!!p.length;return!o||m.initial!==!1&&m.initial!==m.animate||n.manuallyAnimateOnMount||(j=!1),o=!1,j?a(p):Promise.resolve()}return{animateChanges:d,setActive:function(f,m){if(i[f].isActive===m)return Promise.resolve();n.variantChildren?.forEach((p=>p.animationState?.setActive(f,m))),i[f].isActive=m;const h=d(f);for(const p in i)i[p].protectedKeys={};return h},setAnimateFunction:function(f){a=f(n)},getState:()=>i,reset:()=>{i=zy(),o=!0}}}function b2(n,a){return typeof a=="string"?a!==n:!!Array.isArray(a)&&!tx(a,n)}function Ur(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zy(){return{animate:Ur(!0),whileInView:Ur(),whileHover:Ur(),whileTap:Ur(),whileDrag:Ur(),whileFocus:Ur(),exit:Ur()}}let vr=class{constructor(a){this.isMounted=!1,this.node=a}update(){}},x2=class extends vr{constructor(a){super(a),a.animationState||(a.animationState=g2(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();vs(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:i}=this.node.prevProps||{};a!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},_2=0,S2=class extends vr{constructor(){super(...arguments),this.id=_2++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===o)return;const u=this.node.animationState.setActive("exit",!a);i&&!a&&u.then((()=>{i(this.id)}))}mount(){const{register:a,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),a&&(this.unmount=a(this.id))}unmount(){}};const E2={animation:{Feature:x2},exit:{Feature:S2}},an={x:!1,y:!1};function rx(){return an.x||an.y}function T2(n){return n==="x"||n==="y"?an[n]?null:(an[n]=!0,()=>{an[n]=!1}):an.x||an.y?null:(an.x=an.y=!0,()=>{an.x=an.y=!1})}function di(n,a,i,o={passive:!0}){return n.addEventListener(a,i,o),()=>n.removeEventListener(a,i)}const Df=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function xi(n){return{point:{x:n.pageX,y:n.pageY}}}const w2=n=>a=>Df(a)&&n(a,xi(a));function Il(n,a,i,o){return di(n,a,w2(i),o)}function ax({top:n,left:a,right:i,bottom:o}){return{x:{min:a,max:i},y:{min:n,max:o}}}function A2({x:n,y:a}){return{top:a.min,right:n.max,bottom:a.max,left:n.min}}function j2(n,a){if(!a)return n;const i=a({x:n.left,y:n.top}),o=a({x:n.right,y:n.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function pt(n){return n.max-n.min}function C2(n,a,i){return Math.abs(n-a)<=i}function Ry(n,a,i,o=.5){n.origin=o,n.originPoint=Be(a.min,a.max,n.origin),n.scale=pt(i)/pt(a),n.translate=Be(i.min,i.max,n.origin)-n.originPoint,(n.scale>=.9999&&n.scale<=1.0001||isNaN(n.scale))&&(n.scale=1),(n.translate>=-.01&&n.translate<=.01||isNaN(n.translate))&&(n.translate=0)}function ei(n,a,i,o){Ry(n.x,a.x,i.x,o?o.originX:void 0),Ry(n.y,a.y,i.y,o?o.originY:void 0)}function Dy(n,a,i){n.min=i.min+a.min,n.max=n.min+pt(a)}function N2(n,a,i){Dy(n.x,a.x,i.x),Dy(n.y,a.y,i.y)}function Oy(n,a,i){n.min=a.min-i.min,n.max=n.min+pt(a)}function ti(n,a,i){Oy(n.x,a.x,i.x),Oy(n.y,a.y,i.y)}const Ua=()=>({x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}),Qe=()=>({x:{min:0,max:0},y:{min:0,max:0}});function Qt(n){return[n("x"),n("y")]}function ed(n){return n===void 0||n===1}function Ud({scale:n,scaleX:a,scaleY:i}){return!ed(n)||!ed(a)||!ed(i)}function Vr(n){return Ud(n)||lx(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function lx(n){return $y(n.x)||$y(n.y)}function $y(n){return n&&n!=="0%"}function ss(n,a,i){return i+a*(n-i)}function Ly(n,a,i,o,u){return u!==void 0&&(n=ss(n,u,o)),ss(n,i,o)+a}function Bd(n,a=0,i=1,o,u){n.min=Ly(n.min,a,i,o,u),n.max=Ly(n.max,a,i,o,u)}function ix(n,{x:a,y:i}){Bd(n.x,a.translate,a.scale,a.originPoint),Bd(n.y,i.translate,i.scale,i.originPoint)}const Uy=.999999999999,By=1.0000000000001;function M2(n,a,i,o=!1){const u=i.length;if(!u)return;let d,f;a.x=a.y=1;for(let m=0;m<u;m++){d=i[m],f=d.projectionDelta;const{visualElement:h}=d.options;h&&h.props.style&&h.props.style.display==="contents"||(o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Va(n,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(a.x*=f.x.scale,a.y*=f.y.scale,ix(n,f)),o&&Vr(d.latestValues)&&Va(n,d.latestValues))}a.x<By&&a.x>Uy&&(a.x=1),a.y<By&&a.y>Uy&&(a.y=1)}function Ba(n,a){n.min=n.min+a,n.max=n.max+a}function Vy(n,a,i,o,u=.5){Bd(n,a,i,Be(n.min,n.max,u),o)}function Va(n,a){Vy(n.x,a.x,a.scaleX,a.scale,a.originX),Vy(n.y,a.y,a.scaleY,a.scale,a.originY)}function ox(n,a){return ax(j2(n.getBoundingClientRect(),a))}function z2(n,a,i){const o=ox(n,i),{scroll:u}=a;return u&&(Ba(o.x,u.offset.x),Ba(o.y,u.offset.y)),o}const sx=({current:n})=>n?n.ownerDocument.defaultView:null;function Ha(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const Hy=(n,a)=>Math.abs(n-a);function R2(n,a){const i=Hy(n.x,a.x),o=Hy(n.y,a.y);return Math.sqrt(i**2+o**2)}let ux=class{constructor(a,i,{transformPagePoint:o,contextWindow:u,dragSnapToOrigin:d=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const y=nd(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,_=R2(y.offset,{x:0,y:0})>=3;if(!b&&!_)return;const{point:j}=y,{timestamp:N}=st;this.history.push({...j,timestamp:N});const{onStart:w,onMove:A}=this.handlers;b||(w&&w(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,y)},this.handlePointerMove=(y,b)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=td(b,this.transformPagePoint),De.update(this.updatePoint,!0)},this.handlePointerUp=(y,b)=>{this.end();const{onEnd:_,onSessionEnd:j,resumeAnimation:N}=this.handlers;if(this.dragSnapToOrigin&&N&&N(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const w=nd(y.type==="pointercancel"?this.lastMoveEventInfo:td(b,this.transformPagePoint),this.history);this.startEvent&&_&&_(y,w),j&&j(y,w)},!Df(a))return;this.dragSnapToOrigin=d,this.handlers=i,this.transformPagePoint=o,this.contextWindow=u||window;const f=td(xi(a),this.transformPagePoint),{point:m}=f,{timestamp:h}=st;this.history=[{...m,timestamp:h}];const{onSessionStart:p}=i;p&&p(a,nd(f,this.history)),this.removeListeners=bi(Il(this.contextWindow,"pointermove",this.handlePointerMove),Il(this.contextWindow,"pointerup",this.handlePointerUp),Il(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),hr(this.updatePoint)}};function td(n,a){return a?{point:a(n.point)}:n}function ky(n,a){return{x:n.x-a.x,y:n.y-a.y}}function nd({point:n},a){return{point:n,delta:ky(n,cx(a)),offset:ky(n,D2(a)),velocity:O2(a,.1)}}function D2(n){return n[0]}function cx(n){return n[n.length-1]}function O2(n,a){if(n.length<2)return{x:0,y:0};let i=n.length-1,o=null;const u=cx(n);for(;i>=0&&(o=n[i],!(u.timestamp-o.timestamp>pn(a)));)i--;if(!o)return{x:0,y:0};const d=vn(u.timestamp-o.timestamp);if(d===0)return{x:0,y:0};const f={x:(u.x-o.x)/d,y:(u.y-o.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function $2(n,{min:a,max:i},o){return a!==void 0&&n<a?n=o?Be(a,n,o.min):Math.max(n,a):i!==void 0&&n>i&&(n=o?Be(i,n,o.max):Math.min(n,i)),n}function Yy(n,a,i){return{min:a!==void 0?n.min+a:void 0,max:i!==void 0?n.max+i-(n.max-n.min):void 0}}function L2(n,{top:a,left:i,bottom:o,right:u}){return{x:Yy(n.x,i,u),y:Yy(n.y,a,o)}}function qy(n,a){let i=a.min-n.min,o=a.max-n.max;return a.max-a.min<n.max-n.min&&([i,o]=[o,i]),{min:i,max:o}}function U2(n,a){return{x:qy(n.x,a.x),y:qy(n.y,a.y)}}function B2(n,a){let i=.5;const o=pt(n),u=pt(a);return u>o?i=ui(a.min,a.max-o,n.min):o>u&&(i=ui(n.min,n.max-u,a.min)),Bn(0,1,i)}function V2(n,a){const i={};return a.min!==void 0&&(i.min=a.min-n.min),a.max!==void 0&&(i.max=a.max-n.min),i}const dx=.35;function H2(n=.35){return n===!1?n=0:n===!0&&(n=dx),{x:Gy(n,"left","right"),y:Gy(n,"top","bottom")}}function Gy(n,a,i){return{min:Xy(n,a),max:Xy(n,i)}}function Xy(n,a){return typeof n=="number"?n:n[a]||0}const k2=new WeakMap;let Y2=class{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.visualElement=a}start(a,{snapToCursor:i=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const{dragSnapToOrigin:u}=this.getProps();this.panSession=new ux(a,{onSessionStart:d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(xi(d).point)},onStart:(d,f)=>{const{drag:m,dragPropagation:h,onDragStart:p}=this.getProps();if(m&&!h&&(this.openDragLock&&this.openDragLock(),this.openDragLock=T2(m),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Qt((b=>{let _=this.getAxisMotionValue(b).get()||0;if(yn.test(_)){const{projection:j}=this.visualElement;if(j&&j.layout){const N=j.layout.layoutBox[b];N&&(_=pt(N)*(parseFloat(_)/100))}}this.originPoint[b]=_})),p&&De.postRender((()=>p(d,f))),wd(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},onMove:(d,f)=>{const{dragPropagation:m,dragDirectionLock:h,onDirectionLock:p,onDrag:y}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:b}=f;if(h&&this.currentDirection===null)return this.currentDirection=(function(_,j=10){let N=null;return Math.abs(_.y)>j?N="y":Math.abs(_.x)>j&&(N="x"),N})(b),void(this.currentDirection!==null&&p&&p(this.currentDirection));this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),y&&y(d,f)},onSessionEnd:(d,f)=>this.stop(d,f),resumeAnimation:()=>Qt((d=>this.getAnimationState(d)==="paused"&&this.getAxisMotionValue(d).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:sx(this.visualElement)})}stop(a,i){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:u}=i;this.startAnimation(u);const{onDragEnd:d}=this.getProps();d&&De.postRender((()=>d(a,i)))}cancel(){this.isDragging=!1;const{projection:a,animationState:i}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(a,i,o){const{drag:u}=this.getProps();if(!o||!Xo(a,u,this.currentDirection))return;const d=this.getAxisMotionValue(a);let f=this.originPoint[a]+o[a];this.constraints&&this.constraints[a]&&(f=$2(f,this.constraints[a],this.elastic[a])),d.set(f)}resolveConstraints(){const{dragConstraints:a,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;a&&Ha(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!a||!o)&&L2(o.layoutBox,a),this.elastic=H2(i),u!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Qt((d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=V2(o.layoutBox[d],this.constraints[d]))}))}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:i}=this.getProps();if(!a||!Ha(a))return!1;const o=a.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const d=z2(o,u.root,this.visualElement.getTransformPagePoint());let f=U2(u.layout.layoutBox,d);if(i){const m=i(A2(f));this.hasMutatedConstraints=!!m,m&&(f=ax(m))}return f}startAnimation(a){const{drag:i,dragMomentum:o,dragElastic:u,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:m}=this.getProps(),h=this.constraints||{},p=Qt((y=>{if(!Xo(y,i,this.currentDirection))return;let b=h&&h[y]||{};f&&(b={min:0,max:0});const _=u?200:1e6,j=u?40:1e7,N={type:"inertia",velocity:o?a[y]:0,bounceStiffness:_,bounceDamping:j,timeConstant:750,restDelta:1,restSpeed:10,...d,...b};return this.startAxisValueAnimation(y,N)}));return Promise.all(p).then(m)}startAxisValueAnimation(a,i){const o=this.getAxisMotionValue(a);return wd(this.visualElement,a),o.start(Mf(a,o,0,i,this.visualElement,!1))}stopAnimation(){Qt((a=>this.getAxisMotionValue(a).stop()))}pauseAnimation(){Qt((a=>this.getAxisMotionValue(a).animation?.pause()))}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const i=`_drag${a.toUpperCase()}`,o=this.visualElement.getProps();return o[i]||this.visualElement.getValue(a,(o.initial?o.initial[a]:void 0)||0)}snapToCursor(a){Qt((i=>{const{drag:o}=this.getProps();if(!Xo(i,o,this.currentDirection))return;const{projection:u}=this.visualElement,d=this.getAxisMotionValue(i);if(u&&u.layout){const{min:f,max:m}=u.layout.layoutBox[i];d.set(a[i]-Be(f,m,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!Ha(i)||!o||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Qt((f=>{const m=this.getAxisMotionValue(f);if(m&&this.constraints!==!1){const h=m.get();u[f]=B2({min:h,max:h},this.constraints[f])}}));const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Qt((f=>{if(!Xo(f,a,null))return;const m=this.getAxisMotionValue(f),{min:h,max:p}=this.constraints[f];m.set(Be(h,p,u[f]))}))}addListeners(){if(!this.visualElement.current)return;k2.set(this.visualElement,this);const a=this.visualElement.current,i=Il(a,"pointerdown",(h=>{const{drag:p,dragListener:y=!0}=this.getProps();p&&y&&this.start(h)})),o=()=>{const{dragConstraints:h}=this.getProps();Ha(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,d=u.addEventListener("measure",o);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),De.read(o);const f=di(window,"resize",(()=>this.scalePositionWithinConstraints())),m=u.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Qt((y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=h[y].translate,b.set(b.get()+h[y].translate))})),this.visualElement.render())}));return()=>{f(),i(),d(),m&&m()}}getProps(){const a=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:u=!1,dragConstraints:d=!1,dragElastic:f=dx,dragMomentum:m=!0}=a;return{...a,drag:i,dragDirectionLock:o,dragPropagation:u,dragConstraints:d,dragElastic:f,dragMomentum:m}}};function Xo(n,a,i){return!(a!==!0&&a!==n||i!==null&&i!==n)}let q2=class extends vr{constructor(a){super(a),this.removeGroupControls=Wt,this.removeListeners=Wt,this.controls=new Y2(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Wt}unmount(){this.removeGroupControls(),this.removeListeners()}};const Py=n=>(a,i)=>{n&&De.postRender((()=>n(a,i)))};let G2=class extends vr{constructor(){super(...arguments),this.removePointerDownListener=Wt}onPointerDown(a){this.session=new ux(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:sx(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:i,onPan:o,onPanEnd:u}=this.node.getProps();return{onSessionStart:Py(a),onStart:Py(i),onMove:o,onEnd:(d,f)=>{delete this.session,u&&De.postRender((()=>u(d,f)))}}}mount(){this.removePointerDownListener=Il(this.node.current,"pointerdown",(a=>this.onPointerDown(a)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}};const{schedule:Of}=bb(queueMicrotask,!1),fx=S.createContext({}),Wo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ky(n,a){return a.max===a.min?0:n/(a.max-a.min)*100}const Pl={correct:(n,a)=>{if(!a.target)return n;if(typeof n=="string"){if(!ue.test(n))return n;n=parseFloat(n)}return`${Ky(n,a.target.x)}% ${Ky(n,a.target.y)}%`}},X2={correct:(n,{treeScale:a,projectionDelta:i})=>{const o=n,u=pr.parse(n);if(u.length>5)return o;const d=pr.createTransformer(n),f=typeof u[0]!="number"?1:0,m=i.x.scale*a.x,h=i.y.scale*a.y;u[0+f]/=m,u[1+f]/=h;const p=Be(m,h,.5);return typeof u[2+f]=="number"&&(u[2+f]/=p),typeof u[3+f]=="number"&&(u[3+f]/=p),d(u)}},fi={};function P2(n){for(const a in n)fi[a]=n[a],Af(a)&&(fi[a].isCSSVariable=!0)}let K2=class extends S.Component{componentDidMount(){const{visualElement:a,layoutGroup:i,switchLayoutGroup:o,layoutId:u}=this.props,{projection:d}=a;P2(Q2),d&&(i.group&&i.group.add(d),o&&o.register&&u&&o.register(d),d.root.didUpdate(),d.addEventListener("animationComplete",(()=>{this.safeToRemove()})),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),Wo.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:i,visualElement:o,drag:u,isPresent:d}=this.props,f=o.projection;return f&&(f.isPresent=d,u||a.layoutDependency!==i||i===void 0||a.isPresent!==d?f.willUpdate():this.safeToRemove(),a.isPresent!==d&&(d?f.promote():f.relegate()||De.postRender((()=>{const m=f.getStack();m&&m.members.length||this.safeToRemove()})))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),Of.postRender((()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:a,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:u}=a;u&&(u.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(u),o&&o.deregister&&o.deregister(u))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}};function mx(n){const[a,i]=HE(),o=S.useContext(yb);return g.jsx(K2,{...n,layoutGroup:o,switchLayoutGroup:S.useContext(fx),isPresent:a,safeToRemove:i})}const Q2={borderRadius:{...Pl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Pl,borderTopRightRadius:Pl,borderBottomLeftRadius:Pl,borderBottomRightRadius:Pl,boxShadow:X2};function Z2(n,a,i){const o=dt(n)?n:li(n);return o.start(Mf("",o,a,i)),o.animation}function F2(n){return n instanceof SVGElement&&n.tagName!=="svg"}const J2=(n,a)=>n.depth-a.depth;let W2=class{constructor(){this.children=[],this.isDirty=!1}add(a){mf(this.children,a),this.isDirty=!0}remove(a){hf(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(J2),this.isDirty=!1,this.children.forEach(a)}};function I2(n,a){const i=hn.now(),o=({timestamp:u})=>{const d=u-i;d>=a&&(hr(o),n(d-a))};return De.read(o,!0),()=>hr(o)}function Io(n){const a=dt(n)?n.get():n;return PE(a)?a.toValue():a}const hx=["TopLeft","TopRight","BottomLeft","BottomRight"],ew=hx.length,Qy=n=>typeof n=="string"?parseFloat(n):n,Zy=n=>typeof n=="number"||ue.test(n);function tw(n,a,i,o,u,d){u?(n.opacity=Be(0,i.opacity!==void 0?i.opacity:1,nw(o)),n.opacityExit=Be(a.opacity!==void 0?a.opacity:1,0,rw(o))):d&&(n.opacity=Be(a.opacity!==void 0?a.opacity:1,i.opacity!==void 0?i.opacity:1,o));for(let f=0;f<ew;f++){const m=`border${hx[f]}Radius`;let h=Fy(a,m),p=Fy(i,m);h===void 0&&p===void 0||(h||(h=0),p||(p=0),h===0||p===0||Zy(h)===Zy(p)?(n[m]=Math.max(Be(Qy(h),Qy(p),o),0),(yn.test(p)||yn.test(h))&&(n[m]+="%")):n[m]=p)}(a.rotate||i.rotate)&&(n.rotate=Be(a.rotate||0,i.rotate||0,o))}function Fy(n,a){return n[a]!==void 0?n[a]:n.borderRadius}const nw=px(0,.5,Rb),rw=px(.5,.95,Wt);function px(n,a,i){return o=>o<n?0:o>a?1:i(ui(n,a,o))}function Jy(n,a){n.min=a.min,n.max=a.max}function Kt(n,a){Jy(n.x,a.x),Jy(n.y,a.y)}function Wy(n,a){n.translate=a.translate,n.scale=a.scale,n.originPoint=a.originPoint,n.origin=a.origin}function Iy(n,a,i,o,u){return n=ss(n-=a,1/i,o),u!==void 0&&(n=ss(n,1/u,o)),n}function aw(n,a=0,i=1,o=.5,u,d=n,f=n){if(yn.test(a)&&(a=parseFloat(a),a=Be(f.min,f.max,a/100)-f.min),typeof a!="number")return;let m=Be(d.min,d.max,o);n===d&&(m-=a),n.min=Iy(n.min,a,i,m,u),n.max=Iy(n.max,a,i,m,u)}function eg(n,a,[i,o,u],d,f){aw(n,a[i],a[o],a[u],a.scale,d,f)}const lw=["x","scaleX","originX"],iw=["y","scaleY","originY"];function tg(n,a,i,o){eg(n.x,a,lw,i?i.x:void 0,o?o.x:void 0),eg(n.y,a,iw,i?i.y:void 0,o?o.y:void 0)}function ng(n){return n.translate===0&&n.scale===1}function vx(n){return ng(n.x)&&ng(n.y)}function rg(n,a){return n.min===a.min&&n.max===a.max}function ow(n,a){return rg(n.x,a.x)&&rg(n.y,a.y)}function ag(n,a){return Math.round(n.min)===Math.round(a.min)&&Math.round(n.max)===Math.round(a.max)}function yx(n,a){return ag(n.x,a.x)&&ag(n.y,a.y)}function lg(n){return pt(n.x)/pt(n.y)}function ig(n,a){return n.translate===a.translate&&n.scale===a.scale&&n.originPoint===a.originPoint}let sw=class{constructor(){this.members=[]}add(a){mf(this.members,a),a.scheduleRender()}remove(a){if(hf(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(a){const i=this.members.findIndex((u=>a===u));if(i===0)return!1;let o;for(let u=i;u>=0;u--){const d=this.members[u];if(d.isPresent!==!1){o=d;break}}return!!o&&(this.promote(o),!0)}promote(a,i){const o=this.lead;if(a!==o&&(this.prevLead=o,this.lead=a,a.show(),o)){o.instance&&o.scheduleRender(),a.scheduleRender(),a.resumeFrom=o,i&&(a.resumeFrom.preserveOpacity=!0),o.snapshot&&(a.snapshot=o.snapshot,a.snapshot.latestValues=o.animationValues||o.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:u}=a.options;u===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach((a=>{const{options:i,resumingFrom:o}=a;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()}))}scheduleRender(){this.members.forEach((a=>{a.instance&&a.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}};function uw(n,a,i){let o="";const u=n.x.translate/a.x,d=n.y.translate/a.y,f=i?.z||0;if((u||d||f)&&(o=`translate3d(${u}px, ${d}px, ${f}px) `),a.x===1&&a.y===1||(o+=`scale(${1/a.x}, ${1/a.y}) `),i){const{transformPerspective:p,rotate:y,rotateX:b,rotateY:_,skewX:j,skewY:N}=i;p&&(o=`perspective(${p}px) ${o}`),y&&(o+=`rotate(${y}deg) `),b&&(o+=`rotateX(${b}deg) `),_&&(o+=`rotateY(${_}deg) `),j&&(o+=`skewX(${j}deg) `),N&&(o+=`skewY(${N}deg) `)}const m=n.x.scale*a.x,h=n.y.scale*a.y;return m===1&&h===1||(o+=`scale(${m}, ${h})`),o||"none"}const rd=["","X","Y","Z"],cw={visibility:"hidden"};let dw=0;function ad(n,a,i,o){const{latestValues:u}=a;u[n]&&(i[n]=u[n],a.setStaticValue(n,0),o&&(o[n]=0))}function gx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:a}=n.options;if(!a)return;const i=Eb(a);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:u,layoutId:d}=n.options;window.MotionCancelOptimisedAnimation(i,"transform",De,!(u||d))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&gx(o)}function bx({attachResizeListener:n,defaultParent:a,measureScroll:i,checkIsScrollRoot:o,resetTransform:u}){return class{constructor(d={},f=a?.()){this.id=dw++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(hw),this.nodes.forEach(bw),this.nodes.forEach(xw),this.nodes.forEach(pw)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new W2)}addEventListener(d,f){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new pf),this.eventHandlers.get(d).add(f)}notifyListeners(d,...f){const m=this.eventHandlers.get(d);m&&m.notify(...f)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=F2(d),this.instance=d;const{layoutId:m,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(h||m)&&(this.isLayoutDirty=!0),n){let y;const b=()=>this.root.updateBlockedByResize=!1;n(d,(()=>{this.root.updateBlockedByResize=!0,y&&y(),y=I2(b,250),Wo.hasAnimatedSinceResize&&(Wo.hasAnimatedSinceResize=!1,this.nodes.forEach(sg))}))}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&p&&(m||h)&&this.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:_,layout:j})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const N=this.options.transition||p.getDefaultTransition()||ww,{onLayoutAnimationStart:w,onLayoutAnimationComplete:A}=p.getProps(),D=!this.targetLayout||!yx(this.targetLayout,j),k=!b&&_;if(this.options.layoutRoot||this.resumeFrom||k||b&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,k);const q={...ff(N,"layout"),onPlay:w,onComplete:A};(p.shouldReduceMotion||this.options.layoutRoot)&&(q.delay=0,q.type=!1),this.startAnimation(q)}else b||sg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=j}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,hr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(_w),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&gx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const y=this.path[p];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:f,layout:m}=this.options;if(f===void 0&&!m)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(og);this.isUpdating||this.nodes.forEach(yw),this.isUpdating=!1,this.nodes.forEach(gw),this.nodes.forEach(fw),this.nodes.forEach(mw),this.clearAllSnapshots();const d=hn.now();st.delta=Bn(0,1e3/60,d-st.timestamp),st.timestamp=d,st.isProcessing=!0,Fc.update.process(st),Fc.preRender.process(st),Fc.render.process(st),st.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Of.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(vw),this.sharedNodes.forEach(Sw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,De.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){De.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||pt(this.snapshot.measuredBox.x)||pt(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty)))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(f=!1),f){const m=o(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:m,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!vx(this.projectionDelta),m=this.getTransformTemplate(),h=m?m(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;d&&(f||Vr(this.latestValues)||p)&&(u(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const f=this.measurePageBox();let m=this.removeElementScroll(f);var h;return d&&(m=this.removeTransform(m)),mg((h=m).x),mg(h.y),{animationId:this.root.animationId,measuredBox:f,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return Qe();const f=d.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Aw))){const{scroll:m}=this.root;m&&(Ba(f.x,m.offset.x),Ba(f.y,m.offset.y))}return f}removeElementScroll(d){const f=Qe();if(Kt(f,d),this.scroll?.wasRoot)return f;for(let m=0;m<this.path.length;m++){const h=this.path[m],{scroll:p,options:y}=h;h!==this.root&&p&&y.layoutScroll&&(p.wasRoot&&Kt(f,d),Ba(f.x,p.offset.x),Ba(f.y,p.offset.y))}return f}applyTransform(d,f=!1){const m=Qe();Kt(m,d);for(let h=0;h<this.path.length;h++){const p=this.path[h];!f&&p.options.layoutScroll&&p.scroll&&p!==p.root&&Va(m,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Vr(p.latestValues)&&Va(m,p.latestValues)}return Vr(this.latestValues)&&Va(m,this.latestValues),m}removeTransform(d){const f=Qe();Kt(f,d);for(let m=0;m<this.path.length;m++){const h=this.path[m];if(!h.instance||!Vr(h.latestValues))continue;Ud(h.latestValues)&&h.updateSnapshot();const p=Qe(),y=h.measurePageBox();Kt(p,y),tg(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return Vr(this.latestValues)&&tg(f,this.latestValues),f}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade===void 0||d.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==f;if(!(d||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:p}=this.options;if(this.layout&&(h||p)){if(this.resolvedRelativeTargetAt=st.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),ti(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if((this.relativeTarget||this.targetDelta)&&(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),N2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Kt(this.target,this.layout.layoutBox),ix(this.target,this.targetDelta)):Kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),ti(this.relativeTargetOrigin,this.target,y.target),Kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(this.parent&&!Ud(this.parent.latestValues)&&!lx(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const d=this.getLead(),f=!!this.resumingFrom||this!==d;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===st.timestamp&&(m=!1),m)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!h&&!p)return;Kt(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,b=this.treeScale.y;M2(this.layoutCorrected,this.treeScale,this.path,f),!d.layout||d.target||this.treeScale.x===1&&this.treeScale.y===1||(d.target=d.layout.layoutBox,d.targetWithTransforms=Qe());const{target:_}=d;_?(this.projectionDelta&&this.prevProjectionDelta?(Wy(this.prevProjectionDelta.x,this.projectionDelta.x),Wy(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),ei(this.projectionDelta,this.layoutCorrected,_,this.latestValues),this.treeScale.x===y&&this.treeScale.y===b&&ig(this.projectionDelta.x,this.prevProjectionDelta.x)&&ig(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.visualElement?.scheduleRender(),d){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ua(),this.projectionDelta=Ua(),this.projectionDeltaWithTransform=Ua()}setAnimationOrigin(d,f=!1){const m=this.snapshot,h=m?m.latestValues:{},p={...this.latestValues},y=Ua();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const b=Qe(),_=(m?m.source:void 0)!==(this.layout?this.layout.source:void 0),j=this.getStack(),N=!j||j.members.length<=1,w=!!(_&&!N&&this.options.crossfade===!0&&!this.path.some(Tw));let A;this.animationProgress=0,this.mixTargetDelta=D=>{const k=D/1e3;ug(y.x,d.x,k),ug(y.y,d.y,k),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ti(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Ew(this.relativeTarget,this.relativeTargetOrigin,b,k),A&&ow(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=Qe()),Kt(A,this.relativeTarget)),_&&(this.animationValues=p,tw(p,h,this.latestValues,k,w,N)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(hr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=De.update((()=>{Wo.hasAnimatedSinceResize=!0,this.currentAnimation=Z2(0,1e3,{...d,onUpdate:f=>{this.mixTargetDelta(f),d.onUpdate&&d.onUpdate(f)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:f,target:m,layout:h,latestValues:p}=d;if(f&&m&&h){if(this!==d&&this.layout&&h&&xx(this.options.animationType,this.layout.layoutBox,h.layoutBox)){m=this.target||Qe();const y=pt(this.layout.layoutBox.x);m.x.min=d.target.x.min,m.x.max=m.x.min+y;const b=pt(this.layout.layoutBox.y);m.y.min=d.target.y.min,m.y.max=m.y.min+b}Kt(f,m),Va(f,p),ei(this.projectionDeltaWithTransform,this.layoutCorrected,f,p)}}registerSharedNode(d,f){this.sharedNodes.has(d)||this.sharedNodes.set(d,new sw),this.sharedNodes.get(d).add(f);const m=f.options.initialPromotionConfig;f.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(f):void 0})}isLead(){const d=this.getStack();return!d||d.lead===this}getLead(){const{layoutId:d}=this.options;return d&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:d}=this.options;return d?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:f,preserveFollowOpacity:m}={}){const h=this.getStack();h&&h.promote(this,m),d&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const d=this.getStack();return!!d&&d.relegate(this)}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let f=!1;const{latestValues:m}=d;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(f=!0),!f)return;const h={};m.z&&ad("z",d,h,this.animationValues);for(let p=0;p<rd.length;p++)ad(`rotate${rd[p]}`,d,h,this.animationValues),ad(`skew${rd[p]}`,d,h,this.animationValues);d.render();for(const p in h)d.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);d.scheduleRender()}getProjectionStyles(d){if(!this.instance||this.isSVG)return;if(!this.isVisible)return cw;const f={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=Io(d?.pointerEvents)||"",f.transform=m?m(this.latestValues,""):"none",f;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=Io(d?.pointerEvents)||""),this.hasProjected&&!Vr(this.latestValues)&&(_.transform=m?m({},""):"none",this.hasProjected=!1),_}const p=h.animationValues||h.latestValues;this.applyTransformsToTarget(),f.transform=uw(this.projectionDeltaWithTransform,this.treeScale,p),m&&(f.transform=m(p,f.transform));const{x:y,y:b}=this.projectionDelta;f.transformOrigin=`${100*y.origin}% ${100*b.origin}% 0`,h.animationValues?f.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:f.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const _ in fi){if(p[_]===void 0)continue;const{correct:j,applyTo:N,isCSSVariable:w}=fi[_],A=f.transform==="none"?p[_]:j(p[_],h);if(N){const D=N.length;for(let k=0;k<D;k++)f[N[k]]=A}else w?this.options.visualElement.renderState.vars[_]=A:f[_]=A}return this.options.layoutId&&(f.pointerEvents=h===this?Io(d?.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((d=>d.currentAnimation?.stop())),this.root.nodes.forEach(og),this.root.sharedNodes.clear()}}}function fw(n){n.updateLayout()}function mw(n){const a=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&a&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:u}=n.options,d=a.source!==n.layout.source;u==="size"?Qt((y=>{const b=d?a.measuredBox[y]:a.layoutBox[y],_=pt(b);b.min=i[y].min,b.max=b.min+_})):xx(u,a.layoutBox,i)&&Qt((y=>{const b=d?a.measuredBox[y]:a.layoutBox[y],_=pt(i[y]);b.max=b.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+_)}));const f=Ua();ei(f,i,a.layoutBox);const m=Ua();d?ei(m,n.applyTransform(o,!0),a.measuredBox):ei(m,i,a.layoutBox);const h=!vx(f);let p=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:b,layout:_}=y;if(b&&_){const j=Qe();ti(j,a.layoutBox,b.layoutBox);const N=Qe();ti(N,i,_.layoutBox),yx(j,N)||(p=!0),y.options.layoutRoot&&(n.relativeTarget=N,n.relativeTargetOrigin=j,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:a,delta:m,layoutDelta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function hw(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function pw(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function vw(n){n.clearSnapshot()}function og(n){n.clearMeasurements()}function yw(n){n.isLayoutDirty=!1}function gw(n){const{visualElement:a}=n.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),n.resetTransform()}function sg(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function bw(n){n.resolveTargetDelta()}function xw(n){n.calcProjection()}function _w(n){n.resetSkewAndRotation()}function Sw(n){n.removeLeadSnapshot()}function ug(n,a,i){n.translate=Be(a.translate,0,i),n.scale=Be(a.scale,1,i),n.origin=a.origin,n.originPoint=a.originPoint}function cg(n,a,i,o){n.min=Be(a.min,i.min,o),n.max=Be(a.max,i.max,o)}function Ew(n,a,i,o){cg(n.x,a.x,i.x,o),cg(n.y,a.y,i.y,o)}function Tw(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const ww={duration:.45,ease:[.4,0,.1,1]},dg=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),fg=dg("applewebkit/")&&!dg("chrome/")?Math.round:Wt;function mg(n){n.min=fg(n.min),n.max=fg(n.max)}function xx(n,a,i){return n==="position"||n==="preserve-aspect"&&!C2(lg(a),lg(i),.2)}function Aw(n){return n!==n.root&&n.scroll?.wasRoot}const jw=bx({attachResizeListener:(n,a)=>di(n,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ld={current:void 0},_x=bx({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!ld.current){const n=new jw({});n.mount(window),n.setOptions({layoutScroll:!0}),ld.current=n}return ld.current},resetTransform:(n,a)=>{n.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Cw={pan:{Feature:G2},drag:{Feature:q2,ProjectionNode:_x,MeasureLayout:mx}};function Nw(n,a,i){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let o=document;const u=i?.[n]??o.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n)}function Sx(n,a){const i=Nw(n),o=new AbortController;return[i,{passive:!0,...a,signal:o.signal},()=>o.abort()]}function hg(n){return!(n.pointerType==="touch"||rx())}function Mw(n,a,i={}){const[o,u,d]=Sx(n,i),f=m=>{if(!hg(m))return;const{target:h}=m,p=a(h,m);if(typeof p!="function"||!h)return;const y=b=>{hg(b)&&(p(b),h.removeEventListener("pointerleave",y))};h.addEventListener("pointerleave",y,u)};return o.forEach((m=>{m.addEventListener("pointerenter",f,u)})),d}function pg(n,a,i){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",i==="Start");const u=o["onHover"+i];u&&De.postRender((()=>u(a,xi(a))))}let zw=class extends vr{mount(){const{current:a}=this.node;a&&(this.unmount=Mw(a,((i,o)=>(pg(this.node,o,"Start"),u=>pg(this.node,u,"End")))))}unmount(){}},Rw=class extends vr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}a&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=bi(di(this.node.current,"focus",(()=>this.onFocus())),di(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}};const Ex=(n,a)=>!!a&&(n===a||Ex(n,a.parentElement)),Dw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Ow(n){return Dw.has(n.tagName)||n.tabIndex!==-1}const Jl=new WeakSet;function vg(n){return a=>{a.key==="Enter"&&n(a)}}function id(n,a){n.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const $w=(n,a)=>{const i=n.currentTarget;if(!i)return;const o=vg((()=>{if(Jl.has(i))return;id(i,"down");const u=vg((()=>{id(i,"up")}));i.addEventListener("keyup",u,a),i.addEventListener("blur",(()=>id(i,"cancel")),a)}));i.addEventListener("keydown",o,a),i.addEventListener("blur",(()=>i.removeEventListener("keydown",o)),a)};function yg(n){return Df(n)&&!rx()}function Lw(n,a,i={}){const[o,u,d]=Sx(n,i),f=m=>{const h=m.currentTarget;if(!yg(m)||Jl.has(h))return;Jl.add(h);const p=a(h,m),y=(j,N)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",_),yg(j)&&Jl.has(h)&&(Jl.delete(h),typeof p=="function"&&p(j,{success:N}))},b=j=>{y(j,h===window||h===document||i.useGlobalTarget||Ex(h,j.target))},_=j=>{y(j,!1)};window.addEventListener("pointerup",b,u),window.addEventListener("pointercancel",_,u)};return o.forEach((m=>{(i.useGlobalTarget?window:m).addEventListener("pointerdown",f,u),m instanceof HTMLElement&&(m.addEventListener("focus",(h=>$w(h,u))),Ow(m)||m.hasAttribute("tabindex")||(m.tabIndex=0))})),d}function gg(n,a,i){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",i==="Start");const u=o["onTap"+(i==="End"?"":i)];u&&De.postRender((()=>u(a,xi(a))))}let Uw=class extends vr{mount(){const{current:a}=this.node;a&&(this.unmount=Lw(a,((i,o)=>(gg(this.node,o,"Start"),(u,{success:d})=>gg(this.node,u,d?"End":"Cancel"))),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}};const Vd=new WeakMap,od=new WeakMap,Bw=n=>{const a=Vd.get(n.target);a&&a(n)},Vw=n=>{n.forEach(Bw)};function Hw(n,a,i){const o=(function({root:u,...d}){const f=u||document;od.has(f)||od.set(f,{});const m=od.get(f),h=JSON.stringify(d);return m[h]||(m[h]=new IntersectionObserver(Vw,{root:u,...d})),m[h]})(a);return Vd.set(n,i),o.observe(n),()=>{Vd.delete(n),o.unobserve(n)}}const kw={some:0,all:1};let Yw=class extends vr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:i,margin:o,amount:u="some",once:d}=a,f={root:i?i.current:void 0,rootMargin:o,threshold:typeof u=="number"?u:kw[u]};return Hw(this.node.current,f,(m=>{const{isIntersecting:h}=m;if(this.isInView===h||(this.isInView=h,d&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:y}=this.node.getProps(),b=h?p:y;b&&b(m)}))}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:i}=this.node;["amount","margin","root"].some((function({viewport:o={}},{viewport:u={}}={}){return d=>o[d]!==u[d]})(a,i))&&this.startObserver()}unmount(){}};const qw={inView:{Feature:Yw},tap:{Feature:Uw},focus:{Feature:Rw},hover:{Feature:zw}},Gw={layout:{ProjectionNode:_x,MeasureLayout:mx}},Tx=S.createContext({strict:!1}),gs=S.createContext({});function bs(n){return vs(n.animate)||Rf.some((a=>ci(n[a])))}function wx(n){return!!(bs(n)||n.variants)}function Xw(n,a){if(bs(n)){const{initial:i,animate:o}=n;return{initial:i===!1||ci(i)?i:void 0,animate:ci(o)?o:void 0}}return n.inherit!==!1?a:{}}function Pw(n){const{initial:a,animate:i}=Xw(n,S.useContext(gs));return S.useMemo((()=>({initial:a,animate:i})),[bg(a),bg(i)])}function bg(n){return Array.isArray(n)?n.join(" "):n}const xg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ga={};for(const n in xg)Ga[n]={isEnabled:a=>xg[n].some((i=>!!a[i]))};function Kw(n){for(const a in n)Ga[a]={...Ga[a],...n[a]}}const Qw=Symbol.for("motionComponentSymbol");function Zw(n,a,i){return S.useCallback((o=>{o&&n.onMount&&n.onMount(o),a&&(o?a.mount(o):a.unmount()),i&&(typeof i=="function"?i(o):Ha(i)&&(i.current=o))}),[a])}function Fw(n,a,i,o,u){const{visualElement:d}=S.useContext(gs),f=S.useContext(Tx),m=S.useContext(cf),h=S.useContext(gb).reducedMotion,p=S.useRef(null);o=o||f.renderer,!p.current&&o&&(p.current=o(n,{visualState:a,parent:d,props:i,presenceContext:m,blockInitialAnimation:!!m&&m.initial===!1,reducedMotionConfig:h}));const y=p.current,b=S.useContext(fx);!y||y.projection||!u||y.type!=="html"&&y.type!=="svg"||(function(w,A,D,k){const{layoutId:q,layout:Z,drag:V,dragConstraints:J,layoutScroll:Q,layoutRoot:E}=A;w.projection=new D(w.latestValues,A["data-framer-portal-id"]?void 0:Ax(w.parent)),w.projection.setOptions({layoutId:q,layout:Z,alwaysMeasureLayout:!!V||J&&Ha(J),visualElement:w,animationType:typeof Z=="string"?Z:"both",initialPromotionConfig:k,layoutScroll:Q,layoutRoot:E})})(p.current,i,u,b);const _=S.useRef(!1);S.useInsertionEffect((()=>{y&&_.current&&y.update(i,m)}));const j=i[Sb],N=S.useRef(!!j&&!window.MotionHandoffIsComplete?.(j)&&window.MotionHasOptimisedAnimation?.(j));return VE((()=>{y&&(_.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),Of.render(y.render),N.current&&y.animationState&&y.animationState.animateChanges())})),S.useEffect((()=>{y&&(!N.current&&y.animationState&&y.animationState.animateChanges(),N.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(j)})),N.current=!1))})),y}function Ax(n){if(n)return n.options.allowProjection!==!1?n.projection:Ax(n.parent)}function Jw({preloadedFeatures:n,createVisualElement:a,useRender:i,useVisualState:o,Component:u}){function d(m,h){let p;const y={...S.useContext(gb),...m,layoutId:Ww(m)},{isStatic:b}=y,_=Pw(m),j=o(m,b);if(!b&&uf){(function(w,A){S.useContext(Tx).strict})();const N=(function(w){const{drag:A,layout:D}=Ga;if(!A&&!D)return{};const k={...A,...D};return{MeasureLayout:A?.isEnabled(w)||D?.isEnabled(w)?k.MeasureLayout:void 0,ProjectionNode:k.ProjectionNode}})(y);p=N.MeasureLayout,_.visualElement=Fw(u,j,y,a,N.ProjectionNode)}return g.jsxs(gs.Provider,{value:_,children:[p&&_.visualElement?g.jsx(p,{visualElement:_.visualElement,...y}):null,i(u,m,Zw(j,_.visualElement,h),j,b,_.visualElement)]})}n&&Kw(n),d.displayName=`motion.${typeof u=="string"?u:`create(${u.displayName??u.name??""})`}`;const f=S.forwardRef(d);return f[Qw]=u,f}function Ww({layoutId:n}){const a=S.useContext(yb).id;return a&&n!==void 0?a+"-"+n:n}function jx(n,{layout:a,layoutId:i}){return Kr.has(n)||n.startsWith("origin")||(a||i!==void 0)&&(!!fi[n]||n==="opacity")}const Cx=(n,a)=>a&&typeof n=="number"?a.transform(n):n,Iw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},eA=Qa.length;function tA(n,a,i){let o="",u=!0;for(let d=0;d<eA;d++){const f=Qa[d],m=n[f];if(m===void 0)continue;let h=!0;if(h=typeof m=="number"?m===(f.startsWith("scale")?1:0):parseFloat(m)===0,!h||i){const p=Cx(m,Tf[f]);h||(u=!1,o+=`${Iw[f]||f}(${p}) `),i&&(a[f]=p)}}return o=o.trim(),i?o=i(a,u?"":o):u&&(o="none"),o}function $f(n,a,i){const{style:o,vars:u,transformOrigin:d}=n;let f=!1,m=!1;for(const h in a){const p=a[h];if(Kr.has(h))f=!0;else if(Af(h))u[h]=p;else{const y=Cx(p,Tf[h]);h.startsWith("origin")?(m=!0,d[h]=y):o[h]=y}}if(a.transform||(f||i?o.transform=tA(a,n.transform,i):o.transform&&(o.transform="none")),m){const{originX:h="50%",originY:p="50%",originZ:y=0}=d;o.transformOrigin=`${h} ${p} ${y}`}}const Lf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Nx(n,a,i){for(const o in a)dt(a[o])||jx(o,i)||(n[o]=a[o])}function nA(n,a){const i={};return Nx(i,n.style||{},n),Object.assign(i,(function({transformTemplate:o},u){return S.useMemo((()=>{const d=Lf();return $f(d,u,o),Object.assign({},d.vars,d.style)}),[u])})(n,a)),i}function rA(n,a){const i={},o=nA(n,a);return n.drag&&n.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":"pan-"+(n.drag==="x"?"y":"x")),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(i.tabIndex=0),i.style=o,i}const aA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function us(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||aA.has(n)}let Mx=n=>!us(n);function lA(n){n&&(Mx=a=>a.startsWith("on")?!us(a):n(a))}try{lA(require("@emotion/is-prop-valid").default)}catch{}function iA(n,a,i){const o={};for(const u in n)u==="values"&&typeof n.values=="object"||(Mx(u)||i===!0&&us(u)||!a&&!us(u)||n.draggable&&u.startsWith("onDrag"))&&(o[u]=n[u]);return o}const oA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Uf(n){return typeof n=="string"&&!n.includes("-")&&!!(oA.indexOf(n)>-1||/[A-Z]/u.test(n))}const sA={offset:"stroke-dashoffset",array:"stroke-dasharray"},uA={offset:"strokeDashoffset",array:"strokeDasharray"};function cA(n,a,i=1,o=0,u=!0){n.pathLength=1;const d=u?sA:uA;n[d.offset]=ue.transform(-o);const f=ue.transform(a),m=ue.transform(i);n[d.array]=`${f} ${m}`}function _g(n,a,i){return typeof n=="string"?n:ue.transform(a+i*n)}function dA(n,a,i){return`${_g(a,n.x,n.width)} ${_g(i,n.y,n.height)}`}function Bf(n,{attrX:a,attrY:i,attrScale:o,originX:u,originY:d,pathLength:f,pathSpacing:m=1,pathOffset:h=0,...p},y,b){if($f(n,p,b),y)return void(n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox));n.attrs=n.style,n.style={};const{attrs:_,style:j,dimensions:N}=n;_.transform&&(N&&(j.transform=_.transform),delete _.transform),N&&(u!==void 0||d!==void 0||j.transform)&&(j.transformOrigin=dA(N,u!==void 0?u:.5,d!==void 0?d:.5)),a!==void 0&&(_.x=a),i!==void 0&&(_.y=i),o!==void 0&&(_.scale=o),f!==void 0&&cA(_,f,m,h,!1)}const zx=()=>({...Lf(),attrs:{}}),Vf=n=>typeof n=="string"&&n.toLowerCase()==="svg";function fA(n,a,i,o){const u=S.useMemo((()=>{const d=zx();return Bf(d,a,Vf(o),n.transformTemplate),{...d.attrs,style:{...d.style}}}),[a]);if(n.style){const d={};Nx(d,n.style,n),u.style={...d,...u.style}}return u}function mA(n=!1){return(a,i,o,{latestValues:u},d)=>{const f=(Uf(a)?fA:rA)(i,u,d,a),m=iA(i,typeof a=="string",n),h=a!==S.Fragment?{...m,...f,ref:o}:{},{children:p}=i,y=S.useMemo((()=>dt(p)?p.get():p),[p]);return S.createElement(a,{...h,children:y})}}const Rx=n=>(a,i)=>{const o=S.useContext(gs),u=S.useContext(cf),d=()=>(function({scrapeMotionValuesFromProps:f,createRenderState:m,onUpdate:h},p,y,b){const _={latestValues:hA(p,y,b,f),renderState:m()};return h&&(_.onMount=j=>h({props:p,current:j,..._}),_.onUpdate=j=>h(j)),_})(n,a,o,u);return i?d():BE(d)};function hA(n,a,i,o){const u={},d=o(n,{});for(const _ in d)u[_]=Io(d[_]);let{initial:f,animate:m}=n;const h=bs(n),p=wx(n);a&&p&&!h&&n.inherit!==!1&&(f===void 0&&(f=a.initial),m===void 0&&(m=a.animate));let y=!!i&&i.initial===!1;y=y||f===!1;const b=y?m:f;if(b&&typeof b!="boolean"&&!vs(b)){const _=Array.isArray(b)?b:[b];for(let j=0;j<_.length;j++){const N=df(n,_[j]);if(N){const{transitionEnd:w,transition:A,...D}=N;for(const k in D){let q=D[k];Array.isArray(q)&&(q=q[y?q.length-1:0]),q!==null&&(u[k]=q)}for(const k in w)u[k]=w[k]}}}return u}function Hf(n,a,i){const{style:o}=n,u={};for(const d in o)(dt(o[d])||a.style&&dt(a.style[d])||jx(d,n)||i?.getValue(d)?.liveStyle!==void 0)&&(u[d]=o[d]);return u}const pA={useVisualState:Rx({scrapeMotionValuesFromProps:Hf,createRenderState:Lf})};function Dx(n,a){try{a.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{a.dimensions={x:0,y:0,width:0,height:0}}}function Ox(n,{style:a,vars:i},o,u){Object.assign(n.style,a,u&&u.getProjectionStyles(o));for(const d in i)n.style.setProperty(d,i[d])}const $x=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Lx(n,a,i,o){Ox(n,a,void 0,o);for(const u in a.attrs)n.setAttribute($x.has(u)?u:vf(u),a.attrs[u])}function Ux(n,a,i){const o=Hf(n,a,i);for(const u in n)(dt(n[u])||dt(a[u]))&&(o[Qa.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u]=n[u]);return o}const Sg=["x","y","width","height","cx","cy","r"],vA={useVisualState:Rx({scrapeMotionValuesFromProps:Ux,createRenderState:zx,onUpdate:({props:n,prevProps:a,current:i,renderState:o,latestValues:u})=>{if(!i)return;let d=!!n.drag;if(!d){for(const m in u)if(Kr.has(m)){d=!0;break}}if(!d)return;let f=!a;if(a)for(let m=0;m<Sg.length;m++){const h=Sg[m];n[h]!==a[h]&&(f=!0)}f&&De.read((()=>{Dx(i,o),De.render((()=>{Bf(o,u,Vf(i.tagName),n.transformTemplate),Lx(i,o)}))}))}})};function yA(n,a){return function(i,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...Uf(i)?vA:pA,preloadedFeatures:n,useRender:mA(o),createVisualElement:a,Component:i};return Jw(u)}}const Hd={current:null},Bx={current:!1};function gA(){if(Bx.current=!0,uf)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),a=()=>Hd.current=n.matches;n.addListener(a),a()}else Hd.current=!1}const bA=[...Kb,ct,pr],xA=n=>bA.find(Pb(n)),_A=new WeakMap;function SA(n,a,i){for(const o in a){const u=a[o],d=i[o];if(dt(u))n.addValue(o,u);else if(dt(d))n.addValue(o,li(u,{owner:n}));else if(d!==u)if(n.hasValue(o)){const f=n.getValue(o);f.liveStyle===!0?f.jump(u):f.hasAnimated||f.set(u)}else{const f=n.getStaticValue(o);n.addValue(o,li(f!==void 0?f:u,{owner:n}))}}for(const o in i)a[o]===void 0&&n.removeValue(o);return a}const Eg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let EA=class{scrapeMotionValuesFromProps(a,i,o){return{}}constructor({parent:a,props:i,presenceContext:o,reducedMotionConfig:u,blockInitialAnimation:d,visualState:f},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=wf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const j=hn.now();this.renderScheduledAt<j&&(this.renderScheduledAt=j,De.render(this.render,!1,!0))};const{latestValues:h,renderState:p,onUpdate:y}=f;this.onUpdate=y,this.latestValues=h,this.baseTarget={...h},this.initialValues=i.initial?{...h}:{},this.renderState=p,this.parent=a,this.props=i,this.presenceContext=o,this.depth=a?a.depth+1:0,this.reducedMotionConfig=u,this.options=m,this.blockInitialAnimation=!!d,this.isControllingVariants=bs(i),this.isVariantNode=wx(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:b,..._}=this.scrapeMotionValuesFromProps(i,{},this);for(const j in _){const N=_[j];h[j]!==void 0&&dt(N)&&N.set(h[j],!1)}}mount(a){this.current=a,_A.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((i,o)=>this.bindToMotionValue(o,i))),Bx.current||gA(),this.shouldReduceMotion=this.reducedMotionConfig!=="never"&&(this.reducedMotionConfig==="always"||Hd.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),hr(this.notifyUpdate),hr(this.render),this.valueSubscriptions.forEach((a=>a())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const i=this.features[a];i&&(i.unmount(),i.isMounted=!1)}this.current=null}bindToMotionValue(a,i){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const o=Kr.has(a);o&&this.onBindTransform&&this.onBindTransform();const u=i.on("change",(m=>{this.latestValues[a]=m,this.props.onUpdate&&De.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)})),d=i.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,a,i)),this.valueSubscriptions.set(a,(()=>{u(),d(),f&&f(),i.owner&&i.stop()}))}sortNodePosition(a){return this.current&&this.sortInstanceNodePosition&&this.type===a.type?this.sortInstanceNodePosition(this.current,a.current):0}updateFeatures(){let a="animation";for(a in Ga){const i=Ga[a];if(!i)continue;const{isEnabled:o,Feature:u}=i;if(!this.features[a]&&u&&o(this.props)&&(this.features[a]=new u(this)),this.features[a]){const d=this.features[a];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,i){this.latestValues[a]=i}update(a,i){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<Eg.length;o++){const u=Eg[o];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const d=a["on"+u];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=SA(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(a),()=>i.variantChildren.delete(a)}addValue(a,i){const o=this.values.get(a);i!==o&&(o&&this.removeValue(a),this.bindToMotionValue(a,i),this.values.set(a,i),this.latestValues[a]=i.get())}removeValue(a){this.values.delete(a);const i=this.valueSubscriptions.get(a);i&&(i(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,i){if(this.props.values&&this.props.values[a])return this.props.values[a];let o=this.values.get(a);return o===void 0&&i!==void 0&&(o=li(i===null?void 0:i,{owner:this}),this.addValue(a,o)),o}readValue(a,i){let o=this.latestValues[a]===void 0&&this.current?this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options):this.latestValues[a];return o!=null&&(typeof o=="string"&&(qb(o)||Ob(o))?o=parseFloat(o):!xA(o)&&pr.test(i)&&(o=Vb(a,i)),this.setBaseTarget(a,dt(o)?o.get():o)),dt(o)?o.get():o}setBaseTarget(a,i){this.baseTarget[a]=i}getBaseTarget(a){const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const d=df(this.props,i,this.presenceContext?.custom);d&&(o=d[a])}if(i&&o!==void 0)return o;const u=this.getBaseTargetFromProps(this.props,a);return u===void 0||dt(u)?this.initialValues[a]!==void 0&&o===void 0?void 0:this.baseTarget[a]:u}on(a,i){return this.events[a]||(this.events[a]=new pf),this.events[a].add(i)}notify(a,...i){this.events[a]&&this.events[a].notify(...i)}},Vx=class extends EA{constructor(){super(...arguments),this.KeyframeResolver=Qb}sortInstanceNodePosition(a,i){return 2&a.compareDocumentPosition(i)?1:-1}getBaseTargetFromProps(a,i){return a.style?a.style[i]:void 0}removeValueFromRenderState(a,{vars:i,style:o}){delete i[a],delete o[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;dt(a)&&(this.childSubscription=a.on("change",(i=>{this.current&&(this.current.textContent=`${i}`)})))}};function TA(n){return window.getComputedStyle(n)}let wA=class extends Vx{constructor(){super(...arguments),this.type="html",this.renderInstance=Ox}readValueFromInstance(a,i){if(Kr.has(i))return ST(a,i);{const o=TA(a),u=(Af(i)?o.getPropertyValue(i):o[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(a,{transformPagePoint:i}){return ox(a,i)}build(a,i,o){$f(a,i,o.transformTemplate)}scrapeMotionValuesFromProps(a,i,o){return Hf(a,i,o)}},AA=class extends Vx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qe,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Dx(this.current,this.renderState)}}getBaseTargetFromProps(a,i){return a[i]}readValueFromInstance(a,i){if(Kr.has(i)){const o=Bb(i);return o&&o.default||0}return i=$x.has(i)?i:vf(i),a.getAttribute(i)}scrapeMotionValuesFromProps(a,i,o){return Ux(a,i,o)}onBindTransform(){this.current&&!this.renderState.dimensions&&De.postRender(this.updateDimensions)}build(a,i,o){Bf(a,i,this.isSVGTag,o.transformTemplate)}renderInstance(a,i,o,u){Lx(a,i,o,u)}mount(a){this.isSVGTag=Vf(a.tagName),super.mount(a)}};const jA=(n,a)=>Uf(n)?new AA(a):new wA(a,{allowProjection:n!==S.Fragment}),CA=yA({...E2,...qw,...Cw,...Gw},jA),NA=kE(CA),MA={STANDARD:`cubic-bezier(${[.2,0,0,1].toString()})`};var sd={ripple:"ripple-module_ripple__8Y3pc",hovered:"ripple-module_hovered__nOsN-",pressed:"ripple-module_pressed__WGjcN"};en(`.ripple-module_ripple__8Y3pc {\r
  inset: 0;\r
  cursor: inherit;\r
  overflow: hidden;\r
  position: absolute;\r
  border-radius: inherit;\r
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r
  &:before,\r
  &:after {\r
    content: '';\r
    opacity: 0;\r
    position: absolute;\r
  }\r
  &:before {\r
    background-color: var(\r
      --md-ripple-hover-color,\r
      var(--md-sys-color-on-surface)\r
    );\r
    inset: 0;\r
    transition:\r
      opacity 15ms linear,\r
      background-color 15ms linear;\r
  }\r
  &:after {\r
    background: radial-gradient(\r
      closest-side,\r
      var(--md-ripple-pressed-color, var(--md-sys-color-on-surface))\r
        max(100% - 70px, 65%),\r
      transparent 100%\r
    );\r
    transform-origin: center center;\r
    transition: opacity 375ms linear;\r
  }\r
  &.ripple-module_hovered__nOsN-:before {\r
    background-color: var(\r
      --md-ripple-hover-color,\r
      var(--md-sys-color-on-surface)\r
    );\r
    opacity: var(--md-ripple-hover-opacity, 0.08);\r
  }\r
  &.ripple-module_pressed__WGjcN:after {\r
    opacity: var(--md-ripple-pressed-opacity, 0.12);\r
    transition-duration: 105ms;\r
  }\r
}\r
`);const zA=n=>{const[a,i]=S.useState(null);return S.useEffect((()=>{var o,u;const d=(o=n.current)===null||o===void 0?void 0:o.getAttribute("for");if(d){const f=document.getElementById(d),m=(u=n.current)===null||u===void 0?void 0:u.parentElement;i(f||m)}}),[n]),a};var ht;(function(n){n[n.INACTIVE=0]="INACTIVE",n[n.TOUCH_DELAY=1]="TOUCH_DELAY",n[n.HOLDING=2]="HOLDING",n[n.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(ht||(ht={}));const RA=["click","keydown","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],_i=n=>{const{id:a,disabled:i=!1,style:o,className:u}=n,d=a||`actify-ripple${S.useId()}`,[f,m]=S.useState(!1),[h,p]=S.useState(!1),y=S.useRef(null),b=zA(y),_=S.useRef(ht.INACTIVE),j=S.useRef(""),N=S.useRef(""),w=S.useRef(0),A=S.useRef(null),D=S.useRef(null),k=S.useRef(!1),q=({pointerType:z})=>z==="touch",Z=z=>{const{height:W,width:re}=y.current.getBoundingClientRect(),R={x:(re-w.current)/2,y:(W-w.current)/2};let G;return G=z instanceof PointerEvent?(ee=>{const{scrollX:pe,scrollY:ce}=window,{left:C,top:X}=y.current.getBoundingClientRect(),I=pe+C,te=ce+X,{pageX:de,pageY:ve}=ee;return{x:de-I,y:ve-te}})(z):{x:re/2,y:W/2},G={x:G.x-w.current/2,y:G.y-w.current/2},{startPoint:G,endPoint:R}},V=z=>{var W,re;if(!y.current)return;p(!0),(W=A.current)===null||W===void 0||W.cancel(),(()=>{const{height:ce,width:C}=y.current.getBoundingClientRect(),X=Math.max(ce,C),I=Math.max(.35*X,75),te=Math.floor(.2*X),de=Math.sqrt(Math.pow(C,2)+Math.pow(ce,2))+10;w.current=te,N.current=""+(de+I)/te,j.current=`${w.current}px`})();const{startPoint:R,endPoint:G}=Z(z),ee=`${R.x}px, ${R.y}px`,pe=`${G.x}px, ${G.y}px`;A.current=(re=y.current)===null||re===void 0?void 0:re.animate({top:[0,0],left:[0,0],height:[j.current,j.current],width:[j.current,j.current],transform:[`translate(${ee}) scale(1)`,`translate(${pe}) scale(${N.current})`]},{pseudoElement:"::after",duration:450,easing:MA.STANDARD,fill:"forwards"})},J=()=>Qc(void 0,void 0,void 0,(function*(){D.current=null,_.current=ht.INACTIVE;const z=A.current;let W=1/0;typeof z?.currentTime=="number"?W=z.currentTime:z?.currentTime&&(W=z.currentTime.to("ms").value),W>=225?p(!1):(yield new Promise((re=>setTimeout(re,225-W))),A.current===z&&p(!1))})),Q=z=>{if(i||!z.isPrimary||D.current&&D.current.pointerId!==z.pointerId)return!1;if(z.type==="pointerenter"||z.type==="pointerleave")return!q(z);const W=z.buttons===1;return q(z)||W},E=z=>{Q(z)&&J()},K=z=>Qc(void 0,void 0,void 0,(function*(){if(Q(z)){if(D.current=z,!q(z))return _.current=ht.WAITING_FOR_CLICK,void V(z);k.current&&!(({x:W,y:re})=>{const{top:R,left:G,bottom:ee,right:pe}=y.current.getBoundingClientRect();return W>=G&&W<=pe&&re>=R&&re<=ee})(z)||(k.current=!1,_.current=ht.TOUCH_DELAY,yield new Promise((W=>{setTimeout(W,150)})),_.current===ht.TOUCH_DELAY&&(_.current=ht.HOLDING,V(z)))}})),le=z=>{Q(z)&&m(!0)},F=z=>{Q(z)&&(m(!1),_.current!==ht.INACTIVE&&J())},oe=z=>{if(Q(z)){if(_.current!==ht.HOLDING)return _.current===ht.TOUCH_DELAY?(_.current=ht.WAITING_FOR_CLICK,void V(D.current)):void 0;_.current=ht.WAITING_FOR_CLICK}};return S.useEffect((()=>{if(b)for(const z of RA)b.addEventListener(z,(W=>Qc(void 0,void 0,void 0,(function*(){if(W.type!="keydown"||W.code=="Enter"||W.code=="Space")switch(W.type){case"click":case"keydown":_.current!==ht.WAITING_FOR_CLICK?_.current===ht.INACTIVE&&(V(),J()):J();break;case"contextmenu":i||(k.current=!0,J());break;case"pointercancel":E(W);break;case"pointerdown":yield K(W);break;case"pointerenter":le(W);break;case"pointerleave":F(W);break;case"pointerup":oe(W)}}))))}),[y.current,i]),g.jsx("label",{ref:y,style:o,htmlFor:d,"aria-hidden":"true",className:on(sd.ripple,f&&sd.hovered,h&&sd.pressed,u)})};_i.displayName="Actify.Ripple";var ud={root:"card-module_root__o4tFN",filled:"card-module_filled__BUroO",outlined:"card-module_outlined__gIHoH",card:"card-module_card__ukHma"};en(`.card-module_root__o4tFN {\r
  position: relative;\r
  display: inline-flex;\r
  flex-direction: column;\r
  border-radius: 0.75rem /* 12px */;\r
}\r
.card-module_filled__BUroO {\r
  background-color: var(--md-sys-color-inverse-surface);\r
}\r
.card-module_outlined__gIHoH {\r
  border-width: 1px;\r
  --tw-border-opacity: 1;\r
  border-color: var(--md-sys-color-outline) / var(--tw-border-opacity);\r
}\r
.card-module_card__ukHma {\r
  position: relative;\r
  overflow: hidden;\r
  border-top-left-radius: 0.75rem /* 12px */;\r
  border-top-right-radius: 0.75rem /* 12px */;\r
}\r
`);const Hx=n=>{const{id:a,ripple:i=!1,variant:o="elevated",elevation:u=1,children:d,className:f}=n,m=Xr(n,["id","ripple","variant","elevation","children","className"]),h=a||`actify-card${Ve.useId()}`;return g.jsxs("div",Object.assign({},m,{className:on(ud.root,ud[o],f),children:[g.jsx("div",{className:ud.card,children:d}),i&&g.jsx(_i,{id:h}),o==="elevated"&&g.jsx(sf,{className:`[--md-elevation-level:${u}]`})]}))};Hx.displayName="Actify.Card";const DA=S.createContext(null);let dr=null;function OA(n,a="assertive",i=7e3){dr?dr.announce(n,a,i):(dr=new $A,(typeof IS_REACT_ACT_ENVIRONMENT=="boolean"?IS_REACT_ACT_ENVIRONMENT:typeof jest<"u")?dr.announce(n,a,i):setTimeout((()=>{dr?.isAttached()&&dr?.announce(n,a,i)}),100))}let $A=class{isAttached(){var a;return(a=this.node)===null||a===void 0?void 0:a.isConnected}createLog(a){let i=document.createElement("div");return i.setAttribute("role","log"),i.setAttribute("aria-live",a),i.setAttribute("aria-relevant","additions"),i}destroy(){this.node&&(document.body.removeChild(this.node),this.node=null)}announce(a,i="assertive",o=7e3){var u,d;if(!this.node)return;let f=document.createElement("div");typeof a=="object"?(f.setAttribute("role","img"),f.setAttribute("aria-labelledby",a["aria-labelledby"])):f.textContent=a,i==="assertive"?(u=this.assertiveLog)===null||u===void 0||u.appendChild(f):(d=this.politeLog)===null||d===void 0||d.appendChild(f),a!==""&&setTimeout((()=>{f.remove()}),o)}clear(a){this.node&&(a&&a!=="assertive"||!this.assertiveLog||(this.assertiveLog.innerHTML=""),a&&a!=="polite"||!this.politeLog||(this.politeLog.innerHTML=""))}constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,typeof document<"u"&&(this.node=document.createElement("div"),this.node.dataset.liveAnnouncer="true",Object.assign(this.node.style,{border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"}),this.assertiveLog=this.createLog("assertive"),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog("polite"),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}};if(typeof HTMLTemplateElement<"u"){const n=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild").get;Object.defineProperty(HTMLTemplateElement.prototype,"firstChild",{configurable:!0,enumerable:!0,get:function(){return this.dataset.reactAriaHidden?this.content.firstChild:n.call(this)}})}const LA=S.createContext(!1);function UA(n){let a=(i,o)=>S.useContext(LA)?null:n(i,o);return a.displayName=n.displayName||n.name,S.forwardRef(a)}const BA=new Set(["id"]),VA=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),HA=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),kA=/^(data-.*)$/;function kf(n,a={}){let{labelable:i,isLink:o,propNames:u}=a,d={};for(const f in n)Object.prototype.hasOwnProperty.call(n,f)&&(BA.has(f)||i&&VA.has(f)||o&&HA.has(f)||u?.has(f)||kA.test(f))&&(d[f]=n[f]);return d}const vt=n=>{var a;return(a=n?.ownerDocument)!==null&&a!==void 0?a:document},Jt=n=>n&&"window"in n&&n.window===n?n:vt(n).defaultView||window;let Oa=new Map,kd=new Set;function Tg(){if(typeof window>"u")return;function n(i){return"propertyName"in i}let a=i=>{if(!n(i)||!i.target)return;let o=Oa.get(i.target);if(o&&(o.delete(i.propertyName),o.size===0&&(i.target.removeEventListener("transitioncancel",a),Oa.delete(i.target)),Oa.size===0)){for(let u of kd)u();kd.clear()}};document.body.addEventListener("transitionrun",(i=>{if(!n(i)||!i.target)return;let o=Oa.get(i.target);o||(o=new Set,Oa.set(i.target,o),i.target.addEventListener("transitioncancel",a,{once:!0})),o.add(i.propertyName)})),document.body.addEventListener("transitionend",a)}function kx(n){requestAnimationFrame((()=>{Oa.size===0?n():kd.add(n)}))}typeof document<"u"&&(document.readyState!=="loading"?Tg():document.addEventListener("DOMContentLoaded",Tg));function xs(n){var a;return typeof window<"u"&&window.navigator!=null&&(((a=window.navigator.userAgentData)===null||a===void 0?void 0:a.brands.some((i=>n.test(i.brand))))||n.test(window.navigator.userAgent))}function Yf(n){var a;return typeof window<"u"&&window.navigator!=null&&n.test(((a=window.navigator.userAgentData)===null||a===void 0?void 0:a.platform)||window.navigator.platform)}function yr(n){let a=null;return()=>(a==null&&(a=n()),a)}const mi=yr((function(){return Yf(/^Mac/i)})),YA=yr((function(){return Yf(/^iPhone/i)})),Yx=yr((function(){return Yf(/^iPad/i)||mi()&&navigator.maxTouchPoints>1})),qx=yr((function(){return YA()||Yx()})),qA=yr((function(){return xs(/AppleWebKit/i)&&!GA()})),GA=yr((function(){return xs(/Chrome/i)})),Gx=yr((function(){return xs(/Android/i)})),XA=yr((function(){return xs(/Firefox/i)}));let ka="default",Yd="",es=new WeakMap;function wg(n){if(qx()){if(ka==="default"){const a=vt(n);Yd=a.documentElement.style.webkitUserSelect,a.documentElement.style.webkitUserSelect="none"}ka="disabled"}else if(n instanceof HTMLElement||n instanceof SVGElement){let a="userSelect"in n.style?"userSelect":"webkitUserSelect";es.set(n,n.style[a]),n.style[a]="none"}}function cd(n){if(qx()){if(ka!=="disabled")return;ka="restoring",setTimeout((()=>{kx((()=>{if(ka==="restoring"){const a=vt(n);a.documentElement.style.webkitUserSelect==="none"&&(a.documentElement.style.webkitUserSelect=Yd||""),Yd="",ka="default"}}))}),300)}else if((n instanceof HTMLElement||n instanceof SVGElement)&&n&&es.has(n)){let a=es.get(n),i="userSelect"in n.style?"userSelect":"webkitUserSelect";n.style[i]==="none"&&(n.style[i]=a),n.getAttribute("style")===""&&n.removeAttribute("style"),es.delete(n)}}const Xx=Ve.createContext({register:()=>{}});Xx.displayName="PressResponderContext";function Xa(n){if((function(){if(Po==null){Po=!1;try{document.createElement("div").focus({get preventScroll(){return Po=!0,!0}})}catch{}}return Po})())n.focus({preventScroll:!0});else{let a=(function(i){let o=i.parentNode,u=[],d=document.scrollingElement||document.documentElement;for(;o instanceof HTMLElement&&o!==d;)(o.offsetHeight<o.scrollHeight||o.offsetWidth<o.scrollWidth)&&u.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft}),o=o.parentNode;return d instanceof HTMLElement&&u.push({element:d,scrollTop:d.scrollTop,scrollLeft:d.scrollLeft}),u})(n);n.focus(),(function(i){for(let{element:o,scrollTop:u,scrollLeft:d}of i)o.scrollTop=u,o.scrollLeft=d})(a)}}let Po=null;const Px=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable^="false"])'],PA=Px.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";Px.push('[tabindex]:not([tabindex="-1"]):not([disabled])');function KA(n){return n.matches(PA)}let Kx=class{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(a,i){this.nativeEvent=i,this.target=i.target,this.currentTarget=i.currentTarget,this.relatedTarget=i.relatedTarget,this.bubbles=i.bubbles,this.cancelable=i.cancelable,this.defaultPrevented=i.defaultPrevented,this.eventPhase=i.eventPhase,this.isTrusted=i.isTrusted,this.timeStamp=i.timeStamp,this.type=a}};function Qx(n){let a=S.useRef({isFocused:!1,observer:null});Pr((()=>{const o=a.current;return()=>{o.observer&&(o.observer.disconnect(),o.observer=null)}}),[]);let i=Ft((o=>{n?.(o)}));return S.useCallback((o=>{if(o.target instanceof HTMLButtonElement||o.target instanceof HTMLInputElement||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLSelectElement){a.current.isFocused=!0;let u=o.target,d=f=>{a.current.isFocused=!1,u.disabled&&i(new Kx("blur",f)),a.current.observer&&(a.current.observer.disconnect(),a.current.observer=null)};u.addEventListener("focusout",d,{once:!0}),a.current.observer=new MutationObserver((()=>{if(a.current.isFocused&&u.disabled){var f;(f=a.current.observer)===null||f===void 0||f.disconnect();let m=u===document.activeElement?null:document.activeElement;u.dispatchEvent(new FocusEvent("blur",{relatedTarget:m})),u.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:m}))}})),a.current.observer.observe(u,{attributes:!0,attributeFilter:["disabled"]})}}),[i])}let cs=!1;function Ag(n){for(;n&&!KA(n);)n=n.parentElement;let a=Jt(n),i=a.document.activeElement;if(!i||i===n)return;cs=!0;let o=!1,u=y=>{(y.target===i||o)&&y.stopImmediatePropagation()},d=y=>{(y.target===i||o)&&(y.stopImmediatePropagation(),n||o||(o=!0,Xa(i),h()))},f=y=>{(y.target===n||o)&&y.stopImmediatePropagation()},m=y=>{(y.target===n||o)&&(y.stopImmediatePropagation(),o||(o=!0,Xa(i),h()))};a.addEventListener("blur",u,!0),a.addEventListener("focusout",d,!0),a.addEventListener("focusin",m,!0),a.addEventListener("focus",f,!0);let h=()=>{cancelAnimationFrame(p),a.removeEventListener("blur",u,!0),a.removeEventListener("focusout",d,!0),a.removeEventListener("focusin",m,!0),a.removeEventListener("focus",f,!0),cs=!1,o=!1},p=requestAnimationFrame(h);return h}function QA(n,a){return a.get?a.get.call(n):a.value}function Zx(n,a,i){if(!a.has(n))throw new TypeError("attempted to "+i+" private field on non-instance");return a.get(n)}function ZA(n,a){var i=Zx(n,a,"get");return QA(n,i)}function FA(n,a){if(a.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function JA(n,a,i){FA(n,a),a.set(n,i)}function WA(n,a,i){if(a.set)a.set.call(n,i);else{if(!a.writable)throw new TypeError("attempted to set read only private field");a.value=i}}function jg(n,a,i){var o=Zx(n,a,"set");return WA(n,o,i),i}function qe(n,a){return!(!a||!n)&&n.contains(a)}const hi=(n=document)=>n.activeElement;function Le(n){return n.target}S.createContext({isNative:!0,open:function(n,a){(function(i,o){if(i instanceof HTMLAnchorElement)o(i);else if(i.hasAttribute("data-href")){let u=document.createElement("a");u.href=i.getAttribute("data-href"),i.hasAttribute("data-target")&&(u.target=i.getAttribute("data-target")),i.hasAttribute("data-rel")&&(u.rel=i.getAttribute("data-rel")),i.hasAttribute("data-download")&&(u.download=i.getAttribute("data-download")),i.hasAttribute("data-ping")&&(u.ping=i.getAttribute("data-ping")),i.hasAttribute("data-referrer-policy")&&(u.referrerPolicy=i.getAttribute("data-referrer-policy")),i.appendChild(u),o(u),i.removeChild(u)}})(n,(i=>Pa(i,a)))},useHref:n=>n});function Pa(n,a,i=!0){var o,u;let{metaKey:d,ctrlKey:f,altKey:m,shiftKey:h}=a;XA()&&(!((u=window.event)===null||u===void 0||(o=u.type)===null||o===void 0)&&o.startsWith("key"))&&n.target==="_blank"&&(mi()?d=!0:f=!0);let p=qA()&&mi()&&!Yx()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:d,ctrlKey:f,altKey:m,shiftKey:h}):new MouseEvent("click",{metaKey:d,ctrlKey:f,altKey:m,shiftKey:h,bubbles:!0,cancelable:!0});Pa.isOpening=i,Xa(n),n.dispatchEvent(p),Pa.isOpening=!1}Pa.isOpening=!1;function qf(){let n=S.useRef(new Map),a=S.useCallback(((u,d,f,m)=>{let h=m?.once?(...p)=>{n.current.delete(f),f(...p)}:f;n.current.set(f,{type:d,eventTarget:u,fn:h,options:m}),u.addEventListener(d,h,m)}),[]),i=S.useCallback(((u,d,f,m)=>{var h;let p=((h=n.current.get(f))===null||h===void 0?void 0:h.fn)||f;u.removeEventListener(d,p,m),n.current.delete(f)}),[]),o=S.useCallback((()=>{n.current.forEach(((u,d)=>{i(u.eventTarget,u.type,d,u.options)}))}),[i]);return S.useEffect((()=>o),[o]),{addGlobalListener:a,removeGlobalListener:i,removeAllGlobalListeners:o}}function Fx(n,a){Pr((()=>{if(n&&n.ref&&a)return n.ref.current=a.current,()=>{n.ref&&(n.ref.current=null)}}))}function qd(n){return!(n.mozInputSource!==0||!n.isTrusted)||(Gx()&&n.pointerType?n.type==="click"&&n.buttons===1:n.detail===0&&!n.pointerType)}function IA(n){return!Gx()&&n.width===0&&n.height===0||n.width===1&&n.height===1&&n.pressure===0&&n.detail===0&&n.pointerType==="mouse"}var Ko=new WeakMap;let Qo=class{continuePropagation(){jg(this,Ko,!1)}get shouldStopPropagation(){return ZA(this,Ko)}constructor(a,i,o,u){var d;JA(this,Ko,{writable:!0,value:void 0}),jg(this,Ko,!0);let f=(d=u?.target)!==null&&d!==void 0?d:o.currentTarget;const m=f?.getBoundingClientRect();let h,p,y=0,b=null;o.clientX!=null&&o.clientY!=null&&(p=o.clientX,b=o.clientY),m&&(p!=null&&b!=null?(h=p-m.left,y=b-m.top):(h=m.width/2,y=m.height/2)),this.type=a,this.pointerType=i,this.target=o.currentTarget,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.x=h,this.y=y}};const Cg=Symbol("linkClicked");function e4(n){let{onPress:a,onPressChange:i,onPressStart:o,onPressEnd:u,onPressUp:d,isDisabled:f,isPressed:m,preventFocusOnPress:h,shouldCancelOnPointerExit:p,allowTextSelectionOnPress:y,ref:b,..._}=(function(E){let K=S.useContext(Xx);if(K){let{register:le,...F}=K;E=yt(F,E),le()}return Fx(K,E.ref),E})(n),[j,N]=S.useState(!1),w=S.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:A,removeAllGlobalListeners:D}=qf(),k=Ft(((E,K)=>{let le=w.current;if(f||le.didFirePressStart)return!1;let F=!0;if(le.isTriggeringEvent=!0,o){let oe=new Qo("pressstart",K,E);o(oe),F=oe.shouldStopPropagation}return i&&i(!0),le.isTriggeringEvent=!1,le.didFirePressStart=!0,N(!0),F})),q=Ft(((E,K,le=!0)=>{let F=w.current;if(!F.didFirePressStart)return!1;F.didFirePressStart=!1,F.isTriggeringEvent=!0;let oe=!0;if(u){let z=new Qo("pressend",K,E);u(z),oe=z.shouldStopPropagation}if(i&&i(!1),N(!1),a&&le&&!f){let z=new Qo("press",K,E);a(z),oe&&(oe=z.shouldStopPropagation)}return F.isTriggeringEvent=!1,oe})),Z=Ft(((E,K)=>{let le=w.current;if(f)return!1;if(d){le.isTriggeringEvent=!0;let F=new Qo("pressup",K,E);return d(F),le.isTriggeringEvent=!1,F.shouldStopPropagation}return!0})),V=Ft((E=>{let K=w.current;if(K.isPressed&&K.target){K.didFirePressStart&&K.pointerType!=null&&q(Da(K.target,E),K.pointerType,!1),K.isPressed=!1,K.isOverTarget=!1,K.activePointerId=null,K.pointerType=null,D(),y||cd(K.target);for(let le of K.disposables)le();K.disposables=[]}})),J=Ft((E=>{p&&V(E)})),Q=S.useMemo((()=>{let E=w.current,K={onKeyDown(F){if(dd(F.nativeEvent,F.currentTarget)&&qe(F.currentTarget,Le(F.nativeEvent))){var oe;zg(Le(F.nativeEvent),F.key)&&F.preventDefault();let z=!0;if(!E.isPressed&&!F.repeat){E.target=F.currentTarget,E.isPressed=!0,E.pointerType="keyboard",z=k(F,"keyboard");let W=F.currentTarget,re=R=>{dd(R,W)&&!R.repeat&&qe(W,Le(R))&&E.target&&Z(Da(E.target,R),"keyboard")};A(vt(F.currentTarget),"keyup",pb(re,le),!0)}z&&F.stopPropagation(),F.metaKey&&mi()&&((oe=E.metaKeyEvents)===null||oe===void 0||oe.set(F.key,F.nativeEvent))}else F.key==="Meta"&&(E.metaKeyEvents=new Map)},onClick(F){if((!F||qe(F.currentTarget,Le(F.nativeEvent)))&&F&&F.button===0&&!E.isTriggeringEvent&&!Pa.isOpening){let oe=!0;if(f&&F.preventDefault(),E.ignoreEmulatedMouseEvents||E.isPressed||E.pointerType!=="virtual"&&!qd(F.nativeEvent)){if(E.isPressed&&E.pointerType!=="keyboard"){let z=E.pointerType||F.nativeEvent.pointerType||"virtual";oe=q(Da(F.currentTarget,F),z,!0),E.isOverTarget=!1,V(F)}}else{let z=k(F,"virtual"),W=Z(F,"virtual"),re=q(F,"virtual");oe=z&&W&&re}E.ignoreEmulatedMouseEvents=!1,oe&&F.stopPropagation()}}},le=F=>{var oe;if(E.isPressed&&E.target&&dd(F,E.target)){var z;zg(Le(F),F.key)&&F.preventDefault();let re=Le(F);q(Da(E.target,F),"keyboard",qe(E.target,Le(F))),D(),F.key!=="Enter"&&Gf(E.target)&&qe(E.target,re)&&!F[Cg]&&(F[Cg]=!0,Pa(E.target,F,!1)),E.isPressed=!1,(z=E.metaKeyEvents)===null||z===void 0||z.delete(F.key)}else if(F.key==="Meta"&&(!((oe=E.metaKeyEvents)===null||oe===void 0)&&oe.size)){var W;let re=E.metaKeyEvents;E.metaKeyEvents=void 0;for(let R of re.values())(W=E.target)===null||W===void 0||W.dispatchEvent(new KeyboardEvent("keyup",R))}};if(typeof PointerEvent<"u"){K.onPointerDown=z=>{if(z.button!==0||!qe(z.currentTarget,Le(z.nativeEvent)))return;if(IA(z.nativeEvent))return void(E.pointerType="virtual");E.pointerType=z.pointerType;let W=!0;if(!E.isPressed){E.isPressed=!0,E.isOverTarget=!0,E.activePointerId=z.pointerId,E.target=z.currentTarget,y||wg(E.target),W=k(z,E.pointerType);let re=Le(z.nativeEvent);"releasePointerCapture"in re&&re.releasePointerCapture(z.pointerId),A(vt(z.currentTarget),"pointerup",F,!1),A(vt(z.currentTarget),"pointercancel",oe,!1)}W&&z.stopPropagation()},K.onMouseDown=z=>{if(qe(z.currentTarget,Le(z.nativeEvent))&&z.button===0){if(h){let W=Ag(z.target);W&&E.disposables.push(W)}z.stopPropagation()}},K.onPointerUp=z=>{qe(z.currentTarget,Le(z.nativeEvent))&&E.pointerType!=="virtual"&&z.button===0&&Z(z,E.pointerType||z.pointerType)},K.onPointerEnter=z=>{z.pointerId===E.activePointerId&&E.target&&!E.isOverTarget&&E.pointerType!=null&&(E.isOverTarget=!0,k(Da(E.target,z),E.pointerType))},K.onPointerLeave=z=>{z.pointerId===E.activePointerId&&E.target&&E.isOverTarget&&E.pointerType!=null&&(E.isOverTarget=!1,q(Da(E.target,z),E.pointerType,!1),J(z))};let F=z=>{if(z.pointerId===E.activePointerId&&E.isPressed&&z.button===0&&E.target){if(qe(E.target,Le(z))&&E.pointerType!=null){let W=!1,re=setTimeout((()=>{E.isPressed&&E.target instanceof HTMLElement&&(W?V(z):(Xa(E.target),E.target.click()))}),80);A(z.currentTarget,"click",(()=>W=!0),!0),E.disposables.push((()=>clearTimeout(re)))}else V(z);E.isOverTarget=!1}},oe=z=>{V(z)};K.onDragStart=z=>{qe(z.currentTarget,Le(z.nativeEvent))&&V(z)}}else{K.onMouseDown=z=>{if(!(z.button!==0||!qe(z.currentTarget,Le(z.nativeEvent)))){if(E.ignoreEmulatedMouseEvents)return void z.stopPropagation();if(E.isPressed=!0,E.isOverTarget=!0,E.target=z.currentTarget,E.pointerType=qd(z.nativeEvent)?"virtual":"mouse",SE.flushSync((()=>k(z,E.pointerType)))&&z.stopPropagation(),h){let W=Ag(z.target);W&&E.disposables.push(W)}A(vt(z.currentTarget),"mouseup",F,!1)}},K.onMouseEnter=z=>{if(!qe(z.currentTarget,Le(z.nativeEvent)))return;let W=!0;E.isPressed&&!E.ignoreEmulatedMouseEvents&&E.pointerType!=null&&(E.isOverTarget=!0,W=k(z,E.pointerType)),W&&z.stopPropagation()},K.onMouseLeave=z=>{if(!qe(z.currentTarget,Le(z.nativeEvent)))return;let W=!0;E.isPressed&&!E.ignoreEmulatedMouseEvents&&E.pointerType!=null&&(E.isOverTarget=!1,W=q(z,E.pointerType,!1),J(z)),W&&z.stopPropagation()},K.onMouseUp=z=>{qe(z.currentTarget,Le(z.nativeEvent))&&(E.ignoreEmulatedMouseEvents||z.button!==0||Z(z,E.pointerType||"mouse"))};let F=z=>{z.button===0&&(E.ignoreEmulatedMouseEvents?E.ignoreEmulatedMouseEvents=!1:(E.target&&E.target.contains(z.target)&&E.pointerType!=null||V(z),E.isOverTarget=!1))};K.onTouchStart=z=>{if(!qe(z.currentTarget,Le(z.nativeEvent)))return;let W=(function(re){const{targetTouches:R}=re;return R.length>0?R[0]:null})(z.nativeEvent);W&&(E.activePointerId=W.identifier,E.ignoreEmulatedMouseEvents=!0,E.isOverTarget=!0,E.isPressed=!0,E.target=z.currentTarget,E.pointerType="touch",y||wg(E.target),k(fr(E.target,z),E.pointerType)&&z.stopPropagation(),A(Jt(z.currentTarget),"scroll",oe,!0))},K.onTouchMove=z=>{if(!qe(z.currentTarget,Le(z.nativeEvent)))return;if(!E.isPressed)return void z.stopPropagation();let W=Ng(z.nativeEvent,E.activePointerId),re=!0;W&&Mg(W,z.currentTarget)?E.isOverTarget||E.pointerType==null||(E.isOverTarget=!0,re=k(fr(E.target,z),E.pointerType)):E.isOverTarget&&E.pointerType!=null&&(E.isOverTarget=!1,re=q(fr(E.target,z),E.pointerType,!1),J(fr(E.target,z))),re&&z.stopPropagation()},K.onTouchEnd=z=>{if(!qe(z.currentTarget,Le(z.nativeEvent)))return;if(!E.isPressed)return void z.stopPropagation();let W=Ng(z.nativeEvent,E.activePointerId),re=!0;W&&Mg(W,z.currentTarget)&&E.pointerType!=null?(Z(fr(E.target,z),E.pointerType),re=q(fr(E.target,z),E.pointerType)):E.isOverTarget&&E.pointerType!=null&&(re=q(fr(E.target,z),E.pointerType,!1)),re&&z.stopPropagation(),E.isPressed=!1,E.activePointerId=null,E.isOverTarget=!1,E.ignoreEmulatedMouseEvents=!0,E.target&&!y&&cd(E.target),D()},K.onTouchCancel=z=>{qe(z.currentTarget,Le(z.nativeEvent))&&(z.stopPropagation(),E.isPressed&&V(fr(E.target,z)))};let oe=z=>{E.isPressed&&qe(Le(z),E.target)&&V({currentTarget:E.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};K.onDragStart=z=>{qe(z.currentTarget,Le(z.nativeEvent))&&V(z)}}return K}),[A,f,h,D,y,V,J,q,k,Z]);return S.useEffect((()=>{let E=w.current;return()=>{var K;y||cd((K=E.target)!==null&&K!==void 0?K:void 0);for(let le of E.disposables)le();E.disposables=[]}}),[y]),{isPressed:m||j,pressProps:yt(_,Q)}}function Gf(n){return n.tagName==="A"&&n.hasAttribute("href")}function dd(n,a){const{key:i,code:o}=n,u=a,d=u.getAttribute("role");return!(i!=="Enter"&&i!==" "&&i!=="Spacebar"&&o!=="Space"||u instanceof Jt(u).HTMLInputElement&&!Jx(u,i)||u instanceof Jt(u).HTMLTextAreaElement||u.isContentEditable||(d==="link"||!d&&Gf(u))&&i!=="Enter")}function Ng(n,a){const i=n.changedTouches;for(let o=0;o<i.length;o++){const u=i[o];if(u.identifier===a)return u}return null}function fr(n,a){let i=0,o=0;return a.targetTouches&&a.targetTouches.length===1&&(i=a.targetTouches[0].clientX,o=a.targetTouches[0].clientY),{currentTarget:n,shiftKey:a.shiftKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,clientX:i,clientY:o}}function Da(n,a){let i=a.clientX,o=a.clientY;return{currentTarget:n,shiftKey:a.shiftKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,clientX:i,clientY:o}}function Mg(n,a){let i=a.getBoundingClientRect();return d=(function(f){let m=0,h=0;return f.width!==void 0?m=f.width/2:f.radiusX!==void 0&&(m=f.radiusX),f.height!==void 0?h=f.height/2:f.radiusY!==void 0&&(h=f.radiusY),{top:f.clientY-h,right:f.clientX+m,bottom:f.clientY+h,left:f.clientX-m}})(n),!((u=i).left>d.right||d.left>u.right||u.top>d.bottom||d.top>u.bottom);var u,d}function zg(n,a){return n instanceof HTMLInputElement?!Jx(n,a):(function(i){return!(i instanceof HTMLInputElement||(i instanceof HTMLButtonElement?i.type==="submit"||i.type==="reset":Gf(i)))})(n)}const t4=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Jx(n,a){return n.type==="checkbox"||n.type==="radio"?a===" ":t4.has(n.type)}let Qr=null,Gd=new Set,ni=new Map,qr=!1,Xd=!1;const n4={Tab:!0,Escape:!0};function _s(n,a){for(let i of Gd)i(n,a)}function ds(n){qr=!0,(function(a){return!(a.metaKey||!mi()&&a.altKey||a.ctrlKey||a.key==="Control"||a.key==="Shift"||a.key==="Meta")})(n)&&(Qr="keyboard",_s("keyboard",n))}function Zt(n){Qr="pointer",n.type!=="mousedown"&&n.type!=="pointerdown"||(qr=!0,_s("pointer",n))}function Wx(n){qd(n)&&(qr=!0,Qr="virtual")}function Ix(n){n.target!==window&&n.target!==document&&!cs&&n.isTrusted&&(qr||Xd||(Qr="virtual",_s("virtual",n)),qr=!1,Xd=!1)}function e0(){cs||(qr=!1,Xd=!0)}function Pd(n){if(typeof window>"u"||ni.get(Jt(n)))return;const a=Jt(n),i=vt(n);let o=a.HTMLElement.prototype.focus;a.HTMLElement.prototype.focus=function(){qr=!0,o.apply(this,arguments)},i.addEventListener("keydown",ds,!0),i.addEventListener("keyup",ds,!0),i.addEventListener("click",Wx,!0),a.addEventListener("focus",Ix,!0),a.addEventListener("blur",e0,!1),typeof PointerEvent<"u"?(i.addEventListener("pointerdown",Zt,!0),i.addEventListener("pointermove",Zt,!0),i.addEventListener("pointerup",Zt,!0)):(i.addEventListener("mousedown",Zt,!0),i.addEventListener("mousemove",Zt,!0),i.addEventListener("mouseup",Zt,!0)),a.addEventListener("beforeunload",(()=>{t0(n)}),{once:!0}),ni.set(a,{focus:o})}const t0=(n,a)=>{const i=Jt(n),o=vt(n);a&&o.removeEventListener("DOMContentLoaded",a),ni.has(i)&&(i.HTMLElement.prototype.focus=ni.get(i).focus,o.removeEventListener("keydown",ds,!0),o.removeEventListener("keyup",ds,!0),o.removeEventListener("click",Wx,!0),i.removeEventListener("focus",Ix,!0),i.removeEventListener("blur",e0,!1),typeof PointerEvent<"u"?(o.removeEventListener("pointerdown",Zt,!0),o.removeEventListener("pointermove",Zt,!0),o.removeEventListener("pointerup",Zt,!0)):(o.removeEventListener("mousedown",Zt,!0),o.removeEventListener("mousemove",Zt,!0),o.removeEventListener("mouseup",Zt,!0)),ni.delete(i))};function r4(n){const a=vt(n);let i;return a.readyState!=="loading"?Pd(n):(i=()=>{Pd(n)},a.addEventListener("DOMContentLoaded",i)),()=>t0(n,i)}function n0(){return Qr!=="pointer"}function a4(){return Qr}function l4(n){Qr=n,_s(n,null)}typeof document<"u"&&r4();const i4=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function o4(n,a,i){Pd(),S.useEffect((()=>{let o=(u,d)=>{(function(f,m,h){let p=vt(h?.target);const y=typeof window<"u"?Jt(h?.target).HTMLInputElement:HTMLInputElement,b=typeof window<"u"?Jt(h?.target).HTMLTextAreaElement:HTMLTextAreaElement,_=typeof window<"u"?Jt(h?.target).HTMLElement:HTMLElement,j=typeof window<"u"?Jt(h?.target).KeyboardEvent:KeyboardEvent;return!((f=f||p.activeElement instanceof y&&!i4.has(p.activeElement.type)||p.activeElement instanceof b||p.activeElement instanceof _&&p.activeElement.isContentEditable)&&m==="keyboard"&&h instanceof j&&!n4[h.key])})(!!i?.isTextInput,u,d)&&n(n0())};return Gd.add(o),()=>{Gd.delete(o)}}),a)}function s4(n){const a=vt(n),i=hi(a);if(a4()==="virtual"){let o=i;kx((()=>{hi(a)===o&&n.isConnected&&Xa(n)}))}else Xa(n)}function r0(n){let{isDisabled:a,onFocus:i,onBlur:o,onFocusChange:u}=n;const d=S.useCallback((h=>{if(h.target===h.currentTarget)return o&&o(h),u&&u(!1),!0}),[o,u]),f=Qx(d),m=S.useCallback((h=>{const p=vt(h.target),y=p?hi(p):hi();h.target===h.currentTarget&&y===Le(h.nativeEvent)&&(i&&i(h),u&&u(!0),f(h))}),[u,i,f]);return{focusProps:{onFocus:!a&&(i||u||o)?m:void 0,onBlur:a||!o&&!u?void 0:d}}}function Rg(n){if(!n)return;let a=!0;return i=>{let o={...i,preventDefault(){i.preventDefault()},isDefaultPrevented:()=>i.isDefaultPrevented(),stopPropagation(){a?console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."):a=!0},continuePropagation(){a=!1},isPropagationStopped:()=>a};n(o),a&&i.stopPropagation()}}function u4(n){return{keyboardProps:n.isDisabled?{}:{onKeyDown:Rg(n.onKeyDown),onKeyUp:Rg(n.onKeyUp)}}}let a0=Ve.createContext(null);Ve.forwardRef((function(n,a){let{children:i,...o}=n,u={...o,ref:vb(a)};return Ve.createElement(a0.Provider,{value:u},i)}));function l0(n,a){let{focusProps:i}=r0(n),{keyboardProps:o}=u4(n),u=yt(i,o),d=(function(p){let y=S.useContext(a0)||{};Fx(y,p);let{ref:b,..._}=y;return _})(a),f=n.isDisabled?{}:d,m=S.useRef(n.autoFocus);S.useEffect((()=>{m.current&&a.current&&s4(a.current),m.current=!1}),[a]);let h=n.excludeFromTabOrder?-1:0;return n.isDisabled&&(h=void 0),{focusableProps:yt({...u,tabIndex:h},f)}}function i0(n,a){let i,{elementType:o="button",isDisabled:u,onPress:d,onPressStart:f,onPressEnd:m,onPressUp:h,onPressChange:p,preventFocusOnPress:y,allowFocusWhenDisabled:b,onClick:_,href:j,target:N,rel:w,type:A="button"}=n;i=o==="button"?{type:A,disabled:u}:{role:"button",href:o!=="a"||u?void 0:j,target:o==="a"?N:void 0,type:o==="input"?A:void 0,disabled:o==="input"?u:void 0,"aria-disabled":u&&o!=="input"?u:void 0,rel:o==="a"?w:void 0};let{pressProps:D,isPressed:k}=e4({onPressStart:f,onPressEnd:m,onPressChange:p,onPress:d,onPressUp:h,isDisabled:u,preventFocusOnPress:y,ref:a}),{focusableProps:q}=l0(n,a);b&&(q.tabIndex=u?-1:q.tabIndex);let Z=yt(q,D,kf(n,{labelable:!0}));return{isPressed:k,buttonProps:yt(i,Z,{"aria-haspopup":n["aria-haspopup"],"aria-expanded":n["aria-expanded"],"aria-controls":n["aria-controls"],"aria-pressed":n["aria-pressed"],"aria-current":n["aria-current"],onClick:V=>{_&&(_(V),console.warn("onClick is deprecated, please use onPress"))}})}}function c4(n){let{isDisabled:a,onBlurWithin:i,onFocusWithin:o,onFocusWithinChange:u}=n,d=S.useRef({isFocusWithin:!1}),{addGlobalListener:f,removeAllGlobalListeners:m}=qf(),h=S.useCallback((b=>{b.currentTarget.contains(b.target)&&d.current.isFocusWithin&&!b.currentTarget.contains(b.relatedTarget)&&(d.current.isFocusWithin=!1,m(),i&&i(b),u&&u(!1))}),[i,u,d,m]),p=Qx(h),y=S.useCallback((b=>{if(!b.currentTarget.contains(b.target))return;const _=vt(b.target),j=hi(_);if(!d.current.isFocusWithin&&j===Le(b.nativeEvent)){o&&o(b),u&&u(!0),d.current.isFocusWithin=!0,p(b);let N=b.currentTarget;f(_,"focus",(w=>{if(d.current.isFocusWithin&&!qe(N,w.target)){let A=new Kx("blur",new _.defaultView.FocusEvent("blur",{relatedTarget:w.target}));A.target=N,A.currentTarget=N,h(A)}}),{capture:!0})}}),[o,u,p,f,h]);return a?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:y,onBlur:h}}}function Si(n={}){let{autoFocus:a=!1,isTextInput:i,within:o}=n,u=S.useRef({isFocused:!1,isFocusVisible:a||n0()}),[d,f]=S.useState(!1),[m,h]=S.useState((()=>u.current.isFocused&&u.current.isFocusVisible)),p=S.useCallback((()=>h(u.current.isFocused&&u.current.isFocusVisible)),[]),y=S.useCallback((j=>{u.current.isFocused=j,f(j),p()}),[p]);o4((j=>{u.current.isFocusVisible=j,p()}),[],{isTextInput:i});let{focusProps:b}=r0({isDisabled:o,onFocusChange:y}),{focusWithinProps:_}=c4({isDisabled:!o,onFocusWithinChange:y});return{isFocused:d,isFocusVisible:m,focusProps:o?_:b}}let fs=!1,fd=0;function Kd(){fs=!0,setTimeout((()=>{fs=!1}),50)}function Dg(n){n.pointerType==="touch"&&Kd()}function d4(){if(typeof document<"u")return typeof PointerEvent<"u"?document.addEventListener("pointerup",Dg):document.addEventListener("touchend",Kd),fd++,()=>{fd--,fd>0||(typeof PointerEvent<"u"?document.removeEventListener("pointerup",Dg):document.removeEventListener("touchend",Kd))}}function f4(n){let{onHoverStart:a,onHoverChange:i,onHoverEnd:o,isDisabled:u}=n,[d,f]=S.useState(!1),m=S.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;S.useEffect(d4,[]);let{addGlobalListener:h,removeAllGlobalListeners:p}=qf(),{hoverProps:y,triggerHoverEnd:b}=S.useMemo((()=>{let _=(w,A)=>{if(m.pointerType=A,u||A==="touch"||m.isHovered||!w.currentTarget.contains(w.target))return;m.isHovered=!0;let D=w.currentTarget;m.target=D,h(vt(w.target),"pointerover",(k=>{m.isHovered&&m.target&&!qe(m.target,k.target)&&j(k,k.pointerType)}),{capture:!0}),a&&a({type:"hoverstart",target:D,pointerType:A}),i&&i(!0),f(!0)},j=(w,A)=>{let D=m.target;m.pointerType="",m.target=null,A!=="touch"&&m.isHovered&&D&&(m.isHovered=!1,p(),o&&o({type:"hoverend",target:D,pointerType:A}),i&&i(!1),f(!1))},N={};return typeof PointerEvent<"u"?(N.onPointerEnter=w=>{fs&&w.pointerType==="mouse"||_(w,w.pointerType)},N.onPointerLeave=w=>{!u&&w.currentTarget.contains(w.target)&&j(w,w.pointerType)}):(N.onTouchStart=()=>{m.ignoreEmulatedMouseEvents=!0},N.onMouseEnter=w=>{m.ignoreEmulatedMouseEvents||fs||_(w,"mouse"),m.ignoreEmulatedMouseEvents=!1},N.onMouseLeave=w=>{!u&&w.currentTarget.contains(w.target)&&j(w,"mouse")}),{hoverProps:N,triggerHoverEnd:j}}),[a,i,o,u,m,h,p]);return S.useEffect((()=>{u&&b({currentTarget:m.target},m.pointerType)}),[u]),{hoverProps:y,isHovered:d}}const m4=new Set(["form","formAction","formEncType","formMethod","formNoValidate","formTarget","name","value"]),h4=S.createContext({}),o0=UA((function(n,a){[n,a]=UE(n,a,h4);let i=n=(function(D){return D.isPending&&(D.onPress=void 0,D.onPressStart=void 0,D.onPressEnd=void 0,D.onPressChange=void 0,D.onPressUp=void 0,D.onKeyDown=void 0,D.onKeyUp=void 0,D.onClick=void 0,D.href=void 0),D})(n),{isPending:o}=i,{buttonProps:u,isPressed:d}=i0(n,a),{focusProps:f,isFocused:m,isFocusVisible:h}=Si(n),{hoverProps:p,isHovered:y}=f4({...n,isDisabled:n.isDisabled||o}),b={isHovered:y,isPressed:(i.isPressed||d)&&!o,isFocused:m,isFocusVisible:h,isDisabled:n.isDisabled||!1,isPending:o!=null&&o},_=$E({...n,values:b,defaultClassName:"react-aria-Button"}),j=qa(u.id),N=qa(),w=u["aria-labelledby"];o&&(w?w=`${w} ${N}`:u["aria-label"]&&(w=`${j} ${N}`));let A=S.useRef(o);return S.useEffect((()=>{let D={"aria-labelledby":w||j};(!A.current&&m&&o||A.current&&m&&!o)&&OA(D,"assertive"),A.current=o}),[o,m,w,j]),Ve.createElement("button",{...kf(n,{propNames:m4}),...yt(u,f,p),..._,type:u.type==="submit"&&o?"button":u.type,id:j,ref:a,"aria-labelledby":w,slot:n.slot||void 0,"aria-disabled":o?"true":u["aria-disabled"],"data-disabled":n.isDisabled||void 0,"data-pressed":b.isPressed||void 0,"data-hovered":y||void 0,"data-focused":m||void 0,"data-pending":o||void 0,"data-focus-visible":h||void 0},Ve.createElement(DA.Provider,{value:{id:N}},_.children))}));var p4={"focus-ring":"focusring-module_focus-ring__jYxTQ"};en(`@keyframes focusring-module_outward-grow__Qdj-A {\r
  from {\r
    outline-width: 0;\r
  }\r
  to {\r
    outline-width: var(--md-focus-ring-active-width, 8px);\r
  }\r
}\r
@keyframes focusring-module_outward-shrink__Rb3ur {\r
  from {\r
    outline-width: var(--md-focus-ring-active-width, 8px);\r
  }\r
}\r
@keyframes focusring-module_inward-grow__g-09Q {\r
  from {\r
    border-width: 0;\r
  }\r
  to {\r
    border-width: var(--md-focus-ring-active-width, 8px);\r
  }\r
}\r
@keyframes focusring-module_inward-shrink__ww4sN {\r
  from {\r
    border-width: var(--md-focus-ring-active-width, 8px);\r
  }\r
}\r
.focusring-module_focus-ring__jYxTQ {\r
  z-index: 1;\r
  animation-delay: 0s, calc(var(--md-focus-ring-duration, 600ms) * 0.25);\r
  animation-duration: calc(var(--md-focus-ring-duration, 600ms) * 0.25),\r
    calc(var(--md-focus-ring-duration, 600ms) * 0.75);\r
  animation-timing-function: cubic-bezier(0.2, 0, 0, 1);\r
  box-sizing: border-box;\r
  color: var(\r
    --md-focus-ring-color,\r
    var(--md-sys-color-secondary, #625b71)\r
  );\r
  pointer-events: none;\r
  position: absolute;\r
  &:not([inward]) {\r
    animation-name: focusring-module_outward-grow__Qdj-A, focusring-module_outward-shrink__Rb3ur;\r
    border-radius: inherit;\r
    inset: calc(-1 * var(--md-focus-ring-outward-offset, 2px));\r
    outline: var(--md-focus-ring-width, 3px) solid currentColor;\r
  }\r
  &[inward] {\r
    animation-name: focusring-module_inward-grow__g-09Q, focusring-module_inward-shrink__ww4sN;\r
    border-radius: calc(\r
      var(--md-focus-ring-shape, inherit) - var(--md-focus-ring-inward-offset, 0px)\r
    );\r
    border: var(--md-focus-ring-width, 3px) solid currentColor;\r
    inset: var(--md-focus-ring-inward-offset, 0px);\r
  }\r
  @media (prefers-reduced-motion) {\r
    .focusring-module_a-focus-ring__p-PXU {\r
      animation: none;\r
    }\r
  }\r
}\r
`);const Ss=({as:n="span",type:a="outward",style:i,className:o})=>g.jsx(n,{style:i,className:on(p4["focus-ring"],o),inward:a==="inward"?"true":void 0});Ss.displayName="Actify.FocusRing";var Br={btn:"button-module_btn__sxcxC",disabled:"button-module_disabled__obywO",button:"button-module_button__vQZFj",touch:"button-module_touch__Cec8z",outline:"button-module_outline__rI4up",background:"button-module_background__erbWE",label:"button-module_label__rzPeC"};en(`.button-module_btn__sxcxC {\r
  border: 0 solid #e5e7eb;\r
  appearance: button;\r
  background-color: transparent;\r
  background-image: none;\r
\r
  border-start-start-radius: var(--_container-shape-start-start);\r
  border-start-end-radius: var(--_container-shape-start-end);\r
  border-end-start-radius: var(--_container-shape-end-start);\r
  border-end-end-radius: var(--_container-shape-end-end);\r
  box-sizing: border-box;\r
  cursor: pointer;\r
  display: inline-flex;\r
  gap: 8px;\r
  min-height: var(--_container-height);\r
  outline: none;\r
  padding-block: calc(\r
    (\r
        var(--_container-height) -\r
          max(var(--_label-text-line-height), var(--_icon-size))\r
      ) / 2\r
  );\r
  padding-inline-start: var(--_leading-space);\r
  padding-inline-end: var(--_trailing-space);\r
  place-content: center;\r
  place-items: center;\r
  position: relative;\r
  font-family: var(--_label-text-font);\r
  font-size: var(--_label-text-size);\r
  line-height: var(--_label-text-line-height);\r
  font-weight: var(--_label-text-weight);\r
  text-overflow: ellipsis;\r
  text-wrap: nowrap;\r
  user-select: none;\r
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r
  vertical-align: top;\r
  --md-ripple-hover-color: var(--_hover-state-layer-color);\r
  --md-ripple-pressed-color: var(--_pressed-state-layer-color);\r
  --md-ripple-hover-opacity: var(--_hover-state-layer-opacity);\r
  --md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);\r
}\r
\r
.button-module_disabled__obywO {\r
  cursor: default;\r
  pointer-events: none;\r
}\r
\r
.button-module_button__vQZFj {\r
  text-overflow: inherit;\r
  border-radius: inherit;\r
  cursor: inherit;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  border: none;\r
  outline: none;\r
  appearance: none;\r
  vertical-align: middle;\r
  background: rgba(0, 0, 0, 0);\r
  text-decoration: none;\r
  min-width: calc(64px - var(--_leading-space) - var(--_trailing-space));\r
  width: 100%;\r
  z-index: 0;\r
  height: 100%;\r
  font: inherit;\r
  color: var(--_label-text-color);\r
  padding: 0px;\r
  gap: inherit;\r
  text-transform: inherit;\r
}\r
\r
.button-module_touch__Cec8z {\r
  position: absolute;\r
  top: 50%;\r
  height: 48px;\r
  left: 0px;\r
  right: 0px;\r
  transform: translateY(-50%);\r
}\r
\r
.button-module_outline__rI4up {\r
  outline-style: none;\r
  border-width: var(--_outline-width);\r
  inset: 0px;\r
  border-style: solid;\r
  position: absolute;\r
  box-sizing: border-box;\r
  border-color: var(--_outline-color);\r
  border-radius: inherit;\r
}\r
\r
.button-module_background__erbWE {\r
  background-color: var(--_container-color);\r
  border-radius: inherit;\r
  inset: 0;\r
  position: absolute;\r
}\r
.button-module_disabled__obywO .button-module_background__erbWE {\r
  opacity: var(--_disabled-container-opacity);\r
  background-color: var(--_disabled-container-color);\r
}\r
\r
.button-module_label__rzPeC {\r
  text-overflow: inherit;\r
  overflow: hidden;\r
  display: inherit;\r
  gap: inherit;\r
  z-index: 1;\r
  align-items: inherit;\r
}\r
.button-module_disabled__obywO .button-module_label__rzPeC {\r
  color: var(--_disabled-label-text-color);\r
  opacity: var(--_disabled-label-text-opacity);\r
}\r
`);var v4={secondary:"color-module_secondary__gpdVQ",tertiary:"color-module_tertiary__zPmbq",error:"color-module_error__VplyG"};en(`.color-module_secondary__gpdVQ {\r
  --md-sys-color-primary: var(--md-sys-color-secondary);\r
}\r
.color-module_tertiary__zPmbq {\r
  --md-sys-color-primary: var(--md-sys-color-tertiary);\r
}\r
.color-module_error__VplyG {\r
  --md-sys-color-primary: var(--md-sys-color-error);\r
}\r
`);var y4={filled:"variant-module_filled__rQH-3",elevated:"variant-module_elevated__F69Jv",outlined:"variant-module_outlined__nvVIW",tonal:"variant-module_tonal__ZqJTa",text:"variant-module_text__oL9YN"};en(`.variant-module_filled__rQH-3 {\r
  --_container-color: var(\r
    --md-filled-button-container-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_container-elevation: var(--md-filled-button-container-elevation, 0);\r
  --_container-height: var(--md-filled-button-container-height, 40px);\r
  --_container-shadow-color: var(\r
    --md-filled-button-container-shadow-color,\r
    var(--md-sys-color-shadow, #000000)\r
  );\r
  --_container-shape: var(--md-filled-button-container-shape, 9999px);\r
  --_disabled-container-color: var(\r
    --md-filled-button-disabled-container-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-container-elevation: var(\r
    --md-filled-button-disabled-container-elevation,\r
    0\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-filled-button-disabled-container-opacity,\r
    0.12\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-filled-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-filled-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_focus-container-elevation: var(\r
    --md-filled-button-focus-container-elevation,\r
    0\r
  );\r
  --_focus-label-text-color: var(\r
    --md-filled-button-focus-label-text-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_hover-container-elevation: var(\r
    --md-filled-button-hover-container-elevation,\r
    1\r
  );\r
  --_hover-label-text-color: var(\r
    --md-filled-button-hover-label-text-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-filled-button-hover-state-layer-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-filled-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-filled-button-label-text-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_label-text-font: var(\r
    --md-filled-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-filled-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-filled-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-filled-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_pressed-container-elevation: var(\r
    --md-filled-button-pressed-container-elevation,\r
    0\r
  );\r
  --_pressed-label-text-color: var(\r
    --md-filled-button-pressed-label-text-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-filled-button-pressed-state-layer-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-filled-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-filled-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);\r
  --_focus-icon-color: var(\r
    --md-filled-button-focus-icon-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_hover-icon-color: var(\r
    --md-filled-button-hover-icon-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_icon-color: var(\r
    --md-filled-button-icon-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_icon-size: var(--md-filled-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-filled-button-pressed-icon-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_leading-space: var(--md-filled-button-leading-space, 24px);\r
  --_trailing-space: var(--md-filled-button-trailing-space, 24px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-filled-button-with-leading-icon-leading-space,\r
    16px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-filled-button-with-leading-icon-trailing-space,\r
    24px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-filled-button-with-trailing-icon-leading-space,\r
    24px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-filled-button-with-trailing-icon-trailing-space,\r
    16px\r
  );\r
  --_container-shape-start-start: var(\r
    --md-filled-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-filled-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-filled-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-filled-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
.variant-module_elevated__F69Jv {\r
  --_container-color: var(\r
    --md-elevated-button-container-color,\r
    var(--md-sys-color-surface-container-low, f7f2fa)\r
  );\r
  --_container-elevation: var(--md-elevated-button-container-elevation, 1);\r
  --_container-height: var(--md-elevated-button-container-height, 40px);\r
  --_container-shadow-color: var(\r
    --md-elevated-button-container-shadow-color,\r
    var(--md-sys-color-shadow, #000000)\r
  );\r
  --_container-shape: var(--md-elevated-button-container-shape, 9999px);\r
  --_disabled-container-color: var(\r
    --md-elevated-button-disabled-container-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-container-elevation: var(\r
    --md-elevated-button-disabled-container-elevation,\r
    0\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-elevated-button-disabled-container-opacity,\r
    0.12\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-elevated-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-elevated-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_focus-container-elevation: var(\r
    --md-elevated-button-focus-container-elevation,\r
    1\r
  );\r
  --_focus-label-text-color: var(\r
    --md-elevated-button-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-container-elevation: var(\r
    --md-elevated-button-hover-container-elevation,\r
    2\r
  );\r
  --_hover-label-text-color: var(\r
    --md-elevated-button-hover-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-elevated-button-hover-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-elevated-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-elevated-button-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_label-text-font: var(\r
    --md-elevated-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-elevated-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-elevated-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-elevated-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_pressed-container-elevation: var(\r
    --md-elevated-button-pressed-container-elevation,\r
    1\r
  );\r
  --_pressed-label-text-color: var(\r
    --md-elevated-button-pressed-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-elevated-button-pressed-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-elevated-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-elevated-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(\r
    --md-elevated-button-disabled-icon-opacity,\r
    0.38\r
  );\r
  --_focus-icon-color: var(\r
    --md-elevated-button-focus-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-icon-color: var(\r
    --md-elevated-button-hover-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-color: var(\r
    --md-elevated-button-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-size: var(--md-elevated-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-elevated-button-pressed-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_leading-space: var(--md-elevated-button-leading-space, 24px);\r
  --_trailing-space: var(--md-elevated-button-trailing-space, 24px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-elevated-button-with-leading-icon-leading-space,\r
    16px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-elevated-button-with-leading-icon-trailing-space,\r
    24px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-elevated-button-with-trailing-icon-leading-space,\r
    24px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-elevated-button-with-trailing-icon-trailing-space,\r
    16px\r
  );\r
  --_container-shape-start-start: var(\r
    --md-elevated-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-elevated-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-elevated-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-elevated-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
.variant-module_outlined__nvVIW {\r
  --_container-height: var(--md-outlined-button-container-height, 40px);\r
  --_container-shape: var(--md-outlined-button-container-shape, 9999px);\r
  --_disabled-label-text-color: var(\r
    --md-outlined-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-outlined-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-outline-color: var(\r
    --md-outlined-button-disabled-outline-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-outline-opacity: var(\r
    --md-outlined-button-disabled-outline-opacity,\r
    0.12\r
  );\r
  --_focus-label-text-color: var(\r
    --md-outlined-button-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-outlined-button-hover-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-outlined-button-hover-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-outlined-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-outlined-button-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_label-text-font: var(\r
    --md-outlined-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-outlined-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-outlined-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-outlined-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_outline-color: var(\r
    --md-outlined-button-outline-color,\r
    var(--md-sys-color-outline,#79747e)\r
  );\r
  --_outline-width: var(--md-outlined-button-outline-width, 1px);\r
  --_pressed-label-text-color: var(\r
    --md-outlined-button-pressed-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-outline-color: var(\r
    --md-outlined-button-pressed-outline-color,\r
    var(--md-sys-color-outline, #79747e)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-outlined-button-pressed-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-outlined-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-outlined-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(\r
    --md-outlined-button-disabled-icon-opacity,\r
    0.38\r
  );\r
  --_focus-icon-color: var(\r
    --md-outlined-button-focus-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-icon-color: var(\r
    --md-outlined-button-hover-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-color: var(\r
    --md-outlined-button-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-size: var(--md-outlined-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-outlined-button-pressed-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_leading-space: var(--md-outlined-button-leading-space, 24px);\r
  --_trailing-space: var(--md-outlined-button-trailing-space, 24px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-outlined-button-with-leading-icon-leading-space,\r
    16px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-outlined-button-with-leading-icon-trailing-space,\r
    24px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-outlined-button-with-trailing-icon-leading-space,\r
    24px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-outlined-button-with-trailing-icon-trailing-space,\r
    16px\r
  );\r
  --_container-color: none;\r
  --_disabled-container-color: none;\r
  --_disabled-container-opacity: 0;\r
  --_container-shape-start-start: var(\r
    --md-outlined-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-outlined-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-outlined-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-outlined-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
.variant-module_tonal__ZqJTa {\r
  --_container-color: var(\r
    --md-filled-tonal-button-container-color,\r
    var(--md-sys-color-secondary-container, #e8def8)\r
  );\r
  --_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);\r
  --_container-height: var(--md-filled-tonal-button-container-height, 40px);\r
  --_container-shadow-color: var(\r
    --md-filled-tonal-button-container-shadow-color,\r
    var(--md-sys-color-shadow, #000000)\r
  );\r
  --_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);\r
  --_disabled-container-color: var(\r
    --md-filled-tonal-button-disabled-container-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-container-elevation: var(\r
    --md-filled-tonal-button-disabled-container-elevation,\r
    0\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-filled-tonal-button-disabled-container-opacity,\r
    0.12\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-filled-tonal-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-filled-tonal-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_focus-container-elevation: var(\r
    --md-filled-tonal-button-focus-container-elevation,\r
    0\r
  );\r
  --_focus-label-text-color: var(\r
    --md-filled-tonal-button-focus-label-text-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_hover-container-elevation: var(\r
    --md-filled-tonal-button-hover-container-elevation,\r
    1\r
  );\r
  --_hover-label-text-color: var(\r
    --md-filled-tonal-button-hover-label-text-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-filled-tonal-button-hover-state-layer-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-filled-tonal-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-filled-tonal-button-label-text-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_label-text-font: var(\r
    --md-filled-tonal-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-filled-tonal-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-filled-tonal-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-filled-tonal-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_pressed-container-elevation: var(\r
    --md-filled-tonal-button-pressed-container-elevation,\r
    0\r
  );\r
  --_pressed-label-text-color: var(\r
    --md-filled-tonal-button-pressed-label-text-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-filled-tonal-button-pressed-state-layer-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-filled-tonal-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-filled-tonal-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(\r
    --md-filled-tonal-button-disabled-icon-opacity,\r
    0.38\r
  );\r
  --_focus-icon-color: var(\r
    --md-filled-tonal-button-focus-icon-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_hover-icon-color: var(\r
    --md-filled-tonal-button-hover-icon-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_icon-color: var(\r
    --md-filled-tonal-button-icon-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_icon-size: var(--md-filled-tonal-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-filled-tonal-button-pressed-icon-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_leading-space: var(--md-filled-tonal-button-leading-space, 24px);\r
  --_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-filled-tonal-button-with-leading-icon-leading-space,\r
    16px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-filled-tonal-button-with-leading-icon-trailing-space,\r
    24px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-filled-tonal-button-with-trailing-icon-leading-space,\r
    24px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-filled-tonal-button-with-trailing-icon-trailing-space,\r
    16px\r
  );\r
  --_container-shape-start-start: var(\r
    --md-filled-tonal-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-filled-tonal-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-filled-tonal-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-filled-tonal-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
.variant-module_text__oL9YN {\r
  --_container-height: var(--md-text-button-container-height, 40px);\r
  --_container-shape: var(--md-text-button-container-shape, 9999px);\r
  --_disabled-label-text-color: var(\r
    --md-text-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-text-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_focus-label-text-color: var(\r
    --md-text-button-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-text-button-hover-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-text-button-hover-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-text-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-text-button-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_label-text-font: var(\r
    --md-text-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-text-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-text-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-text-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_pressed-label-text-color: var(\r
    --md-text-button-pressed-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-text-button-pressed-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-text-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-text-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);\r
  --_focus-icon-color: var(\r
    --md-text-button-focus-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-icon-color: var(\r
    --md-text-button-hover-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-color: var(\r
    --md-text-button-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-size: var(--md-text-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-text-button-pressed-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_leading-space: var(--md-text-button-leading-space, 12px);\r
  --_trailing-space: var(--md-text-button-trailing-space, 12px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-text-button-with-leading-icon-leading-space,\r
    12px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-text-button-with-leading-icon-trailing-space,\r
    16px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-text-button-with-trailing-icon-leading-space,\r
    16px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-text-button-with-trailing-icon-trailing-space,\r
    12px\r
  );\r
  --_container-color: none;\r
  --_disabled-container-color: none;\r
  --_disabled-container-opacity: 0;\r
  --_container-shape-start-start: var(\r
    --md-text-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-text-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-text-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-text-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
`);const Lt=n=>{const{ref:a,style:i,children:o,className:u,ripple:d=!0,color:f="primary",variant:m="elevated",isDisabled:h=!1}=n,{focusProps:p,isFocusVisible:y}=Si();return g.jsx(o0,Object.assign({ref:a},yt(n,p),{style:i,className:on(Br.btn,v4[f],y4[m],h&&Br.disabled,u),children:g.jsxs("div",{className:Br.button,children:[g.jsx("span",{className:Br.background}),g.jsx("span",{className:Br.touch}),g.jsx("span",{className:Br.label,children:g.jsx(g.Fragment,{children:o})}),m=="outlined"&&g.jsx("div",{className:Br.outline}),g.jsx(sf,{disabled:h}),y&&g.jsx(Ss,{}),d&&g.jsx(_i,{id:n.id,disabled:h})]})}))};Lt.displayName="Actify.Button";var md={btn:"icon-button-module_btn__Ixgd4","text-outline":"icon-button-module_text-outline__42DFJ","icon-button":"icon-button-module_icon-button__-Xc9O"};en(`.icon-button-module_btn__Ixgd4 {\r
  border: 0 solid #e5e7eb;\r
  appearance: button;\r
  background-color: transparent;\r
  background-image: none;\r
  font-feature-settings: inherit;\r
  font-variation-settings: inherit;\r
  letter-spacing: inherit;\r
  color: inherit;\r
  padding: 0;\r
  cursor: pointer;\r
\r
  width: 2.5rem /* 40px */;\r
  height: 2.5rem /* 40px */;\r
  position: relative;\r
  color: currentColor;\r
  display: inline-flex;\r
  align-items: center;\r
  border-radius: 9999px;\r
  justify-content: center;\r
}\r
.icon-button-module_btn__Ixgd4:focus-visible {\r
  outline: none;\r
}\r
.icon-button-module_text-outline__42DFJ {\r
  --tw-text-opacity: 1;\r
  color: var(--md-sys-color-outline) / var(--tw-text-opacity);\r
}\r
.icon-button-module_icon-button__-Xc9O {\r
  position: absolute;\r
  width: max(48px, 100%);\r
  height: max(48px, 100%);\r
}\r
`);const s0=n=>{const{ref:a,ripple:i=!0,children:o,className:u,isDisabled:d}=n,{focusProps:f,isFocusVisible:m}=Si();return g.jsxs(o0,Object.assign({ref:a},yt(n,f),{className:on(md.btn,d&&md["text-outline"],u),children:[m&&g.jsx(Ss,{}),i&&g.jsx(_i,{id:n.id,disabled:d}),g.jsx(g.Fragment,{children:o}),g.jsx("span",{className:md["icon-button"]})]}))};s0.displayName="Actify.IconButton";var et={host:"segmented-buttont-module_host__Q7AyG","segmented-button":"segmented-buttont-module_segmented-button__tnT4D",selected:"segmented-buttont-module_selected__NCVOt",unselected:"segmented-buttont-module_unselected__V3O9p",outline:"segmented-buttont-module_outline__9n2UR",leading:"segmented-buttont-module_leading__6zkws",graphic:"segmented-buttont-module_graphic__KFB1e","with-label":"segmented-buttont-module_with-label__46HnX",checkmark:"segmented-buttont-module_checkmark__ean7d",deselecting:"segmented-buttont-module_deselecting__5aeDz","md3-segmented-button-simple-fade-out":"segmented-buttont-module_md3-segmented-button-simple-fade-out__AcHfR","checkmark-path":"segmented-buttont-module_checkmark-path__jN9bX",selecting:"segmented-buttont-module_selecting__uyvR2","md3-segmented-button-checkmark-selection-draw-in":"segmented-buttont-module_md3-segmented-button-checkmark-selection-draw-in__GE-vy",icon:"segmented-buttont-module_icon__oEvPI","label-text":"segmented-buttont-module_label-text__-mx7c",touch:"segmented-buttont-module_touch__zz2Ce"};en(`.segmented-buttont-module_host__Q7AyG {\r
	--_container-height: var(\r
		--md-outlined-segmented-button-container-height,\r
		40px\r
	);\r
	--_disabled-icon-color: var(\r
		--md-outlined-segmented-button-disabled-icon-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_disabled-label-text-color: var(\r
		--md-outlined-segmented-button-disabled-label-text-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_disabled-outline-color: var(\r
		--md-outlined-segmented-button-disabled-outline-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_hover-state-layer-opacity: var(\r
		--md-outlined-segmented-button-hover-state-layer-opacity,\r
		0.08\r
	);\r
	--_label-text-font: var(\r
		--md-outlined-segmented-button-label-text-font,\r
		var(\r
			--md-sys-typescale-label-large-font,\r
			var(--md-ref-typeface-plain, Roboto)\r
		)\r
	);\r
	--_label-text-line-height: var(\r
		--md-outlined-segmented-button-label-text-line-height,\r
		var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
	);\r
	--_label-text-size: var(\r
		--md-outlined-segmented-button-label-text-size,\r
		var(--md-sys-typescale-label-large-size, 0.875rem)\r
	);\r
	--_label-text-weight: var(\r
		--md-outlined-segmented-button-label-text-weight,\r
		var(\r
			--md-sys-typescale-label-large-weight,\r
			var(--md-ref-typeface-weight-medium, 500)\r
		)\r
	);\r
	--_outline-color: var(\r
		--md-outlined-segmented-button-outline-color,\r
		var(--md-sys-color-outline, #79747e)\r
	);\r
	--_pressed-state-layer-opacity: var(\r
		--md-outlined-segmented-button-pressed-state-layer-opacity,\r
		0.12\r
	);\r
	--_selected-container-color: var(\r
		--md-outlined-segmented-button-selected-container-color,\r
		var(--md-sys-color-secondary-container, #e8def8)\r
	);\r
	--_selected-focus-icon-color: var(\r
		--md-outlined-segmented-button-selected-focus-icon-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-focus-label-text-color: var(\r
		--md-outlined-segmented-button-selected-focus-label-text-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-hover-icon-color: var(\r
		--md-outlined-segmented-button-selected-hover-icon-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-hover-label-text-color: var(\r
		--md-outlined-segmented-button-selected-hover-label-text-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-hover-state-layer-color: var(\r
		--md-outlined-segmented-button-selected-hover-state-layer-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-label-text-color: var(\r
		--md-outlined-segmented-button-selected-label-text-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-pressed-icon-color: var(\r
		--md-outlined-segmented-button-selected-pressed-icon-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-pressed-label-text-color: var(\r
		--md-outlined-segmented-button-selected-pressed-label-text-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-pressed-state-layer-color: var(\r
		--md-outlined-segmented-button-selected-pressed-state-layer-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_shape: var(\r
		--md-outlined-segmented-button-shape,\r
		var(--md-sys-shape-corner-full, 9999px)\r
	);\r
	--_unselected-focus-icon-color: var(\r
		--md-outlined-segmented-button-unselected-focus-icon-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-focus-label-text-color: var(\r
		--md-outlined-segmented-button-unselected-focus-label-text-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-hover-icon-color: var(\r
		--md-outlined-segmented-button-unselected-hover-icon-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-hover-label-text-color: var(\r
		--md-outlined-segmented-button-unselected-hover-label-text-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-hover-state-layer-color: var(\r
		--md-outlined-segmented-button-unselected-hover-state-layer-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-label-text-color: var(\r
		--md-outlined-segmented-button-unselected-label-text-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-pressed-icon-color: var(\r
		--md-outlined-segmented-button-unselected-pressed-icon-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-pressed-label-text-color: var(\r
		--md-outlined-segmented-button-unselected-pressed-label-text-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-pressed-state-layer-color: var(\r
		--md-outlined-segmented-button-unselected-pressed-state-layer-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_icon-size: var(--md-outlined-segmented-button-icon-size, 18px);\r
	--_selected-icon-color: var(\r
		--md-outlined-segmented-button-selected-icon-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_unselected-icon-color: var(\r
		--md-outlined-segmented-button-unselected-icon-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_shape-start-start: var(\r
		--md-outlined-segmented-button-shape-start-start,\r
		var(--md-sys-shape-corner-full, 9999px)\r
	);\r
	--_shape-start-end: var(\r
		--md-outlined-segmented-button-shape-start-end,\r
		var(--md-sys-shape-corner-full, 9999px)\r
	);\r
	--_shape-end-end: var(\r
		--md-outlined-segmented-button-shape-end-end,\r
		var(--md-sys-shape-corner-full, 9999px)\r
	);\r
	--_shape-end-start: var(\r
		--md-outlined-segmented-button-shape-end-start,\r
		var(--md-sys-shape-corner-full, 9999px)\r
	);\r
	--_spacing-leading: var(--md-outlined-segmented-button-spacing-leading, 12px);\r
	--_spacing-trailing: var(\r
		--md-outlined-segmented-button-spacing-trailing,\r
		12px\r
	);\r
	display: inline-flex;\r
	outline: none;\r
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r
}\r
\r
.segmented-buttont-module_segmented-button__tnT4D {\r
	cursor: pointer;\r
	--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);\r
	--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);\r
	--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);\r
	--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);\r
	align-items: center;\r
	background: rgba(0, 0, 0, 0);\r
	border: none;\r
	display: flex;\r
	flex: 1;\r
	justify-content: center;\r
	outline: none;\r
	position: relative;\r
	vertical-align: middle;\r
	padding-inline-start: var(--_spacing-leading);\r
	padding-inline-end: var(--_spacing-trailing);\r
	text-transform: inherit;\r
	&.segmented-buttont-module_selected__NCVOt {\r
		background-color: var(--_selected-container-color);\r
		--md-ripple-hover-color: var(--_selected-hover-state-layer-color);\r
		--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);\r
		--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);\r
		--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);\r
	}\r
	&.segmented-buttont-module_unselected__V3O9p {\r
		--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);\r
		--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);\r
		--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);\r
		--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);\r
	}\r
}\r
\r
.segmented-buttont-module_outline__9n2UR {\r
	border-color: var(--_outline-color);\r
	border-radius: inherit;\r
	border-style: solid;\r
	border-width: 1px;\r
	inset: 0px -0.5px;\r
	pointer-events: none;\r
	position: absolute;\r
}\r
.segmented-buttont-module_leading__6zkws {\r
	display: inline-flex;\r
	justify-content: flex-start;\r
	align-items: center;\r
}\r
.segmented-buttont-module_graphic__KFB1e {\r
	overflow: hidden;\r
	position: relative;\r
	height: var(--_icon-size);\r
	width: var(--_icon-size);\r
	font-size: var(--_icon-size);\r
	display: inline-flex;\r
	justify-content: flex-start;\r
	align-items: center;\r
	transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1);\r
}\r
.segmented-buttont-module_unselected__V3O9p .segmented-buttont-module_graphic__KFB1e {\r
	width: 0;\r
}\r
.segmented-buttont-module_with-label__46HnX .segmented-buttont-module_graphic__KFB1e,\r
.segmented-buttont-module_selected__NCVOt .segmented-buttont-module_graphic__KFB1e {\r
	width: calc(var(--_icon-size) + 8px);\r
}\r
\r
.segmented-buttont-module_checkmark__ean7d {\r
	height: var(--_icon-size);\r
	width: var(--_icon-size);\r
	font-size: var(--_icon-size);\r
	transition: opacity 50ms ease-out;\r
}\r
.segmented-buttont-module_with-label__46HnX .segmented-buttont-module_checkmark__ean7d {\r
	display: inline-flex;\r
	position: absolute;\r
}\r
.segmented-buttont-module_unselected__V3O9p .segmented-buttont-module_checkmark__ean7d {\r
	opacity: 0;\r
}\r
.segmented-buttont-module_selected__NCVOt .segmented-buttont-module_checkmark__ean7d {\r
	stroke: var(--_selected-icon-color);\r
}\r
\r
@keyframes segmented-buttont-module_md3-segmented-button-simple-fade-out__AcHfR {\r
	0% {\r
		opacity: 1;\r
	}\r
	100% {\r
		opacity: 0;\r
	}\r
}\r
.segmented-buttont-module_deselecting__5aeDz .segmented-buttont-module_checkmark__ean7d {\r
	animation: segmented-buttont-module_md3-segmented-button-simple-fade-out__AcHfR;\r
	animation-duration: 50ms;\r
	animation-timing-function: linear;\r
	animation-fill-mode: forwards;\r
}\r
\r
.segmented-buttont-module_checkmark-path__jN9bX {\r
	stroke-width: 2px;\r
	stroke-dasharray: 29.7833;\r
}\r
@keyframes segmented-buttont-module_md3-segmented-button-checkmark-selection-draw-in__GE-vy {\r
	0% {\r
		stroke-dashoffset: 29.7833385;\r
	}\r
	100% {\r
		stroke-dashoffset: 0;\r
	}\r
}\r
.segmented-buttont-module_selecting__uyvR2 .segmented-buttont-module_checkmark-path__jN9bX {\r
	stroke-dashoffset: 29.7833385;\r
	animation: segmented-buttont-module_md3-segmented-button-checkmark-selection-draw-in__GE-vy;\r
	animation-duration: 150ms;\r
	animation-delay: 50ms;\r
	animation-fill-mode: forwards;\r
	animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
}\r
\r
.segmented-buttont-module_icon__oEvPI {\r
	display: flex;\r
	--md-icon-size: 18px;\r
	height: var(--_icon-size);\r
	width: var(--_icon-size);\r
	font-size: var(--_icon-size);\r
}\r
.segmented-buttont-module_selected__NCVOt.segmented-buttont-module_with-label__46HnX .segmented-buttont-module_icon__oEvPI {\r
	opacity: 0;\r
}\r
.segmented-buttont-module_label-text__-mx7c {\r
	font-family: var(--_label-text-font);\r
	font-size: var(--_label-text-size);\r
	line-height: var(--_label-text-line-height);\r
	font-weight: var(--_label-text-weight);\r
}\r
.segmented-buttont-module_selected__NCVOt .segmented-buttont-module_label-text__-mx7c {\r
	color: var(--_selected-label-text-color);\r
}\r
.segmented-buttont-module_unselected__V3O9p .segmented-buttont-module_label-text__-mx7c {\r
	color: var(--_unselected-label-text-color);\r
}\r
.segmented-buttont-module_touch__zz2Ce {\r
	position: absolute;\r
	top: 50%;\r
	height: 48px;\r
	left: 50%;\r
	width: 100%;\r
	transform: translate(-50%, -50%);\r
}\r
`);const g4=n=>{const{id:a,icon:i,label:o,disabled:u,selected:d,className:f,noCheckmark:m}=n,h=Ve.useRef(null),{buttonProps:p}=i0(n,h),y=a||`actify-segmented-button${Ve.useId()}`,b=Ve.useMemo((()=>d?"selecting":"deselecting"),[d]),_=on(et["segmented-button"],i&&et["with-icon"],et[b],d?et.selected:et.unselected,o?et["with-label"]:et["without-label"],m?et["without-checkmark"]:et["with-checkmark"],f),{focusProps:j,isFocusVisible:N}=Si();return g.jsx("div",{role:"presentation",className:et.host,children:g.jsxs("button",Object.assign({id:y,ref:h,className:_,tabIndex:u?-1:0},yt(p,j),{children:[N&&g.jsx(Ss,{}),g.jsx(_i,{id:y,disabled:u}),g.jsx("span",{className:et.outline}),g.jsxs("span",{className:et.leading,"aria-hidden":"true",children:[g.jsxs("span",{className:et.graphic,children:[g.jsx("svg",{className:et.checkmark,viewBox:"0 0 24 24",children:g.jsx("path",{fill:"none",className:et["checkmark-path"],d:"M1.73,12.91 8.1,19.28 22.79,4.59"})}),o&&g.jsx("span",{className:et.icon,"aria-hidden":"true",children:i})]}),!o&&g.jsx("span",{className:et.icon,"aria-hidden":"true",children:i})]}),g.jsx("span",{className:et["label-text"],children:o}),g.jsx("span",{className:et.touch})]}))})},b4=n=>{const{children:a}=n,i=Xr(n,["children"]);return g.jsx("div",Object.assign({},i,{role:"presentation",children:a}))},u0={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},c0={...u0,customError:!0,valid:!1},Kl={isInvalid:!1,validationDetails:u0,validationErrors:[]},x4=S.createContext({}),Og="__formValidationState"+Date.now();function _4(n){if(n[Og]){let{realtimeValidation:a,displayValidation:i,updateValidation:o,resetValidation:u,commitValidation:d}=n[Og];return{realtimeValidation:a,displayValidation:i,updateValidation:o,resetValidation:u,commitValidation:d}}return(function(a){let{isInvalid:i,validationState:o,name:u,value:d,builtinValidation:f,validate:m,validationBehavior:h="aria"}=a;o&&(i||(i=o==="invalid"));let p=i!==void 0?{isInvalid:i,validationErrors:[],validationDetails:c0}:null,y=S.useMemo((()=>{if(!m||d==null)return null;let K=(function(le,F){if(typeof le=="function"){let oe=le(F);if(oe&&typeof oe!="boolean")return hd(oe)}return[]})(m,d);return $g(K)}),[m,d]);f?.validationDetails.valid&&(f=void 0);let b=S.useContext(x4),_=S.useMemo((()=>u?Array.isArray(u)?u.flatMap((K=>hd(b[K]))):hd(b[u]):[]),[b,u]),[j,N]=S.useState(b),[w,A]=S.useState(!1);b!==j&&(N(b),A(!1));let D=S.useMemo((()=>$g(w?[]:_)),[w,_]),k=S.useRef(Kl),[q,Z]=S.useState(Kl),V=S.useRef(Kl),J=()=>{if(!Q)return;E(!1);let K=y||f||k.current;pd(K,V.current)||(V.current=K,Z(K))},[Q,E]=S.useState(!1);return S.useEffect(J),{realtimeValidation:p||D||y||f||Kl,displayValidation:h==="native"?p||D||q:p||D||y||f||q,updateValidation(K){h!=="aria"||pd(q,K)?k.current=K:Z(K)},resetValidation(){let K=Kl;pd(K,V.current)||(V.current=K,Z(K)),h==="native"&&E(!1),A(!0)},commitValidation(){h==="native"&&E(!0),A(!0)}}})(n)}function hd(n){return n?Array.isArray(n)?n:[n]:[]}function $g(n){return n.length?{isInvalid:!0,validationErrors:n,validationDetails:c0}:null}function pd(n,a){return n===a||!!n&&!!a&&n.isInvalid===a.isInvalid&&n.validationErrors.length===a.validationErrors.length&&n.validationErrors.every(((i,o)=>i===a.validationErrors[o]))&&Object.entries(n.validationDetails).every((([i,o])=>a.validationDetails[i]===o))}function S4(n,a,i){let[o,u]=S.useState(n||a),d=S.useRef(n!==void 0),f=n!==void 0;S.useEffect((()=>{let p=d.current;p!==f&&console.warn(`WARN: A component changed from ${p?"controlled":"uncontrolled"} to ${f?"controlled":"uncontrolled"}.`),d.current=f}),[f]);let m=f?n:o,h=S.useCallback(((p,...y)=>{let b=(_,...j)=>{i&&(Object.is(m,_)||i(_,...j)),f||(m=_)};typeof p=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),u(((_,...j)=>{let N=p(f?m:_,...j);return b(N,...y),f?_:N}))):(f||u(p),b(p,...y))}),[f,m,i]);return[m,h]}function E4(n,a){let{id:i,"aria-label":o,"aria-labelledby":u}=n;return i=qa(i),u&&o?u=[...new Set([i,...u.trim().split(/\s+/)])].join(" "):u&&(u=u.trim().split(/\s+/).join(" ")),{id:i,"aria-label":o,"aria-labelledby":u}}function T4(n){let{id:a,label:i,"aria-labelledby":o,"aria-label":u,labelElementType:d="label"}=n;a=qa(a);let f=qa(),m={};return i?(o=o?`${f} ${o}`:f,m={id:f,htmlFor:d==="label"?a:void 0}):o||u||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:m,fieldProps:E4({id:a,"aria-label":u,"aria-labelledby":o})}}function w4(n){let{description:a,errorMessage:i,isInvalid:o,validationState:u}=n,{labelProps:d,fieldProps:f}=T4(n),m=oy([!!a,!!i,o,u]),h=oy([!!a,!!i,o,u]);return f=yt(f,{"aria-describedby":[m,h,n["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:d,fieldProps:f,descriptionProps:{id:m},errorMessageProps:{id:h}}}function A4(n,a,i){let{validationBehavior:o,focus:u}=n;Pr((()=>{if(o==="native"&&i?.current&&!i.current.disabled){let p=a.realtimeValidation.isInvalid?a.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";i.current.setCustomValidity(p),i.current.hasAttribute("title")||(i.current.title=""),a.realtimeValidation.isInvalid||a.updateValidation({isInvalid:!(h=i.current).validity.valid,validationDetails:j4(h),validationErrors:h.validationMessage?[h.validationMessage]:[]})}var h}));let d=Ft((()=>{a.resetValidation()})),f=Ft((h=>{var p;a.displayValidation.isInvalid||a.commitValidation();let y=i==null||(p=i.current)===null||p===void 0?void 0:p.form;var b;!h.defaultPrevented&&i&&y&&(function(_){for(let j=0;j<_.elements.length;j++){let N=_.elements[j];if(!N.validity.valid)return N}return null})(y)===i.current&&(u?u():(b=i.current)===null||b===void 0||b.focus(),l4("keyboard")),h.preventDefault()})),m=Ft((()=>{a.commitValidation()}));S.useEffect((()=>{let h=i?.current;if(!h)return;let p=h.form;return h.addEventListener("invalid",f),h.addEventListener("change",m),p?.addEventListener("reset",d),()=>{h.removeEventListener("invalid",f),h.removeEventListener("change",m),p?.removeEventListener("reset",d)}}),[i,f,m,d,o])}function j4(n){let a=n.validity;return{badInput:a.badInput,customError:a.customError,patternMismatch:a.patternMismatch,rangeOverflow:a.rangeOverflow,rangeUnderflow:a.rangeUnderflow,stepMismatch:a.stepMismatch,tooLong:a.tooLong,tooShort:a.tooShort,typeMismatch:a.typeMismatch,valueMissing:a.valueMissing,valid:a.valid}}function C4(n,a,i){let o=S.useRef(a),u=Ft((()=>{i&&i(o.current)}));S.useEffect((()=>{var d;let f=n==null||(d=n.current)===null||d===void 0?void 0:d.form;return f?.addEventListener("reset",u),()=>{f?.removeEventListener("reset",u)}}),[n,u])}var Lg={text:"supporting-module_text__LAS2Y",counter:"supporting-module_counter__GuSE6"};en(`.supporting-module_text__LAS2Y {\r
  color: var(--_supporting-text-color);\r
  display: flex;\r
  font-family: var(--_supporting-text-font);\r
  font-size: var(--_supporting-text-size);\r
  line-height: var(--_supporting-text-line-height);\r
  font-weight: var(--_supporting-text-weight);\r
  gap: 16px;\r
  justify-content: space-between;\r
  padding-inline-start: var(--_supporting-text-leading-space);\r
  padding-inline-end: var(--_supporting-text-trailing-space);\r
  padding-top: var(--_supporting-text-top-space);\r
}\r
.supporting-module_counter__GuSE6 {\r
  flex-shrink: 0;\r
}\r
`);const N4=({max:n=-1,count:a=-1,error:i,errorText:o,supportingText:u,refreshErrorAlert:d})=>{const f=i&&o&&!d?"alert":"",m=()=>a<0||n<=0?"":`${a} / ${n}`,h=()=>i&&o?o:u;return g.jsxs(Ve.Fragment,{children:[g.jsxs("div",{role:f,className:Lg.text,children:[g.jsx("span",{children:h()}),g.jsx("span",{className:Lg.counter,children:m()})]}),g.jsx("div",{hidden:!0,id:"description",children:`${h()} ${m()}`})]})};var Se={filled:"field-module_filled__lGXpV",outlined:"field-module_outlined__7MFPd",field:"field-module_field__OUiHT",outline:"field-module_outline__MLMKT","container-overflow":"field-module_container-overflow__DVkGv",container:"field-module_container__Vg8QO",start:"field-module_start__hbiQQ",end:"field-module_end__k4pEv","with-start":"field-module_with-start__oQ4V1","with-end":"field-module_with-end__v1BEg",middle:"field-module_middle__o4DOl",focused:"field-module_focused__yovQv",content:"field-module_content__r4BW-",populated:"field-module_populated__Q-p--",label:"field-module_label__nLEGd",resting:"field-module_resting__WB4GE",floating:"field-module_floating__cHtoV",visible:"field-module_visible__192Ro",error:"field-module_error__Gwmtc","input-wrapper":"field-module_input-wrapper__euPtU","no-label":"field-module_no-label__WTIud",background:"field-module_background__lA8Sd","state-layer":"field-module_state-layer__C0so-",disabled:"field-module_disabled__-ZlOi","active-indicator":"field-module_active-indicator__EV61C","label-wrapper":"field-module_label-wrapper__rT6tK","outline-start":"field-module_outline-start__1g5Bi","outline-notch":"field-module_outline-notch__DkhHs","outline-end":"field-module_outline-end__u0aPt","outline-panel-inactive":"field-module_outline-panel-inactive__tdtyr","outline-panel-active":"field-module_outline-panel-active__BoFP8","outline-label":"field-module_outline-label__V41uw"};en(`.field-module_filled__lGXpV {\r
  --_active-indicator-color: var(\r
    --md-filled-field-active-indicator-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_active-indicator-height: var(\r
    --md-filled-field-active-indicator-height,\r
    1px\r
  );\r
  --_bottom-space: var(--md-filled-field-bottom-space, 16px);\r
  --_container-color: var(\r
    --md-filled-field-container-color,\r
    var(--md-sys-color-surface-container-highest, #e6e0e9)\r
  );\r
  --_container-shape-start-start: var(\r
    --md-filled-field-container-shape-start-start,\r
    var(--md-filled-field-container-shape, 4px)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-filled-field-container-shape-start-end,\r
    var(--md-filled-field-container-shape, 4px)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-filled-field-container-shape-end-end,\r
    var(--md-filled-field-container-shape, 0px)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-filled-field-container-shape-end-start,\r
    var(--md-filled-field-container-shape, 0px)\r
  );\r
  --_content-color: var(\r
    --md-filled-field-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_content-font: var(\r
    --md-filled-field-content-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_content-line-height: var(\r
    --md-filled-field-content-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_content-size: var(\r
    --md-filled-field-content-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_content-weight: var(\r
    --md-filled-field-content-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_disabled-active-indicator-color: var(\r
    --md-filled-field-disabled-active-indicator-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-active-indicator-height: var(\r
    --md-filled-field-disabled-active-indicator-height,\r
    1px\r
  );\r
  --_disabled-active-indicator-opacity: var(\r
    --md-filled-field-disabled-active-indicator-opacity,\r
    0.38\r
  );\r
  --_disabled-container-color: var(\r
    --md-filled-field-disabled-container-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-filled-field-disabled-container-opacity,\r
    0.04\r
  );\r
  --_disabled-content-color: var(\r
    --md-filled-field-disabled-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-content-opacity: var(\r
    --md-filled-field-disabled-content-opacity,\r
    0.38\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-filled-field-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-filled-field-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-leading-content-color: var(\r
    --md-filled-field-disabled-leading-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-leading-content-opacity: var(\r
    --md-filled-field-disabled-leading-content-opacity,\r
    0.38\r
  );\r
  --_disabled-supporting-text-color: var(\r
    --md-filled-field-disabled-supporting-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-supporting-text-opacity: var(\r
    --md-filled-field-disabled-supporting-text-opacity,\r
    0.38\r
  );\r
  --_disabled-trailing-content-color: var(\r
    --md-filled-field-disabled-trailing-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-trailing-content-opacity: var(\r
    --md-filled-field-disabled-trailing-content-opacity,\r
    0.38\r
  );\r
  --_error-active-indicator-color: var(\r
    --md-filled-field-error-active-indicator-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-content-color: var(\r
    --md-filled-field-error-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-focus-active-indicator-color: var(\r
    --md-filled-field-error-focus-active-indicator-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-content-color: var(\r
    --md-filled-field-error-focus-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-focus-label-text-color: var(\r
    --md-filled-field-error-focus-label-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-leading-content-color: var(\r
    --md-filled-field-error-focus-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-focus-supporting-text-color: var(\r
    --md-filled-field-error-focus-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-trailing-content-color: var(\r
    --md-filled-field-error-focus-trailing-content-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-hover-active-indicator-color: var(\r
    --md-filled-field-error-hover-active-indicator-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-hover-content-color: var(\r
    --md-filled-field-error-hover-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-hover-label-text-color: var(\r
    --md-filled-field-error-hover-label-text-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-hover-leading-content-color: var(\r
    --md-filled-field-error-hover-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-hover-state-layer-color: var(\r
    --md-filled-field-error-hover-state-layer-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-hover-state-layer-opacity: var(\r
    --md-filled-field-error-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_error-hover-supporting-text-color: var(\r
    --md-filled-field-error-hover-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-hover-trailing-content-color: var(\r
    --md-filled-field-error-hover-trailing-content-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-label-text-color: var(\r
    --md-filled-field-error-label-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-leading-content-color: var(\r
    --md-filled-field-error-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-supporting-text-color: var(\r
    --md-filled-field-error-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-trailing-content-color: var(\r
    --md-filled-field-error-trailing-content-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_focus-active-indicator-color: var(\r
    --md-filled-field-focus-active-indicator-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_focus-active-indicator-height: var(\r
    --md-filled-field-focus-active-indicator-height,\r
    3px\r
  );\r
  --_focus-content-color: var(\r
    --md-filled-field-focus-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_focus-label-text-color: var(\r
    --md-filled-field-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_focus-leading-content-color: var(\r
    --md-filled-field-focus-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_focus-supporting-text-color: var(\r
    --md-filled-field-focus-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_focus-trailing-content-color: var(\r
    --md-filled-field-focus-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-active-indicator-color: var(\r
    --md-filled-field-hover-active-indicator-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-active-indicator-height: var(\r
    --md-filled-field-hover-active-indicator-height,\r
    1px\r
  );\r
  --_hover-content-color: var(\r
    --md-filled-field-hover-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-filled-field-hover-label-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-leading-content-color: var(\r
    --md-filled-field-hover-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-filled-field-hover-state-layer-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-filled-field-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_hover-supporting-text-color: var(\r
    --md-filled-field-hover-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-trailing-content-color: var(\r
    --md-filled-field-hover-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_label-text-color: var(\r
    --md-filled-field-label-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_label-text-font: var(\r
    --md-filled-field-label-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-filled-field-label-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_label-text-populated-line-height: var(\r
    --md-filled-field-label-text-populated-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_label-text-populated-size: var(\r
    --md-filled-field-label-text-populated-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_label-text-size: var(\r
    --md-filled-field-label-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-filled-field-label-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_leading-content-color: var(\r
    --md-filled-field-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_leading-space: var(--md-filled-field-leading-space, 16px);\r
  --_supporting-text-color: var(\r
    --md-filled-field-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_supporting-text-font: var(\r
    --md-filled-field-supporting-text-font,\r
    var(\r
      --md-sys-typescale-body-small-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_supporting-text-leading-space: var(\r
    --md-filled-field-supporting-text-leading-space,\r
    16px\r
  );\r
  --_supporting-text-line-height: var(\r
    --md-filled-field-supporting-text-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_supporting-text-size: var(\r
    --md-filled-field-supporting-text-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_supporting-text-top-space: var(\r
    --md-filled-field-supporting-text-top-space,\r
    4px\r
  );\r
  --_supporting-text-trailing-space: var(\r
    --md-filled-field-supporting-text-trailing-space,\r
    16px\r
  );\r
  --_supporting-text-weight: var(\r
    --md-filled-field-supporting-text-weight,\r
    var(\r
      --md-sys-typescale-body-small-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_top-space: var(--md-filled-field-top-space, 16px);\r
  --_trailing-content-color: var(\r
    --md-filled-field-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_trailing-space: var(--md-filled-field-trailing-space, 16px);\r
  --_with-label-bottom-space: var(\r
    --md-filled-field-with-label-bottom-space,\r
    8px\r
  );\r
  --_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);\r
}\r
\r
.field-module_outlined__7MFPd {\r
  --_bottom-space: var(--md-outlined-field-bottom-space, 16px);\r
  --_container-shape: var(--md-outlined-field-container-shape, 4px);\r
  --_content-color: var(\r
    --md-outlined-field-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_content-font: var(\r
    --md-outlined-field-content-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_content-line-height: var(\r
    --md-outlined-field-content-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_content-size: var(\r
    --md-outlined-field-content-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_content-weight: var(\r
    --md-outlined-field-content-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_disabled-content-color: var(\r
    --md-outlined-field-disabled-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-content-opacity: var(\r
    --md-outlined-field-disabled-content-opacity,\r
    0.38\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-outlined-field-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-outlined-field-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-leading-content-color: var(\r
    --md-outlined-field-disabled-leading-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-leading-content-opacity: var(\r
    --md-outlined-field-disabled-leading-content-opacity,\r
    0.38\r
  );\r
  --_disabled-outline-color: var(\r
    --md-outlined-field-disabled-outline-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-outline-opacity: var(\r
    --md-outlined-field-disabled-outline-opacity,\r
    0.12\r
  );\r
  --_disabled-outline-width: var(\r
    --md-outlined-field-disabled-outline-width,\r
    1px\r
  );\r
  --_disabled-supporting-text-color: var(\r
    --md-outlined-field-disabled-supporting-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-supporting-text-opacity: var(\r
    --md-outlined-field-disabled-supporting-text-opacity,\r
    0.38\r
  );\r
  --_disabled-trailing-content-color: var(\r
    --md-outlined-field-disabled-trailing-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-trailing-content-opacity: var(\r
    --md-outlined-field-disabled-trailing-content-opacity,\r
    0.38\r
  );\r
  --_error-content-color: var(\r
    --md-outlined-field-error-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-focus-content-color: var(\r
    --md-outlined-field-error-focus-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-focus-label-text-color: var(\r
    --md-outlined-field-error-focus-label-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-leading-content-color: var(\r
    --md-outlined-field-error-focus-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-focus-outline-color: var(\r
    --md-outlined-field-error-focus-outline-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-supporting-text-color: var(\r
    --md-outlined-field-error-focus-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-trailing-content-color: var(\r
    --md-outlined-field-error-focus-trailing-content-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-hover-content-color: var(\r
    --md-outlined-field-error-hover-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-hover-label-text-color: var(\r
    --md-outlined-field-error-hover-label-text-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-hover-leading-content-color: var(\r
    --md-outlined-field-error-hover-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-hover-outline-color: var(\r
    --md-outlined-field-error-hover-outline-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-hover-supporting-text-color: var(\r
    --md-outlined-field-error-hover-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-hover-trailing-content-color: var(\r
    --md-outlined-field-error-hover-trailing-content-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-label-text-color: var(\r
    --md-outlined-field-error-label-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-leading-content-color: var(\r
    --md-outlined-field-error-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-outline-color: var(\r
    --md-outlined-field-error-outline-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-supporting-text-color: var(\r
    --md-outlined-field-error-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-trailing-content-color: var(\r
    --md-outlined-field-error-trailing-content-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_focus-content-color: var(\r
    --md-outlined-field-focus-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_focus-label-text-color: var(\r
    --md-outlined-field-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_focus-leading-content-color: var(\r
    --md-outlined-field-focus-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_focus-outline-color: var(\r
    --md-outlined-field-focus-outline-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);\r
  --_focus-supporting-text-color: var(\r
    --md-outlined-field-focus-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_focus-trailing-content-color: var(\r
    --md-outlined-field-focus-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-content-color: var(\r
    --md-outlined-field-hover-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-outlined-field-hover-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-leading-content-color: var(\r
    --md-outlined-field-hover-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-outline-color: var(\r
    --md-outlined-field-hover-outline-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);\r
  --_hover-supporting-text-color: var(\r
    --md-outlined-field-hover-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-trailing-content-color: var(\r
    --md-outlined-field-hover-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_label-text-color: var(\r
    --md-outlined-field-label-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_label-text-font: var(\r
    --md-outlined-field-label-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-outlined-field-label-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_label-text-padding-bottom: var(\r
    --md-outlined-field-label-text-padding-bottom,\r
    8px\r
  );\r
  --_label-text-populated-line-height: var(\r
    --md-outlined-field-label-text-populated-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_label-text-populated-size: var(\r
    --md-outlined-field-label-text-populated-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_label-text-size: var(\r
    --md-outlined-field-label-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-outlined-field-label-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_leading-content-color: var(\r
    --md-outlined-field-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_leading-space: var(--md-outlined-field-leading-space, 16px);\r
  --_outline-color: var(\r
    --md-outlined-field-outline-color,\r
    var(--md-sys-color-outline, #79747e)\r
  );\r
  --_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);\r
  --_outline-width: var(--md-outlined-field-outline-width, 1px);\r
  --_supporting-text-color: var(\r
    --md-outlined-field-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_supporting-text-font: var(\r
    --md-outlined-field-supporting-text-font,\r
    var(\r
      --md-sys-typescale-body-small-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_supporting-text-leading-space: var(\r
    --md-outlined-field-supporting-text-leading-space,\r
    16px\r
  );\r
  --_supporting-text-line-height: var(\r
    --md-outlined-field-supporting-text-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_supporting-text-size: var(\r
    --md-outlined-field-supporting-text-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_supporting-text-top-space: var(\r
    --md-outlined-field-supporting-text-top-space,\r
    4px\r
  );\r
  --_supporting-text-trailing-space: var(\r
    --md-outlined-field-supporting-text-trailing-space,\r
    16px\r
  );\r
  --_supporting-text-weight: var(\r
    --md-outlined-field-supporting-text-weight,\r
    var(\r
      --md-sys-typescale-body-small-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_top-space: var(--md-outlined-field-top-space, 16px);\r
  --_trailing-content-color: var(\r
    --md-outlined-field-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_trailing-space: var(--md-outlined-field-trailing-space, 16px);\r
  --_container-shape-start-start: var(\r
    --md-outlined-field-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-outlined-field-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-outlined-field-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-outlined-field-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
\r
.field-module_field__OUiHT {\r
  --_with-leading-content-leading-space: var(\r
    --md-filled-field-with-leading-content-leading-space,\r
    12px\r
  );\r
  --_content-space: var(--md-filled-field-content-space, 16px);\r
  --_with-trailing-content-trailing-space: var(\r
    --md-filled-field-with-trailing-content-trailing-space,\r
    12px\r
  );\r
  width: 100%;\r
  cursor: text;\r
  display: flex;\r
  resize: inherit;\r
  flex: 1;\r
  outline: none;\r
  flex-direction: column;\r
  writing-mode: horizontal-tb;\r
  max-width: 100%;\r
  &:hover .field-module_outline__MLMKT {\r
    border-color: var(--_hover-outline-color);\r
    color: var(--_hover-outline-color);\r
  }\r
}\r
\r
.field-module_container-overflow__DVkGv {\r
  resize: inherit;\r
  border-start-start-radius: var(--_container-shape-start-start);\r
  border-start-end-radius: var(--_container-shape-start-end);\r
  border-end-end-radius: var(--_container-shape-end-end);\r
  border-end-start-radius: var(--_container-shape-end-start);\r
  display: flex;\r
  height: 100%;\r
  position: relative;\r
}\r
\r
.field-module_container__Vg8QO {\r
  align-items: center;\r
  border-radius: inherit;\r
  display: flex;\r
  flex: 1;\r
  max-height: 100%;\r
  min-height: 100%;\r
  min-width: min-content;\r
  position: relative;\r
}\r
\r
.field-module_start__hbiQQ {\r
  height: 100%;\r
  display: flex;\r
  position: relative;\r
  align-items: center;\r
  box-sizing: border-box;\r
  justify-content: center;\r
  color: var(--_leading-content-color);\r
}\r
.field-module_end__k4pEv {\r
  height: 100%;\r
  display: flex;\r
  position: relative;\r
  align-items: center;\r
  box-sizing: border-box;\r
  justify-content: center;\r
  color: var(--_trailing-content-color);\r
}\r
\r
.field-module_with-start__oQ4V1 .field-module_start__hbiQQ {\r
  margin-inline: var(--_with-leading-content-leading-space)\r
    var(--_content-space);\r
}\r
.field-module_with-end__v1BEg .field-module_end__k4pEv {\r
  margin-inline: var(--_content-space)\r
    var(--_with-trailing-content-trailing-space);\r
}\r
\r
.field-module_middle__o4DOl {\r
  display: flex;\r
  box-sizing: border-box;\r
  height: 100%;\r
  position: relative;\r
  align-items: stretch;\r
  align-self: baseline;\r
  flex: 1;\r
}\r
\r
.field-module_focused__yovQv .field-module_end__k4pEv {\r
  color: var(--_focus-trailing-content-color);\r
}\r
\r
.field-module_content__r4BW- {\r
  color: var(--_content-color);\r
  display: flex;\r
  flex: 1 1 0%;\r
  opacity: 0;\r
  transition: opacity 83ms cubic-bezier(0.2, 0, 0, 1) 0s;\r
}\r
.field-module_focused__yovQv .field-module_content__r4BW-,\r
.field-module_populated__Q-p-- .field-module_content__r4BW- {\r
  opacity: 1;\r
  transition-delay: 67ms;\r
}\r
\r
.field-module_input__AB2-O {\r
  caret-color: var(--_caret-color);\r
  overflow-x: hidden;\r
  text-align: inherit;\r
}\r
\r
.field-module_label__nLEGd {\r
  box-sizing: border-box;\r
  color: var(--_label-text-color);\r
  overflow: hidden;\r
  max-width: 100%;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
  z-index: 1;\r
  font-family: var(--_label-text-font);\r
  font-size: var(--_label-text-size);\r
  line-height: var(--_label-text-line-height);\r
  font-weight: var(--_label-text-weight);\r
  width: min-content;\r
  &.field-module_resting__WB4GE {\r
    position: absolute;\r
    top: var(--_top-space);\r
  }\r
  &.field-module_floating__cHtoV {\r
    font-size: var(--_label-text-populated-size);\r
    line-height: var(--_label-text-populated-line-height);\r
    transform-origin: top left;\r
  }\r
  &.field-module_visible__192Ro {\r
    opacity: 0;\r
  }\r
}\r
.field-module_error__Gwmtc .field-module_label__nLEGd {\r
  color: var(--_error-label-text-color);\r
}\r
\r
.field-module_input-wrapper__euPtU {\r
  all: unset;\r
  color: currentColor;\r
  font-family: var(--_content-font);\r
  font-size: var(--_content-size);\r
  line-height: var(--_content-line-height);\r
  font-weight: var(--_content-weight);\r
  width: 100%;\r
  overflow-wrap: revert;\r
  white-space: revert;\r
  display: flex;\r
  padding-top: var(--_top-space);\r
  padding-bottom: var(--_bottom-space);\r
  & > input,\r
  & > textarea {\r
    all: inherit;\r
    padding: 0;\r
  }\r
}\r
.field-module_field__OUiHT:not(.field-module_no-label__WTIud) .field-module_filled__lGXpV .field-module_input-wrapper__euPtU {\r
  padding-bottom: var(--_with-label-bottom-space);\r
  padding-top: calc(\r
    var(--_with-label-top-space) + var(--_label-text-populated-line-height)\r
  );\r
}\r
.field-module_field__OUiHT:not(.field-module_with-start__oQ4V1) .field-module_filled__lGXpV .field-module_input-wrapper__euPtU {\r
  padding-inline-start: var(--_leading-space);\r
}\r
.field-module_field__OUiHT:not(.field-module_with-end__v1BEg) .field-module_filled__lGXpV .field-module_input-wrapper__euPtU {\r
  padding-inline-end: var(--_trailing-space);\r
}\r
\r
.field-module_field__OUiHT:not(.field-module_no-label__WTIud) .field-module_outlined__7MFPd .field-module_input-wrapper__euPtU {\r
  padding-top: var(--_top-space);\r
  padding-bottom: var(--_bottom-space);\r
}\r
\r
.field-module_field__OUiHT:not(.field-module_with-start__oQ4V1) .field-module_outlined__7MFPd .field-module_input-wrapper__euPtU {\r
  padding-inline-start: max(\r
    var(--_leading-space),\r
    max(var(--_container-shape-start-start), var(--_container-shape-end-start)) +\r
      var(--_outline-label-padding)\r
  );\r
}\r
.field-module_field__OUiHT:not(.field-module_with-end__v1BEg) .field-module_outlined__7MFPd .field-module_input-wrapper__euPtU {\r
  padding-inline-end: max(\r
    var(--_trailing-space),\r
    max(var(--_container-shape-start-end), var(--_container-shape-end-end))\r
  );\r
}\r
\r
.field-module_background__lA8Sd {\r
  background-color: var(--_container-color);\r
  border-radius: inherit;\r
  inset: 0;\r
  position: absolute;\r
}\r
\r
.field-module_state-layer__C0so- {\r
  border-radius: inherit;\r
  inset: 0;\r
  pointer-events: none;\r
  position: absolute;\r
  visibility: hidden;\r
}\r
:hover .field-module_state-layer__C0so- {\r
  background: var(--_hover-state-layer-color);\r
  opacity: var(--_hover-state-layer-opacity);\r
}\r
.field-module_field__OUiHT:not(.field-module_disabled__-ZlOi):hover .field-module_state-layer__C0so- {\r
  visibility: visible;\r
}\r
\r
.field-module_active-indicator__EV61C {\r
  inset: auto 0 0 0;\r
  pointer-events: none;\r
  position: absolute;\r
  width: 100%;\r
  z-index: 1;\r
  &:before {\r
    border-bottom: var(--_active-indicator-height) solid\r
      var(--_active-indicator-color);\r
    inset: auto 0 0 0;\r
    content: '';\r
    position: absolute;\r
    width: 100%;\r
    border-bottom-color: var(--_hover-active-indicator-color);\r
    border-bottom-width: var(--_hover-active-indicator-height);\r
  }\r
  &:after {\r
    border-bottom: var(--_active-indicator-height) solid\r
      var(--_active-indicator-color);\r
    inset: auto 0 0 0;\r
    content: '';\r
    position: absolute;\r
    width: 100%;\r
    opacity: 0;\r
    transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1);\r
    border-bottom-color: var(--_focus-active-indicator-color);\r
    border-bottom-width: var(--_focus-active-indicator-height);\r
  }\r
}\r
.field-module_focused__yovQv .field-module_active-indicator__EV61C:after {\r
  opacity: 1;\r
}\r
\r
.field-module_label-wrapper__rT6tK {\r
  inset: 0;\r
  pointer-events: none;\r
  position: absolute;\r
  text-align: initial;\r
}\r
\r
.field-module_field__OUiHT:not(.field-module_with-start__oQ4V1) .field-module_filled__lGXpV .field-module_label-wrapper__rT6tK {\r
  margin-inline-start: var(--_leading-space);\r
}\r
.field-module_field__OUiHT:not(.field-module_with-end__v1BEg) .field-module_filled__lGXpV .field-module_label-wrapper__rT6tK {\r
  margin-inline-end: var(--_trailing-space);\r
}\r
\r
.field-module_field__OUiHT:not(.field-module_with-start__oQ4V1) .field-module_outlined__7MFPd .field-module_label-wrapper__rT6tK {\r
  margin-inline-start: max(\r
    var(--_leading-space),\r
    max(var(--_container-shape-start-start), var(--_container-shape-end-start)) +\r
      var(--_outline-label-padding)\r
  );\r
}\r
.field-module_field__OUiHT:not(.field-module_with-end__v1BEg) .field-module_outlined__7MFPd .field-module_label-wrapper__rT6tK {\r
  margin-inline-end: max(\r
    var(--_trailing-space),\r
    max(var(--_container-shape-start-end), var(--_container-shape-end-end))\r
  );\r
}\r
\r
.field-module_outline__MLMKT {\r
  border-color: var(--_outline-color);\r
  border-radius: inherit;\r
  display: flex;\r
  pointer-events: none;\r
  height: 100%;\r
  position: absolute;\r
  width: 100%;\r
  z-index: 1;\r
}\r
\r
.field-module_field__OUiHT.field-module_focused__yovQv .field-module_outline__MLMKT {\r
  color: var(--_focus-outline-color);\r
  border-color: var(--_focus-outline-color);\r
}\r
.field-module_error__Gwmtc .field-module_outline__MLMKT {\r
  border-color: var(--_error-outline-color);\r
  color: var(--_error-outline-color);\r
}\r
\r
.field-module_outline-start__1g5Bi {\r
  border: inherit;\r
  border-radius: inherit;\r
  box-sizing: border-box;\r
  position: relative;\r
  padding-inline-start: max(\r
    var(--_leading-space),\r
    max(var(--_container-shape-start-start), var(--_container-shape-end-start)) +\r
      var(--_outline-label-padding)\r
  );\r
  &:before,\r
  &:after {\r
    border: inherit;\r
    content: '';\r
    inset: 0;\r
    position: absolute;\r
  }\r
  &:before {\r
    border-width: var(--_outline-width);\r
    border-inline-start-style: solid;\r
    border-inline-end-style: none;\r
    border-start-start-radius: inherit;\r
    border-start-end-radius: 0;\r
    border-end-start-radius: inherit;\r
    border-end-end-radius: 0;\r
    margin-inline-end: var(--_outline-label-padding);\r
    border-bottom-style: solid;\r
    border-top-style: solid;\r
  }\r
  &:after {\r
    border-width: var(--_focus-outline-width);\r
    border-inline-start-style: solid;\r
    border-inline-end-style: none;\r
    border-start-start-radius: inherit;\r
    border-start-end-radius: 0;\r
    border-end-start-radius: inherit;\r
    border-end-end-radius: 0;\r
    margin-inline-end: var(--_outline-label-padding);\r
    opacity: 0;\r
    transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1);\r
    border-bottom-style: solid;\r
    border-top-style: solid;\r
  }\r
}\r
\r
.field-module_outline-notch__DkhHs {\r
  align-items: flex-start;\r
  border: inherit;\r
  display: flex;\r
  margin-inline-start: calc(-1 * var(--_outline-label-padding));\r
  margin-inline-end: var(--_outline-label-padding);\r
  max-width: calc(100% - var(--_leading-space) - var(--_trailing-space));\r
  padding: 0 var(--_outline-label-padding);\r
  position: relative;\r
}\r
.field-module_no-label__WTIud .field-module_outline-notch__DkhHs {\r
  display: none;\r
}\r
\r
.field-module_outline-end__u0aPt {\r
  border: inherit;\r
  border-radius: inherit;\r
  box-sizing: border-box;\r
  position: relative;\r
  flex-grow: 1;\r
  margin-inline-start: calc(-1 * var(--_outline-label-padding));\r
  &:before,\r
  &:after {\r
    border: inherit;\r
    content: '';\r
    inset: 0;\r
    position: absolute;\r
  }\r
  &:before {\r
    border-width: var(--_outline-width);\r
    border-inline-start-style: none;\r
    border-inline-end-style: solid;\r
    border-start-start-radius: 0;\r
    border-start-end-radius: inherit;\r
    border-end-start-radius: 0;\r
    border-end-end-radius: inherit;\r
    border-bottom-style: solid;\r
    border-top-style: solid;\r
  }\r
  &:after {\r
    border-width: var(--_focus-outline-width);\r
    border-inline-start-style: none;\r
    border-inline-end-style: solid;\r
    border-start-start-radius: 0;\r
    border-start-end-radius: inherit;\r
    border-end-start-radius: 0;\r
    border-end-end-radius: inherit;\r
    opacity: 0;\r
    transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1);\r
    border-bottom-style: solid;\r
    border-top-style: solid;\r
  }\r
}\r
\r
.field-module_outline-panel-inactive__tdtyr {\r
  border-width: var(--_outline-width);\r
  content: '';\r
  inset: 0;\r
  position: absolute;\r
  border-left-style: none;\r
  border-right-style: none;\r
  border-top-style: none;\r
  border-color: inherit;\r
  border-bottom-style: solid;\r
  &:before,\r
  &:after {\r
    border: inherit;\r
    content: '';\r
    inset: 0;\r
    position: absolute;\r
    border-width: var(--_outline-width);\r
    border-top-style: solid;\r
    border-bottom: none;\r
    bottom: auto;\r
    transform: scaleX(1);\r
    transition: transform 150ms cubic-bezier(0.2, 0, 0, 1);\r
  }\r
  &:before {\r
    right: 50%;\r
    transform-origin: top left;\r
  }\r
  &:after {\r
    left: 50%;\r
    transform-origin: top right;\r
  }\r
}\r
\r
.field-module_outline-panel-active__BoFP8 {\r
  border: inherit;\r
  content: '';\r
  inset: 0;\r
  position: absolute;\r
  border-width: var(--_focus-outline-width);\r
  opacity: 0;\r
  border-top-style: none;\r
  border-left-style: none;\r
  border-right-style: none;\r
  border-bottom-style: solid;\r
  transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1);\r
  &:before,\r
  &:after {\r
    border: inherit;\r
    content: '';\r
    inset: 0;\r
    position: absolute;\r
    border-width: var(--_focus-outline-width);\r
    border-top-style: solid;\r
    border-bottom: none;\r
    bottom: auto;\r
    transform: scaleX(1);\r
    transition: transform 150ms cubic-bezier(0.2, 0, 0, 1);\r
  }\r
  &:before {\r
    right: 50%;\r
    transform-origin: top left;\r
  }\r
  &:before {\r
    left: 50%;\r
    transform-origin: top right;\r
  }\r
}\r
\r
.field-module_focused__yovQv .field-module_outline-start__1g5Bi:after,\r
.field-module_focused__yovQv .field-module_outline-end__u0aPt:after,\r
.field-module_focused__yovQv .field-module_outline-panel-active__BoFP8 {\r
  opacity: 1;\r
}\r
.field-module_populated__Q-p-- .field-module_outline-panel-inactive__tdtyr:before,\r
.field-module_populated__Q-p-- .field-module_outline-panel-inactive__tdtyr:after,\r
.field-module_populated__Q-p-- .field-module_outline-panel-active__BoFP8:before,\r
.field-module_populated__Q-p-- .field-module_outline-panel-active__BoFP8:after,\r
.field-module_focused__yovQv .field-module_outline-panel-inactive__tdtyr:before,\r
.field-module_focused__yovQv .field-module_outline-panel-inactive__tdtyr:after,\r
.field-module_focused__yovQv .field-module_outline-panel-active__BoFP8:before,\r
.field-module_focused__yovQv .field-module_outline-panel-active__BoFP8:after {\r
  transform: scaleX(0);\r
}\r
\r
.field-module_outline-label__V41uw {\r
  display: flex;\r
  max-width: 100%;\r
  transform: translateY(calc(-100% + var(--_label-text-padding-bottom)));\r
}\r
`);const d0=n=>{const{disabled:a,className:i,label:o="",max:u,count:d,focused:f=!1,populated:m=!1,required:h=!1,children:p,leadingIcon:y,trailingIcon:b,error:_,errorText:j,supportingText:N,renderOutline:w,renderIndicator:A,renderBackground:D}=n,k=Xr(n,["disabled","className","label","max","count","focused","populated","required","children","leadingIcon","trailingIcon","error","errorText","supportingText","renderOutline","renderIndicator","renderBackground"]),q=Ve.useId(),Z=K=>{if(!o)return"";let le;le=K?f||m:!f&&!m;const F=`${o}${h?"*":""}`;return le?g.jsx(NA.span,{layoutId:q,transition:{duration:.15,easings:[Za(.2,0,0,1)]},"aria-hidden":!le,className:on(Se.label,!le&&Se.visible,K?Se.floating:Se.resting),children:F}):""},V=Z(!0),J=Z(!1),Q=w?.(V),E=on(Se.field,_&&Se.error,f&&Se.focused,a&&Se.disabled,m&&Se.populated,!o&&Se["no-label"],!!y&&Se["with-start"],!!b&&Se["with-end"]);return g.jsxs("div",Object.assign({className:E},k,{children:[g.jsxs("div",{className:on(Se["container-overflow"],i),children:[D?.(),A?.(f),Q,g.jsxs("div",{className:Se.container,children:[g.jsx("div",{className:Se.start,children:y}),g.jsxs("div",{className:Se.middle,children:[g.jsxs("span",{className:Se["label-wrapper"],children:[J,Q?"":V]}),g.jsx("div",{className:Se.content,children:p})]}),g.jsx("div",{className:Se.end,children:b})]})]}),g.jsx(N4,{max:u,count:d,error:_,errorText:j,supportingText:N})]}))},M4=()=>g.jsxs(Ve.Fragment,{children:[g.jsx("div",{className:Se.background}),g.jsx("div",{className:Se["state-layer"]})]}),z4=()=>g.jsx("div",{className:Se["active-indicator"]}),Ug=n=>{const{children:a}=n,i=Xr(n,["children"]);return g.jsx(d0,Object.assign({},i,{className:Se.filled,renderBackground:M4,renderIndicator:z4,children:g.jsx("div",{className:Se["input-wrapper"],children:a})}))},R4=n=>g.jsxs("div",{className:Se.outline,children:[g.jsx("div",{className:Se["outline-start"]}),g.jsxs("div",{className:Se["outline-notch"],children:[g.jsx("div",{className:Se["outline-panel-inactive"]}),g.jsx("div",{className:Se["outline-panel-active"]}),g.jsx("div",{className:Se["outline-label"],children:n})]}),g.jsx("div",{className:Se["outline-end"]})]}),D4=n=>{const{children:a}=n,i=Xr(n,["children"]);return g.jsx(d0,Object.assign({},i,{className:Se.outlined,renderOutline:R4,children:g.jsx("div",{className:Se["input-wrapper"],children:a})}))};var vd={filled:"text-field-module_filled__bCfKF",outlined:"text-field-module_outlined__vwS7g",prefix:"text-field-module_prefix__9Zf4V",suffix:"text-field-module_suffix__itEyf"};en(`.text-field-module_filled__bCfKF {\r
  --_leading-space: var(--md-filled-text-field-leading-space, 16px);\r
  --_trailing-space: var(--md-filled-text-field-trailing-space, 16px);\r
  --_top-space: var(--md-filled-text-field-top-space, 16px);\r
  --_bottom-space: var(--md-filled-text-field-bottom-space, 16px);\r
  --_input-text-prefix-trailing-space: var(\r
    --md-filled-text-field-input-text-prefix-trailing-space,\r
    2px\r
  );\r
  --_input-text-suffix-leading-space: var(\r
    --md-filled-text-field-input-text-suffix-leading-space,\r
    2px\r
  );\r
  --_with-label-top-space: var(\r
    --md-filled-text-field-with-label-top-space,\r
    8px\r
  );\r
  --_with-label-bottom-space: var(\r
    --md-filled-text-field-with-label-bottom-space,\r
    8px\r
  );\r
  --_focus-caret-color: var(\r
    --md-filled-text-field-focus-caret-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_active-indicator-color: var(\r
    --md-filled-text-field-active-indicator-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_active-indicator-height: var(\r
    --md-filled-text-field-active-indicator-height,\r
    1px\r
  );\r
  --_caret-color: var(\r
    --md-filled-text-field-caret-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_container-color: var(\r
    --md-filled-text-field-container-color,\r
    var(--md-sys-color-surface-container-highest)\r
  );\r
  --_container-shape-start-start: var(\r
    --md-filled-text-field-container-shape-start-start,\r
    var(--md-filled-text-field-container-shape, 4px)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-filled-text-field-container-shape-start-end,\r
    var(--md-filled-text-field-container-shape, 4px)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-filled-text-field-container-shape-end-end,\r
    var(--md-filled-text-field-container-shape, 0px)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-filled-text-field-container-shape-end-start,\r
    var(--md-filled-text-field-container-shape, 0px)\r
  );\r
  --_disabled-active-indicator-color: var(\r
    --md-filled-text-field-disabled-active-indicator-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-active-indicator-height: var(\r
    --md-filled-text-field-disabled-active-indicator-height,\r
    1px\r
  );\r
  --_disabled-active-indicator-opacity: var(\r
    --md-filled-text-field-disabled-active-indicator-opacity,\r
    0.38\r
  );\r
  --_disabled-container-color: var(\r
    --md-filled-text-field-disabled-container-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-filled-text-field-disabled-container-opacity,\r
    0.04\r
  );\r
  --_disabled-input-text-color: var(\r
    --md-filled-text-field-disabled-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-input-text-opacity: var(\r
    --md-filled-text-field-disabled-input-text-opacity,\r
    0.38\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-filled-text-field-disabled-label-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-filled-text-field-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-leading-icon-color: var(\r
    --md-filled-text-field-disabled-leading-icon-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-leading-icon-opacity: var(\r
    --md-filled-text-field-disabled-leading-icon-opacity,\r
    0.38\r
  );\r
  --_disabled-supporting-text-color: var(\r
    --md-filled-text-field-disabled-supporting-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-supporting-text-opacity: var(\r
    --md-filled-text-field-disabled-supporting-text-opacity,\r
    0.38\r
  );\r
  --_disabled-trailing-icon-color: var(\r
    --md-filled-text-field-disabled-trailing-icon-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-trailing-icon-opacity: var(\r
    --md-filled-text-field-disabled-trailing-icon-opacity,\r
    0.38\r
  );\r
  --_error-active-indicator-color: var(\r
    --md-filled-text-field-error-active-indicator-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-active-indicator-color: var(\r
    --md-filled-text-field-error-focus-active-indicator-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-caret-color: var(\r
    --md-filled-text-field-error-focus-caret-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-input-text-color: var(\r
    --md-filled-text-field-error-focus-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-focus-label-text-color: var(\r
    --md-filled-text-field-error-focus-label-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-leading-icon-color: var(\r
    --md-filled-text-field-error-focus-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-focus-supporting-text-color: var(\r
    --md-filled-text-field-error-focus-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-trailing-icon-color: var(\r
    --md-filled-text-field-error-focus-trailing-icon-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-hover-active-indicator-color: var(\r
    --md-filled-text-field-error-hover-active-indicator-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-hover-input-text-color: var(\r
    --md-filled-text-field-error-hover-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-hover-label-text-color: var(\r
    --md-filled-text-field-error-hover-label-text-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-hover-leading-icon-color: var(\r
    --md-filled-text-field-error-hover-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-hover-state-layer-color: var(\r
    --md-filled-text-field-error-hover-state-layer-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-hover-state-layer-opacity: var(\r
    --md-filled-text-field-error-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_error-hover-supporting-text-color: var(\r
    --md-filled-text-field-error-hover-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-hover-trailing-icon-color: var(\r
    --md-filled-text-field-error-hover-trailing-icon-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-input-text-color: var(\r
    --md-filled-text-field-error-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-label-text-color: var(\r
    --md-filled-text-field-error-label-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-leading-icon-color: var(\r
    --md-filled-text-field-error-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-supporting-text-color: var(\r
    --md-filled-text-field-error-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-trailing-icon-color: var(\r
    --md-filled-text-field-error-trailing-icon-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_focus-active-indicator-color: var(\r
    --md-filled-text-field-focus-active-indicator-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_focus-active-indicator-height: var(\r
    --md-filled-text-field-focus-active-indicator-height,\r
    3px\r
  );\r
  --_focus-input-text-color: var(\r
    --md-filled-text-field-focus-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_focus-label-text-color: var(\r
    --md-filled-text-field-focus-label-text-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_focus-leading-icon-color: var(\r
    --md-filled-text-field-focus-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_focus-supporting-text-color: var(\r
    --md-filled-text-field-focus-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_focus-trailing-icon-color: var(\r
    --md-filled-text-field-focus-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-active-indicator-color: var(\r
    --md-filled-text-field-hover-active-indicator-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-active-indicator-height: var(\r
    --md-filled-text-field-hover-active-indicator-height,\r
    1px\r
  );\r
  --_hover-input-text-color: var(\r
    --md-filled-text-field-hover-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-filled-text-field-hover-label-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-leading-icon-color: var(\r
    --md-filled-text-field-hover-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-filled-text-field-hover-state-layer-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-filled-text-field-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_hover-supporting-text-color: var(\r
    --md-filled-text-field-hover-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-trailing-icon-color: var(\r
    --md-filled-text-field-hover-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-color: var(\r
    --md-filled-text-field-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_input-text-font: var(\r
    --md-filled-text-field-input-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_input-text-line-height: var(\r
    --md-filled-text-field-input-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_input-text-placeholder-color: var(\r
    --md-filled-text-field-input-text-placeholder-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-prefix-color: var(\r
    --md-filled-text-field-input-text-prefix-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-size: var(\r
    --md-filled-text-field-input-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_input-text-suffix-color: var(\r
    --md-filled-text-field-input-text-suffix-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-weight: var(\r
    --md-filled-text-field-input-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_label-text-color: var(\r
    --md-filled-text-field-label-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_label-text-font: var(\r
    --md-filled-text-field-label-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-filled-text-field-label-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_label-text-populated-line-height: var(\r
    --md-filled-text-field-label-text-populated-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_label-text-populated-size: var(\r
    --md-filled-text-field-label-text-populated-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_label-text-size: var(\r
    --md-filled-text-field-label-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-filled-text-field-label-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_leading-icon-color: var(\r
    --md-filled-text-field-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);\r
  --_supporting-text-color: var(\r
    --md-filled-text-field-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_supporting-text-font: var(\r
    --md-filled-text-field-supporting-text-font,\r
    var(\r
      --md-sys-typescale-body-small-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_supporting-text-leading-space: var(\r
    --md-filled-field-supporting-text-leading-space,\r
    16px\r
  );\r
  --_supporting-text-line-height: var(\r
    --md-filled-text-field-supporting-text-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_supporting-text-size: var(\r
    --md-filled-text-field-supporting-text-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_supporting-text-top-space: var(\r
    --md-filled-field-supporting-text-top-space,\r
    4px\r
  );\r
  --_supporting-text-trailing-space: var(\r
    --md-filled-field-supporting-text-trailing-space,\r
    16px\r
  );\r
  --_supporting-text-weight: var(\r
    --md-filled-text-field-supporting-text-weight,\r
    var(\r
      --md-sys-typescale-body-small-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_trailing-icon-color: var(\r
    --md-filled-text-field-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);\r
  --md-filled-field-active-indicator-color: var(--_active-indicator-color);\r
  --md-filled-field-active-indicator-height: var(--_active-indicator-height);\r
  --md-filled-field-bottom-space: var(--_bottom-space);\r
  --md-filled-field-container-color: var(--_container-color);\r
  --md-filled-field-container-shape-end-end: var(--_container-shape-end-end);\r
  --md-filled-field-container-shape-end-start: var(\r
    --_container-shape-end-start\r
  );\r
  --md-filled-field-container-shape-start-end: var(\r
    --_container-shape-start-end\r
  );\r
  --md-filled-field-container-shape-start-start: var(\r
    --_container-shape-start-start\r
  );\r
  --md-filled-field-content-color: var(--_input-text-color);\r
  --md-filled-field-content-font: var(--_input-text-font);\r
  --md-filled-field-content-line-height: var(--_input-text-line-height);\r
  --md-filled-field-content-size: var(--_input-text-size);\r
  --md-filled-field-content-weight: var(--_input-text-weight);\r
  --md-filled-field-disabled-active-indicator-color: var(\r
    --_disabled-active-indicator-color\r
  );\r
  --md-filled-field-disabled-active-indicator-height: var(\r
    --_disabled-active-indicator-height\r
  );\r
  --md-filled-field-disabled-active-indicator-opacity: var(\r
    --_disabled-active-indicator-opacity\r
  );\r
  --md-filled-field-disabled-container-color: var(--_disabled-container-color);\r
  --md-filled-field-disabled-container-opacity: var(\r
    --_disabled-container-opacity\r
  );\r
  --md-filled-field-disabled-content-color: var(--_disabled-input-text-color);\r
  --md-filled-field-disabled-content-opacity: var(\r
    --_disabled-input-text-opacity\r
  );\r
  --md-filled-field-disabled-label-text-color: var(\r
    --_disabled-label-text-color\r
  );\r
  --md-filled-field-disabled-label-text-opacity: var(\r
    --_disabled-label-text-opacity\r
  );\r
  --md-filled-field-disabled-leading-content-color: var(\r
    --_disabled-leading-icon-color\r
  );\r
  --md-filled-field-disabled-leading-content-opacity: var(\r
    --_disabled-leading-icon-opacity\r
  );\r
  --md-filled-field-disabled-supporting-text-color: var(\r
    --_disabled-supporting-text-color\r
  );\r
  --md-filled-field-disabled-supporting-text-opacity: var(\r
    --_disabled-supporting-text-opacity\r
  );\r
  --md-filled-field-disabled-trailing-content-color: var(\r
    --_disabled-trailing-icon-color\r
  );\r
  --md-filled-field-disabled-trailing-content-opacity: var(\r
    --_disabled-trailing-icon-opacity\r
  );\r
  --md-filled-field-error-active-indicator-color: var(\r
    --_error-active-indicator-color\r
  );\r
  --md-filled-field-error-content-color: var(--_error-input-text-color);\r
  --md-filled-field-error-focus-active-indicator-color: var(\r
    --_error-focus-active-indicator-color\r
  );\r
  --md-filled-field-error-focus-content-color: var(\r
    --_error-focus-input-text-color\r
  );\r
  --md-filled-field-error-focus-label-text-color: var(\r
    --_error-focus-label-text-color\r
  );\r
  --md-filled-field-error-focus-leading-content-color: var(\r
    --_error-focus-leading-icon-color\r
  );\r
  --md-filled-field-error-focus-supporting-text-color: var(\r
    --_error-focus-supporting-text-color\r
  );\r
  --md-filled-field-error-focus-trailing-content-color: var(\r
    --_error-focus-trailing-icon-color\r
  );\r
  --md-filled-field-error-hover-active-indicator-color: var(\r
    --_error-hover-active-indicator-color\r
  );\r
  --md-filled-field-error-hover-content-color: var(\r
    --_error-hover-input-text-color\r
  );\r
  --md-filled-field-error-hover-label-text-color: var(\r
    --_error-hover-label-text-color\r
  );\r
  --md-filled-field-error-hover-leading-content-color: var(\r
    --_error-hover-leading-icon-color\r
  );\r
  --md-filled-field-error-hover-state-layer-color: var(\r
    --_error-hover-state-layer-color\r
  );\r
  --md-filled-field-error-hover-state-layer-opacity: var(\r
    --_error-hover-state-layer-opacity\r
  );\r
  --md-filled-field-error-hover-supporting-text-color: var(\r
    --_error-hover-supporting-text-color\r
  );\r
  --md-filled-field-error-hover-trailing-content-color: var(\r
    --_error-hover-trailing-icon-color\r
  );\r
  --md-filled-field-error-label-text-color: var(--_error-label-text-color);\r
  --md-filled-field-error-leading-content-color: var(\r
    --_error-leading-icon-color\r
  );\r
  --md-filled-field-error-supporting-text-color: var(\r
    --_error-supporting-text-color\r
  );\r
  --md-filled-field-error-trailing-content-color: var(\r
    --_error-trailing-icon-color\r
  );\r
  --md-filled-field-focus-active-indicator-color: var(\r
    --_focus-active-indicator-color\r
  );\r
  --md-filled-field-focus-active-indicator-height: var(\r
    --_focus-active-indicator-height\r
  );\r
  --md-filled-field-focus-content-color: var(--_focus-input-text-color);\r
  --md-filled-field-focus-label-text-color: var(--_focus-label-text-color);\r
  --md-filled-field-focus-leading-content-color: var(\r
    --_focus-leading-icon-color\r
  );\r
  --md-filled-field-focus-supporting-text-color: var(\r
    --_focus-supporting-text-color\r
  );\r
  --md-filled-field-focus-trailing-content-color: var(\r
    --_focus-trailing-icon-color\r
  );\r
  --md-filled-field-hover-active-indicator-color: var(\r
    --_hover-active-indicator-color\r
  );\r
  --md-filled-field-hover-active-indicator-height: var(\r
    --_hover-active-indicator-height\r
  );\r
  --md-filled-field-hover-content-color: var(--_hover-input-text-color);\r
  --md-filled-field-hover-label-text-color: var(--_hover-label-text-color);\r
  --md-filled-field-hover-leading-content-color: var(\r
    --_hover-leading-icon-color\r
  );\r
  --md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);\r
  --md-filled-field-hover-state-layer-opacity: var(\r
    --_hover-state-layer-opacity\r
  );\r
  --md-filled-field-hover-supporting-text-color: var(\r
    --_hover-supporting-text-color\r
  );\r
  --md-filled-field-hover-trailing-content-color: var(\r
    --_hover-trailing-icon-color\r
  );\r
  --md-filled-field-label-text-color: var(--_label-text-color);\r
  --md-filled-field-label-text-font: var(--_label-text-font);\r
  --md-filled-field-label-text-line-height: var(--_label-text-line-height);\r
  --md-filled-field-label-text-populated-line-height: var(\r
    --_label-text-populated-line-height\r
  );\r
  --md-filled-field-label-text-populated-size: var(\r
    --_label-text-populated-size\r
  );\r
  --md-filled-field-label-text-size: var(--_label-text-size);\r
  --md-filled-field-label-text-weight: var(--_label-text-weight);\r
  --md-filled-field-leading-content-color: var(--_leading-icon-color);\r
  --md-filled-field-leading-space: var(--_leading-space);\r
  --md-filled-field-supporting-text-color: var(--_supporting-text-color);\r
  --md-filled-field-supporting-text-font: var(--_supporting-text-font);\r
  --md-filled-field-supporting-text-line-height: var(\r
    --_supporting-text-line-height\r
  );\r
  --md-filled-field-supporting-text-size: var(--_supporting-text-size);\r
  --md-filled-field-supporting-text-weight: var(--_supporting-text-weight);\r
  --md-filled-field-top-space: var(--_top-space);\r
  --md-filled-field-trailing-content-color: var(--_trailing-icon-color);\r
  --md-filled-field-trailing-space: var(--_trailing-space);\r
  --md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);\r
  --md-filled-field-with-label-top-space: var(--_with-label-top-space);\r
}\r
\r
.text-field-module_outlined__vwS7g {\r
  --_leading-space: var(--md-outlined-text-field-leading-space, 16px);\r
  --_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);\r
  --_top-space: var(--md-outlined-text-field-top-space, 16px);\r
  --_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);\r
  --_input-text-prefix-trailing-space: var(\r
    --md-outlined-text-field-input-text-prefix-trailing-space,\r
    2px\r
  );\r
  --_input-text-suffix-leading-space: var(\r
    --md-outlined-text-field-input-text-suffix-leading-space,\r
    2px\r
  );\r
  --_focus-caret-color: var(\r
    --md-outlined-text-field-focus-caret-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_caret-color: var(\r
    --md-outlined-text-field-caret-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_container-shape: var(--md-outlined-text-field-container-shape, 4px);\r
  --_disabled-input-text-color: var(\r
    --md-outlined-text-field-disabled-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-input-text-opacity: var(\r
    --md-outlined-text-field-disabled-input-text-opacity,\r
    0.38\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-outlined-text-field-disabled-label-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-outlined-text-field-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-leading-icon-color: var(\r
    --md-outlined-text-field-disabled-leading-icon-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-leading-icon-opacity: var(\r
    --md-outlined-text-field-disabled-leading-icon-opacity,\r
    0.38\r
  );\r
  --_disabled-outline-color: var(\r
    --md-outlined-text-field-disabled-outline-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-outline-opacity: var(\r
    --md-outlined-text-field-disabled-outline-opacity,\r
    0.12\r
  );\r
  --_disabled-outline-width: var(\r
    --md-outlined-text-field-disabled-outline-width,\r
    1px\r
  );\r
  --_disabled-supporting-text-color: var(\r
    --md-outlined-text-field-disabled-supporting-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-supporting-text-opacity: var(\r
    --md-outlined-text-field-disabled-supporting-text-opacity,\r
    0.38\r
  );\r
  --_disabled-trailing-icon-color: var(\r
    --md-outlined-text-field-disabled-trailing-icon-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-trailing-icon-opacity: var(\r
    --md-outlined-text-field-disabled-trailing-icon-opacity,\r
    0.38\r
  );\r
  --_error-focus-caret-color: var(\r
    --md-outlined-text-field-error-focus-caret-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-input-text-color: var(\r
    --md-outlined-text-field-error-focus-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-focus-label-text-color: var(\r
    --md-outlined-text-field-error-focus-label-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-leading-icon-color: var(\r
    --md-outlined-text-field-error-focus-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-focus-outline-color: var(\r
    --md-outlined-text-field-error-focus-outline-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-supporting-text-color: var(\r
    --md-outlined-text-field-error-focus-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-trailing-icon-color: var(\r
    --md-outlined-text-field-error-focus-trailing-icon-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-hover-input-text-color: var(\r
    --md-outlined-text-field-error-hover-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-hover-label-text-color: var(\r
    --md-outlined-text-field-error-hover-label-text-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-hover-leading-icon-color: var(\r
    --md-outlined-text-field-error-hover-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-hover-outline-color: var(\r
    --md-outlined-text-field-error-hover-outline-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-hover-supporting-text-color: var(\r
    --md-outlined-text-field-error-hover-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-hover-trailing-icon-color: var(\r
    --md-outlined-text-field-error-hover-trailing-icon-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-input-text-color: var(\r
    --md-outlined-text-field-error-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-label-text-color: var(\r
    --md-outlined-text-field-error-label-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-leading-icon-color: var(\r
    --md-outlined-text-field-error-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-outline-color: var(\r
    --md-outlined-text-field-error-outline-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-supporting-text-color: var(\r
    --md-outlined-text-field-error-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-trailing-icon-color: var(\r
    --md-outlined-text-field-error-trailing-icon-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_focus-input-text-color: var(\r
    --md-outlined-text-field-focus-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_focus-label-text-color: var(\r
    --md-outlined-text-field-focus-label-text-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_focus-leading-icon-color: var(\r
    --md-outlined-text-field-focus-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_focus-outline-color: var(\r
    --md-outlined-text-field-focus-outline-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_focus-outline-width: var(\r
    --md-outlined-text-field-focus-outline-width,\r
    3px\r
  );\r
  --_focus-supporting-text-color: var(\r
    --md-outlined-text-field-focus-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_focus-trailing-icon-color: var(\r
    --md-outlined-text-field-focus-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-input-text-color: var(\r
    --md-outlined-text-field-hover-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-outlined-text-field-hover-label-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-leading-icon-color: var(\r
    --md-outlined-text-field-hover-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-outline-color: var(\r
    --md-outlined-text-field-hover-outline-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-outline-width: var(\r
    --md-outlined-text-field-hover-outline-width,\r
    1px\r
  );\r
  --_hover-supporting-text-color: var(\r
    --md-outlined-text-field-hover-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-trailing-icon-color: var(\r
    --md-outlined-text-field-hover-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-color: var(\r
    --md-outlined-text-field-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_input-text-font: var(\r
    --md-outlined-text-field-input-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_input-text-line-height: var(\r
    --md-outlined-text-field-input-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_input-text-placeholder-color: var(\r
    --md-outlined-text-field-input-text-placeholder-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-prefix-color: var(\r
    --md-outlined-text-field-input-text-prefix-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-size: var(\r
    --md-outlined-text-field-input-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_input-text-suffix-color: var(\r
    --md-outlined-text-field-input-text-suffix-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-weight: var(\r
    --md-outlined-text-field-input-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_label-text-color: var(\r
    --md-outlined-text-field-label-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_label-text-font: var(\r
    --md-outlined-text-field-label-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-outlined-text-field-label-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_label-text-populated-line-height: var(\r
    --md-outlined-text-field-label-text-populated-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_label-text-populated-size: var(\r
    --md-outlined-text-field-label-text-populated-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_label-text-size: var(\r
    --md-outlined-text-field-label-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-outlined-text-field-label-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_leading-icon-color: var(\r
    --md-outlined-text-field-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);\r
  --_outline-color: var(\r
    --md-outlined-text-field-outline-color,\r
    var(--md-sys-color-outline)\r
  );\r
  --_outline-width: var(--md-outlined-text-field-outline-width, 1px);\r
  --_supporting-text-color: var(\r
    --md-outlined-text-field-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_supporting-text-font: var(\r
    --md-outlined-text-field-supporting-text-font,\r
    var(\r
      --md-sys-typescale-body-small-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_supporting-text-leading-space: var(\r
    --md-outlined-field-supporting-text-leading-space,\r
    16px\r
  );\r
  --_supporting-text-line-height: var(\r
    --md-outlined-text-field-supporting-text-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_supporting-text-size: var(\r
    --md-outlined-text-field-supporting-text-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_supporting-text-top-space: var(\r
    --md-outlined-field-supporting-text-top-space,\r
    4px\r
  );\r
  --_supporting-text-trailing-space: var(\r
    --md-outlined-field-supporting-text-trailing-space,\r
    16px\r
  );\r
  --_supporting-text-weight: var(\r
    --md-outlined-text-field-supporting-text-weight,\r
    var(\r
      --md-sys-typescale-body-small-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_trailing-icon-color: var(\r
    --md-outlined-text-field-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);\r
  --_container-shape-start-start: var(\r
    --md-outlined-text-field-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-outlined-text-field-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-outlined-text-field-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-outlined-text-field-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
  --md-outlined-field-bottom-space: var(--_bottom-space);\r
  --md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);\r
  --md-outlined-field-container-shape-end-start: var(\r
    --_container-shape-end-start\r
  );\r
  --md-outlined-field-container-shape-start-end: var(\r
    --_container-shape-start-end\r
  );\r
  --md-outlined-field-container-shape-start-start: var(\r
    --_container-shape-start-start\r
  );\r
  --md-outlined-field-content-color: var(--_input-text-color);\r
  --md-outlined-field-content-font: var(--_input-text-font);\r
  --md-outlined-field-content-line-height: var(--_input-text-line-height);\r
  --md-outlined-field-content-size: var(--_input-text-size);\r
  --md-outlined-field-content-weight: var(--_input-text-weight);\r
  --md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);\r
  --md-outlined-field-disabled-content-opacity: var(\r
    --_disabled-input-text-opacity\r
  );\r
  --md-outlined-field-disabled-label-text-color: var(\r
    --_disabled-label-text-color\r
  );\r
  --md-outlined-field-disabled-label-text-opacity: var(\r
    --_disabled-label-text-opacity\r
  );\r
  --md-outlined-field-disabled-leading-content-color: var(\r
    --_disabled-leading-icon-color\r
  );\r
  --md-outlined-field-disabled-leading-content-opacity: var(\r
    --_disabled-leading-icon-opacity\r
  );\r
  --md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);\r
  --md-outlined-field-disabled-outline-opacity: var(\r
    --_disabled-outline-opacity\r
  );\r
  --md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);\r
  --md-outlined-field-disabled-supporting-text-color: var(\r
    --_disabled-supporting-text-color\r
  );\r
  --md-outlined-field-disabled-supporting-text-opacity: var(\r
    --_disabled-supporting-text-opacity\r
  );\r
  --md-outlined-field-disabled-trailing-content-color: var(\r
    --_disabled-trailing-icon-color\r
  );\r
  --md-outlined-field-disabled-trailing-content-opacity: var(\r
    --_disabled-trailing-icon-opacity\r
  );\r
  --md-outlined-field-error-content-color: var(--_error-input-text-color);\r
  --md-outlined-field-error-focus-content-color: var(\r
    --_error-focus-input-text-color\r
  );\r
  --md-outlined-field-error-focus-label-text-color: var(\r
    --_error-focus-label-text-color\r
  );\r
  --md-outlined-field-error-focus-leading-content-color: var(\r
    --_error-focus-leading-icon-color\r
  );\r
  --md-outlined-field-error-focus-outline-color: var(\r
    --_error-focus-outline-color\r
  );\r
  --md-outlined-field-error-focus-supporting-text-color: var(\r
    --_error-focus-supporting-text-color\r
  );\r
  --md-outlined-field-error-focus-trailing-content-color: var(\r
    --_error-focus-trailing-icon-color\r
  );\r
  --md-outlined-field-error-hover-content-color: var(\r
    --_error-hover-input-text-color\r
  );\r
  --md-outlined-field-error-hover-label-text-color: var(\r
    --_error-hover-label-text-color\r
  );\r
  --md-outlined-field-error-hover-leading-content-color: var(\r
    --_error-hover-leading-icon-color\r
  );\r
  --md-outlined-field-error-hover-outline-color: var(\r
    --_error-hover-outline-color\r
  );\r
  --md-outlined-field-error-hover-supporting-text-color: var(\r
    --_error-hover-supporting-text-color\r
  );\r
  --md-outlined-field-error-hover-trailing-content-color: var(\r
    --_error-hover-trailing-icon-color\r
  );\r
  --md-outlined-field-error-label-text-color: var(--_error-label-text-color);\r
  --md-outlined-field-error-leading-content-color: var(\r
    --_error-leading-icon-color\r
  );\r
  --md-outlined-field-error-outline-color: var(--_error-outline-color);\r
  --md-outlined-field-error-supporting-text-color: var(\r
    --_error-supporting-text-color\r
  );\r
  --md-outlined-field-error-trailing-content-color: var(\r
    --_error-trailing-icon-color\r
  );\r
  --md-outlined-field-focus-content-color: var(--_focus-input-text-color);\r
  --md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);\r
  --md-outlined-field-focus-leading-content-color: var(\r
    --_focus-leading-icon-color\r
  );\r
  --md-outlined-field-focus-outline-color: var(--_focus-outline-color);\r
  --md-outlined-field-focus-outline-width: var(--_focus-outline-width);\r
  --md-outlined-field-focus-supporting-text-color: var(\r
    --_focus-supporting-text-color\r
  );\r
  --md-outlined-field-focus-trailing-content-color: var(\r
    --_focus-trailing-icon-color\r
  );\r
  --md-outlined-field-hover-content-color: var(--_hover-input-text-color);\r
  --md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);\r
  --md-outlined-field-hover-leading-content-color: var(\r
    --_hover-leading-icon-color\r
  );\r
  --md-outlined-field-hover-outline-color: var(--_hover-outline-color);\r
  --md-outlined-field-hover-outline-width: var(--_hover-outline-width);\r
  --md-outlined-field-hover-supporting-text-color: var(\r
    --_hover-supporting-text-color\r
  );\r
  --md-outlined-field-hover-trailing-content-color: var(\r
    --_hover-trailing-icon-color\r
  );\r
  --md-outlined-field-label-text-color: var(--_label-text-color);\r
  --md-outlined-field-label-text-font: var(--_label-text-font);\r
  --md-outlined-field-label-text-line-height: var(--_label-text-line-height);\r
  --md-outlined-field-label-text-populated-line-height: var(\r
    --_label-text-populated-line-height\r
  );\r
  --md-outlined-field-label-text-populated-size: var(\r
    --_label-text-populated-size\r
  );\r
  --md-outlined-field-label-text-size: var(--_label-text-size);\r
  --md-outlined-field-label-text-weight: var(--_label-text-weight);\r
  --md-outlined-field-leading-content-color: var(--_leading-icon-color);\r
  --md-outlined-field-leading-space: var(--_leading-space);\r
  --md-outlined-field-outline-color: var(--_outline-color);\r
  --md-outlined-field-outline-width: var(--_outline-width);\r
  --md-outlined-field-supporting-text-color: var(--_supporting-text-color);\r
  --md-outlined-field-supporting-text-font: var(--_supporting-text-font);\r
  --md-outlined-field-supporting-text-line-height: var(\r
    --_supporting-text-line-height\r
  );\r
  --md-outlined-field-supporting-text-size: var(--_supporting-text-size);\r
  --md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);\r
  --md-outlined-field-top-space: var(--_top-space);\r
  --md-outlined-field-trailing-content-color: var(--_trailing-icon-color);\r
  --md-outlined-field-trailing-space: var(--_trailing-space);\r
}\r
.text-field-module_prefix__9Zf4V {\r
  text-wrap: nowrap;\r
  width: min-content;\r
  color: var(--_input-text-prefix-color);\r
  padding-inline-end: var(--_input-text-prefix-trailing-space);\r
}\r
.text-field-module_suffix__itEyf {\r
  text-wrap: nowrap;\r
  width: min-content;\r
  padding-inline-start: var(--_input-text-suffix-leading-space);\r
}\r
`);function O4(n,a){let{inputElementType:i="input",isDisabled:o=!1,isRequired:u=!1,isReadOnly:d=!1,type:f="text",validationBehavior:m="aria"}=n,[h,p]=S4(n.value,n.defaultValue||"",n.onChange),{focusableProps:y}=l0(n,a),b=_4({...n,value:h}),{isInvalid:_,validationErrors:j,validationDetails:N}=b.displayValidation,{labelProps:w,fieldProps:A,descriptionProps:D,errorMessageProps:k}=w4({...n,isInvalid:_,errorMessage:n.errorMessage||j}),q=kf(n,{labelable:!0});const Z={type:f,pattern:n.pattern};return C4(a,h,p),A4(n,b,a),S.useEffect((()=>{if(a.current instanceof Jt(a.current).HTMLTextAreaElement){let V=a.current;Object.defineProperty(V,"defaultValue",{get:()=>V.value,set:()=>{},configurable:!0})}}),[a]),{labelProps:w,inputProps:yt(q,i==="input"?Z:void 0,{disabled:o,readOnly:d,required:u&&m==="native","aria-required":u&&m==="aria"||void 0,"aria-invalid":_||void 0,"aria-errormessage":n["aria-errormessage"],"aria-activedescendant":n["aria-activedescendant"],"aria-autocomplete":n["aria-autocomplete"],"aria-haspopup":n["aria-haspopup"],"aria-controls":n["aria-controls"],value:h,onChange:V=>p(V.target.value),autoComplete:n.autoComplete,autoCapitalize:n.autoCapitalize,maxLength:n.maxLength,minLength:n.minLength,name:n.name,placeholder:n.placeholder,inputMode:n.inputMode,autoCorrect:n.autoCorrect,spellCheck:n.spellCheck,[parseInt(Ve.version,10)>=17?"enterKeyHint":"enterkeyhint"]:n.enterKeyHint,onCopy:n.onCopy,onCut:n.onCut,onPaste:n.onPaste,onCompositionEnd:n.onCompositionEnd,onCompositionStart:n.onCompositionStart,onCompositionUpdate:n.onCompositionUpdate,onSelect:n.onSelect,onBeforeInput:n.onBeforeInput,onInput:n.onInput,...y,...A}),descriptionProps:D,errorMessageProps:k,isInvalid:_,validationErrors:j,validationDetails:N}}const Qd=n=>{var a;const i=Ve.useRef(null),{style:o,onFocus:u,onBlur:d,className:f,suffixText:m,prefixText:h,leadingIcon:p,trailingIcon:y,ref:b=i,type:_="text",variant:j="filled",inputProps:N,children:w}=n,A=Xr(n,["style","onFocus","onBlur","className","suffixText","prefixText","leadingIcon","trailingIcon","ref","type","variant","inputProps","children"]),{inputProps:D,labelProps:k,descriptionProps:q,errorMessageProps:Z,isInvalid:V,validationErrors:J}=O4(Object.assign(Object.assign({},A),{inputElementType:n.type=="textarea"?"textarea":"input"}),b),{focusProps:Q,isFocused:E}=Si();let K=Ug;j=="filled"&&(K=Ug),j=="outlined"&&(K=D4);const le=(a=(N??D).value)===null||a===void 0?void 0:a.toString().length,F=!!(N??D).value;return g.jsxs("label",Object.assign({},k,{className:vd[j],children:[g.jsxs(K,{leadingIcon:p,trailingIcon:y,count:le,populated:F,label:n.label,focused:E,children:[h&&g.jsx("span",{className:vd.prefix,children:h}),_=="textarea"?g.jsx("textarea",Object.assign({style:Object.assign({resize:"vertical",overflowX:"hidden",wordBreak:"break-word"},o),className:f},yt(Q,N??D),{ref:b})):g.jsx("input",Object.assign({style:o,className:f},yt(Q,N??D),{type:_,ref:b})),m&&g.jsx("span",{className:vd.suffix,children:m})]}),n.description&&g.jsx("div",Object.assign({},q,{style:{fontSize:12},children:n.description})),V&&g.jsx("div",Object.assign({},Z,{style:{color:"red",fontSize:12},children:J.join(" ")}))]}))};Qd.displayName="Actify.TextField";const Es="../backend";async function $4(){const n=await fetch(`${Es}/api/get_content.php`);if(!n.ok)throw new Error(`Failed to load site content (${n.status})`);return n.json()}async function L4(n){const a=await fetch(`${Es}/api/submit_order.php`,{method:"POST",body:n});let i={};try{const o=await a.text();console.log("Response status:",a.status),console.log("Response text:",o),i=o?JSON.parse(o):{}}catch(o){console.error("Failed to parse response:",o)}if(!a.ok||!i.ok)throw new Error(i.error||"ثبت سفارش با خطا مواجه شد. لطفاً دوباره تلاش کنید.");return i}async function f0(){const n=await fetch(`${Es}/api/get_blog_posts.php`);if(!n.ok)throw new Error(`Failed to load blog posts (${n.status})`);return n.json()}async function Bg(n,a,i){const o=await fetch(`${Es}/api/submit_comment.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({post_id:n,content:a,parent_id:i})});if(!o.ok){const u=await o.json().catch(()=>({}));throw new Error(u.error||"ارسال نظر با خطا مواجه شد")}return o.json()}function Zd(n){try{const a=new Date(n);return new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"long",day:"numeric"}).format(a)}catch{return n}}const Fd={settings:{},benefits:[],products:[],gallery:[],form:[]},m0=S.createContext({data:Fd,loading:!0,error:null}),U4={color_primary:"--color-primary",color_on_primary:"--color-on-primary",color_bg_light:"--color-bg",color_surface_light:"--color-surface",color_text_light:"--color-on-bg"},B4={color_primary_dark:"--color-primary",color_on_primary_dark:"--color-on-primary",color_bg_dark:"--color-bg",color_surface_dark:"--color-surface",color_text_dark:"--color-on-bg"};function V4(n){let a=document.getElementById("dynamic-colors");a||(a=document.createElement("style"),a.id="dynamic-colors",document.head.appendChild(a));const i=Object.entries(U4).filter(([u])=>n[u]).map(([u,d])=>`${d}: ${n[u]};`).join(" "),o=Object.entries(B4).filter(([u])=>n[u]).map(([u,d])=>`${d}: ${n[u]};`).join(" ");a.textContent=`:root { ${i} } html.dark { ${o} }`}function H4({children:n}){const[a,i]=S.useState({data:Fd,loading:!0,error:null});return S.useEffect(()=>{let o=!1;return $4().then(u=>{o||(V4(u.settings),i({data:u,loading:!1,error:null}))}).catch(u=>{o||i({data:Fd,loading:!1,error:u instanceof Error?u.message:"خطا در بارگذاری اطلاعات سایت"})}),()=>{o=!0}},[]),g.jsx(m0.Provider,{value:a,children:n})}function un(){return S.useContext(m0)}function Vg(){const{data:n}=un(),a=n.settings,[i,o]=S.useState(()=>typeof window<"u"?localStorage.getItem("theme")==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches:!1);S.useEffect(()=>{const d=document.documentElement;i?(d.classList.add("dark"),localStorage.setItem("theme","dark")):(d.classList.remove("dark"),localStorage.setItem("theme","light"))},[i]);const u=()=>o(d=>!d);return g.jsxs("header",{className:"w-full sticky top-0 z-50 shadow-sm transition-colors duration-300",children:[g.jsx("div",{className:"bg-primary text-on-primary text-label py-2 px-4 sm:px-8 transition-colors duration-300",children:g.jsxs("div",{className:"max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-2",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"campaign"}),g.jsx("span",{children:a.topbar_message||"فروش ویژه درب و پنجره UPVC با شرایط اقساطی"})]}),g.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"schedule"}),g.jsx("span",{children:a.topbar_hours||"شنبه تا پنجشنبه: ۸ الی ۲۰"})]}),g.jsxs("div",{className:"flex items-center gap-1.5",dir:"ltr",children:[g.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"phone_in_talk"}),g.jsx("span",{children:a.site_phone||"+98 922 002 3242"})]})]})]})}),g.jsx("div",{className:"bg-surface border-b border-slate-200 dark:border-white/10 px-4 sm:px-8 py-3 transition-colors duration-300",children:g.jsxs("div",{className:"max-w-[1200px] mx-auto flex items-center justify-between",children:[g.jsx("a",{href:"#s1",className:"text-h3 text-primary tracking-tight",children:a.site_title||"NorthStarWin"}),g.jsxs("div",{className:"flex items-center gap-3 sm:gap-6",children:[g.jsxs("nav",{className:"hidden md:flex items-center gap-6 text-body-sm font-bold text-surface",children:[g.jsx("a",{href:"#products",className:"hover:text-primary transition-colors",children:"محصولات"}),g.jsx("a",{href:"#s2",className:"hover:text-primary transition-colors",children:"همکاری"}),g.jsx("a",{href:"#s3",className:"hover:text-primary transition-colors",children:"ثبت سفارش"})]}),g.jsx(s0,{onClick:u,className:"text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full cursor-pointer transition-all",title:i?"حالت روشن":"حالت تاریک",children:g.jsx("span",{className:"material-symbols-outlined select-none text-xl",children:i?"light_mode":"dark_mode"})})]})]})})]})}function wt({size:n,variant:a="outline",opacity:i=1,blur:o,style:u,className:d=""}){const f={position:"absolute",width:n,height:n,transform:"rotate(45deg)",filter:o?`blur(${o}px)`:void 0,...u};return a==="fill"?g.jsx("span",{"aria-hidden":"true",className:d,style:{...f,backgroundColor:"var(--color-primary)",opacity:i}}):g.jsx("span",{"aria-hidden":"true",className:`border border-slate-300/70 dark:border-white/10 ${d}`,style:f})}function Xf({children:n,className:a=""}){return g.jsx("div",{"aria-hidden":"true",className:`pointer-events-none absolute inset-0 overflow-hidden -z-10 ${a}`,children:n})}function k4(){return g.jsxs(Xf,{children:[g.jsx(wt,{size:120,style:{top:-50,right:-40}}),g.jsx(wt,{size:70,style:{top:40,right:90}}),g.jsx(wt,{variant:"fill",opacity:.15,size:46,style:{top:90,right:60}}),g.jsx(wt,{variant:"fill",opacity:.5,size:26,style:{top:118,right:40},className:"hidden sm:block"}),g.jsx(wt,{size:140,style:{bottom:-60,left:-50},className:"hidden md:block"}),g.jsx(wt,{variant:"fill",opacity:.1,size:200,blur:50,style:{bottom:-80,left:-60},className:"hidden md:block"}),g.jsx(wt,{variant:"fill",opacity:.35,size:20,style:{bottom:30,left:60}})]})}function h0({side:n="left"}){const a=n==="right"?{right:-40}:{left:-40},i=n==="right"?{right:10}:{left:10},o=n==="right"?{right:-6}:{left:-6};return g.jsxs(Xf,{children:[g.jsx(wt,{size:80,style:{top:-30,...a},className:"hidden sm:block"}),g.jsx(wt,{variant:"fill",opacity:.18,size:34,style:{top:30,...i}}),g.jsx(wt,{variant:"fill",opacity:.5,size:18,style:{top:55,...o}})]})}function Y4(){return g.jsxs(Xf,{children:[g.jsx(wt,{size:64,style:{top:-20,left:24},className:"hidden sm:block"}),g.jsx(wt,{size:64,style:{bottom:-20,right:24},className:"hidden sm:block"}),g.jsx(wt,{variant:"fill",opacity:.2,size:30,style:{bottom:40,right:90}}),g.jsx(wt,{variant:"fill",opacity:.55,size:18,style:{bottom:20,right:70}})]})}function q4(){const{data:n}=un(),a=n.settings,i={title:a.hero_security_title||"امنیت و پایداری",description:a.hero_security_description||"امنیت خانواده شما، اولویت اصلی ماست. درب‌های UPVC به دلیل بهره‌گیری از هسته فولادی گالوانیزه و سیستم‌های قفل پیشرفته، سدی نفوذناپذیر ایجاد می‌کنند.",image:a.hero_security_image},o={title:a.hero_durability_title||"دوام و طول عمر",description:a.hero_durability_description||"دوام بی‌نظیر در برابر زمان و طبیعت، درب‌های UPVC با مقاومت بالا در برابر اشعه‌های خورشیدی بدون تغییر شکل یا رنگ، تا ۳۰ سال در کنار شما می‌مانند.",image:a.hero_durability_image};return g.jsxs("section",{id:"s1",className:"relative w-full py-16 px-6 sm:px-8 transition-colors duration-300",style:{backgroundColor:"var(--color-bg)"},children:[g.jsx(k4,{}),g.jsxs("div",{className:"max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",children:[g.jsxs("div",{className:"flex flex-col-reverse sm:flex-row items-center gap-6 text-right",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("h2",{className:"text-h2 text-surface mb-3",children:i.title}),g.jsx("p",{className:"text-body text-surface/80 mb-4",children:i.description}),g.jsxs("a",{href:"#products",className:"inline-flex items-center gap-1 text-body-sm font-bold text-surface hover:text-primary transition-colors group",children:[g.jsx("span",{children:"مشاهده محصولات"}),g.jsx("span",{className:"material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1 select-none",children:"arrow_back"})]})]}),g.jsx("div",{className:"flex-1 flex justify-center",children:g.jsx("img",{src:i.image,alt:i.title,className:"max-h-[600px] w-auto object-contain drop-shadow-sm"})})]}),g.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-6 text-right",children:[g.jsx("div",{className:"flex-1 flex justify-center",children:g.jsx("img",{src:o.image,alt:o.title,className:"max-h-[490px] w-auto object-contain drop-shadow-sm"})}),g.jsxs("div",{className:"flex-1",children:[g.jsx("h2",{className:"text-h2 text-surface mb-3",children:o.title}),g.jsx("p",{className:"text-body text-surface/80 mb-4",children:o.description}),g.jsxs("a",{href:"#benefits",className:"inline-flex items-center gap-1 text-body-sm font-bold text-surface hover:text-primary transition-colors group",children:[g.jsx("span",{children:"مزایا"}),g.jsx("span",{className:"material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1 select-none",children:"arrow_back"})]})]})]})]})]})}function G4(){const{data:n}=un(),a=n.settings;return g.jsxs("section",{id:"s2",className:"relative py-16 px-4 sm:px-8 text-center max-w-[900px] mx-auto text-surface transition-colors duration-300",children:[g.jsx(h0,{side:"right"}),g.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:a.collab_title||"دعوت به همکاری"}),g.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3 mb-6"}),g.jsx("p",{className:"text-body text-surface/80 mb-6",children:a.collab_description||"ما به دنبال برقراری همکاری‌های بلندمدت با سازندگان، پیمانکاران و نصابان حرفه‌ای صنعت ساختمان هستیم."}),g.jsx("a",{href:"#s3",className:"inline-block text-body-sm font-bold text-surface hover:text-primary transition-colors",children:a.collab_button_text||"درخواست همکاری"})]})}const X4=n=>new Intl.NumberFormat("fa-IR").format(n);function P4(){const{data:n}=un();return n.products.length===0?null:g.jsxs("section",{id:"products",className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[g.jsxs("div",{className:"text-center mb-10",children:[g.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"محصولات ما"}),g.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:n.products.map(a=>g.jsxs("div",{className:"bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200/60 dark:border-white/10 transition-all duration-300 flex flex-col text-center",children:[a.image_url&&g.jsx("div",{className:"h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",children:g.jsx("img",{src:a.image_url,alt:a.name,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105"})}),g.jsxs("div",{className:"p-6 flex flex-col items-center flex-grow",children:[g.jsx("h3",{className:"text-h3 text-surface mb-2",children:a.name}),a.description&&g.jsx("p",{className:"text-body-sm text-surface/70 mb-4 flex-grow",children:a.description}),!!a.price_min&&g.jsxs("p",{className:"text-body-sm font-semibold text-primary mb-4",children:["قیمت: از ",X4(a.price_min)," تومان"]}),g.jsx(Lt,{variant:"text",onClick:()=>window.location.hash="#gallery",className:"text-body-sm font-bold text-surface hover:text-primary transition-colors",children:"مشاهده جزئیات"})]})]},a.id))})]})}function K4(){const{data:n}=un();return n.benefits.length===0?null:g.jsxs("section",{id:"benefits",className:"relative py-16 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[g.jsx(h0,{side:"left"}),g.jsxs("div",{className:"text-center mb-14",children:[g.jsxs("h2",{className:"text-h2 text-primary tracking-tight",children:[n.settings.site_title||"NorthStarWin"," چرا؟"]}),g.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8",children:n.benefits.map(a=>g.jsxs("div",{className:"flex flex-col items-center text-center p-2",children:[g.jsx("span",{className:"material-symbols-outlined text-primary mb-3 select-none",style:{fontSize:"56px"},children:a.icon_name||"star"}),g.jsx("h3",{className:"text-h3 text-surface mb-1.5",children:a.title}),g.jsx("p",{className:"text-body-sm text-surface/70",children:a.description})]},a.id))})]})}function Q4(){const{data:n}=un(),[a,i]=S.useState(null);return n.gallery.length===0?null:g.jsxs("section",{id:"gallery",className:"py-16 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[g.jsxs("div",{className:"text-center mb-12",children:[g.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"پروژه‌های اجرا شده"}),g.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:n.gallery.map(o=>g.jsxs("div",{onClick:()=>i(o),className:"group relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 bg-slate-200 dark:bg-[#1f1f21]",children:[g.jsx("img",{src:o.image_url,alt:o.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5",children:g.jsx("span",{className:"text-white text-body-sm font-bold drop-shadow",children:o.title||"مشاهده تصویر"})})]},o.id))}),a&&g.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>i(null),children:g.jsxs("div",{className:"relative max-w-4xl w-full bg-surface rounded-3xl overflow-hidden shadow-2xl p-2",onClick:o=>o.stopPropagation(),children:[g.jsx("button",{onClick:()=>i(null),className:"absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer",children:g.jsx("span",{className:"material-symbols-outlined",children:"close"})}),g.jsx("img",{src:a.image_url,alt:a.title,className:"w-full max-h-[80vh] object-contain rounded-2xl"}),a.title&&g.jsx("p",{className:"text-center py-3 text-body-sm font-bold text-surface",children:a.title})]})})]})}const Z4=({post:n,onReadMore:a})=>{const{data:i}=un();return i.settings,g.jsxs(Hx,{className:"w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-surface dark:bg-surface-dark border border-slate-200/60 dark:border-white/10",children:[n.image_url&&g.jsx("div",{className:"h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",children:g.jsx("img",{src:n.image_url,alt:n.title,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105"})}),g.jsxs("div",{className:"p-6",children:[g.jsxs("div",{className:"flex items-center gap-2 mb-3 flex-wrap",children:[n.category&&g.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-label-sm font-bold bg-primary/10 text-primary",children:n.category}),g.jsxs("span",{className:"text-label-sm text-surface/60 flex items-center gap-1",children:[g.jsx("span",{className:"material-symbols-outlined text-sm",children:"schedule"}),Zd(n.created_at)]}),n.author_name&&g.jsxs("span",{className:"text-label-sm text-surface/60 flex items-center gap-1",children:[g.jsx("span",{className:"material-symbols-outlined text-sm",children:"person"}),n.author_name]})]}),g.jsx("h3",{className:"text-h3 text-surface mb-3 font-bold tracking-tight",children:n.title}),n.excerpt&&g.jsx("p",{className:"text-body-sm text-surface/70 mb-4 line-clamp-3",children:n.excerpt}),g.jsxs("div",{className:"flex items-center justify-between mt-4",children:[g.jsxs("div",{className:"flex items-center gap-3 text-surface/60",children:[g.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[g.jsx("span",{className:"material-symbols-outlined text-sm",children:"visibility"}),n.view_count||0]}),g.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[g.jsx("span",{className:"material-symbols-outlined text-sm",children:"chat_bubble"}),n.comment_count||0]})]}),g.jsxs(Lt,{variant:"text",onClick:()=>a(n),className:"text-body-sm font-bold text-primary hover:bg-primary/5 transition-colors",children:["ادامه مطلب",g.jsx("span",{className:"material-symbols-outlined text-sm mr-1",children:"arrow_left_alt"})]})]})]})]})};function F4(){const{data:n}=un(),a=n.settings,[i,o]=S.useState([]),[u,d]=S.useState(!0),[f,m]=S.useState(null),[h,p]=S.useState("all"),y=tf();S.useEffect(()=>{b()},[]);const b=async()=>{try{const D=await f0();o(D)}catch(D){console.error("Failed to load blog posts:",D)}finally{d(!1)}},_=D=>{y(`/blog/${D.id}`)},j=Array.from(new Set(i.map(D=>D.category).filter(Boolean))),w=[...i].sort((D,k)=>(k.view_count||0)-(D.view_count||0)).slice(0,3),A=h==="all"?w:w.filter(D=>D.category===h);return g.jsxs("section",{id:"blog",className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[g.jsxs("div",{className:"text-center mb-10",children:[g.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"وبلاگ"}),g.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"}),g.jsx("p",{className:"text-body-sm text-surface/70 mt-4",children:a.blog_description||"آخرین مقالات و اخبار را اینجا بخوانید"})]}),j.length>0&&g.jsxs("div",{className:"flex flex-wrap justify-center gap-2 mb-8",children:[g.jsx(Lt,{variant:h==="all"?"contained":"outlined",onClick:()=>p("all"),className:`text-body-sm font-bold ${h==="all"?"bg-primary text-on-primary":"text-surface border-surface/30"}`,children:"همه"}),j.map(D=>g.jsx(Lt,{variant:h===D?"contained":"outlined",onClick:()=>p(D),className:`text-body-sm font-bold ${h===D?"bg-primary text-on-primary":"text-surface border-surface/30"}`,children:D},D))]}),u?g.jsx("div",{className:"flex justify-center items-center py-20",children:g.jsx("span",{className:"material-symbols-outlined text-4xl text-primary animate-spin",children:"progress_activity"})}):A.length===0?g.jsxs("div",{className:"text-center py-20",children:[g.jsx("span",{className:"material-symbols-outlined text-6xl text-surface/30 mb-4",children:"article"}),g.jsx("p",{className:"text-body text-surface/60",children:"مقاله‌ای یافت نشد"})]}):g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:A.map(D=>g.jsx(Z4,{post:D,onReadMore:_},D.id))})]})}function J4(){const{data:n,loading:a}=un(),i=n.form,[o,u]=S.useState(0),[d,f]=S.useState({}),[m,h]=S.useState(null),[p,y]=S.useState(null),[b,_]=S.useState(!1),[j,N]=S.useState(!1),[w,A]=S.useState(null),[D,k]=S.useState(""),[q,Z]=S.useState(""),V=R=>{if(!R.depends_on||!R.depends_value)return!0;const G=d[R.depends_on];return G?R.depends_value.split(",").map(pe=>pe.trim()).includes(G):!1};if(a||i.length===0)return null;const J=(R,G)=>{f(ee=>({...ee,[R]:G}))},Q=(R,G)=>{const ee=G.target.files?.[0];if(!ee)return;const pe=5*1024*1024;if(ee.size>pe){A("حجم فایل نباید بیشتر از 5 مگابایت باشد."),G.target.value="";return}if(h(ee),J(R,ee.name),ee.type.startsWith("image/")){const ce=new FileReader;ce.onloadend=()=>y(ce.result),ce.readAsDataURL(ee)}else y(null)},E=R=>{h(null),y(null),J(R,"")},K=R=>{if(!V(R)||!R.required)return!0;if(R.type==="file")return!!m;const G=(d[R.key]||"").trim();return G===""?!1:R.key==="phone"?/^09[0-9]{9}$/.test(G):!0},le=R=>{if(!V(R)||!R.required)return null;if(R.type==="file")return!m&&!d[R.key]?`${R.label} الزامی است`:null;const G=(d[R.key]||"").trim();return G===""?`${R.label} الزامی است`:R.key==="phone"&&!/^09[0-9]{9}$/.test(G)?"شماره موبایل معتبر نیست":null},F=R=>i[R].fields.filter(V).every(K),oe=()=>{if(!F(o)){A("لطفاً تمام فیلدهای الزامی این مرحله را پر کنید.");return}A(null),o===i.length-1?re():u(R=>R+1)},z=()=>o>0&&u(R=>R-1),W=R=>{if(R>o&&!F(o)){A("لطفاً تمام فیلدهای الزامی این مرحله را پر کنید.");return}A(null),u(R)},re=async()=>{_(!0),A(null);try{if(!i.flatMap(ce=>ce.fields).filter(V).every(K)){A("لطفاً تمام فیلدهای الزامی را پر کنید."),_(!1);return}const G=new FormData;Object.entries(d).forEach(([ce,C])=>{C&&G.append(ce,C)}),G.append("website",q);const ee=i.flatMap(ce=>ce.fields).find(ce=>ce.type==="file"&&V(ce));if(ee&&m)G.append(ee.key,m,m.name);else if(ee&&ee.required&&!m){A("لطفاً فایل مورد نظر را آپلود کنید."),_(!1);return}console.log("Submitting form data...");for(const[ce,C]of G.entries())console.log(`${ce}:`,C instanceof File?`File(${C.name})`:C);const pe=await L4(G);k(pe.tracking_code??""),N(!0)}catch(R){console.error("Submit error:",R),A(R instanceof Error?R.message:"خطای غیرمنتظره‌ای رخ داد.")}finally{_(!1)}};return g.jsxs("section",{id:"s3",className:"relative w-full my-12 px-4",children:[g.jsx(Y4,{}),g.jsxs("div",{className:"text-center mb-8",children:[g.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"ثبت سفارش آنلاین"}),g.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),j?g.jsxs("div",{className:"w-full max-w-[720px] mx-auto p-8 rounded-3xl bg-surface border border-slate-200 dark:border-white/10 text-center text-surface shadow-xl transition-colors duration-300",children:[g.jsx("span",{className:"material-symbols-outlined text-6xl text-green-500 mb-2 select-none",children:"check_circle"}),g.jsx("h3",{className:"text-h3 mb-2",children:"سفارش شما با موفقیت ثبت شد! 🎉"}),g.jsxs("p",{className:"text-body-sm text-surface/70 mb-6 flex items-center justify-center gap-2",children:["کد پیگیری:",g.jsxs("span",{className:"inline-block bg-primary/10 text-primary font-bold text-body px-3 py-0.5 rounded-full",children:["#",D]})]}),g.jsxs(Lt,{variant:"filled",className:"w-full sm:w-auto px-6 py-3 font-bold flex items-center justify-center gap-2 mx-auto bg-primary text-on-primary rounded-xl shadow-md cursor-pointer",onClick:()=>window.open("https://wa.me/989220023242","_blank"),children:[g.jsx("span",{className:"material-symbols-outlined select-none",children:"chat"}),"ارتباط سریع در واتساپ"]})]}):g.jsxs("div",{className:"w-full max-w-[720px] mx-auto p-6 sm:p-8 rounded-3xl bg-surface border border-slate-200 dark:border-white/10 text-surface shadow-xl transition-colors duration-300",children:[g.jsx("input",{type:"text",name:"website",value:q,onChange:R=>Z(R.target.value),className:"hidden",tabIndex:-1,autoComplete:"off"}),g.jsx("div",{className:"w-full mb-8",children:g.jsx(b4,{className:"w-full",children:g.jsx("div",{className:"grid w-full h-12 bg-slate-100 dark:bg-[color:var(--color-bg)] p-1 rounded-full border border-slate-200 dark:border-white/10",style:{gridTemplateColumns:`repeat(${i.length}, 1fr)`},children:i.map((R,G)=>g.jsx(g4,{label:R.title,selected:o===G,onPress:()=>W(G),className:`text-body-sm font-bold transition-all cursor-pointer ${G===0?"rounded-s-full":G===i.length-1?"rounded-e-full":""}`},R.title))})})}),g.jsxs("div",{className:"min-h-[320px]",children:[g.jsx("h3",{className:"text-h3 text-surface mb-1.5",children:i[o].title}),i[o].subtitle&&g.jsx("p",{className:"text-body-sm text-surface/70 mb-6",children:i[o].subtitle}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5",children:i[o].fields.filter(V).map(R=>{const G=le(R);return g.jsx(W4,{field:R,value:d[R.key]||"",onChange:ee=>{J(R.key,ee),w&&G&&A(null)},onFileChange:ee=>{Q(R.key,ee),w&&G&&A(null)},onRemoveFile:()=>E(R.key),filePreview:p,hasError:!!G,errorMessage:G},R.key)})})]}),w&&g.jsx("div",{className:"mt-4 p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-body-sm text-red-600 dark:text-red-400 text-center",children:w}),g.jsxs("div",{className:"flex items-center justify-between border-t border-slate-200 dark:border-white/10 pt-5 mt-8",children:[o>0?g.jsxs(Lt,{variant:"outlined",onClick:z,disabled:b,className:"flex items-center gap-2 px-5 py-2.5 rounded-xl border-slate-300 dark:border-[#45464d] text-surface cursor-pointer",children:[g.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"arrow_forward"}),"قبلی"]}):g.jsx("div",{}),g.jsxs(Lt,{variant:"filled",onClick:oe,disabled:!F(o)||b,className:"flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold bg-primary text-on-primary disabled:opacity-50 cursor-pointer transition-all",children:[b?"در حال ثبت...":o===i.length-1?"ثبت سفارش":"بعدی",o<i.length-1&&g.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"arrow_back"})]})]})]})]})}function W4({field:n,value:a,onChange:i,onFileChange:o,onRemoveFile:u,filePreview:d,hasError:f,errorMessage:m}){const h=`w-full h-12 bg-slate-50 dark:bg-[color:var(--color-bg)] border ${f?"border-red-500 focus:border-red-600":"border-slate-200 dark:border-[#45464d] focus:border-primary"} rounded-xl text-body-sm px-3 text-surface outline-none transition-colors`;if(n.type==="segmented")return g.jsxs("div",{className:"sm:col-span-2",children:[g.jsxs("label",{className:"text-label text-surface/70 mb-2 block",children:[n.label,n.required&&g.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:(n.options||[]).map(y=>{const b=a===y.value;return g.jsxs("div",{onClick:()=>i(y.value),className:`flex flex-col items-center justify-center text-center p-6 min-h-[140px] rounded-2xl cursor-pointer border transition-all duration-200 ${b?"bg-primary text-on-primary border-primary font-bold shadow-md scale-[1.02]":"bg-slate-50 dark:bg-[color:var(--color-bg)] text-surface border-slate-200 dark:border-[#45464d] hover:bg-slate-100 dark:hover:bg-white/5"} ${f&&!a?"border-red-500":""}`,children:[y.icon&&g.jsx("span",{className:"material-symbols-outlined text-7xl mb-2 select-none",children:y.icon}),g.jsx("span",{className:"text-body  font-semibold",children:y.label})]},y.value)})})]});if(n.type==="select")return g.jsxs("div",{className:"flex flex-col gap-1.5",children:[g.jsxs("label",{className:"text-label text-surface/70",children:[n.label,n.required&&g.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),g.jsxs("select",{value:a,onChange:y=>i(y.target.value),className:h,children:[g.jsx("option",{value:"",disabled:!0,children:"انتخاب کنید..."}),(n.options||[]).map(y=>g.jsx("option",{value:y.value,children:y.label},y.value))]})]});if(n.type==="textarea")return g.jsxs("div",{className:"sm:col-span-2 flex flex-col gap-1.5",children:[g.jsxs("label",{className:"text-label text-surface/70",children:[n.label,n.required&&g.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),g.jsx("textarea",{rows:2,placeholder:n.placeholder||"",value:a,onChange:y=>i(y.target.value),className:`w-full bg-slate-50 dark:bg-[color:var(--color-bg)] border ${f?"border-red-500 focus:border-red-600":"border-slate-200 dark:border-[#45464d] focus:border-primary"} rounded-xl text-body-sm p-3 text-surface outline-none transition-colors resize-none`})]});if(n.type==="file")return g.jsxs("div",{className:"sm:col-span-2 flex flex-col gap-1.5",children:[g.jsxs("label",{className:"text-label text-surface/70",children:[n.label," ",n.required&&g.jsx("span",{className:"text-red-500",children:"*"})]}),g.jsx("input",{accept:"image/*,.pdf,.doc,.docx",className:"hidden",id:`upload-${n.key}`,type:"file",onChange:o}),g.jsx("label",{htmlFor:`upload-${n.key}`,className:"cursor-pointer",children:d?g.jsxs("div",{className:"relative w-full rounded-xl overflow-hidden border border-slate-200 dark:border-[#45464d]",children:[g.jsx("img",{src:d,alt:"پیش‌نمایش",className:"w-full h-36 object-cover"}),g.jsx("button",{type:"button",onClick:y=>{y.preventDefault(),u()},className:"absolute top-2 right-2 bg-black/70 p-1.5 rounded-full text-white hover:bg-black transition-colors cursor-pointer",children:g.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"close"})})]}):a?g.jsxs("div",{className:"border-2 border-dashed border-primary bg-slate-50 dark:bg-[color:var(--color-bg)] rounded-xl p-4 text-center transition-all flex flex-col items-center justify-center gap-1",children:[g.jsx("span",{className:"material-symbols-outlined text-primary select-none",children:"insert_drive_file"}),g.jsx("span",{className:"text-body-sm text-surface/70",children:a}),g.jsx("button",{type:"button",onClick:y=>{y.preventDefault(),u()},className:"mt-2 text-red-500 hover:text-red-600 text-sm cursor-pointer",children:"حذف فایل"})]}):g.jsxs("div",{className:"border-2 border-dashed border-slate-300 dark:border-[#45464d] hover:border-primary bg-slate-50 dark:bg-[color:var(--color-bg)] rounded-xl p-4 text-center transition-all flex flex-col items-center justify-center gap-1",children:[g.jsx("span",{className:"material-symbols-outlined text-slate-500 dark:text-[#c6c6cd] select-none",children:"upload_file"}),g.jsx("span",{className:"text-body-sm text-surface/70",children:"برای آپلود عکس یا فایل نقشه کلیک کنید"}),n.required&&g.jsx("span",{className:"text-xs text-red-500",children:"* الزامی"})]})})]});const p=n.key==="phone";return g.jsxs("div",{className:"flex flex-col gap-1.5",children:[g.jsxs("label",{className:"text-label text-surface/70",children:[n.label,n.required&&g.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),g.jsx("input",{type:n.type==="number"?"number":"text",placeholder:n.placeholder||"",dir:p?"ltr":void 0,value:a,onChange:y=>i(y.target.value),className:`${h} ${p?"text-right":""}`}),p&&a&&!/^09[0-9]{9}$/.test(a)&&g.jsx("span",{className:"text-[11px] text-red-500",children:"شماره موبایل معتبر نیست"}),m&&g.jsx("span",{className:"text-[11px] text-red-500",children:m})]})}function Hg(){const{data:n}=un(),a=n.settings,i=a.site_title||"NorthStarWin";return g.jsx("footer",{className:"bg-slate-900 text-slate-300 dark:bg-[#111113] border-t border-slate-800/80 pt-16 pb-8 px-4 sm:px-8 transition-colors duration-300",children:g.jsxs("div",{className:"max-w-[1200px] mx-auto",children:[g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12",children:[g.jsxs("div",{className:"flex flex-col gap-4",children:[g.jsx("h3",{className:"text-h3 text-white tracking-tight",children:i}),g.jsx("p",{className:"text-body-sm text-slate-400 max-w-[320px]",children:a.site_description||"تامین‌کننده برتر درب و پنجره UPVC در ایران با بالاترین استاندارد عایق‌بندی و امنیت."})]}),g.jsxs("div",{className:"flex flex-col gap-4",children:[g.jsx("h4",{className:"text-body font-bold text-white border-b border-slate-800 pb-2 w-fit",children:"لینک‌های سریع"}),g.jsxs("ul",{className:"flex flex-col gap-2.5 text-body-sm text-slate-400",children:[g.jsx("li",{children:g.jsx("a",{href:"#products",className:"hover:text-primary transition-colors inline-block",children:"محصولات"})}),g.jsx("li",{children:g.jsx("a",{href:"#s2",className:"hover:text-primary transition-colors inline-block",children:"همکاری"})}),g.jsx("li",{children:g.jsx("a",{href:"#s3",className:"hover:text-primary transition-colors inline-block",children:"ثبت سفارش"})}),g.jsx("li",{children:g.jsx("a",{href:"/backend/admin/login.php",className:"text-slate-500 hover:text-slate-300 transition-colors inline-block mt-2 text-body-sm",children:"پنل مدیریت"})})]})]}),g.jsxs("div",{className:"flex flex-col gap-4",children:[g.jsx("h4",{className:"text-body font-bold text-white border-b border-slate-800 pb-2 w-fit",children:"تماس با ما"}),g.jsxs("div",{className:"flex flex-col gap-3 text-body-sm text-slate-400",children:[g.jsxs("div",{className:"flex items-center gap-2.5",children:[g.jsx("span",{className:"material-symbols-outlined text-primary text-lg select-none",children:"call"}),g.jsx("span",{dir:"ltr",className:"font-semibold",children:a.site_phone||"+98 922 002 3242"})]}),g.jsxs("div",{className:"flex items-center gap-2.5",children:[g.jsx("span",{className:"material-symbols-outlined text-primary text-lg select-none",children:"mail"}),g.jsx("span",{children:a.site_email||"info@northstarwin.com"})]}),g.jsxs("div",{className:"flex items-center gap-2.5",children:[g.jsx("span",{className:"material-symbols-outlined text-primary text-lg select-none",children:"location_on"}),g.jsx("span",{children:a.site_address||"تهران، ایران"})]})]})]})]}),g.jsx("div",{className:"border-t border-slate-800/80 pt-6 text-center text-body-sm text-slate-500",children:g.jsxs("p",{children:["© ۱۴۰۵ ",i," — تمامی حقوق محفوظ است"]})})]})})}function I4(){const{id:n}=AS(),a=tf(),{data:i}=un();i.settings;const[o,u]=S.useState(null),[d,f]=S.useState(!0),[m,h]=S.useState(""),[p,y]=S.useState(!1),[b,_]=S.useState(null),[j,N]=S.useState("");S.useEffect(()=>{w()},[n]);const w=async()=>{try{const V=(await f0()).find(J=>J.id===parseInt(n||"0"));u(V||null)}catch(Z){console.error("Failed to load post:",Z)}finally{f(!1)}},A=()=>{a("/#blog")},D=async Z=>{if(Z.preventDefault(),!(!m.trim()||!o)){y(!0);try{await Bg(o.id,m),h(""),w()}catch(V){console.error("Failed to submit comment:",V),alert("ارسال نظر با خطا مواجه شد")}finally{y(!1)}}},k=async Z=>{if(!(!j.trim()||!o)){y(!0);try{await Bg(o.id,j,Z),N(""),_(null),w()}catch(V){console.error("Failed to submit reply:",V),alert("ارسال پاسخ با خطا مواجه شد")}finally{y(!1)}}},q=(Z,V=null,J=0)=>{const Q=Z.filter(E=>E.parent_id===V);return Q.length===0?null:g.jsx("div",{className:`${J>0?"mr-8 mt-4":""}`,children:Q.map(E=>g.jsxs("div",{className:"border-b border-slate-200 dark:border-white/10 py-4",children:[g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold",children:E.author_name?.charAt(0)||"U"}),g.jsxs("div",{className:"flex-1",children:[g.jsxs("div",{className:"flex items-center justify-between mb-1",children:[g.jsx("span",{className:"font-bold text-surface",children:E.author_name||"ناشناس"}),g.jsx("span",{className:"text-label-sm text-surface/60",children:Zd(E.created_at)})]}),g.jsx("p",{className:"text-body-sm text-surface/80 mb-2",children:E.content}),E.is_approved===0&&g.jsxs("span",{className:"text-label-xs text-amber-600 flex items-center gap-1",children:[g.jsx("span",{className:"material-symbols-outlined text-sm",children:"pending"}),"در انتظار تایید"]}),J<2&&g.jsxs("button",{onClick:()=>_(b===E.id?null:E.id),className:"text-label-sm text-primary hover:text-primary-dark flex items-center gap-1",children:[g.jsx("span",{className:"material-symbols-outlined text-sm",children:"reply"}),"پاسخ"]}),b===E.id&&g.jsxs("form",{onSubmit:K=>{K.preventDefault(),k(E.id)},className:"mt-3",children:[g.jsx(Qd,{value:j,onChange:K=>N(K.target.value),placeholder:"پاسخ خود را بنویسید...",multiline:!0,rows:2,fullWidth:!0,className:"mb-2"}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx(Lt,{type:"submit",disabled:p||!j.trim(),variant:"contained",size:"small",children:"ارسال پاسخ"}),g.jsx(Lt,{type:"button",onClick:()=>_(null),variant:"text",size:"small",children:"انصراف"})]})]})]})]}),q(Z,E.id,J+1)]},E.id))})};return d?g.jsx("div",{className:"flex justify-center items-center py-20",children:g.jsx("span",{className:"material-symbols-outlined text-4xl text-primary animate-spin",children:"progress_activity"})}):o?g.jsxs("section",{className:"py-12 px-4 sm:px-8 max-w-[900px] mx-auto text-surface transition-colors duration-300",children:[g.jsxs(Lt,{variant:"text",onClick:A,className:"mb-6 text-body-sm font-bold text-surface hover:text-primary transition-colors",children:[g.jsx("span",{className:"material-symbols-outlined text-sm ml-1",children:"arrow_right_alt"}),"بازگشت به لیست مقالات"]}),g.jsxs("article",{className:"bg-surface dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200/60 dark:border-white/10 overflow-hidden",children:[o.image_url&&g.jsx("div",{className:"h-80 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",children:g.jsx("img",{src:o.image_url,alt:o.title,className:"w-full h-full object-cover"})}),g.jsxs("div",{className:"p-6 sm:p-8",children:[g.jsxs("div",{className:"flex items-center gap-2 mb-4 flex-wrap",children:[o.category&&g.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-label-sm font-bold bg-primary/10 text-primary",children:o.category}),g.jsxs("span",{className:"text-label-sm text-surface/60 flex items-center gap-1",children:[g.jsx("span",{className:"material-symbols-outlined text-sm",children:"schedule"}),Zd(o.created_at)]}),o.author_name&&g.jsxs("span",{className:"text-label-sm text-surface/60 flex items-center gap-1",children:[g.jsx("span",{className:"material-symbols-outlined text-sm",children:"person"}),o.author_name]})]}),g.jsx("h1",{className:"text-h2 text-surface font-bold mb-6 tracking-tight",children:o.title}),g.jsx("div",{className:"prose prose-slate dark:prose-invert max-w-none mb-8",children:o.content&&o.content.split(`
`).map((Z,V)=>g.jsx("p",{className:"text-body text-surface/80 mb-4 leading-relaxed",children:Z},V))}),g.jsxs("div",{className:"flex items-center gap-4 text-surface/60 mb-8 pb-8 border-b border-slate-200 dark:border-white/10",children:[g.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[g.jsx("span",{className:"material-symbols-outlined text-sm",children:"visibility"}),o.view_count||0," بازدید"]}),g.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[g.jsx("span",{className:"material-symbols-outlined text-sm",children:"chat_bubble"}),o.comment_count||0," نظر"]})]}),g.jsxs("div",{className:"mt-8",children:[g.jsxs("h3",{className:"text-h3 text-surface font-bold mb-4 flex items-center gap-2",children:[g.jsx("span",{className:"material-symbols-outlined text-primary",children:"chat_bubble"}),"نظرات (",o.comment_count||0,")"]}),g.jsxs("form",{onSubmit:D,className:"mb-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl",children:[g.jsx(Qd,{value:m,onChange:Z=>h(Z.target.value),placeholder:"نظر خود را بنویسید...",multiline:!0,rows:4,fullWidth:!0,className:"mb-3"}),g.jsx(Lt,{type:"submit",disabled:p||!m.trim(),variant:"contained",className:"bg-primary text-on-primary",children:p?g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"material-symbols-outlined text-sm animate-spin ml-2",children:"progress_activity"}),"در حال ارسال..."]}):g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"material-symbols-outlined text-sm ml-2",children:"send"}),"ارسال نظر"]})})]}),g.jsx("div",{className:"space-y-4",children:o.comments&&o.comments.length>0?q(o.comments):g.jsxs("div",{className:"text-center py-8 text-surface/60",children:[g.jsx("span",{className:"material-symbols-outlined text-4xl mb-2",children:"chat_bubble_outline"}),g.jsx("p",{children:"هنوز نظری ثبت نشده است. اولین نفر باشید!"})]})})]})]})]})]}):g.jsxs("div",{className:"text-center py-20",children:[g.jsx("span",{className:"material-symbols-outlined text-6xl text-surface/30 mb-4",children:"article"}),g.jsx("p",{className:"text-body text-surface/60",children:"مقاله‌ای یافت نشد"}),g.jsx(Lt,{onClick:A,variant:"text",className:"mt-4",children:"بازگشت به لیست مقالات"})]})}function e3(){return g.jsx(dE,{children:g.jsxs(kS,{children:[g.jsx(_d,{path:"/",element:g.jsxs("div",{children:[g.jsx("div",{className:"mb-16 sm:mb-24",children:g.jsx(Vg,{})}),g.jsx(q4,{}),g.jsx(G4,{}),g.jsx(P4,{}),g.jsx(Q4,{}),g.jsx(K4,{}),g.jsx("div",{className:"mb-16 sm:mb-24",children:g.jsx(J4,{})}),g.jsx(F4,{}),g.jsx(Hg,{})]})}),g.jsx(_d,{path:"/blog/:id",element:g.jsxs("div",{children:[g.jsx(Vg,{}),g.jsx(I4,{}),g.jsx(Hg,{})]})})]})})}var yd={exports:{}},Ql={},gd={exports:{}},bd={};var kg;function t3(){return kg||(kg=1,(function(n){function a(R,G){var ee=R.length;R.push(G);e:for(;0<ee;){var pe=ee-1>>>1,ce=R[pe];if(0<u(ce,G))R[pe]=G,R[ee]=ce,ee=pe;else break e}}function i(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var G=R[0],ee=R.pop();if(ee!==G){R[0]=ee;e:for(var pe=0,ce=R.length,C=ce>>>1;pe<C;){var X=2*(pe+1)-1,I=R[X],te=X+1,de=R[te];if(0>u(I,ee))te<ce&&0>u(de,I)?(R[pe]=de,R[te]=ee,pe=te):(R[pe]=I,R[X]=ee,pe=X);else if(te<ce&&0>u(de,ee))R[pe]=de,R[te]=ee,pe=te;else break e}}return G}function u(R,G){var ee=R.sortIndex-G.sortIndex;return ee!==0?ee:R.id-G.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var f=Date,m=f.now();n.unstable_now=function(){return f.now()-m}}var h=[],p=[],y=1,b=null,_=3,j=!1,N=!1,w=!1,A=!1,D=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function Z(R){for(var G=i(p);G!==null;){if(G.callback===null)o(p);else if(G.startTime<=R)o(p),G.sortIndex=G.expirationTime,a(h,G);else break;G=i(p)}}function V(R){if(w=!1,Z(R),!N)if(i(h)!==null)N=!0,J||(J=!0,oe());else{var G=i(p);G!==null&&re(V,G.startTime-R)}}var J=!1,Q=-1,E=5,K=-1;function le(){return A?!0:!(n.unstable_now()-K<E)}function F(){if(A=!1,J){var R=n.unstable_now();K=R;var G=!0;try{e:{N=!1,w&&(w=!1,k(Q),Q=-1),j=!0;var ee=_;try{t:{for(Z(R),b=i(h);b!==null&&!(b.expirationTime>R&&le());){var pe=b.callback;if(typeof pe=="function"){b.callback=null,_=b.priorityLevel;var ce=pe(b.expirationTime<=R);if(R=n.unstable_now(),typeof ce=="function"){b.callback=ce,Z(R),G=!0;break t}b===i(h)&&o(h),Z(R)}else o(h);b=i(h)}if(b!==null)G=!0;else{var C=i(p);C!==null&&re(V,C.startTime-R),G=!1}}break e}finally{b=null,_=ee,j=!1}G=void 0}}finally{G?oe():J=!1}}}var oe;if(typeof q=="function")oe=function(){q(F)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,W=z.port2;z.port1.onmessage=F,oe=function(){W.postMessage(null)}}else oe=function(){D(F,0)};function re(R,G){Q=D(function(){R(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return _},n.unstable_next=function(R){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var ee=_;_=G;try{return R()}finally{_=ee}},n.unstable_requestPaint=function(){A=!0},n.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var ee=_;_=R;try{return G()}finally{_=ee}},n.unstable_scheduleCallback=function(R,G,ee){var pe=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?pe+ee:pe):ee=pe,R){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=ee+ce,R={id:y++,callback:G,priorityLevel:R,startTime:ee,expirationTime:ce,sortIndex:-1},ee>pe?(R.sortIndex=ee,a(p,R),i(h)===null&&R===i(p)&&(w?(k(Q),Q=-1):w=!0,re(V,ee-pe))):(R.sortIndex=ce,a(h,R),N||j||(N=!0,J||(J=!0,oe()))),R},n.unstable_shouldYield=le,n.unstable_wrapCallback=function(R){var G=_;return function(){var ee=_;_=G;try{return R.apply(this,arguments)}finally{_=ee}}}})(bd)),bd}var Yg;function n3(){return Yg||(Yg=1,gd.exports=t3()),gd.exports}var qg;function r3(){if(qg)return Ql;qg=1;var n=n3(),a=Jd(),i=mb();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(d(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,l=t;;){var s=r.return;if(s===null)break;var c=s.alternate;if(c===null){if(l=s.return,l!==null){r=l;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===r)return h(s),e;if(c===l)return h(s),t;c=c.sibling}throw Error(o(188))}if(r.return!==l.return)r=s,l=c;else{for(var v=!1,x=s.child;x;){if(x===r){v=!0,r=s,l=c;break}if(x===l){v=!0,l=s,r=c;break}x=x.sibling}if(!v){for(x=c.child;x;){if(x===r){v=!0,r=c,l=s;break}if(x===l){v=!0,l=c,r=s;break}x=x.sibling}if(!v)throw Error(o(189))}}if(r.alternate!==l)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,_=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),q=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var z=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case D:return"Profiler";case A:return"StrictMode";case V:return"Suspense";case J:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case q:return e.displayName||"Context";case k:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case E:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}var re=Array.isArray,R=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},pe=[],ce=-1;function C(e){return{current:e}}function X(e){0>ce||(e.current=pe[ce],pe[ce]=null,ce--)}function I(e,t){ce++,pe[ce]=e.current,e.current=t}var te=C(null),de=C(null),ve=C(null),Ae=C(null);function ft(e,t){switch(I(ve,t),I(de,e),I(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vv(t),e=yv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(te),I(te,e)}function Xe(){X(te),X(de),X(ve)}function Ja(e){e.memoizedState!==null&&I(Ae,e);var t=te.current,r=yv(t,e.type);t!==r&&(I(de,e),I(te,r))}function Ei(e){de.current===e&&(X(te),X(de)),Ae.current===e&&(X(Ae),Hl._currentValue=ee)}var Ts,Pf;function gr(e){if(Ts===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ts=t&&t[1]||"",Pf=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ts+e+Pf}var ws=!1;function As(e,t){if(!e||ws)return"";ws=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(B){var U=B}Reflect.construct(e,[],P)}else{try{P.call()}catch(B){U=B}e.call(P.prototype)}}else{try{throw Error()}catch(B){U=B}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(B){if(B&&U&&typeof B.stack=="string")return[B.stack,U.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),v=c[0],x=c[1];if(v&&x){var T=v.split(`
`),L=x.split(`
`);for(s=l=0;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;for(;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;if(l===T.length||s===L.length)for(l=T.length-1,s=L.length-1;1<=l&&0<=s&&T[l]!==L[s];)s--;for(;1<=l&&0<=s;l--,s--)if(T[l]!==L[s]){if(l!==1||s!==1)do if(l--,s--,0>s||T[l]!==L[s]){var H=`
`+T[l].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=l&&0<=s);break}}}finally{ws=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?gr(r):""}function p0(e,t){switch(e.tag){case 26:case 27:case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return e.child!==t&&t!==null?gr("Suspense Fallback"):gr("Suspense");case 19:return gr("SuspenseList");case 0:case 15:return As(e.type,!1);case 11:return As(e.type.render,!1);case 1:return As(e.type,!0);case 31:return gr("Activity");default:return""}}function Kf(e){try{var t="",r=null;do t+=p0(e,r),r=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var js=Object.prototype.hasOwnProperty,Cs=n.unstable_scheduleCallback,Ns=n.unstable_cancelCallback,v0=n.unstable_shouldYield,y0=n.unstable_requestPaint,At=n.unstable_now,g0=n.unstable_getCurrentPriorityLevel,Qf=n.unstable_ImmediatePriority,Zf=n.unstable_UserBlockingPriority,Ti=n.unstable_NormalPriority,b0=n.unstable_LowPriority,Ff=n.unstable_IdlePriority,x0=n.log,_0=n.unstable_setDisableYieldValue,Wa=null,jt=null;function Hn(e){if(typeof x0=="function"&&_0(e),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(Wa,e)}catch{}}var Ct=Math.clz32?Math.clz32:T0,S0=Math.log,E0=Math.LN2;function T0(e){return e>>>=0,e===0?32:31-(S0(e)/E0|0)|0}var wi=256,Ai=262144,ji=4194304;function br(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ci(e,t,r){var l=e.pendingLanes;if(l===0)return 0;var s=0,c=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var x=l&134217727;return x!==0?(l=x&~c,l!==0?s=br(l):(v&=x,v!==0?s=br(v):r||(r=x&~e,r!==0&&(s=br(r))))):(x=l&~c,x!==0?s=br(x):v!==0?s=br(v):r||(r=l&~e,r!==0&&(s=br(r)))),s===0?0:t!==0&&t!==s&&(t&c)===0&&(c=s&-s,r=t&-t,c>=r||c===32&&(r&4194048)!==0)?t:s}function Ia(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function w0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jf(){var e=ji;return ji<<=1,(ji&62914560)===0&&(ji=4194304),e}function Ms(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function el(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function A0(e,t,r,l,s,c){var v=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var x=e.entanglements,T=e.expirationTimes,L=e.hiddenUpdates;for(r=v&~r;0<r;){var H=31-Ct(r),P=1<<H;x[H]=0,T[H]=-1;var U=L[H];if(U!==null)for(L[H]=null,H=0;H<U.length;H++){var B=U[H];B!==null&&(B.lane&=-536870913)}r&=~P}l!==0&&Wf(e,l,0),c!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=c&~(v&~t))}function Wf(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ct(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function If(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var l=31-Ct(r),s=1<<l;s&t|e[l]&t&&(e[l]|=t),r&=~s}}function em(e,t){var r=t&-t;return r=(r&42)!==0?1:zs(r),(r&(e.suspendedLanes|t))!==0?0:r}function zs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tm(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Hv(e.type))}function nm(e,t){var r=G.p;try{return G.p=e,t()}finally{G.p=r}}var kn=Math.random().toString(36).slice(2),rt="__reactFiber$"+kn,gt="__reactProps$"+kn,Zr="__reactContainer$"+kn,Ds="__reactEvents$"+kn,j0="__reactListeners$"+kn,C0="__reactHandles$"+kn,rm="__reactResources$"+kn,tl="__reactMarker$"+kn;function Os(e){delete e[rt],delete e[gt],delete e[Ds],delete e[j0],delete e[C0]}function Fr(e){var t=e[rt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Zr]||r[rt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Tv(e);e!==null;){if(r=e[rt])return r;e=Tv(e)}return t}e=r,r=e.parentNode}return null}function Jr(e){if(e=e[rt]||e[Zr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function nl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Wr(e){var t=e[rm];return t||(t=e[rm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[tl]=!0}var am=new Set,lm={};function xr(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(lm[e]=t,e=0;e<t.length;e++)am.add(t[e])}var N0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),im={},om={};function M0(e){return js.call(om,e)?!0:js.call(im,e)?!1:N0.test(e)?om[e]=!0:(im[e]=!0,!1)}function Ni(e,t,r){if(M0(t))if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+r)}}function Mi(e,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function bn(e,t,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+l)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function z0(e,t,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,c=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(v){r=""+v,c.call(this,v)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(v){r=""+v},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $s(e){if(!e._valueTracker){var t=sm(e)?"checked":"value";e._valueTracker=z0(e,t,""+e[t])}}function um(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),l="";return e&&(l=sm(e)?e.checked?"true":"false":e.value),e=l,e!==r?(t.setValue(e),!0):!1}function zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var R0=/[\n"\\]/g;function Bt(e){return e.replace(R0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ls(e,t,r,l,s,c,v,x){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),t!=null?v==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),t!=null?Us(e,v,Ut(t)):r!=null?Us(e,v,Ut(r)):l!=null&&e.removeAttribute("value"),s==null&&c!=null&&(e.defaultChecked=!!c),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Ut(x):e.removeAttribute("name")}function cm(e,t,r,l,s,c,v,x){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||r!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){$s(e);return}r=r!=null?""+Ut(r):"",t=t!=null?""+Ut(t):r,x||t===e.value||(e.value=t),e.defaultValue=t}l=l??s,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=x?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),$s(e)}function Us(e,t,r){t==="number"&&zi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function ea(e,t,r,l){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Ut(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function dm(e,t,r){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),r==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=r!=null?""+Ut(r):""}function fm(e,t,r,l){if(t==null){if(l!=null){if(r!=null)throw Error(o(92));if(re(l)){if(1<l.length)throw Error(o(93));l=l[0]}r=l}r==null&&(r=""),t=r}r=Ut(t),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),$s(e)}function ta(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var D0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mm(e,t,r){var l=t.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,r):typeof r!="number"||r===0||D0.has(t)?t==="float"?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function hm(e,t,r){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var s in t)l=t[s],t.hasOwnProperty(s)&&r[s]!==l&&mm(e,s,l)}else for(var c in t)t.hasOwnProperty(c)&&mm(e,c,t[c])}function Bs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var O0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return $0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xn(){}var Vs=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,ra=null;function pm(e){var t=Jr(e);if(t&&(e=t.stateNode)){var r=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ls(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Bt(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var l=r[t];if(l!==e&&l.form===e.form){var s=l[gt]||null;if(!s)throw Error(o(90));Ls(l,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<r.length;t++)l=r[t],l.form===e.form&&um(l)}break e;case"textarea":dm(e,r.value,r.defaultValue);break e;case"select":t=r.value,t!=null&&ea(e,!!r.multiple,t,!1)}}}var ks=!1;function vm(e,t,r){if(ks)return e(t,r);ks=!0;try{var l=e(t);return l}finally{if(ks=!1,(na!==null||ra!==null)&&(xo(),na&&(t=na,e=ra,ra=na=null,pm(t),e)))for(t=0;t<e.length;t++)pm(e[t])}}function rl(e,t){var r=e.stateNode;if(r===null)return null;var l=r[gt]||null;if(l===null)return null;r=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ys=!1;if(_n)try{var al={};Object.defineProperty(al,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",al,al),window.removeEventListener("test",al,al)}catch{Ys=!1}var Yn=null,qs=null,Di=null;function ym(){if(Di)return Di;var e,t=qs,r=t.length,l,s="value"in Yn?Yn.value:Yn.textContent,c=s.length;for(e=0;e<r&&t[e]===s[e];e++);var v=r-e;for(l=1;l<=v&&t[r-l]===s[c-l];l++);return Di=s.slice(e,1<l?1-l:void 0)}function Oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $i(){return!0}function gm(){return!1}function bt(e){function t(r,l,s,c,v){this._reactName=r,this._targetInst=s,this.type=l,this.nativeEvent=c,this.target=v,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(r=e[x],this[x]=r?r(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?$i:gm,this.isPropagationStopped=gm,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$i)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$i)},persist:function(){},isPersistent:$i}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=bt(_r),ll=b({},_r,{view:0,detail:0}),L0=bt(ll),Gs,Xs,il,Ui=b({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==il&&(il&&e.type==="mousemove"?(Gs=e.screenX-il.screenX,Xs=e.screenY-il.screenY):Xs=Gs=0,il=e),Gs)},movementY:function(e){return"movementY"in e?e.movementY:Xs}}),bm=bt(Ui),U0=b({},Ui,{dataTransfer:0}),B0=bt(U0),V0=b({},ll,{relatedTarget:0}),Ps=bt(V0),H0=b({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),k0=bt(H0),Y0=b({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),q0=bt(Y0),G0=b({},_r,{data:0}),xm=bt(G0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K0[e])?!!t[e]:!1}function Ks(){return Q0}var Z0=b({},ll,{key:function(e){if(e.key){var t=X0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),F0=bt(Z0),J0=b({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_m=bt(J0),W0=b({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),I0=bt(W0),e_=b({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),t_=bt(e_),n_=b({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),r_=bt(n_),a_=b({},_r,{newState:0,oldState:0}),l_=bt(a_),i_=[9,13,27,32],Qs=_n&&"CompositionEvent"in window,ol=null;_n&&"documentMode"in document&&(ol=document.documentMode);var o_=_n&&"TextEvent"in window&&!ol,Sm=_n&&(!Qs||ol&&8<ol&&11>=ol),Em=" ",Tm=!1;function wm(e,t){switch(e){case"keyup":return i_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Am(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var aa=!1;function s_(e,t){switch(e){case"compositionend":return Am(t);case"keypress":return t.which!==32?null:(Tm=!0,Em);case"textInput":return e=t.data,e===Em&&Tm?null:e;default:return null}}function u_(e,t){if(aa)return e==="compositionend"||!Qs&&wm(e,t)?(e=ym(),Di=qs=Yn=null,aa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sm&&t.locale!=="ko"?null:t.data;default:return null}}var c_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!c_[e.type]:t==="textarea"}function Cm(e,t,r,l){na?ra?ra.push(l):ra=[l]:na=l,t=jo(t,"onChange"),0<t.length&&(r=new Li("onChange","change",null,r,l),e.push({event:r,listeners:t}))}var sl=null,ul=null;function d_(e){cv(e,0)}function Bi(e){var t=nl(e);if(um(t))return e}function Nm(e,t){if(e==="change")return t}var Mm=!1;if(_n){var Zs;if(_n){var Fs="oninput"in document;if(!Fs){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),Fs=typeof zm.oninput=="function"}Zs=Fs}else Zs=!1;Mm=Zs&&(!document.documentMode||9<document.documentMode)}function Rm(){sl&&(sl.detachEvent("onpropertychange",Dm),ul=sl=null)}function Dm(e){if(e.propertyName==="value"&&Bi(ul)){var t=[];Cm(t,ul,e,Hs(e)),vm(d_,t)}}function f_(e,t,r){e==="focusin"?(Rm(),sl=t,ul=r,sl.attachEvent("onpropertychange",Dm)):e==="focusout"&&Rm()}function m_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bi(ul)}function h_(e,t){if(e==="click")return Bi(t)}function p_(e,t){if(e==="input"||e==="change")return Bi(t)}function v_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:v_;function cl(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),l=Object.keys(t);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var s=r[l];if(!js.call(t,s)||!Nt(e[s],t[s]))return!1}return!0}function Om(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $m(e,t){var r=Om(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=t&&l>=t)return{node:r,offset:t-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Om(r)}}function Lm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Um(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zi(e.document);t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=zi(e.document)}return t}function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var y_=_n&&"documentMode"in document&&11>=document.documentMode,la=null,Ws=null,dl=null,Is=!1;function Bm(e,t,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Is||la==null||la!==zi(l)||(l=la,"selectionStart"in l&&Js(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),dl&&cl(dl,l)||(dl=l,l=jo(Ws,"onSelect"),0<l.length&&(t=new Li("onSelect","select",null,t,r),e.push({event:t,listeners:l}),t.target=la)))}function Sr(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ia={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},eu={},Vm={};_n&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete ia.animationend.animation,delete ia.animationiteration.animation,delete ia.animationstart.animation),"TransitionEvent"in window||delete ia.transitionend.transition);function Er(e){if(eu[e])return eu[e];if(!ia[e])return e;var t=ia[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Vm)return eu[e]=t[r];return e}var Hm=Er("animationend"),km=Er("animationiteration"),Ym=Er("animationstart"),g_=Er("transitionrun"),b_=Er("transitionstart"),x_=Er("transitioncancel"),qm=Er("transitionend"),Gm=new Map,tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tu.push("scrollEnd");function tn(e,t){Gm.set(e,t),xr(t,[e])}var Vi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vt=[],oa=0,nu=0;function Hi(){for(var e=oa,t=nu=oa=0;t<e;){var r=Vt[t];Vt[t++]=null;var l=Vt[t];Vt[t++]=null;var s=Vt[t];Vt[t++]=null;var c=Vt[t];if(Vt[t++]=null,l!==null&&s!==null){var v=l.pending;v===null?s.next=s:(s.next=v.next,v.next=s),l.pending=s}c!==0&&Xm(r,s,c)}}function ki(e,t,r,l){Vt[oa++]=e,Vt[oa++]=t,Vt[oa++]=r,Vt[oa++]=l,nu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ru(e,t,r,l){return ki(e,t,r,l),Yi(e)}function Tr(e,t){return ki(e,null,null,t),Yi(e)}function Xm(e,t,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var s=!1,c=e.return;c!==null;)c.childLanes|=r,l=c.alternate,l!==null&&(l.childLanes|=r),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(s=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,s&&t!==null&&(s=31-Ct(r),e=c.hiddenUpdates,l=e[s],l===null?e[s]=[t]:l.push(t),t.lane=r|536870912),c):null}function Yi(e){if(50<Dl)throw Dl=0,fc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sa={};function __(e,t,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,r,l){return new __(e,t,r,l)}function au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sn(e,t){var r=e.alternate;return r===null?(r=Mt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Pm(e,t){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function qi(e,t,r,l,s,c){var v=0;if(l=e,typeof e=="function")au(e)&&(v=1);else if(typeof e=="string")v=A1(e,r,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=Mt(31,r,t,s),e.elementType=K,e.lanes=c,e;case w:return wr(r.children,s,c,t);case A:v=8,s|=24;break;case D:return e=Mt(12,r,t,s|2),e.elementType=D,e.lanes=c,e;case V:return e=Mt(13,r,t,s),e.elementType=V,e.lanes=c,e;case J:return e=Mt(19,r,t,s),e.elementType=J,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:v=10;break e;case k:v=9;break e;case Z:v=11;break e;case Q:v=14;break e;case E:v=16,l=null;break e}v=29,r=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Mt(v,r,t,s),t.elementType=e,t.type=l,t.lanes=c,t}function wr(e,t,r,l){return e=Mt(7,e,l,t),e.lanes=r,e}function lu(e,t,r){return e=Mt(6,e,null,t),e.lanes=r,e}function Km(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function iu(e,t,r){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qm=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var r=Qm.get(e);return r!==void 0?r:(t={value:e,source:t,stack:Kf(t)},Qm.set(e,t),t)}return{value:e,source:t,stack:Kf(t)}}var ua=[],ca=0,Gi=null,fl=0,kt=[],Yt=0,qn=null,cn=1,dn="";function En(e,t){ua[ca++]=fl,ua[ca++]=Gi,Gi=e,fl=t}function Zm(e,t,r){kt[Yt++]=cn,kt[Yt++]=dn,kt[Yt++]=qn,qn=e;var l=cn;e=dn;var s=32-Ct(l)-1;l&=~(1<<s),r+=1;var c=32-Ct(t)+s;if(30<c){var v=s-s%5;c=(l&(1<<v)-1).toString(32),l>>=v,s-=v,cn=1<<32-Ct(t)+s|r<<s|l,dn=c+e}else cn=1<<c|r<<s|l,dn=e}function ou(e){e.return!==null&&(En(e,1),Zm(e,1,0))}function su(e){for(;e===Gi;)Gi=ua[--ca],ua[ca]=null,fl=ua[--ca],ua[ca]=null;for(;e===qn;)qn=kt[--Yt],kt[Yt]=null,dn=kt[--Yt],kt[Yt]=null,cn=kt[--Yt],kt[Yt]=null}function Fm(e,t){kt[Yt++]=cn,kt[Yt++]=dn,kt[Yt++]=qn,cn=t.id,dn=t.overflow,qn=e}var at=null,Oe=null,_e=!1,Gn=null,qt=!1,uu=Error(o(519));function Xn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ml(Ht(t,e)),uu}function Jm(e){var t=e.stateNode,r=e.type,l=e.memoizedProps;switch(t[rt]=e,t[gt]=l,r){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(r=0;r<$l.length;r++)ge($l[r],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),cm(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),fm(t,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||t.textContent===""+r||l.suppressHydrationWarning===!0||hv(t.textContent,r)?(l.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),l.onScroll!=null&&ge("scroll",t),l.onScrollEnd!=null&&ge("scrollend",t),l.onClick!=null&&(t.onclick=xn),t=!0):t=!1,t||Xn(e,!0)}function Wm(e){for(at=e.return;at;)switch(at.tag){case 5:case 31:case 13:qt=!1;return;case 27:case 3:qt=!0;return;default:at=at.return}}function da(e){if(e!==at)return!1;if(!_e)return Wm(e),_e=!0,!1;var t=e.tag,r;if((r=t!==3&&t!==27)&&((r=t===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||jc(e.type,e.memoizedProps)),r=!r),r&&Oe&&Xn(e),Wm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Oe=Ev(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Oe=Ev(e)}else t===27?(t=Oe,lr(e.type)?(e=Rc,Rc=null,Oe=e):Oe=t):Oe=at?Xt(e.stateNode.nextSibling):null;return!0}function Ar(){Oe=at=null,_e=!1}function cu(){var e=Gn;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),Gn=null),e}function ml(e){Gn===null?Gn=[e]:Gn.push(e)}var du=C(null),jr=null,Tn=null;function Pn(e,t,r){I(du,t._currentValue),t._currentValue=r}function wn(e){e._currentValue=du.current,X(du)}function fu(e,t,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===r)break;e=e.return}}function mu(e,t,r,l){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){var v=s.child;c=c.firstContext;e:for(;c!==null;){var x=c;c=s;for(var T=0;T<t.length;T++)if(x.context===t[T]){c.lanes|=r,x=c.alternate,x!==null&&(x.lanes|=r),fu(c.return,r,e),l||(v=null);break e}c=x.next}}else if(s.tag===18){if(v=s.return,v===null)throw Error(o(341));v.lanes|=r,c=v.alternate,c!==null&&(c.lanes|=r),fu(v,r,e),v=null}else v=s.child;if(v!==null)v.return=s;else for(v=s;v!==null;){if(v===e){v=null;break}if(s=v.sibling,s!==null){s.return=v.return,v=s;break}v=v.return}s=v}}function fa(e,t,r,l){e=null;for(var s=t,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var v=s.alternate;if(v===null)throw Error(o(387));if(v=v.memoizedProps,v!==null){var x=s.type;Nt(s.pendingProps.value,v.value)||(e!==null?e.push(x):e=[x])}}else if(s===Ae.current){if(v=s.alternate,v===null)throw Error(o(387));v.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Hl):e=[Hl])}s=s.return}e!==null&&mu(t,e,r,l),t.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!Nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cr(e){jr=e,Tn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return Im(jr,e)}function Pi(e,t){return jr===null&&Cr(e),Im(e,t)}function Im(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},Tn===null){if(e===null)throw Error(o(308));Tn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Tn=Tn.next=t;return r}var S_=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(r){return r()})}},E_=n.unstable_scheduleCallback,T_=n.unstable_NormalPriority,Ze={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new S_,data:new Map,refCount:0}}function hl(e){e.refCount--,e.refCount===0&&E_(T_,function(){e.controller.abort()})}var pl=null,pu=0,ma=0,ha=null;function w_(e,t){if(pl===null){var r=pl=[];pu=0,ma=gc(),ha={status:"pending",value:void 0,then:function(l){r.push(l)}}}return pu++,t.then(eh,eh),t}function eh(){if(--pu===0&&pl!==null){ha!==null&&(ha.status="fulfilled");var e=pl;pl=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function A_(e,t){var r=[],l={status:"pending",value:null,reason:null,then:function(s){r.push(s)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var s=0;s<r.length;s++)(0,r[s])(t)},function(s){for(l.status="rejected",l.reason=s,s=0;s<r.length;s++)(0,r[s])(void 0)}),l}var th=R.S;R.S=function(e,t){Bp=At(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&w_(e,t),th!==null&&th(e,t)};var Nr=C(null);function vu(){var e=Nr.current;return e!==null?e:Re.pooledCache}function Ki(e,t){t===null?I(Nr,Nr.current):I(Nr,t.pool)}function nh(){var e=vu();return e===null?null:{parent:Ze._currentValue,pool:e}}var pa=Error(o(460)),yu=Error(o(474)),Qi=Error(o(542)),Zi={then:function(){}};function rh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ah(e,t,r){switch(r=e[r],r===void 0?e.push(t):r!==t&&(t.then(xn,xn),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ih(e),e;default:if(typeof t.status=="string")t.then(xn,xn);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=l}},function(l){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ih(e),e}throw zr=t,pa}}function Mr(e){try{var t=e._init;return t(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(zr=r,pa):r}}var zr=null;function lh(){if(zr===null)throw Error(o(459));var e=zr;return zr=null,e}function ih(e){if(e===pa||e===Qi)throw Error(o(483))}var va=null,vl=0;function Fi(e){var t=vl;return vl+=1,va===null&&(va=[]),ah(va,e,t)}function yl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ji(e,t){throw t.$$typeof===_?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function oh(e){function t(O,M){if(e){var $=O.deletions;$===null?(O.deletions=[M],O.flags|=16):$.push(M)}}function r(O,M){if(!e)return null;for(;M!==null;)t(O,M),M=M.sibling;return null}function l(O){for(var M=new Map;O!==null;)O.key!==null?M.set(O.key,O):M.set(O.index,O),O=O.sibling;return M}function s(O,M){return O=Sn(O,M),O.index=0,O.sibling=null,O}function c(O,M,$){return O.index=$,e?($=O.alternate,$!==null?($=$.index,$<M?(O.flags|=67108866,M):$):(O.flags|=67108866,M)):(O.flags|=1048576,M)}function v(O){return e&&O.alternate===null&&(O.flags|=67108866),O}function x(O,M,$,Y){return M===null||M.tag!==6?(M=lu($,O.mode,Y),M.return=O,M):(M=s(M,$),M.return=O,M)}function T(O,M,$,Y){var ie=$.type;return ie===w?H(O,M,$.props.children,Y,$.key):M!==null&&(M.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===E&&Mr(ie)===M.type)?(M=s(M,$.props),yl(M,$),M.return=O,M):(M=qi($.type,$.key,$.props,null,O.mode,Y),yl(M,$),M.return=O,M)}function L(O,M,$,Y){return M===null||M.tag!==4||M.stateNode.containerInfo!==$.containerInfo||M.stateNode.implementation!==$.implementation?(M=iu($,O.mode,Y),M.return=O,M):(M=s(M,$.children||[]),M.return=O,M)}function H(O,M,$,Y,ie){return M===null||M.tag!==7?(M=wr($,O.mode,Y,ie),M.return=O,M):(M=s(M,$),M.return=O,M)}function P(O,M,$){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=lu(""+M,O.mode,$),M.return=O,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case j:return $=qi(M.type,M.key,M.props,null,O.mode,$),yl($,M),$.return=O,$;case N:return M=iu(M,O.mode,$),M.return=O,M;case E:return M=Mr(M),P(O,M,$)}if(re(M)||oe(M))return M=wr(M,O.mode,$,null),M.return=O,M;if(typeof M.then=="function")return P(O,Fi(M),$);if(M.$$typeof===q)return P(O,Pi(O,M),$);Ji(O,M)}return null}function U(O,M,$,Y){var ie=M!==null?M.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ie!==null?null:x(O,M,""+$,Y);if(typeof $=="object"&&$!==null){switch($.$$typeof){case j:return $.key===ie?T(O,M,$,Y):null;case N:return $.key===ie?L(O,M,$,Y):null;case E:return $=Mr($),U(O,M,$,Y)}if(re($)||oe($))return ie!==null?null:H(O,M,$,Y,null);if(typeof $.then=="function")return U(O,M,Fi($),Y);if($.$$typeof===q)return U(O,M,Pi(O,$),Y);Ji(O,$)}return null}function B(O,M,$,Y,ie){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return O=O.get($)||null,x(M,O,""+Y,ie);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case j:return O=O.get(Y.key===null?$:Y.key)||null,T(M,O,Y,ie);case N:return O=O.get(Y.key===null?$:Y.key)||null,L(M,O,Y,ie);case E:return Y=Mr(Y),B(O,M,$,Y,ie)}if(re(Y)||oe(Y))return O=O.get($)||null,H(M,O,Y,ie,null);if(typeof Y.then=="function")return B(O,M,$,Fi(Y),ie);if(Y.$$typeof===q)return B(O,M,$,Pi(M,Y),ie);Ji(M,Y)}return null}function ne(O,M,$,Y){for(var ie=null,Ee=null,ae=M,he=M=0,xe=null;ae!==null&&he<$.length;he++){ae.index>he?(xe=ae,ae=null):xe=ae.sibling;var Te=U(O,ae,$[he],Y);if(Te===null){ae===null&&(ae=xe);break}e&&ae&&Te.alternate===null&&t(O,ae),M=c(Te,M,he),Ee===null?ie=Te:Ee.sibling=Te,Ee=Te,ae=xe}if(he===$.length)return r(O,ae),_e&&En(O,he),ie;if(ae===null){for(;he<$.length;he++)ae=P(O,$[he],Y),ae!==null&&(M=c(ae,M,he),Ee===null?ie=ae:Ee.sibling=ae,Ee=ae);return _e&&En(O,he),ie}for(ae=l(ae);he<$.length;he++)xe=B(ae,O,he,$[he],Y),xe!==null&&(e&&xe.alternate!==null&&ae.delete(xe.key===null?he:xe.key),M=c(xe,M,he),Ee===null?ie=xe:Ee.sibling=xe,Ee=xe);return e&&ae.forEach(function(cr){return t(O,cr)}),_e&&En(O,he),ie}function se(O,M,$,Y){if($==null)throw Error(o(151));for(var ie=null,Ee=null,ae=M,he=M=0,xe=null,Te=$.next();ae!==null&&!Te.done;he++,Te=$.next()){ae.index>he?(xe=ae,ae=null):xe=ae.sibling;var cr=U(O,ae,Te.value,Y);if(cr===null){ae===null&&(ae=xe);break}e&&ae&&cr.alternate===null&&t(O,ae),M=c(cr,M,he),Ee===null?ie=cr:Ee.sibling=cr,Ee=cr,ae=xe}if(Te.done)return r(O,ae),_e&&En(O,he),ie;if(ae===null){for(;!Te.done;he++,Te=$.next())Te=P(O,Te.value,Y),Te!==null&&(M=c(Te,M,he),Ee===null?ie=Te:Ee.sibling=Te,Ee=Te);return _e&&En(O,he),ie}for(ae=l(ae);!Te.done;he++,Te=$.next())Te=B(ae,O,he,Te.value,Y),Te!==null&&(e&&Te.alternate!==null&&ae.delete(Te.key===null?he:Te.key),M=c(Te,M,he),Ee===null?ie=Te:Ee.sibling=Te,Ee=Te);return e&&ae.forEach(function(U1){return t(O,U1)}),_e&&En(O,he),ie}function ze(O,M,$,Y){if(typeof $=="object"&&$!==null&&$.type===w&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case j:e:{for(var ie=$.key;M!==null;){if(M.key===ie){if(ie=$.type,ie===w){if(M.tag===7){r(O,M.sibling),Y=s(M,$.props.children),Y.return=O,O=Y;break e}}else if(M.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===E&&Mr(ie)===M.type){r(O,M.sibling),Y=s(M,$.props),yl(Y,$),Y.return=O,O=Y;break e}r(O,M);break}else t(O,M);M=M.sibling}$.type===w?(Y=wr($.props.children,O.mode,Y,$.key),Y.return=O,O=Y):(Y=qi($.type,$.key,$.props,null,O.mode,Y),yl(Y,$),Y.return=O,O=Y)}return v(O);case N:e:{for(ie=$.key;M!==null;){if(M.key===ie)if(M.tag===4&&M.stateNode.containerInfo===$.containerInfo&&M.stateNode.implementation===$.implementation){r(O,M.sibling),Y=s(M,$.children||[]),Y.return=O,O=Y;break e}else{r(O,M);break}else t(O,M);M=M.sibling}Y=iu($,O.mode,Y),Y.return=O,O=Y}return v(O);case E:return $=Mr($),ze(O,M,$,Y)}if(re($))return ne(O,M,$,Y);if(oe($)){if(ie=oe($),typeof ie!="function")throw Error(o(150));return $=ie.call($),se(O,M,$,Y)}if(typeof $.then=="function")return ze(O,M,Fi($),Y);if($.$$typeof===q)return ze(O,M,Pi(O,$),Y);Ji(O,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,M!==null&&M.tag===6?(r(O,M.sibling),Y=s(M,$),Y.return=O,O=Y):(r(O,M),Y=lu($,O.mode,Y),Y.return=O,O=Y),v(O)):r(O,M)}return function(O,M,$,Y){try{vl=0;var ie=ze(O,M,$,Y);return va=null,ie}catch(ae){if(ae===pa||ae===Qi)throw ae;var Ee=Mt(29,ae,null,O.mode);return Ee.lanes=Y,Ee.return=O,Ee}}}var Rr=oh(!0),sh=oh(!1),Kn=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(e,t,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(we&2)!==0){var s=l.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),l.pending=t,t=Yi(e),Xm(e,null,r),t}return ki(e,l,t,r),Yi(e)}function gl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,If(e,r)}}function xu(e,t){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var s=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var v={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};c===null?s=c=v:c=c.next=v,r=r.next}while(r!==null);c===null?s=c=t:c=c.next=t}else s=c=t;r={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var _u=!1;function bl(){if(_u){var e=ha;if(e!==null)throw e}}function xl(e,t,r,l){_u=!1;var s=e.updateQueue;Kn=!1;var c=s.firstBaseUpdate,v=s.lastBaseUpdate,x=s.shared.pending;if(x!==null){s.shared.pending=null;var T=x,L=T.next;T.next=null,v===null?c=L:v.next=L,v=T;var H=e.alternate;H!==null&&(H=H.updateQueue,x=H.lastBaseUpdate,x!==v&&(x===null?H.firstBaseUpdate=L:x.next=L,H.lastBaseUpdate=T))}if(c!==null){var P=s.baseState;v=0,H=L=T=null,x=c;do{var U=x.lane&-536870913,B=U!==x.lane;if(B?(be&U)===U:(l&U)===U){U!==0&&U===ma&&(_u=!0),H!==null&&(H=H.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var ne=e,se=x;U=t;var ze=r;switch(se.tag){case 1:if(ne=se.payload,typeof ne=="function"){P=ne.call(ze,P,U);break e}P=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=se.payload,U=typeof ne=="function"?ne.call(ze,P,U):ne,U==null)break e;P=b({},P,U);break e;case 2:Kn=!0}}U=x.callback,U!==null&&(e.flags|=64,B&&(e.flags|=8192),B=s.callbacks,B===null?s.callbacks=[U]:B.push(U))}else B={lane:U,tag:x.tag,payload:x.payload,callback:x.callback,next:null},H===null?(L=H=B,T=P):H=H.next=B,v|=U;if(x=x.next,x===null){if(x=s.shared.pending,x===null)break;B=x,x=B.next,B.next=null,s.lastBaseUpdate=B,s.shared.pending=null}}while(!0);H===null&&(T=P),s.baseState=T,s.firstBaseUpdate=L,s.lastBaseUpdate=H,c===null&&(s.shared.lanes=0),er|=v,e.lanes=v,e.memoizedState=P}}function uh(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function ch(e,t){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)uh(r[e],t)}var ya=C(null),Wi=C(0);function dh(e,t){e=On,I(Wi,e),I(ya,t),On=e|t.baseLanes}function Su(){I(Wi,On),I(ya,ya.current)}function Eu(){On=Wi.current,X(ya),X(Wi)}var zt=C(null),Gt=null;function Fn(e){var t=e.alternate;I(Pe,Pe.current&1),I(zt,e),Gt===null&&(t===null||ya.current!==null||t.memoizedState!==null)&&(Gt=e)}function Tu(e){I(Pe,Pe.current),I(zt,e),Gt===null&&(Gt=e)}function fh(e){e.tag===22?(I(Pe,Pe.current),I(zt,e),Gt===null&&(Gt=e)):Jn()}function Jn(){I(Pe,Pe.current),I(zt,zt.current)}function Rt(e){X(zt),Gt===e&&(Gt=null),X(Pe)}var Pe=C(0);function Ii(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Mc(r)||zc(r)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var An=0,me=null,Ne=null,Fe=null,eo=!1,ga=!1,Dr=!1,to=0,_l=0,ba=null,j_=0;function ke(){throw Error(o(321))}function wu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Nt(e[r],t[r]))return!1;return!0}function Au(e,t,r,l,s,c){return An=c,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Zh:ku,Dr=!1,c=r(l,s),Dr=!1,ga&&(c=hh(t,r,l,s)),mh(e),c}function mh(e){R.H=Tl;var t=Ne!==null&&Ne.next!==null;if(An=0,Fe=Ne=me=null,eo=!1,_l=0,ba=null,t)throw Error(o(300));e===null||Je||(e=e.dependencies,e!==null&&Xi(e)&&(Je=!0))}function hh(e,t,r,l){me=e;var s=0;do{if(ga&&(ba=null),_l=0,ga=!1,25<=s)throw Error(o(301));if(s+=1,Fe=Ne=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}R.H=Fh,c=t(r,l)}while(ga);return c}function C_(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?Sl(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(me.flags|=1024),t}function ju(){var e=to!==0;return to=0,e}function Cu(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function Nu(e){if(eo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}eo=!1}An=0,Fe=Ne=me=null,ga=!1,_l=to=0,ba=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?me.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ke(){if(Ne===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Fe===null?me.memoizedState:Fe.next;if(t!==null)Fe=t,Ne=e;else{if(e===null)throw me.alternate===null?Error(o(467)):Error(o(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Fe===null?me.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function no(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sl(e){var t=_l;return _l+=1,ba===null&&(ba=[]),e=ah(ba,e,t),t=me,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Zh:ku),e}function ro(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sl(e);if(e.$$typeof===q)return lt(e)}throw Error(o(438,String(e)))}function Mu(e){var t=null,r=me.updateQueue;if(r!==null&&(t=r.memoCache),t==null){var l=me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),r===null&&(r=no(),me.updateQueue=r),r.memoCache=t,r=t.data[t.index],r===void 0)for(r=t.data[t.index]=Array(e),l=0;l<e;l++)r[l]=le;return t.index++,r}function jn(e,t){return typeof t=="function"?t(e):t}function ao(e){var t=Ke();return zu(t,Ne,e)}function zu(e,t,r){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=r;var s=e.baseQueue,c=l.pending;if(c!==null){if(s!==null){var v=s.next;s.next=c.next,c.next=v}t.baseQueue=s=c,l.pending=null}if(c=e.baseState,s===null)e.memoizedState=c;else{t=s.next;var x=v=null,T=null,L=t,H=!1;do{var P=L.lane&-536870913;if(P!==L.lane?(be&P)===P:(An&P)===P){var U=L.revertLane;if(U===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),P===ma&&(H=!0);else if((An&U)===U){L=L.next,U===ma&&(H=!0);continue}else P={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},T===null?(x=T=P,v=c):T=T.next=P,me.lanes|=U,er|=U;P=L.action,Dr&&r(c,P),c=L.hasEagerState?L.eagerState:r(c,P)}else U={lane:P,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},T===null?(x=T=U,v=c):T=T.next=U,me.lanes|=P,er|=P;L=L.next}while(L!==null&&L!==t);if(T===null?v=c:T.next=x,!Nt(c,e.memoizedState)&&(Je=!0,H&&(r=ha,r!==null)))throw r;e.memoizedState=c,e.baseState=v,e.baseQueue=T,l.lastRenderedState=c}return s===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ru(e){var t=Ke(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var l=r.dispatch,s=r.pending,c=t.memoizedState;if(s!==null){r.pending=null;var v=s=s.next;do c=e(c,v.action),v=v.next;while(v!==s);Nt(c,t.memoizedState)||(Je=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,l]}function ph(e,t,r){var l=me,s=Ke(),c=_e;if(c){if(r===void 0)throw Error(o(407));r=r()}else r=t();var v=!Nt((Ne||s).memoizedState,r);if(v&&(s.memoizedState=r,Je=!0),s=s.queue,$u(gh.bind(null,l,s,e),[e]),s.getSnapshot!==t||v||Fe!==null&&Fe.memoizedState.tag&1){if(l.flags|=2048,xa(9,{destroy:void 0},yh.bind(null,l,s,r,t),null),Re===null)throw Error(o(349));c||(An&127)!==0||vh(l,t,r)}return r}function vh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=me.updateQueue,t===null?(t=no(),me.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function yh(e,t,r,l){t.value=r,t.getSnapshot=l,bh(t)&&xh(e)}function gh(e,t,r){return r(function(){bh(t)&&xh(e)})}function bh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Nt(e,r)}catch{return!0}}function xh(e){var t=Tr(e,2);t!==null&&Tt(t,e,2)}function Du(e){var t=mt();if(typeof e=="function"){var r=e;if(e=r(),Dr){Hn(!0);try{r()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:e},t}function _h(e,t,r,l){return e.baseState=r,zu(e,Ne,typeof l=="function"?l:jn)}function N_(e,t,r,l,s){if(oo(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){c.listeners.push(v)}};R.T!==null?r(!0):c.isTransition=!1,l(c),r=t.pending,r===null?(c.next=t.pending=c,Sh(t,c)):(c.next=r.next,t.pending=r.next=c)}}function Sh(e,t){var r=t.action,l=t.payload,s=e.state;if(t.isTransition){var c=R.T,v={};R.T=v;try{var x=r(s,l),T=R.S;T!==null&&T(v,x),Eh(e,t,x)}catch(L){Ou(e,t,L)}finally{c!==null&&v.types!==null&&(c.types=v.types),R.T=c}}else try{c=r(s,l),Eh(e,t,c)}catch(L){Ou(e,t,L)}}function Eh(e,t,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Th(e,t,l)},function(l){return Ou(e,t,l)}):Th(e,t,r)}function Th(e,t,r){t.status="fulfilled",t.value=r,wh(t),e.state=r,t=e.pending,t!==null&&(r=t.next,r===t?e.pending=null:(r=r.next,t.next=r,Sh(e,r)))}function Ou(e,t,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=r,wh(t),t=t.next;while(t!==l)}e.action=null}function wh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ah(e,t){return t}function jh(e,t){if(_e){var r=Re.formState;if(r!==null){e:{var l=me;if(_e){if(Oe){t:{for(var s=Oe,c=qt;s.nodeType!==8;){if(!c){s=null;break t}if(s=Xt(s.nextSibling),s===null){s=null;break t}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){Oe=Xt(s.nextSibling),l=s.data==="F!";break e}}Xn(l)}l=!1}l&&(t=r[0])}}return r=mt(),r.memoizedState=r.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ah,lastRenderedState:t},r.queue=l,r=Ph.bind(null,me,l),l.dispatch=r,l=Du(!1),c=Hu.bind(null,me,!1,l.queue),l=mt(),s={state:t,dispatch:null,action:e,pending:null},l.queue=s,r=N_.bind(null,me,s,c,r),s.dispatch=r,l.memoizedState=e,[t,r,!1]}function Ch(e){var t=Ke();return Nh(t,Ne,e)}function Nh(e,t,r){if(t=zu(e,t,Ah)[0],e=ao(jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Sl(t)}catch(v){throw v===pa?Qi:v}else l=t;t=Ke();var s=t.queue,c=s.dispatch;return r!==t.memoizedState&&(me.flags|=2048,xa(9,{destroy:void 0},M_.bind(null,s,r),null)),[l,c,e]}function M_(e,t){e.action=t}function Mh(e){var t=Ke(),r=Ne;if(r!==null)return Nh(t,r,e);Ke(),t=t.memoizedState,r=Ke();var l=r.queue.dispatch;return r.memoizedState=e,[t,l,!1]}function xa(e,t,r,l){return e={tag:e,create:r,deps:l,inst:t,next:null},t=me.updateQueue,t===null&&(t=no(),me.updateQueue=t),r=t.lastEffect,r===null?t.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,t.lastEffect=e),e}function zh(){return Ke().memoizedState}function lo(e,t,r,l){var s=mt();me.flags|=e,s.memoizedState=xa(1|t,{destroy:void 0},r,l===void 0?null:l)}function io(e,t,r,l){var s=Ke();l=l===void 0?null:l;var c=s.memoizedState.inst;Ne!==null&&l!==null&&wu(l,Ne.memoizedState.deps)?s.memoizedState=xa(t,c,r,l):(me.flags|=e,s.memoizedState=xa(1|t,c,r,l))}function Rh(e,t){lo(8390656,8,e,t)}function $u(e,t){io(2048,8,e,t)}function z_(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=no(),me.updateQueue=t,t.events=[e];else{var r=t.events;r===null?t.events=[e]:r.push(e)}}function Dh(e){var t=Ke().memoizedState;return z_({ref:t,nextImpl:e}),function(){if((we&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Oh(e,t){return io(4,2,e,t)}function $h(e,t){return io(4,4,e,t)}function Lh(e,t){if(typeof t=="function"){e=e();var r=t(e);return function(){typeof r=="function"?r():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uh(e,t,r){r=r!=null?r.concat([e]):null,io(4,4,Lh.bind(null,t,e),r)}function Lu(){}function Bh(e,t){var r=Ke();t=t===void 0?null:t;var l=r.memoizedState;return t!==null&&wu(t,l[1])?l[0]:(r.memoizedState=[e,t],e)}function Vh(e,t){var r=Ke();t=t===void 0?null:t;var l=r.memoizedState;if(t!==null&&wu(t,l[1]))return l[0];if(l=e(),Dr){Hn(!0);try{e()}finally{Hn(!1)}}return r.memoizedState=[l,t],l}function Uu(e,t,r){return r===void 0||(An&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=r,e=Hp(),me.lanes|=e,er|=e,r)}function Hh(e,t,r,l){return Nt(r,t)?r:ya.current!==null?(e=Uu(e,r,l),Nt(e,t)||(Je=!0),e):(An&42)===0||(An&1073741824)!==0&&(be&261930)===0?(Je=!0,e.memoizedState=r):(e=Hp(),me.lanes|=e,er|=e,t)}function kh(e,t,r,l,s){var c=G.p;G.p=c!==0&&8>c?c:8;var v=R.T,x={};R.T=x,Hu(e,!1,t,r);try{var T=s(),L=R.S;if(L!==null&&L(x,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var H=A_(T,l);El(e,t,H,$t(e))}else El(e,t,l,$t(e))}catch(P){El(e,t,{then:function(){},status:"rejected",reason:P},$t())}finally{G.p=c,v!==null&&x.types!==null&&(v.types=x.types),R.T=v}}function R_(){}function Bu(e,t,r,l){if(e.tag!==5)throw Error(o(476));var s=Yh(e).queue;kh(e,s,t,ee,r===null?R_:function(){return qh(e),r(l)})}function Yh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:ee},next:null};var r={};return t.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:r},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qh(e){var t=Yh(e);t.next===null&&(t=e.alternate.memoizedState),El(e,t.next.queue,{},$t())}function Vu(){return lt(Hl)}function Gh(){return Ke().memoizedState}function Xh(){return Ke().memoizedState}function D_(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var r=$t();e=Qn(r);var l=Zn(t,e,r);l!==null&&(Tt(l,t,r),gl(l,t,r)),t={cache:hu()},e.payload=t;return}t=t.return}}function O_(e,t,r){var l=$t();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},oo(e)?Kh(t,r):(r=ru(e,t,r,l),r!==null&&(Tt(r,e,l),Qh(r,t,l)))}function Ph(e,t,r){var l=$t();El(e,t,r,l)}function El(e,t,r,l){var s={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(oo(e))Kh(t,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var v=t.lastRenderedState,x=c(v,r);if(s.hasEagerState=!0,s.eagerState=x,Nt(x,v))return ki(e,t,s,0),Re===null&&Hi(),!1}catch{}if(r=ru(e,t,s,l),r!==null)return Tt(r,e,l),Qh(r,t,l),!0}return!1}function Hu(e,t,r,l){if(l={lane:2,revertLane:gc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},oo(e)){if(t)throw Error(o(479))}else t=ru(e,r,l,2),t!==null&&Tt(t,e,2)}function oo(e){var t=e.alternate;return e===me||t!==null&&t===me}function Kh(e,t){ga=eo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Qh(e,t,r){if((r&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,If(e,r)}}var Tl={readContext:lt,use:ro,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke};Tl.useEffectEvent=ke;var Zh={readContext:lt,use:ro,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Rh,useImperativeHandle:function(e,t,r){r=r!=null?r.concat([e]):null,lo(4194308,4,Lh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return lo(4194308,4,e,t)},useInsertionEffect:function(e,t){lo(4,2,e,t)},useMemo:function(e,t){var r=mt();t=t===void 0?null:t;var l=e();if(Dr){Hn(!0);try{e()}finally{Hn(!1)}}return r.memoizedState=[l,t],l},useReducer:function(e,t,r){var l=mt();if(r!==void 0){var s=r(t);if(Dr){Hn(!0);try{r(t)}finally{Hn(!1)}}}else s=t;return l.memoizedState=l.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},l.queue=e,e=e.dispatch=O_.bind(null,me,e),[l.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=Du(e);var t=e.queue,r=Ph.bind(null,me,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:Lu,useDeferredValue:function(e,t){var r=mt();return Uu(r,e,t)},useTransition:function(){var e=Du(!1);return e=kh.bind(null,me,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var l=me,s=mt();if(_e){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),Re===null)throw Error(o(349));(be&127)!==0||vh(l,t,r)}s.memoizedState=r;var c={value:r,getSnapshot:t};return s.queue=c,Rh(gh.bind(null,l,c,e),[e]),l.flags|=2048,xa(9,{destroy:void 0},yh.bind(null,l,c,r,t),null),r},useId:function(){var e=mt(),t=Re.identifierPrefix;if(_e){var r=dn,l=cn;r=(l&~(1<<32-Ct(l)-1)).toString(32)+r,t="_"+t+"R_"+r,r=to++,0<r&&(t+="H"+r.toString(32)),t+="_"}else r=j_++,t="_"+t+"r_"+r.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Vu,useFormState:jh,useActionState:jh,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=Hu.bind(null,me,!0,r),r.dispatch=t,[e,t]},useMemoCache:Mu,useCacheRefresh:function(){return mt().memoizedState=D_.bind(null,me)},useEffectEvent:function(e){var t=mt(),r={impl:e};return t.memoizedState=r,function(){if((we&2)!==0)throw Error(o(440));return r.impl.apply(void 0,arguments)}}},ku={readContext:lt,use:ro,useCallback:Bh,useContext:lt,useEffect:$u,useImperativeHandle:Uh,useInsertionEffect:Oh,useLayoutEffect:$h,useMemo:Vh,useReducer:ao,useRef:zh,useState:function(){return ao(jn)},useDebugValue:Lu,useDeferredValue:function(e,t){var r=Ke();return Hh(r,Ne.memoizedState,e,t)},useTransition:function(){var e=ao(jn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:ph,useId:Gh,useHostTransitionStatus:Vu,useFormState:Ch,useActionState:Ch,useOptimistic:function(e,t){var r=Ke();return _h(r,Ne,e,t)},useMemoCache:Mu,useCacheRefresh:Xh};ku.useEffectEvent=Dh;var Fh={readContext:lt,use:ro,useCallback:Bh,useContext:lt,useEffect:$u,useImperativeHandle:Uh,useInsertionEffect:Oh,useLayoutEffect:$h,useMemo:Vh,useReducer:Ru,useRef:zh,useState:function(){return Ru(jn)},useDebugValue:Lu,useDeferredValue:function(e,t){var r=Ke();return Ne===null?Uu(r,e,t):Hh(r,Ne.memoizedState,e,t)},useTransition:function(){var e=Ru(jn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:ph,useId:Gh,useHostTransitionStatus:Vu,useFormState:Mh,useActionState:Mh,useOptimistic:function(e,t){var r=Ke();return Ne!==null?_h(r,Ne,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Mu,useCacheRefresh:Xh};Fh.useEffectEvent=Dh;function Yu(e,t,r,l){t=e.memoizedState,r=r(l,t),r=r==null?t:b({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var qu={enqueueSetState:function(e,t,r){e=e._reactInternals;var l=$t(),s=Qn(l);s.payload=t,r!=null&&(s.callback=r),t=Zn(e,s,l),t!==null&&(Tt(t,e,l),gl(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var l=$t(),s=Qn(l);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Zn(e,s,l),t!==null&&(Tt(t,e,l),gl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=$t(),l=Qn(r);l.tag=2,t!=null&&(l.callback=t),t=Zn(e,l,r),t!==null&&(Tt(t,e,r),gl(t,e,r))}};function Jh(e,t,r,l,s,c,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,v):t.prototype&&t.prototype.isPureReactComponent?!cl(r,l)||!cl(s,c):!0}function Wh(e,t,r,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,l),t.state!==e&&qu.enqueueReplaceState(t,t.state,null)}function Or(e,t){var r=t;if("ref"in t){r={};for(var l in t)l!=="ref"&&(r[l]=t[l])}if(e=e.defaultProps){r===t&&(r=b({},r));for(var s in e)r[s]===void 0&&(r[s]=e[s])}return r}function Ih(e){Vi(e)}function ep(e){console.error(e)}function tp(e){Vi(e)}function so(e,t){try{var r=e.onUncaughtError;r(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function np(e,t,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Gu(e,t,r){return r=Qn(r),r.tag=3,r.payload={element:null},r.callback=function(){so(e,t)},r}function rp(e){return e=Qn(e),e.tag=3,e}function ap(e,t,r,l){var s=r.type.getDerivedStateFromError;if(typeof s=="function"){var c=l.value;e.payload=function(){return s(c)},e.callback=function(){np(t,r,l)}}var v=r.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){np(t,r,l),typeof s!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var x=l.stack;this.componentDidCatch(l.value,{componentStack:x!==null?x:""})})}function $_(e,t,r,l,s){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=r.alternate,t!==null&&fa(t,r,s,!0),r=zt.current,r!==null){switch(r.tag){case 31:case 13:return Gt===null?_o():r.alternate===null&&Ye===0&&(Ye=3),r.flags&=-257,r.flags|=65536,r.lanes=s,l===Zi?r.flags|=16384:(t=r.updateQueue,t===null?r.updateQueue=new Set([l]):t.add(l),pc(e,l,s)),!1;case 22:return r.flags|=65536,l===Zi?r.flags|=16384:(t=r.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=t):(r=t.retryQueue,r===null?t.retryQueue=new Set([l]):r.add(l)),pc(e,l,s)),!1}throw Error(o(435,r.tag))}return pc(e,l,s),_o(),!1}if(_e)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,l!==uu&&(e=Error(o(422),{cause:l}),ml(Ht(e,r)))):(l!==uu&&(t=Error(o(423),{cause:l}),ml(Ht(t,r))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,l=Ht(l,r),s=Gu(e.stateNode,l,s),xu(e,s),Ye!==4&&(Ye=2)),!1;var c=Error(o(520),{cause:l});if(c=Ht(c,r),Rl===null?Rl=[c]:Rl.push(c),Ye!==4&&(Ye=2),t===null)return!0;l=Ht(l,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=s&-s,r.lanes|=e,e=Gu(r.stateNode,l,e),xu(r,e),!1;case 1:if(t=r.type,c=r.stateNode,(r.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(tr===null||!tr.has(c))))return r.flags|=65536,s&=-s,r.lanes|=s,s=rp(s),ap(s,e,r,l),xu(r,s),!1}r=r.return}while(r!==null);return!1}var Xu=Error(o(461)),Je=!1;function it(e,t,r,l){t.child=e===null?sh(t,null,r,l):Rr(t,e.child,r,l)}function lp(e,t,r,l,s){r=r.render;var c=t.ref;if("ref"in l){var v={};for(var x in l)x!=="ref"&&(v[x]=l[x])}else v=l;return Cr(t),l=Au(e,t,r,v,c,s),x=ju(),e!==null&&!Je?(Cu(e,t,s),Cn(e,t,s)):(_e&&x&&ou(t),t.flags|=1,it(e,t,l,s),t.child)}function ip(e,t,r,l,s){if(e===null){var c=r.type;return typeof c=="function"&&!au(c)&&c.defaultProps===void 0&&r.compare===null?(t.tag=15,t.type=c,op(e,t,c,l,s)):(e=qi(r.type,null,l,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Iu(e,s)){var v=c.memoizedProps;if(r=r.compare,r=r!==null?r:cl,r(v,l)&&e.ref===t.ref)return Cn(e,t,s)}return t.flags|=1,e=Sn(c,l),e.ref=t.ref,e.return=t,t.child=e}function op(e,t,r,l,s){if(e!==null){var c=e.memoizedProps;if(cl(c,l)&&e.ref===t.ref)if(Je=!1,t.pendingProps=l=c,Iu(e,s))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,Cn(e,t,s)}return Pu(e,t,r,l,s)}function sp(e,t,r,l){var s=l.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|r:r,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;l=s&~c}else l=0,t.child=null;return up(e,t,c,r,l)}if((r&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ki(t,c!==null?c.cachePool:null),c!==null?dh(t,c):Su(),fh(t);else return l=t.lanes=536870912,up(e,t,c!==null?c.baseLanes|r:r,r,l)}else c!==null?(Ki(t,c.cachePool),dh(t,c),Jn(),t.memoizedState=null):(e!==null&&Ki(t,null),Su(),Jn());return it(e,t,s,r),t.child}function wl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function up(e,t,r,l,s){var c=vu();return c=c===null?null:{parent:Ze._currentValue,pool:c},t.memoizedState={baseLanes:r,cachePool:c},e!==null&&Ki(t,null),Su(),fh(t),e!==null&&fa(e,t,l,!0),t.childLanes=s,null}function uo(e,t){return t=fo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cp(e,t,r){return Rr(t,e.child,null,r),e=uo(t,t.pendingProps),e.flags|=2,Rt(t),t.memoizedState=null,e}function L_(e,t,r){var l=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(_e){if(l.mode==="hidden")return e=uo(t,l),t.lanes=536870912,wl(null,e);if(Tu(t),(e=Oe)?(e=Sv(e,qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qn!==null?{id:cn,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},r=Km(e),r.return=t,t.child=r,at=t,Oe=null)):e=null,e===null)throw Xn(t);return t.lanes=536870912,null}return uo(t,l)}var c=e.memoizedState;if(c!==null){var v=c.dehydrated;if(Tu(t),s)if(t.flags&256)t.flags&=-257,t=cp(e,t,r);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Je||fa(e,t,r,!1),s=(r&e.childLanes)!==0,Je||s){if(l=Re,l!==null&&(v=em(l,r),v!==0&&v!==c.retryLane))throw c.retryLane=v,Tr(e,v),Tt(l,e,v),Xu;_o(),t=cp(e,t,r)}else e=c.treeContext,Oe=Xt(v.nextSibling),at=t,_e=!0,Gn=null,qt=!1,e!==null&&Fm(t,e),t=uo(t,l),t.flags|=4096;return t}return e=Sn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function co(e,t){var r=t.ref;if(r===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(o(284));(e===null||e.ref!==r)&&(t.flags|=4194816)}}function Pu(e,t,r,l,s){return Cr(t),r=Au(e,t,r,l,void 0,s),l=ju(),e!==null&&!Je?(Cu(e,t,s),Cn(e,t,s)):(_e&&l&&ou(t),t.flags|=1,it(e,t,r,s),t.child)}function dp(e,t,r,l,s,c){return Cr(t),t.updateQueue=null,r=hh(t,l,r,s),mh(e),l=ju(),e!==null&&!Je?(Cu(e,t,c),Cn(e,t,c)):(_e&&l&&ou(t),t.flags|=1,it(e,t,r,c),t.child)}function fp(e,t,r,l,s){if(Cr(t),t.stateNode===null){var c=sa,v=r.contextType;typeof v=="object"&&v!==null&&(c=lt(v)),c=new r(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=qu,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},gu(t),v=r.contextType,c.context=typeof v=="object"&&v!==null?lt(v):sa,c.state=t.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Yu(t,r,v,l),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(v=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),v!==c.state&&qu.enqueueReplaceState(c,c.state,null),xl(t,l,c,s),bl(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){c=t.stateNode;var x=t.memoizedProps,T=Or(r,x);c.props=T;var L=c.context,H=r.contextType;v=sa,typeof H=="object"&&H!==null&&(v=lt(H));var P=r.getDerivedStateFromProps;H=typeof P=="function"||typeof c.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,H||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x||L!==v)&&Wh(t,c,l,v),Kn=!1;var U=t.memoizedState;c.state=U,xl(t,l,c,s),bl(),L=t.memoizedState,x||U!==L||Kn?(typeof P=="function"&&(Yu(t,r,P,l),L=t.memoizedState),(T=Kn||Jh(t,r,T,l,U,L,v))?(H||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=L),c.props=l,c.state=L,c.context=v,l=T):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,bu(e,t),v=t.memoizedProps,H=Or(r,v),c.props=H,P=t.pendingProps,U=c.context,L=r.contextType,T=sa,typeof L=="object"&&L!==null&&(T=lt(L)),x=r.getDerivedStateFromProps,(L=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v!==P||U!==T)&&Wh(t,c,l,T),Kn=!1,U=t.memoizedState,c.state=U,xl(t,l,c,s),bl();var B=t.memoizedState;v!==P||U!==B||Kn||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof x=="function"&&(Yu(t,r,x,l),B=t.memoizedState),(H=Kn||Jh(t,r,H,l,U,B,T)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(L||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,B,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,B,T)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=B),c.props=l,c.state=B,c.context=T,l=H):(typeof c.componentDidUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),l=!1)}return c=l,co(e,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&l?(t.child=Rr(t,e.child,null,s),t.child=Rr(t,null,r,s)):it(e,t,r,s),t.memoizedState=c.state,e=t.child):e=Cn(e,t,s),e}function mp(e,t,r,l){return Ar(),t.flags|=256,it(e,t,r,l),t.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(e){return{baseLanes:e,cachePool:nh()}}function Zu(e,t,r){return e=e!==null?e.childLanes&~r:0,t&&(e|=Ot),e}function hp(e,t,r){var l=t.pendingProps,s=!1,c=(t.flags&128)!==0,v;if((v=c)||(v=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),v&&(s=!0,t.flags&=-129),v=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(s?Fn(t):Jn(),(e=Oe)?(e=Sv(e,qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qn!==null?{id:cn,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},r=Km(e),r.return=t,t.child=r,at=t,Oe=null)):e=null,e===null)throw Xn(t);return zc(e)?t.lanes=32:t.lanes=536870912,null}var x=l.children;return l=l.fallback,s?(Jn(),s=t.mode,x=fo({mode:"hidden",children:x},s),l=wr(l,s,r,null),x.return=t,l.return=t,x.sibling=l,t.child=x,l=t.child,l.memoizedState=Qu(r),l.childLanes=Zu(e,v,r),t.memoizedState=Ku,wl(null,l)):(Fn(t),Fu(t,x))}var T=e.memoizedState;if(T!==null&&(x=T.dehydrated,x!==null)){if(c)t.flags&256?(Fn(t),t.flags&=-257,t=Ju(e,t,r)):t.memoizedState!==null?(Jn(),t.child=e.child,t.flags|=128,t=null):(Jn(),x=l.fallback,s=t.mode,l=fo({mode:"visible",children:l.children},s),x=wr(x,s,r,null),x.flags|=2,l.return=t,x.return=t,l.sibling=x,t.child=l,Rr(t,e.child,null,r),l=t.child,l.memoizedState=Qu(r),l.childLanes=Zu(e,v,r),t.memoizedState=Ku,t=wl(null,l));else if(Fn(t),zc(x)){if(v=x.nextSibling&&x.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(o(419)),l.stack="",l.digest=v,ml({value:l,source:null,stack:null}),t=Ju(e,t,r)}else if(Je||fa(e,t,r,!1),v=(r&e.childLanes)!==0,Je||v){if(v=Re,v!==null&&(l=em(v,r),l!==0&&l!==T.retryLane))throw T.retryLane=l,Tr(e,l),Tt(v,e,l),Xu;Mc(x)||_o(),t=Ju(e,t,r)}else Mc(x)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,Oe=Xt(x.nextSibling),at=t,_e=!0,Gn=null,qt=!1,e!==null&&Fm(t,e),t=Fu(t,l.children),t.flags|=4096);return t}return s?(Jn(),x=l.fallback,s=t.mode,T=e.child,L=T.sibling,l=Sn(T,{mode:"hidden",children:l.children}),l.subtreeFlags=T.subtreeFlags&65011712,L!==null?x=Sn(L,x):(x=wr(x,s,r,null),x.flags|=2),x.return=t,l.return=t,l.sibling=x,t.child=l,wl(null,l),l=t.child,x=e.child.memoizedState,x===null?x=Qu(r):(s=x.cachePool,s!==null?(T=Ze._currentValue,s=s.parent!==T?{parent:T,pool:T}:s):s=nh(),x={baseLanes:x.baseLanes|r,cachePool:s}),l.memoizedState=x,l.childLanes=Zu(e,v,r),t.memoizedState=Ku,wl(e.child,l)):(Fn(t),r=e.child,e=r.sibling,r=Sn(r,{mode:"visible",children:l.children}),r.return=t,r.sibling=null,e!==null&&(v=t.deletions,v===null?(t.deletions=[e],t.flags|=16):v.push(e)),t.child=r,t.memoizedState=null,r)}function Fu(e,t){return t=fo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fo(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function Ju(e,t,r){return Rr(t,e.child,null,r),e=Fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pp(e,t,r){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),fu(e.return,t,r)}function Wu(e,t,r,l,s,c){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:s,treeForkCount:c}:(v.isBackwards=t,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=r,v.tailMode=s,v.treeForkCount=c)}function vp(e,t,r){var l=t.pendingProps,s=l.revealOrder,c=l.tail;l=l.children;var v=Pe.current,x=(v&2)!==0;if(x?(v=v&1|2,t.flags|=128):v&=1,I(Pe,v),it(e,t,l,r),l=_e?fl:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pp(e,r,t);else if(e.tag===19)pp(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Ii(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Wu(t,!1,s,r,c,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ii(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Wu(t,!0,r,null,c,l);break;case"together":Wu(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Cn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),er|=t.lanes,(r&t.childLanes)===0)if(e!==null){if(fa(e,t,r,!1),(r&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=Sn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Sn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Iu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xi(e)))}function U_(e,t,r){switch(t.tag){case 3:ft(t,t.stateNode.containerInfo),Pn(t,Ze,e.memoizedState.cache),Ar();break;case 27:case 5:Ja(t);break;case 4:ft(t,t.stateNode.containerInfo);break;case 10:Pn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Tu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Fn(t),t.flags|=128,null):(r&t.child.childLanes)!==0?hp(e,t,r):(Fn(t),e=Cn(e,t,r),e!==null?e.sibling:null);Fn(t);break;case 19:var s=(e.flags&128)!==0;if(l=(r&t.childLanes)!==0,l||(fa(e,t,r,!1),l=(r&t.childLanes)!==0),s){if(l)return vp(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),I(Pe,Pe.current),l)break;return null;case 22:return t.lanes=0,sp(e,t,r,t.pendingProps);case 24:Pn(t,Ze,e.memoizedState.cache)}return Cn(e,t,r)}function yp(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Iu(e,r)&&(t.flags&128)===0)return Je=!1,U_(e,t,r);Je=(e.flags&131072)!==0}else Je=!1,_e&&(t.flags&1048576)!==0&&Zm(t,fl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Mr(t.elementType),t.type=e,typeof e=="function")au(e)?(l=Or(e,l),t.tag=1,t=fp(null,t,e,l,r)):(t.tag=0,t=Pu(null,t,e,l,r));else{if(e!=null){var s=e.$$typeof;if(s===Z){t.tag=11,t=lp(null,t,e,l,r);break e}else if(s===Q){t.tag=14,t=ip(null,t,e,l,r);break e}}throw t=W(e)||e,Error(o(306,t,""))}}return t;case 0:return Pu(e,t,t.type,t.pendingProps,r);case 1:return l=t.type,s=Or(l,t.pendingProps),fp(e,t,l,s,r);case 3:e:{if(ft(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var c=t.memoizedState;s=c.element,bu(e,t),xl(t,l,null,r);var v=t.memoizedState;if(l=v.cache,Pn(t,Ze,l),l!==c.cache&&mu(t,[Ze],r,!0),bl(),l=v.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:v.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=mp(e,t,l,r);break e}else if(l!==s){s=Ht(Error(o(424)),t),ml(s),t=mp(e,t,l,r);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Oe=Xt(e.firstChild),at=t,_e=!0,Gn=null,qt=!0,r=sh(t,null,l,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ar(),l===s){t=Cn(e,t,r);break e}it(e,t,l,r)}t=t.child}return t;case 26:return co(e,t),e===null?(r=Cv(t.type,null,t.pendingProps,null))?t.memoizedState=r:_e||(r=t.type,e=t.pendingProps,l=Co(ve.current).createElement(r),l[rt]=t,l[gt]=e,ot(l,r,e),tt(l),t.stateNode=l):t.memoizedState=Cv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ja(t),e===null&&_e&&(l=t.stateNode=wv(t.type,t.pendingProps,ve.current),at=t,qt=!0,s=Oe,lr(t.type)?(Rc=s,Oe=Xt(l.firstChild)):Oe=s),it(e,t,t.pendingProps.children,r),co(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((s=l=Oe)&&(l=m1(l,t.type,t.pendingProps,qt),l!==null?(t.stateNode=l,at=t,Oe=Xt(l.firstChild),qt=!1,s=!0):s=!1),s||Xn(t)),Ja(t),s=t.type,c=t.pendingProps,v=e!==null?e.memoizedProps:null,l=c.children,jc(s,c)?l=null:v!==null&&jc(s,v)&&(t.flags|=32),t.memoizedState!==null&&(s=Au(e,t,C_,null,null,r),Hl._currentValue=s),co(e,t),it(e,t,l,r),t.child;case 6:return e===null&&_e&&((e=r=Oe)&&(r=h1(r,t.pendingProps,qt),r!==null?(t.stateNode=r,at=t,Oe=null,e=!0):e=!1),e||Xn(t)),null;case 13:return hp(e,t,r);case 4:return ft(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Rr(t,null,l,r):it(e,t,l,r),t.child;case 11:return lp(e,t,t.type,t.pendingProps,r);case 7:return it(e,t,t.pendingProps,r),t.child;case 8:return it(e,t,t.pendingProps.children,r),t.child;case 12:return it(e,t,t.pendingProps.children,r),t.child;case 10:return l=t.pendingProps,Pn(t,t.type,l.value),it(e,t,l.children,r),t.child;case 9:return s=t.type._context,l=t.pendingProps.children,Cr(t),s=lt(s),l=l(s),t.flags|=1,it(e,t,l,r),t.child;case 14:return ip(e,t,t.type,t.pendingProps,r);case 15:return op(e,t,t.type,t.pendingProps,r);case 19:return vp(e,t,r);case 31:return L_(e,t,r);case 22:return sp(e,t,r,t.pendingProps);case 24:return Cr(t),l=lt(Ze),e===null?(s=vu(),s===null&&(s=Re,c=hu(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=r),s=c),t.memoizedState={parent:l,cache:s},gu(t),Pn(t,Ze,s)):((e.lanes&r)!==0&&(bu(e,t),xl(t,null,null,r),bl()),s=e.memoizedState,c=t.memoizedState,s.parent!==l?(s={parent:l,cache:l},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Pn(t,Ze,l)):(l=c.cache,Pn(t,Ze,l),l!==s.cache&&mu(t,[Ze],r,!0))),it(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Nn(e){e.flags|=4}function ec(e,t,r,l,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Gp())e.flags|=8192;else throw zr=Zi,yu}else e.flags&=-16777217}function gp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dv(t))if(Gp())e.flags|=8192;else throw zr=Zi,yu}function mo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jf():536870912,e.lanes|=t,Ta|=t)}function Al(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,l|=s.subtreeFlags&65011712,l|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=r,t}function B_(e,t,r){var l=t.pendingProps;switch(su(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return $e(t),null;case 3:return r=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),wn(Ze),Xe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(da(t)?Nn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,cu())),$e(t),null;case 26:var s=t.type,c=t.memoizedState;return e===null?(Nn(t),c!==null?($e(t),gp(t,c)):($e(t),ec(t,s,null,l,r))):c?c!==e.memoizedState?(Nn(t),$e(t),gp(t,c)):($e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Nn(t),$e(t),ec(t,s,e,l,r)),null;case 27:if(Ei(t),r=ve.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Nn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return $e(t),null}e=te.current,da(t)?Jm(t):(e=wv(s,l,r),t.stateNode=e,Nn(t))}return $e(t),null;case 5:if(Ei(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Nn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return $e(t),null}if(c=te.current,da(t))Jm(t);else{var v=Co(ve.current);switch(c){case 1:c=v.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:c=v.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":c=v.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":c=v.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":c=v.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?v.createElement(s,{is:l.is}):v.createElement(s)}}c[rt]=t,c[gt]=l;e:for(v=t.child;v!==null;){if(v.tag===5||v.tag===6)c.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break e;for(;v.sibling===null;){if(v.return===null||v.return===t)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}t.stateNode=c;e:switch(ot(c,s,l),s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Nn(t)}}return $e(t),ec(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,r),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Nn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ve.current,da(t)){if(e=t.stateNode,r=t.memoizedProps,l=null,s=at,s!==null)switch(s.tag){case 27:case 5:l=s.memoizedProps}e[rt]=t,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||hv(e.nodeValue,r)),e||Xn(t,!0)}else e=Co(e).createTextNode(l),e[rt]=t,t.stateNode=e}return $e(t),null;case 31:if(r=t.memoizedState,e===null||e.memoizedState!==null){if(l=da(t),r!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[rt]=t}else Ar(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),e=!1}else r=cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return t.flags&256?(Rt(t),t):(Rt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return $e(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=da(t),l!==null&&l.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[rt]=t}else Ar(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),s=!1}else s=cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Rt(t),t):(Rt(t),null)}return Rt(t),(t.flags&128)!==0?(t.lanes=r,t):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=t.child,s=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(s=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==s&&(l.flags|=2048)),r!==e&&r&&(t.child.flags|=8192),mo(t,t.updateQueue),$e(t),null);case 4:return Xe(),e===null&&Sc(t.stateNode.containerInfo),$e(t),null;case 10:return wn(t.type),$e(t),null;case 19:if(X(Pe),l=t.memoizedState,l===null)return $e(t),null;if(s=(t.flags&128)!==0,c=l.rendering,c===null)if(s)Al(l,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Ii(e),c!==null){for(t.flags|=128,Al(l,!1),e=c.updateQueue,t.updateQueue=e,mo(t,e),t.subtreeFlags=0,e=r,r=t.child;r!==null;)Pm(r,e),r=r.sibling;return I(Pe,Pe.current&1|2),_e&&En(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&At()>go&&(t.flags|=128,s=!0,Al(l,!1),t.lanes=4194304)}else{if(!s)if(e=Ii(c),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,mo(t,e),Al(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!_e)return $e(t),null}else 2*At()-l.renderingStartTime>go&&r!==536870912&&(t.flags|=128,s=!0,Al(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(e=l.last,e!==null?e.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=At(),e.sibling=null,r=Pe.current,I(Pe,s?r&1|2:r&1),_e&&En(t,l.treeForkCount),e):($e(t),null);case 22:case 23:return Rt(t),Eu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(r&536870912)!==0&&(t.flags&128)===0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),r=t.updateQueue,r!==null&&mo(t,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==r&&(t.flags|=2048),e!==null&&X(Nr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),wn(Ze),$e(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function V_(e,t){switch(su(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(Ze),Xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ei(t),null;case 31:if(t.memoizedState!==null){if(Rt(t),t.alternate===null)throw Error(o(340));Ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Rt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Pe),null;case 4:return Xe(),null;case 10:return wn(t.type),null;case 22:case 23:return Rt(t),Eu(),e!==null&&X(Nr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return wn(Ze),null;case 25:return null;default:return null}}function bp(e,t){switch(su(t),t.tag){case 3:wn(Ze),Xe();break;case 26:case 27:case 5:Ei(t);break;case 4:Xe();break;case 31:t.memoizedState!==null&&Rt(t);break;case 13:Rt(t);break;case 19:X(Pe);break;case 10:wn(t.type);break;case 22:case 23:Rt(t),Eu(),e!==null&&X(Nr);break;case 24:wn(Ze)}}function jl(e,t){try{var r=t.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var s=l.next;r=s;do{if((r.tag&e)===e){l=void 0;var c=r.create,v=r.inst;l=c(),v.destroy=l}r=r.next}while(r!==s)}}catch(x){Ce(t,t.return,x)}}function Wn(e,t,r){try{var l=t.updateQueue,s=l!==null?l.lastEffect:null;if(s!==null){var c=s.next;l=c;do{if((l.tag&e)===e){var v=l.inst,x=v.destroy;if(x!==void 0){v.destroy=void 0,s=t;var T=r,L=x;try{L()}catch(H){Ce(s,T,H)}}}l=l.next}while(l!==c)}}catch(H){Ce(t,t.return,H)}}function xp(e){var t=e.updateQueue;if(t!==null){var r=e.stateNode;try{ch(t,r)}catch(l){Ce(e,e.return,l)}}}function _p(e,t,r){r.props=Or(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ce(e,t,l)}}function Cl(e,t){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(s){Ce(e,t,s)}}function fn(e,t){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(s){Ce(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(s){Ce(e,t,s)}else r.current=null}function Sp(e){var t=e.type,r=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(s){Ce(e,e.return,s)}}function tc(e,t,r){try{var l=e.stateNode;o1(l,e.type,r,t),l[gt]=t}catch(s){Ce(e,e.return,s)}}function Ep(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&lr(e.type)||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&lr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rc(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,t):(t=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,t.appendChild(e),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=xn));else if(l!==4&&(l===27&&lr(e.type)&&(r=e.stateNode,t=null),e=e.child,e!==null))for(rc(e,t,r),e=e.sibling;e!==null;)rc(e,t,r),e=e.sibling}function ho(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(l!==4&&(l===27&&lr(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(ho(e,t,r),e=e.sibling;e!==null;)ho(e,t,r),e=e.sibling}function Tp(e){var t=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);ot(t,l,r),t[rt]=e,t[gt]=r}catch(c){Ce(e,e.return,c)}}var Mn=!1,We=!1,ac=!1,wp=typeof WeakSet=="function"?WeakSet:Set,nt=null;function H_(e,t){if(e=e.containerInfo,wc=$o,e=Um(e),Js(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var s=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var v=0,x=-1,T=-1,L=0,H=0,P=e,U=null;t:for(;;){for(var B;P!==r||s!==0&&P.nodeType!==3||(x=v+s),P!==c||l!==0&&P.nodeType!==3||(T=v+l),P.nodeType===3&&(v+=P.nodeValue.length),(B=P.firstChild)!==null;)U=P,P=B;for(;;){if(P===e)break t;if(U===r&&++L===s&&(x=v),U===c&&++H===l&&(T=v),(B=P.nextSibling)!==null)break;P=U,U=P.parentNode}P=B}r=x===-1||T===-1?null:{start:x,end:T}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ac={focusedElem:e,selectionRange:r},$o=!1,nt=t;nt!==null;)if(t=nt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nt=e;else for(;nt!==null;){switch(t=nt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)s=e[r],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,r=t,s=c.memoizedProps,c=c.memoizedState,l=r.stateNode;try{var ne=Or(r.type,s);e=l.getSnapshotBeforeUpdate(ne,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ce(r,r.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,r=e.nodeType,r===9)Nc(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,nt=e;break}nt=t.return}}function Ap(e,t,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Rn(e,r),l&4&&jl(5,r);break;case 1:if(Rn(e,r),l&4)if(e=r.stateNode,t===null)try{e.componentDidMount()}catch(v){Ce(r,r.return,v)}else{var s=Or(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ce(r,r.return,v)}}l&64&&xp(r),l&512&&Cl(r,r.return);break;case 3:if(Rn(e,r),l&64&&(e=r.updateQueue,e!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{ch(e,t)}catch(v){Ce(r,r.return,v)}}break;case 27:t===null&&l&4&&Tp(r);case 26:case 5:Rn(e,r),t===null&&l&4&&Sp(r),l&512&&Cl(r,r.return);break;case 12:Rn(e,r);break;case 31:Rn(e,r),l&4&&Np(e,r);break;case 13:Rn(e,r),l&4&&Mp(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Z_.bind(null,r),p1(e,r))));break;case 22:if(l=r.memoizedState!==null||Mn,!l){t=t!==null&&t.memoizedState!==null||We,s=Mn;var c=We;Mn=l,(We=t)&&!c?Dn(e,r,(r.subtreeFlags&8772)!==0):Rn(e,r),Mn=s,We=c}break;case 30:break;default:Rn(e,r)}}function jp(e){var t=e.alternate;t!==null&&(e.alternate=null,jp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Os(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,xt=!1;function zn(e,t,r){for(r=r.child;r!==null;)Cp(e,t,r),r=r.sibling}function Cp(e,t,r){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Wa,r)}catch{}switch(r.tag){case 26:We||fn(r,t),zn(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:We||fn(r,t);var l=Ue,s=xt;lr(r.type)&&(Ue=r.stateNode,xt=!1),zn(e,t,r),Ul(r.stateNode),Ue=l,xt=s;break;case 5:We||fn(r,t);case 6:if(l=Ue,s=xt,Ue=null,zn(e,t,r),Ue=l,xt=s,Ue!==null)if(xt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(r.stateNode)}catch(c){Ce(r,t,c)}else try{Ue.removeChild(r.stateNode)}catch(c){Ce(r,t,c)}break;case 18:Ue!==null&&(xt?(e=Ue,xv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Ra(e)):xv(Ue,r.stateNode));break;case 4:l=Ue,s=xt,Ue=r.stateNode.containerInfo,xt=!0,zn(e,t,r),Ue=l,xt=s;break;case 0:case 11:case 14:case 15:Wn(2,r,t),We||Wn(4,r,t),zn(e,t,r);break;case 1:We||(fn(r,t),l=r.stateNode,typeof l.componentWillUnmount=="function"&&_p(r,t,l)),zn(e,t,r);break;case 21:zn(e,t,r);break;case 22:We=(l=We)||r.memoizedState!==null,zn(e,t,r),We=l;break;default:zn(e,t,r)}}function Np(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ra(e)}catch(r){Ce(t,t.return,r)}}}function Mp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ra(e)}catch(r){Ce(t,t.return,r)}}function k_(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new wp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new wp),t;default:throw Error(o(435,e.tag))}}function po(e,t){var r=k_(e);t.forEach(function(l){if(!r.has(l)){r.add(l);var s=F_.bind(null,e,l);l.then(s,s)}})}function _t(e,t){var r=t.deletions;if(r!==null)for(var l=0;l<r.length;l++){var s=r[l],c=e,v=t,x=v;e:for(;x!==null;){switch(x.tag){case 27:if(lr(x.type)){Ue=x.stateNode,xt=!1;break e}break;case 5:Ue=x.stateNode,xt=!1;break e;case 3:case 4:Ue=x.stateNode.containerInfo,xt=!0;break e}x=x.return}if(Ue===null)throw Error(o(160));Cp(c,v,s),Ue=null,xt=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)zp(t,e),t=t.sibling}var nn=null;function zp(e,t){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_t(t,e),St(e),l&4&&(Wn(3,e,e.return),jl(3,e),Wn(5,e,e.return));break;case 1:_t(t,e),St(e),l&512&&(We||r===null||fn(r,r.return)),l&64&&Mn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var s=nn;if(_t(t,e),St(e),l&512&&(We||r===null||fn(r,r.return)),l&4){var c=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){e:{l=e.type,r=e.memoizedProps,s=s.ownerDocument||s;t:switch(l){case"title":c=s.getElementsByTagName("title")[0],(!c||c[tl]||c[rt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(l),s.head.insertBefore(c,s.querySelector("head > title"))),ot(c,l,r),c[rt]=e,tt(c),l=c;break e;case"link":var v=zv("link","href",s).get(l+(r.href||""));if(v){for(var x=0;x<v.length;x++)if(c=v[x],c.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&c.getAttribute("rel")===(r.rel==null?null:r.rel)&&c.getAttribute("title")===(r.title==null?null:r.title)&&c.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){v.splice(x,1);break t}}c=s.createElement(l),ot(c,l,r),s.head.appendChild(c);break;case"meta":if(v=zv("meta","content",s).get(l+(r.content||""))){for(x=0;x<v.length;x++)if(c=v[x],c.getAttribute("content")===(r.content==null?null:""+r.content)&&c.getAttribute("name")===(r.name==null?null:r.name)&&c.getAttribute("property")===(r.property==null?null:r.property)&&c.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&c.getAttribute("charset")===(r.charSet==null?null:r.charSet)){v.splice(x,1);break t}}c=s.createElement(l),ot(c,l,r),s.head.appendChild(c);break;default:throw Error(o(468,l))}c[rt]=e,tt(c),l=c}e.stateNode=l}else Rv(s,e.type,e.stateNode);else e.stateNode=Mv(s,l,e.memoizedProps);else c!==l?(c===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):c.count--,l===null?Rv(s,e.type,e.stateNode):Mv(s,l,e.memoizedProps)):l===null&&e.stateNode!==null&&tc(e,e.memoizedProps,r.memoizedProps)}break;case 27:_t(t,e),St(e),l&512&&(We||r===null||fn(r,r.return)),r!==null&&l&4&&tc(e,e.memoizedProps,r.memoizedProps);break;case 5:if(_t(t,e),St(e),l&512&&(We||r===null||fn(r,r.return)),e.flags&32){s=e.stateNode;try{ta(s,"")}catch(ne){Ce(e,e.return,ne)}}l&4&&e.stateNode!=null&&(s=e.memoizedProps,tc(e,s,r!==null?r.memoizedProps:s)),l&1024&&(ac=!0);break;case 6:if(_t(t,e),St(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(ne){Ce(e,e.return,ne)}}break;case 3:if(zo=null,s=nn,nn=No(t.containerInfo),_t(t,e),nn=s,St(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ra(t.containerInfo)}catch(ne){Ce(e,e.return,ne)}ac&&(ac=!1,Rp(e));break;case 4:l=nn,nn=No(e.stateNode.containerInfo),_t(t,e),St(e),nn=l;break;case 12:_t(t,e),St(e);break;case 31:_t(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,po(e,l)));break;case 13:_t(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(yo=At()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,po(e,l)));break;case 22:s=e.memoizedState!==null;var T=r!==null&&r.memoizedState!==null,L=Mn,H=We;if(Mn=L||s,We=H||T,_t(t,e),We=H,Mn=L,St(e),l&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(r===null||T||Mn||We||$r(e)),r=null,t=e;;){if(t.tag===5||t.tag===26){if(r===null){T=r=t;try{if(c=T.stateNode,s)v=c.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{x=T.stateNode;var P=T.memoizedProps.style,U=P!=null&&P.hasOwnProperty("display")?P.display:null;x.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(ne){Ce(T,T.return,ne)}}}else if(t.tag===6){if(r===null){T=t;try{T.stateNode.nodeValue=s?"":T.memoizedProps}catch(ne){Ce(T,T.return,ne)}}}else if(t.tag===18){if(r===null){T=t;try{var B=T.stateNode;s?_v(B,!0):_v(T.stateNode,!1)}catch(ne){Ce(T,T.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,po(e,r))));break;case 19:_t(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,po(e,l)));break;case 30:break;case 21:break;default:_t(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var r,l=e.return;l!==null;){if(Ep(l)){r=l;break}l=l.return}if(r==null)throw Error(o(160));switch(r.tag){case 27:var s=r.stateNode,c=nc(e);ho(e,c,s);break;case 5:var v=r.stateNode;r.flags&32&&(ta(v,""),r.flags&=-33);var x=nc(e);ho(e,x,v);break;case 3:case 4:var T=r.stateNode.containerInfo,L=nc(e);rc(e,L,T);break;default:throw Error(o(161))}}catch(H){Ce(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Rp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Rn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ap(e,t.alternate,t),t=t.sibling}function $r(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),$r(t);break;case 1:fn(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&_p(t,t.return,r),$r(t);break;case 27:Ul(t.stateNode);case 26:case 5:fn(t,t.return),$r(t);break;case 22:t.memoizedState===null&&$r(t);break;case 30:$r(t);break;default:$r(t)}e=e.sibling}}function Dn(e,t,r){for(r=r&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,s=e,c=t,v=c.flags;switch(c.tag){case 0:case 11:case 15:Dn(s,c,r),jl(4,c);break;case 1:if(Dn(s,c,r),l=c,s=l.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(L){Ce(l,l.return,L)}if(l=c,s=l.updateQueue,s!==null){var x=l.stateNode;try{var T=s.shared.hiddenCallbacks;if(T!==null)for(s.shared.hiddenCallbacks=null,s=0;s<T.length;s++)uh(T[s],x)}catch(L){Ce(l,l.return,L)}}r&&v&64&&xp(c),Cl(c,c.return);break;case 27:Tp(c);case 26:case 5:Dn(s,c,r),r&&l===null&&v&4&&Sp(c),Cl(c,c.return);break;case 12:Dn(s,c,r);break;case 31:Dn(s,c,r),r&&v&4&&Np(s,c);break;case 13:Dn(s,c,r),r&&v&4&&Mp(s,c);break;case 22:c.memoizedState===null&&Dn(s,c,r),Cl(c,c.return);break;case 30:break;default:Dn(s,c,r)}t=t.sibling}}function lc(e,t){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&hl(r))}function ic(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hl(e))}function rn(e,t,r,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dp(e,t,r,l),t=t.sibling}function Dp(e,t,r,l){var s=t.flags;switch(t.tag){case 0:case 11:case 15:rn(e,t,r,l),s&2048&&jl(9,t);break;case 1:rn(e,t,r,l);break;case 3:rn(e,t,r,l),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hl(e)));break;case 12:if(s&2048){rn(e,t,r,l),e=t.stateNode;try{var c=t.memoizedProps,v=c.id,x=c.onPostCommit;typeof x=="function"&&x(v,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Ce(t,t.return,T)}}else rn(e,t,r,l);break;case 31:rn(e,t,r,l);break;case 13:rn(e,t,r,l);break;case 23:break;case 22:c=t.stateNode,v=t.alternate,t.memoizedState!==null?c._visibility&2?rn(e,t,r,l):Nl(e,t):c._visibility&2?rn(e,t,r,l):(c._visibility|=2,_a(e,t,r,l,(t.subtreeFlags&10256)!==0||!1)),s&2048&&lc(v,t);break;case 24:rn(e,t,r,l),s&2048&&ic(t.alternate,t);break;default:rn(e,t,r,l)}}function _a(e,t,r,l,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,v=t,x=r,T=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:_a(c,v,x,T,s),jl(8,v);break;case 23:break;case 22:var H=v.stateNode;v.memoizedState!==null?H._visibility&2?_a(c,v,x,T,s):Nl(c,v):(H._visibility|=2,_a(c,v,x,T,s)),s&&L&2048&&lc(v.alternate,v);break;case 24:_a(c,v,x,T,s),s&&L&2048&&ic(v.alternate,v);break;default:_a(c,v,x,T,s)}t=t.sibling}}function Nl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var r=e,l=t,s=l.flags;switch(l.tag){case 22:Nl(r,l),s&2048&&lc(l.alternate,l);break;case 24:Nl(r,l),s&2048&&ic(l.alternate,l);break;default:Nl(r,l)}t=t.sibling}}var Ml=8192;function Sa(e,t,r){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Op(e,t,r),e=e.sibling}function Op(e,t,r){switch(e.tag){case 26:Sa(e,t,r),e.flags&Ml&&e.memoizedState!==null&&j1(r,nn,e.memoizedState,e.memoizedProps);break;case 5:Sa(e,t,r);break;case 3:case 4:var l=nn;nn=No(e.stateNode.containerInfo),Sa(e,t,r),nn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ml,Ml=16777216,Sa(e,t,r),Ml=l):Sa(e,t,r));break;default:Sa(e,t,r)}}function $p(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];nt=l,Up(l,e)}$p(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lp(e),e=e.sibling}function Lp(e){switch(e.tag){case 0:case 11:case 15:zl(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:zl(e);break;case 12:zl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vo(e)):zl(e);break;default:zl(e)}}function vo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];nt=l,Up(l,e)}$p(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),vo(t);break;case 22:r=t.stateNode,r._visibility&2&&(r._visibility&=-3,vo(t));break;default:vo(t)}e=e.sibling}}function Up(e,t){for(;nt!==null;){var r=nt;switch(r.tag){case 0:case 11:case 15:Wn(8,r,t);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:hl(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,nt=l;else e:for(r=e;nt!==null;){l=nt;var s=l.sibling,c=l.return;if(jp(l),l===r){nt=null;break e}if(s!==null){s.return=c,nt=s;break e}nt=c}}}var Y_={getCacheForType:function(e){var t=lt(Ze),r=t.data.get(e);return r===void 0&&(r=e(),t.data.set(e,r)),r},cacheSignal:function(){return lt(Ze).controller.signal}},q_=typeof WeakMap=="function"?WeakMap:Map,we=0,Re=null,ye=null,be=0,je=0,Dt=null,In=!1,Ea=!1,oc=!1,On=0,Ye=0,er=0,Lr=0,sc=0,Ot=0,Ta=0,Rl=null,Et=null,uc=!1,yo=0,Bp=0,go=1/0,bo=null,tr=null,Ie=0,nr=null,wa=null,$n=0,cc=0,dc=null,Vp=null,Dl=0,fc=null;function $t(){return(we&2)!==0&&be!==0?be&-be:R.T!==null?gc():tm()}function Hp(){if(Ot===0)if((be&536870912)===0||_e){var e=Ai;Ai<<=1,(Ai&3932160)===0&&(Ai=262144),Ot=e}else Ot=536870912;return e=zt.current,e!==null&&(e.flags|=32),Ot}function Tt(e,t,r){(e===Re&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(Aa(e,0),rr(e,be,Ot,!1)),el(e,r),((we&2)===0||e!==Re)&&(e===Re&&((we&2)===0&&(Lr|=r),Ye===4&&rr(e,be,Ot,!1)),mn(e))}function kp(e,t,r){if((we&6)!==0)throw Error(o(327));var l=!r&&(t&127)===0&&(t&e.expiredLanes)===0||Ia(e,t),s=l?P_(e,t):hc(e,t,!0),c=l;do{if(s===0){Ea&&!l&&rr(e,t,0,!1);break}else{if(r=e.current.alternate,c&&!G_(r)){s=hc(e,t,!1),c=!1;continue}if(s===2){if(c=t,e.errorRecoveryDisabledLanes&c)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){t=v;e:{var x=e;s=Rl;var T=x.current.memoizedState.isDehydrated;if(T&&(Aa(x,v).flags|=256),v=hc(x,v,!1),v!==2){if(oc&&!T){x.errorRecoveryDisabledLanes|=c,Lr|=c,s=4;break e}c=Et,Et=s,c!==null&&(Et===null?Et=c:Et.push.apply(Et,c))}s=v}if(c=!1,s!==2)continue}}if(s===1){Aa(e,0),rr(e,t,0,!0);break}e:{switch(l=e,c=s,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:rr(l,t,Ot,!In);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(s=yo+300-At(),10<s)){if(rr(l,t,Ot,!In),Ci(l,0,!0)!==0)break e;$n=t,l.timeoutHandle=gv(Yp.bind(null,l,r,Et,bo,uc,t,Ot,Lr,Ta,In,c,"Throttled",-0,0),s);break e}Yp(l,r,Et,bo,uc,t,Ot,Lr,Ta,In,c,null,-0,0)}}break}while(!0);mn(e)}function Yp(e,t,r,l,s,c,v,x,T,L,H,P,U,B){if(e.timeoutHandle=-1,P=t.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xn},Op(t,c,P);var ne=(c&62914560)===c?yo-At():(c&4194048)===c?Bp-At():0;if(ne=C1(P,ne),ne!==null){$n=c,e.cancelPendingCommit=ne(Fp.bind(null,e,t,c,r,l,s,v,x,T,H,P,null,U,B)),rr(e,c,v,!L);return}}Fp(e,t,c,r,l,s,v,x,T)}function G_(e){for(var t=e;;){var r=t.tag;if((r===0||r===11||r===15)&&t.flags&16384&&(r=t.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var s=r[l],c=s.getSnapshot;s=s.value;try{if(!Nt(c(),s))return!1}catch{return!1}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rr(e,t,r,l){t&=~sc,t&=~Lr,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var s=t;0<s;){var c=31-Ct(s),v=1<<c;l[c]=-1,s&=~v}r!==0&&Wf(e,r,t)}function xo(){return(we&6)===0?(Ol(0),!1):!0}function mc(){if(ye!==null){if(je===0)var e=ye.return;else e=ye,Tn=jr=null,Nu(e),va=null,vl=0,e=ye;for(;e!==null;)bp(e.alternate,e),e=e.return;ye=null}}function Aa(e,t){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,c1(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),$n=0,mc(),Re=e,ye=r=Sn(e.current,null),be=t,je=0,Dt=null,In=!1,Ea=Ia(e,t),oc=!1,Ta=Ot=sc=Lr=er=Ye=0,Et=Rl=null,uc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var s=31-Ct(l),c=1<<s;t|=e[s],l&=~c}return On=t,Hi(),r}function qp(e,t){me=null,R.H=Tl,t===pa||t===Qi?(t=lh(),je=3):t===yu?(t=lh(),je=4):je=t===Xu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,ye===null&&(Ye=1,so(e,Ht(t,e.current)))}function Gp(){var e=zt.current;return e===null?!0:(be&4194048)===be?Gt===null:(be&62914560)===be||(be&536870912)!==0?e===Gt:!1}function Xp(){var e=R.H;return R.H=Tl,e===null?Tl:e}function Pp(){var e=R.A;return R.A=Y_,e}function _o(){Ye=4,In||(be&4194048)!==be&&zt.current!==null||(Ea=!0),(er&134217727)===0&&(Lr&134217727)===0||Re===null||rr(Re,be,Ot,!1)}function hc(e,t,r){var l=we;we|=2;var s=Xp(),c=Pp();(Re!==e||be!==t)&&(bo=null,Aa(e,t)),t=!1;var v=Ye;e:do try{if(je!==0&&ye!==null){var x=ye,T=Dt;switch(je){case 8:mc(),v=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var L=je;if(je=0,Dt=null,ja(e,x,T,L),r&&Ea){v=0;break e}break;default:L=je,je=0,Dt=null,ja(e,x,T,L)}}X_(),v=Ye;break}catch(H){qp(e,H)}while(!0);return t&&e.shellSuspendCounter++,Tn=jr=null,we=l,R.H=s,R.A=c,ye===null&&(Re=null,be=0,Hi()),v}function X_(){for(;ye!==null;)Kp(ye)}function P_(e,t){var r=we;we|=2;var l=Xp(),s=Pp();Re!==e||be!==t?(bo=null,go=At()+500,Aa(e,t)):Ea=Ia(e,t);e:do try{if(je!==0&&ye!==null){t=ye;var c=Dt;t:switch(je){case 1:je=0,Dt=null,ja(e,t,c,1);break;case 2:case 9:if(rh(c)){je=0,Dt=null,Qp(t);break}t=function(){je!==2&&je!==9||Re!==e||(je=7),mn(e)},c.then(t,t);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:rh(c)?(je=0,Dt=null,Qp(t)):(je=0,Dt=null,ja(e,t,c,7));break;case 5:var v=null;switch(ye.tag){case 26:v=ye.memoizedState;case 5:case 27:var x=ye;if(v?Dv(v):x.stateNode.complete){je=0,Dt=null;var T=x.sibling;if(T!==null)ye=T;else{var L=x.return;L!==null?(ye=L,So(L)):ye=null}break t}}je=0,Dt=null,ja(e,t,c,5);break;case 6:je=0,Dt=null,ja(e,t,c,6);break;case 8:mc(),Ye=6;break e;default:throw Error(o(462))}}K_();break}catch(H){qp(e,H)}while(!0);return Tn=jr=null,R.H=l,R.A=s,we=r,ye!==null?0:(Re=null,be=0,Hi(),Ye)}function K_(){for(;ye!==null&&!v0();)Kp(ye)}function Kp(e){var t=yp(e.alternate,e,On);e.memoizedProps=e.pendingProps,t===null?So(e):ye=t}function Qp(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=dp(r,t,t.pendingProps,t.type,void 0,be);break;case 11:t=dp(r,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:Nu(t);default:bp(r,t),t=ye=Pm(t,On),t=yp(r,t,On)}e.memoizedProps=e.pendingProps,t===null?So(e):ye=t}function ja(e,t,r,l){Tn=jr=null,Nu(t),va=null,vl=0;var s=t.return;try{if($_(e,s,t,r,be)){Ye=1,so(e,Ht(r,e.current)),ye=null;return}}catch(c){if(s!==null)throw ye=s,c;Ye=1,so(e,Ht(r,e.current)),ye=null;return}t.flags&32768?(_e||l===1?e=!0:Ea||(be&536870912)!==0?e=!1:(In=e=!0,(l===2||l===9||l===3||l===6)&&(l=zt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Zp(t,e)):So(t)}function So(e){var t=e;do{if((t.flags&32768)!==0){Zp(t,In);return}e=t.return;var r=B_(t.alternate,t,On);if(r!==null){ye=r;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Ye===0&&(Ye=5)}function Zp(e,t){do{var r=V_(e.alternate,e);if(r!==null){r.flags&=32767,ye=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=r}while(e!==null);Ye=6,ye=null}function Fp(e,t,r,l,s,c,v,x,T){e.cancelPendingCommit=null;do Eo();while(Ie!==0);if((we&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=nu,A0(e,r,c,v,x,T),e===Re&&(ye=Re=null,be=0),wa=t,nr=e,$n=r,cc=c,dc=s,Vp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,J_(Ti,function(){return tv(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,s=G.p,G.p=2,v=we,we|=4;try{H_(e,t,r)}finally{we=v,G.p=s,R.T=l}}Ie=1,Jp(),Wp(),Ip()}}function Jp(){if(Ie===1){Ie=0;var e=nr,t=wa,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=R.T,R.T=null;var l=G.p;G.p=2;var s=we;we|=4;try{zp(t,e);var c=Ac,v=Um(e.containerInfo),x=c.focusedElem,T=c.selectionRange;if(v!==x&&x&&x.ownerDocument&&Lm(x.ownerDocument.documentElement,x)){if(T!==null&&Js(x)){var L=T.start,H=T.end;if(H===void 0&&(H=L),"selectionStart"in x)x.selectionStart=L,x.selectionEnd=Math.min(H,x.value.length);else{var P=x.ownerDocument||document,U=P&&P.defaultView||window;if(U.getSelection){var B=U.getSelection(),ne=x.textContent.length,se=Math.min(T.start,ne),ze=T.end===void 0?se:Math.min(T.end,ne);!B.extend&&se>ze&&(v=ze,ze=se,se=v);var O=$m(x,se),M=$m(x,ze);if(O&&M&&(B.rangeCount!==1||B.anchorNode!==O.node||B.anchorOffset!==O.offset||B.focusNode!==M.node||B.focusOffset!==M.offset)){var $=P.createRange();$.setStart(O.node,O.offset),B.removeAllRanges(),se>ze?(B.addRange($),B.extend(M.node,M.offset)):($.setEnd(M.node,M.offset),B.addRange($))}}}}for(P=[],B=x;B=B.parentNode;)B.nodeType===1&&P.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<P.length;x++){var Y=P[x];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}$o=!!wc,Ac=wc=null}finally{we=s,G.p=l,R.T=r}}e.current=t,Ie=2}}function Wp(){if(Ie===2){Ie=0;var e=nr,t=wa,r=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||r){r=R.T,R.T=null;var l=G.p;G.p=2;var s=we;we|=4;try{Ap(e,t.alternate,t)}finally{we=s,G.p=l,R.T=r}}Ie=3}}function Ip(){if(Ie===4||Ie===3){Ie=0,y0();var e=nr,t=wa,r=$n,l=Vp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ie=5:(Ie=0,wa=nr=null,ev(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(tr=null),Rs(r),t=t.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Wa,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,s=G.p,G.p=2,R.T=null;try{for(var c=e.onRecoverableError,v=0;v<l.length;v++){var x=l[v];c(x.value,{componentStack:x.stack})}}finally{R.T=t,G.p=s}}($n&3)!==0&&Eo(),mn(e),s=e.pendingLanes,(r&261930)!==0&&(s&42)!==0?e===fc?Dl++:(Dl=0,fc=e):Dl=0,Ol(0)}}function ev(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,hl(t)))}function Eo(){return Jp(),Wp(),Ip(),tv()}function tv(){if(Ie!==5)return!1;var e=nr,t=cc;cc=0;var r=Rs($n),l=R.T,s=G.p;try{G.p=32>r?32:r,R.T=null,r=dc,dc=null;var c=nr,v=$n;if(Ie=0,wa=nr=null,$n=0,(we&6)!==0)throw Error(o(331));var x=we;if(we|=4,Lp(c.current),Dp(c,c.current,v,r),we=x,Ol(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Wa,c)}catch{}return!0}finally{G.p=s,R.T=l,ev(e,t)}}function nv(e,t,r){t=Ht(r,t),t=Gu(e.stateNode,t,2),e=Zn(e,t,2),e!==null&&(el(e,2),mn(e))}function Ce(e,t,r){if(e.tag===3)nv(e,e,r);else for(;t!==null;){if(t.tag===3){nv(t,e,r);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){e=Ht(r,e),r=rp(2),l=Zn(t,r,2),l!==null&&(ap(r,l,t,e),el(l,2),mn(l));break}}t=t.return}}function pc(e,t,r){var l=e.pingCache;if(l===null){l=e.pingCache=new q_;var s=new Set;l.set(t,s)}else s=l.get(t),s===void 0&&(s=new Set,l.set(t,s));s.has(r)||(oc=!0,s.add(r),e=Q_.bind(null,e,t,r),t.then(e,e))}function Q_(e,t,r){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Re===e&&(be&r)===r&&(Ye===4||Ye===3&&(be&62914560)===be&&300>At()-yo?(we&2)===0&&Aa(e,0):sc|=r,Ta===be&&(Ta=0)),mn(e)}function rv(e,t){t===0&&(t=Jf()),e=Tr(e,t),e!==null&&(el(e,t),mn(e))}function Z_(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),rv(e,r)}function F_(e,t){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),rv(e,r)}function J_(e,t){return Cs(e,t)}var To=null,Ca=null,vc=!1,wo=!1,yc=!1,ar=0;function mn(e){e!==Ca&&e.next===null&&(Ca===null?To=Ca=e:Ca=Ca.next=e),wo=!0,vc||(vc=!0,I_())}function Ol(e,t){if(!yc&&wo){yc=!0;do for(var r=!1,l=To;l!==null;){if(e!==0){var s=l.pendingLanes;if(s===0)var c=0;else{var v=l.suspendedLanes,x=l.pingedLanes;c=(1<<31-Ct(42|e)+1)-1,c&=s&~(v&~x),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(r=!0,ov(l,c))}else c=be,c=Ci(l,l===Re?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Ia(l,c)||(r=!0,ov(l,c));l=l.next}while(r);yc=!1}}function W_(){av()}function av(){wo=vc=!1;var e=0;ar!==0&&u1()&&(e=ar);for(var t=At(),r=null,l=To;l!==null;){var s=l.next,c=lv(l,t);c===0?(l.next=null,r===null?To=s:r.next=s,s===null&&(Ca=r)):(r=l,(e!==0||(c&3)!==0)&&(wo=!0)),l=s}Ie!==0&&Ie!==5||Ol(e),ar!==0&&(ar=0)}function lv(e,t){for(var r=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var v=31-Ct(c),x=1<<v,T=s[v];T===-1?((x&r)===0||(x&l)!==0)&&(s[v]=w0(x,t)):T<=t&&(e.expiredLanes|=x),c&=~x}if(t=Re,r=be,r=Ci(e,e===t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===t&&(je===2||je===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ns(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ia(e,r)){if(t=r&-r,t===e.callbackPriority)return t;switch(l!==null&&Ns(l),Rs(r)){case 2:case 8:r=Zf;break;case 32:r=Ti;break;case 268435456:r=Ff;break;default:r=Ti}return l=iv.bind(null,e),r=Cs(r,l),e.callbackPriority=t,e.callbackNode=r,t}return l!==null&&l!==null&&Ns(l),e.callbackPriority=2,e.callbackNode=null,2}function iv(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Eo()&&e.callbackNode!==r)return null;var l=be;return l=Ci(e,e===Re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(kp(e,l,t),lv(e,At()),e.callbackNode!=null&&e.callbackNode===r?iv.bind(null,e):null)}function ov(e,t){if(Eo())return null;kp(e,t,!0)}function I_(){d1(function(){(we&6)!==0?Cs(Qf,W_):av()})}function gc(){if(ar===0){var e=ma;e===0&&(e=wi,wi<<=1,(wi&261888)===0&&(wi=256)),ar=e}return ar}function sv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function uv(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function e1(e,t,r,l,s){if(t==="submit"&&r&&r.stateNode===s){var c=sv((s[gt]||null).action),v=l.submitter;v&&(t=(t=v[gt]||null)?sv(t.formAction):v.getAttribute("formAction"),t!==null&&(c=t,v=null));var x=new Li("action","action",null,l,s);e.push({event:x,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ar!==0){var T=v?uv(s,v):new FormData(s);Bu(r,{pending:!0,data:T,method:s.method,action:c},null,T)}}else typeof c=="function"&&(x.preventDefault(),T=v?uv(s,v):new FormData(s),Bu(r,{pending:!0,data:T,method:s.method,action:c},c,T))},currentTarget:s}]})}}for(var bc=0;bc<tu.length;bc++){var xc=tu[bc],t1=xc.toLowerCase(),n1=xc[0].toUpperCase()+xc.slice(1);tn(t1,"on"+n1)}tn(Hm,"onAnimationEnd"),tn(km,"onAnimationIteration"),tn(Ym,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(g_,"onTransitionRun"),tn(b_,"onTransitionStart"),tn(x_,"onTransitionCancel"),tn(qm,"onTransitionEnd"),Ir("onMouseEnter",["mouseout","mouseover"]),Ir("onMouseLeave",["mouseout","mouseover"]),Ir("onPointerEnter",["pointerout","pointerover"]),Ir("onPointerLeave",["pointerout","pointerover"]),xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xr("onBeforeInput",["compositionend","keypress","textInput","paste"]),xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($l));function cv(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],s=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var v=l.length-1;0<=v;v--){var x=l[v],T=x.instance,L=x.currentTarget;if(x=x.listener,T!==c&&s.isPropagationStopped())break e;c=x,s.currentTarget=L;try{c(s)}catch(H){Vi(H)}s.currentTarget=null,c=T}else for(v=0;v<l.length;v++){if(x=l[v],T=x.instance,L=x.currentTarget,x=x.listener,T!==c&&s.isPropagationStopped())break e;c=x,s.currentTarget=L;try{c(s)}catch(H){Vi(H)}s.currentTarget=null,c=T}}}}function ge(e,t){var r=t[Ds];r===void 0&&(r=t[Ds]=new Set);var l=e+"__bubble";r.has(l)||(dv(t,e,2,!1),r.add(l))}function _c(e,t,r){var l=0;t&&(l|=4),dv(r,e,l,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Sc(e){if(!e[Ao]){e[Ao]=!0,am.forEach(function(r){r!=="selectionchange"&&(r1.has(r)||_c(r,!1,e),_c(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,_c("selectionchange",!1,t))}}function dv(e,t,r,l){switch(Hv(t)){case 2:var s=z1;break;case 8:s=R1;break;default:s=Uc}r=s.bind(null,t,r,e),s=void 0,!Ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Ec(e,t,r,l,s){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var x=l.stateNode.containerInfo;if(x===s)break;if(v===4)for(v=l.return;v!==null;){var T=v.tag;if((T===3||T===4)&&v.stateNode.containerInfo===s)return;v=v.return}for(;x!==null;){if(v=Fr(x),v===null)return;if(T=v.tag,T===5||T===6||T===26||T===27){l=c=v;continue e}x=x.parentNode}}l=l.return}vm(function(){var L=c,H=Hs(r),P=[];e:{var U=Gm.get(e);if(U!==void 0){var B=Li,ne=e;switch(e){case"keypress":if(Oi(r)===0)break e;case"keydown":case"keyup":B=F0;break;case"focusin":ne="focus",B=Ps;break;case"focusout":ne="blur",B=Ps;break;case"beforeblur":case"afterblur":B=Ps;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=I0;break;case Hm:case km:case Ym:B=k0;break;case qm:B=t_;break;case"scroll":case"scrollend":B=L0;break;case"wheel":B=r_;break;case"copy":case"cut":case"paste":B=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=_m;break;case"toggle":case"beforetoggle":B=l_}var se=(t&4)!==0,ze=!se&&(e==="scroll"||e==="scrollend"),O=se?U!==null?U+"Capture":null:U;se=[];for(var M=L,$;M!==null;){var Y=M;if($=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||$===null||O===null||(Y=rl(M,O),Y!=null&&se.push(Ll(M,Y,$))),ze)break;M=M.return}0<se.length&&(U=new B(U,ne,null,r,H),P.push({event:U,listeners:se}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",U&&r!==Vs&&(ne=r.relatedTarget||r.fromElement)&&(Fr(ne)||ne[Zr]))break e;if((B||U)&&(U=H.window===H?H:(U=H.ownerDocument)?U.defaultView||U.parentWindow:window,B?(ne=r.relatedTarget||r.toElement,B=L,ne=ne?Fr(ne):null,ne!==null&&(ze=d(ne),se=ne.tag,ne!==ze||se!==5&&se!==27&&se!==6)&&(ne=null)):(B=null,ne=L),B!==ne)){if(se=bm,Y="onMouseLeave",O="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(se=_m,Y="onPointerLeave",O="onPointerEnter",M="pointer"),ze=B==null?U:nl(B),$=ne==null?U:nl(ne),U=new se(Y,M+"leave",B,r,H),U.target=ze,U.relatedTarget=$,Y=null,Fr(H)===L&&(se=new se(O,M+"enter",ne,r,H),se.target=$,se.relatedTarget=ze,Y=se),ze=Y,B&&ne)t:{for(se=a1,O=B,M=ne,$=0,Y=O;Y;Y=se(Y))$++;Y=0;for(var ie=M;ie;ie=se(ie))Y++;for(;0<$-Y;)O=se(O),$--;for(;0<Y-$;)M=se(M),Y--;for(;$--;){if(O===M||M!==null&&O===M.alternate){se=O;break t}O=se(O),M=se(M)}se=null}else se=null;B!==null&&fv(P,U,B,se,!1),ne!==null&&ze!==null&&fv(P,ze,ne,se,!0)}}e:{if(U=L?nl(L):window,B=U.nodeName&&U.nodeName.toLowerCase(),B==="select"||B==="input"&&U.type==="file")var Ee=Nm;else if(jm(U))if(Mm)Ee=p_;else{Ee=m_;var ae=f_}else B=U.nodeName,!B||B.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?L&&Bs(L.elementType)&&(Ee=Nm):Ee=h_;if(Ee&&(Ee=Ee(e,L))){Cm(P,Ee,r,H);break e}ae&&ae(e,U,L),e==="focusout"&&L&&U.type==="number"&&L.memoizedProps.value!=null&&Us(U,"number",U.value)}switch(ae=L?nl(L):window,e){case"focusin":(jm(ae)||ae.contentEditable==="true")&&(la=ae,Ws=L,dl=null);break;case"focusout":dl=Ws=la=null;break;case"mousedown":Is=!0;break;case"contextmenu":case"mouseup":case"dragend":Is=!1,Bm(P,r,H);break;case"selectionchange":if(y_)break;case"keydown":case"keyup":Bm(P,r,H)}var he;if(Qs)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else aa?wm(e,r)&&(xe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(xe="onCompositionStart");xe&&(Sm&&r.locale!=="ko"&&(aa||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&aa&&(he=ym()):(Yn=H,qs="value"in Yn?Yn.value:Yn.textContent,aa=!0)),ae=jo(L,xe),0<ae.length&&(xe=new xm(xe,e,null,r,H),P.push({event:xe,listeners:ae}),he?xe.data=he:(he=Am(r),he!==null&&(xe.data=he)))),(he=o_?s_(e,r):u_(e,r))&&(xe=jo(L,"onBeforeInput"),0<xe.length&&(ae=new xm("onBeforeInput","beforeinput",null,r,H),P.push({event:ae,listeners:xe}),ae.data=he)),e1(P,e,L,r,H)}cv(P,t)})}function Ll(e,t,r){return{instance:e,listener:t,currentTarget:r}}function jo(e,t){for(var r=t+"Capture",l=[];e!==null;){var s=e,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=rl(e,r),s!=null&&l.unshift(Ll(e,s,c)),s=rl(e,t),s!=null&&l.push(Ll(e,s,c))),e.tag===3)return l;e=e.return}return[]}function a1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function fv(e,t,r,l,s){for(var c=t._reactName,v=[];r!==null&&r!==l;){var x=r,T=x.alternate,L=x.stateNode;if(x=x.tag,T!==null&&T===l)break;x!==5&&x!==26&&x!==27||L===null||(T=L,s?(L=rl(r,c),L!=null&&v.unshift(Ll(r,L,T))):s||(L=rl(r,c),L!=null&&v.push(Ll(r,L,T)))),r=r.return}v.length!==0&&e.push({event:t,listeners:v})}var l1=/\r\n?/g,i1=/\u0000|\uFFFD/g;function mv(e){return(typeof e=="string"?e:""+e).replace(l1,`
`).replace(i1,"")}function hv(e,t){return t=mv(t),mv(e)===t}function Me(e,t,r,l,s,c){switch(r){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ta(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ta(e,""+l);break;case"className":Mi(e,"class",l);break;case"tabIndex":Mi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Mi(e,r,l);break;case"style":hm(e,l,c);break;case"data":if(t!=="object"){Mi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Ri(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(r==="formAction"?(t!=="input"&&Me(e,t,"name",s.name,s,null),Me(e,t,"formEncType",s.formEncType,s,null),Me(e,t,"formMethod",s.formMethod,s,null),Me(e,t,"formTarget",s.formTarget,s,null)):(Me(e,t,"encType",s.encType,s,null),Me(e,t,"method",s.method,s,null),Me(e,t,"target",s.target,s,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Ri(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=xn);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(r=l.__html,r!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Ri(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Ni(e,"popover",l);break;case"xlinkActuate":bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":bn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":bn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":bn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":bn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ni(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=O0.get(r)||r,Ni(e,r,l))}}function Tc(e,t,r,l,s,c){switch(r){case"style":hm(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(r=l.__html,r!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"children":typeof l=="string"?ta(e,l):(typeof l=="number"||typeof l=="bigint")&&ta(e,""+l);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"onClick":l!=null&&(e.onclick=xn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lm.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(s=r.endsWith("Capture"),t=r.slice(2,s?r.length-7:void 0),c=e[gt]||null,c=c!=null?c[r]:null,typeof c=="function"&&e.removeEventListener(t,c,s),typeof l=="function")){typeof c!="function"&&c!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,l,s);break e}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Ni(e,r,l)}}}function ot(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var l=!1,s=!1,c;for(c in r)if(r.hasOwnProperty(c)){var v=r[c];if(v!=null)switch(c){case"src":l=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Me(e,t,c,v,r,null)}}s&&Me(e,t,"srcSet",r.srcSet,r,null),l&&Me(e,t,"src",r.src,r,null);return;case"input":ge("invalid",e);var x=c=v=s=null,T=null,L=null;for(l in r)if(r.hasOwnProperty(l)){var H=r[l];if(H!=null)switch(l){case"name":s=H;break;case"type":v=H;break;case"checked":T=H;break;case"defaultChecked":L=H;break;case"value":c=H;break;case"defaultValue":x=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,t));break;default:Me(e,t,l,H,r,null)}}cm(e,c,x,T,L,v,s,!1);return;case"select":ge("invalid",e),l=v=c=null;for(s in r)if(r.hasOwnProperty(s)&&(x=r[s],x!=null))switch(s){case"value":c=x;break;case"defaultValue":v=x;break;case"multiple":l=x;default:Me(e,t,s,x,r,null)}t=c,r=v,e.multiple=!!l,t!=null?ea(e,!!l,t,!1):r!=null&&ea(e,!!l,r,!0);return;case"textarea":ge("invalid",e),c=s=l=null;for(v in r)if(r.hasOwnProperty(v)&&(x=r[v],x!=null))switch(v){case"value":l=x;break;case"defaultValue":s=x;break;case"children":c=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(o(91));break;default:Me(e,t,v,x,r,null)}fm(e,l,s,c);return;case"option":for(T in r)r.hasOwnProperty(T)&&(l=r[T],l!=null)&&(T==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Me(e,t,T,l,r,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(l=0;l<$l.length;l++)ge($l[l],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in r)if(r.hasOwnProperty(L)&&(l=r[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Me(e,t,L,l,r,null)}return;default:if(Bs(t)){for(H in r)r.hasOwnProperty(H)&&(l=r[H],l!==void 0&&Tc(e,t,H,l,r,void 0));return}}for(x in r)r.hasOwnProperty(x)&&(l=r[x],l!=null&&Me(e,t,x,l,r,null))}function o1(e,t,r,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,v=null,x=null,T=null,L=null,H=null;for(B in r){var P=r[B];if(r.hasOwnProperty(B)&&P!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":T=P;default:l.hasOwnProperty(B)||Me(e,t,B,null,l,P)}}for(var U in l){var B=l[U];if(P=r[U],l.hasOwnProperty(U)&&(B!=null||P!=null))switch(U){case"type":c=B;break;case"name":s=B;break;case"checked":L=B;break;case"defaultChecked":H=B;break;case"value":v=B;break;case"defaultValue":x=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:B!==P&&Me(e,t,U,B,l,P)}}Ls(e,v,x,T,L,H,c,s);return;case"select":B=v=x=U=null;for(c in r)if(T=r[c],r.hasOwnProperty(c)&&T!=null)switch(c){case"value":break;case"multiple":B=T;default:l.hasOwnProperty(c)||Me(e,t,c,null,l,T)}for(s in l)if(c=l[s],T=r[s],l.hasOwnProperty(s)&&(c!=null||T!=null))switch(s){case"value":U=c;break;case"defaultValue":x=c;break;case"multiple":v=c;default:c!==T&&Me(e,t,s,c,l,T)}t=x,r=v,l=B,U!=null?ea(e,!!r,U,!1):!!l!=!!r&&(t!=null?ea(e,!!r,t,!0):ea(e,!!r,r?[]:"",!1));return;case"textarea":B=U=null;for(x in r)if(s=r[x],r.hasOwnProperty(x)&&s!=null&&!l.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Me(e,t,x,null,l,s)}for(v in l)if(s=l[v],c=r[v],l.hasOwnProperty(v)&&(s!=null||c!=null))switch(v){case"value":U=s;break;case"defaultValue":B=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==c&&Me(e,t,v,s,l,c)}dm(e,U,B);return;case"option":for(var ne in r)U=r[ne],r.hasOwnProperty(ne)&&U!=null&&!l.hasOwnProperty(ne)&&(ne==="selected"?e.selected=!1:Me(e,t,ne,null,l,U));for(T in l)U=l[T],B=r[T],l.hasOwnProperty(T)&&U!==B&&(U!=null||B!=null)&&(T==="selected"?e.selected=U&&typeof U!="function"&&typeof U!="symbol":Me(e,t,T,U,l,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in r)U=r[se],r.hasOwnProperty(se)&&U!=null&&!l.hasOwnProperty(se)&&Me(e,t,se,null,l,U);for(L in l)if(U=l[L],B=r[L],l.hasOwnProperty(L)&&U!==B&&(U!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:Me(e,t,L,U,l,B)}return;default:if(Bs(t)){for(var ze in r)U=r[ze],r.hasOwnProperty(ze)&&U!==void 0&&!l.hasOwnProperty(ze)&&Tc(e,t,ze,void 0,l,U);for(H in l)U=l[H],B=r[H],!l.hasOwnProperty(H)||U===B||U===void 0&&B===void 0||Tc(e,t,H,U,l,B);return}}for(var O in r)U=r[O],r.hasOwnProperty(O)&&U!=null&&!l.hasOwnProperty(O)&&Me(e,t,O,null,l,U);for(P in l)U=l[P],B=r[P],!l.hasOwnProperty(P)||U===B||U==null&&B==null||Me(e,t,P,U,l,B)}function pv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function s1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var s=r[l],c=s.transferSize,v=s.initiatorType,x=s.duration;if(c&&x&&pv(v)){for(v=0,x=s.responseEnd,l+=1;l<r.length;l++){var T=r[l],L=T.startTime;if(L>x)break;var H=T.transferSize,P=T.initiatorType;H&&pv(P)&&(T=T.responseEnd,v+=H*(T<x?1:(x-L)/(T-L)))}if(--l,t+=8*(c+v)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wc=null,Ac=null;function Co(e){return e.nodeType===9?e:e.ownerDocument}function vv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cc=null;function u1(){var e=window.event;return e&&e.type==="popstate"?e===Cc?!1:(Cc=e,!0):(Cc=null,!1)}var gv=typeof setTimeout=="function"?setTimeout:void 0,c1=typeof clearTimeout=="function"?clearTimeout:void 0,bv=typeof Promise=="function"?Promise:void 0,d1=typeof queueMicrotask=="function"?queueMicrotask:typeof bv<"u"?function(e){return bv.resolve(null).then(e).catch(f1)}:gv;function f1(e){setTimeout(function(){throw e})}function lr(e){return e==="head"}function xv(e,t){var r=t,l=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(s),Ra(t);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Ul(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Ul(r);for(var c=r.firstChild;c;){var v=c.nextSibling,x=c.nodeName;c[tl]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&c.rel.toLowerCase()==="stylesheet"||r.removeChild(c),c=v}}else r==="body"&&Ul(e.ownerDocument.body);r=s}while(r);Ra(t)}function _v(e,t){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?t?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(t?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function Nc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Nc(r),Os(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function m1(e,t,r,l){for(;e.nodeType===1;){var s=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[tl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function h1(e,t,r){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Xt(e.nextSibling),e===null))return null;return e}function Sv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Xt(e.nextSibling),e===null))return null;return e}function Mc(e){return e.data==="$?"||e.data==="$~"}function zc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function p1(e,t){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||r.readyState!=="loading")t();else{var l=function(){t(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Rc=null;function Ev(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(t===0)return Xt(e.nextSibling);t--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||t++}e=e.nextSibling}return null}function Tv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(t===0)return e;t--}else r!=="/$"&&r!=="/&"||t++}e=e.previousSibling}return null}function wv(e,t,r){switch(t=Co(r),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ul(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Os(e)}var Pt=new Map,Av=new Set;function No(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ln=G.d;G.d={f:v1,r:y1,D:g1,C:b1,L:x1,m:_1,X:E1,S:S1,M:T1};function v1(){var e=Ln.f(),t=xo();return e||t}function y1(e){var t=Jr(e);t!==null&&t.tag===5&&t.type==="form"?qh(t):Ln.r(e)}var Na=typeof document>"u"?null:document;function jv(e,t,r){var l=Na;if(l&&typeof t=="string"&&t){var s=Bt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof r=="string"&&(s+='[crossorigin="'+r+'"]'),Av.has(s)||(Av.add(s),e={rel:e,crossOrigin:r,href:t},l.querySelector(s)===null&&(t=l.createElement("link"),ot(t,"link",e),tt(t),l.head.appendChild(t)))}}function g1(e){Ln.D(e),jv("dns-prefetch",e,null)}function b1(e,t){Ln.C(e,t),jv("preconnect",e,t)}function x1(e,t,r){Ln.L(e,t,r);var l=Na;if(l&&e&&t){var s='link[rel="preload"][as="'+Bt(t)+'"]';t==="image"&&r&&r.imageSrcSet?(s+='[imagesrcset="'+Bt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(s+='[imagesizes="'+Bt(r.imageSizes)+'"]')):s+='[href="'+Bt(e)+'"]';var c=s;switch(t){case"style":c=Ma(e);break;case"script":c=za(e)}Pt.has(c)||(e=b({rel:"preload",href:t==="image"&&r&&r.imageSrcSet?void 0:e,as:t},r),Pt.set(c,e),l.querySelector(s)!==null||t==="style"&&l.querySelector(Bl(c))||t==="script"&&l.querySelector(Vl(c))||(t=l.createElement("link"),ot(t,"link",e),tt(t),l.head.appendChild(t)))}}function _1(e,t){Ln.m(e,t);var r=Na;if(r&&e){var l=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Bt(l)+'"][href="'+Bt(e)+'"]',c=s;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=za(e)}if(!Pt.has(c)&&(e=b({rel:"modulepreload",href:e},t),Pt.set(c,e),r.querySelector(s)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Vl(c)))return}l=r.createElement("link"),ot(l,"link",e),tt(l),r.head.appendChild(l)}}}function S1(e,t,r){Ln.S(e,t,r);var l=Na;if(l&&e){var s=Wr(l).hoistableStyles,c=Ma(e);t=t||"default";var v=s.get(c);if(!v){var x={loading:0,preload:null};if(v=l.querySelector(Bl(c)))x.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},r),(r=Pt.get(c))&&Dc(e,r);var T=v=l.createElement("link");tt(T),ot(T,"link",e),T._p=new Promise(function(L,H){T.onload=L,T.onerror=H}),T.addEventListener("load",function(){x.loading|=1}),T.addEventListener("error",function(){x.loading|=2}),x.loading|=4,Mo(v,t,l)}v={type:"stylesheet",instance:v,count:1,state:x},s.set(c,v)}}}function E1(e,t){Ln.X(e,t);var r=Na;if(r&&e){var l=Wr(r).hoistableScripts,s=za(e),c=l.get(s);c||(c=r.querySelector(Vl(s)),c||(e=b({src:e,async:!0},t),(t=Pt.get(s))&&Oc(e,t),c=r.createElement("script"),tt(c),ot(c,"link",e),r.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(s,c))}}function T1(e,t){Ln.M(e,t);var r=Na;if(r&&e){var l=Wr(r).hoistableScripts,s=za(e),c=l.get(s);c||(c=r.querySelector(Vl(s)),c||(e=b({src:e,async:!0,type:"module"},t),(t=Pt.get(s))&&Oc(e,t),c=r.createElement("script"),tt(c),ot(c,"link",e),r.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(s,c))}}function Cv(e,t,r,l){var s=(s=ve.current)?No(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(t=Ma(r.href),r=Wr(s).hoistableStyles,l=r.get(t),l||(l={type:"style",instance:null,count:0,state:null},r.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Ma(r.href);var c=Wr(s).hoistableStyles,v=c.get(e);if(v||(s=s.ownerDocument||s,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,v),(c=s.querySelector(Bl(e)))&&!c._p&&(v.instance=c,v.state.loading=5),Pt.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Pt.set(e,r),c||w1(s,e,r,v.state))),t&&l===null)throw Error(o(528,""));return v}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=r.async,r=r.src,typeof r=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=za(r),r=Wr(s).hoistableScripts,l=r.get(t),l||(l={type:"script",instance:null,count:0,state:null},r.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ma(e){return'href="'+Bt(e)+'"'}function Bl(e){return'link[rel="stylesheet"]['+e+"]"}function Nv(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function w1(e,t,r,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ot(t,"link",r),tt(t),e.head.appendChild(t))}function za(e){return'[src="'+Bt(e)+'"]'}function Vl(e){return"script[async]"+e}function Mv(e,t,r){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Bt(r.href)+'"]');if(l)return t.instance=l,tt(l),l;var s=b({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),tt(l),ot(l,"style",s),Mo(l,r.precedence,e),t.instance=l;case"stylesheet":s=Ma(r.href);var c=e.querySelector(Bl(s));if(c)return t.state.loading|=4,t.instance=c,tt(c),c;l=Nv(r),(s=Pt.get(s))&&Dc(l,s),c=(e.ownerDocument||e).createElement("link"),tt(c);var v=c;return v._p=new Promise(function(x,T){v.onload=x,v.onerror=T}),ot(c,"link",l),t.state.loading|=4,Mo(c,r.precedence,e),t.instance=c;case"script":return c=za(r.src),(s=e.querySelector(Vl(c)))?(t.instance=s,tt(s),s):(l=r,(s=Pt.get(c))&&(l=b({},r),Oc(l,s)),e=e.ownerDocument||e,s=e.createElement("script"),tt(s),ot(s,"link",l),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Mo(l,r.precedence,e));return t.instance}function Mo(e,t,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=l.length?l[l.length-1]:null,c=s,v=0;v<l.length;v++){var x=l[v];if(x.dataset.precedence===t)c=x;else if(c!==s)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=r.nodeType===9?r.head:r,t.insertBefore(e,t.firstChild))}function Dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var zo=null;function zv(e,t,r){if(zo===null){var l=new Map,s=zo=new Map;s.set(r,l)}else s=zo,l=s.get(r),l||(l=new Map,s.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),s=0;s<r.length;s++){var c=r[s];if(!(c[tl]||c[rt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var v=c.getAttribute(t)||"";v=e+v;var x=l.get(v);x?x.push(c):l.set(v,[c])}}return l}function Rv(e,t,r){e=e.ownerDocument||e,e.head.insertBefore(r,t==="title"?e.querySelector("head > title"):null)}function A1(e,t,r){if(r===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Dv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function j1(e,t,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var s=Ma(l.href),c=t.querySelector(Bl(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ro.bind(e),t.then(e,e)),r.state.loading|=4,r.instance=c,tt(c);return}c=t.ownerDocument||t,l=Nv(l),(s=Pt.get(s))&&Dc(l,s),c=c.createElement("link"),tt(c);var v=c;v._p=new Promise(function(x,T){v.onload=x,v.onerror=T}),ot(c,"link",l),r.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Ro.bind(e),t.addEventListener("load",r),t.addEventListener("error",r))}}var $c=0;function C1(e,t){return e.stylesheets&&e.count===0&&Oo(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&Oo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&$c===0&&($c=62500*s1());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Oo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>$c?50:800)+t);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(s)}}:null}function Ro(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Do=null;function Oo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Do=new Map,t.forEach(N1,e),Do=null,Ro.call(e))}function N1(e,t){if(!(t.state.loading&4)){var r=Do.get(e);if(r)var l=r.get(null);else{r=new Map,Do.set(e,r);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var v=s[c];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(r.set(v.dataset.precedence,v),l=v)}l&&r.set(null,l)}s=t.instance,v=s.getAttribute("data-precedence"),c=r.get(v)||l,c===l&&r.set(null,s),r.set(v,s),this.count++,l=Ro.bind(this),s.addEventListener("load",l),s.addEventListener("error",l),c?c.parentNode.insertBefore(s,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Hl={$$typeof:q,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function M1(e,t,r,l,s,c,v,x,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ms(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ms(0),this.hiddenUpdates=Ms(null),this.identifierPrefix=l,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Ov(e,t,r,l,s,c,v,x,T,L,H,P){return e=new M1(e,t,r,v,T,L,H,P,x),t=1,c===!0&&(t|=24),c=Mt(3,null,null,t),e.current=c,c.stateNode=e,t=hu(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:r,cache:t},gu(c),e}function $v(e){return e?(e=sa,e):sa}function Lv(e,t,r,l,s,c){s=$v(s),l.context===null?l.context=s:l.pendingContext=s,l=Qn(t),l.payload={element:r},c=c===void 0?null:c,c!==null&&(l.callback=c),r=Zn(e,l,t),r!==null&&(Tt(r,e,t),gl(r,e,t))}function Uv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Lc(e,t){Uv(e,t),(e=e.alternate)&&Uv(e,t)}function Bv(e){if(e.tag===13||e.tag===31){var t=Tr(e,67108864);t!==null&&Tt(t,e,67108864),Lc(e,67108864)}}function Vv(e){if(e.tag===13||e.tag===31){var t=$t();t=zs(t);var r=Tr(e,t);r!==null&&Tt(r,e,t),Lc(e,t)}}var $o=!0;function z1(e,t,r,l){var s=R.T;R.T=null;var c=G.p;try{G.p=2,Uc(e,t,r,l)}finally{G.p=c,R.T=s}}function R1(e,t,r,l){var s=R.T;R.T=null;var c=G.p;try{G.p=8,Uc(e,t,r,l)}finally{G.p=c,R.T=s}}function Uc(e,t,r,l){if($o){var s=Bc(l);if(s===null)Ec(e,t,l,Lo,r),kv(e,l);else if(O1(s,e,t,r,l))l.stopPropagation();else if(kv(e,l),t&4&&-1<D1.indexOf(e)){for(;s!==null;){var c=Jr(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var v=br(c.pendingLanes);if(v!==0){var x=c;for(x.pendingLanes|=2,x.entangledLanes|=2;v;){var T=1<<31-Ct(v);x.entanglements[1]|=T,v&=~T}mn(c),(we&6)===0&&(go=At()+500,Ol(0))}}break;case 31:case 13:x=Tr(c,2),x!==null&&Tt(x,c,2),xo(),Lc(c,2)}if(c=Bc(l),c===null&&Ec(e,t,l,Lo,r),c===s)break;s=c}s!==null&&l.stopPropagation()}else Ec(e,t,l,null,r)}}function Bc(e){return e=Hs(e),Vc(e)}var Lo=null;function Vc(e){if(Lo=null,e=Fr(e),e!==null){var t=d(e);if(t===null)e=null;else{var r=t.tag;if(r===13){if(e=f(t),e!==null)return e;e=null}else if(r===31){if(e=m(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Lo=e,null}function Hv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(g0()){case Qf:return 2;case Zf:return 8;case Ti:case b0:return 32;case Ff:return 268435456;default:return 32}default:return 32}}var Hc=!1,ir=null,or=null,sr=null,kl=new Map,Yl=new Map,ur=[],D1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kv(e,t){switch(e){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":kl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yl.delete(t.pointerId)}}function ql(e,t,r,l,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:l,nativeEvent:c,targetContainers:[s]},t!==null&&(t=Jr(t),t!==null&&Bv(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function O1(e,t,r,l,s){switch(t){case"focusin":return ir=ql(ir,e,t,r,l,s),!0;case"dragenter":return or=ql(or,e,t,r,l,s),!0;case"mouseover":return sr=ql(sr,e,t,r,l,s),!0;case"pointerover":var c=s.pointerId;return kl.set(c,ql(kl.get(c)||null,e,t,r,l,s)),!0;case"gotpointercapture":return c=s.pointerId,Yl.set(c,ql(Yl.get(c)||null,e,t,r,l,s)),!0}return!1}function Yv(e){var t=Fr(e.target);if(t!==null){var r=d(t);if(r!==null){if(t=r.tag,t===13){if(t=f(r),t!==null){e.blockedOn=t,nm(e.priority,function(){Vv(r)});return}}else if(t===31){if(t=m(r),t!==null){e.blockedOn=t,nm(e.priority,function(){Vv(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Bc(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Vs=l,r.target.dispatchEvent(l),Vs=null}else return t=Jr(r),t!==null&&Bv(t),e.blockedOn=r,!1;t.shift()}return!0}function qv(e,t,r){Uo(e)&&r.delete(t)}function $1(){Hc=!1,ir!==null&&Uo(ir)&&(ir=null),or!==null&&Uo(or)&&(or=null),sr!==null&&Uo(sr)&&(sr=null),kl.forEach(qv),Yl.forEach(qv)}function Bo(e,t){e.blockedOn===t&&(e.blockedOn=null,Hc||(Hc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,$1)))}var Vo=null;function Gv(e){Vo!==e&&(Vo=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Vo===e&&(Vo=null);for(var t=0;t<e.length;t+=3){var r=e[t],l=e[t+1],s=e[t+2];if(typeof l!="function"){if(Vc(l||r)===null)continue;break}var c=Jr(r);c!==null&&(e.splice(t,3),t-=3,Bu(c,{pending:!0,data:s,method:r.method,action:l},l,s))}}))}function Ra(e){function t(T){return Bo(T,e)}ir!==null&&Bo(ir,e),or!==null&&Bo(or,e),sr!==null&&Bo(sr,e),kl.forEach(t),Yl.forEach(t);for(var r=0;r<ur.length;r++){var l=ur[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ur.length&&(r=ur[0],r.blockedOn===null);)Yv(r),r.blockedOn===null&&ur.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var s=r[l],c=r[l+1],v=s[gt]||null;if(typeof c=="function")v||Gv(r);else if(v){var x=null;if(c&&c.hasAttribute("formAction")){if(s=c,v=c[gt]||null)x=v.formAction;else if(Vc(s)!==null)continue}else x=v.action;typeof x=="function"?r[l+1]=x:(r.splice(l,3),l-=3),Gv(r)}}}function Xv(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(v){return s=v})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function kc(e){this._internalRoot=e}Ho.prototype.render=kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var r=t.current,l=$t();Lv(r,l,e,t,null,null)},Ho.prototype.unmount=kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lv(e.current,2,null,e,null,null),xo(),t[Zr]=null}};function Ho(e){this._internalRoot=e}Ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=tm();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ur.length&&t!==0&&t<ur[r].priority;r++);ur.splice(r,0,e),r===0&&Yv(e)}};var Pv=a.version;if(Pv!=="19.2.8")throw Error(o(527,Pv,"19.2.8"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var L1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{Wa=ko.inject(L1),jt=ko}catch{}}return Ql.createRoot=function(e,t){if(!u(e))throw Error(o(299));var r=!1,l="",s=Ih,c=ep,v=tp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError)),t=Ov(e,1,!1,null,null,r,l,null,s,c,v,Xv),e[Zr]=t.current,Sc(e),new kc(t)},Ql.hydrateRoot=function(e,t,r){if(!u(e))throw Error(o(299));var l=!1,s="",c=Ih,v=ep,x=tp,T=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onUncaughtError!==void 0&&(c=r.onUncaughtError),r.onCaughtError!==void 0&&(v=r.onCaughtError),r.onRecoverableError!==void 0&&(x=r.onRecoverableError),r.formState!==void 0&&(T=r.formState)),t=Ov(e,1,!0,t,r??null,l,s,T,c,v,x,Xv),t.context=$v(null),r=t.current,l=$t(),l=zs(l),s=Qn(l),s.callback=null,Zn(r,s,l),r=l,t.current.lanes=r,el(t,r),mn(t),e[Zr]=t.current,Sc(e),new Ho(t)},Ql.version="19.2.8",Ql}var Gg;function a3(){if(Gg)return yd.exports;Gg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),yd.exports=r3(),yd.exports}var l3=a3();l3.createRoot(document.getElementById("root")).render(g.jsx(S.StrictMode,{children:g.jsx(H4,{children:g.jsx(e3,{})})}));
