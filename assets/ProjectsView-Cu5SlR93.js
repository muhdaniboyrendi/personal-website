import{_ as p,e as _,o as n,c as r,b as t,t as c,d as s,w as m,f as u}from"./index-WSwnG0NL.js";const h={class:"col-md-6 mb-4","data-aos":"fade-right","data-aos-offset":"200","data-aos-duration":"1500"},v={class:"card"},f={class:"card-body"},x={class:"card-title"},w={class:"card-text"},L={__name:"ProjectLists",props:["title","text"],setup(i){const o=i;return(e,a)=>{const l=_("RouterLink");return n(),r("div",h,[t("div",v,[a[1]||(a[1]=t("img",{src:"",class:"card-img-top",alt:"..."},null,-1)),t("div",f,[t("h5",x,c(o.title),1),t("p",w,c(o.text),1),s(l,{to:"/projects",class:"btn mt-3 project-view","aria-current":"page"},{default:m(()=>a[0]||(a[0]=[u("Learn more »")])),_:1})])])])}}},d=p(L,[["__scopeId","data-v-c92f0396"]]),g={class:"row mt-5"},j={class:"col"},S={class:"row mt-3"},$={class:"row"},A="Application for student management and attendance system with QR Code. Developed with Laravel, Livewire, Bootstrap",B="Simple online shop application with admin and customer pages. Developed with Laravel, Bootstrap",T="Simple Notes App with features add, delete, archive, and search notes. Developed with React JS, Bootstrap",P="Simple Todo List App with featues add, delete, and done todo. Developed with Vue JS, Bootstrap",b={__name:"MyProjects",setup(i){return(o,e)=>(n(),r("div",g,[t("div",j,[e[0]||(e[0]=t("span",{"data-aos":"fade-right","data-aos-offset":"300","data-aos-duration":"1500"}," Some projects I have worked on ",-1)),t("div",S,[s(d,{title:"Grasius",text:A}),s(d,{title:"Online Shop",text:B})]),t("div",$,[s(d,{title:"Note App",text:T}),s(d,{title:"Todo List App",text:P})])])]))}},k=p(b,[["__scopeId","data-v-3dc212e0"]]),y={class:"about mt-5 pt-5"},D={class:"container"},V={__name:"ProjectsView",setup(i){return(o,e)=>(n(),r("div",y,[t("div",D,[e[0]||(e[0]=t("h1",{"data-aos":"fade-up","data-aos-offset":"300"},"Projects",-1)),s(k)])]))}};export{V as default};
