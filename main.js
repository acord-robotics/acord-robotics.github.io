console.log("JavaScript is working!");


// Ham Menu (NOT FINISHED)==================================
      // function onClickMenu(){

            // document.getElementById("hammenu").classList.toggle("change");
                    
            // // document.getElementById("menu-list").classList.toggle("change");
                    
            // document.getElementById("menu-bg").classList.toggle("change-bg");
              
      };

// GSAP SCROLL ANIMATION =================================

      // Define timeline - Call the scroll trigger and define the target and other properties.
let tl = gsap.timeline ({
      scrollTrigger :{
            trigger: '.creators',
      }
});
      // After defining the timeline, define elements animation characteristics.
tl.from(".creators_avatars_bg", {x:-500, opacity:0, duration: 1.5})
  .from(".creators_section", {x:500, opacity: 0, duration: 0.5});