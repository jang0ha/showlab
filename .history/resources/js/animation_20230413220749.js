$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var winWidth = $(window).innerWidth();
        var body = $("body");
        var horizonScrolloffsetTop = $(".section__horizontal-scroll-area").offset().top;
        var horizeonSectionHeight = $(".section__horizontal-scroll-area").outerHeight()
        // console.log(winWidth);
        // console.log(scrollTop);
        // console.log(horizonScrolloffsetTop);
        // console.log(horizeonSectionHeight);

        if (scrollTop > 350) {
            $("#header-block").addClass("is-scrolled");
        } else {
            $("#header-block").removeClass("is-scrolled");
            // $(".section__video").css({"margin-top" : "48vmin"});
        }


    });
});
const headerBlock = document.getElementById("header-block");

/////////////////////////////////////////////
// init controller
var controller = new ScrollMagic.Controller();
//////////////////////////////////////////////



//메인 로고 
////////////////////////////////////////////////////
var headerMainLogo = TweenMax.to('.main-logo', 2, {
    ease: Power0.easeOut,
    y: -80,
    // autoAlpha: 0.3,
    // scale: innerWidth * 0.001,
    // scale: 1,
    width: 9 + 'vw',
    // onComplete: moveHeader,
    // onReverseComplete : asdf,
});
var headerMainLogo_scene = new ScrollMagic.Scene({
        triggerElement: "#headerTrigger",
        triggerHook: 0.6,
        duration: 300,
    })
    .setTween(headerMainLogo)
    .addTo(controller)
    // .addIndicators({
    //     name: "HEADER-mianlogo",
    // })

// //서브 로고 
////////////////////////////////////////////////////

var headerSubLogo = TweenMax.to('.sub-logo', 2, {
    ease: Power0.easeOut,
    y: -80,
});
var headerSubLogo_scene = new ScrollMagic.Scene({
        triggerElement: "#headerTrigger",
        duration: 200,
        offset: 50,
    })
    .setTween(headerSubLogo)
    .addTo(controller)
    // .addIndicators({
    //     name: "HEADER-sublog",
    // })
var logo = document.getElementsByClassName("main-logo")[0];
var video = document.getElementsByTagName("video")[0];
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





// section__cases 텍스트 애니메이션
// const splitText = (selector) => {
//     const elem = document.querySelector(selector);
//     const text = elem.innerText;
//     const chars = text.split("");
//     const charsContainer = document.createElement("div");
//     const charsArray = [];

//     charsContainer.style.position = "relative";
//     charsContainer.style.display = "inline-block";

//     chars.forEach((char) => {
//       const charContainer = document.createElement("div");

//       charContainer.style.position = "relative";
//       charContainer.style.display = "inline-block";
//       charContainer.innerText = char;
//       charsContainer.appendChild(charContainer);

//       charsArray.push(charContainer);
//     });
//     // remove current text
//     elem.innerHTML = "";
//     // append new structure
//     elem.appendChild(charsContainer);

//     return charsArray;
//   };

//   const animate = function (text) {
//     // const chars = splitText(".quote");
//     const chars = $(".quote");
//     return gsap.from(chars, {
//       duration: 0.1,
//       y: 100,
//       opacity: 0,
//       stagger: 0.1,//여러개의 개체가 같은 모션을 순차적으로 실행 시킬때 사용
//       delay: 1, // 지연시간
//     });
//   };

//   animate(".quote");

// 메인 텍스트 애니메이션
let text_tl = gsap.timeline({
    delay: 0.3
});
text_tl.to('.quote', {
    duration: 0.5,
    y: 0,
    stagger: 0.3,
    opacity: 1,
});

var text_tl_scene = new ScrollMagic.Scene({
        triggerElement: "#textTrigger",
        duration: 0,
        // offset: 50,
    })
    .setTween(text_tl)
    .addTo(controller)
    // .addIndicators({
    //     name: "TEXT-trigger",
    // })


// 가로스크롤 원본 시작
//section__vertical-scroll-area 가로 스크롤
var controller = new ScrollMagic.Controller();

// $(function () {
//     //var tween = TweenMax.to(".block-list", 1, {className: "+=scrollend"});

//     var $block_list = $('.block-list'),
//         $block_item = $block_list.find('.block-list__item'),

//         block_list_width = $block_list.outerWidth(),
//         block_item_width = $block_item.outerWidth(),
//         total_width = block_item_width * $block_item.length,
//         travel_distance = total_width - block_list_width + 400;



//     // console.log($bubble_wrap.outerHeight);

