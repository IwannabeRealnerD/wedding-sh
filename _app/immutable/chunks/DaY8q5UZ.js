import{S as o,G as $,H as j,I as h,J as V,g as S,U as P,K as y,L as m,B as z,M as J,N as Q,O as W,n as X,w as q,D as k,E as x,P as p,Q as ee,R as ae,F as re,V as U,W as C,o as F,X as G,x as te,Y as fe,Z as ne,b as B,_ as ie,$ as se,a0 as ue,f as H,a1 as le,a2 as ve,a3 as _e,a4 as ce,a5 as de,l as ge,a6 as be,a7 as Pe,a8 as Ie,a9 as Re}from"./Bt36EnOC.js";function A(a,l=null,c){if(typeof a!="object"||a===null||o in a)return a;const v=Q(a);if(v!==$&&v!==j)return a;var f=new Map,u=W(a),b=h(0);u&&f.set("length",h(a.length));var I;return new Proxy(a,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&J();var n=f.get(e);return n===void 0?(n=h(r.value),f.set(e,n)):y(n,A(r.value,I)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,h(P));else{if(u&&typeof e=="string"){var n=f.get("length"),t=Number(e);Number.isInteger(t)&&t<n.v&&y(n,t)}y(r,P),K(b)}return!0},get(i,e,r){var d;if(e===o)return a;var n=f.get(e),t=e in i;if(n===void 0&&(!t||(d=m(i,e))!=null&&d.writable)&&(n=h(A(t?i[e]:P,I)),f.set(e,n)),n!==void 0){var s=S(n);return s===P?void 0:s}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var n=f.get(e);n&&(r.value=S(n))}else if(r===void 0){var t=f.get(e),s=t==null?void 0:t.v;if(t!==void 0&&s!==P)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(i,e){var s;if(e===o)return!0;var r=f.get(e),n=r!==void 0&&r.v!==P||Reflect.has(i,e);if(r!==void 0||z!==null&&(!n||(s=m(i,e))!=null&&s.writable)){r===void 0&&(r=h(n?A(i[e],I):P),f.set(e,r));var t=S(r);if(t===P)return!1}return n},set(i,e,r,n){var E;var t=f.get(e),s=e in i;if(u&&e==="length")for(var d=r;d<t.v;d+=1){var R=f.get(d+"");R!==void 0?y(R,P):d in i&&(R=h(P),f.set(d+"",R))}t===void 0?(!s||(E=m(i,e))!=null&&E.writable)&&(t=h(void 0),y(t,A(r,I)),f.set(e,t)):(s=t.v!==P,y(t,A(r,I)));var g=Reflect.getOwnPropertyDescriptor(i,e);if(g!=null&&g.set&&g.set.call(n,r),!s){if(u&&typeof e=="string"){var O=f.get("length"),T=Number(e);Number.isInteger(T)&&T>=O.v&&y(O,T+1)}K(b)}return!0},ownKeys(i){S(b);var e=Reflect.ownKeys(i).filter(t=>{var s=f.get(t);return s===void 0||s.v!==P});for(var[r,n]of f)n.v!==P&&!(r in i)&&e.push(r);return e},setPrototypeOf(){V()}})}function K(a,l=1){y(a,a.v+l)}function he(a,l,[c,v]=[0,0]){q&&c===0&&k();var f=a,u=null,b=null,I=P,i=c>0?x:0,e=!1;const r=(t,s=!0)=>{e=!0,n(s,t)},n=(t,s)=>{if(I===(I=t))return;let d=!1;if(q&&v!==-1){if(c===0){const g=f.data;g===p?v=0:g===ee?v=1/0:(v=parseInt(g.substring(1)),v!==v&&(v=I?1/0:-1))}const R=v>c;!!I===R&&(f=ae(),re(f),U(!1),d=!0,v=-1)}I?(u?C(u):s&&(u=F(()=>s(f))),b&&G(b,()=>{b=null})):(b?C(b):s&&(b=F(()=>s(f,[c+1,v]))),u&&G(u,()=>{u=null})),d&&U(!0)};X(()=>{e=!1,l(r),e||n(null,null)},i),q&&(f=te)}function Z(a,l){return a===l||(a==null?void 0:a[o])===l}function Ee(a={},l,c,v){return fe(()=>{var f,u;return ne(()=>{f=u,u=[],B(()=>{a!==c(...u)&&(l(a,...u),f&&Z(c(...f),a)&&l(null,...f))})}),()=>{ie(()=>{u&&Z(c(...u),a)&&l(null,...u)})}}),a}let D=!1;function ye(a){var l=D;try{return D=!1,[a(),D]}finally{D=l}}function we(a,l,c,v){var M;var f=(c&Pe)!==0,u=!ge||(c&be)!==0,b=(c&ce)!==0,I=(c&Re)!==0,i=!1,e;b?[e,i]=ye(()=>a[l]):e=a[l];var r=o in a||de in a,n=b&&(((M=m(a,l))==null?void 0:M.set)??(r&&l in a&&(_=>a[l]=_)))||void 0,t=v,s=!0,d=!1,R=()=>(d=!0,s&&(s=!1,I?t=B(v):t=v),t);e===void 0&&v!==void 0&&(n&&u&&se(),e=R(),n&&n(e));var g;if(u)g=()=>{var _=a[l];return _===void 0?R():(s=!0,d=!1,_)};else{var O=(f?H:le)(()=>a[l]);O.f|=ue,g=()=>{var _=S(O);return _!==void 0&&(t=void 0),_===void 0?t:_}}if((c&ve)===0)return g;if(n){var T=a.$$legacy;return function(_,w){return arguments.length>0?((!u||!w||T||i)&&n(w?g():_),_):g()}}var E=!1,L=Ie(e),N=H(()=>{var _=g(),w=S(L);return E?(E=!1,w):L.v=_});return f||(N.equals=_e),function(_,w){if(arguments.length>0){const Y=w?S(N):u&&b?A(_):_;return N.equals(Y)||(E=!0,y(L,Y),d&&t!==void 0&&(t=Y),B(()=>S(N))),_}return S(N)}}export{A as a,Ee as b,he as i,we as p};
