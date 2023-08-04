(window.webpackJsonp=window.webpackJsonp||[]).push([[64,22,36,37,38,39,40,41,42,43,44,45,46],{1004:function(e,t,r){"use strict";r.r(t);r(30),r(37),r(57),r(58);var o=r(90),n=r(5),c=r(17),l=(r(69),r(50),r(32),r(36),r(59),r(39),r(29),r(182),r(31),r(49),r(106)),d=r(79),f=Object(d.a)({"en-us":{Schedule:"Schedule"},"zh-hant":{Schedule:"時間表"}}),m=r(504),h=r(674),v=r(521),y=r(675),x=r(676),_=r(677),M=r(678),k=r(679),I=r(680),w=r(681),S=r(682),D=r(683);function E(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var T={i18n:f,name:"PageConferenceSchedule",components:{CoreH1:m.default,Schedule:h.default,ScheduleBlock:v.default,ScheduleDayTab:y.default,ScheduleDayTabs:x.default,ScheduleList:M.default,ScheduleListGroup:k.default,ScheduleRoom:I.default,ScheduleRooms:w.default,ScheduleTable:S.default,ScheduleEvent:_.default,ScheduleTick:D.default},data:function(){return{selectedDayIndex:0,rooms:[],days:[],tables:[],lists:[],defaultTable:{events:[],ticks:[],timeline:{}},defaultList:{groups:[]}}},computed:j(j({},Object(l.b)(["schedulesData"])),{},{table:function(){return this.tables[this.selectedDayIndex]||this.defaultTable},list:function(){return this.lists[this.selectedDayIndex]||this.defaultList}}),watch:{selectedDayIndex:function(){this.makeRooms()}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("$getSchedulesData");case 2:e.processData();case 3:case"end":return t.stop()}}),t)})))()},activated:function(){var e=this;setTimeout((function(){window.scrollTo(0,e.scrollPosition)}),0)},deactivated:function(){this.scrollPosition=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},methods:{processData:function(){this.makeDays(),this.makeRooms(),this.makeTables(),this.makeLists()},makeDays:function(){var e=this;this.days=this.schedulesData.map((function(t){var r=t.date,o=t.name,n=e.$datetimeToString(r,{inputFormat:"YYYY-MM-DD",outputFormat:"M/D"});return{label:"".concat(o," (").concat(n,")"),date:r}}))},makeRooms:function(){0===this.selectedDayIndex?this.rooms=["4-r0","4-r0-1","4-r0-2","5-r1","5-r1-1","5-r1-2","6-r2","6-r2-1","1-r3"]:this.rooms=["4-r0","4-r0-1","5-r1","5-r1-1","6-r2","6-r2-1","1-r3"]},makeTables:function(){var e=this;this.tables=this.schedulesData.map((function(t){return{events:e.getEvents(t),ticks:e.getTicks(t),timeline:t.timeline}}))},makeLists:function(){var e=this;this.lists=this.schedulesData.map((function(t){return{groups:e.getGroups(t)}}))},getEvents:function(e){return e.rooms.reduce((function(t,r){var n=e.slots[r].map((function(slot){return j(j({},slot),{},{room:r})}));return[].concat(Object(o.a)(t),Object(o.a)(n))}),[])},getTicks:function(e){var t=e.timeline,r=this.$parseDate(t.begin),o=this.$parseDate(t.end).diff(r,"minute"),n=parseInt("".concat(o/30),10)+1;return Array.from({length:n}).map((function(e,i){var t=6*i+1,o=6*i+6;return{label:r.add(30*i,"minute").format("HH:mm"),style:{gridRowStart:t,gridRowEnd:o}}}))},getGroups:function(e){var t=this,r=e.rooms.reduce((function(t,r){return e.slots[r].forEach((function(slot){var e=j(j({},slot),{},{room:r});t[slot.begin_time]?t[slot.begin_time].push(e):t[slot.begin_time]=[e]})),t}),{});return Object.keys(r).sort((function(e,t){return e>t?1:e<t?-1:0})).map((function(e){return{tick:t.$datetimeToString(e,{outputFormat:"HH:mm"}),events:r[e]}}))}},head:function(){return{title:this.$i18n.t("Schedule"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("Schedule")},{hid:"og:description",property:"og:description",content:this.$i18n.t("Schedule")},{hid:"description",name:"description",content:this.$i18n.t("Schedule")}]}}},N=r(9),component=Object(N.a)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"px-4 pt-20"},[r("core-h1",{attrs:{title:e.$t("Schedule")}}),e._v(" "),r("schedule-day-tabs",{model:{value:e.selectedDayIndex,callback:function(t){e.selectedDayIndex=t},expression:"selectedDayIndex"}},e._l(e.days,(function(t,i){return r("schedule-day-tab",{key:e.$makeKey(i,"schedule_day_tab"),attrs:{"date-index":t.date,index:i}},[e._v("\n            "+e._s(t.label)+"\n        ")])})),1),e._v(" "),r("schedule",[r("schedule-rooms",{attrs:{"date-index":e.selectedDayIndex}},[r("schedule-block"),e._v(" "),e._l(e.rooms,(function(t,i){return r("schedule-room",{key:e.$makeKey(i,"schedule_room"),attrs:{value:t}})}))],2),e._v(" "),r("schedule-table",{staticClass:"lg:grid",attrs:{"date-index":e.selectedDayIndex}},[e._l(e.table.ticks,(function(t,i){return r("schedule-tick",{key:e.$makeKey(i,"schedule_tick"),style:t.style},[e._v("\n                "+e._s(t.label)+"\n            ")])})),e._v(" "),e._l(e.table.events,(function(t){return r("schedule-event",{key:e.$makeKey(t.event_id,"schedule_table_event",t.event_type),attrs:{value:t,"timeline-begin":e.table.timeline.begin}})}))],2),e._v(" "),r("schedule-list",{staticClass:"lg:hidden"},e._l(e.list.groups,(function(t,i){return r("schedule-list-group",{key:e.$makeKey(i,"schedule_list_group")},[r("schedule-tick",[e._v(e._s(t.tick))]),e._v(" "),e._l(t.events,(function(t){return r("schedule-event",{key:e.$makeKey(t.event_id,"schedule_list_event"),attrs:{value:t,"in-list":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("schedule-room",{attrs:{value:t.room,inline:""}})]},proxy:!0}],null,!0)})}))],2)})),1)],1)],1)}),[],!1,null,"1c5df7ac",null);t.default=component.exports;installComponents(component,{ScheduleDayTab:r(675).default,ScheduleDayTabs:r(676).default,ScheduleBlock:r(521).default,ScheduleRoom:r(680).default,ScheduleRooms:r(681).default,ScheduleTick:r(683).default,ScheduleEvent:r(677).default,ScheduleTable:r(682).default,ScheduleListGroup:r(679).default,ScheduleList:r(678).default,Schedule:r(674).default})},500:function(e,t,r){var content=r(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("3cda5dc8",content,!0,{sourceMap:!1})},502:function(e,t,r){"use strict";r(500)},503:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,"h1[data-v-feb57f82]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 768px){h1[data-v-feb57f82]{margin-bottom:2.25rem}h1[data-v-feb57f82]{font-size:1.5rem;line-height:2rem}}h1[data-v-feb57f82]{text-shadow:#3643b5 2px 1px 0}",""]),o.locals={},e.exports=o},504:function(e,t,r){"use strict";r.r(t);var o={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},n=(r(502),r(9)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-center font-serif"},[r("h1",{class:e.classObject},[e._v(e._s(e.title))])])}),[],!1,null,"feb57f82",null);t.default=component.exports},521:function(e,t,r){"use strict";r.r(t);var o=r(17),n={name:"ScheduleBlock",components:{LocaleLink:r(113).default},props:{primary:{type:Boolean,default:!1},secondary:{type:Boolean,default:!1},tertiary:{type:Boolean,default:!1},tabHeader:{type:Boolean,default:!1},active:{type:Boolean,default:!1},mini:{type:Boolean,default:!1},textAlignCenter:{type:Boolean,default:!0},paddingX:{type:String,default:"px-2"},paddingY:{type:String,default:"py-3.5"},to:{type:String,default:""}},data:function(){return{isHovering:!1}},computed:{transparent:function(){return!this.primary&&!this.secondary&&!this.tertiary},classObject:function(){var e;return e={scheduleBlock:!0,"-primary":this.primary,"-secondary":this.secondary,"-tertiary":this.tertiary,"-tab-header":this.tabHeader,"-active":this.active,"-mini":this.mini,"-transparent":this.transparent,"text-center":this.textAlignCenter,"cursor-pointer":this.primary||this.tabHeader,hover:this.isHovering},Object(o.a)(e,this.paddingX,!0),Object(o.a)(e,this.paddingY,!0),e}},methods:{onClick:function(e){this.$emit("click",e)},setHoveringState:function(){this.isHovering=!0},removeHoveringState:function(){this.isHovering=!1}}},c=(r(537),r(9)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.classObject,on:{click:e.onClick}},[e.to?r("locale-link",{attrs:{to:e.to,customized:""},on:{mouseenter:e.setHoveringState,mouseleave:e.removeHoveringState}},[e._t("default")],2):e._t("default")],2)}),[],!1,null,"521fd404",null);t.default=component.exports},527:function(e,t,r){var content=r(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("2cd144f6",content,!0,{sourceMap:!1})},528:function(e,t,r){e.exports=r.p+"img/ENEN.5a408d1.svg"},529:function(e,t,r){e.exports=r.p+"img/ZHZH.38617ef.svg"},532:function(e,t,r){e.exports=r.p+"img/ZHEN.371966e.svg"},533:function(e,t,r){e.exports=r.p+"img/JPEN.638520e.svg"},537:function(e,t,r){"use strict";r(527)},538:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,".scheduleBlock[data-v-521fd404]{position:relative;font-family:Noto Serif TC, -apple-system, serif;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;min-width:120px;border-radius:10px}.scheduleBlock.-mini[data-v-521fd404],.scheduleBlock.-transparent[data-v-521fd404]{min-width:unset}.scheduleBlock.-tab-header.-active[data-v-521fd404]{--tw-bg-opacity:1;background-color:rgba(31, 28, 59, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}.scheduleBlock.-tab-header[data-v-521fd404]:not(.-active):hover{color:#7568f6}.scheduleBlock.-primary.-active[data-v-521fd404]{--tw-bg-opacity:1;background-color:rgba(53, 45, 102, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(168, 180, 202, var(--tw-text-opacity))}.scheduleBlock.-primary.-active[data-v-521fd404] .scheduleEvent__title{--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity))}.scheduleBlock.-primary.-active[data-v-521fd404]:hover{--tw-bg-opacity:1;background-color:rgba(218, 139, 220, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(53, 45, 102, var(--tw-text-opacity))}.scheduleBlock.-primary.-active[data-v-521fd404]:hover .scheduleEvent__title{--tw-text-opacity:1;color:rgba(31, 28, 59, var(--tw-text-opacity))}.scheduleBlock.-secondary[data-v-521fd404]{--tw-bg-opacity:1;background-color:rgba(31, 28, 59, var(--tw-bg-opacity));color:#827bc1}.scheduleBlock.-tertiary[data-v-521fd404]{color:#f8f9fb;background-color:#3c2d66}.scheduleBlock.-mini[data-v-521fd404]{font-size:0.75rem;line-height:1rem}",""]),o.locals={},e.exports=o},570:function(e,t,r){r(571)},571:function(e,t,r){"use strict";var o=r(6),n=r(48),c=r(142),l=r(25),d=r(143),f=r(284),m=r(12),h=r(19),v=m("replace"),y=RegExp.prototype,x=Math.max,_=function(e,t,r){return r>e.length?-1:""===t?r:e.indexOf(t,r)};o({target:"String",proto:!0},{replaceAll:function(e,t){var r,o,m,M,k,I,w,S,D=n(this),E=0,j=0,T="";if(null!=e){if((r=c(e))&&!~l(n("flags"in y?e.flags:d.call(e))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(o=e[v]))return o.call(e,D,t);if(h&&r)return l(D).replace(e,t)}for(m=l(D),M=l(e),(k="function"==typeof t)||(t=l(t)),I=M.length,w=x(1,I),E=_(m,M,0);-1!==E;)S=k?l(t(M,E,m)):f(M,m,E,[],void 0,t),T+=m.slice(j,E)+S,j=E+I,E=_(m,M,E+w);return j<m.length&&(T+=m.slice(j)),T}})},574:function(e,t,r){var content=r(629);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("113cdd32",content,!0,{sourceMap:!1})},575:function(e,t,r){var content=r(631);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("65281d55",content,!0,{sourceMap:!1})},576:function(e,t,r){var content=r(633);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("5fead489",content,!0,{sourceMap:!1})},577:function(e,t,r){var content=r(635);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("0d8b8439",content,!0,{sourceMap:!1})},578:function(e,t,r){var content=r(637);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("64959065",content,!0,{sourceMap:!1})},579:function(e,t,r){var content=r(639);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("032130ea",content,!0,{sourceMap:!1})},580:function(e,t,r){var content=r(641);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("25d22f33",content,!0,{sourceMap:!1})},625:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0NERDJFMiIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bTEuMDg4IDMuNzNsLTEuNjUxLTIuNzNINy4zNDNMNS42OSAxNC4zMWgxMi41MTR6TTEwLjUwMyAzLjI2N2wuMDEzLS4wMmMuNjU5LS45OTcgMi4yMDUtLjk5NyAyLjg3Ny4wMmwzLjc3MyA2LjMzOEg2LjczbDMuNzczLTYuMzM4em0yLjA0My41MzFjLS4yNjItLjM5Ni0uOTIzLS4zOTktMS4xOS0uMDA4TDguNDg4IDguNjA2aDYuOTE4TDEyLjU0NyAzLjh6bTguMjY0IDEyLjkwNmwxLjc2NCAyLjM3YTEgMSAwIDAgMS0uODAyIDEuNTk3SDIuMThhMSAxIDAgMCAxLS44MS0xLjU4NWwxLjcxOC0yLjM4MkgyMC44MXoiIC8+Cjwvc3ZnPg=="},626:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0NERDJFMiIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptMS4xOTYuNTUyYy0uMDY0LS4wOTctLjI4MS0uMS0uMzU1LS4wMUw5LjM2OSA4LjEwN2g1LjE1OWwtMi4zOTktNC4wMzF6bTguNjggMTIuNjNsMS43NjUgMi4zN2ExIDEgMCAwIDEtLjgwMiAxLjU5N0gyLjE4YTEgMSAwIDAgMS0uODEtMS41ODVsMS43MTgtMi4zODJIMjAuODF6IiAvPgo8L3N2Zz4="},627:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0NERDJFMiIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptOS44NzcgMTMuMTgybDEuNzY0IDIuMzdhMSAxIDAgMCAxLS44MDIgMS41OTdIMi4xOGExIDEgMCAwIDEtLjgxLTEuNTg1bDEuNzE4LTIuMzgySDIwLjgxeiIgLz4KPC9zdmc+"},628:function(e,t,r){"use strict";r(574)},629:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,".scheduleEvent__context[data-v-c40d5c4c]{position:-webkit-sticky;position:sticky;top:7rem}.scheduleEvent__title[data-v-c40d5c4c]{font-weight:700}.scheduleEvent__icon>img[data-v-c40d5c4c]{display:inline;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;filter:brightness(80%)}.scheduleEvent[data-v-c40d5c4c]:hover .scheduleEvent__icon>img{filter:brightness(0)}",""]),o.locals={},e.exports=o},630:function(e,t,r){"use strict";r(575)},631:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,".scheduleList .scheduleTick{position:-webkit-sticky;position:sticky;top:48px;z-index:100;background-color:rgba(18,16,35,.8);padding:12px 0}",""]),o.locals={},e.exports=o},632:function(e,t,r){"use strict";r(576)},633:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,".scheduleListGroup,.scheduleListGroup .scheduleEvent{margin-bottom:12px}.scheduleListGroup .scheduleEvent.room-2-all{order:1}.scheduleListGroup .scheduleEvent.room-3-r012{order:2}.scheduleListGroup .scheduleEvent.room-4-r0{order:3}.scheduleListGroup .scheduleEvent.room-5-r1{order:4}.scheduleListGroup .scheduleEvent.room-6-r2{order:5}.scheduleListGroup .scheduleEvent.room-1-r3{order:6}",""]),o.locals={},e.exports=o},634:function(e,t,r){"use strict";r(577)},635:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,".scheduleRoom[data-v-9848cf8a]{margin-bottom:12px}",""]),o.locals={},e.exports=o},636:function(e,t,r){"use strict";r(578)},637:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,".scheduleRooms[data-v-2d6f773f]{z-index:900;grid-gap:12px;background-color:rgba(18,16,35,.6)}.scheduleRooms.day1[data-v-2d6f773f]{grid-template-columns:1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;width:140%}.scheduleRooms.day2[data-v-2d6f773f]{grid-template-columns:1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;width:110.5%}",""]),o.locals={},e.exports=o},638:function(e,t,r){"use strict";r(579)},639:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,".scheduleTable[data-v-01811b2b]{grid-gap:12px}.scheduleTable.day1[data-v-01811b2b]{grid-template-columns:[timeline] 1fr [room-4-r0-start] 2fr [room-4-r0-end room-4-r0-1-start] 2fr [room-4-r0-1-end room-4-r0-2-start] 2fr [room-4-r0-2-end room-5-r1-start] 2fr [room-5-r1-end room-5-r1-1-start] 2fr [room-5-r1-1-end room-5-r1-2-start] 2fr [room-5-r1-2-end room-6-r2-start] 2fr [room-6-r2-end room-6-r2-1-start] 2fr [room-6-r2-1-end room-1-r3-start] 2fr [room-1-r3-end];width:140%}.scheduleTable.day2[data-v-01811b2b]{grid-template-columns:[timeline] 1fr [room-4-r0-start] 2fr [room-4-r0-end room-4-r0-1-start] 2fr [room-4-r0-1-end room-5-r1-start] 2fr [room-5-r1-end room-5-r1-1-start] 2fr [room-5-r1-1-end room-6-r2-start] 2fr [room-6-r2-end room-6-r2-1-start] 2fr [room-6-r2-1-end room-1-r3-start] 2fr [room-1-r3-end];width:110.5%}.scheduleTable .scheduleTick[data-v-01811b2b]{grid-column:timeline;justify-self:center}.scheduleTable .scheduleEvent.room-3-r012[data-v-01811b2b]{grid-column:room-4-r0-start/room-6-r2-1-end}.scheduleTable .scheduleEvent.room-4-r0[data-v-01811b2b]{grid-column:room-4-r0-start/room-4-r0-end}.scheduleTable .scheduleEvent.room-4-r0-1[data-v-01811b2b]{grid-column:room-4-r0-1-start/room-4-r0-1-end}.scheduleTable .scheduleEvent.room-4-r0-2[data-v-01811b2b]{grid-column:room-4-r0-2-start/room-4-r0-2-end}.scheduleTable .scheduleEvent.room-5-r1[data-v-01811b2b]{grid-column:room-5-r1-start/room-5-r1-end}.scheduleTable .scheduleEvent.room-5-r1-1[data-v-01811b2b]{grid-column:room-5-r1-1-start/room-5-r1-1-end}.scheduleTable .scheduleEvent.room-5-r1-2[data-v-01811b2b]{grid-column:room-5-r1-2-start/room-5-r1-2-end}.scheduleTable .scheduleEvent.room-6-r2[data-v-01811b2b]{grid-column:room-6-r2-start/room-6-r2-end}.scheduleTable .scheduleEvent.room-6-r2-1[data-v-01811b2b]{grid-column:room-6-r2-1-start/room-6-r2-1-end}.scheduleTable .scheduleEvent.room-6-r2-2[data-v-01811b2b]{grid-column:room-6-r2-2-start/room-6-r2-2-end}.scheduleTable .scheduleEvent.room-1-r3[data-v-01811b2b]{grid-column:room-1-r3-start/room-1-r3-end}.scheduleTable .scheduleEvent.room-2-all[data-v-01811b2b]{grid-column:room-4-r0-start/room-1-r3-end}",""]),o.locals={},e.exports=o},640:function(e,t,r){"use strict";r(580)},641:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,".scheduleTick[data-v-135e4649]{--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity))}",""]),o.locals={},e.exports=o},674:function(e,t,r){"use strict";r.r(t);var o={name:"Schedule"},n=r(9),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"schedule font-serif"},[e._t("default")],2)}),[],!1,null,"37f917cf",null);t.default=component.exports},675:function(e,t,r){"use strict";r.r(t);r(181);var o={name:"ScheduleDayTab",components:{ScheduleBlock:r(521).default},props:{date:{type:String,default:""},index:{type:Number,default:-1}},data:function(){return{day:this.$parseDate(this.date,"YYYY-MM-DD").get("date"),active:!1}},methods:{onClick:function(){this.$parent.selectTab(this.index)}}},n=r(9),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("schedule-block",{staticClass:"m-0 whitespace-nowrap font-bold lg:m-2",attrs:{active:e.active,"padding-x":"px-4 sm:px-8","tab-header":""},on:{click:e.onClick}},[e._t("default")],2)}),[],!1,null,"17b76e01",null);t.default=component.exports;installComponents(component,{ScheduleBlock:r(521).default})},676:function(e,t,r){"use strict";r.r(t);r(29);var o=r(78),n=r.n(o),c={name:"ScheduleDayTabs",mounted:function(){this.initTabs()},updated:function(){this.initialized||(this.initTabs(),this.initialized=!0)},methods:{initTabs:function(){var e=this;this.tabs=this.$children,this.tabs.forEach((function(t,i){var r=n()().isSame(t.day,"day")||0===i;t.active=r,r&&e.updateVModel(i)}))},selectTab:function(e){this.tabs.forEach((function(t,i){t.active=e===i})),this.updateVModel(e)},updateVModel:function(e){this.$emit("input",e)}}},l=r(9),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleDayTabs mb-8 flex w-full justify-center"},[e._t("default")],2)}),[],!1,null,"2f77ef7b",null);t.default=component.exports},677:function(e,t,r){"use strict";r.r(t);var o=r(41),n=(r(44),r(114),r(50),r(36),r(570),{name:"ScheduleEvent",components:{ScheduleBlock:r(521).default},props:{value:{type:void 0,default:function(){return{room:"",event_id:0,event_type:"Type",title:"Title",speakers:[],is_remote:!1,recording_policy:!1,break_event:!1,language:"",python_level:"",begin_time:"",end_time:""}}},timelineBegin:{type:String,default:"08:30"},inList:{type:Boolean,default:!1}},data:function(){var e="HH:mm";return{timeFormat:e,timezoneFormat:"z",timeOptions:{outputFormat:e},timezoneOptions:{outputFormat:"z"},startPoint:this.$parseDate(this.timelineBegin),icon:{lang:{ENEN:r(528),ZHEN:r(532),JPEN:r(533),ZHZH:r(529)},level:{NOVICE:r(625),INTERMEDIATE:r(626),EXPERIENCED:r(627)}}}},computed:{isCustomEvent:function(){return"custom"===this.value.event_type},textAlignCenter:function(){return["custom","keynote"].includes(this.value.event_type)},byLine:function(){var e=this;return this.value.speakers.map((function(t){return e.getValueByLocale(t)})).join(", ")},duration:function(){var e=this.$datetimeToString(this.value.begin_time,this.timeOptions),t=this.$datetimeToString(this.value.end_time,this.timeOptions),r=this.$datetimeToString(this.value.begin_time,this.timezoneOptions);return"".concat(e," ~ ").concat(t," (").concat(r,")")},roomClass:function(){return"room-".concat(this.value.room)},classes:function(){return["scheduleEvent","p-0",this.roomClass]},styles:function(){if(!this.inList)return{gridRowStart:this.getGridRow(this.value.begin_time),gridRowEnd:this.getGridRow(this.value.end_time)}},eventPagePath:function(){var e=this.value,t=e.event_type,r=e.event_id,o=e.speakers;if("keynote"===t&&o[0].en_us){var n=o[0].en_us.replaceAll(" ","_").replaceAll(".","");return"/conference/keynotes#".concat(n)}return["talk","tutorial","sponsored"].includes(t)?"/conference/".concat(t,"/").concat(r,"/"):""}},methods:{getGridRow:function(time){var e=this.$parseDate(time).diff(this.startPoint,"minute");return parseInt("".concat(e/5),10)+1},getValueByLocale:function(data){if("object"===Object(o.a)(data)){return data[{"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale]]}return data}}}),c=(r(628),r(9)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("schedule-block",{class:e.classes,style:e.styles,attrs:{"text-align-center":e.textAlignCenter,primary:!e.isCustomEvent,secondary:e.isCustomEvent,to:e.eventPagePath,active:""}},[e.$slots.prepend?r("div",{staticClass:"scheduleEvent__prepend flex"},[e._t("prepend")],2):e._e(),e._v(" "),r("div",{staticClass:"scheduleEvent__context"},[r("div",{staticClass:"scheduleEvent__title"},[e._v("\n            "+e._s(e.getValueByLocale(e.value.title))+"\n        ")]),e._v(" "),e.isCustomEvent?e._e():r("br"),e._v(" "),e.byLine?r("div",{staticClass:"text-sm font-medium"},[e._v("by "+e._s(e.byLine))]):e._e(),e._v(" "),r("div",{staticClass:"scheduleEvent__icon"},[r("img",{attrs:{src:e.icon.level[e.value.python_level]}}),e._v(" "),r("img",{attrs:{src:e.icon.lang[e.value.language]}})]),e._v(" "),e.duration?r("div",{staticClass:"text-sm font-medium"},[e._v("\n            "+e._s(e.duration)+"\n        ")]):e._e()])])}),[],!1,null,"c40d5c4c",null);t.default=component.exports;installComponents(component,{ScheduleBlock:r(521).default})},678:function(e,t,r){"use strict";r.r(t);var o={name:"ScheduleList"},n=(r(630),r(9)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleList flex w-full flex-col"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},679:function(e,t,r){"use strict";r.r(t);var o={name:"ScheduleListGroup"},n=(r(632),r(9)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleListGroup flex flex-col"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},680:function(e,t,r){"use strict";r.r(t);var o={name:"ScheduleRoom",components:{ScheduleBlock:r(521).default},props:{value:{type:String,default:"Room"},inline:{type:Boolean,default:!1}},computed:{name:function(){return{"4-r0":"R0-0","4-r0-1":"R0-1","4-r0-2":"R0-2","5-r1":"R1-0","5-r1-1":"R1-1","5-r1-2":"R1-2","6-r2":"R2-0","6-r2-1":"R2-1","1-r3":"R3","2-all":"All","3-r012":"R0, R1, R2"}[this.value]},paddingX:function(){return this.inline?"px-2":void 0},paddingY:function(){return this.inline?"py-2":void 0}}},n=(r(634),r(9)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("schedule-block",{staticClass:"scheduleRoom whitespace-nowrap font-semibold",attrs:{mini:e.inline,"padding-x":e.paddingX,"padding-y":e.paddingY,tertiary:""}},[e._v("\n    "+e._s(e.name)+"\n")])}),[],!1,null,"9848cf8a",null);t.default=component.exports;installComponents(component,{ScheduleBlock:r(521).default})},681:function(e,t,r){"use strict";r.r(t);r(181);var o={name:"ScheduleRooms",props:{dateIndex:{type:Number,default:null}}},n=(r(636),r(9)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleRooms sticky top-12 hidden lg:grid",class:{day1:0===e.dateIndex,day2:1===e.dateIndex}},[e._t("default")],2)}),[],!1,null,"2d6f773f",null);t.default=component.exports},682:function(e,t,r){"use strict";r.r(t);r(181);var o={name:"ScheduleTable",props:{dateIndex:{type:Number,default:null}}},n=(r(638),r(9)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleTable hidden w-full",class:{day1:0===e.dateIndex,day2:1===e.dateIndex}},[e._t("default")],2)}),[],!1,null,"01811b2b",null);t.default=component.exports},683:function(e,t,r){"use strict";r.r(t);var o={name:"ScheduleTick"},n=(r(640),r(9)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleTick font-semibold"},[e._t("default")],2)}),[],!1,null,"135e4649",null);t.default=component.exports}}]);