(this.webpackJsonpculter=this.webpackJsonpculter||[]).push([[0],{171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},198:function(e,t,n){"use strict";n.r(t);n(92),n(120),n(122),n(123),n(125),n(126),n(127),n(128),n(129),n(130),n(131),n(132),n(134),n(135),n(136),n(137),n(138),n(139),n(140),n(141),n(142),n(143),n(145),n(146),n(147),n(148),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(162);var a=n(0),c=n.n(a),i=n(63),s=n.n(i),o=n(23),r=n.n(o),l=n(11),m=n.n(l),u=n(22),p=n(25),h=(n(171),function(e){var t=e.text;return c.a.createElement("div",{className:"App-header"},c.a.createElement("p",null,t.toUpperCase()))}),f=function(e){e.stateList;var t=e.stateRefresh,n=e.matchedList,a=e.friendsList,i=function(e){document.getElementById("matchedButton").classList.toggle("NavigationButtonsActive",e),document.getElementById("friendsButton").classList.toggle("NavigationButtonsActive",!e),document.getElementById("matchedButton").classList.toggle("NavigationButtonsDefault",!e),document.getElementById("friendsButton").classList.toggle("NavigationButtonsDefault",e)};return c.a.createElement("div",{className:"NavigationButtons"},c.a.createElement("button",{id:"matchedButton",className:"NavigationButtonsActive",onClick:function(){t(!0),i(!0)}},n.length," \u0441\u043e\u0432\u043f\u0430\u043b\u0438"),c.a.createElement("button",{id:"friendsButton",className:"NavigationButtonsDefault",onClick:function(){t(!1),i(!1)}},a.length," \u0434\u0440\u0443\u0433"))},d=function(e){return e.list.map((function(e){return c.a.createElement("div",{className:"ScrollContainerContent",key:e.key},c.a.createElement("div",{className:"ScrollPerson"},c.a.createElement("img",{src:e.imgLink,alt:"Person",className:"ScrollPeopleImg"}),c.a.createElement("div",null,e.firstName)))}))},g=function(e){return e.list.map((function(e){return c.a.createElement("div",{className:"Person",key:e.key},c.a.createElement("img",{src:e.imgLink,alt:"Person photo"}),c.a.createElement("div",{className:"PersonData"},c.a.createElement("div",{className:"PersonName"},c.a.createElement("b",null,e.firstName+" "+e.lastName)),c.a.createElement("div",{className:"PersonPlacesCount"},"\u041e\u0431\u0449\u0438\u0445 \u043c\u0435\u0441\u0442: ",c.a.createElement("b",null,e.commonPlacesCount)),e.commonPlaces.toString().length>25&&c.a.createElement("div",{className:"PersonPlacesList"},e.commonPlaces.toString().slice(0,25)+".."),!(e.commonPlaces.toString().length>25)&&c.a.createElement("div",{className:"PersonPlacesList"},e.commonPlaces.toString())))}))},E=(n(172),function(e){var t=e.go,n=e.left,a=e.right;return c.a.createElement("div",{className:"App-bottom"},c.a.createElement("div",{className:"BottomLeftButton",onClick:t,"data-to":n},c.a.createElement("div",null)),c.a.createElement("div",{className:"BottomRightButton",onClick:t,"data-to":a},c.a.createElement("div",null)))}),v=(n(59),n(173),[{key:"1",imgLink:"https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",firstName:"\u0410\u0440\u0441\u0435\u043d\u0438\u0439",lastName:"\u041c\u043e\u043b\u043e\u0434\u0435\u0446\u043a\u0438\u0439",commonPlacesCount:4,commonPlaces:["\u042d\u043b\u0434\u0436\u0435\u0439","\u0422\u0438\u043c\u0430\u0442\u0438","\u0413\u0440\u0443\u043f\u043f\u0430 \u0421\u043a\u0440\u0438\u043f\u0442\u043e\u043d\u0438\u0442","AC/DC"]},{key:"2",imgLink:"https://sun9-67.userapi.com/c824204/v824204590/aca4d/Xl3J1Oyq1EU.jpg",firstName:"\u041d\u0438\u043a\u0438\u0442\u0430",lastName:"\u0411\u0430\u0448\u043a\u0438\u043d",commonPlacesCount:1,commonPlaces:["\u041a\u043e\u043d\u0446\u0435\u0440\u0442 \u0417\u0430\u043c\u0430\u044f"]},{key:"3",imgLink:"https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",firstName:"\u0410\u0440\u0441\u0435\u043d\u0438\u0439",lastName:"\u041c\u043e\u043b\u043e\u0434\u0435\u0446\u043a\u0438\u0439",commonPlacesCount:4,commonPlaces:["\u042d\u043b\u0434\u0436\u0435\u0439","\u0422\u0438\u043c\u0430\u0442\u0438","\u0413\u0440\u0443\u043f\u043f\u0430 \u0421\u043a\u0440\u0438\u043f\u0442\u043e\u043d\u0438\u0442","AC/DC"]},{key:"4",imgLink:"https://sun9-67.userapi.com/c824204/v824204590/aca4d/Xl3J1Oyq1EU.jpg",firstName:"\u041d\u0438\u043a\u0438\u0442\u0430",lastName:"\u0411\u0430\u0448\u043a\u0438\u043d",commonPlacesCount:1,commonPlaces:["\u041a\u043e\u043d\u0446\u0435\u0440\u0442 \u0417\u0430\u043c\u0430\u044f"]},{key:"5",imgLink:"https://sun9-67.userapi.com/c824204/v824204590/aca4d/Xl3J1Oyq1EU.jpg",firstName:"\u041d\u0438\u043a\u0438\u0442\u0430",lastName:"\u0411\u0430\u0448\u043a\u0438\u043d",commonPlacesCount:1,commonPlaces:["\u041a\u043e\u043d\u0446\u0435\u0440\u0442 \u0417\u0430\u043c\u0430\u044f"]},{key:"6",imgLink:"https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",firstName:"\u0410\u0440\u0441\u0435\u043d\u0438\u0439",lastName:"\u041c\u043e\u043b\u043e\u0434\u0435\u0446\u043a\u0438\u0439",commonPlacesCount:4,commonPlaces:["\u042d\u043b\u0434\u0436\u0435\u0439","\u0422\u0438\u043c\u0430\u0442\u0438","\u0413\u0440\u0443\u043f\u043f\u0430 \u0421\u043a\u0440\u0438\u043f\u0442\u043e\u043d\u0438\u0442","AC/DC"]},{key:"7",imgLink:"https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",firstName:"\u0410\u0440\u0441\u0435\u043d\u0438\u0439",lastName:"\u041c\u043e\u043b\u043e\u0434\u0435\u0446\u043a\u0438\u0439",commonPlacesCount:4,commonPlaces:["\u042d\u043b\u0434\u0436\u0435\u0439","\u0422\u0438\u043c\u0430\u0442\u0438","\u0413\u0440\u0443\u043f\u043f\u0430 \u0421\u043a\u0440\u0438\u043f\u0442\u043e\u043d\u0438\u0442","AC/DC"]},{key:"8",imgLink:"https://sun9-45.userapi.com/c854528/v854528685/d255a/ooAN1guMTAc.jpg",firstName:"\u0414\u0430\u043d\u0438\u043b\u0430",lastName:"\u0421\u0435\u0440\u0433\u0430\u0447\u0435\u0432",commonPlacesCount:1,commonPlaces:["\u0420\u043e\u043a"]},{key:"9",imgLink:"https://sun9-44.userapi.com/c848536/v848536553/153b99/ypLiVUE1jZA.jpg",firstName:"\u0418\u043b\u044c\u044f",lastName:"\u041a\u0443\u0440\u043d\u0430\u043a\u043e\u0432",commonPlacesCount:1,commonPlaces:["\u0422\u0440\u0435\u043f"]}]),N=[{key:"0",imgLink:"https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",firstName:"\u0410\u0440\u0441\u0435\u043d\u0438\u0439",lastName:"\u041c\u043e\u043b\u043e\u0434\u0435\u0446\u043a\u0438\u0439",commonPlacesCount:4,commonPlaces:["\u042d\u043b\u0434\u0436\u0435\u0439","\u0422\u0438\u043c\u0430\u0442\u0438","\u0413\u0440\u0443\u043f\u043f\u0430 \u0421\u043a\u0440\u0438\u043f\u0442\u043e\u043d\u0438\u0442","AC/DC"]}],S=n(24),P=n.n(S),b=function(e){var t=e.id,n=e.go,i=Object(a.useState)("true"),s=Object(p.a)(i,2),o=s[0],r=s[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById(t).children[0].style.paddingTop=0;case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement(P.a,{id:t},c.a.createElement(h,{text:t}),c.a.createElement(f,{stateList:o,stateRefresh:function(e){r(e)},matchedList:v,friendsList:N}),c.a.createElement("div",{className:"ScrollContainer"},c.a.createElement(d,{list:o?v:N})),c.a.createElement("div",{className:"ListContainer"},c.a.createElement(g,{list:o?v:N})),c.a.createElement(E,{go:n,left:"swipe",right:"personal"}))},w=(n(189),n(42)),y=n(43),k=n(45),j=n(44),C=n(46),I=(n(190),n(191),function(e){var t=e.horizontalShift,n=e.verticalShift,a=e.isSwiping,i=e.isUpperTouch,s=e.cardInfo,o=a?{transform:"rotate("+(i?-1:1)*t/15+"deg) translate("+t+"px, "+n+"px)"}:{transition:"0.5s"},r=Math.min(Math.abs(t)/50,1),l={left:{opacity:t<0?r:0},right:{opacity:t>0?r:0}};return c.a.createElement("div",{className:"Swipe-content",style:o},c.a.createElement("div",{className:"Swipe-content-up"},c.a.createElement("div",{className:"Swipe-content-up-labels"},c.a.createElement("div",{style:l.right,className:"Swipe-right-label choice-label"},"\u041a\u0440\u0443\u0442\u043e"),c.a.createElement("div",{style:l.left,className:"Swipe-left-label choice-label"},"\u041e\u0442\u0441\u0442\u043e\u0439")),c.a.createElement("img",{className:"Swipe-content-up-image",src:s.image})),c.a.createElement("div",{className:"Swipe-content-down"},c.a.createElement("p",{id:"Font-bold"},c.a.createElement("b",null,s.name)),c.a.createElement("p",null,c.a.createElement("b",null,"4")," \u0430\u043f\u0440\u0435\u043b\u044f, \u0441\u0443\u0431\u0431\u043e\u0442\u0430, ",c.a.createElement("b",null,"20:00")),c.a.createElement("p",null,c.a.createElement("b",null,"20")," \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0438\u0434\u0451\u0442 - ",c.a.createElement("b",null,"1")," \u0434\u0440\u0443\u0433")))}),L=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(k.a)(this,Object(j.a)(t).call(this,e))).componentDidMount=function(){n.setState({height:650})},n.onTouch=function(e){e.stopPropagation();for(var t=e.changedTouches,a=0;a<t.length;a++){var c=n.state.currentX,i=n.state.currentY,s={currentX:t[a].clientX,currentY:t[a].clientY};n.state.isFirstTouch?(s.isUpperTouch=t[a].clientY>n.state.height/2,s.isFirstTouch=!1):(s.horizontalShift=n.state.horizontalShift+t[a].clientX-c,s.verticalShift=n.state.verticalShift+t[a].clientY-i),n.setState(s)}},n.onTouchStart=function(e){e.preventDefault(),n.setState({isFirstTouch:!0,isSwiping:!0})},n.onTouchEnd=function(e){n.setState({horizontalShift:0,verticalShift:0,currentX:0,currentY:0,isSwiping:!1}),n.props.onSwipeEnd()},n.state={currentX:0,currentY:0,horizontalShift:0,verticalShift:0,isFirstTouch:!0,isSwiping:!1,height:0},n.viewRef=c.a.createRef(),n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{ref:this.viewRef,className:"Swipe-main",onTouchMove:this.onTouch,onTouchEnd:this.onTouchEnd,onTouchStart:this.onTouchStart},c.a.createElement(I,{cardInfo:this.props.cardInfo,isSwiping:this.state.isSwiping,horizontalShift:this.state.horizontalShift,verticalShift:this.state.verticalShift,isUpperTouch:this.state.isUpperTouch}))}}]),t}(a.Component),B=[{image:"https://img.muz1.tv/img/2018-01-15/fmt_94_124_foto-1.jpg",name:"\u042d\u043b\u0434\u0436\u0435\u0439"},{image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fg1.nh.ee%2Fimages%2Fpix%2F1000x654%2FX2I8LbSwrgs%2F2e48b5c9908dc782cc-85708367.jpg&f=1&nofb=1",name:"\u0411\u0430\u0441\u0442\u0430"}],O=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(k.a)(this,Object(j.a)(t).call(this,e))).onSwipeEnd=function(){n.setState({currentIndex:0===n.state.currentIndex?1:0})},n.state={cards:B,currentIndex:0},n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(L,{cardInfo:this.state.cards[this.state.currentIndex],onSwipeEnd:this.onSwipeEnd}))}}]),t}(a.Component),T=function(e){var t=e.id,n=e.go;return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById(t).children[0].style.paddingTop=0;case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement(P.a,{id:t},c.a.createElement(h,{text:t}),c.a.createElement(O,null),c.a.createElement(E,{go:n,left:"personal",right:"matches"}))},x=n(90),A=n.n(x),D=(n(192),function(e){var t=e.id,n=e.go,i=Object(a.useState)(null),s=Object(p.a)(i,2),o=s[0],l=s[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById(t).children[0].style.paddingTop=0;case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){n.apply(this,arguments)}()}),[]),c.a.createElement(P.a,{id:t},c.a.createElement(h,{text:t}),c.a.createElement("div",{className:"PersonalContent"},c.a.createElement("div",{className:"PersonalBlock"},o&&c.a.createElement("div",{className:"PersonalData"},c.a.createElement("img",{src:o.photo_200?o.photo_200:null,alt:"Person"}),c.a.createElement("p",null,o.first_name?o.first_name:"",o.last_name?" "+o.last_name:"")))),c.a.createElement(E,{go:n,left:"matches",right:"swipe"}))}),F=(n(193),function(){var e=Object(a.useState)("swipe"),t=Object(p.a)(e,2),n=t[0],i=t[1],s=function(e){i(e.currentTarget.dataset.to)};return c.a.createElement(A.a,{activePanel:n},c.a.createElement(D,{id:"personal",go:s}),c.a.createElement(T,{id:"swipe",go:s}),c.a.createElement(b,{id:"matches",go:s}))});r.a.send("VKWebAppInit"),s.a.render(c.a.createElement(F,null),document.getElementById("root"))},59:function(e,t,n){},91:function(e,t,n){e.exports=n(198)}},[[91,1,2]]]);
//# sourceMappingURL=main.ce5e3be9.chunk.js.map