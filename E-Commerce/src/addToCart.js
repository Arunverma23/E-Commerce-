import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {

    let arrLocalStoragrProduct = getCartProductFromLS();


    const currentProductElement = document.querySelector(`#card${id}`);
    console.log(currentProductElement);

    let quantity = currentProductElement.querySelector(".productQuantity").innerText;
    let price = currentProductElement.querySelector(".productPrice").innerText;

    console.log(quantity, price);

    price = price.replace("₹","");

    let existingProd = arrLocalStoragrProduct.find((currProd)=> currProd.id === id);

    if(existingProd){
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    // let updateCart = {id, quantity, price};
    arrLocalStoragrProduct.push({id, quantity, price});
    localStorage.setItem('cartProduct', JSON.stringify(arrLocalStoragrProduct));
    console.log(price);

    updateCartValue(arrLocalStoragrProduct);

    
    


};