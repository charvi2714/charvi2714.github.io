function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"ct+p":function(n,t,e){"use strict";e.r(t),e.d(t,"HomePageModule",(function(){return Q}));var o=e("ofXK"),i=e("TEn/"),r=e("3Pt+"),c=e("dagM"),a=e("tyNb"),s=e("mrSG"),g=e("fXoL"),l=e("m/P+"),d=e("59dN"),p=e("Z2Br"),b=e("q1A0"),u=e("lVXr");function f(n,t){1&n&&(g.Qb(0,"div",5),g.Mb(1,"ion-progress-bar",6),g.Pb())}var h=function(n){return["/product-page",n]};function P(n,t){if(1&n&&(g.Qb(0,"div",15),g.Mb(1,"img",16),g.Qb(2,"h1"),g.yc(3),g.Pb(),g.Qb(4,"p",17),g.yc(5,"$19.99"),g.Pb(),g.Qb(6,"p"),g.Qb(7,"button",18),g.yc(8,"View Product"),g.Pb(),g.Pb(),g.Pb()),2&n){var e=t.$implicit;g.Ab(1),g.gc("src",e.imageurls[0],g.sc),g.Ab(2),g.zc(e.name),g.Ab(4),g.fc("routerLink",g.ic(3,h,e.product_id))}}function C(n,t){if(1&n&&(g.Qb(0,"div"),g.Qb(1,"h2"),g.Qb(2,"strong"),g.yc(3),g.Pb(),g.Pb(),g.Qb(4,"div",13),g.xc(5,P,9,5,"div",14),g.Pb(),g.Pb()),2&n){var e=t.$implicit,o=g.ac(2);g.Ab(3),g.zc(e.value),g.Ab(2),g.fc("ngForOf",o.temp[e.key])}}function M(n,t){if(1&n&&(g.Qb(0,"ion-grid"),g.Qb(1,"ion-row"),g.Mb(2,"ion-col",7),g.Qb(3,"ion-col",8),g.Mb(4,"br"),g.Mb(5,"br"),g.Qb(6,"div",9),g.Qb(7,"div",10),g.Mb(8,"img",11),g.Pb(),g.Mb(9,"br"),g.Qb(10,"div"),g.Qb(11,"p"),g.yc(12,"Top dress"),g.Pb(),g.Pb(),g.Pb(),g.xc(13,C,6,2,"div",12),g.bc(14,"keyvalue"),g.Mb(15,"br"),g.Pb(),g.Mb(16,"ion-col",7),g.Pb(),g.Pb()),2&n){var e=g.ac();g.Ab(13),g.fc("ngForOf",g.cc(14,1,e.values))}}var _,O,m,y,v=[{path:"",component:(_=function(){function n(t,e,o,i){_classCallCheck(this,n),this.router=t,this.iab=e,this.webIntent=o,this.firebaseservice=i,this.loading=!0}return _createClass(n,[{key:"ngOnInit",value:function(){this.getCategory(),this.getProducts()}},{key:"getProducts",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://mpranay.live/get/products",{mode:"cors"});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,this.product=Object.keys(e),this.temp=e,console.log(e[1]),console.log(e[3]),this.loading=!1;case 7:case"end":return n.stop()}}),n,this)})))}},{key:"getCategory",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://mpranay.live/get/category",{mode:"cors"});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,this.values=e,console.log(this.values);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"onClick",value:function(){myTest()}},{key:"test",value:function(){this.router.navigate(["/category"])}},{key:"product_page",value:function(){this.router.navigate(["/product-page"])}},{key:"test_api",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://mpranay.live/",{mode:"cors"});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,console.log("hello"+e),this.data1=e.userId;case 7:case"end":return n.stop()}}),n,this)})))}},{key:"Verifylogin",value:function(){null==localStorage.getItem("user")?(console.log(null),this.router.navigate(["/login"])):(console.log("passed"),this.router.navigate(["/profile"]))}},{key:"openbrowser",value:function(){var n=this.iab.create("https://ionicframework.com/","_blank");n.on("loadstart").subscribe((function(t){console.log(t.url),"https://ionicframework.com/getting-started"===t.url&&n.close()}))}},{key:"doRefresh",value:function(n){console.log("Begin async operation"),window.location.reload()}},{key:"payment_trail",value:function(){this.payeeVPA="8919345427@upi",this.payeeName="pranay",this.payAmount=2,this.transactionReference="871489872",this.transactionNote="testing",this.currency="INR",this.webIntent.startActivityForResult({action:this.webIntent.ACTION_VIEW,url:"upi://pay?pa="+this.payeeVPA+"&pn="+this.payeeName+"&tr="+this.transactionReference+"tn="+this.transactionNote+"&am="+this.payAmount+"&cu="+this.currency,package:"com.whatsapp"}).then((function(n){console.log("sucess hello",n)}))}}]),n}(),_.\u0275fac=function(n){return new(n||_)(g.Lb(a.f),g.Lb(l.a),g.Lb(d.a),g.Lb(p.a))},_.\u0275cmp=g.Fb({type:_,selectors:[["app-home"]],decls:16,vars:2,consts:[["href","https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap","rel","stylesheet"],["href","https://fonts.googleapis.com/css?family=Lato:300,400,700","rel","stylesheet","type","text/css"],["class","loader",4,"ngIf"],["slot","fixed",1,"refresh",3,"ionRefresh"],[4,"ngIf"],[1,"loader"],["type","indeterminate"],["size","12","size-sm","2",1,"hideit"],["size","12","size-sm","8"],[1,"parent"],[1,"child"],["src","https://i.pinimg.com/originals/6e/79/24/6e7924745047fa29d19060ff4fb39d56.jpg","alt","Top dresses"],[4,"ngFor","ngForOf"],[1,"product_display"],["class","card",4,"ngFor","ngForOf"],[1,"card"],["alt","Denim Jeans",2,"width","100%",3,"src"],[1,"price"],[3,"routerLink"]],template:function(n,t){1&n&&(g.Qb(0,"ion-content"),g.Qb(1,"html"),g.Qb(2,"head"),g.Qb(3,"title"),g.yc(4,"Home Page"),g.Pb(),g.Mb(5,"link",0),g.Mb(6,"link",1),g.Pb(),g.Qb(7,"body"),g.xc(8,f,2,0,"div",2),g.Mb(9,"app-top-bar"),g.Qb(10,"ion-refresher",3),g.Yb("ionRefresh",(function(n){return t.doRefresh(n)})),g.Mb(11,"ion-refresher-content"),g.Pb(),g.xc(12,M,17,3,"ion-grid",4),g.Mb(13,"br"),g.Mb(14,"br"),g.Mb(15,"app-bottom-bar"),g.Pb(),g.Pb(),g.Pb()),2&n&&(g.Ab(8),g.fc("ngIf",t.loading),g.Ab(4),g.fc("ngIf",0==t.loading))},directives:[i.f,o.k,b.a,i.k,i.l,u.a,i.j,i.g,i.n,i.e,o.j,i.t,a.g],pipes:[o.e],styles:['html[_ngcontent-%COMP%]:not(.hydrated)   body[_ngcontent-%COMP%]{display:block}h2[_ngcontent-%COMP%]{color:#fff;font-family:Nanum Myeongjo,serif;text-align:center}body[_ngcontent-%COMP%]{padding:1%;position:absolute;top:0;right:0;bottom:0;left:0;overflow-y:scroll;overflow-x:hidden;background:#eba9e0;background:radial-gradient(circle,#eba9e0 0,#e4b5ec 22%,#9cd3e8 100%)}hr[_ngcontent-%COMP%]{border:0;clear:both;display:block;width:100%;background-color:#fff;height:1px}.parent[_ngcontent-%COMP%]{display:grid;place-items:center}.child[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:500px}.child[_ngcontent-%COMP%]{padding:10px}.parent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Cinzel,serif;font-size:50px}@media only screen and (max-width:600px){.child[_ngcontent-%COMP%]{padding:30px}.child[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:300px}.hideit[_ngcontent-%COMP%]{display:none}.parent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:40px}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px}}.abs[_ngcontent-%COMP%], .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:after, .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%], .news[_ngcontent-%COMP%]   .article[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%], .news[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:after, .news[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]:after{position:absolute}.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .news[_ngcontent-%COMP%]   .article[_ngcontent-%COMP%], .news[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .rel[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{position:relative}.fix[_ngcontent-%COMP%]{position:fixed}.dfix[_ngcontent-%COMP%]{display:inline}.dib[_ngcontent-%COMP%]{display:inline-block}.db[_ngcontent-%COMP%]{display:block}.dn[_ngcontent-%COMP%]{display:none}.cards[_ngcontent-%COMP%], .df[_ngcontent-%COMP%], .news[_ngcontent-%COMP%]{display:flex}.dif[_ngcontent-%COMP%]{display:inline-flex}.dg[_ngcontent-%COMP%]{display:grid}.dig[_ngcontent-%COMP%]{display:inline-grid}.vm[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{vertical-align:middle}h2[_ngcontent-%COMP%]{padding:10px 10px 10px 25px;color:#ccc;margin:0}h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{z-index:2;background:#24282f;padding:4px 8px}h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.7em;color:#aaa;margin-left:10px}h2[_ngcontent-%COMP%]:after{content:"";z-index:1;bottom:50%;margin-bottom:-2px;height:2px;left:0;right:0;background:#373d47}.product_display[_ngcontent-%COMP%]{overflow:auto;white-space:nowrap;padding:10px}.card[_ngcontent-%COMP%]{display:inline-block;padding:10px;margin:10px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);max-width:200px;text-align:center}.card[_ngcontent-%COMP%]:hover{transition:all 1s ease-in-out 0s}.price[_ngcontent-%COMP%]{color:grey;font-size:22px}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:300px;height:300px}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;outline:0;padding:12px;color:#fff;background-color:#81c6dd;text-align:center;cursor:pointer;width:100%;font-size:18px}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.7}.loader[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);width:50px;height:50px;margin:auto}.refresh[_ngcontent-%COMP%]{z-index:4}',"[_ngcontent-%COMP%]::-webkit-scrollbar {\n      width: 1px;\n      height: 5px;\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n      \n      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n      \n      background-color: darkgrey;\n      outline: 1px solid slategrey;\n      border-radius: 100%;\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n      background: #b30000;\n    }"]}),_)}],x=((O=function n(){_classCallCheck(this,n)}).\u0275mod=g.Jb({type:O}),O.\u0275inj=g.Ib({factory:function(n){return new(n||O)},imports:[[a.h.forChild(v)],a.h]}),O),w=e("kmnG"),k=((y=function n(){_classCallCheck(this,n)}).\u0275mod=g.Jb({type:y}),y.\u0275inj=g.Ib({factory:function(n){return new(n||y)},imports:[[o.b,w.c]]}),y),Q=((m=function n(){_classCallCheck(this,n)}).\u0275mod=g.Jb({type:m}),m.\u0275inj=g.Ib({factory:function(n){return new(n||m)},imports:[[o.b,c.a,r.c,i.q,x,k,r.k]]}),m)}}]);