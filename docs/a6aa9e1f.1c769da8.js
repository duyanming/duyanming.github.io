(window.webpackJsonp=window.webpackJsonp||[]).push([[25,5],{115:function(a,e,t){"use strict";t.r(e);var n=t(0),i=t.n(n),l=t(20),r=t(126),c=t(146),m=t(122);var s=function(a){const{metadata:e}=a,{previousPage:t,nextPage:n}=e;return i.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},i.a.createElement("div",{className:"pagination-nav__item"},t&&i.a.createElement(m.a,{className:"pagination-nav__link",to:t},i.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.a.createElement(m.a,{className:"pagination-nav__link",to:n},i.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},o=t(132);e.default=function(a){const{metadata:e,items:t,sidebar:n}=a,{siteConfig:{title:m}}=Object(l.default)(),{blogDescription:d,blogTitle:p,permalink:v}=e,g="/"===v?m:p;return i.a.createElement(r.a,{title:g,description:d,wrapperClassName:"blog-wrapper"},i.a.createElement("div",{className:"container margin-vert--lg"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--2"},i.a.createElement(o.a,{sidebar:n})),i.a.createElement("main",{className:"col col--8"},t.map((a=>{let{content:e}=a;return i.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},i.a.createElement(e,null))})),i.a.createElement(s,{metadata:e})))))}},127:function(a,e,t){"use strict";var n=t(123);t.d(e,"a",(function(){return n.a}))}}]);