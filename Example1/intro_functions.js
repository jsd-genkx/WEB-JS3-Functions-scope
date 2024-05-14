//1.1----------------------------------function calculate----------------------------------//

// function addNumbers(a, b) {
//       return (a + b);
//   }

// console.log (addNumbers (20,3));
// console.log(addNumbers(30,56));


//1.2-----------------------------------function info-----------------------------------------//

// function info(firstName){
//     console.log('Hello ' + firstName);
// }
//  info('Jack');
//  info('Jill');
//  info('Tom'); 

//1.3---------------------------------function default parameter-------------------------------//
// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
//   }
  
//   greet("Jack"); // Outputs: Hello, Jack!
//   greet(); // Outputs: Hello, Guest!
  
  
  
  
  //1.4--------------------------------Fewer Arguments than Parameters-----------------------------//
  // function greet1(name, age) {
  //   console.log(`Hello, ${name}! You are ${age} years old.`);
  // }
  
  // greet1("Jill"); // Outputs: Hello, Jack! You are undefined years old.
  
  
  
  //1.5----------------------------------More Arguments than Parameters----------------------------//
  // function greet2(name) {
  //   console.log(`Hello, ${name}!`);
  // }
  
  // greet2("Jill", 25); // Outputs: Hello, Jill!


//------------------------------------------------------Inventory-----------------------------------------//
//1.1  function calculate
// function calculateProductValue(unit_price, quantity_in_stock) {
//   return unit_price * quantity_in_stock;
// }

// // Example usage:
// const unit_price = 1000; // Price per unit
// const quantity_in_stock = 20; // Quantity of items in stock

// const total_value = calculateProductValue(unit_price, quantity_in_stock);
// console.log("Total value of inventory for the product: $" + total_value);


//-------------------------------------------------------------------------------//

//1.2 function info
// function getProductInfo(grocery_inventory, product_name) {
//   // Check if the product exists in the inventory
//   console.log(grocery_inventory);
//   console.log(product_name);
//   if (grocery_inventory.hasOwnProperty(product_name))
//     console.log(grocery_inventory.hasOwnProperty(product_name))
//     {
//       const item = grocery_inventory[product_name];
//       console.log(item);
//       return `Product: ${product_name}, Price: $${item.unit_price}, Quantity in Stock: ${item.quantity_in_stock}`;
//   }
//   return "Product not found.";
// }

// // Example grocery inventory object
// const grocery_inventory = {
//   "Apples": { unit_price: 0.99, quantity_in_stock: 150 },
//   "Oranges": { unit_price: 1.20, quantity_in_stock: 200 },
//   "Bananas": { unit_price: 0.50, quantity_in_stock: 180 }
// };

// // Example usage:
// const product_name = "Apples";  // Directly using the product name as a key
// console.log(getProductInfo(grocery_inventory, product_name));

