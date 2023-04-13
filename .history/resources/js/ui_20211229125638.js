const html = document.querySelector('html');
const body = document.querySelector('body');


/***

 */


/***
    
 */




/***
    메인> 헤더 액션   ('target', 'duration:속도', {vars}) 
 */

var controller = new ScrollMagic.Controller();
// 메인 로고 
var headerSubLogo = TweenMax.to('.main-logo', 3, {
    ease: Power0.easeOut,
    y: -80,
    // autoAlpha: 0.3,
    scale:1,
});

var scene = new ScrollMagic.Scene({
        triggerElement: "#headerTrigger",
        duration: 100,
    })
    .on("enter", function () {
        // trigger animation by changing inline style.
        animateElem.style.backgroundColor = "grey";
    })
    .on("leave", function () {
        // reset style
        animateElem.style.backgroundColor = "";
    })
    .addIndicators({name: "2 - change inline style"}) // add indicators (requires plugin)
    .addTo(controller);