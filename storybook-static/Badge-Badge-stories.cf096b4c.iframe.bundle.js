/*! For license information please see Badge-Badge-stories.cf096b4c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[994],{"./src/components/Badge/Badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Example_parameters,_Example_parameters_docs,_Example_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Badge__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/components/Badge/Badge.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Badge",component:_Badge__WEBPACK_IMPORTED_MODULE_2__.E},Example=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{style:{margin:"10px 0 0 5px"},children:["inline"===args.shape&&"Some text inline...",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_2__.E,{...args})]})).bind({});Example.storyName="Badge",Example.args={children:"Coming soon",framed:!0,shape:"none"},Example.parameters={...Example.parameters,docs:{...null===(_Example_parameters=Example.parameters)||void 0===_Example_parameters?void 0:_Example_parameters.docs,source:{originalSource:'args => <p style={{\n  margin: "10px 0 0 5px"\n}}>\n    {args.shape === "inline" && "Some text inline..."}\n    <Badge {...args} />\n  </p>',...null===(_Example_parameters1=Example.parameters)||void 0===_Example_parameters1||null===(_Example_parameters_docs=_Example_parameters1.docs)||void 0===_Example_parameters_docs?void 0:_Example_parameters_docs.source}}};const __namedExportsOrder=["Example"]},"./src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Badge_Badge_Badge});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Badge=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Badge/Badge.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Badge.A,options);Badge.A&&Badge.A.locals&&Badge.A.locals;function Badge_Badge_Badge(param){let{children,className,framed=!0,shape,size,...rest}=param;return className=classnames_default()(className,"badge",!framed&&"badge-frameless","inline"===shape&&"badge-inline","reduced"===size&&"badge-reduced"),(0,jsx_runtime.jsx)("span",{className,...rest,children})}Badge_Badge_Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{framed:{required:!1,tsType:{name:"boolean"},description:"Sets the border of the badge",defaultValue:{value:"true",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"inline" | "none"',elements:[{name:"literal",value:'"inline"'},{name:"literal",value:'"none"'}]},description:"Sets the shape of the badge"},size:{required:!1,tsType:{name:"literal",value:'"reduced"'},description:"Changes the size of the badge"}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Badge/Badge.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'/* @import "ac-sasskit/core";\n@import "ac-sasskit/modules/badge"; */\n.badge {\n  box-sizing: border-box;\n  white-space: nowrap;\n  display: inline-block;\n  background: transparent;\n  border: 1px solid #bf4800;\n  color: #bf4800;\n  font-size: 17px;\n  line-height: 1.1764805882;\n  font-weight: 400;\n  letter-spacing: -0.022em;\n  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,\n    sans-serif;\n  border-radius: 18px;\n  padding: 7px 18px;\n}\n\n.badge-inline {\n  margin-left: 10px;\n  display: inline-block;\n}\n\n.badge-secondary {\n  background: transparent;\n  border-color: #6e6e73;\n  color: #6e6e73;\n}\n\n.badge-reduced {\n  font-size: 12px;\n  line-height: 1.3333733333;\n  font-weight: 400;\n  letter-spacing: -0.01em;\n  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,\n    sans-serif;\n  border-radius: 12px;\n  padding: 3px 11px;\n}\n\n.badge-reduced.badge-inline {\n  margin-left: 6px;\n  display: inline-block;\n}\n\n.badge-frameless {\n  box-sizing: border-box;\n  white-space: nowrap;\n  display: block;\n  color: #bf4800;\n  border: none;\n}\n\n.badge-frameless-inline {\n  margin-left: 10px;\n  display: inline-block;\n}\n\n.badge-frameless.badge-frameless-reduced {\n  font-size: 12px;\n  line-height: 1.3333733333;\n  font-weight: 400;\n  letter-spacing: -0.01em;\n  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,\n    sans-serif;\n  border-radius: 0;\n  padding: 0;\n  display: block;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(ar) {\n  letter-spacing: 0em;\n  font-family: SF Pro AR, SF Pro AR Text, SF Pro Text, SF Pro Gulf, SF Pro Icons,\n    Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(ja) {\n  letter-spacing: 0em;\n  font-family: SF Pro JP, SF Pro Text, SF Pro Icons, Hiragino Kaku Gothic Pro,\n    ãƒ’ãƒ©ã‚®ãƒŽè§’ã‚´ Pro W3, ãƒ¡ã‚¤ãƒªã‚ª, Meiryo, ï¼­ï¼³ ï¼°ã‚´ã‚·ãƒƒã‚¯,\n    Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(ko) {\n  letter-spacing: 0em;\n  font-family: SF Pro KR, SF Pro Text, SF Pro Icons, Apple Gothic, HY Gulim,\n    MalgunGothic, HY Dotum, Lexi Gulim, Helvetica Neue, Helvetica, Arial,\n    sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(zh) {\n  letter-spacing: 0em;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(th) {\n  font-family: SF Pro TH, SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,\n    Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(zh-CN) {\n  font-family: SF Pro SC, SF Pro Text, SF Pro Icons, PingFang SC, Helvetica Neue,\n    Helvetica, Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(zh-HK) {\n  font-family: SF Pro HK, SF Pro Text, SF Pro Icons, PingFang HK, Helvetica Neue,\n    Helvetica, Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(zh-MO) {\n  font-family: SF Pro HK, SF Pro TC, SF Pro Text, SF Pro Icons, PingFang HK,\n    Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(zh-TW) {\n  font-family: SF Pro TC, SF Pro Text, SF Pro Icons, PingFang TC, Helvetica Neue,\n    Helvetica, Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced.badge-frameless-inline {\n  margin-left: 6px;\n  display: inline-block;\n}\n',"",{version:3,sources:["webpack://./src/components/Badge/Badge.css"],names:[],mappings:"AAAA;qCACqC;AACrC;EACE,sBAAsB;EACtB,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,yBAAyB;EACzB,gBAAgB;EAChB,wBAAwB;EACxB;cACY;EACZ,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,gBAAgB;EAChB,uBAAuB;EACvB;cACY;EACZ,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;EACd,cAAc;EACd,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,gBAAgB;EAChB,uBAAuB;EACvB;cACY;EACZ,gBAAgB;EAChB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB;gDAC8C;AAChD;;AAEA;EACE,mBAAmB;EACnB;;gDAE8C;AAChD;;AAEA;EACE,mBAAmB;EACnB;;cAEY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE;qBACmB;AACrB;;AAEA;EACE;gCAC8B;AAChC;;AAEA;EACE;gCAC8B;AAChC;;AAEA;EACE;gDAC8C;AAChD;;AAEA;EACE;gCAC8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;AACvB",sourcesContent:['/* @import "ac-sasskit/core";\n@import "ac-sasskit/modules/badge"; */\n.badge {\n  box-sizing: border-box;\n  white-space: nowrap;\n  display: inline-block;\n  background: transparent;\n  border: 1px solid #bf4800;\n  color: #bf4800;\n  font-size: 17px;\n  line-height: 1.1764805882;\n  font-weight: 400;\n  letter-spacing: -0.022em;\n  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,\n    sans-serif;\n  border-radius: 18px;\n  padding: 7px 18px;\n}\n\n.badge-inline {\n  margin-left: 10px;\n  display: inline-block;\n}\n\n.badge-secondary {\n  background: transparent;\n  border-color: #6e6e73;\n  color: #6e6e73;\n}\n\n.badge-reduced {\n  font-size: 12px;\n  line-height: 1.3333733333;\n  font-weight: 400;\n  letter-spacing: -0.01em;\n  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,\n    sans-serif;\n  border-radius: 12px;\n  padding: 3px 11px;\n}\n\n.badge-reduced.badge-inline {\n  margin-left: 6px;\n  display: inline-block;\n}\n\n.badge-frameless {\n  box-sizing: border-box;\n  white-space: nowrap;\n  display: block;\n  color: #bf4800;\n  border: none;\n}\n\n.badge-frameless-inline {\n  margin-left: 10px;\n  display: inline-block;\n}\n\n.badge-frameless.badge-frameless-reduced {\n  font-size: 12px;\n  line-height: 1.3333733333;\n  font-weight: 400;\n  letter-spacing: -0.01em;\n  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,\n    sans-serif;\n  border-radius: 0;\n  padding: 0;\n  display: block;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(ar) {\n  letter-spacing: 0em;\n  font-family: SF Pro AR, SF Pro AR Text, SF Pro Text, SF Pro Gulf, SF Pro Icons,\n    Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(ja) {\n  letter-spacing: 0em;\n  font-family: SF Pro JP, SF Pro Text, SF Pro Icons, Hiragino Kaku Gothic Pro,\n    ãƒ’ãƒ©ã‚®ãƒŽè§’ã‚´ Pro W3, ãƒ¡ã‚¤ãƒªã‚ª, Meiryo, ï¼­ï¼³ ï¼°ã‚´ã‚·ãƒƒã‚¯,\n    Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(ko) {\n  letter-spacing: 0em;\n  font-family: SF Pro KR, SF Pro Text, SF Pro Icons, Apple Gothic, HY Gulim,\n    MalgunGothic, HY Dotum, Lexi Gulim, Helvetica Neue, Helvetica, Arial,\n    sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(zh) {\n  letter-spacing: 0em;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(th) {\n  font-family: SF Pro TH, SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,\n    Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(zh-CN) {\n  font-family: SF Pro SC, SF Pro Text, SF Pro Icons, PingFang SC, Helvetica Neue,\n    Helvetica, Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(zh-HK) {\n  font-family: SF Pro HK, SF Pro Text, SF Pro Icons, PingFang HK, Helvetica Neue,\n    Helvetica, Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(zh-MO) {\n  font-family: SF Pro HK, SF Pro TC, SF Pro Text, SF Pro Icons, PingFang HK,\n    Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced:lang(zh-TW) {\n  font-family: SF Pro TC, SF Pro Text, SF Pro Icons, PingFang TC, Helvetica Neue,\n    Helvetica, Arial, sans-serif;\n}\n\n.badge-frameless.badge-frameless-reduced.badge-frameless-inline {\n  margin-left: 6px;\n  display: inline-block;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);