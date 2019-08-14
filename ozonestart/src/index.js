'use strict';

//Checkbox Start

const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach(function(elem){
  elem.addEventListener('change', function(){
    if (this.checked){
      this.nextElementSibling.classList.add('checked');
    } else{
      this.nextElementSibling.classList.remove('checked');
    }
  });
});
//Checkbox End

//Корзина
const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');


btnCart.addEventListener('click',() => {
  modalCart.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click',() => {
  modalCart.style.display = 'none';
  document.body.style.overflow = '';
});

//end Корзина
//Добавление, удаление товара

const cards = document.querySelectorAll('.goods .card'),
cartWrapper = document.querySelector('.cart-wrapper'),
cartEmpty = document.getElementById('cart-empty'),
countGoods = document.querySelector('.counter')

cards.forEach((card) => {
  const btn = card.querySelector('button');
  btn.addEventListener('click', () => {
    const cardClone = card.cloneNode(true);
    cartWrapper.appendChild(cardClone);
    cartEmpty.remove();
    showData();
  });
});

function showData(){
  const cards_in_cart = cartWrapper.querySelectorAll('.card');
  countGoods.textContent = cards_in_cart.length;
  
}
//end Добавление, удаление товара