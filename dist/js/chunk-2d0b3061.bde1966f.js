(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3061"],{2739:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=Object(c["g"])("DEPARTEMENTS");function l(e,t,n,l,u,r){var a=Object(c["v"])("ion-title"),b=Object(c["v"])("ion-toolbar"),O=Object(c["v"])("ion-header"),j=Object(c["v"])("RechercheDepartements"),d=Object(c["v"])("ion-content"),i=Object(c["v"])("ion-page");return Object(c["q"])(),Object(c["e"])(i,null,{default:Object(c["A"])((function(){return[Object(c["h"])(O,null,{default:Object(c["A"])((function(){return[Object(c["h"])(b,null,{default:Object(c["A"])((function(){return[Object(c["h"])(a,{style:{"text-align":"center",color:"#3dc2ff"}},{default:Object(c["A"])((function(){return[o]})),_:1})]})),_:1})]})),_:1}),Object(c["h"])(d,null,{default:Object(c["A"])((function(){return[Object(c["h"])(j)]})),_:1})]})),_:1})}var u=Object(c["g"])("RECHERCHER"),r=Object(c["g"])("reset");function a(e,t,n,o,l,a){var b=Object(c["v"])("ion-select-option"),O=Object(c["v"])("ion-select"),j=Object(c["v"])("ion-button"),d=Object(c["v"])("ion-toolbar"),i=Object(c["v"])("ResultatDeRechercheD");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["h"])("form",{onSubmit:t[3]||(t[3]=function(){return a.showdepa&&a.showdepa.apply(a,arguments)})},[Object(c["h"])(d,{color:"light"},{default:Object(c["A"])((function(){return[Object(c["h"])(O,{placeholder:"Sélectionner",modelValue:l.dep,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.dep=e}),id:"selectedOption",onSelect:t[2]||(t[2]=function(e){return l.dep=e.target.value})},{default:Object(c["A"])((function(){return[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["u"])(l.result,(function(e){return Object(c["q"])(),Object(c["e"])(b,{key:e.code,value:e.code},{default:Object(c["A"])((function(){return[Object(c["g"])(Object(c["x"])(e.code)+"-"+Object(c["x"])(e.nom),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["modelValue"]),Object(c["h"])(j,{type:"submit",color:"dark",expand:"full"},{default:Object(c["A"])((function(){return[u]})),_:1})]})),_:1})],32),Object(c["h"])(j,{expand:"full",color:"light",onClick:a.reloadPage},{default:Object(c["A"])((function(){return[r]})),_:1},8,["onClick"]),Object(c["h"])(i,{selected:l.selected},null,8,["selected"])],64)}var b={key:0},O={class:"text-center mt-5"},j={class:"ion-no-padding",style:{color:"red"}},d=Object(c["h"])("strong",null,"Code postal",-1),i=Object(c["h"])("strong",null,"Population",-1);function f(e,t,n,o,l,u){var r=Object(c["v"])("ion-text"),a=Object(c["v"])("ion-col"),f=Object(c["v"])("ion-row"),s=Object(c["v"])("ion-card-header"),h=Object(c["v"])("ion-card"),p=Object(c["v"])("ion-content");return Object(c["q"])(),Object(c["e"])(p,null,{default:Object(c["A"])((function(){return[n.selected?(Object(c["q"])(),Object(c["e"])("div",b,[Object(c["h"])(r,{class:"ion-text-center ion-no-padding"},{default:Object(c["A"])((function(){return[Object(c["h"])("p",O,[Object(c["h"])("strong",null,Object(c["x"])(n.selected.length),1),Object(c["g"])(" "+Object(c["x"])(1===n.selected.length?"département":"départements"),1)])]})),_:1}),(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["u"])(n.selected,(function(e){return Object(c["q"])(),Object(c["e"])("div",{key:e.nom},[Object(c["h"])(h,null,{default:Object(c["A"])((function(){return[Object(c["h"])(s,{class:"md hydrated"},{default:Object(c["A"])((function(){return[Object(c["h"])(f,null,{default:Object(c["A"])((function(){return[Object(c["h"])(a,null,{default:Object(c["A"])((function(){return[Object(c["h"])("h1",j,[Object(c["h"])("strong",null,Object(c["x"])(e.nom),1)])]})),_:2},1024)]})),_:2},1024),Object(c["h"])(f,null,{default:Object(c["A"])((function(){return[Object(c["h"])(a,null,{default:Object(c["A"])((function(){return[d]})),_:1}),Object(c["h"])(a,{class:"ion-text-end color-primary"},{default:Object(c["A"])((function(){return[Object(c["g"])(Object(c["x"])(e.code),1)]})),_:2},1024)]})),_:2},1024),Object(c["h"])(f,null,{default:Object(c["A"])((function(){return[Object(c["h"])(a,null,{default:Object(c["A"])((function(){return[i]})),_:1}),Object(c["h"])(a,{class:"ion-text-end color-primary"},{default:Object(c["A"])((function(){return[Object(c["g"])(Object(c["x"])(e.population),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)])})),128))])):Object(c["f"])("",!0)]})),_:1})}var s={name:"ResultatDeRechercheD",props:["selected"]};s.render=f;var h=s,p=n("bc3a"),v=n.n(p),g={name:"AffichageDepartements",components:{ResultatDeRechercheD:h},data:function(){return{dep:"",result:null,selected:null}},mounted:function(){var e=this;v.a.get("https://geo.api.gouv.fr/departements").then((function(t){t.data,e.result=t.data,console.log(e.result)}))},methods:{showdepa:function(e){var t=this;e.preventDefault(),v.a.get("https://geo.api.gouv.fr/departements/"+selectedOption.value+"/communes").then((function(e){e.data,t.selected=e.data}))},reloadPage:function(){window.location.reload()}}};g.render=a;var m=g,A=n("d867"),_={name:"AffichageDepartements",components:{IonHeader:A["c"],IonToolbar:A["m"],IonTitle:A["l"],IonPage:A["f"],RechercheDepartements:m}};_.render=l;t["default"]=_}}]);
//# sourceMappingURL=chunk-2d0b3061.bde1966f.js.map