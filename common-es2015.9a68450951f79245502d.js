(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return s}));const o={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{o.selection()},i=()=>{o.selectionStart()},c=()=>{o.selectionChanged()},s=()=>{o.selectionEnd()},a=t=>{o.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const o=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const o=e/n,r=t*o-t+"ms",i=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},BkeJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("mrSG"),r=n("fXoL");let i=(()=>{class t{constructor(){this.items=[],this.cartItems=[]}addToCart(t,e){return Object(o.b)(this,void 0,void 0,(function*(){this.diff=3-e.length;for(let t=0;t<this.diff;t++)e+="_";if(e=t+e,console.log(e.slice(e.length-3)),null===localStorage.getItem("cart")?(this.items.push(e),localStorage.setItem("cart",JSON.stringify(this.items)),this.items=[]):(this.items=JSON.parse(localStorage.getItem("cart")),this.items.push(e),localStorage.setItem("cart",JSON.stringify(this.items)),this.items=[]),"user"in localStorage){this.temp=localStorage.getItem("user"),this.temp=JSON.parse(this.temp),this.email=this.temp.email,this.cartItems=JSON.parse(localStorage.getItem("cart"));const t={cartArray:this.cartItems,Email:this.email};yield fetch("https://mpranay.live/update/cart",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}console.log(localStorage.getItem("cart")),console.log(this.items),alert("Product added to cart successfully"),window.location.reload()}))}getItems(){return console.log("before json thing"+JSON.stringify(this.items)),this.items}removeitems(t,e){const n=this.items.indexOf(23,0);n>-1&&this.items.splice(n,1),console.log("after json thing"+JSON.stringify(this.items))}getitemcount(){return null!==localStorage.getItem("cart")&&(this.items=JSON.parse(localStorage.getItem("cart"))),this.items.length}clearCart(){return this.items=[],this.items}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));const o=async(t,e,n,o,r)=>{if(t)return t.attachViewToDom(e,n,r,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return o&&o.forEach(t=>i.classList.add(t)),r&&Object.assign(i,r),e.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},bUIu:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("OVxw"),r=n("ItpF"),i=n("2c9M");const c=(t,e)=>{let n,c;const s=(t,o,r)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(t,o);i&&e(i)?i!==n&&(l(),a(i,r)):l()},a=(t,e)=>{n=t,c||(c=n);const r=n;Object(o.g)(()=>r.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(o.g)(()=>e.classList.remove("ion-activated")),t&&c!==n&&n.click(),n=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>s(t.currentX,t.currentY,i.a),onMove:t=>s(t.currentX,t.currentY,i.b),onEnd:()=>{l(!0),Object(i.e)(),c=void 0}})}},c14U:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("mrSG"),r=n("fXoL"),i=n("Z2Br"),c=n("UbJi");let s=(()=>{class t{constructor(t,e){this.firebaseservice=t,this.firebaseAuth=e,this.items=[]}updateCartListToDB(){return Object(o.b)(this,void 0,void 0,(function*(){if("cart"in localStorage){const t=JSON.parse(localStorage.getItem("user"));this.email=t.email,this.items=JSON.parse(localStorage.getItem("cart"));const e={cartArray:this.items,Email:this.email};yield fetch("https://mpranay.live/update/cart",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}else console.log("nothing to do")}))}clearCart(){"cart"in localStorage?localStorage.removeItem("cart"):console.log("cart already cleared")}}return t.\u0275fac=function(e){return new(e||t)(r.Ub(i.a),r.Ub(c.a))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},dagM:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("tyNb"),r=n("fXoL");let i=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},imports:[[o.h]]}),t})()},hcCc:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s}));const o=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,i=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},c=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,n,o)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,o)}return!1}},lVXr:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("fXoL"),r=n("tyNb");let i=(()=>{class t{constructor(t){this.router=t}ngOnInit(){}home(){this.router.navigate(["/home"])}Verifylogin(){null==localStorage.getItem("user")?(console.log(null),this.router.navigate(["/login"])):(console.log("passed"),this.router.navigate(["/profile"]))}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(r.f))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-bottom-bar"]],decls:7,vars:0,consts:[[1,"footer"],[1,"home"],[3,"click"],[1,"fas","fa-home"],[1,"user"],[1,"fas","fa-user-circle"]],template:function(t,e){1&t&&(o.Qb(0,"div",0),o.Qb(1,"div",1),o.Qb(2,"button",2),o.Yb("click",(function(){return e.home()})),o.Mb(3,"i",3),o.Pb(),o.Pb(),o.Qb(4,"div",4),o.Qb(5,"button",2),o.Yb("click",(function(){return e.Verifylogin()})),o.Mb(6,"i",5),o.Pb(),o.Pb(),o.Pb())},styles:[".footer[_ngcontent-%COMP%]{position:fixed;left:0;bottom:0;width:100%;background:#fff;background:radial-gradient(circle,#fff 0,#afcce4 100%);height:60px;font-size:40px;color:#000;z-index:3}button[_ngcontent-%COMP%]{color:#000;background-color:transparent!important}.user[_ngcontent-%COMP%]{right:20px}.home[_ngcontent-%COMP%], .user[_ngcontent-%COMP%]{position:absolute}.home[_ngcontent-%COMP%]{left:20px}@media only screen and (max-width:600px){body[_ngcontent-%COMP%]{font-size:30px}.user[_ngcontent-%COMP%]{right:10px}.home[_ngcontent-%COMP%], .user[_ngcontent-%COMP%]{position:absolute}.home[_ngcontent-%COMP%]{left:10px}}"]}),t})()},q1A0:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("fXoL"),r=n("tyNb"),i=n("BkeJ");const c=function(){return["/home"]};let s=(()=>{class t{constructor(t,e){this.router=t,this.cartService=e,this.cartCount=0}ngOnInit(){this.cartCount=this.cartService.getitemcount()}routeToCart(){this.router.navigate(["cart"]).then(()=>{window.location.reload()})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(r.f),o.Lb(i.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-top-bar"]],decls:7,vars:2,consts:[[1,"header"],[1,"Logo"],[3,"routerLink"],["src","https://www.logaster.com/blog/wp-content/uploads/2019/04/2.-A-by-Nick-Matey.jpg","alt","Logo"],[1,"cart"],[3,"click"],[1,"fas","fa-shopping-cart"]],template:function(t,e){1&t&&(o.Qb(0,"div",0),o.Qb(1,"div",1),o.Qb(2,"button",2),o.Mb(3,"img",3),o.Pb(),o.Pb(),o.Qb(4,"div",4),o.Qb(5,"button",5),o.Yb("click",(function(){return e.routeToCart()})),o.Mb(6,"i",6),o.Pb(),o.Pb(),o.Pb()),2&t&&(o.Ab(2),o.fc("routerLink",o.hc(1,c)))},directives:[r.g],styles:[".header[_ngcontent-%COMP%]{position:fixed;left:0;top:0;width:100%;background:radial-gradient(circle,#fff 0,#afcce4 100%);height:40px;font-size:30px;color:#000;z-index:3}button[_ngcontent-%COMP%]{color:#000;background-color:transparent!important}.Logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:30px;width:30px}.Logo[_ngcontent-%COMP%]{left:20px}.cart[_ngcontent-%COMP%], .Logo[_ngcontent-%COMP%]{position:absolute}.cart[_ngcontent-%COMP%]{right:20px}@media only screen and (max-width:600px){body[_ngcontent-%COMP%]{font-size:30px}.Logo[_ngcontent-%COMP%]{left:10px}.cart[_ngcontent-%COMP%], .Logo[_ngcontent-%COMP%]{position:absolute}.cart[_ngcontent-%COMP%]{right:10px}}"]}),t})()}}]);