(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{X3zk:function(i,n,t){"use strict";t.r(n),t.d(n,"LoginPageModule",(function(){return d}));var e=t("ofXK"),s=t("3Pt+"),o=t("dagM"),r=t("TEn/"),c=t("tyNb"),a=t("mrSG"),u=t("fXoL"),b=t("Z2Br"),p=t("q1A0");const g=[{path:"",component:(()=>{class i{constructor(i,n){this.firebaseservice=i,this.router=n,this.isSignedin=!1}ngOnInit(){null!==localStorage.getItem("user")?(this.isSignedin=!0,this.router.navigate(["/profile"])):this.isSignedin=!1}onsignup(i,n){return Object(a.__awaiter)(this,void 0,void 0,(function*(){yield this.firebaseservice.signup(i,n),this.firebaseservice.isLoggedIn&&(this.isSignedin=!0,this.router.navigate(["/profile"]))}))}onsignin(i,n){return Object(a.__awaiter)(this,void 0,void 0,(function*(){yield this.firebaseservice.signin(i,n),this.firebaseservice.isLoggedIn&&(this.isSignedin=!0,this.router.navigate(["/profile"]))}))}}return i.\u0275fac=function(n){return new(n||i)(u.Mb(b.a),u.Mb(c.g))},i.\u0275cmp=u.Gb({type:i,selectors:[["app-login"]],decls:18,vars:0,consts:[["type","text"],["emailsignup",""],["type","password"],["passwordsignup",""],[3,"click"],["email",""],["password",""]],template:function(i,n){if(1&i){const i=u.Sb();u.Nb(0,"app-top-bar"),u.Rb(1,"h2"),u.oc(2,"SignUp"),u.Qb(),u.Nb(3,"input",0,1),u.Nb(5,"input",2,3),u.Rb(7,"button",4),u.Zb("click",(function(){u.ic(i);const t=u.hc(4),e=u.hc(6);return n.onsignup(t.value,e.value)})),u.oc(8,"Sign Up"),u.Qb(),u.Nb(9,"br"),u.Rb(10,"h2"),u.oc(11,"Login"),u.Qb(),u.Nb(12,"input",0,5),u.Nb(14,"input",2,6),u.Rb(16,"button",4),u.Zb("click",(function(){u.ic(i);const t=u.hc(13),e=u.hc(15);return n.onsignin(t.value,e.value)})),u.oc(17,"Sign In"),u.Qb()}},directives:[p.a],styles:[""]}),i})()}];let l=(()=>{class i{}return i.\u0275mod=u.Kb({type:i}),i.\u0275inj=u.Jb({factory:function(n){return new(n||i)},imports:[[c.i.forChild(g)],c.i]}),i})(),d=(()=>{class i{}return i.\u0275mod=u.Kb({type:i}),i.\u0275inj=u.Jb({factory:function(n){return new(n||i)},imports:[[o.a,e.b,s.a,r.o,l]]}),i})()}}]);