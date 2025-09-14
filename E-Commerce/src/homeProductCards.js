const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

import { addToCart } from './addToCart';
import {  homeQuantityToggle } from './homeQuantityToggle';

export const showProductContainer = (products) => {

    if(!products){
        return false;
    }

    products.forEach((current_product)=>{
        const {id, name, category, brand, price, stock, description, image} = 
        current_product;
        
        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = image;
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".produtDescription").textContent = description;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹${4*price}`;
        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);
         

        productClone.querySelector(".stockElement").addEventListener('click', (event)=>{
            homeQuantityToggle(event, id, stock);
        })

        productClone
            .querySelector('.add-to-cart-button')
            .addEventListener("click",(event)=>{
                addToCart(event, id, stock);
            });
        productContainer.append(productClone);
    });
};