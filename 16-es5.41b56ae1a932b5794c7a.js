function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{X3zk:function(e,n,t){"use strict";t.r(n),t.d(n,"LoginPageModule",(function(){return v}));var i,r,s,o=t("ofXK"),a=t("3Pt+"),c=t("dagM"),u=t("TEn/"),b=t("tyNb"),p=t("mrSG"),f=t("fXoL"),l=t("Z2Br"),h=t("q1A0"),g=[{path:"",component:(i=function(){function e(n,t){_classCallCheck(this,e),this.firebaseservice=n,this.router=t,this.isSignedin=!1}return _createClass(e,[{key:"ngOnInit",value:function(){null!==localStorage.getItem("user")?(this.isSignedin=!0,this.router.navigate(["/profile"])):this.isSignedin=!1}},{key:"onsignup",value:function(e,n){return Object(p.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.firebaseservice.signup(e,n);case 2:this.firebaseservice.isLoggedIn&&(this.isSignedin=!0,this.router.navigate(["/profile"]));case 3:case"end":return t.stop()}}),t,this)})))}},{key:"resetpassword",value:function(){return Object(p.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.firebaseservice.reset("mpranay2018@gmail.com");case 2:case"end":return e.stop()}}),e,this)})))}},{key:"onsignin",value:function(e,n){return Object(p.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.firebaseservice.signin(e,n);case 2:this.firebaseservice.isLoggedIn&&(this.isSignedin=!0,this.router.navigate(["/profile"]));case 3:case"end":return t.stop()}}),t,this)})))}}]),e}(),i.\u0275fac=function(e){return new(e||i)(f.Mb(l.a),f.Mb(b.f))},i.\u0275cmp=f.Gb({type:i,selectors:[["app-login"]],decls:24,vars:0,consts:[["type","text"],["emailsignup",""],["type","password"],["passwordsignup",""],[3,"click"],["email",""],["password",""]],template:function(e,n){if(1&e){var t=f.Sb();f.Nb(0,"app-top-bar"),f.Rb(1,"h2"),f.oc(2,"SignUp"),f.Qb(),f.Nb(3,"input",0,1),f.Nb(5,"input",2,3),f.Rb(7,"button",4),f.Zb("click",(function(){f.ic(t);var e=f.hc(4),i=f.hc(6);return n.onsignup(e.value,i.value)})),f.oc(8,"Sign Up"),f.Qb(),f.Nb(9,"br"),f.Rb(10,"h2"),f.oc(11,"Login"),f.Qb(),f.Nb(12,"input",0,5),f.Nb(14,"input",2,6),f.Rb(16,"button",4),f.Zb("click",(function(){f.ic(t);var e=f.hc(13),i=f.hc(15);return n.onsignin(e.value,i.value)})),f.oc(17,"Sign In"),f.Qb(),f.Nb(18,"br"),f.Nb(19,"br"),f.Rb(20,"button",4),f.Zb("click",(function(){return n.resetpassword()})),f.oc(21,"Reset password"),f.Qb(),f.Nb(22,"br"),f.Nb(23,"br")}},directives:[h.a],styles:[""]}),i)}],d=((s=function e(){_classCallCheck(this,e)}).\u0275mod=f.Kb({type:s}),s.\u0275inj=f.Jb({factory:function(e){return new(e||s)},imports:[[b.h.forChild(g)],b.h]}),s),v=((r=function e(){_classCallCheck(this,e)}).\u0275mod=f.Kb({type:r}),r.\u0275inj=f.Jb({factory:function(e){return new(e||r)},imports:[[c.a,o.b,a.a,u.o,d]]}),r)}}]);