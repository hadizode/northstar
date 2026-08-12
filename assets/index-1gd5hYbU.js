(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(u){if(u.ep)return;u.ep=!0;const d=i(u);fetch(u.href,d)}})();function $1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var kc={exports:{}},ql={};var Xv;function L1(){if(Xv)return ql;Xv=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(o,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var m in u)m!=="key"&&(d[m]=u[m])}else d=u;return u=d.ref,{$$typeof:n,type:o,key:f,ref:u!==void 0?u:null,props:d}}return ql.Fragment=a,ql.jsx=i,ql.jsxs=i,ql}var Pv;function U1(){return Pv||(Pv=1,kc.exports=L1()),kc.exports}var y=U1(),Yc={exports:{}},fe={};var Kv;function B1(){if(Kv)return fe;Kv=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),_=Symbol.iterator;function j(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function D(N,G,I){this.props=N,this.context=G,this.refs=A,this.updater=I||C}D.prototype.isReactComponent={},D.prototype.setState=function(N,G){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,G,"setState")},D.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function k(){}k.prototype=D.prototype;function q(N,G,I){this.props=N,this.context=G,this.refs=A,this.updater=I||C}var Z=q.prototype=new k;Z.constructor=q,w(Z,D.prototype),Z.isPureReactComponent=!0;var V=Array.isArray;function J(){}var Q={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function K(N,G,I){var te=I.ref;return{$$typeof:n,type:N,key:G,ref:te!==void 0?te:null,props:I}}function le(N,G){return K(N.type,G,N.props)}function F(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function oe(N){var G={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(I){return G[I]})}var R=/\/+/g;function W(N,G){return typeof N=="object"&&N!==null&&N.key!=null?oe(""+N.key):G.toString(36)}function re(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(J,J):(N.status="pending",N.then(function(G){N.status==="pending"&&(N.status="fulfilled",N.value=G)},function(G){N.status==="pending"&&(N.status="rejected",N.reason=G)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,G,I,te,ce){var ve=typeof N;(ve==="undefined"||ve==="boolean")&&(N=null);var Ae=!1;if(N===null)Ae=!0;else switch(ve){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(N.$$typeof){case n:case a:Ae=!0;break;case g:return Ae=N._init,z(Ae(N._payload),G,I,te,ce)}}if(Ae)return ce=ce(N),Ae=te===""?"."+W(N,0):te,V(ce)?(I="",Ae!=null&&(I=Ae.replace(R,"$&/")+"/"),z(ce,G,I,"",function(Fa){return Fa})):ce!=null&&(F(ce)&&(ce=le(ce,I+(ce.key==null||N&&N.key===ce.key?"":(""+ce.key).replace(R,"$&/")+"/")+Ae)),G.push(ce)),1;Ae=0;var ft=te===""?".":te+":";if(V(N))for(var Xe=0;Xe<N.length;Xe++)te=N[Xe],ve=ft+W(te,Xe),Ae+=z(te,G,I,ve,ce);else if(Xe=j(N),typeof Xe=="function")for(N=Xe.call(N),Xe=0;!(te=N.next()).done;)te=te.value,ve=ft+W(te,Xe++),Ae+=z(te,G,I,ve,ce);else if(ve==="object"){if(typeof N.then=="function")return z(re(N),G,I,te,ce);throw G=String(N),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function X(N,G,I){if(N==null)return N;var te=[],ce=0;return z(N,te,"","",function(ve){return G.call(I,ve,ce++)}),te}function ee(N){if(N._status===-1){var G=N._result;G=G(),G.then(function(I){(N._status===0||N._status===-1)&&(N._status=1,N._result=I)},function(I){(N._status===0||N._status===-1)&&(N._status=2,N._result=I)}),N._status===-1&&(N._status=0,N._result=G)}if(N._status===1)return N._result.default;throw N._result}var pe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},de={map:X,forEach:function(N,G,I){X(N,function(){G.apply(this,arguments)},I)},count:function(N){var G=0;return X(N,function(){G++}),G},toArray:function(N){return X(N,function(G){return G})||[]},only:function(N){if(!F(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return fe.Activity=b,fe.Children=de,fe.Component=D,fe.Fragment=i,fe.Profiler=u,fe.PureComponent=q,fe.StrictMode=o,fe.Suspense=h,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,fe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return Q.H.useMemoCache(N)}},fe.cache=function(N){return function(){return N.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(N,G,I){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var te=w({},N.props),ce=N.key;if(G!=null)for(ve in G.key!==void 0&&(ce=""+G.key),G)!E.call(G,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&G.ref===void 0||(te[ve]=G[ve]);var ve=arguments.length-2;if(ve===1)te.children=I;else if(1<ve){for(var Ae=Array(ve),ft=0;ft<ve;ft++)Ae[ft]=arguments[ft+2];te.children=Ae}return K(N.type,ce,te)},fe.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:d,_context:N},N},fe.createElement=function(N,G,I){var te,ce={},ve=null;if(G!=null)for(te in G.key!==void 0&&(ve=""+G.key),G)E.call(G,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ce[te]=G[te]);var Ae=arguments.length-2;if(Ae===1)ce.children=I;else if(1<Ae){for(var ft=Array(Ae),Xe=0;Xe<Ae;Xe++)ft[Xe]=arguments[Xe+2];ce.children=ft}if(N&&N.defaultProps)for(te in Ae=N.defaultProps,Ae)ce[te]===void 0&&(ce[te]=Ae[te]);return K(N,ve,ce)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(N){return{$$typeof:m,render:N}},fe.isValidElement=F,fe.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:ee}},fe.memo=function(N,G){return{$$typeof:p,type:N,compare:G===void 0?null:G}},fe.startTransition=function(N){var G=Q.T,I={};Q.T=I;try{var te=N(),ce=Q.S;ce!==null&&ce(I,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(J,pe)}catch(ve){pe(ve)}finally{G!==null&&I.types!==null&&(G.types=I.types),Q.T=G}},fe.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},fe.use=function(N){return Q.H.use(N)},fe.useActionState=function(N,G,I){return Q.H.useActionState(N,G,I)},fe.useCallback=function(N,G){return Q.H.useCallback(N,G)},fe.useContext=function(N){return Q.H.useContext(N)},fe.useDebugValue=function(){},fe.useDeferredValue=function(N,G){return Q.H.useDeferredValue(N,G)},fe.useEffect=function(N,G){return Q.H.useEffect(N,G)},fe.useEffectEvent=function(N){return Q.H.useEffectEvent(N)},fe.useId=function(){return Q.H.useId()},fe.useImperativeHandle=function(N,G,I){return Q.H.useImperativeHandle(N,G,I)},fe.useInsertionEffect=function(N,G){return Q.H.useInsertionEffect(N,G)},fe.useLayoutEffect=function(N,G){return Q.H.useLayoutEffect(N,G)},fe.useMemo=function(N,G){return Q.H.useMemo(N,G)},fe.useOptimistic=function(N,G){return Q.H.useOptimistic(N,G)},fe.useReducer=function(N,G,I){return Q.H.useReducer(N,G,I)},fe.useRef=function(N){return Q.H.useRef(N)},fe.useState=function(N){return Q.H.useState(N)},fe.useSyncExternalStore=function(N,G,I){return Q.H.useSyncExternalStore(N,G,I)},fe.useTransition=function(){return Q.H.useTransition()},fe.version="19.2.8",fe}var Qv;function Fd(){return Qv||(Qv=1,Yc.exports=B1()),Yc.exports}var S=Fd();const Ve=$1(S);var Jd=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,qy=/^[\\/]{2}/;function V1(n,a){return a+n.replace(/\\/g,"/")}var Zv="popstate";function Fv(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function H1(n={}){function a(u,d){let{pathname:f="/",search:m="",hash:h=""}=qr(u.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),bd("",{pathname:f,search:m,hash:h},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function i(u,d){let f=u.document.querySelector("base"),m="";if(f&&f.getAttribute("href")){let h=u.location.href,p=h.indexOf("#");m=p===-1?h:h.slice(0,p)}return m+"#"+(typeof d=="string"?d:ni(d))}function o(u,d){on(u.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return Y1(a,i,o,n)}function He(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function on(n,a){if(!n){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function k1(){return Math.random().toString(36).substring(2,10)}function Jv(n,a){return{usr:n.state,key:n.key,idx:a,masked:n.mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function bd(n,a,i=null,o,u){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof a=="string"?qr(a):a,state:i,key:a&&a.key||o||k1(),mask:u}}function ni({pathname:n="/",search:a="",hash:i=""}){return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function qr(n){let a={};if(n){let i=n.indexOf("#");i>=0&&(a.hash=n.substring(i),n=n.substring(0,i));let o=n.indexOf("?");o>=0&&(a.search=n.substring(o),n=n.substring(0,o)),n&&(a.pathname=n)}return a}function Y1(n,a,i,o={}){let{window:u=document.defaultView,v5Compat:d=!1}=o,f=u.history,m="POP",h=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function b(){m="POP";let A=g(),D=A==null?null:A-p;p=A,h&&h({action:m,location:w.location,delta:D})}function _(A,D){m="PUSH";let k=Fv(A)?A:bd(w.location,A,D);i&&i(k,A),p=g()+1;let q=Jv(k,p),Z=w.createHref(k.mask||k);try{f.pushState(q,"",Z)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;u.location.assign(Z)}d&&h&&h({action:m,location:w.location,delta:1})}function j(A,D){m="REPLACE";let k=Fv(A)?A:bd(w.location,A,D);i&&i(k,A),p=g();let q=Jv(k,p),Z=w.createHref(k.mask||k);f.replaceState(q,"",Z),d&&h&&h({action:m,location:w.location,delta:0})}function C(A){return q1(u,A)}let w={get action(){return m},get location(){return n(u,f)},listen(A){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(Zv,b),h=A,()=>{u.removeEventListener(Zv,b),h=null}},createHref(A){return a(u,A)},createURL:C,encodeLocation(A){let D=C(A);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:_,replace:j,go(A){return f.go(A)}};return w}function q1(n,a,i=!1){let o="http://localhost";n&&(o=n.location.origin!=="null"?n.location.origin:n.location.href),He(o,"No window.location.(origin|href) available to create URL");let u=typeof a=="string"?a:ni(a);return u=u.replace(/ $/,"%20"),!i&&qy.test(u)&&(u=o+u),new URL(u,o)}function Gy(n,a,i="/"){return G1(n,a,i,!1)}function G1(n,a,i,o,u){let d=typeof a=="string"?qr(a):a,f=Ln(d.pathname||"/",i);if(f==null)return null;let m=X1(n),h=null,p=nS(f);for(let g=0;h==null&&g<m.length;++g)h=tS(m[g],p,o);return h}function X1(n){let a=Xy(n);return P1(a),a}function Xy(n,a=[],i=[],o="",u=!1){let d=(f,m,h=u,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(o)&&h)return;He(g.relativePath.startsWith(o),`Absolute route path "${g.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(o.length)}let b=an([o,g.relativePath]),_=i.concat(g);f.children&&f.children.length>0&&(He(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),Xy(f.children,a,_,b,h)),!(f.path==null&&!f.index)&&a.push({path:b,score:I1(b,f.index),routesMeta:_.map((j,C)=>{let[w,A]=Qy(j.relativePath,j.caseSensitive,C===_.length-1);return{...j,matcher:w,compiledParams:A}})})};return n.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))d(f,m);else for(let h of Py(f.path))d(f,m,!0,h)}),a}function Py(n){let a=n.split("/");if(a.length===0)return[];let[i,...o]=a,u=i.endsWith("?"),d=i.replace(/\?$/,"");if(o.length===0)return u?[d,""]:[d];let f=Py(o.join("/")),m=[];return m.push(...f.map(h=>h===""?d:[d,h].join("/"))),u&&m.push(...f),m.map(h=>n.startsWith("/")&&h===""?"/":h)}function P1(n){n.sort((a,i)=>a.score!==i.score?i.score-a.score:eS(a.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var K1=/^:[\w-]+$/,Q1=3,Z1=2,F1=1,J1=10,W1=-2,Wv=n=>n==="*";function I1(n,a){let i=n.split("/"),o=i.length;return i.some(Wv)&&(o+=W1),a&&(o+=Z1),i.filter(u=>!Wv(u)).reduce((u,d)=>u+(K1.test(d)?Q1:d===""?F1:J1),o)}function eS(n,a){return n.length===a.length&&n.slice(0,-1).every((o,u)=>o===a[u])?n[n.length-1]-a[a.length-1]:0}function tS(n,a,i=!1){let{routesMeta:o}=n,u={},d="/",f=[];for(let m=0;m<o.length;++m){let h=o[m],p=m===o.length-1,g=d==="/"?a:a.slice(d.length)||"/",b={path:h.relativePath,caseSensitive:h.caseSensitive,end:p},_=h.matcher&&h.compiledParams?Ky(b,g,h.matcher,h.compiledParams):es(b,g),j=h.route;if(!_&&p&&i&&!o[o.length-1].route.index&&(_=es({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!_)return null;Object.assign(u,_.params),f.push({params:u,pathname:an([d,_.pathname]),pathnameBase:lS(an([d,_.pathnameBase])),route:j}),_.pathnameBase!=="/"&&(d=an([d,_.pathnameBase]))}return f}function es(n,a){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,o]=Qy(n.path,n.caseSensitive,n.end);return Ky(n,a,i,o)}function Ky(n,a,i,o){let u=a.match(i);if(!u)return null;let d=u[0],f=d.replace(/(.)\/+$/,"$1"),m=u.slice(1);return{params:o.reduce((p,{paramName:g,isOptional:b},_)=>{if(g==="*"){let C=m[_]||"";f=d.slice(0,d.length-C.length).replace(/(.)\/+$/,"$1")}const j=m[_];return b&&!j?p[g]=void 0:p[g]=(j||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:f,pattern:n}}function Qy(n,a=!1,i=!0){on(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,h,p,g)=>{if(o.push({paramName:m,isOptional:h!=null}),h){let b=g.charAt(p+f.length);return b&&b!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,a?void 0:"i"),o]}function nS(n){try{return n.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return on(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}function Ln(n,a){if(a==="/")return n;if(!n.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,o=n.charAt(i);return o&&o!=="/"?null:n.slice(i)||"/"}function rS(n,a="/"){let{pathname:i,search:o="",hash:u=""}=typeof n=="string"?qr(n):n,d;return i?(i=Fy(i),i.startsWith("/")?d=Iv(i.substring(1),"/"):d=Iv(i,a)):d=a,{pathname:d,search:iS(o),hash:oS(u)}}function Iv(n,a){let i=ts(a).split("/");return n.split("/").forEach(u=>{u===".."?i.length>1&&i.pop():u!=="."&&i.push(u)}),i.length>1?i.join("/"):"/"}function qc(n,a,i,o){return`Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function aS(n){return n.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function Zy(n){let a=aS(n);return a.map((i,o)=>o===a.length-1?i.pathname:i.pathnameBase)}function Wd(n,a,i,o=!1){let u;typeof n=="string"?u=qr(n):(u={...n},He(!u.pathname||!u.pathname.includes("?"),qc("?","pathname","search",u)),He(!u.pathname||!u.pathname.includes("#"),qc("#","pathname","hash",u)),He(!u.search||!u.search.includes("#"),qc("#","search","hash",u)));let d=n===""||u.pathname==="",f=d?"/":u.pathname,m;if(f==null)m=i;else{let b=a.length-1;if(!o&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),b-=1;u.pathname=_.join("/")}m=b>=0?a[b]:"/"}let h=rS(u,m),p=f&&f!=="/"&&f.endsWith("/"),g=(d||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var Fy=n=>n.replace(/[\\/]{2,}/g,"/"),an=n=>Fy(n.join("/")),ts=n=>n.replace(/\/+$/,""),lS=n=>ts(n).replace(/^\/*/,"/"),iS=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,oS=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,sS=class{constructor(n,a,i,o=!1){this.status=n,this.statusText=a||"",this.internal=o,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function uS(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function cS(n){let a=n.map(i=>i.route.path).filter(Boolean);return an(a)||"/"}var Jy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Wy(n,a){let i=n;if(typeof i!="string"||!Jd.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let o=i,u=!1;if(Jy)try{let d=new URL(window.location.href),f=qy.test(i)?new URL(V1(i,d.protocol)):new URL(i),m=Ln(f.pathname,a);f.origin===d.origin&&m!=null?i=m+f.search+f.hash:u=!0}catch{on(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:u,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Iy=["POST","PUT","PATCH","DELETE"];new Set(Iy);var dS=["GET",...Iy];new Set(dS);var fS=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function mS(n){try{return fS.includes(new URL(n).protocol)}catch{return!1}}var Pa=S.createContext(null);Pa.displayName="DataRouter";var fs=S.createContext(null);fs.displayName="DataRouterState";var eb=S.createContext(!1);function hS(){return S.useContext(eb)}var tb=S.createContext({isTransitioning:!1});tb.displayName="ViewTransition";var pS=S.createContext(new Map);pS.displayName="Fetchers";var vS=S.createContext(null);vS.displayName="Await";var Wt=S.createContext(null);Wt.displayName="Navigation";var hi=S.createContext(null);hi.displayName="Location";var gn=S.createContext({outlet:null,matches:[],isDataRoute:!1});gn.displayName="Route";var Id=S.createContext(null);Id.displayName="RouteError";var nb="REACT_ROUTER_ERROR",gS="REDIRECT",yS="ROUTE_ERROR_RESPONSE";function bS(n){if(n.startsWith(`${nb}:${gS}:{`))try{let a=JSON.parse(n.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function xS(n){if(n.startsWith(`${nb}:${yS}:{`))try{let a=JSON.parse(n.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new sS(a.status,a.statusText,a.data)}catch{}}function _S(n,{relative:a}={}){He(pi(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=S.useContext(Wt),{hash:u,pathname:d,search:f}=vi(n,{relative:a}),m=d;return i!=="/"&&(m=d==="/"?i:an([i,d])),o.createHref({pathname:m,search:f,hash:u})}function pi(){return S.useContext(hi)!=null}function Bn(){return He(pi(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(hi).location}var rb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ab(n){S.useContext(Wt).static||S.useLayoutEffect(n)}function ef(){let{isDataRoute:n}=S.useContext(gn);return n?$S():SS()}function SS(){He(pi(),"useNavigate() may be used only in the context of a <Router> component.");let n=S.useContext(Pa),{basename:a,navigator:i}=S.useContext(Wt),{matches:o}=S.useContext(gn),{pathname:u}=Bn(),d=JSON.stringify(Zy(o)),f=S.useRef(!1);return ab(()=>{f.current=!0}),S.useCallback((h,p={})=>{if(on(f.current,rb),!f.current)return;if(typeof h=="number"){i.go(h);return}let g=Wd(h,JSON.parse(d),u,p.relative==="path");n==null&&a!=="/"&&(g.pathname=g.pathname==="/"?a:an([a,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[a,i,d,u,n])}S.createContext(null);function ES(){let{matches:n}=S.useContext(gn);return n[n.length-1]?.params??{}}function vi(n,{relative:a}={}){let{matches:i}=S.useContext(gn),{pathname:o}=Bn(),u=JSON.stringify(Zy(i));return S.useMemo(()=>Wd(n,JSON.parse(u),o,a==="path"),[n,u,o,a])}function TS(n,a){return lb(n,a)}function lb(n,a,i){He(pi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=S.useContext(Wt),{matches:u}=S.useContext(gn),d=u[u.length-1],f=d?d.params:{},m=d?d.pathname:"/",h=d?d.pathnameBase:"/",p=d&&d.route;{let A=p&&p.path||"";ob(m,!p||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let g=Bn(),b;if(a){let A=typeof a=="string"?qr(a):a;He(h==="/"||A.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${A.pathname}" was given in the \`location\` prop.`),b=A}else b=g;let _=b.pathname||"/",j=_;if(h!=="/"){let A=h.replace(/^\//,"").split("/");j="/"+_.replace(/^\//,"").split("/").slice(A.length).join("/")}let C=i&&i.state.matches.length?i.state.matches.map(A=>Object.assign(A,{route:i.manifest[A.route.id]||A.route})):Gy(n,{pathname:j});on(p||C!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),on(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=NS(C&&C.map(A=>Object.assign({},A,{params:Object.assign({},f,A.params),pathname:an([h,o.encodeLocation?o.encodeLocation(A.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?h:an([h,o.encodeLocation?o.encodeLocation(A.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),u,i);return a&&w?S.createElement(hi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...b},navigationType:"POP"}},w):w}function wS(){let n=OS(),a=uS(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:d},"ErrorBoundary")," or"," ",S.createElement("code",{style:d},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},a),i?S.createElement("pre",{style:u},i):null,f)}var AS=S.createElement(wS,null),ib=class extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){this.props.onError?this.props.onError(n,a):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const i=xS(n.digest);i&&(n=i)}let a=n!==void 0?S.createElement(gn.Provider,{value:this.props.routeContext},S.createElement(Id.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?S.createElement(jS,{error:n},a):a}};ib.contextType=eb;var Gc=new WeakMap;function jS({children:n,error:a}){let{basename:i}=S.useContext(Wt);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let o=bS(a.digest);if(o){let u=Gc.get(a);if(u)throw u;let d=Wy(o.location,i),f=d.absoluteURL||d.to;if(mS(f))throw new Error("Invalid redirect location");if(Jy&&!Gc.get(a))if(d.isExternal||o.reloadDocument)window.location.href=f;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:o.replace}));throw Gc.set(a,m),m}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f}`})}}return n}function CS({routeContext:n,match:a,children:i}){let o=S.useContext(Pa);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),S.createElement(gn.Provider,{value:n},i)}function NS(n,a=[],i){let o=i?.state;if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(a.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let u=n,d=o?.errors;if(d!=null){let g=u.findIndex(b=>b.route.id&&d?.[b.route.id]!==void 0);He(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let f=!1,m=-1;if(i&&o){f=o.renderFallback;for(let g=0;g<u.length;g++){let b=u[g];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(m=g),b.route.id){let{loaderData:_,errors:j}=o,C=b.route.loader&&!_.hasOwnProperty(b.route.id)&&(!j||j[b.route.id]===void 0);if(b.route.lazy||C){i.isStatic&&(f=!0),m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}}let h=i?.onError,p=o&&h?(g,b)=>{h(g,{location:o.location,params:o.matches?.[0]?.params??{},pattern:cS(o.matches),errorInfo:b})}:void 0;return u.reduceRight((g,b,_)=>{let j,C=!1,w=null,A=null;o&&(j=d&&b.route.id?d[b.route.id]:void 0,w=b.route.errorElement||AS,f&&(m<0&&_===0?(ob("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,A=null):m===_&&(C=!0,A=b.route.hydrateFallbackElement||null)));let D=a.concat(u.slice(0,_+1)),k=()=>{let q;return j?q=w:C?q=A:b.route.Component?q=S.createElement(b.route.Component,null):b.route.element?q=b.route.element:q=g,S.createElement(CS,{match:b,routeContext:{outlet:g,matches:D,isDataRoute:o!=null},children:q})};return o&&(b.route.ErrorBoundary||b.route.errorElement||_===0)?S.createElement(ib,{location:o.location,revalidation:o.revalidation,component:w,error:j,children:k(),routeContext:{outlet:null,matches:D,isDataRoute:!0},onError:p}):k()},null)}function tf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function MS(n){let a=S.useContext(Pa);return He(a,tf(n)),a}function RS(n){let a=S.useContext(fs);return He(a,tf(n)),a}function zS(n){let a=S.useContext(gn);return He(a,tf(n)),a}function nf(n){let a=zS(n),i=a.matches[a.matches.length-1];return He(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function DS(){return nf("useRouteId")}function OS(){let n=S.useContext(Id),a=RS("useRouteError"),i=nf("useRouteError");return n!==void 0?n:a.errors?.[i]}function $S(){let{router:n}=MS("useNavigate"),a=nf("useNavigate"),i=S.useRef(!1);return ab(()=>{i.current=!0}),S.useCallback(async(u,d={})=>{on(i.current,rb),i.current&&(typeof u=="number"?await n.navigate(u):await n.navigate(u,{fromRouteId:a,...d}))},[n,a])}var eg={};function ob(n,a,i){!a&&!eg[n]&&(eg[n]=!0,on(!1,i))}S.memo(LS);function LS({routes:n,manifest:a,future:i,state:o,isStatic:u,onError:d}){return lb(n,void 0,{manifest:a,state:o,isStatic:u,onError:d})}function xd(n){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function US({basename:n="/",children:a=null,location:i,navigationType:o="POP",navigator:u,static:d=!1,useTransitions:f}){He(!pi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=n.replace(/^\/*/,"/"),h=S.useMemo(()=>({basename:m,navigator:u,static:d,useTransitions:f,future:{}}),[m,u,d,f]);typeof i=="string"&&(i=qr(i));let{pathname:p="/",search:g="",hash:b="",state:_=null,key:j="default",mask:C}=i,w=S.useMemo(()=>{let A=Ln(p,m);return A==null?null:{location:{pathname:A,search:g,hash:b,state:_,key:j,mask:C},navigationType:o}},[m,p,g,b,_,j,o,C]);return on(w!=null,`<Router basename="${m}"> is not able to match the URL "${p}${g}${b}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:S.createElement(Wt.Provider,{value:h},S.createElement(hi.Provider,{children:a,value:w}))}function BS({children:n,location:a}){return TS(_d(n),a)}function _d(n,a=[]){let i=[];return S.Children.forEach(n,(o,u)=>{if(!S.isValidElement(o))return;let d=[...a,u];if(o.type===S.Fragment){i.push.apply(i,_d(o.props.children,d));return}He(o.type===xd,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=_d(o.props.children,d)),i.push(f)}),i}var Qo="get",Zo="application/x-www-form-urlencoded";function ms(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function VS(n){return ms(n)&&n.tagName.toLowerCase()==="button"}function HS(n){return ms(n)&&n.tagName.toLowerCase()==="form"}function kS(n){return ms(n)&&n.tagName.toLowerCase()==="input"}function YS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function qS(n,a){return n.button===0&&(!a||a==="_self")&&!YS(n)}var ko=null;function GS(){if(ko===null)try{new FormData(document.createElement("form"),0),ko=!1}catch{ko=!0}return ko}var XS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xc(n){return n!=null&&!XS.has(n)?(on(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zo}"`),null):n}function PS(n,a){let i,o,u,d,f;if(HS(n)){let m=n.getAttribute("action");o=m?Ln(m,a):null,i=n.getAttribute("method")||Qo,u=Xc(n.getAttribute("enctype"))||Zo,d=new FormData(n)}else if(VS(n)||kS(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||m.getAttribute("action");if(o=h?Ln(h,a):null,i=n.getAttribute("formmethod")||m.getAttribute("method")||Qo,u=Xc(n.getAttribute("formenctype"))||Xc(m.getAttribute("enctype"))||Zo,d=new FormData(m,n),!GS()){let{name:p,type:g,value:b}=n;if(g==="image"){let _=p?`${p}.`:"";d.append(`${_}x`,"0"),d.append(`${_}y`,"0")}else p&&d.append(p,b)}}else{if(ms(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Qo,o=null,u=Zo,f=n}return d&&u==="text/plain"&&(f=d,d=void 0),{action:o,method:i.toLowerCase(),encType:u,formData:d,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function rf(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function sb(n,a,i,o){let u=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${o}`:u.pathname=`${u.pathname}.${o}`:u.pathname==="/"?u.pathname=`_root.${o}`:a&&Ln(u.pathname,a)==="/"?u.pathname=`${ts(a)}/_root.${o}`:u.pathname=`${ts(u.pathname)}.${o}`,u}async function KS(n,a){if(n.id in a)return a[n.id];try{let i=await import(n.module);return a[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function QS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function ZS(n,a,i){let o=await Promise.all(n.map(async u=>{let d=a.routes[u.route.id];if(d){let f=await KS(d,i);return f.links?f.links():[]}return[]}));return IS(o.flat(1).filter(QS).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function tg(n,a,i,o,u,d){let f=(h,p)=>i[p]?h.route.id!==i[p].route.id:!0,m=(h,p)=>i[p].pathname!==h.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==h.params["*"];return d==="assets"?a.filter((h,p)=>f(h,p)||m(h,p)):d==="data"?a.filter((h,p)=>{let g=o.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(f(h,p)||m(h,p))return!0;if(h.route.shouldRevalidate){let b=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function FS(n,a,{includeHydrateFallback:i}={}){return JS(n.map(o=>{let u=a.routes[o.route.id];if(!u)return[];let d=[u.module];return u.clientActionModule&&(d=d.concat(u.clientActionModule)),u.clientLoaderModule&&(d=d.concat(u.clientLoaderModule)),i&&u.hydrateFallbackModule&&(d=d.concat(u.hydrateFallbackModule)),u.imports&&(d=d.concat(u.imports)),d}).flat(1))}function JS(n){return[...new Set(n)]}function WS(n){let a={},i=Object.keys(n).sort();for(let o of i)a[o]=n[o];return a}function IS(n,a){let i=new Set;return new Set(a),n.reduce((o,u)=>{let d=JSON.stringify(WS(u));return i.has(d)||(i.add(d),o.push({key:d,link:u})),o},[])}function af(){let n=S.useContext(Pa);return rf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function eE(){let n=S.useContext(fs);return rf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var lf=S.createContext(void 0);lf.displayName="FrameworkContext";function hs(){let n=S.useContext(lf);return rf(n,"You must render this element inside a <HydratedRouter> element"),n}function tE(n,a){let i=S.useContext(lf),[o,u]=S.useState(!1),[d,f]=S.useState(!1),{onFocus:m,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:b}=a,_=S.useRef(null);S.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let w=D=>{D.forEach(k=>{f(k.isIntersecting)})},A=new IntersectionObserver(w,{threshold:.5});return _.current&&A.observe(_.current),()=>{A.disconnect()}}},[n]),S.useEffect(()=>{if(o){let w=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(w)}}},[o]);let j=()=>{u(!0)},C=()=>{u(!1),f(!1)};return i?n!=="intent"?[d,_,{}]:[d,_,{onFocus:Gl(m,j),onBlur:Gl(h,C),onMouseEnter:Gl(p,j),onMouseLeave:Gl(g,C),onTouchStart:Gl(b,j)}]:[!1,_,{}]}function Gl(n,a){return i=>{n&&n(i),i.defaultPrevented||a(i)}}function nE({page:n,...a}){let i=hS(),{nonce:o}=hs(),{router:u}=af(),d=S.useMemo(()=>Gy(u.routes,n,u.basename),[u.routes,n,u.basename]);return d?(a.nonce==null&&o&&(a={...a,nonce:o}),i?S.createElement(aE,{page:n,matches:d,...a}):S.createElement(lE,{page:n,matches:d,...a})):null}function rE(n){let{manifest:a,routeModules:i}=hs(),[o,u]=S.useState([]);return S.useEffect(()=>{let d=!1;return ZS(n,a,i).then(f=>{d||u(f)}),()=>{d=!0}},[n,a,i]),o}function aE({page:n,matches:a,...i}){let o=Bn(),{future:u}=hs(),{basename:d}=af(),f=S.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let m=sb(n,d,u.v8_trailingSlashAwareDataRequests,"rsc"),h=!1,p=[];for(let g of a)typeof g.route.shouldRevalidate=="function"?h=!0:p.push(g.route.id);return h&&p.length>0&&m.searchParams.set("_routes",p.join(",")),[m.pathname+m.search]},[d,u.v8_trailingSlashAwareDataRequests,n,o,a]);return S.createElement(S.Fragment,null,f.map(m=>S.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...i})))}function lE({page:n,matches:a,...i}){let o=Bn(),{future:u,manifest:d,routeModules:f}=hs(),{basename:m}=af(),{loaderData:h,matches:p}=eE(),g=S.useMemo(()=>tg(n,a,p,d,o,"data"),[n,a,p,d,o]),b=S.useMemo(()=>tg(n,a,p,d,o,"assets"),[n,a,p,d,o]),_=S.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let w=new Set,A=!1;if(a.forEach(k=>{let q=d.routes[k.route.id];!q||!q.hasLoader||(!g.some(Z=>Z.route.id===k.route.id)&&k.route.id in h&&f[k.route.id]?.shouldRevalidate||q.hasClientLoader?A=!0:w.add(k.route.id))}),w.size===0)return[];let D=sb(n,m,u.v8_trailingSlashAwareDataRequests,"data");return A&&w.size>0&&D.searchParams.set("_routes",a.filter(k=>w.has(k.route.id)).map(k=>k.route.id).join(",")),[D.pathname+D.search]},[m,u.v8_trailingSlashAwareDataRequests,h,o,d,g,a,n,f]),j=S.useMemo(()=>FS(b,d),[b,d]),C=rE(b);return S.createElement(S.Fragment,null,_.map(w=>S.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),j.map(w=>S.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),C.map(({key:w,link:A})=>S.createElement("link",{key:w,nonce:i.nonce,...A,crossOrigin:A.crossOrigin??i.crossOrigin})))}function iE(...n){return a=>{n.forEach(i=>{typeof i=="function"?i(a):i!=null&&(i.current=a)})}}var oE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{oE&&(window.__reactRouterVersion="7.18.2")}catch{}function sE({basename:n,children:a,useTransitions:i,window:o}){let u=S.useRef();u.current==null&&(u.current=H1({window:o,v5Compat:!0}));let d=u.current,[f,m]=S.useState({action:d.action,location:d.location}),h=S.useCallback(p=>{i===!1?m(p):S.startTransition(()=>m(p))},[i]);return S.useLayoutEffect(()=>d.listen(h),[d,h]),S.createElement(US,{basename:n,children:a,location:f.location,navigationType:f.action,navigator:d,useTransitions:i})}var ub=S.forwardRef(function({onClick:a,discover:i="render",prefetch:o="none",relative:u,reloadDocument:d,replace:f,mask:m,state:h,target:p,to:g,preventScrollReset:b,viewTransition:_,defaultShouldRevalidate:j,...C},w){let{basename:A,navigator:D,useTransitions:k}=S.useContext(Wt),q=typeof g=="string"&&Jd.test(g),Z=Wy(g,A);g=Z.to;let V=_S(g,{relative:u}),J=Bn(),Q=null;if(m){let re=Wd(m,[],J.mask?J.mask.pathname:"/",!0);A!=="/"&&(re.pathname=re.pathname==="/"?A:an([A,re.pathname])),Q=D.createHref(re)}let[E,K,le]=tE(o,C),F=fE(g,{replace:f,mask:m,state:h,target:p,preventScrollReset:b,relative:u,viewTransition:_,defaultShouldRevalidate:j,useTransitions:k});function oe(re){a&&a(re),re.defaultPrevented||F(re)}let R=!(Z.isExternal||d),W=S.createElement("a",{...C,...le,href:(R?Q:void 0)||Z.absoluteURL||V,onClick:R?oe:a,ref:iE(w,K),target:p,"data-discover":!q&&i==="render"?"true":void 0});return E&&!q?S.createElement(S.Fragment,null,W,S.createElement(nE,{page:V})):W});ub.displayName="Link";var uE=S.forwardRef(function({"aria-current":a="page",caseSensitive:i=!1,className:o="",end:u=!1,style:d,to:f,viewTransition:m,children:h,...p},g){let b=vi(f,{relative:p.relative}),_=Bn(),j=S.useContext(fs),{navigator:C,basename:w}=S.useContext(Wt),A=j!=null&&gE(b)&&m===!0,D=C.encodeLocation?C.encodeLocation(b).pathname:b.pathname,k=_.pathname,q=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;i||(k=k.toLowerCase(),q=q?q.toLowerCase():null,D=D.toLowerCase()),q&&w&&(q=Ln(q,w)||q);const Z=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let V=k===D||!u&&k.startsWith(D)&&k.charAt(Z)==="/",J=q!=null&&(q===D||!u&&q.startsWith(D)&&q.charAt(D.length)==="/"),Q={isActive:V,isPending:J,isTransitioning:A},E=V?a:void 0,K;typeof o=="function"?K=o(Q):K=[o,V?"active":null,J?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let le=typeof d=="function"?d(Q):d;return S.createElement(ub,{...p,"aria-current":E,className:K,ref:g,style:le,to:f,viewTransition:m},typeof h=="function"?h(Q):h)});uE.displayName="NavLink";var cE=S.forwardRef(({discover:n="render",fetcherKey:a,navigate:i,reloadDocument:o,replace:u,state:d,method:f=Qo,action:m,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:b,defaultShouldRevalidate:_,...j},C)=>{let{useTransitions:w}=S.useContext(Wt),A=pE(),D=vE(m,{relative:p}),k=f.toLowerCase()==="get"?"get":"post",q=typeof m=="string"&&Jd.test(m),Z=V=>{if(h&&h(V),V.defaultPrevented)return;V.preventDefault();let J=V.nativeEvent.submitter,Q=J?.getAttribute("formmethod")||f,E=()=>A(J||V.currentTarget,{fetcherKey:a,method:Q,navigate:i,replace:u,state:d,relative:p,preventScrollReset:g,viewTransition:b,defaultShouldRevalidate:_});w&&i!==!1?S.startTransition(()=>E()):E()};return S.createElement("form",{ref:C,method:k,action:D,onSubmit:o?h:Z,...j,"data-discover":!q&&n==="render"?"true":void 0})});cE.displayName="Form";function dE(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cb(n){let a=S.useContext(Pa);return He(a,dE(n)),a}function fE(n,{target:a,replace:i,mask:o,state:u,preventScrollReset:d,relative:f,viewTransition:m,defaultShouldRevalidate:h,useTransitions:p}={}){let g=ef(),b=Bn(),_=vi(n,{relative:f});return S.useCallback(j=>{if(qS(j,a)){j.preventDefault();let C=i!==void 0?i:ni(b)===ni(_),w=()=>g(n,{replace:C,mask:o,state:u,preventScrollReset:d,relative:f,viewTransition:m,defaultShouldRevalidate:h});p?S.startTransition(()=>w()):w()}},[b,g,_,i,o,u,a,n,d,f,m,h,p])}var mE=0,hE=()=>`__${String(++mE)}__`;function pE(){let{router:n}=cb("useSubmit"),{basename:a}=S.useContext(Wt),i=DS(),o=n.fetch,u=n.navigate;return S.useCallback(async(d,f={})=>{let{action:m,method:h,encType:p,formData:g,body:b}=PS(d,a);if(f.navigate===!1){let _=f.fetcherKey||hE();await o(_,i,f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:b,formMethod:f.method||h,formEncType:f.encType||p,flushSync:f.flushSync})}else await u(f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:b,formMethod:f.method||h,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[o,u,a,i])}function vE(n,{relative:a}={}){let{basename:i}=S.useContext(Wt),o=S.useContext(gn);He(o,"useFormAction must be used inside a RouteContext");let[u]=o.matches.slice(-1),d={...vi(n||".",{relative:a})},f=Bn();if(n==null){d.search=f.search;let m=new URLSearchParams(d.search),h=m.getAll("index");if(h.some(g=>g==="")){m.delete("index"),h.filter(b=>b).forEach(b=>m.append("index",b));let g=m.toString();d.search=g?`?${g}`:""}}return(!n||n===".")&&u.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(d.pathname=d.pathname==="/"?i:an([i,d.pathname])),ni(d)}function gE(n,{relative:a}={}){let i=S.useContext(tb);He(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=cb("useViewTransitionState"),u=vi(n,{relative:a});if(!i.isTransitioning)return!1;let d=Ln(i.currentLocation.pathname,o)||i.currentLocation.pathname,f=Ln(i.nextLocation.pathname,o)||i.nextLocation.pathname;return es(u.pathname,f)!=null||es(u.pathname,d)!=null}var Pc={exports:{}},ut={};var ng;function yE(){if(ng)return ut;ng=1;var n=Fd();function a(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(h,p,g){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:h,containerInfo:p,implementation:g}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ut.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(a(299));return d(h,p,null,g)},ut.flushSync=function(h){var p=f.T,g=o.p;try{if(f.T=null,o.p=2,h)return h()}finally{f.T=p,o.p=g,o.d.f()}},ut.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(h,p))},ut.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},ut.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,b=m(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,j=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?o.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:_,fetchPriority:j}):g==="script"&&o.d.X(h,{crossOrigin:b,integrity:_,fetchPriority:j,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ut.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=m(p.as,p.crossOrigin);o.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(h)},ut.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,b=m(g,p.crossOrigin);o.d.L(h,g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ut.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=m(p.as,p.crossOrigin);o.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(h)},ut.requestFormReset=function(h){o.d.r(h)},ut.unstable_batchedUpdates=function(h,p){return h(p)},ut.useFormState=function(h,p,g){return f.H.useFormState(h,p,g)},ut.useFormStatus=function(){return f.H.useHostTransitionStatus()},ut.version="19.2.8",ut}var rg;function db(){if(rg)return Pc.exports;rg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Pc.exports=yE(),Pc.exports}var bE=db();function Gr(n,a){var i={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&a.indexOf(o)<0&&(i[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,o=Object.getOwnPropertySymbols(n);u<o.length;u++)a.indexOf(o[u])<0&&Object.prototype.propertyIsEnumerable.call(n,o[u])&&(i[o[u]]=n[o[u]]);return i}function Kc(n,a,i,o){function u(d){return d instanceof i?d:new i(function(f){f(d)})}return new(i||(i=Promise))(function(d,f){function m(g){try{p(o.next(g))}catch(b){f(b)}}function h(g){try{p(o.throw(g))}catch(b){f(b)}}function p(g){g.done?d(g.value):u(g.value).then(m,h)}p((o=o.apply(n,a||[])).next())})}function fb(n){var a,i,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var u=n.length;for(a=0;a<u;a++)n[a]&&(i=fb(n[a]))&&(o&&(o+=" "),o+=i)}else for(i in n)n[i]&&(o&&(o+=" "),o+=i);return o}function ln(){for(var n,a,i=0,o="",u=arguments.length;i<u;i++)(n=arguments[i])&&(a=fb(n))&&(o&&(o+=" "),o+=a);return o}function It(n,a){a===void 0&&(a={});var i=a.insertAt;if(n&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",i==="top"&&o.firstChild?o.insertBefore(u,o.firstChild):o.appendChild(u),u.styleSheet?u.styleSheet.cssText=n:u.appendChild(document.createTextNode(n))}}function mb(...n){return(...a)=>{for(let i of n)typeof i=="function"&&i(...a)}}const Xr=typeof document<"u"?Ve.useLayoutEffect:()=>{};function Zt(n){const a=S.useRef(null);return Xr((()=>{a.current=n}),[n]),S.useCallback(((...i)=>{const o=a.current;return o?.(...i)}),[])}function xE(n){let[a,i]=S.useState(n),o=S.useRef(null),u=Zt((()=>{if(!o.current)return;let f=o.current.next();f.done?o.current=null:a===f.value?u():i(f.value)}));Xr((()=>{o.current&&u()}));let d=Zt((f=>{o.current=f(a),u()}));return[a,d]}const Sd={prefix:String(Math.round(1e10*Math.random())),current:0},ag=Ve.createContext(Sd),_E=Ve.createContext(!1);let SE=!!(typeof window<"u"&&window.document&&window.document.createElement),Qc=new WeakMap;const EE=typeof Ve.useId=="function"?function(n){let a=Ve.useId(),[i]=S.useState(jE()),o=i?"react-aria":`react-aria${Sd.prefix}`;return n||`${o}-${a}`}:function(n){let a=S.useContext(ag);a!==Sd||SE||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let i=(function(u=!1){let d=S.useContext(ag),f=S.useRef(null);if(f.current===null&&!u){var m,h;let p=(h=Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||h===void 0||(m=h.ReactCurrentOwner)===null||m===void 0?void 0:m.current;if(p){let g=Qc.get(p);g==null?Qc.set(p,{id:d.current,state:p.memoizedState}):p.memoizedState!==g.state&&(d.current=g.id,Qc.delete(p))}f.current=++d.current}return f.current})(!!n),o=`react-aria${a.prefix}`;return n||`${o}-${i}`};function TE(){return!1}function wE(){return!0}function AE(n){return()=>{}}function jE(){return typeof Ve.useSyncExternalStore=="function"?Ve.useSyncExternalStore(AE,TE,wE):S.useContext(_E)}let Ql,CE=!!(typeof window<"u"&&window.document&&window.document.createElement),ka=new Map;function Ya(n){let[a,i]=S.useState(n),o=S.useRef(null),u=EE(a),d=S.useRef(null);if(Ql&&Ql.register(d,u),CE){const f=ka.get(u);f&&!f.includes(o)?f.push(o):ka.set(u,[o])}return Xr((()=>{let f=u;return()=>{Ql&&Ql.unregister(d),ka.delete(f)}}),[u]),S.useEffect((()=>{let f=o.current;return f&&i(f),()=>{f&&(o.current=null)}})),u}function NE(n,a){if(n===a)return n;let i=ka.get(n);if(i)return i.forEach((u=>u.current=a)),a;let o=ka.get(a);return o?(o.forEach((u=>u.current=n)),n):a}function lg(n=[]){let a=Ya(),[i,o]=xE(a),u=S.useCallback((()=>{o((function*(){yield a,yield document.getElementById(a)?a:void 0}))}),[a,o]);return Xr(u,[a,u,...n]),i}typeof FinalizationRegistry<"u"&&(Ql=new FinalizationRegistry((n=>{ka.delete(n)})));function gt(...n){let a={...n[0]};for(let i=1;i<n.length;i++){let o=n[i];for(let u in o){let d=a[u],f=o[u];typeof d=="function"&&typeof f=="function"&&u[0]==="o"&&u[1]==="n"&&u.charCodeAt(2)>=65&&u.charCodeAt(2)<=90?a[u]=mb(d,f):u!=="className"&&u!=="UNSAFE_className"||typeof d!="string"||typeof f!="string"?u==="id"&&d&&f?a.id=NE(d,f):a[u]=f!==void 0?f:d:a[u]=ln(d,f)}}return a}function ME(...n){return n.length===1&&n[0]?n[0]:a=>{for(let i of n)typeof i=="function"?i(a):i!=null&&(i.current=a)}}function hb(n){const a=S.useRef(null);return S.useMemo((()=>({get current(){return a.current},set current(i){a.current=i,typeof n=="function"?n(i):n&&(n.current=i)}})),[n])}const RE=Symbol("default");function zE(n){let{className:a,style:i,children:o,defaultClassName:u,defaultChildren:d,defaultStyle:f,values:m}=n;return S.useMemo((()=>{let h,p,g;return h=typeof a=="function"?a({...m,defaultClassName:u}):a,p=typeof i=="function"?i({...m,defaultStyle:f||{}}):i,g=typeof o=="function"?o({...m,defaultChildren:d}):o??d,{className:h??u,style:p||f?{...f,...p}:void 0,children:g??d,"data-rac":""}}),[a,i,o,u,d,f,m])}function DE(n,a){let i=S.useContext(n);if(a===null)return null;if(i&&typeof i=="object"&&"slots"in i&&i.slots){let o=a||RE;if(!i.slots[o]){let u=new Intl.ListFormat().format(Object.keys(i.slots).map((d=>`"${d}"`)));throw new Error(`${a?`Invalid slot "${a}".`:"A slot prop is required."} Valid slot names are ${u}.`)}return i.slots[o]}return i}function OE(n,a,i){let o=DE(i,n.slot)||{},{ref:u,...d}=o,f=hb(S.useMemo((()=>ME(a,u)),[a,u])),m=gt(d,n);return"style"in d&&d.style&&"style"in n&&n.style&&(typeof d.style=="function"||typeof n.style=="function"?m.style=h=>{let p=typeof d.style=="function"?d.style(h):d.style,g={...h.defaultStyle,...p},b=typeof n.style=="function"?n.style({...h,defaultStyle:g}):n.style;return{...g,...b}}:m.style={...d.style,...n.style}),[m,f]}var ig={shadow:"elevation-module_shadow__Vsh7b",disabled:"elevation-module_disabled__La41s"};It(`.elevation-module_shadow__Vsh7b {\r
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
`);const of=n=>{var{disabled:a=!1}=n,i=Gr(n,["disabled"]);const o=ln(ig.shadow,a&&ig.disabled);return y.jsx("span",Object.assign({},i,{"aria-hidden":"true",className:o}))};of.displayName="Actify.Elevation";const pb=S.createContext({});function $E(n){const a=S.useRef(null);return a.current===null&&(a.current=n()),a.current}const sf=typeof window<"u",LE=sf?S.useLayoutEffect:S.useEffect,uf=S.createContext(null),vb=S.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function UE(n=!0){const a=S.useContext(uf);if(a===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:u}=a,d=S.useId();S.useEffect((()=>{if(n)return u(d)}),[n]);const f=S.useCallback((()=>n&&o&&o(d)),[d,o,n]);return!i&&o?[!1,f]:[!0]}function BE(n){if(typeof Proxy>"u")return n;const a=new Map;return new Proxy(((...i)=>n(...i)),{get:(i,o)=>o==="create"?n:(a.has(o)||a.set(o,n(o)),a.get(o))})}function ps(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function og(n){const a=[{},{}];return n?.values.forEach(((i,o)=>{a[0][o]=i.get(),a[1][o]=i.getVelocity()})),a}function cf(n,a,i,o){if(typeof a=="function"){const[u,d]=og(o);a=a(i!==void 0?i:n.custom,u,d)}if(typeof a=="string"&&(a=n.variants&&n.variants[a]),typeof a=="function"){const[u,d]=og(o);a=a(i!==void 0?i:n.custom,u,d)}return a}function ri(n,a,i){const o=n.getProps();return cf(o,a,i!==void 0?i:o.custom,n)}function df(n,a){return n?.[a]??n?.default??n}const Jt=n=>n,Yo=["read","resolveKeyframes","update","preRender","render","postRender"],sg={value:null};function VE(n,a){let i=new Set,o=new Set,u=!1,d=!1;const f=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1},h=0;function p(b){f.has(b)&&(g.schedule(b),n()),h++,b(m)}const g={schedule:(b,_=!1,j=!1)=>{const C=j&&u?i:o;return _&&f.add(b),C.has(b)||C.add(b),b},cancel:b=>{o.delete(b),f.delete(b)},process:b=>{m=b,u?d=!0:(u=!0,[i,o]=[o,i],i.forEach(p),a&&sg.value&&sg.value.frameloop[a].push(h),h=0,i.clear(),u=!1,d&&(d=!1,g.process(b)))}};return g}function gb(n,a){let i=!1,o=!0;const u={delta:0,timestamp:0,isProcessing:!1},d=()=>i=!0,f=Yo.reduce(((C,w)=>(C[w]=VE(d,a?w:void 0),C)),{}),{read:m,resolveKeyframes:h,update:p,preRender:g,render:b,postRender:_}=f,j=()=>{const C=performance.now();i=!1,u.delta=o?1e3/60:Math.max(Math.min(C-u.timestamp,40),1),u.timestamp=C,u.isProcessing=!0,m.process(u),h.process(u),p.process(u),g.process(u),b.process(u),_.process(u),u.isProcessing=!1,i&&a&&(o=!1,n(j))};return{schedule:Yo.reduce(((C,w)=>{const A=f[w];return C[w]=(D,k=!1,q=!1)=>(i||(i=!0,o=!0,u.isProcessing||n(j)),A.schedule(D,k,q)),C}),{}),cancel:C=>{for(let w=0;w<Yo.length;w++)f[Yo[w]].cancel(C)},state:u,steps:f}}const{schedule:De,cancel:mr,state:st,steps:Zc}=gb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Jt,!0),Ka=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Pr=new Set(Ka),yb=new Set(["width","height","top","left","right","bottom",...Ka]);function ff(n,a){n.indexOf(a)===-1&&n.push(a)}function mf(n,a){const i=n.indexOf(a);i>-1&&n.splice(i,1)}let hf=class{constructor(){this.subscriptions=[]}add(a){return ff(this.subscriptions,a),()=>mf(this.subscriptions,a)}notify(a,i,o){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](a,i,o);else for(let d=0;d<u;d++){const f=this.subscriptions[d];f&&f(a,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}};function bb(n,a){return a?n*(1e3/a):0}const HE={useManualTiming:!1};let Fo;function kE(){Fo=void 0}const mn={now:()=>(Fo===void 0&&mn.set(st.isProcessing||HE.useManualTiming?st.timestamp:performance.now()),Fo),set:n=>{Fo=n,queueMicrotask(kE)}};let YE=class{constructor(a,i={}){this.version="12.6.3",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,u=!0)=>{const d=mn.now();this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),u&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(a),this.owner=i.owner}setCurrent(a){var i;this.current=a,this.updatedAt=mn.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=(i=this.current,!isNaN(parseFloat(i))))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,i){this.events[a]||(this.events[a]=new hf);const o=this.events[a].add(i);return a==="change"?()=>{o(),De.read((()=>{this.events.change.getSize()||this.stop()}))}:o}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,i){this.passiveEffect=a,this.stopPassiveEffect=i}set(a,i=!0){i&&this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a,i)}setWithVelocity(a,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-o}jump(a,i=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const a=mn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>30)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,30);return bb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(a){return this.stop(),new Promise((i=>{this.hasAnimated=!0,this.animation=a(i),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function ai(n,a){return new YE(n,a)}const Ed=n=>Array.isArray(n),qE=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),GE=n=>Ed(n)?n[n.length-1]||0:n;function XE(n,a,i){n.hasValue(a)?n.getValue(a).set(i):n.addValue(a,ai(i))}function PE(n,a){const i=ri(n,a);let{transitionEnd:o={},transition:u={},...d}=i||{};d={...d,...o};for(const f in d)XE(n,f,GE(d[f]))}const dt=n=>!!(n&&n.getVelocity);function KE(n){return!!(dt(n)&&n.add)}function Td(n,a){const i=n.getValue("willChange");if(KE(i))return i.add(a)}const pf=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),QE="framerAppearId",xb="data-"+pf(QE);function _b(n){return n.props[xb]}const hn=n=>1e3*n,pn=n=>n/1e3;function vf(n){let a;return()=>(a===void 0&&(a=n()),a)}const ZE=vf((()=>window.ScrollTimeline!==void 0));let FE=class{constructor(a){this.stop=()=>this.runAll("stop"),this.animations=a.filter(Boolean)}get finished(){return Promise.all(this.animations.map((a=>a.finished)))}getAll(a){return this.animations[0][a]}setAll(a,i){for(let o=0;o<this.animations.length;o++)this.animations[o][a]=i}attachTimeline(a,i){const o=this.animations.map((u=>ZE()&&u.attachTimeline?u.attachTimeline(a):typeof i=="function"?i(u):void 0));return()=>{o.forEach(((u,d)=>{u&&u(),this.animations[d].stop()}))}}get time(){return this.getAll("time")}set time(a){this.setAll("time",a)}get speed(){return this.getAll("speed")}set speed(a){this.setAll("speed",a)}get startTime(){return this.getAll("startTime")}get duration(){let a=0;for(let i=0;i<this.animations.length;i++)a=Math.max(a,this.animations[i].duration);return a}runAll(a){this.animations.forEach((i=>i[a]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}},JE=class extends FE{then(a,i){return this.finished.finally(a).then((()=>{}))}};const gf=n=>Array.isArray(n)&&typeof n[0]=="number",WE={};function IE(n,a){const i=vf(n);return()=>WE[a]??i()}const li=IE((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}),"linearEasing"),Sb=(n,a,i=10)=>{let o="";const u=Math.max(Math.round(a/i),2);for(let d=0;d<u;d++)o+=n(d/(u-1))+", ";return`linear(${o.substring(0,o.length-2)})`},Zl=([n,a,i,o])=>`cubic-bezier(${n}, ${a}, ${i}, ${o})`,wd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Zl([0,.65,.55,1]),circOut:Zl([.55,0,1,.45]),backIn:Zl([.31,.01,.66,-.59]),backOut:Zl([.33,1.53,.69,.99])};function Eb(n,a){return n?typeof n=="function"&&li()?Sb(n,a):gf(n)?Zl(n):Array.isArray(n)?n.map((i=>Eb(i,a)||wd.easeOut)):wd[n]:void 0}function eT(n,a,i,{delay:o=0,duration:u=300,repeat:d=0,repeatType:f="loop",ease:m="easeInOut",times:h}={},p=void 0){const g={[a]:i};h&&(g.offset=h);const b=Eb(m,u);return Array.isArray(b)&&(g.easing=b),n.animate(g,{delay:o,duration:u,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal",pseudoElement:p})}function yf(n){return typeof n=="function"&&"applyToOptions"in n}function Tb(n){return!!(typeof n=="function"&&li()||!n||typeof n=="string"&&(n in wd||li())||gf(n)||Array.isArray(n)&&n.every(Tb))}function ug(n,a){n.timeline=a,n.onfinish=null}const cg=(n,a,i)=>(((1-3*i+3*a)*n+(3*i-6*a))*n+3*a)*n;function Qa(n,a,i,o){if(n===a&&i===o)return Jt;const u=d=>(function(f,m,h,p,g){let b,_,j=0;do _=m+(h-m)/2,b=cg(_,p,g)-f,b>0?h=_:m=_;while(Math.abs(b)>1e-7&&++j<12);return _})(d,0,1,n,i);return d=>d===0||d===1?d:cg(u(d),a,o)}const wb=n=>a=>a<=.5?n(2*a)/2:(2-n(2*(1-a)))/2,Ab=n=>a=>1-n(1-a),jb=Qa(.33,1.53,.69,.99),bf=Ab(jb),Cb=wb(bf),Nb=n=>(n*=2)<1?.5*bf(n):.5*(2-Math.pow(2,-10*(n-1))),xf=n=>1-Math.sin(Math.acos(n)),Mb=Ab(xf),Rb=wb(xf),zb=n=>/^0[^.\s]+$/u.test(n);function tT(n){return typeof n=="number"?n===0:n===null||n==="none"||n==="0"||zb(n)}const Un=(n,a,i)=>i>a?a:i<n?n:i,Za={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ii={...Za,transform:n=>Un(0,1,n)},qo={...Za,default:1},Jl=n=>Math.round(1e5*n)/1e5,_f=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function nT(n){return n==null}const rT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Sf=(n,a)=>i=>!!(typeof i=="string"&&rT.test(i)&&i.startsWith(n)||a&&!nT(i)&&Object.prototype.hasOwnProperty.call(i,a)),Db=(n,a,i)=>o=>{if(typeof o!="string")return o;const[u,d,f,m]=o.match(_f);return{[n]:parseFloat(u),[a]:parseFloat(d),[i]:parseFloat(f),alpha:m!==void 0?parseFloat(m):1}},Fc={...Za,transform:n=>Math.round((a=>Un(0,255,a))(n))},Vr={test:Sf("rgb","red"),parse:Db("red","green","blue"),transform:({red:n,green:a,blue:i,alpha:o=1})=>"rgba("+Fc.transform(n)+", "+Fc.transform(a)+", "+Fc.transform(i)+", "+Jl(ii.transform(o))+")"},Ad={test:Sf("#"),parse:function(n){let a="",i="",o="",u="";return n.length>5?(a=n.substring(1,3),i=n.substring(3,5),o=n.substring(5,7),u=n.substring(7,9)):(a=n.substring(1,2),i=n.substring(2,3),o=n.substring(3,4),u=n.substring(4,5),a+=a,i+=i,o+=o,u+=u),{red:parseInt(a,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:u?parseInt(u,16)/255:1}},transform:Vr.transform},gi=n=>({test:a=>typeof a=="string"&&a.endsWith(n)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${n}`}),fr=gi("deg"),vn=gi("%"),ue=gi("px"),aT=gi("vh"),lT=gi("vw"),dg={...vn,parse:n=>vn.parse(n)/100,transform:n=>vn.transform(100*n)},Oa={test:Sf("hsl","hue"),parse:Db("hue","saturation","lightness"),transform:({hue:n,saturation:a,lightness:i,alpha:o=1})=>"hsla("+Math.round(n)+", "+vn.transform(Jl(a))+", "+vn.transform(Jl(i))+", "+Jl(ii.transform(o))+")"},ct={test:n=>Vr.test(n)||Ad.test(n)||Oa.test(n),parse:n=>Vr.test(n)?Vr.parse(n):Oa.test(n)?Oa.parse(n):Ad.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Vr.transform(n):Oa.transform(n)},iT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,Ob="number",$b="color",oT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function oi(n){const a=n.toString(),i=[],o={color:[],number:[],var:[]},u=[];let d=0;const f=a.replace(oT,(m=>(ct.test(m)?(o.color.push(d),u.push($b),i.push(ct.parse(m))):m.startsWith("var(")?(o.var.push(d),u.push("var"),i.push(m)):(o.number.push(d),u.push(Ob),i.push(parseFloat(m))),++d,"${}"))).split("${}");return{values:i,split:f,indexes:o,types:u}}function fg(n){return oi(n).values}function mg(n){const{split:a,types:i}=oi(n),o=a.length;return u=>{let d="";for(let f=0;f<o;f++)if(d+=a[f],u[f]!==void 0){const m=i[f];d+=m===Ob?Jl(u[f]):m===$b?ct.transform(u[f]):u[f]}return d}}const sT=n=>typeof n=="number"?0:n,hr={test:function(n){return isNaN(n)&&typeof n=="string"&&(n.match(_f)?.length||0)+(n.match(iT)?.length||0)>0},parse:fg,createTransformer:mg,getAnimatableNone:function(n){const a=fg(n);return mg(n)(a.map(sT))}},uT=new Set(["brightness","contrast","saturate","opacity"]);function cT(n){const[a,i]=n.slice(0,-1).split("(");if(a==="drop-shadow")return n;const[o]=i.match(_f)||[];if(!o)return n;const u=i.replace(o,"");let d=uT.has(a)?1:0;return o!==i&&(d*=100),a+"("+d+u+")"}const dT=/\b([a-z-]*)\(.*?\)/gu,jd={...hr,getAnimatableNone:n=>{const a=n.match(dT);return a?a.map(cT).join(" "):n}},fT={borderWidth:ue,borderTopWidth:ue,borderRightWidth:ue,borderBottomWidth:ue,borderLeftWidth:ue,borderRadius:ue,radius:ue,borderTopLeftRadius:ue,borderTopRightRadius:ue,borderBottomRightRadius:ue,borderBottomLeftRadius:ue,width:ue,maxWidth:ue,height:ue,maxHeight:ue,top:ue,right:ue,bottom:ue,left:ue,padding:ue,paddingTop:ue,paddingRight:ue,paddingBottom:ue,paddingLeft:ue,margin:ue,marginTop:ue,marginRight:ue,marginBottom:ue,marginLeft:ue,backgroundPositionX:ue,backgroundPositionY:ue},mT={rotate:fr,rotateX:fr,rotateY:fr,rotateZ:fr,scale:qo,scaleX:qo,scaleY:qo,scaleZ:qo,skew:fr,skewX:fr,skewY:fr,distance:ue,translateX:ue,translateY:ue,translateZ:ue,x:ue,y:ue,z:ue,perspective:ue,transformPerspective:ue,opacity:ii,originX:dg,originY:dg,originZ:ue},hg={...Za,transform:Math.round},Ef={...fT,...mT,zIndex:hg,size:ue,fillOpacity:ii,strokeOpacity:ii,numOctaves:hg},hT={...Ef,color:ct,backgroundColor:ct,outlineColor:ct,fill:ct,stroke:ct,borderColor:ct,borderTopColor:ct,borderRightColor:ct,borderBottomColor:ct,borderLeftColor:ct,filter:jd,WebkitFilter:jd},Lb=n=>hT[n];function Ub(n,a){let i=Lb(n);return i!==jd&&(i=hr),i.getAnimatableNone?i.getAnimatableNone(a):void 0}const pT=new Set(["auto","none","0"]);function vT(n,a,i){let o,u=0;for(;u<n.length&&!o;){const d=n[u];typeof d=="string"&&!pT.has(d)&&oi(d).values.length&&(o=n[u]),u++}if(o&&i)for(const d of a)n[d]=Ub(i,o)}const Hr=n=>180*n/Math.PI,ns=n=>{const a=Hr(Math.atan2(n[1],n[0]));return Cd(a)},gT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:ns,rotateZ:ns,skewX:n=>Hr(Math.atan(n[1])),skewY:n=>Hr(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Cd=n=>((n%=360)<0&&(n+=360),n),pg=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),vg=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),yT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:pg,scaleY:vg,scale:n=>(pg(n)+vg(n))/2,rotateX:n=>Cd(Hr(Math.atan2(n[6],n[5]))),rotateY:n=>Cd(Hr(Math.atan2(-n[2],n[0]))),rotateZ:ns,rotate:ns,skewX:n=>Hr(Math.atan(n[4])),skewY:n=>Hr(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function gg(n){return n.includes("scale")?1:0}function Nd(n,a){if(!n||n==="none")return gg(a);const i=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,u;if(i)o=yT,u=i;else{const m=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=gT,u=m}if(!u)return gg(a);const d=o[a],f=u[1].split(",").map(xT);return typeof d=="function"?d(f):f[d]}const bT=(n,a)=>{const{transform:i="none"}=getComputedStyle(n);return Nd(i,a)};function xT(n){return parseFloat(n.trim())}const yg=n=>n===Za||n===ue,_T=new Set(["x","y","z"]),ST=Ka.filter((n=>!_T.has(n)));function ET(n){const a=[];return ST.forEach((i=>{const o=n.getValue(i);o!==void 0&&(a.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))})),a}const $a={width:({x:n},{paddingLeft:a="0",paddingRight:i="0"})=>n.max-n.min-parseFloat(a)-parseFloat(i),height:({y:n},{paddingTop:a="0",paddingBottom:i="0"})=>n.max-n.min-parseFloat(a)-parseFloat(i),top:(n,{top:a})=>parseFloat(a),left:(n,{left:a})=>parseFloat(a),bottom:({y:n},{top:a})=>parseFloat(a)+(n.max-n.min),right:({x:n},{left:a})=>parseFloat(a)+(n.max-n.min),x:(n,{transform:a})=>Nd(a,"x"),y:(n,{transform:a})=>Nd(a,"y")};$a.translateX=$a.x,$a.translateY=$a.y;const kr=new Set;let Md=!1,Rd=!1;function Bb(){if(Rd){const n=Array.from(kr).filter((o=>o.needsMeasurement)),a=new Set(n.map((o=>o.element))),i=new Map;a.forEach((o=>{const u=ET(o);u.length&&(i.set(o,u),o.render())})),n.forEach((o=>o.measureInitialState())),a.forEach((o=>{o.render();const u=i.get(o);u&&u.forEach((([d,f])=>{o.getValue(d)?.set(f)}))})),n.forEach((o=>o.measureEndState())),n.forEach((o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)}))}Rd=!1,Md=!1,kr.forEach((n=>n.complete())),kr.clear()}function Vb(){kr.forEach((n=>{n.readKeyframes(),n.needsMeasurement&&(Rd=!0)}))}function TT(){Vb(),Bb()}let Tf=class{constructor(a,i,o,u,d,f=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...a],this.onComplete=i,this.name=o,this.motionValue=u,this.element=d,this.isAsync=f}scheduleResolve(){this.isScheduled=!0,this.isAsync?(kr.add(this),Md||(Md=!0,De.read(Vb),De.resolveKeyframes(Bb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:i,element:o,motionValue:u}=this;for(let d=0;d<a.length;d++)if(a[d]===null)if(d===0){const f=u?.get(),m=a[a.length-1];if(f!==void 0)a[0]=f;else if(o&&i){const h=o.readValue(i,m);h!=null&&(a[0]=h)}a[0]===void 0&&(a[0]=m),u&&f===void 0&&u.set(a[0])}else a[d]=a[d-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),kr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,kr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}},Hb=()=>{};const kb=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),Yb=n=>a=>typeof a=="string"&&a.startsWith(n),wf=Yb("--"),wT=Yb("var(--"),Af=n=>!!wT(n)&&AT.test(n.split("/*")[0].trim()),AT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,jT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function CT(n){const a=jT.exec(n);if(!a)return[,];const[,i,o,u]=a;return[`--${i??o}`,u]}function qb(n,a,i=1){const[o,u]=CT(n);if(!o)return;const d=window.getComputedStyle(a).getPropertyValue(o);if(d){const f=d.trim();return kb(f)?parseFloat(f):f}return Af(u)?qb(u,a,i+1):u}const Gb=n=>a=>a.test(n),NT={test:n=>n==="auto",parse:n=>n},Xb=[Za,ue,vn,fr,lT,aT,NT],bg=n=>Xb.find(Gb(n));let Pb=class extends Tf{constructor(a,i,o,u,d){super(a,i,o,u,d,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let h=0;h<a.length;h++){let p=a[h];if(typeof p=="string"&&(p=p.trim(),Af(p))){const g=qb(p,i.current);g!==void 0&&(a[h]=g),h===a.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!yb.has(o)||a.length!==2)return;const[u,d]=a,f=bg(u),m=bg(d);if(f!==m)if(yg(f)&&yg(m))for(let h=0;h<a.length;h++){const p=a[h];typeof p=="string"&&(a[h]=parseFloat(p))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:i}=this,o=[];for(let u=0;u<a.length;u++)tT(a[u])&&o.push(u);o.length&&vT(a,o,i)}measureInitialState(){const{element:a,unresolvedKeyframes:i,name:o}=this;if(!a||!a.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$a[o](a.measureViewportBox(),window.getComputedStyle(a.current)),i[0]=this.measuredOrigin;const u=i[i.length-1];u!==void 0&&a.getValue(o,u).jump(u,!1)}measureEndState(){const{element:a,name:i,unresolvedKeyframes:o}=this;if(!a||!a.current)return;const u=a.getValue(i);u&&u.jump(this.measuredOrigin,!1);const d=o.length-1,f=o[d];o[d]=$a[i](a.measureViewportBox(),window.getComputedStyle(a.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach((([m,h])=>{a.getValue(m).set(h)})),this.resolveNoneKeyframes()}};const xg=(n,a)=>a!=="zIndex"&&(!(typeof n!="number"&&!Array.isArray(n))||!(typeof n!="string"||!hr.test(n)&&n!=="0"||n.startsWith("url(")));function MT(n,a,i,o){const u=n[0];if(u===null)return!1;if(a==="display"||a==="visibility")return!0;const d=n[n.length-1],f=xg(u,a),m=xg(d,a);return!(!f||!m)&&((function(h){const p=h[0];if(h.length===1)return!0;for(let g=0;g<h.length;g++)if(h[g]!==p)return!0})(n)||(i==="spring"||yf(i))&&o)}const RT=n=>n!==null;function vs(n,{repeat:a,repeatType:i="loop"},o){const u=n.filter(RT),d=a&&i!=="loop"&&a%2==1?0:u.length-1;return d&&o!==void 0?o:u[d]}let Kb=class{constructor({autoplay:a=!0,delay:i=0,type:o="keyframes",repeat:u=0,repeatDelay:d=0,repeatType:f="loop",...m}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=mn.now(),this.options={autoplay:a,delay:i,type:o,repeat:u,repeatDelay:d,repeatType:f,...m},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||TT(),this._resolved}onKeyframesResolved(a,i){this.resolvedAt=mn.now(),this.hasAttemptedResolve=!0;const{name:o,type:u,velocity:d,delay:f,onComplete:m,onUpdate:h,isGenerator:p}=this.options;if(!p&&!MT(a,o,u,d)){if(!f)return h&&h(vs(a,this.options,i)),m&&m(),void this.resolveFinishedPromise();this.options.duration=0}const g=this.initPlayback(a,i);g!==!1&&(this._resolved={keyframes:a,finalKeyframe:i,...g},this.onPostResolved())}onPostResolved(){}then(a,i){return this.currentFinishedPromise.then(a,i)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise((a=>{this.resolveFinishedPromise=a}))}};const rs=2e4;function jf(n){let a=0,i=n.next(a);for(;!i.done&&a<rs;)a+=50,i=n.next(a);return a>=rs?1/0:a}const Be=(n,a,i)=>n+(a-n)*i;function Jc(n,a,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?n+6*(a-n)*i:i<.5?a:i<2/3?n+(a-n)*(2/3-i)*6:n}function zT({hue:n,saturation:a,lightness:i,alpha:o}){n/=360,i/=100;let u=0,d=0,f=0;if(a/=100){const m=i<.5?i*(1+a):i+a-i*a,h=2*i-m;u=Jc(h,m,n+1/3),d=Jc(h,m,n),f=Jc(h,m,n-1/3)}else u=d=f=i;return{red:Math.round(255*u),green:Math.round(255*d),blue:Math.round(255*f),alpha:o}}function as(n,a){return i=>i>0?a:n}const Wc=(n,a,i)=>{const o=n*n,u=i*(a*a-o)+o;return u<0?0:Math.sqrt(u)},DT=[Ad,Vr,Oa];function _g(n){const a=(i=n,DT.find((u=>u.test(i))));var i;if(!a)return!1;let o=a.parse(n);return a===Oa&&(o=zT(o)),o}const Sg=(n,a)=>{const i=_g(n),o=_g(a);if(!i||!o)return as(n,a);const u={...i};return d=>(u.red=Wc(i.red,o.red,d),u.green=Wc(i.green,o.green,d),u.blue=Wc(i.blue,o.blue,d),u.alpha=Be(i.alpha,o.alpha,d),Vr.transform(u))},OT=(n,a)=>i=>a(n(i)),yi=(...n)=>n.reduce(OT),zd=new Set(["none","hidden"]);function $T(n,a){return zd.has(n)?i=>i<=0?n:a:i=>i>=1?a:n}function LT(n,a){return i=>Be(n,a,i)}function Cf(n){return typeof n=="number"?LT:typeof n=="string"?Af(n)?as:ct.test(n)?Sg:BT:Array.isArray(n)?Qb:typeof n=="object"?ct.test(n)?Sg:UT:as}function Qb(n,a){const i=[...n],o=i.length,u=n.map(((d,f)=>Cf(d)(d,a[f])));return d=>{for(let f=0;f<o;f++)i[f]=u[f](d);return i}}function UT(n,a){const i={...n,...a},o={};for(const u in i)n[u]!==void 0&&a[u]!==void 0&&(o[u]=Cf(n[u])(n[u],a[u]));return u=>{for(const d in o)i[d]=o[d](u);return i}}const BT=(n,a)=>{const i=hr.createTransformer(a),o=oi(n),u=oi(a);return o.indexes.var.length===u.indexes.var.length&&o.indexes.color.length===u.indexes.color.length&&o.indexes.number.length>=u.indexes.number.length?zd.has(n)&&!u.values.length||zd.has(a)&&!o.values.length?$T(n,a):yi(Qb((function(d,f){const m=[],h={color:0,var:0,number:0};for(let p=0;p<f.values.length;p++){const g=f.types[p],b=d.indexes[g][h[g]],_=d.values[b]??0;m[p]=_,h[g]++}return m})(o,u),u.values),i):as(n,a)};function Zb(n,a,i){return typeof n=="number"&&typeof a=="number"&&typeof i=="number"?Be(n,a,i):Cf(n)(n,a)}function VT(n,a=100,i){const o=i({...n,keyframes:[0,a]}),u=Math.min(jf(o),rs);return{type:"keyframes",ease:d=>o.next(u*d).value/a,duration:pn(u)}}function Fb(n,a,i){const o=Math.max(a-5,0);return bb(i-n(o),a-o)}const Ge={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Eg=.001;function HT({duration:n=Ge.duration,bounce:a=Ge.bounce,velocity:i=Ge.velocity,mass:o=Ge.mass}){let u,d,f=1-a;f=Un(Ge.minDamping,Ge.maxDamping,f),n=Un(Ge.minDuration,Ge.maxDuration,pn(n)),f<1?(u=h=>{const p=h*f,g=p*n,b=p-i,_=Dd(h,f),j=Math.exp(-g);return Eg-b/_*j},d=h=>{const p=h*f*n,g=p*i+i,b=Math.pow(f,2)*Math.pow(h,2)*n,_=Math.exp(-p),j=Dd(Math.pow(h,2),f);return(-u(h)+Eg>0?-1:1)*((g-b)*_)/j}):(u=h=>Math.exp(-h*n)*((h-i)*n+1)-.001,d=h=>Math.exp(-h*n)*(n*n*(i-h)));const m=(function(h,p,g){let b=g;for(let _=1;_<kT;_++)b-=h(b)/p(b);return b})(u,d,5/n);if(n=hn(n),isNaN(m))return{stiffness:Ge.stiffness,damping:Ge.damping,duration:n};{const h=Math.pow(m,2)*o;return{stiffness:h,damping:2*f*Math.sqrt(o*h),duration:n}}}const kT=12;function Dd(n,a){return n*Math.sqrt(1-a*a)}const YT=["duration","bounce"],qT=["stiffness","damping","mass"];function Tg(n,a){return a.some((i=>n[i]!==void 0))}function ls(n=Ge.visualDuration,a=Ge.bounce){const i=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:a}:n;let{restSpeed:o,restDelta:u}=i;const d=i.keyframes[0],f=i.keyframes[i.keyframes.length-1],m={done:!1,value:d},{stiffness:h,damping:p,mass:g,duration:b,velocity:_,isResolvedFromDuration:j}=(function(V){let J={velocity:Ge.velocity,stiffness:Ge.stiffness,damping:Ge.damping,mass:Ge.mass,isResolvedFromDuration:!1,...V};if(!Tg(V,qT)&&Tg(V,YT))if(V.visualDuration){const Q=V.visualDuration,E=2*Math.PI/(1.2*Q),K=E*E,le=2*Un(.05,1,1-(V.bounce||0))*Math.sqrt(K);J={...J,mass:Ge.mass,stiffness:K,damping:le}}else{const Q=HT(V);J={...J,...Q,mass:Ge.mass},J.isResolvedFromDuration=!0}return J})({...i,velocity:-pn(i.velocity||0)}),C=_||0,w=p/(2*Math.sqrt(h*g)),A=f-d,D=pn(Math.sqrt(h/g)),k=Math.abs(A)<5;let q;if(o||(o=k?Ge.restSpeed.granular:Ge.restSpeed.default),u||(u=k?Ge.restDelta.granular:Ge.restDelta.default),w<1){const V=Dd(D,w);q=J=>{const Q=Math.exp(-w*D*J);return f-Q*((C+w*D*A)/V*Math.sin(V*J)+A*Math.cos(V*J))}}else if(w===1)q=V=>f-Math.exp(-D*V)*(A+(C+D*A)*V);else{const V=D*Math.sqrt(w*w-1);q=J=>{const Q=Math.exp(-w*D*J),E=Math.min(V*J,300);return f-Q*((C+w*D*A)*Math.sinh(E)+V*A*Math.cosh(E))/V}}const Z={calculatedDuration:j&&b||null,next:V=>{const J=q(V);if(j)m.done=V>=b;else{let Q=0;w<1&&(Q=V===0?hn(C):Fb(q,V,J));const E=Math.abs(Q)<=o,K=Math.abs(f-J)<=u;m.done=E&&K}return m.value=m.done?f:J,m},toString:()=>{const V=Math.min(jf(Z),rs),J=Sb((Q=>Z.next(V*Q).value),V,30);return V+"ms "+J},toTransition:()=>{}};return Z}ls.applyToOptions=n=>{const a=VT(n,100,ls);return n.ease=li()?a.ease:"easeOut",n.duration=hn(a.duration),n.type="keyframes",n};function wg({keyframes:n,velocity:a=0,power:i=.8,timeConstant:o=325,bounceDamping:u=10,bounceStiffness:d=500,modifyTarget:f,min:m,max:h,restDelta:p=.5,restSpeed:g}){const b=n[0],_={done:!1,value:b},j=Q=>m===void 0?h:h===void 0||Math.abs(m-Q)<Math.abs(h-Q)?m:h;let C=i*a;const w=b+C,A=f===void 0?w:f(w);A!==w&&(C=A-b);const D=Q=>-C*Math.exp(-Q/o),k=Q=>A+D(Q),q=Q=>{const E=D(Q),K=k(Q);_.done=Math.abs(E)<=p,_.value=_.done?A:K};let Z,V;const J=Q=>{var E;E=_.value,(m!==void 0&&E<m||h!==void 0&&E>h)&&(Z=Q,V=ls({keyframes:[_.value,j(_.value)],velocity:Fb(k,Q,_.value),damping:u,stiffness:d,restDelta:p,restSpeed:g}))};return J(0),{calculatedDuration:null,next:Q=>{let E=!1;return V||Z!==void 0||(E=!0,q(Q),J(Q)),Z!==void 0&&Q>=Z?V.next(Q-Z):(!E&&q(Q),_)}}}const GT=Qa(.42,0,1,1),XT=Qa(0,0,.58,1),Jb=Qa(.42,0,.58,1),PT=n=>Array.isArray(n)&&typeof n[0]!="number",KT={linear:Jt,easeIn:GT,easeInOut:Jb,easeOut:XT,circIn:xf,circInOut:Rb,circOut:Mb,backIn:bf,backInOut:Cb,backOut:jb,anticipate:Nb},Ag=n=>{if(gf(n)){Hb(n.length===4);const[a,i,o,u]=n;return Qa(a,i,o,u)}return typeof n=="string"?KT[n]:n},si=(n,a,i)=>{const o=a-n;return o===0?1:(i-n)/o};function QT(n,a,{clamp:i=!0,ease:o,mixer:u}={}){const d=n.length;if(Hb(d===a.length),d===1)return()=>a[0];if(d===2&&a[0]===a[1])return()=>a[1];const f=n[0]===n[1];n[0]>n[d-1]&&(n=[...n].reverse(),a=[...a].reverse());const m=(function(g,b,_){const j=[],C=_||Zb,w=g.length-1;for(let A=0;A<w;A++){let D=C(g[A],g[A+1]);if(b){const k=Array.isArray(b)?b[A]||Jt:b;D=yi(k,D)}j.push(D)}return j})(a,o,u),h=m.length,p=g=>{if(f&&g<n[0])return a[0];let b=0;if(h>1)for(;b<n.length-2&&!(g<n[b+1]);b++);const _=si(n[b],n[b+1],g);return m[b](_)};return i?g=>p(Un(n[0],n[d-1],g)):p}function ZT(n,a){const i=n[n.length-1];for(let o=1;o<=a;o++){const u=si(0,a,o);n.push(Be(i,1,u))}}function FT(n){const a=[0];return ZT(a,n.length-1),a}function JT(n,a){return n.map((i=>i*a))}function WT(n,a){return n.map((()=>a||Jb)).splice(0,n.length-1)}function is({duration:n=300,keyframes:a,times:i,ease:o="easeInOut"}){const u=PT(o)?o.map(Ag):Ag(o),d={done:!1,value:a[0]},f=JT(i&&i.length===a.length?i:FT(a),n),m=QT(f,a,{ease:Array.isArray(u)?u:WT(a,u)});return{calculatedDuration:n,next:h=>(d.value=m(h),d.done=h>=n,d)}}const IT=n=>{const a=({timestamp:i})=>n(i);return{start:()=>De.update(a,!0),stop:()=>mr(a),now:()=>st.isProcessing?st.timestamp:mn.now()}},e2={decay:wg,inertia:wg,tween:is,keyframes:is,spring:ls},t2=n=>n/100;let Od=class extends Kb{constructor(a){super(a),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:m}=this.options;m&&m()};const{name:i,motionValue:o,element:u,keyframes:d}=this.options,f=u?.KeyframeResolver||Tf;this.resolver=new f(d,((m,h)=>this.onKeyframesResolved(m,h)),i,o,u),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(a){const{type:i="keyframes",repeat:o=0,repeatDelay:u=0,repeatType:d,velocity:f=0}=this.options,m=yf(i)?i:e2[i]||is;let h,p;m!==is&&typeof a[0]!="number"&&(h=yi(t2,Zb(a[0],a[1])),a=[0,100]);const g=m({...this.options,keyframes:a});d==="mirror"&&(p=m({...this.options,keyframes:[...a].reverse(),velocity:-f})),g.calculatedDuration===null&&(g.calculatedDuration=jf(g));const{calculatedDuration:b}=g,_=b+u;return{generator:g,mirroredGenerator:p,mapPercentToKeyframes:h,calculatedDuration:b,resolvedDuration:_,totalDuration:_*(o+1)-u}}onPostResolved(){const{autoplay:a=!0}=this.options;this.play(),this.pendingPlayState!=="paused"&&a?this.state=this.pendingPlayState:this.pause()}tick(a,i=!1){const{resolved:o}=this;if(!o){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:u,generator:d,mirroredGenerator:f,mapPercentToKeyframes:m,keyframes:h,calculatedDuration:p,totalDuration:g,resolvedDuration:b}=o;if(this.startTime===null)return d.next(0);const{delay:_,repeat:j,repeatType:C,repeatDelay:w,onUpdate:A}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-g/this.speed,this.startTime)),i?this.currentTime=a:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(a-this.startTime)*this.speed;const D=this.currentTime-_*(this.speed>=0?1:-1),k=this.speed>=0?D<0:D>g;this.currentTime=Math.max(D,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let q=this.currentTime,Z=d;if(j){const E=Math.min(this.currentTime,g)/b;let K=Math.floor(E),le=E%1;!le&&E>=1&&(le=1),le===1&&K--,K=Math.min(K,j+1),K%2&&(C==="reverse"?(le=1-le,w&&(le-=w/b)):C==="mirror"&&(Z=f)),q=Un(0,1,le)*b}const V=k?{done:!1,value:h[0]}:Z.next(q);m&&(V.value=m(V.value));let{done:J}=V;k||p===null||(J=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&J);return Q&&u!==void 0&&(V.value=vs(h,this.options,u)),A&&A(V.value),Q&&this.finish(),V}get duration(){const{resolved:a}=this;return a?pn(a.calculatedDuration):0}get time(){return pn(this.currentTime)}set time(a){a=hn(a),this.currentTime=a,this.holdTime!==null||this.speed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.speed)}get speed(){return this.playbackSpeed}set speed(a){const i=this.playbackSpeed!==a;this.playbackSpeed=a,i&&(this.time=pn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:a=IT,onPlay:i,startTime:o}=this.options;this.driver||(this.driver=a((d=>this.tick(d)))),i&&i();const u=this.driver.now();this.holdTime!==null?this.startTime=u-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=u):this.startTime=o??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){this._resolved?(this.state="paused",this.holdTime=this.currentTime??0):this.pendingPlayState="paused"}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:a}=this.options;a&&a()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}get finished(){return this.currentFinishedPromise}};const n2=new Set(["opacity","clipPath","filter","transform"]),r2=vf((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),jg={anticipate:Nb,backInOut:Cb,circInOut:Rb};let Cg=class extends Kb{constructor(a){super(a);const{name:i,motionValue:o,element:u,keyframes:d}=this.options;this.resolver=new Pb(d,((f,m)=>this.onKeyframesResolved(f,m)),i,o,u),this.resolver.scheduleResolve()}initPlayback(a,i){let{duration:o=300,times:u,ease:d,type:f,motionValue:m,name:h,startTime:p}=this.options;if(!m.owner||!m.owner.current)return!1;var g;if(typeof d=="string"&&li()&&d in jg&&(d=jg[d]),g=this.options,yf(g.type)||g.type==="spring"||!Tb(g.ease)){const{onComplete:_,onUpdate:j,motionValue:C,element:w,...A}=this.options,D=(function(k,q){const Z=new Od({...q,keyframes:k,repeat:0,delay:0,isGenerator:!0});let V={done:!1,value:k[0]};const J=[];let Q=0;for(;!V.done&&Q<2e4;)V=Z.sample(Q),J.push(V.value),Q+=10;return{times:void 0,keyframes:J,duration:Q-10,ease:"linear"}})(a,A);(a=D.keyframes).length===1&&(a[1]=a[0]),o=D.duration,u=D.times,d=D.ease,f="keyframes"}const b=eT(m.owner.current,h,a,{...this.options,duration:o,times:u,ease:d});return b.startTime=p??this.calcStartTime(),this.pendingTimeline?(ug(b,this.pendingTimeline),this.pendingTimeline=void 0):b.onfinish=()=>{const{onComplete:_}=this.options;m.set(vs(a,this.options,i)),_&&_(),this.cancel(),this.resolveFinishedPromise()},{animation:b,duration:o,times:u,type:f,ease:d,keyframes:a}}get duration(){const{resolved:a}=this;if(!a)return 0;const{duration:i}=a;return pn(i)}get time(){const{resolved:a}=this;if(!a)return 0;const{animation:i}=a;return pn(i.currentTime||0)}set time(a){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.currentTime=hn(a)}get speed(){const{resolved:a}=this;if(!a)return 1;const{animation:i}=a;return i.playbackRate}get finished(){return this.resolved.animation.finished}set speed(a){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.playbackRate=a}get state(){const{resolved:a}=this;if(!a)return"idle";const{animation:i}=a;return i.playState}get startTime(){const{resolved:a}=this;if(!a)return null;const{animation:i}=a;return i.startTime}attachTimeline(a){if(this._resolved){const{resolved:i}=this;if(!i)return Jt;const{animation:o}=i;ug(o,a)}else this.pendingTimeline=a;return Jt}play(){if(this.isStopped)return;const{resolved:a}=this;if(!a)return;const{animation:i}=a;i.playState==="finished"&&this.updateFinishedPromise(),i.play()}pause(){const{resolved:a}=this;if(!a)return;const{animation:i}=a;i.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:a}=this;if(!a)return;const{animation:i,keyframes:o,duration:u,type:d,ease:f,times:m}=a;if(i.playState==="idle"||i.playState==="finished")return;if(this.time){const{motionValue:p,onUpdate:g,onComplete:b,element:_,...j}=this.options,C=new Od({...j,keyframes:o,duration:u,type:d,ease:f,times:m,isGenerator:!0}),w=hn(this.time);p.setWithVelocity(C.sample(w-10).value,C.sample(w).value,10)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:a}=this;a&&a.animation.finish()}cancel(){const{resolved:a}=this;a&&a.animation.cancel()}static supports(a){const{motionValue:i,name:o,repeatDelay:u,repeatType:d,damping:f,type:m}=a;if(!(i&&i.owner&&i.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:p}=i.owner.getProps();return r2()&&o&&n2.has(o)&&(o!=="transform"||!p)&&!h&&!u&&d!=="mirror"&&f!==0&&m!=="inertia"}};const a2={type:"spring",stiffness:500,damping:25,restSpeed:10},l2={type:"keyframes",duration:.8},i2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},o2=(n,{keyframes:a})=>a.length>2?l2:Pr.has(n)?n.startsWith("scale")?{type:"spring",stiffness:550,damping:a[1]===0?2*Math.sqrt(550):30,restSpeed:10}:a2:i2;function s2({when:n,delay:a,delayChildren:i,staggerChildren:o,staggerDirection:u,repeat:d,repeatType:f,repeatDelay:m,from:h,elapsed:p,...g}){return!!Object.keys(g).length}const Nf=(n,a,i,o={},u,d)=>f=>{const m=df(o,n)||{},h=m.delay||o.delay||0;let{elapsed:p=0}=o;p-=hn(h);let g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:a.getVelocity(),...m,delay:-p,onUpdate:_=>{a.set(_),m.onUpdate&&m.onUpdate(_)},onComplete:()=>{f(),m.onComplete&&m.onComplete()},name:n,motionValue:a,element:d?void 0:u};s2(m)||(g={...g,...o2(n,g)}),g.duration&&(g.duration=hn(g.duration)),g.repeatDelay&&(g.repeatDelay=hn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let b=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(b=!0)),g.allowFlatten=!m.type&&!m.ease,b&&!d&&a.get()!==void 0){const _=vs(g.keyframes,m);if(_!==void 0)return De.update((()=>{g.onUpdate(_),g.onComplete()})),new JE([])}return!d&&Cg.supports(g)?new Cg(g):new Od(g)};function u2({protectedKeys:n,needsAnimating:a},i){const o=n.hasOwnProperty(i)&&a[i]!==!0;return a[i]=!1,o}function Wb(n,a,{delay:i=0,transitionOverride:o,type:u}={}){let{transition:d=n.getDefaultTransition(),transitionEnd:f,...m}=a;o&&(d=o);const h=[],p=u&&n.animationState&&n.animationState.getState()[u];for(const g in m){const b=n.getValue(g,n.latestValues[g]??null),_=m[g];if(_===void 0||p&&u2(p,g))continue;const j={delay:i,...df(d||{},g)};let C=!1;if(window.MotionHandoffAnimation){const A=_b(n);if(A){const D=window.MotionHandoffAnimation(A,g,De);D!==null&&(j.startTime=D,C=!0)}}Td(n,g),b.start(Nf(g,b,_,n.shouldReduceMotion&&yb.has(g)?{type:!1}:j,n,C));const w=b.animation;w&&h.push(w)}return f&&Promise.all(h).then((()=>{De.update((()=>{f&&PE(n,f)}))})),h}function $d(n,a,i={}){const o=ri(n,a,i.type==="exit"?n.presenceContext?.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(u=i.transitionOverride);const d=o?()=>Promise.all(Wb(n,o,i)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:g,staggerDirection:b}=u;return(function(_,j,C=0,w=0,A=1,D){const k=[],q=(_.variantChildren.size-1)*w,Z=A===1?(V=0)=>V*w:(V=0)=>q-V*w;return Array.from(_.variantChildren).sort(c2).forEach(((V,J)=>{V.notify("AnimationStart",j),k.push($d(V,j,{...D,delay:C+Z(J)}).then((()=>V.notify("AnimationComplete",j))))})),Promise.all(k)})(n,a,p+h,g,b,i)}:()=>Promise.resolve(),{when:m}=u;if(m){const[h,p]=m==="beforeChildren"?[d,f]:[f,d];return h().then((()=>p()))}return Promise.all([d(),f(i.delay)])}function c2(n,a){return n.sortNodePosition(a)}function d2(n,a,i={}){let o;if(n.notify("AnimationStart",a),Array.isArray(a)){const u=a.map((d=>$d(n,d,i)));o=Promise.all(u)}else if(typeof a=="string")o=$d(n,a,i);else{const u=typeof a=="function"?ri(n,a,i.custom):a;o=Promise.all(Wb(n,u,i))}return o.then((()=>{n.notify("AnimationComplete",a)}))}function Ib(n,a){if(!Array.isArray(a))return!1;const i=a.length;if(i!==n.length)return!1;for(let o=0;o<i;o++)if(a[o]!==n[o])return!1;return!0}function ui(n){return typeof n=="string"||Array.isArray(n)}const Mf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Rf=["initial",...Mf],f2=Rf.length;function ex(n){if(!n)return;if(!n.isControllingVariants){const i=n.parent&&ex(n.parent)||{};return n.props.initial!==void 0&&(i.initial=n.props.initial),i}const a={};for(let i=0;i<f2;i++){const o=Rf[i],u=n.props[o];(ui(u)||u===!1)&&(a[o]=u)}return a}const m2=[...Mf].reverse(),h2=Mf.length;function p2(n){let a=(function(f){return m=>Promise.all(m.map((({animation:h,options:p})=>d2(f,h,p))))})(n),i=Ng(),o=!0;const u=f=>(m,h)=>{const p=ri(n,h,f==="exit"?n.presenceContext?.custom:void 0);if(p){const{transition:g,transitionEnd:b,..._}=p;m={...m,..._,...b}}return m};function d(f){const{props:m}=n,h=ex(n.parent)||{},p=[],g=new Set;let b={},_=1/0;for(let C=0;C<h2;C++){const w=m2[C],A=i[w],D=m[w]!==void 0?m[w]:h[w],k=ui(D),q=w===f?A.isActive:null;q===!1&&(_=C);let Z=D===h[w]&&D!==m[w]&&k;if(Z&&o&&n.manuallyAnimateOnMount&&(Z=!1),A.protectedKeys={...b},!A.isActive&&q===null||!D&&!A.prevProp||ps(D)||typeof D=="boolean")continue;const V=v2(A.prevProp,D);let J=V||w===f&&A.isActive&&!Z&&k||C>_&&k,Q=!1;const E=Array.isArray(D)?D:[D];let K=E.reduce(u(w),{});q===!1&&(K={});const{prevResolvedValues:le={}}=A,F={...le,...K},oe=R=>{J=!0,g.has(R)&&(Q=!0,g.delete(R)),A.needsAnimating[R]=!0;const W=n.getValue(R);W&&(W.liveStyle=!1)};for(const R in F){const W=K[R],re=le[R];if(b.hasOwnProperty(R))continue;let z=!1;z=Ed(W)&&Ed(re)?!Ib(W,re):W!==re,z?W!=null?oe(R):g.add(R):W!==void 0&&g.has(R)?oe(R):A.protectedKeys[R]=!0}A.prevProp=D,A.prevResolvedValues=K,A.isActive&&(b={...b,...K}),o&&n.blockInitialAnimation&&(J=!1),J&&(!(Z&&V)||Q)&&p.push(...E.map((R=>({animation:R,options:{type:w}}))))}if(g.size){const C={};if(typeof m.initial!="boolean"){const w=ri(n,Array.isArray(m.initial)?m.initial[0]:m.initial);w&&w.transition&&(C.transition=w.transition)}g.forEach((w=>{const A=n.getBaseTarget(w),D=n.getValue(w);D&&(D.liveStyle=!0),C[w]=A??null})),p.push({animation:C})}let j=!!p.length;return!o||m.initial!==!1&&m.initial!==m.animate||n.manuallyAnimateOnMount||(j=!1),o=!1,j?a(p):Promise.resolve()}return{animateChanges:d,setActive:function(f,m){if(i[f].isActive===m)return Promise.resolve();n.variantChildren?.forEach((p=>p.animationState?.setActive(f,m))),i[f].isActive=m;const h=d(f);for(const p in i)i[p].protectedKeys={};return h},setAnimateFunction:function(f){a=f(n)},getState:()=>i,reset:()=>{i=Ng(),o=!0}}}function v2(n,a){return typeof a=="string"?a!==n:!!Array.isArray(a)&&!Ib(a,n)}function Lr(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ng(){return{animate:Lr(!0),whileInView:Lr(),whileHover:Lr(),whileTap:Lr(),whileDrag:Lr(),whileFocus:Lr(),exit:Lr()}}let pr=class{constructor(a){this.isMounted=!1,this.node=a}update(){}},g2=class extends pr{constructor(a){super(a),a.animationState||(a.animationState=p2(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();ps(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:i}=this.node.prevProps||{};a!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},y2=0,b2=class extends pr{constructor(){super(...arguments),this.id=y2++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===o)return;const u=this.node.animationState.setActive("exit",!a);i&&!a&&u.then((()=>{i(this.id)}))}mount(){const{register:a,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),a&&(this.unmount=a(this.id))}unmount(){}};const x2={animation:{Feature:g2},exit:{Feature:b2}},rn={x:!1,y:!1};function tx(){return rn.x||rn.y}function _2(n){return n==="x"||n==="y"?rn[n]?null:(rn[n]=!0,()=>{rn[n]=!1}):rn.x||rn.y?null:(rn.x=rn.y=!0,()=>{rn.x=rn.y=!1})}function ci(n,a,i,o={passive:!0}){return n.addEventListener(a,i,o),()=>n.removeEventListener(a,i)}const zf=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function bi(n){return{point:{x:n.pageX,y:n.pageY}}}const S2=n=>a=>zf(a)&&n(a,bi(a));function Wl(n,a,i,o){return ci(n,a,S2(i),o)}function nx({top:n,left:a,right:i,bottom:o}){return{x:{min:a,max:i},y:{min:n,max:o}}}function E2({x:n,y:a}){return{top:a.min,right:n.max,bottom:a.max,left:n.min}}function T2(n,a){if(!a)return n;const i=a({x:n.left,y:n.top}),o=a({x:n.right,y:n.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function pt(n){return n.max-n.min}function w2(n,a,i){return Math.abs(n-a)<=i}function Mg(n,a,i,o=.5){n.origin=o,n.originPoint=Be(a.min,a.max,n.origin),n.scale=pt(i)/pt(a),n.translate=Be(i.min,i.max,n.origin)-n.originPoint,(n.scale>=.9999&&n.scale<=1.0001||isNaN(n.scale))&&(n.scale=1),(n.translate>=-.01&&n.translate<=.01||isNaN(n.translate))&&(n.translate=0)}function Il(n,a,i,o){Mg(n.x,a.x,i.x,o?o.originX:void 0),Mg(n.y,a.y,i.y,o?o.originY:void 0)}function Rg(n,a,i){n.min=i.min+a.min,n.max=n.min+pt(a)}function A2(n,a,i){Rg(n.x,a.x,i.x),Rg(n.y,a.y,i.y)}function zg(n,a,i){n.min=a.min-i.min,n.max=n.min+pt(a)}function ei(n,a,i){zg(n.x,a.x,i.x),zg(n.y,a.y,i.y)}const La=()=>({x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}),Qe=()=>({x:{min:0,max:0},y:{min:0,max:0}});function Kt(n){return[n("x"),n("y")]}function Ic(n){return n===void 0||n===1}function Ld({scale:n,scaleX:a,scaleY:i}){return!Ic(n)||!Ic(a)||!Ic(i)}function Br(n){return Ld(n)||rx(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function rx(n){return Dg(n.x)||Dg(n.y)}function Dg(n){return n&&n!=="0%"}function os(n,a,i){return i+a*(n-i)}function Og(n,a,i,o,u){return u!==void 0&&(n=os(n,u,o)),os(n,i,o)+a}function Ud(n,a=0,i=1,o,u){n.min=Og(n.min,a,i,o,u),n.max=Og(n.max,a,i,o,u)}function ax(n,{x:a,y:i}){Ud(n.x,a.translate,a.scale,a.originPoint),Ud(n.y,i.translate,i.scale,i.originPoint)}const $g=.999999999999,Lg=1.0000000000001;function j2(n,a,i,o=!1){const u=i.length;if(!u)return;let d,f;a.x=a.y=1;for(let m=0;m<u;m++){d=i[m],f=d.projectionDelta;const{visualElement:h}=d.options;h&&h.props.style&&h.props.style.display==="contents"||(o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Ba(n,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(a.x*=f.x.scale,a.y*=f.y.scale,ax(n,f)),o&&Br(d.latestValues)&&Ba(n,d.latestValues))}a.x<Lg&&a.x>$g&&(a.x=1),a.y<Lg&&a.y>$g&&(a.y=1)}function Ua(n,a){n.min=n.min+a,n.max=n.max+a}function Ug(n,a,i,o,u=.5){Ud(n,a,i,Be(n.min,n.max,u),o)}function Ba(n,a){Ug(n.x,a.x,a.scaleX,a.scale,a.originX),Ug(n.y,a.y,a.scaleY,a.scale,a.originY)}function lx(n,a){return nx(T2(n.getBoundingClientRect(),a))}function C2(n,a,i){const o=lx(n,i),{scroll:u}=a;return u&&(Ua(o.x,u.offset.x),Ua(o.y,u.offset.y)),o}const ix=({current:n})=>n?n.ownerDocument.defaultView:null;function Va(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const Bg=(n,a)=>Math.abs(n-a);function N2(n,a){const i=Bg(n.x,a.x),o=Bg(n.y,a.y);return Math.sqrt(i**2+o**2)}let ox=class{constructor(a,i,{transformPagePoint:o,contextWindow:u,dragSnapToOrigin:d=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const g=td(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,_=N2(g.offset,{x:0,y:0})>=3;if(!b&&!_)return;const{point:j}=g,{timestamp:C}=st;this.history.push({...j,timestamp:C});const{onStart:w,onMove:A}=this.handlers;b||(w&&w(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,g)},this.handlePointerMove=(g,b)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=ed(b,this.transformPagePoint),De.update(this.updatePoint,!0)},this.handlePointerUp=(g,b)=>{this.end();const{onEnd:_,onSessionEnd:j,resumeAnimation:C}=this.handlers;if(this.dragSnapToOrigin&&C&&C(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const w=td(g.type==="pointercancel"?this.lastMoveEventInfo:ed(b,this.transformPagePoint),this.history);this.startEvent&&_&&_(g,w),j&&j(g,w)},!zf(a))return;this.dragSnapToOrigin=d,this.handlers=i,this.transformPagePoint=o,this.contextWindow=u||window;const f=ed(bi(a),this.transformPagePoint),{point:m}=f,{timestamp:h}=st;this.history=[{...m,timestamp:h}];const{onSessionStart:p}=i;p&&p(a,td(f,this.history)),this.removeListeners=yi(Wl(this.contextWindow,"pointermove",this.handlePointerMove),Wl(this.contextWindow,"pointerup",this.handlePointerUp),Wl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),mr(this.updatePoint)}};function ed(n,a){return a?{point:a(n.point)}:n}function Vg(n,a){return{x:n.x-a.x,y:n.y-a.y}}function td({point:n},a){return{point:n,delta:Vg(n,sx(a)),offset:Vg(n,M2(a)),velocity:R2(a,.1)}}function M2(n){return n[0]}function sx(n){return n[n.length-1]}function R2(n,a){if(n.length<2)return{x:0,y:0};let i=n.length-1,o=null;const u=sx(n);for(;i>=0&&(o=n[i],!(u.timestamp-o.timestamp>hn(a)));)i--;if(!o)return{x:0,y:0};const d=pn(u.timestamp-o.timestamp);if(d===0)return{x:0,y:0};const f={x:(u.x-o.x)/d,y:(u.y-o.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function z2(n,{min:a,max:i},o){return a!==void 0&&n<a?n=o?Be(a,n,o.min):Math.max(n,a):i!==void 0&&n>i&&(n=o?Be(i,n,o.max):Math.min(n,i)),n}function Hg(n,a,i){return{min:a!==void 0?n.min+a:void 0,max:i!==void 0?n.max+i-(n.max-n.min):void 0}}function D2(n,{top:a,left:i,bottom:o,right:u}){return{x:Hg(n.x,i,u),y:Hg(n.y,a,o)}}function kg(n,a){let i=a.min-n.min,o=a.max-n.max;return a.max-a.min<n.max-n.min&&([i,o]=[o,i]),{min:i,max:o}}function O2(n,a){return{x:kg(n.x,a.x),y:kg(n.y,a.y)}}function $2(n,a){let i=.5;const o=pt(n),u=pt(a);return u>o?i=si(a.min,a.max-o,n.min):o>u&&(i=si(n.min,n.max-u,a.min)),Un(0,1,i)}function L2(n,a){const i={};return a.min!==void 0&&(i.min=a.min-n.min),a.max!==void 0&&(i.max=a.max-n.min),i}const ux=.35;function U2(n=.35){return n===!1?n=0:n===!0&&(n=ux),{x:Yg(n,"left","right"),y:Yg(n,"top","bottom")}}function Yg(n,a,i){return{min:qg(n,a),max:qg(n,i)}}function qg(n,a){return typeof n=="number"?n:n[a]||0}const B2=new WeakMap;let V2=class{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.visualElement=a}start(a,{snapToCursor:i=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const{dragSnapToOrigin:u}=this.getProps();this.panSession=new ox(a,{onSessionStart:d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(bi(d).point)},onStart:(d,f)=>{const{drag:m,dragPropagation:h,onDragStart:p}=this.getProps();if(m&&!h&&(this.openDragLock&&this.openDragLock(),this.openDragLock=_2(m),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Kt((b=>{let _=this.getAxisMotionValue(b).get()||0;if(vn.test(_)){const{projection:j}=this.visualElement;if(j&&j.layout){const C=j.layout.layoutBox[b];C&&(_=pt(C)*(parseFloat(_)/100))}}this.originPoint[b]=_})),p&&De.postRender((()=>p(d,f))),Td(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},onMove:(d,f)=>{const{dragPropagation:m,dragDirectionLock:h,onDirectionLock:p,onDrag:g}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:b}=f;if(h&&this.currentDirection===null)return this.currentDirection=(function(_,j=10){let C=null;return Math.abs(_.y)>j?C="y":Math.abs(_.x)>j&&(C="x"),C})(b),void(this.currentDirection!==null&&p&&p(this.currentDirection));this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),g&&g(d,f)},onSessionEnd:(d,f)=>this.stop(d,f),resumeAnimation:()=>Kt((d=>this.getAnimationState(d)==="paused"&&this.getAxisMotionValue(d).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:ix(this.visualElement)})}stop(a,i){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:u}=i;this.startAnimation(u);const{onDragEnd:d}=this.getProps();d&&De.postRender((()=>d(a,i)))}cancel(){this.isDragging=!1;const{projection:a,animationState:i}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(a,i,o){const{drag:u}=this.getProps();if(!o||!Go(a,u,this.currentDirection))return;const d=this.getAxisMotionValue(a);let f=this.originPoint[a]+o[a];this.constraints&&this.constraints[a]&&(f=z2(f,this.constraints[a],this.elastic[a])),d.set(f)}resolveConstraints(){const{dragConstraints:a,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;a&&Va(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!a||!o)&&D2(o.layoutBox,a),this.elastic=U2(i),u!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Kt((d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=L2(o.layoutBox[d],this.constraints[d]))}))}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:i}=this.getProps();if(!a||!Va(a))return!1;const o=a.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const d=C2(o,u.root,this.visualElement.getTransformPagePoint());let f=O2(u.layout.layoutBox,d);if(i){const m=i(E2(f));this.hasMutatedConstraints=!!m,m&&(f=nx(m))}return f}startAnimation(a){const{drag:i,dragMomentum:o,dragElastic:u,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:m}=this.getProps(),h=this.constraints||{},p=Kt((g=>{if(!Go(g,i,this.currentDirection))return;let b=h&&h[g]||{};f&&(b={min:0,max:0});const _=u?200:1e6,j=u?40:1e7,C={type:"inertia",velocity:o?a[g]:0,bounceStiffness:_,bounceDamping:j,timeConstant:750,restDelta:1,restSpeed:10,...d,...b};return this.startAxisValueAnimation(g,C)}));return Promise.all(p).then(m)}startAxisValueAnimation(a,i){const o=this.getAxisMotionValue(a);return Td(this.visualElement,a),o.start(Nf(a,o,0,i,this.visualElement,!1))}stopAnimation(){Kt((a=>this.getAxisMotionValue(a).stop()))}pauseAnimation(){Kt((a=>this.getAxisMotionValue(a).animation?.pause()))}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const i=`_drag${a.toUpperCase()}`,o=this.visualElement.getProps();return o[i]||this.visualElement.getValue(a,(o.initial?o.initial[a]:void 0)||0)}snapToCursor(a){Kt((i=>{const{drag:o}=this.getProps();if(!Go(i,o,this.currentDirection))return;const{projection:u}=this.visualElement,d=this.getAxisMotionValue(i);if(u&&u.layout){const{min:f,max:m}=u.layout.layoutBox[i];d.set(a[i]-Be(f,m,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!Va(i)||!o||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Kt((f=>{const m=this.getAxisMotionValue(f);if(m&&this.constraints!==!1){const h=m.get();u[f]=$2({min:h,max:h},this.constraints[f])}}));const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Kt((f=>{if(!Go(f,a,null))return;const m=this.getAxisMotionValue(f),{min:h,max:p}=this.constraints[f];m.set(Be(h,p,u[f]))}))}addListeners(){if(!this.visualElement.current)return;B2.set(this.visualElement,this);const a=this.visualElement.current,i=Wl(a,"pointerdown",(h=>{const{drag:p,dragListener:g=!0}=this.getProps();p&&g&&this.start(h)})),o=()=>{const{dragConstraints:h}=this.getProps();Va(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,d=u.addEventListener("measure",o);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),De.read(o);const f=ci(window,"resize",(()=>this.scalePositionWithinConstraints())),m=u.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Kt((g=>{const b=this.getAxisMotionValue(g);b&&(this.originPoint[g]+=h[g].translate,b.set(b.get()+h[g].translate))})),this.visualElement.render())}));return()=>{f(),i(),d(),m&&m()}}getProps(){const a=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:u=!1,dragConstraints:d=!1,dragElastic:f=ux,dragMomentum:m=!0}=a;return{...a,drag:i,dragDirectionLock:o,dragPropagation:u,dragConstraints:d,dragElastic:f,dragMomentum:m}}};function Go(n,a,i){return!(a!==!0&&a!==n||i!==null&&i!==n)}let H2=class extends pr{constructor(a){super(a),this.removeGroupControls=Jt,this.removeListeners=Jt,this.controls=new V2(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Jt}unmount(){this.removeGroupControls(),this.removeListeners()}};const Gg=n=>(a,i)=>{n&&De.postRender((()=>n(a,i)))};let k2=class extends pr{constructor(){super(...arguments),this.removePointerDownListener=Jt}onPointerDown(a){this.session=new ox(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ix(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:i,onPan:o,onPanEnd:u}=this.node.getProps();return{onSessionStart:Gg(a),onStart:Gg(i),onMove:o,onEnd:(d,f)=>{delete this.session,u&&De.postRender((()=>u(d,f)))}}}mount(){this.removePointerDownListener=Wl(this.node.current,"pointerdown",(a=>this.onPointerDown(a)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}};const{schedule:Df}=gb(queueMicrotask,!1),cx=S.createContext({}),Jo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Xg(n,a){return a.max===a.min?0:n/(a.max-a.min)*100}const Xl={correct:(n,a)=>{if(!a.target)return n;if(typeof n=="string"){if(!ue.test(n))return n;n=parseFloat(n)}return`${Xg(n,a.target.x)}% ${Xg(n,a.target.y)}%`}},Y2={correct:(n,{treeScale:a,projectionDelta:i})=>{const o=n,u=hr.parse(n);if(u.length>5)return o;const d=hr.createTransformer(n),f=typeof u[0]!="number"?1:0,m=i.x.scale*a.x,h=i.y.scale*a.y;u[0+f]/=m,u[1+f]/=h;const p=Be(m,h,.5);return typeof u[2+f]=="number"&&(u[2+f]/=p),typeof u[3+f]=="number"&&(u[3+f]/=p),d(u)}},di={};function q2(n){for(const a in n)di[a]=n[a],wf(a)&&(di[a].isCSSVariable=!0)}let G2=class extends S.Component{componentDidMount(){const{visualElement:a,layoutGroup:i,switchLayoutGroup:o,layoutId:u}=this.props,{projection:d}=a;q2(X2),d&&(i.group&&i.group.add(d),o&&o.register&&u&&o.register(d),d.root.didUpdate(),d.addEventListener("animationComplete",(()=>{this.safeToRemove()})),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),Jo.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:i,visualElement:o,drag:u,isPresent:d}=this.props,f=o.projection;return f&&(f.isPresent=d,u||a.layoutDependency!==i||i===void 0||a.isPresent!==d?f.willUpdate():this.safeToRemove(),a.isPresent!==d&&(d?f.promote():f.relegate()||De.postRender((()=>{const m=f.getStack();m&&m.members.length||this.safeToRemove()})))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),Df.postRender((()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:a,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:u}=a;u&&(u.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(u),o&&o.deregister&&o.deregister(u))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}};function dx(n){const[a,i]=UE(),o=S.useContext(pb);return y.jsx(G2,{...n,layoutGroup:o,switchLayoutGroup:S.useContext(cx),isPresent:a,safeToRemove:i})}const X2={borderRadius:{...Xl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Xl,borderTopRightRadius:Xl,borderBottomLeftRadius:Xl,borderBottomRightRadius:Xl,boxShadow:Y2};function P2(n,a,i){const o=dt(n)?n:ai(n);return o.start(Nf("",o,a,i)),o.animation}function K2(n){return n instanceof SVGElement&&n.tagName!=="svg"}const Q2=(n,a)=>n.depth-a.depth;let Z2=class{constructor(){this.children=[],this.isDirty=!1}add(a){ff(this.children,a),this.isDirty=!0}remove(a){mf(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(Q2),this.isDirty=!1,this.children.forEach(a)}};function F2(n,a){const i=mn.now(),o=({timestamp:u})=>{const d=u-i;d>=a&&(mr(o),n(d-a))};return De.read(o,!0),()=>mr(o)}function Wo(n){const a=dt(n)?n.get():n;return qE(a)?a.toValue():a}const fx=["TopLeft","TopRight","BottomLeft","BottomRight"],J2=fx.length,Pg=n=>typeof n=="string"?parseFloat(n):n,Kg=n=>typeof n=="number"||ue.test(n);function W2(n,a,i,o,u,d){u?(n.opacity=Be(0,i.opacity!==void 0?i.opacity:1,I2(o)),n.opacityExit=Be(a.opacity!==void 0?a.opacity:1,0,ew(o))):d&&(n.opacity=Be(a.opacity!==void 0?a.opacity:1,i.opacity!==void 0?i.opacity:1,o));for(let f=0;f<J2;f++){const m=`border${fx[f]}Radius`;let h=Qg(a,m),p=Qg(i,m);h===void 0&&p===void 0||(h||(h=0),p||(p=0),h===0||p===0||Kg(h)===Kg(p)?(n[m]=Math.max(Be(Pg(h),Pg(p),o),0),(vn.test(p)||vn.test(h))&&(n[m]+="%")):n[m]=p)}(a.rotate||i.rotate)&&(n.rotate=Be(a.rotate||0,i.rotate||0,o))}function Qg(n,a){return n[a]!==void 0?n[a]:n.borderRadius}const I2=mx(0,.5,Mb),ew=mx(.5,.95,Jt);function mx(n,a,i){return o=>o<n?0:o>a?1:i(si(n,a,o))}function Zg(n,a){n.min=a.min,n.max=a.max}function Pt(n,a){Zg(n.x,a.x),Zg(n.y,a.y)}function Fg(n,a){n.translate=a.translate,n.scale=a.scale,n.originPoint=a.originPoint,n.origin=a.origin}function Jg(n,a,i,o,u){return n=os(n-=a,1/i,o),u!==void 0&&(n=os(n,1/u,o)),n}function tw(n,a=0,i=1,o=.5,u,d=n,f=n){if(vn.test(a)&&(a=parseFloat(a),a=Be(f.min,f.max,a/100)-f.min),typeof a!="number")return;let m=Be(d.min,d.max,o);n===d&&(m-=a),n.min=Jg(n.min,a,i,m,u),n.max=Jg(n.max,a,i,m,u)}function Wg(n,a,[i,o,u],d,f){tw(n,a[i],a[o],a[u],a.scale,d,f)}const nw=["x","scaleX","originX"],rw=["y","scaleY","originY"];function Ig(n,a,i,o){Wg(n.x,a,nw,i?i.x:void 0,o?o.x:void 0),Wg(n.y,a,rw,i?i.y:void 0,o?o.y:void 0)}function ey(n){return n.translate===0&&n.scale===1}function hx(n){return ey(n.x)&&ey(n.y)}function ty(n,a){return n.min===a.min&&n.max===a.max}function aw(n,a){return ty(n.x,a.x)&&ty(n.y,a.y)}function ny(n,a){return Math.round(n.min)===Math.round(a.min)&&Math.round(n.max)===Math.round(a.max)}function px(n,a){return ny(n.x,a.x)&&ny(n.y,a.y)}function ry(n){return pt(n.x)/pt(n.y)}function ay(n,a){return n.translate===a.translate&&n.scale===a.scale&&n.originPoint===a.originPoint}let lw=class{constructor(){this.members=[]}add(a){ff(this.members,a),a.scheduleRender()}remove(a){if(mf(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(a){const i=this.members.findIndex((u=>a===u));if(i===0)return!1;let o;for(let u=i;u>=0;u--){const d=this.members[u];if(d.isPresent!==!1){o=d;break}}return!!o&&(this.promote(o),!0)}promote(a,i){const o=this.lead;if(a!==o&&(this.prevLead=o,this.lead=a,a.show(),o)){o.instance&&o.scheduleRender(),a.scheduleRender(),a.resumeFrom=o,i&&(a.resumeFrom.preserveOpacity=!0),o.snapshot&&(a.snapshot=o.snapshot,a.snapshot.latestValues=o.animationValues||o.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:u}=a.options;u===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach((a=>{const{options:i,resumingFrom:o}=a;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()}))}scheduleRender(){this.members.forEach((a=>{a.instance&&a.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}};function iw(n,a,i){let o="";const u=n.x.translate/a.x,d=n.y.translate/a.y,f=i?.z||0;if((u||d||f)&&(o=`translate3d(${u}px, ${d}px, ${f}px) `),a.x===1&&a.y===1||(o+=`scale(${1/a.x}, ${1/a.y}) `),i){const{transformPerspective:p,rotate:g,rotateX:b,rotateY:_,skewX:j,skewY:C}=i;p&&(o=`perspective(${p}px) ${o}`),g&&(o+=`rotate(${g}deg) `),b&&(o+=`rotateX(${b}deg) `),_&&(o+=`rotateY(${_}deg) `),j&&(o+=`skewX(${j}deg) `),C&&(o+=`skewY(${C}deg) `)}const m=n.x.scale*a.x,h=n.y.scale*a.y;return m===1&&h===1||(o+=`scale(${m}, ${h})`),o||"none"}const nd=["","X","Y","Z"],ow={visibility:"hidden"};let sw=0;function rd(n,a,i,o){const{latestValues:u}=a;u[n]&&(i[n]=u[n],a.setStaticValue(n,0),o&&(o[n]=0))}function vx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:a}=n.options;if(!a)return;const i=_b(a);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:u,layoutId:d}=n.options;window.MotionCancelOptimisedAnimation(i,"transform",De,!(u||d))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&vx(o)}function gx({attachResizeListener:n,defaultParent:a,measureScroll:i,checkIsScrollRoot:o,resetTransform:u}){return class{constructor(d={},f=a?.()){this.id=sw++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(dw),this.nodes.forEach(vw),this.nodes.forEach(gw),this.nodes.forEach(fw)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new Z2)}addEventListener(d,f){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new hf),this.eventHandlers.get(d).add(f)}notifyListeners(d,...f){const m=this.eventHandlers.get(d);m&&m.notify(...f)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=K2(d),this.instance=d;const{layoutId:m,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(h||m)&&(this.isLayoutDirty=!0),n){let g;const b=()=>this.root.updateBlockedByResize=!1;n(d,(()=>{this.root.updateBlockedByResize=!0,g&&g(),g=F2(b,250),Jo.hasAnimatedSinceResize&&(Jo.hasAnimatedSinceResize=!1,this.nodes.forEach(iy))}))}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&p&&(m||h)&&this.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:b,hasRelativeLayoutChanged:_,layout:j})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const C=this.options.transition||p.getDefaultTransition()||Sw,{onLayoutAnimationStart:w,onLayoutAnimationComplete:A}=p.getProps(),D=!this.targetLayout||!px(this.targetLayout,j),k=!b&&_;if(this.options.layoutRoot||this.resumeFrom||k||b&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,k);const q={...df(C,"layout"),onPlay:w,onComplete:A};(p.shouldReduceMotion||this.options.layoutRoot)&&(q.delay=0,q.type=!1),this.startAnimation(q)}else b||iy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=j}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,mr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(yw),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&vx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const g=this.path[p];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:f,layout:m}=this.options;if(f===void 0&&!m)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(ly);this.isUpdating||this.nodes.forEach(hw),this.isUpdating=!1,this.nodes.forEach(pw),this.nodes.forEach(uw),this.nodes.forEach(cw),this.clearAllSnapshots();const d=mn.now();st.delta=Un(0,1e3/60,d-st.timestamp),st.timestamp=d,st.isProcessing=!0,Zc.update.process(st),Zc.preRender.process(st),Zc.render.process(st),st.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Df.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(mw),this.sharedNodes.forEach(bw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,De.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){De.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||pt(this.snapshot.measuredBox.x)||pt(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty)))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(f=!1),f){const m=o(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:m,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!hx(this.projectionDelta),m=this.getTransformTemplate(),h=m?m(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;d&&(f||Br(this.latestValues)||p)&&(u(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const f=this.measurePageBox();let m=this.removeElementScroll(f);var h;return d&&(m=this.removeTransform(m)),dy((h=m).x),dy(h.y),{animationId:this.root.animationId,measuredBox:f,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return Qe();const f=d.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Ew))){const{scroll:m}=this.root;m&&(Ua(f.x,m.offset.x),Ua(f.y,m.offset.y))}return f}removeElementScroll(d){const f=Qe();if(Pt(f,d),this.scroll?.wasRoot)return f;for(let m=0;m<this.path.length;m++){const h=this.path[m],{scroll:p,options:g}=h;h!==this.root&&p&&g.layoutScroll&&(p.wasRoot&&Pt(f,d),Ua(f.x,p.offset.x),Ua(f.y,p.offset.y))}return f}applyTransform(d,f=!1){const m=Qe();Pt(m,d);for(let h=0;h<this.path.length;h++){const p=this.path[h];!f&&p.options.layoutScroll&&p.scroll&&p!==p.root&&Ba(m,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Br(p.latestValues)&&Ba(m,p.latestValues)}return Br(this.latestValues)&&Ba(m,this.latestValues),m}removeTransform(d){const f=Qe();Pt(f,d);for(let m=0;m<this.path.length;m++){const h=this.path[m];if(!h.instance||!Br(h.latestValues))continue;Ld(h.latestValues)&&h.updateSnapshot();const p=Qe(),g=h.measurePageBox();Pt(p,g),Ig(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return Br(this.latestValues)&&Ig(f,this.latestValues),f}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade===void 0||d.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==f;if(!(d||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:p}=this.options;if(this.layout&&(h||p)){if(this.resolvedRelativeTargetAt=st.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),ei(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Pt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if((this.relativeTarget||this.targetDelta)&&(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),A2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Pt(this.target,this.layout.layoutBox),ax(this.target,this.targetDelta)):Pt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),ei(this.relativeTargetOrigin,this.target,g.target),Pt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(this.parent&&!Ld(this.parent.latestValues)&&!rx(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const d=this.getLead(),f=!!this.resumingFrom||this!==d;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===st.timestamp&&(m=!1),m)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!h&&!p)return;Pt(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,b=this.treeScale.y;j2(this.layoutCorrected,this.treeScale,this.path,f),!d.layout||d.target||this.treeScale.x===1&&this.treeScale.y===1||(d.target=d.layout.layoutBox,d.targetWithTransforms=Qe());const{target:_}=d;_?(this.projectionDelta&&this.prevProjectionDelta?(Fg(this.prevProjectionDelta.x,this.projectionDelta.x),Fg(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),Il(this.projectionDelta,this.layoutCorrected,_,this.latestValues),this.treeScale.x===g&&this.treeScale.y===b&&ay(this.projectionDelta.x,this.prevProjectionDelta.x)&&ay(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.visualElement?.scheduleRender(),d){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=La(),this.projectionDelta=La(),this.projectionDeltaWithTransform=La()}setAnimationOrigin(d,f=!1){const m=this.snapshot,h=m?m.latestValues:{},p={...this.latestValues},g=La();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const b=Qe(),_=(m?m.source:void 0)!==(this.layout?this.layout.source:void 0),j=this.getStack(),C=!j||j.members.length<=1,w=!!(_&&!C&&this.options.crossfade===!0&&!this.path.some(_w));let A;this.animationProgress=0,this.mixTargetDelta=D=>{const k=D/1e3;oy(g.x,d.x,k),oy(g.y,d.y,k),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ei(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox),xw(this.relativeTarget,this.relativeTargetOrigin,b,k),A&&aw(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=Qe()),Pt(A,this.relativeTarget)),_&&(this.animationValues=p,W2(p,h,this.latestValues,k,w,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(mr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=De.update((()=>{Jo.hasAnimatedSinceResize=!0,this.currentAnimation=P2(0,1e3,{...d,onUpdate:f=>{this.mixTargetDelta(f),d.onUpdate&&d.onUpdate(f)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:f,target:m,layout:h,latestValues:p}=d;if(f&&m&&h){if(this!==d&&this.layout&&h&&yx(this.options.animationType,this.layout.layoutBox,h.layoutBox)){m=this.target||Qe();const g=pt(this.layout.layoutBox.x);m.x.min=d.target.x.min,m.x.max=m.x.min+g;const b=pt(this.layout.layoutBox.y);m.y.min=d.target.y.min,m.y.max=m.y.min+b}Pt(f,m),Ba(f,p),Il(this.projectionDeltaWithTransform,this.layoutCorrected,f,p)}}registerSharedNode(d,f){this.sharedNodes.has(d)||this.sharedNodes.set(d,new lw),this.sharedNodes.get(d).add(f);const m=f.options.initialPromotionConfig;f.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(f):void 0})}isLead(){const d=this.getStack();return!d||d.lead===this}getLead(){const{layoutId:d}=this.options;return d&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:d}=this.options;return d?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:f,preserveFollowOpacity:m}={}){const h=this.getStack();h&&h.promote(this,m),d&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const d=this.getStack();return!!d&&d.relegate(this)}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let f=!1;const{latestValues:m}=d;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(f=!0),!f)return;const h={};m.z&&rd("z",d,h,this.animationValues);for(let p=0;p<nd.length;p++)rd(`rotate${nd[p]}`,d,h,this.animationValues),rd(`skew${nd[p]}`,d,h,this.animationValues);d.render();for(const p in h)d.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);d.scheduleRender()}getProjectionStyles(d){if(!this.instance||this.isSVG)return;if(!this.isVisible)return ow;const f={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=Wo(d?.pointerEvents)||"",f.transform=m?m(this.latestValues,""):"none",f;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=Wo(d?.pointerEvents)||""),this.hasProjected&&!Br(this.latestValues)&&(_.transform=m?m({},""):"none",this.hasProjected=!1),_}const p=h.animationValues||h.latestValues;this.applyTransformsToTarget(),f.transform=iw(this.projectionDeltaWithTransform,this.treeScale,p),m&&(f.transform=m(p,f.transform));const{x:g,y:b}=this.projectionDelta;f.transformOrigin=`${100*g.origin}% ${100*b.origin}% 0`,h.animationValues?f.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:f.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const _ in di){if(p[_]===void 0)continue;const{correct:j,applyTo:C,isCSSVariable:w}=di[_],A=f.transform==="none"?p[_]:j(p[_],h);if(C){const D=C.length;for(let k=0;k<D;k++)f[C[k]]=A}else w?this.options.visualElement.renderState.vars[_]=A:f[_]=A}return this.options.layoutId&&(f.pointerEvents=h===this?Wo(d?.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((d=>d.currentAnimation?.stop())),this.root.nodes.forEach(ly),this.root.sharedNodes.clear()}}}function uw(n){n.updateLayout()}function cw(n){const a=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&a&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:u}=n.options,d=a.source!==n.layout.source;u==="size"?Kt((g=>{const b=d?a.measuredBox[g]:a.layoutBox[g],_=pt(b);b.min=i[g].min,b.max=b.min+_})):yx(u,a.layoutBox,i)&&Kt((g=>{const b=d?a.measuredBox[g]:a.layoutBox[g],_=pt(i[g]);b.max=b.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+_)}));const f=La();Il(f,i,a.layoutBox);const m=La();d?Il(m,n.applyTransform(o,!0),a.measuredBox):Il(m,i,a.layoutBox);const h=!hx(f);let p=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:b,layout:_}=g;if(b&&_){const j=Qe();ei(j,a.layoutBox,b.layoutBox);const C=Qe();ei(C,i,_.layoutBox),px(j,C)||(p=!0),g.options.layoutRoot&&(n.relativeTarget=C,n.relativeTargetOrigin=j,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:a,delta:m,layoutDelta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function dw(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function fw(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function mw(n){n.clearSnapshot()}function ly(n){n.clearMeasurements()}function hw(n){n.isLayoutDirty=!1}function pw(n){const{visualElement:a}=n.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),n.resetTransform()}function iy(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function vw(n){n.resolveTargetDelta()}function gw(n){n.calcProjection()}function yw(n){n.resetSkewAndRotation()}function bw(n){n.removeLeadSnapshot()}function oy(n,a,i){n.translate=Be(a.translate,0,i),n.scale=Be(a.scale,1,i),n.origin=a.origin,n.originPoint=a.originPoint}function sy(n,a,i,o){n.min=Be(a.min,i.min,o),n.max=Be(a.max,i.max,o)}function xw(n,a,i,o){sy(n.x,a.x,i.x,o),sy(n.y,a.y,i.y,o)}function _w(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Sw={duration:.45,ease:[.4,0,.1,1]},uy=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),cy=uy("applewebkit/")&&!uy("chrome/")?Math.round:Jt;function dy(n){n.min=cy(n.min),n.max=cy(n.max)}function yx(n,a,i){return n==="position"||n==="preserve-aspect"&&!w2(ry(a),ry(i),.2)}function Ew(n){return n!==n.root&&n.scroll?.wasRoot}const Tw=gx({attachResizeListener:(n,a)=>ci(n,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ad={current:void 0},bx=gx({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!ad.current){const n=new Tw({});n.mount(window),n.setOptions({layoutScroll:!0}),ad.current=n}return ad.current},resetTransform:(n,a)=>{n.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),ww={pan:{Feature:k2},drag:{Feature:H2,ProjectionNode:bx,MeasureLayout:dx}};function Aw(n,a,i){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let o=document;const u=i?.[n]??o.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n)}function xx(n,a){const i=Aw(n),o=new AbortController;return[i,{passive:!0,...a,signal:o.signal},()=>o.abort()]}function fy(n){return!(n.pointerType==="touch"||tx())}function jw(n,a,i={}){const[o,u,d]=xx(n,i),f=m=>{if(!fy(m))return;const{target:h}=m,p=a(h,m);if(typeof p!="function"||!h)return;const g=b=>{fy(b)&&(p(b),h.removeEventListener("pointerleave",g))};h.addEventListener("pointerleave",g,u)};return o.forEach((m=>{m.addEventListener("pointerenter",f,u)})),d}function my(n,a,i){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",i==="Start");const u=o["onHover"+i];u&&De.postRender((()=>u(a,bi(a))))}let Cw=class extends pr{mount(){const{current:a}=this.node;a&&(this.unmount=jw(a,((i,o)=>(my(this.node,o,"Start"),u=>my(this.node,u,"End")))))}unmount(){}},Nw=class extends pr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}a&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=yi(ci(this.node.current,"focus",(()=>this.onFocus())),ci(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}};const _x=(n,a)=>!!a&&(n===a||_x(n,a.parentElement)),Mw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Rw(n){return Mw.has(n.tagName)||n.tabIndex!==-1}const Fl=new WeakSet;function hy(n){return a=>{a.key==="Enter"&&n(a)}}function ld(n,a){n.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const zw=(n,a)=>{const i=n.currentTarget;if(!i)return;const o=hy((()=>{if(Fl.has(i))return;ld(i,"down");const u=hy((()=>{ld(i,"up")}));i.addEventListener("keyup",u,a),i.addEventListener("blur",(()=>ld(i,"cancel")),a)}));i.addEventListener("keydown",o,a),i.addEventListener("blur",(()=>i.removeEventListener("keydown",o)),a)};function py(n){return zf(n)&&!tx()}function Dw(n,a,i={}){const[o,u,d]=xx(n,i),f=m=>{const h=m.currentTarget;if(!py(m)||Fl.has(h))return;Fl.add(h);const p=a(h,m),g=(j,C)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",_),py(j)&&Fl.has(h)&&(Fl.delete(h),typeof p=="function"&&p(j,{success:C}))},b=j=>{g(j,h===window||h===document||i.useGlobalTarget||_x(h,j.target))},_=j=>{g(j,!1)};window.addEventListener("pointerup",b,u),window.addEventListener("pointercancel",_,u)};return o.forEach((m=>{(i.useGlobalTarget?window:m).addEventListener("pointerdown",f,u),m instanceof HTMLElement&&(m.addEventListener("focus",(h=>zw(h,u))),Rw(m)||m.hasAttribute("tabindex")||(m.tabIndex=0))})),d}function vy(n,a,i){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",i==="Start");const u=o["onTap"+(i==="End"?"":i)];u&&De.postRender((()=>u(a,bi(a))))}let Ow=class extends pr{mount(){const{current:a}=this.node;a&&(this.unmount=Dw(a,((i,o)=>(vy(this.node,o,"Start"),(u,{success:d})=>vy(this.node,u,d?"End":"Cancel"))),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}};const Bd=new WeakMap,id=new WeakMap,$w=n=>{const a=Bd.get(n.target);a&&a(n)},Lw=n=>{n.forEach($w)};function Uw(n,a,i){const o=(function({root:u,...d}){const f=u||document;id.has(f)||id.set(f,{});const m=id.get(f),h=JSON.stringify(d);return m[h]||(m[h]=new IntersectionObserver(Lw,{root:u,...d})),m[h]})(a);return Bd.set(n,i),o.observe(n),()=>{Bd.delete(n),o.unobserve(n)}}const Bw={some:0,all:1};let Vw=class extends pr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:i,margin:o,amount:u="some",once:d}=a,f={root:i?i.current:void 0,rootMargin:o,threshold:typeof u=="number"?u:Bw[u]};return Uw(this.node.current,f,(m=>{const{isIntersecting:h}=m;if(this.isInView===h||(this.isInView=h,d&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:g}=this.node.getProps(),b=h?p:g;b&&b(m)}))}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:i}=this.node;["amount","margin","root"].some((function({viewport:o={}},{viewport:u={}}={}){return d=>o[d]!==u[d]})(a,i))&&this.startObserver()}unmount(){}};const Hw={inView:{Feature:Vw},tap:{Feature:Ow},focus:{Feature:Nw},hover:{Feature:Cw}},kw={layout:{ProjectionNode:bx,MeasureLayout:dx}},Sx=S.createContext({strict:!1}),gs=S.createContext({});function ys(n){return ps(n.animate)||Rf.some((a=>ui(n[a])))}function Ex(n){return!!(ys(n)||n.variants)}function Yw(n,a){if(ys(n)){const{initial:i,animate:o}=n;return{initial:i===!1||ui(i)?i:void 0,animate:ui(o)?o:void 0}}return n.inherit!==!1?a:{}}function qw(n){const{initial:a,animate:i}=Yw(n,S.useContext(gs));return S.useMemo((()=>({initial:a,animate:i})),[gy(a),gy(i)])}function gy(n){return Array.isArray(n)?n.join(" "):n}const yy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},qa={};for(const n in yy)qa[n]={isEnabled:a=>yy[n].some((i=>!!a[i]))};function Gw(n){for(const a in n)qa[a]={...qa[a],...n[a]}}const Xw=Symbol.for("motionComponentSymbol");function Pw(n,a,i){return S.useCallback((o=>{o&&n.onMount&&n.onMount(o),a&&(o?a.mount(o):a.unmount()),i&&(typeof i=="function"?i(o):Va(i)&&(i.current=o))}),[a])}function Kw(n,a,i,o,u){const{visualElement:d}=S.useContext(gs),f=S.useContext(Sx),m=S.useContext(uf),h=S.useContext(vb).reducedMotion,p=S.useRef(null);o=o||f.renderer,!p.current&&o&&(p.current=o(n,{visualState:a,parent:d,props:i,presenceContext:m,blockInitialAnimation:!!m&&m.initial===!1,reducedMotionConfig:h}));const g=p.current,b=S.useContext(cx);!g||g.projection||!u||g.type!=="html"&&g.type!=="svg"||(function(w,A,D,k){const{layoutId:q,layout:Z,drag:V,dragConstraints:J,layoutScroll:Q,layoutRoot:E}=A;w.projection=new D(w.latestValues,A["data-framer-portal-id"]?void 0:Tx(w.parent)),w.projection.setOptions({layoutId:q,layout:Z,alwaysMeasureLayout:!!V||J&&Va(J),visualElement:w,animationType:typeof Z=="string"?Z:"both",initialPromotionConfig:k,layoutScroll:Q,layoutRoot:E})})(p.current,i,u,b);const _=S.useRef(!1);S.useInsertionEffect((()=>{g&&_.current&&g.update(i,m)}));const j=i[xb],C=S.useRef(!!j&&!window.MotionHandoffIsComplete?.(j)&&window.MotionHasOptimisedAnimation?.(j));return LE((()=>{g&&(_.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),Df.render(g.render),C.current&&g.animationState&&g.animationState.animateChanges())})),S.useEffect((()=>{g&&(!C.current&&g.animationState&&g.animationState.animateChanges(),C.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(j)})),C.current=!1))})),g}function Tx(n){if(n)return n.options.allowProjection!==!1?n.projection:Tx(n.parent)}function Qw({preloadedFeatures:n,createVisualElement:a,useRender:i,useVisualState:o,Component:u}){function d(m,h){let p;const g={...S.useContext(vb),...m,layoutId:Zw(m)},{isStatic:b}=g,_=qw(m),j=o(m,b);if(!b&&sf){(function(w,A){S.useContext(Sx).strict})();const C=(function(w){const{drag:A,layout:D}=qa;if(!A&&!D)return{};const k={...A,...D};return{MeasureLayout:A?.isEnabled(w)||D?.isEnabled(w)?k.MeasureLayout:void 0,ProjectionNode:k.ProjectionNode}})(g);p=C.MeasureLayout,_.visualElement=Kw(u,j,g,a,C.ProjectionNode)}return y.jsxs(gs.Provider,{value:_,children:[p&&_.visualElement?y.jsx(p,{visualElement:_.visualElement,...g}):null,i(u,m,Pw(j,_.visualElement,h),j,b,_.visualElement)]})}n&&Gw(n),d.displayName=`motion.${typeof u=="string"?u:`create(${u.displayName??u.name??""})`}`;const f=S.forwardRef(d);return f[Xw]=u,f}function Zw({layoutId:n}){const a=S.useContext(pb).id;return a&&n!==void 0?a+"-"+n:n}function wx(n,{layout:a,layoutId:i}){return Pr.has(n)||n.startsWith("origin")||(a||i!==void 0)&&(!!di[n]||n==="opacity")}const Ax=(n,a)=>a&&typeof n=="number"?a.transform(n):n,Fw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Jw=Ka.length;function Ww(n,a,i){let o="",u=!0;for(let d=0;d<Jw;d++){const f=Ka[d],m=n[f];if(m===void 0)continue;let h=!0;if(h=typeof m=="number"?m===(f.startsWith("scale")?1:0):parseFloat(m)===0,!h||i){const p=Ax(m,Ef[f]);h||(u=!1,o+=`${Fw[f]||f}(${p}) `),i&&(a[f]=p)}}return o=o.trim(),i?o=i(a,u?"":o):u&&(o="none"),o}function Of(n,a,i){const{style:o,vars:u,transformOrigin:d}=n;let f=!1,m=!1;for(const h in a){const p=a[h];if(Pr.has(h))f=!0;else if(wf(h))u[h]=p;else{const g=Ax(p,Ef[h]);h.startsWith("origin")?(m=!0,d[h]=g):o[h]=g}}if(a.transform||(f||i?o.transform=Ww(a,n.transform,i):o.transform&&(o.transform="none")),m){const{originX:h="50%",originY:p="50%",originZ:g=0}=d;o.transformOrigin=`${h} ${p} ${g}`}}const $f=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function jx(n,a,i){for(const o in a)dt(a[o])||wx(o,i)||(n[o]=a[o])}function Iw(n,a){const i={};return jx(i,n.style||{},n),Object.assign(i,(function({transformTemplate:o},u){return S.useMemo((()=>{const d=$f();return Of(d,u,o),Object.assign({},d.vars,d.style)}),[u])})(n,a)),i}function eA(n,a){const i={},o=Iw(n,a);return n.drag&&n.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":"pan-"+(n.drag==="x"?"y":"x")),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(i.tabIndex=0),i.style=o,i}const tA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ss(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||tA.has(n)}let Cx=n=>!ss(n);function nA(n){n&&(Cx=a=>a.startsWith("on")?!ss(a):n(a))}try{nA(require("@emotion/is-prop-valid").default)}catch{}function rA(n,a,i){const o={};for(const u in n)u==="values"&&typeof n.values=="object"||(Cx(u)||i===!0&&ss(u)||!a&&!ss(u)||n.draggable&&u.startsWith("onDrag"))&&(o[u]=n[u]);return o}const aA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Lf(n){return typeof n=="string"&&!n.includes("-")&&!!(aA.indexOf(n)>-1||/[A-Z]/u.test(n))}const lA={offset:"stroke-dashoffset",array:"stroke-dasharray"},iA={offset:"strokeDashoffset",array:"strokeDasharray"};function oA(n,a,i=1,o=0,u=!0){n.pathLength=1;const d=u?lA:iA;n[d.offset]=ue.transform(-o);const f=ue.transform(a),m=ue.transform(i);n[d.array]=`${f} ${m}`}function by(n,a,i){return typeof n=="string"?n:ue.transform(a+i*n)}function sA(n,a,i){return`${by(a,n.x,n.width)} ${by(i,n.y,n.height)}`}function Uf(n,{attrX:a,attrY:i,attrScale:o,originX:u,originY:d,pathLength:f,pathSpacing:m=1,pathOffset:h=0,...p},g,b){if(Of(n,p,b),g)return void(n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox));n.attrs=n.style,n.style={};const{attrs:_,style:j,dimensions:C}=n;_.transform&&(C&&(j.transform=_.transform),delete _.transform),C&&(u!==void 0||d!==void 0||j.transform)&&(j.transformOrigin=sA(C,u!==void 0?u:.5,d!==void 0?d:.5)),a!==void 0&&(_.x=a),i!==void 0&&(_.y=i),o!==void 0&&(_.scale=o),f!==void 0&&oA(_,f,m,h,!1)}const Nx=()=>({...$f(),attrs:{}}),Bf=n=>typeof n=="string"&&n.toLowerCase()==="svg";function uA(n,a,i,o){const u=S.useMemo((()=>{const d=Nx();return Uf(d,a,Bf(o),n.transformTemplate),{...d.attrs,style:{...d.style}}}),[a]);if(n.style){const d={};jx(d,n.style,n),u.style={...d,...u.style}}return u}function cA(n=!1){return(a,i,o,{latestValues:u},d)=>{const f=(Lf(a)?uA:eA)(i,u,d,a),m=rA(i,typeof a=="string",n),h=a!==S.Fragment?{...m,...f,ref:o}:{},{children:p}=i,g=S.useMemo((()=>dt(p)?p.get():p),[p]);return S.createElement(a,{...h,children:g})}}const Mx=n=>(a,i)=>{const o=S.useContext(gs),u=S.useContext(uf),d=()=>(function({scrapeMotionValuesFromProps:f,createRenderState:m,onUpdate:h},p,g,b){const _={latestValues:dA(p,g,b,f),renderState:m()};return h&&(_.onMount=j=>h({props:p,current:j,..._}),_.onUpdate=j=>h(j)),_})(n,a,o,u);return i?d():$E(d)};function dA(n,a,i,o){const u={},d=o(n,{});for(const _ in d)u[_]=Wo(d[_]);let{initial:f,animate:m}=n;const h=ys(n),p=Ex(n);a&&p&&!h&&n.inherit!==!1&&(f===void 0&&(f=a.initial),m===void 0&&(m=a.animate));let g=!!i&&i.initial===!1;g=g||f===!1;const b=g?m:f;if(b&&typeof b!="boolean"&&!ps(b)){const _=Array.isArray(b)?b:[b];for(let j=0;j<_.length;j++){const C=cf(n,_[j]);if(C){const{transitionEnd:w,transition:A,...D}=C;for(const k in D){let q=D[k];Array.isArray(q)&&(q=q[g?q.length-1:0]),q!==null&&(u[k]=q)}for(const k in w)u[k]=w[k]}}}return u}function Vf(n,a,i){const{style:o}=n,u={};for(const d in o)(dt(o[d])||a.style&&dt(a.style[d])||wx(d,n)||i?.getValue(d)?.liveStyle!==void 0)&&(u[d]=o[d]);return u}const fA={useVisualState:Mx({scrapeMotionValuesFromProps:Vf,createRenderState:$f})};function Rx(n,a){try{a.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{a.dimensions={x:0,y:0,width:0,height:0}}}function zx(n,{style:a,vars:i},o,u){Object.assign(n.style,a,u&&u.getProjectionStyles(o));for(const d in i)n.style.setProperty(d,i[d])}const Dx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ox(n,a,i,o){zx(n,a,void 0,o);for(const u in a.attrs)n.setAttribute(Dx.has(u)?u:pf(u),a.attrs[u])}function $x(n,a,i){const o=Vf(n,a,i);for(const u in n)(dt(n[u])||dt(a[u]))&&(o[Ka.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u]=n[u]);return o}const xy=["x","y","width","height","cx","cy","r"],mA={useVisualState:Mx({scrapeMotionValuesFromProps:$x,createRenderState:Nx,onUpdate:({props:n,prevProps:a,current:i,renderState:o,latestValues:u})=>{if(!i)return;let d=!!n.drag;if(!d){for(const m in u)if(Pr.has(m)){d=!0;break}}if(!d)return;let f=!a;if(a)for(let m=0;m<xy.length;m++){const h=xy[m];n[h]!==a[h]&&(f=!0)}f&&De.read((()=>{Rx(i,o),De.render((()=>{Uf(o,u,Bf(i.tagName),n.transformTemplate),Ox(i,o)}))}))}})};function hA(n,a){return function(i,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...Lf(i)?mA:fA,preloadedFeatures:n,useRender:cA(o),createVisualElement:a,Component:i};return Qw(u)}}const Vd={current:null},Lx={current:!1};function pA(){if(Lx.current=!0,sf)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),a=()=>Vd.current=n.matches;n.addListener(a),a()}else Vd.current=!1}const vA=[...Xb,ct,hr],gA=n=>vA.find(Gb(n)),yA=new WeakMap;function bA(n,a,i){for(const o in a){const u=a[o],d=i[o];if(dt(u))n.addValue(o,u);else if(dt(d))n.addValue(o,ai(u,{owner:n}));else if(d!==u)if(n.hasValue(o)){const f=n.getValue(o);f.liveStyle===!0?f.jump(u):f.hasAnimated||f.set(u)}else{const f=n.getStaticValue(o);n.addValue(o,ai(f!==void 0?f:u,{owner:n}))}}for(const o in i)a[o]===void 0&&n.removeValue(o);return a}const _y=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let xA=class{scrapeMotionValuesFromProps(a,i,o){return{}}constructor({parent:a,props:i,presenceContext:o,reducedMotionConfig:u,blockInitialAnimation:d,visualState:f},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Tf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const j=mn.now();this.renderScheduledAt<j&&(this.renderScheduledAt=j,De.render(this.render,!1,!0))};const{latestValues:h,renderState:p,onUpdate:g}=f;this.onUpdate=g,this.latestValues=h,this.baseTarget={...h},this.initialValues=i.initial?{...h}:{},this.renderState=p,this.parent=a,this.props=i,this.presenceContext=o,this.depth=a?a.depth+1:0,this.reducedMotionConfig=u,this.options=m,this.blockInitialAnimation=!!d,this.isControllingVariants=ys(i),this.isVariantNode=Ex(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:b,..._}=this.scrapeMotionValuesFromProps(i,{},this);for(const j in _){const C=_[j];h[j]!==void 0&&dt(C)&&C.set(h[j],!1)}}mount(a){this.current=a,yA.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((i,o)=>this.bindToMotionValue(o,i))),Lx.current||pA(),this.shouldReduceMotion=this.reducedMotionConfig!=="never"&&(this.reducedMotionConfig==="always"||Vd.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),mr(this.notifyUpdate),mr(this.render),this.valueSubscriptions.forEach((a=>a())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const i=this.features[a];i&&(i.unmount(),i.isMounted=!1)}this.current=null}bindToMotionValue(a,i){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const o=Pr.has(a);o&&this.onBindTransform&&this.onBindTransform();const u=i.on("change",(m=>{this.latestValues[a]=m,this.props.onUpdate&&De.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)})),d=i.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,a,i)),this.valueSubscriptions.set(a,(()=>{u(),d(),f&&f(),i.owner&&i.stop()}))}sortNodePosition(a){return this.current&&this.sortInstanceNodePosition&&this.type===a.type?this.sortInstanceNodePosition(this.current,a.current):0}updateFeatures(){let a="animation";for(a in qa){const i=qa[a];if(!i)continue;const{isEnabled:o,Feature:u}=i;if(!this.features[a]&&u&&o(this.props)&&(this.features[a]=new u(this)),this.features[a]){const d=this.features[a];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,i){this.latestValues[a]=i}update(a,i){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<_y.length;o++){const u=_y[o];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const d=a["on"+u];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=bA(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(a),()=>i.variantChildren.delete(a)}addValue(a,i){const o=this.values.get(a);i!==o&&(o&&this.removeValue(a),this.bindToMotionValue(a,i),this.values.set(a,i),this.latestValues[a]=i.get())}removeValue(a){this.values.delete(a);const i=this.valueSubscriptions.get(a);i&&(i(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,i){if(this.props.values&&this.props.values[a])return this.props.values[a];let o=this.values.get(a);return o===void 0&&i!==void 0&&(o=ai(i===null?void 0:i,{owner:this}),this.addValue(a,o)),o}readValue(a,i){let o=this.latestValues[a]===void 0&&this.current?this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options):this.latestValues[a];return o!=null&&(typeof o=="string"&&(kb(o)||zb(o))?o=parseFloat(o):!gA(o)&&hr.test(i)&&(o=Ub(a,i)),this.setBaseTarget(a,dt(o)?o.get():o)),dt(o)?o.get():o}setBaseTarget(a,i){this.baseTarget[a]=i}getBaseTarget(a){const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const d=cf(this.props,i,this.presenceContext?.custom);d&&(o=d[a])}if(i&&o!==void 0)return o;const u=this.getBaseTargetFromProps(this.props,a);return u===void 0||dt(u)?this.initialValues[a]!==void 0&&o===void 0?void 0:this.baseTarget[a]:u}on(a,i){return this.events[a]||(this.events[a]=new hf),this.events[a].add(i)}notify(a,...i){this.events[a]&&this.events[a].notify(...i)}},Ux=class extends xA{constructor(){super(...arguments),this.KeyframeResolver=Pb}sortInstanceNodePosition(a,i){return 2&a.compareDocumentPosition(i)?1:-1}getBaseTargetFromProps(a,i){return a.style?a.style[i]:void 0}removeValueFromRenderState(a,{vars:i,style:o}){delete i[a],delete o[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;dt(a)&&(this.childSubscription=a.on("change",(i=>{this.current&&(this.current.textContent=`${i}`)})))}};function _A(n){return window.getComputedStyle(n)}let SA=class extends Ux{constructor(){super(...arguments),this.type="html",this.renderInstance=zx}readValueFromInstance(a,i){if(Pr.has(i))return bT(a,i);{const o=_A(a),u=(wf(i)?o.getPropertyValue(i):o[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(a,{transformPagePoint:i}){return lx(a,i)}build(a,i,o){Of(a,i,o.transformTemplate)}scrapeMotionValuesFromProps(a,i,o){return Vf(a,i,o)}},EA=class extends Ux{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qe,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Rx(this.current,this.renderState)}}getBaseTargetFromProps(a,i){return a[i]}readValueFromInstance(a,i){if(Pr.has(i)){const o=Lb(i);return o&&o.default||0}return i=Dx.has(i)?i:pf(i),a.getAttribute(i)}scrapeMotionValuesFromProps(a,i,o){return $x(a,i,o)}onBindTransform(){this.current&&!this.renderState.dimensions&&De.postRender(this.updateDimensions)}build(a,i,o){Uf(a,i,this.isSVGTag,o.transformTemplate)}renderInstance(a,i,o,u){Ox(a,i,o,u)}mount(a){this.isSVGTag=Bf(a.tagName),super.mount(a)}};const TA=(n,a)=>Lf(n)?new EA(a):new SA(a,{allowProjection:n!==S.Fragment}),wA=hA({...x2,...Hw,...ww,...kw},TA),AA=BE(wA),jA={STANDARD:`cubic-bezier(${[.2,0,0,1].toString()})`};var od={ripple:"ripple-module_ripple__8Y3pc",hovered:"ripple-module_hovered__nOsN-",pressed:"ripple-module_pressed__WGjcN"};It(`.ripple-module_ripple__8Y3pc {\r
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
`);const CA=n=>{const[a,i]=S.useState(null);return S.useEffect((()=>{var o,u;const d=(o=n.current)===null||o===void 0?void 0:o.getAttribute("for");if(d){const f=document.getElementById(d),m=(u=n.current)===null||u===void 0?void 0:u.parentElement;i(f||m)}}),[n]),a};var ht;(function(n){n[n.INACTIVE=0]="INACTIVE",n[n.TOUCH_DELAY=1]="TOUCH_DELAY",n[n.HOLDING=2]="HOLDING",n[n.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(ht||(ht={}));const NA=["click","keydown","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],xi=n=>{const{id:a,disabled:i=!1,style:o,className:u}=n,d=a||`actify-ripple${S.useId()}`,[f,m]=S.useState(!1),[h,p]=S.useState(!1),g=S.useRef(null),b=CA(g),_=S.useRef(ht.INACTIVE),j=S.useRef(""),C=S.useRef(""),w=S.useRef(0),A=S.useRef(null),D=S.useRef(null),k=S.useRef(!1),q=({pointerType:R})=>R==="touch",Z=R=>{const{height:W,width:re}=g.current.getBoundingClientRect(),z={x:(re-w.current)/2,y:(W-w.current)/2};let X;return X=R instanceof PointerEvent?(ee=>{const{scrollX:pe,scrollY:de}=window,{left:N,top:G}=g.current.getBoundingClientRect(),I=pe+N,te=de+G,{pageX:ce,pageY:ve}=ee;return{x:ce-I,y:ve-te}})(R):{x:re/2,y:W/2},X={x:X.x-w.current/2,y:X.y-w.current/2},{startPoint:X,endPoint:z}},V=R=>{var W,re;if(!g.current)return;p(!0),(W=A.current)===null||W===void 0||W.cancel(),(()=>{const{height:de,width:N}=g.current.getBoundingClientRect(),G=Math.max(de,N),I=Math.max(.35*G,75),te=Math.floor(.2*G),ce=Math.sqrt(Math.pow(N,2)+Math.pow(de,2))+10;w.current=te,C.current=""+(ce+I)/te,j.current=`${w.current}px`})();const{startPoint:z,endPoint:X}=Z(R),ee=`${z.x}px, ${z.y}px`,pe=`${X.x}px, ${X.y}px`;A.current=(re=g.current)===null||re===void 0?void 0:re.animate({top:[0,0],left:[0,0],height:[j.current,j.current],width:[j.current,j.current],transform:[`translate(${ee}) scale(1)`,`translate(${pe}) scale(${C.current})`]},{pseudoElement:"::after",duration:450,easing:jA.STANDARD,fill:"forwards"})},J=()=>Kc(void 0,void 0,void 0,(function*(){D.current=null,_.current=ht.INACTIVE;const R=A.current;let W=1/0;typeof R?.currentTime=="number"?W=R.currentTime:R?.currentTime&&(W=R.currentTime.to("ms").value),W>=225?p(!1):(yield new Promise((re=>setTimeout(re,225-W))),A.current===R&&p(!1))})),Q=R=>{if(i||!R.isPrimary||D.current&&D.current.pointerId!==R.pointerId)return!1;if(R.type==="pointerenter"||R.type==="pointerleave")return!q(R);const W=R.buttons===1;return q(R)||W},E=R=>{Q(R)&&J()},K=R=>Kc(void 0,void 0,void 0,(function*(){if(Q(R)){if(D.current=R,!q(R))return _.current=ht.WAITING_FOR_CLICK,void V(R);k.current&&!(({x:W,y:re})=>{const{top:z,left:X,bottom:ee,right:pe}=g.current.getBoundingClientRect();return W>=X&&W<=pe&&re>=z&&re<=ee})(R)||(k.current=!1,_.current=ht.TOUCH_DELAY,yield new Promise((W=>{setTimeout(W,150)})),_.current===ht.TOUCH_DELAY&&(_.current=ht.HOLDING,V(R)))}})),le=R=>{Q(R)&&m(!0)},F=R=>{Q(R)&&(m(!1),_.current!==ht.INACTIVE&&J())},oe=R=>{if(Q(R)){if(_.current!==ht.HOLDING)return _.current===ht.TOUCH_DELAY?(_.current=ht.WAITING_FOR_CLICK,void V(D.current)):void 0;_.current=ht.WAITING_FOR_CLICK}};return S.useEffect((()=>{if(b)for(const R of NA)b.addEventListener(R,(W=>Kc(void 0,void 0,void 0,(function*(){if(W.type!="keydown"||W.code=="Enter"||W.code=="Space")switch(W.type){case"click":case"keydown":_.current!==ht.WAITING_FOR_CLICK?_.current===ht.INACTIVE&&(V(),J()):J();break;case"contextmenu":i||(k.current=!0,J());break;case"pointercancel":E(W);break;case"pointerdown":yield K(W);break;case"pointerenter":le(W);break;case"pointerleave":F(W);break;case"pointerup":oe(W)}}))))}),[g.current,i]),y.jsx("label",{ref:g,style:o,htmlFor:d,"aria-hidden":"true",className:ln(od.ripple,f&&od.hovered,h&&od.pressed,u)})};xi.displayName="Actify.Ripple";var sd={root:"card-module_root__o4tFN",filled:"card-module_filled__BUroO",outlined:"card-module_outlined__gIHoH",card:"card-module_card__ukHma"};It(`.card-module_root__o4tFN {\r
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
`);const Bx=n=>{const{id:a,ripple:i=!1,variant:o="elevated",elevation:u=1,children:d,className:f}=n,m=Gr(n,["id","ripple","variant","elevation","children","className"]),h=a||`actify-card${Ve.useId()}`;return y.jsxs("div",Object.assign({},m,{className:ln(sd.root,sd[o],f),children:[y.jsx("div",{className:sd.card,children:d}),i&&y.jsx(xi,{id:h}),o==="elevated"&&y.jsx(of,{className:`[--md-elevation-level:${u}]`})]}))};Bx.displayName="Actify.Card";const MA=S.createContext(null);let cr=null;function RA(n,a="assertive",i=7e3){cr?cr.announce(n,a,i):(cr=new zA,(typeof IS_REACT_ACT_ENVIRONMENT=="boolean"?IS_REACT_ACT_ENVIRONMENT:typeof jest<"u")?cr.announce(n,a,i):setTimeout((()=>{cr?.isAttached()&&cr?.announce(n,a,i)}),100))}let zA=class{isAttached(){var a;return(a=this.node)===null||a===void 0?void 0:a.isConnected}createLog(a){let i=document.createElement("div");return i.setAttribute("role","log"),i.setAttribute("aria-live",a),i.setAttribute("aria-relevant","additions"),i}destroy(){this.node&&(document.body.removeChild(this.node),this.node=null)}announce(a,i="assertive",o=7e3){var u,d;if(!this.node)return;let f=document.createElement("div");typeof a=="object"?(f.setAttribute("role","img"),f.setAttribute("aria-labelledby",a["aria-labelledby"])):f.textContent=a,i==="assertive"?(u=this.assertiveLog)===null||u===void 0||u.appendChild(f):(d=this.politeLog)===null||d===void 0||d.appendChild(f),a!==""&&setTimeout((()=>{f.remove()}),o)}clear(a){this.node&&(a&&a!=="assertive"||!this.assertiveLog||(this.assertiveLog.innerHTML=""),a&&a!=="polite"||!this.politeLog||(this.politeLog.innerHTML=""))}constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,typeof document<"u"&&(this.node=document.createElement("div"),this.node.dataset.liveAnnouncer="true",Object.assign(this.node.style,{border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"}),this.assertiveLog=this.createLog("assertive"),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog("polite"),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}};if(typeof HTMLTemplateElement<"u"){const n=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild").get;Object.defineProperty(HTMLTemplateElement.prototype,"firstChild",{configurable:!0,enumerable:!0,get:function(){return this.dataset.reactAriaHidden?this.content.firstChild:n.call(this)}})}const DA=S.createContext(!1);function OA(n){let a=(i,o)=>S.useContext(DA)?null:n(i,o);return a.displayName=n.displayName||n.name,S.forwardRef(a)}const $A=new Set(["id"]),LA=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),UA=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),BA=/^(data-.*)$/;function Hf(n,a={}){let{labelable:i,isLink:o,propNames:u}=a,d={};for(const f in n)Object.prototype.hasOwnProperty.call(n,f)&&($A.has(f)||i&&LA.has(f)||o&&UA.has(f)||u?.has(f)||BA.test(f))&&(d[f]=n[f]);return d}const vt=n=>{var a;return(a=n?.ownerDocument)!==null&&a!==void 0?a:document},Ft=n=>n&&"window"in n&&n.window===n?n:vt(n).defaultView||window;let Da=new Map,Hd=new Set;function Sy(){if(typeof window>"u")return;function n(i){return"propertyName"in i}let a=i=>{if(!n(i)||!i.target)return;let o=Da.get(i.target);if(o&&(o.delete(i.propertyName),o.size===0&&(i.target.removeEventListener("transitioncancel",a),Da.delete(i.target)),Da.size===0)){for(let u of Hd)u();Hd.clear()}};document.body.addEventListener("transitionrun",(i=>{if(!n(i)||!i.target)return;let o=Da.get(i.target);o||(o=new Set,Da.set(i.target,o),i.target.addEventListener("transitioncancel",a,{once:!0})),o.add(i.propertyName)})),document.body.addEventListener("transitionend",a)}function Vx(n){requestAnimationFrame((()=>{Da.size===0?n():Hd.add(n)}))}typeof document<"u"&&(document.readyState!=="loading"?Sy():document.addEventListener("DOMContentLoaded",Sy));function bs(n){var a;return typeof window<"u"&&window.navigator!=null&&(((a=window.navigator.userAgentData)===null||a===void 0?void 0:a.brands.some((i=>n.test(i.brand))))||n.test(window.navigator.userAgent))}function kf(n){var a;return typeof window<"u"&&window.navigator!=null&&n.test(((a=window.navigator.userAgentData)===null||a===void 0?void 0:a.platform)||window.navigator.platform)}function vr(n){let a=null;return()=>(a==null&&(a=n()),a)}const fi=vr((function(){return kf(/^Mac/i)})),VA=vr((function(){return kf(/^iPhone/i)})),Hx=vr((function(){return kf(/^iPad/i)||fi()&&navigator.maxTouchPoints>1})),kx=vr((function(){return VA()||Hx()})),HA=vr((function(){return bs(/AppleWebKit/i)&&!kA()})),kA=vr((function(){return bs(/Chrome/i)})),Yx=vr((function(){return bs(/Android/i)})),YA=vr((function(){return bs(/Firefox/i)}));let Ha="default",kd="",Io=new WeakMap;function Ey(n){if(kx()){if(Ha==="default"){const a=vt(n);kd=a.documentElement.style.webkitUserSelect,a.documentElement.style.webkitUserSelect="none"}Ha="disabled"}else if(n instanceof HTMLElement||n instanceof SVGElement){let a="userSelect"in n.style?"userSelect":"webkitUserSelect";Io.set(n,n.style[a]),n.style[a]="none"}}function ud(n){if(kx()){if(Ha!=="disabled")return;Ha="restoring",setTimeout((()=>{Vx((()=>{if(Ha==="restoring"){const a=vt(n);a.documentElement.style.webkitUserSelect==="none"&&(a.documentElement.style.webkitUserSelect=kd||""),kd="",Ha="default"}}))}),300)}else if((n instanceof HTMLElement||n instanceof SVGElement)&&n&&Io.has(n)){let a=Io.get(n),i="userSelect"in n.style?"userSelect":"webkitUserSelect";n.style[i]==="none"&&(n.style[i]=a),n.getAttribute("style")===""&&n.removeAttribute("style"),Io.delete(n)}}const qx=Ve.createContext({register:()=>{}});qx.displayName="PressResponderContext";function Ga(n){if((function(){if(Xo==null){Xo=!1;try{document.createElement("div").focus({get preventScroll(){return Xo=!0,!0}})}catch{}}return Xo})())n.focus({preventScroll:!0});else{let a=(function(i){let o=i.parentNode,u=[],d=document.scrollingElement||document.documentElement;for(;o instanceof HTMLElement&&o!==d;)(o.offsetHeight<o.scrollHeight||o.offsetWidth<o.scrollWidth)&&u.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft}),o=o.parentNode;return d instanceof HTMLElement&&u.push({element:d,scrollTop:d.scrollTop,scrollLeft:d.scrollLeft}),u})(n);n.focus(),(function(i){for(let{element:o,scrollTop:u,scrollLeft:d}of i)o.scrollTop=u,o.scrollLeft=d})(a)}}let Xo=null;const Gx=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable^="false"])'],qA=Gx.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";Gx.push('[tabindex]:not([tabindex="-1"]):not([disabled])');function GA(n){return n.matches(qA)}let Xx=class{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(a,i){this.nativeEvent=i,this.target=i.target,this.currentTarget=i.currentTarget,this.relatedTarget=i.relatedTarget,this.bubbles=i.bubbles,this.cancelable=i.cancelable,this.defaultPrevented=i.defaultPrevented,this.eventPhase=i.eventPhase,this.isTrusted=i.isTrusted,this.timeStamp=i.timeStamp,this.type=a}};function Px(n){let a=S.useRef({isFocused:!1,observer:null});Xr((()=>{const o=a.current;return()=>{o.observer&&(o.observer.disconnect(),o.observer=null)}}),[]);let i=Zt((o=>{n?.(o)}));return S.useCallback((o=>{if(o.target instanceof HTMLButtonElement||o.target instanceof HTMLInputElement||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLSelectElement){a.current.isFocused=!0;let u=o.target,d=f=>{a.current.isFocused=!1,u.disabled&&i(new Xx("blur",f)),a.current.observer&&(a.current.observer.disconnect(),a.current.observer=null)};u.addEventListener("focusout",d,{once:!0}),a.current.observer=new MutationObserver((()=>{if(a.current.isFocused&&u.disabled){var f;(f=a.current.observer)===null||f===void 0||f.disconnect();let m=u===document.activeElement?null:document.activeElement;u.dispatchEvent(new FocusEvent("blur",{relatedTarget:m})),u.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:m}))}})),a.current.observer.observe(u,{attributes:!0,attributeFilter:["disabled"]})}}),[i])}let us=!1;function Ty(n){for(;n&&!GA(n);)n=n.parentElement;let a=Ft(n),i=a.document.activeElement;if(!i||i===n)return;us=!0;let o=!1,u=g=>{(g.target===i||o)&&g.stopImmediatePropagation()},d=g=>{(g.target===i||o)&&(g.stopImmediatePropagation(),n||o||(o=!0,Ga(i),h()))},f=g=>{(g.target===n||o)&&g.stopImmediatePropagation()},m=g=>{(g.target===n||o)&&(g.stopImmediatePropagation(),o||(o=!0,Ga(i),h()))};a.addEventListener("blur",u,!0),a.addEventListener("focusout",d,!0),a.addEventListener("focusin",m,!0),a.addEventListener("focus",f,!0);let h=()=>{cancelAnimationFrame(p),a.removeEventListener("blur",u,!0),a.removeEventListener("focusout",d,!0),a.removeEventListener("focusin",m,!0),a.removeEventListener("focus",f,!0),us=!1,o=!1},p=requestAnimationFrame(h);return h}function XA(n,a){return a.get?a.get.call(n):a.value}function Kx(n,a,i){if(!a.has(n))throw new TypeError("attempted to "+i+" private field on non-instance");return a.get(n)}function PA(n,a){var i=Kx(n,a,"get");return XA(n,i)}function KA(n,a){if(a.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function QA(n,a,i){KA(n,a),a.set(n,i)}function ZA(n,a,i){if(a.set)a.set.call(n,i);else{if(!a.writable)throw new TypeError("attempted to set read only private field");a.value=i}}function wy(n,a,i){var o=Kx(n,a,"set");return ZA(n,o,i),i}function qe(n,a){return!(!a||!n)&&n.contains(a)}const mi=(n=document)=>n.activeElement;function Le(n){return n.target}S.createContext({isNative:!0,open:function(n,a){(function(i,o){if(i instanceof HTMLAnchorElement)o(i);else if(i.hasAttribute("data-href")){let u=document.createElement("a");u.href=i.getAttribute("data-href"),i.hasAttribute("data-target")&&(u.target=i.getAttribute("data-target")),i.hasAttribute("data-rel")&&(u.rel=i.getAttribute("data-rel")),i.hasAttribute("data-download")&&(u.download=i.getAttribute("data-download")),i.hasAttribute("data-ping")&&(u.ping=i.getAttribute("data-ping")),i.hasAttribute("data-referrer-policy")&&(u.referrerPolicy=i.getAttribute("data-referrer-policy")),i.appendChild(u),o(u),i.removeChild(u)}})(n,(i=>Xa(i,a)))},useHref:n=>n});function Xa(n,a,i=!0){var o,u;let{metaKey:d,ctrlKey:f,altKey:m,shiftKey:h}=a;YA()&&(!((u=window.event)===null||u===void 0||(o=u.type)===null||o===void 0)&&o.startsWith("key"))&&n.target==="_blank"&&(fi()?d=!0:f=!0);let p=HA()&&fi()&&!Hx()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:d,ctrlKey:f,altKey:m,shiftKey:h}):new MouseEvent("click",{metaKey:d,ctrlKey:f,altKey:m,shiftKey:h,bubbles:!0,cancelable:!0});Xa.isOpening=i,Ga(n),n.dispatchEvent(p),Xa.isOpening=!1}Xa.isOpening=!1;function Yf(){let n=S.useRef(new Map),a=S.useCallback(((u,d,f,m)=>{let h=m?.once?(...p)=>{n.current.delete(f),f(...p)}:f;n.current.set(f,{type:d,eventTarget:u,fn:h,options:m}),u.addEventListener(d,h,m)}),[]),i=S.useCallback(((u,d,f,m)=>{var h;let p=((h=n.current.get(f))===null||h===void 0?void 0:h.fn)||f;u.removeEventListener(d,p,m),n.current.delete(f)}),[]),o=S.useCallback((()=>{n.current.forEach(((u,d)=>{i(u.eventTarget,u.type,d,u.options)}))}),[i]);return S.useEffect((()=>o),[o]),{addGlobalListener:a,removeGlobalListener:i,removeAllGlobalListeners:o}}function Qx(n,a){Xr((()=>{if(n&&n.ref&&a)return n.ref.current=a.current,()=>{n.ref&&(n.ref.current=null)}}))}function Yd(n){return!(n.mozInputSource!==0||!n.isTrusted)||(Yx()&&n.pointerType?n.type==="click"&&n.buttons===1:n.detail===0&&!n.pointerType)}function FA(n){return!Yx()&&n.width===0&&n.height===0||n.width===1&&n.height===1&&n.pressure===0&&n.detail===0&&n.pointerType==="mouse"}var Po=new WeakMap;let Ko=class{continuePropagation(){wy(this,Po,!1)}get shouldStopPropagation(){return PA(this,Po)}constructor(a,i,o,u){var d;QA(this,Po,{writable:!0,value:void 0}),wy(this,Po,!0);let f=(d=u?.target)!==null&&d!==void 0?d:o.currentTarget;const m=f?.getBoundingClientRect();let h,p,g=0,b=null;o.clientX!=null&&o.clientY!=null&&(p=o.clientX,b=o.clientY),m&&(p!=null&&b!=null?(h=p-m.left,g=b-m.top):(h=m.width/2,g=m.height/2)),this.type=a,this.pointerType=i,this.target=o.currentTarget,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.x=h,this.y=g}};const Ay=Symbol("linkClicked");function JA(n){let{onPress:a,onPressChange:i,onPressStart:o,onPressEnd:u,onPressUp:d,isDisabled:f,isPressed:m,preventFocusOnPress:h,shouldCancelOnPointerExit:p,allowTextSelectionOnPress:g,ref:b,..._}=(function(E){let K=S.useContext(qx);if(K){let{register:le,...F}=K;E=gt(F,E),le()}return Qx(K,E.ref),E})(n),[j,C]=S.useState(!1),w=S.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:A,removeAllGlobalListeners:D}=Yf(),k=Zt(((E,K)=>{let le=w.current;if(f||le.didFirePressStart)return!1;let F=!0;if(le.isTriggeringEvent=!0,o){let oe=new Ko("pressstart",K,E);o(oe),F=oe.shouldStopPropagation}return i&&i(!0),le.isTriggeringEvent=!1,le.didFirePressStart=!0,C(!0),F})),q=Zt(((E,K,le=!0)=>{let F=w.current;if(!F.didFirePressStart)return!1;F.didFirePressStart=!1,F.isTriggeringEvent=!0;let oe=!0;if(u){let R=new Ko("pressend",K,E);u(R),oe=R.shouldStopPropagation}if(i&&i(!1),C(!1),a&&le&&!f){let R=new Ko("press",K,E);a(R),oe&&(oe=R.shouldStopPropagation)}return F.isTriggeringEvent=!1,oe})),Z=Zt(((E,K)=>{let le=w.current;if(f)return!1;if(d){le.isTriggeringEvent=!0;let F=new Ko("pressup",K,E);return d(F),le.isTriggeringEvent=!1,F.shouldStopPropagation}return!0})),V=Zt((E=>{let K=w.current;if(K.isPressed&&K.target){K.didFirePressStart&&K.pointerType!=null&&q(za(K.target,E),K.pointerType,!1),K.isPressed=!1,K.isOverTarget=!1,K.activePointerId=null,K.pointerType=null,D(),g||ud(K.target);for(let le of K.disposables)le();K.disposables=[]}})),J=Zt((E=>{p&&V(E)})),Q=S.useMemo((()=>{let E=w.current,K={onKeyDown(F){if(cd(F.nativeEvent,F.currentTarget)&&qe(F.currentTarget,Le(F.nativeEvent))){var oe;Ny(Le(F.nativeEvent),F.key)&&F.preventDefault();let R=!0;if(!E.isPressed&&!F.repeat){E.target=F.currentTarget,E.isPressed=!0,E.pointerType="keyboard",R=k(F,"keyboard");let W=F.currentTarget,re=z=>{cd(z,W)&&!z.repeat&&qe(W,Le(z))&&E.target&&Z(za(E.target,z),"keyboard")};A(vt(F.currentTarget),"keyup",mb(re,le),!0)}R&&F.stopPropagation(),F.metaKey&&fi()&&((oe=E.metaKeyEvents)===null||oe===void 0||oe.set(F.key,F.nativeEvent))}else F.key==="Meta"&&(E.metaKeyEvents=new Map)},onClick(F){if((!F||qe(F.currentTarget,Le(F.nativeEvent)))&&F&&F.button===0&&!E.isTriggeringEvent&&!Xa.isOpening){let oe=!0;if(f&&F.preventDefault(),E.ignoreEmulatedMouseEvents||E.isPressed||E.pointerType!=="virtual"&&!Yd(F.nativeEvent)){if(E.isPressed&&E.pointerType!=="keyboard"){let R=E.pointerType||F.nativeEvent.pointerType||"virtual";oe=q(za(F.currentTarget,F),R,!0),E.isOverTarget=!1,V(F)}}else{let R=k(F,"virtual"),W=Z(F,"virtual"),re=q(F,"virtual");oe=R&&W&&re}E.ignoreEmulatedMouseEvents=!1,oe&&F.stopPropagation()}}},le=F=>{var oe;if(E.isPressed&&E.target&&cd(F,E.target)){var R;Ny(Le(F),F.key)&&F.preventDefault();let re=Le(F);q(za(E.target,F),"keyboard",qe(E.target,Le(F))),D(),F.key!=="Enter"&&qf(E.target)&&qe(E.target,re)&&!F[Ay]&&(F[Ay]=!0,Xa(E.target,F,!1)),E.isPressed=!1,(R=E.metaKeyEvents)===null||R===void 0||R.delete(F.key)}else if(F.key==="Meta"&&(!((oe=E.metaKeyEvents)===null||oe===void 0)&&oe.size)){var W;let re=E.metaKeyEvents;E.metaKeyEvents=void 0;for(let z of re.values())(W=E.target)===null||W===void 0||W.dispatchEvent(new KeyboardEvent("keyup",z))}};if(typeof PointerEvent<"u"){K.onPointerDown=R=>{if(R.button!==0||!qe(R.currentTarget,Le(R.nativeEvent)))return;if(FA(R.nativeEvent))return void(E.pointerType="virtual");E.pointerType=R.pointerType;let W=!0;if(!E.isPressed){E.isPressed=!0,E.isOverTarget=!0,E.activePointerId=R.pointerId,E.target=R.currentTarget,g||Ey(E.target),W=k(R,E.pointerType);let re=Le(R.nativeEvent);"releasePointerCapture"in re&&re.releasePointerCapture(R.pointerId),A(vt(R.currentTarget),"pointerup",F,!1),A(vt(R.currentTarget),"pointercancel",oe,!1)}W&&R.stopPropagation()},K.onMouseDown=R=>{if(qe(R.currentTarget,Le(R.nativeEvent))&&R.button===0){if(h){let W=Ty(R.target);W&&E.disposables.push(W)}R.stopPropagation()}},K.onPointerUp=R=>{qe(R.currentTarget,Le(R.nativeEvent))&&E.pointerType!=="virtual"&&R.button===0&&Z(R,E.pointerType||R.pointerType)},K.onPointerEnter=R=>{R.pointerId===E.activePointerId&&E.target&&!E.isOverTarget&&E.pointerType!=null&&(E.isOverTarget=!0,k(za(E.target,R),E.pointerType))},K.onPointerLeave=R=>{R.pointerId===E.activePointerId&&E.target&&E.isOverTarget&&E.pointerType!=null&&(E.isOverTarget=!1,q(za(E.target,R),E.pointerType,!1),J(R))};let F=R=>{if(R.pointerId===E.activePointerId&&E.isPressed&&R.button===0&&E.target){if(qe(E.target,Le(R))&&E.pointerType!=null){let W=!1,re=setTimeout((()=>{E.isPressed&&E.target instanceof HTMLElement&&(W?V(R):(Ga(E.target),E.target.click()))}),80);A(R.currentTarget,"click",(()=>W=!0),!0),E.disposables.push((()=>clearTimeout(re)))}else V(R);E.isOverTarget=!1}},oe=R=>{V(R)};K.onDragStart=R=>{qe(R.currentTarget,Le(R.nativeEvent))&&V(R)}}else{K.onMouseDown=R=>{if(!(R.button!==0||!qe(R.currentTarget,Le(R.nativeEvent)))){if(E.ignoreEmulatedMouseEvents)return void R.stopPropagation();if(E.isPressed=!0,E.isOverTarget=!0,E.target=R.currentTarget,E.pointerType=Yd(R.nativeEvent)?"virtual":"mouse",bE.flushSync((()=>k(R,E.pointerType)))&&R.stopPropagation(),h){let W=Ty(R.target);W&&E.disposables.push(W)}A(vt(R.currentTarget),"mouseup",F,!1)}},K.onMouseEnter=R=>{if(!qe(R.currentTarget,Le(R.nativeEvent)))return;let W=!0;E.isPressed&&!E.ignoreEmulatedMouseEvents&&E.pointerType!=null&&(E.isOverTarget=!0,W=k(R,E.pointerType)),W&&R.stopPropagation()},K.onMouseLeave=R=>{if(!qe(R.currentTarget,Le(R.nativeEvent)))return;let W=!0;E.isPressed&&!E.ignoreEmulatedMouseEvents&&E.pointerType!=null&&(E.isOverTarget=!1,W=q(R,E.pointerType,!1),J(R)),W&&R.stopPropagation()},K.onMouseUp=R=>{qe(R.currentTarget,Le(R.nativeEvent))&&(E.ignoreEmulatedMouseEvents||R.button!==0||Z(R,E.pointerType||"mouse"))};let F=R=>{R.button===0&&(E.ignoreEmulatedMouseEvents?E.ignoreEmulatedMouseEvents=!1:(E.target&&E.target.contains(R.target)&&E.pointerType!=null||V(R),E.isOverTarget=!1))};K.onTouchStart=R=>{if(!qe(R.currentTarget,Le(R.nativeEvent)))return;let W=(function(re){const{targetTouches:z}=re;return z.length>0?z[0]:null})(R.nativeEvent);W&&(E.activePointerId=W.identifier,E.ignoreEmulatedMouseEvents=!0,E.isOverTarget=!0,E.isPressed=!0,E.target=R.currentTarget,E.pointerType="touch",g||Ey(E.target),k(dr(E.target,R),E.pointerType)&&R.stopPropagation(),A(Ft(R.currentTarget),"scroll",oe,!0))},K.onTouchMove=R=>{if(!qe(R.currentTarget,Le(R.nativeEvent)))return;if(!E.isPressed)return void R.stopPropagation();let W=jy(R.nativeEvent,E.activePointerId),re=!0;W&&Cy(W,R.currentTarget)?E.isOverTarget||E.pointerType==null||(E.isOverTarget=!0,re=k(dr(E.target,R),E.pointerType)):E.isOverTarget&&E.pointerType!=null&&(E.isOverTarget=!1,re=q(dr(E.target,R),E.pointerType,!1),J(dr(E.target,R))),re&&R.stopPropagation()},K.onTouchEnd=R=>{if(!qe(R.currentTarget,Le(R.nativeEvent)))return;if(!E.isPressed)return void R.stopPropagation();let W=jy(R.nativeEvent,E.activePointerId),re=!0;W&&Cy(W,R.currentTarget)&&E.pointerType!=null?(Z(dr(E.target,R),E.pointerType),re=q(dr(E.target,R),E.pointerType)):E.isOverTarget&&E.pointerType!=null&&(re=q(dr(E.target,R),E.pointerType,!1)),re&&R.stopPropagation(),E.isPressed=!1,E.activePointerId=null,E.isOverTarget=!1,E.ignoreEmulatedMouseEvents=!0,E.target&&!g&&ud(E.target),D()},K.onTouchCancel=R=>{qe(R.currentTarget,Le(R.nativeEvent))&&(R.stopPropagation(),E.isPressed&&V(dr(E.target,R)))};let oe=R=>{E.isPressed&&qe(Le(R),E.target)&&V({currentTarget:E.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};K.onDragStart=R=>{qe(R.currentTarget,Le(R.nativeEvent))&&V(R)}}return K}),[A,f,h,D,g,V,J,q,k,Z]);return S.useEffect((()=>{let E=w.current;return()=>{var K;g||ud((K=E.target)!==null&&K!==void 0?K:void 0);for(let le of E.disposables)le();E.disposables=[]}}),[g]),{isPressed:m||j,pressProps:gt(_,Q)}}function qf(n){return n.tagName==="A"&&n.hasAttribute("href")}function cd(n,a){const{key:i,code:o}=n,u=a,d=u.getAttribute("role");return!(i!=="Enter"&&i!==" "&&i!=="Spacebar"&&o!=="Space"||u instanceof Ft(u).HTMLInputElement&&!Zx(u,i)||u instanceof Ft(u).HTMLTextAreaElement||u.isContentEditable||(d==="link"||!d&&qf(u))&&i!=="Enter")}function jy(n,a){const i=n.changedTouches;for(let o=0;o<i.length;o++){const u=i[o];if(u.identifier===a)return u}return null}function dr(n,a){let i=0,o=0;return a.targetTouches&&a.targetTouches.length===1&&(i=a.targetTouches[0].clientX,o=a.targetTouches[0].clientY),{currentTarget:n,shiftKey:a.shiftKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,clientX:i,clientY:o}}function za(n,a){let i=a.clientX,o=a.clientY;return{currentTarget:n,shiftKey:a.shiftKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,clientX:i,clientY:o}}function Cy(n,a){let i=a.getBoundingClientRect();return d=(function(f){let m=0,h=0;return f.width!==void 0?m=f.width/2:f.radiusX!==void 0&&(m=f.radiusX),f.height!==void 0?h=f.height/2:f.radiusY!==void 0&&(h=f.radiusY),{top:f.clientY-h,right:f.clientX+m,bottom:f.clientY+h,left:f.clientX-m}})(n),!((u=i).left>d.right||d.left>u.right||u.top>d.bottom||d.top>u.bottom);var u,d}function Ny(n,a){return n instanceof HTMLInputElement?!Zx(n,a):(function(i){return!(i instanceof HTMLInputElement||(i instanceof HTMLButtonElement?i.type==="submit"||i.type==="reset":qf(i)))})(n)}const WA=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Zx(n,a){return n.type==="checkbox"||n.type==="radio"?a===" ":WA.has(n.type)}let Kr=null,qd=new Set,ti=new Map,Yr=!1,Gd=!1;const IA={Tab:!0,Escape:!0};function xs(n,a){for(let i of qd)i(n,a)}function cs(n){Yr=!0,(function(a){return!(a.metaKey||!fi()&&a.altKey||a.ctrlKey||a.key==="Control"||a.key==="Shift"||a.key==="Meta")})(n)&&(Kr="keyboard",xs("keyboard",n))}function Qt(n){Kr="pointer",n.type!=="mousedown"&&n.type!=="pointerdown"||(Yr=!0,xs("pointer",n))}function Fx(n){Yd(n)&&(Yr=!0,Kr="virtual")}function Jx(n){n.target!==window&&n.target!==document&&!us&&n.isTrusted&&(Yr||Gd||(Kr="virtual",xs("virtual",n)),Yr=!1,Gd=!1)}function Wx(){us||(Yr=!1,Gd=!0)}function Xd(n){if(typeof window>"u"||ti.get(Ft(n)))return;const a=Ft(n),i=vt(n);let o=a.HTMLElement.prototype.focus;a.HTMLElement.prototype.focus=function(){Yr=!0,o.apply(this,arguments)},i.addEventListener("keydown",cs,!0),i.addEventListener("keyup",cs,!0),i.addEventListener("click",Fx,!0),a.addEventListener("focus",Jx,!0),a.addEventListener("blur",Wx,!1),typeof PointerEvent<"u"?(i.addEventListener("pointerdown",Qt,!0),i.addEventListener("pointermove",Qt,!0),i.addEventListener("pointerup",Qt,!0)):(i.addEventListener("mousedown",Qt,!0),i.addEventListener("mousemove",Qt,!0),i.addEventListener("mouseup",Qt,!0)),a.addEventListener("beforeunload",(()=>{Ix(n)}),{once:!0}),ti.set(a,{focus:o})}const Ix=(n,a)=>{const i=Ft(n),o=vt(n);a&&o.removeEventListener("DOMContentLoaded",a),ti.has(i)&&(i.HTMLElement.prototype.focus=ti.get(i).focus,o.removeEventListener("keydown",cs,!0),o.removeEventListener("keyup",cs,!0),o.removeEventListener("click",Fx,!0),i.removeEventListener("focus",Jx,!0),i.removeEventListener("blur",Wx,!1),typeof PointerEvent<"u"?(o.removeEventListener("pointerdown",Qt,!0),o.removeEventListener("pointermove",Qt,!0),o.removeEventListener("pointerup",Qt,!0)):(o.removeEventListener("mousedown",Qt,!0),o.removeEventListener("mousemove",Qt,!0),o.removeEventListener("mouseup",Qt,!0)),ti.delete(i))};function e3(n){const a=vt(n);let i;return a.readyState!=="loading"?Xd(n):(i=()=>{Xd(n)},a.addEventListener("DOMContentLoaded",i)),()=>Ix(n,i)}function e0(){return Kr!=="pointer"}function t3(){return Kr}function n3(n){Kr=n,xs(n,null)}typeof document<"u"&&e3();const r3=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function a3(n,a,i){Xd(),S.useEffect((()=>{let o=(u,d)=>{(function(f,m,h){let p=vt(h?.target);const g=typeof window<"u"?Ft(h?.target).HTMLInputElement:HTMLInputElement,b=typeof window<"u"?Ft(h?.target).HTMLTextAreaElement:HTMLTextAreaElement,_=typeof window<"u"?Ft(h?.target).HTMLElement:HTMLElement,j=typeof window<"u"?Ft(h?.target).KeyboardEvent:KeyboardEvent;return!((f=f||p.activeElement instanceof g&&!r3.has(p.activeElement.type)||p.activeElement instanceof b||p.activeElement instanceof _&&p.activeElement.isContentEditable)&&m==="keyboard"&&h instanceof j&&!IA[h.key])})(!!i?.isTextInput,u,d)&&n(e0())};return qd.add(o),()=>{qd.delete(o)}}),a)}function l3(n){const a=vt(n),i=mi(a);if(t3()==="virtual"){let o=i;Vx((()=>{mi(a)===o&&n.isConnected&&Ga(n)}))}else Ga(n)}function t0(n){let{isDisabled:a,onFocus:i,onBlur:o,onFocusChange:u}=n;const d=S.useCallback((h=>{if(h.target===h.currentTarget)return o&&o(h),u&&u(!1),!0}),[o,u]),f=Px(d),m=S.useCallback((h=>{const p=vt(h.target),g=p?mi(p):mi();h.target===h.currentTarget&&g===Le(h.nativeEvent)&&(i&&i(h),u&&u(!0),f(h))}),[u,i,f]);return{focusProps:{onFocus:!a&&(i||u||o)?m:void 0,onBlur:a||!o&&!u?void 0:d}}}function My(n){if(!n)return;let a=!0;return i=>{let o={...i,preventDefault(){i.preventDefault()},isDefaultPrevented:()=>i.isDefaultPrevented(),stopPropagation(){a?console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."):a=!0},continuePropagation(){a=!1},isPropagationStopped:()=>a};n(o),a&&i.stopPropagation()}}function i3(n){return{keyboardProps:n.isDisabled?{}:{onKeyDown:My(n.onKeyDown),onKeyUp:My(n.onKeyUp)}}}let n0=Ve.createContext(null);Ve.forwardRef((function(n,a){let{children:i,...o}=n,u={...o,ref:hb(a)};return Ve.createElement(n0.Provider,{value:u},i)}));function r0(n,a){let{focusProps:i}=t0(n),{keyboardProps:o}=i3(n),u=gt(i,o),d=(function(p){let g=S.useContext(n0)||{};Qx(g,p);let{ref:b,..._}=g;return _})(a),f=n.isDisabled?{}:d,m=S.useRef(n.autoFocus);S.useEffect((()=>{m.current&&a.current&&l3(a.current),m.current=!1}),[a]);let h=n.excludeFromTabOrder?-1:0;return n.isDisabled&&(h=void 0),{focusableProps:gt({...u,tabIndex:h},f)}}function a0(n,a){let i,{elementType:o="button",isDisabled:u,onPress:d,onPressStart:f,onPressEnd:m,onPressUp:h,onPressChange:p,preventFocusOnPress:g,allowFocusWhenDisabled:b,onClick:_,href:j,target:C,rel:w,type:A="button"}=n;i=o==="button"?{type:A,disabled:u}:{role:"button",href:o!=="a"||u?void 0:j,target:o==="a"?C:void 0,type:o==="input"?A:void 0,disabled:o==="input"?u:void 0,"aria-disabled":u&&o!=="input"?u:void 0,rel:o==="a"?w:void 0};let{pressProps:D,isPressed:k}=JA({onPressStart:f,onPressEnd:m,onPressChange:p,onPress:d,onPressUp:h,isDisabled:u,preventFocusOnPress:g,ref:a}),{focusableProps:q}=r0(n,a);b&&(q.tabIndex=u?-1:q.tabIndex);let Z=gt(q,D,Hf(n,{labelable:!0}));return{isPressed:k,buttonProps:gt(i,Z,{"aria-haspopup":n["aria-haspopup"],"aria-expanded":n["aria-expanded"],"aria-controls":n["aria-controls"],"aria-pressed":n["aria-pressed"],"aria-current":n["aria-current"],onClick:V=>{_&&(_(V),console.warn("onClick is deprecated, please use onPress"))}})}}function o3(n){let{isDisabled:a,onBlurWithin:i,onFocusWithin:o,onFocusWithinChange:u}=n,d=S.useRef({isFocusWithin:!1}),{addGlobalListener:f,removeAllGlobalListeners:m}=Yf(),h=S.useCallback((b=>{b.currentTarget.contains(b.target)&&d.current.isFocusWithin&&!b.currentTarget.contains(b.relatedTarget)&&(d.current.isFocusWithin=!1,m(),i&&i(b),u&&u(!1))}),[i,u,d,m]),p=Px(h),g=S.useCallback((b=>{if(!b.currentTarget.contains(b.target))return;const _=vt(b.target),j=mi(_);if(!d.current.isFocusWithin&&j===Le(b.nativeEvent)){o&&o(b),u&&u(!0),d.current.isFocusWithin=!0,p(b);let C=b.currentTarget;f(_,"focus",(w=>{if(d.current.isFocusWithin&&!qe(C,w.target)){let A=new Xx("blur",new _.defaultView.FocusEvent("blur",{relatedTarget:w.target}));A.target=C,A.currentTarget=C,h(A)}}),{capture:!0})}}),[o,u,p,f,h]);return a?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:g,onBlur:h}}}function _i(n={}){let{autoFocus:a=!1,isTextInput:i,within:o}=n,u=S.useRef({isFocused:!1,isFocusVisible:a||e0()}),[d,f]=S.useState(!1),[m,h]=S.useState((()=>u.current.isFocused&&u.current.isFocusVisible)),p=S.useCallback((()=>h(u.current.isFocused&&u.current.isFocusVisible)),[]),g=S.useCallback((j=>{u.current.isFocused=j,f(j),p()}),[p]);a3((j=>{u.current.isFocusVisible=j,p()}),[],{isTextInput:i});let{focusProps:b}=t0({isDisabled:o,onFocusChange:g}),{focusWithinProps:_}=o3({isDisabled:!o,onFocusWithinChange:g});return{isFocused:d,isFocusVisible:m,focusProps:o?_:b}}let ds=!1,dd=0;function Pd(){ds=!0,setTimeout((()=>{ds=!1}),50)}function Ry(n){n.pointerType==="touch"&&Pd()}function s3(){if(typeof document<"u")return typeof PointerEvent<"u"?document.addEventListener("pointerup",Ry):document.addEventListener("touchend",Pd),dd++,()=>{dd--,dd>0||(typeof PointerEvent<"u"?document.removeEventListener("pointerup",Ry):document.removeEventListener("touchend",Pd))}}function u3(n){let{onHoverStart:a,onHoverChange:i,onHoverEnd:o,isDisabled:u}=n,[d,f]=S.useState(!1),m=S.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;S.useEffect(s3,[]);let{addGlobalListener:h,removeAllGlobalListeners:p}=Yf(),{hoverProps:g,triggerHoverEnd:b}=S.useMemo((()=>{let _=(w,A)=>{if(m.pointerType=A,u||A==="touch"||m.isHovered||!w.currentTarget.contains(w.target))return;m.isHovered=!0;let D=w.currentTarget;m.target=D,h(vt(w.target),"pointerover",(k=>{m.isHovered&&m.target&&!qe(m.target,k.target)&&j(k,k.pointerType)}),{capture:!0}),a&&a({type:"hoverstart",target:D,pointerType:A}),i&&i(!0),f(!0)},j=(w,A)=>{let D=m.target;m.pointerType="",m.target=null,A!=="touch"&&m.isHovered&&D&&(m.isHovered=!1,p(),o&&o({type:"hoverend",target:D,pointerType:A}),i&&i(!1),f(!1))},C={};return typeof PointerEvent<"u"?(C.onPointerEnter=w=>{ds&&w.pointerType==="mouse"||_(w,w.pointerType)},C.onPointerLeave=w=>{!u&&w.currentTarget.contains(w.target)&&j(w,w.pointerType)}):(C.onTouchStart=()=>{m.ignoreEmulatedMouseEvents=!0},C.onMouseEnter=w=>{m.ignoreEmulatedMouseEvents||ds||_(w,"mouse"),m.ignoreEmulatedMouseEvents=!1},C.onMouseLeave=w=>{!u&&w.currentTarget.contains(w.target)&&j(w,"mouse")}),{hoverProps:C,triggerHoverEnd:j}}),[a,i,o,u,m,h,p]);return S.useEffect((()=>{u&&b({currentTarget:m.target},m.pointerType)}),[u]),{hoverProps:g,isHovered:d}}const c3=new Set(["form","formAction","formEncType","formMethod","formNoValidate","formTarget","name","value"]),d3=S.createContext({}),l0=OA((function(n,a){[n,a]=OE(n,a,d3);let i=n=(function(D){return D.isPending&&(D.onPress=void 0,D.onPressStart=void 0,D.onPressEnd=void 0,D.onPressChange=void 0,D.onPressUp=void 0,D.onKeyDown=void 0,D.onKeyUp=void 0,D.onClick=void 0,D.href=void 0),D})(n),{isPending:o}=i,{buttonProps:u,isPressed:d}=a0(n,a),{focusProps:f,isFocused:m,isFocusVisible:h}=_i(n),{hoverProps:p,isHovered:g}=u3({...n,isDisabled:n.isDisabled||o}),b={isHovered:g,isPressed:(i.isPressed||d)&&!o,isFocused:m,isFocusVisible:h,isDisabled:n.isDisabled||!1,isPending:o!=null&&o},_=zE({...n,values:b,defaultClassName:"react-aria-Button"}),j=Ya(u.id),C=Ya(),w=u["aria-labelledby"];o&&(w?w=`${w} ${C}`:u["aria-label"]&&(w=`${j} ${C}`));let A=S.useRef(o);return S.useEffect((()=>{let D={"aria-labelledby":w||j};(!A.current&&m&&o||A.current&&m&&!o)&&RA(D,"assertive"),A.current=o}),[o,m,w,j]),Ve.createElement("button",{...Hf(n,{propNames:c3}),...gt(u,f,p),..._,type:u.type==="submit"&&o?"button":u.type,id:j,ref:a,"aria-labelledby":w,slot:n.slot||void 0,"aria-disabled":o?"true":u["aria-disabled"],"data-disabled":n.isDisabled||void 0,"data-pressed":b.isPressed||void 0,"data-hovered":g||void 0,"data-focused":m||void 0,"data-pending":o||void 0,"data-focus-visible":h||void 0},Ve.createElement(MA.Provider,{value:{id:C}},_.children))}));var f3={"focus-ring":"focusring-module_focus-ring__jYxTQ"};It(`@keyframes focusring-module_outward-grow__Qdj-A {\r
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
`);const _s=({as:n="span",type:a="outward",style:i,className:o})=>y.jsx(n,{style:i,className:ln(f3["focus-ring"],o),inward:a==="inward"?"true":void 0});_s.displayName="Actify.FocusRing";var Ur={btn:"button-module_btn__sxcxC",disabled:"button-module_disabled__obywO",button:"button-module_button__vQZFj",touch:"button-module_touch__Cec8z",outline:"button-module_outline__rI4up",background:"button-module_background__erbWE",label:"button-module_label__rzPeC"};It(`.button-module_btn__sxcxC {\r
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
`);var m3={secondary:"color-module_secondary__gpdVQ",tertiary:"color-module_tertiary__zPmbq",error:"color-module_error__VplyG"};It(`.color-module_secondary__gpdVQ {\r
  --md-sys-color-primary: var(--md-sys-color-secondary);\r
}\r
.color-module_tertiary__zPmbq {\r
  --md-sys-color-primary: var(--md-sys-color-tertiary);\r
}\r
.color-module_error__VplyG {\r
  --md-sys-color-primary: var(--md-sys-color-error);\r
}\r
`);var h3={filled:"variant-module_filled__rQH-3",elevated:"variant-module_elevated__F69Jv",outlined:"variant-module_outlined__nvVIW",tonal:"variant-module_tonal__ZqJTa",text:"variant-module_text__oL9YN"};It(`.variant-module_filled__rQH-3 {\r
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
`);const $t=n=>{const{ref:a,style:i,children:o,className:u,ripple:d=!0,color:f="primary",variant:m="elevated",isDisabled:h=!1}=n,{focusProps:p,isFocusVisible:g}=_i();return y.jsx(l0,Object.assign({ref:a},gt(n,p),{style:i,className:ln(Ur.btn,m3[f],h3[m],h&&Ur.disabled,u),children:y.jsxs("div",{className:Ur.button,children:[y.jsx("span",{className:Ur.background}),y.jsx("span",{className:Ur.touch}),y.jsx("span",{className:Ur.label,children:y.jsx(y.Fragment,{children:o})}),m=="outlined"&&y.jsx("div",{className:Ur.outline}),y.jsx(of,{disabled:h}),g&&y.jsx(_s,{}),d&&y.jsx(xi,{id:n.id,disabled:h})]})}))};$t.displayName="Actify.Button";var fd={btn:"icon-button-module_btn__Ixgd4","text-outline":"icon-button-module_text-outline__42DFJ","icon-button":"icon-button-module_icon-button__-Xc9O"};It(`.icon-button-module_btn__Ixgd4 {\r
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
`);const i0=n=>{const{ref:a,ripple:i=!0,children:o,className:u,isDisabled:d}=n,{focusProps:f,isFocusVisible:m}=_i();return y.jsxs(l0,Object.assign({ref:a},gt(n,f),{className:ln(fd.btn,d&&fd["text-outline"],u),children:[m&&y.jsx(_s,{}),i&&y.jsx(xi,{id:n.id,disabled:d}),y.jsx(y.Fragment,{children:o}),y.jsx("span",{className:fd["icon-button"]})]}))};i0.displayName="Actify.IconButton";var et={host:"segmented-buttont-module_host__Q7AyG","segmented-button":"segmented-buttont-module_segmented-button__tnT4D",selected:"segmented-buttont-module_selected__NCVOt",unselected:"segmented-buttont-module_unselected__V3O9p",outline:"segmented-buttont-module_outline__9n2UR",leading:"segmented-buttont-module_leading__6zkws",graphic:"segmented-buttont-module_graphic__KFB1e","with-label":"segmented-buttont-module_with-label__46HnX",checkmark:"segmented-buttont-module_checkmark__ean7d",deselecting:"segmented-buttont-module_deselecting__5aeDz","md3-segmented-button-simple-fade-out":"segmented-buttont-module_md3-segmented-button-simple-fade-out__AcHfR","checkmark-path":"segmented-buttont-module_checkmark-path__jN9bX",selecting:"segmented-buttont-module_selecting__uyvR2","md3-segmented-button-checkmark-selection-draw-in":"segmented-buttont-module_md3-segmented-button-checkmark-selection-draw-in__GE-vy",icon:"segmented-buttont-module_icon__oEvPI","label-text":"segmented-buttont-module_label-text__-mx7c",touch:"segmented-buttont-module_touch__zz2Ce"};It(`.segmented-buttont-module_host__Q7AyG {\r
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
`);const p3=n=>{const{id:a,icon:i,label:o,disabled:u,selected:d,className:f,noCheckmark:m}=n,h=Ve.useRef(null),{buttonProps:p}=a0(n,h),g=a||`actify-segmented-button${Ve.useId()}`,b=Ve.useMemo((()=>d?"selecting":"deselecting"),[d]),_=ln(et["segmented-button"],i&&et["with-icon"],et[b],d?et.selected:et.unselected,o?et["with-label"]:et["without-label"],m?et["without-checkmark"]:et["with-checkmark"],f),{focusProps:j,isFocusVisible:C}=_i();return y.jsx("div",{role:"presentation",className:et.host,children:y.jsxs("button",Object.assign({id:g,ref:h,className:_,tabIndex:u?-1:0},gt(p,j),{children:[C&&y.jsx(_s,{}),y.jsx(xi,{id:g,disabled:u}),y.jsx("span",{className:et.outline}),y.jsxs("span",{className:et.leading,"aria-hidden":"true",children:[y.jsxs("span",{className:et.graphic,children:[y.jsx("svg",{className:et.checkmark,viewBox:"0 0 24 24",children:y.jsx("path",{fill:"none",className:et["checkmark-path"],d:"M1.73,12.91 8.1,19.28 22.79,4.59"})}),o&&y.jsx("span",{className:et.icon,"aria-hidden":"true",children:i})]}),!o&&y.jsx("span",{className:et.icon,"aria-hidden":"true",children:i})]}),y.jsx("span",{className:et["label-text"],children:o}),y.jsx("span",{className:et.touch})]}))})},v3=n=>{const{children:a}=n,i=Gr(n,["children"]);return y.jsx("div",Object.assign({},i,{role:"presentation",children:a}))},o0={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},s0={...o0,customError:!0,valid:!1},Pl={isInvalid:!1,validationDetails:o0,validationErrors:[]},g3=S.createContext({}),zy="__formValidationState"+Date.now();function y3(n){if(n[zy]){let{realtimeValidation:a,displayValidation:i,updateValidation:o,resetValidation:u,commitValidation:d}=n[zy];return{realtimeValidation:a,displayValidation:i,updateValidation:o,resetValidation:u,commitValidation:d}}return(function(a){let{isInvalid:i,validationState:o,name:u,value:d,builtinValidation:f,validate:m,validationBehavior:h="aria"}=a;o&&(i||(i=o==="invalid"));let p=i!==void 0?{isInvalid:i,validationErrors:[],validationDetails:s0}:null,g=S.useMemo((()=>{if(!m||d==null)return null;let K=(function(le,F){if(typeof le=="function"){let oe=le(F);if(oe&&typeof oe!="boolean")return md(oe)}return[]})(m,d);return Dy(K)}),[m,d]);f?.validationDetails.valid&&(f=void 0);let b=S.useContext(g3),_=S.useMemo((()=>u?Array.isArray(u)?u.flatMap((K=>md(b[K]))):md(b[u]):[]),[b,u]),[j,C]=S.useState(b),[w,A]=S.useState(!1);b!==j&&(C(b),A(!1));let D=S.useMemo((()=>Dy(w?[]:_)),[w,_]),k=S.useRef(Pl),[q,Z]=S.useState(Pl),V=S.useRef(Pl),J=()=>{if(!Q)return;E(!1);let K=g||f||k.current;hd(K,V.current)||(V.current=K,Z(K))},[Q,E]=S.useState(!1);return S.useEffect(J),{realtimeValidation:p||D||g||f||Pl,displayValidation:h==="native"?p||D||q:p||D||g||f||q,updateValidation(K){h!=="aria"||hd(q,K)?k.current=K:Z(K)},resetValidation(){let K=Pl;hd(K,V.current)||(V.current=K,Z(K)),h==="native"&&E(!1),A(!0)},commitValidation(){h==="native"&&E(!0),A(!0)}}})(n)}function md(n){return n?Array.isArray(n)?n:[n]:[]}function Dy(n){return n.length?{isInvalid:!0,validationErrors:n,validationDetails:s0}:null}function hd(n,a){return n===a||!!n&&!!a&&n.isInvalid===a.isInvalid&&n.validationErrors.length===a.validationErrors.length&&n.validationErrors.every(((i,o)=>i===a.validationErrors[o]))&&Object.entries(n.validationDetails).every((([i,o])=>a.validationDetails[i]===o))}function b3(n,a,i){let[o,u]=S.useState(n||a),d=S.useRef(n!==void 0),f=n!==void 0;S.useEffect((()=>{let p=d.current;p!==f&&console.warn(`WARN: A component changed from ${p?"controlled":"uncontrolled"} to ${f?"controlled":"uncontrolled"}.`),d.current=f}),[f]);let m=f?n:o,h=S.useCallback(((p,...g)=>{let b=(_,...j)=>{i&&(Object.is(m,_)||i(_,...j)),f||(m=_)};typeof p=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),u(((_,...j)=>{let C=p(f?m:_,...j);return b(C,...g),f?_:C}))):(f||u(p),b(p,...g))}),[f,m,i]);return[m,h]}function x3(n,a){let{id:i,"aria-label":o,"aria-labelledby":u}=n;return i=Ya(i),u&&o?u=[...new Set([i,...u.trim().split(/\s+/)])].join(" "):u&&(u=u.trim().split(/\s+/).join(" ")),{id:i,"aria-label":o,"aria-labelledby":u}}function _3(n){let{id:a,label:i,"aria-labelledby":o,"aria-label":u,labelElementType:d="label"}=n;a=Ya(a);let f=Ya(),m={};return i?(o=o?`${f} ${o}`:f,m={id:f,htmlFor:d==="label"?a:void 0}):o||u||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:m,fieldProps:x3({id:a,"aria-label":u,"aria-labelledby":o})}}function S3(n){let{description:a,errorMessage:i,isInvalid:o,validationState:u}=n,{labelProps:d,fieldProps:f}=_3(n),m=lg([!!a,!!i,o,u]),h=lg([!!a,!!i,o,u]);return f=gt(f,{"aria-describedby":[m,h,n["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:d,fieldProps:f,descriptionProps:{id:m},errorMessageProps:{id:h}}}function E3(n,a,i){let{validationBehavior:o,focus:u}=n;Xr((()=>{if(o==="native"&&i?.current&&!i.current.disabled){let p=a.realtimeValidation.isInvalid?a.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";i.current.setCustomValidity(p),i.current.hasAttribute("title")||(i.current.title=""),a.realtimeValidation.isInvalid||a.updateValidation({isInvalid:!(h=i.current).validity.valid,validationDetails:T3(h),validationErrors:h.validationMessage?[h.validationMessage]:[]})}var h}));let d=Zt((()=>{a.resetValidation()})),f=Zt((h=>{var p;a.displayValidation.isInvalid||a.commitValidation();let g=i==null||(p=i.current)===null||p===void 0?void 0:p.form;var b;!h.defaultPrevented&&i&&g&&(function(_){for(let j=0;j<_.elements.length;j++){let C=_.elements[j];if(!C.validity.valid)return C}return null})(g)===i.current&&(u?u():(b=i.current)===null||b===void 0||b.focus(),n3("keyboard")),h.preventDefault()})),m=Zt((()=>{a.commitValidation()}));S.useEffect((()=>{let h=i?.current;if(!h)return;let p=h.form;return h.addEventListener("invalid",f),h.addEventListener("change",m),p?.addEventListener("reset",d),()=>{h.removeEventListener("invalid",f),h.removeEventListener("change",m),p?.removeEventListener("reset",d)}}),[i,f,m,d,o])}function T3(n){let a=n.validity;return{badInput:a.badInput,customError:a.customError,patternMismatch:a.patternMismatch,rangeOverflow:a.rangeOverflow,rangeUnderflow:a.rangeUnderflow,stepMismatch:a.stepMismatch,tooLong:a.tooLong,tooShort:a.tooShort,typeMismatch:a.typeMismatch,valueMissing:a.valueMissing,valid:a.valid}}function w3(n,a,i){let o=S.useRef(a),u=Zt((()=>{i&&i(o.current)}));S.useEffect((()=>{var d;let f=n==null||(d=n.current)===null||d===void 0?void 0:d.form;return f?.addEventListener("reset",u),()=>{f?.removeEventListener("reset",u)}}),[n,u])}var Oy={text:"supporting-module_text__LAS2Y",counter:"supporting-module_counter__GuSE6"};It(`.supporting-module_text__LAS2Y {\r
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
`);const A3=({max:n=-1,count:a=-1,error:i,errorText:o,supportingText:u,refreshErrorAlert:d})=>{const f=i&&o&&!d?"alert":"",m=()=>a<0||n<=0?"":`${a} / ${n}`,h=()=>i&&o?o:u;return y.jsxs(Ve.Fragment,{children:[y.jsxs("div",{role:f,className:Oy.text,children:[y.jsx("span",{children:h()}),y.jsx("span",{className:Oy.counter,children:m()})]}),y.jsx("div",{hidden:!0,id:"description",children:`${h()} ${m()}`})]})};var Se={filled:"field-module_filled__lGXpV",outlined:"field-module_outlined__7MFPd",field:"field-module_field__OUiHT",outline:"field-module_outline__MLMKT","container-overflow":"field-module_container-overflow__DVkGv",container:"field-module_container__Vg8QO",start:"field-module_start__hbiQQ",end:"field-module_end__k4pEv","with-start":"field-module_with-start__oQ4V1","with-end":"field-module_with-end__v1BEg",middle:"field-module_middle__o4DOl",focused:"field-module_focused__yovQv",content:"field-module_content__r4BW-",populated:"field-module_populated__Q-p--",label:"field-module_label__nLEGd",resting:"field-module_resting__WB4GE",floating:"field-module_floating__cHtoV",visible:"field-module_visible__192Ro",error:"field-module_error__Gwmtc","input-wrapper":"field-module_input-wrapper__euPtU","no-label":"field-module_no-label__WTIud",background:"field-module_background__lA8Sd","state-layer":"field-module_state-layer__C0so-",disabled:"field-module_disabled__-ZlOi","active-indicator":"field-module_active-indicator__EV61C","label-wrapper":"field-module_label-wrapper__rT6tK","outline-start":"field-module_outline-start__1g5Bi","outline-notch":"field-module_outline-notch__DkhHs","outline-end":"field-module_outline-end__u0aPt","outline-panel-inactive":"field-module_outline-panel-inactive__tdtyr","outline-panel-active":"field-module_outline-panel-active__BoFP8","outline-label":"field-module_outline-label__V41uw"};It(`.field-module_filled__lGXpV {\r
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
`);const u0=n=>{const{disabled:a,className:i,label:o="",max:u,count:d,focused:f=!1,populated:m=!1,required:h=!1,children:p,leadingIcon:g,trailingIcon:b,error:_,errorText:j,supportingText:C,renderOutline:w,renderIndicator:A,renderBackground:D}=n,k=Gr(n,["disabled","className","label","max","count","focused","populated","required","children","leadingIcon","trailingIcon","error","errorText","supportingText","renderOutline","renderIndicator","renderBackground"]),q=Ve.useId(),Z=K=>{if(!o)return"";let le;le=K?f||m:!f&&!m;const F=`${o}${h?"*":""}`;return le?y.jsx(AA.span,{layoutId:q,transition:{duration:.15,easings:[Qa(.2,0,0,1)]},"aria-hidden":!le,className:ln(Se.label,!le&&Se.visible,K?Se.floating:Se.resting),children:F}):""},V=Z(!0),J=Z(!1),Q=w?.(V),E=ln(Se.field,_&&Se.error,f&&Se.focused,a&&Se.disabled,m&&Se.populated,!o&&Se["no-label"],!!g&&Se["with-start"],!!b&&Se["with-end"]);return y.jsxs("div",Object.assign({className:E},k,{children:[y.jsxs("div",{className:ln(Se["container-overflow"],i),children:[D?.(),A?.(f),Q,y.jsxs("div",{className:Se.container,children:[y.jsx("div",{className:Se.start,children:g}),y.jsxs("div",{className:Se.middle,children:[y.jsxs("span",{className:Se["label-wrapper"],children:[J,Q?"":V]}),y.jsx("div",{className:Se.content,children:p})]}),y.jsx("div",{className:Se.end,children:b})]})]}),y.jsx(A3,{max:u,count:d,error:_,errorText:j,supportingText:C})]}))},j3=()=>y.jsxs(Ve.Fragment,{children:[y.jsx("div",{className:Se.background}),y.jsx("div",{className:Se["state-layer"]})]}),C3=()=>y.jsx("div",{className:Se["active-indicator"]}),$y=n=>{const{children:a}=n,i=Gr(n,["children"]);return y.jsx(u0,Object.assign({},i,{className:Se.filled,renderBackground:j3,renderIndicator:C3,children:y.jsx("div",{className:Se["input-wrapper"],children:a})}))},N3=n=>y.jsxs("div",{className:Se.outline,children:[y.jsx("div",{className:Se["outline-start"]}),y.jsxs("div",{className:Se["outline-notch"],children:[y.jsx("div",{className:Se["outline-panel-inactive"]}),y.jsx("div",{className:Se["outline-panel-active"]}),y.jsx("div",{className:Se["outline-label"],children:n})]}),y.jsx("div",{className:Se["outline-end"]})]}),M3=n=>{const{children:a}=n,i=Gr(n,["children"]);return y.jsx(u0,Object.assign({},i,{className:Se.outlined,renderOutline:N3,children:y.jsx("div",{className:Se["input-wrapper"],children:a})}))};var pd={filled:"text-field-module_filled__bCfKF",outlined:"text-field-module_outlined__vwS7g",prefix:"text-field-module_prefix__9Zf4V",suffix:"text-field-module_suffix__itEyf"};It(`.text-field-module_filled__bCfKF {\r
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
`);function R3(n,a){let{inputElementType:i="input",isDisabled:o=!1,isRequired:u=!1,isReadOnly:d=!1,type:f="text",validationBehavior:m="aria"}=n,[h,p]=b3(n.value,n.defaultValue||"",n.onChange),{focusableProps:g}=r0(n,a),b=y3({...n,value:h}),{isInvalid:_,validationErrors:j,validationDetails:C}=b.displayValidation,{labelProps:w,fieldProps:A,descriptionProps:D,errorMessageProps:k}=S3({...n,isInvalid:_,errorMessage:n.errorMessage||j}),q=Hf(n,{labelable:!0});const Z={type:f,pattern:n.pattern};return w3(a,h,p),E3(n,b,a),S.useEffect((()=>{if(a.current instanceof Ft(a.current).HTMLTextAreaElement){let V=a.current;Object.defineProperty(V,"defaultValue",{get:()=>V.value,set:()=>{},configurable:!0})}}),[a]),{labelProps:w,inputProps:gt(q,i==="input"?Z:void 0,{disabled:o,readOnly:d,required:u&&m==="native","aria-required":u&&m==="aria"||void 0,"aria-invalid":_||void 0,"aria-errormessage":n["aria-errormessage"],"aria-activedescendant":n["aria-activedescendant"],"aria-autocomplete":n["aria-autocomplete"],"aria-haspopup":n["aria-haspopup"],"aria-controls":n["aria-controls"],value:h,onChange:V=>p(V.target.value),autoComplete:n.autoComplete,autoCapitalize:n.autoCapitalize,maxLength:n.maxLength,minLength:n.minLength,name:n.name,placeholder:n.placeholder,inputMode:n.inputMode,autoCorrect:n.autoCorrect,spellCheck:n.spellCheck,[parseInt(Ve.version,10)>=17?"enterKeyHint":"enterkeyhint"]:n.enterKeyHint,onCopy:n.onCopy,onCut:n.onCut,onPaste:n.onPaste,onCompositionEnd:n.onCompositionEnd,onCompositionStart:n.onCompositionStart,onCompositionUpdate:n.onCompositionUpdate,onSelect:n.onSelect,onBeforeInput:n.onBeforeInput,onInput:n.onInput,...g,...A}),descriptionProps:D,errorMessageProps:k,isInvalid:_,validationErrors:j,validationDetails:C}}const Kd=n=>{var a;const i=Ve.useRef(null),{style:o,onFocus:u,onBlur:d,className:f,suffixText:m,prefixText:h,leadingIcon:p,trailingIcon:g,ref:b=i,type:_="text",variant:j="filled",inputProps:C,children:w}=n,A=Gr(n,["style","onFocus","onBlur","className","suffixText","prefixText","leadingIcon","trailingIcon","ref","type","variant","inputProps","children"]),{inputProps:D,labelProps:k,descriptionProps:q,errorMessageProps:Z,isInvalid:V,validationErrors:J}=R3(Object.assign(Object.assign({},A),{inputElementType:n.type=="textarea"?"textarea":"input"}),b),{focusProps:Q,isFocused:E}=_i();let K=$y;j=="filled"&&(K=$y),j=="outlined"&&(K=M3);const le=(a=(C??D).value)===null||a===void 0?void 0:a.toString().length,F=!!(C??D).value;return y.jsxs("label",Object.assign({},k,{className:pd[j],children:[y.jsxs(K,{leadingIcon:p,trailingIcon:g,count:le,populated:F,label:n.label,focused:E,children:[h&&y.jsx("span",{className:pd.prefix,children:h}),_=="textarea"?y.jsx("textarea",Object.assign({style:Object.assign({resize:"vertical",overflowX:"hidden",wordBreak:"break-word"},o),className:f},gt(Q,C??D),{ref:b})):y.jsx("input",Object.assign({style:o,className:f},gt(Q,C??D),{type:_,ref:b})),m&&y.jsx("span",{className:pd.suffix,children:m})]}),n.description&&y.jsx("div",Object.assign({},q,{style:{fontSize:12},children:n.description})),V&&y.jsx("div",Object.assign({},Z,{style:{color:"red",fontSize:12},children:J.join(" ")}))]}))};Kd.displayName="Actify.TextField";const Ss="../backend";async function z3(){const n=await fetch(`${Ss}/api/get_content.php`);if(!n.ok)throw new Error(`Failed to load site content (${n.status})`);return n.json()}async function D3(n){const a=await fetch(`${Ss}/api/submit_order.php`,{method:"POST",body:n});let i={};try{const o=await a.text();i=o?JSON.parse(o):{}}catch{}if(!a.ok||!i.ok)throw new Error(i.error||"ثبت سفارش با خطا مواجه شد. لطفاً دوباره تلاش کنید.");return i}async function c0(){const n=await fetch(`${Ss}/api/get_blog_posts.php`);if(!n.ok)throw new Error(`Failed to load blog posts (${n.status})`);return n.json()}async function Ly(n,a,i){const o=await fetch(`${Ss}/api/submit_comment.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({post_id:n,content:a,parent_id:i})});if(!o.ok){const u=await o.json().catch(()=>({}));throw new Error(u.error||"ارسال نظر با خطا مواجه شد")}return o.json()}function Qd(n){try{const a=new Date(n);return new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"long",day:"numeric"}).format(a)}catch{return n}}const Zd={settings:{},benefits:[],products:[],gallery:[],form:[]},d0=S.createContext({data:Zd,loading:!0,error:null}),O3={color_primary:"--color-primary",color_on_primary:"--color-on-primary",color_bg_light:"--color-bg",color_surface_light:"--color-surface",color_text_light:"--color-on-bg"},$3={color_primary_dark:"--color-primary",color_on_primary_dark:"--color-on-primary",color_bg_dark:"--color-bg",color_surface_dark:"--color-surface",color_text_dark:"--color-on-bg"};function L3(n){let a=document.getElementById("dynamic-colors");a||(a=document.createElement("style"),a.id="dynamic-colors",document.head.appendChild(a));const i=Object.entries(O3).filter(([u])=>n[u]).map(([u,d])=>`${d}: ${n[u]};`).join(" "),o=Object.entries($3).filter(([u])=>n[u]).map(([u,d])=>`${d}: ${n[u]};`).join(" ");a.textContent=`:root { ${i} } html.dark { ${o} }`}function U3({children:n}){const[a,i]=S.useState({data:Zd,loading:!0,error:null});return S.useEffect(()=>{let o=!1;return z3().then(u=>{o||(L3(u.settings),i({data:u,loading:!1,error:null}))}).catch(u=>{o||i({data:Zd,loading:!1,error:u instanceof Error?u.message:"خطا در بارگذاری اطلاعات سایت"})}),()=>{o=!0}},[]),y.jsx(d0.Provider,{value:a,children:n})}function sn(){return S.useContext(d0)}function Uy(){const{data:n}=sn(),a=n.settings,[i,o]=S.useState(()=>typeof window<"u"?localStorage.getItem("theme")==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches:!1);S.useEffect(()=>{const d=document.documentElement;i?(d.classList.add("dark"),localStorage.setItem("theme","dark")):(d.classList.remove("dark"),localStorage.setItem("theme","light"))},[i]);const u=()=>o(d=>!d);return y.jsxs("header",{className:"w-full sticky top-0 z-50 shadow-sm transition-colors duration-300",children:[y.jsx("div",{className:"bg-primary text-on-primary text-label py-2 px-4 sm:px-8 transition-colors duration-300",children:y.jsxs("div",{className:"max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-2",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"campaign"}),y.jsx("span",{children:a.topbar_message||"فروش ویژه درب و پنجره UPVC با شرایط اقساطی"})]}),y.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[y.jsxs("div",{className:"flex items-center gap-1.5",children:[y.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"schedule"}),y.jsx("span",{children:a.topbar_hours||"شنبه تا پنجشنبه: ۸ الی ۲۰"})]}),y.jsxs("div",{className:"flex items-center gap-1.5",dir:"ltr",children:[y.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"phone_in_talk"}),y.jsx("span",{children:a.site_phone||"+98 922 002 3242"})]})]})]})}),y.jsx("div",{className:"bg-surface border-b border-slate-200 dark:border-white/10 px-4 sm:px-8 py-3 transition-colors duration-300",children:y.jsxs("div",{className:"max-w-[1200px] mx-auto flex items-center justify-between",children:[y.jsx("a",{href:"#s1",className:"text-h3 text-primary tracking-tight",children:a.site_title||"NorthStarWin"}),y.jsxs("div",{className:"flex items-center gap-3 sm:gap-6",children:[y.jsxs("nav",{className:"hidden md:flex items-center gap-6 text-body-sm font-bold text-surface",children:[y.jsx("a",{href:"#products",className:"hover:text-primary transition-colors",children:"محصولات"}),y.jsx("a",{href:"#s2",className:"hover:text-primary transition-colors",children:"همکاری"}),y.jsx("a",{href:"#s3",className:"hover:text-primary transition-colors",children:"ثبت سفارش"})]}),y.jsx(i0,{onClick:u,className:"text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full cursor-pointer transition-all",title:i?"حالت روشن":"حالت تاریک",children:y.jsx("span",{className:"material-symbols-outlined select-none text-xl",children:i?"light_mode":"dark_mode"})})]})]})})]})}function B3(){const{data:n}=sn(),a=n.settings,i={title:a.hero_security_title||"امنیت و پایداری",description:a.hero_security_description||"امنیت خانواده شما، اولویت اصلی ماست. درب‌های UPVC به دلیل بهره‌گیری از هسته فولادی گالوانیزه و سیستم‌های قفل پیشرفته، سدی نفوذناپذیر ایجاد می‌کنند.",image:a.hero_security_image},o={title:a.hero_durability_title||"دوام و طول عمر",description:a.hero_durability_description||"دوام بی‌نظیر در برابر زمان و طبیعت، درب‌های UPVC با مقاومت بالا در برابر اشعه‌های خورشیدی بدون تغییر شکل یا رنگ، تا ۳۰ سال در کنار شما می‌مانند.",image:a.hero_durability_image};return y.jsx("section",{id:"s1",className:"w-full py-16 px-6 sm:px-8 transition-colors duration-300",style:{backgroundColor:"var(--color-bg)"},children:y.jsxs("div",{className:"max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",children:[y.jsxs("div",{className:"flex flex-col-reverse sm:flex-row items-center gap-6 text-right",children:[y.jsxs("div",{className:"flex-1",children:[y.jsx("h2",{className:"text-h2 text-surface mb-3",children:i.title}),y.jsx("p",{className:"text-body text-surface/80 mb-4",children:i.description}),y.jsxs("a",{href:"#products",className:"inline-flex items-center gap-1 text-body-sm font-bold text-surface hover:text-primary transition-colors group",children:[y.jsx("span",{children:"مشاهده محصولات"}),y.jsx("span",{className:"material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1 select-none",children:"arrow_back"})]})]}),y.jsx("div",{className:"flex-1 flex justify-center",children:y.jsx("img",{src:i.image,alt:i.title,className:"max-h-[600px] w-auto object-contain drop-shadow-sm"})})]}),y.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-6 text-right",children:[y.jsx("div",{className:"flex-1 flex justify-center",children:y.jsx("img",{src:o.image,alt:o.title,className:"max-h-[490px] w-auto object-contain drop-shadow-sm"})}),y.jsxs("div",{className:"flex-1",children:[y.jsx("h2",{className:"text-h2 text-surface mb-3",children:o.title}),y.jsx("p",{className:"text-body text-surface/80 mb-4",children:o.description}),y.jsxs("a",{href:"#benefits",className:"inline-flex items-center gap-1 text-body-sm font-bold text-surface hover:text-primary transition-colors group",children:[y.jsx("span",{children:"مزایا"}),y.jsx("span",{className:"material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1 select-none",children:"arrow_back"})]})]})]})]})})}function V3(){const{data:n}=sn(),a=n.settings;return y.jsxs("section",{id:"s2",className:"py-16 px-4 sm:px-8 text-center max-w-[900px] mx-auto text-surface transition-colors duration-300",children:[y.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:a.collab_title||"دعوت به همکاری"}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3 mb-6"}),y.jsx("p",{className:"text-body text-surface/80 mb-6",children:a.collab_description||"ما به دنبال برقراری همکاری‌های بلندمدت با سازندگان، پیمانکاران و نصابان حرفه‌ای صنعت ساختمان هستیم."}),y.jsx("a",{href:"#s3",className:"inline-block text-body-sm font-bold text-surface hover:text-primary transition-colors",children:a.collab_button_text||"درخواست همکاری"})]})}const H3=n=>new Intl.NumberFormat("fa-IR").format(n);function k3(){const{data:n}=sn();return n.products.length===0?null:y.jsxs("section",{id:"products",className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs("div",{className:"text-center mb-10",children:[y.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"محصولات ما"}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:n.products.map(a=>y.jsxs("div",{className:"bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200/60 dark:border-white/10 transition-all duration-300 flex flex-col text-center",children:[a.image_url&&y.jsx("div",{className:"h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",children:y.jsx("img",{src:a.image_url,alt:a.name,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105"})}),y.jsxs("div",{className:"p-6 flex flex-col items-center flex-grow",children:[y.jsx("h3",{className:"text-h3 text-surface mb-2",children:a.name}),a.description&&y.jsx("p",{className:"text-body-sm text-surface/70 mb-4 flex-grow",children:a.description}),!!a.price_min&&y.jsxs("p",{className:"text-body-sm font-semibold text-primary mb-4",children:["قیمت: از ",H3(a.price_min)," تومان"]}),y.jsx($t,{variant:"text",onClick:()=>window.location.hash="#gallery",className:"text-body-sm font-bold text-surface hover:text-primary transition-colors",children:"مشاهده جزئیات"})]})]},a.id))})]})}function Y3(){const{data:n}=sn();return n.benefits.length===0?null:y.jsxs("section",{id:"benefits",className:"py-16 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs("div",{className:"text-center mb-14",children:[y.jsxs("h2",{className:"text-h2 text-primary tracking-tight",children:[n.settings.site_title||"NorthStarWin"," چرا؟"]}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8",children:n.benefits.map(a=>y.jsxs("div",{className:"flex flex-col items-center text-center p-2",children:[y.jsx("span",{className:"material-symbols-outlined text-primary mb-3 select-none",style:{fontSize:"56px"},children:a.icon_name||"star"}),y.jsx("h3",{className:"text-h3 text-surface mb-1.5",children:a.title}),y.jsx("p",{className:"text-body-sm text-surface/70",children:a.description})]},a.id))})]})}function q3(){const{data:n}=sn(),[a,i]=S.useState(null);return n.gallery.length===0?null:y.jsxs("section",{id:"gallery",className:"py-16 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs("div",{className:"text-center mb-12",children:[y.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"پروژه‌های اجرا شده"}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:n.gallery.map(o=>y.jsxs("div",{onClick:()=>i(o),className:"group relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 bg-slate-200 dark:bg-[#1f1f21]",children:[y.jsx("img",{src:o.image_url,alt:o.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5",children:y.jsx("span",{className:"text-white text-body-sm font-bold drop-shadow",children:o.title||"مشاهده تصویر"})})]},o.id))}),a&&y.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>i(null),children:y.jsxs("div",{className:"relative max-w-4xl w-full bg-surface rounded-3xl overflow-hidden shadow-2xl p-2",onClick:o=>o.stopPropagation(),children:[y.jsx("button",{onClick:()=>i(null),className:"absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer",children:y.jsx("span",{className:"material-symbols-outlined",children:"close"})}),y.jsx("img",{src:a.image_url,alt:a.title,className:"w-full max-h-[80vh] object-contain rounded-2xl"}),a.title&&y.jsx("p",{className:"text-center py-3 text-body-sm font-bold text-surface",children:a.title})]})})]})}const G3=({post:n,onReadMore:a})=>{const{data:i}=sn();return i.settings,y.jsxs(Bx,{className:"w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-surface dark:bg-surface-dark border border-slate-200/60 dark:border-white/10",children:[n.image_url&&y.jsx("div",{className:"h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",children:y.jsx("img",{src:n.image_url,alt:n.title,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105"})}),y.jsxs("div",{className:"p-6",children:[y.jsxs("div",{className:"flex items-center gap-2 mb-3 flex-wrap",children:[n.category&&y.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-label-sm font-bold bg-primary/10 text-primary",children:n.category}),y.jsxs("span",{className:"text-label-sm text-surface/60 flex items-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"schedule"}),Qd(n.created_at)]}),n.author_name&&y.jsxs("span",{className:"text-label-sm text-surface/60 flex items-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"person"}),n.author_name]})]}),y.jsx("h3",{className:"text-h3 text-surface mb-3 font-bold tracking-tight",children:n.title}),n.excerpt&&y.jsx("p",{className:"text-body-sm text-surface/70 mb-4 line-clamp-3",children:n.excerpt}),y.jsxs("div",{className:"flex items-center justify-between mt-4",children:[y.jsxs("div",{className:"flex items-center gap-3 text-surface/60",children:[y.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"visibility"}),n.view_count||0]}),y.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"chat_bubble"}),n.comment_count||0]})]}),y.jsxs($t,{variant:"text",onClick:()=>a(n),className:"text-body-sm font-bold text-primary hover:bg-primary/5 transition-colors",children:["ادامه مطلب",y.jsx("span",{className:"material-symbols-outlined text-sm mr-1",children:"arrow_left_alt"})]})]})]})]})};function X3(){const{data:n}=sn(),a=n.settings,[i,o]=S.useState([]),[u,d]=S.useState(!0),[f,m]=S.useState(null),[h,p]=S.useState("all"),g=ef();S.useEffect(()=>{b()},[]);const b=async()=>{try{const D=await c0();o(D)}catch(D){console.error("Failed to load blog posts:",D)}finally{d(!1)}},_=D=>{g(`/blog/${D.id}`)},j=Array.from(new Set(i.map(D=>D.category).filter(Boolean))),w=[...i].sort((D,k)=>(k.view_count||0)-(D.view_count||0)).slice(0,3),A=h==="all"?w:w.filter(D=>D.category===h);return y.jsxs("section",{id:"blog",className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs("div",{className:"text-center mb-10",children:[y.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"وبلاگ"}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"}),y.jsx("p",{className:"text-body-sm text-surface/70 mt-4",children:a.blog_description||"آخرین مقالات و اخبار را اینجا بخوانید"})]}),j.length>0&&y.jsxs("div",{className:"flex flex-wrap justify-center gap-2 mb-8",children:[y.jsx($t,{variant:h==="all"?"contained":"outlined",onClick:()=>p("all"),className:`text-body-sm font-bold ${h==="all"?"bg-primary text-on-primary":"text-surface border-surface/30"}`,children:"همه"}),j.map(D=>y.jsx($t,{variant:h===D?"contained":"outlined",onClick:()=>p(D),className:`text-body-sm font-bold ${h===D?"bg-primary text-on-primary":"text-surface border-surface/30"}`,children:D},D))]}),u?y.jsx("div",{className:"flex justify-center items-center py-20",children:y.jsx("span",{className:"material-symbols-outlined text-4xl text-primary animate-spin",children:"progress_activity"})}):A.length===0?y.jsxs("div",{className:"text-center py-20",children:[y.jsx("span",{className:"material-symbols-outlined text-6xl text-surface/30 mb-4",children:"article"}),y.jsx("p",{className:"text-body text-surface/60",children:"مقاله‌ای یافت نشد"})]}):y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:A.map(D=>y.jsx(G3,{post:D,onReadMore:_},D.id))})]})}function P3(){const{data:n,loading:a}=sn(),i=n.form,[o,u]=S.useState(0),[d,f]=S.useState({}),[m,h]=S.useState(null),[p,g]=S.useState(null),[b,_]=S.useState(!1),[j,C]=S.useState(!1),[w,A]=S.useState(null),[D,k]=S.useState(""),[q,Z]=S.useState(""),V=z=>{if(!z.depends_on||!z.depends_value)return!0;const X=d[z.depends_on];return X?z.depends_value.split(",").map(pe=>pe.trim()).includes(X):!1};if(a||i.length===0)return null;const J=(z,X)=>{f(ee=>({...ee,[z]:X}))},Q=(z,X)=>{const ee=X.target.files?.[0];if(!ee)return;const pe=5*1024*1024;if(ee.size>pe){A("حجم فایل نباید بیشتر از 5 مگابایت باشد."),X.target.value="";return}if(h(ee),J(z,ee.name),ee.type.startsWith("image/")){const de=new FileReader;de.onloadend=()=>g(de.result),de.readAsDataURL(ee)}else g(null)},E=z=>{h(null),g(null),J(z,"")},K=z=>{if(!V(z)||!z.required)return!0;if(z.type==="file")return!!m;const X=(d[z.key]||"").trim();return X===""?!1:z.key==="phone"?/^09[0-9]{9}$/.test(X):!0},le=z=>{if(!V(z)||!z.required)return null;if(z.type==="file")return!m&&!d[z.key]?`${z.label} الزامی است`:null;const X=(d[z.key]||"").trim();return X===""?`${z.label} الزامی است`:z.key==="phone"&&!/^09[0-9]{9}$/.test(X)?"شماره موبایل معتبر نیست":null},F=z=>i[z].fields.filter(V).every(K),oe=()=>{if(!F(o)){A("لطفاً تمام فیلدهای الزامی این مرحله را پر کنید.");return}A(null),o===i.length-1?re():u(z=>z+1)},R=()=>o>0&&u(z=>z-1),W=z=>{if(z>o&&!F(o)){A("لطفاً تمام فیلدهای الزامی این مرحله را پر کنید.");return}A(null),u(z)},re=async()=>{_(!0),A(null);try{if(!i.flatMap(de=>de.fields).filter(V).every(K)){A("لطفاً تمام فیلدهای الزامی را پر کنید."),_(!1);return}const X=new FormData;Object.entries(d).forEach(([de,N])=>{N&&X.append(de,N)}),X.append("website",q);const ee=i.flatMap(de=>de.fields).find(de=>de.type==="file"&&V(de));if(ee&&m)X.append(ee.key,m,m.name);else if(ee&&ee.required&&!m){A("لطفاً فایل مورد نظر را آپلود کنید."),_(!1);return}const pe=await D3(X);k(pe.tracking_code??""),C(!0)}catch(z){A(z instanceof Error?z.message:"خطای غیرمنتظره‌ای رخ داد.")}finally{_(!1)}};return y.jsxs("section",{id:"s3",className:"w-full my-12 px-4",children:[y.jsxs("div",{className:"text-center mb-8",children:[y.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"ثبت سفارش آنلاین"}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),j?y.jsxs("div",{className:"w-full max-w-[720px] mx-auto p-8 rounded-3xl bg-surface border border-slate-200 dark:border-white/10 text-center text-surface shadow-xl transition-colors duration-300",children:[y.jsx("span",{className:"material-symbols-outlined text-6xl text-green-500 mb-2 select-none",children:"check_circle"}),y.jsx("h3",{className:"text-h3 mb-2",children:"سفارش شما با موفقیت ثبت شد! 🎉"}),y.jsxs("p",{className:"text-body-sm text-surface/70 mb-6 flex items-center justify-center gap-2",children:["کد پیگیری:",y.jsxs("span",{className:"inline-block bg-primary/10 text-primary font-bold text-body px-3 py-0.5 rounded-full",children:["#",D]})]}),y.jsxs($t,{variant:"filled",className:"w-full sm:w-auto px-6 py-3 font-bold flex items-center justify-center gap-2 mx-auto bg-primary text-on-primary rounded-xl shadow-md cursor-pointer",onClick:()=>window.open("https://wa.me/989220023242","_blank"),children:[y.jsx("span",{className:"material-symbols-outlined select-none",children:"chat"}),"ارتباط سریع در واتساپ"]})]}):y.jsxs("div",{className:"w-full max-w-[720px] mx-auto p-6 sm:p-8 rounded-3xl bg-surface border border-slate-200 dark:border-white/10 text-surface shadow-xl transition-colors duration-300",children:[y.jsx("input",{type:"text",name:"website",value:q,onChange:z=>Z(z.target.value),className:"hidden",tabIndex:-1,autoComplete:"off"}),y.jsx("div",{className:"w-full mb-8",children:y.jsx(v3,{className:"w-full",children:y.jsx("div",{className:"grid w-full h-12 bg-slate-100 dark:bg-[color:var(--color-bg)] p-1 rounded-full border border-slate-200 dark:border-white/10",style:{gridTemplateColumns:`repeat(${i.length}, 1fr)`},children:i.map((z,X)=>y.jsx(p3,{label:z.title,selected:o===X,onPress:()=>W(X),className:`text-body-sm font-bold transition-all cursor-pointer ${X===0?"rounded-s-full":X===i.length-1?"rounded-e-full":""}`},z.title))})})}),y.jsxs("div",{className:"min-h-[320px]",children:[y.jsx("h3",{className:"text-h3 text-surface mb-1.5",children:i[o].title}),i[o].subtitle&&y.jsx("p",{className:"text-body-sm text-surface/70 mb-6",children:i[o].subtitle}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5",children:i[o].fields.filter(V).map(z=>{const X=le(z);return y.jsx(K3,{field:z,value:d[z.key]||"",onChange:ee=>{J(z.key,ee),w&&X&&A(null)},onFileChange:ee=>{Q(z.key,ee),w&&X&&A(null)},onRemoveFile:()=>E(z.key),filePreview:p,hasError:!!X,errorMessage:X},z.key)})})]}),w&&y.jsx("div",{className:"mt-4 p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-body-sm text-red-600 dark:text-red-400 text-center",children:w}),y.jsxs("div",{className:"flex items-center justify-between border-t border-slate-200 dark:border-white/10 pt-5 mt-8",children:[o>0?y.jsxs($t,{variant:"outlined",onClick:R,disabled:b,className:"flex items-center gap-2 px-5 py-2.5 rounded-xl border-slate-300 dark:border-[#45464d] text-surface cursor-pointer",children:[y.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"arrow_forward"}),"قبلی"]}):y.jsx("div",{}),y.jsxs($t,{variant:"filled",onClick:oe,disabled:!F(o)||b,className:"flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold bg-primary text-on-primary disabled:opacity-50 cursor-pointer transition-all",children:[b?"در حال ثبت...":o===i.length-1?"ثبت سفارش":"بعدی",o<i.length-1&&y.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"arrow_back"})]})]})]})]})}function K3({field:n,value:a,onChange:i,onFileChange:o,onRemoveFile:u,filePreview:d,hasError:f,errorMessage:m}){const h=`w-full h-12 bg-slate-50 dark:bg-[color:var(--color-bg)] border ${f?"border-red-500 focus:border-red-600":"border-slate-200 dark:border-[#45464d] focus:border-primary"} rounded-xl text-body-sm px-3 text-surface outline-none transition-colors`;if(n.type==="segmented")return y.jsxs("div",{className:"sm:col-span-2",children:[y.jsxs("label",{className:"text-label text-surface/70 mb-2 block",children:[n.label,n.required&&y.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:(n.options||[]).map(g=>{const b=a===g.value;return y.jsxs("div",{onClick:()=>i(g.value),className:`flex flex-col items-center justify-center text-center p-6 min-h-[140px] rounded-2xl cursor-pointer border transition-all duration-200 ${b?"bg-primary text-on-primary border-primary font-bold shadow-md scale-[1.02]":"bg-slate-50 dark:bg-[color:var(--color-bg)] text-surface border-slate-200 dark:border-[#45464d] hover:bg-slate-100 dark:hover:bg-white/5"} ${f&&!a?"border-red-500":""}`,children:[g.icon&&y.jsx("span",{className:"material-symbols-outlined text-7xl mb-2 select-none",children:g.icon}),y.jsx("span",{className:"text-body  font-semibold",children:g.label})]},g.value)})})]});if(n.type==="select")return y.jsxs("div",{className:"flex flex-col gap-1.5",children:[y.jsxs("label",{className:"text-label text-surface/70",children:[n.label,n.required&&y.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),y.jsxs("select",{value:a,onChange:g=>i(g.target.value),className:h,children:[y.jsx("option",{value:"",disabled:!0,children:"انتخاب کنید..."}),(n.options||[]).map(g=>y.jsx("option",{value:g.value,children:g.label},g.value))]})]});if(n.type==="textarea")return y.jsxs("div",{className:"sm:col-span-2 flex flex-col gap-1.5",children:[y.jsxs("label",{className:"text-label text-surface/70",children:[n.label,n.required&&y.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),y.jsx("textarea",{rows:2,placeholder:n.placeholder||"",value:a,onChange:g=>i(g.target.value),className:`w-full bg-slate-50 dark:bg-[color:var(--color-bg)] border ${f?"border-red-500 focus:border-red-600":"border-slate-200 dark:border-[#45464d] focus:border-primary"} rounded-xl text-body-sm p-3 text-surface outline-none transition-colors resize-none`})]});if(n.type==="file")return y.jsxs("div",{className:"sm:col-span-2 flex flex-col gap-1.5",children:[y.jsxs("label",{className:"text-label text-surface/70",children:[n.label," ",n.required&&y.jsx("span",{className:"text-red-500",children:"*"})]}),y.jsx("input",{accept:"image/*,.pdf,.doc,.docx",className:"hidden",id:`upload-${n.key}`,type:"file",onChange:o}),y.jsx("label",{htmlFor:`upload-${n.key}`,className:"cursor-pointer",children:d?y.jsxs("div",{className:"relative w-full rounded-xl overflow-hidden border border-slate-200 dark:border-[#45464d]",children:[y.jsx("img",{src:d,alt:"پیش‌نمایش",className:"w-full h-36 object-cover"}),y.jsx("button",{type:"button",onClick:g=>{g.preventDefault(),u()},className:"absolute top-2 right-2 bg-black/70 p-1.5 rounded-full text-white hover:bg-black transition-colors cursor-pointer",children:y.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"close"})})]}):a?y.jsxs("div",{className:"border-2 border-dashed border-primary bg-slate-50 dark:bg-[color:var(--color-bg)] rounded-xl p-4 text-center transition-all flex flex-col items-center justify-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-primary select-none",children:"insert_drive_file"}),y.jsx("span",{className:"text-body-sm text-surface/70",children:a}),y.jsx("button",{type:"button",onClick:g=>{g.preventDefault(),u()},className:"mt-2 text-red-500 hover:text-red-600 text-sm cursor-pointer",children:"حذف فایل"})]}):y.jsxs("div",{className:"border-2 border-dashed border-slate-300 dark:border-[#45464d] hover:border-primary bg-slate-50 dark:bg-[color:var(--color-bg)] rounded-xl p-4 text-center transition-all flex flex-col items-center justify-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-slate-500 dark:text-[#c6c6cd] select-none",children:"upload_file"}),y.jsx("span",{className:"text-body-sm text-surface/70",children:"برای آپلود عکس یا فایل نقشه کلیک کنید"}),n.required&&y.jsx("span",{className:"text-xs text-red-500",children:"* الزامی"})]})})]});const p=n.key==="phone";return y.jsxs("div",{className:"flex flex-col gap-1.5",children:[y.jsxs("label",{className:"text-label text-surface/70",children:[n.label,n.required&&y.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),y.jsx("input",{type:n.type==="number"?"number":"text",placeholder:n.placeholder||"",dir:p?"ltr":void 0,value:a,onChange:g=>i(g.target.value),className:`${h} ${p?"text-right":""}`}),p&&a&&!/^09[0-9]{9}$/.test(a)&&y.jsx("span",{className:"text-[11px] text-red-500",children:"شماره موبایل معتبر نیست"}),m&&y.jsx("span",{className:"text-[11px] text-red-500",children:m})]})}function By(){const{data:n}=sn(),a=n.settings,i=a.site_title||"NorthStarWin";return y.jsx("footer",{className:"bg-slate-900 text-slate-300 dark:bg-[#111113] border-t border-slate-800/80 pt-16 pb-8 px-4 sm:px-8 transition-colors duration-300",children:y.jsxs("div",{className:"max-w-[1200px] mx-auto",children:[y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12",children:[y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsx("h3",{className:"text-h3 text-white tracking-tight",children:i}),y.jsx("p",{className:"text-body-sm text-slate-400 max-w-[320px]",children:a.site_description||"تامین‌کننده برتر درب و پنجره UPVC در ایران با بالاترین استاندارد عایق‌بندی و امنیت."})]}),y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsx("h4",{className:"text-body font-bold text-white border-b border-slate-800 pb-2 w-fit",children:"لینک‌های سریع"}),y.jsxs("ul",{className:"flex flex-col gap-2.5 text-body-sm text-slate-400",children:[y.jsx("li",{children:y.jsx("a",{href:"#products",className:"hover:text-primary transition-colors inline-block",children:"محصولات"})}),y.jsx("li",{children:y.jsx("a",{href:"#s2",className:"hover:text-primary transition-colors inline-block",children:"همکاری"})}),y.jsx("li",{children:y.jsx("a",{href:"#s3",className:"hover:text-primary transition-colors inline-block",children:"ثبت سفارش"})})]})]}),y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsx("h4",{className:"text-body font-bold text-white border-b border-slate-800 pb-2 w-fit",children:"تماس با ما"}),y.jsxs("div",{className:"flex flex-col gap-3 text-body-sm text-slate-400",children:[y.jsxs("div",{className:"flex items-center gap-2.5",children:[y.jsx("span",{className:"material-symbols-outlined text-primary text-lg select-none",children:"call"}),y.jsx("span",{dir:"ltr",className:"font-semibold",children:a.site_phone||"+98 922 002 3242"})]}),y.jsxs("div",{className:"flex items-center gap-2.5",children:[y.jsx("span",{className:"material-symbols-outlined text-primary text-lg select-none",children:"mail"}),y.jsx("span",{children:a.site_email||"info@northstarwin.com"})]}),y.jsxs("div",{className:"flex items-center gap-2.5",children:[y.jsx("span",{className:"material-symbols-outlined text-primary text-lg select-none",children:"location_on"}),y.jsx("span",{children:a.site_address||"تهران، ایران"})]})]})]})]}),y.jsx("div",{className:"border-t border-slate-800/80 pt-6 text-center text-body-sm text-slate-500",children:y.jsxs("p",{children:["© ۱۴۰۵ ",i," — تمامی حقوق محفوظ است"]})})]})})}function Q3(){const{id:n}=ES(),a=ef(),{data:i}=sn();i.settings;const[o,u]=S.useState(null),[d,f]=S.useState(!0),[m,h]=S.useState(""),[p,g]=S.useState(!1),[b,_]=S.useState(null),[j,C]=S.useState("");S.useEffect(()=>{w()},[n]);const w=async()=>{try{const V=(await c0()).find(J=>J.id===parseInt(n||"0"));u(V||null)}catch(Z){console.error("Failed to load post:",Z)}finally{f(!1)}},A=()=>{a("/#blog")},D=async Z=>{if(Z.preventDefault(),!(!m.trim()||!o)){g(!0);try{await Ly(o.id,m),h(""),w()}catch(V){console.error("Failed to submit comment:",V),alert("ارسال نظر با خطا مواجه شد")}finally{g(!1)}}},k=async Z=>{if(!(!j.trim()||!o)){g(!0);try{await Ly(o.id,j,Z),C(""),_(null),w()}catch(V){console.error("Failed to submit reply:",V),alert("ارسال پاسخ با خطا مواجه شد")}finally{g(!1)}}},q=(Z,V=null,J=0)=>{const Q=Z.filter(E=>E.parent_id===V);return Q.length===0?null:y.jsx("div",{className:`${J>0?"mr-8 mt-4":""}`,children:Q.map(E=>y.jsxs("div",{className:"border-b border-slate-200 dark:border-white/10 py-4",children:[y.jsxs("div",{className:"flex items-start gap-3",children:[y.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold",children:E.author_name?.charAt(0)||"U"}),y.jsxs("div",{className:"flex-1",children:[y.jsxs("div",{className:"flex items-center justify-between mb-1",children:[y.jsx("span",{className:"font-bold text-surface",children:E.author_name||"ناشناس"}),y.jsx("span",{className:"text-label-sm text-surface/60",children:Qd(E.created_at)})]}),y.jsx("p",{className:"text-body-sm text-surface/80 mb-2",children:E.content}),E.is_approved===0&&y.jsxs("span",{className:"text-label-xs text-amber-600 flex items-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"pending"}),"در انتظار تایید"]}),J<2&&y.jsxs("button",{onClick:()=>_(b===E.id?null:E.id),className:"text-label-sm text-primary hover:text-primary-dark flex items-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"reply"}),"پاسخ"]}),b===E.id&&y.jsxs("form",{onSubmit:K=>{K.preventDefault(),k(E.id)},className:"mt-3",children:[y.jsx(Kd,{value:j,onChange:K=>C(K.target.value),placeholder:"پاسخ خود را بنویسید...",multiline:!0,rows:2,fullWidth:!0,className:"mb-2"}),y.jsxs("div",{className:"flex gap-2",children:[y.jsx($t,{type:"submit",disabled:p||!j.trim(),variant:"contained",size:"small",children:"ارسال پاسخ"}),y.jsx($t,{type:"button",onClick:()=>_(null),variant:"text",size:"small",children:"انصراف"})]})]})]})]}),q(Z,E.id,J+1)]},E.id))})};return d?y.jsx("div",{className:"flex justify-center items-center py-20",children:y.jsx("span",{className:"material-symbols-outlined text-4xl text-primary animate-spin",children:"progress_activity"})}):o?y.jsxs("section",{className:"py-12 px-4 sm:px-8 max-w-[900px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs($t,{variant:"text",onClick:A,className:"mb-6 text-body-sm font-bold text-surface hover:text-primary transition-colors",children:[y.jsx("span",{className:"material-symbols-outlined text-sm ml-1",children:"arrow_right_alt"}),"بازگشت به لیست مقالات"]}),y.jsxs("article",{className:"bg-surface dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200/60 dark:border-white/10 overflow-hidden",children:[o.image_url&&y.jsx("div",{className:"h-80 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",children:y.jsx("img",{src:o.image_url,alt:o.title,className:"w-full h-full object-cover"})}),y.jsxs("div",{className:"p-6 sm:p-8",children:[y.jsxs("div",{className:"flex items-center gap-2 mb-4 flex-wrap",children:[o.category&&y.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-label-sm font-bold bg-primary/10 text-primary",children:o.category}),y.jsxs("span",{className:"text-label-sm text-surface/60 flex items-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"schedule"}),Qd(o.created_at)]}),o.author_name&&y.jsxs("span",{className:"text-label-sm text-surface/60 flex items-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"person"}),o.author_name]})]}),y.jsx("h1",{className:"text-h2 text-surface font-bold mb-6 tracking-tight",children:o.title}),y.jsx("div",{className:"prose prose-slate dark:prose-invert max-w-none mb-8",children:o.content&&o.content.split(`
`).map((Z,V)=>y.jsx("p",{className:"text-body text-surface/80 mb-4 leading-relaxed",children:Z},V))}),y.jsxs("div",{className:"flex items-center gap-4 text-surface/60 mb-8 pb-8 border-b border-slate-200 dark:border-white/10",children:[y.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"visibility"}),o.view_count||0," بازدید"]}),y.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"chat_bubble"}),o.comment_count||0," نظر"]})]}),y.jsxs("div",{className:"mt-8",children:[y.jsxs("h3",{className:"text-h3 text-surface font-bold mb-4 flex items-center gap-2",children:[y.jsx("span",{className:"material-symbols-outlined text-primary",children:"chat_bubble"}),"نظرات (",o.comment_count||0,")"]}),y.jsxs("form",{onSubmit:D,className:"mb-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl",children:[y.jsx(Kd,{value:m,onChange:Z=>h(Z.target.value),placeholder:"نظر خود را بنویسید...",multiline:!0,rows:4,fullWidth:!0,className:"mb-3"}),y.jsx($t,{type:"submit",disabled:p||!m.trim(),variant:"contained",className:"bg-primary text-on-primary",children:p?y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"material-symbols-outlined text-sm animate-spin ml-2",children:"progress_activity"}),"در حال ارسال..."]}):y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"material-symbols-outlined text-sm ml-2",children:"send"}),"ارسال نظر"]})})]}),y.jsx("div",{className:"space-y-4",children:o.comments&&o.comments.length>0?q(o.comments):y.jsxs("div",{className:"text-center py-8 text-surface/60",children:[y.jsx("span",{className:"material-symbols-outlined text-4xl mb-2",children:"chat_bubble_outline"}),y.jsx("p",{children:"هنوز نظری ثبت نشده است. اولین نفر باشید!"})]})})]})]})]})]}):y.jsxs("div",{className:"text-center py-20",children:[y.jsx("span",{className:"material-symbols-outlined text-6xl text-surface/30 mb-4",children:"article"}),y.jsx("p",{className:"text-body text-surface/60",children:"مقاله‌ای یافت نشد"}),y.jsx($t,{onClick:A,variant:"text",className:"mt-4",children:"بازگشت به لیست مقالات"})]})}function Z3(){return y.jsx(sE,{children:y.jsxs(BS,{children:[y.jsx(xd,{path:"/",element:y.jsxs("div",{children:[y.jsx("div",{className:"mb-16 sm:mb-24",children:y.jsx(Uy,{})}),y.jsx(B3,{}),y.jsx(V3,{}),y.jsx(k3,{}),y.jsx(q3,{}),y.jsx(Y3,{}),y.jsx("div",{className:"mb-16 sm:mb-24",children:y.jsx(P3,{})}),y.jsx(X3,{}),y.jsx(By,{})]})}),y.jsx(xd,{path:"/blog/:id",element:y.jsxs("div",{children:[y.jsx(Uy,{}),y.jsx(Q3,{}),y.jsx(By,{})]})})]})})}var vd={exports:{}},Kl={},gd={exports:{}},yd={};var Vy;function F3(){return Vy||(Vy=1,(function(n){function a(z,X){var ee=z.length;z.push(X);e:for(;0<ee;){var pe=ee-1>>>1,de=z[pe];if(0<u(de,X))z[pe]=X,z[ee]=de,ee=pe;else break e}}function i(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var X=z[0],ee=z.pop();if(ee!==X){z[0]=ee;e:for(var pe=0,de=z.length,N=de>>>1;pe<N;){var G=2*(pe+1)-1,I=z[G],te=G+1,ce=z[te];if(0>u(I,ee))te<de&&0>u(ce,I)?(z[pe]=ce,z[te]=ee,pe=te):(z[pe]=I,z[G]=ee,pe=G);else if(te<de&&0>u(ce,ee))z[pe]=ce,z[te]=ee,pe=te;else break e}}return X}function u(z,X){var ee=z.sortIndex-X.sortIndex;return ee!==0?ee:z.id-X.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var f=Date,m=f.now();n.unstable_now=function(){return f.now()-m}}var h=[],p=[],g=1,b=null,_=3,j=!1,C=!1,w=!1,A=!1,D=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function Z(z){for(var X=i(p);X!==null;){if(X.callback===null)o(p);else if(X.startTime<=z)o(p),X.sortIndex=X.expirationTime,a(h,X);else break;X=i(p)}}function V(z){if(w=!1,Z(z),!C)if(i(h)!==null)C=!0,J||(J=!0,oe());else{var X=i(p);X!==null&&re(V,X.startTime-z)}}var J=!1,Q=-1,E=5,K=-1;function le(){return A?!0:!(n.unstable_now()-K<E)}function F(){if(A=!1,J){var z=n.unstable_now();K=z;var X=!0;try{e:{C=!1,w&&(w=!1,k(Q),Q=-1),j=!0;var ee=_;try{t:{for(Z(z),b=i(h);b!==null&&!(b.expirationTime>z&&le());){var pe=b.callback;if(typeof pe=="function"){b.callback=null,_=b.priorityLevel;var de=pe(b.expirationTime<=z);if(z=n.unstable_now(),typeof de=="function"){b.callback=de,Z(z),X=!0;break t}b===i(h)&&o(h),Z(z)}else o(h);b=i(h)}if(b!==null)X=!0;else{var N=i(p);N!==null&&re(V,N.startTime-z),X=!1}}break e}finally{b=null,_=ee,j=!1}X=void 0}}finally{X?oe():J=!1}}}var oe;if(typeof q=="function")oe=function(){q(F)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,W=R.port2;R.port1.onmessage=F,oe=function(){W.postMessage(null)}}else oe=function(){D(F,0)};function re(z,X){Q=D(function(){z(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return _},n.unstable_next=function(z){switch(_){case 1:case 2:case 3:var X=3;break;default:X=_}var ee=_;_=X;try{return z()}finally{_=ee}},n.unstable_requestPaint=function(){A=!0},n.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=_;_=z;try{return X()}finally{_=ee}},n.unstable_scheduleCallback=function(z,X,ee){var pe=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?pe+ee:pe):ee=pe,z){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ee+de,z={id:g++,callback:X,priorityLevel:z,startTime:ee,expirationTime:de,sortIndex:-1},ee>pe?(z.sortIndex=ee,a(p,z),i(h)===null&&z===i(p)&&(w?(k(Q),Q=-1):w=!0,re(V,ee-pe))):(z.sortIndex=de,a(h,z),C||j||(C=!0,J||(J=!0,oe()))),z},n.unstable_shouldYield=le,n.unstable_wrapCallback=function(z){var X=_;return function(){var ee=_;_=X;try{return z.apply(this,arguments)}finally{_=ee}}}})(yd)),yd}var Hy;function J3(){return Hy||(Hy=1,gd.exports=F3()),gd.exports}var ky;function W3(){if(ky)return Kl;ky=1;var n=J3(),a=Fd(),i=db();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(d(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,l=t;;){var s=r.return;if(s===null)break;var c=s.alternate;if(c===null){if(l=s.return,l!==null){r=l;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===r)return h(s),e;if(c===l)return h(s),t;c=c.sibling}throw Error(o(188))}if(r.return!==l.return)r=s,l=c;else{for(var v=!1,x=s.child;x;){if(x===r){v=!0,r=s,l=c;break}if(x===l){v=!0,l=s,r=c;break}x=x.sibling}if(!v){for(x=c.child;x;){if(x===r){v=!0,r=c,l=s;break}if(x===l){v=!0,l=c,r=s;break}x=x.sibling}if(!v)throw Error(o(189))}}if(r.alternate!==l)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,_=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),q=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case D:return"Profiler";case A:return"StrictMode";case V:return"Suspense";case J:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case q:return e.displayName||"Context";case k:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case E:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}var re=Array.isArray,z=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},pe=[],de=-1;function N(e){return{current:e}}function G(e){0>de||(e.current=pe[de],pe[de]=null,de--)}function I(e,t){de++,pe[de]=e.current,e.current=t}var te=N(null),ce=N(null),ve=N(null),Ae=N(null);function ft(e,t){switch(I(ve,t),I(ce,e),I(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?hv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=hv(t),e=pv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(te),I(te,e)}function Xe(){G(te),G(ce),G(ve)}function Fa(e){e.memoizedState!==null&&I(Ae,e);var t=te.current,r=pv(t,e.type);t!==r&&(I(ce,e),I(te,r))}function Si(e){ce.current===e&&(G(te),G(ce)),Ae.current===e&&(G(Ae),Vl._currentValue=ee)}var Es,Gf;function gr(e){if(Es===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Es=t&&t[1]||"",Gf=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Es+e+Gf}var Ts=!1;function ws(e,t){if(!e||Ts)return"";Ts=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(B){var U=B}Reflect.construct(e,[],P)}else{try{P.call()}catch(B){U=B}e.call(P.prototype)}}else{try{throw Error()}catch(B){U=B}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(B){if(B&&U&&typeof B.stack=="string")return[B.stack,U.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),v=c[0],x=c[1];if(v&&x){var T=v.split(`
`),L=x.split(`
`);for(s=l=0;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;for(;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;if(l===T.length||s===L.length)for(l=T.length-1,s=L.length-1;1<=l&&0<=s&&T[l]!==L[s];)s--;for(;1<=l&&0<=s;l--,s--)if(T[l]!==L[s]){if(l!==1||s!==1)do if(l--,s--,0>s||T[l]!==L[s]){var H=`
`+T[l].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=l&&0<=s);break}}}finally{Ts=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?gr(r):""}function f0(e,t){switch(e.tag){case 26:case 27:case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return e.child!==t&&t!==null?gr("Suspense Fallback"):gr("Suspense");case 19:return gr("SuspenseList");case 0:case 15:return ws(e.type,!1);case 11:return ws(e.type.render,!1);case 1:return ws(e.type,!0);case 31:return gr("Activity");default:return""}}function Xf(e){try{var t="",r=null;do t+=f0(e,r),r=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var As=Object.prototype.hasOwnProperty,js=n.unstable_scheduleCallback,Cs=n.unstable_cancelCallback,m0=n.unstable_shouldYield,h0=n.unstable_requestPaint,wt=n.unstable_now,p0=n.unstable_getCurrentPriorityLevel,Pf=n.unstable_ImmediatePriority,Kf=n.unstable_UserBlockingPriority,Ei=n.unstable_NormalPriority,v0=n.unstable_LowPriority,Qf=n.unstable_IdlePriority,g0=n.log,y0=n.unstable_setDisableYieldValue,Ja=null,At=null;function Vn(e){if(typeof g0=="function"&&y0(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Ja,e)}catch{}}var jt=Math.clz32?Math.clz32:_0,b0=Math.log,x0=Math.LN2;function _0(e){return e>>>=0,e===0?32:31-(b0(e)/x0|0)|0}var Ti=256,wi=262144,Ai=4194304;function yr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ji(e,t,r){var l=e.pendingLanes;if(l===0)return 0;var s=0,c=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var x=l&134217727;return x!==0?(l=x&~c,l!==0?s=yr(l):(v&=x,v!==0?s=yr(v):r||(r=x&~e,r!==0&&(s=yr(r))))):(x=l&~c,x!==0?s=yr(x):v!==0?s=yr(v):r||(r=l&~e,r!==0&&(s=yr(r)))),s===0?0:t!==0&&t!==s&&(t&c)===0&&(c=s&-s,r=t&-t,c>=r||c===32&&(r&4194048)!==0)?t:s}function Wa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function S0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zf(){var e=Ai;return Ai<<=1,(Ai&62914560)===0&&(Ai=4194304),e}function Ns(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ia(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function E0(e,t,r,l,s,c){var v=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var x=e.entanglements,T=e.expirationTimes,L=e.hiddenUpdates;for(r=v&~r;0<r;){var H=31-jt(r),P=1<<H;x[H]=0,T[H]=-1;var U=L[H];if(U!==null)for(L[H]=null,H=0;H<U.length;H++){var B=U[H];B!==null&&(B.lane&=-536870913)}r&=~P}l!==0&&Ff(e,l,0),c!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=c&~(v&~t))}function Ff(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-jt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function Jf(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var l=31-jt(r),s=1<<l;s&t|e[l]&t&&(e[l]|=t),r&=~s}}function Wf(e,t){var r=t&-t;return r=(r&42)!==0?1:Ms(r),(r&(e.suspendedLanes|t))!==0?0:r}function Ms(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function If(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Bv(e.type))}function em(e,t){var r=X.p;try{return X.p=e,t()}finally{X.p=r}}var Hn=Math.random().toString(36).slice(2),rt="__reactFiber$"+Hn,yt="__reactProps$"+Hn,Qr="__reactContainer$"+Hn,zs="__reactEvents$"+Hn,T0="__reactListeners$"+Hn,w0="__reactHandles$"+Hn,tm="__reactResources$"+Hn,el="__reactMarker$"+Hn;function Ds(e){delete e[rt],delete e[yt],delete e[zs],delete e[T0],delete e[w0]}function Zr(e){var t=e[rt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Qr]||r[rt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Sv(e);e!==null;){if(r=e[rt])return r;e=Sv(e)}return t}e=r,r=e.parentNode}return null}function Fr(e){if(e=e[rt]||e[Qr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function tl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Jr(e){var t=e[tm];return t||(t=e[tm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[el]=!0}var nm=new Set,rm={};function br(e,t){Wr(e,t),Wr(e+"Capture",t)}function Wr(e,t){for(rm[e]=t,e=0;e<t.length;e++)nm.add(t[e])}var A0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),am={},lm={};function j0(e){return As.call(lm,e)?!0:As.call(am,e)?!1:A0.test(e)?lm[e]=!0:(am[e]=!0,!1)}function Ci(e,t,r){if(j0(t))if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+r)}}function Ni(e,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function yn(e,t,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+l)}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function im(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function C0(e,t,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,c=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(v){r=""+v,c.call(this,v)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(v){r=""+v},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Os(e){if(!e._valueTracker){var t=im(e)?"checked":"value";e._valueTracker=C0(e,t,""+e[t])}}function om(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),l="";return e&&(l=im(e)?e.checked?"true":"false":e.value),e=l,e!==r?(t.setValue(e),!0):!1}function Mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var N0=/[\n"\\]/g;function Ut(e){return e.replace(N0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $s(e,t,r,l,s,c,v,x){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),t!=null?v==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Lt(t)):e.value!==""+Lt(t)&&(e.value=""+Lt(t)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),t!=null?Ls(e,v,Lt(t)):r!=null?Ls(e,v,Lt(r)):l!=null&&e.removeAttribute("value"),s==null&&c!=null&&(e.defaultChecked=!!c),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Lt(x):e.removeAttribute("name")}function sm(e,t,r,l,s,c,v,x){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||r!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Os(e);return}r=r!=null?""+Lt(r):"",t=t!=null?""+Lt(t):r,x||t===e.value||(e.value=t),e.defaultValue=t}l=l??s,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=x?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Os(e)}function Ls(e,t,r){t==="number"&&Mi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Ir(e,t,r,l){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Lt(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function um(e,t,r){if(t!=null&&(t=""+Lt(t),t!==e.value&&(e.value=t),r==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=r!=null?""+Lt(r):""}function cm(e,t,r,l){if(t==null){if(l!=null){if(r!=null)throw Error(o(92));if(re(l)){if(1<l.length)throw Error(o(93));l=l[0]}r=l}r==null&&(r=""),t=r}r=Lt(t),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Os(e)}function ea(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var M0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dm(e,t,r){var l=t.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,r):typeof r!="number"||r===0||M0.has(t)?t==="float"?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function fm(e,t,r){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var s in t)l=t[s],t.hasOwnProperty(s)&&r[s]!==l&&dm(e,s,l)}else for(var c in t)t.hasOwnProperty(c)&&dm(e,c,t[c])}function Us(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),z0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return z0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function bn(){}var Bs=null;function Vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ta=null,na=null;function mm(e){var t=Fr(e);if(t&&(e=t.stateNode)){var r=e[yt]||null;e:switch(e=t.stateNode,t.type){case"input":if($s(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var l=r[t];if(l!==e&&l.form===e.form){var s=l[yt]||null;if(!s)throw Error(o(90));$s(l,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<r.length;t++)l=r[t],l.form===e.form&&om(l)}break e;case"textarea":um(e,r.value,r.defaultValue);break e;case"select":t=r.value,t!=null&&Ir(e,!!r.multiple,t,!1)}}}var Hs=!1;function hm(e,t,r){if(Hs)return e(t,r);Hs=!0;try{var l=e(t);return l}finally{if(Hs=!1,(ta!==null||na!==null)&&(bo(),ta&&(t=ta,e=na,na=ta=null,mm(t),e)))for(t=0;t<e.length;t++)mm(e[t])}}function nl(e,t){var r=e.stateNode;if(r===null)return null;var l=r[yt]||null;if(l===null)return null;r=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ks=!1;if(xn)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){ks=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{ks=!1}var kn=null,Ys=null,zi=null;function pm(){if(zi)return zi;var e,t=Ys,r=t.length,l,s="value"in kn?kn.value:kn.textContent,c=s.length;for(e=0;e<r&&t[e]===s[e];e++);var v=r-e;for(l=1;l<=v&&t[r-l]===s[c-l];l++);return zi=s.slice(e,1<l?1-l:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function vm(){return!1}function bt(e){function t(r,l,s,c,v){this._reactName=r,this._targetInst=s,this.type=l,this.nativeEvent=c,this.target=v,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(r=e[x],this[x]=r?r(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Oi:vm,this.isPropagationStopped=vm,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=bt(xr),al=b({},xr,{view:0,detail:0}),D0=bt(al),qs,Gs,ll,Li=b({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ll&&(ll&&e.type==="mousemove"?(qs=e.screenX-ll.screenX,Gs=e.screenY-ll.screenY):Gs=qs=0,ll=e),qs)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),gm=bt(Li),O0=b({},Li,{dataTransfer:0}),$0=bt(O0),L0=b({},al,{relatedTarget:0}),Xs=bt(L0),U0=b({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=bt(U0),V0=b({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H0=bt(V0),k0=b({},xr,{data:0}),ym=bt(k0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=G0[e])?!!t[e]:!1}function Ps(){return X0}var P0=b({},al,{key:function(e){if(e.key){var t=Y0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K0=bt(P0),Q0=b({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=bt(Q0),Z0=b({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),F0=bt(Z0),J0=b({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),W0=bt(J0),I0=b({},Li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e_=bt(I0),t_=b({},xr,{newState:0,oldState:0}),n_=bt(t_),r_=[9,13,27,32],Ks=xn&&"CompositionEvent"in window,il=null;xn&&"documentMode"in document&&(il=document.documentMode);var a_=xn&&"TextEvent"in window&&!il,xm=xn&&(!Ks||il&&8<il&&11>=il),_m=" ",Sm=!1;function Em(e,t){switch(e){case"keyup":return r_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ra=!1;function l_(e,t){switch(e){case"compositionend":return Tm(t);case"keypress":return t.which!==32?null:(Sm=!0,_m);case"textInput":return e=t.data,e===_m&&Sm?null:e;default:return null}}function i_(e,t){if(ra)return e==="compositionend"||!Ks&&Em(e,t)?(e=pm(),zi=Ys=kn=null,ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xm&&t.locale!=="ko"?null:t.data;default:return null}}var o_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!o_[e.type]:t==="textarea"}function Am(e,t,r,l){ta?na?na.push(l):na=[l]:ta=l,t=Ao(t,"onChange"),0<t.length&&(r=new $i("onChange","change",null,r,l),e.push({event:r,listeners:t}))}var ol=null,sl=null;function s_(e){sv(e,0)}function Ui(e){var t=tl(e);if(om(t))return e}function jm(e,t){if(e==="change")return t}var Cm=!1;if(xn){var Qs;if(xn){var Zs="oninput"in document;if(!Zs){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),Zs=typeof Nm.oninput=="function"}Qs=Zs}else Qs=!1;Cm=Qs&&(!document.documentMode||9<document.documentMode)}function Mm(){ol&&(ol.detachEvent("onpropertychange",Rm),sl=ol=null)}function Rm(e){if(e.propertyName==="value"&&Ui(sl)){var t=[];Am(t,sl,e,Vs(e)),hm(s_,t)}}function u_(e,t,r){e==="focusin"?(Mm(),ol=t,sl=r,ol.attachEvent("onpropertychange",Rm)):e==="focusout"&&Mm()}function c_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(sl)}function d_(e,t){if(e==="click")return Ui(t)}function f_(e,t){if(e==="input"||e==="change")return Ui(t)}function m_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:m_;function ul(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),l=Object.keys(t);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var s=r[l];if(!As.call(t,s)||!Ct(e[s],t[s]))return!1}return!0}function zm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dm(e,t){var r=zm(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=t&&l>=t)return{node:r,offset:t-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=zm(r)}}function Om(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Om(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $m(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mi(e.document);t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Mi(e.document)}return t}function Fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var h_=xn&&"documentMode"in document&&11>=document.documentMode,aa=null,Js=null,cl=null,Ws=!1;function Lm(e,t,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ws||aa==null||aa!==Mi(l)||(l=aa,"selectionStart"in l&&Fs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),cl&&ul(cl,l)||(cl=l,l=Ao(Js,"onSelect"),0<l.length&&(t=new $i("onSelect","select",null,t,r),e.push({event:t,listeners:l}),t.target=aa)))}function _r(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var la={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},Is={},Um={};xn&&(Um=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function Sr(e){if(Is[e])return Is[e];if(!la[e])return e;var t=la[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Um)return Is[e]=t[r];return e}var Bm=Sr("animationend"),Vm=Sr("animationiteration"),Hm=Sr("animationstart"),p_=Sr("transitionrun"),v_=Sr("transitionstart"),g_=Sr("transitioncancel"),km=Sr("transitionend"),Ym=new Map,eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eu.push("scrollEnd");function en(e,t){Ym.set(e,t),br(t,[e])}var Bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Bt=[],ia=0,tu=0;function Vi(){for(var e=ia,t=tu=ia=0;t<e;){var r=Bt[t];Bt[t++]=null;var l=Bt[t];Bt[t++]=null;var s=Bt[t];Bt[t++]=null;var c=Bt[t];if(Bt[t++]=null,l!==null&&s!==null){var v=l.pending;v===null?s.next=s:(s.next=v.next,v.next=s),l.pending=s}c!==0&&qm(r,s,c)}}function Hi(e,t,r,l){Bt[ia++]=e,Bt[ia++]=t,Bt[ia++]=r,Bt[ia++]=l,tu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function nu(e,t,r,l){return Hi(e,t,r,l),ki(e)}function Er(e,t){return Hi(e,null,null,t),ki(e)}function qm(e,t,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var s=!1,c=e.return;c!==null;)c.childLanes|=r,l=c.alternate,l!==null&&(l.childLanes|=r),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(s=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,s&&t!==null&&(s=31-jt(r),e=c.hiddenUpdates,l=e[s],l===null?e[s]=[t]:l.push(t),t.lane=r|536870912),c):null}function ki(e){if(50<zl)throw zl=0,dc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var oa={};function y_(e,t,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,r,l){return new y_(e,t,r,l)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _n(e,t){var r=e.alternate;return r===null?(r=Nt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Gm(e,t){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yi(e,t,r,l,s,c){var v=0;if(l=e,typeof e=="function")ru(e)&&(v=1);else if(typeof e=="string")v=E1(e,r,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=Nt(31,r,t,s),e.elementType=K,e.lanes=c,e;case w:return Tr(r.children,s,c,t);case A:v=8,s|=24;break;case D:return e=Nt(12,r,t,s|2),e.elementType=D,e.lanes=c,e;case V:return e=Nt(13,r,t,s),e.elementType=V,e.lanes=c,e;case J:return e=Nt(19,r,t,s),e.elementType=J,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:v=10;break e;case k:v=9;break e;case Z:v=11;break e;case Q:v=14;break e;case E:v=16,l=null;break e}v=29,r=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Nt(v,r,t,s),t.elementType=e,t.type=l,t.lanes=c,t}function Tr(e,t,r,l){return e=Nt(7,e,l,t),e.lanes=r,e}function au(e,t,r){return e=Nt(6,e,null,t),e.lanes=r,e}function Xm(e){var t=Nt(18,null,null,0);return t.stateNode=e,t}function lu(e,t,r){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pm=new WeakMap;function Vt(e,t){if(typeof e=="object"&&e!==null){var r=Pm.get(e);return r!==void 0?r:(t={value:e,source:t,stack:Xf(t)},Pm.set(e,t),t)}return{value:e,source:t,stack:Xf(t)}}var sa=[],ua=0,qi=null,dl=0,Ht=[],kt=0,Yn=null,un=1,cn="";function Sn(e,t){sa[ua++]=dl,sa[ua++]=qi,qi=e,dl=t}function Km(e,t,r){Ht[kt++]=un,Ht[kt++]=cn,Ht[kt++]=Yn,Yn=e;var l=un;e=cn;var s=32-jt(l)-1;l&=~(1<<s),r+=1;var c=32-jt(t)+s;if(30<c){var v=s-s%5;c=(l&(1<<v)-1).toString(32),l>>=v,s-=v,un=1<<32-jt(t)+s|r<<s|l,cn=c+e}else un=1<<c|r<<s|l,cn=e}function iu(e){e.return!==null&&(Sn(e,1),Km(e,1,0))}function ou(e){for(;e===qi;)qi=sa[--ua],sa[ua]=null,dl=sa[--ua],sa[ua]=null;for(;e===Yn;)Yn=Ht[--kt],Ht[kt]=null,cn=Ht[--kt],Ht[kt]=null,un=Ht[--kt],Ht[kt]=null}function Qm(e,t){Ht[kt++]=un,Ht[kt++]=cn,Ht[kt++]=Yn,un=t.id,cn=t.overflow,Yn=e}var at=null,Oe=null,_e=!1,qn=null,Yt=!1,su=Error(o(519));function Gn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fl(Vt(t,e)),su}function Zm(e){var t=e.stateNode,r=e.type,l=e.memoizedProps;switch(t[rt]=e,t[yt]=l,r){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(r=0;r<Ol.length;r++)ye(Ol[r],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),sm(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),cm(t,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||t.textContent===""+r||l.suppressHydrationWarning===!0||fv(t.textContent,r)?(l.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),l.onScroll!=null&&ye("scroll",t),l.onScrollEnd!=null&&ye("scrollend",t),l.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||Gn(e,!0)}function Fm(e){for(at=e.return;at;)switch(at.tag){case 5:case 31:case 13:Yt=!1;return;case 27:case 3:Yt=!0;return;default:at=at.return}}function ca(e){if(e!==at)return!1;if(!_e)return Fm(e),_e=!0,!1;var t=e.tag,r;if((r=t!==3&&t!==27)&&((r=t===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Ac(e.type,e.memoizedProps)),r=!r),r&&Oe&&Gn(e),Fm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Oe=_v(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Oe=_v(e)}else t===27?(t=Oe,ar(e.type)?(e=Rc,Rc=null,Oe=e):Oe=t):Oe=at?Gt(e.stateNode.nextSibling):null;return!0}function wr(){Oe=at=null,_e=!1}function uu(){var e=qn;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),qn=null),e}function fl(e){qn===null?qn=[e]:qn.push(e)}var cu=N(null),Ar=null,En=null;function Xn(e,t,r){I(cu,t._currentValue),t._currentValue=r}function Tn(e){e._currentValue=cu.current,G(cu)}function du(e,t,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===r)break;e=e.return}}function fu(e,t,r,l){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){var v=s.child;c=c.firstContext;e:for(;c!==null;){var x=c;c=s;for(var T=0;T<t.length;T++)if(x.context===t[T]){c.lanes|=r,x=c.alternate,x!==null&&(x.lanes|=r),du(c.return,r,e),l||(v=null);break e}c=x.next}}else if(s.tag===18){if(v=s.return,v===null)throw Error(o(341));v.lanes|=r,c=v.alternate,c!==null&&(c.lanes|=r),du(v,r,e),v=null}else v=s.child;if(v!==null)v.return=s;else for(v=s;v!==null;){if(v===e){v=null;break}if(s=v.sibling,s!==null){s.return=v.return,v=s;break}v=v.return}s=v}}function da(e,t,r,l){e=null;for(var s=t,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var v=s.alternate;if(v===null)throw Error(o(387));if(v=v.memoizedProps,v!==null){var x=s.type;Ct(s.pendingProps.value,v.value)||(e!==null?e.push(x):e=[x])}}else if(s===Ae.current){if(v=s.alternate,v===null)throw Error(o(387));v.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Vl):e=[Vl])}s=s.return}e!==null&&fu(t,e,r,l),t.flags|=262144}function Gi(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function jr(e){Ar=e,En=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return Jm(Ar,e)}function Xi(e,t){return Ar===null&&jr(e),Jm(e,t)}function Jm(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},En===null){if(e===null)throw Error(o(308));En=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else En=En.next=t;return r}var b_=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(r){return r()})}},x_=n.unstable_scheduleCallback,__=n.unstable_NormalPriority,Ze={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new b_,data:new Map,refCount:0}}function ml(e){e.refCount--,e.refCount===0&&x_(__,function(){e.controller.abort()})}var hl=null,hu=0,fa=0,ma=null;function S_(e,t){if(hl===null){var r=hl=[];hu=0,fa=gc(),ma={status:"pending",value:void 0,then:function(l){r.push(l)}}}return hu++,t.then(Wm,Wm),t}function Wm(){if(--hu===0&&hl!==null){ma!==null&&(ma.status="fulfilled");var e=hl;hl=null,fa=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function E_(e,t){var r=[],l={status:"pending",value:null,reason:null,then:function(s){r.push(s)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var s=0;s<r.length;s++)(0,r[s])(t)},function(s){for(l.status="rejected",l.reason=s,s=0;s<r.length;s++)(0,r[s])(void 0)}),l}var Im=z.S;z.S=function(e,t){Lp=wt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&S_(e,t),Im!==null&&Im(e,t)};var Cr=N(null);function pu(){var e=Cr.current;return e!==null?e:ze.pooledCache}function Pi(e,t){t===null?I(Cr,Cr.current):I(Cr,t.pool)}function eh(){var e=pu();return e===null?null:{parent:Ze._currentValue,pool:e}}var ha=Error(o(460)),vu=Error(o(474)),Ki=Error(o(542)),Qi={then:function(){}};function th(e){return e=e.status,e==="fulfilled"||e==="rejected"}function nh(e,t,r){switch(r=e[r],r===void 0?e.push(t):r!==t&&(t.then(bn,bn),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ah(e),e;default:if(typeof t.status=="string")t.then(bn,bn);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=l}},function(l){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ah(e),e}throw Mr=t,ha}}function Nr(e){try{var t=e._init;return t(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Mr=r,ha):r}}var Mr=null;function rh(){if(Mr===null)throw Error(o(459));var e=Mr;return Mr=null,e}function ah(e){if(e===ha||e===Ki)throw Error(o(483))}var pa=null,pl=0;function Zi(e){var t=pl;return pl+=1,pa===null&&(pa=[]),nh(pa,e,t)}function vl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fi(e,t){throw t.$$typeof===_?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function lh(e){function t(O,M){if(e){var $=O.deletions;$===null?(O.deletions=[M],O.flags|=16):$.push(M)}}function r(O,M){if(!e)return null;for(;M!==null;)t(O,M),M=M.sibling;return null}function l(O){for(var M=new Map;O!==null;)O.key!==null?M.set(O.key,O):M.set(O.index,O),O=O.sibling;return M}function s(O,M){return O=_n(O,M),O.index=0,O.sibling=null,O}function c(O,M,$){return O.index=$,e?($=O.alternate,$!==null?($=$.index,$<M?(O.flags|=67108866,M):$):(O.flags|=67108866,M)):(O.flags|=1048576,M)}function v(O){return e&&O.alternate===null&&(O.flags|=67108866),O}function x(O,M,$,Y){return M===null||M.tag!==6?(M=au($,O.mode,Y),M.return=O,M):(M=s(M,$),M.return=O,M)}function T(O,M,$,Y){var ie=$.type;return ie===w?H(O,M,$.props.children,Y,$.key):M!==null&&(M.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===E&&Nr(ie)===M.type)?(M=s(M,$.props),vl(M,$),M.return=O,M):(M=Yi($.type,$.key,$.props,null,O.mode,Y),vl(M,$),M.return=O,M)}function L(O,M,$,Y){return M===null||M.tag!==4||M.stateNode.containerInfo!==$.containerInfo||M.stateNode.implementation!==$.implementation?(M=lu($,O.mode,Y),M.return=O,M):(M=s(M,$.children||[]),M.return=O,M)}function H(O,M,$,Y,ie){return M===null||M.tag!==7?(M=Tr($,O.mode,Y,ie),M.return=O,M):(M=s(M,$),M.return=O,M)}function P(O,M,$){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=au(""+M,O.mode,$),M.return=O,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case j:return $=Yi(M.type,M.key,M.props,null,O.mode,$),vl($,M),$.return=O,$;case C:return M=lu(M,O.mode,$),M.return=O,M;case E:return M=Nr(M),P(O,M,$)}if(re(M)||oe(M))return M=Tr(M,O.mode,$,null),M.return=O,M;if(typeof M.then=="function")return P(O,Zi(M),$);if(M.$$typeof===q)return P(O,Xi(O,M),$);Fi(O,M)}return null}function U(O,M,$,Y){var ie=M!==null?M.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ie!==null?null:x(O,M,""+$,Y);if(typeof $=="object"&&$!==null){switch($.$$typeof){case j:return $.key===ie?T(O,M,$,Y):null;case C:return $.key===ie?L(O,M,$,Y):null;case E:return $=Nr($),U(O,M,$,Y)}if(re($)||oe($))return ie!==null?null:H(O,M,$,Y,null);if(typeof $.then=="function")return U(O,M,Zi($),Y);if($.$$typeof===q)return U(O,M,Xi(O,$),Y);Fi(O,$)}return null}function B(O,M,$,Y,ie){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return O=O.get($)||null,x(M,O,""+Y,ie);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case j:return O=O.get(Y.key===null?$:Y.key)||null,T(M,O,Y,ie);case C:return O=O.get(Y.key===null?$:Y.key)||null,L(M,O,Y,ie);case E:return Y=Nr(Y),B(O,M,$,Y,ie)}if(re(Y)||oe(Y))return O=O.get($)||null,H(M,O,Y,ie,null);if(typeof Y.then=="function")return B(O,M,$,Zi(Y),ie);if(Y.$$typeof===q)return B(O,M,$,Xi(M,Y),ie);Fi(M,Y)}return null}function ne(O,M,$,Y){for(var ie=null,Ee=null,ae=M,he=M=0,xe=null;ae!==null&&he<$.length;he++){ae.index>he?(xe=ae,ae=null):xe=ae.sibling;var Te=U(O,ae,$[he],Y);if(Te===null){ae===null&&(ae=xe);break}e&&ae&&Te.alternate===null&&t(O,ae),M=c(Te,M,he),Ee===null?ie=Te:Ee.sibling=Te,Ee=Te,ae=xe}if(he===$.length)return r(O,ae),_e&&Sn(O,he),ie;if(ae===null){for(;he<$.length;he++)ae=P(O,$[he],Y),ae!==null&&(M=c(ae,M,he),Ee===null?ie=ae:Ee.sibling=ae,Ee=ae);return _e&&Sn(O,he),ie}for(ae=l(ae);he<$.length;he++)xe=B(ae,O,he,$[he],Y),xe!==null&&(e&&xe.alternate!==null&&ae.delete(xe.key===null?he:xe.key),M=c(xe,M,he),Ee===null?ie=xe:Ee.sibling=xe,Ee=xe);return e&&ae.forEach(function(ur){return t(O,ur)}),_e&&Sn(O,he),ie}function se(O,M,$,Y){if($==null)throw Error(o(151));for(var ie=null,Ee=null,ae=M,he=M=0,xe=null,Te=$.next();ae!==null&&!Te.done;he++,Te=$.next()){ae.index>he?(xe=ae,ae=null):xe=ae.sibling;var ur=U(O,ae,Te.value,Y);if(ur===null){ae===null&&(ae=xe);break}e&&ae&&ur.alternate===null&&t(O,ae),M=c(ur,M,he),Ee===null?ie=ur:Ee.sibling=ur,Ee=ur,ae=xe}if(Te.done)return r(O,ae),_e&&Sn(O,he),ie;if(ae===null){for(;!Te.done;he++,Te=$.next())Te=P(O,Te.value,Y),Te!==null&&(M=c(Te,M,he),Ee===null?ie=Te:Ee.sibling=Te,Ee=Te);return _e&&Sn(O,he),ie}for(ae=l(ae);!Te.done;he++,Te=$.next())Te=B(ae,O,he,Te.value,Y),Te!==null&&(e&&Te.alternate!==null&&ae.delete(Te.key===null?he:Te.key),M=c(Te,M,he),Ee===null?ie=Te:Ee.sibling=Te,Ee=Te);return e&&ae.forEach(function(O1){return t(O,O1)}),_e&&Sn(O,he),ie}function Re(O,M,$,Y){if(typeof $=="object"&&$!==null&&$.type===w&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case j:e:{for(var ie=$.key;M!==null;){if(M.key===ie){if(ie=$.type,ie===w){if(M.tag===7){r(O,M.sibling),Y=s(M,$.props.children),Y.return=O,O=Y;break e}}else if(M.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===E&&Nr(ie)===M.type){r(O,M.sibling),Y=s(M,$.props),vl(Y,$),Y.return=O,O=Y;break e}r(O,M);break}else t(O,M);M=M.sibling}$.type===w?(Y=Tr($.props.children,O.mode,Y,$.key),Y.return=O,O=Y):(Y=Yi($.type,$.key,$.props,null,O.mode,Y),vl(Y,$),Y.return=O,O=Y)}return v(O);case C:e:{for(ie=$.key;M!==null;){if(M.key===ie)if(M.tag===4&&M.stateNode.containerInfo===$.containerInfo&&M.stateNode.implementation===$.implementation){r(O,M.sibling),Y=s(M,$.children||[]),Y.return=O,O=Y;break e}else{r(O,M);break}else t(O,M);M=M.sibling}Y=lu($,O.mode,Y),Y.return=O,O=Y}return v(O);case E:return $=Nr($),Re(O,M,$,Y)}if(re($))return ne(O,M,$,Y);if(oe($)){if(ie=oe($),typeof ie!="function")throw Error(o(150));return $=ie.call($),se(O,M,$,Y)}if(typeof $.then=="function")return Re(O,M,Zi($),Y);if($.$$typeof===q)return Re(O,M,Xi(O,$),Y);Fi(O,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,M!==null&&M.tag===6?(r(O,M.sibling),Y=s(M,$),Y.return=O,O=Y):(r(O,M),Y=au($,O.mode,Y),Y.return=O,O=Y),v(O)):r(O,M)}return function(O,M,$,Y){try{pl=0;var ie=Re(O,M,$,Y);return pa=null,ie}catch(ae){if(ae===ha||ae===Ki)throw ae;var Ee=Nt(29,ae,null,O.mode);return Ee.lanes=Y,Ee.return=O,Ee}}}var Rr=lh(!0),ih=lh(!1),Pn=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(we&2)!==0){var s=l.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),l.pending=t,t=ki(e),qm(e,null,r),t}return Hi(e,l,t,r),ki(e)}function gl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,Jf(e,r)}}function bu(e,t){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var s=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var v={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};c===null?s=c=v:c=c.next=v,r=r.next}while(r!==null);c===null?s=c=t:c=c.next=t}else s=c=t;r={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var xu=!1;function yl(){if(xu){var e=ma;if(e!==null)throw e}}function bl(e,t,r,l){xu=!1;var s=e.updateQueue;Pn=!1;var c=s.firstBaseUpdate,v=s.lastBaseUpdate,x=s.shared.pending;if(x!==null){s.shared.pending=null;var T=x,L=T.next;T.next=null,v===null?c=L:v.next=L,v=T;var H=e.alternate;H!==null&&(H=H.updateQueue,x=H.lastBaseUpdate,x!==v&&(x===null?H.firstBaseUpdate=L:x.next=L,H.lastBaseUpdate=T))}if(c!==null){var P=s.baseState;v=0,H=L=T=null,x=c;do{var U=x.lane&-536870913,B=U!==x.lane;if(B?(be&U)===U:(l&U)===U){U!==0&&U===fa&&(xu=!0),H!==null&&(H=H.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var ne=e,se=x;U=t;var Re=r;switch(se.tag){case 1:if(ne=se.payload,typeof ne=="function"){P=ne.call(Re,P,U);break e}P=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=se.payload,U=typeof ne=="function"?ne.call(Re,P,U):ne,U==null)break e;P=b({},P,U);break e;case 2:Pn=!0}}U=x.callback,U!==null&&(e.flags|=64,B&&(e.flags|=8192),B=s.callbacks,B===null?s.callbacks=[U]:B.push(U))}else B={lane:U,tag:x.tag,payload:x.payload,callback:x.callback,next:null},H===null?(L=H=B,T=P):H=H.next=B,v|=U;if(x=x.next,x===null){if(x=s.shared.pending,x===null)break;B=x,x=B.next,B.next=null,s.lastBaseUpdate=B,s.shared.pending=null}}while(!0);H===null&&(T=P),s.baseState=T,s.firstBaseUpdate=L,s.lastBaseUpdate=H,c===null&&(s.shared.lanes=0),In|=v,e.lanes=v,e.memoizedState=P}}function oh(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function sh(e,t){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)oh(r[e],t)}var va=N(null),Ji=N(0);function uh(e,t){e=Dn,I(Ji,e),I(va,t),Dn=e|t.baseLanes}function _u(){I(Ji,Dn),I(va,va.current)}function Su(){Dn=Ji.current,G(va),G(Ji)}var Mt=N(null),qt=null;function Zn(e){var t=e.alternate;I(Pe,Pe.current&1),I(Mt,e),qt===null&&(t===null||va.current!==null||t.memoizedState!==null)&&(qt=e)}function Eu(e){I(Pe,Pe.current),I(Mt,e),qt===null&&(qt=e)}function ch(e){e.tag===22?(I(Pe,Pe.current),I(Mt,e),qt===null&&(qt=e)):Fn()}function Fn(){I(Pe,Pe.current),I(Mt,Mt.current)}function Rt(e){G(Mt),qt===e&&(qt=null),G(Pe)}var Pe=N(0);function Wi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Nc(r)||Mc(r)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wn=0,me=null,Ne=null,Fe=null,Ii=!1,ga=!1,zr=!1,eo=0,xl=0,ya=null,T_=0;function ke(){throw Error(o(321))}function Tu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ct(e[r],t[r]))return!1;return!0}function wu(e,t,r,l,s,c){return wn=c,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Kh:Hu,zr=!1,c=r(l,s),zr=!1,ga&&(c=fh(t,r,l,s)),dh(e),c}function dh(e){z.H=El;var t=Ne!==null&&Ne.next!==null;if(wn=0,Fe=Ne=me=null,Ii=!1,xl=0,ya=null,t)throw Error(o(300));e===null||Je||(e=e.dependencies,e!==null&&Gi(e)&&(Je=!0))}function fh(e,t,r,l){me=e;var s=0;do{if(ga&&(ya=null),xl=0,ga=!1,25<=s)throw Error(o(301));if(s+=1,Fe=Ne=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}z.H=Qh,c=t(r,l)}while(ga);return c}function w_(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?_l(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(me.flags|=1024),t}function Au(){var e=eo!==0;return eo=0,e}function ju(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function Cu(e){if(Ii){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ii=!1}wn=0,Fe=Ne=me=null,ga=!1,xl=eo=0,ya=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?me.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ke(){if(Ne===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Fe===null?me.memoizedState:Fe.next;if(t!==null)Fe=t,Ne=e;else{if(e===null)throw me.alternate===null?Error(o(467)):Error(o(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Fe===null?me.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function to(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _l(e){var t=xl;return xl+=1,ya===null&&(ya=[]),e=nh(ya,e,t),t=me,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Kh:Hu),e}function no(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _l(e);if(e.$$typeof===q)return lt(e)}throw Error(o(438,String(e)))}function Nu(e){var t=null,r=me.updateQueue;if(r!==null&&(t=r.memoCache),t==null){var l=me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),r===null&&(r=to(),me.updateQueue=r),r.memoCache=t,r=t.data[t.index],r===void 0)for(r=t.data[t.index]=Array(e),l=0;l<e;l++)r[l]=le;return t.index++,r}function An(e,t){return typeof t=="function"?t(e):t}function ro(e){var t=Ke();return Mu(t,Ne,e)}function Mu(e,t,r){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=r;var s=e.baseQueue,c=l.pending;if(c!==null){if(s!==null){var v=s.next;s.next=c.next,c.next=v}t.baseQueue=s=c,l.pending=null}if(c=e.baseState,s===null)e.memoizedState=c;else{t=s.next;var x=v=null,T=null,L=t,H=!1;do{var P=L.lane&-536870913;if(P!==L.lane?(be&P)===P:(wn&P)===P){var U=L.revertLane;if(U===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),P===fa&&(H=!0);else if((wn&U)===U){L=L.next,U===fa&&(H=!0);continue}else P={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},T===null?(x=T=P,v=c):T=T.next=P,me.lanes|=U,In|=U;P=L.action,zr&&r(c,P),c=L.hasEagerState?L.eagerState:r(c,P)}else U={lane:P,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},T===null?(x=T=U,v=c):T=T.next=U,me.lanes|=P,In|=P;L=L.next}while(L!==null&&L!==t);if(T===null?v=c:T.next=x,!Ct(c,e.memoizedState)&&(Je=!0,H&&(r=ma,r!==null)))throw r;e.memoizedState=c,e.baseState=v,e.baseQueue=T,l.lastRenderedState=c}return s===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ru(e){var t=Ke(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var l=r.dispatch,s=r.pending,c=t.memoizedState;if(s!==null){r.pending=null;var v=s=s.next;do c=e(c,v.action),v=v.next;while(v!==s);Ct(c,t.memoizedState)||(Je=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,l]}function mh(e,t,r){var l=me,s=Ke(),c=_e;if(c){if(r===void 0)throw Error(o(407));r=r()}else r=t();var v=!Ct((Ne||s).memoizedState,r);if(v&&(s.memoizedState=r,Je=!0),s=s.queue,Ou(vh.bind(null,l,s,e),[e]),s.getSnapshot!==t||v||Fe!==null&&Fe.memoizedState.tag&1){if(l.flags|=2048,ba(9,{destroy:void 0},ph.bind(null,l,s,r,t),null),ze===null)throw Error(o(349));c||(wn&127)!==0||hh(l,t,r)}return r}function hh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=me.updateQueue,t===null?(t=to(),me.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ph(e,t,r,l){t.value=r,t.getSnapshot=l,gh(t)&&yh(e)}function vh(e,t,r){return r(function(){gh(t)&&yh(e)})}function gh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ct(e,r)}catch{return!0}}function yh(e){var t=Er(e,2);t!==null&&Tt(t,e,2)}function zu(e){var t=mt();if(typeof e=="function"){var r=e;if(e=r(),zr){Vn(!0);try{r()}finally{Vn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function bh(e,t,r,l){return e.baseState=r,Mu(e,Ne,typeof l=="function"?l:An)}function A_(e,t,r,l,s){if(io(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){c.listeners.push(v)}};z.T!==null?r(!0):c.isTransition=!1,l(c),r=t.pending,r===null?(c.next=t.pending=c,xh(t,c)):(c.next=r.next,t.pending=r.next=c)}}function xh(e,t){var r=t.action,l=t.payload,s=e.state;if(t.isTransition){var c=z.T,v={};z.T=v;try{var x=r(s,l),T=z.S;T!==null&&T(v,x),_h(e,t,x)}catch(L){Du(e,t,L)}finally{c!==null&&v.types!==null&&(c.types=v.types),z.T=c}}else try{c=r(s,l),_h(e,t,c)}catch(L){Du(e,t,L)}}function _h(e,t,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Sh(e,t,l)},function(l){return Du(e,t,l)}):Sh(e,t,r)}function Sh(e,t,r){t.status="fulfilled",t.value=r,Eh(t),e.state=r,t=e.pending,t!==null&&(r=t.next,r===t?e.pending=null:(r=r.next,t.next=r,xh(e,r)))}function Du(e,t,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=r,Eh(t),t=t.next;while(t!==l)}e.action=null}function Eh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Th(e,t){return t}function wh(e,t){if(_e){var r=ze.formState;if(r!==null){e:{var l=me;if(_e){if(Oe){t:{for(var s=Oe,c=Yt;s.nodeType!==8;){if(!c){s=null;break t}if(s=Gt(s.nextSibling),s===null){s=null;break t}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){Oe=Gt(s.nextSibling),l=s.data==="F!";break e}}Gn(l)}l=!1}l&&(t=r[0])}}return r=mt(),r.memoizedState=r.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Th,lastRenderedState:t},r.queue=l,r=Gh.bind(null,me,l),l.dispatch=r,l=zu(!1),c=Vu.bind(null,me,!1,l.queue),l=mt(),s={state:t,dispatch:null,action:e,pending:null},l.queue=s,r=A_.bind(null,me,s,c,r),s.dispatch=r,l.memoizedState=e,[t,r,!1]}function Ah(e){var t=Ke();return jh(t,Ne,e)}function jh(e,t,r){if(t=Mu(e,t,Th)[0],e=ro(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=_l(t)}catch(v){throw v===ha?Ki:v}else l=t;t=Ke();var s=t.queue,c=s.dispatch;return r!==t.memoizedState&&(me.flags|=2048,ba(9,{destroy:void 0},j_.bind(null,s,r),null)),[l,c,e]}function j_(e,t){e.action=t}function Ch(e){var t=Ke(),r=Ne;if(r!==null)return jh(t,r,e);Ke(),t=t.memoizedState,r=Ke();var l=r.queue.dispatch;return r.memoizedState=e,[t,l,!1]}function ba(e,t,r,l){return e={tag:e,create:r,deps:l,inst:t,next:null},t=me.updateQueue,t===null&&(t=to(),me.updateQueue=t),r=t.lastEffect,r===null?t.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,t.lastEffect=e),e}function Nh(){return Ke().memoizedState}function ao(e,t,r,l){var s=mt();me.flags|=e,s.memoizedState=ba(1|t,{destroy:void 0},r,l===void 0?null:l)}function lo(e,t,r,l){var s=Ke();l=l===void 0?null:l;var c=s.memoizedState.inst;Ne!==null&&l!==null&&Tu(l,Ne.memoizedState.deps)?s.memoizedState=ba(t,c,r,l):(me.flags|=e,s.memoizedState=ba(1|t,c,r,l))}function Mh(e,t){ao(8390656,8,e,t)}function Ou(e,t){lo(2048,8,e,t)}function C_(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=to(),me.updateQueue=t,t.events=[e];else{var r=t.events;r===null?t.events=[e]:r.push(e)}}function Rh(e){var t=Ke().memoizedState;return C_({ref:t,nextImpl:e}),function(){if((we&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function zh(e,t){return lo(4,2,e,t)}function Dh(e,t){return lo(4,4,e,t)}function Oh(e,t){if(typeof t=="function"){e=e();var r=t(e);return function(){typeof r=="function"?r():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $h(e,t,r){r=r!=null?r.concat([e]):null,lo(4,4,Oh.bind(null,t,e),r)}function $u(){}function Lh(e,t){var r=Ke();t=t===void 0?null:t;var l=r.memoizedState;return t!==null&&Tu(t,l[1])?l[0]:(r.memoizedState=[e,t],e)}function Uh(e,t){var r=Ke();t=t===void 0?null:t;var l=r.memoizedState;if(t!==null&&Tu(t,l[1]))return l[0];if(l=e(),zr){Vn(!0);try{e()}finally{Vn(!1)}}return r.memoizedState=[l,t],l}function Lu(e,t,r){return r===void 0||(wn&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=r,e=Bp(),me.lanes|=e,In|=e,r)}function Bh(e,t,r,l){return Ct(r,t)?r:va.current!==null?(e=Lu(e,r,l),Ct(e,t)||(Je=!0),e):(wn&42)===0||(wn&1073741824)!==0&&(be&261930)===0?(Je=!0,e.memoizedState=r):(e=Bp(),me.lanes|=e,In|=e,t)}function Vh(e,t,r,l,s){var c=X.p;X.p=c!==0&&8>c?c:8;var v=z.T,x={};z.T=x,Vu(e,!1,t,r);try{var T=s(),L=z.S;if(L!==null&&L(x,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var H=E_(T,l);Sl(e,t,H,Ot(e))}else Sl(e,t,l,Ot(e))}catch(P){Sl(e,t,{then:function(){},status:"rejected",reason:P},Ot())}finally{X.p=c,v!==null&&x.types!==null&&(v.types=x.types),z.T=v}}function N_(){}function Uu(e,t,r,l){if(e.tag!==5)throw Error(o(476));var s=Hh(e).queue;Vh(e,s,t,ee,r===null?N_:function(){return kh(e),r(l)})}function Hh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ee},next:null};var r={};return t.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:r},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kh(e){var t=Hh(e);t.next===null&&(t=e.alternate.memoizedState),Sl(e,t.next.queue,{},Ot())}function Bu(){return lt(Vl)}function Yh(){return Ke().memoizedState}function qh(){return Ke().memoizedState}function M_(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var r=Ot();e=Kn(r);var l=Qn(t,e,r);l!==null&&(Tt(l,t,r),gl(l,t,r)),t={cache:mu()},e.payload=t;return}t=t.return}}function R_(e,t,r){var l=Ot();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},io(e)?Xh(t,r):(r=nu(e,t,r,l),r!==null&&(Tt(r,e,l),Ph(r,t,l)))}function Gh(e,t,r){var l=Ot();Sl(e,t,r,l)}function Sl(e,t,r,l){var s={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(io(e))Xh(t,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var v=t.lastRenderedState,x=c(v,r);if(s.hasEagerState=!0,s.eagerState=x,Ct(x,v))return Hi(e,t,s,0),ze===null&&Vi(),!1}catch{}if(r=nu(e,t,s,l),r!==null)return Tt(r,e,l),Ph(r,t,l),!0}return!1}function Vu(e,t,r,l){if(l={lane:2,revertLane:gc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},io(e)){if(t)throw Error(o(479))}else t=nu(e,r,l,2),t!==null&&Tt(t,e,2)}function io(e){var t=e.alternate;return e===me||t!==null&&t===me}function Xh(e,t){ga=Ii=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ph(e,t,r){if((r&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,Jf(e,r)}}var El={readContext:lt,use:no,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke};El.useEffectEvent=ke;var Kh={readContext:lt,use:no,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Mh,useImperativeHandle:function(e,t,r){r=r!=null?r.concat([e]):null,ao(4194308,4,Oh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ao(4194308,4,e,t)},useInsertionEffect:function(e,t){ao(4,2,e,t)},useMemo:function(e,t){var r=mt();t=t===void 0?null:t;var l=e();if(zr){Vn(!0);try{e()}finally{Vn(!1)}}return r.memoizedState=[l,t],l},useReducer:function(e,t,r){var l=mt();if(r!==void 0){var s=r(t);if(zr){Vn(!0);try{r(t)}finally{Vn(!1)}}}else s=t;return l.memoizedState=l.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},l.queue=e,e=e.dispatch=R_.bind(null,me,e),[l.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=zu(e);var t=e.queue,r=Gh.bind(null,me,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:$u,useDeferredValue:function(e,t){var r=mt();return Lu(r,e,t)},useTransition:function(){var e=zu(!1);return e=Vh.bind(null,me,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var l=me,s=mt();if(_e){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),ze===null)throw Error(o(349));(be&127)!==0||hh(l,t,r)}s.memoizedState=r;var c={value:r,getSnapshot:t};return s.queue=c,Mh(vh.bind(null,l,c,e),[e]),l.flags|=2048,ba(9,{destroy:void 0},ph.bind(null,l,c,r,t),null),r},useId:function(){var e=mt(),t=ze.identifierPrefix;if(_e){var r=cn,l=un;r=(l&~(1<<32-jt(l)-1)).toString(32)+r,t="_"+t+"R_"+r,r=eo++,0<r&&(t+="H"+r.toString(32)),t+="_"}else r=T_++,t="_"+t+"r_"+r.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Bu,useFormState:wh,useActionState:wh,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=Vu.bind(null,me,!0,r),r.dispatch=t,[e,t]},useMemoCache:Nu,useCacheRefresh:function(){return mt().memoizedState=M_.bind(null,me)},useEffectEvent:function(e){var t=mt(),r={impl:e};return t.memoizedState=r,function(){if((we&2)!==0)throw Error(o(440));return r.impl.apply(void 0,arguments)}}},Hu={readContext:lt,use:no,useCallback:Lh,useContext:lt,useEffect:Ou,useImperativeHandle:$h,useInsertionEffect:zh,useLayoutEffect:Dh,useMemo:Uh,useReducer:ro,useRef:Nh,useState:function(){return ro(An)},useDebugValue:$u,useDeferredValue:function(e,t){var r=Ke();return Bh(r,Ne.memoizedState,e,t)},useTransition:function(){var e=ro(An)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:_l(e),t]},useSyncExternalStore:mh,useId:Yh,useHostTransitionStatus:Bu,useFormState:Ah,useActionState:Ah,useOptimistic:function(e,t){var r=Ke();return bh(r,Ne,e,t)},useMemoCache:Nu,useCacheRefresh:qh};Hu.useEffectEvent=Rh;var Qh={readContext:lt,use:no,useCallback:Lh,useContext:lt,useEffect:Ou,useImperativeHandle:$h,useInsertionEffect:zh,useLayoutEffect:Dh,useMemo:Uh,useReducer:Ru,useRef:Nh,useState:function(){return Ru(An)},useDebugValue:$u,useDeferredValue:function(e,t){var r=Ke();return Ne===null?Lu(r,e,t):Bh(r,Ne.memoizedState,e,t)},useTransition:function(){var e=Ru(An)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:_l(e),t]},useSyncExternalStore:mh,useId:Yh,useHostTransitionStatus:Bu,useFormState:Ch,useActionState:Ch,useOptimistic:function(e,t){var r=Ke();return Ne!==null?bh(r,Ne,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:qh};Qh.useEffectEvent=Rh;function ku(e,t,r,l){t=e.memoizedState,r=r(l,t),r=r==null?t:b({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Yu={enqueueSetState:function(e,t,r){e=e._reactInternals;var l=Ot(),s=Kn(l);s.payload=t,r!=null&&(s.callback=r),t=Qn(e,s,l),t!==null&&(Tt(t,e,l),gl(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var l=Ot(),s=Kn(l);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Qn(e,s,l),t!==null&&(Tt(t,e,l),gl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ot(),l=Kn(r);l.tag=2,t!=null&&(l.callback=t),t=Qn(e,l,r),t!==null&&(Tt(t,e,r),gl(t,e,r))}};function Zh(e,t,r,l,s,c,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,v):t.prototype&&t.prototype.isPureReactComponent?!ul(r,l)||!ul(s,c):!0}function Fh(e,t,r,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,l),t.state!==e&&Yu.enqueueReplaceState(t,t.state,null)}function Dr(e,t){var r=t;if("ref"in t){r={};for(var l in t)l!=="ref"&&(r[l]=t[l])}if(e=e.defaultProps){r===t&&(r=b({},r));for(var s in e)r[s]===void 0&&(r[s]=e[s])}return r}function Jh(e){Bi(e)}function Wh(e){console.error(e)}function Ih(e){Bi(e)}function oo(e,t){try{var r=e.onUncaughtError;r(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ep(e,t,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function qu(e,t,r){return r=Kn(r),r.tag=3,r.payload={element:null},r.callback=function(){oo(e,t)},r}function tp(e){return e=Kn(e),e.tag=3,e}function np(e,t,r,l){var s=r.type.getDerivedStateFromError;if(typeof s=="function"){var c=l.value;e.payload=function(){return s(c)},e.callback=function(){ep(t,r,l)}}var v=r.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){ep(t,r,l),typeof s!="function"&&(er===null?er=new Set([this]):er.add(this));var x=l.stack;this.componentDidCatch(l.value,{componentStack:x!==null?x:""})})}function z_(e,t,r,l,s){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=r.alternate,t!==null&&da(t,r,s,!0),r=Mt.current,r!==null){switch(r.tag){case 31:case 13:return qt===null?xo():r.alternate===null&&Ye===0&&(Ye=3),r.flags&=-257,r.flags|=65536,r.lanes=s,l===Qi?r.flags|=16384:(t=r.updateQueue,t===null?r.updateQueue=new Set([l]):t.add(l),hc(e,l,s)),!1;case 22:return r.flags|=65536,l===Qi?r.flags|=16384:(t=r.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=t):(r=t.retryQueue,r===null?t.retryQueue=new Set([l]):r.add(l)),hc(e,l,s)),!1}throw Error(o(435,r.tag))}return hc(e,l,s),xo(),!1}if(_e)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,l!==su&&(e=Error(o(422),{cause:l}),fl(Vt(e,r)))):(l!==su&&(t=Error(o(423),{cause:l}),fl(Vt(t,r))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,l=Vt(l,r),s=qu(e.stateNode,l,s),bu(e,s),Ye!==4&&(Ye=2)),!1;var c=Error(o(520),{cause:l});if(c=Vt(c,r),Rl===null?Rl=[c]:Rl.push(c),Ye!==4&&(Ye=2),t===null)return!0;l=Vt(l,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=s&-s,r.lanes|=e,e=qu(r.stateNode,l,e),bu(r,e),!1;case 1:if(t=r.type,c=r.stateNode,(r.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(er===null||!er.has(c))))return r.flags|=65536,s&=-s,r.lanes|=s,s=tp(s),np(s,e,r,l),bu(r,s),!1}r=r.return}while(r!==null);return!1}var Gu=Error(o(461)),Je=!1;function it(e,t,r,l){t.child=e===null?ih(t,null,r,l):Rr(t,e.child,r,l)}function rp(e,t,r,l,s){r=r.render;var c=t.ref;if("ref"in l){var v={};for(var x in l)x!=="ref"&&(v[x]=l[x])}else v=l;return jr(t),l=wu(e,t,r,v,c,s),x=Au(),e!==null&&!Je?(ju(e,t,s),jn(e,t,s)):(_e&&x&&iu(t),t.flags|=1,it(e,t,l,s),t.child)}function ap(e,t,r,l,s){if(e===null){var c=r.type;return typeof c=="function"&&!ru(c)&&c.defaultProps===void 0&&r.compare===null?(t.tag=15,t.type=c,lp(e,t,c,l,s)):(e=Yi(r.type,null,l,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Wu(e,s)){var v=c.memoizedProps;if(r=r.compare,r=r!==null?r:ul,r(v,l)&&e.ref===t.ref)return jn(e,t,s)}return t.flags|=1,e=_n(c,l),e.ref=t.ref,e.return=t,t.child=e}function lp(e,t,r,l,s){if(e!==null){var c=e.memoizedProps;if(ul(c,l)&&e.ref===t.ref)if(Je=!1,t.pendingProps=l=c,Wu(e,s))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,jn(e,t,s)}return Xu(e,t,r,l,s)}function ip(e,t,r,l){var s=l.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|r:r,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;l=s&~c}else l=0,t.child=null;return op(e,t,c,r,l)}if((r&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pi(t,c!==null?c.cachePool:null),c!==null?uh(t,c):_u(),ch(t);else return l=t.lanes=536870912,op(e,t,c!==null?c.baseLanes|r:r,r,l)}else c!==null?(Pi(t,c.cachePool),uh(t,c),Fn(),t.memoizedState=null):(e!==null&&Pi(t,null),_u(),Fn());return it(e,t,s,r),t.child}function Tl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function op(e,t,r,l,s){var c=pu();return c=c===null?null:{parent:Ze._currentValue,pool:c},t.memoizedState={baseLanes:r,cachePool:c},e!==null&&Pi(t,null),_u(),ch(t),e!==null&&da(e,t,l,!0),t.childLanes=s,null}function so(e,t){return t=co({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sp(e,t,r){return Rr(t,e.child,null,r),e=so(t,t.pendingProps),e.flags|=2,Rt(t),t.memoizedState=null,e}function D_(e,t,r){var l=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(_e){if(l.mode==="hidden")return e=so(t,l),t.lanes=536870912,Tl(null,e);if(Eu(t),(e=Oe)?(e=xv(e,Yt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:un,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},r=Xm(e),r.return=t,t.child=r,at=t,Oe=null)):e=null,e===null)throw Gn(t);return t.lanes=536870912,null}return so(t,l)}var c=e.memoizedState;if(c!==null){var v=c.dehydrated;if(Eu(t),s)if(t.flags&256)t.flags&=-257,t=sp(e,t,r);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Je||da(e,t,r,!1),s=(r&e.childLanes)!==0,Je||s){if(l=ze,l!==null&&(v=Wf(l,r),v!==0&&v!==c.retryLane))throw c.retryLane=v,Er(e,v),Tt(l,e,v),Gu;xo(),t=sp(e,t,r)}else e=c.treeContext,Oe=Gt(v.nextSibling),at=t,_e=!0,qn=null,Yt=!1,e!==null&&Qm(t,e),t=so(t,l),t.flags|=4096;return t}return e=_n(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function uo(e,t){var r=t.ref;if(r===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(o(284));(e===null||e.ref!==r)&&(t.flags|=4194816)}}function Xu(e,t,r,l,s){return jr(t),r=wu(e,t,r,l,void 0,s),l=Au(),e!==null&&!Je?(ju(e,t,s),jn(e,t,s)):(_e&&l&&iu(t),t.flags|=1,it(e,t,r,s),t.child)}function up(e,t,r,l,s,c){return jr(t),t.updateQueue=null,r=fh(t,l,r,s),dh(e),l=Au(),e!==null&&!Je?(ju(e,t,c),jn(e,t,c)):(_e&&l&&iu(t),t.flags|=1,it(e,t,r,c),t.child)}function cp(e,t,r,l,s){if(jr(t),t.stateNode===null){var c=oa,v=r.contextType;typeof v=="object"&&v!==null&&(c=lt(v)),c=new r(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Yu,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},gu(t),v=r.contextType,c.context=typeof v=="object"&&v!==null?lt(v):oa,c.state=t.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(ku(t,r,v,l),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(v=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),v!==c.state&&Yu.enqueueReplaceState(c,c.state,null),bl(t,l,c,s),yl(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){c=t.stateNode;var x=t.memoizedProps,T=Dr(r,x);c.props=T;var L=c.context,H=r.contextType;v=oa,typeof H=="object"&&H!==null&&(v=lt(H));var P=r.getDerivedStateFromProps;H=typeof P=="function"||typeof c.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,H||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x||L!==v)&&Fh(t,c,l,v),Pn=!1;var U=t.memoizedState;c.state=U,bl(t,l,c,s),yl(),L=t.memoizedState,x||U!==L||Pn?(typeof P=="function"&&(ku(t,r,P,l),L=t.memoizedState),(T=Pn||Zh(t,r,T,l,U,L,v))?(H||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=L),c.props=l,c.state=L,c.context=v,l=T):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,yu(e,t),v=t.memoizedProps,H=Dr(r,v),c.props=H,P=t.pendingProps,U=c.context,L=r.contextType,T=oa,typeof L=="object"&&L!==null&&(T=lt(L)),x=r.getDerivedStateFromProps,(L=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v!==P||U!==T)&&Fh(t,c,l,T),Pn=!1,U=t.memoizedState,c.state=U,bl(t,l,c,s),yl();var B=t.memoizedState;v!==P||U!==B||Pn||e!==null&&e.dependencies!==null&&Gi(e.dependencies)?(typeof x=="function"&&(ku(t,r,x,l),B=t.memoizedState),(H=Pn||Zh(t,r,H,l,U,B,T)||e!==null&&e.dependencies!==null&&Gi(e.dependencies))?(L||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,B,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,B,T)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=B),c.props=l,c.state=B,c.context=T,l=H):(typeof c.componentDidUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),l=!1)}return c=l,uo(e,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&l?(t.child=Rr(t,e.child,null,s),t.child=Rr(t,null,r,s)):it(e,t,r,s),t.memoizedState=c.state,e=t.child):e=jn(e,t,s),e}function dp(e,t,r,l){return wr(),t.flags|=256,it(e,t,r,l),t.child}var Pu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ku(e){return{baseLanes:e,cachePool:eh()}}function Qu(e,t,r){return e=e!==null?e.childLanes&~r:0,t&&(e|=Dt),e}function fp(e,t,r){var l=t.pendingProps,s=!1,c=(t.flags&128)!==0,v;if((v=c)||(v=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),v&&(s=!0,t.flags&=-129),v=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(s?Zn(t):Fn(),(e=Oe)?(e=xv(e,Yt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:un,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},r=Xm(e),r.return=t,t.child=r,at=t,Oe=null)):e=null,e===null)throw Gn(t);return Mc(e)?t.lanes=32:t.lanes=536870912,null}var x=l.children;return l=l.fallback,s?(Fn(),s=t.mode,x=co({mode:"hidden",children:x},s),l=Tr(l,s,r,null),x.return=t,l.return=t,x.sibling=l,t.child=x,l=t.child,l.memoizedState=Ku(r),l.childLanes=Qu(e,v,r),t.memoizedState=Pu,Tl(null,l)):(Zn(t),Zu(t,x))}var T=e.memoizedState;if(T!==null&&(x=T.dehydrated,x!==null)){if(c)t.flags&256?(Zn(t),t.flags&=-257,t=Fu(e,t,r)):t.memoizedState!==null?(Fn(),t.child=e.child,t.flags|=128,t=null):(Fn(),x=l.fallback,s=t.mode,l=co({mode:"visible",children:l.children},s),x=Tr(x,s,r,null),x.flags|=2,l.return=t,x.return=t,l.sibling=x,t.child=l,Rr(t,e.child,null,r),l=t.child,l.memoizedState=Ku(r),l.childLanes=Qu(e,v,r),t.memoizedState=Pu,t=Tl(null,l));else if(Zn(t),Mc(x)){if(v=x.nextSibling&&x.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(o(419)),l.stack="",l.digest=v,fl({value:l,source:null,stack:null}),t=Fu(e,t,r)}else if(Je||da(e,t,r,!1),v=(r&e.childLanes)!==0,Je||v){if(v=ze,v!==null&&(l=Wf(v,r),l!==0&&l!==T.retryLane))throw T.retryLane=l,Er(e,l),Tt(v,e,l),Gu;Nc(x)||xo(),t=Fu(e,t,r)}else Nc(x)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,Oe=Gt(x.nextSibling),at=t,_e=!0,qn=null,Yt=!1,e!==null&&Qm(t,e),t=Zu(t,l.children),t.flags|=4096);return t}return s?(Fn(),x=l.fallback,s=t.mode,T=e.child,L=T.sibling,l=_n(T,{mode:"hidden",children:l.children}),l.subtreeFlags=T.subtreeFlags&65011712,L!==null?x=_n(L,x):(x=Tr(x,s,r,null),x.flags|=2),x.return=t,l.return=t,l.sibling=x,t.child=l,Tl(null,l),l=t.child,x=e.child.memoizedState,x===null?x=Ku(r):(s=x.cachePool,s!==null?(T=Ze._currentValue,s=s.parent!==T?{parent:T,pool:T}:s):s=eh(),x={baseLanes:x.baseLanes|r,cachePool:s}),l.memoizedState=x,l.childLanes=Qu(e,v,r),t.memoizedState=Pu,Tl(e.child,l)):(Zn(t),r=e.child,e=r.sibling,r=_n(r,{mode:"visible",children:l.children}),r.return=t,r.sibling=null,e!==null&&(v=t.deletions,v===null?(t.deletions=[e],t.flags|=16):v.push(e)),t.child=r,t.memoizedState=null,r)}function Zu(e,t){return t=co({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function co(e,t){return e=Nt(22,e,null,t),e.lanes=0,e}function Fu(e,t,r){return Rr(t,e.child,null,r),e=Zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mp(e,t,r){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),du(e.return,t,r)}function Ju(e,t,r,l,s,c){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:s,treeForkCount:c}:(v.isBackwards=t,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=r,v.tailMode=s,v.treeForkCount=c)}function hp(e,t,r){var l=t.pendingProps,s=l.revealOrder,c=l.tail;l=l.children;var v=Pe.current,x=(v&2)!==0;if(x?(v=v&1|2,t.flags|=128):v&=1,I(Pe,v),it(e,t,l,r),l=_e?dl:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mp(e,r,t);else if(e.tag===19)mp(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Wi(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Ju(t,!1,s,r,c,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Wi(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Ju(t,!0,r,null,c,l);break;case"together":Ju(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function jn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(r&t.childLanes)===0)if(e!==null){if(da(e,t,r,!1),(r&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=_n(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=_n(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Wu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Gi(e)))}function O_(e,t,r){switch(t.tag){case 3:ft(t,t.stateNode.containerInfo),Xn(t,Ze,e.memoizedState.cache),wr();break;case 27:case 5:Fa(t);break;case 4:ft(t,t.stateNode.containerInfo);break;case 10:Xn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Eu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Zn(t),t.flags|=128,null):(r&t.child.childLanes)!==0?fp(e,t,r):(Zn(t),e=jn(e,t,r),e!==null?e.sibling:null);Zn(t);break;case 19:var s=(e.flags&128)!==0;if(l=(r&t.childLanes)!==0,l||(da(e,t,r,!1),l=(r&t.childLanes)!==0),s){if(l)return hp(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),I(Pe,Pe.current),l)break;return null;case 22:return t.lanes=0,ip(e,t,r,t.pendingProps);case 24:Xn(t,Ze,e.memoizedState.cache)}return jn(e,t,r)}function pp(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Wu(e,r)&&(t.flags&128)===0)return Je=!1,O_(e,t,r);Je=(e.flags&131072)!==0}else Je=!1,_e&&(t.flags&1048576)!==0&&Km(t,dl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Nr(t.elementType),t.type=e,typeof e=="function")ru(e)?(l=Dr(e,l),t.tag=1,t=cp(null,t,e,l,r)):(t.tag=0,t=Xu(null,t,e,l,r));else{if(e!=null){var s=e.$$typeof;if(s===Z){t.tag=11,t=rp(null,t,e,l,r);break e}else if(s===Q){t.tag=14,t=ap(null,t,e,l,r);break e}}throw t=W(e)||e,Error(o(306,t,""))}}return t;case 0:return Xu(e,t,t.type,t.pendingProps,r);case 1:return l=t.type,s=Dr(l,t.pendingProps),cp(e,t,l,s,r);case 3:e:{if(ft(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var c=t.memoizedState;s=c.element,yu(e,t),bl(t,l,null,r);var v=t.memoizedState;if(l=v.cache,Xn(t,Ze,l),l!==c.cache&&fu(t,[Ze],r,!0),yl(),l=v.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:v.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=dp(e,t,l,r);break e}else if(l!==s){s=Vt(Error(o(424)),t),fl(s),t=dp(e,t,l,r);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Oe=Gt(e.firstChild),at=t,_e=!0,qn=null,Yt=!0,r=ih(t,null,l,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(wr(),l===s){t=jn(e,t,r);break e}it(e,t,l,r)}t=t.child}return t;case 26:return uo(e,t),e===null?(r=Av(t.type,null,t.pendingProps,null))?t.memoizedState=r:_e||(r=t.type,e=t.pendingProps,l=jo(ve.current).createElement(r),l[rt]=t,l[yt]=e,ot(l,r,e),tt(l),t.stateNode=l):t.memoizedState=Av(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Fa(t),e===null&&_e&&(l=t.stateNode=Ev(t.type,t.pendingProps,ve.current),at=t,Yt=!0,s=Oe,ar(t.type)?(Rc=s,Oe=Gt(l.firstChild)):Oe=s),it(e,t,t.pendingProps.children,r),uo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((s=l=Oe)&&(l=c1(l,t.type,t.pendingProps,Yt),l!==null?(t.stateNode=l,at=t,Oe=Gt(l.firstChild),Yt=!1,s=!0):s=!1),s||Gn(t)),Fa(t),s=t.type,c=t.pendingProps,v=e!==null?e.memoizedProps:null,l=c.children,Ac(s,c)?l=null:v!==null&&Ac(s,v)&&(t.flags|=32),t.memoizedState!==null&&(s=wu(e,t,w_,null,null,r),Vl._currentValue=s),uo(e,t),it(e,t,l,r),t.child;case 6:return e===null&&_e&&((e=r=Oe)&&(r=d1(r,t.pendingProps,Yt),r!==null?(t.stateNode=r,at=t,Oe=null,e=!0):e=!1),e||Gn(t)),null;case 13:return fp(e,t,r);case 4:return ft(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Rr(t,null,l,r):it(e,t,l,r),t.child;case 11:return rp(e,t,t.type,t.pendingProps,r);case 7:return it(e,t,t.pendingProps,r),t.child;case 8:return it(e,t,t.pendingProps.children,r),t.child;case 12:return it(e,t,t.pendingProps.children,r),t.child;case 10:return l=t.pendingProps,Xn(t,t.type,l.value),it(e,t,l.children,r),t.child;case 9:return s=t.type._context,l=t.pendingProps.children,jr(t),s=lt(s),l=l(s),t.flags|=1,it(e,t,l,r),t.child;case 14:return ap(e,t,t.type,t.pendingProps,r);case 15:return lp(e,t,t.type,t.pendingProps,r);case 19:return hp(e,t,r);case 31:return D_(e,t,r);case 22:return ip(e,t,r,t.pendingProps);case 24:return jr(t),l=lt(Ze),e===null?(s=pu(),s===null&&(s=ze,c=mu(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=r),s=c),t.memoizedState={parent:l,cache:s},gu(t),Xn(t,Ze,s)):((e.lanes&r)!==0&&(yu(e,t),bl(t,null,null,r),yl()),s=e.memoizedState,c=t.memoizedState,s.parent!==l?(s={parent:l,cache:l},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Xn(t,Ze,l)):(l=c.cache,Xn(t,Ze,l),l!==s.cache&&fu(t,[Ze],r,!0))),it(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Cn(e){e.flags|=4}function Iu(e,t,r,l,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Yp())e.flags|=8192;else throw Mr=Qi,vu}else e.flags&=-16777217}function vp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rv(t))if(Yp())e.flags|=8192;else throw Mr=Qi,vu}function fo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Zf():536870912,e.lanes|=t,Ea|=t)}function wl(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,l|=s.subtreeFlags&65011712,l|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=r,t}function $_(e,t,r){var l=t.pendingProps;switch(ou(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return $e(t),null;case 3:return r=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Tn(Ze),Xe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ca(t)?Cn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,uu())),$e(t),null;case 26:var s=t.type,c=t.memoizedState;return e===null?(Cn(t),c!==null?($e(t),vp(t,c)):($e(t),Iu(t,s,null,l,r))):c?c!==e.memoizedState?(Cn(t),$e(t),vp(t,c)):($e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Cn(t),$e(t),Iu(t,s,e,l,r)),null;case 27:if(Si(t),r=ve.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Cn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return $e(t),null}e=te.current,ca(t)?Zm(t):(e=Ev(s,l,r),t.stateNode=e,Cn(t))}return $e(t),null;case 5:if(Si(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Cn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return $e(t),null}if(c=te.current,ca(t))Zm(t);else{var v=jo(ve.current);switch(c){case 1:c=v.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:c=v.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":c=v.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":c=v.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":c=v.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?v.createElement(s,{is:l.is}):v.createElement(s)}}c[rt]=t,c[yt]=l;e:for(v=t.child;v!==null;){if(v.tag===5||v.tag===6)c.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break e;for(;v.sibling===null;){if(v.return===null||v.return===t)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}t.stateNode=c;e:switch(ot(c,s,l),s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Cn(t)}}return $e(t),Iu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,r),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Cn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ve.current,ca(t)){if(e=t.stateNode,r=t.memoizedProps,l=null,s=at,s!==null)switch(s.tag){case 27:case 5:l=s.memoizedProps}e[rt]=t,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||fv(e.nodeValue,r)),e||Gn(t,!0)}else e=jo(e).createTextNode(l),e[rt]=t,t.stateNode=e}return $e(t),null;case 31:if(r=t.memoizedState,e===null||e.memoizedState!==null){if(l=ca(t),r!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[rt]=t}else wr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),e=!1}else r=uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return t.flags&256?(Rt(t),t):(Rt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return $e(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=ca(t),l!==null&&l.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[rt]=t}else wr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),s=!1}else s=uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Rt(t),t):(Rt(t),null)}return Rt(t),(t.flags&128)!==0?(t.lanes=r,t):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=t.child,s=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(s=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==s&&(l.flags|=2048)),r!==e&&r&&(t.child.flags|=8192),fo(t,t.updateQueue),$e(t),null);case 4:return Xe(),e===null&&_c(t.stateNode.containerInfo),$e(t),null;case 10:return Tn(t.type),$e(t),null;case 19:if(G(Pe),l=t.memoizedState,l===null)return $e(t),null;if(s=(t.flags&128)!==0,c=l.rendering,c===null)if(s)wl(l,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Wi(e),c!==null){for(t.flags|=128,wl(l,!1),e=c.updateQueue,t.updateQueue=e,fo(t,e),t.subtreeFlags=0,e=r,r=t.child;r!==null;)Gm(r,e),r=r.sibling;return I(Pe,Pe.current&1|2),_e&&Sn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&wt()>go&&(t.flags|=128,s=!0,wl(l,!1),t.lanes=4194304)}else{if(!s)if(e=Wi(c),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,fo(t,e),wl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!_e)return $e(t),null}else 2*wt()-l.renderingStartTime>go&&r!==536870912&&(t.flags|=128,s=!0,wl(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(e=l.last,e!==null?e.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=wt(),e.sibling=null,r=Pe.current,I(Pe,s?r&1|2:r&1),_e&&Sn(t,l.treeForkCount),e):($e(t),null);case 22:case 23:return Rt(t),Su(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(r&536870912)!==0&&(t.flags&128)===0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),r=t.updateQueue,r!==null&&fo(t,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==r&&(t.flags|=2048),e!==null&&G(Cr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Tn(Ze),$e(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function L_(e,t){switch(ou(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(Ze),Xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Si(t),null;case 31:if(t.memoizedState!==null){if(Rt(t),t.alternate===null)throw Error(o(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Rt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Pe),null;case 4:return Xe(),null;case 10:return Tn(t.type),null;case 22:case 23:return Rt(t),Su(),e!==null&&G(Cr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Tn(Ze),null;case 25:return null;default:return null}}function gp(e,t){switch(ou(t),t.tag){case 3:Tn(Ze),Xe();break;case 26:case 27:case 5:Si(t);break;case 4:Xe();break;case 31:t.memoizedState!==null&&Rt(t);break;case 13:Rt(t);break;case 19:G(Pe);break;case 10:Tn(t.type);break;case 22:case 23:Rt(t),Su(),e!==null&&G(Cr);break;case 24:Tn(Ze)}}function Al(e,t){try{var r=t.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var s=l.next;r=s;do{if((r.tag&e)===e){l=void 0;var c=r.create,v=r.inst;l=c(),v.destroy=l}r=r.next}while(r!==s)}}catch(x){Ce(t,t.return,x)}}function Jn(e,t,r){try{var l=t.updateQueue,s=l!==null?l.lastEffect:null;if(s!==null){var c=s.next;l=c;do{if((l.tag&e)===e){var v=l.inst,x=v.destroy;if(x!==void 0){v.destroy=void 0,s=t;var T=r,L=x;try{L()}catch(H){Ce(s,T,H)}}}l=l.next}while(l!==c)}}catch(H){Ce(t,t.return,H)}}function yp(e){var t=e.updateQueue;if(t!==null){var r=e.stateNode;try{sh(t,r)}catch(l){Ce(e,e.return,l)}}}function bp(e,t,r){r.props=Dr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ce(e,t,l)}}function jl(e,t){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(s){Ce(e,t,s)}}function dn(e,t){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(s){Ce(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(s){Ce(e,t,s)}else r.current=null}function xp(e){var t=e.type,r=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(s){Ce(e,e.return,s)}}function ec(e,t,r){try{var l=e.stateNode;a1(l,e.type,r,t),l[yt]=t}catch(s){Ce(e,e.return,s)}}function _p(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ar(e.type)||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_p(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nc(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,t):(t=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,t.appendChild(e),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=bn));else if(l!==4&&(l===27&&ar(e.type)&&(r=e.stateNode,t=null),e=e.child,e!==null))for(nc(e,t,r),e=e.sibling;e!==null;)nc(e,t,r),e=e.sibling}function mo(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(l!==4&&(l===27&&ar(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(mo(e,t,r),e=e.sibling;e!==null;)mo(e,t,r),e=e.sibling}function Sp(e){var t=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);ot(t,l,r),t[rt]=e,t[yt]=r}catch(c){Ce(e,e.return,c)}}var Nn=!1,We=!1,rc=!1,Ep=typeof WeakSet=="function"?WeakSet:Set,nt=null;function U_(e,t){if(e=e.containerInfo,Tc=Oo,e=$m(e),Fs(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var s=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var v=0,x=-1,T=-1,L=0,H=0,P=e,U=null;t:for(;;){for(var B;P!==r||s!==0&&P.nodeType!==3||(x=v+s),P!==c||l!==0&&P.nodeType!==3||(T=v+l),P.nodeType===3&&(v+=P.nodeValue.length),(B=P.firstChild)!==null;)U=P,P=B;for(;;){if(P===e)break t;if(U===r&&++L===s&&(x=v),U===c&&++H===l&&(T=v),(B=P.nextSibling)!==null)break;P=U,U=P.parentNode}P=B}r=x===-1||T===-1?null:{start:x,end:T}}else r=null}r=r||{start:0,end:0}}else r=null;for(wc={focusedElem:e,selectionRange:r},Oo=!1,nt=t;nt!==null;)if(t=nt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nt=e;else for(;nt!==null;){switch(t=nt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)s=e[r],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,r=t,s=c.memoizedProps,c=c.memoizedState,l=r.stateNode;try{var ne=Dr(r.type,s);e=l.getSnapshotBeforeUpdate(ne,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ce(r,r.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,r=e.nodeType,r===9)Cc(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,nt=e;break}nt=t.return}}function Tp(e,t,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Rn(e,r),l&4&&Al(5,r);break;case 1:if(Rn(e,r),l&4)if(e=r.stateNode,t===null)try{e.componentDidMount()}catch(v){Ce(r,r.return,v)}else{var s=Dr(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ce(r,r.return,v)}}l&64&&yp(r),l&512&&jl(r,r.return);break;case 3:if(Rn(e,r),l&64&&(e=r.updateQueue,e!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{sh(e,t)}catch(v){Ce(r,r.return,v)}}break;case 27:t===null&&l&4&&Sp(r);case 26:case 5:Rn(e,r),t===null&&l&4&&xp(r),l&512&&jl(r,r.return);break;case 12:Rn(e,r);break;case 31:Rn(e,r),l&4&&jp(e,r);break;case 13:Rn(e,r),l&4&&Cp(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=P_.bind(null,r),f1(e,r))));break;case 22:if(l=r.memoizedState!==null||Nn,!l){t=t!==null&&t.memoizedState!==null||We,s=Nn;var c=We;Nn=l,(We=t)&&!c?zn(e,r,(r.subtreeFlags&8772)!==0):Rn(e,r),Nn=s,We=c}break;case 30:break;default:Rn(e,r)}}function wp(e){var t=e.alternate;t!==null&&(e.alternate=null,wp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ds(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,xt=!1;function Mn(e,t,r){for(r=r.child;r!==null;)Ap(e,t,r),r=r.sibling}function Ap(e,t,r){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Ja,r)}catch{}switch(r.tag){case 26:We||dn(r,t),Mn(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:We||dn(r,t);var l=Ue,s=xt;ar(r.type)&&(Ue=r.stateNode,xt=!1),Mn(e,t,r),Ll(r.stateNode),Ue=l,xt=s;break;case 5:We||dn(r,t);case 6:if(l=Ue,s=xt,Ue=null,Mn(e,t,r),Ue=l,xt=s,Ue!==null)if(xt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(r.stateNode)}catch(c){Ce(r,t,c)}else try{Ue.removeChild(r.stateNode)}catch(c){Ce(r,t,c)}break;case 18:Ue!==null&&(xt?(e=Ue,yv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Ra(e)):yv(Ue,r.stateNode));break;case 4:l=Ue,s=xt,Ue=r.stateNode.containerInfo,xt=!0,Mn(e,t,r),Ue=l,xt=s;break;case 0:case 11:case 14:case 15:Jn(2,r,t),We||Jn(4,r,t),Mn(e,t,r);break;case 1:We||(dn(r,t),l=r.stateNode,typeof l.componentWillUnmount=="function"&&bp(r,t,l)),Mn(e,t,r);break;case 21:Mn(e,t,r);break;case 22:We=(l=We)||r.memoizedState!==null,Mn(e,t,r),We=l;break;default:Mn(e,t,r)}}function jp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ra(e)}catch(r){Ce(t,t.return,r)}}}function Cp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ra(e)}catch(r){Ce(t,t.return,r)}}function B_(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ep),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ep),t;default:throw Error(o(435,e.tag))}}function ho(e,t){var r=B_(e);t.forEach(function(l){if(!r.has(l)){r.add(l);var s=K_.bind(null,e,l);l.then(s,s)}})}function _t(e,t){var r=t.deletions;if(r!==null)for(var l=0;l<r.length;l++){var s=r[l],c=e,v=t,x=v;e:for(;x!==null;){switch(x.tag){case 27:if(ar(x.type)){Ue=x.stateNode,xt=!1;break e}break;case 5:Ue=x.stateNode,xt=!1;break e;case 3:case 4:Ue=x.stateNode.containerInfo,xt=!0;break e}x=x.return}if(Ue===null)throw Error(o(160));Ap(c,v,s),Ue=null,xt=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Np(t,e),t=t.sibling}var tn=null;function Np(e,t){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_t(t,e),St(e),l&4&&(Jn(3,e,e.return),Al(3,e),Jn(5,e,e.return));break;case 1:_t(t,e),St(e),l&512&&(We||r===null||dn(r,r.return)),l&64&&Nn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var s=tn;if(_t(t,e),St(e),l&512&&(We||r===null||dn(r,r.return)),l&4){var c=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){e:{l=e.type,r=e.memoizedProps,s=s.ownerDocument||s;t:switch(l){case"title":c=s.getElementsByTagName("title")[0],(!c||c[el]||c[rt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(l),s.head.insertBefore(c,s.querySelector("head > title"))),ot(c,l,r),c[rt]=e,tt(c),l=c;break e;case"link":var v=Nv("link","href",s).get(l+(r.href||""));if(v){for(var x=0;x<v.length;x++)if(c=v[x],c.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&c.getAttribute("rel")===(r.rel==null?null:r.rel)&&c.getAttribute("title")===(r.title==null?null:r.title)&&c.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){v.splice(x,1);break t}}c=s.createElement(l),ot(c,l,r),s.head.appendChild(c);break;case"meta":if(v=Nv("meta","content",s).get(l+(r.content||""))){for(x=0;x<v.length;x++)if(c=v[x],c.getAttribute("content")===(r.content==null?null:""+r.content)&&c.getAttribute("name")===(r.name==null?null:r.name)&&c.getAttribute("property")===(r.property==null?null:r.property)&&c.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&c.getAttribute("charset")===(r.charSet==null?null:r.charSet)){v.splice(x,1);break t}}c=s.createElement(l),ot(c,l,r),s.head.appendChild(c);break;default:throw Error(o(468,l))}c[rt]=e,tt(c),l=c}e.stateNode=l}else Mv(s,e.type,e.stateNode);else e.stateNode=Cv(s,l,e.memoizedProps);else c!==l?(c===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):c.count--,l===null?Mv(s,e.type,e.stateNode):Cv(s,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ec(e,e.memoizedProps,r.memoizedProps)}break;case 27:_t(t,e),St(e),l&512&&(We||r===null||dn(r,r.return)),r!==null&&l&4&&ec(e,e.memoizedProps,r.memoizedProps);break;case 5:if(_t(t,e),St(e),l&512&&(We||r===null||dn(r,r.return)),e.flags&32){s=e.stateNode;try{ea(s,"")}catch(ne){Ce(e,e.return,ne)}}l&4&&e.stateNode!=null&&(s=e.memoizedProps,ec(e,s,r!==null?r.memoizedProps:s)),l&1024&&(rc=!0);break;case 6:if(_t(t,e),St(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(ne){Ce(e,e.return,ne)}}break;case 3:if(Mo=null,s=tn,tn=Co(t.containerInfo),_t(t,e),tn=s,St(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ra(t.containerInfo)}catch(ne){Ce(e,e.return,ne)}rc&&(rc=!1,Mp(e));break;case 4:l=tn,tn=Co(e.stateNode.containerInfo),_t(t,e),St(e),tn=l;break;case 12:_t(t,e),St(e);break;case 31:_t(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ho(e,l)));break;case 13:_t(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(vo=wt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ho(e,l)));break;case 22:s=e.memoizedState!==null;var T=r!==null&&r.memoizedState!==null,L=Nn,H=We;if(Nn=L||s,We=H||T,_t(t,e),We=H,Nn=L,St(e),l&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(r===null||T||Nn||We||Or(e)),r=null,t=e;;){if(t.tag===5||t.tag===26){if(r===null){T=r=t;try{if(c=T.stateNode,s)v=c.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{x=T.stateNode;var P=T.memoizedProps.style,U=P!=null&&P.hasOwnProperty("display")?P.display:null;x.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(ne){Ce(T,T.return,ne)}}}else if(t.tag===6){if(r===null){T=t;try{T.stateNode.nodeValue=s?"":T.memoizedProps}catch(ne){Ce(T,T.return,ne)}}}else if(t.tag===18){if(r===null){T=t;try{var B=T.stateNode;s?bv(B,!0):bv(T.stateNode,!1)}catch(ne){Ce(T,T.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,ho(e,r))));break;case 19:_t(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ho(e,l)));break;case 30:break;case 21:break;default:_t(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var r,l=e.return;l!==null;){if(_p(l)){r=l;break}l=l.return}if(r==null)throw Error(o(160));switch(r.tag){case 27:var s=r.stateNode,c=tc(e);mo(e,c,s);break;case 5:var v=r.stateNode;r.flags&32&&(ea(v,""),r.flags&=-33);var x=tc(e);mo(e,x,v);break;case 3:case 4:var T=r.stateNode.containerInfo,L=tc(e);nc(e,L,T);break;default:throw Error(o(161))}}catch(H){Ce(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Rn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Tp(e,t.alternate,t),t=t.sibling}function Or(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jn(4,t,t.return),Or(t);break;case 1:dn(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&bp(t,t.return,r),Or(t);break;case 27:Ll(t.stateNode);case 26:case 5:dn(t,t.return),Or(t);break;case 22:t.memoizedState===null&&Or(t);break;case 30:Or(t);break;default:Or(t)}e=e.sibling}}function zn(e,t,r){for(r=r&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,s=e,c=t,v=c.flags;switch(c.tag){case 0:case 11:case 15:zn(s,c,r),Al(4,c);break;case 1:if(zn(s,c,r),l=c,s=l.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(L){Ce(l,l.return,L)}if(l=c,s=l.updateQueue,s!==null){var x=l.stateNode;try{var T=s.shared.hiddenCallbacks;if(T!==null)for(s.shared.hiddenCallbacks=null,s=0;s<T.length;s++)oh(T[s],x)}catch(L){Ce(l,l.return,L)}}r&&v&64&&yp(c),jl(c,c.return);break;case 27:Sp(c);case 26:case 5:zn(s,c,r),r&&l===null&&v&4&&xp(c),jl(c,c.return);break;case 12:zn(s,c,r);break;case 31:zn(s,c,r),r&&v&4&&jp(s,c);break;case 13:zn(s,c,r),r&&v&4&&Cp(s,c);break;case 22:c.memoizedState===null&&zn(s,c,r),jl(c,c.return);break;case 30:break;default:zn(s,c,r)}t=t.sibling}}function ac(e,t){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&ml(r))}function lc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ml(e))}function nn(e,t,r,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rp(e,t,r,l),t=t.sibling}function Rp(e,t,r,l){var s=t.flags;switch(t.tag){case 0:case 11:case 15:nn(e,t,r,l),s&2048&&Al(9,t);break;case 1:nn(e,t,r,l);break;case 3:nn(e,t,r,l),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ml(e)));break;case 12:if(s&2048){nn(e,t,r,l),e=t.stateNode;try{var c=t.memoizedProps,v=c.id,x=c.onPostCommit;typeof x=="function"&&x(v,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Ce(t,t.return,T)}}else nn(e,t,r,l);break;case 31:nn(e,t,r,l);break;case 13:nn(e,t,r,l);break;case 23:break;case 22:c=t.stateNode,v=t.alternate,t.memoizedState!==null?c._visibility&2?nn(e,t,r,l):Cl(e,t):c._visibility&2?nn(e,t,r,l):(c._visibility|=2,xa(e,t,r,l,(t.subtreeFlags&10256)!==0||!1)),s&2048&&ac(v,t);break;case 24:nn(e,t,r,l),s&2048&&lc(t.alternate,t);break;default:nn(e,t,r,l)}}function xa(e,t,r,l,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,v=t,x=r,T=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:xa(c,v,x,T,s),Al(8,v);break;case 23:break;case 22:var H=v.stateNode;v.memoizedState!==null?H._visibility&2?xa(c,v,x,T,s):Cl(c,v):(H._visibility|=2,xa(c,v,x,T,s)),s&&L&2048&&ac(v.alternate,v);break;case 24:xa(c,v,x,T,s),s&&L&2048&&lc(v.alternate,v);break;default:xa(c,v,x,T,s)}t=t.sibling}}function Cl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var r=e,l=t,s=l.flags;switch(l.tag){case 22:Cl(r,l),s&2048&&ac(l.alternate,l);break;case 24:Cl(r,l),s&2048&&lc(l.alternate,l);break;default:Cl(r,l)}t=t.sibling}}var Nl=8192;function _a(e,t,r){if(e.subtreeFlags&Nl)for(e=e.child;e!==null;)zp(e,t,r),e=e.sibling}function zp(e,t,r){switch(e.tag){case 26:_a(e,t,r),e.flags&Nl&&e.memoizedState!==null&&T1(r,tn,e.memoizedState,e.memoizedProps);break;case 5:_a(e,t,r);break;case 3:case 4:var l=tn;tn=Co(e.stateNode.containerInfo),_a(e,t,r),tn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Nl,Nl=16777216,_a(e,t,r),Nl=l):_a(e,t,r));break;default:_a(e,t,r)}}function Dp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];nt=l,$p(l,e)}Dp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Op(e),e=e.sibling}function Op(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&Jn(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,po(e)):Ml(e);break;default:Ml(e)}}function po(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];nt=l,$p(l,e)}Dp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jn(8,t,t.return),po(t);break;case 22:r=t.stateNode,r._visibility&2&&(r._visibility&=-3,po(t));break;default:po(t)}e=e.sibling}}function $p(e,t){for(;nt!==null;){var r=nt;switch(r.tag){case 0:case 11:case 15:Jn(8,r,t);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ml(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,nt=l;else e:for(r=e;nt!==null;){l=nt;var s=l.sibling,c=l.return;if(wp(l),l===r){nt=null;break e}if(s!==null){s.return=c,nt=s;break e}nt=c}}}var V_={getCacheForType:function(e){var t=lt(Ze),r=t.data.get(e);return r===void 0&&(r=e(),t.data.set(e,r)),r},cacheSignal:function(){return lt(Ze).controller.signal}},H_=typeof WeakMap=="function"?WeakMap:Map,we=0,ze=null,ge=null,be=0,je=0,zt=null,Wn=!1,Sa=!1,ic=!1,Dn=0,Ye=0,In=0,$r=0,oc=0,Dt=0,Ea=0,Rl=null,Et=null,sc=!1,vo=0,Lp=0,go=1/0,yo=null,er=null,Ie=0,tr=null,Ta=null,On=0,uc=0,cc=null,Up=null,zl=0,dc=null;function Ot(){return(we&2)!==0&&be!==0?be&-be:z.T!==null?gc():If()}function Bp(){if(Dt===0)if((be&536870912)===0||_e){var e=wi;wi<<=1,(wi&3932160)===0&&(wi=262144),Dt=e}else Dt=536870912;return e=Mt.current,e!==null&&(e.flags|=32),Dt}function Tt(e,t,r){(e===ze&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(wa(e,0),nr(e,be,Dt,!1)),Ia(e,r),((we&2)===0||e!==ze)&&(e===ze&&((we&2)===0&&($r|=r),Ye===4&&nr(e,be,Dt,!1)),fn(e))}function Vp(e,t,r){if((we&6)!==0)throw Error(o(327));var l=!r&&(t&127)===0&&(t&e.expiredLanes)===0||Wa(e,t),s=l?q_(e,t):mc(e,t,!0),c=l;do{if(s===0){Sa&&!l&&nr(e,t,0,!1);break}else{if(r=e.current.alternate,c&&!k_(r)){s=mc(e,t,!1),c=!1;continue}if(s===2){if(c=t,e.errorRecoveryDisabledLanes&c)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){t=v;e:{var x=e;s=Rl;var T=x.current.memoizedState.isDehydrated;if(T&&(wa(x,v).flags|=256),v=mc(x,v,!1),v!==2){if(ic&&!T){x.errorRecoveryDisabledLanes|=c,$r|=c,s=4;break e}c=Et,Et=s,c!==null&&(Et===null?Et=c:Et.push.apply(Et,c))}s=v}if(c=!1,s!==2)continue}}if(s===1){wa(e,0),nr(e,t,0,!0);break}e:{switch(l=e,c=s,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:nr(l,t,Dt,!Wn);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(s=vo+300-wt(),10<s)){if(nr(l,t,Dt,!Wn),ji(l,0,!0)!==0)break e;On=t,l.timeoutHandle=vv(Hp.bind(null,l,r,Et,yo,sc,t,Dt,$r,Ea,Wn,c,"Throttled",-0,0),s);break e}Hp(l,r,Et,yo,sc,t,Dt,$r,Ea,Wn,c,null,-0,0)}}break}while(!0);fn(e)}function Hp(e,t,r,l,s,c,v,x,T,L,H,P,U,B){if(e.timeoutHandle=-1,P=t.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},zp(t,c,P);var ne=(c&62914560)===c?vo-wt():(c&4194048)===c?Lp-wt():0;if(ne=w1(P,ne),ne!==null){On=c,e.cancelPendingCommit=ne(Qp.bind(null,e,t,c,r,l,s,v,x,T,H,P,null,U,B)),nr(e,c,v,!L);return}}Qp(e,t,c,r,l,s,v,x,T)}function k_(e){for(var t=e;;){var r=t.tag;if((r===0||r===11||r===15)&&t.flags&16384&&(r=t.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var s=r[l],c=s.getSnapshot;s=s.value;try{if(!Ct(c(),s))return!1}catch{return!1}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t,r,l){t&=~oc,t&=~$r,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var s=t;0<s;){var c=31-jt(s),v=1<<c;l[c]=-1,s&=~v}r!==0&&Ff(e,r,t)}function bo(){return(we&6)===0?(Dl(0),!1):!0}function fc(){if(ge!==null){if(je===0)var e=ge.return;else e=ge,En=Ar=null,Cu(e),pa=null,pl=0,e=ge;for(;e!==null;)gp(e.alternate,e),e=e.return;ge=null}}function wa(e,t){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,o1(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),On=0,fc(),ze=e,ge=r=_n(e.current,null),be=t,je=0,zt=null,Wn=!1,Sa=Wa(e,t),ic=!1,Ea=Dt=oc=$r=In=Ye=0,Et=Rl=null,sc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var s=31-jt(l),c=1<<s;t|=e[s],l&=~c}return Dn=t,Vi(),r}function kp(e,t){me=null,z.H=El,t===ha||t===Ki?(t=rh(),je=3):t===vu?(t=rh(),je=4):je=t===Gu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,zt=t,ge===null&&(Ye=1,oo(e,Vt(t,e.current)))}function Yp(){var e=Mt.current;return e===null?!0:(be&4194048)===be?qt===null:(be&62914560)===be||(be&536870912)!==0?e===qt:!1}function qp(){var e=z.H;return z.H=El,e===null?El:e}function Gp(){var e=z.A;return z.A=V_,e}function xo(){Ye=4,Wn||(be&4194048)!==be&&Mt.current!==null||(Sa=!0),(In&134217727)===0&&($r&134217727)===0||ze===null||nr(ze,be,Dt,!1)}function mc(e,t,r){var l=we;we|=2;var s=qp(),c=Gp();(ze!==e||be!==t)&&(yo=null,wa(e,t)),t=!1;var v=Ye;e:do try{if(je!==0&&ge!==null){var x=ge,T=zt;switch(je){case 8:fc(),v=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var L=je;if(je=0,zt=null,Aa(e,x,T,L),r&&Sa){v=0;break e}break;default:L=je,je=0,zt=null,Aa(e,x,T,L)}}Y_(),v=Ye;break}catch(H){kp(e,H)}while(!0);return t&&e.shellSuspendCounter++,En=Ar=null,we=l,z.H=s,z.A=c,ge===null&&(ze=null,be=0,Vi()),v}function Y_(){for(;ge!==null;)Xp(ge)}function q_(e,t){var r=we;we|=2;var l=qp(),s=Gp();ze!==e||be!==t?(yo=null,go=wt()+500,wa(e,t)):Sa=Wa(e,t);e:do try{if(je!==0&&ge!==null){t=ge;var c=zt;t:switch(je){case 1:je=0,zt=null,Aa(e,t,c,1);break;case 2:case 9:if(th(c)){je=0,zt=null,Pp(t);break}t=function(){je!==2&&je!==9||ze!==e||(je=7),fn(e)},c.then(t,t);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:th(c)?(je=0,zt=null,Pp(t)):(je=0,zt=null,Aa(e,t,c,7));break;case 5:var v=null;switch(ge.tag){case 26:v=ge.memoizedState;case 5:case 27:var x=ge;if(v?Rv(v):x.stateNode.complete){je=0,zt=null;var T=x.sibling;if(T!==null)ge=T;else{var L=x.return;L!==null?(ge=L,_o(L)):ge=null}break t}}je=0,zt=null,Aa(e,t,c,5);break;case 6:je=0,zt=null,Aa(e,t,c,6);break;case 8:fc(),Ye=6;break e;default:throw Error(o(462))}}G_();break}catch(H){kp(e,H)}while(!0);return En=Ar=null,z.H=l,z.A=s,we=r,ge!==null?0:(ze=null,be=0,Vi(),Ye)}function G_(){for(;ge!==null&&!m0();)Xp(ge)}function Xp(e){var t=pp(e.alternate,e,Dn);e.memoizedProps=e.pendingProps,t===null?_o(e):ge=t}function Pp(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=up(r,t,t.pendingProps,t.type,void 0,be);break;case 11:t=up(r,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:Cu(t);default:gp(r,t),t=ge=Gm(t,Dn),t=pp(r,t,Dn)}e.memoizedProps=e.pendingProps,t===null?_o(e):ge=t}function Aa(e,t,r,l){En=Ar=null,Cu(t),pa=null,pl=0;var s=t.return;try{if(z_(e,s,t,r,be)){Ye=1,oo(e,Vt(r,e.current)),ge=null;return}}catch(c){if(s!==null)throw ge=s,c;Ye=1,oo(e,Vt(r,e.current)),ge=null;return}t.flags&32768?(_e||l===1?e=!0:Sa||(be&536870912)!==0?e=!1:(Wn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Mt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Kp(t,e)):_o(t)}function _o(e){var t=e;do{if((t.flags&32768)!==0){Kp(t,Wn);return}e=t.return;var r=$_(t.alternate,t,Dn);if(r!==null){ge=r;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Ye===0&&(Ye=5)}function Kp(e,t){do{var r=L_(e.alternate,e);if(r!==null){r.flags&=32767,ge=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=r}while(e!==null);Ye=6,ge=null}function Qp(e,t,r,l,s,c,v,x,T){e.cancelPendingCommit=null;do So();while(Ie!==0);if((we&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=tu,E0(e,r,c,v,x,T),e===ze&&(ge=ze=null,be=0),Ta=t,tr=e,On=r,uc=c,cc=s,Up=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Q_(Ei,function(){return Ip(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,s=X.p,X.p=2,v=we,we|=4;try{U_(e,t,r)}finally{we=v,X.p=s,z.T=l}}Ie=1,Zp(),Fp(),Jp()}}function Zp(){if(Ie===1){Ie=0;var e=tr,t=Ta,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var l=X.p;X.p=2;var s=we;we|=4;try{Np(t,e);var c=wc,v=$m(e.containerInfo),x=c.focusedElem,T=c.selectionRange;if(v!==x&&x&&x.ownerDocument&&Om(x.ownerDocument.documentElement,x)){if(T!==null&&Fs(x)){var L=T.start,H=T.end;if(H===void 0&&(H=L),"selectionStart"in x)x.selectionStart=L,x.selectionEnd=Math.min(H,x.value.length);else{var P=x.ownerDocument||document,U=P&&P.defaultView||window;if(U.getSelection){var B=U.getSelection(),ne=x.textContent.length,se=Math.min(T.start,ne),Re=T.end===void 0?se:Math.min(T.end,ne);!B.extend&&se>Re&&(v=Re,Re=se,se=v);var O=Dm(x,se),M=Dm(x,Re);if(O&&M&&(B.rangeCount!==1||B.anchorNode!==O.node||B.anchorOffset!==O.offset||B.focusNode!==M.node||B.focusOffset!==M.offset)){var $=P.createRange();$.setStart(O.node,O.offset),B.removeAllRanges(),se>Re?(B.addRange($),B.extend(M.node,M.offset)):($.setEnd(M.node,M.offset),B.addRange($))}}}}for(P=[],B=x;B=B.parentNode;)B.nodeType===1&&P.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<P.length;x++){var Y=P[x];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Oo=!!Tc,wc=Tc=null}finally{we=s,X.p=l,z.T=r}}e.current=t,Ie=2}}function Fp(){if(Ie===2){Ie=0;var e=tr,t=Ta,r=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var l=X.p;X.p=2;var s=we;we|=4;try{Tp(e,t.alternate,t)}finally{we=s,X.p=l,z.T=r}}Ie=3}}function Jp(){if(Ie===4||Ie===3){Ie=0,h0();var e=tr,t=Ta,r=On,l=Up;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ie=5:(Ie=0,Ta=tr=null,Wp(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(er=null),Rs(r),t=t.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Ja,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=z.T,s=X.p,X.p=2,z.T=null;try{for(var c=e.onRecoverableError,v=0;v<l.length;v++){var x=l[v];c(x.value,{componentStack:x.stack})}}finally{z.T=t,X.p=s}}(On&3)!==0&&So(),fn(e),s=e.pendingLanes,(r&261930)!==0&&(s&42)!==0?e===dc?zl++:(zl=0,dc=e):zl=0,Dl(0)}}function Wp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ml(t)))}function So(){return Zp(),Fp(),Jp(),Ip()}function Ip(){if(Ie!==5)return!1;var e=tr,t=uc;uc=0;var r=Rs(On),l=z.T,s=X.p;try{X.p=32>r?32:r,z.T=null,r=cc,cc=null;var c=tr,v=On;if(Ie=0,Ta=tr=null,On=0,(we&6)!==0)throw Error(o(331));var x=we;if(we|=4,Op(c.current),Rp(c,c.current,v,r),we=x,Dl(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Ja,c)}catch{}return!0}finally{X.p=s,z.T=l,Wp(e,t)}}function ev(e,t,r){t=Vt(r,t),t=qu(e.stateNode,t,2),e=Qn(e,t,2),e!==null&&(Ia(e,2),fn(e))}function Ce(e,t,r){if(e.tag===3)ev(e,e,r);else for(;t!==null;){if(t.tag===3){ev(t,e,r);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(er===null||!er.has(l))){e=Vt(r,e),r=tp(2),l=Qn(t,r,2),l!==null&&(np(r,l,t,e),Ia(l,2),fn(l));break}}t=t.return}}function hc(e,t,r){var l=e.pingCache;if(l===null){l=e.pingCache=new H_;var s=new Set;l.set(t,s)}else s=l.get(t),s===void 0&&(s=new Set,l.set(t,s));s.has(r)||(ic=!0,s.add(r),e=X_.bind(null,e,t,r),t.then(e,e))}function X_(e,t,r){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,ze===e&&(be&r)===r&&(Ye===4||Ye===3&&(be&62914560)===be&&300>wt()-vo?(we&2)===0&&wa(e,0):oc|=r,Ea===be&&(Ea=0)),fn(e)}function tv(e,t){t===0&&(t=Zf()),e=Er(e,t),e!==null&&(Ia(e,t),fn(e))}function P_(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),tv(e,r)}function K_(e,t){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),tv(e,r)}function Q_(e,t){return js(e,t)}var Eo=null,ja=null,pc=!1,To=!1,vc=!1,rr=0;function fn(e){e!==ja&&e.next===null&&(ja===null?Eo=ja=e:ja=ja.next=e),To=!0,pc||(pc=!0,F_())}function Dl(e,t){if(!vc&&To){vc=!0;do for(var r=!1,l=Eo;l!==null;){if(e!==0){var s=l.pendingLanes;if(s===0)var c=0;else{var v=l.suspendedLanes,x=l.pingedLanes;c=(1<<31-jt(42|e)+1)-1,c&=s&~(v&~x),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(r=!0,lv(l,c))}else c=be,c=ji(l,l===ze?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Wa(l,c)||(r=!0,lv(l,c));l=l.next}while(r);vc=!1}}function Z_(){nv()}function nv(){To=pc=!1;var e=0;rr!==0&&i1()&&(e=rr);for(var t=wt(),r=null,l=Eo;l!==null;){var s=l.next,c=rv(l,t);c===0?(l.next=null,r===null?Eo=s:r.next=s,s===null&&(ja=r)):(r=l,(e!==0||(c&3)!==0)&&(To=!0)),l=s}Ie!==0&&Ie!==5||Dl(e),rr!==0&&(rr=0)}function rv(e,t){for(var r=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var v=31-jt(c),x=1<<v,T=s[v];T===-1?((x&r)===0||(x&l)!==0)&&(s[v]=S0(x,t)):T<=t&&(e.expiredLanes|=x),c&=~x}if(t=ze,r=be,r=ji(e,e===t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===t&&(je===2||je===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Cs(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Wa(e,r)){if(t=r&-r,t===e.callbackPriority)return t;switch(l!==null&&Cs(l),Rs(r)){case 2:case 8:r=Kf;break;case 32:r=Ei;break;case 268435456:r=Qf;break;default:r=Ei}return l=av.bind(null,e),r=js(r,l),e.callbackPriority=t,e.callbackNode=r,t}return l!==null&&l!==null&&Cs(l),e.callbackPriority=2,e.callbackNode=null,2}function av(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(So()&&e.callbackNode!==r)return null;var l=be;return l=ji(e,e===ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vp(e,l,t),rv(e,wt()),e.callbackNode!=null&&e.callbackNode===r?av.bind(null,e):null)}function lv(e,t){if(So())return null;Vp(e,t,!0)}function F_(){s1(function(){(we&6)!==0?js(Pf,Z_):nv()})}function gc(){if(rr===0){var e=fa;e===0&&(e=Ti,Ti<<=1,(Ti&261888)===0&&(Ti=256)),rr=e}return rr}function iv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function ov(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function J_(e,t,r,l,s){if(t==="submit"&&r&&r.stateNode===s){var c=iv((s[yt]||null).action),v=l.submitter;v&&(t=(t=v[yt]||null)?iv(t.formAction):v.getAttribute("formAction"),t!==null&&(c=t,v=null));var x=new $i("action","action",null,l,s);e.push({event:x,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(rr!==0){var T=v?ov(s,v):new FormData(s);Uu(r,{pending:!0,data:T,method:s.method,action:c},null,T)}}else typeof c=="function"&&(x.preventDefault(),T=v?ov(s,v):new FormData(s),Uu(r,{pending:!0,data:T,method:s.method,action:c},c,T))},currentTarget:s}]})}}for(var yc=0;yc<eu.length;yc++){var bc=eu[yc],W_=bc.toLowerCase(),I_=bc[0].toUpperCase()+bc.slice(1);en(W_,"on"+I_)}en(Bm,"onAnimationEnd"),en(Vm,"onAnimationIteration"),en(Hm,"onAnimationStart"),en("dblclick","onDoubleClick"),en("focusin","onFocus"),en("focusout","onBlur"),en(p_,"onTransitionRun"),en(v_,"onTransitionStart"),en(g_,"onTransitionCancel"),en(km,"onTransitionEnd"),Wr("onMouseEnter",["mouseout","mouseover"]),Wr("onMouseLeave",["mouseout","mouseover"]),Wr("onPointerEnter",["pointerout","pointerover"]),Wr("onPointerLeave",["pointerout","pointerover"]),br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),br("onBeforeInput",["compositionend","keypress","textInput","paste"]),br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ol));function sv(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],s=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var v=l.length-1;0<=v;v--){var x=l[v],T=x.instance,L=x.currentTarget;if(x=x.listener,T!==c&&s.isPropagationStopped())break e;c=x,s.currentTarget=L;try{c(s)}catch(H){Bi(H)}s.currentTarget=null,c=T}else for(v=0;v<l.length;v++){if(x=l[v],T=x.instance,L=x.currentTarget,x=x.listener,T!==c&&s.isPropagationStopped())break e;c=x,s.currentTarget=L;try{c(s)}catch(H){Bi(H)}s.currentTarget=null,c=T}}}}function ye(e,t){var r=t[zs];r===void 0&&(r=t[zs]=new Set);var l=e+"__bubble";r.has(l)||(uv(t,e,2,!1),r.add(l))}function xc(e,t,r){var l=0;t&&(l|=4),uv(r,e,l,t)}var wo="_reactListening"+Math.random().toString(36).slice(2);function _c(e){if(!e[wo]){e[wo]=!0,nm.forEach(function(r){r!=="selectionchange"&&(e1.has(r)||xc(r,!1,e),xc(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wo]||(t[wo]=!0,xc("selectionchange",!1,t))}}function uv(e,t,r,l){switch(Bv(t)){case 2:var s=C1;break;case 8:s=N1;break;default:s=Lc}r=s.bind(null,t,r,e),s=void 0,!ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Sc(e,t,r,l,s){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var x=l.stateNode.containerInfo;if(x===s)break;if(v===4)for(v=l.return;v!==null;){var T=v.tag;if((T===3||T===4)&&v.stateNode.containerInfo===s)return;v=v.return}for(;x!==null;){if(v=Zr(x),v===null)return;if(T=v.tag,T===5||T===6||T===26||T===27){l=c=v;continue e}x=x.parentNode}}l=l.return}hm(function(){var L=c,H=Vs(r),P=[];e:{var U=Ym.get(e);if(U!==void 0){var B=$i,ne=e;switch(e){case"keypress":if(Di(r)===0)break e;case"keydown":case"keyup":B=K0;break;case"focusin":ne="focus",B=Xs;break;case"focusout":ne="blur",B=Xs;break;case"beforeblur":case"afterblur":B=Xs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=F0;break;case Bm:case Vm:case Hm:B=B0;break;case km:B=W0;break;case"scroll":case"scrollend":B=D0;break;case"wheel":B=e_;break;case"copy":case"cut":case"paste":B=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=bm;break;case"toggle":case"beforetoggle":B=n_}var se=(t&4)!==0,Re=!se&&(e==="scroll"||e==="scrollend"),O=se?U!==null?U+"Capture":null:U;se=[];for(var M=L,$;M!==null;){var Y=M;if($=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||$===null||O===null||(Y=nl(M,O),Y!=null&&se.push($l(M,Y,$))),Re)break;M=M.return}0<se.length&&(U=new B(U,ne,null,r,H),P.push({event:U,listeners:se}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",U&&r!==Bs&&(ne=r.relatedTarget||r.fromElement)&&(Zr(ne)||ne[Qr]))break e;if((B||U)&&(U=H.window===H?H:(U=H.ownerDocument)?U.defaultView||U.parentWindow:window,B?(ne=r.relatedTarget||r.toElement,B=L,ne=ne?Zr(ne):null,ne!==null&&(Re=d(ne),se=ne.tag,ne!==Re||se!==5&&se!==27&&se!==6)&&(ne=null)):(B=null,ne=L),B!==ne)){if(se=gm,Y="onMouseLeave",O="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(se=bm,Y="onPointerLeave",O="onPointerEnter",M="pointer"),Re=B==null?U:tl(B),$=ne==null?U:tl(ne),U=new se(Y,M+"leave",B,r,H),U.target=Re,U.relatedTarget=$,Y=null,Zr(H)===L&&(se=new se(O,M+"enter",ne,r,H),se.target=$,se.relatedTarget=Re,Y=se),Re=Y,B&&ne)t:{for(se=t1,O=B,M=ne,$=0,Y=O;Y;Y=se(Y))$++;Y=0;for(var ie=M;ie;ie=se(ie))Y++;for(;0<$-Y;)O=se(O),$--;for(;0<Y-$;)M=se(M),Y--;for(;$--;){if(O===M||M!==null&&O===M.alternate){se=O;break t}O=se(O),M=se(M)}se=null}else se=null;B!==null&&cv(P,U,B,se,!1),ne!==null&&Re!==null&&cv(P,Re,ne,se,!0)}}e:{if(U=L?tl(L):window,B=U.nodeName&&U.nodeName.toLowerCase(),B==="select"||B==="input"&&U.type==="file")var Ee=jm;else if(wm(U))if(Cm)Ee=f_;else{Ee=c_;var ae=u_}else B=U.nodeName,!B||B.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?L&&Us(L.elementType)&&(Ee=jm):Ee=d_;if(Ee&&(Ee=Ee(e,L))){Am(P,Ee,r,H);break e}ae&&ae(e,U,L),e==="focusout"&&L&&U.type==="number"&&L.memoizedProps.value!=null&&Ls(U,"number",U.value)}switch(ae=L?tl(L):window,e){case"focusin":(wm(ae)||ae.contentEditable==="true")&&(aa=ae,Js=L,cl=null);break;case"focusout":cl=Js=aa=null;break;case"mousedown":Ws=!0;break;case"contextmenu":case"mouseup":case"dragend":Ws=!1,Lm(P,r,H);break;case"selectionchange":if(h_)break;case"keydown":case"keyup":Lm(P,r,H)}var he;if(Ks)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else ra?Em(e,r)&&(xe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(xe="onCompositionStart");xe&&(xm&&r.locale!=="ko"&&(ra||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&ra&&(he=pm()):(kn=H,Ys="value"in kn?kn.value:kn.textContent,ra=!0)),ae=Ao(L,xe),0<ae.length&&(xe=new ym(xe,e,null,r,H),P.push({event:xe,listeners:ae}),he?xe.data=he:(he=Tm(r),he!==null&&(xe.data=he)))),(he=a_?l_(e,r):i_(e,r))&&(xe=Ao(L,"onBeforeInput"),0<xe.length&&(ae=new ym("onBeforeInput","beforeinput",null,r,H),P.push({event:ae,listeners:xe}),ae.data=he)),J_(P,e,L,r,H)}sv(P,t)})}function $l(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ao(e,t){for(var r=t+"Capture",l=[];e!==null;){var s=e,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=nl(e,r),s!=null&&l.unshift($l(e,s,c)),s=nl(e,t),s!=null&&l.push($l(e,s,c))),e.tag===3)return l;e=e.return}return[]}function t1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cv(e,t,r,l,s){for(var c=t._reactName,v=[];r!==null&&r!==l;){var x=r,T=x.alternate,L=x.stateNode;if(x=x.tag,T!==null&&T===l)break;x!==5&&x!==26&&x!==27||L===null||(T=L,s?(L=nl(r,c),L!=null&&v.unshift($l(r,L,T))):s||(L=nl(r,c),L!=null&&v.push($l(r,L,T)))),r=r.return}v.length!==0&&e.push({event:t,listeners:v})}var n1=/\r\n?/g,r1=/\u0000|\uFFFD/g;function dv(e){return(typeof e=="string"?e:""+e).replace(n1,`
`).replace(r1,"")}function fv(e,t){return t=dv(t),dv(e)===t}function Me(e,t,r,l,s,c){switch(r){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ea(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ea(e,""+l);break;case"className":Ni(e,"class",l);break;case"tabIndex":Ni(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ni(e,r,l);break;case"style":fm(e,l,c);break;case"data":if(t!=="object"){Ni(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Ri(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(r==="formAction"?(t!=="input"&&Me(e,t,"name",s.name,s,null),Me(e,t,"formEncType",s.formEncType,s,null),Me(e,t,"formMethod",s.formMethod,s,null),Me(e,t,"formTarget",s.formTarget,s,null)):(Me(e,t,"encType",s.encType,s,null),Me(e,t,"method",s.method,s,null),Me(e,t,"target",s.target,s,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Ri(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=bn);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(r=l.__html,r!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Ri(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Ci(e,"popover",l);break;case"xlinkActuate":yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":yn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":yn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":yn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":yn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ci(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=R0.get(r)||r,Ci(e,r,l))}}function Ec(e,t,r,l,s,c){switch(r){case"style":fm(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(r=l.__html,r!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"children":typeof l=="string"?ea(e,l):(typeof l=="number"||typeof l=="bigint")&&ea(e,""+l);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"onClick":l!=null&&(e.onclick=bn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rm.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(s=r.endsWith("Capture"),t=r.slice(2,s?r.length-7:void 0),c=e[yt]||null,c=c!=null?c[r]:null,typeof c=="function"&&e.removeEventListener(t,c,s),typeof l=="function")){typeof c!="function"&&c!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,l,s);break e}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Ci(e,r,l)}}}function ot(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var l=!1,s=!1,c;for(c in r)if(r.hasOwnProperty(c)){var v=r[c];if(v!=null)switch(c){case"src":l=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Me(e,t,c,v,r,null)}}s&&Me(e,t,"srcSet",r.srcSet,r,null),l&&Me(e,t,"src",r.src,r,null);return;case"input":ye("invalid",e);var x=c=v=s=null,T=null,L=null;for(l in r)if(r.hasOwnProperty(l)){var H=r[l];if(H!=null)switch(l){case"name":s=H;break;case"type":v=H;break;case"checked":T=H;break;case"defaultChecked":L=H;break;case"value":c=H;break;case"defaultValue":x=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,t));break;default:Me(e,t,l,H,r,null)}}sm(e,c,x,T,L,v,s,!1);return;case"select":ye("invalid",e),l=v=c=null;for(s in r)if(r.hasOwnProperty(s)&&(x=r[s],x!=null))switch(s){case"value":c=x;break;case"defaultValue":v=x;break;case"multiple":l=x;default:Me(e,t,s,x,r,null)}t=c,r=v,e.multiple=!!l,t!=null?Ir(e,!!l,t,!1):r!=null&&Ir(e,!!l,r,!0);return;case"textarea":ye("invalid",e),c=s=l=null;for(v in r)if(r.hasOwnProperty(v)&&(x=r[v],x!=null))switch(v){case"value":l=x;break;case"defaultValue":s=x;break;case"children":c=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(o(91));break;default:Me(e,t,v,x,r,null)}cm(e,l,s,c);return;case"option":for(T in r)r.hasOwnProperty(T)&&(l=r[T],l!=null)&&(T==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Me(e,t,T,l,r,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(l=0;l<Ol.length;l++)ye(Ol[l],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in r)if(r.hasOwnProperty(L)&&(l=r[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Me(e,t,L,l,r,null)}return;default:if(Us(t)){for(H in r)r.hasOwnProperty(H)&&(l=r[H],l!==void 0&&Ec(e,t,H,l,r,void 0));return}}for(x in r)r.hasOwnProperty(x)&&(l=r[x],l!=null&&Me(e,t,x,l,r,null))}function a1(e,t,r,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,v=null,x=null,T=null,L=null,H=null;for(B in r){var P=r[B];if(r.hasOwnProperty(B)&&P!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":T=P;default:l.hasOwnProperty(B)||Me(e,t,B,null,l,P)}}for(var U in l){var B=l[U];if(P=r[U],l.hasOwnProperty(U)&&(B!=null||P!=null))switch(U){case"type":c=B;break;case"name":s=B;break;case"checked":L=B;break;case"defaultChecked":H=B;break;case"value":v=B;break;case"defaultValue":x=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:B!==P&&Me(e,t,U,B,l,P)}}$s(e,v,x,T,L,H,c,s);return;case"select":B=v=x=U=null;for(c in r)if(T=r[c],r.hasOwnProperty(c)&&T!=null)switch(c){case"value":break;case"multiple":B=T;default:l.hasOwnProperty(c)||Me(e,t,c,null,l,T)}for(s in l)if(c=l[s],T=r[s],l.hasOwnProperty(s)&&(c!=null||T!=null))switch(s){case"value":U=c;break;case"defaultValue":x=c;break;case"multiple":v=c;default:c!==T&&Me(e,t,s,c,l,T)}t=x,r=v,l=B,U!=null?Ir(e,!!r,U,!1):!!l!=!!r&&(t!=null?Ir(e,!!r,t,!0):Ir(e,!!r,r?[]:"",!1));return;case"textarea":B=U=null;for(x in r)if(s=r[x],r.hasOwnProperty(x)&&s!=null&&!l.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Me(e,t,x,null,l,s)}for(v in l)if(s=l[v],c=r[v],l.hasOwnProperty(v)&&(s!=null||c!=null))switch(v){case"value":U=s;break;case"defaultValue":B=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==c&&Me(e,t,v,s,l,c)}um(e,U,B);return;case"option":for(var ne in r)U=r[ne],r.hasOwnProperty(ne)&&U!=null&&!l.hasOwnProperty(ne)&&(ne==="selected"?e.selected=!1:Me(e,t,ne,null,l,U));for(T in l)U=l[T],B=r[T],l.hasOwnProperty(T)&&U!==B&&(U!=null||B!=null)&&(T==="selected"?e.selected=U&&typeof U!="function"&&typeof U!="symbol":Me(e,t,T,U,l,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in r)U=r[se],r.hasOwnProperty(se)&&U!=null&&!l.hasOwnProperty(se)&&Me(e,t,se,null,l,U);for(L in l)if(U=l[L],B=r[L],l.hasOwnProperty(L)&&U!==B&&(U!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:Me(e,t,L,U,l,B)}return;default:if(Us(t)){for(var Re in r)U=r[Re],r.hasOwnProperty(Re)&&U!==void 0&&!l.hasOwnProperty(Re)&&Ec(e,t,Re,void 0,l,U);for(H in l)U=l[H],B=r[H],!l.hasOwnProperty(H)||U===B||U===void 0&&B===void 0||Ec(e,t,H,U,l,B);return}}for(var O in r)U=r[O],r.hasOwnProperty(O)&&U!=null&&!l.hasOwnProperty(O)&&Me(e,t,O,null,l,U);for(P in l)U=l[P],B=r[P],!l.hasOwnProperty(P)||U===B||U==null&&B==null||Me(e,t,P,U,l,B)}function mv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function l1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var s=r[l],c=s.transferSize,v=s.initiatorType,x=s.duration;if(c&&x&&mv(v)){for(v=0,x=s.responseEnd,l+=1;l<r.length;l++){var T=r[l],L=T.startTime;if(L>x)break;var H=T.transferSize,P=T.initiatorType;H&&mv(P)&&(T=T.responseEnd,v+=H*(T<x?1:(x-L)/(T-L)))}if(--l,t+=8*(c+v)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tc=null,wc=null;function jo(e){return e.nodeType===9?e:e.ownerDocument}function hv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ac(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jc=null;function i1(){var e=window.event;return e&&e.type==="popstate"?e===jc?!1:(jc=e,!0):(jc=null,!1)}var vv=typeof setTimeout=="function"?setTimeout:void 0,o1=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,s1=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(e){return gv.resolve(null).then(e).catch(u1)}:vv;function u1(e){setTimeout(function(){throw e})}function ar(e){return e==="head"}function yv(e,t){var r=t,l=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(s),Ra(t);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Ll(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Ll(r);for(var c=r.firstChild;c;){var v=c.nextSibling,x=c.nodeName;c[el]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&c.rel.toLowerCase()==="stylesheet"||r.removeChild(c),c=v}}else r==="body"&&Ll(e.ownerDocument.body);r=s}while(r);Ra(t)}function bv(e,t){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?t?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(t?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function Cc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Cc(r),Ds(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function c1(e,t,r,l){for(;e.nodeType===1;){var s=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[el])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function d1(e,t,r){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Gt(e.nextSibling),e===null))return null;return e}function xv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gt(e.nextSibling),e===null))return null;return e}function Nc(e){return e.data==="$?"||e.data==="$~"}function Mc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function f1(e,t){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||r.readyState!=="loading")t();else{var l=function(){t(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Rc=null;function _v(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(t===0)return Gt(e.nextSibling);t--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||t++}e=e.nextSibling}return null}function Sv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(t===0)return e;t--}else r!=="/$"&&r!=="/&"||t++}e=e.previousSibling}return null}function Ev(e,t,r){switch(t=jo(r),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ll(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ds(e)}var Xt=new Map,Tv=new Set;function Co(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $n=X.d;X.d={f:m1,r:h1,D:p1,C:v1,L:g1,m:y1,X:x1,S:b1,M:_1};function m1(){var e=$n.f(),t=bo();return e||t}function h1(e){var t=Fr(e);t!==null&&t.tag===5&&t.type==="form"?kh(t):$n.r(e)}var Ca=typeof document>"u"?null:document;function wv(e,t,r){var l=Ca;if(l&&typeof t=="string"&&t){var s=Ut(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof r=="string"&&(s+='[crossorigin="'+r+'"]'),Tv.has(s)||(Tv.add(s),e={rel:e,crossOrigin:r,href:t},l.querySelector(s)===null&&(t=l.createElement("link"),ot(t,"link",e),tt(t),l.head.appendChild(t)))}}function p1(e){$n.D(e),wv("dns-prefetch",e,null)}function v1(e,t){$n.C(e,t),wv("preconnect",e,t)}function g1(e,t,r){$n.L(e,t,r);var l=Ca;if(l&&e&&t){var s='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&r&&r.imageSrcSet?(s+='[imagesrcset="'+Ut(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(s+='[imagesizes="'+Ut(r.imageSizes)+'"]')):s+='[href="'+Ut(e)+'"]';var c=s;switch(t){case"style":c=Na(e);break;case"script":c=Ma(e)}Xt.has(c)||(e=b({rel:"preload",href:t==="image"&&r&&r.imageSrcSet?void 0:e,as:t},r),Xt.set(c,e),l.querySelector(s)!==null||t==="style"&&l.querySelector(Ul(c))||t==="script"&&l.querySelector(Bl(c))||(t=l.createElement("link"),ot(t,"link",e),tt(t),l.head.appendChild(t)))}}function y1(e,t){$n.m(e,t);var r=Ca;if(r&&e){var l=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Ut(l)+'"][href="'+Ut(e)+'"]',c=s;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ma(e)}if(!Xt.has(c)&&(e=b({rel:"modulepreload",href:e},t),Xt.set(c,e),r.querySelector(s)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Bl(c)))return}l=r.createElement("link"),ot(l,"link",e),tt(l),r.head.appendChild(l)}}}function b1(e,t,r){$n.S(e,t,r);var l=Ca;if(l&&e){var s=Jr(l).hoistableStyles,c=Na(e);t=t||"default";var v=s.get(c);if(!v){var x={loading:0,preload:null};if(v=l.querySelector(Ul(c)))x.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},r),(r=Xt.get(c))&&zc(e,r);var T=v=l.createElement("link");tt(T),ot(T,"link",e),T._p=new Promise(function(L,H){T.onload=L,T.onerror=H}),T.addEventListener("load",function(){x.loading|=1}),T.addEventListener("error",function(){x.loading|=2}),x.loading|=4,No(v,t,l)}v={type:"stylesheet",instance:v,count:1,state:x},s.set(c,v)}}}function x1(e,t){$n.X(e,t);var r=Ca;if(r&&e){var l=Jr(r).hoistableScripts,s=Ma(e),c=l.get(s);c||(c=r.querySelector(Bl(s)),c||(e=b({src:e,async:!0},t),(t=Xt.get(s))&&Dc(e,t),c=r.createElement("script"),tt(c),ot(c,"link",e),r.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(s,c))}}function _1(e,t){$n.M(e,t);var r=Ca;if(r&&e){var l=Jr(r).hoistableScripts,s=Ma(e),c=l.get(s);c||(c=r.querySelector(Bl(s)),c||(e=b({src:e,async:!0,type:"module"},t),(t=Xt.get(s))&&Dc(e,t),c=r.createElement("script"),tt(c),ot(c,"link",e),r.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(s,c))}}function Av(e,t,r,l){var s=(s=ve.current)?Co(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(t=Na(r.href),r=Jr(s).hoistableStyles,l=r.get(t),l||(l={type:"style",instance:null,count:0,state:null},r.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Na(r.href);var c=Jr(s).hoistableStyles,v=c.get(e);if(v||(s=s.ownerDocument||s,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,v),(c=s.querySelector(Ul(e)))&&!c._p&&(v.instance=c,v.state.loading=5),Xt.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Xt.set(e,r),c||S1(s,e,r,v.state))),t&&l===null)throw Error(o(528,""));return v}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=r.async,r=r.src,typeof r=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ma(r),r=Jr(s).hoistableScripts,l=r.get(t),l||(l={type:"script",instance:null,count:0,state:null},r.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Na(e){return'href="'+Ut(e)+'"'}function Ul(e){return'link[rel="stylesheet"]['+e+"]"}function jv(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function S1(e,t,r,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ot(t,"link",r),tt(t),e.head.appendChild(t))}function Ma(e){return'[src="'+Ut(e)+'"]'}function Bl(e){return"script[async]"+e}function Cv(e,t,r){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ut(r.href)+'"]');if(l)return t.instance=l,tt(l),l;var s=b({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),tt(l),ot(l,"style",s),No(l,r.precedence,e),t.instance=l;case"stylesheet":s=Na(r.href);var c=e.querySelector(Ul(s));if(c)return t.state.loading|=4,t.instance=c,tt(c),c;l=jv(r),(s=Xt.get(s))&&zc(l,s),c=(e.ownerDocument||e).createElement("link"),tt(c);var v=c;return v._p=new Promise(function(x,T){v.onload=x,v.onerror=T}),ot(c,"link",l),t.state.loading|=4,No(c,r.precedence,e),t.instance=c;case"script":return c=Ma(r.src),(s=e.querySelector(Bl(c)))?(t.instance=s,tt(s),s):(l=r,(s=Xt.get(c))&&(l=b({},r),Dc(l,s)),e=e.ownerDocument||e,s=e.createElement("script"),tt(s),ot(s,"link",l),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,No(l,r.precedence,e));return t.instance}function No(e,t,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=l.length?l[l.length-1]:null,c=s,v=0;v<l.length;v++){var x=l[v];if(x.dataset.precedence===t)c=x;else if(c!==s)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=r.nodeType===9?r.head:r,t.insertBefore(e,t.firstChild))}function zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Mo=null;function Nv(e,t,r){if(Mo===null){var l=new Map,s=Mo=new Map;s.set(r,l)}else s=Mo,l=s.get(r),l||(l=new Map,s.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),s=0;s<r.length;s++){var c=r[s];if(!(c[el]||c[rt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var v=c.getAttribute(t)||"";v=e+v;var x=l.get(v);x?x.push(c):l.set(v,[c])}}return l}function Mv(e,t,r){e=e.ownerDocument||e,e.head.insertBefore(r,t==="title"?e.querySelector("head > title"):null)}function E1(e,t,r){if(r===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function T1(e,t,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var s=Na(l.href),c=t.querySelector(Ul(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ro.bind(e),t.then(e,e)),r.state.loading|=4,r.instance=c,tt(c);return}c=t.ownerDocument||t,l=jv(l),(s=Xt.get(s))&&zc(l,s),c=c.createElement("link"),tt(c);var v=c;v._p=new Promise(function(x,T){v.onload=x,v.onerror=T}),ot(c,"link",l),r.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Ro.bind(e),t.addEventListener("load",r),t.addEventListener("error",r))}}var Oc=0;function w1(e,t){return e.stylesheets&&e.count===0&&Do(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&Do(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Oc===0&&(Oc=62500*l1());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Do(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Oc?50:800)+t);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(s)}}:null}function Ro(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Do(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zo=null;function Do(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zo=new Map,t.forEach(A1,e),zo=null,Ro.call(e))}function A1(e,t){if(!(t.state.loading&4)){var r=zo.get(e);if(r)var l=r.get(null);else{r=new Map,zo.set(e,r);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var v=s[c];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(r.set(v.dataset.precedence,v),l=v)}l&&r.set(null,l)}s=t.instance,v=s.getAttribute("data-precedence"),c=r.get(v)||l,c===l&&r.set(null,s),r.set(v,s),this.count++,l=Ro.bind(this),s.addEventListener("load",l),s.addEventListener("error",l),c?c.parentNode.insertBefore(s,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Vl={$$typeof:q,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function j1(e,t,r,l,s,c,v,x,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ns(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ns(0),this.hiddenUpdates=Ns(null),this.identifierPrefix=l,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function zv(e,t,r,l,s,c,v,x,T,L,H,P){return e=new j1(e,t,r,v,T,L,H,P,x),t=1,c===!0&&(t|=24),c=Nt(3,null,null,t),e.current=c,c.stateNode=e,t=mu(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:r,cache:t},gu(c),e}function Dv(e){return e?(e=oa,e):oa}function Ov(e,t,r,l,s,c){s=Dv(s),l.context===null?l.context=s:l.pendingContext=s,l=Kn(t),l.payload={element:r},c=c===void 0?null:c,c!==null&&(l.callback=c),r=Qn(e,l,t),r!==null&&(Tt(r,e,t),gl(r,e,t))}function $v(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function $c(e,t){$v(e,t),(e=e.alternate)&&$v(e,t)}function Lv(e){if(e.tag===13||e.tag===31){var t=Er(e,67108864);t!==null&&Tt(t,e,67108864),$c(e,67108864)}}function Uv(e){if(e.tag===13||e.tag===31){var t=Ot();t=Ms(t);var r=Er(e,t);r!==null&&Tt(r,e,t),$c(e,t)}}var Oo=!0;function C1(e,t,r,l){var s=z.T;z.T=null;var c=X.p;try{X.p=2,Lc(e,t,r,l)}finally{X.p=c,z.T=s}}function N1(e,t,r,l){var s=z.T;z.T=null;var c=X.p;try{X.p=8,Lc(e,t,r,l)}finally{X.p=c,z.T=s}}function Lc(e,t,r,l){if(Oo){var s=Uc(l);if(s===null)Sc(e,t,l,$o,r),Vv(e,l);else if(R1(s,e,t,r,l))l.stopPropagation();else if(Vv(e,l),t&4&&-1<M1.indexOf(e)){for(;s!==null;){var c=Fr(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var v=yr(c.pendingLanes);if(v!==0){var x=c;for(x.pendingLanes|=2,x.entangledLanes|=2;v;){var T=1<<31-jt(v);x.entanglements[1]|=T,v&=~T}fn(c),(we&6)===0&&(go=wt()+500,Dl(0))}}break;case 31:case 13:x=Er(c,2),x!==null&&Tt(x,c,2),bo(),$c(c,2)}if(c=Uc(l),c===null&&Sc(e,t,l,$o,r),c===s)break;s=c}s!==null&&l.stopPropagation()}else Sc(e,t,l,null,r)}}function Uc(e){return e=Vs(e),Bc(e)}var $o=null;function Bc(e){if($o=null,e=Zr(e),e!==null){var t=d(e);if(t===null)e=null;else{var r=t.tag;if(r===13){if(e=f(t),e!==null)return e;e=null}else if(r===31){if(e=m(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $o=e,null}function Bv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(p0()){case Pf:return 2;case Kf:return 8;case Ei:case v0:return 32;case Qf:return 268435456;default:return 32}default:return 32}}var Vc=!1,lr=null,ir=null,or=null,Hl=new Map,kl=new Map,sr=[],M1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vv(e,t){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Hl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(t.pointerId)}}function Yl(e,t,r,l,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:l,nativeEvent:c,targetContainers:[s]},t!==null&&(t=Fr(t),t!==null&&Lv(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function R1(e,t,r,l,s){switch(t){case"focusin":return lr=Yl(lr,e,t,r,l,s),!0;case"dragenter":return ir=Yl(ir,e,t,r,l,s),!0;case"mouseover":return or=Yl(or,e,t,r,l,s),!0;case"pointerover":var c=s.pointerId;return Hl.set(c,Yl(Hl.get(c)||null,e,t,r,l,s)),!0;case"gotpointercapture":return c=s.pointerId,kl.set(c,Yl(kl.get(c)||null,e,t,r,l,s)),!0}return!1}function Hv(e){var t=Zr(e.target);if(t!==null){var r=d(t);if(r!==null){if(t=r.tag,t===13){if(t=f(r),t!==null){e.blockedOn=t,em(e.priority,function(){Uv(r)});return}}else if(t===31){if(t=m(r),t!==null){e.blockedOn=t,em(e.priority,function(){Uv(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Uc(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Bs=l,r.target.dispatchEvent(l),Bs=null}else return t=Fr(r),t!==null&&Lv(t),e.blockedOn=r,!1;t.shift()}return!0}function kv(e,t,r){Lo(e)&&r.delete(t)}function z1(){Vc=!1,lr!==null&&Lo(lr)&&(lr=null),ir!==null&&Lo(ir)&&(ir=null),or!==null&&Lo(or)&&(or=null),Hl.forEach(kv),kl.forEach(kv)}function Uo(e,t){e.blockedOn===t&&(e.blockedOn=null,Vc||(Vc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,z1)))}var Bo=null;function Yv(e){Bo!==e&&(Bo=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Bo===e&&(Bo=null);for(var t=0;t<e.length;t+=3){var r=e[t],l=e[t+1],s=e[t+2];if(typeof l!="function"){if(Bc(l||r)===null)continue;break}var c=Fr(r);c!==null&&(e.splice(t,3),t-=3,Uu(c,{pending:!0,data:s,method:r.method,action:l},l,s))}}))}function Ra(e){function t(T){return Uo(T,e)}lr!==null&&Uo(lr,e),ir!==null&&Uo(ir,e),or!==null&&Uo(or,e),Hl.forEach(t),kl.forEach(t);for(var r=0;r<sr.length;r++){var l=sr[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<sr.length&&(r=sr[0],r.blockedOn===null);)Hv(r),r.blockedOn===null&&sr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var s=r[l],c=r[l+1],v=s[yt]||null;if(typeof c=="function")v||Yv(r);else if(v){var x=null;if(c&&c.hasAttribute("formAction")){if(s=c,v=c[yt]||null)x=v.formAction;else if(Bc(s)!==null)continue}else x=v.action;typeof x=="function"?r[l+1]=x:(r.splice(l,3),l-=3),Yv(r)}}}function qv(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(v){return s=v})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Hc(e){this._internalRoot=e}Vo.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var r=t.current,l=Ot();Ov(r,l,e,t,null,null)},Vo.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ov(e.current,2,null,e,null,null),bo(),t[Qr]=null}};function Vo(e){this._internalRoot=e}Vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=If();e={blockedOn:null,target:e,priority:t};for(var r=0;r<sr.length&&t!==0&&t<sr[r].priority;r++);sr.splice(r,0,e),r===0&&Hv(e)}};var Gv=a.version;if(Gv!=="19.2.8")throw Error(o(527,Gv,"19.2.8"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var D1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{Ja=Ho.inject(D1),At=Ho}catch{}}return Kl.createRoot=function(e,t){if(!u(e))throw Error(o(299));var r=!1,l="",s=Jh,c=Wh,v=Ih;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError)),t=zv(e,1,!1,null,null,r,l,null,s,c,v,qv),e[Qr]=t.current,_c(e),new Hc(t)},Kl.hydrateRoot=function(e,t,r){if(!u(e))throw Error(o(299));var l=!1,s="",c=Jh,v=Wh,x=Ih,T=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onUncaughtError!==void 0&&(c=r.onUncaughtError),r.onCaughtError!==void 0&&(v=r.onCaughtError),r.onRecoverableError!==void 0&&(x=r.onRecoverableError),r.formState!==void 0&&(T=r.formState)),t=zv(e,1,!0,t,r??null,l,s,T,c,v,x,qv),t.context=Dv(null),r=t.current,l=Ot(),l=Ms(l),s=Kn(l),s.callback=null,Qn(r,s,l),r=l,t.current.lanes=r,Ia(t,r),fn(t),e[Qr]=t.current,_c(e),new Vo(t)},Kl.version="19.2.8",Kl}var Yy;function I3(){if(Yy)return vd.exports;Yy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),vd.exports=W3(),vd.exports}var e4=I3();e4.createRoot(document.getElementById("root")).render(y.jsx(S.StrictMode,{children:y.jsx(U3,{children:y.jsx(Z3,{})})}));
