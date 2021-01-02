const mycart = (payload) => ({ type: "ADD_TO_CART", payload })

const API = 'http://localhost:8000/api'

export const getProducts = sortBy => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err));
};

export const read = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err));
};


export const myCart = (userId) => {
    let token = localStorage.getItem('token');
    return fetch(`${API}/product/mycart/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err));
}

export const add_To_Cart = (product, userId, token) => {
    const productInfo = {
        product: product._id,
        count: 1,
        price: product.price
    }
    fetch(`${API}/product/addTocart/${userId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(productInfo)
    }).then(res => res.json())
        .then(data => {
            if (data.error) {
                // console.log(data)
                alert(data.error);
            } else {
                console.log("action", data)
                // dispatch(mycart(data.cartProduct))
                console.log(data)
            }
        })
}


export const updateQuantity = (cartId, userId, count, token) => {
    const quantity = {
        count: count,
    }
    console.log(quantity)
    fetch(`${API}/product/quantity/${userId}/${cartId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(quantity)
    }).then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                console.log(data)
            }
        })
}


// export const add_To_Cart = (product, userId, token) => dispatch => {
//     const productInfo = {
//         product: product._id,
//         count: 1,
//         price: product.price
//     }
//     fetch(`${API}/product/addTocart/${userId}`, {
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
//                 // dispatch(createUser(data.user))
//                 // dispatch(mycart(data.cartProduct))
//                 console.log(data)
//             }
//         })
// }

export const removeCart = (cartId, userId) => {
    let token = localStorage.getItem('token');
    fetch(`${API}/product/remove/${userId}/${cartId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.json())
        .then(data => {
            if (data.error) {
                // console.log(data)
                alert(data.error);
            } else {
                console.log("action", data.msg)
                // dispatch(mycart(data.cartProduct))
                // console.log(data)
            }
        })
}