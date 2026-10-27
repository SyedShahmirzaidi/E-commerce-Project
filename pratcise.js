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

let cart = [];
function addtoCart(productId, quantity) {
    
    const product = products.find(product => product.id === productId);

    if (quantity <= 0) {

        throw new Error("This is probelm");
        
        
    }

}



 addtoCart(1,2)
