(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"ct+p":function(t,n,e){"use strict";e.r(n),e.d(n,"HomePageModule",(function(){return E}));var o=e("ofXK"),i=e("TEn/"),r=e("3Pt+"),c=e("dagM"),s=e("tyNb"),a=e("fXoL"),b=e("m/P+"),d=e("59dN"),l=e("q1A0");function h(t,n){if(1&t&&(a.Rb(0,"div",15),a.Nb(1,"img",16),a.Nb(2,"br"),a.Rb(3,"p"),a.oc(4),a.Qb(),a.Qb()),2&t){const t=n.$implicit;a.Cb(4),a.qc("Category ",t," ")}}function g(t,n){if(1&t){const t=a.Sb();a.Rb(0,"div",15),a.Rb(1,"div",17),a.Rb(2,"a",3),a.Zb("click",(function(){return a.ic(t),a.bc().product_page()})),a.Nb(3,"img",16),a.Qb(),a.Qb(),a.Nb(4,"br"),a.Rb(5,"p"),a.oc(6),a.Qb(),a.Qb()}if(2&t){const t=n.$implicit;a.Cb(6),a.qc("Category ",t," ")}}function u(t,n){if(1&t){const t=a.Sb();a.Rb(0,"div",15),a.Rb(1,"div",17),a.Rb(2,"a",3),a.Zb("click",(function(){return a.ic(t),a.bc().product_page()})),a.Nb(3,"img",18),a.Qb(),a.Qb(),a.Nb(4,"br"),a.Rb(5,"p"),a.oc(6),a.Qb(),a.Qb()}if(2&t){const t=n.$implicit;a.Cb(6),a.qc("Category ",t," ")}}function p(t,n){if(1&t){const t=a.Sb();a.Rb(0,"div",15),a.Rb(1,"div",17),a.Rb(2,"a",3),a.Zb("click",(function(){return a.ic(t),a.bc().product_page()})),a.Nb(3,"img",19),a.Qb(),a.Qb(),a.Nb(4,"br"),a.Rb(5,"p"),a.oc(6),a.Qb(),a.Qb()}if(2&t){const t=n.$implicit;a.Cb(6),a.qc("Category ",t," ")}}const f=function(){return[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]},m=function(){return[1,2,3,4,5,6,7,8,9]},_=[{path:"",component:(()=>{class t{constructor(t,n,e){this.router=t,this.iab=n,this.webIntent=e}onClick(){myTest()}test(){this.router.navigate(["/category"])}product_page(){this.router.navigate(["/product-page"])}Verifylogin(){null==localStorage.getItem("user")?(console.log(null),this.router.navigate(["/login"])):(console.log("passed"),this.router.navigate(["/profile"]))}openbrowser(){const t=this.iab.create("https://ionicframework.com/","_blank");t.on("loadstart").subscribe(n=>{console.log(n.url),"https://ionicframework.com/getting-started"===n.url&&t.close()})}payment_trail(){this.payeeVPA="8919345427@upi",this.payeeName="pranay",this.payAmount=2,this.transactionReference="871489872",this.transactionNote="testing",this.currency="INR",this.webIntent.startActivityForResult({action:this.webIntent.ACTION_VIEW,url:"upi://pay?pa="+this.payeeVPA+"&pn="+this.payeeName+"&tr="+this.transactionReference+"tn="+this.transactionNote+"&am="+this.payAmount+"&cu="+this.currency,package:"com.whatsapp"}).then(t=>{console.log("sucess hello",t)})}}return t.\u0275fac=function(n){return new(n||t)(a.Mb(s.f),a.Mb(b.a),a.Mb(d.a))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-home"]],decls:59,vars:8,consts:[["href","https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap","rel","stylesheet"],[1,"scrollmenu"],["class","sub",4,"ngFor","ngForOf"],[3,"click"],[1,"parent"],[1,"child"],["src","https://i.pinimg.com/originals/6e/79/24/6e7924745047fa29d19060ff4fb39d56.jpg","alt","Top dresses"],[1,"category_1"],["alt","Info icon","src","https://img.icons8.com/android/344/info.png","lazy","loaded"],[1,"footer"],["href",""],["aria-hidden","true",1,"fa","fa-home"],[1,"search"],["type","text","name","search","placeholder","Search.."],["aria-hidden","true",1,"fa","fa-user-circle-o"],[1,"sub"],["src","https://image.kilimall.com/uganda/shop/store/goods/591/2017/11/591_05631122058552463_360.jpg.webp","alt","image"],[1,"information"],["src","https://i.pinimg.com/originals/60/c8/f3/60c8f39cbbe94b2756de4c9e0d41ca2b.png","alt","image"],["src","https://i.pinimg.com/originals/23/04/47/230447d273c21794d0333455d65d488e.png","alt","image"]],template:function(t,n){1&t&&(a.Rb(0,"html"),a.Rb(1,"head"),a.Rb(2,"title"),a.oc(3,"Home Page"),a.Qb(),a.Nb(4,"link",0),a.Qb(),a.Rb(5,"body"),a.Nb(6,"app-top-bar"),a.Nb(7,"br"),a.Nb(8,"br"),a.Rb(9,"div",1),a.nc(10,h,5,1,"div",2),a.Qb(),a.Rb(11,"button",3),a.Zb("click",(function(){return n.openbrowser()})),a.oc(12," clickme"),a.Qb(),a.Rb(13,"button",3),a.Zb("click",(function(){return n.payment_trail()})),a.oc(14,"Pay"),a.Qb(),a.Rb(15,"div",4),a.Rb(16,"div",5),a.Nb(17,"img",6),a.Qb(),a.Rb(18,"div"),a.Rb(19,"p"),a.oc(20,"Top dress"),a.Qb(),a.Qb(),a.Qb(),a.Rb(21,"div",7),a.Rb(22,"p"),a.oc(23," Category - 1 "),a.Qb(),a.Rb(24,"a",3),a.Zb("click",(function(){return n.test()})),a.Rb(25,"button"),a.Nb(26,"img",8),a.oc(27," Show More "),a.Qb(),a.Qb(),a.Qb(),a.Rb(28,"div",1),a.nc(29,g,7,1,"div",2),a.Qb(),a.Rb(30,"div",7),a.Rb(31,"p"),a.oc(32," Fresh Arrivals "),a.Qb(),a.Rb(33,"a",3),a.Zb("click",(function(){return n.test()})),a.Rb(34,"button"),a.Nb(35,"img",8),a.oc(36," Show More "),a.Qb(),a.Qb(),a.Qb(),a.Rb(37,"div",1),a.nc(38,u,7,1,"div",2),a.Qb(),a.Rb(39,"div",7),a.Rb(40,"p"),a.oc(41," Category - 2 "),a.Qb(),a.Rb(42,"a",3),a.Zb("click",(function(){return n.test()})),a.Rb(43,"button"),a.Nb(44,"img",8),a.oc(45," Show More "),a.Qb(),a.Qb(),a.Qb(),a.Rb(46,"div",1),a.nc(47,p,7,1,"div",2),a.Nb(48,"br"),a.Nb(49,"br"),a.Nb(50,"br"),a.Rb(51,"div",9),a.Rb(52,"a",10),a.Nb(53,"i",11),a.Qb(),a.Rb(54,"div",12),a.Rb(55,"form"),a.Nb(56,"input",13),a.Qb(),a.Qb(),a.Rb(57,"a",3),a.Zb("click",(function(){return n.Verifylogin()})),a.Nb(58,"i",14),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&t&&(a.Cb(10),a.ec("ngForOf",a.fc(4,f)),a.Cb(19),a.ec("ngForOf",a.fc(5,m)),a.Cb(9),a.ec("ngForOf",a.fc(6,m)),a.Cb(9),a.ec("ngForOf",a.fc(7,m)))},directives:[l.a,o.h,r.g,r.d,r.e],styles:["html[_ngcontent-%COMP%]:not(.hydrated)   body[_ngcontent-%COMP%]{display:block}div.scrollmenu[_ngcontent-%COMP%]{overflow:auto;white-space:nowrap}div.scrollmenu[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]{display:inline-block;text-align:center;padding:7px;text-decoration:none}div.scrollmenu[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]:hover{background-color:#777}div.scrollmenu[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:100%;height:60px;width:60px}div.scrollmenu[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff8dc}p[_ngcontent-%COMP%]{color:#fff}body[_ngcontent-%COMP%]{padding:1%;position:absolute;top:0;right:0;bottom:0;left:0;overflow-y:scroll;overflow-x:hidden;background:#5d5b5b;background:radial-gradient(circle,#5d5b5b 0,#000 100%)}.wrapper[_ngcontent-%COMP%]{overflow:auto}.c1[_ngcontent-%COMP%]{float:left;text-align:left;padding-left:10px}.c1[_ngcontent-%COMP%], .c2[_ngcontent-%COMP%]{width:100px;padding-top:10px}.c2[_ngcontent-%COMP%]{float:right;text-align:right;padding-right:10px}.parent[_ngcontent-%COMP%]{display:grid;place-items:center}.child[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:500px}.child[_ngcontent-%COMP%]{padding:10px}.parent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Cinzel,serif;font-size:50px}.category_1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100px;font-family:Nanum Myeongjo,serif}.category_1[_ngcontent-%COMP%]{display:flex;text-align:center}.category_1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:10px;height:25px}.category_1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:15px;width:15px}div.scrollmenu[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;height:200px;width:200px}.footer[_ngcontent-%COMP%]{position:fixed;left:0;bottom:0;width:100%;background-color:#000;color:#fff;display:flex;height:60px;font-size:50px;padding:10px;text-decoration:none}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:grey}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link{text-decoration:none}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.footer[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding:2px;margin-top:2px;font-size:17px;border:none;height:25px;color:#000;width:100px}.search[_ngcontent-%COMP%]{margin:auto}@media only screen and (max-width:600px){.child[_ngcontent-%COMP%]{padding:30px}.child[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:300px}.parent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:40px}div.scrollmenu[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;height:150px;width:150px}}","[_ngcontent-%COMP%]::-webkit-scrollbar {\n      width: 1px;\n      height: 5px;\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n      \n      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n      \n      background-color: darkgrey;\n      outline: 1px solid slategrey;\n      border-radius: 100%;\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n      background: #b30000;\n    }"]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)},imports:[[s.h.forChild(_)],s.h]}),t})();e("HDdC"),e("XNiG"),e("7o/Q"),e("D0XW");let C,w=(()=>{class t{create(t){return"undefined"==typeof MutationObserver?null:new MutationObserver(t)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=Object(a.Ib)({factory:function(){return new t},token:t,providedIn:"root"}),t})(),v=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)},providers:[w]}),t})();e("quSY"),e("LRne"),e("vkgz"),e("pLZG"),e("lJxs"),e("IzEk");try{C="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(j){C=!1}let M=(()=>{class t{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Object(o.o)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!C)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(n){return new(n||t)(a.Vb(a.B,8))},t.\u0275prov=Object(a.Ib)({factory:function(){return new t(Object(a.Vb)(a.B,8))},token:t,providedIn:"root"}),t})();"undefined"!=typeof Element&&Element;let k=(()=>{class t{constructor(t,n){this._platform=t,this._document=n}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);const n=this._document.defaultView||window,e=n&&n.getComputedStyle?n.getComputedStyle(t):null,o=(e&&e.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(t),o){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(this._platform.isBrowser&&this._document.body){const t=this._document.body.classList;t.remove("cdk-high-contrast-active"),t.remove("cdk-high-contrast-black-on-white"),t.remove("cdk-high-contrast-white-on-black");const n=this.getHighContrastMode();1===n?(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-black-on-white")):2===n&&(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-white-on-black"))}}}return t.\u0275fac=function(n){return new(n||t)(a.Vb(M),a.Vb(o.c))},t.\u0275prov=Object(a.Ib)({factory:function(){return new t(Object(a.Vb)(M),Object(a.Vb)(o.c))},token:t,providedIn:"root"}),t})(),O=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)}}),t})();const P=new a.O("9.2.4");e("jhN1"),e("JX91"),e("R1ws");const R=new a.O("9.2.4"),x=new a.q("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}});let Q,I=(()=>{class t{constructor(t,n,e){this._hasDoneGlobalChecks=!1,this._document=e,t._applyBodyHighContrastModeCssClasses(),this._sanityChecks=n,this._hasDoneGlobalChecks||(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}_getDocument(){const t=this._document||document;return"object"==typeof t&&t?t:null}_getWindow(){const t=this._getDocument(),n=(null==t?void 0:t.defaultView)||window;return"object"==typeof n&&n?n:null}_checksAreEnabled(){return Object(a.W)()&&!this._isTestEnv()}_isTestEnv(){const t=this._getWindow();return t&&(t.__karma__||t.jasmine)}_checkDoctypeIsDefined(){const t=this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.doctype),n=this._getDocument();t&&n&&!n.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}_checkThemeIsPresent(){const t=!this._checksAreEnabled()||!1===this._sanityChecks||!this._sanityChecks.theme,n=this._getDocument();if(t||!n||!n.body||"function"!=typeof getComputedStyle)return;const e=n.createElement("div");e.classList.add("mat-theme-loaded-marker"),n.body.appendChild(e);const o=getComputedStyle(e);o&&"none"!==o.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),n.body.removeChild(e)}_checkCdkVersionMatch(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.version)&&R.full!==P.full&&console.warn("The Angular Material version ("+R.full+") does not match the Angular CDK version ("+P.full+").\nPlease ensure the versions of these two packages exactly match.")}}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)(a.Vb(k),a.Vb(x,8),a.Vb(o.c,8))},imports:[[O],O]}),t})();try{Q="undefined"!=typeof Intl}catch(j){Q=!1}e("VRyK"),e("xgIS"),e("l7GE"),e("ZUHj"),e("R0Ic");let N=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)},imports:[[o.b,I,v],I]}),t})(),A=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)},imports:[[o.b,N]]}),t})(),E=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)},imports:[[o.b,c.a,r.a,i.o,y,A,r.f]]}),t})()}}]);