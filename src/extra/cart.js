import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import Layout from './Layout';
// import { myCart } from './apiCore';
import { myCart } from '../actions/cartAction';
import { removeCart } from './apiCore';
// import { removeCart } from '../actions/cartAction';
import ShowImage from './ShowImage';
import Card from './Card';
import Checkout from './Checkout'


const Cart = () => {
    // const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    const dispatch = useDispatch()
    const userReducer = useSelector(state => state.userReducer)
    const cartReducer = useSelector(state => state.cartReducer)

    const items = cartReducer.cartProduct
    const userId = userReducer.user._id

    // const cartItems = () => {
    //     myCart(userId).then(data => {
    //         if (data.error) {
    //             alert(data.error)
    //         } else {
    //             setItems(data)
    //         }
    //     })
    // }

    const deleteItem = (id) => {
        removeCart(id, userId)
        // dispatch(removeCart(id, userId))
    }

    // useEffect(() => {
    //     cartItems()
    // }, []);

    useEffect(() => {
        if (userReducer.loggedIn) {
            dispatch(myCart(userId))
        }
    }, [])

    const showItems = items => {
        return (
            <div>
                <h2>Your cart has {`${items.length}`} items</h2>
                <hr />
                {items.map((list, i) => (
                    // <div className="card m-4" key={i}>
                    //     <div className="card-header card-header-1 ">{list.product.name}</div>
                    //     <div className="card-body">
                    //         <ShowImage item={list.product} url="product" />
                    //         <p className="card-p  mt-2">{list.product.description} </p>
                    //         <p className="card-p black-10">$ {list.product.price}</p>
                    //         <p className="card-p black-10">Quantity : {list.count}</p>
                    //         <Link to="/">
                    //             <button
                    //                 onClick={() => deleteItem(list._id)}
                    //                 className="btn btn-outline-danger mt-2 mb-2">Remove Item</button>
                    //         </Link>
                    //     </div>
                    // </div>
                    <Card
                        key={i}
                        product={list.product}
                        cartId={list}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showCartTime={true}
                        showRemoveProductButton={true}
                        showViewProductButton={false}
                        setRun={setRun}
                        run={run}
                    />
                ))}
            </div>
        );
    };
    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link to="/">Continue shopping</Link>
        </h2>
    );

    return (
        <Layout
            title="Shopping Cart"
            description="Manage your cart items. Add remove checkout or continue shopping."
            className="container-fluid">
            <div className="row">
                <div className="col-6">{cartReducer.cartProduct.length > 0 ? showItems(items) : noItemsMessage()}</div>
                <div className="col-6">
                    <h2 className="mb-4">Your cart summary</h2>
                    <Checkout products={items} />
                    <hr />
                </div>
            </div>
        </Layout>
    );
};

export default Cart;