function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,o){return e&&_defineProperties(n.prototype,e),o&&_defineProperties(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{cRhG:function(n,e,o){"use strict";o.r(e),o.d(e,"ProfilePageModule",(function(){return Q}));var t,r,i,b=o("dagM"),c=o("ofXK"),a=o("3Pt+"),l=o("TEn/"),s=o("tyNb"),d=o("fXoL"),f=o("Z2Br"),g=o("q1A0"),h=o("lVXr"),p=[{path:"",component:(t=function(){function n(e,o){_classCallCheck(this,n),this.firebaseservice=e,this.router=o}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"Logout",value:function(){this.firebaseservice.logout(),this.router.navigate(["/home"])}}]),n}(),t.\u0275fac=function(n){return new(n||t)(d.Mb(f.a),d.Mb(s.g))},t.\u0275cmp=d.Gb({type:t,selectors:[["app-profile"]],decls:57,vars:0,consts:[["size","12","size-sm","3",1,"hideit"],["size","12","size-sm","6"],[1,"profile-image"],["src","https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG","alt",""],["size","12","size-xs","6"],["size","12","size-xs","6",1,"orders"],["href","/orders"],["size","12","size-xs","6",1,"cancelled-orders"],["href","/cancelled-orders"]],template:function(n,e){1&n&&(d.Rb(0,"html"),d.Nb(1,"head"),d.Rb(2,"body"),d.Nb(3,"app-top-bar"),d.Rb(4,"ion-grid"),d.Rb(5,"ion-row"),d.Rb(6,"ion-col",0),d.Rb(7,"p"),d.oc(8," 1 of 3"),d.Qb(),d.Qb(),d.Rb(9,"ion-col",1),d.Rb(10,"h3"),d.oc(11,"User Profile"),d.Qb(),d.Nb(12,"hr"),d.Nb(13,"br"),d.Rb(14,"div",2),d.Nb(15,"img",3),d.Qb(),d.Rb(16,"ion-grid"),d.Rb(17,"ion-row"),d.Rb(18,"ion-col",4),d.Rb(19,"h4"),d.oc(20," User Name"),d.Qb(),d.Qb(),d.Rb(21,"ion-col",4),d.Rb(22,"h4"),d.oc(23," Dakini Bala "),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(24,"ion-grid"),d.Rb(25,"ion-row"),d.Rb(26,"ion-col",4),d.Rb(27,"h4"),d.oc(28,"Phone Number"),d.Qb(),d.Qb(),d.Rb(29,"ion-col",4),d.Rb(30,"h4"),d.oc(31," 9876543210 "),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(32,"ion-grid"),d.Rb(33,"ion-row"),d.Rb(34,"ion-col",4),d.Rb(35,"h4"),d.oc(36," EmailId"),d.Qb(),d.Qb(),d.Rb(37,"ion-col",4),d.Rb(38,"h4"),d.oc(39," Dakinibala@gmail.com "),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(40,"ion-grid"),d.Rb(41,"ion-row"),d.Rb(42,"ion-col",5),d.Rb(43,"a",6),d.Rb(44,"button"),d.oc(45,"Orders"),d.Qb(),d.Qb(),d.Qb(),d.Rb(46,"ion-col",7),d.Rb(47,"a",8),d.Rb(48,"button"),d.oc(49,"Cancelled Orders"),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(50,"ion-col",0),d.Rb(51,"p"),d.oc(52," 3 of 3"),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Nb(53,"br"),d.Nb(54,"br"),d.Nb(55,"br"),d.Nb(56,"app-bottom-bar"),d.Qb(),d.Qb())},directives:[g.a,l.f,l.n,l.e,h.a],styles:["html[_ngcontent-%COMP%]:not(.hydrated)   body[_ngcontent-%COMP%]{display:block}body[_ngcontent-%COMP%]{padding:1%;position:absolute;top:0;right:0;bottom:0;left:0;overflow-y:scroll;overflow-x:hidden;background:#5d5b5b;background:radial-gradient(circle,#5d5b5b 0,#000 100%)}hr[_ngcontent-%COMP%]{border:0;clear:both;display:block;width:100%;background-color:#fff;height:1px}h3[_ngcontent-%COMP%]{color:#fff;text-align:center}.profile-image[_ngcontent-%COMP%]{display:grid;place-items:center}.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px;width:200px;border-radius:100%}h4[_ngcontent-%COMP%]{color:#fff;text-align:center}.cancelled-orders[_ngcontent-%COMP%], .orders[_ngcontent-%COMP%]{display:grid;place-items:center}.orders[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:30px;background:#ff8737;background:radial-gradient(circle,#ff8737 0,#ff6100 100%)}.cancelled-orders[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:90%;height:30px;background:#ffdc5d;background:radial-gradient(circle,#ffdc5d 0,#efff7b 100%)}@media only screen and (max-width:600px){.hideit[_ngcontent-%COMP%]{display:none}}","[_ngcontent-%COMP%]::-webkit-scrollbar {\n      width: 1px;\n      height: 5px;\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n      \n      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n      \n      background-color: darkgrey;\n      outline: 1px solid slategrey;\n      border-radius: 100%;\n    }\n\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n      background: #b30000;\n    }"]}),t)}],u=((i=function n(){_classCallCheck(this,n)}).\u0275mod=d.Kb({type:i}),i.\u0275inj=d.Jb({factory:function(n){return new(n||i)},imports:[[s.i.forChild(p)],s.i]}),i),Q=((r=function n(){_classCallCheck(this,n)}).\u0275mod=d.Kb({type:r}),r.\u0275inj=d.Jb({factory:function(n){return new(n||r)},imports:[[b.a,c.b,a.a,l.o,u]]}),r)}}]);