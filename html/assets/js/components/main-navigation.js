/* Main Nav: Start */

// Nav Slidedown method starts        
let slideDown = (e) => {
    let computedDisplay = window.getComputedStyle(e).display;

    if (computedDisplay === 'none') {
        e.style.display = 'block';
    }

    let contentHeight = e.offsetHeight;
    e.style.overflow = 'hidden';
    e.style.height = 0;
    e.style.paddingTop = 0;
    e.style.paddingBottom = 0;
    e.style.marginTop = 0;
    e.style.marginBottom = 0;
    e.offsetHeight;
    e.style.boxSizing = 'border-box';
    e.style.transitionProperty = "all";
    let speed = 700;
    e.style.transitionDuration = speed +'ms';
    e.style.height = contentHeight + 'px';
    e.style.removeProperty('padding-top');
    e.style.removeProperty('padding-bottom');
    e.style.removeProperty('margin-top');
    e.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
    e.style.removeProperty('height');
    e.style.removeProperty('overflow');
    e.style.removeProperty('transition-duration');
    e.style.removeProperty('transition-property');
    }, speed);
    }

// slideup method starts 
let slideUp = (e) => {
    let computedDisplay = window.getComputedStyle(e).display;

    if (computedDisplay === 'block') {
        computedDisplay = 'none';
    }

    e.style.transitionProperty = "all";
    let speed = 700;
    e.style.transitionDuration = speed +'ms';
    e.style.boxSizing = 'border-box';
    e.style.height = e.offsetHeight + 'px';
    e.offsetHeight;
    e.style.overflow = 'hidden';
    e.style.height = 0;
    e.style.paddingTop = 0;
    e.style.paddingBottom = 0;
    e.style.marginTop = 0;
    e.style.marginBottom = 0;
    window.setTimeout(()=>{
    e.style.display="none";
    e.style.removeProperty('height');
    e.style.removeProperty('padding-top');
    e.style.removeProperty('padding-bottom');
    e.style.removeProperty('margin-top');
    e.style.removeProperty('margin-bottom');
    e.style.removeProperty('overflow');
    e.style.removeProperty('transition-duration');
    e.style.removeProperty('transition-property');
    },speed)
    };


    // slidetoggle method starts 
    let slideToggle = (e)=>{
        let computedDisplay = window.getComputedStyle(e).display;
    if(computedDisplay==="none") {
        slideDown(e);
    }
    else {
        slideUp(e);
    }
    };
    
/* Slide Toggle Function: End */

/* Main Nav Class: Start */

