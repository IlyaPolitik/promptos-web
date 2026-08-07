import{j as e}from"./vendor-react-cqj1OLiM.js";import{B as u}from"./button-gjKmpLkA.js";import{D as k,a as x,b as y,d as M,e as j,c as g}from"./dropdown-menu-sFFWyCmI.js";import{c as f,u as w}from"./index-C47BhiKv.js";import{c as o}from"./createLucideIcon-pAC0sban.js";import{C as b}from"./check-y0at5Xck.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=o("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=o("SunMoon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=o("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),v={auto:h,light:m,dark:n};function q(){const{mode:t,resolved:r,setMode:c}=f(),{t:a}=w(),d=v[t],l=[{value:"auto",label:a("theme.auto"),Icon:h},{value:"light",label:a("theme.light"),Icon:m},{value:"dark",label:a("theme.dark"),Icon:n}];return e.jsxs(k,{children:[e.jsx(x,{asChild:!0,children:e.jsx(u,{variant:"ghost",size:"icon","aria-label":a("theme.label"),children:e.jsx(d,{className:"h-4 w-4"})})}),e.jsxs(y,{align:"end",className:"min-w-[180px]",children:[e.jsxs(M,{className:"text-xs text-muted-foreground font-normal",children:[a("theme.label"),t==="auto"&&e.jsxs("span",{className:"ml-1 opacity-70",children:["· ",a(r==="dark"?"theme.dark":"theme.light")]})]}),e.jsx(j,{}),l.map(({value:s,label:p,Icon:i})=>e.jsxs(g,{onClick:()=>c(s),className:"gap-2",children:[e.jsx(i,{className:"h-4 w-4"}),e.jsx("span",{className:"flex-1",children:p}),t===s&&e.jsx(b,{className:"h-3.5 w-3.5 opacity-70"})]},s))]})]})}export{q as T};
