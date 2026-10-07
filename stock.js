// stock = 0
// → "Out of stock"

// requestedQuantity > stock
// → "Only X items available"

// requestedQuantity <= stock
// → "Available"

const product = {
    name: "NOVA X1",
    price: 189,
    stock: 4,
    requestedQuantity: 5
};


function calculateStock(product) {

    if (product.stock == 0){
        console.log('Out of stock');
        return;
    }
    
    if (product.requestedQuantity > product.stock){
        console.log(`Only ${product.stock} items available`);
    }

    if (product.requestedQuantity <= product.stock){
        console.log(`Available`);
    }
}
calculateStock(product);