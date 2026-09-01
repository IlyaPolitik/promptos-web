import{j as e}from"./vendor-react-auYEZFGd.js";import{B as i}from"./button-CmrO8P_2.js";import{D as t,a as l,b as d,c as m}from"./dropdown-menu-C1FJfRme.js";import{u as p,L as s}from"./index-DHnIhR4H.js";import{c as h}from"./createLucideIcon-Bynx7ZJJ.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=h("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);function w(){const{lang:n,setLang:r,t:c}=p(),o=s.find(a=>a.code===n)??s[0];return e.jsxs(t,{children:[e.jsx(l,{asChild:!0,children:e.jsxs(i,{variant:"ghost",size:"sm",className:"gap-1.5","aria-label":c("lang.label"),children:[e.jsx(u,{className:"h-4 w-4"}),e.jsxs("span",{className:"hidden sm:inline",children:[o.flag," ",o.code.toUpperCase()]})]})}),e.jsx(d,{align:"end",className:"min-w-[160px]",children:s.map(a=>e.jsxs(m,{onClick:()=>r(a.code),className:a.code===n?"bg-secondary/60":"",children:[e.jsx("span",{className:"mr-2",children:a.flag}),a.label]},a.code))})]})}export{w as L};
