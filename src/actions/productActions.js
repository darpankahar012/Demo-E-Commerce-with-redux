
const listProduct = (payload) => ({ type: "PRODUCT_LIST", payload })


export const fetchProduct = () => dispatch => {
    fetch(`http://localhost:8000/api/products?order=desc&limit=6`, {
        method: "GET"
    }).then(response => {
        return response.json();
    }).then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            dispatch(listProduct(data))
        }
    }).catch(error => {
        console.log(error);
    })
}