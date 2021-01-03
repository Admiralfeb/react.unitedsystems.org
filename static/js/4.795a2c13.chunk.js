(this["webpackJsonpusc-website"]=this["webpackJsonpusc-website"]||[]).push([[4],{423:function(e,n,t){"use strict";var i;t.d(n,"a",(function(){return i})),function(e){e.jump="Jump Ship",e.hge="HGE Farming",e.cargo="Cargo",e.passenger="Passenger",e.mining="Miner",e.pve="Combat - PvE",e.pvp="Combat - PvP",e.ax="Combat - Anti-Xeno",e.racing="Racing",e.multi="Multi-Purpose"}(i||(i={}))},424:function(e,n,t){"use strict";var i=t(427);t.o(i,"ShipSize")&&t.d(n,"ShipSize",(function(){return i.ShipSize}));var a=t(428);t.o(a,"ShipSize")&&t.d(n,"ShipSize",(function(){return a.ShipSize}));var r=t(429);t.o(r,"ShipSize")&&t.d(n,"ShipSize",(function(){return r.ShipSize}));var c=t(430);t.o(c,"ShipSize")&&t.d(n,"ShipSize",(function(){return c.ShipSize}));var s=t(431);t.o(s,"ShipSize")&&t.d(n,"ShipSize",(function(){return s.ShipSize}));var l=t(432);t.d(n,"ShipSize",(function(){return l.a}));t(423)},427:function(e,n){},428:function(e,n){},429:function(e,n){},430:function(e,n){},431:function(e,n){},432:function(e,n,t){"use strict";var i;t.d(n,"a",(function(){return i})),function(e){e[e.S=1]="S",e[e.M=2]="M",e[e.L=3]="L"}(i||(i={}))},463:function(e,n,t){"use strict";t.r(n),t.d(n,"ShipBuildSystemRoutes",(function(){return vn}));var i=t(1),a=t(26),r=t(57),c=t(7),s=t.n(c),l=t(11),o=t(13),u=t(17),d=t(18),b=t(220),j=t(398),p=t(98),h=t(351),f=t(396),O=t(353),x=t(435),g=t(0),v=t(19),m=t(51),w=t(169),y=function(e){return w.find((function(n){return n.shipId===e}))},S=function(e,n,t){var i=!1,a=e.filter((function(e){return null===e||void 0===e?void 0:e.blueprint})),r=n.filter((function(e){return null===e||void 0===e?void 0:e.blueprint})),c=t.powerPlant.blueprint,s=t.thrusters.blueprint,l=t.frameShiftDrive.blueprint,o=t.lifeSupport.blueprint,u=t.powerDistributor.blueprint,d=t.sensors.blueprint;return(a.length>0||r.length>0||c||s||l||o||u||d)&&(i=!0),i},k=function(e,n){var t=!1,i=e.find((function(e){var n;return null===e||void 0===e||null===(n=e.group)||void 0===n?void 0:n.toLowerCase().startsWith("prismatic")}));return!1===t&&i&&(t=!0),["disruptor","imperial hammer","pack-hound","mining lance","enforcer","cytoscrambler","retributor","advanced plasma accelerator","pacifier","rocket propelled fsd disruptor"].forEach((function(e){if(!1===t){var i=n.find((function(n){var t;return(null===n||void 0===n||null===(t=n.name)||void 0===t?void 0:t.toLowerCase())===e.toLowerCase()}));t=!!i}})),t},B=function(e,n,t){var i,a,r=!1,c=null!==(i=e.powerPlant.name)&&void 0!==i?i:"",s=null!==(a=e.powerDistributor.name)&&void 0!==a?a:"",l=n.find((function(e){var n;return null===e||void 0===e||null===(n=e.group)||void 0===n?void 0:n.toLowerCase().startsWith("guardian")})),o=t.find((function(e){var n;return null===e||void 0===e||null===(n=e.group)||void 0===n?void 0:n.toLowerCase().startsWith("guardian")}));return(c.toLowerCase().startsWith("guardian")||s.toLowerCase().startsWith("guardian")||l||o)&&(r=!0),r},N=t(28),I=t(455),L=t(423),C=Object(b.a)((function(e){return{querySection:Object(o.a)({width:"90%",minWidth:"90%",height:"100%",border:"2px solid gray",padding:"5px",borderRadius:"15px",margin:"auto",marginTop:e.spacing(1),marginBottom:e.spacing(1),textAlign:"center"},e.breakpoints.up("lg"),{width:"98%"}),querySectionheader:{marginTop:"5px",textAlign:"center"},queryExplanationText:{color:"rgba(255, 255, 255, 0.7)"}}})),z=Object(b.a)((function(e){return{querySpecialtyButtons:Object(o.a)({display:"grid",gridTemplate:"repeat(5, 1fr) / repeat(2, 1fr)","& button":{marginRight:e.spacing(1),marginTop:e.spacing(1)}},e.breakpoints.up("lg"),{gridTemplate:"repeat(2, 1fr) / repeat(5, 1fr)"})}})),E=function(e){var n=e.selectedSpecialties,t=e.setSpecialties,a=C(),r=z();return Object(i.jsxs)("div",{className:a.querySection,children:[Object(i.jsx)("h3",{className:a.querySectionheader,children:"Ship Specializations"}),Object(i.jsx)(p.a,{className:a.queryExplanationText,children:"Select specializations that the ship should fulfill."}),Object(i.jsx)("div",{className:r.querySpecialtyButtons,children:A().map((function(e){return Object(i.jsx)(I.a,{value:e,selected:n.includes(e),onChange:function(){return function(e){var i=[];i=n.includes(e)?n.filter((function(n){return n!==e})):[].concat(Object(N.a)(n),[e]),t(i)}(e)},children:e},e)}))})]})},A=function(){var e=[];for(var n in L.a)e=[].concat(Object(N.a)(e),[L.a[n]]);return e},_=t(466),q=t(456),D=t(426),G=t.n(D),P=t.p+"static/media/Engineer_icon.0eb84776.svg",R=Object(b.a)({engButton:{display:"flex","& img":{height:"20px",width:"20px"}}}),T=function(e){var n=e.engLevel,t=e.handleEngLevelChange,a=R();return Object(i.jsxs)(_.a,{value:n,exclusive:!0,onChange:t,children:[Object(i.jsx)(I.a,{value:0,children:Object(i.jsx)(q.a,{title:"No Engineering",arrow:!0,children:Object(i.jsx)("div",{className:a.engButton,children:Object(i.jsx)(G.a,{})})})}),Object(i.jsx)(I.a,{value:1,children:Object(i.jsx)(q.a,{title:"Simple Engineering",arrow:!0,children:Object(i.jsx)("div",{className:a.engButton,children:Object(i.jsx)("img",{src:P,alt:"engineeringIcon"})})})}),Object(i.jsx)(I.a,{value:2,children:Object(i.jsx)(q.a,{title:"Moderate Engineering",arrow:!0,children:Object(i.jsxs)("div",{className:a.engButton,children:[Object(i.jsx)("img",{src:P,alt:"engineeringIcon"}),Object(i.jsx)("img",{src:P,alt:"engineeringIcon"})]})})}),Object(i.jsx)(I.a,{value:3,children:Object(i.jsx)(q.a,{title:"End-Game/Extreme Engineering",arrow:!0,children:Object(i.jsxs)("div",{className:a.engButton,children:[Object(i.jsx)("img",{src:P,alt:"engineeringIcon"}),Object(i.jsx)("img",{src:P,alt:"engineeringIcon"}),Object(i.jsx)("img",{src:P,alt:"engineeringIcon"})]})})})]})},V=t(416),M=function(e){var n=e.id,t=e.label,a=e.value,r=e.onChange,c=e.isMultiline,s=e.disabled;return Object(i.jsx)(V.a,{variant:"outlined",id:n,label:t,multiline:c,rowsMax:10,value:a,onChange:r,disabled:s})},W=t(464),Q=t(82),F=function(e,n){return null===n?null:e.find((function(e){return e.shipId===n}))},J=function(e){var n=e.shipType,t=e.handleShipChange,a=w;return Object(i.jsx)(W.a,{id:"shipType",options:Object(Q.a)(a,"name"),autoHighlight:!0,getOptionLabel:function(e){return e.name},renderOption:function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("span",{children:e.name})})},renderInput:function(e){return Object(i.jsx)(V.a,Object(u.a)(Object(u.a)({},e),{},{label:"Ship Type",variant:"outlined",inputProps:Object(u.a)(Object(u.a)({},e.inputProps),{},{autocomplete:"new-password"})}))},value:F(a,n),onChange:t})},$=t(402),H=t(419),U=function(e){var n=e.label,t=e.name,a=e.checked,r=e.onChange,c=e.disabled;return Object(i.jsx)($.a,{label:n,control:Object(i.jsx)(H.a,{name:t,checked:a,onChange:r,disabled:c})})},Y=t(30),X=t(68);function K(){var e=Object(X.a)(["\n  mutation AddBuild($build: ShipBuildsv2InsertInput!) {\n    insertOneShipBuildsv2(data: $build) {\n      _id\n      shipId\n      specializations\n      title\n      buildLink\n      engLevel\n      hasGuardian\n      hasPowerplay\n      isBeginner\n      author\n      isVariant\n      variants\n      related\n      description\n      jsonBuild\n    }\n  }\n"]);return K=function(){return e},e}var Z=Object(Y.gql)(K());function ee(){var e=Object(X.a)(["\n  mutation ReplaceBuild($build: ShipBuildsv2InsertInput!) {\n    replaceOneShipBuildsv2(query: { _id: $buildID }, data: $build) {\n      _id\n      shipId\n      specializations\n      title\n      buildLink\n      engLevel\n      hasGuardian\n      hasPowerplay\n      isBeginner\n      author\n      isVariant\n      variants\n      related\n      description\n      jsonBuild\n    }\n  }\n"]);return ee=function(){return e},e}var ne=Object(Y.gql)(ee());function te(){var e=Object(X.a)(["\n  mutation UpdateRelatedOneShipBuildsv2(\n    $build: ShipBuildsv2QueryInput\n    $input: ShipBuildsv2UpdateInput!\n  ) {\n    updateOneShipBuildsv2(query: $build, set: $input) {\n      _id\n      related\n      variants\n    }\n  }\n"]);return te=function(){return e},e}var ie=Object(Y.gql)(te()),ae=function(){return{addBuild:re(),replaceBuild:le(),updateVariants:se(),updateRelated:ce()}},re=function(){var e=Object(Y.useMutation)(Z),n=Object(d.a)(e,1)[0];return function(){var e=Object(l.a)(s.a.mark((function e(t){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({variables:{build:Object(u.a)({},t)}});case 2:return i=e.sent,e.abrupt("return",i);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},ce=function(){var e=Object(Y.useMutation)(ie),n=Object(d.a)(e,1)[0];return function(){var e=Object(l.a)(s.a.mark((function e(t,i){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({variables:{build:{_id:t},input:{related:i}}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},se=function(){var e=Object(Y.useMutation)(ie),n=Object(d.a)(e,1)[0];return function(){var e=Object(l.a)(s.a.mark((function e(t,i){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({variables:{build:{_id:t},input:{variants:i}}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},le=function(){var e=Object(Y.useMutation)(ne),n=Object(d.a)(e,1)[0];return function(){var e=Object(l.a)(s.a.mark((function e(t){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({variables:{buildID:t._id,build:Object(u.a)({},t)}});case 2:return i=e.sent,e.abrupt("return",i);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()};function oe(){var e=Object(X.a)(["\n  query AllShipBuildsv2s {\n    shipBuildsv2s(sortBy: SHIPID_ASC) {\n      _id\n      shipId\n      specializations\n      title\n      buildLink\n      engLevel\n      hasGuardian\n      hasPowerplay\n      isBeginner\n      author\n      isVariant\n      variants\n      related\n      description\n      jsonBuild\n    }\n  }\n"]);return oe=function(){return e},e}var ue=Object(Y.gql)(oe()),de=function(){var e=je(),n=pe(),t=be(),i=t.shipBuilds,a=t.loading,r=t.error,c=ae();return{loading:a,shipBuilds:i,error:r,addBuild:c.addBuild,addRelated:e,addVariant:n,replaceBuild:c.replaceBuild}},be=function(){var e,n=Object(Y.useQuery)(ue),t=n.data,i=n.loading,a=n.error;return{shipBuilds:null!==(e=null===t||void 0===t?void 0:t.shipBuildsv2s)&&void 0!==e?e:[],loading:i,error:a}},je=function(){var e=ae(),n=e.addBuild,t=e.updateRelated;return function(){var e=Object(l.a)(s.a.mark((function e(i,a,r){var c,l,o,u,d,b,j,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c=a.find((function(e){return e._id===i})))){e.next=36;break}return l=c.related,(o=r).related=c.related,o.related=[].concat(Object(N.a)(o.related),[i]),e.next=8,n(o);case 8:if(u=e.sent.data,console.log(u),!u){e.next=33;break}if(!(d=u.insertOneShipBuildsv2._id)){e.next=31;break}return e.next=15,t(i,[].concat(Object(N.a)(l),[d]));case 15:b=Object(m.a)(l),e.prev=16,p=s.a.mark((function e(){var n,i,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=j.value,!(i=a.find((function(e){return e._id===n})))){e.next=6;break}return r=[].concat(Object(N.a)(i.related),[d]),e.next=6,t(i._id,r);case 6:case"end":return e.stop()}}),e)})),b.s();case 19:if((j=b.n()).done){e.next=23;break}return e.delegateYield(p(),"t0",21);case 21:e.next=19;break;case 23:e.next=28;break;case 25:e.prev=25,e.t1=e.catch(16),b.e(e.t1);case 28:return e.prev=28,b.f(),e.finish(28);case 31:e.next=34;break;case 33:throw new Error("Reference build and related builds not updated");case 34:e.next=37;break;case 36:throw new Error("Reference build cannot be found");case 37:case"end":return e.stop()}}),e,null,[[16,25,28,31]])})));return function(n,t,i){return e.apply(this,arguments)}}()},pe=function(){var e=ae(),n=e.addBuild,t=e.updateVariants,i=e.updateRelated;return function(){var e=Object(l.a)(s.a.mark((function e(a,r,c){var l,o,u,d,b,j,p,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(l=r.find((function(e){return e._id===a})))){e.next=36;break}return o=l.variants,(u=c).isVariant=!0,u.related=o,e.next=8,n(u);case 8:if(!(d=e.sent.data)){e.next=33;break}if(!(b=d.insertOneShipBuildsv2._id)){e.next=31;break}return console.log(b),e.next=15,t(a,[].concat(Object(N.a)(o),[b]));case 15:j=Object(m.a)(o),e.prev=16,h=s.a.mark((function e(){var n,t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=p.value,console.log(n),!(t=r.find((function(e){return e._id===n})))){e.next=7;break}return a=[].concat(Object(N.a)(t.related),[b]),e.next=7,i(t._id,a);case 7:case"end":return e.stop()}}),e)})),j.s();case 19:if((p=j.n()).done){e.next=23;break}return e.delegateYield(h(),"t0",21);case 21:e.next=19;break;case 23:e.next=28;break;case 25:e.prev=25,e.t1=e.catch(16),j.e(e.t1);case 28:return e.prev=28,j.f(),e.finish(28);case 31:e.next=34;break;case 33:throw new Error("Parent and related builds were not updated");case 34:e.next=37;break;case 36:throw new Error("Parent cannot be found");case 37:case"end":return e.stop()}}),e,null,[[16,25,28,31]])})));return function(n,t,i){return e.apply(this,arguments)}}()},he=t(172),fe=t(36),Oe=Object(b.a)((function(e){return{root:{textAlign:"center",display:"grid",gridTemplate:"auto / 1fr",rowGap:"10px",padding:e.spacing(1)},center:{textAlign:"center",margin:"0 auto"}}})),xe=function(){var e=Oe(),n=Object(fe.b)().enqueueSnackbar,t=Object(g.useState)(""),a=Object(d.a)(t,2),c=a[0],b=a[1],m=Object(g.useState)(ge),w=Object(d.a)(m,2),y=w[0],N=w[1],I=Object(g.useState)([]),L=Object(d.a)(I,2),C=L[0],z=L[1],A=de(),_=A.loading,q=A.shipBuilds,D=A.addBuild,G=A.addRelated,P=A.addVariant,R=Object(he.a)();Object(g.useEffect)((function(){N((function(e){return Object(u.a)(Object(u.a)({},e),{},{specializations:C})}))}),[C]);var V=function(e){var n=e.target.value;switch(e.target.id){case"title":N((function(e){return Object(u.a)(Object(u.a)({},e),{},{title:n})}));break;case"description":N((function(e){return Object(u.a)(Object(u.a)({},e),{},{description:n})}));break;case"buildLink":N((function(e){return Object(u.a)(Object(u.a)({},e),{},{buildLink:n})}));break;case"author":N((function(e){return Object(u.a)(Object(u.a)({},e),{},{author:n})}))}},W=function(e){N(Object(u.a)(Object(u.a)({},y),{},Object(o.a)({},e.target.name,e.target.checked)))},Q=function(){var e=Object(l.a)(s.a.mark((function e(){var t,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==y.jsonBuild){e.next=3;break}throw new Error("Exported JSON is blank. Verify you have pasted the JSON from Coriolis.");case 3:if(!(y.specializations.length<1)){e.next=5;break}throw new Error("No specializations have been selected. Minimum is one.");case 5:if(""!==y.author){e.next=7;break}throw new Error("Author is blank.");case 7:if(""!==y.description){e.next=9;break}throw new Error("More Information is blank.");case 9:if(""!==y.title){e.next=11;break}throw new Error("Build Title is blank. Verify you have pasted the JSON from Coriolis.");case 11:if(""!==y.buildLink){e.next=13;break}throw new Error("Build Link is blank. Verify you have pasted the JSON from Coriolis.");case 13:t=R.get("type"),console.log(t),i=R.get("refID"),e.prev=16,e.t0=t,e.next="variant"===e.t0?20:"related"===e.t0?27:34;break;case 20:if(!i){e.next=25;break}return e.next=23,P(i,q,y);case 23:e.next=26;break;case 25:throw new Error("Build reference ID missing from URL");case 26:return e.abrupt("break",37);case 27:if(!i){e.next=32;break}return e.next=30,G(i,q,y);case 30:e.next=33;break;case 32:throw new Error("Build reference ID missing from URL");case 33:return e.abrupt("break",37);case 34:return e.next=36,D(y);case 36:return e.abrupt("break",37);case 37:n("Build Successfully Submitted",{variant:"success"}),N(Object(u.a)(Object(u.a)({},ge),{},{_id:new x.a})),z([]),b(""),e.next=47;break;case 43:e.prev=43,e.t1=e.catch(16),n("Submit Failed: ".concat(e.t1.message),{variant:"error"}),console.error(e.t1);case 47:e.next=52;break;case 49:e.prev=49,e.t2=e.catch(0),n("Submit failed. ".concat(e.t2.message),{variant:"error"});case 52:case"end":return e.stop()}}),e,null,[[0,49],[16,43]])})));return function(){return e.apply(this,arguments)}}(),F=[{id:"json",label:"Exported JSON",isMultiline:!0,value:c,onChange:function(e){b(e.target.value);var n=function(e){var n,t,i=JSON.parse(e),a=i.name,r=null!==(n=i.references[0].shipId)&&void 0!==n?n:"",c=null!==(t=i.references[0].url)&&void 0!==t?t:"",s=i.components,l=s.standard,o=s.hardpoints,u=s.internal;return{buildName:a,shipID:r,hasGuardian:B(l,o,u),hasPowerplay:k(u,o),engineering:S(o,u,l),url:c}}(e.target.value),t=n.buildName,i=n.shipID,a=n.hasGuardian,r=n.hasPowerplay,c=n.engineering,s=n.url,l=c?1:0,o={_id:y._id,title:t,hasGuardian:a,hasPowerplay:r,buildLink:s,shipId:i,author:"",specializations:[],engLevel:l,isBeginner:!1,description:"",isVariant:!1,variants:[],related:[],jsonBuild:e.target.value};N(o)}},{id:"title",label:"Title",isMultiline:!1,value:y.title,onChange:V,disabled:!1},{id:"description",label:"More Information - Accepts markdown",isMultiline:!0,value:y.description,onChange:V},{id:"buildLink",label:"Build Link - Full",isMultiline:!1,value:y.buildLink,onChange:V,disabled:!0},{id:"author",label:"Author",isMultiline:!1,value:y.author,onChange:V}],$=[{label:"Guardian",name:"hasGuardian",checked:y.hasGuardian,disabled:!0},{label:"PowerPlay",name:"hasPowerplay",checked:y.hasPowerplay,disabled:!0},{label:"Beginner",name:"isBeginner",checked:y.isBeginner}];return _?Object(i.jsx)(r.a,{}):Object(i.jsxs)(j.a,{maxWidth:"lg",children:[Object(i.jsx)(p.a,{variant:"h3",className:e.center,children:"Add Build Form"}),Object(i.jsxs)(h.a,{className:e.root,children:[Object(i.jsx)(f.a,{to:"/builds",component:v.b,color:"secondary",variant:"outlined",children:"Return to builds"}),Object(i.jsx)(p.a,{children:"Save your build in Coriolis and choose Export. Paste the exported JSON into the Exported JSON field."}),Object(i.jsx)(p.a,{children:"Verify/enter remaining information and click Submit Build at the bottom."}),F.map((function(e){return Object(i.jsxs)(g.Fragment,{children:[Object(i.jsx)(M,Object(u.a)({},e)),"description"===e.id&&Object(i.jsx)(f.a,{href:"https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf",target:"_blank",color:"primary",children:"Markdown Cheatsheet - Opens a new tab"})]},e.id)})),Object(i.jsx)(J,{shipType:y.shipId,handleShipChange:function(e,n){var t=n.shipId;N((function(e){return Object(u.a)(Object(u.a)({},e),{},{shipId:t})}))}}),Object(i.jsx)(E,{selectedSpecialties:y.specializations,setSpecialties:z}),Object(i.jsx)("div",{className:e.center,children:Object(i.jsx)(T,{engLevel:y.engLevel,handleEngLevelChange:function(e,n){N(Object(u.a)(Object(u.a)({},y),{},{engLevel:n}))}})}),Object(i.jsx)(O.a,{row:!0,className:e.center,children:$.map((function(e){return Object(i.jsx)(U,Object(u.a)(Object(u.a)({},e),{},{onChange:W}),e.name)}))}),Object(i.jsx)(f.a,{onClick:Q,variant:"outlined",children:"Submit Build"})]})]})},ge={_id:new x.a,shipId:"adder",title:"",specializations:[],buildLink:"",engLevel:0,hasGuardian:!1,hasPowerplay:!1,isBeginner:!1,author:"",isVariant:!1,variants:[],related:[],description:"",jsonBuild:""},ve=t(59),me=t(44),we=t(397),ye=t(412),Se=t(399),ke=t(424),Be=t(465),Ne=Object(b.a)((function(e){return{chips:{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:e.spacing(1),"& div":{marginRight:e.spacing(1)}}}})),Ie=function(e){var n=e.build,t=Ne();return Object(i.jsxs)("div",{className:t.chips,children:[n.specializations.map((function(e){return Object(i.jsx)(Be.a,{label:e},e)})),n.hasGuardian&&Object(i.jsx)(Be.a,{label:"Guardian"},"guardian"),n.hasPowerplay&&Object(i.jsx)(Be.a,{label:"PowerPlay"},"powerplay"),n.isBeginner&&Object(i.jsx)(Be.a,{label:"Beginner"},"beginner")]})},Le=t(170),Ce=t.n(Le),ze=t(171),Ee=t.n(ze),Ae=t(71),_e=Object(b.a)({engineering:{"& p":{"& img":{height:"20px",width:"20px",verticalAlign:"middle"}}}}),qe=function(e){var n=_e(),t=[];if(e.engLevel>3||e.engLevel<1)return Object(i.jsx)("div",{className:n.engineering,children:Object(i.jsx)("p",{children:"Engineering Level: None"})});for(var a=1;a<=e.engLevel;a++)t=[].concat(Object(N.a)(t),[Object(i.jsx)("img",{src:P,alt:"Engineering Icon"},a)]);return Object(i.jsx)("div",{className:n.engineering,children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Engineering Level:"})," ",t.map((function(e){return e}))]})})},De=Object(b.a)((function(e){return{paper:{padding:e.spacing(1),marginBottom:e.spacing(1)},img:{width:300},buttonGrid:{display:"grid",gridTemplate:"1fr 1fr / 1fr 1fr"},flexDown:{display:"flex",flexDirection:"column","& a":{margin:e.spacing(1)}},flexAcross:{display:"flex",flexDirection:"row","& a":{flexGrow:1}},spacer:{flexGrow:1},gridDown:{display:"grid",gridTemplate:"auto / 1fr"},margin:{margin:e.spacing(1)},textCenter:{textAlign:"center"}}})),Ge=function(e){var n=De(),t=Object(Ae.b)().blueprints,a=e.shipInfo,r=e.foundBuild;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(h.a,{className:n.paper,children:Object(i.jsxs)("div",{className:n.flexAcross,children:[a&&Object(i.jsxs)("div",{className:"".concat(n.flexDown," ").concat(n.margin),children:[Object(i.jsx)("img",{src:a.shipImg,alt:a.name,className:n.img}),Object(i.jsxs)("div",{className:n.flexAcross,children:[Object(i.jsx)(p.a,{children:a.name}),Object(i.jsx)("span",{className:n.spacer}),Object(i.jsx)(p.a,{children:ke.ShipSize[a.size]})]}),a.requires&&Object(i.jsxs)(p.a,{children:["Requires: ",a.requires]}),Object(i.jsx)(f.a,{variant:"contained",color:"primary",href:r.buildLink,target:"_blank",children:"Show Build"}),Object(i.jsxs)("div",{className:n.buttonGrid,children:[Object(i.jsx)(f.a,{variant:"contained",color:"secondary",href:a.shipReview,target:"_blank",children:"Pilot's Review"}),Object(i.jsx)(f.a,{variant:"contained",color:"secondary",href:"".concat(t,"?s=").concat(a.blueprint),target:"_blank",children:"Ship Anatomy"}),Object(i.jsx)(f.a,{variant:"contained",color:"secondary",to:"/builds/add?type=variant&refID=".concat(r._id),component:v.b,children:"Add Variant"}),Object(i.jsx)(f.a,{variant:"contained",color:"secondary",to:"/builds/add?type=related&refID=".concat(r._id),component:v.b,children:"Add Related"})]})]}),Object(i.jsx)(ye.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{className:"".concat(n.flexDown," ").concat(n.spacer," ").concat(n.margin),children:[Object(i.jsx)(p.a,{variant:"h5",children:null===r||void 0===r?void 0:r.title}),Object(i.jsxs)(p.a,{children:["Author: ",null===r||void 0===r?void 0:r.author]}),Object(i.jsx)(qe,{engLevel:r.engLevel}),Object(i.jsx)(Ie,{build:r}),(null===r||void 0===r?void 0:r.description)&&Object(i.jsx)(Ce.a,{plugins:[Ee.a],renderers:{paragraph:p.a,link:Se.a},children:r.description})]})]})})})},Pe=Object(b.a)((function(e){return{paper:{padding:e.spacing(1),display:"flex",flexDirection:"column"},img:{width:150,flexShrink:0},flexrow:{display:"flex",flexDirection:"row"},buttonGrid:{display:"grid",gridTemplate:"1fr 1fr / 1fr 1fr",gap:5,padding:e.spacing(1)},spacer:{flexGrow:1}}})),Re=function(e){var n=Object(Ae.b)().blueprints,t=e.foundBuild,a=e.shipInfo,r=Pe();return Object(i.jsxs)(h.a,{className:r.paper,children:[Object(i.jsxs)("div",{className:r.flexrow,children:[a&&Object(i.jsx)("img",{src:a.shipImg,alt:a.name,className:r.img}),Object(i.jsxs)("div",{children:[Object(i.jsx)(p.a,{variant:"h5",children:t.title}),Object(i.jsxs)(p.a,{children:["Author: ",t.author]}),Object(i.jsx)("div",{className:r.flexrow,children:a&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(p.a,{children:a.name}),Object(i.jsx)("div",{className:r.spacer}),Object(i.jsx)(p.a,{children:ke.ShipSize[a.size]})]})})]})]}),Object(i.jsx)(f.a,{variant:"contained",color:"primary",href:t.buildLink,target:"_blank",children:"Show Build"}),Object(i.jsx)(ye.a,{style:{marginTop:"10px"}}),Object(i.jsx)(Ie,{build:t}),Object(i.jsx)(qe,{engLevel:t.engLevel}),t.description&&Object(i.jsx)(Ce.a,{plugins:[Ee.a],renderers:{paragraph:p.a,link:Se.a},children:t.description}),Object(i.jsxs)("div",{className:r.buttonGrid,children:[a&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(f.a,{variant:"contained",color:"secondary",href:a.shipReview,target:"_blank",children:"Pilot's Review"}),Object(i.jsx)(f.a,{variant:"contained",color:"secondary",href:"".concat(n,"?s=").concat(a.blueprint),target:"_blank",children:"Ship Anatomy"})]}),Object(i.jsx)(f.a,{variant:"contained",color:"secondary",to:"/builds/add?type=variant&refID=".concat(t._id),component:v.b,children:"Add Variant"}),Object(i.jsx)(f.a,{variant:"contained",color:"secondary",to:"/builds/add?type=related&refID=".concat(t._id),component:v.b,children:"Add Related"})]})]})},Te=t(395),Ve=t(458),Me=t(459),We=t(460),Qe=t(207),Fe=Object(b.a)({root:{display:"flex",flexDirection:"row",width:"400px",minWidth:"400px",margin:"5px"},content:{flexGrow:1,flexBasis:"auto",flexWrap:"wrap"},media:{height:"100px",width:"100px",flexShrink:0,margin:"auto"},shipName:{display:"flex"},spacer:{flexGrow:1},mediaAndActions:{marginLeft:Qe.a.spacing(1)},actions:{display:"grid",gridTemplateRows:"auto","& a":{minWidth:121,marginBottom:Qe.a.spacing(1)}}}),Je=function(e){var n=e.shipBuild,t=function(e){if(e)return w.find((function(n){return n.shipId===e}))}(null===n||void 0===n?void 0:n.shipId),a=Fe();return n&&t?Object(i.jsx)(Te.a,{in:!0,timeout:500,children:Object(i.jsxs)(Ve.a,{variant:"outlined",className:a.root,children:[Object(i.jsxs)("div",{className:a.mediaAndActions,children:[Object(i.jsx)(Me.a,{className:a.media,image:t.shipImg,title:t.name}),Object(i.jsx)(p.a,{children:ke.ShipSize[t.size]}),Object(i.jsxs)("div",{className:a.actions,children:[Object(i.jsx)(f.a,{variant:"contained",color:"secondary",href:n.buildLink,target:"_blank",children:"View Build"}),Object(i.jsx)(f.a,{to:"/builds/detail/".concat(n._id),component:v.b,color:"primary",variant:"contained",children:"More Details"})]})]}),Object(i.jsxs)(We.a,{className:a.content,children:[Object(i.jsx)(p.a,{children:n.title}),Object(i.jsx)(ye.a,{}),Object(i.jsxs)(p.a,{children:[t.name," "]}),t.requires&&Object(i.jsxs)(p.a,{children:["Requirement: ",t.requires]}),Object(i.jsx)(Ie,{build:n}),Object(i.jsx)(ye.a,{}),Object(i.jsx)(qe,{engLevel:n.engLevel}),Object(i.jsx)(ye.a,{}),Object(i.jsxs)(p.a,{children:["Author: ",n.author]}),n.variants.length>0?Object(i.jsx)(p.a,{children:"Has Variants"}):null,n.related.length>0?Object(i.jsx)(p.a,{children:"Has Related Builds"}):null,Object(i.jsx)("div",{className:a.spacer})]})]})}):null},$e=Object(b.a)((function(e){return{paper:{marginBottom:5,display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center"},textCenter:{textAlign:"center"}}})),He=function(e){var n=e.title,t=e.buildIDs,a=$e(),c=de(),s=c.loading,l=c.shipBuilds;return s?Object(i.jsx)(r.a,{}):Object(i.jsxs)("div",{className:a.textCenter,children:[Object(i.jsx)(p.a,{variant:"h4",children:n}),Object(i.jsx)("div",{className:a.paper,children:t.map((function(e){var n=l.find((function(n){return n._id===e}));return Object(i.jsx)(Je,{shipBuild:n},e)}))})]})},Ue=Object(b.a)({textCenter:{textAlign:"center"}}),Ye=function(){var e=function(e){var n=de(),t=n.loading,i=n.shipBuilds,a=Object(g.useMemo)((function(){if(void 0!==e&&!t)return i.find((function(n){return n._id&&n._id===e}))||null}),[e,t,i]),r=Object(g.useMemo)((function(){return a?y(a.shipId):void 0}),[a]);return{loading:t,shipBuilds:i,foundBuild:a,shipInfo:r}}(Object(a.i)().id),n=e.loading,t=e.shipInfo,c=e.foundBuild,s=Object(me.a)(),l=Object(we.a)(s.breakpoints.down("sm")),o=Ue();return n?Object(i.jsx)(r.a,{}):Object(i.jsxs)(j.a,{maxWidth:"lg",children:[Object(i.jsx)(p.a,{variant:"h3",className:o.textCenter,children:"Build Detail"}),c?l?Object(i.jsx)(Re,{foundBuild:c,shipInfo:t}):Object(i.jsx)(Ge,{foundBuild:c,shipInfo:t}):Object(i.jsx)(ve.d,{}),c&&c.variants.length>0?Object(i.jsx)(He,{title:"Build Variants",buildIDs:c.variants}):null,c&&c.related.length>0?Object(i.jsx)(He,{title:"Related Builds",buildIDs:c.related}):null]})},Xe=t(386),Ke=t(461),Ze=Object(b.a)({root:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}),en=function(e){var n=Object(g.useState)(),t=Object(d.a)(n,2),a=t[0],c=t[1],s=e.buildQuery,l=de(),o=l.loading,u=l.shipBuilds,b=l.error,j=Object(fe.b)().enqueueSnackbar,p=Ze(),h=Object(g.useCallback)((function(){if(!o&&!b){console.log(u);var e=function(e,n){if(e&&n){var t=e;if(null!==n.showVariants&&!1!==n.showVariants||(t=t.filter((function(e){return!1===e.isVariant}))),null!==n.ship&&(t=t.filter((function(e){return e.shipId===n.ship}))),null!==n.size&&(t=t.filter((function(e){var t=y(e.shipId);return(null===t||void 0===t?void 0:t.size)===n.size?e:void 0}))),null!==n.engLevel&&(t=t.filter((function(e){return e.engLevel===n.engLevel}))),n.specialties.length>0){console.log(n.specialties);var i,a=[],r=Object(m.a)(n.specialties);try{var c=function(){var e=i.value;a=a.length>0?a.filter((function(n){return n.specializations.includes(e)})):t.filter((function(n){return n.specializations.includes(e)}))};for(r.s();!(i=r.n()).done;)c()}catch(u){r.e(u)}finally{r.f()}t=a}if(null!==n.guardian){var s=1===n.guardian;t=t.filter((function(e){return e.hasGuardian===s}))}if(null!==n.powerplay){var l=1===n.powerplay;t=t.filter((function(e){return e.hasPowerplay===l}))}if(null!==n.beginner){var o=1===n.beginner;t=t.filter((function(e){return e.isBeginner===o}))}return t}}(u,s);c(e)}}),[o,u,s,b]);return Object(g.useEffect)((function(){o||(b&&j("Failed to retrieve builds. ".concat(b.message),{variant:"error"}),h())}),[o,h,b,j]),Object(i.jsx)("div",{className:p.root,children:o?Object(i.jsx)(r.a,{}):null===a||void 0===a?void 0:a.map((function(e){return Object(i.jsx)(Je,{shipBuild:e},e._id)}))})},nn=Object(b.a)((function(e){return{shipQueries:{display:"flex",flexDirection:"column",width:"100%"},shipTypeQuery:Object(o.a)({},e.breakpoints.up("lg"),{minWidth:200,margin:e.spacing(1),flex:"1 0"}),shipSizeQuery:{margin:"auto"}}})),tn=function(e){var n=e.shipType,t=e.setShipType,a=e.shipSize,r=e.setShipSize,c=C(),s=nn();return Object(i.jsxs)("div",{className:c.querySection,children:[Object(i.jsx)("h3",{className:c.querySectionheader,children:"Ship Type and Size"}),Object(i.jsxs)("div",{className:s.shipQueries,children:[Object(i.jsx)("div",{className:s.shipTypeQuery,children:Object(i.jsx)(J,{shipType:n,handleShipChange:function(e,n){var i=null===n||void 0===n?void 0:n.shipId;t(null!==i&&void 0!==i?i:null),r(null)}})}),Object(i.jsx)("div",{className:s.shipSizeQuery,children:Object(i.jsx)(q.a,{title:"What's the size of the ship you're looking for?",arrow:!0,children:Object(i.jsxs)(_.a,{value:a,exclusive:!0,onChange:function(e,n){t(null),r(n)},children:[Object(i.jsx)(I.a,{value:1,children:"Small"}),Object(i.jsx)(I.a,{value:2,children:"Medium"}),Object(i.jsx)(I.a,{value:3,children:"Large"})]})})})]})]})},an=Object(b.a)({engineeringQuery:{gridArea:"engineering"}}),rn=function(e){var n=e.engLevel,t=e.setEngLevel,a=C(),r=an();return Object(i.jsxs)("div",{className:"".concat(a.querySection," ").concat(r.engineeringQuery),children:[Object(i.jsx)("h3",{className:a.querySectionheader,children:"Ship Engineering Level"}),Object(i.jsx)(p.a,{className:a.queryExplanationText,children:"Select Engineering level ranging from None to Max Engineering."}),Object(i.jsx)(T,{engLevel:n,handleEngLevelChange:function(e,n){t(n)}})]})},cn=t(437),sn=t.n(cn),ln=Object(b.a)((function(e){return{queryOtherButtons:{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"},queryOtherButtonGrids:{display:"grid",gridTemplateRows:"0.5fr 1fr",margin:e.spacing(0,1),"& div":{margin:"auto",padding:e.spacing(1)},"& label":{height:"25px",padding:e.spacing(1)}},QueryOtherBeginnerButtons:{borderWidth:"3px",borderStyle:"solid",borderColor:e.palette.secondary.main,borderRadius:"5px"}}})),on=function(e){var n=e.other,t=e.setOther,a=C(),r=ln();return Object(i.jsxs)("div",{className:a.querySection,children:[Object(i.jsx)("h3",{className:a.querySectionheader,children:"Other Filters"}),Object(i.jsxs)("div",{className:r.queryOtherButtons,children:[Object(i.jsx)(q.a,{title:"Show all builds, including variants",arrow:!0,children:Object(i.jsxs)("div",{className:r.queryOtherButtonGrids,children:[Object(i.jsx)("label",{children:"Show Variants"}),Object(i.jsx)(_.a,{value:n.showVariants,exclusive:!0,onChange:function(e,n){t((function(e){return Object(u.a)(Object(u.a)({},e),{},{showVariants:n})}))},children:Object(i.jsx)(I.a,{value:!0,children:Object(i.jsx)(sn.a,{})})})]})}),Object(i.jsx)(q.a,{title:"Should the build have Guardian components?",arrow:!0,children:Object(i.jsxs)("div",{className:r.queryOtherButtonGrids,children:[Object(i.jsx)("label",{children:"Guardian"}),Object(i.jsxs)(_.a,{value:n.guardian,exclusive:!0,onChange:function(e,n){t((function(e){return Object(u.a)(Object(u.a)({},e),{},{guardian:n})}))},children:[Object(i.jsx)(I.a,{value:1,children:Object(i.jsx)(sn.a,{})}),Object(i.jsx)(I.a,{value:0,children:Object(i.jsx)(G.a,{})})]})]})}),Object(i.jsx)(q.a,{title:"Does the build have Power Play modules?",arrow:!0,children:Object(i.jsxs)("div",{className:r.queryOtherButtonGrids,children:[Object(i.jsx)("label",{children:"Power Play"}),Object(i.jsxs)(_.a,{value:n.powerplay,exclusive:!0,onChange:function(e,n){t((function(e){return Object(u.a)(Object(u.a)({},e),{},{powerplay:n})}))},children:[Object(i.jsx)(I.a,{value:1,children:Object(i.jsx)(sn.a,{})}),Object(i.jsx)(I.a,{value:0,children:Object(i.jsx)(G.a,{})})]})]})}),Object(i.jsx)(q.a,{title:"Is this build easy to achieve early-game?",arrow:!0,children:Object(i.jsxs)("div",{className:"".concat(r.queryOtherButtonGrids," ").concat(r.QueryOtherBeginnerButtons),children:[Object(i.jsx)("label",{children:"Beginner"}),Object(i.jsxs)(_.a,{value:n.beginner,exclusive:!0,onChange:function(e,n){t((function(e){return Object(u.a)(Object(u.a)({},e),{},{beginner:n})}))},children:[Object(i.jsx)(I.a,{value:1,children:Object(i.jsx)(sn.a,{})}),Object(i.jsx)(I.a,{value:0,children:Object(i.jsx)(G.a,{})})]})]})})]})]})},un=Object(b.a)((function(e){return{root:{textAlign:"center",gridArea:"buttons","& button":{margin:e.spacing(1)}}}})),dn=function(e){var n=un(),t=e.resetQueries;return Object(i.jsxs)("div",{className:n.root,children:[Object(i.jsx)(f.a,{onClick:t,color:"primary",variant:"outlined",className:"resetButton",children:"Reset Selections"}),Object(i.jsx)(f.a,{variant:"outlined",color:"secondary",component:v.b,to:"/builds/add",children:"Add Build"})]})},bn=t(438),jn=t.n(bn),pn=Object(b.a)((function(e){return{root:Object(o.a)({display:"grid",rowGap:"2px",gridTemplateAreas:"\n    'specializations'\n    'engineering'\n    'ship'\n    'other'\n    'buttons'",textAlign:"center"},e.breakpoints.up("lg"),{gridTemplateAreas:"\n        'specializations    engineering'\n        'ship   other'\n        'buttons    buttons'",gridTemplateRows:"1fr 1fr 0.1fr",rowGap:"5px",columnGap:"5px"})}})),hn=function(e){var n=Object(g.useState)(null),t=Object(d.a)(n,2),r=t[0],c=t[1],s=Object(g.useState)(null),l=Object(d.a)(s,2),o=l[0],b=l[1],j=Object(g.useState)(null),p=Object(d.a)(j,2),f=p[0],O=p[1],x=Object(g.useState)([]),v=Object(d.a)(x,2),m=v[0],w=v[1],y=Object(g.useState)({guardian:null,powerplay:null,beginner:null,showVariants:null}),S=Object(d.a)(y,2),k=S[0],B=S[1],N=Object(he.a)(),I=Object(a.g)(),L=e.updateQuery,C=pn();Object(g.useEffect)((function(){var e=N.get("ship");e&&c(e);var n=N.get("size");if(n)try{var t=parseInt(n);b(t)}catch(h){}var i=N.get("engLevel");if(i)try{var a=parseInt(i);O(a)}catch(h){}var r=N.getAll("specialties");r&&r.length>0&&w(r);var s=N.get("guardian"),l="1"===s?1:"0"===s?0:null;B((function(e){return Object(u.a)(Object(u.a)({},e),{},{guardian:l})}));var o=N.get("powerplay"),d="1"===o?1:"0"===o?0:null;B((function(e){return Object(u.a)(Object(u.a)({},e),{},{powerplay:d})}));var j=N.get("beginner");"true"===j||"1"===j?B((function(e){return Object(u.a)(Object(u.a)({},e),{},{beginner:1})})):"0"===j&&B((function(e){return Object(u.a)(Object(u.a)({},e),{},{beginner:0})}));var p="true"===N.get("showVariants");B((function(e){return Object(u.a)(Object(u.a)({},e),{},{showVariants:p})}))}),[]),Object(g.useEffect)((function(){var e=Object(u.a)({ship:r,size:o,engLevel:f,specialties:m},k),n=jn.a.stringify(e);I.push("/builds/?".concat(n)),L(e)}),[r,o,f,m,k,L,I]);return Object(i.jsxs)(h.a,{className:C.root,children:[Object(i.jsx)(E,{selectedSpecialties:m,setSpecialties:w}),Object(i.jsx)(tn,{shipType:r,setShipType:c,shipSize:o,setShipSize:b}),Object(i.jsx)(rn,{engLevel:f,setEngLevel:O}),Object(i.jsx)(on,{other:k,setOther:B}),Object(i.jsx)(dn,{resetQueries:function(){c(null),b(null),O(null),w([]),B({guardian:null,powerplay:null,beginner:null,showVariants:null})}})]})},fn=t(451),On=t.n(fn),xn=Object(b.a)({root:{"& p":{textAlign:"center"}},header:{textAlign:"center"},fab:{position:"fixed",bottom:"5px",right:"10px"}}),gn=function(){var e=Object(g.useState)(),n=Object(d.a)(e,2),t=n[0],a=n[1],r=Object(g.useRef)(null),c=Object(me.a)(),s=Object(we.a)(c.breakpoints.down("md")),l=xn(),o=Object(g.useCallback)((function(e){a(e)}),[]);return Object(i.jsx)(Te.a,{in:!0,children:Object(i.jsxs)(j.a,{maxWidth:"xl",className:l.root,children:[Object(i.jsx)(p.a,{variant:"h3",className:l.header,children:"Ship Build Archive"}),Object(i.jsx)(hn,{updateQuery:o}),Object(i.jsx)("div",{ref:r,children:Object(i.jsx)(en,{buildQuery:t})}),Object(i.jsx)(Xe.a,{direction:"left",in:s,timeout:1e3,children:Object(i.jsx)("div",{className:l.fab,children:Object(i.jsx)(Ke.a,{color:"primary",className:"fab",onClick:function(){r.current&&r.current.scrollIntoView({behavior:"smooth"})},children:Object(i.jsx)(On.a,{})})})})]})})},vn=function(){var e=Object(a.j)().path;return de().loading?Object(i.jsx)(r.a,{}):Object(i.jsxs)(a.d,{children:[Object(i.jsx)(a.b,{path:"".concat(e,"/detail/:id"),children:Object(i.jsx)(Ye,{})}),Object(i.jsx)(a.b,{path:e,exact:!0,children:Object(i.jsx)(gn,{})}),Object(i.jsx)(a.b,{path:"".concat(e,"/add"),children:Object(i.jsx)(xe,{})})]})};n.default=vn}}]);
//# sourceMappingURL=4.795a2c13.chunk.js.map