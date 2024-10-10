
function ten(input, callback) {
  console.log("ten = ", input);
  callback();
}

function eleven() {
  console.log("Eleven");
}

ten(1555, eleven);