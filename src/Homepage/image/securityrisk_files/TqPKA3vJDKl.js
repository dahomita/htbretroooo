;/*FB_PKG_DELIM*/

__d("LSHandleCutoverSuccess.nop",["MAWOnDemandCutoverQPLLogger","Promise"],(function(a,b,c,d,e,f,g){"use strict";var h;a=function(a,c,e,f,g,i){if(g===!0)d("MAWOnDemandCutoverQPLLogger").endSuccessIfInProgress(e,i);else if(i==="on_demand_cutover_ineligible")d("MAWOnDemandCutoverQPLLogger").endCancelIfInProgress(e,i);else{d("MAWOnDemandCutoverQPLLogger").endFailureIfInProgress(e,(a=i)!=null?a:"unknown")}return(h||(h=b("Promise"))).resolve()};g["default"]=a}),98);
__d("LSHandleTriggerOnDemandCutoverIfNeededResult",["LSHandleCutoverSuccess.nop"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[];return c.sequence([function(d){return c.nativeOperation(b("LSHandleCutoverSuccess.nop"),a[0],void 0,a[1],a[2])},function(a){return c.resolve(d)}])}a.__sproc_name__="LSE2EEMessagingMetadataMailboxHandleTriggerOnDemandCutoverIfNeededResultStoredProcedure";a.__tables__=[];e.exports=a}),null);
__d("LSInsertMiActMappingIfNotExists",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(173).fetch([[[a[0]]],"jid"]).next().then(function(c){var d=c.done;c.value;return d?b.db.table(173).add({jid:a[0],clientThreadPk:a[0],serverThreadKey:a[1]}):0})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSE2EEMessagingMetadataMailboxInsertMiActMappingIfNotExistsStoredProcedure";a.__tables__=["mi_act_mapping_table"];e.exports=a}),null);
__d("LSInsertOpenToE2EEThreadLinkIfNotExist",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(193).fetch([[[a[0]]]]).next().then(function(c){var d=c.done;c.value;return d?b.db.table(193).add({openThreadId:a[0],armadilloThreadId:a[1],showOpenMessageHistory:a[2],timestampMs:a[3]}):0})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSE2EEMessagingMetadataMailboxInsertOpenToE2EEThreadLinkIfNotExistStoredProcedure";a.__tables__=["cutover_threads"];e.exports=a}),null);