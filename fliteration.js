const orders = [
    {
        id: 101,
        customer: "Ali",
        total: 450,
        status: "delivered",
        items: 3
    },
    {
        id: 102,
        customer: "Sara",
        total: 1200,
        status: "pending",
        items: 5
    },
    {
        id: 103,
        customer: "Ahmed",
        total: 250,
        status: "cancelled",
        items: 1
    },
    {
        id: 104,
        customer: "Hina",
        total: 850,
        status: "delivered",
        items: 4
    }
];




// B. Find all delivered orders
// Use filter()


// C. Find order with ID 102
// Use find()


// D. Find orders with total greater than 500
// Use filter()


// E. Check whether every order has at least 1 item
// Use every()


// F. Check if at least one order is cancelled
// Use some()

// let deliveredOrders = orders.filter(orders => orders.status === "delivered");

// console.log(deliveredOrders);

// let findOrder = orders.find(orders => orders.id === 102);

// console.log(findOrder);

// let greaterThan = orders.filter(orders => orders.total >= 500);''

// console.log(greaterThan);

// let greaterThan = orders.every(orders => orders.items >= 1);

// console.log(greaterThan);

// let checkOrder = orders.some(orders => orders.status === "cancelled")

const inventoryValue = orders.reduce((total, orders) =>{

    return total + (orders.total * orders.items)
}, 0)

console.log(inventoryValue);



