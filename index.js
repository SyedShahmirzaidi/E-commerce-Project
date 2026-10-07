const cart = [];

function addToCart(productId, quantity) {
    const product = products.find(product => product.id === productId);

    if (!product) {
        throw new Error("Product not found.");
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Quantity must be a positive integer.");
    }

    if (quantity > product.stock) {
        throw new Error(`Only ${product.stock} items available.`);
    }

    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;

        if (newQuantity > product.stock) {
            throw new Error(`Cannot add more than ${product.stock} items.`);
        }

        existingItem.quantity = newQuantity;
        return;
    }

    cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity
    });
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.productId === productId);

    if (index === -1) {
        throw new Error("Cart item not found.");
    }

    cart.splice(index, 1);
}

function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.productId === productId);

    if (!item) {
        throw new Error("Cart item not found.");
    }

    const product = products.find(product => product.id === productId);

    if (!product) {
        throw new Error("Product no longer exists.");
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Quantity must be a positive integer.");
    }

    if (quantity > product.stock) {
        throw new Error(`Only ${product.stock} items available.`);
    }

    item.quantity = quantity;
}

function getCartTotal() {
    return cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

addToCart(1, 2);
addToCart(3, 1);

console.log(cart);
console.log(`Cart total: $${getCartTotal()}`);