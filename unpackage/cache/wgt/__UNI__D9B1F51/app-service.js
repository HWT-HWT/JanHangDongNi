if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){const t=this.constructor;return this.then((n=>t.resolve(e()).then((()=>n))),(n=>t.resolve(e()).then((()=>{throw n}))))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){const e=uni.requireGlobal();ArrayBuffer=e.ArrayBuffer,Int8Array=e.Int8Array,Uint8Array=e.Uint8Array,Uint8ClampedArray=e.Uint8ClampedArray,Int16Array=e.Int16Array,Uint16Array=e.Uint16Array,Int32Array=e.Int32Array,Uint32Array=e.Uint32Array,Float32Array=e.Float32Array,Float64Array=e.Float64Array,BigInt64Array=e.BigInt64Array,BigUint64Array=e.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(Vue,weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),function(e){"use strict";const t=(e,t)=>{const n=e.__vccOpts||e;for(const[a,o]of t)n[a]=o;return n};const n=t({data:()=>({})},[["render",function(t,n,a,o,r,l){return e.openBlock(),e.createElementBlock("view",null,[e.createElementVNode("view",{class:"navbar-title"},[e.createElementVNode("view",{class:"occupy"}),e.createElementVNode("text",{class:"text-title"},[e.renderSlot(t.$slots,"default",{},void 0,!0)])])])}],["__scopeId","data-v-d77d97e8"]]);const a=t({data:()=>({}),components:{NavbarTitle:n}},[["render",function(t,n,a,o,r,l){return e.openBlock(),e.createElementBlock("view",{class:"Home"},[e.createElementVNode("view",{class:"navbar-title"},[e.createElementVNode("view",{class:"occupy"}),e.createElementVNode("view",{class:"navigationBar"},[e.createElementVNode("view",{class:"navigationBar-positioning"},[e.createElementVNode("view",{class:"images"},[e.createElementVNode("image",{src:"/static/SVG/positioning.svg"})]),e.createElementVNode("view",{class:"text"},[e.createElementVNode("text",null,"--")])]),e.createElementVNode("view",{class:"navigationBar-search"}),e.createElementVNode("view",{class:"navigationBar-ioc"})])])])}]]);const o=t({data:()=>({}),components:{NavbarTitle:n}},[["render",function(t,n,a,o,r,l){const i=e.resolveComponent("NavbarTitle");return e.openBlock(),e.createElementBlock("view",null,[e.createVNode(i,null,{default:e.withCtx((()=>[e.createTextVNode(" 贷款 ")])),_:1})])}]]);const r=t({data:()=>({}),components:{NavbarTitle:n}},[["render",function(t,n,a,o,r,l){const i=e.resolveComponent("NavbarTitle");return e.openBlock(),e.createElementBlock("view",null,[e.createVNode(i,null,{default:e.withCtx((()=>[e.createTextVNode(" 财富 ")])),_:1})])}]]);const l=t({data:()=>({}),components:{NavbarTitle:n}},[["render",function(t,n,a,o,r,l){const i=e.resolveComponent("NavbarTitle");return e.openBlock(),e.createElementBlock("view",null,[e.createVNode(i,null,{default:e.withCtx((()=>[e.createTextVNode(" 服务 ")])),_:1})])}]]);const i=t({data:()=>({}),components:{NavbarTitle:n}},[["render",function(t,n,a,o,r,l){const i=e.resolveComponent("NavbarTitle");return e.openBlock(),e.createElementBlock("view",null,[e.createVNode(i,null,{default:e.withCtx((()=>[e.createTextVNode(" 我的 ")])),_:1})])}]]);function c(e,t,...n){uni.__log__?uni.__log__(e,t,...n):console[e].apply(console,[...n,t])}__definePage("pages/index/index",a),__definePage("pages/loan/loan",o),__definePage("pages/wealth/wealth",r),__definePage("pages/service/service",l),__definePage("pages/my/my",i);const s={onLaunch:function(){c("log","at App.vue:4","App Launch")},onShow:function(){c("log","at App.vue:7","App Show")},onHide:function(){c("log","at App.vue:10","App Hide")}};const{app:u,Vuex:p,Pinia:d}={app:e.createVueApp(s)};uni.Vuex=p,uni.Pinia=d,u.provide("__globalStyles",__uniConfig.styles),u._component.mpType="app",u._component.render=()=>{},u.mount("#app")}(Vue);