const products = [
    {
        id: 1,
        name: "NOVA X1",
        price: 189,
        stock: 5
    },
    {
        id: 2,
        name: "NOVA X2",
        price: 249,
        stock: 0
    },
    {
        id: 3,
        name: "NOVA Runner",
        price: 159,
        stock: 12
    },
    {
        id: 4,
        name: "NOVA Pro",
        price: 299,
        stock: 2
    }
];

// A. All products
console.log(products);

// B. Products in stock
const inStockProducts = products.filter(product => product.stock > 0);

console.log(inStockProducts);

// C. Find product ID 3
const product = products.find(product => product.id === 3);

console.log(product);

// D. Products cheaper than $200
const cheapProducts = products.filter(product => product.price < 200);

console.log(cheapProducts);

// E. Check whether every product has a valid price
const allPricesValid = products.every(product => product.price > 0);

console.log(allPricesValid);

// F. Check if at least one product is out of stock
const hasOutOfStockProduct = products.some(product => product.stock === 0);

console.log(hasOutOfStockProduct);