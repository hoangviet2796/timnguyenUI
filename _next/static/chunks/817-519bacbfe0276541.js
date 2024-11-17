"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[817],{6648:function(t,e,n){n.d(e,{default:function(){return i.a}});var r=n(5601),i=n.n(r)},6463:function(t,e,n){var r=n(1169);n.o(r,"useRouter")&&n.d(e,{useRouter:function(){return r.useRouter}})},5601:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{default:function(){return a},getImageProps:function(){return c}});let r=n(9920),i=n(497),o=n(8173),u=r._(n(1241));function c(t){let{props:e}=(0,i.getImgProps)(t,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/timnguyenus/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[t,n]of Object.entries(e))void 0===n&&delete e[t];return{props:e}}let a=o.Image},7059:function(t,e,n){n.d(e,{Z:function(){return i}});let r={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function i(t={}){let e,n,o;let u=!1,c=!0,a=!1,l=0;function s(){if(o||!c)return;u||n.emit("autoplay:play");let{ownerWindow:t}=n.internalEngine();t.clearInterval(l),l=t.setInterval(m,e.delay),u=!0}function f(){if(o)return;u&&n.emit("autoplay:stop");let{ownerWindow:t}=n.internalEngine();t.clearInterval(l),l=0,u=!1}function d(){if(p())return c=u,f();c&&s()}function p(){let{ownerDocument:t}=n.internalEngine();return"hidden"===t.visibilityState}function g(t){void 0!==t&&(a=t),c=!0,s()}function m(){let{index:t}=n.internalEngine(),r=t.clone().add(1).get(),i=n.scrollSnapList().length-1;e.stopOnLastSnap&&r===i&&f(),n.canScrollNext()?n.scrollNext(a):n.scrollTo(0,a)}return{name:"autoplay",options:t,init:function(u,l){n=u;let{mergeOptions:g,optionsAtMedia:m}=l,h=g(r,i.globalOptions);if(e=m(g(h,t)),n.scrollSnapList().length<=1)return;a=e.jump,o=!1;let{eventStore:y,ownerDocument:v}=n.internalEngine(),b=n.rootNode(),x=e.rootNode&&e.rootNode(b)||b,O=n.containerNode();n.on("pointerDown",f),e.stopOnInteraction||n.on("pointerUp",s),e.stopOnMouseEnter&&(y.add(x,"mouseenter",()=>{c=!1,f()}),e.stopOnInteraction||y.add(x,"mouseleave",()=>{c=!0,s()})),e.stopOnFocusIn&&(n.on("slideFocusStart",f),e.stopOnInteraction||y.add(O,"focusout",s)),y.add(v,"visibilitychange",d),e.playOnInit&&!p()&&s()},destroy:function(){n.off("pointerDown",f).off("pointerUp",s).off("slideFocusStart",f),f(),o=!0,u=!1},play:g,stop:function(){u&&f()},reset:function(){u&&g()},isPlaying:function(){return u}}}i.globalOptions=void 0},4300:function(t,e,n){n.d(e,{Z:function(){return I}});var r=n(2265);function i(t){return"[object Object]"===Object.prototype.toString.call(t)||Array.isArray(t)}function o(t,e){let n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&JSON.stringify(Object.keys(t.breakpoints||{}))===JSON.stringify(Object.keys(e.breakpoints||{}))&&n.every(n=>{let r=t[n],u=e[n];return"function"==typeof r?`${r}`==`${u}`:i(r)&&i(u)?o(r,u):r===u})}function u(t){return t.concat().sort((t,e)=>t.name>e.name?1:-1).map(t=>t.options)}function c(t){return"number"==typeof t}function a(t){return"string"==typeof t}function l(t){return"boolean"==typeof t}function s(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(t){return Math.abs(t)}function d(t){return Math.sign(t)}function p(t){return y(t).map(Number)}function g(t){return t[m(t)]}function m(t){return Math.max(0,t.length-1)}function h(t,e=0){return Array.from(Array(t),(t,n)=>e+n)}function y(t){return Object.keys(t)}function v(t,e){return void 0!==e.MouseEvent&&t instanceof e.MouseEvent}function b(){let t=[],e={add:function(n,r,i,o={passive:!0}){let u;return"addEventListener"in n?(n.addEventListener(r,i,o),u=()=>n.removeEventListener(r,i,o)):(n.addListener(i),u=()=>n.removeListener(i)),t.push(u),e},clear:function(){t=t.filter(t=>t())}};return e}function x(t=0,e=0){let n=f(t-e);function r(n){return n<t||n>e}return{length:n,max:e,min:t,constrain:function(n){return r(n)?n<t?t:e:n},reachedAny:r,reachedMax:function(t){return t>e},reachedMin:function(e){return e<t},removeOffset:function(t){return n?t-n*Math.ceil((t-e)/n):t}}}function O(t){let e=t;function n(t){return c(t)?t:t.get()}return{get:function(){return e},set:function(t){e=n(t)},add:function(t){e+=n(t)},subtract:function(t){e-=n(t)}}}function S(t,e){let n="x"===t.scroll?function(t){return`translate3d(${t}px,0px,0px)`}:function(t){return`translate3d(0px,${t}px,0px)`},r=e.style,i=!1;return{clear:function(){i||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(e){i||(r.transform=n(t.direction(e)))},toggleActive:function(t){i=!t}}}let w={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function E(t,e,n){let r,i,o,u,I;let D=t.ownerDocument,k=D.defaultView,L=function(t){function e(t,e){return function t(e,n){return[e,n].reduce((e,n)=>(y(n).forEach(r=>{let i=e[r],o=n[r],u=s(i)&&s(o);e[r]=u?t(i,o):o}),e),{})}(t,e||{})}return{mergeOptions:e,optionsAtMedia:function(n){let r=n.breakpoints||{},i=y(r).filter(e=>t.matchMedia(e).matches).map(t=>r[t]).reduce((t,n)=>e(t,n),{});return e(n,i)},optionsMediaQueries:function(e){return e.map(t=>y(t.breakpoints||{})).reduce((t,e)=>t.concat(e),[]).map(t.matchMedia)}}}(k),F=(I=[],{init:function(t,e){return(I=e.filter(({options:t})=>!1!==L.optionsAtMedia(t).active)).forEach(e=>e.init(t,L)),e.reduce((t,e)=>Object.assign(t,{[e.name]:e}),{})},destroy:function(){I=I.filter(t=>t.destroy())}}),M=b(),A=function(){let t,e={},n={init:function(e){t=e},emit:function(r){return(e[r]||[]).forEach(e=>e(t,r)),n},off:function(t,r){return e[t]=(e[t]||[]).filter(t=>t!==r),n},on:function(t,r){return e[t]=(e[t]||[]).concat([r]),n},clear:function(){e={}}};return n}(),{mergeOptions:N,optionsAtMedia:j,optionsMediaQueries:P}=L,{on:T,off:z,emit:V}=A,H=!1,C=N(w,E.globalOptions),R=N(C),_=[];function B(e,n){!H&&(R=j(C=N(C,e)),_=n||_,function(){let{container:e,slides:n}=R;o=(a(e)?t.querySelector(e):e)||t.children[0];let r=a(n)?o.querySelectorAll(n):n;u=[].slice.call(r||o.children)}(),r=function e(n){let r=function(t,e,n,r,i,o,u){let s,w;let{align:E,axis:I,direction:D,startIndex:k,loop:L,duration:F,dragFree:M,dragThreshold:A,inViewThreshold:N,slidesToScroll:j,skipSnaps:P,containScroll:T,watchResize:z,watchSlides:V,watchDrag:H,watchFocus:C}=o,R={measure:function(t){let{offsetTop:e,offsetLeft:n,offsetWidth:r,offsetHeight:i}=t;return{top:e,right:n+r,bottom:e+i,left:n,width:r,height:i}}},_=R.measure(e),B=n.map(R.measure),U=function(t,e){let n="rtl"===e,r="y"===t,i=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(t){let{height:e,width:n}=t;return r?e:n},direction:function(t){return t*i}}}(I,D),$=U.measureSize(_),q={measure:function(t){return t/100*$}},J=function(t,e){let n={start:function(){return 0},center:function(t){return(e-t)/2},end:function(t){return e-t}};return{measure:function(r,i){return a(t)?n[t](r):t(e,r,i)}}}(E,$),X=!L&&!!T,{slideSizes:Z,slideSizesWithGaps:G,startGap:Q,endGap:Y}=function(t,e,n,r,i,o){let{measureSize:u,startEdge:c,endEdge:a}=t,l=n[0]&&i,s=function(){if(!l)return 0;let t=n[0];return f(e[c]-t[c])}(),d=l?parseFloat(o.getComputedStyle(g(r)).getPropertyValue(`margin-${a}`)):0,p=n.map(u),h=n.map((t,e,n)=>{let r=e===m(n);return e?r?p[e]+d:n[e+1][c]-t[c]:p[e]+s}).map(f);return{slideSizes:p,slideSizesWithGaps:h,startGap:s,endGap:d}}(U,_,B,n,L||!!T,i),K=function(t,e,n,r,i,o,u,a,l){let{startEdge:s,endEdge:d,direction:h}=t,y=c(n);return{groupSlides:function(t){return y?p(t).filter(t=>t%n==0).map(e=>t.slice(e,e+n)):t.length?p(t).reduce((n,c,l)=>{let p=g(n)||0,y=c===m(t),v=i[s]-o[p][s],b=i[s]-o[c][d],x=r||0!==p?0:h(u),O=f(b-(!r&&y?h(a):0)-(v+x));return l&&O>e+2&&n.push(c),y&&n.push(t.length),n},[]).map((e,n,r)=>{let i=Math.max(r[n-1]||0);return t.slice(i,e)}):[]}}}(U,$,j,L,_,B,Q,Y,0),{snaps:W,snapsAligned:tt}=function(t,e,n,r,i){let{startEdge:o,endEdge:u}=t,{groupSlides:c}=i,a=c(r).map(t=>g(t)[u]-t[0][o]).map(f).map(e.measure),l=r.map(t=>n[o]-t[o]).map(t=>-f(t)),s=c(l).map(t=>t[0]).map((t,e)=>t+a[e]);return{snaps:l,snapsAligned:s}}(U,J,_,B,K),te=-g(W)+g(G),{snapsContained:tn,scrollContainLimit:tr}=function(t,e,n,r,i){let o=x(-e+t,0),u=n.map((t,e)=>{let{min:r,max:i}=o,u=o.constrain(t),c=e===m(n);return e?c||1>f(r-u)?r:1>f(i-u)?i:u:i}).map(t=>parseFloat(t.toFixed(3))),c=function(){let t=u[0],e=g(u);return x(u.lastIndexOf(t),u.indexOf(e)+1)}();return{snapsContained:function(){if(e<=t+2)return[o.max];if("keepSnaps"===r)return u;let{min:n,max:i}=c;return u.slice(n,i)}(),scrollContainLimit:c}}($,te,tt,T,0),ti=X?tn:tt,{limit:to}=function(t,e,n){let r=e[0];return{limit:x(n?r-t:g(e),r)}}(te,ti,L),tu=function t(e,n,r){let{constrain:i}=x(0,e),o=e+1,u=c(n);function c(t){return r?f((o+t)%o):i(t)}function a(){return t(e,u,r)}let l={get:function(){return u},set:function(t){return u=c(t),l},add:function(t){return a().set(u+t)},clone:a};return l}(m(ti),k,L),tc=tu.clone(),ta=p(n),tl=({dragHandler:t,scrollBody:e,scrollBounds:n,options:{loop:r}},i)=>{r||n.constrain(t.pointerDown()),e.seek(i)},ts=({scrollBody:t,translate:e,location:n,offsetLocation:r,scrollLooper:i,slideLooper:o,dragHandler:u,animation:c,eventHandler:a,scrollBounds:l,options:{loop:s}},f)=>{let d=t.settled(),p=!l.shouldConstrain(),g=s?d:d&&p;g&&!u.pointerDown()&&(c.stop(),a.emit("settle")),g||a.emit("scroll");let m=n.get()*f+tg.get()*(1-f);r.set(m),s&&(i.loop(t.direction()),o.loop()),e.to(r.get())},tf=function(t,e,n,r){let i=b(),o=1e3/60,u=null,c=0,a=0;function l(t){if(!a)return;u||(u=t);let i=t-u;for(u=t,c+=i;c>=o;)n(o),c-=o;r(c/o),a&&e.requestAnimationFrame(l)}function s(){e.cancelAnimationFrame(a),u=null,c=0,a=0}return{init:function(){i.add(t,"visibilitychange",()=>{t.hidden&&(u=null,c=0)})},destroy:function(){s(),i.clear()},start:function(){a||(a=e.requestAnimationFrame(l))},stop:s,update:()=>n(o),render:r}}(r,i,t=>tl(tI,t),t=>ts(tI,t)),td=ti[tu.get()],tp=O(td),tg=O(td),tm=O(td),th=O(td),ty=function(t,e,n,r,i,o){let u=0,c=0,a=i,l=.68,s=t.get(),p=0;function g(t){return a=t,h}function m(t){return l=t,h}let h={direction:function(){return c},duration:function(){return a},velocity:function(){return u},seek:function(e){let i=e/1e3,o=a*i,f=r.get()-t.get(),g=0;return a?(n.set(t),u+=f/o,u*=l,s+=u,t.add(u*i),g=s-p):(u=0,n.set(r),t.set(r),g=f),c=d(g),p=s,h},settled:function(){return .001>f(r.get()-e.get())},useBaseFriction:function(){return m(.68)},useBaseDuration:function(){return g(i)},useFriction:m,useDuration:g};return h}(tp,tm,tg,th,F,0),tv=function(t,e,n,r,i){let{reachedAny:o,removeOffset:u,constrain:c}=r;function a(t){return t.concat().sort((t,e)=>f(t)-f(e))[0]}function l(e,r){let i=[e,e+n,e-n];if(!t)return e;if(!r)return a(i);let o=i.filter(t=>d(t)===r);return o.length?a(o):g(i)-n}return{byDistance:function(n,r){let a=i.get()+n,{index:s,distance:d}=function(n){let r=t?u(n):c(n),{index:i}=e.map((t,e)=>({diff:l(t-r,0),index:e})).sort((t,e)=>f(t.diff)-f(e.diff))[0];return{index:i,distance:r}}(a),p=!t&&o(a);if(!r||p)return{index:s,distance:n};let g=n+l(e[s]-d,0);return{index:s,distance:g}},byIndex:function(t,n){let r=l(e[t]-i.get(),n);return{index:t,distance:r}},shortcut:l}}(L,ti,te,to,th),tb=function(t,e,n,r,i,o,u){function c(i){let c=i.distance,a=i.index!==e.get();o.add(c),c&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),a&&(n.set(e.get()),e.set(i.index),u.emit("select"))}return{distance:function(t,e){c(i.byDistance(t,e))},index:function(t,n){let r=e.clone().set(t);c(i.byIndex(r.get(),n))}}}(tf,tu,tc,ty,tv,th,u),tx=function(t){let{max:e,length:n}=t;return{get:function(t){return n?-((t-e)/n):0}}}(to),tO=b(),tS=function(t,e,n,r){let i;let o={},u=null,c=null,a=!1;return{init:function(){i=new IntersectionObserver(t=>{a||(t.forEach(t=>{o[e.indexOf(t.target)]=t}),u=null,c=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(t=>i.observe(t))},destroy:function(){i&&i.disconnect(),a=!0},get:function(t=!0){if(t&&u)return u;if(!t&&c)return c;let e=y(o).reduce((e,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(t&&i||!t&&!i)&&e.push(r),e},[]);return t&&(u=e),t||(c=e),e}}}(e,n,u,N),{slideRegistry:tw}=function(t,e,n,r,i,o){let{groupSlides:u}=i,{min:c,max:a}=r;return{slideRegistry:function(){let r=u(o);return 1===n.length?[o]:t&&"keepSnaps"!==e?r.slice(c,a).map((t,e,n)=>{let r=e===m(n);return e?r?h(m(o)-g(n)[0]+1,g(n)[0]):t:h(g(n[0])+1)}):r}()}}(X,T,ti,tr,K,ta),tE=function(t,e,n,r,i,o,u,a){let s={passive:!0,capture:!0},f=0;function d(t){"Tab"===t.code&&(f=new Date().getTime())}return{init:function(p){a&&(o.add(document,"keydown",d,!1),e.forEach((e,d)=>{o.add(e,"focus",e=>{(l(a)||a(p,e))&&function(e){if(new Date().getTime()-f>10)return;u.emit("slideFocusStart"),t.scrollLeft=0;let o=n.findIndex(t=>t.includes(e));c(o)&&(i.useDuration(0),r.index(o,0),u.emit("slideFocus"))}(d)},s)}))}}}(t,n,tw,tb,ty,tO,u,C),tI={ownerDocument:r,ownerWindow:i,eventHandler:u,containerRect:_,slideRects:B,animation:tf,axis:U,dragHandler:function(t,e,n,r,i,o,u,c,a,s,p,g,m,h,y,O,S,w,E){let{cross:I,direction:D}=t,k=["INPUT","SELECT","TEXTAREA"],L={passive:!1},F=b(),M=b(),A=x(50,225).constrain(h.measure(20)),N={mouse:300,touch:400},j={mouse:500,touch:600},P=y?43:25,T=!1,z=0,V=0,H=!1,C=!1,R=!1,_=!1;function B(t){if(!v(t,r)&&t.touches.length>=2)return U(t);let e=o.readPoint(t),n=o.readPoint(t,I),u=f(e-z),a=f(n-V);if(!C&&!_&&(!t.cancelable||!(C=u>a)))return U(t);let l=o.pointerMove(t);u>O&&(R=!0),s.useFriction(.3).useDuration(.75),c.start(),i.add(D(l)),t.preventDefault()}function U(t){let e=p.byDistance(0,!1).index!==g.get(),n=o.pointerUp(t)*(y?j:N)[_?"mouse":"touch"],r=function(t,e){let n=g.add(-1*d(t)),r=p.byDistance(t,!y).distance;return y||f(t)<A?r:S&&e?.5*r:p.byIndex(n.get(),0).distance}(D(n),e),i=function(t,e){var n,r;if(0===t||0===e||f(t)<=f(e))return 0;let i=(n=f(t),r=f(e),f(n-r));return f(i/t)}(n,r);C=!1,H=!1,M.clear(),s.useDuration(P-10*i).useFriction(.68+i/50),a.distance(r,!y),_=!1,m.emit("pointerUp")}function $(t){R&&(t.stopPropagation(),t.preventDefault(),R=!1)}return{init:function(t){E&&F.add(e,"dragstart",t=>t.preventDefault(),L).add(e,"touchmove",()=>void 0,L).add(e,"touchend",()=>void 0).add(e,"touchstart",c).add(e,"mousedown",c).add(e,"touchcancel",U).add(e,"contextmenu",U).add(e,"click",$,!0);function c(c){(l(E)||E(t,c))&&function(t){let c=v(t,r);_=c,R=y&&c&&!t.buttons&&T,T=f(i.get()-u.get())>=2,c&&0!==t.button||function(t){let e=t.nodeName||"";return k.includes(e)}(t.target)||(H=!0,o.pointerDown(t),s.useFriction(0).useDuration(0),i.set(u),function(){let t=_?n:e;M.add(t,"touchmove",B,L).add(t,"touchend",U).add(t,"mousemove",B,L).add(t,"mouseup",U)}(),z=o.readPoint(t),V=o.readPoint(t,I),m.emit("pointerDown"))}(c)}},destroy:function(){F.clear(),M.clear()},pointerDown:function(){return H}}}(U,t,r,i,th,function(t,e){let n,r;function i(t){return t.timeStamp}function o(n,r){let i=r||t.scroll,o=`client${"x"===i?"X":"Y"}`;return(v(n,e)?n:n.touches[0])[o]}return{pointerDown:function(t){return n=t,r=t,o(t)},pointerMove:function(t){let e=o(t)-o(r),u=i(t)-i(n)>170;return r=t,u&&(n=t),e},pointerUp:function(t){if(!n||!r)return 0;let e=o(r)-o(n),u=i(t)-i(n),c=i(t)-i(r)>170,a=e/u;return u&&!c&&f(a)>.1?a:0},readPoint:o}}(U,i),tp,tf,tb,ty,tv,tu,u,q,M,A,P,0,H),eventStore:tO,percentOfView:q,index:tu,indexPrevious:tc,limit:to,location:tp,offsetLocation:tm,previousLocation:tg,options:o,resizeHandler:function(t,e,n,r,i,o,u){let c,a;let s=[t].concat(r),d=[],p=!1;function g(t){return i.measureSize(u.measure(t))}return{init:function(i){o&&(a=g(t),d=r.map(g),c=new ResizeObserver(n=>{(l(o)||o(i,n))&&function(n){for(let o of n){if(p)return;let n=o.target===t,u=r.indexOf(o.target),c=n?a:d[u];if(f(g(n?t:r[u])-c)>=.5){i.reInit(),e.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{s.forEach(t=>c.observe(t))}))},destroy:function(){p=!0,c&&c.disconnect()}}}(e,u,i,n,U,z,R),scrollBody:ty,scrollBounds:function(t,e,n,r,i){let o=i.measure(10),u=i.measure(50),c=x(.1,.99),a=!1;function l(){return!!(!a&&t.reachedAny(n.get())&&t.reachedAny(e.get()))}return{shouldConstrain:l,constrain:function(i){if(!l())return;let a=t.reachedMin(e.get())?"min":"max",s=f(t[a]-e.get()),d=n.get()-e.get(),p=c.constrain(s/u);n.subtract(d*p),!i&&f(d)<o&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(t){a=!t}}}(to,tm,th,ty,q),scrollLooper:function(t,e,n,r){let{reachedMin:i,reachedMax:o}=x(e.min+.1,e.max+.1);return{loop:function(e){if(!(1===e?o(n.get()):-1===e&&i(n.get())))return;let u=-1*e*t;r.forEach(t=>t.add(u))}}}(te,to,tm,[tp,tm,tg,th]),scrollProgress:tx,scrollSnapList:ti.map(tx.get),scrollSnaps:ti,scrollTarget:tv,scrollTo:tb,slideLooper:function(t,e,n,r,i,o,u,c,a){let l=p(i),s=g(d(p(i).reverse(),u[0]),n,!1).concat(g(d(l,e-u[0]-1),-n,!0));function f(t,e){return t.reduce((t,e)=>t-i[e],e)}function d(t,e){return t.reduce((t,n)=>f(t,e)>0?t.concat([n]):t,[])}function g(i,u,l){let s=o.map((t,n)=>({start:t-r[n]+.5+u,end:t+e-.5+u}));return i.map(e=>{let r=l?0:-n,i=l?n:0,o=s[e][l?"end":"start"];return{index:e,loopPoint:o,slideLocation:O(-1),translate:S(t,a[e]),target:()=>c.get()>o?r:i}})}return{canLoop:function(){return s.every(({index:t})=>.1>=f(l.filter(e=>e!==t),e))},clear:function(){s.forEach(t=>t.translate.clear())},loop:function(){s.forEach(t=>{let{target:e,translate:n,slideLocation:r}=t,i=e();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:s}}(U,$,te,Z,G,W,ti,tm,n),slideFocus:tE,slidesHandler:(w=!1,{init:function(t){V&&(s=new MutationObserver(e=>{!w&&(l(V)||V(t,e))&&function(e){for(let n of e)if("childList"===n.type){t.reInit(),u.emit("slidesChanged");break}}(e)})).observe(e,{childList:!0})},destroy:function(){s&&s.disconnect(),w=!0}}),slidesInView:tS,slideIndexes:ta,slideRegistry:tw,slidesToScroll:K,target:th,translate:S(U,e)};return tI}(t,o,u,D,k,n,A);return n.loop&&!r.slideLooper.canLoop()?e(Object.assign({},n,{loop:!1})):r}(R),P([C,..._.map(({options:t})=>t)]).forEach(t=>M.add(t,"change",U)),R.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(X),r.eventHandler.init(X),r.resizeHandler.init(X),r.slidesHandler.init(X),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&u.length&&r.dragHandler.init(X),i=F.init(X,_)))}function U(t,e){let n=J();$(),B(N({startIndex:n},t),e),A.emit("reInit")}function $(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),F.destroy(),M.clear()}function q(t,e,n){R.active&&!H&&(r.scrollBody.useBaseFriction().useDuration(!0===e?0:R.duration),r.scrollTo.index(t,n||0))}function J(){return r.index.get()}let X={canScrollNext:function(){return r.index.add(1).get()!==J()},canScrollPrev:function(){return r.index.add(-1).get()!==J()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){H||(H=!0,M.clear(),$(),A.emit("destroy"),A.clear())},off:z,on:T,emit:V,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:U,rootNode:function(){return t},scrollNext:function(t){q(r.index.add(1).get(),t,-1)},scrollPrev:function(t){q(r.index.add(-1).get(),t,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:q,selectedScrollSnap:J,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return B(e,n),setTimeout(()=>A.emit("init"),0),X}function I(t={},e=[]){let n=(0,r.useRef)(t),i=(0,r.useRef)(e),[c,a]=(0,r.useState)(),[l,s]=(0,r.useState)(),f=(0,r.useCallback)(()=>{c&&c.reInit(n.current,i.current)},[c]);return(0,r.useEffect)(()=>{o(n.current,t)||(n.current=t,f())},[t,f]),(0,r.useEffect)(()=>{!function(t,e){if(t.length!==e.length)return!1;let n=u(t),r=u(e);return n.every((t,e)=>o(t,r[e]))}(i.current,e)&&(i.current=e,f())},[e,f]),(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&l){E.globalOptions=I.globalOptions;let t=E(l,n.current,i.current);return a(t),()=>t.destroy()}a(void 0)},[l,a]),[s,c]}E.globalOptions=void 0,I.globalOptions=void 0}}]);