(this["webpackJsonpecwid-new-test"]=this["webpackJsonpecwid-new-test"]||[]).push([[0],{174:function(e,t,a){e.exports=a(379)},373:function(e,t,a){},374:function(e,t,a){},375:function(e,t,a){},376:function(e,t,a){},377:function(e,t,a){},378:function(e,t,a){},379:function(e,t,a){"use strict";a.r(t);a(175),a(184);var n=a(173),r=a.n(n),c=a(2),l=a.n(c),i=a(49),o=a(64),s=(a(373),a(109)),u=function(e,t){var a=new Image;a.onload=function(){var a={url:e,width:this.width,height:this.height};t(a,"url")},a.src=e},d=function(e){return Object(s.a)(Object(s.a)({},e),{},{id:"_".concat(Math.random().toString(36).substr(2,9))})},p=function(e,t){switch(e.type){case"image/jpeg":case"image/png":u(URL.createObjectURL(e),t);break;case"application/json":!function(e,t){var a=new FileReader;a.readAsText(e,"UTF-8"),a.onload=function(e){var a=JSON.parse(e.target.result),n=[];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&a[r].map((function(e){return n.push(e)}));t(n,"json")}}(e,t);break;default:throw new Error}},m=function(e){return l.a.createElement("div",{className:"gallery",draggable:!0,onDragOver:function(e){return e.preventDefault()},onDrop:function(t){if(t.preventDefault(),"text/plain"!==t.dataTransfer.items[0].type&&"text/uri-list"!==t.dataTransfer.items[0].type)t.dataTransfer.files.forEach((function(t){return p(t,e.addPicture)}));else{var a=t.dataTransfer.getData("URL");u(a,e.addPicture)}}},e.images&&e.images.map((function(t){var a=t.width/t.height,n=200*a;return l.a.createElement("div",{className:"gallery__item",style:{flexGrow:a},key:t.id},l.a.createElement("span",{className:"gallery__item-icon-close",onClick:function(){return e.deletePicture(t.id)}},l.a.createElement("i",{className:"fas fa-trash-alt"})),l.a.createElement("img",{className:"gallery__item-img",width:n,height:200,src:t.url,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",style:{flexGrow:1}}))})))},f=(a(374),function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"content-wrapper header__content"},l.a.createElement("h1",null,"Photo Gallery")))}),b=(a(375),a(376),function(){return l.a.createElement("div",{className:"spinner"},l.a.createElement("svg",{className:"spinner__svg-icon",width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("circle",{className:"spinner__svg-path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})))}),h=new RegExp("^(http|https)://","i"),v=function(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),n=a[0],r=a[1],i=Object(c.useRef)(),s=Object(c.useRef)(),d=Object(c.useState)(!1),m=Object(o.a)(d,2),f=m[0],v=m[1],_=function(t){t.preventDefault(),r(!0);var a=i.current.files.length?i.current.files:t.dataTransfer.files;try{v(!1),a.forEach((function(t){return p(t,e.addPicture)}))}catch(n){v(!0)}i.current.value="",r(!1)};return l.a.createElement("form",{className:"upload-block ".concat(e.classContainer)},n&&l.a.createElement(b,null),l.a.createElement("div",{className:"upload-block__field"},l.a.createElement("label",{className:"upload-block__label",htmlFor:"url"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 url \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"),l.a.createElement("div",{className:"upload-block__url"},l.a.createElement("input",{disabled:n,ref:s,className:"upload-block__url-input",id:"url",type:"text",placeholder:"http://"}),l.a.createElement("button",{className:"upload-block__button",type:"button",onClick:function(){var t=s.current.value;""!==t&&(r(!0),h.test(t)&&(u(t,e.addPicture),s.current.value=""),r(!1))},disabled:n},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"))),l.a.createElement("div",{className:"upload-block__field"},l.a.createElement("label",{className:"upload-block__label",htmlFor:"file"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043b"),l.a.createElement("div",{className:"upload-block__drop-area",onDragOver:function(e){return e.preventDefault()},onDrop:_},l.a.createElement("input",{ref:i,disabled:n,className:"upload-block__drop-area-input",type:"file",id:"file",multiple:!0,onChange:_}),l.a.createElement("div",{className:"upload-block__drop-area-inner ".concat(f?"upload-block__drop-area-inner--error":"")},l.a.createElement("div",null,f?"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 json, png \u0438\u043b\u0438 jpeg \u0444\u0430\u0439\u043b":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c")))))};v.defaultProps={classContainer:""};var _=v,g=(a(377),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],r=function(e){var t=Array.isArray(e)?e.map(d):d(e);n((function(e){return[].concat(Object(i.a)(e),t instanceof Array?Object(i.a)(t):[t])}))};return l.a.createElement("div",{className:"app"},l.a.createElement(f,null),l.a.createElement("div",{className:"content-wrapper app__content"},l.a.createElement(_,{classContainer:"app__upload-block",addPicture:r}),l.a.createElement(m,{images:a,deletePicture:function(e){var t=a.findIndex((function(t){return t.id===e}));n((function(e){return[].concat(Object(i.a)(e.slice(0,t)),Object(i.a)(e.slice(t+1)))}))},addPicture:r})))});a(378);r.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.9566a005.chunk.js.map