// setTimeout(() => {
//     console.log('Hello')
// },3000)

// const timeout = ()=> {
//     console.log('Hello timeout function')
// }
// setTimeout(timeout,100)


// asynchronous 

console.log('1')
setTimeout(() => {
    console.log('2')
}, 3000)
console.log('3')


//----------------------------------callback arrow function------------------------------//
// let fruitProducts = ['apple', 'banana', 'mango'];

// const addProduct = (productName, callback) => {
//     setTimeout(() => {
//         fruitProducts.push(productName);
//         callback();
//     }, 200);
// };

// const getProduct = () => {
//     setTimeout(() => {
//         console.log(fruitProducts);
//     }, 100);
// };

// // Add a new product to the inventory
// addProduct('pear', getProduct);


//----------------------------------------no callback------------------------------------//
// let fruitProducts = ['apple', 'banana', 'mango']

// function addProduct (product_name){
//     setTimeout(function() {
//         fruitProducts.push(product_name)
//     },200);
// }

// function getProduct(){
//     setTimeout(function(){
//         console.log(fruitProducts)
//     },100);
// }

// //first add fruit to array / database
// addProduct('pear');

// //second get update list in friut products
// getProduct();







