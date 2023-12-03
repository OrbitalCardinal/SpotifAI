import{a as v,b as d,c as T,d as S,e as M,g as _}from"./chunk-KPQSQMRF.js";import{Aa as x,Ba as C,Ca as F,Ga as l,Ha as h,K as b,Q as u,S as c,ma as r,ra as p,sa as g,ua as k,va as w,wa as a,xa as m,ya as s}from"./chunk-NHHRPFLY.js";var A=[{path:"",redirectTo:"/auth",pathMatch:"full"},{path:"auth",loadComponent:()=>import("./chunk-NX5IRNHN.js").then(e=>e.AuthComponent)},{path:"auth-callback",loadComponent:()=>import("./chunk-R6UBYQTG.js").then(e=>e.AuthCallbackComponent)}];var f=(()=>{let t=class t{constructor(){this.themeAct="light"}changeTheme(i){let o=document.getElementsByTagName("html");o&&(o[0].classList.replace(this.themeAct,i),this.themeAct=i,localStorage.setItem("theme",i))}getTheme(){return this.themeAct}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var I={providers:[_(A),f,T]};var P=e=>({"bg-customhover":e}),D=(()=>{let t=class t{constructor(){this.themeService=u(f)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c({type:t,selectors:[["app-theme-item"]],inputs:{theme:"theme"},standalone:!0,features:[l],decls:7,vars:10,consts:[[1,"flex","items-center","justify-between","w-[214px]","text-[24px]","px-4","py-3","hover:bg-customhover","rounded-md","my-[10px]","cursor-pointer",3,"ngClass","click"],[1,"text-fcolor"],[1,"flex","flex-row","gap-2"],[1,"block","w-[20px]","h-[20px]","rounded-full"]],template:function(o,n){o&1&&(a(0,"li",0),x("click",function(){return n.themeService.changeTheme(n.theme.class)}),a(1,"p",1),C(2),m(),a(3,"div",2),s(4,"span",3)(5,"span",3)(6,"span",3),m()()),o&2&&(p("ngClass",h(8,P,n.themeService.getTheme()===n.theme.class)),r(2),F(n.theme.name),r(2),g("background-color: "+n.theme.bg+";"),r(1),g("background-color: "+n.theme.primary+";"),r(1),g("background-color: "+n.theme.secondary+";"))},dependencies:[d,v]});let e=t;return e})();var H=(e,t)=>t.class;function R(e,t){if(e&1&&s(0,"app-theme-item",8),e&2){let j=t.$implicit;p("theme",j)}}var $=e=>({"shadow-none bg-transparent":e}),L=e=>({"rotate-180":e}),q=e=>({"invisible opacity-0":e}),O=(()=>{let t=class t{constructor(){this.themes=[],this.isOpen=!1,this.themes=[{name:"Claro",class:"light",bg:"#F8F8F8",primary:"#21AFFF",secondary:"#1DB954"},{name:"Oscuro",class:"dark",bg:"#1C1C1C",primary:"#1DB954",secondary:"#21AFFF"},{name:"Hulk",class:"hulk",bg:"#1C1C1C",primary:"#B821FF",secondary:"#1DB96E"}]}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c({type:t,selectors:[["app-theme-picker"]],standalone:!0,features:[l],decls:11,vars:9,consts:[[1,"fixed","flex","flex-col","items-center","w-[300px]","h-screen","text-dark","shadow-[0px_4px_80px_10px]","shadow-customshadow","bg-bmain","transition-shadow","ease-out",3,"ngClass"],[1,"flex","flex-row","w-[214px]","items-center","justify-between","mt-[40px]","cursor-pointer",3,"click"],[1,"flex","flex-row","items-center"],[1,"flex","items-center","justify-center","w-[56px]","h-[54px]","bg-secondary","rounded-md","text-white"],[1,"fa-solid","fa-paintbrush","text-[30px]","pr-[4px]"],[1,"ml-4","text-[24px]","text-fcolor"],[1,"text-secondary","text-[20px]","fa-solid","fa-angle-down","transition-transform",3,"ngClass"],[1,"w-full","flex","flex-col","items-center","transition-opacity","ease-out","my-[30px]","overflow-y-auto",3,"ngClass"],[3,"theme"]],template:function(o,n){o&1&&(a(0,"nav",0)(1,"div",1),x("click",function(){return n.isOpen=!n.isOpen}),a(2,"div",2)(3,"span",3),s(4,"i",4),m(),a(5,"h1",5),C(6,"Temas"),m()(),s(7,"i",6),m(),a(8,"ul",7),k(9,R,1,1,"app-theme-item",8,H),m()()),o&2&&(p("ngClass",h(3,$,!n.isOpen)),r(7),p("ngClass",h(5,L,n.isOpen)),r(1),p("ngClass",h(7,q,!n.isOpen)),r(1),w(n.themes))},dependencies:[d,v,D]});let e=t;return e})();var E=(()=>{let t=class t{constructor(){this.themeService=u(f),this.title="SpotifAI"}ngOnInit(){let i=localStorage.getItem("theme");i&&this.themeService.changeTheme(i)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],standalone:!0,features:[l],decls:2,vars:0,template:function(o,n){o&1&&s(0,"app-theme-picker")(1,"router-outlet")},dependencies:[d,M,O]});let e=t;return e})();S(E,I).catch(e=>console.error(e));
