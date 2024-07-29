"use strict"

import { addOrder, getTotalOrderValue, displayOrders } from "./module.js"

addOrder(1, 'Piłka', 10, 5);
addOrder(2, 'Ochraniacze', 20, 3);
addOrder(3, 'Koszulka', 15, 2);

getTotalOrderValue()
console.log('--- All Orders ---');
displayOrders();