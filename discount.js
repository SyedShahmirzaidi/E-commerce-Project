    // If discount is 20% or higher:
    //     show "BIG SALE"

    // If quantity is 5 or more:
    //     give an additional 5% discount

    // If customer is VIP:
    //     give an additional 10% discount

    // Maximum total discount = 40%


    const order = {
        price: 100,
        discount: 20,
        quantity: 10,
        isVip: false
    };
    let price = order.price;
    let discount =order.discount;
    let quantity = order.quantity;
    let isVip = order.isVip;
    let discountAmount = price * discount /100;
    let totalDiscount = discountAmount;


        
        if (totalDiscount >= 20) {
            console.log('Big Sale')
        }else{
            console.log('Normal Discount')
        }

        if (quantity >= 5) {
        
            totalDiscount += 5;
       
        }

        if (isVip === true) {
        
            totalDiscount += 50;
           

        }
    
        let maxDiscount = Math.min(totalDiscount, 40)
        let totalAmount = price - maxDiscount;

    console.log('Total Discount: ' +  maxDiscount +'%');
    console.log('Total Amount: $' +  totalAmount);