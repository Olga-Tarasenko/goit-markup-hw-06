(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();

(() => {
  const refs = {
    // Додати атрибут data-mob-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-mob-open]'),
    // Додати атрибут data-mob-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-mob-close]'),
    // Додати атрибут data-mob на бекдроп модалки
    modal: document.querySelector('[data-mob]'),
  };

  refs.openModalBtn.addEventListener('click', toggleMob);
  refs.closeModalBtn.addEventListener('click', toggleMob);

  function toggleMob() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();
