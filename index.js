window.onload = start;
function start() {
  addHeroListener();
  addCTAListener();
}

// add listener to support mobile gradient and background transition
function addHeroListener() {
  var hero = document.getElementsByClassName("hero")[0];
  hero.addEventListener("touchstart", function() {
    // console.log(hero);
    var newGradient =
      "background: linear-gradient(180deg, \
      rgba(255, 0, 0, 0.2) 0%, \
      rgba(255, 255, 255, 0.7) 50% \
      ), \
      url('assets/hero-img.jpg'); \
      background-repeat: no-repeat; \
      background-size: cover; \
      background-position: 70% 0%;";
    hero.style.cssText = newGradient;
    }
    , false);
  
  hero.addEventListener("touchend", function() {
    var oldGradient = 
      "background: linear-gradient(\
        180deg,\
        rgba(255, 255, 255, 0.7) 30%,\
        rgba(0, 0, 0, 1) 95%\
      ),\
      url('assets/hero-img.jpg');\
      background-repeat: no-repeat;\
      background-size: cover;\
      background-position: 70% 0%;"
    hero.style.cssText = oldGradient;
  })
};

function addCTAListener() {
  var cta = document.getElementsByClassName("hero__cta")[0];
  cta.addEventListener("touchstart", function() {
    var newBackground = 
    "background-color: rgba(255, 0, 0, 0.5);"
    cta.style.cssText = newBackground;
  })

  cta.addEventListener("touchend", function() {
    var oldBackground = 
      "background-color: #ff0000;";
    cta.style.cssText = oldBackground;
  } ,false);
}

// fallback to support old browser in hero background
var img = document.createElement("img");
img.onerror = function() {
  var style = document.createElement('style');
  style.innerHTML = ".hero {\
    background: linear-gradient(\
      180deg,\
      rgba(255, 255, 255, 0.7) 30%,\
      rgba(0, 0, 0, 1) 95%\
    ),\
    url('https://drive.google.com/uc?export=view&id=1lmSOUWg5NHAjYHeU-sjV6W768ugYxkwi');\
    background-repeat: no-repeat;\
    background-size: cover;\
    background-position: 70% 0%;"
  document.head.appendChild(style);
} 
img.src = "https://drive.google.com/uc?export=view&id=1a7tFjdf_kbN3itpSfzp3Khz6uUBLdDSY";

