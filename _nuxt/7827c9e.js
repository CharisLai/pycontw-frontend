(window.webpackJsonp=window.webpackJsonp||[]).push([[59,9,15,16,17],{1008:function(t,e,r){"use strict";r.r(e);var n=r(544),o=r(491),l=r(492),d=r(507),c=r(508),m=r(75),h={i18n:n.a,name:"PageConferenceWarmupsPyhug",components:{I18nPageWrapper:o.default,CoreH1:l.default,Tab:d.default,Tabs:c.default,ExtLink:m.default},data:function(){return{title:"PyCon TW x PyHug Meetup",schedules:[["13:30 - 13:35","活動開場"],["13:35 - 13:50","主持人開場與社群介紹－PyHUG"],["13:50 - 14:30","講者分享: Inès"],["14:30 - 14:35","休息時間"],["14:35 - 15:05","講者分享: Tina Hsu"],["15:05 - 15:10","休息時間"],["15:10 - 15:40","講者分享: 林明憲"],["15:40 - 15:45","休息時間"],["15:45 - 16:30","講者分享: Chin-Yun Yu"],["16:30 - 16:35","活動結尾"],["16:35 - 17:45","自由交流 at Gather.Town"]],speeches:[{title:"How deep learning helps astronomers on observation data - \nCNN for classifying galaxy spectra",speakers:[{name:"Inès",bio:"Ciao, I am a PhD student in the University of Rome La Sapienza and I will get my PhD degree soon.",photo:r(644)}],description:"了解不同類型的西佛星系的可以幫助我們更了解星系的演化與形成，然而這類星系光譜型態很複雜，造成天文學家花費很多時間在光譜的分類上，我們利用 pytorch 建立一個一維 Convolution Neural Network (CNN) 模型作為光譜分類器，使用西佛 1.9 與 2.0 星系的光譜給模型學習辨認兩者光譜的差異，訓練後的模型可以分辨出西佛 1.9 星系的精確率高達八成，也能從西佛 2.0 星系的樣本裡挑出額外的西佛 1.9 星系，這額外的西佛 1.9 星系可以增加訓練模型的樣本數，再次訓練後的模型分辨出西佛1.9星系的精確率提高至九成。\n\n使用CNN模型可以比傳統的方法更快更準確地區分出這兩種類型的西佛星系，也能收集到比以前多的西佛 1.9 星系的光譜，這些西佛 1.9 星系可以提供天文學家關於宿主星系型態、黑洞吸積 (accretion) 的環境以及黑洞質量，進而了解星系形成演化與其黑洞的關係。"},{title:"Machine Learning Applied to Stock Index Performance Enhancement",speakers:[{name:"Tina Hsu",bio:"Tina， 喜愛使用 Python 來解決金融問題，目前經營 blog 以及 YouTube 頻道 pyinvest。",photo:r(871)}],description:'近年來，指數化投資愈來愈盛行，策略型投資如 Smart Beta 更是受到市場青睞。國內外機構法人不再安於傳統 Top down 的投資方式。將部分資產從以往重視區域曝險、國家曝險或產業別曝險，推進為因子曝險!為 Smart Beta 投資燃起一股旋風!\n\n然而，從回測數據中清楚顯示，這些聰明因子雖然長期而言能夠帶來風險溢酬，但在不同的市場環境表現卻有相當大的差異。比方說動能因子在牛市表現很好，在熊市中表現卻非常差。 究竟什麼時候該採用什麼因子，一直是一個深受重視的議題。另外，在量化投資領域中，除了基本面外，技術面與籌碼面也都相當受到投資人的重視，然而不同的訊號時常會帶來矛盾。股價的複雜度及非線性造成股價難以預測，讓我們不禁想到，既然AI這麼聰明，是否能夠幫我們解決投資上的難題?\n\n很榮幸本篇文章今年初被刊登在 Journal of Banking and Financial Technology，本次演講將與大家詳細分享裡頭的內容，包含特徵建構、模型建構、回測以及績效評估等等。希望本次的演講能夠摒除大家對"機器學習好複雜"的刻板印象，並且激發各位動手打造屬於自己的 AI 選股系統。',link:"https://link.springer.com/article/10.1007%2Fs42786-021-00025-6"},{title:"The 2020 CVPR Workshop of Low-Power Computer Vision Challenge 參加經驗分享",speakers:[{name:"林明憲",bio:"wiki: 林明憲，前台灣棒球選手…(誤).正確:專長為軟硬體共同設計，目前專注於Deep Learning和Machine Learning於影像加速的應用並用FPGA實現",photo:r(644)}],description:"CVPR 被認為是計算機視覺領域最重要的會議之一的年度會議。與這些會議對應的還有很多計算機視覺演算法比賽，這些比賽代表著新興、或實用、或有趣的、或被忽略的研究方向。當中 Low Power Computer Vision (LPCV) Challenge 是一項年度競賽，旨在提高計算機視覺的能效，以便在資源緊張的系統上運行。將分享如何這些比賽過程的策略及技巧，甚至失敗經驗過程中，提升個人能力"},{title:"Implementing NMF in PyTorch Framework: An Autograd Approach",speakers:[{name:"Chin-Yun Yu",bio:"I’m a Software/Algorithm Engineer, and an independent Researcher. I’m interesting in Deep Learnin/Machine Learning/DSP/MIR.",photo:r(872)}],description:"NMF (Non-negative Matrix Factorization, 又稱非負矩陣分解)，是在機器學習中，對資料做降維相當有用的一種方式，也常用在資料分析、聲源分離等應用。隨著近年來深度學習的興起，開始有研究試圖將類似的概念應用到 NMF，做出類似的多層深度模型。但因為 NMF 參數非負的特性，將 NMF 的參數更新方式推廣到多層且結構複雜的模型並非易事。本演講將會分享，如何運用深度學習套件 PyTorch 的自動微分機制，重新解析 NMF 的目標函數，將NMF的乘法參數更新方式，推廣應用到任意的 NMF 模型。"}]}},head:function(){return{title:this.title,meta:[{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.intro},{hid:"description",name:"description",content:this.intro}]}}},f=(r(873),r(4)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("i18n-page-wrapper",{staticClass:"px-8 sm:px-10 md:px-32 lg:px-60",attrs:{"custom-x":""}},[r("core-h1",{attrs:{title:"PyCon TW x PyHug Meetup",center:""}}),t._v(" "),r("p",{staticClass:"font-serif font-black"},[r("ext-link",{attrs:{href:"https://www.meetup.com/pythonhug/",highlight:""}},[t._v("PyHUG")])],1),t._v(" "),r("p",{staticClass:"intro"},[t._v("\n        歡迎來到\n        "),r("ext-link",{attrs:{href:"https://www.meetup.com/pythonhug/",highlight:"",underline:""}},[t._v("PyHUG")]),t._v("。我們是一群活動於新竹周邊的 Python 程式員。\n        我們會定期舉辦技術討論與程式設計的聚會。非常歡迎你加入我們！\n    ")],1),t._v(" "),r("ul",{staticClass:"list-disc"},[r("li",{staticClass:"listTitle"},[t._v("活動時間：")]),t._v(" "),r("li",{staticClass:"list-none"},[t._v("2021/09/25 13:30-17:45")]),t._v(" "),r("li",{staticClass:"listTitle"},[t._v("活動形式：")]),t._v(" "),r("li",{staticClass:"list-none"},[t._v("\n            於 Gather Town 中進行活動：\n            "),r("ext-link",{attrs:{href:"https://gather.town/app/pp5WuaEQ2CChMMxy/PyCon%20TW%20x%20Local%20Meetup",highlight:"",underline:""}},[t._v("點我進入空間")])],1),t._v(" "),r("li",{staticClass:"list-none"},[t._v("\n            線上共同筆記：\n            "),r("ext-link",{attrs:{href:"https://hackmd.io/7TY3-Z-VRGi50C5sC7ONqg",highlight:"",underline:""}},[t._v("點我看共筆")])],1),t._v(" "),r("li",{staticClass:"list-none"},[t._v("YouTube 活動錄影： 將於活動後釋出")])]),t._v(" "),r("div",{staticClass:"scheduleSection"},[r("h2",[t._v("活動流程")]),t._v(" "),r("div",{staticClass:"table w-full mt-4"},[r("div",{staticClass:"table-row-group w-full"},t._l(t.schedules,(function(e,n){return r("div",{key:"item_"+n,staticClass:"table-row font-serif"},[r("div",{staticClass:"table-cell w-5/12 text-right pb-4"},[t._v("\n                        "+t._s(e[0])+"\n                    ")]),t._v(" "),r("div",{staticClass:"table-cell w-1/12"}),t._v(" "),r("div",{staticClass:"table-cell w-6/12"},[t._v("\n                        "+t._s(e[1])+"\n                    ")])])})),0)])]),t._v(" "),r("h2",[t._v("講者介紹")]),t._v(" "),t._l(t.speeches,(function(e,i){return r("div",{key:"pyhug_speech_"+i},[r("div",{staticClass:"speakers"},t._l(e.speakers,(function(e,n){return r("div",{key:"pyhug_details_speaker_"+n,staticClass:"speakerContainer"},[r("div",{staticClass:"speakerThumbnail"},[r("img",{attrs:{src:e.photo,alt:e.name}})]),t._v(" "),r("p",{staticClass:"speakerName"},[t._v(t._s(e.name))])])})),0),t._v(" "),r("p",{staticClass:"speechTitle"},[t._v(t._s(e.title))]),t._v(" "),r("tabs",{staticClass:"tabs"},[r("tab",{attrs:{title:t.$t("terms.speech")}},[r("div",{staticClass:"whitespace-pre-line break-words"},[r("p",{staticClass:"tabParagraph"},[t._v("\n                        "+t._s(e.description)+"\n                    ")]),t._v(" "),e.link?r("ext-link",{attrs:{href:e.link,highlight:""}},[t._v("文章連結")]):t._e()],1)]),t._v(" "),r("tab",{attrs:{title:t.$t("terms.bio")}},t._l(e.speakers,(function(e,n){return r("div",{key:"pyhug_tab_speaker_"+n,staticClass:"mb-4 whitespace-pre-line"},[r("div",{staticClass:"whitespace-pre-line"},[r("p",{staticClass:"tabParagraphTitle"},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._v(" "),r("p",{staticClass:"tabParagraph"},[t._v(t._s(e.bio))])])])})),0)],1)],1)}))],2)}),[],!1,null,"7630dfb7",null);e.default=component.exports},485:function(t,e,r){var content=r(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("098c8dc7",content,!0,{sourceMap:!1})},486:function(t,e,r){var content=r(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("13ffce30",content,!0,{sourceMap:!1})},487:function(t,e,r){"use strict";r(485)},488:function(t,e,r){var n=r(15),o=r(270),l=r(271),d=r(272),c=r(273),m=r(274),h=r(275),f=r(276),v=n((function(i){return i[1]})),w=o(l),x=o(d),_=o(c),y=o(m),C=o(h),k=o(f);v.push([t.i,"h1[data-v-cb0ee938]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-cb0ee938]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-cb0ee938]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-cb0ee938], p[data-v-cb0ee938]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-cb0ee938]{font-size:.625rem}ul[data-v-cb0ee938]{margin-bottom:1.5rem}ul.list-disc[data-v-cb0ee938]{padding-left:3rem}li[data-v-cb0ee938]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-cb0ee938]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:4% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}@media (min-width: 1194px){.page-wrapper[data-v-cb0ee938]{background-image:url("+w+"), url("+x+"), url("+_+"), url("+y+"), url("+C+"), url("+k+"), url("+w+"), url("+x+"), url("+_+"), url("+y+"), url("+C+"), url("+k+")}}",""]),v.locals={},t.exports=v},489:function(t,e,r){"use strict";r(486)},490:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,"h1[data-v-8f39343a]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(224, 153, 225, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 834px){h1[data-v-8f39343a]{margin-bottom:2.25rem}h1[data-v-8f39343a]{font-size:1.5rem;line-height:2rem}}",""]),n.locals={},t.exports=n},491:function(t,e,r){"use strict";r.r(e);var n={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1}},computed:{classObject:function(){return{"py-8":!0,"md:py-20":!0,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}}}},o=(r(487),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-wrapper"},[r("div",{class:t.classObject},[t._t("default")],2)])}),[],!1,null,"cb0ee938",null);e.default=component.exports},492:function(t,e,r){"use strict";r.r(e);var n={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},o=(r(489),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center font-serif"},[r("h1",{class:t.classObject},[t._v(t._s(t.title))])])}),[],!1,null,"8f39343a",null);e.default=component.exports},501:function(t,e,r){var content=r(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("3258dd4a",content,!0,{sourceMap:!1})},505:function(t,e,r){"use strict";r(501)},506:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".tabs__headers[data-v-31ef7a08]{margin-left:0.75rem;font-family:Noto Serif TC, -apple-system, serif}.tabs__headers>.header[data-v-31ef7a08]{margin-left:0.25rem;display:inline-block;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;font-size:0.875rem;line-height:1.25rem;font-weight:900}@media (min-width: 834px){.tabs__headers>.header[data-v-31ef7a08]{font-size:1rem;line-height:1.5rem}}.tabs__headers>.header[data-v-31ef7a08]{cursor:pointer;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgba(195, 134, 174, var(--tw-border-opacity));background-color:transparent;color:#e6ba17;min-width:20%}@media (min-width:767px){.tabs__headers>.header[data-v-31ef7a08]{min-width:110px}}.tabs__headers>.header.-selected[data-v-31ef7a08]{--tw-text-opacity:1;color:rgba(18, 16, 35, var(--tw-text-opacity));background:#e6ba17}.tab[data-v-31ef7a08]{display:inline-block;width:100%;border-radius:1rem;border-width:2px;--tw-border-opacity:1;border-color:rgba(195, 134, 174, var(--tw-border-opacity));--tw-bg-opacity:0;font-size:0.75rem;line-height:1rem;--tw-shadow:6px 6px 0 #c386ae;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}@media (min-width: 834px){.tab[data-v-31ef7a08]{font-size:0.875rem;line-height:1.25rem}}.tab[data-v-31ef7a08]{line-height:29px;color:#c7c7c7;padding:20px}",""]),n.locals={},t.exports=n},507:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,default:"Tab"}},data:function(){return{isActive:!0}}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"tab"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},508:function(t,e,r){"use strict";r.r(e);r(28);var n={data:function(){return{selectedIndex:0,tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){var t=this;this.selectTab(0),this.$root.$on("initTabs",(function(){t.selectTab(0)}))},methods:{selectTab:function(i){this.selectedIndex=i,this.tabs.forEach((function(t,e){t.isActive=e===i}))},isSelectedIndex:function(i){return i===this.selectedIndex}}},o=(r(505),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"tabs__headers"},t._l(t.tabs,(function(e,n){return r("li",{key:e.title,class:{header:!0,"-selected":t.isSelectedIndex(n)},on:{click:function(e){return t.selectTab(n)}}},[t._v("\n            "+t._s(e.title)+"\n        ")])})),0),t._v(" "),t._t("default")],2)}),[],!1,null,"31ef7a08",null);e.default=component.exports},544:function(t,e,r){"use strict";var n=r(64);e.a=Object(n.a)({"en-us":{terms:{bio:"Bio",speech:"Speech"}},"zh-hant":{terms:{bio:"講者介紹",speech:"演講"}}})},644:function(t,e,r){t.exports=r.p+"img/dummy.b84a3b2.svg"},645:function(t,e,r){var content=r(874);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("10d9189e",content,!0,{sourceMap:!1})},871:function(t,e,r){t.exports=r.p+"img/tina.cd485db.png"},872:function(t,e,r){t.exports=r.p+"img/chun-yun-yu.5fb04ec.png"},873:function(t,e,r){"use strict";r(645)},874:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".intro[data-v-7630dfb7]{margin-bottom:2rem;font-family:Noto Serif TC, -apple-system, serif;font-size:0.75rem;line-height:1rem}@media (min-width: 834px){.intro[data-v-7630dfb7]{font-size:0.875rem;line-height:1.25rem}}.intro[data-v-7630dfb7]{line-height:33px}ul.list-disc[data-v-7630dfb7]{font-family:Noto Serif TC, -apple-system, serif;font-size:0.75rem;line-height:1rem}@media (min-width: 834px){ul.list-disc[data-v-7630dfb7]{font-size:0.875rem;line-height:1.25rem}}ul.list-disc[data-v-7630dfb7]{padding-left:20px!important}.listTitle[data-v-7630dfb7]{font-size:1rem;line-height:1.5rem;font-weight:700;--tw-text-opacity:1;color:rgba(195, 134, 174, var(--tw-text-opacity))}h2[data-v-7630dfb7]{margin-left:auto;margin-right:auto;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:900;--tw-text-opacity:1;color:rgba(195, 134, 174, var(--tw-text-opacity));margin-top:.5rem!important;margin-bottom:0!important;font-size:24px}.scheduleSection[data-v-7630dfb7]{margin-bottom:3rem;display:inline-block;font-size:0.75rem;line-height:1rem}@media (min-width: 834px){.scheduleSection[data-v-7630dfb7]{margin-bottom:6rem}.scheduleSection[data-v-7630dfb7]{font-size:0.875rem;line-height:1.25rem}}.scheduleSection[data-v-7630dfb7]{padding-left:0.25rem;padding-right:0.25rem;padding-top:0.5rem;padding-bottom:0.5rem}@media (min-width: 600px){.scheduleSection[data-v-7630dfb7]{padding-left:0.5rem;padding-right:0.5rem}.scheduleSection[data-v-7630dfb7]{padding-top:1rem;padding-bottom:1rem}}@media (min-width: 834px){.scheduleSection[data-v-7630dfb7]{padding-left:1rem;padding-right:1rem}}.scheduleSection[data-v-7630dfb7]{width:100%;border-radius:1rem;border-width:2px;--tw-border-opacity:1;border-color:rgba(195, 134, 174, var(--tw-border-opacity));--tw-bg-opacity:0;--tw-shadow:6px 6px 0 #c386ae;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);line-height:29px;color:#c7c7c7}.speakers[data-v-7630dfb7]{margin-top:4rem;display:flex;justify-content:center}.speakerContainer[data-v-7630dfb7]{display:flex;flex-direction:column}.speakerThumbnail[data-v-7630dfb7]{margin-left:0.75rem;margin-right:0.75rem;margin-bottom:1rem;height:6rem;width:6rem}@media (min-width: 600px){.speakerThumbnail[data-v-7630dfb7]{height:8rem}.speakerThumbnail[data-v-7630dfb7]{width:8rem}}.speakerThumbnail img[data-v-7630dfb7]{border-radius:9999px;-o-object-fit:cover;object-fit:cover;height:100%}.speakerName[data-v-7630dfb7]{margin-bottom:1rem;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:900;--tw-text-opacity:1;color:rgba(195, 134, 174, var(--tw-text-opacity))}.speechTitle[data-v-7630dfb7]{margin-bottom:1.75rem;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:900;--tw-text-opacity:1;color:rgba(195, 134, 174, var(--tw-text-opacity))}.tabs[data-v-7630dfb7]{margin-bottom:1rem;width:100%}@media (min-width: 834px){.tabs[data-v-7630dfb7]{margin-bottom:4rem}}.tabParagraphTitle[data-v-7630dfb7]{margin-bottom:0.5rem;font-family:Noto Serif TC, -apple-system, serif;font-weight:700;color:#e6ba17}.tabParagraph[data-v-7630dfb7]{margin-bottom:0.5rem;font-family:Noto Serif TC, -apple-system, serif}",""]),n.locals={},t.exports=n}}]);