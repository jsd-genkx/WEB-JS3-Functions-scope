//-----Arrow functions-----
// const myInfo = (firstName) =>{
//      console.log('Hello '+ firstName);
//    };
//    myInfo('Jill');

// //or 
// myInfo1('Jack');
// const myInfo1 = firstName => console.log('Hello '+ firstName);
//       myInfo1('Jack');



//---------------------------Expression vs Arrow Function Single Return----------------//

// // Function expression with a single return statement
// const square = function(num) {
//     return num * num;
// };

// console.log(square(5)); // Output: 25


// // Arrow function with a single return statement
// const square1 = num => num * num;

// console.log(square1(15)); // Output: 25


//---------------------------Expression vs Arrow Function Return----------------//
// Function expression with multiple return statements based on condition
// const checkNumber = function(num) {
//     return num > 0 ? 'Positive' 
//            : num < 0 ? 'Negative' 
//            : 'Zero';
// };

// console.log(checkNumber(-5)); // Output: "Negative"
// console.log(checkNumber(10)); // Output: "Positive"
// console.log(checkNumber(0)); // Output: "Zero"

// Arrow function with multiple return statements based on condition
// const checkNumber = (num) => {
//     return num > 0 ? 'Positive' 
//           : num < 0 ? 'Negative' 
//           : 'Zero';
// };

// console.log(checkNumber(-5)); // Output: "Negative"
// console.log(checkNumber(10)); // Output: "Positive"
// console.log(checkNumber(0)); // Output: "Zero"

//-------------------------------------------------Inventory------------------------------//
const calculateTotalPrice = product => {
      return product.quantity * product.unit_price;
    };
    
    // Example usage
    const product = { product_name: "Banana", quantity: 15, unit_price: 0.5 };
    const total_price = calculateTotalPrice(product);
    console.log(`Total price of ${product.product_name}: $${total_price}`);
    




