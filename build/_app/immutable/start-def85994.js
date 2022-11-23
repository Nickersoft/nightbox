import{S as et,i as tt,s as nt,a as rt,e as V,c as at,b as W,g as fe,t as B,d as ue,f as F,h as J,j as st,o as Re,k as ot,l as it,m as lt,n as be,p as C,q as ct,r as ft,u as ut,v as H,w as M,x as Le,y as Y,z as X,A as oe}from"./chunks/index-0c0aa714.js";import{g as We,f as ze,s as K,a as Oe,b as ht,i as dt,c as pt}from"./chunks/singletons-a960d749.js";function mt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function gt(r){return r.split("%25").map(decodeURI).join("%25")}function _t(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const wt=["href","pathname","search","searchParams","toString","toJSON"];function yt(r,e){const t=new URL(r);for(const s of wt){let o=t[s];Object.defineProperty(t,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return bt(t),t}function bt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const vt="/__data.json";function kt(r){return r.replace(/\/$/,"")+vt}function Et(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;te.delete(s)}return he(r,e)};const te=new Map;function St(r,e){const t=Qe(r,e),s=document.querySelector(t);if(s!=null&&s.textContent){const{body:o,...l}=JSON.parse(s.textContent),n=s.getAttribute("data-ttl");return n&&te.set(t,{body:o,init:l,ttl:1e3*Number(n)}),Promise.resolve(new Response(o,l))}return he(r,e)}function Rt(r,e,t){if(te.size>0){const s=Qe(r,t),o=te.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);te.delete(s)}}return he(e,t)}function Qe(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Et(e.body)}"]`),s}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function $t(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${jt(r).map(s=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const l=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(l)return e.push({name:l[1],matcher:l[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const n=s.split(/\[(.+?)\](?!\])/);return"/"+n.map((m,p)=>{if(p%2){if(m.startsWith("x+"))return ve(String.fromCharCode(parseInt(m.slice(2),16)));if(m.startsWith("u+"))return ve(String.fromCharCode(...m.slice(2).split("-").map(q=>parseInt(q,16))));const _=Ot.exec(m);if(!_)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,b,S,U,L]=_;return e.push({name:U,matcher:L,optional:!!b,rest:!!S,chained:S?p===1&&n[0]==="":!1}),S?"(.*?)":b?"([^/]*)?":"([^/]+?)"}return ve(m)}).join("")}).join("")}/?$`),params:e}}function It(r){return!/^\([^)]+\)$/.test(r)}function jt(r){return r.slice(1).split("/").filter(It)}function Lt(r,e,t){const s={},o=r.slice(1);let l="";for(let n=0;n<e.length;n+=1){const f=e[n];let m=o[n];if(f.chained&&f.rest&&l&&(m=m?l+"/"+m:l),l="",m===void 0)f.rest&&(s[f.name]="");else{if(f.matcher&&!t[f.matcher](m)){if(f.optional&&f.chained){let p=o.indexOf(void 0,n);if(p===-1){const _=e[n+1];if((_==null?void 0:_.rest)&&_.chained)l=m;else return}for(;p>=n;)o[p]=o[p-1],p-=1;continue}return}s[f.name]=m}}if(!l)return s}function ve(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function At(r,e,t,s){const o=new Set(e);return Object.entries(t).map(([f,[m,p,_]])=>{const{pattern:b,params:S}=$t(f),U={id:f,exec:L=>{const q=b.exec(L);if(q)return Lt(q,S,s)},errors:[1,..._||[]].map(L=>r[L]),layouts:[0,...p||[]].map(n),leaf:l(m)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function l(f){const m=f<0;return m&&(f=~f),[m,r[f]]}function n(f){return f===void 0?f:[o.has(f),r[f]]}}function Pt(r){let e,t,s;var o=r[0][0];function l(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=H(o,l(r))),{c(){e&&M(e.$$.fragment),t=V()},l(n){e&&Le(e.$$.fragment,n),t=V()},m(n,f){e&&Y(e,n,f),W(n,t,f),s=!0},p(n,f){const m={};if(f&4&&(m.data=n[2]),f&2&&(m.form=n[1]),o!==(o=n[0][0])){if(e){fe();const p=e;B(p.$$.fragment,1,0,()=>{X(p,1)}),ue()}o?(e=H(o,l(n)),M(e.$$.fragment),F(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else o&&e.$set(m)},i(n){s||(e&&F(e.$$.fragment,n),s=!0)},o(n){e&&B(e.$$.fragment,n),s=!1},d(n){n&&J(t),e&&X(e,n)}}}function Nt(r){let e,t,s;var o=r[0][0];function l(n){return{props:{data:n[2],$$slots:{default:[Ut]},$$scope:{ctx:n}}}}return o&&(e=H(o,l(r))),{c(){e&&M(e.$$.fragment),t=V()},l(n){e&&Le(e.$$.fragment,n),t=V()},m(n,f){e&&Y(e,n,f),W(n,t,f),s=!0},p(n,f){const m={};if(f&4&&(m.data=n[2]),f&523&&(m.$$scope={dirty:f,ctx:n}),o!==(o=n[0][0])){if(e){fe();const p=e;B(p.$$.fragment,1,0,()=>{X(p,1)}),ue()}o?(e=H(o,l(n)),M(e.$$.fragment),F(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else o&&e.$set(m)},i(n){s||(e&&F(e.$$.fragment,n),s=!0)},o(n){e&&B(e.$$.fragment,n),s=!1},d(n){n&&J(t),e&&X(e,n)}}}function Ut(r){let e,t,s;var o=r[0][1];function l(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=H(o,l(r))),{c(){e&&M(e.$$.fragment),t=V()},l(n){e&&Le(e.$$.fragment,n),t=V()},m(n,f){e&&Y(e,n,f),W(n,t,f),s=!0},p(n,f){const m={};if(f&8&&(m.data=n[3]),f&2&&(m.form=n[1]),o!==(o=n[0][1])){if(e){fe();const p=e;B(p.$$.fragment,1,0,()=>{X(p,1)}),ue()}o?(e=H(o,l(n)),M(e.$$.fragment),F(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else o&&e.$set(m)},i(n){s||(e&&F(e.$$.fragment,n),s=!0)},o(n){e&&B(e.$$.fragment,n),s=!1},d(n){n&&J(t),e&&X(e,n)}}}function He(r){let e,t=r[5]&&Me(r);return{c(){e=ot("div"),t&&t.c(),this.h()},l(s){e=it(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=lt(e);t&&t.l(o),o.forEach(J),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,o){W(s,e,o),t&&t.m(e,null)},p(s,o){s[5]?t?t.p(s,o):(t=Me(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&J(e),t&&t.d()}}}function Me(r){let e;return{c(){e=ct(r[6])},l(t){e=ft(t,r[6])},m(t,s){W(t,e,s)},p(t,s){s&64&&ut(e,t[6])},d(t){t&&J(e)}}}function Tt(r){let e,t,s,o,l;const n=[Nt,Pt],f=[];function m(_,b){return _[0][1]?0:1}e=m(r),t=f[e]=n[e](r);let p=r[4]&&He(r);return{c(){t.c(),s=rt(),p&&p.c(),o=V()},l(_){t.l(_),s=at(_),p&&p.l(_),o=V()},m(_,b){f[e].m(_,b),W(_,s,b),p&&p.m(_,b),W(_,o,b),l=!0},p(_,[b]){let S=e;e=m(_),e===S?f[e].p(_,b):(fe(),B(f[S],1,1,()=>{f[S]=null}),ue(),t=f[e],t?t.p(_,b):(t=f[e]=n[e](_),t.c()),F(t,1),t.m(s.parentNode,s)),_[4]?p?p.p(_,b):(p=He(_),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i(_){l||(F(t),l=!0)},o(_){B(t),l=!1},d(_){f[e].d(_),_&&J(s),p&&p.d(_),_&&J(o)}}}function Ct(r,e,t){let{stores:s}=e,{page:o}=e,{components:l}=e,{form:n}=e,{data_0:f=null}=e,{data_1:m=null}=e;st(s.page.notify);let p=!1,_=!1,b=null;return Re(()=>{const S=s.page.subscribe(()=>{p&&(t(5,_=!0),t(6,b=document.title||"untitled page"))});return t(4,p=!0),S}),r.$$set=S=>{"stores"in S&&t(7,s=S.stores),"page"in S&&t(8,o=S.page),"components"in S&&t(0,l=S.components),"form"in S&&t(1,n=S.form),"data_0"in S&&t(2,f=S.data_0),"data_1"in S&&t(3,m=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[l,n,f,m,p,_,b,s,o]}class Dt extends et{constructor(e){super(),tt(this,e,Ct,Tt,nt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const qt="modulepreload",Vt=function(r,e){return new URL(r,e).href},Ye={},ke=function(e,t,s){if(!t||t.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map(l=>{if(l=Vt(l,s),l in Ye)return;Ye[l]=!0;const n=l.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!s)for(let _=o.length-1;_>=0;_--){const b=o[_];if(b.href===l&&(!n||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=n?"stylesheet":qt,n||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),n)return new Promise((_,b)=>{p.addEventListener("load",_),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},Bt={},de=[()=>ke(()=>import("./chunks/0-6271c260.js"),["./chunks/0-6271c260.js","./chunks/_layout-8880431f.js","./components/pages/_layout.svelte-1250cc67.js","./chunks/index-0c0aa714.js","./assets/_layout-bc3ac326.css"],import.meta.url),()=>ke(()=>import("./chunks/1-e25dc749.js"),["./chunks/1-e25dc749.js","./components/error.svelte-8edcca66.js","./chunks/index-0c0aa714.js","./chunks/singletons-a960d749.js"],import.meta.url),()=>ke(()=>import("./chunks/2-c5ef3568.js"),["./chunks/2-c5ef3568.js","./components/pages/_page.svelte-1c375175.js","./chunks/index-0c0aa714.js","./assets/_page-e0229b3a.css"],import.meta.url)],Ft=[],Jt={"/":[2]},Gt={handleError:({error:r})=>{console.error(r)}};class $e{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(e,t){this.status=e,this.location=t}}async function Kt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,zt=-2,Ht=-3,Mt=-4,Yt=-5,Xt=-6;function Zt(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,t=Array(e.length);function s(o,l=!1){if(o===Wt)return;if(o===Ht)return NaN;if(o===Mt)return 1/0;if(o===Yt)return-1/0;if(o===Xt)return-0;if(l)throw new Error("Invalid input");if(o in t)return t[o];const n=e[o];if(!n||typeof n!="object")t[o]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":t[o]=new Date(n[1]);break;case"Set":const m=new Set;t[o]=m;for(let b=1;b<n.length;b+=1)m.add(s(n[b]));break;case"Map":const p=new Map;t[o]=p;for(let b=1;b<n.length;b+=2)p.set(s(n[b]),s(n[b+1]));break;case"RegExp":t[o]=new RegExp(n[1],n[2]);break;case"Object":t[o]=Object(n[1]);break;case"BigInt":t[o]=BigInt(n[1]);break;case"null":const _=Object.create(null);t[o]=_;for(let b=1;b<n.length;b+=2)_[n[b]]=s(n[b+1]);break}else{const f=new Array(n.length);t[o]=f;for(let m=0;m<n.length;m+=1){const p=n[m];p!==zt&&(f[m]=s(p))}}else{const f={};t[o]=f;for(const m in n){const p=n[m];f[m]=s(p)}}return t[o]}return s(0)}const xe="sveltekit:scroll",D="sveltekit:index",ie=At(de,Ft,Jt,Bt),Ie=de[0],je=de[1];Ie();je();let ne={};try{ne=JSON.parse(sessionStorage[xe])}catch{}function Ee(r){ne[r]=Oe()}function Qt({target:r,base:e}){var Je;const t=[];let s=null;const o={before_navigate:[],after_navigate:[]};let l={branch:[],error:null,url:null},n=!1,f=!1,m=!0,p=!1,_=!1,b=!1,S=!1,U,L=(Je=history.state)==null?void 0:Je[D];L||(L=Date.now(),history.replaceState({...history.state,[D]:L},"",location.href));const q=ne[L];q&&(history.scrollRestoration="manual",scrollTo(q.x,q.y));let G,Ae,re;async function Pe(){re=re||Promise.resolve(),await re,re=null;const a=new URL(location.href),c=_e(a,!0);s=null,await Ue(c,a,[])}async function pe(a,{noScroll:c=!1,replaceState:u=!1,keepFocus:i=!1,state:h={},invalidateAll:d=!1},g,k){return typeof a=="string"&&(a=new URL(a,We(document))),we({url:a,scroll:c?Oe():null,keepfocus:i,redirect_chain:g,details:{state:h,replaceState:u},nav_token:k,accepted:()=>{d&&(S=!0)},blocked:()=>{},type:"goto"})}async function Ne(a){const c=_e(a,!1);if(!c)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return s={id:c.id,promise:De(c).then(u=>(u.type==="loaded"&&u.state.error&&(s=null),u))},s.promise}async function Ue(a,c,u,i,h={},d){var k,E;Ae=h;let g=a&&await De(a);if(g||(g=await Fe(c,{id:null},ee(new Error(`Not found: ${c.pathname}`),{url:c,params:{},route:{id:null}}),404)),c=(a==null?void 0:a.url)||c,Ae!==h)return!1;if(g.type==="redirect")if(u.length>10||u.includes(c.pathname))g=await ae({status:500,error:ee(new Error("Redirect loop"),{url:c,params:{},route:{id:null}}),url:c,route:{id:null}});else return pe(new URL(g.location,c).href,{},[...u,c.pathname],h),!1;else((E=(k=g.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await K.updated.check()&&await se(c);if(t.length=0,S=!1,p=!0,i&&i.details){const{details:y}=i,v=y.replaceState?0:1;y.state[D]=L+=v,history[y.replaceState?"replaceState":"pushState"](y.state,"",c)}if(s=null,f){l=g.state,g.props.page&&(g.props.page.url=c);const y=ce();U.$set(g.props),y()}else Te(g);if(i){const{scroll:y,keepfocus:v}=i;if(v||Se(),await oe(),m){const R=c.hash&&document.getElementById(c.hash.slice(1));y?scrollTo(y.x,y.y):R?R.scrollIntoView():scrollTo(0,0)}}else await oe();m=!0,g.props.page&&(G=g.props.page),d&&d(),p=!1}function Te(a){var h,d;l=a.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),G=a.props.page;const u=ce();U=new Dt({target:r,props:{...a.props,stores:K},hydrate:!0}),u();const i={from:null,to:le("to",{params:l.params,route:{id:(d=(h=l.route)==null?void 0:h.id)!=null?d:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};o.after_navigate.forEach(g=>g(i)),f=!0}async function Z({url:a,params:c,branch:u,status:i,error:h,route:d,form:g}){var P;const k=u.filter(Boolean);let E="never";for(const $ of u)($==null?void 0:$.slash)!==void 0&&(E=$.slash);a.pathname=mt(a.pathname,E),a.search=a.search;const y={type:"loaded",state:{url:a,params:c,branch:u,error:h,route:d},props:{components:k.map($=>$.node.component)}};g!==void 0&&(y.props.form=g);let v={},R=!G;for(let $=0;$<k.length;$+=1){const A=k[$];v={...v,...A.data},(R||!l.branch.some(T=>T===A))&&(y.props[`data_${$}`]=v,R=R||Object.keys((P=A.data)!=null?P:{}).length>0)}if(R||(R=Object.keys(G.data).length!==Object.keys(v).length),!l.url||a.href!==l.url.href||l.error!==h||g!==void 0||R){y.props.page={error:h,params:c,route:d,status:i,url:a,form:g,data:R?v:G.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const $=(A,T)=>{Object.defineProperty(y.props.page,A,{get:()=>{throw new Error(`$page.${A} has been replaced by $page.url.${T}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return y}async function me({loader:a,parent:c,url:u,params:i,route:h,server_data_node:d}){var y,v,R,N,P,$,A;let g=null;const k={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let T=function(...w){for(const O of w){const{href:I}=new URL(O,u);k.dependencies.add(I)}};const Q={route:{get id(){return k.route=!0,h.id}},params:new Proxy(i,{get:(w,O)=>(k.params.add(O),w[O])}),data:(v=d==null?void 0:d.data)!=null?v:null,url:yt(u,()=>{k.url=!0}),async fetch(w,O){let I;w instanceof Request?(I=w.url,O={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...O}):I=w;const j=new URL(I,u).href;return T(j),f?Rt(I,j,O):St(I,O)},setHeaders:()=>{},depends:T,parent(){return k.parent=!0,c()}};Object.defineProperties(Q,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),g=(R=await E.shared.load.call(null,Q))!=null?R:null,g=g?await Kt(g):null}return{node:E,loader:a,server:d,shared:(N=E.shared)!=null&&N.load?{type:"data",data:g,uses:k}:null,data:(P=g!=null?g:d==null?void 0:d.data)!=null?P:null,slash:(A=($=E.shared)==null?void 0:$.trailingSlash)!=null?A:d==null?void 0:d.slash}}function Ce(a,c,u,i,h){if(S)return!0;if(!i)return!1;if(i.parent&&a||i.route&&c||i.url&&u)return!0;for(const d of i.params)if(h[d]!==l.params[d])return!0;for(const d of i.dependencies)if(t.some(g=>g(new URL(d))))return!0;return!1}function ge(a,c){var u,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((u=a.uses.dependencies)!=null?u:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"&&c!=null?c:null}async function De({id:a,invalidating:c,url:u,params:i,route:h}){var Q;if((s==null?void 0:s.id)===a)return s.promise;const{errors:d,layouts:g,leaf:k}=h,E=[...g,k];d.forEach(w=>w==null?void 0:w().catch(()=>{})),E.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const v=l.url?a!==l.url.pathname+l.url.search:!1,R=l.route?a!==l.route.id:!1,N=E.reduce((w,O,I)=>{var x;const j=l.branch[I],z=!!(O!=null&&O[0])&&((j==null?void 0:j.loader)!==O[1]||Ce(w.some(Boolean),R,v,(x=j.server)==null?void 0:x.uses,i));return w.push(z),w},[]);if(N.some(Boolean)){try{y=await Ze(u,N)}catch(w){return ae({status:500,error:ee(w,{url:u,params:i,route:{id:h.id}}),url:u,route:h})}if(y.type==="redirect")return y}const P=y==null?void 0:y.nodes;let $=!1;const A=E.map(async(w,O)=>{var x;if(!w)return;const I=l.branch[O],j=P==null?void 0:P[O];if((!j||j.type==="skip")&&w[1]===(I==null?void 0:I.loader)&&!Ce($,R,v,(x=I.shared)==null?void 0:x.uses,i))return I;if($=!0,(j==null?void 0:j.type)==="error")throw j;return me({loader:w[1],url:u,params:i,route:h,parent:async()=>{var Ke;const Ge={};for(let ye=0;ye<O;ye+=1)Object.assign(Ge,(Ke=await A[ye])==null?void 0:Ke.data);return Ge},server_data_node:ge(j===void 0&&w[0]?{type:"skip"}:j!=null?j:null,I==null?void 0:I.server)})});for(const w of A)w.catch(()=>{});const T=[];for(let w=0;w<E.length;w+=1)if(E[w])try{T.push(await A[w])}catch(O){if(O instanceof Xe)return{type:"redirect",location:O.location};let I=500,j;P!=null&&P.includes(O)?(I=(Q=O.status)!=null?Q:I,j=O.error):O instanceof $e?(I=O.status,j=O.body):j=ee(O,{params:i,url:u,route:{id:h.id}});const z=await qe(w,T,d);return z?await Z({url:u,params:i,branch:T.slice(0,z.idx).concat(z.node),status:I,error:j,route:h}):await Fe(u,{id:h.id},j,I)}else T.push(void 0);return await Z({url:u,params:i,branch:T,status:200,error:null,route:h,form:c?void 0:null})}async function qe(a,c,u){for(;a--;)if(u[a]){let i=a;for(;!c[i];)i-=1;try{return{idx:i+1,node:{node:await u[a](),loader:u[a],data:{},server:null,shared:null}}}catch{continue}}}async function ae({status:a,error:c,url:u,route:i}){var y;const h={},d=await Ie();let g=null;if(d.server)try{const v=await Ze(u,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;g=(y=v.nodes[0])!=null?y:null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||n)&&await se(u)}const k=await me({loader:Ie,url:u,params:h,route:i,parent:()=>Promise.resolve({}),server_data_node:ge(g)}),E={node:await je(),loader:je,shared:null,server:null,data:null};return await Z({url:u,params:h,branch:[k,E],status:a,error:c,route:null})}function _e(a,c){if(Ve(a))return;const u=gt(a.pathname.slice(e.length)||"/");for(const i of ie){const h=i.exec(u);if(h)return{id:a.pathname+a.search,invalidating:c,route:i,params:_t(h),url:a}}}function Ve(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Be({url:a,type:c,intent:u,delta:i}){var k,E,y,v,R;let h=!1;const d={from:le("from",{params:l.params,route:{id:(E=(k=l.route)==null?void 0:k.id)!=null?E:null},url:l.url}),to:le("to",{params:(y=u==null?void 0:u.params)!=null?y:null,route:{id:(R=(v=u==null?void 0:u.route)==null?void 0:v.id)!=null?R:null},url:a}),willUnload:!u,type:c};i!==void 0&&(d.delta=i);const g={...d,cancel:()=>{h=!0}};return _||o.before_navigate.forEach(N=>N(g)),h?null:d}async function we({url:a,scroll:c,keepfocus:u,redirect_chain:i,details:h,type:d,delta:g,nav_token:k,accepted:E,blocked:y}){const v=_e(a,!1),R=Be({url:a,type:d,delta:g,intent:v});if(!R){y();return}Ee(L),E(),_=!0,f&&K.navigating.set(R),await Ue(v,a,i,{scroll:c,keepfocus:u,details:h},k,()=>{_=!1,o.after_navigate.forEach(N=>N(R)),K.navigating.set(null)})}async function Fe(a,c,u,i){return a.origin===location.origin&&a.pathname===location.pathname&&!n?await ae({status:i,error:u,url:a,route:c}):await se(a)}function se(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Re(()=>(o.after_navigate.push(a),()=>{const c=o.after_navigate.indexOf(a);o.after_navigate.splice(c,1)}))},before_navigate:a=>{Re(()=>(o.before_navigate.push(a),()=>{const c=o.before_navigate.indexOf(a);o.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(p||!f)&&(m=!1)},goto:(a,c={})=>{if("keepfocus"in c&&!("keepFocus"in c))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in c&&!("noScroll"in c))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return pe(a,c,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")t.push(a);else{const{href:c}=new URL(a,location.href);t.push(u=>u.href===c)}return Pe()},invalidateAll:()=>(S=!0,Pe()),prefetch:async a=>{const c=new URL(a,We(document));await Ne(c)},prefetch_routes:async a=>{const u=(a?ie.filter(i=>a.some(h=>i.exec(h))):ie).map(i=>Promise.all([...i.layouts,i.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(u)},apply_action:async a=>{if(a.type==="error"){const c=new URL(location.href),{branch:u,route:i}=l;if(!i)return;const h=await qe(l.branch.length,u,i.errors);if(h){const d=await Z({url:c,params:l.params,branch:u.slice(0,h.idx).concat(h.node),status:500,error:a.error,route:i});l=d.state;const g=ce();U.$set(d.props),g(),oe().then(Se)}}else if(a.type==="redirect")pe(a.location,{invalidateAll:!0},[]);else{const c={form:a.data,page:{...G,form:a.data,status:a.status}},u=ce();U.$set(c),u(),a.type==="success"&&oe().then(Se)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var d,g;let h=!1;if(!_){const k={from:le("from",{params:l.params,route:{id:(g=(d=l.route)==null?void 0:d.id)!=null?g:null},url:l.url}),to:null,willUnload:!0,type:"leave",cancel:()=>h=!0};o.before_navigate.forEach(E=>E(k))}h?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ee(L);try{sessionStorage[xe]=JSON.stringify(ne)}catch{}}});const a=i=>{const{url:h,options:d,has:g}=ze(i);if(h&&d.prefetch&&!Ve(h)){if(d.reload||g.rel_external||g.target||g.download)return;Ne(h)}};let c;const u=i=>{clearTimeout(c),c=setTimeout(()=>{var h;(h=i.target)==null||h.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};r.addEventListener("touchstart",a),r.addEventListener("mousemove",u),r.addEventListener("sveltekit:trigger_prefetch",a),r.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:h,url:d,options:g,has:k}=ze(i);if(!h||!d||!(h instanceof SVGAElement)&&d.protocol!==location.protocol&&!(d.protocol==="https:"||d.protocol==="http:")||k.download)return;if(g.reload||k.rel_external||k.target){Be({url:d,type:"link"})||i.preventDefault(),_=!0;return}const[y,v]=d.href.split("#");if(v!==void 0&&y===location.href.split("#")[0]){b=!0,Ee(L),l.url=d,K.page.set({...G,url:d}),K.page.notify();return}we({url:d,scroll:g.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:d.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{var h;if((h=i.state)!=null&&h[D]){if(i.state[D]===L)return;const d=i.state[D]-L;we({url:new URL(location.href),scroll:ne[i.state[D]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{L=i.state[D]},blocked:()=>{history.go(-d)},type:"popstate",delta:d})}}),addEventListener("hashchange",()=>{b&&(b=!1,history.replaceState({...history.state,[D]:++L},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:c,node_ids:u,params:i,route:h,data:d,form:g})=>{var y;n=!0;const k=new URL(location.href);let E;try{const v=u.map(async(R,N)=>{const P=d[N];return me({loader:de[R],url:k,params:i,route:h,parent:async()=>{const $={};for(let A=0;A<N;A+=1)Object.assign($,(await v[A]).data);return $},server_data_node:ge(P)})});E=await Z({url:k,params:i,branch:await Promise.all(v),status:a,error:c,form:g,route:(y=ie.find(({id:R})=>R===h.id))!=null?y:null})}catch(v){if(v instanceof Xe){await se(new URL(v.location,location.href));return}E=await ae({status:v instanceof $e?v.status:500,error:ee(v,{url:k,params:i,route:h}),url:k,route:h})}Te(E)}}}async function Ze(r,e){var l;const t=new URL(r);t.pathname=kt(r.pathname);const s=await he(t.href,{headers:{"x-sveltekit-invalidated":e.map(n=>n?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return(l=o.nodes)==null||l.forEach(n=>{var f,m;(n==null?void 0:n.type)==="data"&&(n.data=Zt(n.data),n.uses={dependencies:new Set((f=n.uses.dependencies)!=null?f:[]),params:new Set((m=n.uses.params)!=null?m:[]),parent:!!n.uses.parent,route:!!n.uses.route,url:!!n.uses.url})}),o}function ee(r,e){var t;return r instanceof $e?r.body:(t=Gt.handleError({error:r,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}const xt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function le(r,e){for(const t of xt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function ce(){return()=>{}}function Se(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function nn({env:r,hydrate:e,paths:t,target:s,version:o}){ht(t),pt(o);const l=Qt({target:s,base:t.base});dt({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{nn as start};
