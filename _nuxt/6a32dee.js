(window.webpackJsonp=window.webpackJsonp||[]).push([[37,34],{503:function(t,e,o){"use strict";o.r(e);var r=o(18),n={name:"ScheduleBlock",components:{LocaleLink:o(109).default},props:{primary:{type:Boolean,default:!1},secondary:{type:Boolean,default:!1},tertiary:{type:Boolean,default:!1},tabHeader:{type:Boolean,default:!1},active:{type:Boolean,default:!1},mini:{type:Boolean,default:!1},textAlignCenter:{type:Boolean,default:!0},paddingX:{type:String,default:"px-2"},paddingY:{type:String,default:"py-3.5"},to:{type:String,default:""}},data:function(){return{isHovering:!1}},computed:{transparent:function(){return!this.primary&&!this.secondary&&!this.tertiary},classObject:function(){var t;return t={scheduleBlock:!0,"-primary":this.primary,"-secondary":this.secondary,"-tertiary":this.tertiary,"-tab-header":this.tabHeader,"-active":this.active,"-mini":this.mini,"-transparent":this.transparent,"text-center":this.textAlignCenter,"cursor-pointer":this.primary||this.tabHeader,hover:this.isHovering},Object(r.a)(t,this.paddingX,!0),Object(r.a)(t,this.paddingY,!0),t}},methods:{onClick:function(t){this.$emit("click",t)},setHoveringState:function(){this.isHovering=!0},removeHoveringState:function(){this.isHovering=!1}}},c=(o(516),o(6)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.classObject,on:{click:t.onClick}},[t.to?o("locale-link",{attrs:{to:t.to,customized:""},on:{mouseenter:t.setHoveringState,mouseleave:t.removeHoveringState}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"24b94cec",null);e.default=component.exports},512:function(t,e,o){var content=o(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("8e8af254",content,!0,{sourceMap:!1})},514:function(t,e,o){t.exports=o.p+"img/ENEN.5a408d1.svg"},515:function(t,e,o){t.exports=o.p+"img/ZHZH.38617ef.svg"},516:function(t,e,o){"use strict";o(512)},517:function(t,e,o){var r=o(16)((function(i){return i[1]}));r.push([t.i,".scheduleBlock[data-v-24b94cec]{position:relative;font-family:Noto Serif TC, -apple-system, serif;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;min-width:120px;border-radius:10px}.scheduleBlock.-mini[data-v-24b94cec],.scheduleBlock.-transparent[data-v-24b94cec]{min-width:unset}.scheduleBlock.-tab-header.-active[data-v-24b94cec]{--tw-bg-opacity:1;background-color:rgba(31, 28, 59, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}.scheduleBlock.-tab-header[data-v-24b94cec]:not(.-active):hover{color:#7568f6}.scheduleBlock.-primary.-active[data-v-24b94cec]{--tw-bg-opacity:1;background-color:rgba(53, 45, 102, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(168, 180, 202, var(--tw-text-opacity))}.scheduleBlock.-primary.-active[data-v-24b94cec] .scheduleEvent__title{--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity))}.scheduleBlock.-primary.-active[data-v-24b94cec]:hover{--tw-bg-opacity:1;background-color:rgba(195, 134, 174, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(53, 45, 102, var(--tw-text-opacity))}.scheduleBlock.-primary.-active[data-v-24b94cec]:hover .scheduleEvent__title{--tw-text-opacity:1;color:rgba(31, 28, 59, var(--tw-text-opacity))}.scheduleBlock.-secondary[data-v-24b94cec]{--tw-bg-opacity:1;background-color:rgba(31, 28, 59, var(--tw-bg-opacity));color:#827bc1}.scheduleBlock.-tertiary[data-v-24b94cec]{color:#f8f9fb;background-color:#3c2d66}.scheduleBlock.-mini[data-v-24b94cec]{font-size:0.75rem;line-height:1rem}",""]),r.locals={},t.exports=r},524:function(t,e,o){t.exports=o.p+"img/ZHEN.371966e.svg"},525:function(t,e,o){t.exports=o.p+"img/JPEN.638520e.svg"},540:function(t,e,o){var content=o(580);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("84d1122e",content,!0,{sourceMap:!1})},576:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0NERDJFMiIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bTEuMDg4IDMuNzNsLTEuNjUxLTIuNzNINy4zNDNMNS42OSAxNC4zMWgxMi41MTR6TTEwLjUwMyAzLjI2N2wuMDEzLS4wMmMuNjU5LS45OTcgMi4yMDUtLjk5NyAyLjg3Ny4wMmwzLjc3MyA2LjMzOEg2LjczbDMuNzczLTYuMzM4em0yLjA0My41MzFjLS4yNjItLjM5Ni0uOTIzLS4zOTktMS4xOS0uMDA4TDguNDg4IDguNjA2aDYuOTE4TDEyLjU0NyAzLjh6bTguMjY0IDEyLjkwNmwxLjc2NCAyLjM3YTEgMSAwIDAgMS0uODAyIDEuNTk3SDIuMThhMSAxIDAgMCAxLS44MS0xLjU4NWwxLjcxOC0yLjM4MkgyMC44MXoiIC8+Cjwvc3ZnPg=="},577:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0NERDJFMiIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptMS4xOTYuNTUyYy0uMDY0LS4wOTctLjI4MS0uMS0uMzU1LS4wMUw5LjM2OSA4LjEwN2g1LjE1OWwtMi4zOTktNC4wMzF6bTguNjggMTIuNjNsMS43NjUgMi4zN2ExIDEgMCAwIDEtLjgwMiAxLjU5N0gyLjE4YTEgMSAwIDAgMS0uODEtMS41ODVsMS43MTgtMi4zODJIMjAuODF6IiAvPgo8L3N2Zz4="},578:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0NERDJFMiIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptOS44NzcgMTMuMTgybDEuNzY0IDIuMzdhMSAxIDAgMCAxLS44MDIgMS41OTdIMi4xOGExIDEgMCAwIDEtLjgxLTEuNTg1bDEuNzE4LTIuMzgySDIwLjgxeiIgLz4KPC9zdmc+"},579:function(t,e,o){"use strict";o(540)},580:function(t,e,o){var r=o(16)((function(i){return i[1]}));r.push([t.i,".scheduleEvent__context[data-v-21001e28]{top:132px}.scheduleEvent__title[data-v-21001e28]{font-weight:700}.scheduleEvent__icon>img[data-v-21001e28]{display:inline;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;filter:brightness(80%)}.scheduleEvent[data-v-21001e28]:hover .scheduleEvent__icon>img{filter:brightness(0)}",""]),r.locals={},t.exports=r},626:function(t,e,o){"use strict";o.r(e);var r=o(36),n=(o(44),o(110),o(43),o(30),o(34),o(87),{name:"ScheduleEvent",components:{ScheduleBlock:o(503).default},props:{value:{type:void 0,default:function(){return{room:"",event_id:0,event_type:"Type",title:"Title",speakers:[],is_remote:!1,recording_policy:!1,break_event:!1,language:"",python_level:"",begin_time:"",end_time:""}}},timelineBegin:{type:String,default:"08:30"},inList:{type:Boolean,default:!1}},data:function(){var t="HH:mm";return{format:t,options:{outputFormat:t},startPoint:this.$parseDate(this.$padTimezone(this.timelineBegin)),icon:{lang:{ENEN:o(514),ZHEN:o(524),JPEN:o(525),ZHZH:o(515)},level:{NOVICE:o(576),INTERMEDIATE:o(577),EXPERIENCED:o(578)}}}},computed:{isCustomEvent:function(){return"custom"===this.value.event_type},textAlignCenter:function(){return["custom","keynote"].includes(this.value.event_type)},byLine:function(){var t=this;return this.value.speakers.map((function(e){return t.getValueByLocale(e)})).join(", ")},duration:function(){var t=this.$datetimeToString(this.$padTimezone(this.value.begin_time),this.options),e=this.$datetimeToString(this.$padTimezone(this.value.end_time),this.options);return"".concat(t," ~ ").concat(e)},roomClass:function(){return"room-".concat(this.value.room)},classes:function(){return["scheduleEvent","p-0",this.roomClass]},styles:function(){if(!this.inList)return{gridRowStart:this.getGridRow(this.value.begin_time),gridRowEnd:this.getGridRow(this.value.end_time)}},eventPagePath:function(){var t=this.value,e=t.event_type,o=t.event_id,r=t.speakers;if("keynote"===e){var n=r[0].en_us.split(" ").join("_");return"/conference/keynotes#".concat(n)}return["talk","tutorial","sponsored"].includes(e)?"/conference/".concat(e,"/").concat(o,"/"):""}},methods:{getGridRow:function(t){var time=this.$padTimezone(t),e=this.$parseDate(time).diff(this.startPoint,"minute");return parseInt("".concat(e/5),10)+1},getValueByLocale:function(data){if("object"===Object(r.a)(data)){return data[{"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale]]}return data}}}),c=(o(579),o(6)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("schedule-block",{class:t.classes,style:t.styles,attrs:{"text-align-center":t.textAlignCenter,primary:!t.isCustomEvent,secondary:t.isCustomEvent,to:t.eventPagePath,active:""}},[t.$slots.prepend?o("div",{staticClass:"scheduleEvent__prepend flex"},[t._t("prepend")],2):t._e(),t._v(" "),o("div",{staticClass:"scheduleEvent__context sticky"},[o("div",{staticClass:"scheduleEvent__title"},[t._v("\n            "+t._s(t.getValueByLocale(t.value.title))+"\n        ")]),t._v(" "),t.isCustomEvent?t._e():o("br"),t._v(" "),t.byLine?o("div",{staticClass:"font-medium text-sm"},[t._v("by "+t._s(t.byLine))]):t._e(),t._v(" "),o("div",{staticClass:"scheduleEvent__icon"},[o("img",{attrs:{src:t.icon.level[t.value.python_level]}}),t._v(" "),o("img",{attrs:{src:t.icon.lang[t.value.language]}})]),t._v(" "),t.duration?o("div",{staticClass:"font-medium text-sm"},[t._v("\n            "+t._s(t.duration)+"\n        ")]):t._e()])])}),[],!1,null,"21001e28",null);e.default=component.exports;installComponents(component,{ScheduleBlock:o(503).default})}}]);