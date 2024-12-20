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

document.addEventListener('DOMContentLoaded', function() {
    function scrollToSection(id) {
      const element = document.getElementById(id);

      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }

    // Вы можете сразу привязать обработчик к кнопке, если хотите
    document.querySelector('.shop-btn').addEventListener('click', function() {
      scrollToSection('your-order');
    });
  });
 // Функция для пересчета процента в зависимости от ширины экрана
    function updateGradient() {
      const screenWidth = window.innerWidth; // Ширина экрана
      const baseWidth = 320; // Базовая ширина, при которой процент равен 39%
      const basePercent = 39; // Исходное значение процента
      const incrementPerPixel = 0.1; // Увеличение процента на 0.1% за каждый пиксель

      // Рассчитываем новый процент: базовый процент + изменения на основе ширины
      let newPercent = basePercent + (screenWidth - baseWidth) * incrementPerPixel;

      // Ограничиваем значения процента (например, от 39% до 60%)
      const minPercent = 39;
      const maxPercent = 44.5;
      newPercent = Math.max(minPercent, Math.min(newPercent, maxPercent));
      
      // Обновляем переменную CSS
      document.documentElement.style.setProperty('--gradient-percent', `${newPercent}%`);
    }

    // Обновляем градиент при изменении размера окна
    window.addEventListener('resize', updateGradient);

    // Выполняем при начальной загрузке
    updateGradient();
