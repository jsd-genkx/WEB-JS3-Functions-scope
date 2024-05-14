//4.1 -------------------------------Declaration vs Expression functions----------------------//

//Declaration
// function info(firstName){
//   console.log('Hello ' + firstName);
// }
// info('Jack');


// //Expression
// const myInfo = function(firstName){
//   console.log('Hello ' + firstName);
// };
// myInfo('Jill');



//4.2----------------------------------hoisting----------------------------------------//
//hoisting functions
info1('Peter'); //Peter

function info1(firstName){
  console.log('Hello ' +  firstName);
}


// console.log(b)
// var b = 5;



// //can not hoist with expression functions
// myInfo1('Rose'); //Cannot access 'myInfo' before initialization

// let myInfo1 = function(firstname){
//   console.log('Hello ' + firstname);
// };

// console.log(a)
// let a = 10;

//---------------------------------------------------Inventory----------------------------------//
// Function declaration
// function calculateTotalPrice(product) {
//   return product.quantity * product.unit_price;
// }

// // Example usage
// const product = { product_name: "Apple", quantity: 10, unit_price: 1.99 };
// const total_price = calculateTotalPrice(product);
// console.log(`Total price of ${product.product_name}: $${total_price}`);


// Function expression
// const calculateTotalPrice = function(product) {
//   return product.quantity * product.unit_price;
// };

// // Example usage
// const product = { product_name: "Banana", quantity: 15, unit_price: 0.5 };
// const total_price = calculateTotalPrice(product);
// console.log(`Total price of ${product.product_name}: $${total_price}`);

