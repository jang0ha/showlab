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
            // $(".header-burger").closest("header .container").removeClass("show-menu");

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
        this.event();
    },
    gnb : function (e) {
        $(".header-burger").on("click", function (e) {
            e.preventDefault();
            if($(html).hasClass("is-mobile")){
                $(this).toggleClass("is-open");
                if($(this).hasClass("is-open")){
                    $(this).prev(".menu-wrap").addClass("is-open");
                    // $(html).css({"overflow":"hidden"}, {"touch-action" : "none"}, {"-webkit-overflow-scrolling" : "none"});
                    // $(html).css({"overflow ": "hidden",  "touch-action" : "none", "-webkit-overflow-scrolling:" : "none"});
                    $(html).addClass("not-scroll");
                }else{
                    $(this).prev(".menu-wrap").removeClass("is-open");
                    // $(html).css({"overflow ": "auto",  "touch-action" : "auto", "-webkit-overflow-scrolling:" : "touch"});
                    $(html).removeClass("not-scroll");
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
    },

    event :function(){
        // $("html, body").mCustomScrollbar();
    },  
}
Header.init();



var innerWidth = window.innerWidth;
var logoWidth = $(".main-logo").outerWidth();
console.log(logoWidth);




