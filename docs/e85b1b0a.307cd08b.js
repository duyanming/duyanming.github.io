(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(116)),o=n(117),i={id:"6_1_introduce",title:"6.1 \u96c6\u7fa4\u63a5\u53e3\u6587\u6863",sidebar_label:"6.1 \u96c6\u7fa4\u63a5\u53e3\u6587\u6863"},l={unversionedId:"6_1_introduce",id:"6_1_introduce",isDocsHomePage:!1,title:"6.1 \u96c6\u7fa4\u63a5\u53e3\u6587\u6863",description:"6.1.1 \u96c6\u7fa4\u63a5\u53e3\u6587\u6863",source:"@site/docs\\6.1interface-doc.mdx",slug:"/6_1_introduce",permalink:"/docs/6_1_introduce",editUrl:"https://github.com/duyanming/duyanming.github.com/tree/main/viper/docs/6.1interface-doc.mdx",version:"current",sidebar_label:"6.1 \u96c6\u7fa4\u63a5\u53e3\u6587\u6863",sidebar:"docs",previous:{title:"5.1 \u670d\u52a1\u8d44\u6e90\u76d1\u63a7",permalink:"/docs/5_1_introduce"},next:{title:"7.1 Hello World",permalink:"/docs/7_1_introduce"}},u=[{value:"6.1.1 \u96c6\u7fa4\u63a5\u53e3\u6587\u6863",id:"611-\u96c6\u7fa4\u63a5\u53e3\u6587\u6863",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"611-\u96c6\u7fa4\u63a5\u53e3\u6587\u6863"},"6.1.1 \u96c6\u7fa4\u63a5\u53e3\u6587\u6863"),Object(c.b)("div",{style:{width:"100%",textAlign:"center"}},Object(c.b)("img",{src:Object(o.a)("img/router.jpg")})),Object(c.b)("p",null,"  \u3000\u3000\u3000 Bootstrap.StartUp(args\u547d\u4ee4\u884c\u53c2\u6570, \u4f9d\u8d56\u6ce8\u5165\u6784\u5efa\u524d\u56de\u8c03\u51fd\u6570,\u670d\u52a1\u542f\u52a8\u540e\u56de\u8c03\u51fd\u6570,\u4f9d\u8d56\u6ce8\u5165\u7c7b\u578bautofac\u3001DependencyInjection);"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Bootstrap.StartUp() \u542f\u52a8\u670d\u52a1\u5bb9\u5668"',title:'"Bootstrap.StartUp()','\u542f\u52a8\u670d\u52a1\u5bb9\u5668"':!0}," /**\n             * \u542f\u52a8\u9ed8\u8ba4DI\u5e93\u4e3a Autofac \u53ef\u4ee5\u5207\u6362\u4e3a\u5fae\u8f6f\u81ea\u5e26\u7684DI\u5e93 DependencyInjection\n             */\n            Bootstrap.StartUp(args, () =>//\u670d\u52a1\u914d\u7f6e\u6587\u4ef6\u8bfb\u53d6\u5b8c\u6210\u540e\u56de\u8c03(\u670d\u52a1\u672a\u542f\u52a8)\n            {\n                //Anno.Const.SettingService.TraceOnOff = true;\n\n                /*\n                 * \u529f\u80fd\u63d2\u4ef6\u9009\u62e9\u662fThrift\u8fd8\u662f Grpc\n                 * Install-Package Anno.Rpc.Client -Version 1.0.3.3 Thrift\n                 * Install-Package Anno.Rpc.ServerGrpc -Version 1.0.3.3 Grpc\n                 * \u6b64\u5904\u4e3a Thrift\n                 */\n                var autofac = IocLoader.GetAutoFacContainerBuilder();\n                autofac.RegisterType(typeof(RpcConnectorImpl)).As(typeof(IRpcConnector)).SingleInstance();\n            }\n            , () =>//\u670d\u52a1\u542f\u52a8\u540e\u7684\u56de\u8c03\u65b9\u6cd5\n            {\n                /**\n                 * \u670d\u52a1Api\u6587\u6863\u5199\u5165\u6ce8\u518c\u4e2d\u5fc3\n                 */\n                Bootstrap.ApiDoc();                 \n            });\n")),Object(c.b)("p",null,"\u3000\u3000\u3000",Object(c.b)("b",null,"\u63a5\u53e3\u6587\u6863\u63cf\u8ff0\u6765\u81ea\u65b9\u6cd5\u6216\u8005\u53c2\u6570\u7684 ",'[AnnoInfo(Desc = "\u83b7\u53d6\u670d\u52a1\u8def\u7531\u4fe1\u606f")]')),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"\u670d\u52a1\u540d\u79f0"),Object(c.b)("th",{parentName:"tr",align:null},"\u7ba1\u9053"),Object(c.b)("th",{parentName:"tr",align:null},"\u8bf7\u8def\u7531"),Object(c.b)("th",{parentName:"tr",align:null},"\u65b9\u6cd5"),Object(c.b)("th",{parentName:"tr",align:null},"\u53c2\u6570\u4e2a\u6570"),Object(c.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"App001"),Object(c.b)("td",{parentName:"tr",align:null},"Anno.Plugs.ViperService"),Object(c.b)("td",{parentName:"tr",align:null},"ExamModule"),Object(c.b)("td",{parentName:"tr",align:null},"Add"),Object(c.b)("td",{parentName:"tr",align:null},"2"),Object(c.b)("td",{parentName:"tr",align:null},"\u52a0\u51cf")))),Object(c.b)("div",{style:{width:"100%",textAlign:"center"}},Object(c.b)("img",{src:Object(o.a)("img/router_detail.jpg")})),"\u3000\u3000\u3000\u586b\u5199\u63a5\u53e3\u9700\u8981\u7684\u53c2\u6570\uff0c\u4e5f\u53ef\u4ee5\u6839\u636e \u5177\u4f53\u9700\u6c42\u589e\u52a0\u6216\u8005\u5220\u9664\u53c2\u6570\u3002\uff08\u63a5\u53e3\u91cc\u9762\u6ca1\u6709\u5f62\u53c2\u4e5f\u53ef\u4ee5\u901a\u8fc7this.Input\u83b7\u53d6\u53c2\u6570\u7c7b\u4f3cmvc\u91cc\u9762\u7684 response\uff09",Object(c.b)("div",{style:{width:"100%",textAlign:"center"}},Object(c.b)("img",{src:Object(o.a)("img/router03.jpg")})),Object(c.b)("br",null),"\u70b9\u51fbDebug\u8c03\u7528\u63a5\u53e3\u67e5\u770b\u7ed3\u679c\u3002",Object(c.b)("div",{style:{width:"100%",textAlign:"center"}},Object(c.b)("img",{src:Object(o.a)("img/router04.jpg")})),Object(c.b)("p",null,"\u6211\u4eec\u770b\u5230\u4e86\u8c03\u8bd5\u7ed3\u679c\u3002\u63a5\u53e3\u6587\u6863\u7684\u5185\u5bb9\u5927\u6982\u5c31\u8fd9\u4e48\u591a\uff0c\u66f4\u8be6\u7ec6\u7684\u5728\u540e\u9762\u7684\u7ae0\u8282\u4e2d\u4f7f\u7528\u65f6\u4f1a\u6709\u8bf4\u660e"))}p.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||s[d]||c;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(21),a=n(118);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},118:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);