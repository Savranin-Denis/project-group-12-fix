(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-heder-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-heder-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-heder]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();
(() => {
// Получаем элементы
const menuBtn = document.querySelector('.hedder-burger.svg'); // Кнопка для открытия меню
const closeBtn = document.querySelector('.menu-close-btn'); // Кнопка для закрытия меню
const backdrop = document.getElementById('backdrop'); // Фон меню
const menuLinks = backdrop.querySelectorAll('a'); // Все ссылки в меню
const orderButton = document.getElementById('orderButton'); // Кнопка "Ваш заказ"

// Открытие меню
menuBtn.addEventListener('click', () => {
  backdrop.classList.add('is-open'); // Добавляем класс для отображения меню
});

// Закрытие меню через кнопку "Закрыть"
closeBtn.addEventListener('click', () => {
  backdrop.classList.remove('is-open'); // Убираем класс, чтобы скрыть меню
});

// Закрытие меню при клике на ссылку
menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Останавливаем стандартное поведение ссылки

    // Сначала закрываем меню
    backdrop.classList.remove('is-open');

    // Затем плавно прокручиваем страницу к нужной секции
    const targetId = link.getAttribute('href').substring(1); // Получаем ID секции
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Закрытие меню и плавный скролл при клике на кнопку "Ваш заказ"
orderButton.addEventListener('click', () => {
  backdrop.classList.remove('is-open'); // Закрываем меню
  document.getElementById('your-order').scrollIntoView({ behavior: 'smooth' }); // Плавный скролл
});
})();
    (() => {
 function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
 }
        })();