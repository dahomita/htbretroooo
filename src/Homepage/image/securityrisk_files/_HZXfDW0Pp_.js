;/*FB_PKG_DELIM*/

__d("CometStickerPickerCardConsts",[],(function(a,b,c,d,e,f){"use strict";a=["LAST_SELECTED_TAB","CUSTOM_PACK","SEARCH","RECENTLY_USED","AVATAR_PACK","STICKER_PACK"];f.TAB_PRIORITY_LIST_DEFAULT=a}),66);
__d("LSSetLoadingAfterOnMessageRanges",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.sortBy(b.db.table(13).fetch([[[a[0]]]]),[["maxTimestampMs","DESC"]]).next().then(function(a,c){var d=a.done;a=a.value;return d?0:(c=a.item,b.forEach(b.filter(b.db.table(13).fetch([[[c.threadKey,c.minTimestampMs,c.minMessageId]]]),function(a){return b.i64.eq(a.threadKey,c.threadKey)&&b.i64.eq(b.i64.cast([0,0]),b.i64.cast([0,0]))&&b.i64.eq(a.minTimestampMs,c.minTimestampMs)&&a.minMessageId===c.minMessageId}),function(a){var b=a.update;a.item;return b({isLoadingAfter:!0})}))})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSMailboxSetLoadingAfterOnMessageRangesStoredProcedure";a.__tables__=["messages_ranges_v2__generated"];e.exports=a}),null);
__d("LSReportThreadViewOpen",["LSIssueNewTaskWithExtraOperations","LSSetLoadingAfterOnMessageRanges"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(b){return c.db.table(9).fetch([[[a[0]]]]).next().then(function(a,b){var c=a.done;a=a.value;return c?(c=[void 0,void 0],d[0]=c[0],d[1]=c[1],c):(b=a.item,c=[b.syncGroup,b.threadType],d[0]=c[0],d[1]=c[1],c)})},function(a){return c.i64.neq(d[0],void 0)?c.sequence([function(a){return c.db.table(1).fetch([[[d[0]]]]).next().then(function(a,b){var c=a.done;a=a.value;return c?d[14]=void 0:(b=a.item,d[14]=b.syncParams)})},function(a){return d[3]=d[14]}]):c.resolve(d[3]=void 0)},function(b){return c.islc(c.db.table(12).fetch([[[a[0],c.i64.cast([0,80])]],"messageDisplayOrderAuthority"]),0,c.i64.to_float(c.i64.cast([0,1]))).next().then(function(a,b){var c=a.done;a=a.value;return c?d[4]=void 0:(b=a.item,d[4]=b.timestampMs)})},function(b){return c.db.table(294).fetch([[[a[0]]]]).next().then(function(a,b){var e=a.done;a=a.value;return e?(e=[!1,c.i64.cast([0,0]),void 0],d[6]=e[0],d[7]=e[1],d[8]=e[2],e):(b=a.item,e=[b.isStale,b.threadQueueSequenceId,b.lastSelectiveSyncTimestampMs],d[6]=e[0],d[7]=e[1],d[8]=e[2],e)})},function(a){return d[6]?d[10]=!0:d[10]=!1,c.i64.neq(d[8],void 0)?(c.i64.eq(d[1],c.i64.cast([0,152]))?d[14]=c.i64.cast([0,0]):d[14]=c.i64.cast([0,0]),d[15]=c.i64.of_float(Date.now()),c.resolve()):c.resolve()},function(e){return d[11]=new c.Map(),d[11].set("thread_key",a[0]),d[11].set("is_stale",d[10]),d[11].set("client_seq_id",d[7]),d[11].set("sync_params_encoded",d[3]),d[11].set("client_last_sync_timestamp_ms",d[8]),d[11].set("sync_group",d[0]),d[11].set("last_message_timestamp_ms",d[4]),d[12]=d[11].get("thread_key"),d[13]=c.toJSON(d[11]),c.storedProcedure(b("LSIssueNewTaskWithExtraOperations"),["report_thread_view_open","_",c.i64.to_string(d[12])].join(""),c.i64.cast([0,605]),d[13],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,c.i64.cast([0,0]),void 0,c.i64.cast([0,0]))}])},function(a){return c.resolve(e)}])}a.__sproc_name__="LSMailboxReportThreadViewOpenStoredProcedure";a.__tables__=["threads","sync_groups","messages","community_thread_sync_info"];e.exports=a}),null);
__d("LSReportThreadViewOpenStoredProcedure",["LSReportThreadViewOpen","LSSynchronousPromise","Promise","cr:8709"],(function(a,b,c,d,e,f,g){var h;function a(a,e){a=a.storedProcedure(c("LSReportThreadViewOpen"),e.threadKey);return(h||(h=b("Promise"))).resolve(d("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(a))}g["default"]=a}),98);
__d("LSThreadPointQueryTTRCStatus",[],(function(a,b,c,d,e,f){a=Object.freeze({COMPLETED:1,SKIPPED:2});f["default"]=a}),66);
__d("MAWFetchEBDeanonMessagesMetadata",["DateConsts","EBFormatUtils","FBLogger","I64","MAWEBDeanonFetch","MAWMessagesDirection","Promise","WAResultOrError"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=100,k="timeout",l=10*d("DateConsts").MS_PER_SEC;function a(a){var e=a.chatJid,f=a.direction,g=a.includeReferenceTimestamp,m=a.logger,n=a.range;a=a.sortFn;c("FBLogger")("messenger_web_product").info("EBMessageRangeDataSource: Issuing fetch request to EB Deanon API");m==null?void 0:m.markQPLPoint("eb_fetch_deanon_start");var o=d("MAWMessagesDirection").translateDirectionForEB(f);f=(i||(i=d("I64"))).to_float(d("EBFormatUtils").adjustTs(d("MAWMessagesDirection").getI64RangeTimestampForDirection(f,n),o));return(h||(h=b("Promise"))).race([d("MAWEBDeanonFetch").fetchMessagesMetadataFromEBDeanon({chatJid:e,count:j,direction:o,includeReferenceTimestamp:g,referenceTimestampMs:f,sortFn:a}),new h(function(a){return window.setTimeout(function(){return a(d("WAResultOrError").makeError(k))},l)})]).then(function(a){m==null?void 0:m.markQPLPoint("eb_fetch_deanon_end");return a})}g.fetchEBDeanonMessagesMetadata=a}),98);
__d("MLv2LoggingUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a){return"["+a.map(function(a){return"{"+a.externalId+", "+a.sortOrderMs+"}"}).join(", ")+"]"}f.getLogStrForMsgsMetadata=a}),66);
__d("MAWFetchDeanonMetadataUsingCache",["I64","MAWFetchEBDeanonMessagesMetadata","MAWMessagesCompare","MAWMessagesDirection","MLv2LoggingUtils","WAJids","WAResultOrError","WATagsLogger","asyncToGeneratorRuntime","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h;function i(){var a=babelHelpers.taggedTemplateLiteralLoose(["[","] Not using the LS cache for the first\n        page despite LS INIT de-anon being enabled:\n        adjustedPageSize ",",\n        minTimestamp ",",\n        LS cache metadata ",",\n        cachedMsgsMetadata ",""]);i=function(){return a};return a}function j(){var a=babelHelpers.taggedTemplateLiteralLoose(["[","] Empty LS cache for the first page\n        despite LS INIT de-anon being enabled"]);j=function(){return a};return a}function k(){var a=babelHelpers.taggedTemplateLiteralLoose(["Using cached Deanon messages metadata for comparison\n        to local data"]);k=function(){return a};return a}function l(){var a=babelHelpers.taggedTemplateLiteralLoose(["[","] Empty LS cache for the first page"]);l=function(){return a};return a}function m(){var a=babelHelpers.taggedTemplateLiteralLoose(["[","] Thread LS cache exists"]);m=function(){return a};return a}var n="desc",o=c("gkx")("4805"),p=d("WATagsLogger").TAGS(["MAWFetchDeanonMetadataUsingCache"]),q=new Map(),r=new Map();function a(a){return s.apply(this,arguments)}function s(){s=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){var b=a.chatJid,c=a.direction,e=a.isFirstPage,f=a.logger,g=a.pageSize,n=a.range;a=a.sortFn;var q=x(b,c),r=g;e?q!=null?p.LOG(m(),b):p.LOG(l(),b):r=g+1;g=t(b,c,f,n);if(g!=null){f==null?void 0:f.addQPLAnnotations({bool:{is_first_page:e},"int":{deanon_cached_data_size:g==null?void 0:g.length}});var s=g.length>=r;if(s){p.LOG(k());f==null?void 0:f.addQPLAnnotations({bool:{is_deanon_cached_data_used:!0}});return d("WAResultOrError").makeResult(g)}else e&&o&&(q==null?p.WARN(j(),b):p.WARN(i(),b,r,(h||(h=d("I64"))).to_string(q.minTimestampMs),d("MLv2LoggingUtils").getLogStrForMsgsMetadata(q.msgsMetadata),d("MLv2LoggingUtils").getLogStrForMsgsMetadata(g)))}s=(yield d("MAWFetchEBDeanonMessagesMetadata").fetchEBDeanonMessagesMetadata({chatJid:b,direction:c,includeReferenceTimestamp:!e,logger:f,range:n,sortFn:a}));s.success===!0&&(f==null?void 0:f.addQPLAnnotations({bool:{is_deanon_data_fetched:!0}}),w(b,c,f,s.value,n));return s});return s.apply(this,arguments)}function t(a,b,c,e){c==null?void 0:c.markQPLPoint("deanon_cache_fetch_start");u(a,b);a=(a=q.get(a))==null?void 0:a.get(b);if(a==null)return null;var f=d("MAWMessagesDirection").getI64RangeTimestampForDirection(b,e);e=(h||(h=d("I64"))).ge(f,a.minTimestampMs)&&(h||(h=d("I64"))).le(f,a.maxTimestampMs);if(!e)return null;e=d("MAWMessagesDirection").switchOnMWPMessagesDirection(b,{asc:a.msgsMetadata.findIndex(function(a){return(h||(h=d("I64"))).ge(h.of_float(a.sortOrderMs),f)}),desc:a.msgsMetadata.findIndex(function(a){return(h||(h=d("I64"))).le(h.of_float(a.sortOrderMs),f)})});b=a.msgsMetadata.slice(e);c==null?void 0:c.markQPLPoint("deanon_cache_fetch_end");return b}function u(a,b){var c=x(a,b);if(c==null)return;v(a,b,c.msgsMetadata,{max:(h||(h=d("I64"))).max_int,min:c.minTimestampMs});b=d("WAJids").threadIdForChatJid(a);r["delete"](b)}function v(a,b,c,d){var e;e=(e=q.get(a))!=null?e:new Map();e.set(b,{maxTimestampMs:d.max,minTimestampMs:d.min,msgsMetadata:c});q.set(a,e)}function w(a,b,c,e,f){if(e.length===0)return;c==null?void 0:c.markQPLPoint("deanon_cache_replace_start");var g=(h||(h=d("I64"))).of_float(e[e.length-1].sortOrderMs);f=d("MAWMessagesDirection").switchOnMWPMessagesDirection(b,{asc:{max:g,min:f.maxTimestampMs},desc:{max:f.minTimestampMs,min:g}});v(a,b,e,f);c==null?void 0:c.markQPLPoint("deanon_cache_replace_end")}function e(a,b){if(b.length===0)return;b=b.sort(d("MAWMessagesCompare").getSortComparisonFunctionForDirection(n));var c=(h||(h=d("I64"))).of_float(b[b.length-1].sortOrderMs);r.set(h.to_string(a),{minTimestampMs:c,msgsMetadata:b})}function x(a,b){if(!(o&&b===n))return null;b=d("WAJids").threadIdForChatJid(a);return r.get(b)}g.MAWFetchDeanonMetadataUsingCache=a;g.initDeanonCacheDescForThread=e}),98);
__d("MWGetInboxNavigateQPLEventTrace",["I64","InteractionTracing","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b){var e=c("qpl")._(29818882,"2410"),f=c("InteractionTracing").getPendingInteractions();for(var f=f,g=Array.isArray(f),i=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var j,k;if(g){if(i>=f.length)break;k=f[i++]}else{i=f.next();if(i.done)break;k=i.value}k=k;if(((j=k.getTrace())==null?void 0:j.qplEvent)===e){((j=k.getTrace())==null?void 0:(j=j.annotations.string)==null?void 0:j.thread_id)===(h||(h=d("I64"))).to_string(a)&&b(k)}}}g["default"]=a}),98);
__d("MWBlockedComposerLogging",["$InternalEnum","Int64Hooks","MWGetChatTabOpenQPLEventTrace","MWGetInboxNavigateQPLEventTrace","MWLSThreadDisplayContext","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h=b("$InternalEnum")({USER_BLOCKED_CANNOT_MESSAGE:"user_blocked_cannot_message",USER_BLOCKED_CANNOT_REPLY:"user_blocked_cannot_reply",USER_RESTRICTED:"user_restricted",GAMING_GAME_BOT:"gaming_game_bot",GAMING_GET_STARTED_CTA:"gaming_get_started_cta",FEATURE_LIMITED_TO_READONLY:"feature_limited_to_readonly",PAGE_THREAD_DISABLED:"page_thread_disabled",USER_BLOCKED:"user_blocked",USER_UNREACHABLE:"user_unreachable",ARMADILLO_THREAD_ALREADY_CUTOVER:"thread_already_cutover",ARMADILLO_GROUP_THREAD_CUTOVER:"cutover_group_thread",ARMADILLO_DEFAULT_E2EE_ONE_TO_ONE_BLOCK:"default_e2ee_one_to_one_block",ARMADILLO_RECEIVER_NON_ADDRESSABLE_ON_WA:"receiver_non_addressable_on_wa",ARMADILLO_DUAL_THREAD_CUTOVER:"dual_thread_cutover",NOT_BLOCKED:"not_blocked",ON_DEMAND_CUTOVER:"on_demand_cutover"});function i(a,b){var c=a.getTrace();c=[].concat((c=c==null?void 0:(c=c.annotations.string_array)==null?void 0:c.blockedReasons)!=null?c:[],[b]);a.addAnnotationStringArray("blockedReasons",c);a.addMarkerPoint("composer_blocked_start","AppTiming")}function a(a,b){var e=d("react-compiler-runtime").c(7),f=d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(),g;e[0]!==b||e[1]!==a?(g=function(){if(a==null||b===h.NOT_BLOCKED)return;c("MWGetChatTabOpenQPLEventTrace")(a,function(a){i(a,b)});c("MWGetInboxNavigateQPLEventTrace")(a,function(a){i(a,b)});return function(){c("MWGetChatTabOpenQPLEventTrace")(a,k),c("MWGetInboxNavigateQPLEventTrace")(a,j)}},e[0]=b,e[1]=a,e[2]=g):g=e[2];var l;e[3]!==f||e[4]!==b||e[5]!==a?(l=[f,b,a],e[3]=f,e[4]=b,e[5]=a,e[6]=l):l=e[6];d("Int64Hooks").useEffectInt64(g,l)}function j(a){a.addMarkerPoint("composer_blocked_end","AppTiming")}function k(a){a.addMarkerPoint("composer_blocked_end","AppTiming")}g.ComposerBlockingReason=h;g.useLogMWBlockedComposerReason=a}),98);
__d("MWCMSelectiveSyncTTRCQPLLoggingUtils",["I64","QPLUserFlow","ReQL","ReQLSuspense","qpl","react-compiler-runtime","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=c("qpl")._(25310806,"1365");function a(a){var b,e=(i||(i=c("useReStore")))();b=(b=d("ReQLSuspense").useArray(function(){return d("ReQL").fromTableAscending(e.tables.messages.index("messageDisplayOrder")).getKeyRange(a).take(20)},[e,a],f.id+":35"))!=null?b:[];return b}function b(a){var b=d("react-compiler-runtime").c(6),e=(i||(i=c("useReStore")))(),g;b[0]!==e.tables.thread_point_query_ttrc||b[1]!==a?(g=function(){return d("ReQL").fromTableAscending(e.tables.thread_point_query_ttrc).getKeyRange(a)},b[0]=e.tables.thread_point_query_ttrc,b[1]=a,b[2]=g):g=b[2];var h;b[3]!==e||b[4]!==a?(h=[e,a],b[3]=e,b[4]=a,b[5]=h):h=b[5];b=d("ReQLSuspense").useFirst(g,h,f.id+":48");if(b!=null)return b}function e(a,b,d){c("QPLUserFlow").endSuccess(j,{annotations:{string:{hasMessageDataChanged:b,status:"completed"}},instanceKey:a,timestamp:(b=d)!=null?b:void 0})}function k(a,b,e,f){c("QPLUserFlow").start(j,{annotations:{string:{thread_id:(h||(h=d("I64"))).to_string(b),thread_subtype:f?(h||(h=d("I64"))).to_string(f):null,thread_type:h.to_string(e)}},instanceKey:a})}function l(a,b){c("QPLUserFlow").addPoint(j,b,{instanceKey:a})}function m(a){c("QPLUserFlow").addPoint(j,"selective_sync_remediation_end",{instanceKey:a}),c("QPLUserFlow").endSuccess(j,{annotations:{string:{status:"skipped"}},instanceKey:a})}function n(a,b){return a.length!==b.length?!1:!a.some(function(a,c){c=b[c];c.text;c=babelHelpers.objectWithoutPropertiesLoose(c,["text"]);a.text;a=babelHelpers.objectWithoutPropertiesLoose(a,["text"]);if(JSON.stringify(c)!==JSON.stringify(a))return!0})}g.useLast20Messages=a;g.useTPQEntry=b;g.logCompleteEndSuccess=e;g.logEventStreamStart=k;g.logPoint=l;g.logSkippedEndSuccess=m;g.isMessageDataUnchanged=n}),98);
__d("MWChatTypingIndicator.react",["MessengerWebUXLogger","react","react-compiler-runtime","react-strict-dom"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={dot:{alignItems:"x6s0dn4",animationDuration:"xmg6eyc",animationIterationCount:"xa4qsjk",animationName:"xwnhzmj",animationTimingFunction:"x4hg4is",backgroundColor:"x1iuwi03",borderTopStartRadius:"xm3z3ea",borderTopEndRadius:"x1x8b98j",borderBottomEndRadius:"x131883w",borderBottomStartRadius:"x16mih1h",display:"x78zum5",height:"xqu0tyb",marginStart:"xgzva0m",marginEnd:"xhhsvwb",marginLeft:null,marginRight:null,width:"x51ohtg",$$css:!0},dot1:{animationDelay:"x1t83zlg",$$css:!0},dot1Opacity:{animationDelay:"x1uzojwf",$$css:!0},dot2:{animationDelay:"x1x1c4bx",$$css:!0},dot2Opacity:{animationDelay:"xfjzax6",$$css:!0},dot3:{animationDelay:"x1xwhvez",$$css:!0},dot3Opacity:{animationDelay:"x1la68h3",$$css:!0},dotOpacity:{animationDuration:"xmg6eyc",animationIterationCount:"xa4qsjk",animationName:"x1bcwpiy",animationTimingFunction:"x4hg4is",opacity:"x1hc1fzr",$$css:!0},root:{alignItems:"x6s0dn4",display:"x78zum5",height:"x1ta3ar0",$$css:!0}};function a(a){var b=d("react-compiler-runtime").c(10);a=a.threadType;var e;b[0]!==a?(e={eventName:"show_typing_indicators",threadType:a},b[0]=a,b[1]=e):e=b[1];a=c("MessengerWebUXLogger").useImpressionLoggerRef(e);b[2]===Symbol["for"]("react.memo_cache_sentinel")?(e=[j.dotOpacity,j.dot1Opacity],b[2]=e):e=b[2];b[3]===Symbol["for"]("react.memo_cache_sentinel")?(e=i.jsx(d("react-strict-dom").html.div,{style:e,children:i.jsx(d("react-strict-dom").html.div,{style:[j.dot,j.dot1]})}),b[3]=e):e=b[3];var f;b[4]===Symbol["for"]("react.memo_cache_sentinel")?(f=[j.dotOpacity,j.dot2Opacity],b[4]=f):f=b[4];b[5]===Symbol["for"]("react.memo_cache_sentinel")?(f=i.jsx(d("react-strict-dom").html.div,{style:f,children:i.jsx(d("react-strict-dom").html.div,{style:[j.dot,j.dot2]})}),b[5]=f):f=b[5];var g;b[6]===Symbol["for"]("react.memo_cache_sentinel")?(g=[j.dotOpacity,j.dot3Opacity],b[6]=g):g=b[6];b[7]===Symbol["for"]("react.memo_cache_sentinel")?(g=i.jsx(d("react-strict-dom").html.div,{style:g,children:i.jsx(d("react-strict-dom").html.div,{style:[j.dot,j.dot3]})}),b[7]=g):g=b[7];b[8]!==a?(e=i.jsxs(d("react-strict-dom").html.div,{ref:a,style:j.root,children:[e,f,g]}),b[8]=a,b[9]=e):e=b[9];return e}g["default"]=a}),98);
__d("MWGroupPollLoggerDeferred",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("MWGroupPollLogger").__setRef("MWGroupPollLoggerDeferred");function a(a,b){h.onReady(function(c){return c.log(a,b)})}g.log=a}),98);
__d("MWGroupPollQPL",["I64","QPLUserFlow","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h,i=c("qpl")._(25301969,"2041"),j=c("qpl")._(25301816,"2042"),k=function(a){return function(b){return c("QPLUserFlow").start(a,{annotations:{"int":{thread_type:(h||(h=d("I64"))).to_int32(b)}}})}},l=k(i);function a(){c("QPLUserFlow").endCancel(i)}function b(){c("QPLUserFlow").endSuccess(i)}function e(){c("QPLUserFlow").endFailure(i,"failure")}function f(){c("QPLUserFlow").addPoint(i,"on_click_create_poll")}k=k(j);function m(){c("QPLUserFlow").endCancel(j)}function n(){c("QPLUserFlow").endSuccess(j)}function o(){c("QPLUserFlow").endFailure(j,"failure")}function p(a,b){c("QPLUserFlow").addPoint(j,"on_click_update_poll",{data:{bool:{hasNewOptionsAdded:a,hasVotesChanged:b}}})}g.logCreatePollStart=l;g.logCreatePollCancel=a;g.logCreatePollSuccess=b;g.logCreatePollFail=e;g.logCreatePollConfirmClick=f;g.logUpdatePollStart=k;g.logUpdatePollCancel=m;g.logUpdatePollSuccess=n;g.logUpdatePollFail=o;g.logOnUpdatePollConfirmClick=p}),98);
__d("MWMessageRequestSharedTexts.react",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){return h._("__JHASH__U0QsQTXo_Q6__JHASH__",[h._param("FBFullName",a)])}function b(a){return h._("__JHASH__JiGe47KEv0o__JHASH__",[h._param("FBFullName",a)])}function c(a){return h._("__JHASH__Wrmwnynng2F__JHASH__",[h._param("name",a)])}function d(a){return h._("__JHASH__9ycmorSoeEo__JHASH__",[h._param("FBShortName",a)])}function e(){return h._("__JHASH__tRheqFvQPs3__JHASH__")}function f(){return h._("__JHASH__DXrX-aIvzqd__JHASH__")}g.getFBUserInfoTextMessage=a;g.getFBUserInfoTextMessageForMSplit=b;g.getDefaultInfoTextFooter=c;g.getDeclineUserDialogText=d;g.getMessageRequestHeaderInfoText=e;g.getMessageRequestHeaderTitleText=f}),226);
__d("MWXComposerBanner.react",["CometAccessibilityAnnouncement.react","MWXButton.react","MWXColumn.react","MWXColumnItem.react","MWXGlimmer.react","MWXRow.react","MWXRowItem.react","MWXTextPairing.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={banner:{paddingBottom:"xjkvuk6",$$css:!0},block:{paddingBottom:"x1l90r2v",$$css:!0},button:{maxWidth:"x1va8c73",$$css:!0},composerRow:{marginBottom:"xmgb6t1",$$css:!0},container:{alignSelf:"xkh2ocl",backgroundColor:"x57kliw",borderTopColor:"x1epquy7",borderTopStyle:"x13fuv20",borderTopWidth:"x178xt8z",$$css:!0},glimmerButton:{borderTopStartRadius:"x1z11no5",borderTopEndRadius:"xjy5m1g",borderBottomEndRadius:"x1mnwbp6",borderBottomStartRadius:"x4pb5v6",height:"xxk0z11",marginTop:"x1xmf6yo",marginEnd:"xfs2ol5",marginBottom:"xjpr12u",marginStart:"x8182xy",width:"xvy4d1p",$$css:!0},glimmerButtonEmoji:{marginTop:"x1xmf6yo",marginEnd:"xwrv7xz",marginBottom:"xjpr12u",marginStart:"x12mruv9",$$css:!0},glimmerComposer:{borderTopStartRadius:"x107yiy2",borderTopEndRadius:"xv8uw2v",borderBottomEndRadius:"x1tfwpuw",borderBottomStartRadius:"x2g32xy",height:"xc9qbxq",marginTop:"xr9ek0c",marginEnd:"xwrv7xz",marginBottom:"xmgb6t1",marginStart:"x1mh8g0r",width:"xh8yej3",$$css:!0},loading:{borderTopWidth:"x972fbf",$$css:!0}};b=i.forwardRef(a);function a(a,b){var e=d("react-compiler-runtime").c(19),f=a.assertive,g=a.bodyText,h=a.buttons,l=a.headerText,m=a.loading,n=a.testid;a=a.variant;f=f===void 0?!1:f;m=m===void 0?!1:m;a=a===void 0?"block":a;var o=a==="banner"&&j.banner;a=a==="block"&&j.block;var p=m&&j.loading,q;e[0]!==o||e[1]!==a||e[2]!==p?(q=[j.container,o,a,p],e[0]=o,e[1]=a,e[2]=p,e[3]=q):q=e[3];e[4]!==m?(o=m===!0?i.jsx(c("MWXColumnItem.react"),{paddingVertical:0,children:i.jsxs(c("MWXRow.react"),{paddingHorizontal:0,paddingVertical:0,children:[i.jsx(c("MWXRowItem.react"),{children:i.jsx(c("MWXGlimmer.react"),{index:0,xstyle:j.glimmerButton})}),i.jsx(c("MWXRowItem.react"),{children:i.jsx(c("MWXGlimmer.react"),{index:0,xstyle:j.glimmerButton})}),i.jsx(c("MWXRowItem.react"),{children:i.jsx(c("MWXGlimmer.react"),{index:0,xstyle:j.glimmerButton})}),i.jsx(c("MWXRowItem.react"),{children:i.jsx(c("MWXGlimmer.react"),{index:0,xstyle:j.glimmerButton})}),i.jsx(c("MWXRowItem.react"),{expanding:!0,xstyle:j.composerRow,children:i.jsx(c("MWXGlimmer.react"),{index:0,xstyle:j.glimmerComposer})}),i.jsx(c("MWXRowItem.react"),{children:i.jsx(c("MWXGlimmer.react"),{index:0,xstyle:[j.glimmerButton,j.glimmerButtonEmoji]})})]})}):null,e[4]=m,e[5]=o):o=e[5];e[6]!==f||e[7]!==g||e[8]!==l?(a=l!=null||g!=null?i.jsx(c("MWXColumnItem.react"),{children:i.jsx(c("CometAccessibilityAnnouncement.react"),{assertive:f,isVisible:!0,children:i.jsx(c("MWXRow.react"),{paddingHorizontal:0,paddingVertical:0,verticalAlign:"center",children:i.jsx(c("MWXRowItem.react"),{expanding:!0,children:i.jsx(c("MWXTextPairing.react"),{headline:l,level:4,meta:g,textAlign:"center"})})})})}):null,e[6]=f,e[7]=g,e[8]=l,e[9]=a):a=e[9];e[10]!==h?(p=h?i.jsx(c("MWXRow.react"),{align:"center",spacing:8,children:Array.isArray(h)?h.map(k):i.jsx(c("MWXRowItem.react"),{expanding:!0,xstyle:j.button,children:h},"button")}):null,e[10]=h,e[11]=p):p=e[11];e[12]!==b||e[13]!==p||e[14]!==q||e[15]!==o||e[16]!==a||e[17]!==n?(m=i.jsxs(c("MWXColumn.react"),{paddingHorizontal:16,paddingVertical:16,ref:b,spacing:20,testid:void 0,xstyle:q,children:[o,a,p]}),e[12]=b,e[13]=p,e[14]=q,e[15]=o,e[16]=a,e[17]=n,e[18]=m):m=e[18];return m}function k(a,b){return i.jsx(c("MWXRowItem.react"),{expanding:!0,xstyle:j.button,children:i.jsx(c("MWXButton.react"),babelHelpers["extends"]({type:"secondary"},a))},b)}k.displayName=k.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("SelectiveSyncTTRCLogger.react",["CometPlaceholder.react","I64","Int64Hooks","LSIntEnum","LSThreadPointQueryTTRCStatus","MWCMSelectiveSyncTTRCQPLLoggingUtils","Random","ReQL","ReQLSuspense","areEqual","react","react-compiler-runtime","useReStore","vulture"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k,l,m=l||(l=d("react")),n=l.useRef;function o(a){var b=d("react-compiler-runtime").c(40),e=a.instanceKey,g=a.isReportThreadViewOpenSprocCalled,l=a.reportThreadViewOpenCalledTimestamp,m=a.setInstanceKey,o=a.threadKey,p=a.threadSubtype,q=a.threadType;c("vulture")("3Nu1pGzAtmW");var r=n(!1);a=(h||(h=c("useReStore")))();var s;b[0]!==a.tables.messages||b[1]!==o?(s=d("ReQLSuspense").toArray(d("ReQL").fromTableDescending(a.tables.messages.index("messageDisplayOrder")).getKeyRange(o).take(20),f.id+":58"),b[0]=a.tables.messages,b[1]=o,b[2]=s):s=b[2];var t=s;b[3]!==a.tables.reactions||b[4]!==o?(s=d("ReQLSuspense").toArray(d("ReQL").fromTableDescending(a.tables.reactions).getKeyRange(o).take(20),f.id+":63"),b[3]=a.tables.reactions,b[4]=o,b[5]=s):s=b[5];var u=s;b[6]!==a.tables.reactions_v2||b[7]!==o?(s=d("ReQLSuspense").toArray(d("ReQL").fromTableDescending(a.tables.reactions_v2).getKeyRange(o).take(20),f.id+":66"),b[6]=a.tables.reactions_v2,b[7]=o,b[8]=s):s=b[8];var v=s;b[9]!==e||b[10]!==g||b[11]!==o||b[12]!==p||b[13]!==q?(a=function(){g===!1&&(r.current=!0,d("MWCMSelectiveSyncTTRCQPLLoggingUtils").logEventStreamStart(e,o,q,p))},b[9]=e,b[10]=g,b[11]=o,b[12]=p,b[13]=q,b[14]=a):a=b[14];b[15]!==e||b[16]!==g||b[17]!==l||b[18]!==o||b[19]!==p||b[20]!==q?(s=[e,g,l,o,p,q],b[15]=e,b[16]=g,b[17]=l,b[18]=o,b[19]=p,b[20]=q,b[21]=s):s=b[21];d("Int64Hooks").useEffectInt64(a,s);var w=n(t),x=n(u),y=n(v),z=d("MWCMSelectiveSyncTTRCQPLLoggingUtils").useTPQEntry(o);b[22]!==e||b[23]!==t||b[24]!==u||b[25]!==v||b[26]!==l||b[27]!==m||b[28]!==(z==null?void 0:z.dasmExecutionTimestampMs)||b[29]!==(z==null?void 0:z.deltaInsertionTimestampMs)||b[30]!==(z==null?void 0:z.status)?(a=function(){var a=z==null?void 0:z.status,b=z==null?void 0:z.deltaInsertionTimestampMs,f=z==null?void 0:z.dasmExecutionTimestampMs;if(r.current===!0&&l!==0)if(a&&(j||(j=d("I64"))).equal(a,(k||(k=d("LSIntEnum"))).ofNumber(c("LSThreadPointQueryTTRCStatus").SKIPPED)))d("MWCMSelectiveSyncTTRCQPLLoggingUtils").logSkippedEndSuccess(e),r.current=!1,m(c("Random").uint32());else if(a!=null&&(j||(j=d("I64"))).equal(a,(k||(k=d("LSIntEnum"))).ofNumber(c("LSThreadPointQueryTTRCStatus").COMPLETED))&&b!=null&&(j||(j=d("I64"))).to_float(b)>l){d("MWCMSelectiveSyncTTRCQPLLoggingUtils").logPoint(e,"selective_sync_remediation_end");a=!d("MWCMSelectiveSyncTTRCQPLLoggingUtils").isMessageDataUnchanged(w.current,t);var g=!(i||(i=c("areEqual")))(x.current,u),h=!i(y.current,v);a||g||h?d("MWCMSelectiveSyncTTRCQPLLoggingUtils").logCompleteEndSuccess(e,"true",f!=null?(j||(j=d("I64"))).to_float(f):void 0):d("MWCMSelectiveSyncTTRCQPLLoggingUtils").logCompleteEndSuccess(e,"false",b!=null?(j||(j=d("I64"))).to_float(b):void 0);w.current=t;x.current=u;y.current=v;r.current=!1;m(c("Random").uint32())}},b[22]=e,b[23]=t,b[24]=u,b[25]=v,b[26]=l,b[27]=m,b[28]=z==null?void 0:z.dasmExecutionTimestampMs,b[29]=z==null?void 0:z.deltaInsertionTimestampMs,b[30]=z==null?void 0:z.status,b[31]=a):a=b[31];b[32]!==e||b[33]!==t||b[34]!==u||b[35]!==v||b[36]!==l||b[37]!==m||b[38]!==z?(s=[e,t,u,v,l,m,z],b[32]=e,b[33]=t,b[34]=u,b[35]=v,b[36]=l,b[37]=m,b[38]=z,b[39]=s):s=b[39];d("Int64Hooks").useEffectInt64(a,s);return null}function a(a){var b=d("react-compiler-runtime").c(2),e;b[0]!==a?(e=m.jsx(c("CometPlaceholder.react"),{fallback:null,name:"SelectiveSyncTTRCLogger",children:m.jsx(o,babelHelpers["extends"]({},a))}),b[0]=a,b[1]=e):e=b[1];return e}g["default"]=a}),98);
__d("useMAWCreateOptimisticSecureMessageNoOp",["err"],(function(a,b,c,d,e,f,g){"use strict";function a(){return h}function h(){throw c("err")("Attempted to use separate read hooks in non-separate read mode")}g["default"]=a}),98);
__d("useMWPDarkModeTheme",["I64","LSIntEnum","MessengerAppColorMode","ReQL","ReQLSuspense","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a,b){var e=d("react-compiler-runtime").c(4),g,j;e[0]!==a||e[1]!==b?(g=function(){return b==null?d("ReQL").empty():d("ReQL").fromTableAscending(a.tables.thread_themes).filter(function(a){return(h||(h=d("I64"))).equal(a.normalThemeId,b)&&(h||(h=d("I64"))).equal(a.appColorMode,(i||(i=d("LSIntEnum"))).ofNumber(c("MessengerAppColorMode").DARK))})},j=[a,b],e[0]=a,e[1]=b,e[2]=g,e[3]=j):(g=e[2],j=e[3]);return d("ReQLSuspense").useFirst(g,j,f.id+":25")}g["default"]=a}),98);
__d("useReportThreadViewOpenDebounced",["LSFactory","LSReportThreadViewOpenStoredProcedure","promiseDone","react-compiler-runtime","useDebouncedComet","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b){var e=d("react-compiler-runtime").c(5),g=(h||(h=c("useReStore")))(),i;e[0]!==g||e[1]!==a?(i=function(){c("promiseDone")(g.runInTransaction(function(b){return c("LSReportThreadViewOpenStoredProcedure")(c("LSFactory")(b),{threadKey:a})},"readwrite",void 0,void 0,f.id+":33"))},e[0]=g,e[1]=a,e[2]=i):i=e[2];var j;e[3]!==b?(j={leading:!0,wait:b},e[3]=b,e[4]=j):j=e[4];return c("useDebouncedComet")(i,j)}g["default"]=a}),98);
__d("useMWReportThreadOpenOnMountAndFocusWithLogger",["GroupsCometChatsEngagementLogger","I64","Int64Hooks","LSMessagingThreadTypeUtil","MWCMSelectiveSyncTTRCQPLLoggingUtils","MetaConfig","Random","SelectiveSyncTTRCLogger.react","ServerTime","VisibilityAPI","mwCMIsAnyCMThread","react","useReStore","useReportThreadViewOpenDebounced"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react"));b=j;var l=b.useRef,m=b.useState,n=c("MetaConfig")._("43");function a(a,b){var e=(h||(h=c("useReStore")))(),f=m(0),g=f[0],j=f[1];f=m(d("Random").uint32());var o=f[0];f=f[1];var p=c("mwCMIsAnyCMThread")(a.threadType),q=l(!1),r=p||c("MetaConfig")._("55")&&(d("LSMessagingThreadTypeUtil").isSocialChannelV2(a.threadType)||d("LSMessagingThreadTypeUtil").isDiscoverablePublicBroadcastChannel(a.threadType)),s=c("useReportThreadViewOpenDebounced")(a.threadKey,(b=b)!=null?b:n);d("Int64Hooks").useEffectInt64(function(){var b=null;r&&(b=d("VisibilityAPI").onVisibilityChange(function(){d("VisibilityAPI").isVisibilityHidden()||s()}),p&&d("GroupsCometChatsEngagementLogger").log({action:"background_effect",community_id:(i||(i=d("I64"))).to_string(a.parentThreadKey),event:"report_thread_view_open",source:"blended_threadlist_community_tab",surface:"thread_view",thread_id:(i||(i=d("I64"))).to_string(a.threadKey)}),q.current===!1&&(j(d("ServerTime").getMillis()),q.current=!0,d("MWCMSelectiveSyncTTRCQPLLoggingUtils").logPoint(o,"selective_sync_remediation_start"),s()));return function(){b!=null&&d("VisibilityAPI").removeVisibiltyChangeListener(b)}},[e,a.parentThreadKey,a.threadKey,a.threadType,p,o,r,s]);return r?k.jsx(c("SelectiveSyncTTRCLogger.react"),{instanceKey:o,isReportThreadViewOpenSprocCalled:q.current,reportThreadViewOpenCalledTimestamp:g,setInstanceKey:f,threadKey:a.threadKey,threadSubtype:a.threadSubtype,threadType:a.threadType}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);