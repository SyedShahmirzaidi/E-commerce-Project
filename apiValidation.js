function calculateProductPrice(product) {
    const price = Number(product.price);
    const discount = Number(product.discount);
    const quantity = Number(product.quantity);

    if (!Number.isFinite(price)) {
        throw new Error("Invalid product price.");
    }

    if (!Number.isFinite(discount)) {
        throw new Error("Invalid discount.");
    }

    if (!Number.isFinite(quantity)) {
        throw new Error("Invalid quantity.");
    }

    const discountAmount = price * discount / 100;
    const finalPrice = price - discountAmount;
    const subtotal = finalPrice * quantity;

    return {
        originalPrice: price,
        discountAmount,
        finalPrice,
        quantity,
        subtotal
    };
}

const product = {
    name: "NOVA X1",
    price: "189",
    discount: 20,
    quantity: 2
};

console.log(calculateProductPrice(product));