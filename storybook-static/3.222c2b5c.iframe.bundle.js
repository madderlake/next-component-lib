"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3],{"./src/components/MarcomLink/MarcomLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>MarcomLink});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.1.4_@babel+core@7.25.2_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.78.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_StandardsLink_StandardsLink__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/StandardsLink/StandardsLink.tsx");function MarcomLink({analytics,ariaLabel,children,nofollow=!1,...rest}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StandardsLink_StandardsLink__WEBPACK_IMPORTED_MODULE_1__.F,{rel:nofollow?"nofollow":void 0,...analytics,...rest,ariaLabel,children})}MarcomLink.__docgenInfo={description:"",methods:[],displayName:"MarcomLink",props:{analytics:{required:!0,tsType:{name:"signature",type:"object",raw:'{\n  "data-analytics-title": string;\n  "data-analytics-exit-link"?: true;\n}',signature:{properties:[{key:"data-analytics-title",value:{name:"string",required:!0}},{key:"data-analytics-exit-link",value:{name:"literal",value:"true",required:!1}}]}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""},nofollow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]}},"./src/components/SectionHeader/SectionHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>SectionHeader});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.1.4_@babel+core@7.25.2_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.78.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),classnames=__webpack_require__("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),MarcomLink=(__webpack_require__("./node_modules/.pnpm/next@14.1.4_@babel+core@7.25.2_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.78.0/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/components/MarcomLink/MarcomLink.tsx")),responsive_content_module=__webpack_require__("./src/styles/shared/responsive-content.module.scss"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),SectionHeader_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.45_typescript@5.0.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.78.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/SectionHeader/SectionHeader.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SectionHeader_module.A,options);const SectionHeader_SectionHeader_module=SectionHeader_module.A&&SectionHeader_module.A.locals?SectionHeader_module.A.locals:void 0;function SectionHeader({title,link,headingRef,descriptionRef,enhancedStyles}){var _link_nofollow;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(SectionHeader_SectionHeader_module.container,responsive_content_module.A.responsiveContent),children:[(0,jsx_runtime.jsx)("h2",{ref:headingRef,className:classnames_default()(SectionHeader_SectionHeader_module.title,enhancedStyles),children:title}),void 0!==link&&(0,jsx_runtime.jsx)("p",{className:classnames_default()(SectionHeader_SectionHeader_module.description,enhancedStyles),ref:descriptionRef,children:(0,jsx_runtime.jsx)(MarcomLink.E,{href:link.href,analytics:link.analytics,nofollow:null!==(_link_nofollow=link.nofollow)&&void 0!==_link_nofollow&&_link_nofollow,ariaLabel:link.ariaLabel,children:link.children})})]})}SectionHeader.__docgenInfo={description:"",methods:[],displayName:"SectionHeader",props:{link:{required:!1,tsType:{name:"union",raw:"MarcomLinkProps | undefined",elements:[{name:"MarcomLinkProps"},{name:"undefined"}]},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},headingRef:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLHeadingElement>",elements:[{name:"HTMLHeadingElement"}]},description:""},descriptionRef:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLParagraphElement>",elements:[{name:"HTMLParagraphElement"}]},description:""},enhancedStyles:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.45_typescript@5.0.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.78.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/SectionHeader/SectionHeader.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/styles/fonts/SFProText-RegularItalic.woff2"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_1___=new URL(__webpack_require__("./src/styles/fonts/SFProText-RegularItalic.woff"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_2___=new URL(__webpack_require__("./src/styles/fonts/SFProText-RegularItalic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_3___=new URL(__webpack_require__("./src/styles/fonts/SFProText-Regular.woff2"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_4___=new URL(__webpack_require__("./src/styles/fonts/SFProText-Regular.woff"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_5___=new URL(__webpack_require__("./src/styles/fonts/SFProText-Regular.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_6___=new URL(__webpack_require__("./src/styles/fonts/SFProDisplay-Regular.woff2"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_7___=new URL(__webpack_require__("./src/styles/fonts/SFProDisplay-Regular.woff"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_8___=new URL(__webpack_require__("./src/styles/fonts/SFProDisplay-Regular.ttf"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___),___CSS_LOADER_URL_REPLACEMENT_3___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___),___CSS_LOADER_URL_REPLACEMENT_4___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___),___CSS_LOADER_URL_REPLACEMENT_5___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___),___CSS_LOADER_URL_REPLACEMENT_6___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___),___CSS_LOADER_URL_REPLACEMENT_7___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___),___CSS_LOADER_URL_REPLACEMENT_8___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);___CSS_LOADER_EXPORT___.push([module.id,`@font-face{font-family:"SFProText";src:local("SFProText Regular Italic"),local("../fonts/SFProText-RegularItalic"),url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"),url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff"),url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");font-weight:normal;font-style:italic;font-display:swap}@font-face{font-family:"SFProText";src:local("SFProText Regular"),local("../fonts/SFProText-Regular"),url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff2"),url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff"),url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("truetype");font-weight:normal;font-style:normal;font-display:swap}@font-face{font-family:"SFProDisplay";src:local("../fonts/SFProDisplay Regular"),local("../fonts/SFProDisplay-Regular"),url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("woff2"),url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("woff"),url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format("truetype");font-weight:normal;font-style:normal;font-display:swap}:root{--sk-body-text-color: rgb(29, 29, 31);--sk-headline-text-color: rgb(29, 29, 31);--sk-body-background-color: rgb(255, 255, 255);--sk-body-font-stack: text;--sk-default-stacked-margin: 0.4em;--sk-paragraph-plus-element-margin: 0.8em;--sk-headline-plus-first-element-margin: 0.8em;--sk-headline-plus-headline-margin: 0.4em;--sk-paragraph-plus-headline-margin: 1.6em;--global-section-background-color-alt: rgb(245, 245, 247);--global-card-corner-radius: 28px}html{font-family:SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:106.25%;font-family:SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;quotes:"â€œ" "â€"}.SectionHeader_container__KtySw{display:flex;justify-content:space-between;align-items:center;margin-bottom:80px}@media(min-width: 735px)and (max-width: 1068p){.SectionHeader_container__KtySw{margin-bottom:64px}}@media(min-width: 481px)and (max-width: 734px){.SectionHeader_container__KtySw{margin-bottom:48px;flex-direction:column;align-items:flex-start}}.SectionHeader_description__L42wM{max-width:280px;margin-bottom:3px}@media(min-width: 735px)and (max-width: 1068p){.SectionHeader_description__L42wM{max-width:200px}}@media(min-width: 481px)and (max-width: 734px){.SectionHeader_description__L42wM{max-width:75%;margin-bottom:0}}.SectionHeader_title__CkbrA{font-size:48px;line-height:1.08349;font-weight:600;letter-spacing:-0.003em;font-family:"SFProDisplay","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;max-width:75%}`,"",{version:3,sources:["webpack://./src/components/SectionHeader/SectionHeader.module.scss","webpack://./src/styles/shared/_fonts.scss","webpack://./src/styles/shared/_core.scss"],names:[],mappings:"AAAA,WCAA,uBACE,CAAA,yPACA,CAAA,kBAKA,CAAA,iBACA,CAAA,iBACA,CAAA,WAGF,uBACE,CAAA,4OACA,CAAA,kBAIA,CAAA,iBACA,CAAA,iBACA,CAAA,WAGF,0BACE,CAAA,2PACA,CAAA,kBAKA,CAAA,iBACA,CAAA,iBACA,CAAA,MCzBF,qCACE,CAAA,yCACA,CAAA,8CACA,CAAA,0BACA,CAAA,kCACA,CAAA,yCACA,CAAA,8CACA,CAAA,yCACA,CAAA,0CACA,CAAA,yDACA,CAAA,iCACA,CAAA,KAGF,8EAEI,CAAA,iBAMF,CAAA,8EAEE,CAAA,kBAMF,CAAA,gCF1BF,YACE,CAAA,6BACA,CAAA,kBACA,CAAA,kBACA,CAAA,+CE0CE,gCF9CJ,kBAOI,CAAA,CAAA,+CEmCA,gCF1CJ,kBAWI,CAAA,qBACA,CAAA,sBACA,CAAA,CAAA,kCAIJ,eACE,CAAA,iBACA,CAAA,+CE2BE,kCF7BJ,eAKI,CAAA,CAAA,+CEoBA,kCFzBJ,aASI,CAAA,eACA,CAAA,CAAA,4BAIJ,cAEE,CAAA,mBACA,CAAA,eACA,CAAA,uBACA,CAAA,yFACA,CAAA,aAEA",sourcesContent:['@import "../../styles/shared/core";\n// @include typography-set(\n//   title,\n//   (\n//     large: typespec-set("56_60_semibold", 56, 60, semibold),\n//     medium: typespec-set("48_52_semibold", 48, 52, semibold),\n//     small: typespec-set("32_36_semibold", 32, 36, semibold),\n//     xsmall: typespec-set("28_32_semibold", 28, 32, semibold),\n//   )\n// );\n\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 80px;\n\n  @include viewport(medium) {\n    margin-bottom: 64px;\n  }\n\n  @include viewport(small) {\n    margin-bottom: 48px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n.description {\n  max-width: 280px;\n  margin-bottom: 3px;\n\n  @include viewport(medium) {\n    max-width: 200px;\n  }\n\n  @include viewport(small) {\n    max-width: 75%;\n    margin-bottom: 0;\n  }\n}\n\n.title {\n  //@include typography(title);\n  font-size: 48px;\n  line-height: 1.08349;\n  font-weight: 600;\n  letter-spacing: -0.003em;\n  font-family: "SFProDisplay", "SF Pro Icons", "Helvetica Neue", "Helvetica",\n    "Arial", sans-serif;\n  max-width: 75%;\n}\n','@font-face {\n  font-family: "SFProText";\n  src: local("SFProText Regular Italic"),\n    local("../fonts/SFProText-RegularItalic"),\n    url("../fonts/SFProText-RegularItalic.woff2") format("woff2"),\n    url("../fonts/SFProText-RegularItalic.woff") format("woff"),\n    url("../fonts/SFProText-RegularItalic.ttf") format("truetype");\n  font-weight: normal;\n  font-style: italic;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: "SFProText";\n  src: local("SFProText Regular"), local("../fonts/SFProText-Regular"),\n    url("../fonts/SFProText-Regular.woff2") format("woff2"),\n    url("../fonts/SFProText-Regular.woff") format("woff"),\n    url("../fonts/SFProText-Regular.ttf") format("truetype");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: "SFProDisplay";\n  src: local("../fonts/SFProDisplay Regular"),\n    local("../fonts/SFProDisplay-Regular"),\n    url("../fonts/SFProDisplay-Regular.woff2") format("woff2"),\n    url("../fonts/SFProDisplay-Regular.woff") format("woff"),\n    url("../fonts/SFProDisplay-Regular.ttf") format("truetype");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n// @font-face {\n//   font-family: "SFProDisplay";\n//   src: local("SFProDisplay Medium Italic"), local("SFProDisplay-MediumItalic"),\n//     url("SFProDisplay-MediumItalic.woff2") format("woff2"),\n//     url("SFProDisplay-MediumItalic.woff") format("woff"),\n//     url("SFProDisplay-MediumItalic.ttf") format("truetype");\n//   font-weight: 500;\n//   font-style: italic;\n//   font-display: swap;\n// }\n\n// @font-face {\n//   font-family: "SFProDisplay";\n//   src: local("SFProDisplay Medium"), local("SFProDisplay-Medium"),\n//     url("SFProDisplay-Medium.woff2") format("woff2"),\n//     url("SFProDisplay-Medium.woff") format("woff"),\n//     url("SFProDisplay-Medium.ttf") format("truetype");\n//   font-weight: 500;\n//   font-style: normal;\n//   font-display: swap;\n// }\n\n// @font-face {\n//   font-family: "SFProDisplay";\n//   src: local("SFProDisplay Regular Italic"), local("SFProDisplay-RegularItalic"),\n//     url("SFProDisplay-RegularItalic.woff2") format("woff2"),\n//     url("SFProDisplay-RegularItalic.woff") format("woff"),\n//     url("SFProDisplay-RegularItalic.ttf") format("truetype");\n//   font-weight: normal;\n//   font-style: italic;\n//   font-display: swap;\n// }\n\n// @font-face {\n//   font-family: "SFProDisplay";\n//   src: local("SFProDisplay Semibold"), local("SFProDisplay-Semibold"),\n//     url("SFProDisplay-Semibold.woff2") format("woff2"),\n//     url("SFProDisplay-Semibold.woff") format("woff"),\n//     url("SFProDisplay-Semibold.ttf") format("truetype");\n//   font-weight: 600;\n//   font-style: normal;\n//   font-display: swap;\n// }\n\n// @font-face {\n//   font-family: "SFProDisplay";\n//   src: local("SFProDisplay Semibold Italic"),\n//     local("SFProDisplay-SemiboldItalic"),\n//     url("SFProDisplay-SemiboldItalic.woff2") format("woff2"),\n//     url("SFProDisplay-SemiboldItalic.woff") format("woff"),\n//     url("SFProDisplay-SemiboldItalic.ttf") format("truetype");\n//   font-weight: 600;\n//   font-style: italic;\n//   font-display: swap;\n// }\n','/* @import "ac-sasskit/core"; */\n@import "./fonts";\n@mixin viewport-set($viewport-name, $minWidth, $maxWidth: 0, $contentWidth) {\n  min-width: $minWidth;\n  max-width: $maxWidth;\n  content: $contentWidth;\n}\n:root {\n  --sk-body-text-color: rgb(29, 29, 31);\n  --sk-headline-text-color: rgb(29, 29, 31);\n  --sk-body-background-color: rgb(255, 255, 255);\n  --sk-body-font-stack: text;\n  --sk-default-stacked-margin: 0.4em;\n  --sk-paragraph-plus-element-margin: 0.8em;\n  --sk-headline-plus-first-element-margin: 0.8em;\n  --sk-headline-plus-headline-margin: 0.4em;\n  --sk-paragraph-plus-headline-margin: 1.6em;\n  --global-section-background-color-alt: rgb(245, 245, 247);\n  --global-card-corner-radius: 28px;\n}\n\nhtml {\n  font-family:\n    SF Pro Text,\n    SF Pro Icons,\n    Helvetica Neue,\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 106.25%;\n  font-family:\n    SF Pro Text,\n    SF Pro Icons,\n    Helvetica Neue,\n    Helvetica,\n    Arial,\n    sans-serif;\n  quotes: "â€œ" "â€";\n}\n// @include viewport-set(\n//   "large up",\n//   (\n//     min-width: 1069px,\n//     max-width: 0,\n//     content: 87.5vw,\n//   )\n// );\n@mixin viewport($size) {\n  @if $size == xsmall {\n    @media (min-width: 320px) and (max-width: 480px) {\n      @content;\n    }\n  } @else if $size == small {\n    @media (min-width: 481px) and (max-width: 734px) {\n      @content;\n    }\n  } @else if $size == medium {\n    @media (min-width: 735px) and (max-width: 1068p) {\n      @content;\n    }\n  } @else if $size == large {\n    @media (min-width: 1069px) and (max-width: 1440px) {\n      @content;\n    }\n  } @else if $size == large-up {\n    @media (min-width: 1069px) {\n      @content;\n    }\n  } @else if $size == xlarge {\n    @media (min-width: 1441px) {\n      @content;\n    }\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"SectionHeader_container__KtySw",description:"SectionHeader_description__L42wM",title:"SectionHeader_title__CkbrA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.45_typescript@5.0.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.78.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/styles/shared/responsive-content.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/styles/shared/responsive-content.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_responsive_content_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.45_typescript@5.0.4_webpack@5.94.0_esbuild@0.18.20_/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.78.0_webpack@5.94.0_esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/styles/shared/responsive-content.module.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_4_webpack_5_94_0_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_responsive_content_module_scss__WEBPACK_IMPORTED_MODULE_6__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_responsive_content_module_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_responsive_content_module_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals?_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_45_typescript_5_0_4_webpack_5_94_0_esbuild_0_18_20_node_modules_postcss_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_12_6_0_sass_1_78_0_webpack_5_94_0_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_responsive_content_module_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0}}]);