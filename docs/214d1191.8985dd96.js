(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||l[d]||a;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(21),i=n(118);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},118:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(116)),c=n(117),o={id:"4_1_introduce",title:"4.1 \u7f51\u5173&\u76d1\u63a7",sidebar_label:"4.1 \u7f51\u5173&\u76d1\u63a7"},p={unversionedId:"4_1_introduce",id:"4_1_introduce",isDocsHomePage:!1,title:"4.1 \u7f51\u5173&\u76d1\u63a7",description:"4.1.2 \u6e90\u7801\u7ed3\u6784",source:"@site/docs\\4.1monitoring.mdx",slug:"/4_1_introduce",permalink:"/docs/4_1_introduce",editUrl:"https://github.com/duyanming/duyanming.github.com/tree/main/viper/docs/4.1monitoring.mdx",version:"current",sidebar_label:"4.1 \u7f51\u5173&\u76d1\u63a7",sidebar:"docs",previous:{title:"3.1 \u670d\u52a1\u63d0\u4f9b\u8005ViperService\u6982\u8ff0",permalink:"/docs/3_1_introduce"},next:{title:"5.1 \u670d\u52a1\u8d44\u6e90\u76d1\u63a7",permalink:"/docs/5_1_introduce"}},s=[{value:"4.1.2 \u6e90\u7801\u7ed3\u6784",id:"412-\u6e90\u7801\u7ed3\u6784",children:[]},{value:"4.1.1 \u914d\u7f6e\u6587\u4ef6",id:"411-\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"4.1.3 \u8fd0\u884c\u56fe",id:"413-\u8fd0\u884c\u56fe",children:[]},{value:"4.1.4 \u6d4f\u89c8\u5668\u6253\u5f00\u76d1\u63a7\u7f51\u5173",id:"414-\u6d4f\u89c8\u5668\u6253\u5f00\u76d1\u63a7\u7f51\u5173",children:[]}],u={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"412-\u6e90\u7801\u7ed3\u6784"},"4.1.2 \u6e90\u7801\u7ed3\u6784"),Object(a.b)("div",{style:{width:"100%",textAlign:"center"}},Object(a.b)("img",{src:Object(c.a)("img/getway.jpg")})),Object(a.b)("h2",{id:"411-\u914d\u7f6e\u6587\u4ef6"},"4.1.1 \u914d\u7f6e\u6587\u4ef6"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"  \u914d\u7f6e\u6587\u4ef6\uff1a",Object(a.b)("inlineCode",{parentName:"p"},"Viper\\Viper\\appsettings.json"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Target": {\n    "AppName": "ApiGateway",    //\u7f51\u5173\u540d\u79f0\n    "IpAddress": "127.0.0.1",   //\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\n    "Port": 7010,               //\u6ce8\u518c\u4e2d\u5fc3\u76d1\u542c\u7aef\u53e3\n    "TraceOnOff": true          //true \u5f00\u542f\u94fe\u8def\u8ffd\u8e2a\uff0cfalse \u5173\u95ed\n  },\n  "Limit": {                    //\u7f51\u5173\u9650\u6d41 \uff08\u6bcf\u4e2a\u670d\u52a1\u4e5f\u53ef\u4ee5\u8bbe\u5b9a\u81ea\u5df1\u7684\u9650\u6d41\u7b56\u7565\uff09\n    "Enable": true,             //\u542f\u7528\u9650\u6d41\n    "TagLimits": [              // \u6839\u636eTag\u6807\u7b7e\u9650\u6d41 \u3010channel\u3011\u3010router\u3011\n      {\n        "channel": "*",         //\u5339\u914d\u6240\u6709\n        "router": "*",          //\u5339\u914d\u6240\u6709\n        "timeSpan": "1",        //\u65f6\u95f4\u7247\u5355\u4f4d\u79d2\n        "rps": 100,\n        "limitSize": 100        //\u6876\u9ed8\u8ba4\u5927\u5c0f\n      }\n    ],\n    "DefaultIpLimit": {           // \u9ed8\u8ba4\u5ba2\u6237\u7aefIP\u9650\u6d41\n      "timeSpan": 1,\n      "rps": 100,\n      "limitSize": 100\n    },\n    "IpLimits": [                 //\u9488\u5bf9\u4e0d\u540cIP\u8bbe\u7f6e\u4e0d\u540c\u7684IP\u9650\u6d41\u7b56\u7565\n      {\n        "ipMatch": "0.0.0.1",     //ipMatch\u53c2\u8003IPAddressRange\n        "timeSpan": 1,\n        "rps": 100,\n        "limitSize": 100\n      },\n      {\n        "ipMatch": "192.168.0.10 - 192.168.10.20",\n        "timeSpan": 1,\n        "rps": 100,\n        "limitSize": 100\n      }\n    ]\n  }\n}\n\n')),Object(a.b)("h2",{id:"413-\u8fd0\u884c\u56fe"},"4.1.3 \u8fd0\u884c\u56fe"),Object(a.b)("div",{style:{width:"100%",textAlign:"center"}},Object(a.b)("img",{src:Object(c.a)("img/getway_runing.jpg")})),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u53d1\u5e03\u6216\u8005\u4ecebin-debug \u542f\u52a8 \u53d1\u73b0\u6ca1\u5f39\u51fa\u542f\u52a8\u4fe1\u606f\u4e0d\u8981\u7d27\u5f20 ")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"  \u9700\u8981\u5728Getway\uff08\u7f51\u5173\uff09\u7684Program\u4e2dConfigureLogging\u7684LogLevel.None \u6539\u4e3aLogLevel.Information\u5373\u53ef"))),Object(a.b)("p",null,"\xa0","\xa0","\u76ee\u524d\u652f\u6301\u4e24\u79cd",Object(a.b)("inlineCode",{parentName:"p"},"Autofac"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"DependencyInjection"),",\u63a8\u8350",Object(a.b)("inlineCode",{parentName:"p"},"Autofac")),Object(a.b)("h2",{id:"414-\u6d4f\u89c8\u5668\u6253\u5f00\u76d1\u63a7\u7f51\u5173"},"4.1.4 \u6d4f\u89c8\u5668\u6253\u5f00\u76d1\u63a7\u7f51\u5173"),Object(a.b)("div",{style:{width:"100%",textAlign:"center"}},Object(a.b)("img",{src:Object(c.a)("img/login_page.jpg")}),Object(a.b)("img",{src:Object(c.a)("img/dashboard.jpg")})),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5230\u6b64\u4e3a\u6b62 ",Object(a.b)("inlineCode",{parentName:"h5"},"Viper")," \u5df2\u7ecf\u5b8c\u5168\u8fd0\u884c\u8d77\u6765\u4e86")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"\xa0","\xa0","\u5f00\u59cb\u4f60\u7684\u4f53\u9a8c\u4e4b\u65c5\uff0c\u66f4\u591a\u8be6\u7ec6\u7cbe\u5f69\u5185\u5bb9\u968f\u540e\u66f4\u65b0"))))}b.isMDXComponent=!0}}]);