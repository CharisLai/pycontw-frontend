(window.webpackJsonp=window.webpackJsonp||[]).push([[57,7,8,10,13,18,23,24],{1002:function(e,t,r){"use strict";r.r(t);var o=r(3),n=r(75),c=(r(44),r(45),r(43),r(23),r(942),r(37),r(943),r(945),r(946),r(947),r(948),r(949),r(950),r(951),r(952),r(953),r(954),r(955),r(956),r(957),r(958),r(959),r(48),r(51),r(52),r(663)),l=r(472),d=r(475),f=r(502),h=r(692),m=r(724),v=r(720),C=r(725),y={i18n:c.a,name:"PageConferenceSpeeches",components:{I18nPageWrapper:l.default,CoreH1:d.default,CoreHr:f.default,CoreCheckbox:h.default,CheckboxCollection:m.default,SpeechCard:v.default,SpeechCardCollection:C.default},asyncData:function(e){var t=e.redirect,r=e.params.eventType;["talks","tutorials"].includes(r)||t("/")},data:function(){return{eventType:"",speechesData:[],checkedCategories:[]}},computed:{title:function(){return this.$i18n.t("".concat(this.$route.params.eventType,".title"))},intro:function(){return this.$i18n.t("".concat(this.$route.params.eventType,".intro"))},speechCategories:function(){var e=this.speechesData.map((function(e){return e.category}));return Object(n.a)(new Set(e))},filteredSpeechesData:function(){var e=this;return this.speechesData.filter((function(t){return e.checkedCategories.includes(t.category)}))},selectedSpeechesData:function(){return"talks"===this.eventType&&this.checkedCategories.length>0?this.filteredSpeechesData:this.speechesData},isAllCategoriesSelected:function(){return this.speechCategories.length>0&&this.checkedCategories.length===this.speechCategories.length}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.eventType=e.$route.params.eventType,t.next=3,e.$store.dispatch("$getSpeechesData",e.eventType);case 3:e.speechesData=e.$store.state.speechesData;case 4:case"end":return t.stop()}}),t)})))()},methods:{metaInfo:function(){return{title:this.title,meta:[{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.intro},{hid:"description",name:"description",content:this.intro}]}},selectAllCategories:function(){this.isAllCategoriesSelected?this.checkedCategories=[]:this.checkedCategories=this.speechCategories},isCategoriesChecked:function(e){return this.checkedCategories.includes(e)}},head:function(){return this.metaInfo()}},x=(r(960),r(6)),component=Object(x.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("i18n-page-wrapper",{staticClass:"pt-24 pb-4",attrs:{"custom-y":""}},[r("core-h1",{attrs:{title:e.title}}),e._v(" "),r("p",{staticClass:"intro"},[e._v(e._s(e.intro))])],1),e._v(" "),"talks"===e.eventType?r("i18n-page-wrapper",{staticClass:"px-4 sm:px-8 md:px-16 lg:px-32 pb-6 lg:pb-12",attrs:{"custom-x":"","custom-y":""}},[r("p",{staticClass:"filterTitle"},[e._v("Filter")]),e._v(" "),r("core-hr",{staticClass:"filterHr",attrs:{"custom-margin-y":"","custom-color":""}}),e._v(" "),r("checkbox-collection",[r("core-checkbox",{key:"category_ALL",attrs:{id:"ALL",value:e.isAllCategoriesSelected,"is-checked":e.isAllCategoriesSelected,label:e.$t("categories.ALL")},on:{input:function(t){return e.selectAllCategories()}}}),e._v(" "),e._l(e.speechCategories,(function(t){return r("core-checkbox",{key:"category_"+t,attrs:{id:t,label:e.$t("categories."+t),"is-checked":e.isCategoriesChecked(t)},model:{value:e.checkedCategories,callback:function(t){e.checkedCategories=t},expression:"checkedCategories"}})}))],2)],1):e._e(),e._v(" "),r("i18n-page-wrapper",{staticClass:"px-2 sm:px-8 md:px-16 lg:px-32 pb-24",attrs:{"custom-x":"","custom-y":""}},[r("speech-card-collection",e._l(e.selectedSpeechesData,(function(e){return r("speech-card",{key:"speech_"+e.id,attrs:{id:e.id,title:e.title,category:e.category,speakers:e.speakers,lang:e.language,level:e.python_level,to:"/conference/"+e.event_type+"/"+e.id+"/"}})})),1)],1)],1)}),[],!1,null,"337d5f6e",null);t.default=component.exports;installComponents(component,{CoreCheckbox:r(692).default})},468:function(e,t,r){var content=r(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("534a74d2",content,!0,{sourceMap:!1})},469:function(e,t,r){var content=r(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("3e0ee7a2",content,!0,{sourceMap:!1})},470:function(e,t,r){"use strict";r(468)},471:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,"h1[data-v-fb2b20a4]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-fb2b20a4]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-fb2b20a4]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-fb2b20a4], p[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-fb2b20a4]{font-size:.625rem}ul[data-v-fb2b20a4]{margin-bottom:1.5rem}ul.list-disc[data-v-fb2b20a4]{padding-left:3rem}li[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:0.25rem}",""]),o.locals={},e.exports=o},472:function(e,t,r){"use strict";r.r(t);var o={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1}},computed:{classObject:function(){return{"w-full":!0,"px-8":!this.customX,"py-24":!this.customY,"sm:px-20":!this.customX,"md:px-32":!this.customX,"lg:px-32":!this.customX}}}},n=(r(470),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.classObject},[e._t("default")],2)}),[],!1,null,"fb2b20a4",null);t.default=component.exports},473:function(e,t,r){"use strict";r(469)},474:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,"h1[data-v-12ca906b]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.125rem;line-height:1.75rem;font-weight:600;line-height:2;margin-bottom:0.75rem}@media (min-width: 768px){h1[data-v-12ca906b]{margin-bottom:2.25rem}h1[data-v-12ca906b]{font-size:1.5rem;line-height:2rem}}h1[data-v-12ca906b]{color:#f3cc39}",""]),o.locals={},e.exports=o},475:function(e,t,r){"use strict";r.r(t);var o={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},n=(r(473),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-center font-serif"},[r("h1",{class:e.classObject},[e._v(e._s(e.title))])])}),[],!1,null,"12ca906b",null);t.default=component.exports},485:function(e,t,r){var content=r(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("5c4dd9ee",content,!0,{sourceMap:!1})},493:function(e,t,r){"use strict";r(485)},494:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,".hr[data-v-30d9ce9f]{width:100%;border:1px solid}.defaultColor[data-v-30d9ce9f]{color:#868686}",""]),o.locals={},e.exports=o},502:function(e,t,r){"use strict";r.r(t);var o={name:"CoreHr",props:{customColor:{type:Boolean,default:!1},customMarginY:{type:Boolean,default:!1}},computed:{classObject:function(){return{hr:!0,"mx-auto":!0,"my-8":!this.customMarginY,defaultColor:!this.customColor}}}},n=(r(493),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.classObject})}),[],!1,null,"30d9ce9f",null);t.default=component.exports},503:function(e,t,r){e.exports=r.p+"img/ENEN.26dc887.svg"},504:function(e,t,r){e.exports=r.p+"img/ZHEN.61dbcf2.svg"},505:function(e,t,r){e.exports=r.p+"img/ZHZH.35289a5.svg"},506:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bTEuMDg4IDMuNzNsLTEuNjUxLTIuNzNINy4zNDNMNS42OSAxNC4zMWgxMi41MTR6TTEwLjUwMyAzLjI2N2wuMDEzLS4wMmMuNjU5LS45OTcgMi4yMDUtLjk5NyAyLjg3Ny4wMmwzLjc3MyA2LjMzOEg2LjczbDMuNzczLTYuMzM4em0yLjA0My41MzFjLS4yNjItLjM5Ni0uOTIzLS4zOTktMS4xOS0uMDA4TDguNDg4IDguNjA2aDYuOTE4TDEyLjU0NyAzLjh6bTguMjY0IDEyLjkwNmwxLjc2NCAyLjM3YTEgMSAwIDAgMS0uODAyIDEuNTk3SDIuMThhMSAxIDAgMCAxLS44MS0xLjU4NWwxLjcxOC0yLjM4MkgyMC44MXoiIC8+Cjwvc3ZnPg=="},507:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptMS4xOTYuNTUyYy0uMDY0LS4wOTctLjI4MS0uMS0uMzU1LS4wMUw5LjM2OSA4LjEwN2g1LjE1OWwtMi4zOTktNC4wMzF6bTguNjggMTIuNjNsMS43NjUgMi4zN2ExIDEgMCAwIDEtLjgwMiAxLjU5N0gyLjE4YTEgMSAwIDAgMS0uODEtMS41ODVsMS43MTgtMi4zODJIMjAuODF6IiAvPgo8L3N2Zz4="},508:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptOS44NzcgMTMuMTgybDEuNzY0IDIuMzdhMSAxIDAgMCAxLS44MDIgMS41OTdIMi4xOGExIDEgMCAwIDEtLjgxLTEuNTg1bDEuNzE4LTIuMzgySDIwLjgxeiIgLz4KPC9zdmc+"},509:function(e,t){e.exports=function(e){return Set.prototype.values.call(e)}},548:function(e,t,r){var content=r(665);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("604f4a68",content,!0,{sourceMap:!1})},549:function(e,t,r){var content=r(667);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("2acbca10",content,!0,{sourceMap:!1})},550:function(e,t,r){var content=r(669);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("021648de",content,!0,{sourceMap:!1})},551:function(e,t,r){var content=r(671);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("8b06c87c",content,!0,{sourceMap:!1})},663:function(e,t,r){"use strict";var o=r(64);t.a=Object(o.a)({"en-us":{talks:{title:"Talks",intro:"The two conference days are packed with talks about Python by speakers from Taiwan and around the world. The talks will be either 15-, 30-, or 45-minute long. Three tracks of talks will be delivered simultaneously, all with different topics and difficulties. We suggest you to make a schedule beforehand, and choose what you want ot listen based on your interests. Many people take notes on the program schedule before the meeting so they don’t run to wrong places."},tutorials:{title:"Tutorials",intro:"Tutorial are events held as part of the main conference. They are 1.5 hours events held to help participants better understand talks during the conference, or get their hands on more Python applications."},languages:{ENEN:"English talk",ZHEN:"Chinese talk w. English slides",ZHZH:"Chinese talk w. Chinese slides",TAI:"Taiwanese Hokkien"},levels:{EXPERIENCED:"Experienced",INTERMEDIATE:"Intermediate",NOVICE:"Novice"},categories:{APPL:"Application",PRAC:"Best Practices & Patterns",COM:"Community",DB:"Databases",DATA:"Data Analysis",EDU:"Education",EMBED:"Embedded Systems",FIN:"FinTech",IOT:"Internet of Things",GAME:"Gaming",GRAPH:"Graphics",ML:"Machine Learning",NLP:"Natural Language Processing",CORE:"Python Core",TOOL:"Project Tooling",SCI:"Science",SEC:"Security",ADMIN:"Systems Administration",TEST:"Testing",WEB:"Web Frameworks",OTHER:"Other",ALL:"All"},terms:{day1:"Day 1",day2:"Day 2",bio:"Bio",note:"Note",intro:"Intro",abstract:"Abstract",description:"Description",video:"Video"}},"zh-hant":{talks:{title:"一般演講",intro:"演講為會期兩天最主要的活動，屆時將會有來自台灣各地與全球的講者分享他們在 Python 相關的發現。演講有 15、30、45 分鐘三種長度，每天都將有三軌議程同步進行，配合各個演講的難易度與類型，選擇自己有興趣的主題聆聽。許多人都會事先筆記想聽的議程，才不會跑錯地點。議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。"},tutorials:{title:"專業課程",intro:"專業課程（Tutotiral）是 PyCon Taiwan 的一部分，只要有購票都有資格參與；專業課程的時間為 90 分鐘。議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。"},languages:{ENEN:"英文演講",ZHEN:"中文演講/英文投影片",ZHZH:"中文演講/中文投影片",TAI:"臺灣閩南語"},levels:{EXPERIENCED:"進階",INTERMEDIATE:"中階",NOVICE:"入門"},categories:{APPL:"應用",PRAC:"最佳實踐與慣例",COM:"社群",DB:"資料庫",DATA:"資料分析",EDU:"教育",EMBED:"嵌入式系統",FIN:"金融科技",IOT:"物聯網",GAME:"遊戲",GRAPH:"圖像處理",ML:"機器學習",NLP:"自然語言處理",CORE:"Python 核心",TOOL:"專案建置工具",SCI:"科學",SEC:"資訊安全",ADMIN:"系統管理",TEST:"測試",WEB:"網站框架",OTHER:"其他",ALL:"全選"},terms:{day1:"第一天",day2:"第二天",bio:"講者",note:"共筆",intro:"介紹",abstract:"摘要",description:"說明",video:"影片"}}})},664:function(e,t,r){"use strict";r(548)},665:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,".checkbox[data-v-f01c747e]{border-color:#c2a53a;color:#c2a53a}.checkbox.checked[data-v-f01c747e]{background:#c2a53a;color:#121023}",""]),o.locals={},e.exports=o},666:function(e,t,r){"use strict";r(549)},667:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,".checkboxCollection[data-v-04a7b8cf]{display:flex;flex-wrap:wrap}",""]),o.locals={},e.exports=o},668:function(e,t,r){"use strict";r(550)},669:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,".speechCard[data-v-536f4ae2]{position:relative;display:inline-flex;width:100%;flex-direction:column;overflow-wrap:break-word;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;min-height:180px;border-radius:24px;border:2px solid #c2a53a;box-shadow:6px 6px 0 #c2a53a;padding:15px}@media (min-width:415px){.speechCard[data-v-536f4ae2]{min-height:362px;padding-left:30px;padding-bottom:38px;padding-right:30px;padding-top:34px}}.speechCard[data-v-536f4ae2]:hover{background-color:#e6ba17}.speechCard__speakerThumbnails[data-v-536f4ae2]{display:flex}.speechCard__speakerThumbnail[data-v-536f4ae2]{height:1.5rem;width:1.5rem}@media (min-width: 640px){.speechCard__speakerThumbnail[data-v-536f4ae2]{height:2.75rem}.speechCard__speakerThumbnail[data-v-536f4ae2]{width:2.75rem}}.speechCard__speakerThumbnail[data-v-536f4ae2]{margin-top:0.125rem;margin-bottom:0.125rem;margin-right:0.25rem}@media (min-width: 640px){.speechCard__speakerThumbnail[data-v-536f4ae2]{margin-top:0.5rem;margin-bottom:0.5rem}}.speechCard__speakerThumbnail img[data-v-536f4ae2]{border-radius:9999px;-o-object-fit:cover;object-fit:cover;height:100%}.speechCard__sub[data-v-536f4ae2]{display:flex;flex-direction:column;justify-content:space-between}@media (min-width: 768px){.speechCard__sub[data-v-536f4ae2]{flex-direction:row}}.speechCard__sub[data-v-536f4ae2]{margin-top:0.125rem;margin-bottom:0.125rem}@media (min-width: 640px){.speechCard__sub[data-v-536f4ae2]{margin-top:0.5rem;margin-bottom:0.5rem}}.speechCard__sub[data-v-536f4ae2]{color:#c2a53a}.speechCard__sub .speechCard__icon[data-v-536f4ae2]{flex-direction:row;height:13px}@media (min-width:415px){.speechCard__sub .speechCard__icon[data-v-536f4ae2]{height:26px}}.speechCard__sub .speechCard__icon[data-v-536f4ae2]{filter:invert(65%) sepia(76%) saturate(366%) hue-rotate(9deg) brightness(87%) contrast(88%)}.speechCard__sub img[data-v-536f4ae2]{position:relative;top:-0.5rem;display:inline;height:100%}@media (min-width: 640px){.speechCard__sub img[data-v-536f4ae2]{top:0px}}.speechCard:hover>.speechCard__sub[data-v-536f4ae2]{color:#000}.speechCard:hover>.speechCard__sub .speechCard__icon[data-v-536f4ae2]{filter:brightness(0)}.speechCard__speakerNames[data-v-536f4ae2]{font-family:Noto Serif TC, -apple-system, serif;font-weight:700;transform-origin:top left;--tw-scale-x:.75;--tw-scale-y:.75;transform:var(--tw-transform);font-size:12px}@media (min-width:415px){.speechCard__speakerNames[data-v-536f4ae2]{--tw-scale-x:1;--tw-scale-y:1;transform:var(--tw-transform)}.speechCard__speakerNames[data-v-536f4ae2]{font-size:14px}}.speechCard__title[data-v-536f4ae2]{margin-top:0.5rem;margin-bottom:2rem;font-family:Noto Serif TC, -apple-system, serif;font-weight:700;font-size:14px;line-height:30px;color:#c2a53a}@media (min-width:415px){.speechCard__title[data-v-536f4ae2]{overflow-wrap:normal;word-break:normal}.speechCard__title[data-v-536f4ae2]{font-size:24px;line-height:36px}}.speechCard:hover>.speechCard__title[data-v-536f4ae2]{color:#000}.speechCard__category[data-v-536f4ae2]{position:absolute;text-align:center;font-family:Noto Serif TC, -apple-system, serif;transform-origin:bottom left;--tw-scale-x:.75;--tw-scale-y:.75;transform:var(--tw-transform);color:#c2a53a;border:2px solid #c2a53a;border-radius:8px;font-weight:600;font-size:12px;padding:4px 8px;min-width:60px;bottom:10px}@media (min-width:415px){.speechCard__category[data-v-536f4ae2]{--tw-scale-x:1;--tw-scale-y:1;transform:var(--tw-transform)}.speechCard__category[data-v-536f4ae2]{border-radius:12px;font-size:12px;padding-left:14px;padding-bottom:7px;padding-right:14px;padding-top:7px;min-width:100px;bottom:30px}}.speechCard:hover>.speechCard__category[data-v-536f4ae2]{color:#000;border:2px solid #000}",""]),o.locals={},e.exports=o},670:function(e,t,r){"use strict";r(551)},671:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,".speechCardCollection[data-v-26b174b2]{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));justify-items:center}@media (min-width: 640px){.speechCardCollection[data-v-26b174b2]{grid-template-columns:repeat(3, minmax(0, 1fr))}}.speechCardCollection[data-v-26b174b2]{margin:0 12px;-moz-column-gap:24px;column-gap:24px;row-gap:32px}@media (min-width:415px){.speechCardCollection[data-v-26b174b2]{-moz-column-gap:20px;column-gap:20px;row-gap:44px}}",""]),o.locals={},e.exports=o},692:function(e,t,r){"use strict";r.r(t);var o=r(75),n=(r(45),r(52),r(51),r(30),{name:"CoreCheckbox",props:{id:{type:String,default:""},label:{type:String,default:""},value:{type:[Array,Boolean],default:function(){return[]}},isChecked:{type:Boolean,default:!1}},methods:{toggleCheckbox:function(){var e=this;if("boolean"==typeof this.value)this.$emit("input",!this.value);else{var t=[];t=this.value.includes(this.id)?Object(o.a)(this.value.filter((function(t){return t!==e.id}))):[].concat(Object(o.a)(this.value),[this.id]),this.$emit("input",Object(o.a)(t))}}}}),c=(r(664),r(6)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"\n        checkbox\n        mt-3\n        ml-2\n        py-2\n        px-3\n        border\n        rounded-lg\n        transition-all\n        cursor-pointer\n        text-xs\n        lg:text-base\n    ",class:{checked:e.isChecked}},[r("input",{staticClass:"hidden",attrs:{id:e.id,type:"checkbox"},domProps:{value:e.id,checked:e.isChecked},on:{change:function(t){return e.toggleCheckbox()}}}),e._v(" "),r("fa",{staticClass:"mr-2 lg:mr-6",attrs:{icon:e.isChecked?["far","check-square"]:["far","square"],"aria-hidden":"true"}}),e._v("\n    "+e._s(e.label)+"\n")],1)}),[],!1,null,"f01c747e",null);t.default=component.exports},717:function(e,t,r){var content=r(961);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("77ab2485",content,!0,{sourceMap:!1})},720:function(e,t,r){"use strict";r.r(t);r(265);var o=r(64),n={i18n:Object(o.a)({"en-us":{category:{APPL:"Application",PRAC:"Best Practices & Patterns",COM:"Community",DB:"Databases",DATA:"Data Analysis",EDU:"Education",EMBED:"Embedded Systems",FIN:"FinTech",IOT:"Internet of Things",GAME:"Gaming",GRAPH:"Graphics",ML:"Machine Learning",NLP:"Natural Language Processing",CORE:"Python Core",TOOL:"Project Tooling",SCI:"Science",SEC:"Security",ADMIN:"Systems Administration",TEST:"Testing",WEB:"Web Frameworks",OTHER:"Other"}},"zh-hant":{category:{APPL:"應用",PRAC:"最佳實踐與慣例",COM:"社群",DB:"資料庫",DATA:"資料分析",EDU:"教育",EMBED:"嵌入式系統",FIN:"金融科技",IOT:"物聯網",GAME:"遊戲",GRAPH:"圖像處理",ML:"機器學習",NLP:"自然語言處理",CORE:"Python 核心",TOOL:"專案建置工具",SCI:"科學",SEC:"資訊安全",ADMIN:"系統管理",TEST:"測試",WEB:"網站框架",OTHER:"其他"}}}),name:"SpeechCard",components:{LocaleLink:r(34).b},props:{id:{type:Number,default:null},title:{type:String,default:""},category:{type:String,default:""},speakers:{type:Array,default:function(){return[]}},shouldShow:{type:Boolean,default:!0},level:{type:String,default:null},lang:{type:String,default:null},to:{type:String,default:"/"}},data:function(){return{icon:{lang:{ENEN:r(503),ZHEN:r(504),ZHZH:r(505)},level:{NOVICE:r(506),INTERMEDIATE:r(507),EXPERIENCED:r(508)}}}}},c=(r(668),r(6)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("locale-link",{directives:[{name:"show",rawName:"v-show",value:e.shouldShow,expression:"shouldShow"}],staticClass:"speechCard",attrs:{to:e.to}},[r("div",{staticClass:"speechCard__speakerThumbnails"},e._l(e.speakers,(function(e,i){return r("div",{key:"speech_card_speaker_thumbnail_"+i,staticClass:"speechCard__speakerThumbnail"},[r("img",{attrs:{src:e.thumbnail_url,alt:e.name}})])})),0),e._v(" "),r("div",{staticClass:"speechCard__sub"},[r("p",{staticClass:"speechCard__speakerNames"},[e._v("\n            "+e._s(e.speakers.map((function(e){return e.name})).join(" • "))+"\n        ")]),e._v(" "),r("div",{staticClass:"speechCard__icon"},[r("img",{attrs:{src:e.icon.level[e.level]}}),e._v(" "),r("img",{attrs:{src:e.icon.lang[e.lang]}})])]),e._v(" "),r("div",{staticClass:"speechCard__title"},[e._v(e._s(e.title))]),e._v(" "),r("div",{staticClass:"speechCard__category"},[e._v(e._s(e.$t("category."+e.category)))])])}),[],!1,null,"536f4ae2",null);t.default=component.exports},724:function(e,t,r){"use strict";r.r(t);var o={name:"CheckboxCollection"},n=(r(666),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"checkboxCollection"},[e._t("default")],2)}),[],!1,null,"04a7b8cf",null);t.default=component.exports},725:function(e,t,r){"use strict";r.r(t);var o={name:"SpeechCardCollection"},n=(r(670),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"speechCardCollection"},[e._t("default")],2)}),[],!1,null,"26b174b2",null);t.default=component.exports},942:function(e,t,r){"use strict";var o=r(267),n=r(268);e.exports=o("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},943:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(944);o({target:"Set",proto:!0,real:!0,forced:n},{addAll:function(){return c.apply(this,arguments)}})},944:function(e,t,r){"use strict";var o=r(7),n=r(25);e.exports=function(){for(var e=o(this),t=n(e.add),r=0,c=arguments.length;r<c;r++)t.call(e,arguments[r]);return e}},945:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(269);o({target:"Set",proto:!0,real:!0,forced:n},{deleteAll:function(){return c.apply(this,arguments)}})},946:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(36),l=r(7),d=r(25),f=r(65),h=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{difference:function(e){var t=l(this),r=new(f(t,c("Set")))(t),o=d(r.delete);return h(e,(function(e){o.call(r,e)})),r}})},947:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(7),l=r(33),d=r(509),f=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{every:function(e){var t=c(this),r=d(t),o=l(e,arguments.length>1?arguments[1]:void 0,3);return!f(r,(function(e,r){if(!o(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},948:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(36),l=r(7),d=r(25),f=r(33),h=r(65),m=r(509),v=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{filter:function(e){var t=l(this),r=m(t),o=f(e,arguments.length>1?arguments[1]:void 0,3),n=new(h(t,c("Set"))),C=d(n.add);return v(r,(function(e){o(e,e,t)&&C.call(n,e)}),{IS_ITERATOR:!0}),n}})},949:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(7),l=r(33),d=r(509),f=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{find:function(e){var t=c(this),r=d(t),o=l(e,arguments.length>1?arguments[1]:void 0,3);return f(r,(function(e,r){if(o(e,e,t))return r(e)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},950:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(36),l=r(7),d=r(25),f=r(65),h=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{intersection:function(e){var t=l(this),r=new(f(t,c("Set"))),o=d(t.has),n=d(r.add);return h(e,(function(e){o.call(t,e)&&n.call(r,e)})),r}})},951:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(7),l=r(25),d=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{isDisjointFrom:function(e){var t=c(this),r=l(t.has);return!d(e,(function(e,o){if(!0===r.call(t,e))return o()}),{INTERRUPTED:!0}).stopped}})},952:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(36),l=r(7),d=r(25),f=r(266),h=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{isSubsetOf:function(e){var t=f(this),r=l(e),o=r.has;return"function"!=typeof o&&(r=new(c("Set"))(e),o=d(r.has)),!h(t,(function(e,t){if(!1===o.call(r,e))return t()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},953:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(7),l=r(25),d=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{isSupersetOf:function(e){var t=c(this),r=l(t.has);return!d(e,(function(e,o){if(!1===r.call(t,e))return o()}),{INTERRUPTED:!0}).stopped}})},954:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(7),l=r(509),d=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{join:function(e){var t=c(this),r=l(t),o=void 0===e?",":String(e),n=[];return d(r,n.push,{that:n,IS_ITERATOR:!0}),n.join(o)}})},955:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(36),l=r(7),d=r(25),f=r(33),h=r(65),m=r(509),v=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{map:function(e){var t=l(this),r=m(t),o=f(e,arguments.length>1?arguments[1]:void 0,3),n=new(h(t,c("Set"))),C=d(n.add);return v(r,(function(e){C.call(n,o(e,e,t))}),{IS_ITERATOR:!0}),n}})},956:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(7),l=r(25),d=r(509),f=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{reduce:function(e){var t=c(this),r=d(t),o=arguments.length<2,n=o?void 0:arguments[1];if(l(e),f(r,(function(r){o?(o=!1,n=r):n=e(n,r,r,t)}),{IS_ITERATOR:!0}),o)throw TypeError("Reduce of empty set with no initial value");return n}})},957:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(7),l=r(33),d=r(509),f=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{some:function(e){var t=c(this),r=d(t),o=l(e,arguments.length>1?arguments[1]:void 0,3);return f(r,(function(e,r){if(o(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},958:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(36),l=r(7),d=r(25),f=r(65),h=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{symmetricDifference:function(e){var t=l(this),r=new(f(t,c("Set")))(t),o=d(r.delete),n=d(r.add);return h(e,(function(e){o.call(r,e)||n.call(r,e)})),r}})},959:function(e,t,r){"use strict";var o=r(2),n=r(15),c=r(36),l=r(7),d=r(25),f=r(65),h=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{union:function(e){var t=l(this),r=new(f(t,c("Set")))(t);return h(e,d(r.add),{that:r}),r}})},960:function(e,t,r){"use strict";r(717)},961:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,".intro[data-v-337d5f6e]{margin-bottom:2rem;font-size:0.75rem;line-height:1rem}@media (min-width: 768px){.intro[data-v-337d5f6e]{font-size:0.875rem;line-height:1.25rem}}.intro[data-v-337d5f6e]{line-height:33px}.filterTitle[data-v-337d5f6e]{margin-left:0.5rem;font-size:0.875rem;line-height:1.25rem}@media (min-width: 768px){.filterTitle[data-v-337d5f6e]{font-size:1rem;line-height:1.5rem}}.filterTitle[data-v-337d5f6e]{color:#f3cc39}.filterHr[data-v-337d5f6e]{margin-top:0.5rem;margin-bottom:0.5rem;color:#f3cc39}",""]),o.locals={},e.exports=o}}]);