//     var horizonScroll = new ScrollMagic.Scene({
//             triggerElement: "#second",
//             duration: '200%',
//             triggerHook: 0
//         })
//         // .setClassToggle(".bubbles-group", "fixed") // 요소(".bubbles-group")이 트리거에 걸리면 css(fixed) 추가
//         .setPin('.block-list')
//         //.setTween(tween)
//         .addTo(controller);

//     horizonScroll.on('progress', function (e) {
//         var progress = e.progress,
//             move = -travel_distance * progress + "px",
//             moveRight = travel_distance * progress + "px";
//         // console.log(progress);
//         $block_list.css({
//             transform: "translateX(" + move + ")"
//         });
//         // $bubble_wrap.css({
//         //     transform: "translateX(" + moveRight + ")"
//         // });
//         $(".bubbles-group").attr('style', 'transform: translateX(' + moveRight + ')!important');
//     });


//     // $(window).scroll(function () {
//     //     var scrollTop = $(this).scrollTop();
//     //     var winWidth = $(window).innerWidth();
//     //     var body = $("body");
//     //     var horizonScrolloffsetTop = $(".section__horizontal-scroll-area").offset().top;
//     //     var horizeonSectionHeight = $(".section__horizontal-scroll-area").outerHeight()
//     //     // console.log(winWidth);
//     //     // console.log(scrollTop);

//     //     var scrollHetight = horizonScrolloffsetTop + travel_distance
//     //     // 가로 스크롤 시 스타일 변경 
//     //     if (scrollTop < horizonScrolloffsetTop){
//     //         $(".bubbles-group").css({position: "absolute"});
//     //     } else if(scrollTop > scrollHetight + horizeonSectionHeight - 400 ){
//     //         $(".bubbles-group").css({position: "absolute"});
//     //     } else {
//     //         $(".bubbles-group").css({position: "fixed"});
//     //         $(",")
//     //     }
//     // });
// });

// 가로스크롤 원본 끝





//section__vertical-scroll-area 버블버블 동동떠다니게
// $('.bubble').each((i, obj) => {
//     let ANIMATION_TIME = getRandomNumber(7, 15),// 최소값, 최대값의 오차범위가 작을수록 빨라짐
//         maxAnimation = getRandomNumber(15, 30), // 최대값
//         minAnimation = getRandomNumber(7, 100); // 최소값

//     TweenMax.to(obj, ANIMATION_TIME, {
//         // tweenMax.to => this속성에서 지정한 속성까지 <대상타겟, 지속시간>
//         //this=obj를 ANIMATION_TIME 동안 tween함.

//         //bezier => 곡선의 움직임 좌표값을지정 해줘야함 ex )) 가 세 높.
//         bezier: [{
//             x: minAnimation,
//             y: minAnimation
//         },
//         {
//             x: 0,
//             y: maxAnimation
//         },
//         {
//             x: -minAnimation,
//             y: minAnimation
//         },
//         {
//             x: 0,
//             y: 0
//         }],
//         repeat: 100,// 반복
//         type:"soft",//부드럽게 이동 기본값은 "thru"
//         ease: Linear.easeNone
//     });
// });



// $(".bubble").each((i, obj) => {
//     let ANIMATION_TIME = getRandomNumber(7, 15),// 최소값, 최대값의 오차범위가 작을수록 빨라짐
//         maxAnimation = getRandomNumber(15, 30), // 최대값
//         minAnimation = getRandomNumber(7, 100); // 최소값

//         $(".bubble").eq(i).animate({top:"+=" + minAnimation}, 1000);
//         $(".bubble").eq(i).animate({left:"+=" + maxAnimation}, 1000);
// });



// //주어진 두 값 사이의 난수(무작위의 수)를 생성한다.  min보다 크거나 같으며 , max보다 작다.
function getRandomNumber(min, max) {

    //Math.floor 정수!!
    return Math.floor(Math.random() * (max - min + 1)) + min; //최소~최대 랜덤 숫자 가져오기
}


// 1번 방법 텍스트 사선 일직선은 되나 로테이션? 굴곡있는것은 안됨!!
// $(document).ready(function () {
//     gsap.registerPlugin(MotionPathPlugin);
//     gsap.registerPlugin(ScrollTrigger);
//     const textPath =  document.getElementById("Path").getAttribute("d");
//     const motionPath = {
//         curviness: 1,
//         //   autoRotate: true,
//         type: "cubic",// bezier그리려면 넣어줘야함.
//         // 아래 직선용
//         // path: [
//         //     // {
//         //         //     x: -window.innerWidth,
//         //         //     y: 0
//         //         // },
//         //         // { x: 300, y: 10 },
//         //         // { x: -1900, y: 0 },
//         //         // { x: 750, y: -100 },
//         //         // { x: 350, y: -50 },
//         //         // { x: 600, y: 100},
//         //         // { x: 800, y: 0},
//         //         // { x: -100, y: 20 },
//         //         { x: -window.innerWidth*1.2, y: -150},
//         // ],

