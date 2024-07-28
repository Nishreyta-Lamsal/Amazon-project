export let cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 1

}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 2

}];

export function addToCart(productId){
    let matchingItem;
  
    //item contains product name and product quantity
    //the cart is the same cart variable we created in cart.js
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
  
    });
  
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    //Values we get from DOM are string by default, so we convert the value to number
    const quantity = Number(quantitySelector.value);
  
    if(matchingItem){
      matchingItem.quantity += quantity;
    } else{
      
    cart.push({
      productId : productId,
      quantity: quantity
    });
  
    }
  
  }

  export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }

    });

    cart = newCart;

  }