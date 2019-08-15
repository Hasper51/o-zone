'use strict';

//Checkbox Start
function toggleCheckbox() {
  const checkbox = document.querySelectorAll('.filter-check_checkbox');

  checkbox.forEach(function (elem) {
    elem.addEventListener('change', function () {
      if (this.checked) {
        this.nextElementSibling.classList.add('checked');
      } else {
        this.nextElementSibling.classList.remove('checked');
      }
    });
  });
}

toggleCheckbox();
//Checkbox End

//Корзина
function toggleCart() {
  const btnCart = document.getElementById('cart');
  const modalCart = document.querySelector('.cart');
  const closeBtn = document.querySelector('.cart-close');


  btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
  });
}

toggleCart();
//end Корзина

//Добавление, удаление товара
function addCart() {
  const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter');


  cards.forEach((card) => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
      const cardClone = card.cloneNode(true);
      cartWrapper.appendChild(cardClone);

      showData();

      const removeBtn = cardClone.querySelector('.btn');
      removeBtn.textContent = 'Удалить';
      removeBtn.addEventListener('click', () => {
        cardClone.remove();
        showData();
      });
    });
  });

  function showData() {
    const cardsInCart = cartWrapper.querySelectorAll('.card'),
      cardsPrice = cartWrapper.querySelectorAll('.card-price'),
      cardTotal = document.querySelector('.cart-total span');
    let sum = 0;
    countGoods.textContent = cardsInCart.length;

    cardsPrice.forEach((cardPrice) => {
      let price = parseFloat(cardPrice.textContent);
      sum += price;
    });

    cardTotal.textContent = sum;

    if (cardsInCart.length !== 0) {
      cartEmpty.remove();
    } else {
      cartWrapper.appendChild(cartEmpty);
    }
  }
}
addCart();
//end Добавление, удаление товара

//Фильтр акции
function actionPage(){
  const cards = document.querySelectorAll('.goods .card'),
    discountCheckbox = document.getElementById('discount-checkbox'),
    min = document.getElementById('min'),
    max = document.getElementById('max'),
    search = document.querySelector('.search-wrapper_input'),
    searchBtn = document.querySelector('.search-btn');

  discountCheckbox.addEventListener('click', () => {
    cards.forEach((card) => {
      if (discountCheckbox.checked){
        if (!card.querySelector('.card-sale')){
          card.parentNode.style.display = 'none';
        }
      } else {
        card.parentNode.style.display = '';
      }
    });
  });
//фильтр по цене
  function filterPrice(){
    cards.forEach((card) => {
      const cardPrice = card.querySelector('.card-price');
      const price = parseFloat(cardPrice.textContent);
      
      if ((min.value && price < min.value) || (max.value && price > max.value)){
        card.parentNode.style.display = 'none';
      } else {
        card.parentNode.style.display = '';
      }
    });
  }

  min.addEventListener('change', filterPrice);
  max.addEventListener('change', filterPrice);

//поиск

  searchBtn.addEventListener('click', () => {
    const searchText = new RegExp(search.value.trim(), 'i');
    cards.forEach((card) => {
      const title = card.querySelector('.card-title');
      if(!searchText.test(title.textContent)){
        card.parentNode.style.display = 'none';
      } else {
        card.parentNode.style.display = '';
      }
    });
    search.value = '';
  });


}
actionPage();
//end Фильтр акции