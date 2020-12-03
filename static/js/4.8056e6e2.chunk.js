(this["webpackJsonpusc-website"]=this["webpackJsonpusc-website"]||[]).push([[4],{212:function(e,n){},213:function(e,n){},214:function(e,n){},215:function(e,n,i){"use strict";var t;i.d(n,"a",(function(){return t})),function(e){e[e.S=1]="S",e[e.M=2]="M",e[e.L=3]="L"}(t||(t={}))},216:function(e,n){},231:function(e,n,i){},232:function(e,n,i){"use strict";var t=i(212);i.o(t,"ShipSize")&&i.d(n,"ShipSize",(function(){return t.ShipSize}));var a=i(213);i.o(a,"ShipSize")&&i.d(n,"ShipSize",(function(){return a.ShipSize}));var r=i(214);i.o(r,"ShipSize")&&i.d(n,"ShipSize",(function(){return r.ShipSize}));var c=i(215);i.d(n,"ShipSize",(function(){return c.a}));i(216)},233:function(e,n,i){},234:function(e,n,i){},239:function(e,n,i){},288:function(e,n,i){"use strict";i.r(n),i.d(n,"default",(function(){return ye}));var t=i(97),a=i(27),r=i(1),c=i(0),l=i.n(c),s=i(274),o=i(278),u=i(276),j=i(183),d=i(38),b=i(277),h=i(275),O=i.p+"static/media/Engineer_icon.f8ffd94f.svg",p=(i(231),i(293)),g=i(113),v=function(e){return g.find((function(n){return n.id===e}))},f=i(232),x=i(16),m=i(292),S=i(273),w=i(271),y=i(272),L=i(270),N=i(268),C=l.a.forwardRef((function(e,n){return Object(r.jsx)(N.a,Object(x.a)({direction:"up",ref:n},e))})),z=function(e){var n=e.content,i=e.open,t=e.setOpen,a=function(){t(!1)};return Object(r.jsx)("div",{children:Object(r.jsxs)(m.a,{open:i,TransitionComponent:C,keepMounted:!0,scroll:"paper",onClose:a,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(r.jsx)(L.a,{id:"alert-dialog-slide-title",children:"More Info About the Build"}),Object(r.jsx)(w.a,{children:Object(r.jsx)(y.a,{id:"alert-dialog-slide-description",style:{whiteSpace:"pre-line"},children:n})}),Object(r.jsx)(S.a,{children:Object(r.jsx)(j.a,{onClick:a,color:"primary",children:"OK"})})]})})},I=function(e){var n=Object(c.useState)(),i=Object(a.a)(n,2),t=i[0],l=i[1],O=Object(c.useState)(!1),p=Object(a.a)(O,2),g=p[0],x=p[1];Object(c.useEffect)((function(){return l(v(e.id))}),[e.id]);return Object(r.jsxs)(s.a,{variant:"outlined",className:"card",children:[t&&Object(r.jsx)(h.a,{className:"shipImg",image:null===t||void 0===t?void 0:t.shipImg,title:null===t||void 0===t?void 0:t.name}),Object(r.jsxs)(u.a,{className:"cardContent",children:[Object(r.jsx)(d.a,{children:e.description}),Object(r.jsx)(b.a,{}),Object(r.jsxs)("div",{className:"shipName",children:[Object(r.jsxs)(d.a,{children:[null===t||void 0===t?void 0:t.name," "]}),Object(r.jsx)("div",{className:"spacer"}),t&&Object(r.jsx)(d.a,{children:f.ShipSize[t.size]})]}),(null===t||void 0===t?void 0:t.requires)&&Object(r.jsxs)(d.a,{children:["Requirement: ",t.requires]}),Object(r.jsx)(B,{tags:e.specializations,guardian:e.guardian,powerplay:e.powerplay,beginner:e.beginner}),Object(r.jsx)(b.a,{}),Object(r.jsx)(k,{engLevel:e.engLevel}),Object(r.jsx)(b.a,{}),Object(r.jsxs)(d.a,{children:["Author: ",e.author]}),Object(r.jsxs)(o.a,{className:"cardActions",children:[Object(r.jsx)(j.a,{variant:"contained",color:"secondary",href:e.buildLink,target:"_blank",children:"View Build"})," ",e.moreInfo&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){x(!0)},children:"More Info"}),Object(r.jsx)(z,{content:e.moreInfo,open:g,setOpen:x})]})]})]})]})},k=function(e){var n=[];if(e.engLevel>3||e.engLevel<1)return Object(r.jsx)("div",{className:"engineering",children:Object(r.jsx)("p",{children:"Engineering Level: None"})});for(var i=1;i<=e.engLevel;i++)n=[].concat(Object(t.a)(n),[Object(r.jsx)("img",{src:O,alt:"Engineering Icon"},i)]);return Object(r.jsx)("div",{className:"engineering",children:Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Engineering Level:"})," ",n.map((function(e){return e}))]})})},B=function(e){return Object(r.jsxs)("div",{className:"chips",children:[e.tags.map((function(e){return Object(r.jsx)(p.a,{label:e},e)})),e.guardian&&Object(r.jsx)(p.a,{label:"Guardian"},"guardian"),e.powerplay&&Object(r.jsx)(p.a,{label:"PowerPlay"},"powerplay"),e.beginner&&Object(r.jsx)(p.a,{label:"Beginner"},"beginner")]})},E=i(39),P=i(100),q=i(61),M=i(114),T=i(45);function A(){var e=Object(M.a)(["\n        query AllShipBuilds {\n            shipBuilds {\n                _id\n                author\n                beginner\n                buildLink\n                description\n                engLevel\n                guardian\n                moreInfo\n                powerplay\n                ship\n                specializations\n            }\n        }"]);return A=function(){return e},e}i(233);var Q,F=function(e){var n=Object(c.useState)(),i=Object(a.a)(n,2),t=i[0],l=i[1],s=e.buildQuery,o=function(){var e,n=Object(T.useQuery)(Object(T.gql)(A())),i=n.data,t=n.loading,a=n.error;if(a)throw new Error("Failed to fetch ship builds: ".concat(a.message));return{shipBuilds:null!==(e=null===i||void 0===i?void 0:i.shipBuilds)&&void 0!==e?e:[],loading:t}}(),u=o.loading,j=o.shipBuilds,d=Object(c.useCallback)((function(){if(!u){var e=function(e,n){if(e&&n){var i=e;if(null!==n.ship&&(i=i.filter((function(e){return e.ship===n.ship}))),null!==n.size&&(i=i.filter((function(e){return e.size===n.size}))),null!==n.engLevel&&(i=i.filter((function(e){return e.engLevel===n.engLevel}))),n.specialties.length>0){console.log(n.specialties);var t,a=[],r=Object(P.a)(n.specialties);try{var c=function(){var e=t.value;a=a.length>0?a.filter((function(n){return n.specializations.includes(e)})):i.filter((function(n){return n.specializations.includes(e)}))};for(r.s();!(t=r.n()).done;)c()}catch(u){r.e(u)}finally{r.f()}i=a}if(null!==n.other.guardian){var l=1===n.other.guardian;i=i.filter((function(e){return e.guardian===l}))}if(null!==n.other.powerplay){var s=1===n.other.powerplay;i=i.filter((function(e){return e.powerplay===s}))}if(null!==n.other.beginner){var o=1===n.other.beginner;i=i.filter((function(e){return e.beginner===o}))}return i}}(null===j||void 0===j?void 0:j.map((function(e){var n=v(e.ship),i=null===n||void 0===n?void 0:n.size;return Object(x.a)(Object(x.a)({},e),{},{size:i})})),s),n=Object(q.a)(e,"ship");l(n)}}),[u,j,s]);return Object(c.useEffect)((function(){u||d()}),[u,d]),Object(r.jsx)("div",{className:"builds",children:u?Object(r.jsx)(E.c,{}):null===t||void 0===t?void 0:t.map((function(e){return Object(r.jsx)(I,{id:e.ship,author:e.author,specializations:e.specializations,engLevel:e.engLevel,description:e.description,buildLink:e.buildLink,guardian:e.guardian,powerplay:e.powerplay,beginner:e.beginner,moreInfo:e.moreInfo},e._id)}))})},_=(i(234),i(108)),G=i(279);!function(e){e.exp="Exploration",e.jump="Jump Ship",e.hge="HGE Farming",e.cargo="Cargo",e.mining="Miner",e.pve="Combat - PvE",e.pvp="Combat - PvP",e.ax="Combat - Anti-Xeno",e.racing="Racing",e.multi="Multi-Purpose"}(Q||(Q={}));var H=function(e){var n=e.selectedSpecialties,i=e.setSpecialties;return Object(r.jsxs)("div",{className:"specializationQuery",children:[Object(r.jsx)("h3",{className:"queryHeader",children:"Ship Specializations"}),Object(r.jsx)(d.a,{children:"Select specializations that the ship should fulfill."}),Object(r.jsx)("div",{className:"specialButtons",children:R().map((function(e){return Object(r.jsx)(G.a,{value:e,selected:n.includes(e),onChange:function(){return function(e){var a=[];a=n.includes(e)?n.filter((function(n){return n!==e})):[].concat(Object(t.a)(n),[e]),i(a)}(e)},children:e},e)}))})]})},R=function(){var e=[];for(var n in Q)e=[].concat(Object(t.a)(e),[Q[n]]);return e},W=i(287),D=i(283),J=i(291),U=i(295),V=function(e){var n=e.shipType,i=e.setShipType,t=e.shipSize,a=e.setShipSize;return Object(r.jsxs)("div",{className:"shipQuery",children:[Object(r.jsx)("h3",{className:"queryHeader",children:"Ship Type and Size"}),Object(r.jsxs)("div",{className:"shipQuerySection",children:[Object(r.jsx)("div",{className:"shipTypeQuery",children:Object(r.jsx)(J.a,{id:"shipType",options:Object(q.a)(g,"name"),autoHighlight:!0,getOptionLabel:function(e){return e.name},renderOption:function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("span",{children:e.name})})},renderInput:function(e){return Object(r.jsx)(W.a,Object(x.a)(Object(x.a)({},e),{},{label:"Ship Type",variant:"outlined",inputProps:Object(x.a)(Object(x.a)({},e.inputProps),{},{autocomplete:"new-password"})}))},value:$(n),onChange:function(e,n){return i(n.id)}})}),Object(r.jsx)("div",{className:"shipSizeQuery",children:Object(r.jsx)(D.a,{title:"What's the size of the ship you're looking for?",arrow:!0,children:Object(r.jsxs)(U.a,{value:t,exclusive:!0,onChange:function(e,n){i(null),a(n)},children:[Object(r.jsx)(G.a,{value:1,children:"Small"}),Object(r.jsx)(G.a,{value:2,children:"Medium"}),Object(r.jsx)(G.a,{value:3,children:"Large"})]})})})]})]})},$=function(e){return null===e?null:g.find((function(n){return n.id===e}))},K=i(207),X=i.n(K),Y=function(e){var n=e.engLevel,i=e.setEngLevel;return Object(r.jsxs)("div",{className:"engineeringQuery",children:[Object(r.jsx)("h3",{className:"queryHeader",children:"Ship Engineering Level"}),Object(r.jsx)(d.a,{children:"Select Engineering level ranging from None to Max Engineering."}),Object(r.jsxs)(U.a,{value:n,exclusive:!0,onChange:function(e,n){i(n)},children:[Object(r.jsx)(G.a,{value:0,children:Object(r.jsx)(D.a,{title:"No Engineering",arrow:!0,children:Object(r.jsx)("div",{className:"engButton",children:Object(r.jsx)(X.a,{})})})}),Object(r.jsx)(G.a,{value:1,children:Object(r.jsx)(D.a,{title:"Simple Engineering",arrow:!0,children:Object(r.jsx)("div",{className:"engButton",children:Object(r.jsx)("img",{src:O,alt:"engineeringIcon"})})})}),Object(r.jsx)(G.a,{value:2,children:Object(r.jsx)(D.a,{title:"Moderate Engineering",arrow:!0,children:Object(r.jsxs)("div",{className:"engButton",children:[Object(r.jsx)("img",{src:O,alt:"engineeringIcon"}),Object(r.jsx)("img",{src:O,alt:"engineeringIcon"})]})})}),Object(r.jsx)(G.a,{value:3,children:Object(r.jsx)(D.a,{title:"End-Game/Extreme Engineering",arrow:!0,children:Object(r.jsxs)("div",{className:"engButton",children:[Object(r.jsx)("img",{src:O,alt:"engineeringIcon"}),Object(r.jsx)("img",{src:O,alt:"engineeringIcon"}),Object(r.jsx)("img",{src:O,alt:"engineeringIcon"})]})})})]})]})},Z=i(238),ee=i.n(Z),ne=function(e){var n=e.other,i=e.setOther;return Object(r.jsxs)("div",{className:"otherQuery",children:[Object(r.jsx)("h3",{className:"queryHeader",children:"Other Filters"}),Object(r.jsxs)("div",{className:"otherButtons",children:[Object(r.jsx)(D.a,{title:"Should the build have Guardian components?",arrow:!0,children:Object(r.jsxs)("div",{className:"guardian",children:[Object(r.jsx)("label",{children:"Guardian"}),Object(r.jsxs)(U.a,{value:n.guardian,exclusive:!0,onChange:function(e,t){i(Object(x.a)(Object(x.a)({},n),{},{guardian:t}))},children:[Object(r.jsx)(G.a,{value:1,children:Object(r.jsx)(ee.a,{})}),Object(r.jsx)(G.a,{value:0,children:Object(r.jsx)(X.a,{})})]})]})}),Object(r.jsx)(D.a,{title:"Does the build have Power Play modules?",arrow:!0,children:Object(r.jsxs)("div",{className:"powerplay",children:[Object(r.jsx)("label",{children:"Power Play"}),Object(r.jsxs)(U.a,{value:n.powerplay,exclusive:!0,onChange:function(e,t){i(Object(x.a)(Object(x.a)({},n),{},{powerplay:t}))},children:[Object(r.jsx)(G.a,{value:1,children:Object(r.jsx)(ee.a,{})}),Object(r.jsx)(G.a,{value:0,children:Object(r.jsx)(X.a,{})})]})]})}),Object(r.jsx)(D.a,{title:"Is this build easy to achieve early-game?",children:Object(r.jsxs)("div",{className:"beginner",children:[Object(r.jsx)("label",{children:"Beginner"}),Object(r.jsxs)(U.a,{value:n.beginner,exclusive:!0,onChange:function(e,t){i(Object(x.a)(Object(x.a)({},n),{},{beginner:t}))},children:[Object(r.jsx)(G.a,{value:1,children:Object(r.jsx)(ee.a,{})}),Object(r.jsx)(G.a,{value:0,children:Object(r.jsx)(X.a,{})})]})]})})]})]})},ie=i(17),te=i(19),ae=function(e){var n=Object(c.useState)(null),i=Object(a.a)(n,2),t=i[0],l=i[1],s=Object(c.useState)(null),o=Object(a.a)(s,2),u=o[0],d=o[1],b=Object(c.useState)(null),h=Object(a.a)(b,2),O=h[0],p=h[1],g=Object(c.useState)([]),v=Object(a.a)(g,2),f=v[0],m=v[1],S=Object(c.useState)({guardian:null,powerplay:null,beginner:null}),w=Object(a.a)(S,2),y=w[0],L=w[1],N=new URLSearchParams(Object(ie.g)().search);Object(c.useEffect)((function(){"true"===N.get("beginner")&&L(Object(x.a)(Object(x.a)({},y),{},{beginner:1}))}),[]),Object(c.useEffect)((function(){(0,e.queryUpdate)({ship:t,size:u,engLevel:O,specialties:f,other:y})}),[t,u,O,f,y]);return Object(r.jsxs)(_.a,{className:"query",children:[Object(r.jsx)(H,{selectedSpecialties:f,setSpecialties:m}),Object(r.jsx)(V,{shipType:t,setShipType:l,shipSize:u,setShipSize:d}),Object(r.jsx)(Y,{engLevel:O,setEngLevel:p}),Object(r.jsx)(ne,{other:y,setOther:L}),Object(r.jsxs)("div",{className:"reset",children:[Object(r.jsx)(j.a,{onClick:function(){l(null),d(null),p(null),m([]),L({guardian:null,powerplay:null,beginner:null})},color:"primary",variant:"outlined",className:"resetButton",children:"Reset Selections"}),Object(r.jsx)(j.a,{variant:"outlined",color:"secondary",component:te.b,to:"/information/builds/add",children:"Add Build"})]})]})},re=i(184),ce=i(285),le=i(241),se=i.n(le),oe=(i(239),i(30)),ue=i(107),je=i(284),de=i(290),be=i(6),he=i.n(be),Oe=i(9);function pe(){var e=Object(M.a)(["\n    fragment ShipBuildFields on shipBuilds {\n        _id\n    }"]);return pe=function(){return e},e}function ge(){var e=Object(M.a)(["\n    mutation AddBuild($build: ShipBuildInsertInput!) {\n        addedBuild: insertOneShipBuild(data: $build) {\n            _id\n            author\n            beginner\n            buildLink\n            description\n            engLevel\n            guardian\n            moreInfo\n            powerplay\n            ship\n            specializations\n            id\n        }\n}"]);return ge=function(){return e},e}var ve=Object(T.gql)(ge()),fe=Object(T.gql)(pe()),xe=i(240),me=Object(ue.a)({root:{textAlign:"center",display:"grid",gridTemplate:"auto / 1fr",rowGap:"10px",width:"90%",margin:"auto"}}),Se=function(){var e=me(),n=Object(c.useState)(""),i=Object(a.a)(n,2),l=i[0],s=i[1],o=Object(c.useState)({description:"",guardian:!1,powerplay:!1,buildLink:"",ship:0,moreInfo:"",_id:new xe.a,id:0,author:"",specializations:[],engLevel:0,beginner:!1}),u=Object(a.a)(o,2),d=u[0],b=u[1],h=Object(c.useState)([]),p=Object(a.a)(h,2),v=p[0],f=p[1],m=function(){var e=Object(T.useMutation)(ve,{update:function(e,n){var i=n.data;e.modify({fields:{shipBuilds:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat(Object(t.a)(n),[e.writeFragment({data:i,fragment:fe})])}}})}}),n=Object(a.a)(e,1)[0];return function(){var e=Object(Oe.a)(he.a.mark((function e(i){var t;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({variables:{build:Object(x.a)({},i)}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}();Object(c.useEffect)((function(){b((function(e){return Object(x.a)(Object(x.a)({},e),{},{specializations:v})}))}),[v]);var S=function(e){var n=e.target.value;switch(e.target.id){case"description":b(Object(x.a)(Object(x.a)({},d),{},{description:n}));break;case"moreInfo":b(Object(x.a)(Object(x.a)({},d),{},{moreInfo:n}));break;case"buildLink":b(Object(x.a)(Object(x.a)({},d),{},{buildLink:n}));break;case"author":b(Object(x.a)(Object(x.a)({},d),{},{author:n}))}},w=function(e){b(Object(x.a)(Object(x.a)({},d),{},Object(oe.a)({},e.target.name,e.target.checked)))};return Object(r.jsxs)("div",{className:e.root,children:[Object(r.jsx)(j.a,{to:"/information/builds",component:te.b,color:"secondary",variant:"outlined",children:"Return to builds"}),""===l&&Object(r.jsx)(W.a,{label:"Exported JSON",multiline:!0,value:l,onChange:function(e){s(e.target.value);var n=function(e){var n,i,t,a=JSON.parse(e),r=a.name,c=a.ship,l=null!==(n=a.references[0].url)&&void 0!==n?n:"",s=!1,o=!1,u=!1,j=a.components,d=j.standard,b=j.hardpoints,h=j.internal,O=null!==(i=d.powerPlant.name)&&void 0!==i?i:"",p=null!==(t=d.powerDistributor.name)&&void 0!==t?t:"",g=b.find((function(e){return null===e||void 0===e?void 0:e.group.toLowerCase().startsWith("guardian")})),v=h.find((function(e){return null===e||void 0===e?void 0:e.group.toLowerCase().startsWith("guardian")}));!1===s&&(O.toLowerCase().startsWith("guardian")||p.toLowerCase().startsWith("guardian")||g||v)&&(s=!0);var f=h.find((function(e){return null===e||void 0===e?void 0:e.group.toLowerCase().startsWith("prismatic")}));!1===o&&f&&(o=!0),["disruptor","imperial hammer","pack-hound","mining lance","enforcer","cytoscrambler","retributor","advanced plasma accelerator","pacifier","rocket propelled fsd disruptor"].forEach((function(e){if(!1===o){var n=b.find((function(n){var i;return(null===n||void 0===n||null===(i=n.name)||void 0===i?void 0:i.toLowerCase())===e.toLowerCase()}));o=!!n}}));var x=b.filter((function(e){return null===e||void 0===e?void 0:e.blueprint})),m=h.filter((function(e){return null===e||void 0===e?void 0:e.blueprint})),S=d.powerPlant.blueprint,w=d.thrusters.blueprint,y=d.frameShiftDrive.blueprint,L=d.lifeSupport.blueprint,N=d.powerDistributor.blueprint,C=d.sensors.blueprint;return!1===u&&(x.length>0||m.length>0||S||w||y||L||N||C)&&(u=!0),{buildName:r,shipName:c,guardian:s,powerplay:o,engineering:u,url:l}}(e.target.value),i=n.buildName,t=n.shipName,a=n.guardian,r=n.powerplay,c=n.engineering,l=n.url,o=c?1:0,u=function(e){return g.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))}(t),j={_id:d._id,id:0,description:i,guardian:a,powerplay:r,buildLink:l,ship:u.id,author:"",specializations:[],engLevel:o,beginner:!1,moreInfo:""};console.log(j),b(j)}}),Object(r.jsx)(W.a,{id:"description",label:"Title/Description",value:d.description,onChange:S}),Object(r.jsx)(W.a,{id:"moreInfo",label:"More Information",multiline:!0,value:d.moreInfo,onChange:S}),Object(r.jsx)(W.a,{id:"buildLink",label:"Build Link - Full Link",value:d.buildLink,onChange:S}),Object(r.jsx)(W.a,{id:"author",label:"Author",value:d.author,onChange:S}),Object(r.jsx)(J.a,{id:"shipType",options:Object(q.a)(g,"name"),autoHighlight:!0,getOptionLabel:function(e){return e.name},renderOption:function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("span",{children:e.name})})},renderInput:function(e){return Object(r.jsx)(W.a,Object(x.a)(Object(x.a)({},e),{},{label:"Ship Type",variant:"outlined",inputProps:Object(x.a)(Object(x.a)({},e.inputProps),{},{autocomplete:"new-password"})}))},value:we(d.ship),onChange:function(e,n){var i=n.id;b(Object(x.a)(Object(x.a)({},d),{},{ship:i}))}}),Object(r.jsx)(H,{selectedSpecialties:v,setSpecialties:f}),Object(r.jsxs)(U.a,{value:d.engLevel,exclusive:!0,onChange:function(e,n){b(Object(x.a)(Object(x.a)({},d),{},{engLevel:n}))},children:[Object(r.jsx)(G.a,{value:0,children:Object(r.jsx)(D.a,{title:"No Engineering",arrow:!0,children:Object(r.jsx)("div",{className:"engButton",children:Object(r.jsx)(X.a,{})})})}),Object(r.jsx)(G.a,{value:1,children:Object(r.jsx)(D.a,{title:"Simple Engineering",arrow:!0,children:Object(r.jsx)("div",{className:"engButton",children:Object(r.jsx)("img",{src:O,alt:"engineeringIcon"})})})}),Object(r.jsx)(G.a,{value:2,children:Object(r.jsx)(D.a,{title:"Moderate Engineering",arrow:!0,children:Object(r.jsxs)("div",{className:"engButton",children:[Object(r.jsx)("img",{src:O,alt:"engineeringIcon"}),Object(r.jsx)("img",{src:O,alt:"engineeringIcon"})]})})}),Object(r.jsx)(G.a,{value:3,children:Object(r.jsx)(D.a,{title:"End-Game/Extreme Engineering",arrow:!0,children:Object(r.jsxs)("div",{className:"engButton",children:[Object(r.jsx)("img",{src:O,alt:"engineeringIcon"}),Object(r.jsx)("img",{src:O,alt:"engineeringIcon"}),Object(r.jsx)("img",{src:O,alt:"engineeringIcon"})]})})})]}),Object(r.jsx)(je.a,{label:"Guardian",control:Object(r.jsx)(de.a,{name:"guardian",checked:d.guardian,onChange:w})}),Object(r.jsx)(je.a,{label:"Powerplay",control:Object(r.jsx)(de.a,{name:"powerplay",checked:d.powerplay,onChange:w})}),Object(r.jsx)(je.a,{label:"Beginner",control:Object(r.jsx)(de.a,{name:"beginner",checked:d.beginner,onChange:w})}),Object(r.jsx)(j.a,{onClick:function(){var e=m(d);console.log(e)},children:"Submit Build"})]})},we=function(e){return null===e?null:g.find((function(n){return n.id===e}))},ye=function(){var e=Object(ie.h)().path,n=Object(c.useState)(),i=Object(a.a)(n,2),t=i[0],l=i[1],s=Object(c.useRef)(null),o=Object(re.a)("(max-width:1000px)");return Object(r.jsxs)(ie.d,{children:[Object(r.jsx)(ie.b,{path:e,exact:!0,children:Object(r.jsxs)("section",{className:"selection",children:[Object(r.jsx)(d.a,{variant:"h3",children:"Ship Build Archive"}),Object(r.jsx)(ae,{queryUpdate:function(e){l(e)}}),Object(r.jsx)("div",{ref:s,children:Object(r.jsx)(F,{buildQuery:t})}),o&&Object(r.jsx)("div",{className:"fab",children:Object(r.jsx)(ce.a,{color:"primary",className:"fab",onClick:function(){s.current&&s.current.scrollIntoView({behavior:"smooth"})},children:Object(r.jsx)(se.a,{})})})]})}),Object(r.jsx)(ie.b,{path:"".concat(e,"/add"),children:Object(r.jsx)(Se,{})})]})}}}]);
//# sourceMappingURL=4.8056e6e2.chunk.js.map