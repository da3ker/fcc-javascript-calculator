(this["webpackJsonpfcc-javascript-calculator-project"]=this["webpackJsonpfcc-javascript-calculator-project"]||[]).push([[0],[,,,,function(_,e,t){"use strict";e.a=["#FFFF00","#FFFF33","#F2EA02","#E6FB04","#FF0000","#FD1C03","#FF3300","#FF6600","#00FF00","#00FF33","#00FF66","#33FF00","#00FFFF","#099FFF","#0062FF","#0033FF","#FF00FF","#FF00CC","#FF0099","#CC00FF","#9D00FF","#CC00FF","#6E0DD0","#9900FF"]},,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Da3ker_OneDrive_Desktop_VS_Front_End_Projects_fcc_javascript_calculator_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_App_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_App_scss__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_colors_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(C_Users_Da3ker_OneDrive_Desktop_VS_Front_End_Projects_fcc_javascript_calculator_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),expression=_useState2[0],setExpression=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),_useState4=Object(C_Users_Da3ker_OneDrive_Desktop_VS_Front_End_Projects_fcc_javascript_calculator_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),answer=_useState4[0],setAnswer=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)("#FFF"),_useState6=Object(C_Users_Da3ker_OneDrive_Desktop_VS_Front_End_Projects_fcc_javascript_calculator_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),colors=_useState6[0],setColors=_useState6[1],display=function(_){setExpression((function(e){if(/[+*-/]/.test(_)&&/[+*-/]/.test(e[e.length-1])){var t;if(/[-]/.test(_))t=e.slice(0,e.length)+_;else if(/[+/*]/.test(_)){for(var r=0,s=0;s<e.length;s++)/[+/*-]/.test(e[s])?r++:r=0;t=e.slice(0,e.length-r)+_}else/[.]/.test(_)&&(t=e+_);setExpression(t.replace(/([*|/|+|-])[.]+/g,"$10.").replace(/([0-9])([.]+)/g,"$1.").replace(/(-)([-]+)/g,"$1-").replace(/^[/*+]/g,"").replace(/(-)(-)(0)(.)/g,"$1 $2$3$4")),console.log(expression+"option1")}else{if(e){var c=(e+="").split(/[+/*-]/g),o=c[c.length-1];!isNaN(o)&&/[.]/.test(o)&&"."===_&&(_="")}setExpression((e+_).replace(/^0/g,"").replace(/\.+/g,".").replace(/([*|/|+|-])([-]+)/g,"$1 -").replace(/^\./,"0.").replace(/^[/*+]/g,"").replace(/([*|/|+|-])([0]+)/g,"$10").replace(/([*|/|+|-])([0]+)([1-9]+)/g,"$1$3")),console.log(expression+"option2")}}))},calculate=function calculate(){if(/[^(--)]/.test(expression)){setExpression((function(prev){var newRes;if(/[+*-/]$/.test(prev)){for(var count=0,i=0;i<prev.length;i++)isNaN(prev[i])?count++:count=0;newRes=prev.slice(0,prev.length-count),setExpression(eval(newRes)),setAnswer(eval(newRes))}else setExpression(eval(expression)),setAnswer(eval(expression))}));var randomNumber=Math.floor(Math.random()*_colors_js__WEBPACK_IMPORTED_MODULE_3__.a.length);setColors(_colors_js__WEBPACK_IMPORTED_MODULE_3__.a[randomNumber])}},allClear=function(){setExpression(""),setAnswer(0),setColors("#FEFEFE")},clear=function(){setExpression((function(_){return setAnswer(0),(_+="").split("").slice(0,_.length-1).join("")}))};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"App",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"grid",style:{borderColor:colors},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{id:"display",className:"dis",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{className:"expression",type:"text",value:expression,placeholder:"0",disabled:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"total",children:answer})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"clear",onClick:allClear,className:"padButton",style:{borderColor:colors},children:"AC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"backspace",onClick:clear,className:"padButton",style:{borderColor:colors},children:"C"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"divide",onClick:function(){return display("/")},className:"padButton",style:{borderColor:colors},children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"multiply",onClick:function(){return display("*")},className:"padButton",style:{borderColor:colors},children:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"seven",onClick:function(){return display("7")},className:"padButton",style:{borderColor:colors},children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"eight",onClick:function(){return display("8")},className:"padButton",style:{borderColor:colors},children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"nine",onClick:function(){return display("9")},className:"padButton",style:{borderColor:colors},children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"subtract",onClick:function(){return display("-")},className:"padButton",style:{borderColor:colors},children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"four",onClick:function(){return display("4")},className:"padButton",style:{borderColor:colors},children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"five",onClick:function(){return display("5")},className:"padButton",style:{borderColor:colors},children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"six",onClick:function(){return display("6")},className:"padButton",style:{borderColor:colors},children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"add",onClick:function(){return display("+")},className:"padButton",style:{borderColor:colors},children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"one",onClick:function(){return display("1")},className:"padButton",style:{borderColor:colors},children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"two",onClick:function(){return display("2")},className:"padButton",style:{borderColor:colors},children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"three",onClick:function(){return display("3")},className:"padButton",style:{borderColor:colors},children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"equals",onClick:function(){calculate()},className:"padButton",style:{borderColor:colors},children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"zero",onClick:function(){return display("0")},className:"padButton",style:{borderColor:colors},children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"decimal",onClick:function(){return display(".")},className:"padButton",style:{borderColor:colors},children:"."})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{id:"da3ker",style:{color:colors},children:"by da3ker"})]})}__webpack_exports__.a=App},,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){"use strict";t.r(e);var r=t(1),s=t.n(r),c=t(5),o=t.n(c),a=(t(11),t(6)),n=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(e){var t=e.getCLS,r=e.getFID,s=e.getFCP,c=e.getLCP,o=e.getTTFB;t(_),r(_),s(_),c(_),o(_)}))},l=t(0);o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(a.a,{})}),document.getElementById("root")),n()}],[[14,1,2]]]);
//# sourceMappingURL=main.ab907b0d.chunk.js.map