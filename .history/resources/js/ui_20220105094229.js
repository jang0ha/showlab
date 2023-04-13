const html = document.querySelector('html');
const body = document.querySelector('body');


/***
    WINDOW RESIZE
 */
var Init = {
    defaults: function () {
        this.resize();
        window.addEventListener("resize", this.resize);
    },
    resize: function () {
        // Init.getBrowserSize();

        Init.breakpoint = window.matchMedia('(min-width:768px)').matches;
        if (!Init.breakpoint) {
            html.classList.add("is-mobile")
            html.classList.remove("is-desktop")

        } else {
            html.classList.add("is-desktop")
            html.classList.remove("is-mobile")
            $(".header-burger").removeClass("is-open");
            $(".header-burger").prev(".menu-wrap").removeClass("is-open");
            $(".header-burger").closest("header .container").removeClass("show-menu");

        }
    },
    // getBrowserSize: function () {
    //     this.bodyHeight = Math.max(
    //         document.body.scrollHeight,
    //         document.body.offsetHeight,
    //         document.documentElement.clientHeight,
    //         document.documentElement.scrollHeight,
    //         document.documentElement.offsetHeight
    //     );
    //     this.bodyWidth = Math.max(
    //         document.body.scrollWidth,
    //         document.body.offsetWidth,
    //         document.documentElement.clientWidth,
    //         document.documentElement.scrollWidth,
    //         document.documentElement.offsetWidth
    //     );
    // },
};
Init.defaults();


// 모바일 웹브라우저 스크롤 이슈
// js
function setScreenSize() {
    //먼저 뷰포트 높이를 얻고 1%를 곱하여 vh 단위 값을 얻는다.
	let vh = window.innerHeight * 0.01;
    //그런다음 --vh 사용자 정의 속성의 값을 문서의 루트로 설정!
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', setScreenSize);



/***
    HEADER
 */
var Header = {
    init : function () {
		this.gnb();
    },
    gnb : function (e) {
        $(".header-burger").on("click", function (e) {
            e.preventDefault();
            if($(html).hasClass("is-mobile")){
                $(this).toggleClass("is-open");
                if($(this).hasClass("is-open")){
                    $(this).prev(".menu-wrap").addClass("is-open");
                    $(html).css({overflow : "hidden"});
                }else{
                    $(this).prev(".menu-wrap").removeClass("is-open");
                    $(html).css({overflow : "visible"});
                }
            }
        });
        $(".header-burger").on("focus", function (e) {
            e.preventDefault();
            if($(html).hasClass("is-desktop")){
                $(this).removeClass("is-open");
                $(this).prev(".menu-wrap").removeClass("is-open");
            }
        });
    }
}
Header.init();


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
    width: 15 + 'vw',
    // onComplete: moveHeader,
    // onReverseComplete : asdf,
});
var scene = new ScrollMagic.Scene({
        triggerElement: "#headerTrigger",
        triggerHook: 0.5,
        duration: 300,
    })
    .setTween(headerMainLogo)
    .addTo(controller)
    .addIndicators({
        name: "HEADER-mianlogo",
    })
    .on('enter', function () {
        // setTimeout(hideHeader, 700);
        headerBlock.classList.remove("is-scrolled");
        console.log('test');
    })
    .on('leave', function () {
        setTimeout(showHeader, 700);
        // headerBlock.classList.add("is-scrolled");
        console.log('asdf');
    })

function hideHeader() {
    console.log('test');
    headerBlock.classList.remove("is-scrolled");
}

function showHeader() {
    console.log('test');
    headerBlock.classList.add("is-scrolled");
}


// var headerfixedLogo = TweenMax.to('#header-block', 2, {
//     ease: Power0.easeOut,
//     y: -80,
// });
// var scene3 = new ScrollMagic.Scene({
//     triggerElement: "#headerfixedTrigger",
//     // duration: 50,
// })
// .setTween(headerfixedLogo)
// .addTo(controller)
// .addIndicators({
//     name: "HEADER-fixed",
// })
// // .on('enter', function () {
// //     headerBlock.classList.add("is-scrolled");
// //     console.log('test');
// // })
// .on('leave', function () {
//     console.log('asdf');
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
        offset: 50,
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
        logo.style.minWidth = 110 + "px";
        // logo.style.width = 10 + "vh";
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
        // logo.style.minWidth = 200 + "px";
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




// 768이하일 때 메뉴 
// $(".header-burger").on("click", function(){
//     $(this).toggleClass("is-open");
//     if($(this).hasClass("is-open")){
//         $(this).prev(".menu").addClass("is-open");
//         $(this).parent(".menu-wrap").addClass("is-open");
//     }else{
//         $(this).prev(".menu").removeClass("is-open");
//         $(this).parent(".menu-wrap").removeClass("is-open");
//     }
// });


// $(".header-burger").on("click", function(){
//     $(this).toggleClass("is-open");
//     if($(this).hasClass("is-open")){
//         $(this).prev(".menu").addClass("is-open");
//         $(this).parent(".menu-wrap").addClass("is-open");
//     }else{
//         $(this).prev(".menu").removeClass("is-open");
//         $(this).parent(".menu-wrap").removeClass("is-open");
//     }
// });



// $(".header-burger").on("click", function(){
//     $(this).toggleClass("is-open");
//     if($(this).hasClass("is-open")){
//         $("html").addClass("is-mobile");
//         // $(this).prev(".menu-wrap").addClass("is-open");
//     }else{
//         $("html").removeClass("is-mobile");
//         // $(this).prev(".menu-wrap").removeClass("is-open");
//     }
// });


// 윈도우 리사이즈
// var media = window.matchMedia("(min-width:767px)")
// if(media.matches){
//     $("html").removeClass("is-mobile");
//     $("html").addClass("is-desktop");
// }else{
//     $("html").removeClass("is-desktop");
//     $("html").addClass("is-mobile");
// }
