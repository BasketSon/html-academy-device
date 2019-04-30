
var dotsBox = document.querySelector('.promo-slider-controls')

dotsBox.addEventListener('mouseout', function () {
  dotsBox.style.outline = 0;
})


var logout = document.querySelector('.logout');
var login = document.querySelector('.header-login-link');

if (login.innerText !== 'Войти') {
  logout.classList.add('show-logout')
}

//Отображение visibility родителя при фокусе дочерних ссылок без добавления класса.
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

var feedbackButton = document.querySelector('.feedback-page-button');
var modalFeedback = document.querySelector('.modal-feedback');
var feedbackBox = modalFeedback.querySelector('.modal-wraper');
var feedbackForm = modalFeedback.querySelector('.feedback-form')
var feedbackClose = modalFeedback.querySelector('.modal-close');
var fullName = document.getElementById('feedback-name');
var email = document.getElementById('feedback-email');
var letter = document.getElementById('feedback-letter');

feedbackButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add('visible');
  feedbackBox.classList.add('show-popup');
    fullName.value = storagefullName;
    email.value = storageEmail;
    if (fullName.value && email.value) {
      letter.focus();
    }
    else {
      if (fullName.value && !email.value) {
        email.focus();
      }
      else {
        fullName.focus();
      }
    }

})
feedbackClose.addEventListener('click', function () {
  modalFeedback.classList.remove('visible');
  feedbackBox.classList.remove('show-popup')
})

feedbackForm.addEventListener('submit', function (evt) {
  if (!fullName.value || !email.value) {
    evt.preventDefault();
    if (!fullName.value) {
      fullName.focus();
    }
    if (!email.value) {
      email.focus();
    }
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem('fullName', fullName.value);
      localStorage.setItem('email', email.value);
      }
    }
})

var isStorageSupport = true;
var storagefullName = '';
var storageEmail = '';

try {
  storagefullName = localStorage.getItem('fullName');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}


var mapButton = document.querySelector('.contacts-map');
var modalMap = document.querySelector('.modal-map');
var mapWindow = modalMap.querySelector('.modal-map-wraper');
var mapClose = modalMap.querySelector('.modal-close');

mapButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.add('visible');
  mapWindow.classList.add('show-map')
})

mapClose.addEventListener('click', function () {
  modalMap.classList.remove('visible');
  mapWindow.classList.remove('show-map')
})

var escClose = function (mod) {
  window.addEventListener('keydown', function(evt) {
    if (mod.classList.contains('visible')) {
  if (evt.keyCode === 27) {
      evt.preventDefault();
      mod.classList.remove('visible');
    }
  }
})
}
var modals = document.querySelectorAll('.modal');

for (var i = 0; i < modals.length; i++) {
  escClose(modals[i]);
}
