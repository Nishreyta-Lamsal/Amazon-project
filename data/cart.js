export let cart = JSON.parse(localStorage.getItem('cart'));


//if the cart is empty we will set it to default value
if(!cart){
    cart =
    
[{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 1,
    deliveryOptionId: '1'

}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 2,
    deliveryOptionId: '2'

}];

}


function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

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
      quantity: quantity,
      deliveryOptionId: '1'

    });
  
    }

    saveToStorage();
  
  }

  export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }

    });

    cart = newCart;

    saveToStorage();

  }

  export function calculateCartQuantity() {
    let cartQuantity = 0;
  
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
  
    return cartQuantity;
  }

  export function updateQuantity(productId, newQuantity) {
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    matchingItem.quantity = newQuantity;
  
    saveToStorage();
  }



