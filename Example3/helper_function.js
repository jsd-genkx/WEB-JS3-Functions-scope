// Helper function to check if a number is positive
  // function isPositive(number) {
  //   return number > 0;
  // }

  // // Function that uses the helper function to check if two numbers are positive
  // function checkNumbers(a, b) {
  //   if (isPositive(a) && isPositive(b)) {
  //     console.log(`${a} and ${b} are both positive.`);
  //   } else {
  //     console.log(`${a} and/or ${b} are not both positive.`);
  //   }
  // }

  // const num1 = 7;
  // const num2 = -3;

  // checkNumbers(num1, num2);


  //---------------------------------------------inventory-------------------------------//
  // Helper function to check if a quantity is positive
function isQuantityPositive(quantity) {
  return quantity > 0;
}

// Function that uses the helper function to check if two quantities are positive
function checkQuantities(product1, product2) {
  console.log(product1);
  console.log(product2);

  if (isQuantityPositive(product1.quantity) && isQuantityPositive(product2.quantity))
   
  {
      console.log(`Both quantities (${product1.name}: ${product1.quantity} and ${product2.name}: ${product2.quantity}) are in stock.`);
  } else {
      console.log(`Either quantity (${product1.name}: ${product1.quantity} and/or ${product2.name}: ${product2.quantity}) is not in stock.`);
  }
}

// Example usage with objects
const product1 = { name: "Apple", quantity: 7 };
const product2 = { name: "Banana", quantity: 0 };

checkQuantities(product1, product2);



 