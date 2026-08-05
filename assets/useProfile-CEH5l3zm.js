import{c as l}from"./createLucideIcon-pAC0sban.js";import{r as e}from"./vendor-react-cqj1OLiM.js";import{supabase as n}from"./client-D36nM_m7.js";import{u}from"./useAuth-DEjCcQ_5.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=l("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);function _(){const{user:r}=u(),[c,a]=e.useState(null),[i,t]=e.useState(!0),s=e.useCallback(async()=>{if(!r){a(null),t(!1);return}const{data:f,error:o}=await n.from("profiles").select("id, display_name, workspace_name, avatar_url, email_verified, referral_code, bonus_requests, referred_by").eq("id",r.id).maybeSingle();o&&console.error("profile fetch",o),a(f),t(!1)},[r]);return e.useEffect(()=>{s()},[s]),{profile:c,loading:i,refresh:s}}export{k as U,_ as u};
