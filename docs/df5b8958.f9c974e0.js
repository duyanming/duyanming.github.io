(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),c=t(7),i=(t(0),t(115)),o=t(116),a={id:"2_1_introduce",title:"2.1 \u6ce8\u518c\u4e2d\u5fc3\u6982\u8ff0",sidebar_label:"2.1 \u6ce8\u518c\u4e2d\u5fc3\u6982\u8ff0"},u={unversionedId:"2_1_introduce",id:"2_1_introduce",isDocsHomePage:!1,title:"2.1 \u6ce8\u518c\u4e2d\u5fc3\u6982\u8ff0",description:"2.1.1 \u4e00\u884c\u4ee3\u7801\u7684\u6ce8\u518c\u4e2d\u5fc3",source:"@site/docs\\2.1viper-center.mdx",slug:"/2_1_introduce",permalink:"/anno/docs/2_1_introduce",editUrl:"https://github.com/duyanming/duyanming.github.com/tree/main/viper/docs/2.1viper-center.mdx",version:"current",sidebar_label:"2.1 \u6ce8\u518c\u4e2d\u5fc3\u6982\u8ff0",sidebar:"docs",previous:{title:"1.3 \u9879\u76ee\u6e90\u7801\u7ed3\u6784",permalink:"/anno/docs/get-started1.2"},next:{title:"3.1 \u670d\u52a1\u63d0\u4f9b\u8005ViperService\u6982\u8ff0",permalink:"/anno/docs/3_1_introduce"}},l=[{value:"2.1.1 \u4e00\u884c\u4ee3\u7801\u7684\u6ce8\u518c\u4e2d\u5fc3",id:"211-\u4e00\u884c\u4ee3\u7801\u7684\u6ce8\u518c\u4e2d\u5fc3",children:[]},{value:"2.1.2 \u914d\u7f6e\u6587\u4ef6",id:"212-\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"2.1.3 \u542f\u52a8\u6ce8\u518c\u4e2d\u5fc3",id:"213-\u542f\u52a8\u6ce8\u518c\u4e2d\u5fc3",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"211-\u4e00\u884c\u4ee3\u7801\u7684\u6ce8\u518c\u4e2d\u5fc3"},"2.1.1 \u4e00\u884c\u4ee3\u7801\u7684\u6ce8\u518c\u4e2d\u5fc3"),Object(i.b)("p",null," \u6ce8\u518c\u4e2d\u5fc3\u6982\u8ff0"),Object(i.b)("img",{src:Object(o.a)("img/viper_center.jpg")}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'using Anno.Rpc.Center;\nusing System;\n\nnamespace ViperCenter\n{\n    class Program\n    {\n        /// <summary>\n        /// \u6ce8\u518c\u4e2d\u5fc3\u53ea\u7528\u589e\u52a0\u4e00\u4e2a Anno.config\u914d\u7f6e\u6587\u4ef6\uff0c\u7136\u540e\u76f4\u63a5 Bootstrap.StartUp(args);\u542f\u52a8\u5373\u53ef\n        /// </summary>\n        /// <param name="args"></param>\n        static void Main(string[] args)\n        {\n            Console.Title = "ViperCenter";\n            Bootstrap.StartUp(args\n                , (service, noticeType) =>//\u4e0a\u7ebf\u4e0b\u7ebf\n                {\n\n                }, (newService, oldService) =>//\u670d\u52a1\u914d\u7f6e\u66f4\u6539\n                {\n\n                });\n        }\n    }\n}\n\n')),Object(i.b)("h3",{id:"212-\u914d\u7f6e\u6587\u4ef6"},"2.1.2 \u914d\u7f6e\u6587\u4ef6"),Object(i.b)("p",null,"\u914d\u7f6e\u6587\u4ef6 ",Object(i.b)("b",null,"Anno.config")),Object(i.b)("b",null,Object(i.b)("code",null,"Port")),":\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u7684\u76d1\u542c\u7aef\u53e3",Object(i.b)("br",null),Object(i.b)("b",null,Object(i.b)("code",null,"TimeOut")),":\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u9ed8\u8ba4\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\u5355\u4f4d\u6beb\u79d2",Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<configuration>\n  \x3c!--#lbs \u914d\u7f6e--\x3e\n  <Port>7010</Port>\n  <TimeOut>120000</TimeOut>\n  <Servers>\n \n  </Servers>\n</configuration>\n')),Object(i.b)("h3",{id:"213-\u542f\u52a8\u6ce8\u518c\u4e2d\u5fc3"},"2.1.3 \u542f\u52a8\u6ce8\u518c\u4e2d\u5fc3"),Object(i.b)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\u4fbf\u53ef\u4ee5\u542f\u52a8\u6ce8\u518c\u4e2d\u5fc3"),Object(i.b)("p",null,"Windows"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"dotnet ViperCenter.dll\n")),Object(i.b)("p",null,"Linux"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\nif [ $1 == "start" ];then\nnohup dotnet  ViperCenter.dll 2>&1 &\necho "$!" > pid\necho "start ok!"\nelif [ $1 == "stop" ];then\nkill `cat pid`\necho "stop ok!"\nelse\necho "Please make sure the position variable is start or stop."\nfi\n\n')),Object(i.b)("p",null,"\u770b\u5230\u5982\u4e0b\u753b\u9762\u4ee3\u8868\u8fd0\u884c\u6210\u529f"),Object(i.b)("img",{src:Object(o.a)("img/viperruning.jpg")}),"\u6b64\u65f6\u53ef\u4ee5\u53bb\u542f\u52a8ViperService\uff0c\u6ce8\u518cViperService \u5230\u6ce8\u518c\u4e2d\u5fc3")}p.isMDXComponent=!0},115:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),c=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),s=function(e){var n=c.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return c.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return t?c.a.createElement(f,a(a({ref:n},l),{},{components:t})):c.a.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<i;l++)o[l]=t[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},116:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o}));var r=t(21),c=t(117);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(r.default)();return{withBaseUrl:(t,r)=>function(e,n,t,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(c.b)(t))return t;if(r)return n+t;const o=t.startsWith(n)?t:n+t.replace(/^\//,"");return i?e+o:o}(n,e,t,r)}}function o(e,n={}){const{withBaseUrl:t}=i();return t(e,n)}},117:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return c}))}}]);