(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1035:function(t,n,o){"use strict";o.r(n);o(44),o(54),o(38),o(30),o(28);var e=o(936),r=(o(938),{name:"LandingImgSwiper",components:{CoolLightBox:e.a},data:function(){return{lightBoxSettings:{imgs:[],index:null},imgGroups:[10,8,8].map((function(t,i){return Array.from({length:t}).map((function(t,n){return"".concat(i+1,"-").concat(n+1)}))})),relXCoords:[0,-105,0],limitXCoords:[0,0,0],shiftSetting:{moved:!1,shift:0,targetGroup:0,targetImg:null}}},mounted:function(){this.lazyLoadImages(),this.shiftImages()},methods:{getImgPath:function(t,n){return o(940)("./".concat(t,"/").concat(n,".jpg"))},openLightBox:function(t){var n=this.getImgPath("origin",t);this.lightBoxSettings.imgs=[n],this.lightBoxSettings.index=0},lazyLoadImages:function(){this.$refs.slide.forEach((function(t){var n;if(null!=t&&null!==(n=t.dataset)&&void 0!==n&&n.src){var img=new Image;img.src=t.dataset.src,img.onload=function(){t.style.backgroundImage='url("'.concat(img.src,'")')}}}))},shiftImages:function(){this.limitXCoords=this.imgGroups.map((function(t){return window.innerWidth-300*t.length+30}))},getShiftPosition:function(t){return{transform:"translateX("+this.relXCoords[t]+"px)"}},imgMouseDown:function(t,n,o){this.shiftSetting.moved=!1,this.shiftSetting.targetGroup=n,this.shiftSetting.shiftX=t.clientX,this.shiftSetting.targetImg=o,document.addEventListener("mousemove",this.imgMouseMove),document.addEventListener("mouseup",this.imgMouseUp)},imgMouseMove:function(t){this.shiftSetting.moved=!0,this.imgMoveAt(t.pageX)},imgMoveAt:function(t){var n=this.relXCoords[this.shiftSetting.targetGroup]+t-this.shiftSetting.shiftX;n<this.limitXCoords[this.shiftSetting.targetGroup]&&(n=this.limitXCoords[this.shiftSetting.targetGroup]),n>0&&(n=0),this.$set(this.relXCoords,this.shiftSetting.targetGroup,n),this.shiftSetting.shiftX=t},imgMouseUp:function(t){this.shiftSetting.moved||this.openLightBox(this.shiftSetting.targetImg),document.removeEventListener("mousemove",this.imgMouseMove),document.removeEventListener("mouseup",this.imgMouseUp)},imgTouchStart:function(t,n,o){this.shiftSetting.moved=!1,this.shiftSetting.targetGroup=n,this.shiftSetting.shiftX=t.touches[0].pageX,this.shiftSetting.targetImg=o,document.addEventListener("touchmove",this.imgTouchMove),document.addEventListener("touchend",this.imgTouchEnd)},imgTouchMove:function(t){this.shiftSetting.moved=!0,this.imgMoveAt(t.touches[0].pageX)},imgTouchEnd:function(t){this.shiftSetting.moved||this.openLightBox(this.shiftSetting.targetImg),document.removeEventListener("touchmove",this.imgTouchMove),document.removeEventListener("touchend",this.imgTouchEnd)}}}),c=(o(997),o(4)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"swiper-collection"},[o("CoolLightBox",{attrs:{items:t.lightBoxSettings.imgs,index:t.lightBoxSettings.index,slideshow:!1},on:{close:function(n){t.lightBoxSettings.index=null}}}),t._v(" "),o("div",{staticClass:"img-group"},t._l(t.imgGroups,(function(n,e){return o("div",{key:t.$makeKey(e,"light_box"),ref:"container",refInFor:!0,staticClass:"swiper-container",style:t.getShiftPosition(e)},t._l(n,(function(n,r){return o("div",{key:t.$makeKey(r,"light_box_container"),staticClass:"swiper-wrapper"},[o("div",{ref:"slide",refInFor:!0,staticClass:"swiper-slide",attrs:{"data-src":t.getImgPath("thumbnail",n)},on:{mousedown:function(o){return t.imgMouseDown(o,e,n)},touchstart:function(o){return t.imgTouchStart(o,e,n)}}})])})),0)})),0)],1)}),[],!1,null,"328a9ccb",null);n.default=component.exports},669:function(t,n,o){var content=o(998);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("497cc81a",content,!0,{sourceMap:!1})},940:function(t,n,o){var map={"./origin/1-1.jpg":941,"./origin/1-10.jpg":942,"./origin/1-2.jpg":943,"./origin/1-3.jpg":944,"./origin/1-4.jpg":945,"./origin/1-5.jpg":946,"./origin/1-6.jpg":947,"./origin/1-7.jpg":948,"./origin/1-8.jpg":949,"./origin/1-9.jpg":950,"./origin/2-1.jpg":951,"./origin/2-2.jpg":952,"./origin/2-3.jpg":953,"./origin/2-4.jpg":954,"./origin/2-5.jpg":955,"./origin/2-6.jpg":956,"./origin/2-7.jpg":957,"./origin/2-8.jpg":958,"./origin/2-9.jpg":959,"./origin/3-1.jpg":960,"./origin/3-2.jpg":961,"./origin/3-3.jpg":962,"./origin/3-4.jpg":963,"./origin/3-5.jpg":964,"./origin/3-6.jpg":965,"./origin/3-7.jpg":966,"./origin/3-8.jpg":967,"./origin/3-9.jpg":968,"./thumbnail/1-1.jpg":969,"./thumbnail/1-10.jpg":970,"./thumbnail/1-2.jpg":971,"./thumbnail/1-3.jpg":972,"./thumbnail/1-4.jpg":973,"./thumbnail/1-5.jpg":974,"./thumbnail/1-6.jpg":975,"./thumbnail/1-7.jpg":976,"./thumbnail/1-8.jpg":977,"./thumbnail/1-9.jpg":978,"./thumbnail/2-1.jpg":979,"./thumbnail/2-2.jpg":980,"./thumbnail/2-3.jpg":981,"./thumbnail/2-4.jpg":982,"./thumbnail/2-5.jpg":983,"./thumbnail/2-6.jpg":984,"./thumbnail/2-7.jpg":985,"./thumbnail/2-8.jpg":986,"./thumbnail/2-9.jpg":987,"./thumbnail/3-1.jpg":988,"./thumbnail/3-2.jpg":989,"./thumbnail/3-3.jpg":990,"./thumbnail/3-4.jpg":991,"./thumbnail/3-5.jpg":992,"./thumbnail/3-6.jpg":993,"./thumbnail/3-7.jpg":994,"./thumbnail/3-8.jpg":995,"./thumbnail/3-9.jpg":996};function e(t){var n=r(t);return o(n)}function r(t){if(!o.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}e.keys=function(){return Object.keys(map)},e.resolve=r,t.exports=e,e.id=940},941:function(t,n,o){t.exports=o.p+"img/1-1.34f690c.jpg"},942:function(t,n,o){t.exports=o.p+"img/1-10.3819fd3.jpg"},943:function(t,n,o){t.exports=o.p+"img/1-2.6c7c888.jpg"},944:function(t,n,o){t.exports=o.p+"img/1-3.ded81ac.jpg"},945:function(t,n,o){t.exports=o.p+"img/1-4.e761b6b.jpg"},946:function(t,n,o){t.exports=o.p+"img/1-5.0ed7294.jpg"},947:function(t,n,o){t.exports=o.p+"img/1-6.6325bcb.jpg"},948:function(t,n,o){t.exports=o.p+"img/1-7.74ccdf8.jpg"},949:function(t,n,o){t.exports=o.p+"img/1-8.04cdd8f.jpg"},950:function(t,n,o){t.exports=o.p+"img/1-9.90a492d.jpg"},951:function(t,n,o){t.exports=o.p+"img/2-1.e27a616.jpg"},952:function(t,n,o){t.exports=o.p+"img/2-2.faff619.jpg"},953:function(t,n,o){t.exports=o.p+"img/2-3.8b1cf38.jpg"},954:function(t,n,o){t.exports=o.p+"img/2-4.e14784c.jpg"},955:function(t,n,o){t.exports=o.p+"img/2-5.4af53e3.jpg"},956:function(t,n,o){t.exports=o.p+"img/2-6.4ce103b.jpg"},957:function(t,n,o){t.exports=o.p+"img/2-7.e69be31.jpg"},958:function(t,n,o){t.exports=o.p+"img/2-8.c58afa0.jpg"},959:function(t,n,o){t.exports=o.p+"img/2-9.761f9ed.jpg"},960:function(t,n,o){t.exports=o.p+"img/3-1.2e19696.jpg"},961:function(t,n,o){t.exports=o.p+"img/3-2.00f5d1a.jpg"},962:function(t,n,o){t.exports=o.p+"img/3-3.793b18e.jpg"},963:function(t,n,o){t.exports=o.p+"img/3-4.86cd45b.jpg"},964:function(t,n,o){t.exports=o.p+"img/3-5.bb05fb5.jpg"},965:function(t,n,o){t.exports=o.p+"img/3-6.39cbe32.jpg"},966:function(t,n,o){t.exports=o.p+"img/3-7.702f1cf.jpg"},967:function(t,n,o){t.exports=o.p+"img/3-8.c195ab9.jpg"},968:function(t,n,o){t.exports=o.p+"img/3-9.86148e4.jpg"},969:function(t,n,o){t.exports=o.p+"img/1-1.bbd0a7d.jpg"},970:function(t,n,o){t.exports=o.p+"img/1-10.b1ee1c4.jpg"},971:function(t,n,o){t.exports=o.p+"img/1-2.8d56ac0.jpg"},972:function(t,n,o){t.exports=o.p+"img/1-3.cc2670f.jpg"},973:function(t,n,o){t.exports=o.p+"img/1-4.b679401.jpg"},974:function(t,n,o){t.exports=o.p+"img/1-5.36fa899.jpg"},975:function(t,n,o){t.exports=o.p+"img/1-6.e2eb18d.jpg"},976:function(t,n,o){t.exports=o.p+"img/1-7.2cc4e9f.jpg"},977:function(t,n,o){t.exports=o.p+"img/1-8.0639839.jpg"},978:function(t,n,o){t.exports=o.p+"img/1-9.b3410a7.jpg"},979:function(t,n,o){t.exports=o.p+"img/2-1.261402c.jpg"},980:function(t,n,o){t.exports=o.p+"img/2-2.1242775.jpg"},981:function(t,n,o){t.exports=o.p+"img/2-3.b4cd497.jpg"},982:function(t,n,o){t.exports=o.p+"img/2-4.fa8d1ab.jpg"},983:function(t,n,o){t.exports=o.p+"img/2-5.7d05fee.jpg"},984:function(t,n,o){t.exports=o.p+"img/2-6.832fb93.jpg"},985:function(t,n,o){t.exports=o.p+"img/2-7.374aa84.jpg"},986:function(t,n,o){t.exports=o.p+"img/2-8.6d40e19.jpg"},987:function(t,n,o){t.exports=o.p+"img/2-9.c18084e.jpg"},988:function(t,n,o){t.exports=o.p+"img/3-1.a64cf17.jpg"},989:function(t,n,o){t.exports=o.p+"img/3-2.0870610.jpg"},990:function(t,n,o){t.exports=o.p+"img/3-3.6ce44cf.jpg"},991:function(t,n,o){t.exports=o.p+"img/3-4.e786b2b.jpg"},992:function(t,n,o){t.exports=o.p+"img/3-5.9371b90.jpg"},993:function(t,n,o){t.exports=o.p+"img/3-6.9329eaa.jpg"},994:function(t,n,o){t.exports=o.p+"img/3-7.0be7044.jpg"},995:function(t,n,o){t.exports=o.p+"img/3-8.787b0ef.jpg"},996:function(t,n,o){t.exports=o.p+"img/3-9.5517d31.jpg"},997:function(t,n,o){"use strict";o(669)},998:function(t,n,o){var e=o(15)((function(i){return i[1]}));e.push([t.i,".swiper-collection[data-v-328a9ccb]{--tw-bg-opacity:1;background-color:rgba(18, 16, 35, var(--tw-bg-opacity));width:100%;overflow-x:hidden}.swiper-container[data-v-328a9ccb]{white-space:nowrap;line-height:0;margin:37px 0}.swiper-container[data-v-328a9ccb]:first-of-type{margin:0 0 37px}.swiper-container[data-v-328a9ccb]:last-of-type{margin:37px 0 0}.swiper-wrapper[data-v-328a9ccb]{display:inline-block;margin:0 15px;cursor:pointer}.swiper-slide[data-v-328a9ccb]{width:270px;height:210px;background-color:grey;background-size:cover;background-position:50%;background-repeat:no-repeat}.swiper-container>.swiper-wrapper[data-v-328a9ccb]:first-of-type{margin:0 15px 0 0}.swiper-container>.swiper-wrapper[data-v-328a9ccb]:last-of-type{margin:0 0 0 15px}",""]),e.locals={},t.exports=e}}]);