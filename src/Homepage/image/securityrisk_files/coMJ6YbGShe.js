;/*FB_PKG_DELIM*/

__d("CometComposerFormRefContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({current:null});g["default"]=b}),98);
__d("CometComposerPluginsContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({decorators:new Map(),handlers:new Map()});g["default"]=b}),98);
__d("CometComposerPluginsDispatchContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(c("emptyFunction"));g["default"]=b}),98);
__d("cometComposerPluginsReducers",[],(function(a,b,c,d,e,f){"use strict";function g(a,b){var c=a.get(b);if(c!=null){a.set(b,c+1);return a}else{c=new Map(a);c.set(b,1);return c}}function h(a,b){var c=a.get(b);if(c!=null)if(c>1)a.set(b,c-1);else{c=new Map(a);c["delete"](b);return c}return a}function a(a,b){switch(b.type){case"install_decorator":case"uninstall_decorator":var c=b.type==="install_decorator"?g(a.decorators,b.decorator):h(a.decorators,b.decorator);if(c!==a.decorators)return babelHelpers["extends"]({},a,{decorators:c});break;case"install_handler":case"uninstall_handler":c=b.type==="install_handler"?g(a.handlers,b.handler):h(a.handlers,b.handler);if(c!==a.handlers)return babelHelpers["extends"]({},a,{handlers:c});break}return a}f["default"]=a}),66);
__d("createEmptyCometComposerViewStateWithTarget",["createEmptyCometComposerViewState"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return function(b){b=c("createEmptyCometComposerViewState")(b);return babelHelpers["extends"]({},b,{target:a})}}g["default"]=a}),98);
__d("getComposerValidationErrors",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c={};for(var d in a){var e=a[d];e=e(b);e!=null&&(c[d]=e)}return c}f["default"]=a}),66);
__d("getIneligibleComposerFeatures",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=new Set();for(var d in a){var e=a[d];e=e(b);e!=null&&e.forEach(function(a){return c.add(a)})}return c}f["default"]=a}),66);
__d("getShouldTriggerUnsavedChangesFlow",[],(function(a,b,c,d,e,f){"use strict";function a(a){return!Boolean(a==null?void 0:a.ignoreDirtyFlag)&&Boolean(a==null?void 0:a.isDirty)}f["default"]=a}),66);
__d("isAttachmentEmpty",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b;if(((b=a.isEmptyMetaData)==null?void 0:b.useIsEmpty)!==!0)return!1;if(((b=a.attachmentArea)==null?void 0:b.activeAttachmentType)!=null){if(a.attachmentArea.activeAttachmentType==="MEDIA"&&(a.mediaAttachments==null||a.mediaAttachments.length===0))return!0;if(a.attachmentArea.activeAttachmentType!=="FORMATTED_TEXT")return!1}if(((b=a.footerAttachmentArea)==null?void 0:b.activeFooterAttachmentType)!=null)return!1;if(a.withTagIDsTracker!=null&&a.withTagIDsTracker.size>0)return!1;if(a.activityMinutiae!=null)return!1;return a.locationMinutiae!=null?!1:!0}f["default"]=a}),66);
__d("isComposerEmpty",["cr:47","getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE","gkx","isAttachmentEmpty"],(function(a,b,c,d,e,f,g){"use strict";function h(a){a=(a==null?void 0:a.editorState)?c("getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE")(a==null?void 0:a.editorState).trim():"";return a.length===0}var i=c("gkx")("20836");function a(a){var d;if(((d=a.isEmptyMetaData)==null?void 0:d.useIsEmpty)!==!0)return!1;if(i&&a.lexicalEditorIsEmpty===!1)return!1;if(!i&&a.lexicalEditorIsDirty===!0)return!1;if(a.lexicalEditor==null&&!h(a))return!1;if(!c("isAttachmentEmpty")(a))return!1;return(b("cr:47")==null?void 0:b("cr:47")(a))?!1:!0}g["default"]=a}),98);
__d("reduceComposerViewState",["CometComposerDirtyTracker","isComposerEmpty"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,e,f,g){var h=e;a=a.current.keys();for(var a=a,i=Array.isArray(a),j=0,a=i?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var k;if(i){if(j>=a.length)break;k=a[j++]}else{j=a.next();if(j.done)break;k=j.value}k=k;h=k(h,g)}k=h.lexicalEditorIsDirty===!0||Array.from(b.current.keys()).some(function(a){a=a(f,h);return a===!0||a==="UPDATED"||a==="DELETED"});j=c("isComposerEmpty")(h);d("CometComposerDirtyTracker").setIsComposerDirty(e.creationSessionID,j?!1:k);return babelHelpers["extends"]({},h,{isDirty:k,isEmptyMetaData:{isEmpty:j,useIsEmpty:(a=(i=h.isEmptyMetaData)==null?void 0:i.useIsEmpty)!=null?a:!0}})}g["default"]=a}),98);
__d("useComposerLexicalEligibilityCheckHooks.react",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=new Set();if(b!=null)for(var d in b){var e=b[d](a);e.size>0&&e.forEach(function(a){return c.add(a)})}return c}f["default"]=a}),66);
__d("useComposerLexicalValidationHooks.react",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c={};if(b!=null)for(var d in b){var e=b[d](a);e!=null?c[d]=e:c[d]!=null&&delete c[d]}return c}f["default"]=a}),66);
__d("CometComposer.react",["CometComposerFeatureDefinitionsContext","CometComposerFormRefContext","CometComposerIneligibilityContext","CometComposerLoggerDispatcherContext","CometComposerPluginsContext","CometComposerPluginsDispatchContext","CometComposerPreSubmitHooksContext","CometComposerValidationErrorsContext","CometComposerViewStateAlteredContext","CometComposerViewStateContext","CometComposerViewStateDispatcherContext","CometComposerViewStateReducersContext","CometOnBeforeUnload.react","FBLogger","Promise","cometComposerPluginsReducers","createEmptyCometComposerViewStateWithTarget","getComposerUnsavedChangesAlert","getComposerValidationErrors","getIneligibleComposerFeatures","getShouldTriggerUnsavedChangesFlow","react","reduceComposerViewState","shallowEqual","useComposerLexicalEligibilityCheckHooks.react","useComposerLexicalValidationHooks.react","useComposerTerminalEventLog"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useCallback,l=e.useImperativeHandle,m=e.useMemo,n=e.useReducer,o=e.useRef;d=j.forwardRef(a);function a(a,d){a=babelHelpers["extends"]({},a);var e=a.beginningViewState,f=a.children,g=a.eligibilityCheckers,i=a.featureDefinitions,p=a.lexicalEligibilityCheckHooks,q=a.lexicalValidationHooks,r=a.loggers,s=a.onBeforeViewStateChange,t=a.onSubmitCommit,u=a.onSubmitHalt,v=a.onSubmitStart,w=a.onValidationErrors,x=a.registerOnBeforeUnload;x=x===void 0?!0:x;var y=a.target,z=a.unalteredBeginningViewState,A=a.validators,B=o(new Map()),C=o(new Map()),D=o({}),E=o(new Set()),F=o(new Map()),G=o(null);a=o(null);e=n(function(a,b){b=c("reduceComposerViewState")(B,C,a,z,b);G.current=b;s&&s(b,a);return b},e,c("createEmptyCometComposerViewStateWithTarget")(y));var H=e[0];e=e[1];var I=function(){if(c("getShouldTriggerUnsavedChangesFlow")(H))return c("getComposerUnsavedChangesAlert")(H)};l(d,function(){return{getViewState:function(){return H}}},[H]);d=n(c("cometComposerPluginsReducers"),{decorators:new Map(),handlers:new Map()});var J=d[0];d=d[1];var K=m(function(){return A!=null?c("getComposerValidationErrors")(A,H):{}},[A,H]);q=c("useComposerLexicalValidationHooks.react")(H,q);K=babelHelpers["extends"]({},K,q);c("shallowEqual")(D.current,K)||(D.current=K);var L=m(function(){return g!=null?c("getIneligibleComposerFeatures")(g,H):new Set()},[g,H]);q=c("useComposerLexicalEligibilityCheckHooks.react")(H,p);K=m(function(){return{featureDefinitions:i}},[i]);(E.current.size!==L.size+q.size||!Array.from(L).every(function(a){return E.current.has(a)})||!Array.from(q).every(function(a){return E.current.has(a)}))&&(q.forEach(function(a){return L.add(a)}),E.current=new Set(L));var M=k(function(a,c){a!=null&&a.type!=="press"&&a.preventDefault();if(Object.keys(D.current).length>0){w&&w(D.current);return}var d=G.current;if(d==null)return;v&&v(d);a=F.current;if(a){a=Array.from(a.keys()).reduce(function(a,e){return a.then(function(){return new(h||(h=b("Promise")))(function(a,b){e({onContinue:a,onHalt:b},d,c)})})},(h||(h=b("Promise"))).resolve());a.then(function(){t(d,c)})["catch"](function(){u&&u(d)})}else t(d,c)},[t,u,v,w]),N=H.creationSessionID;p=m(function(){return function(a){var b;N==null?c("FBLogger")("comet_composer").mustfix("creationSessionID should be defined in composer of type "+String(y==null?void 0:y.type)):((b=r)!=null?b:[]).map(function(b){return b(a,N,{target:y})})}},[N,y,r]);c("useComposerTerminalEventLog")(function(){return c("getShouldTriggerUnsavedChangesFlow")(H)},function(){return N});return j.jsx(c("CometComposerPluginsDispatchContext").Provider,{value:d,children:j.jsx(c("CometComposerPluginsContext").Provider,{value:J,children:j.jsx(c("CometComposerFeatureDefinitionsContext").Provider,{value:K,children:j.jsx(c("CometComposerViewStateReducersContext").Provider,{value:B,children:j.jsx(c("CometComposerViewStateAlteredContext").Provider,{value:C,children:j.jsx(c("CometComposerViewStateContext").Provider,{value:H,children:j.jsx(c("CometComposerViewStateDispatcherContext").Provider,{value:e,children:j.jsx(c("CometComposerValidationErrorsContext").Provider,{value:D.current,children:j.jsx(c("CometComposerIneligibilityContext").Provider,{value:E.current,children:j.jsx(c("CometComposerLoggerDispatcherContext").Provider,{value:p,children:j.jsx(c("CometComposerPreSubmitHooksContext").Provider,{value:F,children:j.jsxs(c("CometComposerFormRefContext").Provider,{value:a,children:[j.jsxs("form",{"data-testid":void 0,method:"POST",onSubmit:M,ref:a,children:[m(function(){return f(M)},[f,M]),j.jsx("input",{style:{display:"none"},type:"submit"})]}),x?j.jsx(c("CometOnBeforeUnload.react"),{onBeforeUnload:I}):null]})})})})})})})})})})})})}a.displayName=a.name+" [from "+f.id+"]";e=d;g["default"]=e}),98);
__d("FeedComposerCometTextStyleContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({color:"primary-text",fontSize:24});g["default"]=b}),98);
__d("CometComposerEditorForLexicalBootstrapPlugin.react",["FeedComposerCometTextStyleContext","Lexical","LexicalComposerContext","react","useLexicalInitializeEditor__DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useContext,j=b.useEffect,k=b.useLayoutEffect;function a(a){var b=a.autoFocus,e=a.inputElementRef,f=a.textAlignment;a=d("LexicalComposerContext").useLexicalComposerContext();var g=a[0];a=i(c("FeedComposerCometTextStyleContext"));var h=a.color,l=a.fontSize;c("useLexicalInitializeEditor__DEPRECATED")(g);k(function(){g.update(function(){var a=d("Lexical").$getRoot().getFirstChild();f!=null?a==null?void 0:a.setFormat(f):a!=null&&a.setFormat("")}),e.current!=null&&(e.current.style.color=h,e.current.style.fontSize=l+"px")},[g,h,l,f,e]);j(function(){b===!0&&g.focus()},[b,g])}g["default"]=a}),98);
__d("CometComposerNodes",["CometLexicalDelightNode","CometLexicalEmojiNode","CometLexicalGenericEntityNode","LexicalHashtag","LexicalLink","LexicalOverflow"],(function(a,b,c,d,e,f,g){"use strict";a=[d("CometLexicalGenericEntityNode").CometLexicalGenericEntityNode,d("CometLexicalEmojiNode").EmojiNode,d("LexicalLink").LinkNode,d("LexicalLink").AutoLinkNode,d("LexicalHashtag").HashtagNode,d("LexicalOverflow").OverflowNode,d("CometLexicalDelightNode").CometLexicalDelightNode];g.COMET_NODES=a}),98);
__d("cometComposerLexicalCreateEditor",["CometComposerNodes","FBLogger","Lexical","cometLexicalBaseTheme","mlcErrorHandler__INTERNAL"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("Lexical").createEditor({namespace:"CometPostComposer",nodes:d("CometComposerNodes").COMET_NODES,onError:function(b){return c("mlcErrorHandler__INTERNAL")(b,a,function(a){c("FBLogger")("CometComposer").catching(b).mustfix("Lexical Error Composer \u2013 "+a)})},theme:babelHelpers["extends"]({},c("cometLexicalBaseTheme"),{hashtag:"xv78j7m x1sy0etr",link:"x1fey0fg xmper1u x1edh9d7",paragraph:"xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8",placeholder:"xi81zsa x6ikm8r x10wlt62 x47corl x10l6tqk xlyipyv x13vifvy x87ps6o xuxw1ft"})});return a}g["default"]=a}),98);
__d("CometComposerEditorForLexical.react",["CometComposerEditorForLexicalBootstrapPlugin.react","CometLexicalContentEditable.react","LexicalComposerContext","LexicalErrorBoundary","LexicalHistoryPlugin","LexicalPlainTextPlugin","MLCInstrumentationPluginDeferred__INTERNAL.react","cometComposerLexicalCreateEditor","composerLexicalEditorViewStateReducer","cr:11347","cr:12128","cr:1305","gkx","react","react-compiler-runtime","useComposerViewStateDispatcher","useComposerViewStateReducer","withComposerViewStatePart"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;e.useCallback;e.useMemo;var j=e.useRef,k=c("gkx")("20836"),l={root:{boxSizing:"x9f619",display:"x1lliihq",height:"x5yr21d",width:"xh8yej3",$$css:!0}};function a(a){var e,f=d("react-compiler-runtime").c(32),g=a.ariaLabel,h=a.autoFocus,m=a.beginningViewState,n=a.children,o=a.formattingType,p=a.lexicalEditor,q=a.placeholderCustomStyles,r=a.placeholderText,s=a.richTextSupported,t=a.surface;a=a.textAlignment;c("useComposerViewStateReducer")(c("composerLexicalEditorViewStateReducer"));var u=c("useComposerViewStateDispatcher")();s=s===!0;bb0:{if(p==null){var v;f[0]!==u||f[1]!==s?(v=s&&b("cr:12128")!=null?b("cr:12128")():c("cometComposerLexicalCreateEditor")(),u({lexicalEditor:v,type:"SET_LEXICAL_EDITOR_STATE"}),f[0]=u,f[1]=s,f[2]=v):v=f[2];u=v;break bb0}u=p}v=u;var w=j(null);f[3]===Symbol["for"]("react.memo_cache_sentinel")?(p=function(a){w.current=a},f[3]=p):p=f[3];u=p;f[4]===Symbol["for"]("react.memo_cache_sentinel")?(p=d("LexicalComposerContext").createLexicalComposerContext(),f[4]=p):p=f[4];f[5]!==v?(p=[v,p],f[5]=v,f[6]=p):p=f[6];p=p;p=p;e=((e=r)!=null?e:[]).length>0?r:g;f[7]!==q||f[8]!==r?(g=r==null?{}:{"aria-placeholder":r,placeholder:i.jsx("div",{className:"xi81zsa x6ikm8r x10wlt62 x47corl x10l6tqk xlyipyv xs7f9wi x87ps6o x1vjfegm",style:q,children:r})},f[7]=q,f[8]=r,f[9]=g):g=f[9];f[10]!==e||f[11]!==g?(q=i.jsx(c("CometLexicalContentEditable.react"),babelHelpers["extends"]({ariaLabel:e,contentEditableRef:u,spellCheck:!0,tabIndex:0,webDriverTestID:"comet-composer-editor-for-lexical",xstyle:l.root},g)),f[10]=e,f[11]=g,f[12]=q):q=f[12];r=q;f[13]!==t?(u=i.jsx(c("MLCInstrumentationPluginDeferred__INTERNAL.react"),{format__DEPRECATED:"PlainText",policyProduct:k?"workplace":"facebook",surface:t}),f[13]=t,f[14]=u):u=f[14];f[15]!==m||f[16]!==r||f[17]!==v||f[18]!==o||f[19]!==s?(e=m!=null&&s&&o!=="SATP"&&b("cr:11347")!=null?i.jsx(b("cr:11347"),{beginningViewState:m,contentEditable:r,editor:v}):i.jsx(d("LexicalPlainTextPlugin").PlainTextPlugin,{ErrorBoundary:d("LexicalErrorBoundary").LexicalErrorBoundary,contentEditable:r}),f[15]=m,f[16]=r,f[17]=v,f[18]=o,f[19]=s,f[20]=e):e=f[20];f[21]===Symbol["for"]("react.memo_cache_sentinel")?(g=i.jsx(d("LexicalHistoryPlugin").HistoryPlugin,{}),f[21]=g):g=f[21];f[22]!==h||f[23]!==a?(q=i.jsx(c("CometComposerEditorForLexicalBootstrapPlugin.react"),{autoFocus:h,inputElementRef:w,textAlignment:a}),f[22]=h,f[23]=a,f[24]=q):q=f[24];f[25]===Symbol["for"]("react.memo_cache_sentinel")?(t=b("cr:1305")!=null?i.jsx(b("cr:1305"),{}):null,f[25]=t):t=f[25];f[26]!==n||f[27]!==p||f[28]!==e||f[29]!==q||f[30]!==u?(m=i.jsxs(d("LexicalComposerContext").LexicalComposerContext.Provider,{value:p,children:[u,e,g,q,t,n]}),f[26]=n,f[27]=p,f[28]=e,f[29]=q,f[30]=u,f[31]=m):m=f[31];return m}f=c("withComposerViewStatePart")(a,function(a){return{formattingType:a.formattingType,lexicalEditor:a.lexicalEditor,richTextSupported:a.richTextSupported}});g["default"]=f}),98);
__d("CometComposerHashtagsPluginForLexicalDeferred.react",["createComposerDeferredPlugin","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h;h||d("react");a=c("createComposerDeferredPlugin")(c("requireDeferred")("CometComposerHashtagPluginForLexical.react").__setRef("CometComposerHashtagsPluginForLexicalDeferred.react"));g["default"]=a}),98);
__d("CometComposerHashtagsTypeaheadPluginForLexicalDeferred.react",["createComposerDeferredPlugin","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h;h||d("react");a=c("createComposerDeferredPlugin")(c("requireDeferred")("CometComposerHashtagTypeaheadPluginForLexical.react").__setRef("CometComposerHashtagsTypeaheadPluginForLexicalDeferred.react"));g["default"]=a}),98);
__d("ComposerEmojiTrigger.react",["cr:2028537"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:2028537")}),98);
__d("ComposerEmojiPopoverButton.react",["fbt","CometContextualLayerAnchorRoot.react","CometPressable.react","CometPressableChildrenWithOverlay_DEPRECATED.react","ComposerEmojiTrigger.react","FDSTooltip.react","react","react-compiler-runtime","stylex","withComposerViewStatePart"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react")),l=j.useState,m={pressable:{appearance:"xjyslct",backgroundColor:"xjbqb8w",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x972fbf",borderEndWidth:"xcfux6l",borderBottomWidth:"x1qhh985",borderStartWidth:"xm0m39n",boxSizing:"x9f619",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",position:"x1n2onr6",textAlign:"x16tdsg8",zIndex:"x1ja2u2z",$$css:!0},pressed:{transform:"x1n5d1j9",$$css:!0},root:{opacity:"x1ks1olk",$$css:!0},rootHovered:{opacity:"x1hc1fzr",$$css:!0}};function a(a){var b=d("react-compiler-runtime").c(6),e=a.children,f=a.disabled;a=a.shouldUseSmallEmojiIcon;var g=f===void 0?!1:f,j=a===void 0?!1:a;f=l(!1);var n=f[0],o=f[1];a=l(!1);var p=a[0],q=a[1];b[0]!==e||b[1]!==n||b[2]!==g||b[3]!==p||b[4]!==j?(f=k.jsx(c("ComposerEmojiTrigger.react"),{setClicked:o,setHovered:q,children:function(a,b,d,f,l,r){d=function(a){f&&f(a),q(!0)};r=function(){l&&l(),q(!1)};var s=function(){o(!0),b()};return k.jsx("div",babelHelpers["extends"]({},(i||(i=c("stylex"))).props(m.root,(j||n||p)&&m.rootHovered),{children:k.jsx("div",{children:k.jsx(c("FDSTooltip.react"),{position:"above",tooltip:"Emoji",children:k.jsx(c("CometPressable.react"),{"aria-label":h._("__JHASH__Kfnaj4Cm3LO__JHASH__"),disabled:g,label:h._("__JHASH__Kfnaj4Cm3LO__JHASH__"),onHoverIn:d,onHoverOut:r,onPress:g===!0?void 0:s,overlayDisabled:!j,ref:a,testid:void 0,xstyle:function(a){a=a.pressed;return[m.pressable,a&&g!==!0&&m.pressed]},children:function(b){b=b.overlay;return k.jsx("div",{children:k.jsx(c("CometContextualLayerAnchorRoot.react"),{children:k.jsx("div",{children:k.jsx("div",babelHelpers["extends"]({className:"xc9qbxq x1n2onr6 x14qfxbe x14yjl9h xudhj91 x18nykt9 xww2gxu"},{children:k.jsx(c("CometPressableChildrenWithOverlay_DEPRECATED.react"),{overlay:b,children:k.jsx("div",babelHelpers["extends"]({className:"x6s0dn4 x78zum5 xl56j7k x1n2onr6 x5yr21d xh8yej3"},{children:e(a,g)}))})}))})})})}})})})}))}}),b[0]=e,b[1]=n,b[2]=g,b[3]=p,b[4]=j,b[5]=f):f=b[5];return f}b=c("withComposerViewStatePart")(a,function(a){return{formattedTextPreset:(a=a.formattedText)==null?void 0:a.currentFormattedTextPreset}});g["default"]=b}),226);
__d("ComposerEmojiTriggerImpl.react",["CometErrorBoundary.react","FDSLazyPopoverTrigger.react","FDSPopoverLoadingState.react","JSResourceForInteraction","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j=c("JSResourceForInteraction")("ComposerEmojiPopover.react").__setRef("ComposerEmojiTriggerImpl.react"),k={popoverFallback:{minWidth:"x17upfok",$$css:!0}};function a(a){var b=d("react-compiler-runtime").c(10),e=a.align,f=a.children,g=a.position,h=a.setClicked,l=a.setHovered;a=a.visibleOnLoad;e=e===void 0?"middle":e;g=g===void 0?"above":g;a=a===void 0?!1:a;var m;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(m=i.jsx(c("FDSPopoverLoadingState.react"),{withArrow:!0,xstyle:k.popoverFallback}),b[0]=m):m=b[0];var n;b[1]!==h||b[2]!==l?(n={setClicked:h,setHovered:l},b[1]=h,b[2]=l,b[3]=n):n=b[3];b[4]!==e||b[5]!==f||b[6]!==g||b[7]!==n||b[8]!==a?(h=i.jsx(c("CometErrorBoundary.react"),{children:i.jsx(c("FDSLazyPopoverTrigger.react"),{align:e,fallback:m,popoverProps:n,popoverResource:j,position:g,preloadTrigger:"button",tracePolicy:"comet.emojipicker",visibleOnLoad:a,children:f})}),b[4]=e,b[5]=f,b[6]=g,b[7]=n,b[8]=a,b[9]=h):h=b[9];return h}g["default"]=a}),98);
__d("ComposerInlineEditingOptionIcon.react",["FDSIcon.react","ImageIconSource","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");b=i.forwardRef(a);function a(a,b){var e=d("react-compiler-runtime").c(8),f=a.darkIcon,g=a.disabled,h=a.isLightIcon,j=a.label,k=a.lightIcon;a=a.size;h=h?k:f;e[0]!==a||e[1]!==h?(k=new(c("ImageIconSource"))(h,a,a),e[0]=a,e[1]=h,e[2]=k):k=e[2];f=k;h=a!==20||g?"disabled":"tertiary";e[3]!==f||e[4]!==h||e[5]!==j||e[6]!==b?(k=i.jsx(c("FDSIcon.react"),{"aria-label":j,color:h,icon:f,ref:b}),e[3]=f,e[4]=h,e[5]=j,e[6]=b,e[7]=k):k=e[7];return k}e=b;g["default"]=e}),98);
__d("useIsInlineEditingOptionsIconLight",["useCometStatusAreaTextData","useCurrentDisplayMode"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=(a=c("useCometStatusAreaTextData")(a))==null?void 0:a.formattedTextStyling;var b=c("useCurrentDisplayMode")();a=a==null?void 0:a.color;if(a!=null)try{var d=parseInt(a.substring(1,3),16),e=parseInt(a.substring(3,5),16);a=parseInt(a.substring(5,7),16);d=Math.min(d,e,a);return d>128}catch(a){return!1}return b==="dark"}g["default"]=a}),98);
__d("ComposerInlineEditingOptionsRow.react",["fbt","ix","CometRowItem.react","ComposerInlineEditingOptionIcon.react","cr:12972","cr:13030","cr:2014","react","react-compiler-runtime","stylex","useIsInlineEditingOptionsIconLight"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||d("react"),m={withSATP:{paddingBottom:"xsag5q8",$$css:!0}};function a(a){var e=d("react-compiler-runtime").c(29),f=a.areAIOptionsEnabled,g=a.emojiIconOverride,k=a.formattedTextPreset,n=a.isEmojiButtonVisible,o=a.isRowDisabled;a=a.size;f=f===void 0?!1:f;n=n===void 0?!0:n;var p=o===void 0?!1:o,q=a===void 0?24:a;o=[];var r=c("useIsInlineEditingOptionsIconLight")(k);if(b("cr:2014")!=null&&n){e[0]!==k?(a=(j||(j=c("stylex"))).props(k!=null&&m.withSATP),e[0]=k,e[1]=a):a=e[1];e[2]!==(g==null?void 0:g.darkIcon)||e[3]!==(g==null?void 0:g.lightIcon)||e[4]!==r||e[5]!==p||e[6]!==q?(n=l.jsx(b("cr:2014"),{children:function(a,b){var d;return l.jsx(c("ComposerInlineEditingOptionIcon.react"),{darkIcon:(d=g==null?void 0:g.darkIcon)!=null?d:i("615750"),disabled:b||p,isLightIcon:r,label:h._("__JHASH__Kfnaj4Cm3LO__JHASH__"),lightIcon:(d=g==null?void 0:g.lightIcon)!=null?d:i("792304"),ref:a,size:q})}}),e[2]=g==null?void 0:g.darkIcon,e[3]=g==null?void 0:g.lightIcon,e[4]=r,e[5]=p,e[6]=q,e[7]=n):n=e[7];var s;e[8]!==a||e[9]!==n?(s=l.jsx(c("CometRowItem.react"),{children:l.jsx("div",babelHelpers["extends"]({},a,{children:n}))},"ComposerEmojiPopoverButton"),e[8]=a,e[9]=n,e[10]=s):s=e[10];o.push(s)}if(f===!0){if(b("cr:13030")!=null){e[11]!==k?(a=(j||(j=c("stylex"))).props(k!=null&&m.withSATP),e[11]=k,e[12]=a):a=e[12];e[13]!==r||e[14]!==p||e[15]!==q?(n=l.jsx(b("cr:13030"),{children:function(a,b){return l.jsx(c("ComposerInlineEditingOptionIcon.react"),{darkIcon:i("877787"),disabled:b||p,isLightIcon:r,label:h._("__JHASH__5R67X0-wL5N__JHASH__"),lightIcon:i("877788"),ref:a,size:q})}}),e[13]=r,e[14]=p,e[15]=q,e[16]=n):n=e[16];e[17]!==a||e[18]!==n?(s=l.jsx(c("CometRowItem.react"),{children:l.jsx("div",babelHelpers["extends"]({},a,{children:n}))},"ComposerWriteWithAI"),e[17]=a,e[18]=n,e[19]=s):s=e[19];o.push(s)}if(b("cr:12972")!=null){e[20]!==k?(f=(j||(j=c("stylex"))).props(k!=null&&m.withSATP),e[20]=k,e[21]=f):f=e[21];e[22]!==r||e[23]!==p||e[24]!==q?(a=l.jsx(b("cr:12972"),{children:function(a,b){return l.jsx(c("ComposerInlineEditingOptionIcon.react"),{darkIcon:i("877803"),disabled:b||p,isLightIcon:r,label:h._("__JHASH__5R67X0-wL5N__JHASH__"),lightIcon:i("430987"),ref:a,size:q})}}),e[22]=r,e[23]=p,e[24]=q,e[25]=a):a=e[25];e[26]!==f||e[27]!==a?(n=l.jsx(c("CometRowItem.react"),{children:l.jsx("div",babelHelpers["extends"]({},f,{children:a}))},"ComposerImagineMedia"),e[26]=f,e[27]=a,e[28]=n):n=e[28];o.push(n)}}return o}g["default"]=a}),226);
__d("getDeferredComposerTransformer",[],(function(a,b,c,d,e,f){"use strict";function a(a){return function(b,c,d,e){a.loadImmediately(function(a){a(b,c,d,e)})}}f["default"]=a}),66);
__d("composerRichTextTransformForDraftJSDeferred",["getDeferredComposerTransformer","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";a=c("getDeferredComposerTransformer")(c("requireDeferred")("cometComposerRichTextTransformForDraftJS").__setRef("composerRichTextTransformForDraftJSDeferred"));g["default"]=a}),98);
__d("transformComposerViewStateToCreationData",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c,d,e){function f(d,g){var h=c[g];if(h!=null){var i=function(a){f(a,g+1)};h(a,d,i,b)}else e(d)}f(d,0)}f["default"]=a}),66);