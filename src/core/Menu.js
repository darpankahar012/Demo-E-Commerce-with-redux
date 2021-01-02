import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
// import { itemTotal } from './cartHelpers';
// import { myCart } from './apiCore';
// import { myCart } from '../actions/cartAction';


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#FFA500' }
    }
    else {
        return { color: '#ffffff' }
    }
}

const Menu = ({ history }) => {
    const [items, setItems] = useState([]);

    const dispatch = useDispatch()
    const userReducer = useSelector(state => state.userReducer)
    const userId = userReducer.user._id
    const cartReducer = useSelector(state => state.cartReducer)
    // const cartItems = () => {
    //     myCart(userId).then(data => {
    //         setItems(data)
    //     })
    // }
    // useEffect(() => {
    //     cartItems()
    // }, [])

    useEffect(() => {
        if (userReducer.loggedIn) {
            // dispatch(myCart(userId))
        }
    }, [])

    const logout = () => {
        dispatch({ type: "LOG_OUT" })
        dispatch({ type: "CLEAR_CART" })
    }

    return (
        <div>
            <ul className="nav nav-tabs bg-primary">

                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                </li>

                {userReducer.user.role === 0 && userReducer.loggedIn === true && (
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/cart')} to="/cart">
                            Cart <sup><small className="cart-badge">
                                {`${cartReducer.cartProduct.length}`}
                            </small></sup>
                        </Link>
                    </li>
                )}

                {userReducer.user.role === 0 && userReducer.loggedIn === true && (
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/user/dashboard')} to="/user/dashboard">{userReducer.user.name}</Link>
                    </li>
                )}

                {userReducer.user.role === 1 && userReducer.loggedIn === true && (
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/admin/dashboard')} to="/admin/dashboard">{userReducer.user.name}</Link>
                    </li>
                )}
                {!userReducer.loggedIn && (
                    <Fragment>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">Signin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">Signup</Link>
                        </li>
                    </Fragment>
                )}
                {userReducer.loggedIn && (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            onClick={() => logout()}
                            style={{ cursor: 'pointer', color: '#ffffff' }}
                            to="/"
                        >
                            Logout
                        </Link>
                        {/* <span
                            className="nav-link"
                            style={{ cursor: 'pointer', color: '#ffffff' }}
                            onClick={() => dispatch(({ type: "LOG_OUT" }))}
                        >Signout</span> */}
                    </li>
                )}
            </ul>
        </div>
    )
};

export default withRouter(Menu);