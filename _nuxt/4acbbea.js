(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4,6],{476:function(t,e,n){var content=n(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("dbf9aa7a",content,!0,{sourceMap:!1})},477:function(t,e,n){"use strict";var o=n(2),l=n(479);o({target:"String",proto:!0,forced:n(480)("small")},{small:function(){return l(this,"small","","")}})},479:function(t,e,n){var o=n(42),l=n(20),r=/"/g;t.exports=function(t,e,n,d){var c=l(o(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+l(d).replace(r,"&quot;")+'"'),f+">"+c+"</"+e+">"}},480:function(t,e,n){var o=n(4);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},482:function(t,e,n){"use strict";n(476)},483:function(t,e,n){var o=n(18)((function(i){return i[1]}));o.push([t.i,".core-button[data-v-14a1fa19]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;outline:none;background-color:transparent}.core-button.--is-link>a[data-v-14a1fa19],.core-button[data-v-14a1fa19]:not(.--is-link){display:inline-flex;align-items:center;justify-content:center;line-height:1.25rem;border-radius:5px;text-transform:uppercase;outline:none}.core-button.--large.--is-link>a[data-v-14a1fa19], .core-button.--large[data-v-14a1fa19]:not(.--is-link){height:5rem;border-width:4px;padding-left:4rem;padding-right:4rem;padding-top:1.25rem;padding-bottom:1.25rem;font-size:1.5rem;line-height:2rem;font-weight:700}.core-button.--large.--is-link>a[data-v-14a1fa19],.core-button.--large[data-v-14a1fa19]:not(.--is-link){min-width:128px}.core-button.--medium.--is-link>a[data-v-14a1fa19], .core-button.--medium[data-v-14a1fa19]:not(.--is-link){height:3rem;border-width:4px;padding-left:1.75rem;padding-right:1.75rem;padding-top:0.875rem;padding-bottom:0.875rem;font-size:1rem;line-height:1.5rem;font-weight:700}.core-button.--medium.--is-link>a[data-v-14a1fa19],.core-button.--medium[data-v-14a1fa19]:not(.--is-link){min-width:108px}.core-button.--small.--is-link>a[data-v-14a1fa19], .core-button.--small[data-v-14a1fa19]:not(.--is-link){height:2.5rem;padding-left:1.25rem;padding-right:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.75rem;line-height:1rem}.core-button.--small.--is-link>a[data-v-14a1fa19],.core-button.--small[data-v-14a1fa19]:not(.--is-link){min-width:80px;border-width:3px}.core-button.--rounded.--is-link>a[data-v-14a1fa19],.core-button.--rounded[data-v-14a1fa19]:not(.--is-link){border-radius:9999px}.core-button.--primary.--is-link>a[data-v-14a1fa19],.core-button.--primary[data-v-14a1fa19]:not(.--is-link){color:#c2a53a;border-color:currentColor}.core-button.--secondary.--is-link>a[data-v-14a1fa19],.core-button.--secondary[data-v-14a1fa19]:not(.--is-link){color:#c7c7c7;border-color:currentColor}.core-button.--is-link>a[data-v-14a1fa19]:hover,.core-button[data-v-14a1fa19]:not(.--is-link):hover{color:#7568f6;border-color:#7568f6}.core-button.--medium.--bulletin.--is-link>a[data-v-14a1fa19],.core-button.--medium.--bulletin[data-v-14a1fa19]:not(.--is-link){border-width:3px}",""]),o.locals={},t.exports=o},484:function(t,e,n){"use strict";n.r(e);n(477);var o=n(34),l={name:"CoreTextButton",components:{ExtLink:o.a,LocaleLink:o.b},props:{primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1},large:{type:Boolean,default:!1},small:{type:Boolean,default:!1},rounded:{type:Boolean,default:!0},block:{type:Boolean,default:!1},href:{type:String,default:void 0},to:{type:String,default:void 0},bulletin:{type:Boolean,default:!1}},computed:{coreButtonClasses:function(){return{"core-button":!0,"--primary":this.primary,"--secondary":this.secondary,"--large":this.large,"--medium":this.medium,"--small":this.small,"--rounded":this.rounded,"--block":this.block,"--is-link":this.isLink,"--bulletin":this.bulletin}},medium:function(){return!this.large&&!this.small},isLink:function(){return this.href||this.to}}},r=(n(482),n(6)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.coreButtonClasses},[t.href?n("ext-link",{attrs:{href:t.href}},[t._t("default")],2):t.to?n("locale-link",{attrs:{to:t.to,customized:""}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"14a1fa19",null);e.default=component.exports},498:function(t,e,n){var content=n(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("df7d2b9e",content,!0,{sourceMap:!1})},505:function(t,e,n){"use strict";n.r(e);var o={name:"BulletinCard",components:{TextButton:n(484).default},props:{title:{type:String,default:""},description:{type:String,default:""},linkTitle:{type:String,default:""},linkHref:{type:String,default:""},linkTo:{type:String,default:""}},computed:{classObject:function(){return{bulletinCard:!0}}}},l=(n(515),n(6)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!!t.title,expression:"!!title"}],class:t.classObject},[n("div",{staticClass:"dummy"}),t._v(" "),n("div",{staticClass:"bulletinCard__content"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.description))])]),t._v(" "),n("div",{staticClass:"bulletinCard__button"},[n("text-button",{staticClass:"hidden md:block",attrs:{href:t.linkHref,to:t.linkTo,secondary:"",bulletin:""}},[t._v(t._s(t.linkTitle))]),t._v(" "),n("text-button",{staticClass:"md:hidden",attrs:{href:t.linkHref,to:t.linkTo,secondary:"",small:""}},[t._v(t._s(t.linkTitle))])],1)])}),[],!1,null,"7387fb0c",null);e.default=component.exports},515:function(t,e,n){"use strict";n(498)},516:function(t,e,n){var o=n(18)((function(i){return i[1]}));o.push([t.i,".bulletinCard[data-v-7387fb0c]{position:relative;display:flex;flex-direction:column;align-items:center;border-radius:1.5rem;border-width:4px;font-family:Noto Serif TC, -apple-system, serif;width:47%}@media (min-width:415px){.bulletinCard[data-v-7387fb0c]{width:214px}}.bulletinCard[data-v-7387fb0c]{border-color:#4b4b4b;color:#4b4b4b}.bulletinCard[data-v-7387fb0c]:hover{border-color:#413f5a}.bulletinCard>.dummy[data-v-7387fb0c]{margin-top:230%}@media (min-width:370px){.bulletinCard>.dummy[data-v-7387fb0c]{margin-top:170%}}.bulletinCard__content[data-v-7387fb0c]{position:absolute}.bulletinCard__content>h2[data-v-7387fb0c]{margin-top:1.5rem;margin-bottom:1.25rem;text-align:center;font-size:1rem;line-height:1.5rem;font-weight:700}@media (min-width:415px){.bulletinCard__content>h2[data-v-7387fb0c]{margin-top:2rem}.bulletinCard__content>h2[data-v-7387fb0c]{margin-bottom:1.25rem}.bulletinCard__content>h2[data-v-7387fb0c]{font-size:1.25rem;line-height:1.75rem}}.bulletinCard__content>h2[data-v-7387fb0c]{color:grey}.bulletinCard__content:hover>h2[data-v-7387fb0c]{color:#7568f6}.bulletinCard__content>p[data-v-7387fb0c]{margin-left:0.5rem;margin-right:0.5rem;font-size:.6rem;color:#c7c7c7}@media (min-width:415px){.bulletinCard__content>p[data-v-7387fb0c]{font-size:.8rem}}.bulletinCard__button[data-v-7387fb0c]{position:absolute;bottom:1.25rem;cursor:pointer}@media (min-width:415px){.bulletinCard__button[data-v-7387fb0c]{bottom:1.75rem}}",""]),o.locals={},t.exports=o},517:function(t,e,n){var content=n(562);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("74735c8f",content,!0,{sourceMap:!1})},561:function(t,e,n){"use strict";n(517)},562:function(t,e,n){var o=n(18)((function(i){return i[1]}));o.push([t.i,".bulletinCardCollection__cardContainer[data-v-5610e261]{display:flex;flex-wrap:wrap}@media (min-width: 768px){.bulletinCardCollection__cardContainer[data-v-5610e261]{margin:1rem}}.bulletinCardCollection__cardContainer>.bulletinCard[data-v-5610e261]{margin:3px}@media (min-width:415px){.bulletinCardCollection__cardContainer>.bulletinCard[data-v-5610e261]{margin-left:20px;margin-bottom:30px;margin-right:20px;margin-top:30px;padding-left:5px;padding-bottom:5px;padding-right:5px;padding-top:5px}}",""]),o.locals={},t.exports=o},673:function(t,e,n){"use strict";n.r(e);var o=n(505),l=n(64),r={i18n:Object(l.a)({"en-us":{bulletins:[{title:"Hiring",description:"The companies are here to recruit talents, hurry up! Yes, I'm talking to you! Come here, they NEED YOU!",linkTitle:"Go",linkTo:"/events/jobs"},{title:"PyCast",description:"Checkout our brand new podcast channel, PyCast. Our passion, your entertainment!",linkTitle:"Launch",linkHref:"https://podcasts.apple.com/podcast/id1559843325"},{title:"HackMD Note",description:"Checkout our collaborative note on HackMD.",linkTitle:"Learn More",linkHref:"https://hackmd.io/@pycontw/2021"},{title:"Open Space",description:"Enjoy the Open Space & make some new friends, discuss any topic you’d like at the same time.",linkTitle:"Learn More",linkHref:"https://hackmd.io/W8rybslFTey1M0zublqHAQ"},{title:"Blog",description:"Get the latest news of the conference in our blog!",linkTitle:"Learn More",linkHref:"https://pycontw.blogspot.com/"},{title:"YouTube",description:"Checkout all speeches on our channel. Don't forget to subscribe!",linkTitle:"Subscribe",linkHref:"https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw"},{title:"Epidemic Prevention",description:"Stay home, stay safe. Let's spread the knowledge, not the virus.",linkTitle:"Read",linkTo:"/covid19_guidelines"},{title:"Volunteer",description:"Get involved and make difference! Join us and let's make this place better!",linkTitle:"Join Us",linkHref:"https://forms.gle/wuG2w42cbhamyGdv9"}]},"zh-hant":{bulletins:[{title:"徵才資訊",description:"厲害的公司都在這邊徵才還不趕快來看！對就是在說你！快點點進來這邊，他們 NEED YOU！",linkTitle:"前往看看",linkTo:"/events/jobs"},{title:"PyCast",description:"哇！拍抗居然有 Podcast 也太潮了拔！現在年輕人都在聽 Podcast！每集都高潮迭起！",linkTitle:"線上收聽",linkHref:"https://podcasts.apple.com/podcast/id1559843325"},{title:"HackMD 共筆",description:"線上共同筆記，歡迎一起來協作！",linkTitle:"前往看看",linkHref:"https://hackmd.io/@pycontw/2021"},{title:"Open Space",description:"開放空間讓你能用任何你喜歡的方式定義、組織、規劃你自己的小聚，想聊技術或是聊八卦都可以！",linkTitle:"前往看看",linkHref:"https://hackmd.io/W8rybslFTey1M0zublqHAQ"},{title:"Blog",description:"想馬上接收到最新資訊嗎？那一定不能錯過部落格，我們會把最新的資訊推播到部落格上！",linkTitle:"前往看看",linkHref:"https://pycontw.blogspot.com/"},{title:"YouTube",description:"PyCon 也有 YouTube 頻道了！歡迎訂閱我們～每年都會固定整理議程的錄影讓大家能一同觀看。",linkTitle:"線上訂閱",linkHref:"https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw"},{title:"防疫守則",description:"病毒退散！讓我們一同線上參與 PyCon TW 盛會，阻隔病毒傳播！",linkTitle:"前往閱讀",linkTo:"/covid19_guidelines"},{title:"志工招募",description:"我們歡迎所有對 Python 有興趣的朋友一同加入，用行動支持 PyCon，讓這裡變得更好！",linkTitle:"線上報名",linkHref:"https://forms.gle/wuG2w42cbhamyGdv9"}]}}),name:"BulletinCardCollection",components:{BulletinCard:o.default}},d=(n(561),n(6)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col w-full"},[n("div",{staticClass:"\n            bulletinCardCollection__cardContainer\n            justify-center\n            lg:justify-start\n        "},t._l(t.$t("bulletins"),(function(t,i){return n("bulletin-card",{key:"index_bulletin_"+i,attrs:{title:t.title,description:t.description,"link-title":t.linkTitle,"link-href":t.linkHref,"link-to":t.linkTo}})})),1)])}),[],!1,null,"5610e261",null);e.default=component.exports}}]);