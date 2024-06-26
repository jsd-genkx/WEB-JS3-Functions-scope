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
   



//--------------------------------------------------------//
//Constructor Functions
// function Person(firstName,lastName,hobby) {
//     this.firstName = firstName; // 'this' refers to the new object being created
//     this.lastName = lastName;
//     this.hobby = hobby,
//     this.walk = () =>{ //arrow function in constructor function works
//         console.log(this.firstName + ' is walk 🚶‍♀️');
//         console.log(this.hobby);
//         // console.log(this)
//     }
//     this.run = function (){
//         console.log(this.lastName);
//         return (this.firstName + ' is run 🏃');
         
//     }
//     //   console.log(this);
//   }
  
//   const person = new Person("Jill", "Smith","cooking");
//   console.log(person.firstName); 
//   console.log(person.walk());

//   const person2 = new Person("Peter","Jones","reading");
//   console.log(person2.firstName);
//   console.log(person2.run());
//   console.log(person2.walk());










//-----------------------------------------------------------------
// function MobilePhone(brand, model, year, color, isDualSIM, features){
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.isDualSIM = isDualSIM;
//     this.features = features;
//     console.log(this); 
//     this.ring = firstName => {
//       if (firstName === 'Lak'){
//           console.log('Ring! Ring! ☠️');
//       } else {
//           return("Beep! Beep! 🥰");
//         }
//       console.log(this); 
//     }, 
//     this.text = function()
//       {
//         console.log('Hello');
//         console.log(this);
//       },
  
//     this.camera = () => {
//         console.log('say CHEESESSSSSS 📸😁');
//         console.log(this);
//       }
      
//   }

    
//   const mobilePhone = new MobilePhone(
//     'Samsung',
//     'Galaxy S21',
//     2021,
//     'Phantom Gray',
//     true,
//     ['5G connectivity', 'AMOLED display', 'Quad-camera setup']
//   );

//   console.log(mobilePhone.brand);
//   console.log(mobilePhone.ring('Lak')); //undefined because no return statement
//   console.log(mobilePhone.text());
  
//   const anotherMobilePhone = new MobilePhone(
//     'Apple',
//     'iPhone 13',
//     2022,
//     'Midnight Blue',
//     false,
//     ['A15 Bionic chip', 'Super Retina XDR display', 'Dual-camera system']
//   );

//    console.log(anotherMobilePhone.brand);
//    console.log(anotherMobilePhone.ring('Mean')); 

//    console.log(this);