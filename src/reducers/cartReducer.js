const initialState = {
    cartProduct: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_CART":
            return {
                ...state,
                cartProduct: action.payload
            }
        case "ADD_TO_CART":
            return {
                ...state,
                cartProduct: state.cartProduct.concat(action.payload)
            }
        case "REMOVE_TO_CART":
            const id = action.payload
            return {
                cartProduct: state.cartProduct.filter(
                    (product) => product._id !== id
                )
            }
        case "CLEAR_CART":
            return {
                cartProduct: []
            }
        default:
            return state;
    }
};

export default cartReducer;





// case "ADD_TO_CART":
// return {
//     ...state,
//     // cartProduct: [...state.cartProduct, action.payload]
//     cartProduct: state.cartProduct.concat(action.payload)
// }
//         case "REMOVE_TO_CART":
// // product ID which delete from cart
// // product._id data from state 
// const id = action.payload
// return {
//     // ...state,
//     cartProduct: state.cartProduct.filter(
//         (product) => product._id !== id
//         // console.log(product)
//         // product.id !== id
//     )
//     // cartProduct: [...state.cartProduct.slice(0, id),
//     // ...state.cartProduct.slice(id + 1)]
// }