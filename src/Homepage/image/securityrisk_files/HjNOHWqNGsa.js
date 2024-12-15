;/*FB_PKG_DELIM*/

__d("BaseMultiPageEntryPointImpl.react",["CometPlaceholder.react","CometRelay","clearTimeout","react","react-compiler-runtime","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useRef;function a(a){var b=d("react-compiler-runtime").c(15),e=a.entryPoint,f=a.environmentProvider,g=a.fallback,h=a.loadedEntryPoint,l=a.otherProps,m=a.placeholderComponent,n=a.preloadParams;a=a.usePlaceholder;m=m===void 0?c("CometPlaceholder.react"):m;a=a===void 0?!0:a;f=d("CometRelay").useEntryPointLoader(f,e);var o=f[0],p=f[1],q=f[2],r=(e=o)!=null?e:h,s=k(null);b[0]!==q||b[1]!==r.isDisposed||b[2]!==h||b[3]!==n||b[4]!==p||b[5]!==o?(f=function(){s.current!=null&&(c("clearTimeout")(s.current),s.current=null);r.isDisposed&&p(n);return function(){s.current=c("setTimeout")(function(){o?q():h.dispose(),s.current=null},6e4)}},e=[q,r.isDisposed,h,n,p,o],b[0]=q,b[1]=r.isDisposed,b[2]=h,b[3]=n,b[4]=p,b[5]=o,b[6]=f,b[7]=e):(f=b[6],e=b[7]);j(f,e);b[8]!==r||b[9]!==l?(f=i.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:r,props:l}),b[8]=r,b[9]=l,b[10]=f):f=b[10];e=f;if(!a)return e;b[11]!==m||b[12]!==e||b[13]!==g?(l=i.jsx(m,{fallback:g,children:e}),b[11]=m,b[12]=e,b[13]=g,b[14]=l):l=b[14];return l}g["default"]=a}),98);
__d("MAWFetchXMABlob",["FBLogger","Promise"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var d=a.descriptionForLogging,e=a.url,f=a.xmaContentType;return e==null||e===""?(h||(h=b("Promise"))).resolve():window.fetch(e).then(function(a){return a.blob()})["catch"](function(a){c("FBLogger")("messenger_web_sharing").mustfix("Error fetching url in xma share from %s, with XMA content type %s and error %s",d,f,a);return(h||(h=b("Promise"))).resolve()})}g.fetchBlob=a}),98);
__d("MAWFetchXMAData_LinkPreviewQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8406450339459389"}),null);
__d("MAWFetchXMAData_LinkPreviewQuery.graphql",["MAWFetchXMAData_LinkPreviewQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"maxPreviewHeight"},c={defaultValue:null,kind:"LocalArgument",name:"maxPreviewWidth"},d={defaultValue:null,kind:"LocalArgument",name:"url"},e=[{alias:null,args:[{fields:[{kind:"Variable",name:"maxPreviewHeight",variableName:"maxPreviewHeight"},{kind:"Variable",name:"maxPreviewWidth",variableName:"maxPreviewWidth"},{kind:"Variable",name:"url",variableName:"url"}],kind:"ObjectValue",name:"params"}],kind:"ScalarField",name:"post_reshare_xma",storageKey:null}];return{fragment:{argumentDefinitions:[a,c,d],kind:"Fragment",metadata:null,name:"MAWFetchXMAData_LinkPreviewQuery",selections:e,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[d,c,a],kind:"Operation",name:"MAWFetchXMAData_LinkPreviewQuery",selections:e},params:{id:b("MAWFetchXMAData_LinkPreviewQuery_facebookRelayOperation"),metadata:{},name:"MAWFetchXMAData_LinkPreviewQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("MAWUnshimUrl",["CometLinkShimUtils"],(function(a,b,c,d,e,f,g){"use strict";function a(a){if(a==null)return void 0;var b=d("CometLinkShimUtils").getLinkShimInfo(a,void 0,void 0,void 0,void 0,!0);return!b.shimmed?a:b.unshimmedHref}g.unshimUrl=a}),98);
__d("MAWFetchXMAData",["fbt","CometRelay","ConstUriUtils","FBLogger","LSXmaContentType","MAWFetchXMABlob","MAWFetchXMAData_LinkPreviewQuery.graphql","MAWGetImageSpec","MAWParseXMAFBConfig","MAWUnshimUrl","Promise","WAArmadilloXMA.pb","asyncToGeneratorRuntime","gkx","justknobx","sendToSentQPLLogger"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k={failed_to_fetch_blob_for_xma_share:"Failed to fetch blob xma data for MAWShareAttachent",failed_to_fetch_json_for_xma_share:"Failed execute MAWShareAttachment_LinkPreviewQuery for MAWShareAttachent",failed_to_parse_json_for_xma_share:"Failed to fetch blob xma data for MAWShareAttachent"};function l(a){return{defaultCTA:{actionUrl:d("MAWUnshimUrl").unshimUrl(a),buttonType:d("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE.OPEN_NATIVE,nativeUrl:d("MAWUnshimUrl").unshimUrl(a),title:h._("__JHASH__l7kNV274w6c__JHASH__").toString()},linkType:"internal",overlayIconGlyph:d("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.PRIVATE,preview_blob:void 0,title_text:h._("__JHASH__2usVu04y012__JHASH__").toString()}}function m(a){var b=Object.entries(c("LSXmaContentType")).find(function(b){var c=b[0];b=b[1];return a===b&&d("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE[c]!=null});b=b!=null?d("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE[b[0]]:void 0;if(b===void 0)return void 0;if(!d("MAWParseXMAFBConfig").isFBSupportedTargetType(b)){c("FBLogger")("messenger_web_sharing").mustfix("Unsupported XMA Target Type in sending path: "+b);return d("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_SHARE}return b}function n(a,b,c){return o.apply(this,arguments)}function o(){o=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,e,f){var g;try{g=JSON.parse(e)}catch(a){throw c("FBLogger")("messenger_web_sharing").catching(a).mustfixThrow(k.failed_to_parse_json_for_xma_share)}e=g;var h=e.action_url,i=e.ctas,l=e.default_cta_title,n=e.favicon_url,o=e.header_image_url,p=e.header_title,q=e.image_url,r=e.preview_url,s=e.subtitle_text,t=e.title_text;e=e.xma_content_type;var u=e;e=(yield (j||(j=b("Promise"))).all([[(n==null?void 0:n.startsWith("ls"))===!0?null:n,"favicon"],[q,"image"],[r,"preview"],[o,"header_image"]].map(function(a){return d("MAWFetchXMABlob").fetchBlob({descriptionForLogging:"MAWFetchXMAData_"+a[1],url:a[0],xmaContentType:u}).then(function(a){return(a=a)!=null?a:void 0})}))["catch"](function(a){f.forEach(function(a){d("sendToSentQPLLogger").markSendToSentFail(a,"failed_to_fetch_blob_for_xma_share")});c("FBLogger")("messenger_web_sharing").catching(a).mustfix(k.failed_to_fetch_blob_for_xma_share);return[void 0,void 0,void 0,void 0]}));n=e[0];q=e[1];r=e[2];o=e[3];e=i;i=m(u);var v=e==null?void 0:e[0];h=d("MAWUnshimUrl").unshimUrl((h=(h=h)!=null?h:v==null?void 0:v.action_url)!=null?h:a);a=d("MAWUnshimUrl").unshimUrl((v==null?void 0:v.native_url)!=null&&(v==null?void 0:v.native_url)!==""?v==null?void 0:v.native_url:h);h={actionUrl:h,buttonType:d("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE.OPEN_NATIVE,nativeUrl:a,title:(v=l)!=null?v:void 0};return{ctas:e==null?void 0:e.map(function(a){return{actionUrl:d("MAWUnshimUrl").unshimUrl(a.action_url!=null&&a.action_url!==""?a.action_url:void 0),buttonType:d("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE.OPEN_NATIVE,nativeUrl:d("MAWUnshimUrl").unshimUrl(a.native_url!=null&&a.native_url!==""?a.native_url:void 0),title:(a=a.title)!=null?a:void 0}}),defaultCTA:h,favicon_blob:n,header_image_blob:o,header_title:(a=p)!=null?a:void 0,image_blob:q,linkType:"internal",preview_blob:r,subtitle_text:(l=s)!=null?l:void 0,title_text:(v=t)!=null?v:void 0,xma_message_type:i}});return o.apply(this,arguments)}function p(a,e){return d("CometRelay").fetchQuery(a,i!==void 0?i:i=b("MAWFetchXMAData_LinkPreviewQuery.graphql"),{maxPreviewHeight:c("gkx")("3978")?c("justknobx")._("1769"):void 0,maxPreviewWidth:c("gkx")("3978")?c("justknobx")._("1769"):void 0,url:e}).toPromise()}function a(a,b,c){return q.apply(this,arguments)}function q(){q=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b,e){b=d("ConstUriUtils").getUri(b);b=b==null?void 0:(b=b.setSubDomain("www"))==null?void 0:b.toString();if(b==null)return{linkType:"unknown"};e.forEach(function(a){d("sendToSentQPLLogger").markSendToSentPoint(a,"fetch_json_for_xma_share_start")});a=(yield p(a,b)["catch"](function(a){e.forEach(function(b){d("sendToSentQPLLogger").markSendToSentFail(b,"failed_to_fetch_json_for_xma_share",a)}),c("FBLogger")("messenger_web_sharing").catching(a).mustfix(k.failed_to_fetch_json_for_xma_share)}));e.forEach(function(a){d("sendToSentQPLLogger").markSendToSentPoint(a,"fetch_json_for_xma_share_end")});if(a==null){e.forEach(function(a){d("sendToSentQPLLogger").addSendToSentAnnotations(a,{string:{xma_data_result:"empty"}})});return{linkType:"unknown"}}a=a.post_reshare_xma;if(a==null){e.forEach(function(a){d("sendToSentQPLLogger").addSendToSentAnnotations(a,{string:{xma_data_result:"external"}})});return{linkType:"external"}}if(a==="private"){e.forEach(function(a){d("sendToSentQPLLogger").addSendToSentAnnotations(a,{string:{xma_data_result:"private"}})});return l(b)}e.forEach(function(a){d("sendToSentQPLLogger").addSendToSentAnnotations(a,{string:{xma_data_result:"public"}})});return n(b,a,e)});return q.apply(this,arguments)}function e(a,b){return r.apply(this,arguments)}function r(){r=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,c){var e=a.favicon_blob,f=a.header_image_blob,g=a.overlayIconGlyph;a=a.preview_blob;a=a==null?void 0:new File([a],"preview",{type:a.type});e=e==null?void 0:new File([e],"favicon",{type:e.type});f=f==null?void 0:new File([f],"header",{type:f.type});g=g===d("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.PRIVATE?(j||(j=b("Promise"))).resolve({height:2,width:2}):a!=null?d("MAWGetImageSpec").getImageSpec_DEPRECATED(a):(j||(j=b("Promise"))).resolve();var h=e!=null?d("MAWGetImageSpec").getImageSpec_DEPRECATED(e):(j||(j=b("Promise"))).resolve(),i=f!=null?d("MAWGetImageSpec").getImageSpec_DEPRECATED(f):(j||(j=b("Promise"))).resolve();g=(yield (j||(j=b("Promise"))).all([g,h,i]));h=g[0];i=g[1];g=g[2];d("sendToSentQPLLogger").markSendToSentPoint(c,"preview_favicon_spec_ready");c=a==null||h==null?void 0:{file:a,height:h.height,width:h.width};a=e==null||i==null?void 0:{file:e,height:i.height,width:i.width};h=f==null||g==null?void 0:{file:f,height:g.height,width:g.width};return{faviconFileArgs:a,headerImageFileArgs:h,previewFileArgs:c}});return r.apply(this,arguments)}g.XMA_DATA_ERRORS=k;g.fetchXMAData=a;g.makeXMAFileArgs=e}),226);
__d("MAWGetProtocolMsgIdByMsgIdInUI",["MAWBridgeSendAndReceive","cr:11152","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){return b("cr:11152")!=null&&c("gkx")("8564")?b("cr:11152").MAWGetProtocolMsgIdByMsgIdInUIIDB(a):h(a)};var h=function(a){return d("MAWBridgeSendAndReceive").sendAndReceive("backend","getProtocolMsgIdByMsgId",{msgId:a})};g.getProtocolMsgIdByMsgIdUI=a}),98);
__d("MAWMessageSendReporter",["FBLogger","MAWMessageSendReporterSideEffects","MAWReportSendMessageSuccessResult","MWLogSendToSentFailedError","QPLUserFlow","QuickPerformanceLogger","WAGetSafeQPLError","asyncToGeneratorRuntime","cr:12058","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b,c,d){return i.apply(this,arguments)}function i(){i=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b,e,f){var g=e.qplEventType;e=e.qplInstanceKey;try{b=(yield b);if(b==null)return;if(b.success)b.value!=null?d("MAWReportSendMessageSuccessResult").reportSendMessageSuccessResultFn(b.value):c("QPLUserFlow").addPoint(g,"no-op",{instanceKey:e}),c("QPLUserFlow").endSuccess(g,{instanceKey:e}),b.value!=null&&(yield d("MAWMessageSendReporterSideEffects").afterSendSideEffects(b.value));else{var i,k=b.error.isRetriable===!0;c("MWLogSendToSentFailedError")((h||(h=c("QuickPerformanceLogger"))).getMarker(g,e),b.error.type,void 0,b.error.errorCode,b.error.applicationErrorCode);c("QPLUserFlow").endFailure(g,b.error.type,{annotations:{bool:{isRetriable:(i=b.error.isRetriable)!=null?i:!1},"int":{errorCode:(i=b.error.errorCode)!=null?i:0},string:{details:(i=b.error.details)!=null?i:""}},instanceKey:e});j(a,k,f)}}catch(b){c("MWLogSendToSentFailedError")((h||(h=c("QuickPerformanceLogger"))).getMarker(g,e),"runtime-failure",b),c("QPLUserFlow").endFailure(g,"runtime-failure",{annotations:{string:{errorDescription:d("WAGetSafeQPLError").getSafeQPLErrorMessage(b)}},instanceKey:e}),j(a,!1,f,b),c("FBLogger")("messenger_e2ee_web").catching(b).mustfix("MAWMessageSendReporter")}});return i.apply(this,arguments)}function j(a,e,f,g){if(a==null)return;var h=a.chatJid;a=a.externalId;c("promiseDone")(b("cr:12058").markMessageSendAsFailed(a,h,d("WAGetSafeQPLError").getSafeQPLErrorMessage(g),f,e))}g.MAWMessageSendReporter=a}),98);
__d("MAWSecureComposerText",["Lexical","LexicalText","MAWJids","MessengerLexicalEntityTextNode"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return a.read(function(){var a=d("Lexical").$getRoot().getFirstChild();return a instanceof d("Lexical").ElementNode?a.getChildren().reduce(function(a,b){if(d("MessengerLexicalEntityTextNode").isMessengerLexicalEntityTextNode(b)){var c=b.getEntity();return a+("@"+d("MAWJids").toUserJid(c.id))}return a+b.getTextContent()},""):d("LexicalText").$rootTextContent()})}g.getTextFromEditorState=a}),98);
__d("MessengerIntent",["WebStorage","justknobx"],(function(a,b,c,d,e,f,g){"use strict";var h,i="mw_sent_message";function j(){return c("justknobx")._("1630")}function a(){(h||(h=c("WebStorage"))).setItemGuarded(h.getLocalStorage(),i,String(Date.now()))}function b(){var a=(h||(h=c("WebStorage"))).getLocalStorage();return Date.now()-Number(a==null?void 0:a.getItem(i))<j()}g.sentMessage=a;g.hasSentMessagesRecently=b}),98);
__d("MWLSLogSend",["CometHeroLogging","I64","MWChatInteraction","MWSharedMsgLogUtils","MessengerIntent"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b,e){var f=e.isCommunityEvent,g=e.isMessageRequest,i=e.source;e=e.threadType;var j=c("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(a.getTraceId());d("MWChatInteraction").set(b,j);j={entrypoint:d("MWSharedMsgLogUtils").getEntrypointAnnotation(i),is_community_event:f===!0?"true":"false",is_message_request:g===!0?"true":"false",thread_type:e==null?"unknown":(h||(h=d("I64"))).to_string(e)};Object.entries(j).forEach(function(b){var c=b[0];b=b[1];a.addMetadata(c,String(b))});d("MessengerIntent").sentMessage();return a.onComplete(function(){delete d("MWChatInteraction").interactions[b]})}g.logSentHeroInteraction=a}),98);
__d("ProfilePlusSwitchProfilesUnifiedShareSheetShareToPageQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6752145014808333"}),null);
__d("usePageEntryPointPrerenderer",["FBLogger","react","react-compiler-runtime","useCometEntryPointPrerendererWithQueryTimeoutPrivate"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");b.useCallback;var i=b.useState;function a(a,b,e){var f=d("react-compiler-runtime").c(6),g=i(),h=g[0],j=g[1];g=c("useCometEntryPointPrerendererWithQueryTimeoutPrivate")(a,b,e);var k=g[0];a=g[1];f[0]!==k?(b=function(a){var b=k();j(b);if(b==null){c("FBLogger")("comet_ui").blameToPreviousFrame().mustfix("Unable to present comet page EntryPoint component, preloadParams not set");return}b!=null&&a(b)},f[0]=k,f[1]=b):b=f[1];e=b;f[2]!==e||f[3]!==a||f[4]!==h?(g=[e,a,h],f[2]=e,f[3]=a,f[4]=h,f[5]=g):g=f[5];return g}g["default"]=a}),98);
__d("usePushPage",["BaseMultiPageEntryPointImpl.react","BaseMultiPageViewContext","FBLogger","react","react-compiler-runtime","useCometRelayEntrypointContextualEnvironmentProvider","usePageEntryPointPrerenderer"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useCallback;var j=b.useContext;function a(a,b,e){var f=d("react-compiler-runtime").c(9);e=e===void 0?"button":e;var g=c("useCometRelayEntrypointContextualEnvironmentProvider")(),h=j(c("BaseMultiPageViewContext"));e=c("usePageEntryPointPrerenderer")(a,b,e);var k=e[0];e=e[1];var l;f[0]!==h||f[1]!==g||f[2]!==k||f[3]!==a||f[4]!==b?(l=function(e,d){d=d===void 0?{}:d;var f=d.fallback,j=d.pageKey;if(h==null)throw c("FBLogger")("BaseMultiPageView").blameToPreviousFrame().mustfixThrow("usePushPage can only be used inside BaseMultiPageView.");if(b==null)return;k(function(d){return h.pushPage(function(){var j;return i.jsx(c("BaseMultiPageEntryPointImpl.react"),{entryPoint:a,environmentProvider:g,fallback:(j=f)!=null?j:h.fallback,loadedEntryPoint:d,otherProps:e,placeholderComponent:h.placeholderComponent,preloadParams:b})},{pageKey:j})})},f[0]=h,f[1]=g,f[2]=k,f[3]=a,f[4]=b,f[5]=l):l=f[5];l=l;var m;f[6]!==e||f[7]!==l?(m=[l,e],f[6]=e,f[7]=l,f[8]=m):m=f[8];return m}g["default"]=a}),98);