const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

$(document).ready(function () {
  //onclick show menu
  $("nav").hide();
  $(".nav-btn").on("click", function () {
    $("nav").slideToggle();
  });
});

// contact circle rotation
rotationExample = TweenMax.to($(".hero-cta"), 15, {
  css: { rotation: 360 },
  // remove default easing for seamless loop
  ease: Linear.easeNone,
  repeat: -1,
  paused: false,
});
rotationExample = TweenMax.to($(".design-tag"), 15, {
  css: { rotation: 360 },
  // remove default easing for seamless loop
  ease: Linear.easeNone,
  repeat: -1,
  paused: false,
});
