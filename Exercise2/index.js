const myFirstFunction = (input) => {
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

Create named "comparison" function that has 2 params num1 and num2 using arrow function

if num1 > num2
Display ‘Num 1 is greater than Num 2’

else
Display ‘Num 2 is greater than Num 1’



*/
comparison(23, 0);
comparison(-23, 0);
