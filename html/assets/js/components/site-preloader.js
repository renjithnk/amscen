/* Website Preloader: Start */
function sitePreloader1(selector,duration){
let preloaderElement=document.querySelector(selector);
if(preloaderElement) {
    document.addEventListener('DOMContentLoaded',()=>{
        document.body.style.overflowY='hidden';
    })
setTimeout(function(){
    preloaderElement.remove();  
    document.body.removeAttribute('style'); 
    },duration); 
}
}
sitePreloader1('.site-preloader1',1000);
/* Website Preloader: End */

export default sitePreloader1;