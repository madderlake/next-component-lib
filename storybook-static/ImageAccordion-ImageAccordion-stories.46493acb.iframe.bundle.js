"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[826],{"./src/components/ImageAccordion/ImageAccordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InteractiveExample:()=>InteractiveExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ImageAccordion_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.1.4_@babel+core@7.25.2_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.78.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@14.1.4_@babel+core@7.25.2_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.78.0/node_modules/next/dist/compiled/react/index.js"),LoadImagesProvider=__webpack_require__("./src/contexts/LoadImages/LoadImagesProvider.tsx"),DefaultContexts=__webpack_require__("./src/stories/components/DefaultContexts.tsx"),responsive_content_module=__webpack_require__("./src/styles/shared/responsive-content.module.scss"),ImageAccordion=__webpack_require__("./src/components/ImageAccordion/ImageAccordion.tsx"),ResponsivePicture=__webpack_require__("./src/components/ResponsivePicture/ResponsivePicture.tsx"),imageData=__webpack_require__("./src/components/ImageAccordion/imageData.ts");const items=[{headline:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"iPad and iPhone"}),content:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{children:"iPad works seamlessly with your iPhone. So the moments and ideas you capture on one are almost instantly available on the other. Snap a photo on your iPhone and add it to a presentation on your iPad. Or sketch a design on your iPad and have ready to share on your iPhone."}),(0,jsx_runtime.jsx)(ResponsivePicture.f,{images:Object.values(imageData.H.tab1),layout:"none"})]}),images:Object.values(imageData.H.tab1),analytics:{"data-analytics-click":"prop3: open ipad seamless","data-analytics-title":"start on iphone finish on ipad"}},{headline:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"iPad and Mac"}),content:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{children:"Mac and iPad make the perfect partners for any creative workstation. Extend or mirror your Mac display onto your iPad with Sidecar. And use a single keyboard and mouse between your Mac and iPad with Universal Control."}),(0,jsx_runtime.jsx)(ResponsivePicture.f,{images:Object.values(imageData.H.tab2),layout:"none"})]}),images:Object.values(imageData.H.tab2),analytics:{"data-analytics-click":"prop3: open ipad dream workflow","data-analytics-title":"dream workflow"}},{headline:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"iPad and Watch"}),content:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{children:"Paired with Watch, iPad can be a powerful tool in your health and fitness journey. Sensors in your Watch combine with advanced algorithms to give you metrics that motivate you in your fitness workouts, and you can see that data synced to your iPad in realtime."}),(0,jsx_runtime.jsx)(ResponsivePicture.f,{images:Object.values(imageData.H.tab3),layout:"none"})]}),images:Object.values(imageData.H.tab3),analytics:{"data-analytics-click":"prop3: open ipad goals","data-analytics-title":"paired with watch"}}],ImageAccordion_stories={title:"components/ImageAccordion",component:ImageAccordion.C},InteractiveExample=(args=>{const containerRef=(0,react.useRef)(null);return(0,jsx_runtime.jsx)(DefaultContexts.U,{children:(0,jsx_runtime.jsx)(LoadImagesProvider.K,{containerRef,children:(0,jsx_runtime.jsx)("div",{ref:containerRef,className:responsive_content_module.A.responsiveContent,style:{padding:"2rem 0"},children:(0,jsx_runtime.jsx)(ImageAccordion.C,{...args})})})})}).bind({});InteractiveExample.args={items},InteractiveExample.storyName="Image Accordion";const __namedExportsOrder=["InteractiveExample"];InteractiveExample.parameters={...InteractiveExample.parameters,docs:{...InteractiveExample.parameters?.docs,source:{originalSource:'args => {\n  const containerRef = useRef(null);\n  return <DefaultContexts>\n      <LoadImagesProvider containerRef={containerRef}>\n        <div ref={containerRef} className={responsiveStyle.responsiveContent} style={{\n        padding: "2rem 0"\n      }}>\n          <ImageAccordion {...args} />\n        </div>\n      </LoadImagesProvider>\n    </DefaultContexts>;\n}',...InteractiveExample.parameters?.docs?.source}}}},"./src/contexts/LoadImages/LoadImagesContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>LoadImagesContext});const LoadImagesContext=__webpack_require__("./node_modules/.pnpm/next@14.1.4_@babel+core@7.25.2_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.78.0/node_modules/next/dist/compiled/react/index.js").createContext(!1)},"./src/contexts/LoadImages/LoadImagesProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>LoadImagesProvider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.1.4_@babel+core@7.25.2_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.78.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.1.4_@babel+core@7.25.2_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.78.0/node_modules/next/dist/compiled/react/index.js"),_LoadImagesContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/contexts/LoadImages/LoadImagesContext.tsx");const LoadImagesProvider=({children,containerRef})=>{const[loadImages,setLoadImages]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),callbackFunc=entries=>{const[entry]=entries;return(null==entry?void 0:entry.isIntersecting)&&setLoadImages(!0),null};return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const observer=new IntersectionObserver(callbackFunc,{root:null,rootMargin:"0px 0px 100%",threshold:0}),containerRefCurr=containerRef.current;null!=containerRefCurr&&(observer.observe(containerRefCurr),loadImages&&observer.unobserve(containerRefCurr))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LoadImagesContext__WEBPACK_IMPORTED_MODULE_2__.U.Provider,{value:loadImages,children})};LoadImagesProvider.__docgenInfo={description:"",methods:[],displayName:"LoadImagesProvider",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},containerRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""}}}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.45_typescript@5.0.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.78.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/styles/shared/responsive-content.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.45_typescript@5.0.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.78.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/styles/shared/typography.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/runtime/getUrl.js":module=>{module.exports=function(url,options){return options||(options={}),url?(url=String(url.__esModule?url.default:url),/^['"].*['"]$/.test(url)&&(url=url.slice(1,-1)),options.hash&&(url+=options.hash),/["'() \t\n]|(%20)/.test(url)||options.needQuotes?'"'.concat(url.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):url):url}},"./src/styles/shared/responsive-content.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_responsive_content_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.45_typescript@5.0.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.78.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/styles/shared/responsive-content.module.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_responsive_content_module_scss__WEBPACK_IMPORTED_MODULE_6__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_responsive_content_module_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_responsive_content_module_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals?_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_responsive_content_module_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0},"./src/styles/shared/typography.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.45_typescript@5.0.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.78.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/styles/shared/typography.module.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals?_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0},"./src/styles/fonts/SFProDisplay-Regular.ttf":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/SFProDisplay-Regular.002d5da9.ttf"},"./src/styles/fonts/SFProDisplay-Regular.woff":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/SFProDisplay-Regular.afc9a943.woff"},"./src/styles/fonts/SFProDisplay-Regular.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/SFProDisplay-Regular.b4a4dfe5.woff2"},"./src/styles/fonts/SFProText-Regular.ttf":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/SFProText-Regular.3a736ced.ttf"},"./src/styles/fonts/SFProText-Regular.woff":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/SFProText-Regular.92f77d57.woff"},"./src/styles/fonts/SFProText-Regular.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/SFProText-Regular.808fc6e5.woff2"},"./src/styles/fonts/SFProText-RegularItalic.ttf":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/SFProText-RegularItalic.4a3026c9.ttf"},"./src/styles/fonts/SFProText-RegularItalic.woff":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/SFProText-RegularItalic.87cff91b.woff"},"./src/styles/fonts/SFProText-RegularItalic.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/SFProText-RegularItalic.ad85baad.woff2"}}]);