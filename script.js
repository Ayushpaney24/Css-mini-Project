gsap.to(".itam", {
  y: 5,
  // duration:5,
  scale: 2,
  repeat: 2,
  yoyo: true /*up and down aage piche aage piche */,
  // backgroundColor:"pink",
  delay: 1,
}),
  gsap.from(".modal", {
    delay: 0,
    x: 20,
    // rotate:360,
    //  backgroundColor:"brown",
    y: 100,
    duration: 1,
    // scale:0.5,
  });
gsap.from(".png", {
  delay: 0,
  x: 20,
  // rotate:360,
  //  backgroundColor:"brown",
  y: 100,
  duration: 1,

  // scale:0.5,
});
gsap.from("p", {
  delay: 0,
  x: 20,
  // rotate:360,
  //  backgroundColor:"brown",
  y: 10,
  duration: 1,

  // scale:0.5,
});
gsap.from("input", {
  delay: 0,
  y: 80,
  // rotate:360,
  //  backgroundColor:"brown",
  x: 10,
  duration: 1,

  // scale:0.5,
});
gsap.from(".content", {
  delay: 0,
  x: 200,
  // rotate:360,
  //  backgroundColor:"brown",
  y: 100,
  duration: 1,

  // scale:0.5,
});
gsap.from("nav", {
  delay: 1,
  y: -20,
// top:20,
  // rotate:360,
  //  backgroundColor:"brown",
  x: 10,
  duration: 0.5,

  // scale:0.5,
});









window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".back-to-top").style.display = "block";
    } else {
        document.querySelector(".back-to-top").style.display = "none";
    }
}

document.querySelector(".back-to-top").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});