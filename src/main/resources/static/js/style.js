/**
 * 
 */

 const hero = document.querySelector('.top');
  const slider = document.querySelector('.slider');
  const content = document.querySelector(".left");

  
  
  const tl = new TimelineMax();

  
  console.log("Inside Style")
  
tl.fromTo(slider , 1.2 ,{x : "-100%"} , {x : "0%" , ease : Power2.easeInOut} ,"-=" )
.fromTo(content , 0.5 , {opacity : 0 , x : 30} , {opacity : 1 , x : 0} , "-=0.5");



