import moment from 'moment';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import ShowImage from './ShowImage';
// import { removeCart, updateQuantity } from './apiCore';
import { add_To_Cart, deleteCartItem } from '../actions/cartAction';


const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showCartTime = false,
  showRemoveProductButton = false,
  // setRun = f => f,
  // run = undefined
}) => {
  const dispatch = useDispatch()
  const userReducer = useSelector(state => state.userReducer)
  const cartReducer = useSelector(state => state.cartReducer)
  // const userId = userReducer.user._id
  // console.log(cartReducer.cartProduct)
  // dispatch(deleteCartItem(userId))

  // const [redirect, setRedirect] = useState(false);
  // const [count, setCount] = useState(cartReducer.count);
  // let token = localStorage.getItem('token');

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View Product</button>
        </Link>
      )
    );
  };

  const showStock = quantity => {
    return quantity > 0 ? (
      <h4>
        <span className="badge badge-primary badge-pill bg-primary">In Stock </span>
      </h4>
    ) : (
        <h4>
          <span className="badge badge-primary badge-pill bg-danger">Out of Stock </span>
        </h4>
      );
  };

  // const shouldRedirect = redirect => {
  //   if (redirect) {
  //     return <Redirect to="/" />;
  //   }
  // };

  const addToCart = () => {
    let products = {
      product,
      count: 1
    }
    // add_To_Cart(product, userId, token, setRedirect(true));
    // dispatch(add_To_Cart(product, userId, token))
    dispatch(add_To_Cart(product))
    // dispatch(add_To_Cart(products))

  };

  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2 card-btn-1 ">
          Add to cart
        </button>
      )
    );
  };

  const cartTime = showCartTime => {
    return (
      showCartTime && (
        <div>
          <p className="black-8">Added on {moment(cartReducer.cartProduct.createdAt).fromNow()}</p>
        </div>
      )
    );
  };

  const handleChange = prodId => event => {
    console.log(prodId)
    // setRun(!run); // run useEffect in parent Cart
    // setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      // updateItem(productId, event.target.value);
      // updateQuantity(cartId, userId, event.target.value, token);
      // setRedirect(true)
    }
  };

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              // value={product.count}
              value='1'
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };

  const removeItem = (id) => {
    // removeCart(id, userId)
    // dispatch(removeCart(id, userId))
    dispatch(deleteCartItem(id))
    // setRedirect(true)
  }
  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            // setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };


  return (
    <div className="card m-2">
      <div className="card-header card-header-1 text-white bg-info ">{product.name}</div>
      <div className="card-body ">
        {/* {shouldRedirect(redirect)} */}
        <ShowImage item={product} url="product" />
        <p className="card-p  mt-2">{product.description} </p>
        <p className="card-p black-10"> {product.price}</p>
        <p className="black-9">Category: {product.category && product.category.name}</p>
        {cartTime(showCartTime)}
        {showStock(product.quantity)}

        {showViewButton(showViewProductButton)}
        <br />
        {userReducer.user.role === 0 && (
          showAddToCartBtn(showAddToCartButton)
        )}
        <br />
        {showCartUpdateOptions(cartUpdate)}
        {showRemoveButton(showRemoveProductButton)}

      </div>
    </div>
  );
};

export default Card;