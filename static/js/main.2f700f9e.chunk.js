(this.webpackJsonpculter=this.webpackJsonpculter||[]).push([[0],{162:function(e,t,n){e.exports=n(267)},242:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){},264:function(e,t,n){},265:function(e,t,n){},267:function(e,t,n){"use strict";n.r(t);n(163),n(191),n(193),n(194),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233);var a=n(0),r=n.n(a),c=n(30),s=n.n(c),i=n(17),o=n.n(i),l=n(3),u=n.n(l),m=n(9),p=n(12),h=(n(242),function(e){var t=e.text;return r.a.createElement("div",{className:"App-header"},r.a.createElement("p",null,t.toUpperCase()))}),f=function(e){e.stateList;var t=e.stateRefresh,n=e.matchedList,a=e.friendsList,c=function(e){document.getElementById("matchedButton").classList.toggle("NavigationButtonsActive",e),document.getElementById("friendsButton").classList.toggle("NavigationButtonsActive",!e),document.getElementById("matchedButton").classList.toggle("NavigationButtonsDefault",!e),document.getElementById("friendsButton").classList.toggle("NavigationButtonsDefault",e)};return r.a.createElement("div",{className:"NavigationButtons"},r.a.createElement("button",{id:"matchedButton",className:"NavigationButtonsActive",onClick:function(){t(!0),c(!0)}},n.length," \u0441\u043e\u0432\u043f\u0430\u043b\u0438"),r.a.createElement("button",{id:"friendsButton",className:"NavigationButtonsDefault",onClick:function(){t(!1),c(!1)}},a.length," \u0434\u0440\u0443\u0433"))},d=function(e){return e.list.map((function(e){return r.a.createElement("div",{className:"ScrollContainerContent",key:e.key},r.a.createElement("div",{className:"ScrollPerson"},r.a.createElement("img",{src:e.imgLink,alt:"Person",className:"ScrollPeopleImg"}),r.a.createElement("div",null,e.firstName)))}))},v=function(e){return e.list.map((function(e){return r.a.createElement("div",{className:"Person",key:e.key},r.a.createElement("img",{src:e.imgLink,alt:"Person photo"}),r.a.createElement("div",{className:"PersonData"},r.a.createElement("div",{className:"PersonName"},r.a.createElement("b",null,e.firstName+" "+e.lastName)),r.a.createElement("div",{className:"PersonPlacesCount"},"\u041e\u0431\u0449\u0438\u0445 \u043c\u0435\u0441\u0442: ",r.a.createElement("b",null,e.commonPlacesCount)),e.commonPlaces.toString().length>25&&r.a.createElement("div",{className:"PersonPlacesList"},e.commonPlaces.toString().slice(0,25)+".."),!(e.commonPlaces.toString().length>25)&&r.a.createElement("div",{className:"PersonPlacesList"},e.commonPlaces.toString())))}))},g=(n(243),function(e){var t=e.go,n=e.left,a=e.right;return r.a.createElement("div",{className:"App-bottom"},r.a.createElement("div",{className:"BottomLeftButton",onClick:t,"data-to":n},r.a.createElement("div",null)),r.a.createElement("div",{className:"BottomRightButton",onClick:t,"data-to":a},r.a.createElement("div",null)))}),E=(n(63),n(244),[{key:"1",imgLink:"https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",firstName:"\u0410\u0440\u0441\u0435\u043d\u0438\u0439",lastName:"\u041c\u043e\u043b\u043e\u0434\u0435\u0446\u043a\u0438\u0439",commonPlacesCount:4,commonPlaces:["\u042d\u043b\u0434\u0436\u0435\u0439","\u0422\u0438\u043c\u0430\u0442\u0438","\u0413\u0440\u0443\u043f\u043f\u0430 \u0421\u043a\u0440\u0438\u043f\u0442\u043e\u043d\u0438\u0442","AC/DC"]},{key:"2",imgLink:"https://sun9-67.userapi.com/c824204/v824204590/aca4d/Xl3J1Oyq1EU.jpg",firstName:"\u041d\u0438\u043a\u0438\u0442\u0430",lastName:"\u0411\u0430\u0448\u043a\u0438\u043d",commonPlacesCount:1,commonPlaces:["\u041a\u043e\u043d\u0446\u0435\u0440\u0442 \u0417\u0430\u043c\u0430\u044f"]},{key:"3",imgLink:"https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",firstName:"\u0410\u0440\u0441\u0435\u043d\u0438\u0439",lastName:"\u041c\u043e\u043b\u043e\u0434\u0435\u0446\u043a\u0438\u0439",commonPlacesCount:4,commonPlaces:["\u042d\u043b\u0434\u0436\u0435\u0439","\u0422\u0438\u043c\u0430\u0442\u0438","\u0413\u0440\u0443\u043f\u043f\u0430 \u0421\u043a\u0440\u0438\u043f\u0442\u043e\u043d\u0438\u0442","AC/DC"]},{key:"4",imgLink:"https://sun9-67.userapi.com/c824204/v824204590/aca4d/Xl3J1Oyq1EU.jpg",firstName:"\u041d\u0438\u043a\u0438\u0442\u0430",lastName:"\u0411\u0430\u0448\u043a\u0438\u043d",commonPlacesCount:1,commonPlaces:["\u041a\u043e\u043d\u0446\u0435\u0440\u0442 \u0417\u0430\u043c\u0430\u044f"]},{key:"5",imgLink:"https://sun9-67.userapi.com/c824204/v824204590/aca4d/Xl3J1Oyq1EU.jpg",firstName:"\u041d\u0438\u043a\u0438\u0442\u0430",lastName:"\u0411\u0430\u0448\u043a\u0438\u043d",commonPlacesCount:1,commonPlaces:["\u041a\u043e\u043d\u0446\u0435\u0440\u0442 \u0417\u0430\u043c\u0430\u044f"]},{key:"6",imgLink:"https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",firstName:"\u0410\u0440\u0441\u0435\u043d\u0438\u0439",lastName:"\u041c\u043e\u043b\u043e\u0434\u0435\u0446\u043a\u0438\u0439",commonPlacesCount:4,commonPlaces:["\u042d\u043b\u0434\u0436\u0435\u0439","\u0422\u0438\u043c\u0430\u0442\u0438","\u0413\u0440\u0443\u043f\u043f\u0430 \u0421\u043a\u0440\u0438\u043f\u0442\u043e\u043d\u0438\u0442","AC/DC"]},{key:"7",imgLink:"https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",firstName:"\u0410\u0440\u0441\u0435\u043d\u0438\u0439",lastName:"\u041c\u043e\u043b\u043e\u0434\u0435\u0446\u043a\u0438\u0439",commonPlacesCount:4,commonPlaces:["\u042d\u043b\u0434\u0436\u0435\u0439","\u0422\u0438\u043c\u0430\u0442\u0438","\u0413\u0440\u0443\u043f\u043f\u0430 \u0421\u043a\u0440\u0438\u043f\u0442\u043e\u043d\u0438\u0442","AC/DC"]},{key:"8",imgLink:"https://sun9-45.userapi.com/c854528/v854528685/d255a/ooAN1guMTAc.jpg",firstName:"\u0414\u0430\u043d\u0438\u043b\u0430",lastName:"\u0421\u0435\u0440\u0433\u0430\u0447\u0435\u0432",commonPlacesCount:1,commonPlaces:["\u0420\u043e\u043a"]},{key:"9",imgLink:"https://sun9-44.userapi.com/c848536/v848536553/153b99/ypLiVUE1jZA.jpg",firstName:"\u0418\u043b\u044c\u044f",lastName:"\u041a\u0443\u0440\u043d\u0430\u043a\u043e\u0432",commonPlacesCount:1,commonPlaces:["\u0422\u0440\u0435\u043f"]}]),b=[{key:"0",imgLink:"https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",firstName:"\u0410\u0440\u0441\u0435\u043d\u0438\u0439",lastName:"\u041c\u043e\u043b\u043e\u0434\u0435\u0446\u043a\u0438\u0439",commonPlacesCount:4,commonPlaces:["\u042d\u043b\u0434\u0436\u0435\u0439","\u0422\u0438\u043c\u0430\u0442\u0438","\u0413\u0440\u0443\u043f\u043f\u0430 \u0421\u043a\u0440\u0438\u043f\u0442\u043e\u043d\u0438\u0442","AC/DC"]}],S=n(36),y=n.n(S),j=function(e){var t=e.id,n=e.go,c=Object(a.useState)("true"),s=Object(p.a)(c,2),i=s[0],o=s[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById(t).children[0].style.paddingTop=0;case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(y.a,{id:t},r.a.createElement(h,{text:t}),r.a.createElement("div",{className:"HeaderLine"}),r.a.createElement("div",{className:"Head"},r.a.createElement("p",null,"\u041d\u043e\u0432\u044b\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f")),r.a.createElement(f,{stateList:i,stateRefresh:function(e){o(e)},matchedList:E,friendsList:b}),r.a.createElement("div",{className:"ScrollContainer"},r.a.createElement(d,{list:i?E:b})),r.a.createElement("div",{className:"Head Dialog"},r.a.createElement("p",null,"\u0414\u0438\u0430\u043b\u043e\u0433\u0438")),r.a.createElement("div",{className:"ListContainer"},r.a.createElement(v,{list:i?E:b})),r.a.createElement(g,{go:n,left:"swipe",right:"personal"}))},N=(n(262),n(45)),w=n(46),k=n(48),O=n(47),x=n(37),P=n(49),I=(n(263),n(264),function(e){var t=e.horizontalShift,n=e.verticalShift,a=e.hasMargin,c=e.isUpperTouch,s=e.cardInfo,i={transform:"rotate("+(c?-1:1)*t/15+"deg) translate("+t+"px, "+n+"px)",transition:e.isTransition?"0.2s":""};a&&(i["margin-top"]="-80vmax");var o=Math.min(Math.abs(t)/50,1),l={left:{opacity:t<0?o:0},right:{opacity:t>0?o:0}};return r.a.createElement("div",{className:"Swipe-content",style:i},r.a.createElement("div",{className:"Swipe-content-up"},r.a.createElement("div",{className:"Swipe-content-up-labels"},r.a.createElement("div",{style:l.right,className:"Swipe-right-label choice-label"},"\u041a\u0440\u0443\u0442\u043e"),r.a.createElement("div",{style:l.left,className:"Swipe-left-label choice-label"},"\u041e\u0442\u0441\u0442\u043e\u0439")),r.a.createElement("img",{className:"Swipe-content-up-image",src:s.images[0].image})),r.a.createElement("div",{className:"Swipe-content-down"},r.a.createElement("p",{id:"Font-bold"},r.a.createElement("b",null,s.short_title)),r.a.createElement("p",null,r.a.createElement("b",null,"4")," \u0430\u043f\u0440\u0435\u043b\u044f, \u0441\u0443\u0431\u0431\u043e\u0442\u0430, ",r.a.createElement("b",null,"20:00")),r.a.createElement("p",null,r.a.createElement("b",null,"20")," \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0438\u0434\u0451\u0442 - ",r.a.createElement("b",null,"1")," \u0434\u0440\u0443\u0433")))}),T=function(e){function t(e){var n;return Object(N.a)(this,t),(n=Object(k.a)(this,Object(O.a)(t).call(this,e))).onTouch=function(e){for(var t=e.changedTouches,a=0;a<t.length;a++){var r=n.state.currentX,c=n.state.currentY,s={currentX:t[a].clientX,currentY:t[a].clientY};n.state.isFirstTouch?(s.isUpperTouch=t[a].clientY>300,s.isFirstTouch=!1):(s.horizontalShift=n.state.horizontalShift+t[a].clientX-r,s.verticalShift=n.state.verticalShift+t[a].clientY-c),n.setState(s)}},n.onTouchStart=function(e){e.preventDefault(),n.setState({isFirstTouch:!0,isSwiping:!0,isTransition:!1})},n.onTouchEnd=function(e){if(Math.abs(n.state.horizontalShift)>100){var t=n.state.horizontalShift>0;n.setState({isTransition:!0}),n.setState({horizontalShift:5*n.state.horizontalShift,verticalShift:5*n.state.verticalShift});var a=Object(x.a)(n);setTimeout((function(){a.setState({isTransition:!1,horizontalShift:0,verticalShift:0,currentX:0,currentY:0}),a.props.onSwipeEnd(t)}),200)}else n.state.horizontalShift>300?n.props.changeDeck():n.setState({horizontalShift:0,verticalShift:0,currentX:0,currentY:0,isSwiping:!1,isTransition:!0})},n.state={currentX:0,currentY:0,horizontalShift:0,verticalShift:0,isFirstTouch:!0,isSwiping:!1},n}return Object(P.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Swipe-main",onTouchMove:this.onTouch,onTouchEnd:this.onTouchEnd,onTouchStart:this.onTouchStart},r.a.createElement(I,{cardInfo:this.props.cardInfo,isSwiping:this.state.isSwiping,horizontalShift:this.state.horizontalShift,verticalShift:this.state.verticalShift,isUpperTouch:this.state.isUpperTouch,isTransition:this.state.isTransition}))}}]),t}(a.Component),C=n(34);function L(e,t,n){return B.apply(this,arguments)}function B(){return(B=Object(m.a)(u.a.mark((function e(t,n,a){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=C.url+"/user/"+t+"/events/ratings",e.next=3,fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([{event_id:n,is_liked:a}])});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(e){function t(e){var n;return Object(N.a)(this,t),(n=Object(k.a)(this,Object(O.a)(t).call(this,e))).onSwipeEnd=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L(this.props.user.id,this.props.events[this.state.currentIndex].id,t),5===this.state.currentIndex&&this.props.loadEvents(),9!==this.state.currentIndex){e.next=5;break}return e.next=5,this.props.updateEvents();case 5:this.setState({currentIndex:this.nextIndex()});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n.nextIndex=function(){return 9===n.state.currentIndex?0:n.state.currentIndex+1},n.changeDeck=function(){},n.state={currentIndex:0},n.onSwipeEnd=n.onSwipeEnd.bind(Object(x.a)(n)),n}return Object(P.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.events,t=0===this.nextIndex()?this.props.bufferedEvents[0]:this.props.events[this.nextIndex()];return 0!==e.length?r.a.createElement("div",null,r.a.createElement(T,{changeDeck:this.changeDeck,cardInfo:this.props.events[this.state.currentIndex],onSwipeEnd:this.onSwipeEnd}),r.a.createElement(I,{hasMargin:!0,cardInfo:t})):r.a.createElement("div",null)}}]),t}(a.Component);function D(e){return _.apply(this,arguments)}function _(){return(_=Object(m.a)(u.a.mark((function e(t){var n,a,r,c,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:0,a=s.length>2&&void 0!==s[2]?s[2]:10,r=s.length>3&&void 0!==s[3]&&s[3],c="".concat(C.url,"/user/").concat(t,"/events/selection?category_id=1&category_id=6&page=").concat(n,"&size=").concat(a,"&is_personal=").concat(r),e.next=6,fetch(c,{method:"GET"});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return U.apply(this,arguments)}function U(){return(U=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C.url+"/category/all",e.next=3,fetch(t,{method:"GET"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(e){var t=e.id,n=e.go,c=e.user,s=Object(a.useState)([]),i=Object(p.a)(s,2),o=i[0],l=i[1],f=Object(a.useState)([]),d=Object(p.a)(f,2),v=d[0],E=d[1],b=Object(a.useState)([]),S=Object(p.a)(b,2),j=(S[0],S[1],Object(a.useState)(!1)),N=Object(p.a)(j,2);N[0],N[1];function w(){return(w=Object(m.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(c.id);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,E(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(v);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById(t).children[0].style.paddingTop=0;case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=Object(m.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==c){e.next=8;break}return e.next=3,D(c.id);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,l(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){n.apply(this,arguments)}(),console.log("I am here")}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==c){e.next=9;break}return e.next=3,D(c.id);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(n),l(n.content);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("hello"),function(){e.apply(this,arguments)}()}),[c]),r.a.createElement(y.a,{id:t},r.a.createElement(h,{text:t}),r.a.createElement("div",{className:"HeaderLine"}),r.a.createElement(A,{userId:c,events:o,loadEvents:function(){return w.apply(this,arguments)},updateEvents:function(){return k.apply(this,arguments)}}),r.a.createElement(g,{go:n,left:"personal",right:"matches"}))},Y=n(66),J=(n(265),function(e){var t=e.id,n=e.go,c=Object(a.useState)(null),s=Object(p.a)(c,2),i=s[0],l=s[1],f=Object(a.useState)(null),d=Object(p.a)(f,2),v=d[0],E=d[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById(t).children[0].style.paddingTop=0;case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.sendPromise("VKWebAppGetAuthToken",{app_id:7197573,scope:"friends"});case 2:t=e.sent,E(t.access_token);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){n.apply(this,arguments)}(),function(){a.apply(this,arguments)}()}),[]),r.a.createElement(y.a,{id:t},r.a.createElement(h,{text:t}),r.a.createElement("div",{className:"HeaderLine"}),r.a.createElement("div",{className:"PersonalContent"},r.a.createElement("div",{className:"PersonalBlock"},i&&r.a.createElement("div",{className:"PersonalData"},r.a.createElement("img",{src:i.photo_200?i.photo_200:null,alt:"Person"}),r.a.createElement("p",null,i.first_name?i.first_name:"",i.last_name?" "+i.last_name:""),v&&r.a.createElement("p",null,v)))),r.a.createElement(g,{go:n,left:"matches",right:"swipe"}))});n(266);function M(e){return G.apply(this,arguments)}function G(){return(G=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(C.url,"/user/identify?user_id=").concat(t),console.log(n),e.abrupt("return",fetch(n,{method:"GET"}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){var e=Object(a.useState)("panels"),t=Object(p.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),i=Object(p.a)(s,2),l=i[0],h=i[1],f=Object(a.useState)(1),d=Object(p.a)(f,2),v=(d[0],d[1],Object(a.useState)(!1)),g=Object(p.a)(v,2),E=(g[0],g[1],function(e){c(e.currentTarget.dataset.to)});return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.sendPromise("VKWebAppGetUserInfo");case 2:return t=e.sent,console.log(t),h(t),console.log("hello"),e.next=8,z();case 8:return n=e.sent,console.log(n),e.next=12,M(t.id);case 12:a=e.sent,console.log(a);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then()}),[]),r.a.createElement(Y.b,{activePanel:n},r.a.createElement(Y.a,{id:"panels"},r.a.createElement(J,{id:"personal",go:E}),r.a.createElement(X,{user:l,id:"swipe",go:E}),r.a.createElement(j,{id:"matches",go:E})))};o.a.send("VKWebAppInit"),s.a.render(r.a.createElement(F,null),document.getElementById("root"))},34:function(e){e.exports=JSON.parse('{"url":"https://amolodetskiy.me:8080/culter"}')},63:function(e,t,n){}},[[162,1,2]]]);
//# sourceMappingURL=main.2f700f9e.chunk.js.map