class MainNavigation {
    constructor({
        mainNavParent: mainNavParent,
        mainTrigger : mainTrigger,
        mainContent : mainContent,
        collapse: condition,
        navItem : navItem,
        submenuTrigger: submenuTrigger,
        submenuContent : submenuContent,
        breakPoint : breakPoint,
    }) 
    {
        this.mainNavParent = document.querySelector(mainNavParent);
        this.mainTrigger = this.mainNavParent.querySelector(mainTrigger);
        this.mainContent = this.mainNavParent.querySelector(mainContent);
        this.collapse = condition;
        this.navItem = this.mainNavParent.querySelectorAll(navItem);
        this.submenuTrigger = this.mainNavParent.querySelectorAll(submenuTrigger);
        this.submenuContent = this.mainNavParent.querySelectorAll(submenuContent);
        this.breakPoint = breakPoint;
    }

/* Main Navigation Trigger: Start  */

mainNavigationTrigger(){

    /* Trigger Visibility Change: Start */
    let mainTriggerDisplay=()=>{
        if(window.innerWidth>=this.breakPoint) {
            this.mainTrigger.style.display="none";
        }
        else {
            this.mainTrigger.style.display="inline-block";
        }
    }
    mainTriggerDisplay();
    window.addEventListener("resize", mainTriggerDisplay);
    /* Trigger Visibility Change: End */

    /* Main Trigger Toggle: Start */
    this.mainTrigger.addEventListener("click", (e)=>{

            if(window.innerWidth>=this.breakPoint) {
                return false;
            }
            else {
                e.currentTarget.classList.toggle('active');
                let mainContent = this.mainContent;
                let mainContentCS = window.getComputedStyle(mainContent).display;
                if(mainContentCS==="none") {
                    slideDown(this.mainContent);
                }
                else {
                    slideUp(this.mainContent);
                    this.submenuContent.forEach((item)=>{
                        slideUp(item);
                    })
                }
            }
        });
    /* Main Trigger Toggle: End */
    }
/* Main Navigation Trigger: End  */

/* Submenu Detection: Start */
submenuDetect(){
    let li = this.navItem;
    li.forEach((item)=>{
        // item.style.border="2px solid red";
        let ul = item.querySelector("ul");
        if(ul){

            item.classList.add("has-submenu");

            /* adding icon */
            let iconElement = document.createElement("span");
            iconElement.setAttribute("class","down-arrow-icon");
            item.append(iconElement)
            // item.querySelector("a").classList.add('submenu-trigger');
        }
    });
}
/* Submenu Detection: End */

/* First Level Menu Toggle: Start */
firstLevelMenuToggle(){
    let firstLevelMenu = this.mainContent.querySelector("ul").querySelectorAll(":scope > li.has-submenu .down-arrow-icon");
    firstLevelMenu.forEach((item)=>{
        
        // let submenuTrigger = item.querySelector(":scope > a");
        item.addEventListener("click",(e)=>{
            let submenuContent = e.target.parentElement.querySelector(".main-nav__submenu-content");
            let submenuContentCS = window.getComputedStyle(submenuContent).display;
            if(submenuContentCS==="none") {
                /* Collapse Others: Start */
                // let condition= true;
                if(this.collapse) {
                    let parentUl = item.parentElement.parentElement;
                    let lihasSubmenus = parentUl.querySelectorAll(".has-submenu");
    
                    let otherSubmenus = lihasSubmenus.forEach((elem)=>{
                        let sm = elem.querySelector(".main-nav__submenu-content");
                        let smCS = window.getComputedStyle(sm).display;
                        if(smCS==="block") {
                            slideUp(sm);
                        }
                    });
                }
                /* Collapse Others: End */
                slideDown(submenuContent);
            }
            else {
                slideUp(submenuContent);
            }
        })
    });
}
/* First Level Menu Toggle: End */

/* Second Level Menu Toggle: Start */
secondLevelMenuToggle(){
    let secondLevelMenus = this.mainContent.querySelector("ul").querySelectorAll(":scope > li.has-submenu");
    secondLevelMenus.forEach((item)=>{
        let allmenus = item.querySelector(".main-nav__submenu-content").querySelectorAll(".submenu-trigger");
        allmenus.forEach((item)=>{
            // item.style.border="2px solid red";
            item.addEventListener("click",(e)=>{
            let submenu = e.target.parentElement.querySelector(".main-nav__submenu-content");
            let submenuCS = window.getComputedStyle(submenu).display;
            if(submenuCS==="none") {
                slideDown(submenu)
            }
            else {
                slideUp(submenu);
            }
            })
        })
    })
}
/* Second Level Menu Toggle: End */

/* Offscreen position fix of sub level menu: Start */
menuOffscreen=()=>{
    let offscreenMenu = this.submenuContent;
    let ww = window.innerWidth;
    offscreenMenu.forEach((item)=>{
        if(item.getBoundingClientRect().right > ww) {
            item.classList.add("offscreen"); 
        }
    });
  }   
}
/* Offscreen position fix of sub level menu: End */

/* Main Nav Class: End */

/* Main Nav Object Configuration: Start */
let mainNavigationOne = new MainNavigation({
    mainNavParent: '.main-nav--one',
    mainTrigger: '.main-nav__trigger',
    mainContent: '.main-nav__content',
    collapse: true,
    navItem: '.main-nav__item',
    submenuTrigger: '.submenu-trigger',
    submenuContent: '.main-nav__submenu-content',
    breakPoint: 1200, // Break Point of Menu Collapse
});

mainNavigationOne.mainNavigationTrigger();
mainNavigationOne.submenuDetect();
mainNavigationOne.firstLevelMenuToggle();
mainNavigationOne.secondLevelMenuToggle();
mainNavigationOne.menuOffscreen();
/* Main Nav Object Configuration: End */

/* Main Nav: End */

export default mainNavigationOne;