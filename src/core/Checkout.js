import React from 'react';

const Checkout = ({ products }) => {

    // const cartReducer = useSelector(state => state.cartReducer)
    // const items = cartReducer.cartProduct
    // console.log(items)

    // const getTotal = () => {
    //     return items.reduce((currentValue, nextValue) => {
    //         return nextValue.price;
    //         console.log(nextValue.price)
    //     }, 0);

    //     // let total = 0;
    //     // return items.map((product) => {
    //     //     // console.log(product.price)
    //     //     total += product.price
    //     //     return total
    //     // })

    //     // return items.reduce((prod1, prod2) => {
    //     //     return prod1.price + prod2.price
    //     // })
    // }

    const getTotal = () => {
        return products.reduce((currentValue,nextValue) => {
            return currentValue + nextValue.price;
        }, 0);
    };



    return <div>
        <h3>Total : {getTotal()}</h3>
        {/* {JSON.stringify(products)} */}
    </div>
}

export default Checkout;