(function(r,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(r=typeof globalThis<"u"?globalThis:r||self,e(r["modal-vue3"]={},r.Vue))})(this,function(r,e){"use strict";const h=e.defineComponent({props:{visibles:Object,order:Object},setup(o,{slots:s}){const n=o.order,f=o.visibles,u=e.reactive({}),l={currOrder:0,triggerTotal:0,list:[],track(t){this.list.push(t)},trigger(t,i){if(this.triggerTotal++,this.list=this.list.map(d=>(d.name===t&&(d.visible=i),d)),this.triggerTotal===this.list.length)if(this.currOrder<this.list.length){for(;this.currOrder<this.list.length&&(u[this.list[this.currOrder].name]=this.list[this.currOrder].visible,!this.list[this.currOrder].visible);)this.currOrder++;this.currOrder=0}else this.triggerTotal=0,this.trigger(t,i)}};if(n){for(let t in n){let i={name:t,order:Number(n[t])};l.track(i)}l.list.sort((t,i)=>t.order-i.order)}return e.watch(f,t=>{l.triggerTotal=0;for(let i in t)l.trigger(i,t[i])}),()=>{if(s.default)return e.h("div",null,s.default(u))}}}),a=e.defineComponent({props:{mask:Boolean,visible:Boolean},setup(o,{slots:s}){return()=>{if(s.default)return o.visible?e.h("div",null,[e.h("div",{style:"width:100%;height:100%;position:fixed;left:0;top:0;background-color:rgba(0, 0, 0, 0.25)"}),e.h("div",{style:"position:fixed;left:0;right:0;top:0;bottom:0;margin: 0 auto;z-index:1000;overflow:auto;outline:0;"},[e.h("div",{style:"width:500px;position:relative;top:100px;margin: 0 auto;z-index:1000;overflow:auto;outline:0;box-sizing:border-box;background-color:#fff;"},s.default())])]):null}},mounted(){this.$emit("cacel",o=>{console.log(21213)})}});r.UseModal=a,r.UseModalGroup=h,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
