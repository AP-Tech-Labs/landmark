$(function () {
  "use strict";
  gsap.registerPlugin(ScrollTrigger),
    gsap.to(".mil-progress", {
      height: "100%",
      ease: "sine",
      scrollTrigger: { scrub: 0.3 },
    });
  var e,
    i = new Date();
  i.setDate(i.getDate() + 99),
    (e = setInterval(function () {
      (function i(l) {
        var t = new Date(),
          a = l.getTime() - t.getTime();
        if (a <= 0) clearInterval(e);
        else {
          var r = Math.floor(a / 1e3),
            n = Math.floor(r / 60),
            o = Math.floor(n / 60),
            s = Math.floor(o / 24);
          (o %= 24),
            (n %= 60),
            (r %= 60),
            $("#days").text(s),
            $("#hours").text(o),
            $("#minutes").text(n),
            $("#seconds").text(r);
        }
      })(i);
    }, 1e3));
  let l = document.querySelectorAll(".mil-up");
  l.forEach((e) => {
    gsap.fromTo(
      e,
      { opacity: 0, y: 50, scale: 0.98, ease: "sine" },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: { trigger: e, toggleActions: "play none none reverse" },
      }
    );
  });
  let t = document.querySelectorAll(".mil-scale");
  t.forEach((e) => {
    var i = $(e).data("value-1"),
      l = $(e).data("value-2");
    gsap.fromTo(
      e,
      { ease: "sine", scale: i },
      {
        scale: l,
        scrollTrigger: {
          trigger: e,
          scrub: !0,
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  let a = document.querySelectorAll(".mil-parallax");
  a.forEach((e) => {
    var i = $(e).data("value-1"),
      l = $(e).data("value-2");
    gsap.fromTo(
      e,
      { ease: "sine", y: i },
      {
        y: l,
        scrollTrigger: {
          trigger: e,
          scrub: !0,
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  let r = document.querySelectorAll(".mil-skill-prog");
  r.forEach((e) => {
    var i = $(e).data("value-1"),
      l = $(e).data("value-2");
    gsap.fromTo(
      e,
      { width: i, ease: "sine" },
      {
        width: l,
        duration: 2,
        scrollTrigger: { trigger: e, toggleActions: "play none none reverse" },
      }
    );
  });
  let n = $(".mil-counter");
  n.each(function (e, i) {
    var l = $(this),
      t = { val: 0 },
      a = l.data("number"),
      r = (a + "").split("."),
      n = r.length > 1 ? r[1].length : 0;
    gsap.to(t, {
      val: a,
      duration: 2,
      scrollTrigger: { trigger: i, toggleActions: "play none none reverse" },
      onUpdate: function () {
        l.text(t.val.toFixed(n));
      },
    });
  }),
    new Swiper(".mil-infinite-show", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 4e3,
      autoplay: !0,
      autoplay: { delay: 0 },
      loop: !0,
      freeMode: !0,
      breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 4 } },
    }),
    new Swiper(".mil-banner-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      autoplay: { delay: 5e3 },
      effect: "fade",
      parallax: !0,
      loop: !0,
      navigation: { prevEl: ".mil-banner-prev", nextEl: ".mil-banner-next" },
      pagination: {
        el: ".mil-banner-pagination",
        type: "bullets",
        clickable: !0,
      },
    }),
    new Swiper(".mil-banner-slider-2", {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      autoplay: { delay: 5e3 },
      effect: "fade",
      parallax: !0,
      loop: !0,
      navigation: { prevEl: ".mil-banner-prev", nextEl: ".mil-banner-next" },
      pagination: {
        el: ".mil-banner-pagination",
        type: "bullets",
        clickable: !0,
      },
    }),
    new Swiper(".mil-process-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      parallax: !0,
      navigation: { prevEl: ".mil-process-prev", nextEl: ".mil-process-next" },
      pagination: {
        el: ".mil-banner-pagination",
        type: "bullets",
        clickable: !0,
      },
    }),
    new Swiper(".mil-reviews-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      effect: "fade",
      parallax: !0,
      navigation: { prevEl: ".mil-process-prev", nextEl: ".mil-process-next" },
      pagination: {
        el: ".mil-banner-pagination",
        type: "bullets",
        clickable: !0,
      },
    }),
    new Swiper(".mil-illustration-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      effect: "fade",
      parallax: !0,
      navigation: {
        prevEl: ".mil-illustration-prev",
        nextEl: ".mil-illustration-next",
      },
    });
  let o = gsap.utils.toArray(".mil-accordion-group"),
    s = gsap.utils.toArray(".mil-accordion-menu"),
    c = o.map(function e(i) {
      let l = i.querySelector(".mil-accordion-menu"),
        t = i.querySelector(".mil-accordion-menu h6"),
        a = i.querySelector(".mil-accordion-content"),
        r = i.querySelector(".mil-minus"),
        n = i.querySelector(".mil-plus");
      gsap.set(a, { height: "auto" });
      let o = gsap
        .timeline()
        .from(a, { height: 0, duration: 0.5, ease: "sine" })
        .from(r, { duration: 0.2, autoAlpha: 0, ease: "none" }, 0)
        .to(n, { duration: 0.2, autoAlpha: 0, ease: "none" }, 0)
        .from(t, { duration: 0.2, ease: "sine" }, 0)
        .to(t, { duration: 0.2, ease: "sine" }, 0)
        .reverse();
      return function (e) {
        e === l ? o.reversed(!o.reversed()) : o.reverse();
      };
    });
  s.forEach((e) => {
    e.addEventListener("click", () => {
      var i;
      return (i = e), void c.forEach((e) => e(i));
    });
  }),
    $(".mil-top-panel").length &&
      $(window).on("scroll", function () {
        $(this).scrollTop() > 10
          ? $(".mil-top-panel").addClass("mil-active")
          : $(".mil-top-panel").removeClass("mil-active");
      }),
    $(".mil-menu-btn").on("click", function () {
      $(this).toggleClass("mil-active"),
        $(".mil-navigation").toggleClass("mil-active");
    }),
    1200 > $(window).width() &&
      $(".mil-navigation ul li.mil-has-children > a").on("click", function () {
        return !1;
      }),
    $(".mil-filter a").on("click", function () {
      $(".mil-filter .mil-current").removeClass("mil-current"),
        $(this).addClass("mil-current");
      var e = $(this).data("filter");
      return (
        $(".mil-portfolio-grid").isotope({ filter: e }),
        ScrollTrigger.refresh(),
        !1
      );
    });
  var m = $(".mil-portfolio-grid").isotope({
      itemSelector: ".mil-grid-item",
      transitionDuration: "0.5s",
      masonry: { columnWidth: ".grid-sizer" },
    }),
    m = $(".mil-portfolio-grid");
  m.imagesLoaded(function () {
    m.isotope("layout"), ScrollTrigger.refresh();
  });
  var d = 4,
    u = m.data("isotope");
  function p(e) {
    m.find(".mil-hidden").removeClass("mil-hidden");
    var i = u.filteredItems.slice(e, u.filteredItems.length).map(function (e) {
      return e.element;
    });
    $(i).addClass("mil-hidden"),
      m.isotope("layout"),
      0 == i.length ? $("#load-more").hide() : $("#load-more").show();
  }
  void 0 !== u && p(4),
    m.after(
      '<div class="mil-load-more mil-up"><button id="load-more">Load More</button></div>'
    ),
    $("#load-more").on("click", function () {
      $("#filters").data("clicked") &&
        ((d = 4), j$("#filters").data("clicked", !1)),
        p((d += 4)),
        ScrollTrigger.refresh();
    }),
    $(".has-popup-video").magnificPopup({
      disableOn: 700,
      type: "iframe",
      iframe: {
        patterns: {
          youtube_short: {
            index: "youtu.be/",
            id: "youtu.be/",
            src: "https://www.youtube.com/embed/%id%?autoplay=1",
          },
        },
      },
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
      mainClass: "mfp-fade",
      callbacks: {
        markupParse: function (e, i, l) {
          e.find("iframe").attr("allow", "autoplay");
        },
      },
    });
  let f = gsap.utils.toArray(".mil-hover-item"),
    g = document.querySelector(".mil-img-wrapper"),
    v = document.querySelector(".mil-img-wrapper img");
  function y(e) {
    let i = e.clientX,
      l = e.clientY;
    (tl = gsap.timeline()).to(g, { duration: 0.3, x: i, y: l, ease: "sine" });
  }
  function h(e) {
    if ("mouseenter" === e.type) {
      let i = e.target.dataset.src;
      gsap
        .timeline()
        .set(v, { attr: { src: i } })
        .to(g, { autoAlpha: 1, scale: 1 });
    } else "mouseleave" === e.type && gsap.timeline().to(g, { autoAlpha: 0, scale: 0.3 });
  }
  window.addEventListener("load", function () {
    f.forEach((e) => {
      e.addEventListener("mouseenter", h),
        e.addEventListener("mouseleave", h),
        e.addEventListener("mousemove", y);
    });
  }),
    $(".cform").length &&
      $("#cform").validate({
        rules: {
          name: { required: !0 },
          tel: { required: !0 },
          email: { required: !0, email: !0 },
          budget: { required: !0 },
          message: { required: !0 },
        },
        success: "valid",
        submitHandler: function () {
          $.ajax({
            url: "mailer/feedback.php",
            type: "post",
            dataType: "json",
            data:
              "name=" +
              $("#cform").find('input[name="name"]').val() +
              "&email=" +
              $("#cform").find('input[name="email"]').val() +
              "&tel=" +
              $("#cform").find('input[name="tel"]').val() +
              "&budget=" +
              $("#cform").find('input[name="budget"]').val() +
              "&message=" +
              $("#cform").find('textarea[name="message"]').val(),
            beforeSend: function () {},
            complete: function () {},
            success: function (e) {
              $("#cform").fadeOut(), $(".alert-success").delay(1e3).fadeIn();
            },
          });
        },
      });
});
