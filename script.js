window.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("fade-in");
});
window.addEventListener("scroll", function() {
  var elements = document.querySelectorAll('.zoom-in');

  elements.forEach(function(el) {
    var top = el.getBoundingClientRect().top;
    var triggerPoint = window.innerHeight - 100;

    if (top < triggerPoint && !el.classList.contains('animate')) {
      el.classList.add('animate');
    }
  });
});
gsap.registerPlugin(ScrollTrigger);

gsap.from("#yapi-logo", {
  drawSVG: "0%",
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#yapi-logo",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

window.addEventListener("scroll", function () {
  const title = document.getElementById("hero-title");
  const scrollY = window.scrollY;

  const scale = Math.max(1 - scrollY / 600, 0.6); // minimum %60 boyut

  // Yazıyı küçült
  title.style.transform = "scale(" + scale + ")";
});

 gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.feature').forEach(function(el) {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  gsap.from(".logo", {
    y: -50,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });







