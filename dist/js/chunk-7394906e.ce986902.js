(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7394906e"],{"7fb3":function(e,t,n){},d3ed:function(e,t,n){"use strict";n("7fb3")},e2ab:function(e,t,n){"use strict";n.r(t);n("4d90"),n("b0c0");var c=n("7a23"),r=Object(c["O"])("data-v-045c098e");Object(c["u"])("data-v-045c098e");var i={class:"d-flex align-items-center fs-4 fw-bold mt-2 cursor-pointer"},o=Object(c["h"])("span",{class:"me-1"},"推荐歌单",-1),a={class:"recommendList px-1 py-2 d-flex flex-wrap justify-content-between"},s={class:"recommendItemImg position-relative rounded-4 cursor-pointer overflow-hidden"},l=Object(c["h"])("div",{class:"position-absolute fs-5 w-100 dailyTips text-white p-2"}," 根据您的音乐口味生成每日更新 ",-1),u={class:"position-absolute translate-middle top-50 start-50"},d={class:"nowDay position-absolute start-50 translate-middle fs-1 text-white"},b=Object(c["h"])("div",{class:"position-absolute rounded-circle hover-play justify-content-center align-items-center"},[Object(c["h"])("div",{class:"trigonalPlay"})],-1),p=Object(c["h"])("div",{class:"recTitle w-100 mt-2 fs-5 text-muted"},"每日歌曲推荐",-1),j={class:"playCountLine position-absolute d-flex align-items-center"},v={class:"text-white ms-1"},h=Object(c["h"])("div",{class:"position-absolute rounded-circle hover-play justify-content-center align-items-center"},[Object(c["h"])("div",{class:"trigonalPlay"})],-1),O={class:"recTitle w-100 mt-2 fs-5 text-muted"};Object(c["s"])();var f=r((function(e,t,n,r,f,I){var m=Object(c["z"])("ArrowLeftIcon"),x=Object(c["z"])("ArrowRightIcon"),w=Object(c["z"])("ThinArrowRightIcon"),g=Object(c["z"])("CalendarIcon"),y=Object(c["z"])("HollowPlayIcon");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["h"])("div",{onMouseenter:t[3]||(t[3]=function(){return e.stopSwiper&&e.stopSwiper.apply(e,arguments)}),onMouseleave:t[4]||(t[4]=function(){return e.continueSwiper&&e.continueSwiper.apply(e,arguments)}),class:"bannerList position-relative mt-2"},[Object(c["h"])("div",{class:"changeBannerIcon cursor-pointer position-absolute top-50 translate-middle-y rounded-circle d-flex justify-content-center align-items-center",onClick:t[1]||(t[1]=function(t){return e.changeBanner("pre")})},[Object(c["h"])(m,{width:"12",height:"12"})]),Object(c["h"])("div",{class:"changeBannerIcon cursor-pointer position-absolute top-50 translate-middle-y rounded-circle d-flex justify-content-center align-items-center",onClick:t[2]||(t[2]=function(t){return e.changeBanner("next")})},[Object(c["h"])(x,{width:"12",height:"12"})]),(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e.banners,(function(t,n){return Object(c["r"])(),Object(c["e"])("div",{class:["bannerItem position-absolute rounded rounded-7",{firstBanner:n===e.currentActiveIndex,secondBanner:n===e.getSecondBanerIndex,lastBanner:n===e.getLastBannerIndex,"cursor-pointer":e.currentActiveIndex===n}],style:{backgroundImage:"url(".concat(t.imageUrl,")")},key:n,onClick:function(t){return n===e.getSecondBanerIndex?e.currentActiveIndex=e.getSecondBanerIndex:n===e.getLastBannerIndex&&(e.currentActiveIndex=e.getLastBannerIndex)}},null,14,["onClick"])})),128))],32),Object(c["h"])("div",{class:"w-100 d-flex justify-content-center mt-3",onMouseleave:t[5]||(t[5]=function(){return e.continueSwiper&&e.continueSwiper.apply(e,arguments)})},[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e.banners,(function(t,n){return Object(c["r"])(),Object(c["e"])("span",{key:n,class:["swiperDot rounded-circle",{"ms-3":0!==n,activeSwiperDot:e.currentActiveIndex===n}],onMouseenter:function(t){e.mouseenterSwiperDot(n),e.stopSwiper()}},null,42,["onMouseenter"])})),128))],32),Object(c["h"])("div",i,[o,Object(c["h"])(w,{width:"18",height:"18",style:{filter:"blur()"}})]),Object(c["h"])("div",a,[Object(c["h"])("div",{onClick:t[6]||(t[6]=function(t){return e.$router.push("/dailyRec")}),class:"recommentItem mb-3 dailyBox"},[Object(c["h"])("div",s,[l,Object(c["h"])("div",u,[Object(c["h"])("div",d,Object(c["C"])(String(e.nowDay).padStart(2,"0")),1),Object(c["h"])(g,{width:"108",height:"108"})]),b]),p]),(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e.personalizedList,(function(t,n){return Object(c["r"])(),Object(c["e"])("div",{class:"recommentItem mb-3",key:n},[Object(c["h"])("div",{class:"recommendItemImg position-relative rounded-4 cursor-pointer overflow-hidden position-relative",style:{backgroundImage:"url('".concat(t.picUrl,"')")}},[Object(c["h"])("div",j,[Object(c["h"])(y,{width:"12",height:"12"}),Object(c["h"])("span",v,Object(c["C"])(e.playCount(t.playCount)),1)]),h],4),Object(c["h"])("div",O,Object(c["C"])(t.name),1)])})),128))])],64)})),I=n("5530"),m=(n("d3b7"),n("54ba")),x=n("87db"),w=Object(c["i"])({setup:function(){var e=Object(c["v"])({banners:[],personalizedList:[],currentActiveIndex:0,nowDay:(new Date).getDate()}),t=function(){return new Promise((function(t,n){Object(m["c"])().then((function(c){200===c.code?(e.banners=c.banners,t(c.banners)):n()}))}))};t();var n=null,r=function(){n=setInterval((function(){e.currentActiveIndex<e.banners.length-1?e.currentActiveIndex++:e.currentActiveIndex=0}),5e3)};r();var i=function(){Object(m["d"])({limit:9}).then((function(t){200===t.code&&(e.personalizedList=t.result)}))};i();var o=Object(c["c"])((function(){return 0===e.currentActiveIndex?e.banners.length-1:e.currentActiveIndex-1})),a=Object(c["c"])((function(){return e.currentActiveIndex===e.banners.length-1?0:e.currentActiveIndex+1})),s=function(t){"pre"===t?e.currentActiveIndex=0===e.currentActiveIndex?e.banners.length-1:e.currentActiveIndex-1:"next"===t&&(e.currentActiveIndex=e.currentActiveIndex===e.banners.length-1?0:e.currentActiveIndex+1)},l=function(){clearInterval(n),n=null},u=function(){n&&(clearInterval(n),n=null),r()},d=function(t){e.currentActiveIndex=t};return Object(I["a"])(Object(I["a"])({},Object(c["D"])(e)),{},{getLastBannerIndex:o,getSecondBanerIndex:a,changeBanner:s,stopSwiper:l,continueSwiper:u,mouseenterSwiperDot:d,playCount:x["c"]})}});n("d3ed");w.render=f,w.__scopeId="data-v-045c098e";t["default"]=w}}]);
//# sourceMappingURL=chunk-7394906e.ce986902.js.map