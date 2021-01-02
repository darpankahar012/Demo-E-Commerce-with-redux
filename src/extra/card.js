import moment from 'moment';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import ShowImage from './ShowImage';
import { removeCart } from './apiCore';
// import { add_To_Cart } from './apiCore';
import { add_To_Cart } from '../actions/cartAction';


const Card = ({
  product,
  cartId,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showCartTime = false,
  showRemoveProductButton = false,
  setRun = f => f,
  run = undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState();

  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cartReducer)
  const userReducer = useSelector(state => state.userReducer)
  const userId = userReducer.user._id

  let token = localStorage.getItem('token');

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View Product</button>
        </Link>
      )
    );
  };


  const addToCart = () => {
    // add_To_Cart(product, userId, token, setRedirect(true));
    dispatch(add_To_Cart(product, userId, token))
  };
  
  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/" />;
    }
  };

  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2 card-btn-1  ">
          Add to cart
        </button>
      )
    );
  };
  const cartTime = showCartTime => {
    return (
      showCartTime && (
        <div>
          <p className="black-8">Added on {moment(cartItems.createdAt).fromNow()}</p>
        </div>
      )
    );
  };

  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      // updateItem(productId, event.target.value);
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
              value={cartId.count}
              onChange={handleChange(cartId._id)}
            />
          </div>
        </div>
      )
    );
  };
  const removeItem = (id) => {
    removeCart(id, userId)
    setRedirect(true)
  }
  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(cartId._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };


  return (
    <div className="card">
      <div className="card-header card-header-1 ">{product.name}</div>
      <div className="card-body">
        {shouldRedirect(redirect)}
        <ShowImage item={product} url="product" />
        <p className="card-p  mt-2">{product.description} </p>
        <p className="card-p black-10">$ {product.price}</p>
        <p className="black-9">Category: {product.category && product.category.name}</p>

        {cartTime(showCartTime)}

        {showViewButton(showViewProductButton)}
        <br />
        {userReducer.user.role === 0 && (
          showAddToCartBtn(showAddToCartButton)
        )}

        {showRemoveButton(showRemoveProductButton)}

        {showCartUpdateOptions(cartUpdate)}

        {/* {!userReducer.loggedIn && (
          <Link to="/signup">
            <button className="btn btn-primary m-4">Home</button>
          </Link>
        )} */}

      </div>
    </div>
  );
};

export default Card;