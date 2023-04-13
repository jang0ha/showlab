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
// 서브 로고 
var headerSubLogo = TweenMax.to('.sub-logo', 5, {
    ease: Power0.easeOut,
    y: 500,
    autoAlpha: 0.3,
});

var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        // offset: 200 
    })
    .setTween(tweeheaderSubLogon1)
    .addTo(controller)
    .addIndicators({
        name: "1",
    })