;/*FB_PKG_DELIM*/

__d("EbFetchTimeoutMsForMLv2",["DateConsts","gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";var h=10,i=15,j=!c("gkx")("6581");function a(a){return k(a)*d("DateConsts").MS_PER_SEC}function k(a){return j?h:(a=l(a))!=null?a:i}function l(a){switch(a){case"exposure_logging_disabled":return c("qex")._("464");case"exposure_logging_enabled":return c("qex")._("229");default:a;return null}}g["default"]=a}),98);
__d("MAWQPLLogger",["QPLUserFlow","Random","cr:10049"],(function(a,b,c,d,e,f,g){"use strict";b("cr:10049")==null?void 0:b("cr:10049").overwriteSamplingRate();function a(a){return{addQPLAnnotations:function(b,d){c("QPLUserFlow").addAnnotations(a,d,{instanceKey:b})},markQPLCancel:function(b){c("QPLUserFlow").endCancel(a,{instanceKey:b})},markQPLFailure:function(b,d){var e;c("QPLUserFlow").endFailure(a,(e=d==null?void 0:d.name)!=null?e:"fail",{error:d,instanceKey:b})},markQPLFailureWithMsg:function(b,d){c("QPLUserFlow").endFailure(a,d,{instanceKey:b})},markQPLPoint:function(b,d,e){c("QPLUserFlow").addPoint(a,d,{debugInfo:e,instanceKey:b})},markQPLStart:function(){var b=Date.now()+(Math.round(d("Random").random()*1e4)+1e4);c("QPLUserFlow").start(a,{instanceKey:b});return b},markQPLSuccess:function(b){c("QPLUserFlow").endSuccess(a,{instanceKey:b})}}}g["default"]=a}),98);
__d("MAWDataSourceLogger",["I64","MAWQPLLogger","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function j(){i==null&&(i=c("MAWQPLLogger")(c("qpl")._(25303796,"1974")));return i}function a(a){var b=j().markQPLStart();j().addQPLAnnotations(b,{string:{threadType:(h||(h=d("I64"))).to_string(a)}});return b}function b(a,b,c){j().markQPLPoint(a,"wait_act_thread_start","before fetching messages range from table"),j().addQPLAnnotations(a,{"int":{version:1},string:{direction:b,thread_id:(h||(h=d("I64"))).to_string(c)}})}function e(a,b){j().markQPLFailureWithMsg(a,b)}function f(a){j().markQPLCancel(a)}function k(a){j().markQPLPoint(a,"wait_act_thread_end","before fetching messages range from table"),j().markQPLPoint(a,"load_more_msgs_start","load more messages from MAW DB")}function l(a){j().markQPLPoint(a,"load_messages_from_eb_start","load more messages from EB")}function m(a){j().markQPLPoint(a,"load_messages_from_eb_end","load more messages from EB")}function n(a){j().markQPLPoint(a,"load_messages_from_local_db_start")}function o(a){j().markQPLPoint(a,"load_messages_from_local_db_end")}function p(a){j().markQPLPoint(a,"insert_msgs_to_lsdb_start")}function q(a){j().markQPLPoint(a,"insert_msgs_to_lsdb_end")}function r(a){j().markQPLPoint(a,"insert_msgs_to_lsdb_dispatch_download_state_updates_start")}function s(a){j().markQPLPoint(a,"insert_msgs_to_lsdb_dispatch_download_state_updates_end")}function t(a){j().markQPLPoint(a,"insert_msgs_to_lsdb_call_bridge_handlers_start")}function u(a){j().markQPLPoint(a,"insert_msgs_to_lsdb_call_bridge_handlers_end")}function v(a,b){j().markQPLPoint(a,"load_more_msgs_end","Note: OLD SOLUTION DOES NOT FETCH messages. they are fetched in afterTransaction that we cannot control"),j().addQPLAnnotations(a,{bool:{hasMoreBefore:b}})}function w(a){j().markQPLSuccess(a)}function x(a,b){j().markQPLPoint(a,"issued_range_query","MAWFetchSecureMessages: minMsgSortOrderTsResponse "+b)}function y(a,b){j().markQPLFailure(a,b)}g.logLoadMoreMsgsStart=a;g.logLoadMoreMsgsThreadWaiting=b;g.logLoadMoreMsgsFailure=e;g.logLoadMoreMsgsCancel=f;g.logLoadMoreMsgsThreadReadyFetchMsgs=k;g.logLoadMessagesFromEBStart=l;g.logLoadMessagesFromEBEnd=m;g.logLoadMessagesFromLocalDBStart=n;g.logLoadMessagesFromLocalDBEnd=o;g.logInsertMessageResponseToLSDBStart=p;g.logInsertMessageResponseToLSDBEnd=q;g.logDispatchDownloadStateUpdatesStart=r;g.logDispatchDownloadStateUpdatesEnd=s;g.logCallBridgeHandlersStart=t;g.logCallBridgeHandlersEnd=u;g.logLoadMoreMsgsFetched=v;g.logLoadMoreMsgsSuccess=w;g.logLoadMoreMsgsRangeQuery=x;g.logLoadMoreMsgsRuntimeError=y}),98);
__d("MAWEBDeanonFetch",["EBAPI","FBLogger","WAJids","WAResultOrError","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return h.apply(this,arguments)}function h(){h=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){var b=a.chatJid,e=a.count,f=a.direction,g=a.includeReferenceTimestamp,h=a.referenceTimestampMs;a=a.sortFn;try{f=(yield c("EBAPI").messageMetadataQuery({direction:f,includeAnonymizedMessages:!1,numberOfMessages:e,referenceTimestamp:h,threadId:d("WAJids").threadIdForChatJid(b)}));if(f.success===!1)return d("WAResultOrError").makeError("error",f.payload);e=f.value.messages;b=e.reduce(function(a,b){var c=b.offlineThreadingId;b=b.sortOrderMs;if(c==null||b==null)return a;b=Number(b);if(g!==!0&&b===h)return a;a.push({externalId:c,msgType:"unknown-deanon",sortOrderMs:b});return a},[]);f=a==null?b:b.sort(a);return d("WAResultOrError").makeResult(f)}catch(a){c("FBLogger")("messenger_web_missing_messages").catching(a).mustfix("Deanon GraphQL fails with error");return d("WAResultOrError").makeError("request-error",a.message)}});return h.apply(this,arguments)}g.fetchMessagesMetadataFromEBDeanon=a}),98);
__d("MWRestoreMessagesFromEB",["EBAPI","I64","LSAppendDataTraceAddonStoredProcedure","LSDataTraceCheckPoint","LSDataTraceType","LSEncryptedBackupsBackupTenancy","LSFactory","LSIntEnum","LSIssueMessageRangeQueryTaskStoredProcedure","LSMEBTaskCreationSource","MAWAsyncEBPendingQueryPromise","MAWEBRestoreTrackingUtils","MAWEncryptedBackupUtils","MAWMainTraceUtils","MWEncryptedBackUpEBNotEnabledError","Promise","WAJids","WATagsLogger","asyncToGeneratorRuntime","err","gkx","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j;function k(){var a=babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][","] Issuing message range query for thread: "," startSortKey: "," numMessages: ","} "]);k=function(){return a};return a}function l(){var a=babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Issuing message range query for chatJid: "," skipped. EB not enabled"]);l=function(){return a};return a}function a(a){var e=a.chatJid,f=a.newerNumMessages,g=a.numMessages,k=a.passedTraceId,n=a.sortOrderMs,o=a.source,p=a.storage;if(!c("gkx")("23914"))return null;var q=k!=null?k:d("MAWMainTraceUtils").createTraceId();c("promiseDone")(d("MAWEncryptedBackupUtils").getBackupTenancy(p.tables).then(function(a){if(a!=null&&(i||(i=d("I64"))).equal(a,(j||(j=d("LSIntEnum"))).ofNumber(c("LSEncryptedBackupsBackupTenancy").PRODUCTION))){a=c("gkx")("7083");return a?c("EBAPI").messageRangeQueryWithPersistence({chatJid:e,direction:(i||(i=d("I64"))).to_float(f)>0?"after":"before",includeOffset:c("gkx")("5340"),instanceKey:q,sortOrderMs:(i||(i=d("I64"))).to_string(n),source:o}):m({chatJid:e,newerNumMessages:f,numMessages:g,passedTraceId:k,sortOrderMs:n,source:o,storage:p,traceId:q})}else{d("WATagsLogger").TAGS(["labyrinth_web","eb_restore"]).WARN(l(),e);d("MAWAsyncEBPendingQueryPromise").rejectPendingQueryIfPresent(q,c("err")(d("MWEncryptedBackUpEBNotEnabledError").EB_NOT_ENABLED));return(h||(h=b("Promise"))).resolve()}}));return q}function m(a){var e=a.chatJid,g=a.newerNumMessages,h=a.numMessages,l=a.passedTraceId,m=a.sortOrderMs,n=a.source,o=a.storage,p=a.traceId;return o.runInTransaction(function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){yield d("MAWMainTraceUtils").startTraceWithTxn(a,(i||(i=d("I64"))).of_float(Date.now()),p,(j||(j=d("LSIntEnum"))).ofNumber(c("LSDataTraceType").ENCRYPTED_BACKUPS_RESTORE));yield c("LSAppendDataTraceAddonStoredProcedure")(c("LSFactory")(a),{checkPointId:j.ofNumber(c("LSDataTraceCheckPoint").LABYRINTH_WEB_ISSUE_MESSAGE_RANGE_QUERY),dataTraceId:p,syncChannel:i.neg_one});d("WATagsLogger").TAGS(["labyrinth_web","eb_restore",p]).LOG(k(),p,e,i.to_string(m),i.to_string(h));d("MAWEBRestoreTrackingUtils").markEBRestorePaginated(n,l,"LS");return c("LSIssueMessageRangeQueryTaskStoredProcedure")(c("LSFactory")(a),{includeOffset:c("gkx")("5340"),isPointQuery:!1,newerNumMessages:g,numMessages:h,source:j.ofNumber((a=n)!=null?a:c("LSMEBTaskCreationSource").UNKNOWN),startSortKey:i.to_string(m),threadId:d("WAJids").threadIdForChatJid(e),traceId:p})});return function(b){return a.apply(this,arguments)}}(),"readwrite",void 0,void 0,f.id+":126")}g["default"]=a}),98);
__d("MAWEBFetch",["EBFormatUtils","FBLogger","I64","LSMEBTaskCreationSource","MAWAsyncEBPendingQueryPromise","MWEncryptedBackUpEBNotEnabledError","MWRestoreMessagesFromEB","WAResultOrError","asyncToGeneratorRuntime","justknobx"],(function(a,b,c,d,e,f,g){"use strict";var h;e=c("justknobx")._("3177");var i=Math.max(3,e-5);function a(a){return j.apply(this,arguments)}function j(){j=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){var b=a.chatJid,e=a.count,f=a.db,g=a.direction,i=a.timestampMs;a=a.traceId;e=d("EBFormatUtils").adjustCount(e,g);var j=e[0];e=e[1];b=c("MWRestoreMessagesFromEB")({chatJid:b,newerNumMessages:(h||(h=d("I64"))).of_int32(e),numMessages:h.of_int32(j),passedTraceId:a,sortOrderMs:d("EBFormatUtils").adjustTs(i,g),source:c("LSMEBTaskCreationSource").MESSENGER_MESSAGE_LIST_PAGINATION,storage:f});if(b==null)return d("WAResultOrError").makeResult({hasMoreAfter:!1,hasMoreBefore:!1,isEndOfCurrentFormat:!1,messages:[],restoreType:"none"});e=d("MAWAsyncEBPendingQueryPromise").getWaitForRestorePromiseFromTrace(b);j=(yield e.then(function(a){return d("WAResultOrError").makeResult(a)})["catch"](function(a){if(a&&(a==null?void 0:a.message)===d("MWEncryptedBackUpEBNotEnabledError").EB_NOT_ENABLED)return d("WAResultOrError").makeError(d("MWEncryptedBackUpEBNotEnabledError").EB_NOT_ENABLED);c("FBLogger")("messenger_e2ee_web").catching(a).mustfix("[EBFetch] Failed to fetch");return d("WAResultOrError").makeError((a=a==null?void 0:a.message)!=null?a:"unknown")}));if(j.success===!1)return j;a=j.value;i=a.hasMoreAfter;f=a.hasMoreBefore;b=a.messages;e=a.restoreType;return d("WAResultOrError").makeResult({hasMoreAfter:i,hasMoreBefore:f,isEndOfCurrentFormat:k(g,i,f,b),messages:b,restoreType:e})});return j.apply(this,arguments)}function k(a,b,c,d){if(a==="before"&&c===!1)return!1;return a==="after"&&b===!1?!1:d.length<i}g["default"]=a}),98);
__d("MAWFetchExternalIdUsingCache",["FBLogger","LSDatabaseSingleton","MAWBridgeSendAndReceive","MAWDbMsg","WAStanzaUtils","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=new Map();function a(a){return j.apply(this,arguments)}function j(){j=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){if(a==="")return null;var b=m(a);if(b!=null)return b;b=(yield k(a));if(b!=null){n(a,b);return b}try{b=d("MAWDbMsg").toMsgId(a);if(b==null){c("FBLogger")("messenger_e2ee_web").warn("[MAWFetchProtocolMessageIdUsingCache] failed fetch external id, invalid msgId %s",a);return null}b=(yield d("MAWBridgeSendAndReceive").sendAndReceive("backend","getProtocolMsgIdByMsgId",{msgId:b}));if((b==null?void 0:b.externalId)==null){c("FBLogger")("messenger_e2ee_web").warn("[MAWFetchProtocolMessageIdUsingCache] external id for msgId %s not found",a);return null}n(a,b.externalId);return b.externalId}catch(a){c("FBLogger")("messenger_e2ee_web").catching(a).mustfix("[MAWFetchProtocolMessageIdUsingCache] getProtocolMsgIdByMsgId bridge call failed");throw a}});return j.apply(this,arguments)}function k(a){return l.apply(this,arguments)}function l(){l=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){var b=(yield (h||(h=d("LSDatabaseSingleton"))).LSDatabaseSingleton);b=(yield b.tables.messages.index("messageId").get(a));return b!=null?d("WAStanzaUtils").toStanzaId(b.offlineThreadingId):null});return l.apply(this,arguments)}function m(a){return i.get(a)}function n(a,b){if(a==="")return!1;i.set(a,b);return!0}g.fetchExternalIdUsingCache=a;g.populateExternalIdCache=n}),98);
__d("MAWMessageIntegrityEBFetchStatus",[],(function(a,b,c,d,e,f){"use strict";var g=new Set();function a(a){return g.has(a)}function b(a){g.add(a)}f.hasEBFailure=a;f.recordEBFailure=b}),66);
__d("MAWMessagesPaginationUtils",["FBLogger","MAWFetchExternalIdUsingCache","MAWMessagesDirection","WAStanzaUtils","asyncToGeneratorRuntime","gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){a=d("MAWMessagesDirection").getRangeMsgIdForDirection(a,b);return h(a)}function e(a){c("gkx")("7950")&&a.forEach(function(a){return d("MAWFetchExternalIdUsingCache").populateExternalIdCache(a.msgId.toString(),d("WAStanzaUtils").toStanzaId(a.externalId))})}function h(a){return i.apply(this,arguments)}function i(){i=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){if(a==null||a==="")return null;if(!c("gkx")("7950"))return null;var b=(yield d("MAWFetchExternalIdUsingCache").fetchExternalIdUsingCache(a));b==null&&c("FBLogger")("messenger_e2ee_web").mustfix("[MAWMessagesPaginationUtils] getExternalIdByMsgId for msgId: %s returned null",a);return b});return i.apply(this,arguments)}g.getRangeExternalIdForDirection=a;g.populateExternalIdCache=e;g.getExternalIdByMsgId=h}),98);
__d("findMsgsWithMinAndMaxTimestamp",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.filter(function(a){return a.sortOrderMs!=null});var b=null,c=null;for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f,g;if(d){if(e>=a.length)break;g=a[e++]}else{e=a.next();if(e.done)break;g=e.value}g=g;if(g.sortOrderMs==null)continue;(((f=b)==null?void 0:f.sortOrderMs)==null||b.sortOrderMs<g.sortOrderMs)&&(b=g);(((f=c)==null?void 0:f.sortOrderMs)==null||c.sortOrderMs>g.sortOrderMs)&&(c=g)}return[c,b]}f["default"]=a}),66);
__d("MAWMessagesRangesUtils",["I64","MAWMessagesDirection","findMsgsWithMinAndMaxTimestamp","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){return{hasMoreAfter:!1,hasMoreBefore:!1,isLoadingAfter:!1,isLoadingBefore:!1,maxMessageId:"",maxTimestampMs:(h||(h=d("I64"))).max_int,minMessageId:"",minTimestampMs:h.min_int,threadKey:a}}var i=c("gkx")("8338");function b(a){var b=a.direction,c=a.hasMoreMsgsInDeanon,e=a.mawFetchResult;a=a.range;var f=[].concat(e.msgs).sort(function(a,b){return a.sortOrderMs-b.sortOrderMs}),g=f.length>0?f[0]:void 0;f=f.length>0?f[f.length-1]:void 0;return d("MAWMessagesDirection").switchOnMWPMessagesDirection(b,{asc:babelHelpers["extends"]({},a,{hasMoreAfter:e.hasMoreAfter||i&&c,isLoadingAfter:!1,maxMessageId:(b=f==null?void 0:f.msgId)!=null?b:a.maxMessageId,maxTimestampMs:(h||(h=d("I64"))).max(a.maxTimestampMs,(f==null?void 0:f.sortOrderMs)!=null?(h||(h=d("I64"))).of_float(f==null?void 0:f.sortOrderMs):a.maxTimestampMs)}),desc:babelHelpers["extends"]({},a,{hasMoreBefore:e.hasMoreBefore||i&&c,isLoadingBefore:!1,minMessageId:(b=g==null?void 0:g.msgId)!=null?b:a.minMessageId,minTimestampMs:h.min(a.minTimestampMs,(g==null?void 0:g.sortOrderMs)!=null?(h||(h=d("I64"))).of_float(g==null?void 0:g.sortOrderMs):a.minTimestampMs)})})}function e(a,b,e){var f=c("findMsgsWithMinAndMaxTimestamp")(b.msgs),g=f[0];f=f[1];f=babelHelpers["extends"]({},a,d("MAWMessagesDirection").switchOnMWPMessagesDirection(e,{asc:{hasMoreAfter:b.hasMoreAfter,isLoadingAfter:!1,maxMessageId:(e=f==null?void 0:f.msgId)!=null?e:a.maxMessageId,maxTimestampMs:(h||(h=d("I64"))).max(a.maxTimestampMs,(f==null?void 0:f.sortOrderMs)!=null?(h||(h=d("I64"))).of_float(f==null?void 0:f.sortOrderMs):a.maxTimestampMs)},desc:{hasMoreBefore:b.hasMoreBefore,isLoadingBefore:!1,minMessageId:(e=g==null?void 0:g.msgId)!=null?e:a.minMessageId,minTimestampMs:h.min(a.minTimestampMs,(g==null?void 0:g.sortOrderMs)!=null?(h||(h=d("I64"))).of_float(g==null?void 0:g.sortOrderMs):a.minTimestampMs)}}));return f}g.getRangeForFailure=a;g.IS_RANGE_FIX_ENABLED=i;g.getNewMAWRange=b;g.mergeMoreMessagesResponseIntoRange=e}),98);
__d("MAWPutMessagesToDB",["MAWBridgeDeleteReactionHandler","MAWBridgeMsgsStartCountdownHandler","MAWBridgeNewMediaHandler","MAWBridgeNewMsgHandler","MAWBridgeNewReceiverFetchInfoHandler","MAWBridgeNewXMAHandler","MAWBridgeReactionUpsertHandler","MAWDataSourceLogger","MAWGetIsMediaDownloadStatusEnabled","Promise","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";var h;function i(a,b,c,d){return j.apply(this,arguments)}function j(){j=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,c,e,f){var g=c.expiringCountdown,i=c.medias,j=c.msgs,k=c.reactions,l=c.receiverFetchInfoPayloads;c=c.xmas;f!=null&&d("MAWDataSourceLogger").logDispatchDownloadStateUpdatesStart(f);d("MAWGetIsMediaDownloadStatusEnabled").getIsMediaDownloadStatusEnabled()&&e({tag:"NewMedias",value:i});d("MAWGetIsMediaDownloadStatusEnabled").getIsMediaDownloadStatusForXMAsEnabled()&&e({tag:"NewXMAs",value:c});f!=null&&(d("MAWDataSourceLogger").logDispatchDownloadStateUpdatesEnd(f),d("MAWDataSourceLogger").logCallBridgeHandlersStart(f));yield d("MAWBridgeNewMsgHandler").bulkCall(a,j);yield (h||(h=b("Promise"))).all(i.map(function(b){return d("MAWBridgeNewMediaHandler").call(a,b)}));yield h.all(c.map(function(b){return d("MAWBridgeNewXMAHandler").call(a,b)}));yield h.all(l.map(function(b){return d("MAWBridgeNewReceiverFetchInfoHandler").call(a,b)}));yield d("MAWBridgeMsgsStartCountdownHandler").call(a,{msgs:g});yield h.all(k.map(function(b){return b.type==="delete"?d("MAWBridgeDeleteReactionHandler").call(a,b.reaction):d("MAWBridgeReactionUpsertHandler").call(a,b.reaction)}));f!=null&&d("MAWDataSourceLogger").logCallBridgeHandlersEnd(f)});return j.apply(this,arguments)}function a(a,b,c,d){return a.runInTransaction(function(a){return i(a,b,c,d)},"readwrite","ui",void 0,f.id+":104")}function c(a,b,c){return a.runInTransaction(function(a){return i(a,babelHelpers["extends"]({},b,{expiringCountdown:[],hasMoreAfter:!1,hasMoreBefore:!1}),c)},"readwrite","ui",void 0,f.id+":123")}g.insertMessageResponseToDBInExistingTransaction=i;g.insertMessageResponseIntoDatabase=a;g.insertMessageResponseIntoDatabaseByExternalId=c}),98);
__d("MAWSecureLocalDBFetch",["CometLruCache","FBLogger","I64","MAWBridgeSendAndReceive","MAWDbMsg","WAResultOrError","asyncToGeneratorRuntime","deepEquals","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("CometLruCache").create(20,2e3);function a(a,b){return j.apply(this,arguments)}function j(){j=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b){var e=a.chatJid,f=a.config,g=a.count,h=a.direction,j=a.offsetMsg,l=a.timestampMs;e=i.get(e);if(e!=null){var n=e&&e.options,o=n.count;n=babelHelpers.objectWithoutPropertiesLoose(n,["count"]);if(c("deepEquals")(n,{config:f,direction:h,offsetMsg:j,timestampMs:l})&&g<=o)try{return d("WAResultOrError").makeResult(babelHelpers["extends"]({},yield e.result))}catch(a){}}if(c("gkx")("7950"))return m(a,b);else return k(a,b)});return j.apply(this,arguments)}function k(a,b){return l.apply(this,arguments)}function l(){l=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b){var e=a.actionType,f=a.chatJid,g=a.config,j=a.count,k=a.direction,l=a.offsetMsg;a=a.timestampMs;try{e=d("MAWBridgeSendAndReceive").sendAndReceive("backend","maw_load_msgs",{actionType:e,chatJid:f,config:g,direction:k,includeOriginalMsg:(e=l==null?void 0:l.includeOriginalMsg)!=null?e:!1,msgId:(l==null?void 0:l.messageId)==null?null:d("MAWDbMsg").toMsgId(l.messageId),numMsgs:j,sortOrderMs:a!=null?(h||(h=d("I64"))).to_float(a):null},{timeoutMs:b==null?void 0:b.timeoutMs});i.set(f,{options:{config:g,count:j,direction:k,offsetMsg:l,timestampMs:a},result:e});b=babelHelpers["extends"]({},yield e);return d("WAResultOrError").makeResult(b)}catch(a){c("FBLogger")("messenger_e2ee_web").catching(a).mustfix("[MAWSecureLocalDBFetch] maw_load_msgs bridge call failed");return d("WAResultOrError").makeError("bridge_call_failed",a)}});return l.apply(this,arguments)}function m(a,b){return n.apply(this,arguments)}function n(){n=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b){var e=a.actionType,f=a.chatJid,g=a.config,j=a.count,k=a.direction,l=a.offsetMsg;a=a.timestampMs;try{e=d("MAWBridgeSendAndReceive").sendAndReceive("backend","maw_load_msgs_range",{actionType:e,chatJid:f,config:g,direction:k,range:{includeLowerBoundMsg:(e=l==null?void 0:l.includeOriginalMsg)!=null?e:!1,lowerBoundExternalId:(l==null?void 0:l.externalId)==null?void 0:l.externalId,lowerBoundSortOrderMs:a!=null?(h||(h=d("I64"))).to_float(a):void 0,numMsgs:j}},{timeoutMs:b==null?void 0:b.timeoutMs});i.set(f,{options:{config:g,count:j,direction:k,offsetMsg:l,timestampMs:a},result:e});b=babelHelpers["extends"]({},yield e);return d("WAResultOrError").makeResult(b)}catch(a){c("FBLogger")("messenger_e2ee_web").catching(a).mustfix("[MAWSecureLocalDBFetch] maw_load_msgs bridge call failed");return d("WAResultOrError").makeError("bridge_call_failed",a)}});return n.apply(this,arguments)}g["default"]=a}),98);
__d("MLV2DataSourceLogger",["I64","MAWQPLLogger","interaction-tracing","justknobx","mergeDeep","performanceNow","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j;function k(){j==null&&(j=c("MAWQPLLogger")(c("qpl")._(25303796,"1974")));return j}var l=new Map();function m(a,b){return(i||(i=d("I64"))).to_string(a)+b}function a(a,b,e,f){var g=m(a,b),j=l.get(g);if(j!=null)if(c("justknobx")._("3341"))j.markQPLCancel("restart_logger");else return j;var n=k().markQPLStart(),o=c("interaction-tracing").InteractionTracingCore.getPendingInteractions(),p=(h||(h=c("performanceNow")))(),q=function(a,b){var d=(h||(h=c("performanceNow")))(),e={action:a,full_duration:(d-p)/1e3};b!=null&&(e=c("mergeDeep")(e,b));o.forEach(function(a){a.addSubspan("MLV2_fetch","AppTiming",p,d,e)})},r=new Set();j={addQPLAnnotations:function(a){k().addQPLAnnotations(n,a)},annotateMessageRangesDataSource:function(a){r.add(a),k().addQPLAnnotations(n,{string_array:{message_ranges_source:Array.from(r.keys())}})},getInstanceKey:function(){return n},markQPLCancel:function(a){k().addQPLAnnotations(n,{string:{cancel_reason:a}}),k().markQPLCancel(n),q("CANCEL"),l["delete"](g)},markQPLFailure:function(a){k().markQPLFailure(n,a),q("FAIL"),l["delete"](g)},markQPLFailureWithMsg:function(a){k().markQPLFailureWithMsg(n,a),q("FAIL"),l["delete"](g)},markQPLPoint:function(a){k().markQPLPoint(n,a)},markQPLSuccess:function(a){k().markQPLSuccess(n),q("SUCCESS",{num_msgs_fetched:a}),l["delete"](g)}};j.addQPLAnnotations({"int":{queried_count:e},string:{direction:b,thread_id:(i||(i=d("I64"))).to_string(a),thread_type:i.to_string(f)}});l.set(g,j);return j}function b(a,b){a=m(a,b);return l.get(a)}g.startMLV2LoggerForThread=a;g.getMLV2LoggerForThread=b}),98);
__d("MAWSecureLocalDBDataSource",["I64","MAWBridgeSendAndReceive","MAWDataSourceLogger","MAWDbMsg","MAWIsEBEnabled","MAWMessagesPaginationUtils","MAWMiActOnActThreadReady","MAWPutMessagesToDB","MAWSecureDataSource","MAWSecureLocalDBFetch","MLV2DataSourceLogger","Promise","ReQL","WAStanzaUtils","WATagsLogger","asyncToGeneratorRuntime","err","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function j(){var a=babelHelpers.taggedTemplateLiteralLoose(["Fetching "," messages by external id, which is not optimal.\n      Consider migrating 'loadMsgsByExternalId' backend request to a batch version "]);j=function(){return a};return a}function k(){var a=babelHelpers.taggedTemplateLiteralLoose(["Failed to fetch messages: ",""]);k=function(){return a};return a}function l(){var a=babelHelpers.taggedTemplateLiteralLoose(["useFetchSecureMessages: threadJid: "," minMsgSortOrderTsResponse ",""]);l=function(){return a};return a}function m(){var a=babelHelpers.taggedTemplateLiteralLoose(["Fetch more: ",""]);m=function(){return a};return a}var n=c("requireDeferred")("MAWEBFetch").__setRef("MAWSecureLocalDBDataSource"),o=d("WATagsLogger").TAGS(["MAWSecureLocalDBDataSource"]);function p(a){return a.msgs.map(function(a){return{externalId:a.externalId,isOutgoing:a.isAuthorMe,msgType:a.type_,sortOrderMs:a.sortOrderMs}})}a=function(){function a(){this.$1=!1}var e=a.prototype;e.$2=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,e,g,h,j,k,p,q,r){if(j==="after")return;j;o.LOG(m(),e);d("MAWDataSourceLogger").logLoadMoreMsgsThreadWaiting(p,"before",e);j=(yield d("MAWMiActOnActThreadReady").waitForACTThreadReady(a.tables,e,"MAWFetchMoreMessages"));j=j.chatJid;d("MAWDataSourceLogger").logLoadMoreMsgsThreadReadyFetchMsgs(p);d("MAWDataSourceLogger").logLoadMessagesFromLocalDBStart(p);var s=h.minMessageId,t=(yield d("MAWMessagesPaginationUtils").getExternalIdByMsgId(s));q=(yield c("MAWSecureLocalDBFetch")({actionType:q,chatJid:j,config:{admin:!0,editMsgHistory:!0,media:!0,reactions:!0,receiverFetch:!0,xma:!0},count:k,direction:"before",offsetMsg:{externalId:t,includeOriginalMsg:!1,messageId:s},timestampMs:g}));if(q.success===!1){throw(t=q.payload)!=null?t:c("err")(q.error)}var u=q.value;d("MAWDataSourceLogger").logLoadMessagesFromLocalDBEnd(p);d("MAWDataSourceLogger").logInsertMessageResponseToLSDBStart(p);d("MAWMessagesPaginationUtils").populateExternalIdCache(u.msgs);var v=u.msgs.length>0?u.msgs[u.msgs.length-1].msgId:h.minMessageId;yield a.runInTransaction(function(){var c=b("asyncToGeneratorRuntime").asyncToGenerator(function*(b){var c;yield d("MAWPutMessagesToDB").insertMessageResponseToDBInExistingTransaction(b,u,r,p);c=(yield (c=b.messages_ranges_v2__generated).get.apply(c,[h.threadKey,h.minTimestampMs,h.minMessageId]));if(c==null)return;var e=u.hasMoreBefore;u.hasMoreBefore===!1&&(yield d("MAWIsEBEnabled").isEbEnabled(a))&&(e=!0);yield b.messages_ranges_v2__generated.upsert([c.threadKey,c.minTimestampMs,c.minMessageId],{hasMoreAfter:!1,hasMoreBefore:e,isLoadingAfter:!1,isLoadingBefore:!1,maxMessageId:c.maxMessageId,maxTimestampMs:c.maxTimestampMs,minMessageId:v,minTimestampMs:(i||(i=d("I64"))).zero,threadKey:h.threadKey})});return function(a){return c.apply(this,arguments)}}(),"readwrite","ui",void 0,f.id+":145");d("MAWDataSourceLogger").logInsertMessageResponseToLSDBEnd(p);d("MAWDataSourceLogger").logLoadMoreMsgsFetched(p,u.hasMoreBefore);if(u.hasMoreBefore){d("MAWDataSourceLogger").logLoadMoreMsgsSuccess(p);return}s=(yield d("MAWBridgeSendAndReceive").sendAndReceive("backend","getMaybeNextNonAdminMsgSortOrderMs",{chatJid:j,mayBeAdminMsgId:d("MAWDbMsg").toMsgId(h.minMessageId)}));d("WATagsLogger").TAGS(["labyrinth_web","useFetchSecureMessages"]).LOG(l(),j,s.minMsgTimestampMs);d("MAWDataSourceLogger").logLoadMoreMsgsRangeQuery(p,s.minMsgTimestampMs);g=(yield n.load());t=(yield g({chatJid:j,count:k,db:a,direction:"before",timestampMs:(i||(i=d("I64"))).of_float(s.minMsgTimestampMs)}));t.success&&t.value.hasMoreBefore===!1&&(yield a.runInTransaction(function(){var c=b("asyncToGeneratorRuntime").asyncToGenerator(function*(b){var c=h.minTimestampMs,f=(yield d("ReQL").firstAsync(d("ReQL").fromTableDescending(a.tables.messages_ranges_v2__generated).getKeyRange(e).bounds({lte:[c]}).filter(function(a){var b=a.maxTimestampMs;a=a.minTimestampMs;return(i||(i=d("I64"))).ge(c,a)&&(i||(i=d("I64"))).le(c,b)})));if(f==null)return;yield b.messages_ranges_v2__generated.upsert([f.threadKey,f.minTimestampMs,f.minMessageId],babelHelpers["extends"]({},f,{hasMoreBefore:!1,isLoadingBefore:!1}))});return function(a){return c.apply(this,arguments)}}(),"readwrite","ui",void 0,f.id+":229"));d("MAWDataSourceLogger").logLoadMoreMsgsSuccess(p)});function e(b,c,d,e,f,g,h,i,j){return a.apply(this,arguments)}return e}();e.requestMessages=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b,e,f,g,h,i,j){a=(yield d("MAWMessagesPaginationUtils").getExternalIdByMsgId(f));b=(yield c("MAWSecureLocalDBFetch")({actionType:j,chatJid:b,config:i,count:(j=h)!=null?j:d("MAWSecureDataSource").DEFAULT_NUM_MESSAGES,direction:g,offsetMsg:f==null?null:{externalId:a,includeOriginalMsg:!1,messageId:f},timestampMs:e}));if(b.success===!1){throw(i=b.payload)!=null?i:c("err")(b.error)}h=b.value;d("MAWMessagesPaginationUtils").populateExternalIdCache(h.msgs);j=h.msgs.map(function(a){return{externalId:a.externalId,isOutgoing:a.isAuthorMe,msgType:a.type_,sortOrderMs:a.sortOrderMs}});return{hasMoreAfter:h.hasMoreAfter,hasMoreBefore:h.hasMoreBefore,msgs:j}});function e(b,c,d,e,f,g,h,i){return a.apply(this,arguments)}return e}();e.fetchSecureMessagesProtocol=function(a,b,c,e,f,g,h,i,j){h===void 0&&(h=d("MAWSecureDataSource").DEFAULT_NUM_MESSAGES);c=d("MAWDataSourceLogger").logLoadMoreMsgsStart(c);return this.$2(a,b,e,f,g,h,c,i,j)["catch"](function(a){var c;o.ERROR(k(),a);(c=d("MLV2DataSourceLogger").getMLV2LoggerForThread(b,g))==null?void 0:c.markQPLFailure(a)})};e.fetchMessagesByExternalId=function(a,c){a.length>2&&o.WARN(j(),a.length);a=a.map(function(a){return d("MAWBridgeSendAndReceive").sendAndReceive("backend","loadMsgsByExternalId",{config:c,externalId:d("WAStanzaUtils").toStanzaId(a)})});return(h||(h=b("Promise"))).all(a).then(function(a){return a.map(function(a){return p(a)}).flat()})};e.getMessagesCount=function(a,b,c,e,f){return d("MAWBridgeSendAndReceive").sendAndReceive("backend","getMsgsCount",{chatJid:a,direction:e,maxNumMsgs:c,offsetMsgId:d("MAWDbMsg").toMsgId(b),sortOrderMsLimit:f}).then(function(a){return babelHelpers["extends"]({},a)})};return a}();g["default"]=a}),98);
__d("declareNUXRequireable",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a}f["default"]=a}),66);
__d("useIsThreadBlocked",["I64","LSContactBlockedByViewerStatus","LSIntEnum","LSMessagingThreadTypeUtil","MWPActor.react","MWThreadKey.react","ReQL","ReQLSuspense","react-compiler-runtime","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j;function a(){var a=d("react-compiler-runtime").c(19),b=(j||(j=c("useReStore")))(),e=d("MWThreadKey.react").useMWThreadKeyMemoizedExn(),g=d("MWPActor.react").useActor(),l;a[0]!==b.tables.threads||a[1]!==e?(l=function(){return d("ReQL").fromTableAscending(b.tables.threads,["threadKey","threadType"]).getKeyRange(e)},a[0]=b.tables.threads,a[1]=e,a[2]=l):l=a[2];var m;a[3]!==b||a[4]!==e?(m=[b,e],a[3]=b,a[4]=e,a[5]=m):m=a[5];var n=d("ReQLSuspense").useFirst(l,m,f.id+":28");a[6]!==g||a[7]!==b.tables.contacts||a[8]!==b.tables.participants||a[9]!==(n==null?void 0:n.threadKey)||a[10]!==(n==null?void 0:n.threadType)||a[11]!==e?(l=function(){return(n==null?void 0:n.threadKey)!=null&&(n==null?void 0:n.threadType)!=null&&d("LSMessagingThreadTypeUtil").isOneToOne(n==null?void 0:n.threadType)?d("ReQL").leftJoin(d("ReQL").fromTableAscending(b.tables.participants,["contactId"]).getKeyRange(e).filter(function(a){return!(h||(h=d("I64"))).equal(a.contactId,g)}).take(1),d("ReQL").fromTableAscending(b.tables.contacts,["blockedByViewerStatus"])).map(k):d("ReQL").empty()},a[6]=g,a[7]=b.tables.contacts,a[8]=b.tables.participants,a[9]=n==null?void 0:n.threadKey,a[10]=n==null?void 0:n.threadType,a[11]=e,a[12]=l):l=a[12];m=n==null?void 0:n.threadKey;var o=n==null?void 0:n.threadType,p;a[13]!==g||a[14]!==b||a[15]!==m||a[16]!==o||a[17]!==e?(p=[g,b,m,o,e],a[13]=g,a[14]=b,a[15]=m,a[16]=o,a[17]=e,a[18]=p):p=a[18];m=d("ReQLSuspense").useFirst(l,p,f.id+":37");if(m!=null)return!(h||(h=d("I64"))).equal(m.blockedByViewerStatus,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactBlockedByViewerStatus").UNBLOCKED));else return!1}function k(a){a=a[1];return a}g["default"]=a}),98);
__d("useSharedNUX",["CometNUXManagerContext","react","react-compiler-runtime","recoverableViolation","useNUXLoggers","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useContext,j=b.useEffect,k=b.useState;function a(a){var b=d("react-compiler-runtime").c(9),e;b[0]!==a?(e=function(){return a},b[0]=a,b[1]=e):e=b[1];var f=c("useStable")(e);if(f!==a){c("recoverableViolation")("Error nux changed at runtime from "+((e=f)!=null?e:"null")+" to "+((e=a)!=null?e:"null")+", this is not supported and will lead to erratic behavior, we have continued to use your initially supplied nux","comet_ui")}e=k(!1);var g=e[0],h=e[1];e=i(c("CometNUXManagerContext"));var l=e.registerNUX;e=e.removeNUX;var m,n;b[2]!==f||b[3]!==l?(m=function(){if(f==null)return;return l(f,h,!0)},n=[f,l],b[2]=f,b[3]=l,b[4]=m,b[5]=n):(m=b[4],n=b[5]);j(m,n);m=c("useNUXLoggers")(f,e);b[6]!==g||b[7]!==m?(n=[g,m],b[6]=g,b[7]=m,b[8]=n):n=b[8];return n}g["default"]=a}),98);