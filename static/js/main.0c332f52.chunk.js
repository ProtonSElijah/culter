(this.webpackJsonpculter=this.webpackJsonpculter||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"url":"https://amolodetskiy.me:8080/culter","is_dev":false}')},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){e.exports=a.p+"static/media/chatRed.2e82a215.svg"},181:function(e,t,a){e.exports=a.p+"static/media/eventRed.333d01ba.svg"},182:function(e,t,a){e.exports=a.p+"static/media/gridRed.b64b72cb.svg"},183:function(e,t,a){e.exports=a.p+"static/media/swipeRed.2f9e85a7.svg"},184:function(e,t,a){e.exports=a.p+"static/media/userRed.2079daaf.svg"},185:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);a(100),a(127),a(129),a(130),a(132),a(133),a(134),a(135),a(136),a(137),a(138),a(139),a(141),a(142),a(143),a(144),a(145),a(146),a(147),a(148),a(149),a(150),a(152),a(153),a(154),a(155),a(156),a(157),a(158),a(159),a(160),a(161),a(162),a(163),a(164),a(165),a(166),a(167),a(168),a(169);var n=a(0),c=a.n(n),r=a(64),s=a.n(r),i=a(21),o=a.n(i),l=a(1),u=a.n(l),d=a(6),m=(a(178),a(91)),p=a.n(m),f=function(e){var t="";switch(e.panelId){case"personal":t="\u041f\u0440\u043e\u0444\u0438\u043b\u044c";break;case"grid":case"swipe":t="\u0421\u043e\u0431\u044b\u0442\u0438\u044f";break;case"people":t="\u041b\u044e\u0434\u0438";break;case"matches":t="\u0414\u0438\u0430\u043b\u043e\u0433\u0438"}return c.a.createElement("div",{className:"App-header"},c.a.createElement("div",{className:"App-header-content"},c.a.createElement("img",{src:p.a,alt:"icon"}),c.a.createElement("p",null,"Culter")),c.a.createElement("div",{className:"App-header-bottomLine"}),c.a.createElement("div",{className:"App-header-panelTitle"},c.a.createElement("p",null,t)))},h=function(e){return e.list.map((function(e){return c.a.createElement("div",{className:"ScrollContainerContent",key:e.key},c.a.createElement("div",{className:"ScrollPerson"},c.a.createElement("img",{src:e.photo_400_orig,alt:"Person",className:"ScrollPeopleImg"}),c.a.createElement("div",null,e.first_name),c.a.createElement("div",{className:"Cirle"},e.common_events.length)))}))},v=function(e){var t=e.list,a="\u042f \u043e \u043c\u043e\u0451\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438";return t.map((function(e){return c.a.createElement("div",{className:"PersonContainer"},c.a.createElement("div",{className:"Person",key:e.key},c.a.createElement("img",{src:e.photo_400_orig,alt:"Person photo"}),c.a.createElement("div",{className:"PersonData"},c.a.createElement("div",{className:"PersonName"},c.a.createElement("b",null,e.first_name+" "+e.last_name)),a.length>26&&c.a.createElement("div",{className:"PersonPlacesList"},a.slice(0,26)+".."),!(a.length>26)&&c.a.createElement("div",{className:"PersonPlacesList"},a))),c.a.createElement("div",{className:"BottomLine"}))}))},g=(a(179),a(92)),E=a.n(g),b=a(93),y=a.n(b),S=a(94),w=a.n(S),O=a(95),j=a.n(O),x=a(96),N=a.n(x),k=(a(180),a(181),a(182),a(183),a(184),function(e){var t=e.go;return c.a.createElement("div",{className:"App-bottom"},c.a.createElement("div",{className:"Bottom-button Bottom-profileButton",onClick:t,"data-to":"personal"},c.a.createElement("img",{id:"personalButton",src:N.a,alt:"personal"})),c.a.createElement("div",{className:"Bottom-button Bottom-eventsGridButton",onClick:t,"data-to":"grid"},c.a.createElement("img",{id:"gridButton",src:w.a,alt:"swipe"})),c.a.createElement("div",{className:"Bottom-button Bottom-eventsSwipeButton",onClick:t,"data-to":"swipe"},c.a.createElement("img",{id:"swipeButton",src:j.a,alt:"swipe"})),c.a.createElement("div",{className:"Bottom-button Bottom-peopleSwipeButton",onClick:t,"data-to":"people"},c.a.createElement("img",{id:"peopleButton",src:y.a,alt:"people"})),c.a.createElement("div",{className:"Bottom-button Bottom-matchesButton",onClick:t,"data-to":"matches"},c.a.createElement("img",{id:"matchesButton",src:E.a,alt:"matches"})))}),T=(a(29),a(185),a(15)),_=a.n(T),F=a(12);function C(e){var t,a,n,c=arguments;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:0,a=c.length>2&&void 0!==c[2]?c[2]:20,n=F.url+"/user/"+e+"/users/all?&page="+t+"&size="+a,r.abrupt("return",fetch(n,{method:"GET"}));case 4:case"end":return r.stop()}}))}function B(e){var t,a,n,c=arguments;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:0,a=c.length>2&&void 0!==c[2]?c[2]:20,n=F.url+"/user/"+e+"/users/ratings?&page="+t+"&size="+a,r.abrupt("return",fetch(n,{method:"GET"}));case 4:case"end":return r.stop()}}))}var P=function(e){var t=e.id,a=e.user,r=e.go,s=Object(n.useState)([]),i=Object(d.a)(s,2),o=i[0],l=i[1],m=Object(n.useState)(0),p=Object(d.a)(m,2),g=p[0],E=p[1],b=Object(n.useState)(20),y=Object(d.a)(b,2),S=y[0];y[1];return Object(n.useEffect)((function(){null!=a&&function(){var e,t;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(B(a.id,g,S));case 2:return e=n.sent,n.next=5,u.a.awrap(e.json());case 5:t=n.sent,console.log(t),E(g+1),l(o.concat(t.content));case 9:case"end":return n.stop()}}))}()}),[a]),Object(n.useEffect)((function(){u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById(t).children[0].style.paddingTop=0,document.body.style.setProperty("--background_page","white");case 2:case"end":return e.stop()}}))}),[]),c.a.createElement(_.a,{id:t},c.a.createElement(f,{panelId:t}),c.a.createElement("div",{className:"Head"},c.a.createElement("p",null,1!=o.length?o.length+" \u043d\u043e\u0432\u044b\u0445 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439":o.length+" \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435")),c.a.createElement("div",{className:"ScrollContainer"},o.length>0?c.a.createElement(h,{list:o}):c.a.createElement("div",null)),c.a.createElement("div",{className:"Dialogues"},c.a.createElement("p",null,"\u0414\u0438\u0430\u043b\u043e\u0433\u0438")),c.a.createElement("div",{className:"ListContainer"},o.length>0?c.a.createElement(v,{list:o}):c.a.createElement("div",null)),c.a.createElement(k,{go:r}))},I=(a(196),a(45)),z=a(46),G=a(48),L=a(47),U=a(22),A=a(49),R=(a(197),a(44),function(e){var t=e.event,a=t.short_title.length>20?t.short_title.slice(0,15)+"...":t.short_title;if(!(t.dates.length>0))return c.a.createElement("div",null,c.a.createElement("p",{id:"Font-bold"},a));var n=t.dates[0].start_time.slice(0,t.dates[0].start_time.length-3),r=new Date(t.dates[0].start_date),s=r.toLocaleDateString("ru-Ru",{weekday:"long"}),i=r.toLocaleDateString("ru-Ru",{month:"long",day:"numeric"});return c.a.createElement("div",null,c.a.createElement("p",{id:"Font-bold"},a),c.a.createElement("p",null," ",i),c.a.createElement("p",null,n," ",s," "))}),Y=function(e){var t=e.person;t.common_events.slice(0,5);return c.a.createElement("div",null,c.a.createElement("p",{id:"Font-bold"},t.first_name),c.a.createElement("p",null,"\u041e\u0431\u0449\u0438\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439: ",t.common_events.length),c.a.createElement("p",null,"\u0412\u0441\u0435\u0433\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0439: ",t.liked_events.length))},D=function(e){var t=e.horizontalShift,a=Math.min(Math.abs(t)/50,1),n={left:{opacity:t<0?a:0},right:{opacity:t>0?a:0}};return c.a.createElement("div",{className:"Swipe-content-up-labels"},c.a.createElement("div",{style:n.right,className:"Swipe-right-label choice-label"},"\u041a\u0440\u0443\u0442\u043e"),c.a.createElement("div",{style:n.left,className:"Swipe-left-label choice-label"},"\u041e\u0442\u0441\u0442\u043e\u0439"))},J=function(e){var t=e.horizontalShift,a=e.verticalShift,n=e.isUpperTouch,r=e.cardInfo,s={transform:"rotate("+(n?-1:1)*t/15+"deg) translate("+t+"px, "+a+"px)",transition:e.isTransition?"0.2s":""},i=r.hasOwnProperty("short_title"),o=i?r.images[0].image:r.photo_400_orig;return c.a.createElement("div",{className:"Swipe-content",style:s},c.a.createElement("div",{className:"Swipe-content-up"},c.a.createElement(D,{horizontalShift:t}),c.a.createElement("img",{className:"Swipe-content-up-image",src:o}),c.a.createElement("div",{className:"Swipe-content-down"},i?c.a.createElement(R,{event:r}):c.a.createElement(Y,{person:r}))))},X=function(e){function t(e){var a;return Object(I.a)(this,t),(a=Object(G.a)(this,Object(L.a)(t).call(this,e))).onTouch=function(e){for(var t=e.changedTouches,n=0;n<t.length;n++)a.updateByTouch(t[n])},a.onTouchStart=function(e){a.setState({isFirstTouch:!0,isSwiping:!0,isTransition:!1})},a.onTouchEnd=function(e){if(Math.abs(a.state.horizontalShift)>100){var t=a.state.horizontalShift>0;a.animatePick();var n=Object(U.a)(a);setTimeout((function(){n.resetCard(!1),n.props.onSwipeEnd(t)}),400)}else a.resetCard(!0)},a.updateByTouch=function(e){var t=a.state.currentX,n=a.state.currentY,c={currentX:e.clientX,currentY:e.clientY};a.state.isFirstTouch?(c.isUpperTouch=e.clientY>300,c.isFirstTouch=!1):(c.horizontalShift=a.state.horizontalShift+e.clientX-t,c.verticalShift=a.state.verticalShift+e.clientY-n),a.setState(c)},a.animatePick=function(){a.setState({isTransition:!0}),a.setState({horizontalShift:5*a.state.horizontalShift,verticalShift:5*a.state.verticalShift})},a.resetCard=function(e){a.setState({isTransition:e,isSwiping:!1,horizontalShift:0,verticalShift:0,currentX:0,currentY:0})},a.state={currentX:0,currentY:0,horizontalShift:0,verticalShift:0,isFirstTouch:!0,isSwiping:!1,height:0},a.animatePick=a.animatePick.bind(Object(U.a)(a)),a.resetCard=a.resetCard.bind(Object(U.a)(a)),a}return Object(A.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Swipe-main",onTouchMove:this.onTouch,onTouchEnd:this.onTouchEnd,onTouchStart:this.onTouchStart},c.a.createElement(J,{cardInfo:this.props.cardInfo,isSwiping:this.state.isSwiping,horizontalShift:this.state.horizontalShift,verticalShift:this.state.verticalShift,isUpperTouch:this.state.isUpperTouch,isTransition:this.state.isTransition}))}}]),t}(n.Component);function K(e,t,a){var n;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=F.url+"/user/"+e+"/events/ratings",c.abrupt("return",fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([{event_id:t,is_liked:a}])}));case 2:case"end":return c.stop()}}))}function M(e,t,a){var n;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=F.url+"/user/"+e+"/users/ratings",c.abrupt("return",fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([{user_id:t,is_liked:a}])}));case 2:case"end":return c.stop()}}))}var V=function(e){function t(e){var a;return Object(I.a)(this,t),(a=Object(G.a)(this,Object(L.a)(t).call(this,e))).onSwipeEnd=function(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.props.setRateBy(this.props.cards[this.state.currentIndex].id,e),10==this.state.swipesCountFromUpload&&(this.props.loadCards(),this.setState({swipesCountFromUpload:0})),this.setState({currentIndex:this.state.currentIndex+1,swipesCountFromUpload:this.state.swipesCountFromUpload+1});case 3:case"end":return t.stop()}}),null,this)},a.state={currentIndex:0,swipesCountFromUpload:0},a.onSwipeEnd=a.onSwipeEnd.bind(Object(U.a)(a)),a}return Object(A.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.props.cards,t=this.state.currentIndex,a=t+1;return e.length>0&&t<e.length?c.a.createElement("div",null,c.a.createElement(X,{cardInfo:e[t],onSwipeEnd:this.onSwipeEnd}),a<e.length?c.a.createElement(J,{cardInfo:e[a]}):c.a.createElement("div",null)):c.a.createElement("div",null)}}]),t}(n.Component);function W(e){var t,a,n,c,r,s,i=arguments;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:[1,6],a=i.length>2&&void 0!==i[2]?i[2]:0,n=i.length>3&&void 0!==i[3]?i[3]:20,c=!(i.length>4&&void 0!==i[4])||i[4],r="category_id="+t.join("&category_id="),s=F.url+"/user/"+e+"/events/selection?"+r+"&is_personal="+c+"&page="+a+"&size="+n,o.abrupt("return",fetch(s,{method:"GET"}));case 7:case"end":return o.stop()}}))}var H=function(e){var t=e.id,a=e.go,r=e.user,s=Object(n.useState)([]),i=Object(d.a)(s,2),o=i[0],l=i[1],m=Object(n.useState)(0),p=Object(d.a)(m,2),h=p[0],v=p[1],g=Object(n.useState)([1,6]),E=Object(d.a)(g,2),b=E[0],y=(E[1],Object(n.useState)(20)),S=Object(d.a)(y,2),w=S[0];S[1];function O(){var e,t,a,n;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,u.a.awrap(W(r.id,b,h,w));case 2:return e=c.sent,c.next=5,u.a.awrap(e.json());case 5:t=c.sent,a=t.content,n=void 0==a||a.length<w,v(n?0:h+1),l(o.concat(a));case 10:case"end":return c.stop()}}))}return Object(n.useEffect)((function(){null!=r&&O()}),[r]),Object(n.useEffect)((function(){u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById(t).children[0].style.paddingTop=0,document.body.style.setProperty("--background_page","white");case 2:case"end":return e.stop()}}))}),[]),c.a.createElement(_.a,{id:t},c.a.createElement(f,{panelId:t}),c.a.createElement(V,{cards:o,loadCards:O,setRateBy:function(e,t){return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:K(r.id,e,t);case 1:case"end":return a.stop()}}))}}),c.a.createElement(k,{go:a}))},q=a(98),Q=a.n(q),Z=(a(198),function(e){var t=e.id,a=e.go,r=Object(n.useState)(null),s=Object(d.a)(r,2),i=s[0],l=s[1],m=Object(n.useState)(null),p=Object(d.a)(m,2),h=p[0],v=p[1];return Object(n.useEffect)((function(){u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById(t).children[0].style.paddingTop=0,document.body.style.setProperty("--background_page","white");case 2:case"end":return e.stop()}})),function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(o.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,l(e);case 4:case"end":return t.stop()}}))}(),function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(o.a.sendPromise("VKWebAppGetAuthToken",{app_id:7197573,scope:"friends"}));case 2:e=t.sent,v(e.access_token);case 4:case"end":return t.stop()}}))}()}),[]),c.a.createElement(_.a,{id:t},c.a.createElement(f,{panelId:t}),c.a.createElement("div",{className:"PersonalContent"},c.a.createElement("div",{className:"PersonalBlock"},i&&c.a.createElement("div",{className:"PersonalData"},c.a.createElement("img",{src:i.photo_200?i.photo_200:null,alt:"Person"}),c.a.createElement("p",null,i.first_name?i.first_name:"",i.last_name?" "+i.last_name:""),h&&c.a.createElement("p",null,h)))),c.a.createElement(k,{go:a}))}),$=(a(90),function(e){return e.data.map((function(e){return c.a.createElement("div",{className:"Grid-eventCell","data-name":e.name?e.name:"unknown"},c.a.createElement("img",{src:e.images[0].image?e.images[0].image:null}))}))}),ee=function(e){var t=e.id,a=e.go,r=e.user,s=Object(n.useState)([]),i=Object(d.a)(s,2),o=i[0],l=i[1],m=Object(n.useState)(0),p=Object(d.a)(m,2),h=p[0],v=p[1],g=Object(n.useState)(20),E=Object(d.a)(g,2),b=E[0],y=(E[1],Object(n.useState)(["31","6","27","15","12"])),S=Object(d.a)(y,2),w=S[0],O=S[1],j=Object(n.useState)(!1),x=Object(d.a)(j,2),N=x[0],T=x[1];function F(){var e,t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(W(r.id,w,h,b));case 2:return e=a.sent,a.next=5,u.a.awrap(e.json());case 5:t=a.sent,v(h+1),l(o.concat(t.content)),T(!1);case 9:case"end":return a.stop()}}))}Object(n.useEffect)((function(){null!=r&&F()}),[r]),Object(n.useEffect)((function(){u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById(t).children[0].style.paddingTop=0,document.body.style.setProperty("--background_page","white");case 2:case"end":return e.stop()}}))}),[]);var C=function(e){var t=document.getElementById("filter_modal");"visible"==t.style.visibility&&function(){var e,t;u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(W(r.id,w,0,b));case 2:return e=a.sent,a.next=5,u.a.awrap(e.json());case 5:t=a.sent,v(1),l(t.content);case 8:case"end":return a.stop()}}))}(),t.style.visibility="visible"==t.style.visibility?"hidden":"visible"},B=function(e){"false"==e.currentTarget.dataset.isactive?O(w.concat(e.currentTarget.dataset.id)):w.splice(w.indexOf(e.currentTarget.dataset.id),1),e.currentTarget.dataset.isactive="true"==e.currentTarget.dataset.isactive?"false":"true",e.currentTarget.children[0].classList.toggle("Filter-modal-categories-item-checkbox-disabled"),e.currentTarget.children[0].classList.toggle("Filter-modal-categories-item-checkbox-active")};return c.a.createElement(_.a,{id:t},c.a.createElement(f,{panelId:t}),c.a.createElement("div",{className:"Grid-eventList",onScroll:function(e){var t=e.currentTarget;if(t.scrollHeight-2*t.clientHeight<=t.scrollTop)try{N||(T(!0),F())}catch(a){console.log(a)}}},o&&c.a.createElement($,{data:o})),c.a.createElement("div",{className:"Filter",onClick:C},c.a.createElement("p",null,"\u0424\u0438\u043b\u044c\u0442\u0440")),c.a.createElement("div",{className:"Filter-modal",id:"filter_modal",style:{visibility:"hidden"},onClick:function(e){"filter_modal"==e.target.id&&C()}},c.a.createElement("div",{className:"Filter-modal-content"},c.a.createElement("div",{className:"Filter-modal-header"},c.a.createElement("p",null,"\u0424\u0438\u043b\u044c\u0442\u0440")),c.a.createElement("div",{className:"Filter-modal-categoriesTitle"},c.a.createElement("p",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"),c.a.createElement("div",{className:"Filter-modal-categoriesTitleBottomLine"})),c.a.createElement("div",{className:"Filter-modal-categories"},c.a.createElement("div",{className:"Filter-modal-categories-item",onClick:B,"data-isactive":!0,"data-id":31},c.a.createElement("div",{className:"Filter-modal-categories-item-checkbox\r Filter-modal-categories-item-checkbox-active"}),c.a.createElement("p",{className:"Filter-modal-categories-item-name"},"\u041a\u0432\u0435\u0441\u0442\u044b")),c.a.createElement("div",{className:"Filter-modal-categories-item",onClick:B,"data-isactive":!0,"data-id":15},c.a.createElement("div",{className:"Filter-modal-categories-item-checkbox\r Filter-modal-categories-item-checkbox-active"}),c.a.createElement("p",{className:"Filter-modal-categories-item-name"},"\u0424\u043b\u0435\u0448\u043c\u043e\u0431\u044b")),c.a.createElement("div",{className:"Filter-modal-categories-item",onClick:B,"data-isactive":!0,"data-id":6},c.a.createElement("div",{className:"Filter-modal-categories-item-checkbox\r Filter-modal-categories-item-checkbox-active"}),c.a.createElement("p",{className:"Filter-modal-categories-item-name"},"\u041a\u043e\u043d\u0446\u0435\u0440\u0442\u044b")),c.a.createElement("div",{className:"Filter-modal-categories-item",onClick:B,"data-isactive":!0,"data-id":12},c.a.createElement("div",{className:"Filter-modal-categories-item-checkbox\r Filter-modal-categories-item-checkbox-active"}),c.a.createElement("p",{className:"Filter-modal-categories-item-name"},"\u0412\u044b\u0441\u0442\u0430\u0432\u043a\u0438")),c.a.createElement("div",{className:"Filter-modal-categories-item",onClick:B,"data-isactive":!0,"data-id":27},c.a.createElement("div",{className:"Filter-modal-categories-item-checkbox\r Filter-modal-categories-item-checkbox-active"}),c.a.createElement("p",{className:"Filter-modal-categories-item-name"},"\u041d\u043e\u0447\u043d\u0430\u044f \u0436\u0438\u0437\u043d\u044c"))),c.a.createElement("div",{className:"Filter-modal-buttonOK",onClick:C},c.a.createElement("p",null,"\u041e\u041a")))),c.a.createElement(k,{go:a}))},te=(a(199),function(e){var t=e.id,a=e.go,r=e.user,s=Object(n.useState)([]),i=Object(d.a)(s,2),o=i[0],l=i[1],m=Object(n.useState)(0),p=Object(d.a)(m,2),h=p[0],v=p[1],g=Object(n.useState)([1,6]),E=Object(d.a)(g,2),b=(E[0],E[1],Object(n.useState)(20)),y=Object(d.a)(b,2),S=y[0];y[1];function w(){var e,t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(C(r.id,h,S));case 2:return e=a.sent,a.next=5,u.a.awrap(e.json());case 5:t=a.sent,v(h+1),l(o.concat(t.content));case 8:case"end":return a.stop()}}))}return Object(n.useEffect)((function(){null!=r&&w()}),[r]),Object(n.useEffect)((function(){u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById(t).children[0].style.paddingTop=0,document.body.style.setProperty("--background_page","white");case 2:case"end":return e.stop()}}))}),[]),c.a.createElement(_.a,{id:t},c.a.createElement(f,{panelId:t}),c.a.createElement(V,{cards:o,loadCards:w,setRateBy:function(e,t){return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:M(r.id,e,t);case 1:case"end":return a.stop()}}))}}),c.a.createElement(k,{go:a}))});a(200);function ae(e){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t="".concat(F.url,"/user/identify?user_id=").concat(e),a.abrupt("return",fetch(t,{method:"GET"}));case 2:case"end":return a.stop()}}))}var ne=a(97),ce=function(){var e=Object(n.useState)("swipe"),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(null),i=Object(d.a)(s,2),l=i[0],m=i[1],p=function(e){r(e.currentTarget.dataset.to)};return Object(n.useEffect)((function(){!function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!F.is_dev){t.next=4;break}t.t0={id:ne.user_id},t.next=7;break;case 4:return t.next=6,u.a.awrap(o.a.sendPromise("VKWebAppGetUserInfo"));case 6:t.t0=t.sent;case 7:return e=t.t0,t.next=10,u.a.awrap(ae(e.id));case 10:m(e);case 11:case"end":return t.stop()}}))}()}),[]),c.a.createElement(Q.a,{activePanel:a},c.a.createElement(Z,{id:"personal",go:p}),c.a.createElement(ee,{user:l,id:"grid",go:p}),c.a.createElement(H,{user:l,id:"swipe",go:p}),c.a.createElement(te,{user:l,id:"people",go:p}),c.a.createElement(P,{user:l,id:"matches",go:p}))};o.a.send("VKWebAppInit"),s.a.render(c.a.createElement(ce,null),document.getElementById("root"))},29:function(e,t,a){},44:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/culterIcon.33102295.svg"},92:function(e,t,a){e.exports=a.p+"static/media/chatGrey.49b6c726.svg"},93:function(e,t,a){e.exports=a.p+"static/media/eventGrey.89b02bab.svg"},94:function(e,t,a){e.exports=a.p+"static/media/gridGrey.c04b6039.svg"},95:function(e,t,a){e.exports=a.p+"static/media/swipeGrey.2be3924b.svg"},96:function(e,t,a){e.exports=a.p+"static/media/userGrey.7612f005.svg"},97:function(e){e.exports=JSON.parse('{"user_id":"152266279"}')},99:function(e,t,a){e.exports=a(205)}},[[99,1,2]]]);
//# sourceMappingURL=main.0c332f52.chunk.js.map