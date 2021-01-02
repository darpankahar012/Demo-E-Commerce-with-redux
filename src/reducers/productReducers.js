const initialState = {
    productData: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCT_LIST":
            return {
                ...state,
                productData: action.payload 
            };
        default:
            return state;
    }
};

export default productReducer;