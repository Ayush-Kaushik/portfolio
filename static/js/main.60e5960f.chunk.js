(this["webpackJsonpportfolio-ayush-kaushik"]=this["webpackJsonpportfolio-ayush-kaushik"]||[]).push([[0],{351:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(4),r=c.n(s),a=c(90),i=c.n(a),o=(c(98),c(99),c(25)),j=c(37),l=function(e){var t=e.project;return Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("h2",{className:"card-title",children:t.name.toUpperCase()}),Object(n.jsx)("span",{children:t.created_at}),t.description?Object(n.jsx)("p",{children:t.description}):"",Object(n.jsxs)("span",{children:[t.html_url?Object(n.jsxs)("a",{href:t.html_url,children:[" ",Object(n.jsx)(o.a,{className:"project-icon",icon:j.b,size:"2x"}),"  View Source"]}):"",t.homepage?Object(n.jsx)("a",{href:t.homepage,children:"Visit Project"}):""]})]})},d=c(11),u=c.n(d),b=c(22),h=c(24),O=c(23),p=c.n(O),x=Object(s.createContext)(),f=function(e){var t=e.children,c=Object(s.useState)([]),r=Object(h.a)(c,2),a=r[0],i=r[1];return Object(s.useEffect)(Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.github.com/users/Ayush-Kaushik/repos");case 2:t=e.sent,console.log(t.data),i(t.data);case 5:case"end":return e.stop()}}),e)}))),[]),Object(n.jsx)(x.Provider,{value:{projects:a},children:t})},m=function(){var e=Object(s.useContext)(x);return Object(n.jsxs)("div",{className:"project-container",children:[Object(n.jsx)("h1",{children:"Projects"}),e.projects.map((function(e){return Object(n.jsx)(l,{project:e},e.id)}))]})},v=Object(s.createContext)(null),k=function(e){var t=e.children,c=Object(s.useState)([]),r=Object(h.a)(c,2),a=r[0],i=r[1];return Object(s.useEffect)(Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://dev.to/api/articles?username=ayushkaushik");case 2:t=e.sent,console.log(t.data),i(t.data);case 5:case"end":return e.stop()}}),e)}))),[]),Object(n.jsx)(v.Provider,{value:{articles:a},children:t})},g=c(91),y=function(e){var t=e.article;return Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("h2",{children:t.title}),Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("img",{src:t.social_image}),Object(n.jsxs)("span",{children:[Object(n.jsxs)("p",{children:[" ",Object(n.jsx)(o.a,{className:"project-icon",icon:g.a}),"  "+t.positive_reactions_count]}),Object(n.jsx)("p",{children:t.description}),Object(n.jsx)("p",{children:Object(n.jsxs)("a",{href:t.url,children:[Object(n.jsx)(o.a,{className:"project-icon",icon:j.a,size:"2x"})," ","Read More"]})})]})]})]})},w=function(e){var t=Object(s.useContext)(v);return Object(n.jsxs)("div",{className:"article-container",children:[Object(n.jsx)("h1",{children:"Articles"}),t.articles.map((function(e){return Object(n.jsx)(y,{article:e},e.id)}))]})},_=Object(s.createContext)(),N=function(e){var t=e.children,c=Object(s.useState)({}),r=Object(h.a)(c,2),a=r[0],i=r[1];return Object(s.useEffect)(Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.github.com/users/Ayush-Kaushik");case 2:t=e.sent,console.log(t.data),i(t.data);case 5:case"end":return e.stop()}}),e)}))),[]),Object(n.jsx)(_.Provider,{value:{userInfo:a},children:t})},C=function(e){return Object(n.jsx)("span",{role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true",children:e.symbol})},I=c(92),P=c.n(I),z=function(){return Object(n.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",overflowY:"hidden"},children:Object(n.jsx)(P.a,{params:{particles:{number:{value:200},links:{color:"#000000",distance:100,enable:!0,opacity:.5,width:1},shape:{type:"circle",stroke:{width:10,color:"#000000"}},opacity:{value:.4008530152163807,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!0}},size:{value:1.5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:1,color:"#ffffff",opacity:.3687847739990702,width:.6413648243462091},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!0,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}})})},S=function(){var e=Object(s.useContext)(_);return Object(n.jsxs)("div",{className:"aboutme-background-container",children:[Object(n.jsx)(z,{}),Object(n.jsxs)("div",{className:"aboutme-container",children:[Object(n.jsxs)("span",{children:[Object(n.jsxs)("h1",{children:["Hi!",Object(n.jsx)(C,{symbol:"\ud83d\udc4b",label:"wave"}),"  I'm Ayush Kaushik"]}),Object(n.jsx)("h2",{children:"I'm a DevOps Developer."})]}),Object(n.jsx)("img",{src:e.userInfo.avatar_url,alt:"my-image"})]})]})},A=function(){var e=Object(s.useContext)(_);return Object(n.jsxs)("div",{className:"footer-container",children:[Object(n.jsx)("p",{children:"Ayush Kaushik \xa9 2020"}),Object(n.jsxs)("ul",{className:"footer-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:e.userInfo.url,children:"Github"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"www.linkedin.com/in/ayushkaushik",children:"LinkedIn"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://dev.to/ayushkaushik",children:"Dev.to"})})]})]})};var D=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(S,{}),Object(n.jsx)(m,{}),Object(n.jsx)(w,{}),Object(n.jsx)(A,{})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,352)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(N,{children:Object(n.jsx)(f,{children:Object(n.jsx)(k,{children:Object(n.jsx)(D,{})})})})}),document.getElementById("root")),E()},98:function(e,t,c){},99:function(e,t,c){}},[[351,1,2]]]);
//# sourceMappingURL=main.60e5960f.chunk.js.map