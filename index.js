const title = document.querySelector("h1");
const letters = [...document.querySelectorAll("h1 span")];
let mother = true;

// title.addEventListener("mouseenter", handleLetters);
// title.addEventListener("mouseleave", handleLetters);

let isAnimatingIn = false;
let calledOut = false;
let animOpened = false;

function handleLetters() {
  if (animOpened) {
    animOut();
    animOpened = false;
    return;
  }

  if (isAnimatingIn) {
    calledOut = true;
    return;
  }

  isAnimatingIn = true;

  const animPromise = new Promise((resolve) => {
    animIn();
    setTimeout(() => {
      resolve();
    }, 750);
  });
  animPromise.then(() => {
    isAnimatingIn = false;

    if (calledOut) {
      animOut();
      calledOut = false;
    } else if (!calledOut) {
      animOpened = true;
    }
  });
}

function animIn() {
  lineUp.style.transform = "rotate(180deg)";
  lineDown.style.transform = "rotate(-180deg)";
  anime({
    targets: "h1 span",
    translateX: function () {
      return anime.random(-25, 25);
    },
    translateY: function () {
      return anime.random(-25, 25);
    },
    translateZ: function () {
      return anime.random(-2000, 750);
    },
    rotate: function () {
      return anime.random(-250, 250);
    },
    easing: "easeOutCirc",
    duration: 750,
  });
}

function animOut() {
  lineUp.style.transform = "rotate(0)";
  lineDown.style.transform = "rotate(0)";
  anime({
    targets: "h1 span",
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    rotate: 0,
    easing: "easeInQuad",
    duration: 750,
  });
}

document.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY > 0) {
    handleLetters();
  }

  if (window.scrollY > 300) {
    born.style.left = window.scrollY - 300 + "px";
    lieu.style.right = window.scrollY - 300 + "px";
  }
  if (window.scrollY > 700) {
    born.style.left = "400px";
    lieu.style.right = "400px";
  }
  if (window.scrollY > 800) {
    born.style.left = 1200 - window.scrollY + "px";
    born.style.opacity = (1200 - window.scrollY) / 400;
    lieu.style.right = 1200 - window.scrollY + "px";
    lieu.style.opacity = (1200 - window.scrollY) / 400;
  }
  if (window.scrollY >= 850) {
    circle.style.height = window.scrollY / 2 - 545 + "px";
    circle.style.width = window.scrollY / 2 - 545 + "px";
    circle.style.opacity = 1;
    circle.style.top = 80 + window.scrollY + "px";
  } else {
    circle.style.opacity = 0;
    circle.style.height = 0;
    circle.style.width = 0;
  }

  if (window.scrollY > 1000) {
    bodi.style.background =
      "linear-gradient(204deg, rgba(0,0,0,1) 15%, rgba(37,181,255,1) 25%)";
  }
  if (window.scrollY > 1300) {
    circle.style.top = "3px";
    circle.style.position = "fixed";
    circle.style.height = "155px";
    circle.style.width = "155px";
  } else {
    circle.style.height = window.scrollY / 2 - 545 + "px";
    circle.style.width = window.scrollY / 2 - 545 + "px";
    circle.style.top = 80 + window.scrollY + "px";
    circle.style.position = "absolute";
  }

  if (window.scrollY >= 1710) {
    parents.style.position = "fixed";
    parents.style.top = "300px";
  } else {
    parents.style.position = "absolute";
    parents.style.top = "1980px";
  }

  if (window.scrollY > 2500) {
    mother = false;
    tatiana.style.position = "fixed";
    tatiana.style.top = "0";
    tatiana.style.width = "120vw";
   
  } else {
    tatiana.style.left = "-15%";
    tatiana.style.width = "28px";

  }
  //   if (window.scrollY > 700){
  //   born.style.left = "400px";
  // }
});

anime({
  targets: "#parents path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 6000,
  delay: function (el, i) {
    return i * 10;
  },
  direction: "alternate",
  loop: true,
});
