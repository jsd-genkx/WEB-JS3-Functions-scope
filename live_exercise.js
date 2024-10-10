
let json = {
  name: 'Khem',
  isStudent: false,
  myFirstFunction: function(input) {
    console.log(this);
  }
}

json.myFirstFunction("abcedfg");