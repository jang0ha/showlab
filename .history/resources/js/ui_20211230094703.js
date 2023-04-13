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




// //서브 로고 
var headerSubLogo = TweenMax.to('.sub-logo', 2, {
    ease: Power0.easeOut,
    y: -80,
});
var scene2 = new ScrollMagic.Scene({
        triggerElement: "#headerTrigger",
        duration: 200,
    })
    .setTween(headerSubLogo)
    .addTo(controller)
    .addIndicators({
        name: "HEADER-sublog",
    })


var logo = document.getElementsByClassName("main-logo")[0];
window.onresize = function (event) {

    var innerWidth = window.innerWidth;
    innerWidth <= "1280" ? logo.style.width = 75 + "vw" : logo.style.backgroundColor = "black";
    var controller = new ScrollMagic.Controller();
    var headerMainLogo = TweenMax.to('.main-logo', 3, {
        ease: Power0.easeOut,
        y: -80,
        // autoAlpha: 0.3,
        // scale:1,
        width: 10 + 'vw'
    });
    var scene = new ScrollMagic.Scene({
            triggerElement: "#headerTrigger",
            duration: 400,
        })
        .setTween(headerMainLogo)
        .addTo(controller)
        .addIndicators({
            name: "HEADER-mianlogo",
        })


}