function calculateTax(subtotal) {
    return subtotal * 0.08;
}

function calculateOrderTotal(subtotal) {
    const shipping = calculateShipping(subtotal);
    const tax = calculateTax(subtotal);

    return subtotal + shipping + tax;
}

const subtotal = getCartTotal();

const shipping = calculateShipping(subtotal);
const tax = calculateTax(subtotal);
const total = calculateOrderTotal(subtotal);

console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Shipping: $${shipping.toFixed(2)}`);
console.log(`Tax: $${tax.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);