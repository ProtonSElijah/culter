(this.webpackJsonpculter=this.webpackJsonpculter||[]).push([[0],{168:function(t,e,i){},169:function(t,e,i){},189:function(t,e,i){"use strict";i.r(e);i(90),i(118),i(120),i(121),i(123),i(124),i(125),i(126),i(127),i(128),i(129),i(130),i(132),i(133),i(134),i(135),i(136),i(137),i(138),i(139),i(140),i(141),i(143),i(144),i(145),i(146),i(147),i(148),i(149),i(150),i(151),i(152),i(153),i(154),i(155),i(156),i(157),i(158),i(159),i(160);var n=i(2),r=i.n(n),a=i(53),o=i.n(a),s=i(54),c=i.n(s),l=(i(168),i(169),i(80)),h=i(81),f=i(82),u=i(87),b=i(83),d=i(24),p=i(88),m=i(84),v=i.n(m),y=i(85),O=i.n(y),g=i(55),j=i.n(g),E=i(86),X=i.n(E),Y=i(40),k=i.n(Y);function R(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function w(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?R(i,!0).forEach((function(e){Object(l.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):R(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var P={width:40,height:40,borderRadius:"50%",background:"var(--accent)",position:"absolute",left:"50%",top:"50%",marginLeft:-20,marginTop:-20},M={height:200,border:"8px solid var(--icon_secondary)",position:"relative"},x=function(t){function e(t){var i;return Object(h.a)(this,e),(i=Object(u.a)(this,Object(b.a)(e).call(this,t))).state={shiftX:0,shiftY:0},i.startX=0,i.startY=0,i.onMove=i.onMove.bind(Object(d.a)(i)),i.onEnd=i.onEnd.bind(Object(d.a)(i)),i.getCircleRef=i.getCircleRef.bind(Object(d.a)(i)),i}return Object(p.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){this.limitX=this.circleRef.offsetLeft,this.limitY=this.circleRef.offsetTop}},{key:"onMove",value:function(t){var e=this.startX+t.shiftX,i=this.startY+t.shiftY;this.setState({shiftX:e>this.limitX?this.limitX:e<-this.limitX?-this.limitX:e,shiftY:i>this.limitY?this.limitY:i<-this.limitY?-this.limitY:i})}},{key:"onEnd",value:function(t){this.startX+=t.shiftX,this.startY+=t.shiftY}},{key:"getCircleRef",value:function(t){this.circleRef=t}},{key:"render",value:function(){var t=this.state,e=t.shiftX,i=t.shiftY;t.limitExceeded;return r.a.createElement(v.a,{activePanel:"gallery"},r.a.createElement(O.a,{id:"gallery"},r.a.createElement(j.a,null,"Touch"),r.a.createElement(X.a,{title:"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043a\u0440\u0443\u0436\u043e\u043a"},r.a.createElement("div",{style:w({},M,{borderColor:this.limitExceeded?"var(--destructive)":"var(--icon_secondary)"})},r.a.createElement(k.a,{getRootRef:this.getCircleRef,onMove:this.onMove,onEnd:this.onEnd,style:w({},P,{transform:"translate(".concat(e,"px, ").concat(i,"px)")})})))))}},{key:"limitExceeded",get:function(){var t=this.state,e=t.shiftX,i=t.shiftY;return Math.abs(e)>=this.limitX||Math.abs(i)>=this.limitY}}]),e}(r.a.Component);c.a.send("VKWebAppInit"),o.a.render(r.a.createElement(x,null),document.getElementById("root"))},89:function(t,e,i){t.exports=i(189)}},[[89,1,2]]]);
//# sourceMappingURL=main.fb73f67d.chunk.js.map