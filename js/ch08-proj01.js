const tax_rate = prompt("Enter tax rate (0.10)");
const shipping_threshold = prompt("Enter shipping threshold (1000)");

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

let subtotal = 0;
for (let item of cart) {
  let total = calculateTotal(item.quantity, item.product.price);
  subtotal += total;
  outputCartRow(item, total);
}

function displaySubtotal() {
  document.write(`${subtotal.toFixed(2)}`);
}

let tax = subtotal * tax_rate;
function displayTax() {
  document.write(`${tax.toFixed(2)}`);
}
let shipping = 0;
function displayShipping() {
  if (subtotal < shipping_threshold) {
    shipping = 40;
    console.log(shipping);
  }
  document.write(`${shipping.toFixed(2)}`);
}

function displayTotal() {
  let total = subtotal + tax + shipping;
  document.write(`${total.toFixed(2)}`);
}
