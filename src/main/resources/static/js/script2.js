/**
 * 
 */

 const slider = document.querySelector(".slider-signup");
 
 const tl = new TimelineMax();
 
tl.fromTo(slider , 1.2 ,{x : "-50%"} , {x : "100%" , ease : Power2.easeInOut} ,"-=" );
 