//         // 곡선용
//         path: textPath,
//     };

//     console.log(textPath);
//     const tween = new gsap.timeline();
//     tween.to(".liner-text-container", {
//         duration: 4,
//         ease: "power1.inOut",
//         motionPath,
//         scale: 1,
//         scrollTrigger: {
//             trigger: "#rotate_text_scene",
//             start: "top top",
//             // end: "+=" + window.innerHeight,
//             // end: "bottom 10%",
//             end: "top -100%",
//             markers: true,

//             scrub: 2,
//             pin: true,
//         },
//     });
// });
// 1번방법 끝

// 2번 방법
// document.getElementById("MyPath").setAttribute("d", document.getElementById("Path").getAttribute("d"));
// var svg_tl = new TimelineMax({
//     repeat: -1,
//     delay: 1
// });
// svg_tl.to("#Text", 3, {
//     attr: {
//         startOffset: '50%',
//         opacity: 1
//     }
// });
// var svgScroll = new ScrollMagic.Scene({
//     triggerElement: ".animation",
//     duration: '100%',
//     triggerHook: 0
// })
// // .setClassToggle(".bubbles-group", "fixed") // 요소(".bubbles-group")이 트리거에 걸리면 css(fixed) 추가
// .setPin('.animation')
// .setTween(svg_tl)
// .addTo(controller)
// .addIndicators({
//     name: "svg-trigger",
// })
// 2번 방법 끝





function rotateText() {

}
const friction = 10



// 3번 방법
// var rotate_text = TweenMax.to('.Circle', 2, {
//     ease: Power0.easeOut,
//     rotate:-80,
// });

// var rotate_text_scene = new ScrollMagic.Scene({
//     triggerElement: "#rotate_text_scene",
//     triggerHook: 0,
//     duration:150 + "%",
//     // offset: 50,
// })
// .setPin('#rotate_text_scene')
// .setTween(rotate_text)
// .addTo(controller)
// .addIndicators({
//     name: "ROTATE-TEXT-trigger",
// })
// 3번 방법 끝




// // 4번방법 
// function reCentre() {
//   var svg = document.getElementById("mysvg");
//   var group = document.getElementById("centreMe");

//   // Get the bounding box of the image+text group
//   var groupBounds = group.getBBox();

//   // Get the size of the SVG on the page
//   var svgBounds = svg.getBoundingClientRect();

//   // Calculate new position for the group
//   var groupPosX = (svgBounds.width - groupBounds.width) / 2;
//   var groupPosY = (svgBounds.height - groupBounds.height) / 2;

//   // Calculate the difference between the groups current position
//   // and where it needs to be in order to be centred.
//   var dx = groupPosX - groupBounds.x;
//   var dy = groupPosY - groupBounds.y;

//   // Give the group a translate transform to move it to this new position
//   group.setAttribute("transform", "translate("+dx+","+dy+")");
// }


// // Initial centering
// reCentre();

// // Also recentre when window resizes
// window.addEventListener("resize", reCentre);
// // 4번방법 끝


// var headerMainLogo_scene = new ScrollMagic.Scene({
//     triggerElement: "#headerTrigger",
//     triggerHook: 0.6,
//     duration: 300,
// })
// .setTween(headerMainLogo)
// .addTo(controller)
// .addIndicators({
//     name: "HEADER-mianlogo",
// })


// 5번방법
// 3번 방법
// var rotate_text = TweenMax.to('.Circle', 2, {
//     ease: Power0.easeOut,
//     rotate:-80,
// });

// var rotate_text_scene = new ScrollMagic.Scene({
//     triggerElement: "#rotate_text_scene",
//     triggerHook: 0,
//     duration:150 + "%",
//     // offset: 50,
// })
// .setPin('#rotate_text_scene')
// .setTween(rotate_text)
// .addTo(controller)
// .addIndicators({
//     name: "ROTATE-TEXT-trigger",
// })
// 3번 방법 끝

// 5번방법 끝







// window.addEventListener('scroll', function() {
//   tl.to("#Text", 3, {
//     attr: {
//       startOffset: '100%',
//       opacity: 0
//     }
//   });
// }, true);

