//Global Context 
// console.log(this === window); // Outputs: true
// console.log(this); // Outputs: [object Window]

//object iteral
let product = {
    product_id: 1,
    product_name: "Green Tea",
    quantity_in_stock: 150,
    unit_price: 4.99,
    description: {
        product_brand: "Heavenly Teas",
        size_or_quantity: "20 bags",
        taste_or_scent: "Green Tea",
        colour: "Green",
        additional_description: "Rich in antioxidants and flavonoids, promotes weight loss."
    },
    // Method to display product information
    displayInfo: function() {
        console.log(`Product: ${this.product_name}, Price: $${this.unit_price}`);
        console.log(`Brand: ${this.description.product_brand}`);
        console.log(`Details: ${this.description.additional_description}`);
    },

    // displayInfo: () => {
    //     console.log(`Product: ${this.product_name}, Price: $${this.unit_price}`);
    //     console.log(`Brand: ${this.description.product_brand}`);
    //     console.log(`Details: ${this.description.additional_description}`);
    // },


    // Method to update stock level
    updateStock: function(quantitySold) {
        this.quantity_in_stock -= quantitySold;
        console.log(`Updated Stock Level: ${this.quantity_in_stock}`);
    }
};

// Accessing and using the object
product.displayInfo();

// Suppose 30 units are sold
product.updateStock(30);






//---------Object Methods
// const person = {
//     firstName: "Peter",
//     lastName: "Jones",
//     hobby: "reading",
//     walk: () => {  //Arrow function can not use this. as you can see it is undefined
//       //console.log(this); //get global Object
//       console.log("Hello, " + this.firstName); // 'this' refers to the 'person' object
//       console.log(this.lastName); 
      
      
//     },
//     run: function() { // normal function can use this.
//         console.log(this); //get person Object
//         console.log(this.lastName);
//         console.log(this.firstName + ' is run 🏃');
//         // return (this.firstName + ' is run 🏃');

//     }
//   };
//    console.log(person.walk()); 
//    console.log(person.run());