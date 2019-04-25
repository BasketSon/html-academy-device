var overlay = document.querySelector('.overlay-picture');

function showOverlay() {
  overlay.classList.toggle('visually-hidden')
}


var dotsBox = document.querySelector('.promo-slider-controls')

dotsBox.addEventListener('mouseout', function () {
  dotsBox.style.outline = 0;
})

var catalogMenu = document.querySelector('.catalog-menu')
var catalogItems = catalogMenu.querySelectorAll('a')

var addFocusHandler = function (category) {
category.addEventListener ('focus', function() {
  catalogMenu.style.visibility = 'visible';
})
category.addEventListener ('blur', function() {
  catalogMenu.style.visibility = 'hidden';
})
}

for (var i = 0; i < catalogItems.length; i++) {
  addFocusHandler(catalogItems[i]);
}

var buttons = document.querySelectorAll('.promo-slider-radio');
var currentButtonIndex = 0;


var nextButton = function() {
  buttons[currentButtonIndex].checked = false;
  currentButtonIndex = (currentButtonIndex+1)%buttons.length;
  buttons[currentButtonIndex].checked = true;
}

var slideInterval = setInterval(nextButton, 5000);
window.onload = slideInterval;


var stopSlider = function (radio) {
  radio.addEventListener('click', function () {
    clearInterval(slideInterval);
  })
}
for (var i = 0; i < buttons.length; i++) {
  stopSlider(buttons[i])
}


var serviceSlideButtons = document.querySelectorAll('.services-slider-controls input[type="radio"]')
var serviceSlides = document.querySelectorAll('.services-slide');

var addCheckHandler = function (serviceRadio, serviceSlide) {
  serviceRadio.addEventListener ('click', function() {
    if (serviceRadio.checked) {
    for (var i = 0; i < serviceSlides.length; i++) {
      serviceSlides[i].classList.remove('services-slide-visible');
    }
    serviceSlide.classList.add('services-slide-visible');
    }
  })
}

for (var i = 0; i < serviceSlideButtons.length; i++) {
  addCheckHandler(serviceSlideButtons[i], serviceSlides[i])
}
