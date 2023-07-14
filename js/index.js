$(function() {
  $('.gnb > li').on('mouseover focusin', function() {
    $(this).children('ul').stop().slideDown(300);
  }).on('mouseleave foucusout', function() {
    $(this).children('ul').stop().slideUp(300);
  })
  $('.gnb_under').on('mouseover foucusin', function() {
    $('.bg_gnb').stop().slideDown(300);
  }).on('mouseleave foucusout', function() {
    $('.bg_gnb').stop().slideUp(300);
  })
  $('.gnb_last').on('mouseover foucusin', function() {
    $('.bg_last').stop().slideDown(300);
  }).on('mouseleave foucusout', function() {
    $('.bg_last').stop().slideUp(300);
  })
   /* ad area */
/*   $('.center > div').on('mouseover foucusin', function() {
    $(this).children('.ad_border').stop().slideDown(200);
  }).on('mouseleave foucusout', function() {
    $(this).children('.ad_border').stop().slideUp(200);
  }) */

  /* swiper */
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $('.multiple-items01').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  
  /* AD area */
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  let myMediaQuery = window.matchMedia('(min-width: 640px)');
function widthChangeCallback(myMediaQuery) {
  if(myMediaQuery.matches) {
    $('.multiple-items01').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
   } else {
     document.querySelector("p").textContent = "I am narrower than 599px now.";
   }
}
}); 

function showDetail() {
  document.getElementById("desc").style.display = "block";
  document.getElementById("open").style.display = "none";
  document.getElementById("close").style.display = "block";
}
function closeDetail() {
  document.getElementById("desc").style.display = "none";
  document.getElementById("open").style.display = "block";
}

function monuOpen() {
  document.getElementsByClassName("monu")[0].style.display = "block";
  document.getElementsByClassName("monu_open")[0].style.display = "none";
  document.getElementsByClassName("mo_serch")[0].style.display = "none";
  document.getElementsByClassName("monu_close")[0].style.display = "block";
}
function monuClose() {
  document.getElementsByClassName("monu")[0].style.display = "none";
  document.getElementsByClassName("monu_open")[0].style.display = "block";
}