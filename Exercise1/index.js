function myFirstFunction(input) {
  for (let i = 0; i < input; i++) {
    console.log(i);
  }
  for (let i = input; i > (-input) * 2; i--) {
    console.log(`${i} ${i}`);
  }
  for (let i = (-input) * 2; i <= 0; i++) {
    console.log(`${i} ${i} ${i}`);
  }
}

/*
CODE HERE!
call my first function with number 100000
call my first function with number 100
call my first function with number 1
*/

/*
CODE HERE!
create function tax 7%
return number;
*/

const totalPrice = tax(100); // should display 107
console.log(totalPrice);
console.log(tax(118));       // should display 126.26
console.log(typeof totalPrice);
