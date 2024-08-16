"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[458],{"./src/components/moments/Augment/Augment.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Augment_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContexts=__webpack_require__("./src/stories/components/DefaultContexts.tsx"),Moment=__webpack_require__("./src/components/Moment/Moment.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useTimeGroupContext=__webpack_require__("./src/hooks/anim/useTimeGroupContext.ts"),animationDefaults_module=__webpack_require__("./src/styles/shared/animationDefaults.module.scss"),responsive_content_module=__webpack_require__("./src/styles/shared/responsive-content.module.scss"),ImageAccordion=__webpack_require__("./src/components/ImageAccordion/ImageAccordion.tsx"),MomentEnhanced=__webpack_require__("./src/components/Moment/MomentEnhanced.tsx");function AugmentAccordion(param){let{items,animate}=param;const anim=(0,useTimeGroupContext.J)(),animationRef=(0,react.useRef)(null),buildInStyles=classnames_default()({[animationDefaults_module.A.noBuildIn]:!animate},{[animationDefaults_module.A.buildIn]:animate});return(0,react.useEffect)((()=>{if(null===anim||null===animationRef.current)return;const{timeGroup,childStartTime,startDelay}=anim,start=childStartTime+startDelay,opacityKeyframe=timeGroup.addKeyframe(animationRef.current,{start,end:start+MomentEnhanced.Z$,opacity:[0,1],easeFunction:"easeInOutQuad"}),moveKeyframe=timeGroup.addKeyframe(animationRef.current,{start,end:start+MomentEnhanced.X7,y:[animationDefaults_module.A.verticalMovement,0],easeFunction:"easeInOutQuad"});return()=>{opacityKeyframe.remove(),moveKeyframe.remove()}}),[anim,animationRef]),(0,jsx_runtime.jsx)("div",{className:responsive_content_module.A.responsiveContent,children:(0,jsx_runtime.jsx)(ImageAccordion.C,{items,ref:animationRef,className:buildInStyles})})}AugmentAccordion.__docgenInfo={description:"",methods:[],displayName:"AugmentAccordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ItemData"}],raw:"ItemData[]"},description:""},animate:{required:!0,tsType:{name:"boolean"},description:""}}};var useIsEnhanced=__webpack_require__("./src/hooks/featureDetect/useIsEnhanced.ts");function Augment(param){let{items,title,analytics}=param;const enhanced=(0,useIsEnhanced.c)();return(0,jsx_runtime.jsx)(Moment.d,{name:"augment-moment",title,enhanced,analytics,children:(0,jsx_runtime.jsx)(AugmentAccordion,{items,animate:enhanced})})}Augment.__docgenInfo={description:"",methods:[],displayName:"Augment",props:{items:{required:!0,tsType:{name:'intersection["items"]',raw:'ImageAccordionProps["items"]'},description:""}}};var imageData=__webpack_require__("./src/components/ImageAccordion/imageData.ts"),ResponsivePicture=__webpack_require__("./src/components/ResponsivePicture/ResponsivePicture.tsx");const AUGMENT_MOMENT_DATA={title:"Unlock the world of Apple",items:[{headline:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Start it on iPhone,",(0,jsx_runtime.jsx)("br",{}),"finish it on iPad."]}),content:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{children:"iPad works seamlessly with your iPhone. So the moments and ideas you capture on one are almost instantly available on the other. Snap a photo on your iPhone and add it to a presentation on your iPad. Or sketch a design on your iPad and have ready to share on your iPhone."}),(0,jsx_runtime.jsx)(ResponsivePicture.f,{images:Object.values(imageData.H.tab1),layout:"none"})]}),images:Object.values(imageData.H.tab1),analytics:{"data-analytics-click":"prop3: open finish it on ipad","data-analytics-title":"finish it","data-analytics-activitymap-region-id":"augment ipad"}},{headline:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Your dream workflow,",(0,jsx_runtime.jsx)("br",{}),"featuring Mac and iPad."]}),content:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{children:"Mac and iPad make the perfect partners for any creative workstation. Extend or mirror your Mac display onto your iPad with Sidecar. And use a single keyboard and mouse between your Mac and iPad with Universal Control."}),(0,jsx_runtime.jsx)(ResponsivePicture.f,{images:Object.values(imageData.H.tab2),layout:"none"})]}),images:Object.values(imageData.H.tab2),analytics:{"data-analytics-click":"prop3: open ipad dream workflow","data-analytics-title":"dream workflow","data-analytics-activitymap-region-id":"augment ipad"}},{headline:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Achieve your goals with",(0,jsx_runtime.jsx)("br",{}),"Apple Watch and iPad."]}),content:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{children:"Paired with Apple Watch, iPad can be a powerful tool in your health and fitness journey. Sensors in your AppleWatch combine with advanced algorithms to give you metrics that motivate you in your Apple Fitness+ workouts, and you can see that data synced to your iPad in realtime."}),(0,jsx_runtime.jsx)(ResponsivePicture.f,{images:Object.values(imageData.H.tab3),layout:"none"})]}),images:Object.values(imageData.H.tab3),analytics:{"data-analytics-click":"prop3: open achieve you goals","data-analytics-title":"achieve your goals","data-analytics-activitymap-region-id":"augment ipad"}}],analytics:{"data-analytics-section-engagement":"name: augment section","data-analytics-region":"augment region"}};var _Example_parameters,_Example_parameters_docs,_Example_parameters1;const Augment_stories={title:"Sections/iPad Augment Moment"},Example=(args=>(0,jsx_runtime.jsx)(DefaultContexts.U,{children:(0,jsx_runtime.jsx)(Augment,{...args})})).bind({});Example.args={...AUGMENT_MOMENT_DATA},Example.parameters={controls:{disable:!0}},Example.storyName="iPad Augment Moment",Example.parameters={...Example.parameters,docs:{...null===(_Example_parameters=Example.parameters)||void 0===_Example_parameters?void 0:_Example_parameters.docs,source:{originalSource:"args => <DefaultContexts>\n    <Augment {...args} />\n  </DefaultContexts>",...null===(_Example_parameters1=Example.parameters)||void 0===_Example_parameters1||null===(_Example_parameters_docs=_Example_parameters1.docs)||void 0===_Example_parameters_docs?void 0:_Example_parameters_docs.source}}};const __namedExportsOrder=["Example"]},"./src/hooks/featureDetect/useIsEnhanced.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>useIsEnhanced});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_contexts_BaseExperience_BaseExperienceContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/contexts/BaseExperience/BaseExperienceContext.tsx");const useIsEnhanced=()=>{const enhanced=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_BaseExperience_BaseExperienceContext__WEBPACK_IMPORTED_MODULE_1__.L);return null!==enhanced&&enhanced}}}]);