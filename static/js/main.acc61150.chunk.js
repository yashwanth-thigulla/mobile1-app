(this["webpackJsonpmobile1-app"]=this["webpackJsonpmobile1-app"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),a=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))}),o=(n(13),n(2)),i=n(3),h=n(5),l=n(4),b=n(0),u=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200*200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots,n=t.map((function(e,n){return Object(b.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(b.jsx)("div",{children:n})},j=function(e){e.Searchfield;var t=e.searchchange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--geen bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},p=function(e){return Object(b.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"600px",background:"blue"},children:e.children})},f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.haserror?Object(b.jsx)("h1",{children:"oops. that is not good"}):this.props.children}}]),n}(r.Component),O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onsearchchange=function(t){e.setState({Searchfield:t.target.value})},e.state={robots:[],Searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.Searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(b.jsx)("h1",{children:"Loading..."}):Object(b.jsxs)("div",{className:"tc",style:{background:"yellow"},children:[Object(b.jsx)("h1",{children:"ROBOFRIENDS "}),Object(b.jsx)(j,{searchchange:this.onsearchchange}),Object(b.jsx)(p,{children:Object(b.jsx)(f,{children:Object(b.jsx)(d,{robots:t})})})]})}}]),n}(r.Component);s.a.render(Object(b.jsx)(O,{}),document.getElementById("root")),a()}},[[15,1,2]]]);
//# sourceMappingURL=main.acc61150.chunk.js.map