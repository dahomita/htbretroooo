;/*FB_PKG_DELIM*/

__d("Clipboard",["Promise","UserAgent"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(){return window.document&&window.document.queryCommandSupported instanceof Function&&window.document.queryCommandSupported("copy")&&!(c("UserAgent").isBrowser("Firefox < 41")||c("UserAgent").isPlatform("iOS < 10.3"))||c("UserAgent").isBrowser("Chrome >= 43")}function i(a,b){b=b||document.body;if(!b)return!1;var d=document.activeElement,e=!0,f=document.createElement("textarea");b.appendChild(f);f.value=a;if(c("UserAgent").isPlatform("iOS >= 10.3")){a=document.createRange();a.selectNodeContents(f);var g=window.getSelection();g.removeAllRanges();g.addRange(a);f.setSelectionRange(0,999999)}else f.select();try{e=document.execCommand("copy")}catch(a){e=!1}b.removeChild(f);d!=null&&d.focus();return e}function d(a){var b=window.getSelection(),c=null;b.rangeCount>0&&(c=b.getRangeAt(0));var d=document.createRange();d.selectNodeContents(a);b.removeAllRanges();b.addRange(d);try{document.execCommand("copy"),a=!0}catch(b){a=!1}b.removeAllRanges();c!==null&&b.addRange(c);return a}function e(a){var c=window.navigator;if(c&&c.clipboard&&typeof c.clipboard.writeText==="function")return c.clipboard.writeText(a);return i(a)?(h||(h=b("Promise"))).resolve():(h||(h=b("Promise"))).reject()}g.isSupported=a;g.copy=i;g.copyDOM=d;g.copyAsync=e}),98);
__d("FBNucleusCheckmarkCircleFilled20.svg.react",["XPlatReactSVG","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs(d("XPlatReactSVG").Svg,babelHelpers["extends"]({viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",title:a.title},a,{children:[a.children!=null&&i.jsx(d("XPlatReactSVG").Defs,{children:a.children}),i.jsx(d("XPlatReactSVG").Path,{d:"M.5 10a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0zm14.28-1.72a.75.75 0 0 0-1.06-1.06l-4.794 4.793a.25.25 0 0 1-.353 0L6.28 9.72a.75.75 0 1 0-1.06 1.061l2.292 2.292a1.75 1.75 0 0 0 2.475 0L14.78 8.28z"})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("FBReelsConstants",["fbt","CometLink.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i;a=i||c("react");b=9/16;d=50;e=900;f="reelsProfile";var j=56,k=800,l=h._("__JHASH__sDdVNM7hGE1__JHASH__"),m=h._("__JHASH__EG7UErgha-y__JHASH__"),n={aggregation_page:"aggregation_page",bookmark:"fb_shorts_bookmark",ifu:"native_in_feed_unit",notification:"notification",reshare_single_unit:"reshare_feed_unit",scoped_search:"scoped_search",single_unit:"creation_feed_unit",unified_tofu:"unified_tofu",url:"creation_feed_unit"};a=a.jsx(c("CometLink.react"),{color_DEPRECATED:"highlight",href:"/help/1633654236824653/?helpref=uf_share",target:"_blank",children:h._("__JHASH__O83M7Km16YB__JHASH__")});c=h._("__JHASH__iQ3aNKgB7Ds__JHASH__",[h._param("Help Center Link",a)]);h=h._("__JHASH__EXFY6pmPoxs__JHASH__",[h._param("Help Center Link",a)]);g.MEDIA_ASPECT_RATIO=b;g.MIN_VIEWER_HEIGHT=d;g.VIEWER_WIDTH_THRESHOLD=e;g.MESSENGER_WEB_ENTRYPOINT_TYPE=f;g.APP_HEADER_HEIGHT=j;g.WINDOW_HEIGHT_FOR_NON_OVERLAPPED_VIEWER_UFI=k;g.DISABLE_REMIX_TITLE=l;g.ENABLE_REMIX_TITLE=m;g.SOURCE_TO_REFERRAL_SOURCE=n;g.DISABLE_REMIX_BODY=c;g.ENABLE_REMIX_BODY=h}),226);
__d("FBReelsFeedConnectionIDContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={connectionID:""};c=a.createContext(b);g["default"]=c}),98);
__d("FBReelsFeedbackInstagramComments_comments.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FBReelsFeedbackInstagramComments_comments",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"share_fbid",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InstagramMediaV2",kind:"LinkedField",name:"ig_media",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"permalink",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null}],storageKey:null}],type:"XFBIGReelsFeedbackRenderer",abstractKey:null};e.exports=a}),null);
__d("FBReelsLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";a={ACTION_TYPE:{PAUSE_REEL:"pause_reel"},CLOSE_REELS_GESTURE:{BACK_BUTTON_EXIT:"back_button_exit",CLOSE_BUTTON_EXIT:"close_button_exit",KEYBOARD_EXIT:"keyboard_exit",UNKNOWN:"unknown"},INSTAGRAM_DEEPLINK_DESTINATION:{VIEWER:"viewer"},OPEN_SOURCE:{BOOKMARK:"bookmark",IFU:"ifu",IFU_END_CARD:"ifu_end_card",IFU_SEE_MORE:"ifu_see_more",NOTIFICATION:"notification",PERMALINK:"permalink",TOFU:"reels_tofu",UNKNOWN:"unknown"},OPEN_SOURCE_FOR_FALCO:{BOOKMARK:"bookmark",COMET_IN_FEED_UNIT:"comet_in_feed_unit",COMET_URL:"comet_url"},PLAYER_ORIGIN:{NEWS_FEED:"newsfeed"},SOURCE_SURFACE:{VIEWER:"fb_shorts_viewer"}};b=a;f["default"]=b}),66);
__d("useReelsLogger",["react","react-compiler-runtime","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h;(h||d("react")).useCallback;var i=c("requireDeferred")("FbShortsAggregationPageClickedFalcoEvent").__setRef("useReelsLogger"),j=c("requireDeferred")("FbShortsInstagramDeeplinkFalcoEvent").__setRef("useReelsLogger"),k=c("requireDeferred")("FbShortsSaveReelFalcoEvent").__setRef("useReelsLogger"),l=c("requireDeferred")("FbShortsSeeLessFalcoEvent").__setRef("useReelsLogger"),m=c("requireDeferred")("FbShortsUndoSeeLessFalcoEvent").__setRef("useReelsLogger"),n=c("requireDeferred")("FbShortsVideoDescriptionClickFalcoEvent").__setRef("useReelsLogger"),o=c("requireDeferred")("FbShortsViewerOpenFalcoEvent").__setRef("useReelsLogger"),p=c("requireDeferred")("SfvChainingNavigationExitFalcoEvent").__setRef("useReelsLogger"),q=c("requireDeferred")("ShortsFollowFalcoEvent").__setRef("useReelsLogger"),r=c("requireDeferred")("ShortsTapCreatorProfileFalcoEvent").__setRef("useReelsLogger"),s=c("requireDeferred")("ShortsUnfollowFalcoEvent").__setRef("useReelsLogger");function a(){var a=d("react-compiler-runtime").c(1),b=D,c=C,e=B,f=A,g=z,h=y,i=x,j=w,k=v,l=u,m=t;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(c={aggregationPageClickedLog:c,exitViewerLog:e,feedbackInstagramDeeplinkClickedLog:l,openViewerLog:h,saveReelLog:m,seeLessLog:f,shortsFollowLog:i,shortsUnfollowLog:j,tapCreatorProfileLog:b,undoSeeLessLog:g,videoDescriptionClickLog:k},a[0]=c):c=a[0];return c}function t(a){var b=a.client_page_position,c=a.savable_id,d=a.save_action_name,e=a.save_location,f=a.tracking,g=a.video_id,h=a.viewer_session_id;k.onReady(function(a){return a.log(function(){return{client_page_position:String(b),savable_id:c,save_action_name:d,save_location:e,tracking:f,video_id:g,viewer_session_id:h}})})}function u(a){var b=a.destination,c=a.entry,d=a.media_id,e=a.tracking;j.onReady(function(a){return a.log(function(){return{destination:b,entry:c,media_id:d,tracking_key:e}})})}function v(a){var b=a.client_page_position,c=a.tracking,d=a.video_id,e=a.viewer_session_id;n.onReady(function(a){return a.log(function(){return{client_page_position:String(b),tracking:c,video_id:d,viewer_session_id:e}})})}function w(a){var b=a.client_page_position,c=a.follow_location,d=a.followee_id,e=a.tracking;s.onReady(function(a){return a.log(function(){return{client_page_position:String(b),follow_location:c,followee_id:d,tracking:e}})})}function x(a){var b=a.client_page_position,c=a.follow_location,d=a.followee_id,e=a.suggestion_index,f=a.tracking;q.onReady(function(a){return a.log(function(){return{client_page_position:String(b),follow_location:c,followee_id:d,suggestion_index:e,tracking:f}})})}function y(a,b,c){o.onReady(function(d){return d.log(function(){return{referral_source:a,session_id:c,video_id:b}})})}function z(a){var b=a.client_page_position,c=a.creator_id,d=a.tracking,e=a.video_id,f=a.viewer_session_id;m.onReady(function(a){return a.log(function(){return{client_page_position:String(b),creator_id:c,tracking:d,video_id:e,viewer_session_id:f}})})}function A(a){var b=a.client_page_position,c=a.creator_id,d=a.tracking,e=a.video_id,f=a.viewer_session_id;l.onReady(function(a){return a.log(function(){return{client_page_position:String(b),creator_id:c,tracking:d,video_id:e,viewer_session_id:f}})})}function B(a,b,c,d){p.onReady(function(e){return e.log(function(){return{client_page_position:a.toString(),exit_method:b,tracking:c,video_id:d}})})}function C(a,b,c,d,e,f,g){i.onReady(function(h){return h.log(function(){return{aggregation_page_session_id:d,entity_id:a,entity_type:b,original_video_id:c,tracking:f,video_owner_type:g,viewer_session_id:e}})})}function D(a,b,c){r.onReady(function(d){return d.log(function(){return{client_page_position:"0",creator_id:a,tracking:b,video_id:c}})})}g["default"]=a}),98);
__d("FBReelsFeedbackInstagramComments.react",["fbt","ix","CometLink.react","CometRelay","FBReelsFeedbackInstagramComments_comments.graphql","FBReelsLoggingConstants","FDSButton.react","FDSCard.react","FDSText.react","FDSUnit.react","FDSUnitHeader.react","fbicon","react","react-compiler-runtime","useReelsLogger"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||d("react"),m="https://www.facebook.com/help/386221115984344/?helpref=uf_share";function a(a){var e,f=d("react-compiler-runtime").c(17);a=a.comments;var g=d("CometRelay").useFragment(j!==void 0?j:j=b("FBReelsFeedbackInstagramComments_comments.graphql"),a);a=c("useReelsLogger")();var k=a.feedbackInstagramDeeplinkClickedLog;a=g==null?void 0:(a=g.story)==null?void 0:(a=a.ig_media)==null?void 0:a.permalink;if(a==null)return null;if(f[0]!==(g==null?void 0:(e=g.story)==null?void 0:(e=e.feedback)==null?void 0:e.share_fbid)||f[1]!==(g==null?void 0:(e=g.story)==null?void 0:e.tracking)||f[2]!==k){var n;e=function(){var a;k({destination:c("FBReelsLoggingConstants").INSTAGRAM_DEEPLINK_DESTINATION.VIEWER,entry:"Comet",media_id:(a=g==null?void 0:(a=g.story)==null?void 0:(a=a.feedback)==null?void 0:a.share_fbid)!=null?a:"",tracking:(a=g==null?void 0:(a=g.story)==null?void 0:a.tracking)!=null?a:""})};f[0]=g==null?void 0:(n=g.story)==null?void 0:(n=n.feedback)==null?void 0:n.share_fbid;f[1]=g==null?void 0:(n=g.story)==null?void 0:n.tracking;f[2]=k;f[3]=e}else e=f[3];n=e;f[4]===Symbol["for"]("react.memo_cache_sentinel")?(e={className:"xw7yly9 xktsk01 x1yztbdb x1d52u69"},f[4]=e):e=f[4];var o;f[5]===Symbol["for"]("react.memo_cache_sentinel")?(o={className:"xyamay9 x1pi30zi x1l90r2v x1swvt13"},f[5]=o):o=f[5];var p;f[6]===Symbol["for"]("react.memo_cache_sentinel")?(p=l.jsx(c("FDSUnitHeader.react"),{headline:h._("__JHASH__-R0AQ0bhPxV__JHASH__"),level:3,paddingHorizontal:0,paddingTop:0}),f[6]=p):p=f[6];var q;f[7]===Symbol["for"]("react.memo_cache_sentinel")?(q=h._("__JHASH__vIAnIWaT2rJ__JHASH__"),f[7]=q):q=f[7];f[8]===Symbol["for"]("react.memo_cache_sentinel")?(p=l.jsx(c("FDSUnit.react"),{header:p,spacing:12,type:"transparent",children:l.jsxs(c("FDSText.react"),{type:"body3",children:[q," ",l.jsx(c("CometLink.react"),{href:m,target:"_blank",children:h._("__JHASH__ml5IFnYn3Yp__JHASH__")})]})}),f[8]=p):p=f[8];var r;f[9]===Symbol["for"]("react.memo_cache_sentinel")?(q=d("fbicon")._(i("547774"),16),r=h._("__JHASH__LTRMjnsj-9S__JHASH__"),f[9]=q,f[10]=r):(q=f[9],r=f[10]);var s;f[11]!==a?(s={target:"_blank",url:a},f[11]=a,f[12]=s):s=f[12];f[13]!==n||f[14]!==q||f[15]!==s?(a=l.jsx("div",babelHelpers["extends"]({},e,{children:l.jsx(c("FDSCard.react"),{background:"light-wash",children:l.jsxs("div",babelHelpers["extends"]({},o,{children:[p,l.jsx(c("FDSButton.react"),{icon:q,label:r,linkProps:s,onPress:n})]}))})})),f[13]=n,f[14]=q,f[15]=s,f[16]=a):a=f[16];return a}g["default"]=a}),226);
__d("FBReelsFeedbackInstagramComments_comments$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"FBReelsFeedbackInstagramComments_comments$normalization",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"share_fbid",storageKey:null},a],storageKey:null},{alias:null,args:null,concreteType:"InstagramMediaV2",kind:"LinkedField",name:"ig_media",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"permalink",storageKey:null},a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("FBReelsURLUtils",["ConstUriUtils","XCometFBReelControllerRouteBuilder","gkx"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b,d,e,f,g,h,i){b=(b=b)!=null?b:"UNKNOWN";var j="group_other",k=void 0;if(Boolean(e)){switch(d){case"group":case"group_mall":j="group";k=f==null?void 0:f;break;case"groups_tab":j="groups_tab";break;default:break}b=j}e={group_id:k,hide_next:h==null?void 0:h,page_id:i==null||i===""?void 0:i,s:b,stack_idx:g==null?void 0:g,video_id:a==null?void 0:a};return c("XCometFBReelControllerRouteBuilder").buildURL(e)}function a(a,b,c,e,f,g){a=h(a,b,c,e,f,g);if(i()){f=(b=d("ConstUriUtils").getUri(a))==null?void 0:(c=b.getQualifiedUri())==null?void 0:(e=c.setDomain("www.facebook.com"))==null?void 0:e.toString();if(f!=null)return f}return a}function b(a){return["fb_shorts_video_deep_dive","fb_shorts_profile_video_deep_dive"].includes(a)}function i(){return c("gkx")("21034")||c("gkx")("24206")}g.getReelsURL=h;g.getReelsAbsoluteURL=a;g.isReelsRenderLocationVDD=b;g.isBizSurface=i}),98);
__d("useFBReelsNewViewerLayout",["CometStoryRenderLocationContext.react","FBReelsGating","FBReelsURLUtils","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useContext;b.useMemo;function a(){var a=d("react-compiler-runtime").c(5),b=i(c("CometStoryRenderLocationContext.react")),e;a[0]!==b?(e=d("FBReelsURLUtils").isReelsRenderLocationVDD(b),a[0]=b,a[1]=e):e=a[1];b=e;a[2]===Symbol["for"]("react.memo_cache_sentinel")?(e=d("FBReelsGating").enableNewViewerPlacement(),a[2]=e):e=a[2];e=e;e=e;b=b&&e;a[3]!==b?(e=[b],a[3]=b,a[4]=e):e=a[4];return e}g["default"]=a}),98);
__d("ReelsCardHeaderGlimmer.react",["FDSGlimmer.react","react","react-compiler-runtime","useFBReelsNewViewerLayout"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={image:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x1vqgdyp",width:"x100vrsf",$$css:!0},subtitleGlimmer:{borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",height:"x1kpxq89",marginTop:"x1xmf6yo",width:"x9fslfs",$$css:!0},textGlimmer:{borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",height:"x1v9usgg",marginBottom:"xjpr12u",width:"x1l3jyfm",$$css:!0}};function a(){var a=d("react-compiler-runtime").c(2),b=c("useFBReelsNewViewerLayout")();b=b[0];var e;a[0]!==b?(e=b?i.jsxs("div",{children:[i.jsxs("div",babelHelpers["extends"]({className:"x78zum5 x1nhvcw1"},{children:[i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:j.image}),i.jsx("div",babelHelpers["extends"]({className:"x6s0dn4 x78zum5 x1iyjqo2 xr9ek0c x1emribx xjpr12u x1i64zmx"},{children:i.jsx("div",babelHelpers["extends"]({className:"x1iyjqo2"},{children:i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:j.textGlimmer})}))}))]})),i.jsx("div",babelHelpers["extends"]({className:"xcxhlts"},{children:i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:j.textGlimmer})})),i.jsx("div",babelHelpers["extends"]({className:"xcxhlts"},{children:i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:j.subtitleGlimmer})}))]}):i.jsxs("div",babelHelpers["extends"]({className:"x78zum5 x1nhvcw1"},{children:[i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:j.image}),i.jsx("div",babelHelpers["extends"]({className:"x6s0dn4 x78zum5 x1iyjqo2 xr9ek0c x1emribx xjpr12u x1i64zmx"},{children:i.jsxs("div",babelHelpers["extends"]({className:"x1iyjqo2"},{children:[i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:j.textGlimmer}),i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:j.subtitleGlimmer})]}))}))]})),a[0]=b,a[1]=e):e=a[1];return e}g["default"]=a}),98);
__d("FBReelsFeedbackRightRailGlimmer.react",["CometColumn.react","CometColumnItem.react","FDSGlimmer.react","ReelsCardHeaderGlimmer.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={textGlimmer:{borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",height:"x1v9usgg",width:"xh8yej3",$$css:!0}};function a(){var a=d("react-compiler-runtime").c(2),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=i.jsx(c("CometColumnItem.react"),{paddingTop:16,children:i.jsx(c("ReelsCardHeaderGlimmer.react"),{})}),a[0]=b):b=a[0];a[1]===Symbol["for"]("react.memo_cache_sentinel")?(b=i.jsxs(c("CometColumn.react"),{paddingHorizontal:16,spacing:12,children:[b,i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:j.textGlimmer})})]}),a[1]=b):b=a[1];return b}g["default"]=a}),98);
__d("FBReelsHideReelContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={addHiddenReel:function(a){},hiddenReels:null,lastHiddenReel:null,removeHiddenReel:function(a){}};c=a.createContext(b);g["default"]=c}),98);
__d("FBReelsNodeIndexContextProvider.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={index:0,nodesSize:0,numOfHiddenReel:0,setIndex:function(){}};c=a.createContext(b);g["default"]=c}),98);
__d("FBReelsViewerSessionIDContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={viewerSessionID:""};c=a.createContext(b);g["default"]=c}),98);
__d("copiedLinkPushToast",["fbt","FBNucleusCheckmarkCircleFilled20.svg.react","FDSIcon.react","cometPushToast","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(){d("cometPushToast").cometPushToast({icon:j.jsx(c("FDSIcon.react"),{color:"positive",icon:c("FBNucleusCheckmarkCircleFilled20.svg.react"),size:20}),message:h._("__JHASH__wd8epkaz0sz__JHASH__"),testid:"CometCopyLinkToast"},void 0)}g["default"]=a}),226);
__d("useCopyText",["Clipboard","DateConsts","clearTimeout","react","react-compiler-runtime","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");b.useCallback;var i=b.useRef,j=b.useState;function a(a){var b=d("react-compiler-runtime").c(7),e=a.onCopyPress,f=a.value;a=j(!1);var g=a[0],h=a[1],k=i(null);b[0]===Symbol["for"]("react.memo_cache_sentinel")?(a=d("Clipboard").isSupported(),b[0]=a):a=b[0];var l=a;b[1]!==e||b[2]!==f?(a=function(){e!=null&&e();if(l&&typeof f==="string"){var a=d("Clipboard").copy(f);a===!0&&(h(!0),c("clearTimeout")(k.current),k.current=c("setTimeout")(function(){h(!1)},.75*d("DateConsts").MS_PER_SEC))}},b[1]=e,b[2]=f,b[3]=a):a=b[3];a=a;var m;b[4]!==a||b[5]!==g?(m=[l,g,a],b[4]=a,b[5]=g,b[6]=m):m=b[6];return m}g["default"]=a}),98);