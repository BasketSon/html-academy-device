var overlay = document.querySelector('.overlay-picture');

function showOverlay() {
  overlay.classList.toggle('visually-hidden')
}

// var promoButtons = document.querySelectorAll('.promo-slider-radio');
// var promoLabels = document.querySelectorAll('.promo-slider-label');
// var addcheckHandler = function (radio, label) {
//   radio.addEventListener('click', function () {
//     label.classList.toggle('checked-label')
//   })
// }
// for (var i = 0; i < promoButtons.length; i++) {
//   addcheckHandler(promoButtons[i], promoLabels[i]);
//   if (promoButtons[i].checked === false) {
//     promoLabels[i].classList.remove('checked-label')
//   }
// }

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
