import axios from 'axios';
import { getToken } from './auth';
import { createFlashMessage } from './flash';

export function createBasket() {
  localStorage.setItem('basket', '[]');
  return [];
}

export function getBasket() {
  return JSON.parse(localStorage.getItem('basket')) || createBasket();
}

export function saveBasket(basket) {
  localStorage.setItem('basket', JSON.stringify(basket));
}

export function getItem(basket, itemId) {
  return basket.find(item => item._id === itemId);
}

export function addItem(itemToAdd, quantity) {
  console.log('this is Q id', itemToAdd);
  const basket = getBasket();
  itemToAdd.bag = itemToAdd._id;
  if (!getItem(basket, itemToAdd._id))
    basket.push(itemToAdd);
  incrementQuantity(basket, itemToAdd._id, quantity);
  saveBasket(basket);
}

export function incrementQuantity(basket, itemId, quantity) {
  const item = getItem(basket, itemId);
  item.unitQuantity =(item.unitQuantity || 0) + Math.abs(quantity);
  saveBasket(basket);
  console.log('item',basket);
}

export function decrementQuantity(basket, itemId, quantity) {
  const item = getItem(basket, itemId);
  if(item.unitQuantity > 0)
    item.unitQuantity = item.unitQuantity - quantity;
  saveBasket(basket);
}

// export function updateQuantity(itemId, updatedQuantity) {
//   const basket = getBasket();
//   getItem(basket, itemId).quantity = updatedQuantity;
//   saveBasket(basket);
//   console.log('update',basket);
// }

export function removeItem(itemId) {
  const basket = getBasket();
  const item = getItem(basket, itemId);
  basket.splice(basket.indexOf(item), 1);
  saveBasket(basket);
  console.log('remove', basket);
}

export function totalBasketPrice() {
  const basket = getBasket();
  const itemTotals = basket.map(item => item.unitPrice * item.unitQuantity);
  return itemTotals.reduce((basketTotal, itemTotal) => basketTotal += itemTotal, 0);
}

export function basketAmount() {
  return getBasket().length;
}


export function checkout() {
  axios.post('/api/checkout', getBasket(), {headers: {
    Authorization: `Bearer ${getToken()}`}})
    .then(() => {
      createBasket();
      createFlashMessage('Thank you for purchase');
      this.props.history.push('/purchases');
    })
    .catch(error => {
      console.log('test');
      createFlashMessage('Insufficient Stock', error);
      this.props.history.replace('/basket');

    });

}

export default {
  createBasket, getBasket, saveBasket, getItem, addItem,
  incrementQuantity, removeItem, totalBasketPrice,
  checkout, basketAmount, decrementQuantity
};
