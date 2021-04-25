(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{131:function(e,t,a){e.exports=a(323)},140:function(e,t,a){},160:function(e,t,a){},318:function(e,t,a){},321:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(47),l=a.n(c),s=a(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,o=a(35),u=a(23),m=a(122),d=a(123),f=a(5),E=a(129),g=a(20),p=(a(140),function(){return r.a.createElement("svg",{width:"24px",height:"18px",viewBox:"0 0 24 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},r.a.createElement("g",{id:"Dashboard-\u2013-Tabular",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{transform:"translate(-30.000000, -25.000000)",fill:"#695FF6","fill-rule":"nonzero",id:"Header"},r.a.createElement("g",null,r.a.createElement("g",{id:"Group"},r.a.createElement("g",{transform:"translate(30.000000, 23.000000)"},r.a.createElement("g",{id:"shuffle-98",transform:"translate(0.000000, 2.000000)"},r.a.createElement("path",{d:"M0,5 L4.219,5 C5.069,5 5.881,5.362 6.448,5.993 L7.809,7.505 L9.154,6.01 L7.934,4.654 C6.989,3.604 5.635,3 4.219,3 L0,3 L0,5 Z",id:"Path"}),r.a.createElement("path",{d:"M24,4 L19,0 L19,3 L16.781,3 C15.365,3 14.01,3.604 13.065,4.655 L6.448,12.007 C5.881,12.638 5.068,13 4.219,13 L0,13 L0,15 L4.219,15 C5.635,15 6.99,14.396 7.935,13.345 L14.552,5.993 C15.119,5.362 15.932,5 16.781,5 L19,5 L19,8 L24,4 Z",id:"Path"}),r.a.createElement("path",{d:"M24,14 L19,10 L19,13 L16.781,13 C15.931,13 15.119,12.638 14.552,12.007 L13.191,10.495 L11.846,11.99 L13.066,13.345 C14.011,14.397 15.366,15 16.782,15 L19,15 L19,18 L24,14 Z",id:"Path"}))))))))}),v=a(28),h=a.n(v),b=a(51),_=a(52),k=a.n(_),w=a(26),j=Object(w.b)({name:"timer",initialState:{status:null},reducers:{getTimerStart:function(e){},getTimerSuccess:function(e,t){e.status=t.payload},getTimerFailure:function(e,t){}}}),L=j,O=function(){var e=Object(u.f)(),t=Object(s.b)();Object(n.useEffect)((function(){t(function(){var e=Object(b.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(j.actions.getTimerStart()),e.next=4,k.a.get("/orchestra/api/interface/timer/");case 4:a=e.sent,n=a.data,t(j.actions.getTimerSuccess(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(j.actions.getTimerFailure(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]);return r.a.createElement("div",{className:"navbar"},r.a.createElement(d.a,null,r.a.createElement("div",{className:"navbar__home align-row",onClick:function(){e.push("/")}},r.a.createElement(p,null),r.a.createElement("h4",null,"Orchestra")),r.a.createElement("div",{className:"navbar__timecard align-row"},r.a.createElement(f.b,null),r.a.createElement("p",null,"2h 15m")),r.a.createElement(E.a,{className:"navbar__dropdown",simple:!0,toggle:r.a.createElement("div",{className:"navbar__avatar align-row"},r.a.createElement(m.a,{primaryText:"Elston Aijan"}),r.a.createElement(f.a,{className:"navbar__avatar-caret"}))},r.a.createElement(g.a,{label:"Dashboard",onClick:function(){e.push("/")}}),r.a.createElement(g.a,{label:"Timecard",onClick:function(){e.push("/timecard/")}}),r.a.createElement(g.a,{label:"Available tasks",onClick:function(){e.push("/communication/available-staffing-requests")}}),r.a.createElement(g.a,{label:"Project management",onClick:function(){e.push("/project/")}}),r.a.createElement(g.a,{label:"Account settings",onClick:function(){e.push("/accounts/settings")}}),r.a.createElement(g.a,{label:"Sign out",onClick:function(){e.push("/accounts/logout_then_login")}}))))},x=function(){return r.a.createElement("div",null,"Available tasks table")},C=a(22),y=a(30),N=(a(160),a(125)),S=a(53),T=a(74),P=a(29),A=a(7),M=a(126),D=a(128),I=a(130),z=(a(318),function(){return r.a.createElement("div",{className:"animated-circle"},r.a.createElement(f.h,null))}),F=a(31),R=a.n(F),J=function(e){return e?R.a.utc(e).tz(R.a.tz.guess()):null},Y=function(e){var t=e?R.a.utc(e).tz(R.a.tz.guess()):null;return t&&t.isSame(new Date,"day")?"[Today], h:mm a":null},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=J(e);return null===n?null:t?n.format(t):a?n.format("ddd, MMM D h:mm a"):n.format("ddd, MMM D")},W={Details:"detail","Project / Task":"project",Assigned:"assignment_start_datetime"},Z=function(e){var t=e.status,a=e.tasks,c=e.isLoading,l=void 0!==c&&c,s=Object(n.useState)({column:null,direction:"ascending"}),i=Object(y.a)(s,2),o=i[0],m=i[1],d=Object(n.useState)([]),E=Object(y.a)(d,2),g=E[0],p=E[1];Object(n.useEffect)((function(){p(a)}),[a]);var v=Object(n.useState)(""),h=Object(y.a)(v,2),b=h[0],_=h[1];Object(n.useEffect)((function(){var e=a.filter((function(e){var t=b.toLocaleLowerCase();return e.detail.toLowerCase().includes(t)||e.project.toLowerCase().includes(t)||e.step.toLowerCase().includes(t)}));p(e)}),[b]);var k={default:"primary",primary:"primary",success:"success",info:"neutral",warning:"warning",danger:"warning"},w=Object(u.f)(),j=function(e){var t={direction:e!==o.column?"ascending":"ascending"===o.direction?"descending":"ascending",column:e},a=function(e,t){var a=t.column,n=t.direction,r=e;return r.sort((function(e,t){var r,c=null!==(r=W[a])&&void 0!==r?r:W.Details;return e[c].toLowerCase()>t[c].toLowerCase()?"ascending"===n?1:-1:"ascending"===n?-1:1})),r}(g,t);p(a),m(t)},L="".concat(a.length," task").concat(a.length>1?"s":"");return r.a.createElement("div",{className:"tasks-list__wrapper"},r.a.createElement(N.a,{padding:"compact",verticalAlign:"middle",className:"tasks-list",cardLike:!0},r.a.createElement(S.a,{padding:"compact"},r.a.createElement(P.a,null,r.a.createElement("th",{className:"tasks-list__status-row"},r.a.createElement("b",null,r.a.createElement(I.a,{status:t,className:"dsu-mr-xxxsm",statusLabels:{success:"Active",error:"Paused",default:"Completed",warning:"Pending"}})),l?r.a.createElement(z,null):r.a.createElement("p",null,L)),r.a.createElement("th",{colSpan:2}),r.a.createElement("th",{colSpan:4},r.a.createElement("div",{className:"navbar__textfield"},r.a.createElement(M.a,{placeholder:"Search projects...",searchIcon:!0,onUpdate:function(e){_(e)},value:b}))))),r.a.createElement(S.a,null,r.a.createElement(P.a,null,["Details","Project / Task","Assigned","Next steps","Start by","Due by"].map((function(e,t){return r.a.createElement(A.a,{key:e,align:"left",className:"tasks-list__col-".concat(t+1),onClick:function(){return j(e)}},r.a.createElement("div",{className:"tasks-list__col-header"},r.a.createElement("p",null,e),o.column===e&&("ascending"===o.direction?r.a.createElement(f.a,null):r.a.createElement(f.a,{className:"caret-up"}))))})))),r.a.createElement(T.a,null,0!==g.length||l?g.map((function(e){var t,a=B(e.assignment_start_datetime,"MM/DD/YYYY"),n=B(e.next_todo_dict.start_by_datetime,Y(e.next_todo_dict.start_by_datetime)),c=B(e.next_todo_dict.due_datetime,Y(e.next_todo_dict.due_datetime)),l="/task/".concat(e.id),s=(t=e.next_todo_dict.due_datetime,R()().utc().isAfter(t)&&"complete"!==e.state);return r.a.createElement(P.a,{key:e.id,onClick:function(e){e.ctrlKey||e.metaKey?window.open("/orchestra/newapp/#"+l,"_blank"):w.push(l)},className:s&&"grey-out"},r.a.createElement(A.a,{className:"tasks-list__col-1"},r.a.createElement("h4",null,e.detail),e.tags.map((function(e,t){var a,n=(a={},Object(C.a)(a,k[e.status],!0),Object(C.a)(a,"selected","danger"===e.status||"primary"===e.status),a);return r.a.createElement(D.a,Object.assign({key:t,size:"small",label:e.label,filled:!0,className:"dsu-mr-xxxsm"},n))}))),r.a.createElement(A.a,{className:"tasks-list__col-2"},r.a.createElement("p",null,e.project," / ",e.step)),r.a.createElement(A.a,{className:"tasks-list__col-3"},r.a.createElement("p",null,a)),r.a.createElement(A.a,{className:"tasks-list__col-4"},r.a.createElement("p",null,e.next_todo_dict.description)),r.a.createElement(A.a,{className:"tasks-list__col-5"},r.a.createElement("p",null,n)),r.a.createElement(A.a,null,r.a.createElement("p",null,c)))})):r.a.createElement(P.a,null,r.a.createElement(A.a,null),r.a.createElement(A.a,null),r.a.createElement(A.a,null,r.a.createElement("p",null,"No tasks")),r.a.createElement(A.a,null),r.a.createElement(A.a,null),r.a.createElement(A.a,null)))))},q=Object(w.b)({name:"dashboardTasks",initialState:{tasks:[],reviewerStatus:!1,loading:!1,error:null},reducers:{getTodosStart:function(e){e.loading=!0,e.error=null},getTodosSuccess:function(e,t){e.tasks=t.payload.tasks,e.reviewerStatus=t.payload.reviewerStatus,e.loading=!1},getTodosFailure:function(e,t){e.loading=!1,e.error=t.payload}}}),K=q,G=a(6);!function(e){e.JustAdded="just_added",e.InProgress="in_progress",e.Returned="returned",e.PendingReview="pending_review",e.PendingProcessing="pending_processing",e.Paused="paused",e.Complete="complete"}(i||(i={}));var H=[i.JustAdded,i.InProgress,i.Returned],U=[i.PendingReview,i.PendingProcessing],X=function(e){return e.dashboardTasks.tasks},$=Object(G.a)(X,(function(e){return e.filter((function(e){return H.includes(e.state)&&e.should_be_active}))})),Q=Object(G.a)(X,(function(e){return e.filter((function(e){return H.includes(e.state)&&!e.should_be_active||U.includes(e.state)}))})),V=Object(G.a)(X,(function(e){return e.filter((function(e){return e.state===i.Paused}))})),ee=Object(G.a)(X,(function(e){return e.filter((function(e){return e.state===i.Complete}))})),te=function(e){return e.dashboardTasks.loading},ae=function(){var e=Object(s.b)();Object(n.useEffect)((function(){e(function(){var e=Object(b.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(q.actions.getTodosStart()),e.next=4,k.a.get("/orchestra/api/interface/dashboard_tasks/");case 4:a=e.sent,n=a.data,t(q.actions.getTodosSuccess(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(q.actions.getTodosFailure(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(s.c)($),a=Object(s.c)(Q),c=Object(s.c)(V),l=Object(s.c)(ee),i=Object(s.c)(te);return r.a.createElement("div",null,r.a.createElement(Z,{status:"success",tasks:t,isLoading:i}),r.a.createElement(Z,{status:"warning",tasks:a,isLoading:i}),r.a.createElement(Z,{status:"error",tasks:c,isLoading:i}),r.a.createElement(Z,{status:"default",tasks:l,isLoading:i}))},ne=function(){var e=Object(u.g)().taskId;return r.a.createElement("div",null,"Task view: ",e)};a(321);var re,ce=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/task/:taskId",children:r.a.createElement(ne,null)}),r.a.createElement(u.a,{path:"/project/:projectId?",children:r.a.createElement("div",null,"Project management")}),r.a.createElement(u.a,{path:"/timecard",children:r.a.createElement("div",null,"Timecard")}),r.a.createElement(u.a,{path:"/communication/available-staffing-requests",children:r.a.createElement(x,null)}),r.a.createElement(u.a,{path:"/accounts/settings",children:r.a.createElement("div",null,"Account settings")}),r.a.createElement(u.a,{path:"/accounts/logout_then_login",children:r.a.createElement("div",null,"Sign out")}),r.a.createElement(u.a,{path:"/",children:r.a.createElement(ae,null)})))))},le=a(15),se=Object(le.c)((re={},Object(C.a)(re,K.name,K.reducer),Object(C.a)(re,L.name,L.reducer),re)),ie=Object(w.a)({reducer:se});a(322);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:ie},r.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.c276df28.chunk.js.map