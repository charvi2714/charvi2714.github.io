(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"ct+p":function(t,e,n){"use strict";n.r(e),n.d(e,"HomePageModule",(function(){return j}));var o=n("ofXK"),i=n("TEn/"),r=n("3Pt+"),c=n("dagM"),s=n("tyNb"),a=n("mrSG"),b=n("fXoL"),d=n("m/P+"),l=n("59dN"),h=n("q1A0");function g(t,e){if(1&t&&(b.Rb(0,"div",15),b.Nb(1,"img",16),b.Nb(2,"br"),b.Rb(3,"p"),b.oc(4),b.Qb(),b.Qb()),2&t){const t=e.$implicit;b.Cb(4),b.qc("Category ",t," ")}}function u(t,e){if(1&t){const t=b.Sb();b.Rb(0,"div",15),b.Rb(1,"div",17),b.Rb(2,"a",3),b.Zb("click",(function(){return b.ic(t),b.bc().product_page()})),b.Nb(3,"img",16),b.Qb(),b.Qb(),b.Nb(4,"br"),b.Rb(5,"p"),b.oc(6),b.Qb(),b.Qb()}if(2&t){const t=e.$implicit;b.Cb(6),b.qc("Category ",t," ")}}function p(t,e){if(1&t){const t=b.Sb();b.Rb(0,"div",15),b.Rb(1,"div",17),b.Rb(2,"a",3),b.Zb("click",(function(){return b.ic(t),b.bc().product_page()})),b.Nb(3,"img",18),b.Qb(),b.Qb(),b.Nb(4,"br"),b.Rb(5,"p"),b.oc(6),b.Qb(),b.Qb()}if(2&t){const t=e.$implicit;b.Cb(6),b.qc("Category ",t," ")}}function f(t,e){if(1&t){const t=b.Sb();b.Rb(0,"div",15),b.Rb(1,"div",17),b.Rb(2,"a",3),b.Zb("click",(function(){return b.ic(t),b.bc().product_page()})),b.Nb(3,"img",19),b.Qb(),b.Qb(),b.Nb(4,"br"),b.Rb(5,"p"),b.oc(6),b.Qb(),b.Qb()}if(2&t){const t=e.$implicit;b.Cb(6),b.qc("Category ",t," ")}}const m=function(){return[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]},_=function(){return[1,2,3,4,5,6,7,8,9]},y=[{path:"",component:(()=>{class t{constructor(t,e,n){this.router=t,this.iab=e,this.webIntent=n}onClick(){myTest()}test(){this.router.navigate(["/category"])}product_page(){this.router.navigate(["/product-page"])}test_api(){return Object(a.__awaiter)(this,void 0,void 0,(function*(){const t=yield fetch("http://webapi.us-east-2.elasticbeanstalk.com/"),e=yield t.json();console.log(e.userId),this.data1=e.userId}))}Verifylogin(){null==localStorage.getItem("user")?(console.log(null),this.router.navigate(["/login"])):(console.log("passed"),this.router.navigate(["/profile"]))}openbrowser(){const t=this.iab.create("https://ionicframework.com/","_blank");t.on("loadstart").subscribe(e=>{console.log(e.url),"https://ionicframework.com/getting-started"===e.url&&t.close()})}payment_trail(){this.payeeVPA="8919345427@upi",this.payeeName="pranay",this.payAmount=2,this.transactionReference="871489872",this.transactionNote="testing",this.currency="INR",this.webIntent.startActivityForResult({action:this.webIntent.ACTION_VIEW,url:"upi://pay?pa="+this.payeeVPA+"&pn="+this.payeeName+"&tr="+this.transactionReference+"tn="+this.transactionNote+"&am="+this.payAmount+"&cu="+this.currency,package:"com.whatsapp"}).then(t=>{console.log("sucess hello",t)})}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(s.f),b.Mb(d.a),b.Mb(l.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["app-home"]],decls:63,vars:9,consts:[["href","https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap","rel","stylesheet"],[1,"scrollmenu"],["class","sub",4,"ngFor","ngForOf"],[3,"click"],[1,"parent"],[1,"child"],["src","https://i.pinimg.com/originals/6e/79/24/6e7924745047fa29d19060ff4fb39d56.jpg","alt","Top dresses"],[1,"category_1"],["alt","Info icon","src","https://img.icons8.com/android/344/info.png","lazy","loaded"],[1,"footer"],["href",""],["aria-hidden","true",1,"fa","fa-home"],[1,"search"],["type","text","name","search","placeholder","Search.."],["aria-hidden","true",1,"fa","fa-user-circle-o"],[1,"sub"],["src","https://image.kilimall.com/uganda/shop/store/goods/591/2017/11/591_05631122058552463_360.jpg.webp","alt","image"],[1,"information"],["src","https://i.pinimg.com/originals/60/c8/f3/60c8f39cbbe94b2756de4c9e0d41ca2b.png","alt","image"],["src","https://i.pinimg.com/originals/23/04/47/230447d273c21794d0333455d65d488e.png","alt","image"]],template:function(t,e){1&t&&(b.Rb(0,"html"),b.Rb(1,"head"),b.Rb(2,"title"),b.oc(3,"Home Page"),b.Qb(),b.Nb(4,"link",0),b.Qb(),b.Rb(5,"body"),b.Nb(6,"app-top-bar"),b.Nb(7,"br"),b.Nb(8,"br"),b.Rb(9,"div",1),b.nc(10,g,5,1,"div",2),b.Qb(),b.Rb(11,"button",3),b.Zb("click",(function(){return e.openbrowser()})),b.oc(12," clickme"),b.Qb(),b.Rb(13,"button",3),b.Zb("click",(function(){return e.payment_trail()})),b.oc(14,"Pay"),b.Qb(),b.Rb(15,"button",3),b.Zb("click",(function(){return e.test_api()})),b.oc(16,"Testing api"),b.Qb(),b.Rb(17,"p"),b.oc(18),b.Qb(),b.Rb(19,"div",4),b.Rb(20,"div",5),b.Nb(21,"img",6),b.Qb(),b.Rb(22,"div"),b.Rb(23,"p"),b.oc(24,"Top dress"),b.Qb(),b.Qb(),b.Qb(),b.Rb(25,"div",7),b.Rb(26,"p"),b.oc(27," Category - 1 "),b.Qb(),b.Rb(28,"a",3),b.Zb("click",(function(){return e.test()})),b.Rb(29,"button"),b.Nb(30,"img",8),b.oc(31," Show More "),b.Qb(),b.Qb(),b.Qb(),b.Rb(32,"div",1),b.nc(33,u,7,1,"div",2),b.Qb(),b.Rb(34,"div",7),b.Rb(35,"p"),b.oc(36," Fresh Arrivals "),b.Qb(),b.Rb(37,"a",3),b.Zb("click",(function(){return e.test()})),b.Rb(38,"button"),b.Nb(39,"img",8),b.oc(40," Show More "),b.Qb(),b.Qb(),b.Qb(),b.Rb(41,"div",1),b.nc(42,p,7,1,"div",2),b.Qb(),b.Rb(43,"div",7),b.Rb(44,"p"),b.oc(45," Category - 2 "),b.Qb(),b.Rb(46,"a",3),b.Zb("click",(function(){return e.test()})),b.Rb(47,"button"),b.Nb(48,"img",8),b.oc(49," Show More "),b.Qb(),b.Qb(),b.Qb(),b.Rb(50,"div",1),b.nc(51,f,7,1,"div",2),b.Nb(52,"br"),b.Nb(53,"br"),b.Nb(54,"br"),b.Rb(55,"div",9),b.Rb(56,"a",10),b.Nb(57,"i",11),b.Qb(),b.Rb(58,"div",12),b.Rb(59,"form"),b.Nb(60,"input",13),b.Qb(),b.Qb(),b.Rb(61,"a",3),b.Zb("click",(function(){return e.Verifylogin()})),b.Nb(62,"i",14),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&t&&(b.Cb(10),b.ec("ngForOf",b.fc(5,m)),b.Cb(8),b.pc(e.data1),b.Cb(15),b.ec("ngForOf",b.fc(6,_)),b.Cb(9),b.ec("ngForOf",b.fc(7,_)),b.Cb(9),b.ec("ngForOf",b.fc(8,_)))},directives:[h.a,o.h,r.g,r.d,r.e],styles:["html[_ngcontent-%COMP%]:not(.hydrated)   body[_ngcontent-%COMP%]{display:block}div.scrollmenu[_ngcontent-%COMP%]{overflow:auto;white-space:nowrap}div.scrollmenu[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]{display:inline-block;text-align:center;padding:7px;text-decoration:none}div.scrollmenu[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]:hover{background-color:#777}div.scrollmenu[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:100%;height:60px;width:60px}div.scrollmenu[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff8dc}p[_ngcontent-%COMP%]{color:#fff}body[_ngcontent-%COMP%]{padding:1%;position:absolute;top:0;right:0;bottom:0;left:0;overflow-y:scroll;overflow-x:hidden;background:#5d5b5b;background:radial-gradient(circle,#5d5b5b 0,#000 100%)}.wrapper[_ngcontent-%COMP%]{overflow:auto}.c1[_ngcontent-%COMP%]{float:left;text-align:left;padding-left:10px}.c1[_ngcontent-%COMP%], .c2[_ngcontent-%COMP%]{width:100px;padding-top:10px}.c2[_ngcontent-%COMP%]{float:right;text-align:right;padding-right:10px}.parent[_ngcontent-%COMP%]{display:grid;place-items:center}.child[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:500px}.child[_ngcontent-%COMP%]{padding:10px}.parent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Cinzel,serif;font-size:50px}.category_1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100px;font-family:Nanum Myeongjo,serif}.category_1[_ngcontent-%COMP%]{display:flex;text-align:center}.category_1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:10px;height:25px}.category_1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:15px;width:15px}div.scrollmenu[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;height:200px;width:200px}.footer[_ngcontent-%COMP%]{position:fixed;left:0;bottom:0;width:100%;background-color:#000;color:#fff;display:flex;height:60px;font-size:50px;padding:10px;text-decoration:none}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:grey}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link{text-decoration:none}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.footer[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding:2px;margin-top:2px;font-size:17px;border:none;height:25px;color:#000;width:100px}.search[_ngcontent-%COMP%]{margin:auto}@media only screen and (max-width:600px){.child[_ngcontent-%COMP%]{padding:30px}.child[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:300px}.parent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:40px}div.scrollmenu[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;height:150px;width:150px}}","[_ngcontent-%COMP%]::-webkit-scrollbar {\n      width: 1px;\n      height: 5px;\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n      \n      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n      \n      background-color: darkgrey;\n      outline: 1px solid slategrey;\n      border-radius: 100%;\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n      background: #b30000;\n    }"]}),t})()}];let C=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)},imports:[[s.h.forChild(y)],s.h]}),t})();n("HDdC"),n("XNiG"),n("7o/Q"),n("D0XW");let w,v=(()=>{class t{create(t){return"undefined"==typeof MutationObserver?null:new MutationObserver(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(b.Ib)({factory:function(){return new t},token:t,providedIn:"root"}),t})(),k=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)},providers:[v]}),t})();n("quSY"),n("LRne"),n("vkgz"),n("pLZG"),n("lJxs"),n("IzEk");try{w="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(D){w=!1}let M=(()=>{class t{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Object(o.o)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!w)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(b.Vb(b.B,8))},t.\u0275prov=Object(b.Ib)({factory:function(){return new t(Object(b.Vb)(b.B,8))},token:t,providedIn:"root"}),t})();"undefined"!=typeof Element&&Element;let O=(()=>{class t{constructor(t,e){this._platform=t,this._document=e}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);const e=this._document.defaultView||window,n=e&&e.getComputedStyle?e.getComputedStyle(t):null,o=(n&&n.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(t),o){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(this._platform.isBrowser&&this._document.body){const t=this._document.body.classList;t.remove("cdk-high-contrast-active"),t.remove("cdk-high-contrast-black-on-white"),t.remove("cdk-high-contrast-white-on-black");const e=this.getHighContrastMode();1===e?(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-black-on-white")):2===e&&(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-white-on-black"))}}}return t.\u0275fac=function(e){return new(e||t)(b.Vb(M),b.Vb(o.c))},t.\u0275prov=Object(b.Ib)({factory:function(){return new t(Object(b.Vb)(M),Object(b.Vb)(o.c))},token:t,providedIn:"root"}),t})(),P=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)}}),t})();const R=new b.O("9.2.4");n("jhN1"),n("JX91"),n("R1ws");const x=new b.O("9.2.4"),Q=new b.q("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}});let I,N=(()=>{class t{constructor(t,e,n){this._hasDoneGlobalChecks=!1,this._document=n,t._applyBodyHighContrastModeCssClasses(),this._sanityChecks=e,this._hasDoneGlobalChecks||(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}_getDocument(){const t=this._document||document;return"object"==typeof t&&t?t:null}_getWindow(){const t=this._getDocument(),e=(null==t?void 0:t.defaultView)||window;return"object"==typeof e&&e?e:null}_checksAreEnabled(){return Object(b.W)()&&!this._isTestEnv()}_isTestEnv(){const t=this._getWindow();return t&&(t.__karma__||t.jasmine)}_checkDoctypeIsDefined(){const t=this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.doctype),e=this._getDocument();t&&e&&!e.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}_checkThemeIsPresent(){const t=!this._checksAreEnabled()||!1===this._sanityChecks||!this._sanityChecks.theme,e=this._getDocument();if(t||!e||!e.body||"function"!=typeof getComputedStyle)return;const n=e.createElement("div");n.classList.add("mat-theme-loaded-marker"),e.body.appendChild(n);const o=getComputedStyle(n);o&&"none"!==o.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),e.body.removeChild(n)}_checkCdkVersionMatch(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.version)&&x.full!==R.full&&console.warn("The Angular Material version ("+x.full+") does not match the Angular CDK version ("+R.full+").\nPlease ensure the versions of these two packages exactly match.")}}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)(b.Vb(O),b.Vb(Q,8),b.Vb(o.c,8))},imports:[[P],P]}),t})();try{I="undefined"!=typeof Intl}catch(D){I=!1}n("VRyK"),n("xgIS"),n("l7GE"),n("ZUHj"),n("R0Ic");let A=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)},imports:[[o.b,N,k],N]}),t})(),E=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)},imports:[[o.b,A]]}),t})(),j=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)},imports:[[o.b,c.a,r.a,i.o,C,E,r.f]]}),t})()}}]);