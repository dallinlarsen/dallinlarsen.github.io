(this.webpackJsonpresume_react=this.webpackJsonpresume_react||[]).push([[0],{10:function(e,t,n){e.exports={InputElement:"Input_InputElement__2aAPs",Red:"Input_Red__1Se-G",Input:"Input_Input__3vgVZ",Label:"Input_Label__2pvLE"}},16:function(e,t,n){e.exports={Container:"background_Container__1HHDL",Content:"background_Content__1jCik",Home:"background_Home__3NgNW",ContentRel:"background_ContentRel__20O_O",Topo:"background_Topo__eTjhh",Topo1:"background_Topo1__2pI13",Topo2:"background_Topo2__2RDoW",Topo3:"background_Topo3__bQc6d"}},19:function(e,t,n){e.exports={Toolbar:"MobileBar_Toolbar__3LMAD",BackDrop:"MobileBar_BackDrop__1a96l"}},2:function(e,t,n){e.exports={Main:"about_me_page_Main__1h2kJ",Header:"about_me_page_Header__L2IZe",Item:"about_me_page_Item__3Hinj",Info:"about_me_page_Info__2bA5k",SubHeader:"about_me_page_SubHeader__2J9SO",Pic:"about_me_page_Pic__1peXE",Skills:"about_me_page_Skills__3woRZ"}},20:function(e,t,n){e.exports={Form:"contact_page_Form__4E1vG",FormContents:"contact_page_FormContents__2Kg2I",Button:"contact_page_Button__3LXSD",ContactInfo:"contact_page_ContactInfo__115Pp",ContactInfoContents:"contact_page_ContactInfoContents__3Stvl"}},22:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3xVGY",Open:"SideDrawer_Open__1RQAM",Close:"SideDrawer_Close__fkwKM"}},27:function(e,t,n){e.exports={Title:"home_page_Title__3Ycas",Main:"home_page_Main__3U8TZ",ContentRel:"home_page_ContentRel__WLkh_",BigScreen:"home_page_BigScreen__2938U",SidePanel:"home_page_SidePanel__2fkoI",SmallScreen:"home_page_SmallScreen__JN_2Z",Links:"home_page_Links__1pYSP"}},28:function(e,t,n){e.exports={ToolBar:"Toolbar_ToolBar__3Tm5c",ToolBarTop:"Toolbar_ToolBarTop__1wD-H"}},40:function(e,t,n){e.exports={App:"App_App__1VuUA","App-logo":"App_App-logo__27Ksk","App-logo-spin":"App_App-logo-spin__zCp-6","App-header":"App_App-header__z6cdA","App-link":"App_App-link__2JQDw"}},41:function(e,t,n){e.exports={Layout:"Layout_Layout__NJ9EX"}},42:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__iaQVv"}},44:function(e,t,n){e.exports={Footer:"footer_Footer__2Ian5"}},46:function(e,t,n){e.exports={Loader:"Spinner_Loader__2Ei66",load8:"Spinner_load8__3WGOC"}},52:function(e,t,n){},6:function(e,t,n){e.exports={Main:"projects_page_Main__2N-PU",Hide:"projects_page_Hide__3fkWx",Item:"projects_page_Item__2WaeD",PicBig:"projects_page_PicBig__kzHkN",PicSmall:"projects_page_PicSmall__3jdsv",PicBox:"projects_page_PicBox__nPbg-"}},76:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(39),r=n.n(i),l=n(5),o=(n(52),n(11)),d=n(12),j=n(14),h=n(13),b=n(3),p=n(40),u=n.n(p),m=n(41),O=n.n(m),x=n(22),g=n.n(x),f=function(e){var t=[g.a.SideDrawer,g.a.Close];return e.open&&(t=[g.a.SideDrawer,g.a.Open]),Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)("div",{className:t.join(" "),children:e.children})})},_=n(42),v=n.n(_),C=function(e){return Object(a.jsxs)("div",{className:v.a.DrawerToggle,onClick:e.clicked,children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})},y=n(19),S=n.n(y),w=function(e){var t=e.drawerOpen?Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(f,{open:e.drawerOpen,closeDrawer:e.closeDrawer,children:Object(a.jsxs)("div",{className:"top"===e.type?[S.a.ToolBar,S.a.ToolBarTop].join(" "):S.a.ToolBar,children:[Object(a.jsx)("div",{children:Object(a.jsx)(l.b,{to:"/",children:"HOME"})}),Object(a.jsx)("div",{children:Object(a.jsx)(l.b,{to:"/projects",children:"PROJECT SAMPLES"})}),Object(a.jsx)("div",{children:Object(a.jsx)(l.b,{to:"/about",children:"ABOUT ME"})}),Object(a.jsx)("div",{children:Object(a.jsx)(l.b,{to:"/contact",children:"CONTACT"})})]})}),Object(a.jsx)("div",{className:S.a.BackDrop,onClick:e.toggleClicked})]}):null;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("header",{className:S.a.Toolbar,children:Object(a.jsx)(C,{clicked:e.toggleClicked})}),t]})},N=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={sideDrawerOpen:!1},e.toggleClickedHandler=function(){e.setState({sideDrawerOpen:!e.state.sideDrawerOpen})},e.closeDrawer=function(){e.setState({sideDrawerOpen:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:O.a.Layout,children:[Object(a.jsx)(w,{drawerOpen:this.state.sideDrawerOpen,toggleClicked:this.toggleClickedHandler,closeDrawer:this.closeDrawer}),this.props.children]})}}]),n}(s.Component),k=n(27),T=n.n(k),I=n(16),A=n.n(I),E=n.p+"static/media/Topo1.1ea0423e.png",D=n.p+"static/media/Topo2.e3631bf7.png",L=n.p+"static/media/Topo3.4d4daf91.png",P=n(28),B=n.n(P),R=function(e){return Object(a.jsxs)("div",{className:[B.a.ToolBar,B.a.ToolBarTop].join(" "),children:[Object(a.jsx)(l.b,{to:"/",children:"HOME"}),Object(a.jsx)(l.b,{to:"/projects",children:"PROJECT SAMPLES"}),Object(a.jsx)(l.b,{to:"/about",children:"ABOUT ME"}),Object(a.jsx)(l.b,{to:"/contact",children:"CONTACT"})]})},M=n(44),H=n.n(M),U=function(e){return Object(a.jsxs)("div",{className:H.a.Footer,children:[Object(a.jsx)(l.b,{to:"/projects",children:"PROJECT SAMPLES"}),Object(a.jsx)("a",{href:"https://api.dallinjlarsen.com/Resume",children:"RESUME"}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/dallinjlarsen/",children:"LINKEDIN"}),Object(a.jsx)(l.b,{to:"/contact",children:"CONTACT"})]})},F=function(e){return Object(a.jsxs)("div",{className:A.a.Container,children:[e.homeEl,Object(a.jsx)(R,{type:e.type}),Object(a.jsxs)("div",{className:"home"==e.type?A.a.Home:A.a.Content,children:[Object(a.jsx)("div",{className:A.a.ContentRel,children:e.children}),Object(a.jsx)(U,{})]}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:[A.a.Topo1,A.a.Topo].join(" "),src:E,alt:"topo1"})}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:[A.a.Topo2,A.a.Topo].join(" "),src:D,alt:"topo2"})}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:[A.a.Topo3,A.a.Topo].join(" "),src:L,alt:"topo3"})})]})},J=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=Object(a.jsxs)("div",{className:T.a.Title,children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"DALLIN LARSEN"})}),Object(a.jsxs)("div",{className:T.a.SubTitle,children:[Object(a.jsxs)("h2",{children:["SOFTWARE ENGINEER ",Object(a.jsx)("span",{children:"\xb7"})," DATA SCIENCE ENTHUSIAST ",Object(a.jsx)("span",{children:"\xb7"})," FULL STACK DEVELOPER"]}),Object(a.jsx)("p",{children:"SOFTWARE ENGINEER"}),Object(a.jsx)("p",{children:"DATA SCIENCE ENTHUSIAST"}),Object(a.jsx)("p",{children:"FULL STACK DEVELOPER"})]})]});return Object(a.jsx)(F,{type:"home",homeEl:e})}}]),n}(s.Component),G=n(2),W=n.n(G),V=n.p+"static/media/profile_pic.ca27cc5e.jpg",K=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(F,{type:"top",children:[Object(a.jsxs)("div",{className:W.a.Header,children:[Object(a.jsx)("h1",{children:"ABOUT ME"}),Object(a.jsx)("img",{className:W.a.Pic,src:V,alt:"profile_pic"})]}),Object(a.jsxs)("div",{className:W.a.Main,children:[Object(a.jsxs)("div",{className:W.a.Item,children:[Object(a.jsx)("h2",{children:"Bio"}),Object(a.jsx)("div",{className:W.a.Body,children:Object(a.jsx)("p",{children:"I am an up and coming software engineer with a passion for building high quality software. I have a drive to learn and expand my knowledge while offering my skills developed through hours of hard work on professional and personal projects. Through university course work, professional expirence, and other projects I have learned the principles of writing clean, robust, and easily maintainable code. My personal interests include running, playing the piano, and spending time with my wife. I truly consider software development a hobby and along with finance and business."})})]}),Object(a.jsxs)("div",{className:W.a.Item,children:[Object(a.jsx)("h2",{children:"Education"}),Object(a.jsxs)("div",{className:W.a.Body,children:[Object(a.jsxs)("div",{className:W.a.SubHeader,children:[Object(a.jsx)("h3",{children:"Utah State University"}),Object(a.jsx)("h3",{style:{color:"#ffc7a1"},children:"Graduating August 2021"})]}),Object(a.jsx)("p",{children:"B.S., Computer Science, 3.95 GPA"}),Object(a.jsxs)("div",{className:W.a.Info,children:[Object(a.jsx)("li",{children:"Learned principles of Data Structures and Algorithms and their applications."}),Object(a.jsx)("li",{children:"Gained skills in teamwork, problem solving, full stack web development, mobile application development, operating system design, databases, cloud computing, data science, artificial intelligence, and other topics."}),Object(a.jsx)("li",{children:"Completed a minor in business where skills in marketing, accounting, MIS, finance, and management were developed."})]})]})]}),Object(a.jsxs)("div",{className:W.a.Item,children:[Object(a.jsx)("h2",{children:"Expirence"}),Object(a.jsxs)("div",{className:W.a.Body,children:[Object(a.jsxs)("div",{className:W.a.SubHeader,children:[Object(a.jsx)("h3",{children:"Space Dynamics Laboratory"}),Object(a.jsx)("h3",{style:{color:"#ffc7a1"},children:"Logan, UT"})]}),Object(a.jsxs)("div",{className:W.a.SubHeader,children:[Object(a.jsx)("p",{children:"Assistant Software Developer"}),Object(a.jsx)("p",{style:{color:"#ffc7a1"},children:"August 2020 - Present"})]}),Object(a.jsxs)("div",{className:W.a.Info,children:[Object(a.jsx)("li",{children:"Design, develop, evaluate, and maintain automated tests with Selenium, C#, and C++."}),Object(a.jsx)("li",{children:"Work on a team of developers and participate in agile software development."}),Object(a.jsx)("li",{children:"Perform code reviews and give feedback on proposed changes to code and design."}),Object(a.jsx)("li",{children:"Communicate bugs and issues through video calling, messaging, and in person discussion."}),Object(a.jsx)("li",{children:"Present solutions to software challenges with visuals and technical documents."})]}),Object(a.jsxs)("div",{className:W.a.SubHeader,style:{marginTop:50},children:[Object(a.jsx)("p",{children:"Assistant Software Tester"}),Object(a.jsx)("p",{style:{color:"#ffc7a1"},children:"November 2019 - August 2020"})]}),Object(a.jsxs)("div",{className:W.a.Info,children:[Object(a.jsx)("li",{children:"Perform regression testing by interacting with the software, following technical procedures, and tests."}),Object(a.jsx)("li",{children:"Interact with MySQL databases using MySQL workbench and the CLI client on Linux."}),Object(a.jsx)("li",{children:"Test new features and report results to developers and mangers."}),Object(a.jsx)("li",{children:"Report bugs found by documenting the issue and contacting appropriate parties."}),Object(a.jsx)("li",{children:"Use network design to interact with software over distributed systems and networks."}),Object(a.jsx)("li",{children:"Install and test software using the Unix CLI on RedHat and CentOS Linux systems."})]})]})]}),Object(a.jsxs)("div",{className:W.a.Item,children:[Object(a.jsx)("h2",{children:"Skills"}),Object(a.jsxs)("div",{className:W.a.Skills,children:[Object(a.jsx)("h3",{children:"Java"}),Object(a.jsx)("h3",{children:"Python"}),Object(a.jsx)("h3",{children:"C#"}),Object(a.jsx)("h3",{children:"C++"}),Object(a.jsx)("h3",{children:"JavaScript"}),Object(a.jsx)("h3",{children:"React.js"}),Object(a.jsx)("h3",{children:"Unix"}),Object(a.jsx)("h3",{children:"AWS"}),Object(a.jsx)("h3",{children:"Data Science"}),Object(a.jsx)("h3",{children:"Relational Databases"}),Object(a.jsx)("h3",{children:"Google Firebase"}),Object(a.jsx)("h3",{children:"Android Dev"}),Object(a.jsx)("h3",{children:"Selenium"}),Object(a.jsx)("h3",{children:"Git"}),Object(a.jsx)("h3",{children:"Confluence"}),Object(a.jsx)("h3",{children:"Jira"}),Object(a.jsx)("h3",{children:"Nginx"}),Object(a.jsx)("h3",{children:"Django"}),Object(a.jsx)("h3",{children:"MVC"}),Object(a.jsx)("h3",{children:"MVVM"}),Object(a.jsx)("h3",{children:"Docker"}),Object(a.jsx)("h3",{children:"Adobe XD"})]})]}),Object(a.jsxs)("div",{className:W.a.Item,style:{marginBottom:0},children:[Object(a.jsx)("h2",{children:"Awards/Honors"}),Object(a.jsxs)("div",{className:W.a.Body,children:[Object(a.jsxs)("div",{className:W.a.SubHeader,children:[Object(a.jsx)("h3",{children:"King Scholarship Recipiant"}),Object(a.jsx)("h3",{style:{color:"#ffc7a1"},children:"September 2020"})]}),Object(a.jsx)("div",{className:W.a.Info,children:Object(a.jsx)("li",{children:"Awarded by the Space Dynamics Laboratory, given to students with exceptional work performance and leadership."})}),Object(a.jsxs)("div",{className:W.a.SubHeader,children:[Object(a.jsx)("h3",{children:"National AP Scholar Award"}),Object(a.jsx)("h3",{style:{color:"#ffc7a1"},children:"May 2016"})]}),Object(a.jsx)("div",{className:W.a.Info,children:Object(a.jsx)("li",{children:"Awarded to high school students that have achieved a score of 4 or above on eight or more AP Exams."})})]})]})]})]})})}}]),n}(s.Component),Q=n(29),X=n(20),Y=n.n(X),Z=n(45),z=n.n(Z).a.create({baseURL:"https://api.dallinjlarsen.com/"}),q=n(18),$=n(10),ee=n.n($),te=function(e){var t=null;switch(e.elementType){case"input":t=Object(a.jsx)("input",Object(q.a)(Object(q.a)({className:e.red?[ee.a.InputElement,ee.a.Red].join(" "):ee.a.InputElement},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(a.jsx)("textarea",Object(q.a)(Object(q.a)({className:e.red?[ee.a.InputElement,ee.a.Red].join(" "):ee.a.InputElement},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(a.jsx)("select",{className:e.red?[ee.a.InputElement,ee.a.Red].join(" "):ee.a.InputElement,value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))});break;default:t=Object(a.jsx)("input",Object(q.a)(Object(q.a)({className:ee.a.InputElement},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(a.jsxs)("div",{className:ee.a.Input,children:[Object(a.jsx)("label",{className:ee.a.Label,children:Object(a.jsx)("strong",{children:e.label})}),t]})},ne=function(e){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("form",{children:e.formElements.map((function(t,n){return Object(a.jsx)(te,{red:t.red,elementConfig:t.elementConfig,value:t.value,elementType:t.elementType,changed:function(t){return e.changed(t,n)}})}))}),Object(a.jsx)("div",{className:e.buttonClass,children:Object(a.jsx)("button",{onClick:e.buttonClickedHandler,children:"SEND"})})]})},ae=n(46),se=n.n(ae),ce=function(){return Object(a.jsx)("div",{className:se.a.Loader,children:"Loading..."})},ie=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={spinner:!1,message_sent:!1,formConfigs:[{elementType:"input",elementConfig:{type:"text",placeholder:"YOUR NAME"},value:"",red:!1},{elementType:"input",elementConfig:{type:"email",placeholder:"YOUR EMAIL"},value:"",red:!1},{elementType:"input",elementConfig:{type:"text",placeholder:"SUBJECT"},value:"",red:!1},{elementType:"textarea",elementConfig:{type:"text",placeholder:"MESSAGE"},value:"",red:!1}]},e.formElementChangedHandler=function(t,n){var a=Object(Q.a)(e.state.formConfigs);a[n].value=t.target.value,a[n].red=!1,e.setState({formConfigs:a})},e.scanAndHighlight=function(){e.state.formConfigs.forEach((function(t,n){if(""===t.value){var a=Object(Q.a)(e.state.formConfigs);a[n].red=!0,e.setState({formConfigs:a})}}))},e.sendButtonClickedHandler=function(){""===e.state.formConfigs[0].value|""===e.state.formConfigs[1].value|""===e.state.formConfigs[2].value|""===e.state.formConfigs[3].value?e.scanAndHighlight():(e.setState({spinner:!0}),z.get("/SendEmail?name="+e.state.formConfigs[0].value+"&email="+e.state.formConfigs[1].value+"&subject="+e.state.formConfigs[2].value+"&message="+e.state.formConfigs[3].value).then((function(t){"success"===t.data.status?e.setState({spinner:!1,message_sent:!0}):(alert("There was an error. Please try again later."),e.setState({spinner:!1}))})))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("p",{children:"If you're interested in talking to me about my work and would like to connect please send me a message!"}),Object(a.jsx)("div",{className:Y.a.Form,children:Object(a.jsx)("div",{className:Y.a.FormContents,children:Object(a.jsx)(ne,{buttonClickedHandler:this.sendButtonClickedHandler,formElements:this.state.formConfigs,changed:this.formElementChangedHandler,buttonClass:Y.a.Button})})})]});return this.state.spinner&&(e=Object(a.jsx)(ce,{})),this.state.message_sent&&(e=Object(a.jsx)("div",{style:{height:"150px"},children:Object(a.jsx)("h2",{children:"Sent Successfully!"})})),Object(a.jsx)("div",{children:Object(a.jsxs)(F,{type:"top",children:[Object(a.jsx)("h1",{children:"CONTACT"}),e,Object(a.jsx)("div",{className:Y.a.ContactInfo,children:Object(a.jsxs)("div",{className:Y.a.ContactInfoContents,children:[Object(a.jsx)("h2",{children:Object(a.jsx)("a",{href:"tel: 801-828-6960",children:"(801) 828-6960"})}),Object(a.jsx)("h2",{children:Object(a.jsx)("a",{href:"mailto: dallinlarsen.professional@gmail.com",children:"DALLINLARSEN.PROFESSIONAL@GMAIL.COM"})}),Object(a.jsx)("h2",{children:Object(a.jsx)("a",{href:"https://www.linkedin.com/in/dallinjlarsen/",children:"LINKEDIN"})})]})})]})})}}]),n}(s.Component),re=n(6),le=n.n(re),oe=n.p+"static/media/Analysis.1b5965b4.PNG",de=n.p+"static/media/Budgets.efd68441.PNG",je=n.p+"static/media/Category.2f48f7c6.PNG",he=n.p+"static/media/Database.67bdc6db.PNG",be=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={selected:""},a.scrollToElement=function(){a.myRef.current&&a.myRef.current.scrollIntoView()},a.updateSelected=function(e){a.state.selected!==e?a.setState({selected:e}):a.setState({selected:""})},a.myRef=c.a.createRef(),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(){this.scrollToElement()}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{children:Object(a.jsxs)(F,{type:"top",children:[Object(a.jsx)("h1",{ref:""===this.state.selected?this.myRef:null,children:"PROJECTS"}),Object(a.jsxs)("div",{className:le.a.Main,children:[Object(a.jsxs)("div",{ref:"Current"===this.state.selected?this.myRef:null,className:le.a.Item,children:[Object(a.jsx)("h2",{onClick:function(){return e.updateSelected("Current")},children:"This Website"}),Object(a.jsx)("div",{className:"Current"===this.state.selected?null:le.a.Hide,children:Object(a.jsxs)("div",{style:{marginLeft:"30px"},children:[Object(a.jsx)("li",{children:"Developed using ReactJS on the frontend and Django on the backend."}),Object(a.jsx)("li",{children:"This is being hosted on a Ubuntu Linux AWS EC2 instance."}),Object(a.jsx)("li",{children:"The server is being ran using Nginx."}),Object(a.jsx)("li",{children:"It supports both desktop and mobile viewing."}),Object(a.jsx)("li",{children:"Is using the HTTPS protocol to ensure secure browsing."})]})})]}),Object(a.jsxs)("div",{ref:"Budget"===this.state.selected?this.myRef:null,className:le.a.Item,children:[Object(a.jsx)("h2",{onClick:function(){return e.updateSelected("Budget")},children:"Budget Management Application"}),Object(a.jsxs)("div",{className:"Budget"===this.state.selected?null:le.a.Hide,children:[Object(a.jsxs)("div",{style:{marginLeft:"30px"},children:[Object(a.jsx)("li",{children:"Developed a website using ReactJS on the frontend and Django on the backend that manages budgets."}),Object(a.jsx)("li",{children:"Uses the MVC design that allows an API I developed to interact with an SQLite database on the backend."}),Object(a.jsx)("li",{children:"Integrates with the Plaid API, a service that automates information transfer from bank accounts."}),Object(a.jsx)("li",{children:"Supports both desktop and mobile viewing. This website also supports desktop and mobile viewing."}),Object(a.jsx)("li",{children:"Is hosted on a Rasberry Pi in my apartment using Nginx and Uwsgi to deploy the Django backend."})]}),Object(a.jsx)("h3",{children:"Screen Shots"}),Object(a.jsxs)("div",{className:le.a.PicBox,children:[Object(a.jsx)("img",{className:le.a.PicSmall,src:de,alt:"analysis"}),Object(a.jsx)("img",{className:le.a.PicSmall,src:he,alt:"analysis"}),Object(a.jsx)("img",{className:le.a.PicBig,src:oe,alt:"analysis"}),Object(a.jsx)("img",{className:le.a.PicBig,src:je,alt:"analysis"})]})]})]}),Object(a.jsxs)("div",{ref:"Stocks"===this.state.selected?this.myRef:null,className:le.a.Item,children:[Object(a.jsx)("h2",{onClick:function(){return e.updateSelected("Stocks")},children:"Stock Trading Algorithm"}),Object(a.jsx)("div",{className:"Stocks"===this.state.selected?null:le.a.Hide,children:Object(a.jsxs)("div",{style:{marginLeft:"30px"},children:[Object(a.jsx)("li",{children:"Built a stock trading framework that streams stock data and executes stock trading strategies."}),Object(a.jsx)("li",{children:"Features a highly adaptable framework to manage multiple strategies and time periods."}),Object(a.jsx)("li",{children:"Runs each trading day off a Rasberry Pi in my apartment. It uses chrontab to intiate the program and shuts down if it finds it is not a trading day."}),Object(a.jsx)("li",{children:"Written using Python and Pandas, integrated into the Polygon and Alpaca APIs."}),Object(a.jsx)("li",{children:"Features a strategy derived from training linear regression models using Sci-Kit Learn."}),Object(a.jsx)("li",{children:"As part of the data stream from polygon, it uses a proxy server deployed using a Docker Container."}),Object(a.jsx)("li",{children:"Uses databases to extract data for backtesting that were set up by converting json data responses to pandas dataframes which were then stored into SQLite3 databases for easy access."}),Object(a.jsx)("li",{children:"The data is extracted into pandas dataframes using SQL read commands."})]})})]}),Object(a.jsxs)("div",{ref:"Browser"===this.state.selected?this.myRef:null,className:le.a.Item,children:[Object(a.jsx)("h2",{onClick:function(){return e.updateSelected("Browser")},children:"Web Browser"}),Object(a.jsx)("div",{className:"Browser"===this.state.selected?null:le.a.Hide,children:Object(a.jsxs)("div",{style:{marginLeft:"30px"},children:[Object(a.jsx)("li",{children:"Built a simple web browser using a Java UI framwork called JavaFX."}),Object(a.jsx)("li",{children:"It used the WebView library to display the webpage."}),Object(a.jsx)("li",{children:"Many features of modern browsers were implemented such as history and favorites."})]})})]})]})]})})}}]),n}(s.Component),pe=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:u.a.App,children:Object(a.jsx)(N,{children:Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{path:"/about",component:K}),Object(a.jsx)(b.a,{path:"/contact",component:ie}),Object(a.jsx)(b.a,{path:"/projects",component:be}),Object(a.jsx)(b.a,{path:"/",component:J})]})})})}}]),n}(s.Component),ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(pe,{})})}),document.getElementById("root")),ue()}},[[76,1,2]]]);
//# sourceMappingURL=main.2278427e.chunk.js.map