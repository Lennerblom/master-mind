(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(58)},40:function(e,t,a){},52:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(29),r=a.n(c),l=(a(40),a(6)),s=a(7),i=a(9),u=a(8),m=a(10),p=a(20),h=a(33),d=a(12),b=a(13),E=a(31),f=a(16),v=a(32),k=a.n(v),g=a(21),y=a.n(g),C="https://localhost:3000/signup/",N=[],O=function(){return function(e){fetch(C).then(function(e){return e.json()}).then(function(t){console.log("fetch data: ",t),e(function(e){return console.log("inside action creator",e),{type:"user/ASYNC_ADD",payload:e}}(t))})}},w=Object(b.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"user/ADD":return localStorage.setItem("state","state"),[].concat(Object(f.a)(e),[n]);case"user/FETCH":return[].concat(Object(f.a)(e),[n]);case"user/ASYNC_ADD":return[].concat(Object(f.a)(e),Object(f.a)(n));case"user/UPDATE":return Object(f.a)(e&&e.map(function(e){return e.id===n.id?n:e}));case"user/DELETE":return e.filter(function(e){return e.id!==n.id});default:return e}}}),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,S=a(14),A=["red","orange","yellow","green","blue","black","ivory","sienna"],D=[],x=[],P=[],T={background:"transparent"},_={background:"transparent"},V={background:"transparent"},M={background:"transparent"},U={background:"transparent"},H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).gameStart=function(){x.length>0&&(a.setState({hiddenView:!1}),x=[],P=[]),a.setState({gameOn:!0}),a.generateRandom()},a.generateRandom=function(){for(var e=[],t=0;t<5;){var n=Math.floor(Math.random()*A.length);e.push(A[n]),t++}console.log(e),a.setState({solution:e})},a.submitAttempt=function(){var e=[],t=[];if("transparent"!==a.state.option1.value&&"transparent"!==a.state.option2.value&&"transparent"!==a.state.option3.value&&"transparent"!==a.state.option4.value&&"transparent"!==a.state.option5.value)if((D=[]).push(a.state.option1.value),D.push(a.state.option2.value),D.push(a.state.option3.value),D.push(a.state.option4.value),D.push(a.state.option5.value),console.log("attemptArr",D),x.unshift(D),a.state.solution[0]===D[0]&&a.state.solution[1]===D[1]&&a.state.solution[2]===D[2]&&a.state.solution[3]===D[3]&&a.state.solution[4]===D[4])a.setState({hiddenView:!0}),console.log("you win");else{for(var n=[],o="",c="",r=0;r<5;r++)e.push(a.state.solution[r]),t.push(D[r]);for(var l=0;l<5;l++)e[l]===t[l]&&(e[l]="used-blk",t[l]="checked",o="black",n.push(o));for(var s=0;s<5;s++)if(e.includes(t[s]))for(var i=0;i<5;i++)if(e[i]===t[s]){e[i]="found-white",t[s]="checked",c="ivory",n.push(c);break}0===n.length&&n.push("orangered"),P.unshift(n)}a.resetColor()},a.onChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value,n=Object(S.a)({},e.target.name,t);a.setState(n)},a.isChecked=function(e){for(var t=["pos1","pos2","pos3","pos4","pos5"],n=e.target.className,o=0;o<t.length;o++){var c=t[o];c===n&&("pos1"===(n=c)&&!1===a.state.option1.checked&&a.setState({option1:{checked:!0}}),"pos2"===n&&!1===a.state.option2.checked&&a.setState({option2:{checked:!0}}),"pos3"===n&&!1===a.state.option3.checked&&a.setState({option3:{checked:!0}}),"pos4"===n&&!1===a.state.option4.checked&&a.setState({option4:{checked:!0}}),"pos5"===n&&!1===a.state.option5.checked&&a.setState({option5:{checked:!0}}))}},a.selectColor=function(e){var t=e.target.id;!0===a.state.option1.checked&&(a.setState({option1:{value:t,checked:!1}}),T={background:t}),!0===a.state.option2.checked&&(a.setState({option2:{value:t,checked:!1}}),_={background:t}),!0===a.state.option3.checked&&(a.setState({option3:{value:t,checked:!1}}),V={background:t}),!0===a.state.option4.checked&&(a.setState({option4:{value:t,checked:!1}}),M={background:t}),!0===a.state.option5.checked&&(a.setState({option5:{value:t,checked:!1}}),U={background:t})},a.resetColor=function(){a.setState({option1:{value:"transparent",checked:!1}}),T={background:"transparent"},a.setState({option2:{value:"transparent",checked:!1}}),_={background:"transparent"},a.setState({option3:{value:"transparent",checked:!1}}),V={background:"transparent"},a.setState({option4:{value:"transparent",checked:!1}}),M={background:"transparent"},a.setState({option5:{value:"transparent",checked:!1}}),U={background:"transparent"}},a.state={hiddenView:!1,solution:[],option1:{value:"transparent",checked:!1},option2:{value:"transparent",checked:!1},option3:{value:"transparent",checked:!1},option4:{value:"transparent",checked:!1},option5:{value:"transparent",checked:!1},gameOn:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"main-container"},o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",{className:"nav-li"},o.a.createElement("a",{href:"https://lennerblom.github.io/master-mind/"},"home")),o.a.createElement("li",{className:"nav-li"},o.a.createElement("a",{href:"https://lennerblom.github.io/master-mind/instructions"},"How To Play")))),o.a.createElement("h2",null,"Master Mind"),o.a.createElement("button",{className:"new-game-button",onClick:this.gameStart},"new game"),o.a.createElement("button",{className:"submit-button",onClick:this.submitAttempt},"submit"),o.a.createElement("div",{className:"game-board-container"},this.state.hiddenView&&o.a.createElement("div",{className:"hidden-solution"},this.state.solution.map(function(e){return o.a.createElement("div",{style:{background:e},className:"colorPosition"})}),o.a.createElement("h2",null,"You won!")),o.a.createElement("div",{className:"attempt-container"},o.a.createElement("ol",{reversed:!0,className:"attempt-row"},x.map(function(e){return o.a.createElement("li",null,e.map(function(e){return o.a.createElement("div",{className:"colorPosition",style:{background:e}})}))}))),o.a.createElement("div",{className:"attempt-container"},o.a.createElement("ul",{className:"attempt-row"},P.map(function(e){return o.a.createElement("li",null,e.map(function(e){return o.a.createElement("div",{className:"score",style:{background:e}})}))}))),o.a.createElement("div",{className:"guess-container"},this.state.gameOn&&o.a.createElement("form",{onChange:this.isChecked},o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",className:"pos1"}),o.a.createElement("div",{className:"colorPicker",id:"pos1",style:T})),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",className:"pos2"}),o.a.createElement("div",{className:"colorPicker",id:"pos2",style:_})),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",className:"pos3"}),o.a.createElement("div",{className:"colorPicker",id:"pos3",style:V})),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",className:"pos4"}),o.a.createElement("div",{className:"colorPicker",id:"pos4",style:M})),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",className:"pos5"}),o.a.createElement("div",{className:"colorPicker",id:"pos5",style:U})))),o.a.createElement("div",null,o.a.createElement("button",{className:"colorChoices",onClick:this.selectColor,id:"red"}),o.a.createElement("button",{className:"colorChoices",onClick:this.selectColor,id:"orange"}),o.a.createElement("button",{className:"colorChoices",onClick:this.selectColor,id:"yellow"}),o.a.createElement("button",{className:"colorChoices",onClick:this.selectColor,id:"green"})),o.a.createElement("div",null,o.a.createElement("button",{className:"colorChoices",onClick:this.selectColor,id:"blue"}),o.a.createElement("button",{className:"colorChoices",onClick:this.selectColor,id:"black"}),o.a.createElement("button",{className:"colorChoices",onClick:this.selectColor,id:"ivory"}),o.a.createElement("button",{className:"colorChoices",onClick:this.selectColor,id:"sienna"})))))}}]),t}(n.Component),q=a(24),R=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),a.props.onComplete(a.state),a.setState(Object(q.a)({},a.defaultState))},a.onChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value,n=Object(S.a)({},e.target.name,t);a.setState(n)},a.defaultState={username:"",password:""};var n=a.props.user||a.defaultState;return a.state=Object(q.a)({},n),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",{className:"nav-li"},o.a.createElement("a",{href:"/mastermind/"},"home")),o.a.createElement("li",{className:"nav-li"},o.a.createElement("a",{href:"/#/instructions"},"How To Play")))),o.a.createElement("fieldset",{className:"login-form"},o.a.createElement("form",{onSubmit:this.onSubmit,onChange:this.onChange},o.a.createElement("label",null,"Username:",o.a.createElement("input",{type:"text",name:"username",value:this.state.username})),o.a.createElement("label",null,"Password:",o.a.createElement("input",{name:"password",type:"password",value:this.state.password})),o.a.createElement("label",null,o.a.createElement("input",{type:"submit",value:"Create User"})))))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).updateView=function(){a.setState({loginView:!1})},a.state={loginView:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.loginView&&o.a.createElement(R,{onComplete:this.props.userAdd,viewChange:this.updateView}),o.a.createElement(H,null))}}]),t}(n.Component),I=Object(p.b)(function(e){return{user:e.user}},function(e){return{userAdd:function(t){return e(function(e){return console.log("addReducer",e),e.id=k()(),function(t){y.a.post(C,e).then(function(e){t({type:"user/ADD",payload:e.body})})}}(t))},userUpdate:function(t){return e(function(e){return function(t){y.a.put("".concat(C,"/").concat(e._id)).send(e).then(function(){t({type:"user/UPDATE",payload:e})})}}(t))},userFetch:function(t){return e(O())},userDelete:function(t){return e(function(e){return function(t){y.a.delete("".concat(C,"/").concat(e._id)).then(function(e){return e.text}).then(function(){t({type:"user/DELETE",payload:e})})}}(t))}}})(Y),L=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"instructions-container"},o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",{className:"nav-li"},o.a.createElement("a",{href:"https://lennerblom.github.io/master-mind/"},"home")),o.a.createElement("li",{className:"nav-li"},o.a.createElement("a",{href:"https://lennerblom.github.io/master-mind/instructions"},"How To Play")))),o.a.createElement("h2",null,"How to play Master Mind"),o.a.createElement("div",{className:"instructions-paragraph"},o.a.createElement("p",null,"Master Mind is a classic logic game where you try to replicate the hidden color sequence based off of clues provided from each attempt.  The game is won when you successfully place all five colors in the right order.  The hidden solution is randomly selected and may contain any combintion from the eight colors including doubles, triples etc."),o.a.createElement("p",null,"To begin, click the New Game button.  Click the empty circles and assign each a color from the eight colors at the bottom.  Once all five circles in the attempt area have a color assigned, hit the submit button."),o.a.createElement("p",null,"Each attempt is scored with black, white or red pegs.  Black pegs are scored first followed by white.  You earn a black peg for each correct color in the corect location in the sequence.  A white peg represents a color in the sequence, but not in the correct location.  A red peg indicated no colors in the attempt are present in the solution.  Through these clues, you can make logical deductions to solve the colored sequence.")))}}]),t}(n.Component),B=(a(52),Object(b.e)(w,j(Object(b.a)(E.a)))),F=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p.a,{store:B},o.a.createElement(h.a,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:I}),o.a.createElement(d.a,{exact:!0,path:"/game",component:H}),o.a.createElement(d.a,{exact:!0,path:"/instructions",component:L}),o.a.createElement(d.a,{exact:!0,path:"/login",component:R})))))}}]),t}(n.Component);r.a.render(o.a.createElement(F,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.734e773b.chunk.js.map