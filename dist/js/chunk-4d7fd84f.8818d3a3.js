(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d7fd84f"],{"0b00":function(t,e,n){"use strict";n("5dbd")},"5dbd":function(t,e,n){},"71f5":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("7db0");var c=n("7a23"),i=Object(c["O"])("data-v-2a9415d4");Object(c["u"])("data-v-2a9415d4");var o={class:"videos w-100 h-100 d-flex flex-column"},r={class:"d-flex justify-content-between align-align-items-center w-100 position-relative"},a={class:"text-muted"},s={class:"videoCats d-flex align-items-center justify-content-end text-ellipsis"},u={class:"flex-grow-1"},d={class:"container h-100"},l={class:"h-100 row d-flex flex-column align-items-center"},b={class:"h-100 col-xxl-10 containerCol"};Object(c["s"])();var p=i((function(t,e,n,i,p,f){var j=Object(c["z"])("HorizontalNav"),O=Object(c["z"])("ArrowRightIcon"),v=Object(c["z"])("VideoGroupPanel"),g=Object(c["z"])("VideoList");return Object(c["r"])(),Object(c["e"])("div",o,[Object(c["h"])(j,{navs:t.navs,"onUpdate:navs":e[1]||(e[1]=function(e){return t.navs=e})},null,8,["navs"]),Object(c["h"])("div",r,[Object(c["h"])("div",{onClick:e[2]||(e[2]=Object(c["N"])((function(e){return t.groupVisible=!t.groupVisible}),["stop"])),class:"rounded-pill border px-3 py-2 me-5 cursor-pointer my-2 flex-shrink-0 currentGroup text-center"},[Object(c["h"])("span",a,Object(c["C"])(t.groupList.find((function(e){return e.id===t.groupId})).name),1),Object(c["h"])(O,{width:"12",height:"12",class:"filter-invert-1 opacity-25 translate-y--10 ms-1"})]),Object(c["h"])(v,{onConfirm:t.confirmGroup,onClick:e[3]||(e[3]=Object(c["N"])((function(){}),["stop"])),groupId:t.groupId,"onUpdate:groupId":e[4]||(e[4]=function(e){return t.groupId=e}),visible:t.groupVisible,"onUpdate:visible":e[5]||(e[5]=function(e){return t.groupVisible=e})},null,8,["onConfirm","groupId","visible"]),Object(c["h"])("div",s,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(t.categoryList,(function(e){return Object(c["r"])(),Object(c["e"])("span",{onClick:function(n){return t.groupId=e.id},key:e.id,class:"videoCat hover-opacity text-secondary"},Object(c["C"])(e.name),9,["onClick"])})),128))])]),Object(c["h"])("div",u,[Object(c["h"])("div",d,[Object(c["h"])("div",l,[Object(c["h"])("div",b,[Object(c["h"])(g,{style:{height:"calc(100vh - 75px - 60px - 38px - 40px - 3.3rem)"},class:"pt-5",id:t.groupId,"onUpdate:id":e[6]||(e[6]=function(e){return t.groupId=e})},null,8,["id"])])])])])])})),f=n("5530"),j=(n("d81d"),n("99af"),n("c5e7")),O=n("f7cc"),v=Object(c["i"])({setup:function(){var t=Object(c["v"])({navs:[{title:"视频",active:!0},{title:"MV"}],categoryList:[],groupId:0,groupVisible:!1,groupList:[{name:"全部视频",id:0}]});t.navs=t.navs.map((function(t,e){return Object(f["a"])(Object(f["a"])({},t),{},{key:e})}));var e=function(){Object(j["a"])().then((function(e){200===e.code&&(t.categoryList=e.data)})),Object(j["b"])().then((function(e){200===e.code&&(t.groupList=[{name:"全部视频",id:0}].concat(e.data))}))};e(),Object(O["a"])((function(){t.groupVisible=!1}));var n=function(e){t.groupId=e.id};return Object(f["a"])(Object(f["a"])({},Object(c["D"])(t)),{},{confirmGroup:n})}});n("0b00");v.render=p,v.__scopeId="data-v-2a9415d4";e["default"]=v}}]);
//# sourceMappingURL=chunk-4d7fd84f.8818d3a3.js.map