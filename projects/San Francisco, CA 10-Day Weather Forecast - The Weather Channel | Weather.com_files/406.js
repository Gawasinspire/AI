(window.webpackJsonp=window.webpackJsonp||[]).push([[406,419],{1612:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return u}));var r="light",i=7,a={width:568,height:320},u={0:{title:"Local Radar",layer:"twcRadarHcMosaic",style:"light",key:"radar",frames:1,frameRatio:2,attributionColor:"white"},1:{title:"Rain is in View",layer:"radarFcst",style:"light",key:"rainView",frames:13,frameRatio:2,attributionColor:"white"},2:{title:"Snow is in View",layer:"radarFcst",style:"light",key:"snowView",frames:12,frameRatio:2,attributionColor:"white"},3:{title:"Wintry Mix is in View",layer:"radarFcst",style:"light",key:"mixView",frames:13,frameRatio:2,attributionColor:"white"},4:{title:"Storms in View",layer:"radarFcst",style:"light",key:"stormView",frames:13,frameRatio:2,attributionColor:"white"},5:{title:"Lightning in View",layer:"radarFcst",vector:"600",style:"light",key:"lightningView",frames:13,frameRatio:2,attributionColor:"white"}}},1647:function(e,t,n){"use strict";n.d(t,"d",(function(){return N})),n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return C})),n.d(t,"e",(function(){return T})),n.d(t,"a",(function(){return R}));var r=n(32),i=n.n(r),a=n(8),u=n.n(a),c=n(0),o=n(58),s=n(4),l=n.n(s),f=n(3),d=n(28),m=n(96),b=n(270),h=n(1612),v=(n(35),n(42),n(21),n(31),n(37),n(54),n(310)),p=n.n(v),w=n(36),g=n.n(w),y=n(412),x=n.n(y),O=n(1269),k=function(e,t){if(e.length<2){for(var n="",r=0;r<t;r++)n+="0";return n.length>0?(e.push(n),e.join(".")):e[0]}var i=e[0],a=e[1].split("");return function(e,t){if(t.length<1)return e;var n=x()(t[t.length-1],10);return t[t.length-1]=n>0&&n<=4?"0":"5",e+"."+t.join("")}(i,g()(a).call(a,0,t))},j=function(e,t){var n=e.toString().split("."),r=function(e){if(e<5)return 0;if(e<8)return 1;if(e<12)return 2;if(e>=12)return 3;throw new Error("Cannot get precision from invalid level of detail")}(t);return k(n,r)},I=function(e,t,n,r,i){return"fts"===e&&0===n||"ts"===e&&n===t[e].length-1?"Now":("fts"===e&&(a=1e3*t[e][n]),"ts"===e&&(a=1e3*t[e][n].ts),Object(O.a)({date:a,locale:r,timeZone:i,minutes:!0}));var a},N=Object(c.a)(f.d,(function(e){var t,n=e({name:"getSunV3TileServerSeriesDynamicMapsUrlConfig"});return null!=(t=null==n?void 0:n.seriesInfo)?t:null})),V=Object(c.a)(d.j,d.l,m.i,m.j,(function(e,t,n,r){var i=e;return e&&!u()(e).call(e,"en")||(i="en-US"),{latitude:n,longitude:r,units:t,language:i}})),E=Object(c.a)(V,(function(e){return{name:"getSunV1WWIRByGeocodeUrlConfig",params:e}})),S=Object(c.a)(f.d,E,(function(e,t){return e(t)})),C=function(e){return Object(c.a)(Object(b.b)(e),(function(e){return e("radar")}))},T=Object(c.a)(S,(function(e){var t=l()(e,"forecast")||{overall_type:"0"};return t.product=h.c[t.overall_type],t})),R=Object(c.a)(N,m.i,m.j,d.j,d.h,m.h,T,d.b,(function(e,t,n,r,a,u,c,s){if(e){for(var f=l()(c,"product"),d=["en","fr","es","de","ru","zu"],m=i()(d).call(d,a)>=0?a:"en",b=h.d.width,v=h.d.height,w=j(t,h.b),y=j(n,h.b),x=o.env.SUN_V2_API_KEY_CLIENT,O=function(e,t){var n=t.layer,r=t.frameRatio,i=t.frames,a=i>1,u=e[n],c=u.series[0].fts||null,o=u.series||[];if(c){var s,l=p()(s=g()(c).call(c)).call(s),f=a?g()(l).call(l,0,2*i):g()(l).call(l,0,1);return r&&(f=function(e,t){for(var n=[],r=0;r<e.length;r+=t)n.push(e[r]);return n}(f,r)),{type:"fts",fts:f,ts:o[0].ts}}if(o){var d=[];return d.push(o[0].ts),{type:"ts",ts:d}}}(e,f),k=O.type,N=O[k]?O[k].length:0,V=[],E=0;E<N;E+=1){var S=O.fts||null,C=O.ts||null,T=null,R=void 0,_=void 0,D=f.layer;"fts"===k&&(R="&fts="+S[E],_="&ts="+C),"ts"===k&&C[E].ts&&(_="&ts="+C[E].ts),"IN"===s&&(T="&region=in"),f.vector&&(D=f.layer+","+f.vector);var M="//api.weather.com/v2/maps/dynamic?geocode="+w+","+y+"&h="+v+"&w="+b+"&lod="+h.b+"&product="+D+"&map="+h.a+"&format=jpg&language="+m+"&apiKey="+x+"&a=0"+(void 0!==_?_:"")+(void 0!==R?R:"")+(T||"");V.push({id:"ts-"+E,url:M,time:I(k,O,E,r,u)})}return V}return null}))},1864:function(e,t,n){"use strict";n.r(t),n.d(t,"clientLoader",(function(){return v})),n.d(t,"fetchWWIR",(function(){return w}));n(21),n(104);var r=n(2),i=n.n(r),a=(n(48),n(15)),u=n(6),c=n(846),o=n(28),s=n(7),l=n(862),f=n(316),d=n(47),m=n(304),b=n(1647),h=i.a.mark(w);function v(e,t){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(i.a.mark((function e(t,r){var a,u,m,b,h,v,p,g,y,x,O;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.props,u=r.containerId,m=t.select(o.j),b=t.select(l.a),"vi-VN"!==m&&!b){e.next=5;break}return e.abrupt("return","");case 5:return e.next=7,t.runSaga(c.runDaybreakMetrics,{elementId:u,moduleName:"TodayMapCard",reduxStore:t.getStore()});case 7:if(h=t.select(s.e),v=t.select(f.j),!h||v!==d.h){e.next=11;break}return e.abrupt("return");case 11:return e.next=13,Promise.all([n.e(1),n.e(2),n.e(3),n.e(418),n.e(432)]).then(n.bind(null,1859));case 13:if(p=e.sent,g=p.container,h){e.next=18;break}return e.next=18,t.runSaga(w);case 18:if(y=g(t,a),!h){e.next=27;break}return e.next=22,n.e(0).then(n.t.bind(null,854,7));case 22:x=e.sent,(0,x.hydrate)(y,document.getElementById(u)),e.next=32;break;case 27:return e.next=29,n.e(0).then(n.t.bind(null,854,7));case 29:O=e.sent,(0,O.render)(y,document.getElementById(u));case 32:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.i)(b.c);case 2:return e=t.sent,t.next=5,Object(u.c)(m.a,[e]);case 5:case"end":return t.stop()}}),h)}},830:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"k",(function(){return i})),n.d(t,"n",(function(){return a})),n.d(t,"j",(function(){return u})),n.d(t,"l",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"m",(function(){return b})),n.d(t,"f",(function(){return h})),n.d(t,"d",(function(){return v}));var r="twc/metrics/SEND_BEACON",i="twc/metrics/TRACK_STRING",a="twc/metrics/FROM_STRING",u="twc/metrics/SEND_IVW_BEACON",c="twc/metrics/SEND_VIDEO_BEACON",o="daybreak-metrics",s="true",l="twc/metrics/SEND_DAYBREAK_IN_VIEW_BEACON",f="twc/metrics/SEND_DAYBREAK_TRACK_STRING",d=1e3,m=.5,b=200,h={root:null,rootMargin:"0px",threshold:[.25,m,.75]},v={threshold:{x:m,y:m}}},832:function(e,t,n){var r=n(117),i=n(267),a=n(838),u=n(834),c=Math.max,o=Math.min;e.exports=function(e,t,n){var s,l,f,d,m,b,h=0,v=!1,p=!1,w=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=s,r=l;return s=l=void 0,h=t,d=e.apply(r,n)}function y(e){return h=e,m=r(O,t),v?g(e):d}function x(e){var n=e-b;return void 0===b||n>=t||n<0||p&&e-h>=f}function O(){var e=a();if(x(e))return k(e);m=r(O,function(e){var n=t-(e-b);return p?o(n,f-(e-h)):n}(e))}function k(e){return m=void 0,w&&s?g(e):(s=l=void 0,d)}function j(){var e=a(),n=x(e);if(s=arguments,l=this,b=e,n){if(void 0===m)return y(b);if(p)return clearTimeout(m),m=r(O,t),g(b)}return void 0===m&&(m=r(O,t)),d}return t=u(t)||0,i(n)&&(v=!!n.leading,f=(p="maxWait"in n)?c(u(n.maxWait)||0,t):f,w="trailing"in n?!!n.trailing:w),j.cancel=function(){void 0!==m&&clearTimeout(m),h=0,s=b=l=m=void 0},j.flush=function(){return void 0===m?d:k(a())},j}},834:function(e,t,n){n(31),n(64);var r=n(36),i=n(412),a=n(267),u=n(215),c=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=i;e.exports=function(e){if("number"==typeof e)return e;if(u(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=s.test(e);return n||l.test(e)?f(r(e).call(e,2),n?2:8):o.test(e)?NaN:+e}},835:function(e,t,n){var r=n(832),i=n(267);e.exports=function(e,t,n){var a=!0,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(a="leading"in n?!!n.leading:a,u="trailing"in n?!!n.trailing:u),r(e,t,{leading:a,maxWait:t,trailing:u})}},837:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));var r=n(820),i=n(830),a=Object(r.a)(i.k),u=Object(r.a)(i.n),c=Object(r.a)(i.j),o=Object(r.a)(i.l),s=(Object(r.a)(i.g),Object(r.a)(i.h)),l=Object(r.a)(i.i)},838:function(e,t,n){var r=n(86);e.exports=function(){return r.Date.now()}},839:function(e,t,n){e.exports=n(842)},842:function(e,t,n){var r=n(843);e.exports=r},843:function(e,t,n){n(844);var r=n(24);e.exports=r.Number.isNaN},844:function(e,t,n){n(5)({target:"Number",stat:!0},{isNaN:function(e){return e!=e}})},846:function(e,t,n){"use strict";n.r(t),n.d(t,"registerDaybreakMetricsSaga",(function(){return C})),n.d(t,"removeFromDaybreakPool",(function(){return T})),n.d(t,"addToDaybreakPool",(function(){return R})),n.d(t,"isInDaybreakPool",(function(){return _})),n.d(t,"useDaybreakMetrics",(function(){return D})),n.d(t,"shouldBeInPool",(function(){return M})),n.d(t,"getValidPercentage",(function(){return B})),n.d(t,"runDaybreakMetrics",(function(){return A})),n.d(t,"DaybreakModuleMetrics",(function(){return L}));var r=n(117),i=n.n(r),a=n(273),u=n.n(a),c=n(74),o=n.n(c),s=n(412),l=n.n(s),f=n(839),d=n.n(f),m=n(2),b=n.n(m),h=(n(48),n(6)),v=n(271),p=n.n(v),w=n(835),g=n.n(w),y=n(214),x=n(22),O=n(837),k=n(830),j=b.a.mark(C),I=b.a.mark(T),N=b.a.mark(R),V=b.a.mark(A),E=b.a.mark(W),S=Object(x.createLogger)("daybreak-metrics");function C(e){var t,n,r,i,a;return b.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,t=e.percentage,n=e.deleteCookie,u.next=4,Object(h.c)(B,t);case 4:return r=u.sent,u.next=7,Object(h.c)(_);case 7:return i=u.sent,u.next=10,Object(h.c)(M,r);case 10:if(a=u.sent,!n){u.next=15;break}return u.next=14,Object(h.c)(T);case 14:return u.abrupt("return");case 15:if(!i&&a){u.next=17;break}return u.abrupt("return");case 17:return u.next=19,Object(h.c)(R);case 19:u.next=24;break;case 21:u.prev=21,u.t0=u.catch(0),S.error(u.t0);case 24:case"end":return u.stop()}}),j,null,[[0,21]])}function T(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.c)([p.a,p.a.expire],k.a);case 2:case"end":return e.stop()}}),I)}function R(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={domain:".weather.com"},t.next=3,Object(h.c)([p.a,p.a.set],k.a,k.b,e);case 3:case"end":return t.stop()}}),N)}function _(){var e=p.a.get(k.a);return e&&e===k.b}function D(){return _()}function M(e){return!d()(e)&&(!!e&&Math.ceil(100*Math.random())<=e)}function B(e){var t="number"!=typeof e?l()(e,10):e;return d()(t)?0:t}var F=new o.a;function A(e,t){var n,r,i,a,u,c,o,s;return b.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return n=e.elementId,r=e.moduleName,i=e.reduxStore,a=(void 0===t?{}:t).moduleMetricsInstances,u=void 0===a?F:a,l.next=4,Object(h.c)(D);case 4:return c=l.sent,l.next=7,Object(h.c)([u,u.has],r);case 7:if(o=l.sent,c&&!o){l.next=10;break}return l.abrupt("return");case 10:return l.next=12,Object(h.c)([u,u.add],r);case 12:return l.next=14,Object(h.c)(W,{elementId:n,moduleName:r,reduxStore:i});case 14:return s=l.sent,l.next=17,Object(h.c)([s,s.init]);case 17:case"end":return l.stop()}}),V)}function W(e){var t,n,r,i;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.elementId,n=e.moduleName,r=e.reduxStore,i=r.dispatch,a.abrupt("return",new L({elementId:t,moduleName:n,dispatch:i}));case 3:case"end":return a.stop()}}),E)}var L=function(){function e(e){var t=this,n=e.elementId,r=e.moduleName,a=e.dispatch;this.observerCallback=function(e){var n=e[0];n.isIntersecting&&n.intersectionRatio>=k.c?t.hasInViewBeaconFired||t.timeoutCallback||t.setInViewTimeout():requestAnimationFrame(t.clearInViewTimeout)},this.enableHandlers=function(){t.intersectionObserver?t.intersectionObserver.observe(t.htmlElement):document.addEventListener("scroll",t.scrollEventHandler)},this.scrollEventHandler=g()((function(){Object(y.a)(t.htmlElement,k.d)?t.hasInViewBeaconFired||t.timeoutCallback||t.setInViewTimeout():requestAnimationFrame(t.clearInViewTimeout)}),k.m),this.setInViewTimeout=function(){t.hasIntersected=!0,t.timeFirstInView=u()(),t.timeoutCallback=i()((function(){t.sendInViewBeacon()}),k.e)},this.clearInViewTimeout=function(){t.hasIntersected&&u()()-t.timeFirstInView<k.e&&(clearTimeout(t.timeoutCallback),t.timeoutCallback=null)},this.htmlElement=document.getElementById(n),this.hasIntersected=!1,this.hasInViewBeaconFired=!1,this.timeFirstInView=0,this.timeoutCallback=null,this.intersectionObserver=null,this.sendInViewBeacon=function(){return a(Object(O.a)(r))},this.sendTrackString=function(){return a(Object(O.b)(r))}}return e.prototype.init=function(){IntersectionObserver&&(this.intersectionObserver=new IntersectionObserver(this.observerCallback,k.f)),this.enableHandlers(),this.htmlElement.addEventListener("click",this.sendTrackString)},e}()},862:function(e,t,n){"use strict";var r=n(168);n.d(t,"a",(function(){return r.c})),n.d(t,"b",(function(){return r.d}))}}]);
//# sourceMappingURL=406.vendors~TodayMapCard.4acb2a0204dec5cba937.js.map