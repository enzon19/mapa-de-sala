import{_ as m}from"../chunks/preload-helper.41c905a7.js";import{S,i as j,s as z,a as B,e as d,c as C,b,d as h,f as I,g,h as w,j as M,o as U,k as F,l as G,m as H,n as R,p,q as J,r as K,u as Q,v as P,w as V,x as k,y as v,z as L,A,B as D}from"../chunks/index.b87f7290.js";function W(s){return/^[12]\d|3[01]|0?[1-9]$/.test(s)}function X(s){return/^1[012]|0?[2-9]$/.test(s)}const it={day:W,month:X};function Y(s){let t,n,i;var o=s[1][0];function c(e){return{props:{data:e[3],form:e[2]}}}return o&&(t=k(o,c(s)),s[12](t)),{c(){t&&v(t.$$.fragment),n=d()},l(e){t&&L(t.$$.fragment,e),n=d()},m(e,r){t&&A(t,e,r),b(e,n,r),i=!0},p(e,r){const l={};if(r&8&&(l.data=e[3]),r&4&&(l.form=e[2]),r&2&&o!==(o=e[1][0])){if(t){P();const f=t;h(f.$$.fragment,1,0,()=>{D(f,1)}),I()}o?(t=k(o,c(e)),e[12](t),v(t.$$.fragment),g(t.$$.fragment,1),A(t,n.parentNode,n)):t=null}else o&&t.$set(l)},i(e){i||(t&&g(t.$$.fragment,e),i=!0)},o(e){t&&h(t.$$.fragment,e),i=!1},d(e){s[12](null),e&&w(n),t&&D(t,e)}}}function Z(s){let t,n,i;var o=s[1][0];function c(e){return{props:{data:e[3],$$slots:{default:[$]},$$scope:{ctx:e}}}}return o&&(t=k(o,c(s)),s[11](t)),{c(){t&&v(t.$$.fragment),n=d()},l(e){t&&L(t.$$.fragment,e),n=d()},m(e,r){t&&A(t,e,r),b(e,n,r),i=!0},p(e,r){const l={};if(r&8&&(l.data=e[3]),r&8215&&(l.$$scope={dirty:r,ctx:e}),r&2&&o!==(o=e[1][0])){if(t){P();const f=t;h(f.$$.fragment,1,0,()=>{D(f,1)}),I()}o?(t=k(o,c(e)),e[11](t),v(t.$$.fragment),g(t.$$.fragment,1),A(t,n.parentNode,n)):t=null}else o&&t.$set(l)},i(e){i||(t&&g(t.$$.fragment,e),i=!0)},o(e){t&&h(t.$$.fragment,e),i=!1},d(e){s[11](null),e&&w(n),t&&D(t,e)}}}function $(s){let t,n,i;var o=s[1][1];function c(e){return{props:{data:e[4],form:e[2]}}}return o&&(t=k(o,c(s)),s[10](t)),{c(){t&&v(t.$$.fragment),n=d()},l(e){t&&L(t.$$.fragment,e),n=d()},m(e,r){t&&A(t,e,r),b(e,n,r),i=!0},p(e,r){const l={};if(r&16&&(l.data=e[4]),r&4&&(l.form=e[2]),r&2&&o!==(o=e[1][1])){if(t){P();const f=t;h(f.$$.fragment,1,0,()=>{D(f,1)}),I()}o?(t=k(o,c(e)),e[10](t),v(t.$$.fragment),g(t.$$.fragment,1),A(t,n.parentNode,n)):t=null}else o&&t.$set(l)},i(e){i||(t&&g(t.$$.fragment,e),i=!0)},o(e){t&&h(t.$$.fragment,e),i=!1},d(e){s[10](null),e&&w(n),t&&D(t,e)}}}function O(s){let t,n=s[6]&&T(s);return{c(){t=F("div"),n&&n.c(),this.h()},l(i){t=G(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=H(t);n&&n.l(o),o.forEach(w),this.h()},h(){R(t,"id","svelte-announcer"),R(t,"aria-live","assertive"),R(t,"aria-atomic","true"),p(t,"position","absolute"),p(t,"left","0"),p(t,"top","0"),p(t,"clip","rect(0 0 0 0)"),p(t,"clip-path","inset(50%)"),p(t,"overflow","hidden"),p(t,"white-space","nowrap"),p(t,"width","1px"),p(t,"height","1px")},m(i,o){b(i,t,o),n&&n.m(t,null)},p(i,o){i[6]?n?n.p(i,o):(n=T(i),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(i){i&&w(t),n&&n.d()}}}function T(s){let t;return{c(){t=J(s[7])},l(n){t=K(n,s[7])},m(n,i){b(n,t,i)},p(n,i){i&128&&Q(t,n[7])},d(n){n&&w(t)}}}function x(s){let t,n,i,o,c;const e=[Z,Y],r=[];function l(a,u){return a[1][1]?0:1}t=l(s),n=r[t]=e[t](s);let f=s[5]&&O(s);return{c(){n.c(),i=B(),f&&f.c(),o=d()},l(a){n.l(a),i=C(a),f&&f.l(a),o=d()},m(a,u){r[t].m(a,u),b(a,i,u),f&&f.m(a,u),b(a,o,u),c=!0},p(a,[u]){let E=t;t=l(a),t===E?r[t].p(a,u):(P(),h(r[E],1,1,()=>{r[E]=null}),I(),n=r[t],n?n.p(a,u):(n=r[t]=e[t](a),n.c()),g(n,1),n.m(i.parentNode,i)),a[5]?f?f.p(a,u):(f=O(a),f.c(),f.m(o.parentNode,o)):f&&(f.d(1),f=null)},i(a){c||(g(n),c=!0)},o(a){h(n),c=!1},d(a){r[t].d(a),a&&w(i),f&&f.d(a),a&&w(o)}}}function tt(s,t,n){let{stores:i}=t,{page:o}=t,{constructors:c}=t,{components:e=[]}=t,{form:r}=t,{data_0:l=null}=t,{data_1:f=null}=t;M(i.page.notify);let a=!1,u=!1,E=null;U(()=>{const _=i.page.subscribe(()=>{a&&(n(6,u=!0),n(7,E=document.title||"untitled page"))});return n(5,a=!0),_});function y(_){V[_?"unshift":"push"](()=>{e[1]=_,n(0,e)})}function N(_){V[_?"unshift":"push"](()=>{e[0]=_,n(0,e)})}function q(_){V[_?"unshift":"push"](()=>{e[0]=_,n(0,e)})}return s.$$set=_=>{"stores"in _&&n(8,i=_.stores),"page"in _&&n(9,o=_.page),"constructors"in _&&n(1,c=_.constructors),"components"in _&&n(0,e=_.components),"form"in _&&n(2,r=_.form),"data_0"in _&&n(3,l=_.data_0),"data_1"in _&&n(4,f=_.data_1)},s.$$.update=()=>{s.$$.dirty&768&&i.page.set(o)},[e,c,r,l,f,a,u,E,i,o,y,N,q]}class ot extends S{constructor(t){super(),j(this,t,tt,x,z,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const st=[()=>m(()=>import("../nodes/0.d3363c7d.js"),["..\\nodes\\0.d3363c7d.js","..\\chunks\\index.b87f7290.js","..\\chunks\\stores.88561fc5.js","..\\chunks\\singletons.968a7d31.js","..\\chunks\\index.7e639390.js","..\\chunks\\datetime.7428e89c.js","..\\assets\\0.d0f45f6d.css"],import.meta.url),()=>m(()=>import("../nodes/1.72b8b6e0.js"),["..\\nodes\\1.72b8b6e0.js","..\\chunks\\index.b87f7290.js","..\\chunks\\stores.88561fc5.js","..\\chunks\\singletons.968a7d31.js","..\\chunks\\index.7e639390.js"],import.meta.url),()=>m(()=>import("../nodes/2.caa41ce3.js"),["..\\nodes\\2.caa41ce3.js","..\\chunks\\index.b87f7290.js","..\\chunks\\datetime.7428e89c.js","..\\chunks\\DateInput.b9dc3a66.js","..\\chunks\\index.7e639390.js","..\\chunks\\tags.c645b6ab.js","..\\chunks\\preload-helper.41c905a7.js","..\\assets\\tags.6b681f0c.css","..\\chunks\\singletons.968a7d31.js","..\\chunks\\Tag.502436a1.js"],import.meta.url),()=>m(()=>import("../nodes/3.ce10e377.js"),["..\\nodes\\3.ce10e377.js","..\\chunks\\index.b87f7290.js","..\\chunks\\tags.c645b6ab.js","..\\chunks\\datetime.7428e89c.js","..\\chunks\\preload-helper.41c905a7.js","..\\assets\\tags.6b681f0c.css","..\\chunks\\SortController.9276eb37.js","..\\chunks\\index.7e639390.js","..\\assets\\SortController.ed16e8ea.css","..\\chunks\\Button.6ca16e21.js","..\\assets\\3.d44cf1ee.css"],import.meta.url),()=>m(()=>import("../nodes/4.ce8ea2eb.js"),["..\\nodes\\4.ce8ea2eb.js","..\\chunks\\index.b87f7290.js","..\\chunks\\tags.c645b6ab.js","..\\chunks\\datetime.7428e89c.js","..\\chunks\\preload-helper.41c905a7.js","..\\assets\\tags.6b681f0c.css","..\\chunks\\SortController.9276eb37.js","..\\chunks\\index.7e639390.js","..\\assets\\SortController.ed16e8ea.css","..\\chunks\\Button.6ca16e21.js"],import.meta.url),()=>m(()=>import("../nodes/5.a46bf1e1.js"),["..\\nodes\\5.a46bf1e1.js","..\\chunks\\index.b87f7290.js","..\\chunks\\datetime.7428e89c.js","..\\chunks\\DateInput.b9dc3a66.js","..\\chunks\\index.7e639390.js","..\\chunks\\tags.c645b6ab.js","..\\chunks\\preload-helper.41c905a7.js","..\\assets\\tags.6b681f0c.css","..\\chunks\\singletons.968a7d31.js","..\\chunks\\Tag.502436a1.js"],import.meta.url),()=>m(()=>import("../nodes/6.020e79b3.js"),["..\\nodes\\6.020e79b3.js","..\\chunks\\index.b87f7290.js","..\\chunks\\datetime.7428e89c.js","..\\chunks\\DateInput.b9dc3a66.js","..\\chunks\\index.7e639390.js","..\\chunks\\tags.c645b6ab.js","..\\chunks\\preload-helper.41c905a7.js","..\\assets\\tags.6b681f0c.css","..\\chunks\\singletons.968a7d31.js","..\\chunks\\Button.6ca16e21.js"],import.meta.url),()=>m(()=>import("../nodes/7.94b3d4c1.js"),["..\\nodes\\7.94b3d4c1.js","..\\chunks\\index.b87f7290.js"],import.meta.url),()=>m(()=>import("../nodes/8.6d562257.js"),["..\\nodes\\8.6d562257.js","..\\chunks\\index.b87f7290.js"],import.meta.url)],rt=[],at={"/":[-3],"/aluno/[id]":[-4],"/dados":[-5],"/dia/[day=day]-[month=month]":[-6],"/editar/[day=day]-[month=month]":[-7],"/novidades":[7],"/sobre":[8]},ft={handleError:({error:s})=>{console.error(s)}};export{at as dictionary,ft as hooks,it as matchers,st as nodes,ot as root,rt as server_loads};