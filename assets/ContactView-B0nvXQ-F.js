import{_ as u,g as r,o as c,c as i,b as e,n,f as d,h as p,a as f,d as v}from"./index-DmzR1wE3.js";const y={class:"row my-5"},_={class:"col-md-7","data-aos":"fade-right","data-aos-offset":"300","data-aos-duration":"1500"},w={class:"card"},g={class:"card-body p-3"},h="https://script.google.com/macros/s/AKfycbyzH7zYjHXVDsB0DjIncPO3smukF9iBAHfGR6dmMC0DK8rNrUMrX18XAuskm-YkFF9S2g/exec",k={__name:"ContactForm",setup(m){const t=r(null),s=r(!1),l=r(!1),b=async()=>{try{s.value=!0;const o=new FormData(t.value),a=await fetch(h,{method:"POST",body:o});if(!a.ok)throw new Error("Network response was not ok");t.value.reset(),l.value=!0,console.log("Success!",a)}catch(o){console.error("Error!",o.message)}finally{s.value=!1}};return(o,a)=>(c(),i("div",y,[e("div",_,[e("div",w,[e("div",g,[e("div",{class:n(["alert alert-dismissible fade show mt-1",{"d-none":!l.value}]),role:"alert"},[a[1]||(a[1]=d(" Your message has been sent successfully! ")),e("button",{type:"button",class:"btn-close",onClick:a[0]||(a[0]=F=>l.value=!1)})],2),e("form",{onSubmit:p(b,["prevent"]),ref_key:"contactForm",ref:t},[a[4]||(a[4]=f('<div class="mb-3" data-v-4eaa4cbb><label for="nama" class="form-label" data-v-4eaa4cbb>Your Name</label><input type="text" name="nama" class="form-control" id="nama" placeholder="Type your Name" data-v-4eaa4cbb></div><div class="mb-3" data-v-4eaa4cbb><label for="email" class="form-label" data-v-4eaa4cbb>Email address</label><input type="email" name="email" class="form-control" id="email" placeholder="Type your email" data-v-4eaa4cbb></div><div class="mb-3" data-v-4eaa4cbb><label for="pesan" class="form-label" data-v-4eaa4cbb>Message</label><textarea name="pesan" id="pesan" class="form-control" rows="5" data-v-4eaa4cbb></textarea></div>',3)),e("button",{type:"submit",class:n(["btn btn-primary btn-kirim",{"d-none":s.value}])},a[2]||(a[2]=[d("Send "),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-send",viewBox:"0 0 16 16"},[e("path",{d:"M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"})],-1)]),2),e("button",{class:n(["btn btn-primary btn-loading",{"d-none":!s.value}]),type:"button",disabled:""},a[3]||(a[3]=[e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),d(" Sending... ")]),2)],544)])])]),a[5]||(a[5]=e("div",{class:"col-md-5"},null,-1))]))}},x=u(k,[["__scopeId","data-v-4eaa4cbb"]]),C={class:"about mt-5 pt-5"},S={class:"container"},B={__name:"ContactView",setup(m){return(t,s)=>(c(),i("div",C,[e("div",S,[s[0]||(s[0]=e("h1",{"data-aos":"fade-up","data-aos-offset":"300"},"Contact",-1)),v(x)])]))}};export{B as default};
