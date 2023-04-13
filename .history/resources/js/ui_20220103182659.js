const html = document.querySelector('html');
const body = document.querySelector('body');


/***

 */


/***
    
 */




/***
    메인> 헤더 액션   ('target', 'duration:속도', {vars}) 
 */

var innerWidth = window.innerWidth;
var logoWidth = $(".main-logo").outerWidth();
console.log(logoWidth);

// init controller
var controller = new ScrollMagic.Controller();




// 메인 로고 
$(document).ready(function () {

});
const headerBlock = document.getElementById("header-block");

var headerMainLogo = TweenMax.to('.main-logo', 2, {
    ease: Power0.easeOut,
    y: -80,
    // autoAlpha: 0.3,
    // scale: innerWidth * 0.001,
    // scale: 1,
    width: 10 + 'vw',
    // onComplete: moveHeader,
    // onReverseComplete : asdf,
});
var scene = new ScrollMagic.Scene({
        triggerElement: "#headerTrigger",
        triggerHook:0.5,
        duration: 300,
    })
    .setTween(headerMainLogo)
    .addTo(controller)
    .addIndicators({
        name: "HEADER-mianlogo",
    })
    // .on('enter', function () {
    //     console.log('test');
    //     headerBlock.classList.remove("is-scrolled");
    // })
    // .on('leave', function () {
    //     console.log('asdf');
    //     headerBlock.classList.add("is-scrolled");
    // })
    var headerMainLogo = TweenMax.to('#header-block', 2, {
        ease: Power0.easeOut,
        y: -80,
        // autoAlpha: 0.3,
        // scale: innerWidth * 0.001,
        // scale: 1,
        // width: 10 + 'vw',
        // onComplete: moveHeader,
        // onReverseComplete : asdf,
    });

var scene3 = new ScrollMagic.Scene({
    triggerElement: "#headerfixedTrigger",
})
.setTween(headerMainLogo)
.addTo(controller)
.addIndicators({
    name: "HEADER-fixed",
})
// .on('enter', function () {
//     console.log('test');
//     headerBlock.classList.remove("is-scrolled");
// })
// .on('leave', function () {
//     console.log('asdf');
//     headerBlock.classList.add("is-scrolled");
// })

// function moveHeader() {
//     console.log('test');
//     headerBlock.classList.add("is-scrolled");
// }

// function asdf() {
//     console.log('asdf');
//     headerBlock.classList.remove("is-scrolled");
// }



// //서브 로고 
var headerSubLogo = TweenMax.to('.sub-logo', 2, {
    ease: Power0.easeOut,
    y: -80,
});
var scene2 = new ScrollMagic.Scene({
        triggerElement: "#headerTrigger",
        duration: 200,
        offset:50,
    })
    .setTween(headerSubLogo)
    .addTo(controller)
    .addIndicators({
        name: "HEADER-sublog",
    })
var logo = document.getElementsByClassName("main-logo")[0];
// installMediaQueryWatcher("(min-width: 1px)", function (matches) {

//     if (matches) {
//         scene.addTo(controller);
//         scene2.addTo(controller);
//         // logo.style.width = 10 + "vw";

//     } else {
//         scene.remove();   
//         scene2.remove();  
//     }
// });
installMediaQueryWatcher("(max-width: 768px)", function (matches) {

    if (matches) {


        // logo.style.transform = 'scale(1)';
        // logo.style.transform = 'translateY(100px)';

        scene.addTo(controller);
        scene2.addTo(controller);

    } else {
        logo.style.minWidth = 110 + "px";
        logo.style.width = 70 + "vw";
        // logo.style.transform = 'scale(0.5)';
        scene.addTo(controller);
        scene2.addTo(controller);
        // logo.style.transform = 'scale(1)';
    }
});


// 미디어 쿼리 적용 
function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
    var mql = window.matchMedia(mediaQuery);
    mql.addListener(function (e) {
        return layoutChangedCallback(e.matches);
    });
    layoutChangedCallback(mql.matches);
}

// var logo = document.getElementsByClassName("main-logo")[0];
// // [0]
window.onresize = function (event) {

    var innerWidth = window.innerWidth;
    // innerWidth <= "1280" ? logo.style.width = 75 + "vw" : logo.style.width = 10 + "vw";
    if (innerWidth >= '768') {
        logo.style.minWidth = 110 + "px";
        // logo.style.width = 75 + "vw";
        // logo.style.transform = "scale(1)";
        return false;
    } else {

    }
    // }else{
    //     logo.style.width = 20 + "vw"

    // }

}
// var logo = document.getElementsByClassName("main-logo");
// var w = document.documentElement.clientWidth;
// function displayWindowSize(){
//     // Get width and height of the window excluding scrollbars

//     // var h = document.documentElement.clientHeight;

//     // Display result inside a div element
//     // document.getElementById("result").innerHTML = "Width: " + w + ", " + "Height: " + h;
//     // w <= "1280" ?  logo.style.width = 10 + "vw" : logo.style.width = 70 + "vw";

// }
// console.log(w);
// // window.addEventListener("resize", displayWindowSize);

// // displayWindowSize();


// Defining event listener function
// function displayWindowSize(){
//     // Get width and height of the window excluding scrollbars
//     var w = document.documentElement.clientWidth;

//     // Display result inside a div element
//     // document.getElementById("result").innerHTML = "Width: " + w + ", " + "Height: " + h   w * '0.2';;
//     document.getElementsByClassName("main-logo").style.transform = "scale("+ w * "0.2)";

// }
// // Attaching the event listener function to window's resize event
// window.addEventListener("resize", displayWindowSize);

// // Calling the function for the first time
// displayWindowSize();