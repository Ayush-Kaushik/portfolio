(this["webpackJsonpportfolio-ayush-kaushik"]=this["webpackJsonpportfolio-ayush-kaushik"]||[]).push([[0],{115:function(e,t,c){},116:function(e,t,c){},379:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(4),i=c.n(a),s=c(48),r=c.n(s),o=(c(115),c(116),c(9)),l=c(11),j=c(30),d=function(e){var t=e.project;return Object(n.jsxs)("div",{className:"layout-card",children:[Object(n.jsx)("h1",{children:t.name}),Object(n.jsx)("span",{className:"layout-card-subtitle",children:t.created_at}),t.description?Object(n.jsx)("p",{children:t.description}):"",Object(n.jsxs)("span",{className:"layout-card-links",children:[t.html_url?Object(n.jsxs)("a",{href:t.html_url,children:[" ",Object(n.jsx)(o.a,{className:"project-icon",icon:l.d,size:"2x"}),"  View Source"]}):"",t.homepage?Object(n.jsxs)("a",{href:t.homepage,children:[" ",Object(n.jsx)(o.a,{className:"project-icon",icon:j.a,size:"2x"})," ","Live Demo"]}):""]})]})},u=c(15),h=c.n(u),b=c(29),p=c(23),m=c(35),x=c.n(m),O=[289579210,287168767,254787189,234479379,95316693,94929836],f=Object(a.createContext)(),v=function(e){var t=e.children,c=Object(a.useState)([]),i=Object(p.a)(c,2),s=i[0],r=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.github.com/users/Ayush-Kaushik/repos?sort=created");case 2:t=e.sent,r(t.data.filter((function(e){if(O.includes(e.id)){var t=new Date(e.created_at);return e.created_at=t.toISOString().substring(0,10),e}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsx)(f.Provider,{value:{projects:s},children:t})},g=c(17),k=function(){var e=Object(a.useContext)(f);return Object(n.jsx)(g.Element,{name:"projects",children:Object(n.jsxs)("div",{className:"layout-page project-container",children:[Object(n.jsx)("h1",{children:"Projects"}),e.projects.map((function(e){return Object(n.jsx)(d,{project:e},e.id)}))]})})},y=Object(a.createContext)(null),w=function(e){var t=e.children,c=Object(a.useState)([]),i=Object(p.a)(c,2),s=i[0],r=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://dev.to/api/articles?username=ayushkaushik&state=fresh");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsx)(y.Provider,{value:{articles:s},children:t})},N=function(e){var t=e.article;return Object(n.jsxs)("div",{className:"layout-card",children:[Object(n.jsx)("h1",{children:t.title}),Object(n.jsx)("div",{className:"layout-card-img",children:Object(n.jsx)("img",{src:t.social_image,alt:"article image"})}),Object(n.jsxs)("span",{className:"layout-card-links",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)(o.a,{className:"project-icon",icon:j.b}),"  "+t.positive_reactions_count]}),Object(n.jsx)("p",{children:t.description}),Object(n.jsxs)("a",{href:t.url,children:[Object(n.jsx)(o.a,{className:"project-icon",icon:l.b,size:"2x"})," ","Read More"]})]})]})},T=function(){var e=Object(a.useContext)(y);return Object(n.jsx)(g.Element,{name:"articles",children:Object(n.jsxs)("div",{className:"layout-page",children:[Object(n.jsx)("h1",{children:"Articles"}),e.articles.map((function(e){return Object(n.jsx)(N,{article:e},e.id)}))]})})},S=Object(a.createContext)(),z=function(e){var t=e.children,c=Object(a.useState)({}),i=Object(p.a)(c,2),s=i[0],r=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.github.com/users/Ayush-Kaushik");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsx)(S.Provider,{value:{userInfo:s},children:t})},C=function(e){return Object(n.jsx)("span",{role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true",children:e.symbol})},L=c(109),_=c.n(L),P=function(){var e=Object(a.useState)(20),t=Object(p.a)(e,2),c=t[0],i=t[1];return window.addEventListener("resize",(function(){var e,t=window.innerWidth;e=t>500?Math.round(Math.sqrt(t/.5)):Math.round(Math.sqrt(t/4)),i(e)})),Object(n.jsx)("div",{className:"particle-background",children:Object(n.jsx)(_.a,{params:{particles:{number:{value:c},links:{color:"#979595",distance:100,enable:!0,opacity:.5,width:2},shape:{type:"circle",stroke:{width:2,color:"#979595"}},opacity:{value:.4008530152163807,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!0}},size:{value:1.5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:1,color:"#ffffff",opacity:.3687847739990702,width:.6413648243462091},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:400,line_linked:{opacity:.5}},bubble:{distance:400,size:20,duration:2,opacity:3,speed:3},remove:{particles_nb:2}}},retina_detect:!0}})})},A=function(){var e=Object(a.useContext)(S);return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsxs)("div",{className:"aboutme-container",children:[Object(n.jsxs)("span",{children:[Object(n.jsxs)("h1",{children:["Hi!",Object(n.jsx)(C,{symbol:"\ud83d\udc4b",label:"wave"}),"    I'm Ayush Kaushik"]}),Object(n.jsx)("h2",{children:"I'm a DevOps Developer @ Tekside.iO"}),Object(n.jsx)(g.Link,{to:"contact",smooth:!0,duration:1e3,children:Object(n.jsx)("button",{id:"#cta",children:Object(n.jsx)("h3",{children:"Let's Connect"})})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{href:e.userInfo.html_url,children:Object(n.jsx)(o.a,{className:"project-icon",icon:l.e})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/ayushkaushik",children:Object(n.jsx)(o.a,{className:"project-icon",icon:l.l})}),Object(n.jsx)("a",{href:"https://dev.to/ayushkaushik",children:Object(n.jsx)(o.a,{className:"project-icon",icon:l.b})})]})]}),Object(n.jsx)("div",{className:"aboutme-img-container",children:Object(n.jsx)("img",{src:e.userInfo.avatar_url,alt:"my-image"})})]})]})},I=function(){return Object(n.jsxs)("div",{className:"layout-footer",children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/Ayush-Kaushik",children:"Github"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/ayushkaushik",children:"LinkedIn"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://dev.to/ayushkaushik",children:"Dev.to"})})]}),Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:"Ayush Kaushik \xa9 2020"})})]})},M=[{workTitle:"Development and Support Co-Op",description:["Worked as a Client Success Team Member and shadowed my peers to learn more about the tools and processes","Started learning CONNECT Messaging Platform for email marketing to support client requests","Learned HTML, CSS, Javascript and JQuery to support client with Email content fixes","Introduced to PHP for the first time, did not only learn the concepts but created hand-written document for future reference","Learned about API for the first time and learned how to use Postman application","After learning PHP concepts, started focusing on Symfony framework to build my first project (Patient Medication Tracker)"],timeline:"June 2017 - September 2017",image:"https://www.dropbox.com/s/d9ru8zpmstcv5cc/inbox-marketer.jpg?raw=1",company:{name:"Inbox Marketer",link:"https://trendlineint.wpengine.com/inbox-marketer-now-trendline/"}},{workTitle:"Development and Support Co-Op",description:["Built a server-side rendering CRUD based application for an Admin portal using NodeJS and express","The portal included: user login, multi-selection, bulk edit and custom information based on user data","Learned about Authorization and Authentication flows for the first time and applied them to the portal","Presented the work in company wide show and tell","Based on facing some issues with server-side rendering applications, decided to use framework for building the second service","Started learning ReactJs framework to build the User Portal","Built the application and learned many new concepts like class based components, state and props"],timeline:"June 2018 - September 2018",image:"https://www.dropbox.com/s/d9ru8zpmstcv5cc/inbox-marketer.jpg?raw=1",company:{name:"Inbox Marketer",link:"https://trendlineint.wpengine.com/inbox-marketer-now-trendline/"}},{workTitle:"Develop and Support Specialist Co-Op",description:["This role was leaning more towards DevOps tasks","Learned Kubernetes and rancher for the first time. I found the learning curve very steep since it was difficult for me to wrap my head around containers","Introduced to YAML format for the first time when building deployment files","Learned and excelled Docker as a single node and Docker swarm","Understood different concepts such as containers, services, stacks, docker commands, network types and deployment files","Learned the concepts related to RabbitMQ and messaging queues in general","The most important skill that I gained from this co-op is automation","Learned how to build pipeline as workspaces, found some drawbacks in its use cases and switched to pipeline as code","Even pipeline as code per repository was not maintainable so learned how to use shared library and started setting up the pipeline infrastructure","Helped to bring drastic reduction in deployment times since everything that was done by shell scripting was handled by Jenkins pipeline"],timeline:"January 2019 - August 2019",image:"https://www.dropbox.com/s/82a1k6pz03lc9sy/c1f943_c965cd15c9e549d89685ae2c022e5ff2_mv2.png?raw=1",company:{name:"Tekside.IO",link:"https://www.tekside.io/"}}],E=function(e){var t=e.experience;return Object(n.jsxs)("div",{className:"layout-card",children:[Object(n.jsx)("div",{className:"layout-card-img",children:Object(n.jsx)("a",{href:t.company.link,children:Object(n.jsx)("img",{src:t.image,alt:"experience image"})})}),Object(n.jsx)("h1",{children:t.workTitle}),Object(n.jsx)("h2",{children:t.timeline}),Object(n.jsx)("div",{className:"experience-description",children:t.description?Object(n.jsx)("ul",{children:t.description.map((function(e,t){return Object(n.jsx)("li",{children:e},t)}))}):""})]})},D=function(){return Object(n.jsx)(g.Element,{name:"experience",children:Object(n.jsxs)("div",{className:"layout-page",children:[Object(n.jsx)("h1",{children:"Experience"}),Object(n.jsx)("div",{children:M.map((function(e,t){return Object(n.jsx)(E,{experience:e},t)}))})]})})},J=function(){return Object(n.jsx)("div",{className:"layout-navigation",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(g.Link,{activeClass:"active",to:"projects",smooth:!0,duration:1e3,children:"Projects"})}),Object(n.jsx)("li",{children:Object(n.jsx)(g.Link,{activeClass:"active",to:"experience",spy:!0,smooth:!0,duration:1e3,children:"Experience"})}),Object(n.jsx)("li",{children:Object(n.jsx)(g.Link,{activeClass:"active",to:"articles",spy:!0,smooth:!0,duration:2e3,children:"Articles"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.dropbox.com/s/pjqc8qr878ixz3k/AyushKaushik_Resume.pdf?raw=1",download:!0,children:"Resume"})})]})})},H={languages:[{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.h,size:"2x"}),toolTip:"Java"},{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.j,size:"2x"}),toolTip:"Javascript"},{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.m,size:"2x"}),toolTip:"PHP"},{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.g,size:"2x"}),toolTip:"HTML"},{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.a,size:"2x"}),toolTip:"CSS"},{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.n,size:"2x"}),toolTip:"Python"},{label:"C",toolTip:"C"},{label:"Groovy",toolTip:"Groovy"}],frameworks:[{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.o,size:"2x"}),toolTip:"React"},{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.k,size:"2x"}),toolTip:"Laravel"}],automation:[{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.i,size:"2x"}),toolTip:"Jenkins"},{label:Object(n.jsx)(o.a,{className:"project-icon",icon:j.c,size:"2x"}),toolTip:"Bash"},{label:Object(n.jsx)(o.a,{className:"project-icon",icon:j.c,size:"2x"}),toolTip:"Shell Scripting"},{label:Object(n.jsx)(o.a,{className:"project-icon",icon:j.c,size:"2x"}),toolTip:"PowerShell"}],other:[{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.d,size:"2x"}),toolTip:"GitHub"},{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.f,size:"2x"}),toolTip:"GitLab"},{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.c,size:"2x"}),toolTip:"Docker"},{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.q,size:"2x"}),toolTip:"Trello"},{label:Object(n.jsx)(o.a,{className:"project-icon",icon:l.p,size:"2x"}),toolTip:"Slack"}],Text_Editors:["Webstorm","Visual Studio Code","Sublime Text"],database:["MariaDB","MySQL","MSSQL"]},B=function(){return console.log(H.Languages),Object(n.jsx)(g.Element,{name:"skills",children:Object(n.jsxs)("div",{className:"layout-page skill-container",children:[Object(n.jsx)("h1",{children:"Skills"}),Object(n.jsxs)("div",{className:"layout-card",children:[Object(n.jsx)("h2",{children:"Languages"}),Object(n.jsx)("div",{className:"skill-language",children:H.languages.map((function(e,t){return Object(n.jsxs)("span",{children:[Object(n.jsx)("h3",{children:e.label}),Object(n.jsx)("p",{children:e.toolTip})]},t)}))})]}),Object(n.jsxs)("div",{className:"layout-card",children:[Object(n.jsx)("h2",{children:"Frameworks"}),Object(n.jsx)("div",{className:"skill-language",children:H.frameworks.map((function(e,t){return Object(n.jsxs)("span",{children:[Object(n.jsx)("h3",{children:e.label}),Object(n.jsx)("p",{children:e.toolTip})]},t)}))})]}),Object(n.jsxs)("div",{className:"layout-card",children:[Object(n.jsx)("h2",{children:"Automation"}),Object(n.jsx)("div",{className:"skill-language",children:H.automation.map((function(e,t){return Object(n.jsxs)("span",{children:[Object(n.jsx)("h3",{children:e.label}),Object(n.jsx)("p",{children:e.toolTip})]},t)}))})]}),Object(n.jsxs)("div",{className:"layout-card",children:[Object(n.jsx)("h2",{children:"Other Tools"}),Object(n.jsx)("div",{className:"skill-language",children:H.other.map((function(e,t){return Object(n.jsxs)("span",{children:[Object(n.jsx)("h3",{children:e.label}),Object(n.jsx)("p",{children:e.toolTip})]},t)}))})]})]})})},K=c(49);c(375),c(377);K.a.initializeApp({apiKey:"AIzaSyB3inTeoUa_G9HNcNrkw2k9HVorgcvSqJg",authDomain:"portfolio-ayush-kaushik.firebaseapp.com",databaseURL:"https://portfolio-ayush-kaushik.firebaseio.com",projectId:"portfolio-ayush-kaushik",storageBucket:"",messagingSenderId:"776427189209"});K.a.auth();var q=K.a.firestore(),R=Object(a.createContext)(null),G=function(e){return Object(n.jsx)(R.Provider,{value:{sendMessage:function(e,t,c){return new Promise((function(n,a){q.collection("/contacts").add({name:t,email:e,message:c}).then((function(e){n(e)})).catch((function(e){a(e)}))}))}},children:e.children})},F=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)(""),r=Object(p.a)(s,2),o=r[0],l=r[1],j=Object(a.useState)(""),d=Object(p.a)(j,2),u=d[0],m=d[1],x=Object(a.useContext)(R),O=function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.sendMessage(o,c,u);case 3:alert("Awesome! I'll text you back \ud83d\ude4c"),m(""),i(""),l(""),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("You message didn't go through \u2639\ufe0f but thanks for checking out my portfolio \ud83e\udd29"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)(g.Element,{name:"contact",children:Object(n.jsxs)("div",{className:"layout-page contact-container",children:[Object(n.jsx)("h1",{children:"Let's Connect!"}),Object(n.jsxs)("div",{className:"layout-card",children:[Object(n.jsx)("label",{children:Object(n.jsx)("h2",{children:"Name"})}),Object(n.jsx)("input",{type:"text",id:"name",placeholder:"Your Awesome Name!",onChange:function(e){i(e.target.value)},value:c}),Object(n.jsx)("label",{children:Object(n.jsx)("h2",{children:"Email"})}),Object(n.jsx)("input",{type:"email",id:"email",placeholder:"youremail@email.com",onChange:function(e){l(e.target.value)},value:o}),Object(n.jsx)("label",{children:Object(n.jsx)("h2",{children:"Message"})}),Object(n.jsx)("input",{type:"text",placeholder:"Let's work on something cool!",onChange:function(e){m(e.target.value)},value:u}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:O,children:Object(n.jsx)("h3",{children:"Send"})})})]})]})})};var U=function(){return Object(a.useEffect)((function(){document.title="Ayush Kaushik"}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(A,{}),Object(n.jsx)(J,{}),Object(n.jsx)(B,{}),Object(n.jsx)(D,{}),Object(n.jsx)(k,{}),Object(n.jsx)(T,{}),Object(n.jsx)(F,{}),Object(n.jsx)(I,{})]})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,380)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(G,{children:Object(n.jsx)(z,{children:Object(n.jsx)(v,{children:Object(n.jsx)(w,{children:Object(n.jsx)(U,{})})})})})}),document.getElementById("root")),Q()}},[[379,1,2]]]);