
const product ={
    name: 'nova 1',
    price: 189,
    discount: 20,
    quantity: 2
};

// Original price
// Discount percentage
// Discount amount
// Price after discount
// Quantity
// Subtotal
let price = product.price;
let quantity = product.quantity;
let discount = product.discount;
let Subtotal;
function calculateDiscount() {

    let discountAmount = price * discount / 100;
    let totalDiscount =  discountAmount * quantity;
    let  Total= (price - discountAmount) * quantity;
    

console.log(`Original price $${price}`);
console.log(` Discount amount $${totalDiscount}`);
console.log(` Quantity ${quantity}`);
console.log(`Total ${Total}`);
    
}
calculateDiscount();

