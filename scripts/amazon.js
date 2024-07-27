//we want to import 'cart' variable from cart.js
import {cart /**as myCart(if we need to avoid conflict with a variable named 'cart' in 'amazon.js' file)**/} from '../data/cart.js';
import{products} from '../data/products.js';

// we usually use combination of arrays and objects to create a data structure
// in javascript

//toFixed will change a number to string and we can tell it how many decimal we want
//for combining all the string together
let productsHTML = '';

products.forEach((product) => {
    productsHTML += ` <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
             <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
  
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id = "${product.id}">
            Add to Cart
          </button>
        </div>
    `;
      //Data attribute = allows us to attach any information to an HTML element
      //It has an attribute name on the left and attribute value on the right
      //Data attributes have to start with "data-"


});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

// We're going to use an object to save the timeout ids.
// The reason we use an object is because each product
// will have its own timeoutId. So an object lets us
// save multiple timeout ids for different products.
// For example:
// {
//   'product-id1': 2,
//   'product-id2': 5,
//   ...
// }
// (2 and 5 are ids that are returned when we call setTimeout).
const addedMessageTimeouts = {};

document.querySelectorAll('.js-add-to-cart')
   .forEach((buttonElement) => {
    buttonElement.addEventListener('click', () => {
      //.dataset helps get all the attributes attached to the button
    buttonElement.dataset;
    //.productName is the same as product-name from the data attribute 
    //it just got converted from kebab case to camel case
    const productId = buttonElement.dataset.productId;

    let matchingItem;

    //item contains product name and product quantity
    //the cart is the same cart variable we created in cart.js
    cart.forEach((item) => {
      if(productId === item.productId){
        matchingItem = item;
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

    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    })

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    
    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);

    addedMessage.classList.add('added-to-cart-visible');

      //Check if there is a previous timeout for this product.
      //If there is, we should stop it.
      const previousTimeoutId = addedMessageTimeouts[productId];
      if (previousTimeoutId){
        clearTimeout(previousTimeoutId);
      } 
      const timeoutId = setTimeout(() => {
      addedMessage.classList.remove('added-to-cart-visible');
    }, 2000);

    //Save the timeoutId for this product
    //so we can stop it later if we need to.
    addedMessageTimeouts[productId] = timeoutId;

   });
   });



   

