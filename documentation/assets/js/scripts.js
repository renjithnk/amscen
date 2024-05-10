/* Main Navigation Toggle: Start */



let mainNavigationToggle=()=>{
  let mt=document.querySelector('.main-navigation__trigger');
  let mc=document.querySelector('.main-navigation__content');
  let ma=document.querySelectorAll('.main-navigation__a');  
  mt.addEventListener('click',()=>{
  let cs = window.getComputedStyle(mc).display;
  if(cs==='none') {
    mc.style.display='block';
  }
  else {
    mc.style.display='none';
  }
  });

  if(window.innerWidth<1200) {
    ma.forEach((item)=>{
      item.addEventListener('click',()=>{
        mc.style.display='none';
      })
    })
  }

}

mainNavigationToggle();
window.addEventListener('resize', mainNavigationToggle);





/* Main Navigation Toggle: End */





// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 130;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".main-navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".main-navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}