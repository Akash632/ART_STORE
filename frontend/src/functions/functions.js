export function disableScroll() {
    let scrollTop =
     window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft =
     window.pageXOffset || document.documentElement.scrollLeft;
         window.onscroll = function() {
             window.scrollTo(scrollLeft, scrollTop);
         };
 }
   
export function enableScroll() {
     window.onscroll = function() {};
 }

