import './style.css';
import products from "../API/products.json";
import { showProductContainer } from './homeProductCards';

console.log(products);

// call the function to display all the products

showProductContainer(products);



