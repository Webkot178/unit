const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');

    nav.classList.toggle('nav--active');
})


//  переход по ссылке в мобильной навигации к секции

const navLinks = document.querySelectorAll('.nav a'); // находим все ссылки в навигации nav 

// обходим все ссылки в мобильной навигации и описываем поведение (переход) по клику
navLinks.forEach(function (item) {
    item.addEventListener('click', function() { // на каждую ссылку item вешаем клик и когда происходит клик выполняется некая функция 
        
        navIcon.classList.remove('nav-icon--active'); // убираем nav-icon--active закрывая крестик
        nav.classList.remove('nav--active'); // убираем nav--active закрывая саму навигацию

    })
})