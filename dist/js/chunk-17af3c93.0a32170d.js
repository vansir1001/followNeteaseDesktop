(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17af3c93"],{"387e":function(e,t,c){"use strict";c("3b5c")},"3b5c":function(e,t,c){},"533e":function(e,t,c){"use strict";c.r(t);c("4d90"),c("caad"),c("2532"),c("b0c0"),c("a15b"),c("d81d");var n=c("7a23"),i=Object(n["P"])("data-v-1c5cbfb4");Object(n["v"])("data-v-1c5cbfb4");var o={class:"dailyRec ps-3 h-100 overflow-scroll hideScrollBar"},l={class:"m-5 d-flex"},r={class:"position-relative calendarBox"},a={class:"dateText fw-bold position-absolute start-50 fs-1 translate-middle"},s=Object(n["i"])("div",{class:"ms-5 d-flex flex-column justify-content-center"},[Object(n["i"])("div",{class:"fs-1"},"每日歌曲推荐"),Object(n["i"])("div",{class:"text-muted"},"根据你的音乐口味生成，每天6:00更新")],-1),d={class:"d-flex"},b={class:"rounded-pill d-flex align-items-center justify-content-between text-white mb-4 ms-5 cursor-pointer position-relative overflow-hidden playAllBtn"},u={class:"d-flex align-items-center justify-content-center border-end h-100 hover-btn"},j=Object(n["i"])("span",{class:"ms-1"},"播放全部",-1),f={class:"d-flex align-items-center justify-content-center flex-grow-1 h-100 hover-btn"},O=Object(n["i"])("span",{class:"ms-2"},"收藏全部",-1),v={class:"border-top mb-5"},m=Object(n["g"])('<div class="row songRow headRow w-100" data-v-1c5cbfb4><div class="col-6 p-3 text-black-50 fs-5 songCol" data-v-1c5cbfb4>音乐标题</div><div class="col p-3 text-black-50 fs-5 songCol" data-v-1c5cbfb4>歌手</div><div class="col p-3 text-black-50 fs-5 songCol" data-v-1c5cbfb4>专辑</div><div class="col p-3 text-black-50 fs-5 songCol" data-v-1c5cbfb4>时长</div></div>',1),h={class:"col-6 p-3 songCol"},p={class:"text-black-50 me-4"},w={class:"ms-4"},g={class:"col-2 p-3 songCol"},y={class:"col-2 p-3 songCol"},k={class:"col-2 p-3 songCol"},x={class:"d-flex justify-content-center"},C={class:"d-flex justify-content-center"};Object(n["t"])();var A=i((function(e,t,c,A,D,M){var S=Object(n["A"])("CalendarIcon"),T=Object(n["A"])("DownArrowIcon"),U=Object(n["A"])("PlusIcon"),V=Object(n["A"])("CollectList"),I=Object(n["A"])("HaveLikedIcon"),L=Object(n["A"])("LikedIcon"),B=Object(n["A"])("DownloadMusicIcon"),P=Object(n["A"])("CommonModal"),R=Object(n["A"])("CommonToast"),E=Object(n["A"])("CollectionListModal");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])("div",o,[Object(n["i"])("div",l,[Object(n["i"])("div",r,[Object(n["i"])(S,{width:"90",height:"90",color:e.calendarColor},null,8,["color"]),Object(n["i"])("div",a,Object(n["D"])((new e.window.Date).getDate()),1)]),s]),Object(n["i"])("div",d,[Object(n["i"])("div",b,[Object(n["i"])("div",u,[Object(n["i"])(T,{width:"20",height:"20"}),j]),Object(n["i"])("div",f,[Object(n["i"])(U,{width:"20",height:"20"})])]),Object(n["i"])("div",{onClick:t[1]||(t[1]=function(t){return e.colVisible=!0}),class:"collectList ms-3 rounded-pill px-5 border d-flex align-items-center cursor-pointer hover-btn"},[Object(n["i"])(V,{width:"20",height:"20"}),O])]),Object(n["i"])("div",v,[m,(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(e.dailySongs,(function(t,c){return Object(n["s"])(),Object(n["e"])("div",{class:"row ps-5 songRow w-100",key:c},[Object(n["i"])("div",h,[Object(n["i"])("span",p,Object(n["D"])(String(c+1).padStart(2,"0")),1),e.likeList.includes(t.id)?(Object(n["s"])(),Object(n["e"])(I,{key:0,onClick:function(c){return e.collectMusic(t,!1)},width:"14",height:"14",class:"hover-likedIcon"},null,8,["onClick"])):(Object(n["s"])(),Object(n["e"])(L,{key:1,onClick:function(c){return e.collectMusic(t,!0)},width:"14",height:"14",class:"hover-icon"},null,8,["onClick"])),Object(n["i"])(B,{onClick:function(c){return e.tryDownloadMusic(t)},width:"14",height:"14",class:"hover-icon ms-4"},null,8,["onClick"]),Object(n["i"])("span",w,Object(n["D"])(t.name),1)]),Object(n["i"])("div",g,Object(n["D"])(t.ar.map((function(e){return e.name})).join("、")),1),Object(n["i"])("div",y,Object(n["D"])(t.al.name),1),Object(n["i"])("div",k,Object(n["D"])(e.playTime(t.dt)),1)])})),128))])]),Object(n["i"])(P,{visible:e.downloadModalVisible,"onUpdate:visible":t[4]||(t[4]=function(t){return e.downloadModalVisible=t})},{default:i((function(){return[Object(n["i"])("div",x,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(e.songsUrlObjArr,(function(t,c){return Object(n["s"])(),Object(n["e"])("div",{key:c,class:"d-flex align-items-center cursor-pointer"},[Object(n["M"])(Object(n["i"])("input",{type:"radio",name:t.level,id:t.level,"onUpdate:modelValue":function(e){return t.checked=e},checked:t.checked},null,8,["name","id","onUpdate:modelValue","checked"]),[[n["H"],t.checked]]),Object(n["i"])("label",{class:"ms-3",for:t.level},Object(n["D"])(e.musicQuality(t.level)),9,["for"])])})),128))])]})),buttons:i((function(){return[Object(n["i"])("div",C,[Object(n["i"])("div",{onClick:t[2]||(t[2]=function(){return e.confirmDownload&&e.confirmDownload.apply(e,arguments)}),class:"okBtn cursor-pointer d-flex justify-content-center align-items-center"}," 确定 "),Object(n["i"])("div",{onClick:t[3]||(t[3]=function(t){return e.downloadModalVisible=!1}),class:"okBtn cancelBtn ms-4 rounded-pill text-muted border cursor-pointer d-flex justify-content-center align-items-center"}," 取消 ")])]})),_:1},8,["visible"]),Object(n["i"])(R,{ref:"commonToast"},null,512),Object(n["i"])(E,{tracks:e.dailySongs.map((function(e){return e.id})),visible:e.colVisible,"onUpdate:visible":t[5]||(t[5]=function(t){return e.colVisible=t})},null,8,["tracks","visible"])],64)}));function D(e){if(Array.isArray(e))return e}c("a4d3"),c("e01a"),c("d3b7"),c("d28b"),c("3ca3"),c("ddb0");function M(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var c=[],n=!0,i=!1,o=void 0;try{for(var l,r=e[Symbol.iterator]();!(n=(l=r.next()).done);n=!0)if(c.push(l.value),t&&c.length===t)break}catch(a){i=!0,o=a}finally{try{n||null==r["return"]||r["return"]()}finally{if(i)throw o}}return c}}var S=c("06c5");function T(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function U(e,t){return D(e)||M(e,t)||Object(S["a"])(e,t)||T()}var V=c("5530"),I=(c("7db0"),c("54ba")),L=c("17b9"),B=c("87db"),P=c("5502"),R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();console.log(t);var c=document.createElement("a");c.download=String(t),c.href=e,c.click()},E=Object(n["j"])({setup:function(){var e=Object(P["b"])(),t=Object(n["w"])({dailySongs:[],downloadModalVisible:!1,songsUrlObjArr:[],currentMusicObj:{},likeList:[],commonToast:Object(n["x"])(null),colVisible:!1});Object(n["K"])((function(){return t.songsUrlObjArr}),(function(e){console.log(e)}));var c=function(){return new Promise((function(e,c){Object(I["e"])({t:Date.now()}).then((function(c){200===c.code&&(t.dailySongs=c.data.dailySongs,e(c))}))}))};c();var i=function(){return new Promise((function(e,c){Object(L["e"])().then((function(c){200===c.code&&(t.likeList=c.ids,e(c))}))}))};i();var o=Object(n["c"])((function(){return"primaryTheme"===e.getters.getTheme?"#ec4141":"darkTheme"===e.getters.getTheme?"#212529":"#50c475"})),l=function(e){t.currentMusicObj=e,Object(I["f"])(e.id).then((function(e){200===e.code&&(1===e.data.length?t.songsUrlObjArr=e.data.map((function(e){return Object(V["a"])(Object(V["a"])({},e),{},{checked:!0})})):t.songsUrlObjArr=e.data.map((function(e){return Object(V["a"])(Object(V["a"])({},e),{},{checked:!1})})),t.downloadModalVisible=!0)}))},r=function(){console.log(t.songsUrlObjArr);var e=t.songsUrlObjArr.find((function(e){return e.checked}));e&&R(e.url,t.currentMusicObj.name)},a=function(e,n){Object(I["g"])({id:e.id,like:n}).then((function(e){200===e.code&&Promise.all([c(),i()]).then((function(e){var c=U(e,2),i=c[0],o=c[1];200===i.code&&200===o.code&&t.commonToast.success(n?"已添加到我喜欢的音乐":"取消喜欢成功")}))}))};return Object(V["a"])(Object(V["a"])({},Object(n["E"])(t)),{},{playTime:B["d"],calendarColor:o,window:window,tryDownloadMusic:l,musicQuality:B["b"],confirmDownload:r,collectMusic:a})}});c("387e");E.render=A,E.__scopeId="data-v-1c5cbfb4";t["default"]=E},a15b:function(e,t,c){"use strict";var n=c("23e7"),i=c("44ad"),o=c("fc6a"),l=c("a640"),r=[].join,a=i!=Object,s=l("join",",");n({target:"Array",proto:!0,forced:a||!s},{join:function(e){return r.call(o(this),void 0===e?",":e)}})}}]);
//# sourceMappingURL=chunk-17af3c93.0a32170d.js.map