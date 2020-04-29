(this["webpackJsonpreddit-clone"]=this["webpackJsonpreddit-clone"]||[]).push([[0],{36:function(e,t,a){e.exports=a(52)},41:function(e,t,a){},42:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(12),l=a.n(i),r=(a(41),a(42),a(59)),s=a(54),u=function(e){var t=e.body.slice(0,125)+"...";return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{padding:"2%"}},n.a.createElement(r.a,null,n.a.createElement(r.a.Title,null,n.a.createElement("h1",{style:{paddingLeft:"20px",paddingTop:"10px"}}," ",e.title," ")),n.a.createElement(r.a.Body,null,n.a.createElement("p",null,"Posted on ",new Date(e.postDate).toLocaleString()),n.a.createElement("p",null,t),n.a.createElement("p",null," Total Score: ",e.upvote-e.downvote," "),n.a.createElement("p",null,"Up Votes: ",e.upvote),n.a.createElement("p",null,"Down Votes: ",e.downvote),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},n.a.createElement(s.a,{variant:"outline-secondary",onClick:function(){return e.whenPostClicked(e.id)}},"Post Details"),n.a.createElement(s.a,{variant:"outline-success",onClick:function(){return e.whenUpvoteClicked(e.id)}},n.a.createElement("i",{class:"fas fa-thumbs-up"})," Up Vote "),n.a.createElement(s.a,{variant:"outline-danger",onClick:function(){return e.whenDownvoteClicked(e.id)}}," ",n.a.createElement("i",{class:"fas fa-thumbs-down"})," Down Vote "))))))},c=a(5),d=a.n(c),p=function(e){var t={marginBottom:"1%",padding:"2%"};return n.a.createElement(n.a.Fragment,null,Object.values(e.postList).sort((function(e,t){return t.upvote-t.downvote-(e.upvote-e.downvote)})).map((function(a){return n.a.createElement("div",{style:t},n.a.createElement(u,{title:a.title,postDate:a.postDate,body:a.body,upvote:a.upvote,downvote:a.downvote,whenDownvoteClicked:e.onClickingDownvote,whenUpvoteClicked:e.onClickingUpvote,whenPostClicked:e.onClickingPost,id:a.id}))})))};p.proTypes={postList:d.a.object,onClickingPost:d.a.func,onClickingDownvote:d.a.func,onClickingUpvote:d.a.func};var m=p,v=a(57),E=a(15),b=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{style:{marginTop:"5%"}}," Add New Post "),n.a.createElement(v.a,{onSubmit:function(t){t.preventDefault(),e.onNewPostCreation({title:t.target.title.value,body:t.target.body.value,upvote:0,downvote:0,postDate:Date.now(),id:Object(E.v4)()})}},n.a.createElement(v.a.Group,{controlId:"formBasicTitle"},n.a.createElement(v.a.Label,null,"Title"),n.a.createElement(v.a.Control,{type:"text",name:"title",placeholder:"title"}),n.a.createElement(v.a.Text,{className:"text-muted"},"What do you want to name your post.")),n.a.createElement(v.a.Group,{controlId:"formBasicBody"},n.a.createElement(v.a.Label,null,"Body"),n.a.createElement(v.a.Control,{as:"textarea",rows:"3",name:"body",placeholder:"Give us all the detail"})),n.a.createElement(s.a,{style:{margin:"auto auto",display:"block"},variant:"primary",type:"submit"},"Submit")))},w=function(e){var t=e.post,a=e.whenDownvoteClicked,o=e.whenUpvoteClicked;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{margin:"10px",padding:"2%"}},n.a.createElement(r.a,null,n.a.createElement(r.a.Title,null,n.a.createElement("h1",{style:{paddingLeft:"20px",paddingTop:"10px"}}," ",t.title," ")),n.a.createElement(r.a.Body,null,n.a.createElement("p",null,"Posted on ",new Date(t.postDate).toLocaleString()),n.a.createElement("p",null,t.body),n.a.createElement("p",null," Total Score: ",t.upvote-t.downvote," "),n.a.createElement("p",null,"Up Votes: ",t.upvote),n.a.createElement("p",null,"Down Votes: ",t.downvote),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},n.a.createElement(s.a,{variant:"outline-success",onClick:function(){o(t.id)}},n.a.createElement("i",{class:"fas fa-thumbs-up"})," Up Vote"),n.a.createElement(s.a,{variant:"outline-danger",onClick:function(){return a(t.id)}}," ",n.a.createElement("i",{class:"fas fa-thumbs-down"})," Down Vote"))))))},g=a(56),f=a(58),y=function(e){return n.a.createElement("div",{style:{}},n.a.createElement(g.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},n.a.createElement(g.a.Brand,{href:"#"},"Reddit-Clone"),n.a.createElement(g.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(g.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(f.a,{className:"mr-auto"},n.a.createElement(f.a.Link,{onClick:e.whenButtonClick},e.buttonText)))))},h=a(22),D=a(55);function C(e){var t,a,o=e.dispatch,i=function(t){if(o({type:"UPVOTE",id:t}),null!==e.selectedPost){var a=e.masterPostList[t],n={type:"CHANGE_SELECTED",id:t,title:a.title,body:a.body,upvote:a.upvote,downvote:a.downvote,postDate:a.postDate};o(n)}},l=function(t){if(o({type:"DOWNVOTE",id:t}),null!==e.selectedPost){var a=e.masterPostList[t],n={type:"CHANGE_SELECTED",id:t,title:a.title,body:a.body,upvote:a.upvote,downvote:a.downvote,postDate:a.postDate};o(n)}};return null!==e.selectedPost?(t=n.a.createElement(w,{post:e.selectedPost,whenUpvoteClicked:i,whenDownvoteClicked:l}),a="return to posts"):e.formVisible?(t=n.a.createElement(b,{onNewPostCreation:function(e){var t=e.id,a=e.title,n=e.body,i=e.upvote,l=e.downvote,r=e.postDate;o({type:"ADD_POST",id:t,title:a,body:n,upvote:i,downvote:l,postDate:r});o({type:"TOGGLE_FORM"})}}),a="return to posts"):(t=n.a.createElement(m,{postList:e.masterPostList,onClickingPost:function(t){var a=e.masterPostList[t],n={type:"CHANGE_SELECTED",title:a.title,body:a.body,upvote:a.upvote,downvote:a.downvote,postDate:a.postDate,id:a.id};o(n)},onClickingUpvote:i,onClickingDownvote:l}),a="Add Post"),n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{buttonText:a,whenButtonClick:function(){if(null!==e.selectedPost){o({type:"CHANGE_TO_NULL"})}else{o({type:"TOGGLE_FORM"})}}}),n.a.createElement(D.a,{style:{}},t))}var O=C=Object(h.b)((function(e){return{masterPostList:e.masterPostList,formVisible:e.formVisible,selectedPost:e.selectedPost}}))(C);a(51);var T=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P,k=a(14),L=a(16),_=a(8),j=Object(k.b)({masterPostList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.title,o=t.body,n=t.upvote,i=t.downvote,l=t.postDate,r=t.id;switch(t.type){case"ADD_POST":return Object.assign({},e,Object(_.a)({},r,{title:a,body:o,upvote:n,downvote:i,postDate:l,id:r}));case"DELETE_POST":var s=Object(L.a)({},e);return delete s[r],s;case"UPVOTE":var u=e[r].upvote+=1,c=Object(L.a)({},e,Object(_.a)({},r,Object(L.a)({},e[r],{upvote:u})));return c;case"DOWNVOTE":var d=e[r].downvote+=1,p=Object(L.a)({},e,Object(_.a)({},r,Object(L.a)({},e[r],{downvote:d})));return p;default:return e}},formVisible:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FORM":return!e;default:return e}},selectedPost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.title,o=t.body,n=t.upvote,i=t.downvote,l=t.postDate,r=t.id;switch(t.type){case"CHANGE_SELECTED":var s={title:a,body:o,upvote:n,downvote:i,postDate:l,id:r};return s;case"CHANGE_TO_NULL":var u=null;return u;default:return e}}}),N=Object(E.v4)(),S=Object(E.v4)(),V=Object(E.v4)(),x={masterPostList:(P={},Object(_.a)(P,N,{title:"Cats are cool",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",upvote:3,downvote:2,postDate:1588105367958,id:N}),Object(_.a)(P,S,{title:"My dog is cuter than your cat",body:"Astrodonius Xuanhanosaurus Giganotosaurus Tendaguria Pinacosaurus Kaatedocus Troodon Dracopelta Coeluroides Banji Pterospondylus Agujaceratops Basutodon Epichirostenotes Nanosaurus Tawa Piveteausaurus Telmatosaurus Austrocheirus Herrerasaurus Stygivenator Sonidosaurus Protiguanodon Tatankaceratops Hypacrosaurus Angolatitan Europasaurus Yandusaurus Cruxicheiros Turiasaurus",upvote:10,downvote:2,postDate:1588105396294,id:S}),Object(_.a)(P,V,{title:"Check out this bird video",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum. Facilisis gravida neque convallis a cras. Est ullamcorper eget nulla facilisi. Vitae nunc sed velit dignissim sodales. Netus et malesuada fames ac turpis egestas integer eget aliquet. Suscipit adipiscing bibendum est ultricies. Varius sit amet mattis vulputate. Sit amet consectetur adipiscing elit pellentesque habitant. Vehicula ipsum a arcu cursus. Sit amet mattis vulputate enim nulla. Nisi est sit amet facilisis magna etiam tempor orci eu. Morbi non arcu risus quis varius. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim.",upvote:1,downvote:2,postDate:1588105407252,id:V}),P),selectedPost:null,formVisible:!1},U=Object(k.c)(j,x,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(n.a.createElement(h.a,{store:U},n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.df5977b7.chunk.js.map