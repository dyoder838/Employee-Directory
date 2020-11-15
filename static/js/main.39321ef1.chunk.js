(this["webpackJsonpEmployee-Directory"]=this["webpackJsonpEmployee-Directory"]||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a(0),c=a.n(i),r=a(10),l=a.n(r),s=a(22),o=a(65),d=a(66),u=a(75),b=a(74),h=a(67),j=a.n(h),p=function(){return j.a.get("https://randomuser.me/api/?results=200&nat=us")},m=a(27),g=a(3),O=a(161),f=a(11),x=a(165),v=a(166),y=a(160),k=a(164),w=a(155),S=a(170),P=a(159),C=a(173),N=a(162),E=a(115),R=a(116),I=a(171),D=a(114),B=a(174),L=a(167),A=a(168),M=a(70),q=a.n(M),F=a(71),G=a.n(F);function H(e){var t=e.list;function a(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var i=[{id:"image",numeric:!1,disablePadding:!1,label:"Photo"},{id:"first",numeric:!1,disablePadding:!1,label:"First Name"},{id:"last",numeric:!1,disablePadding:!1,label:"Last Name"},{id:"email",numeric:!1,disablePadding:!1,label:"Email"},{id:"phone",numeric:!1,disablePadding:!1,label:"Phone Number"}];function r(e){var t=e.classes,a=e.onSelectAllClick,c=e.order,r=e.orderBy,l=e.numSelected,s=e.rowCount,o=e.onRequestSort;return Object(n.jsx)(w.a,{children:Object(n.jsxs)(P.a,{children:[Object(n.jsx)(y.a,{padding:"checkbox",children:Object(n.jsx)(I.a,{indeterminate:l>0&&l<s,checked:s>0&&l===s,onChange:a,inputProps:{"aria-label":"select all employees"}})}),i.map((function(e){return Object(n.jsx)(y.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&c,children:Object(n.jsxs)(C.a,{active:r===e.id,direction:r===e.id?c:"asc",onClick:(a=e.id,function(e){o(e,a)}),children:[e.label,r===e.id?Object(n.jsx)("span",{className:t.visuallyHidden,children:"desc"===c?"sorted descending":"sorted ascending"}):null]})},e.id);var a}))]})})}var l=Object(O.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(f.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),o=function(e){var t=l(),a=e.numSelected;return Object(n.jsxs)(N.a,{className:Object(g.a)(t.root,Object(s.a)({},t.highlight,a>0)),children:[a>0?Object(n.jsxs)(E.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div",children:[a," selected"]}):Object(n.jsx)(E.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:"Employees"}),a>0?Object(n.jsx)(B.a,{title:"Delete",children:Object(n.jsx)(D.a,{"aria-label":"delete",children:Object(n.jsx)(q.a,{})})}):Object(n.jsx)(B.a,{title:"Filter list",children:Object(n.jsx)(D.a,{"aria-label":"filter list",children:Object(n.jsx)(G.a,{})})})]})},d=Object(O.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}))(),u=c.a.useState("asc"),b=Object(m.a)(u,2),h=b[0],j=b[1],p=c.a.useState("phone"),M=Object(m.a)(p,2),F=M[0],H=M[1],J=c.a.useState([]),T=Object(m.a)(J,2),W=T[0],z=T[1],K=c.a.useState(0),Q=Object(m.a)(K,2),U=Q[0],V=Q[1],X=c.a.useState(!1),Y=Object(m.a)(X,2),Z=Y[0],$=Y[1],_=c.a.useState(5),ee=Object(m.a)(_,2),te=ee[0],ae=ee[1],ne=te-Math.min(te,t.length-U*te);return Object(n.jsxs)("div",{className:d.root,children:[Object(n.jsxs)(R.a,{className:d.paper,children:[Object(n.jsx)(o,{numSelected:W.length}),Object(n.jsx)(k.a,{children:Object(n.jsxs)(x.a,{className:d.table,"aria-labelledby":"tableTitle",size:Z?"small":"medium","aria-label":"enhanced table",children:[Object(n.jsx)(r,{classes:d,numSelected:W.length,order:h,orderBy:F,onSelectAllClick:function(e){if(e.target.checked){var a=t.map((function(e){return e.image}));z(a)}else z([])},onRequestSort:function(e,t){j(F===t&&"asc"===h?"desc":"asc"),H(t)},rowCount:t.length}),Object(n.jsxs)(v.a,{children:[function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(t,function(e,t){return"desc"===e?function(e,n){return a(e,n,t)}:function(e,n){return-a(e,n,t)}}(h,F)).slice(U*te,U*te+te).map((function(e,t){var a,i=(a=e.image,-1!==W.indexOf(a)),c="enhanced-table-checkbox-".concat(t);return Object(n.jsxs)(P.a,{hover:!0,onClick:function(t){return function(e,t){var a=W.indexOf(t),n=[];-1===a?n=n.concat(W,t):0===a?n=n.concat(W.slice(1)):a===W.length-1?n=n.concat(W.slice(0,-1)):a>0&&(n=n.concat(W.slice(0,a),W.slice(a+1))),z(n)}(0,e.image)},role:"checkbox","aria-checked":i,tabIndex:-1,selected:i,children:[Object(n.jsx)(y.a,{padding:"checkbox",children:Object(n.jsx)(I.a,{checked:i,inputProps:{"aria-labelledby":c}})}),Object(n.jsx)(y.a,{align:"left",src:e.image,component:"th",id:c,scope:"row",padding:"none",children:Object(n.jsx)("img",{src:e.image,alt:"employee"})}),Object(n.jsx)(y.a,{align:"left",children:e.first}),Object(n.jsx)(y.a,{align:"left",children:e.last}),Object(n.jsx)(y.a,{align:"left",children:e.email}),Object(n.jsx)(y.a,{align:"left",children:e.phone})]},e.image)})),ne>0&&Object(n.jsx)(P.a,{style:{height:(Z?33:53)*ne},children:Object(n.jsx)(y.a,{colSpan:7})})]})]})}),Object(n.jsx)(S.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:te,page:U,onChangePage:function(e,t){V(t)},onChangeRowsPerPage:function(e){ae(parseInt(e.target.value,10)),V(0)}})]}),Object(n.jsx)(L.a,{control:Object(n.jsx)(A.a,{checked:Z,onChange:function(e){$(e.target.checked)}}),label:"Dense padding"})]})}var J=a(169),T=a(175),W=a(72),z=a.n(W),K=a(73),Q=a.n(K),U=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(s.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(f.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(f.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function V(){var e=U();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(J.a,{position:"static",children:Object(n.jsxs)(N.a,{children:[Object(n.jsx)(D.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(n.jsx)(z.a,{})}),Object(n.jsx)(E.a,{className:e.title,variant:"h6",noWrap:!0,children:"Employee Database"}),Object(n.jsxs)("div",{className:e.search,children:[Object(n.jsx)("div",{className:e.searchIcon,children:Object(n.jsx)(Q.a,{})}),Object(n.jsx)(T.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})]})})})}var X=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={employees:[],filteredEmployees:[],search:""},e.handleInputChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(s.a)({},n,a))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getRandomEmployees()}},{key:"getRandomEmployees",value:function(){var e=this;p().then((function(t){console.log(t.data);var a=t.data.results.map((function(e){return{image:e.picture.thumbnail,first:e.name.first,last:e.name.last,email:e.email,phone:e.phone}}));e.setState({employees:a,filteredEmployees:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(V,{}),Object(n.jsx)(H,{list:this.state.employees,handleSubmit:this.handleSubmit})]})}}]),a}(i.Component);var Y=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(X,{})})};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(Y,{})}),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.39321ef1.chunk.js.map