//nav manu Event(밑줄)

let menuBar = document.getElementById("menu-underline");
let menuMenus = document.querySelectorAll("nav:first-child a");

function menuIndicator(e) {
  menuBar.style.left = e.offsetLeft + "px";
  menuBar.style.width = e.offsetWidth + "px";
  menuBar.style.top = e.offsetTop + e.offsetHeight + "px";
}

menuMenus.forEach((menu) => menu.addEventListener("click", (e) => menuIndicator(e.currentTarget)));

/* slide text  scroll 효과 이벤트 */
let mainText = document.querySelector("h1");

window.addEventListener("scroll", function () {
  let value = this.window.scrollY;
  /*scroll 250px만큼 내렸을때 텍스트 slide 사라짐 */
  if (value > 150) {
    mainText.style.animation = "disappear 1s ease-out forwards"; //forwards 원래대로 되돌리기.
  } else {
    mainText.style.animation = "slide 0.5s ease-out"; /*다시나타나게 원상복구*/
  }
});

/*scroll에 대한 Top 버튼 제어*/

$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    //$("#top_btn").show();
    $("#top_btn").fadeIn();
  } else {
    //$("#top_btn").hide();
    $("#top_btn").fadeOut();
  }
});

// 휠 이벤트로 섹션 하나씩 이동하는 자바스크립트 제이쿼리 실행

window.onload = function () {
  var elm = "section";
  $(elm).each(function (index) {
    // 개별적으로 Wheel 이벤트 적용
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      var delta = 0;
      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;
      var moveTop = $(window).scrollTop();
      var elmSelecter = $(elm).eq(index);
      // 마우스휠을 위에서 아래로
      if (delta < 0) {
        if ($(elmSelecter).next() != undefined) {
          try {
            moveTop = $(elmSelecter).next().offset().top;
          } catch (e) {}
        }
        // 마우스휠을 아래에서 위로
      } else {
        if ($(elmSelecter).prev() != undefined) {
          try {
            moveTop = $(elmSelecter).prev().offset().top;
          } catch (e) {}
        }
      }

      // 화면 이동
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: moveTop + "px",
          },
          {
            duration: 600,
            complete: function () {},
          }
        );
    });
  });
};

// 헤더 메뉴업
// window.addEventListener("scroll", function () {
//   var navgation = this.document.querySelector("nav");
//   navgation.classList.toggle("upup", window.scrollY > 0);
// });