// svgScroll.on('progress', function (e) {
//     var progress = e.progress,
//         move = -travel_distance * progress + "px";
//     $block_list.css({
//         transform: "translateX(" + move + ")"
//     });

// });



//참고 사이트 https://recoveryman.tistory.com/466
//참고 사이트 https://recoveryman.tistory.com/466


//register the plugin (just once)
// gsap.registerPlugin(MotionPathPlugin);
// gsap.registerPlugin(ScrollTrigger);


// gsap.to("#move", {
//   duration: 5, 
//   repeat: 12,
//   repeatDelay: 3,
//   yoyo: true,
//   ease: "power1.inOut",
//   motionPath:{
//     path: "#path",
//     align: "#path",
//     autoRotate: true,
//     alignOrigin: [0.5, 0.5]
//   }
// });

// const motionPath = {
//   curviness: 1,
//   autoRotate: true,
//   path: [
//     { x: 100, y: -20 },
//     { x: 300, y: 10 },
//     { x: 500, y: 100 },
//     { x: 750, y: -100 },
//     { x: 350, y: -50 },
//     { x: 600, y: 100},
//     { x: 800, y: 0},
//     { x: window.innerWidth, y: -150}
//   ],
// };

// const tween = new gsap.timeline();
// tween.to(".paper-plane", {
//   duration: 4,
//   ease: "power1.inOut",
//   motionPath,
//   scrollTrigger: {
//     trigger: ".animation",
//     start: "top top",
//     // end: "+=" + window.innerHeight,
//     end: "bottom 10%",
//     markers: true,
//     scrub: 2,
//     pin: true,
//   },
// });

//register the plugin (just once)





// // The start and end positions in terms of the page scroll
// const offsetFromTop = innerHeight * 0.25;
// const pathBB = document.querySelector("#path").getBoundingClientRect();
// const startY = pathBB.top - innerHeight + offsetFromTop;
// const finishDistance = startY + pathBB.height - offsetFromTop;

// // the animation to use
// var tween = gsap.to("#rec", {
// //   duration: 5, 
//   paused: true,
//   ease: "none",
//   motionPath: {
//     path: "#path",
//     align: "#path",
//     autoRotate: true,
//     alignOrigin: [0.5, 0.5]
//   }    
// }).pause(0.001);

// // Listen to the scroll event
// document.addEventListener("scroll", function() {
//   // Prevent the update from happening too often (throttle the scroll event)
//   if (!requestId) {
//     requestId = requestAnimationFrame(update);
//   }
// });

// update();

// function update() {
//   // Update our animation
//   tween.progress((scrollY - startY) / finishDistance);

//   // Let the scroll event fire again
//   requestId = null;
// }


// var action,
//     cuca01 = document.querySelector('#cuca01'),
//     legsLeft = document.querySelectorAll('.legsL'),
//     legsRight = document.querySelectorAll('.legsR'),
//     ww = window.innerWidth,
//     wh = window.innerHeight,
//     path01 = [{
//         x: ww * 0.5,
//         y: wh * 0.5
//     }, {
//         x: ww + 100,
//         y: wh * -0.3
//     }],
//     path02 = [{
//         x: ww * 0.8,
//         y: wh * 0.2
//     }, {
//         x: ww + 100,
//         y: wh * 0.5
//     }];

// gsap.set('svg', {
//     xPercent: -50,
//     yPercent: -50,
//     rotation: 90,
//     transformOrigin: 'center'
// });

// var action = gsap.timeline({
//         paused: true
//     })
//     .set(cuca01, {
//         x: -100,
//         y: -50,
//         autoAlpha: 1
//     })
//     .to(cuca01, {
//         motionPath: {
//             path: path01,
//             curviness: 1.5,
//             alignOrigin: [0.5, 0.5],
//             autoRotate: 90,
//             start: 0.1
//         },
//         duration: 1
//     })
//     // .to(legsLeft, {
//     //     rotation: 40,
//     //     transformOrigin: '50% 10px',
//     //     duration: 0.02,
//     //     stagger: 0.01,
//     //     repeat: 20,
//     //     yoyo: true
//     // }, 0.1)
//     // .to(legsRight, {
//     //     rotation: -40,
//     //     transformOrigin: '30% 10px',
//     //     duration: 0.02,
//     //     stagger: 0.01,
//     //     repeat: 20,
//     //     yoyo: true
//     // }, 0.15)



// const startY = 200;
// const finishDistance = innerHeight * 1.5;

