(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-405f9e82"],{6787:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),l=Object(c["g"])("COMMUNES");function o(e,t,n,o,u,r){var a=Object(c["v"])("ion-title"),i=Object(c["v"])("ion-toolbar"),b=Object(c["v"])("ion-header"),j=Object(c["v"])("RechercheCommunes"),O=Object(c["v"])("ion-content"),s=Object(c["v"])("ion-page");return Object(c["q"])(),Object(c["e"])(s,null,{default:Object(c["A"])((function(){return[Object(c["h"])(b,null,{default:Object(c["A"])((function(){return[Object(c["h"])(i,null,{default:Object(c["A"])((function(){return[Object(c["h"])(a,{style:{"text-align":"center",color:"red"}},{default:Object(c["A"])((function(){return[l]})),_:1})]})),_:1})]})),_:1}),Object(c["h"])(O,null,{default:Object(c["A"])((function(){return[Object(c["h"])(j)]})),_:1})]})),_:1})}var u=Object(c["g"])("RECHERCHER"),r=Object(c["g"])("reset");function a(e,t,n,l,o,a){var i=Object(c["v"])("ion-input"),b=Object(c["v"])("ion-button"),j=Object(c["v"])("ion-toolbar"),O=Object(c["v"])("ResultatDeRecherche");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["h"])("form",{onSubmit:t[2]||(t[2]=function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)})},[Object(c["h"])(j,{color:"light"},{default:Object(c["A"])((function(){return[Object(c["h"])(i,{id:"ville",style:{"margin-left":"10px"},name:"ville",value:o.ville,onInput:t[1]||(t[1]=function(e){return o.ville=e.target.value}),"show-cancel-button":"never",placeholder:"Code postal ou ville",class:"search"},null,8,["value"]),Object(c["h"])(b,{expand:"full",type:"submit",color:"dark"},{default:Object(c["A"])((function(){return[u]})),_:1})]})),_:1})],32),Object(c["h"])(b,{expand:"full",color:"light",onClick:a.reloadPage},{default:Object(c["A"])((function(){return[r]})),_:1},8,["onClick"]),Object(c["h"])(O,{result:o.result},null,8,["result"])],64)}n("a15b");var i={id:"container"},b={key:0},j={class:"text-center mt-5"},O={class:"ion-no-padding",style:{color:"#3dc2ff"}},s=Object(c["h"])("strong",null,"Code INSEE",-1),f=Object(c["h"])("strong",null,"Département",-1),d=Object(c["h"])("strong",null,"Région",-1),h=Object(c["h"])("strong",null,"Codes postaux",-1),v=Object(c["h"])("strong",null,"Population",-1);function p(e,t,n,l,o,u){var r=Object(c["v"])("ion-text"),a=Object(c["v"])("ion-col"),p=Object(c["v"])("ion-row"),m=Object(c["v"])("ion-card-header"),g=Object(c["v"])("ion-card");return Object(c["q"])(),Object(c["e"])("div",i,[n.result?(Object(c["q"])(),Object(c["e"])("div",b,[Object(c["h"])(r,{class:"ion-text-center ion-no-padding"},{default:Object(c["A"])((function(){return[Object(c["h"])("p",j,[Object(c["h"])("strong",null,Object(c["x"])(n.result.length),1),Object(c["g"])(" "+Object(c["x"])(1===n.result.length?"commune":"communes"),1)])]})),_:1}),(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["u"])(n.result,(function(e,t){return Object(c["q"])(),Object(c["e"])("div",{key:t},[Object(c["h"])(g,null,{default:Object(c["A"])((function(){return[Object(c["h"])(m,{class:"md hydrated"},{default:Object(c["A"])((function(){return[Object(c["h"])(p,null,{default:Object(c["A"])((function(){return[Object(c["h"])(a,null,{default:Object(c["A"])((function(){return[Object(c["h"])("h1",O,[Object(c["h"])("strong",null,Object(c["x"])(e.nom),1)])]})),_:2},1024)]})),_:2},1024),Object(c["h"])(p,null,{default:Object(c["A"])((function(){return[Object(c["h"])(a,null,{default:Object(c["A"])((function(){return[s]})),_:1}),Object(c["h"])(a,{class:"ion-text-end color-primary"},{default:Object(c["A"])((function(){return[Object(c["g"])(Object(c["x"])(e.code),1)]})),_:2},1024)]})),_:2},1024),Object(c["h"])(p,null,{default:Object(c["A"])((function(){return[Object(c["h"])(a,null,{default:Object(c["A"])((function(){return[f]})),_:1}),Object(c["h"])(a,{class:"ion-text-end color-primary"},{default:Object(c["A"])((function(){return[Object(c["g"])(Object(c["x"])(e.codeDepartement||e.departement.code),1)]})),_:2},1024)]})),_:2},1024),Object(c["h"])(p,null,{default:Object(c["A"])((function(){return[Object(c["h"])(a,null,{default:Object(c["A"])((function(){return[d]})),_:1}),Object(c["h"])(a,{class:"ion-text-end color-primary"},{default:Object(c["A"])((function(){return[Object(c["g"])(Object(c["x"])(e.codeRegion||e.region.code),1)]})),_:2},1024)]})),_:2},1024),Object(c["h"])(p,null,{default:Object(c["A"])((function(){return[Object(c["h"])(a,null,{default:Object(c["A"])((function(){return[h]})),_:1}),Object(c["h"])(a,{class:"ion-text-end color-primary"},{default:Object(c["A"])((function(){return[Object(c["g"])(Object(c["x"])(e.codesPostaux.join(", ")),1)]})),_:2},1024)]})),_:2},1024),Object(c["h"])(p,null,{default:Object(c["A"])((function(){return[Object(c["h"])(a,{size:"8"},{default:Object(c["A"])((function(){return[v]})),_:1}),Object(c["h"])(a,{class:"ion-text-end color-primary"},{default:Object(c["A"])((function(){return[Object(c["g"])(Object(c["x"])(e.population),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)])})),128))])):Object(c["f"])("",!0)])}var m={name:"ResultatDeRecherche",props:["result"]};m.render=p;var g=m,A=n("bc3a"),_=n.n(A),x={name:"RechercheCommunes",components:{ResultatDeRecherche:g},data:function(){return{ville:"",result:null}},methods:{onSubmit:function(e){var t=this;e.preventDefault(this.ville),console.log(this.ville);var n=/^[a-zA-Z]+$/.test(this.ville),c=/^[0-9]{5}?$/.test(this.ville);c?_.a.get("https://geo.api.gouv.fr/communes?codePostal=".concat(this.ville)).then((function(e){e.data,t.result=e.data,console.log(t.result)})):(n&&_.a.get("https://geo.api.gouv.fr/communes?nom=".concat(this.ville,"&boost=population&fields=population,departement,codesPostaux,region")).then((function(e){e.data,t.result=e.data,console.log(t.result)})),n&&""!==this.ville||alert("veuillez entrer une ville ou code postal valide, merci!"))},reloadPage:function(){this.result=null}}};x.render=a;var y=x,R=n("d867"),C={name:"AffichageCommunes",components:{RechercheCommunes:y,IonHeader:R["c"],IonToolbar:R["m"],IonTitle:R["l"],IonContent:R["b"],IonPage:R["f"]}};C.render=o;t["default"]=C},a15b:function(e,t,n){"use strict";var c=n("23e7"),l=n("44ad"),o=n("fc6a"),u=n("a640"),r=[].join,a=l!=Object,i=u("join",",");c({target:"Array",proto:!0,forced:a||!i},{join:function(e){return r.call(o(this),void 0===e?",":e)}})},a640:function(e,t,n){"use strict";var c=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&c((function(){n.call(null,t||function(){throw 1},1)}))}}}]);
//# sourceMappingURL=chunk-405f9e82.528399b8.js.map