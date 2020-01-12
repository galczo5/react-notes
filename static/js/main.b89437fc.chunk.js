(this["webpackJsonpreact-notes"]=this["webpackJsonpreact-notes"]||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(21),n(22);var i=n(1),l=n(7),u=n(5),s=n(2),m=n(14),d=n(15),v=function(){function e(t,n,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];Object(m.a)(this,e),this.id=t,this.title=n,this.content=a,this.children=r,this.id=t,this.title=n,this.content=a,this.children=r}return Object(d.a)(e,[{key:"getId",value:function(){return this.id}},{key:"setId",value:function(e){this.id=e}},{key:"getTitle",value:function(){return this.title}},{key:"setTitle",value:function(e){this.title=e}},{key:"getContent",value:function(){return this.content}},{key:"setContent",value:function(e){this.content=e}},{key:"getChildren",value:function(){return this.children}},{key:"setChildren",value:function(e){this.children=e}}]),e}(),f={notes:[],openedNotes:[],filteredNotes:[],filter:"",path:[],active:null};function h(e){var t=Object(s.a)(e),n=!0,a=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var i=h(c.value.getChildren());t=[].concat(Object(s.a)(t),Object(s.a)(i))}}catch(l){a=!0,r=l}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return t}function E(e,t){var n=!0,a=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var i=c.value;if(i.getId()===t)return i;var l=E(i.getChildren(),t);if(l)return l}}catch(u){a=!0,r=u}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return null}function b(e,t){var n=!0,a=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var i=c.value;if(i.getId()===t)return[i];var l=b(i.getChildren(),t);if(0!==l.length)return[i].concat(Object(s.a)(l))}}catch(u){a=!0,r=u}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return[]}function g(e,t){for(var n=0;n<e.length;n++)t.getId()===e[n].getId()&&(e[n]=t),g(e[n].getChildren(),t)}var p=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;if("ADD_NOTE"===t.type){var n=Object(s.a)(e.notes);e.active?e.active.setChildren([].concat(Object(s.a)(e.active.getChildren()),[t.note])):n=[].concat(Object(s.a)(e.notes),[t.note]);var a=[].concat(Object(s.a)(e.openedNotes),[t.note]);return Object(u.a)({},e,{active:t.note,openedNotes:a,notes:n,path:b(n,t.note.id)})}if("SET_ACTIVE_NOTE"===t.type){var r=E(e.notes,t.note.id),c=e.openedNotes;return e.active&&r&&r.getId()===e.active.getId()?r=null:r&&-1===c.indexOf(r)&&(c=[].concat(Object(s.a)(c),[r])),Object(u.a)({},e,{active:r,openedNotes:c,path:r?b(e.notes,r.getId()):[]})}if("UPDATE_NOTE"===t.type)return g(e.notes,t.note),Object(u.a)({},e,{active:t.note});if("SET_FILTER"===t.type){var o=h(e.notes),i=t.filter,l=o.filter((function(e){return-1!==e.getTitle().indexOf(i)||-1!==e.getContent().indexOf(i)})).map((function(e){return new v(e.getId(),e.getTitle(),e.getContent(),[])}));return Object(u.a)({},e,{filter:i,filteredNotes:l})}if("CLOSE_ACTIVE"===t.type){var m=e.openedNotes.filter((function(t){var n;return t.getId()!==(null===(n=e.active)||void 0===n?void 0:n.getId())}));return Object(u.a)({},e,{active:m.length?m[0]:null,openedNotes:m})}return e})),N=function(e){return a.createElement("div",{className:"card-title mb-0"},a.createElement("i",{className:"fas fa-sticky-note mr-2"}),a.createElement("b",null,e.title))},y=function(e){return{type:"UPDATE_NOTE",note:e}},O=function(e){return{type:"SET_ACTIVE_NOTE",note:e}},j=function(){return{type:"CLOSE_ACTIVE"}},C=function(){var e=Object(i.c)((function(e){return e.filter})),t=Object(i.b)();return a.createElement("div",{className:"input-group"},a.createElement("div",{className:"input-group-prepend"},a.createElement("span",{className:"input-group-text"},a.createElement("i",{className:"fas fa-search"}))),a.createElement("input",{type:"text",className:"form-control",placeholder:"Search...",value:e,onChange:function(e){var n=e.target.value;t(function(e){return{type:"SET_FILTER",filter:e}}(n))}}))},k=function(){return a.createElement("div",{className:"card-header"},a.createElement("div",{className:"row align-items-center"},a.createElement("div",{className:"col"},a.createElement(N,{title:"React notes app"})),a.createElement("div",{className:"col-auto"},a.createElement(C,null))))};n(28);function w(){return r.a.createElement("div",{className:"d-flex align-items-center justify-content-center",style:{height:"60vh"}},r.a.createElement("div",{className:"font-weight-bold",style:{opacity:".3"}},"Select note to update"))}var x=function(e){var t=Object(i.b)();return a.createElement("div",{className:"form-group mb-1"},a.createElement("input",{type:"text",className:"form-control form-control-lg bg-dark border-dark text-white font-weight-bold",value:e.activeNote.getTitle(),onChange:function(n){var a=new v(e.activeNote.getId(),n.target.value,e.activeNote.getContent(),e.activeNote.getChildren());t(y(a))}}))},T=function(e){var t=Object(i.b)();return a.createElement("div",{className:"form-group mb-0"},a.createElement("textarea",{className:"form-control pl-3 bg-dark border-dark text-white",style:{height:"60vh"},value:e.activeNote.getContent(),onChange:function(n){var a=new v(e.activeNote.getId(),e.activeNote.getTitle(),n.target.value,e.activeNote.getChildren());t(y(a))}}))},I=function(e){var t=Object(i.b)(),n=e.path.map((function(e){return a.createElement("li",{key:e.getId(),className:"breadcrumb-item"},a.createElement("span",{className:"cursor-pointer",onClick:function(){return t(O(e))}},e.getTitle()))}));return a.createElement("ol",{className:"breadcrumb py-0 mb-1"},n)};function S(e){var t=Object(i.b)(),n=e.activeNote&&e.tab.getId()===e.activeNote.getId()?"bg-dark rounded-top":"",r="col-auto py-2 px-3 text-truncate "+n;return a.createElement("div",{className:r,style:{maxWidth:"100px"},onClick:function(){t(O(e.tab))}},n&&a.createElement("i",{className:"mr-2 fa fa-times",onClick:function(e){e.stopPropagation(),t(j())}}),e.tab.getTitle())}function _(){var e=Object(i.c)((function(e){return e.openedNotes})),t=Object(i.c)((function(e){return e.active})),n=e.map((function(e){return a.createElement(S,{tab:e,activeNote:t})}));return a.createElement("div",{className:"row mx-0"},n)}var A=function(){var e=Object(i.c)((function(e){return e.active})),t=Object(i.c)((function(e){return e.path}));return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement(_,null)),e&&a.createElement(a.Fragment,null,a.createElement("div",{className:"rounded-bottom bg-dark"},a.createElement(x,{activeNote:e}),a.createElement(I,{path:t}),a.createElement(T,{activeNote:e}))),!e&&a.createElement("div",{className:"rounded bg-dark"},a.createElement(w,null)))},D=function(e){var t=Object(i.b)(),n=e.activeNote&&e.note.getId()===e.activeNote.getId()?"text-white":"";return a.createElement("li",{className:"list-group-item border-0 px-0 py-0"},a.createElement("div",{className:"d-flex justify-content-between align-items-center py-2 "+n,onClick:function(){t(O(e.note))}},e.note.getTitle()),a.createElement("div",{className:"pl-3"},a.createElement(F,{notes:e.note.getChildren(),activeNote:e.activeNote})))},F=function(e){var t=e.notes.map((function(t){return a.createElement(D,{key:t.getId(),note:t,activeNote:e.activeNote})}));return a.createElement("ul",{className:"list-group border-0"},t)},L=n(11),V=function(e){return a.createElement("div",{className:"btn-group"},a.createElement("button",{className:"btn btn-sm btn-secondary text-center",style:{width:"30px"},onClick:e.addNote},a.createElement("i",{className:"fa fa-check"})),a.createElement("button",{className:"btn btn-sm btn-secondary text-center",style:{width:"30px"},onClick:e.hideForm},a.createElement("i",{className:"fa fa-times"})))},P=function(){var e=Object(i.b)(),t=Object(a.useState)(!1),n=Object(L.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),l=Object(L.a)(o,2),u=l[0],s=l[1];return a.createElement("div",{style:{height:"32px"}},!r&&a.createElement("span",{className:"font-weight-bold cursor-pointer",onClick:function(){return c(!0)}},"Create new note"),r&&a.createElement("div",{className:"row"},a.createElement("div",{className:"col pr-0"},a.createElement("input",{type:"text",className:"form-control form-control-sm border-success",value:u,onChange:function(e){return s(e.target.value)},placeholder:"Note title"})),a.createElement("div",{className:"col-auto pr-0 pl-1"},a.createElement(V,{addNote:function(){e(function(e){return{type:"ADD_NOTE",note:new v((new Date).getTime(),e,'Content of the "'.concat(e,'"...'),[])}}(u)),s(""),c(!1)},hideForm:function(){return c(!1)}}))))},R=function(){var e=Object(i.c)((function(e){return e.filter})),t=Object(i.c)((function(e){return e.filteredNotes})),n=Object(i.c)((function(e){return e.notes})),r=Object(i.c)((function(e){return e.active}));return a.createElement("div",null,a.createElement(P,null),a.createElement(F,{notes:e?t:n,activeNote:r}))};o.a.render(r.a.createElement(i.a,{store:p},r.a.createElement((function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"card shadow-lg"},r.a.createElement(k,null),r.a.createElement("div",{className:"card-body m-0 p-0"},r.a.createElement("div",{className:"app-grid"},r.a.createElement("div",{className:"p-3"},r.a.createElement(R,null)),r.a.createElement("div",{className:"p-3"},r.a.createElement(A,null))))))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.b89437fc.chunk.js.map