(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c885d6c"],{"25ad":function(e,t,c){"use strict";c.r(t);c("b0c0"),c("7db0");var n=c("7a23"),a=Object(n["R"])("data-v-129629c1");Object(n["w"])("data-v-129629c1");var i={class:"d-flex mt-5"},l={class:"editForm d-flex flex-column align-items-start"},o=Object(n["i"])("span",{class:"labelName"},"歌单名：",-1),s=Object(n["i"])("span",{class:"labelName"},"标签：",-1),r={class:"d-flex align-items-center position-relative"},d={class:"position-relative"},u=Object(n["i"])("span",{class:"labelName"},"简介：",-1),b={class:"textareaOuter w-100 pb-3"},m={class:"position-absolute bottom-0 text-muted remainLength"},f={class:"d-flex opBtns mt-5"},j={class:"ms-5 ps-5 d-flex flex-column align-items-center"},O=Object(n["i"])("div",{class:"text-black-50 mb-3"},[Object(n["h"])("选择合适的标签，最多可以选"),Object(n["i"])("span",{class:"maxTagSum"},"3"),Object(n["h"])("个")],-1),g={class:"tagLabelName text-black-50 flex-grow-1 flex-shrink-0"},p={class:"d-flex flex-wrap tags"};Object(n["u"])();var v=a((function(e,t,c,v,h,x){var w=Object(n["B"])("horizontal-nav"),y=Object(n["B"])("CommonModal"),L=Object(n["B"])("CommonToast");return Object(n["t"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(w,{navs:e.navs},null,8,["navs"]),Object(n["i"])("div",i,[Object(n["i"])("div",l,[Object(n["i"])("label",null,[o,Object(n["O"])(Object(n["i"])("input",{type:"text",class:"flex-grow-1","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.name=t})},null,512),[[n["J"],e.name]])]),Object(n["i"])("label",null,[s,Object(n["i"])("div",r,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(e.tags,(function(e){return Object(n["t"])(),Object(n["f"])("div",{key:e.id,class:"rounded-pill border text-muted px-2 me-2 flex-center"},Object(n["E"])(e.name||e),1)})),128)),Object(n["i"])("div",{onClick:t[2]||(t[2]=function(t){return e.modalVisible=!0}),class:["colorA cursor-pointer",{"ms-4":e.tags.length}]}," 添加标签 ",2)])]),Object(n["i"])("label",d,[u,Object(n["i"])("div",b,[Object(n["O"])(Object(n["i"])("textarea",{ref:"descRef",rows:"5",class:"flex-grow-1 w-100",maxlength:"1000","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.desc=t})},null,512),[[n["J"],e.desc]])]),Object(n["i"])("span",m,Object(n["E"])(1e3-e.desc.length),1)]),Object(n["i"])("div",f,[Object(n["i"])("div",{onClick:t[4]||(t[4]=function(){return e.handleSave&&e.handleSave.apply(e,arguments)}),class:"opBtn saveBtn rounded-pill text-white"},"保 存"),Object(n["i"])("div",{onClick:t[5]||(t[5]=function(t){return e.$router.back()}),class:"opBtn cancelBtn border rounded-pill ms-4"},"取 消")])]),Object(n["i"])("div",j,[Object(n["i"])("img",{class:"rounded-3 coverImg",width:"160",height:"160",src:e.imgFile,alt:""},null,8,["src"]),Object(n["i"])("div",{onClick:t[6]||(t[6]=function(){return e.handleEditCover&&e.handleEditCover.apply(e,arguments)}),class:"opBtn cancelBtn rounded-pill border mt-4"},"编辑封面")])]),Object(n["i"])(y,{title:"添加标签",onConfirm:e.modalConfirm,visible:e.modalVisible,"onUpdate:visible":t[7]||(t[7]=function(t){return e.modalVisible=t}),bodyStyle:"min-height: 220px",bodyClass:"w-100 overflow-scroll hideScrollBar"},{default:a((function(){return[O,(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(e.tagList,(function(t,c){return Object(n["t"])(),Object(n["f"])("div",{class:"d-flex justify-content-between w-100 mb-2",key:c},[Object(n["i"])("div",g,Object(n["E"])(e.tagLabelNames.find((function(e,t){return t==c}))),1),Object(n["i"])("div",p,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(t,(function(t){return Object(n["t"])(),Object(n["f"])("div",{class:"tagItem mb-2 d-flex justify-content-start",key:t.name},[Object(n["i"])("div",{onClick:function(c){return e.clickTagItem(t)},class:[{activeTagInner:t.active},"tagInner rounded-pill flex-center text-ellipsis cursor-pointer"]},Object(n["E"])(t.name),11,["onClick"])])})),128))])])})),128))]})),_:1},8,["onConfirm","visible"]),Object(n["i"])(L,{ref:"commonToast"},null,512)],64)})),h=c("5530"),x=c("2909"),w=(c("13d5"),c("99af"),c("a4d3"),c("e01a"),c("a15b"),c("d81d"),c("caad"),c("2532"),c("4de4"),c("898f")),y=c("3c08"),L=c("668f"),k=c("6c02"),C=c("5502"),D=Object(n["j"])({components:{HorizontalNav:w["default"]},setup:function(){var e,t=Object(k["c"])(),c=(Object(k["d"])(),Object(C["b"])()),a=Object(n["x"])({navs:[{title:"编辑歌单信息",active:!0}],tags:[],tagList:[],mergedTagList:Object(n["d"])((function(){return a.tagList.reduce((function(e,t){return[].concat(Object(x["a"])(e),Object(x["a"])(t))}),[])})),tagLabelNames:["语种","风格","场景","情感","主题"],name:"",desc:"",imgFile:"https://p1.music.126.net/jWE3OEZUlwdz0ARvyQ9wWw==/109951165474121408.jpg",formData:null,modalVisible:!1,commonToast:Object(n["y"])(null),playListDetail:{},descRef:Object(n["y"])(null)}),i=function(){Object(L["c"])({id:t.query.id}).then((function(e){200===e.code&&(a.playListDetail=e.playlist,a.imgFile=a.playListDetail.coverImgUrl,a.name=a.playListDetail.name||"",a.desc=a.playListDetail.description||"",a.tags=a.playListDetail.tags||[])}))},l=function(){i();var c=new y["a"];e=function(){c.select()},c.handleCallback((function(e){a.formData=new FormData,a.formData.append("id",t.query.id),a.formData.append("imgFile",e[0]);var c=new FileReader;c.readAsDataURL(e[0]),c.onload=function(e){a.imgFile=e.target.result;var t=new Image;t.src=a.imgFile,t.onload=function(){a.formData.append("imgSize",t.width||t.naturalWidth||300)}}}))};Object(n["L"])((function(){return t.query}),(function(e){l(),"true"==e.desc&&Object(n["o"])((function(){a.descRef.focus()}))}),{immediate:!0});var o=function(){var e=a.name,n=a.tags,i=a.desc;if(!e)return a.commonToast.warn("歌单名不能为空");Object(L["e"])({name:e,tags:n.map((function(e){return e.name})).join(";"),desc:i,id:t.query.id}).then((function(e){if(200===e.code){if(a.commonToast.success("歌单信息更新成功"),!a.formData||!a.formData.get("imgFile"))return l(),c.dispatch("getCreatedMusicList");Object(L["f"])(a.formData).then((function(e){200===e.code?(l(),c.dispatch("getCreatedMusicList"),a.commonToast.success("歌单封面更新成功")):a.commonToast.success(e.msg||"歌单封面更新失败,可能原因为图片过大")})).catch((function(e){a.commonToast.success(e.msg||"歌单封面更新失败,可能原因为图片过大")}))}}))},s=function(){Object(L["b"])().then((function(e){200===e.code&&(a.tagList=e.tags.reduce((function(e,t){return e.map((function(e){return e.category})).includes(t.category)?e:[].concat(Object(x["a"])(e),[t])}),[]).map((function(t){return e.tags.filter((function(e){return e.category==t.category}))})))}))};s();var r=function(){a.tags=Object(x["a"])(a.mergedTagList.filter((function(e){return e.active}))),a.modalVisible=!1},d=function(e){e.active?e.active=!1:a.mergedTagList.filter((function(e){return e.active})).length<3?e.active=!0:a.commonToast.warn("最多可选三个标签")};return Object(h["a"])(Object(h["a"])({},Object(n["F"])(a)),{},{handleEditCover:e,handleSave:o,modalConfirm:r,clickTagItem:d})}});c("6e38");D.render=v,D.__scopeId="data-v-129629c1";t["default"]=D},"5bc1":function(e,t,c){},"6e38":function(e,t,c){"use strict";c("5bc1")}}]);
//# sourceMappingURL=chunk-1c885d6c.e9a95446.js.map