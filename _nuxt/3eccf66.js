(window.webpackJsonp=window.webpackJsonp||[]).push([[40,7,37,41],{379:function(t,e,o){var content=o(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("6c4e3de6",content,!0,{sourceMap:!1})},380:function(t,e,o){"use strict";var n=o(3),r=o(381);n({target:"String",proto:!0,forced:o(382)("small")},{small:function(){return r(this,"small","","")}})},381:function(t,e,o){var n=o(35),r=/"/g;t.exports=function(t,e,o,l){var d=String(n(t)),c="<"+e;return""!==o&&(c+=" "+o+'="'+String(l).replace(r,"&quot;")+'"'),c+">"+d+"</"+e+">"}},382:function(t,e,o){var n=o(6);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},383:function(t,e,o){"use strict";o.r(e);o(380);var n=o(28),r={name:"CoreTextButton",components:{ExtLink:n.ExtLink,LocaleLink:n.LocaleLink},props:{primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1},large:{type:Boolean,default:!1},small:{type:Boolean,default:!1},rounded:{type:Boolean,default:!0},block:{type:Boolean,default:!1},href:{type:String,default:void 0},to:{type:String,default:void 0}},computed:{coreButtonClasses:function(){return{"core-button":!0,"--primary":this.primary,"--secondary":this.secondary,"--large":this.large,"--medium":this.medium,"--small":this.small,"--rounded":this.rounded,"--block":this.block,"--is-link":this.isLink}},medium:function(){return!this.large&&!this.small},isLink:function(){return this.href||this.to}}},l=(o(384),o(5)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.coreButtonClasses},[t.href?o("ext-link",{attrs:{href:t.href}},[t._t("default")],2):t.to?o("locale-link",{attrs:{to:t.to,customized:""}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"1a299152",null);e.default=component.exports},384:function(t,e,o){"use strict";o(379)},385:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,".core-button[data-v-1a299152]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;outline:none;background-color:transparent}.core-button.--is-link>a[data-v-1a299152],.core-button[data-v-1a299152]:not(.--is-link){display:inline-flex;align-items:center;justify-content:center;line-height:1.25rem;border-radius:5px;text-transform:uppercase;outline:none}.core-button.--large.--is-link>a[data-v-1a299152], .core-button.--large[data-v-1a299152]:not(.--is-link){height:5rem;border-width:4px;padding-left:4rem;padding-right:4rem;padding-top:1.25rem;padding-bottom:1.25rem;font-size:1.5rem;line-height:2rem;font-weight:700}.core-button.--large.--is-link>a[data-v-1a299152],.core-button.--large[data-v-1a299152]:not(.--is-link){min-width:128px}.core-button.--medium.--is-link>a[data-v-1a299152], .core-button.--medium[data-v-1a299152]:not(.--is-link){height:3rem;border-width:4px;padding-left:1.75rem;padding-right:1.75rem;padding-top:0.875rem;padding-bottom:0.875rem;font-size:1rem;line-height:1.5rem;font-weight:700}.core-button.--medium.--is-link>a[data-v-1a299152],.core-button.--medium[data-v-1a299152]:not(.--is-link){min-width:108px}.core-button.--small.--is-link>a[data-v-1a299152], .core-button.--small[data-v-1a299152]:not(.--is-link){height:2.5rem;padding-left:1.25rem;padding-right:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.75rem;line-height:1rem}.core-button.--small.--is-link>a[data-v-1a299152],.core-button.--small[data-v-1a299152]:not(.--is-link){min-width:80px;border-width:3px}.core-button.--rounded.--is-link>a[data-v-1a299152],.core-button.--rounded[data-v-1a299152]:not(.--is-link){border-radius:9999px}.core-button.--primary.--is-link>a[data-v-1a299152],.core-button.--primary[data-v-1a299152]:not(.--is-link){color:#c2a53a;border-color:currentColor}.core-button.--secondary.--is-link>a[data-v-1a299152],.core-button.--secondary[data-v-1a299152]:not(.--is-link){color:#c7c7c7;border-color:currentColor}.core-button.--is-link>a[data-v-1a299152]:hover,.core-button[data-v-1a299152]:not(.--is-link):hover{color:#7568f6;border-color:#7568f6}",""]),n.locals={},t.exports=n},387:function(t,e,o){var content=o(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("3c4cf331",content,!0,{sourceMap:!1})},389:function(t,e,o){"use strict";o.r(e);o(380);var n={name:"SponsorCard",props:{logoUrl:{type:String,default:""},tag:{type:String,default:""},small:{type:Boolean,default:!1}},computed:{classObject:function(){return{sponsorCard:!0,"-small":this.small}}}},r=(o(407),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!!t.logoUrl,expression:"!!logoUrl"}],class:t.classObject},[n("div",{staticClass:"dummy"}),t._v(" "),n("img",{attrs:{src:t.logoUrl,alt:""}}),t._v(" "),t.tag?n("div",{staticClass:"sponsorCard__tag"},[n("img",{staticClass:"diamond",attrs:{src:o(406),alt:"sponsor-logo-diamond"}}),t._v("\n        "+t._s(t.tag)+"\n    ")]):t._e()])}),[],!1,null,"178b8e35",null);e.default=component.exports},392:function(t,e,o){var content=o(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("d3b7bafc",content,!0,{sourceMap:!1})},406:function(t,e,o){t.exports=o.p+"img/sponsor-logo-diamond.472b622.svg"},407:function(t,e,o){"use strict";o(387)},408:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,".sponsorCard[data-v-178b8e35]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));width:40%}@media (min-width:767px){.sponsorCard[data-v-178b8e35]{width:10rem}}.sponsorCard>.dummy[data-v-178b8e35]{margin-top:100%}.sponsorCard>img[data-v-178b8e35]{position:absolute;-o-object-fit:contain;object-fit:contain;width:calc(100% - 10px);border-radius:inherit}.sponsorCard.-small[data-v-178b8e35]{height:5rem;width:5rem;min-width:100px}.sponsorCard__tag[data-v-178b8e35]{position:absolute;display:flex;height:1.5rem;width:100%;align-items:center;justify-content:center;font-size:0.75rem;line-height:1rem;bottom:20px;background-color:#2a36a4;color:#fff}@media (max-width:768px){.sponsorCard__tag[data-v-178b8e35]{display:none!important}}img.diamond[data-v-178b8e35]{margin-right:0.25rem;margin-bottom:0.25rem}",""]),n.locals={},t.exports=n},418:function(t,e,o){"use strict";o.r(e);var n=o(63);e.default=Object(n.a)({"en-us":{website:"Website",about:"About"},"zh-hant":{website:"官方網站",about:"關於"}})},422:function(t,e,o){"use strict";o.r(e);o(36);var n=o(418),r=o(389),l=o(383),d={i18n:n.default,name:"SponsorModal",components:{SponsorCard:r.default,TextButton:l.default},props:{value:{type:Boolean,default:!1},context:{type:Object,default:function(){return{}}}},data:function(){return{shouldShowModal:this.value}},watch:{value:function(t){this.shouldShowModal=t}},methods:{close:function(){this.shouldShowModal=!1,this.$emit("input",!1),document.body.classList.remove("modal-open")},getAttributeByLocale:function(t){var e="".concat(t,"_").concat({"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale]);return this.context[e]}}},c=(o(428),o(5)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowModal,expression:"shouldShowModal"}],staticClass:"sponsorModal"},[o("div",{staticClass:"lightBox"},[o("div",{staticClass:"lightBox__closeButton",on:{click:t.close}},[t._v("✕")]),t._v(" "),o("div",{staticClass:"lightBox__title"},[o("sponsor-card",{attrs:{"logo-url":t.context.logo_url,small:""}}),t._v(" "),o("h1",{staticClass:"text-xl mx-8"},[t._v("\n                "+t._s(t.context.name)+"\n            ")])],1),t._v(" "),o("h2",{staticClass:"lightBox__subtitle"},[t._v(t._s(t.$t("about")))]),t._v(" "),o("div",{staticClass:"lightBox__intro"},[o("p",{staticClass:"text-sm"},[t._v(t._s(t.getAttributeByLocale("intro")))])]),t._v(" "),o("div",{staticClass:"lightBox__buttons mt-28 sm:mt-10"},[o("text-button",{attrs:{href:t.context.website_url}},[t._v(t._s(t.$t("website")))])],1)])])}),[],!1,null,"71acce08",null);e.default=component.exports},428:function(t,e,o){"use strict";o(392)},429:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,".sponsorModal[data-v-71acce08]{position:fixed;top:0px;left:0px;display:flex;height:100vh;width:100%;align-items:center;justify-content:center;background-color:rgba(18,16,35,.6);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);z-index:10000}.lightBox[data-v-71acce08]{display:flex;flex-direction:column;border-radius:1rem;border-width:4px;padding-left:2rem;padding-right:2rem;padding-top:1rem;padding-bottom:1rem;width:95%;padding:32px 28px 28px 32px}@media (min-width:415px){.lightBox[data-v-71acce08]{width:66%;padding-left:60px;padding-bottom:48px;padding-right:48px;padding-top:60px}}.lightBox[data-v-71acce08]{height:80%;background-color:#121023;border-color:#f3cc39}.lightBox__closeButton[data-v-71acce08]{position:relative;display:flex;cursor:pointer;justify-content:flex-end;top:-24px;right:-12px;color:#f3cc39}@media (min-width:415px){.lightBox__closeButton[data-v-71acce08]{top:-40px;right:-20px}}.lightBox__title[data-v-71acce08]{display:flex;align-items:center}.lightBox__subtitle[data-v-71acce08]{margin-top:1.75rem;font-size:1.25rem;line-height:1.75rem;color:#f3cc39}.lightBox__intro[data-v-71acce08]{margin-top:0.875rem;margin-bottom:1rem;display:flex;overflow-y:auto;white-space:pre-line}.lightBox__buttons[data-v-71acce08]{display:flex}",""]),n.locals={},t.exports=n}}]);