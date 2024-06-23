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
            <select>
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

          <div class="added-to-cart">
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
    cart.forEach((item) => {
      if(productId === item.productId){
        matchingItem = item;
      }

    });

    if(matchingItem){
      matchingItem.quantity += 1;
    } else{
      
    cart.push({
      productId : productId,
      quantity: 1
    });

    }

    console.log(cart);
  });

  });



   

