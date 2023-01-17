// search

const searchForm = document.querySelector('.search'); // находим форму по классу search
const searchButton = document.querySelector('.search__button');

searchButton.addEventListener('click', function(event) {
    if (!searchForm.classList.contains('search--visible')) { // если searchForm имеет search--visible, то мы ничего не делаем, инача мы отменяем стандартное поведение и добавляем его
// "!" делает инверсию и поэтому мы удаляем else 
        event.preventDefault(); // отмена стандартного поведения элемента (обновление страницы)
        searchForm.classList.toggle('search--visible'); // добавляем или убираем класс search--visible
    }

})