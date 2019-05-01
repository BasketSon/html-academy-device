var logout = document.querySelectorAll('.logout');
var login = document.querySelector('.header-login-link');

if (login.innerText !== 'Войти') {
  for (var i = 0; i < logout.length; i++) {
    logout[i].classList.add('show-logout')
  }
}




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
