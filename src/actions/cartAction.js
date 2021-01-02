export const add_To_Cart = data => ({
    type: "ADD_TO_CART",
    payload: data
})

export const deleteCartItem = id => ({
    type: "REMOVE_TO_CART",
    payload: id
})



// const cartItem = (payload) => ({ type: "SHOW_CART", payload })

// const addTocart = (payload) => ({ type: "ADD_TO_CART", payload })

// const removeItem = (payload) => ({ type: "REMOVE_TO_CART", payload })


// export const add_To_Cart = (product, userId, token) => dispatch => {
//     const productInfo = {
//         product: product._id,
//         count: 1,
//         price: product.price
//     }
//     fetch(`http://localhost:8000/api/product/addTocart/${userId}`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(productInfo)
//     }).then(res => res.json())
//         .then(data => {
//             if (data.error) {
//                 // console.log(data)
//                 alert(data.error);
//             } else {
//                 dispatch(addTocart(data))
//                 console.log(data)
//             }
//         })
// }

// export const myCart = (userId) => dispatch => {
//     let token = localStorage.getItem('token');
//     return fetch(`http://localhost:8000/api/product/mycart/${userId}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             Authorization: `Bearer ${token}`
//         }
//     }).then(response => {
//         return response.json();
//     }).then(data => {
//         if (data.error) {
//             alert(data.error);
//         } else {
//             dispatch(cartItem(data))
//         }
//     }).catch(error => {
//         console.log(error);
//     })
// }


// export const removeCart = async (cartId, userId) => dispatch => {
//     // export const removeCart = (cartId, userId) => {
//     let token = localStorage.getItem('token');
//     fetch(`http://localhost:8000/api/product/addTocart/product/remove/${cartId}/${userId}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             Authorization: `Bearer ${token}`
//         }
//     }).then(data => {
//         console.log("Delete Success !", data)
//         dispatch(removeItem(cartId))
//         // dispatch(deleteCartItem(id))
//     }).catch(err => console.log(err));
// }
