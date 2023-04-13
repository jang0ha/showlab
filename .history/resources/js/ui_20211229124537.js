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
var headerSubLogo = TweenMax.to('.main-logo', 5, {
    ease: Power0.easeOut,
    y: -50,
    // autoAlpha: 0.3,
    scale:1,
});

var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        offset: 200 
    })
    .setTween(tweeheaderSubLogon1)
    .addTo(controller)
    .addIndicators({
        name: "1",
    })