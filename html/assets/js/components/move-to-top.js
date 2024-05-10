/* Move to Top: Start */

function moveToTop(){
    // Get the button
    let movetotopTrigger = document.querySelector(".move-to-top");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          let contentcs = window.getComputedStyle(movetotopTrigger).display;
        if (contentcs === "none") {
                movetotopTrigger.style.cssText="transition:all 0.5s ease 0s";
                movetotopTrigger.style.opacity = "0";
                movetotopTrigger.style.display = "flex";
                setTimeout(() => {
                    movetotopTrigger.style.opacity = 1;
                    movetotopTrigger.style.display = "flex";
                }, 100);
            }
      } else {
                   movetotopTrigger.style.opacity = "0";
                setTimeout(() => {
                    movetotopTrigger.style.opacity = 0;
                    movetotopTrigger.style.display = "none";
            }, 200);
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    movetotopTrigger.addEventListener("click", topFunction);
    }
    moveToTop()

export default moveToTop;    

/* Move to Top: End */