export const cart = [];

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