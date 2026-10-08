const inventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.stock);
}, 0);

console.log(`Inventory value: $${inventoryValue}`);