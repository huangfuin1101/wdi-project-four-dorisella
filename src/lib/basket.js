import axios from 'axios';
// import { getToken } from './auth';

export function createBasket() {
  localStorage.setItem('basket', '[]');
  return [];
}

export function getBasket() {
  return JSON.parse(localStorage.getItem('basket')) || createBasket();
}

export function writeBasket(basket) {
  localStorage.setItem('basket', JSON.stringify(basket));
}

export function getItem(basket, itemId) {
  return basket.find(item => item._id === itemId);
}

export function addItem(itemToAdd, quantity) {
  console.log('this is Q', quantity);
  const basket = getBasket();
  itemToAdd.bag = itemToAdd._id;
  if (!getItem(basket, itemToAdd._id))
    basket.push(itemToAdd);
  incrementQuantity(basket, itemToAdd._id, quantity);
  writeBasket(basket);
}

export function incrementQuantity(basket, itemId, quantity) {
  const item = getItem(basket, itemId);
  item.quantity = (item.quantity || 0) + quantity;
}

export function updateQuantity(itemId, updatedQuantity) {
  const basket = getBasket();
  getItem(basket, itemId).quantity = updatedQuantity;
  writeBasket(basket);
}

export function removeItem(itemId) {
  const basket = getBasket();
  const item = getItem(basket, itemId);
  basket.splice(basket.indexOf(item), 1);
  writeBasket(basket);
}

export function totalBasketPrice() {
  const basket = getBasket();
  return basket.map(item => item.price * item.quantity)
    .reduce((total, itemTotal) => total += itemTotal, 0);

}

export function checkout() {
  axios.post('/api/checkout', getBasket())
    .then(() => {
      createBasket();
      this.props.history.push('/purchases');
    });
}

export default {
  createBasket, getBasket, writeBasket, getItem, addItem,
  incrementQuantity, updateQuantity, removeItem, totalBasketPrice,
  checkout
};