// // var contact = new ScrollMagic.Scene({
// //     triggerElemet: "#motion",
// //     triggerHook: 0,
// //     duration: "300px"
// // })
// //   .setTween(action)
// //   .setClassToggle("motion", "fixed") // 요소(".bubbles-group")이 트리거에 걸리면 css(fixed) 추가
// //   .setPin('#motion')
// //   //.setTween(tween)
// //   .addTo(controller)
// //   .addIndicators({
// //     name: "contact",
// // })
// document.addEventListener("scroll", function () {
//     if (!requestId) {
//         requestId = requestAnimationFrame(update);
//     }
// });

// update();

// function update() {
//     action.progress((scrollY - startY) / finishDistance);
//     requestId = null;
// }


installMediaQueryWatcher("(max-width: 768px)", function (matches) {
    // ~768 까지(모바일)
    if (matches) {
        logo.style.minWidth = 110 + "px";
        headerMainLogo_scene.addTo(controller);
        headerSubLogo_scene.addTo(controller);


        // 라이너 텍스트 애니메이션
        var linerText_width = $(".liner-text-container").outerWidth();
        console.log(linerText_width);
        var liner_text = TweenMax.to(".liner-text-container", 3, {
            ease: Power0.easeOut,
            x: -linerText_width + 300,
        });

        var liner_text_scene = new ScrollMagic.Scene({
                triggerElement: "#rotate_text_scene",
                triggerHook: 0,
                duration: 100 + "%",
            })
            .setPin('#rotate_text_scene')
            .setTween(liner_text)
            .addTo(controller)
            // .addIndicators({
            //     name: "LINER-TEXT-trigger",
            // })
        // 라이너 텍스트 애니메이션 끝    





    } else {
        logo.style.minWidth = 110 + "px";
        headerMainLogo_scene.addTo(controller);
        headerSubLogo_scene.addTo(controller);

        //  5번방법
        // 3번 방법 로테이트 테스트 애니메이션
        var rotate_text = TweenMax.to('.Circle', 2, {
            ease: Power0.easeOut,
            rotate: -80,
        });

        var rotate_text_scene = new ScrollMagic.Scene({
                triggerElement: "#rotate_text_scene",
                triggerHook: 0,
                duration: 150 + "%",
                // offset: 50,
            })
            .setPin('#rotate_text_scene')
            .setTween(rotate_text)
            .addTo(controller)
            .addIndicators({
                name: "ROTATE-TEXT-trigger",
            })
        // 3번 방법 로테이트 테스트 애니메이션
        // 5번방법 끝


        // 가로 스크롤
        $(function () {
            //var tween = TweenMax.to(".block-list", 1, {className: "+=scrollend"});

            var $block_list = $('.block-list'),
                $block_item = $block_list.find('.block-list__item'),

                block_list_width = $block_list.outerWidth(),
                block_item_width = $block_item.outerWidth(),
                total_width = block_item_width * $block_item.length,
                travel_distance = total_width - block_list_width + 400;
            // console.log($bubble_wrap.outerHeight);

            var horizonScroll = new ScrollMagic.Scene({
                    triggerElement: "#second",
                    duration: '200%',
                    triggerHook: 0
                }) 
                // .setClassToggle(".bubbles-group", "fixed") // 요소(".bubbles-group")이 트리거에 걸리면 css(fixed) 추가
                .setPin('.block-list')
                //.setTween(tween)
                .addTo(controller);

            horizonScroll.on('progress', function (e) {
                var progress = e.progress,
                    move = -travel_distance * progress + "px",
                    moveRight = travel_distance * progress + "px";
                // console.log(progress);
                $block_list.css({
                    transform: "translateX(" + move + ")"
                });
                // $bubble_wrap.css({
                //     transform: "translateX(" + moveRight + ")"
                // });
                $(".bubbles-group").attr('style', 'transform: translateX(' + moveRight + ')!important');
            });
        });
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

// // var logo = document.getElementsByClassName("main-logo")[0];
// // // [0]
// window.onresize = function (event) {

//     var innerWidth = window.innerWidth;
//     // innerWidth <= "1280" ? logo.style.width = 75 + "vw" : logo.style.width = 10 + "vw";
//     if (innerWidth >= '768') {
//         logo.style.minWidth = 110 + "px";
//         // logo.style.width = 75 + "vw";
//         // logo.style.transform = "scale(1)";
//         return false;
//     } else {
//         // logo.style.minWidth = 200 + "px";
//     }
//     // }else{
//     //     logo.style.width = 20 + "vw"

//     // }

// }