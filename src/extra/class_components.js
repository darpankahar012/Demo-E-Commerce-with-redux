// import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { useSelector } from "react-redux";
// import Layout from '../core/Layout';
// import { signin, authenticate } from '../auth/index';

// const Signin = () => {
//     const [values, setValues] = useState({
//         email: 'new@gmail.com',
//         password: '1234567890',
//         error: '',
//         loading: false,
//         redirectToReferrer: false
//     });
//     // const { isLoggedIn } = useSelector(state => state.auth);
//     // const { message } = useSelector(state => state.message);

//     // console.log(isLoggedIn)
//     // console.log(message)

//     // const dispatch = useDispatch();

//     const { email, password, loading, error, redirectToReferrer } = values;

//     const handleChange = name => event => {
//         setValues({ ...values, error: false, [name]: event.target.value })
//     }

//     const clickSubmit = (event) => {
//         event.preventDefault();
//         setValues({ ...values, error: false, loading: true });
//         // dispatch(signin(email, password))
//         //     .then(() => {
//         //         setValues({
//         //             ...values,
//         //             redirectToReferrer: true
//         //         });
//         //     })
//         //     .catch((err) => {
//         //         setValues({ ...values, error: err, loading: false })
//         //     });

//         signin({ email, password })
//             .then(data => {
//                 console.log(data)
//                 if (data.error) {
//                     setValues({ ...values, error: data.error, loading: false })
//                 }
//                 else {
//                     authenticate(
//                         data, () => {
//                             setValues({
//                                 ...values,
//                                 redirectToReferrer: true
//                             });
//                         }
//                     )
//                 }
//             })
//     }

//     const showError = () => (
//         <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
//             {error}
//         </div>
//     )
//     const showLoading = () => (
//         loading && (<div className="alert alert-info">
//             <h2>Loading...</h2>
//         </div>)
//     );

//     const signUpForm = () => (
//         <form>
//             <div className="form-group m-4">
//                 <label className="text-muted">Email : </label>
//                 <input
//                     placeholder="Please Enter Email Address "
//                     onChange={handleChange('email')}
//                     type="email"
//                     className="form-control"
//                     value={email}
//                 />
//             </div>
//             <div className="form-group m-4">
//                 <label className="text-muted">Password : </label>
//                 <input
//                     placeholder="Please Enter Password"
//                     onChange={handleChange('password')}
//                     type="password"
//                     className="form-control"
//                     value={password}
//                 />
//             </div>
//             <button onClick={clickSubmit} className="btn btn-success  m-4">Submit</button>
//         </form>
//     );

//     const redirectUser = () => {
//         if (redirectToReferrer) {
//             return <Redirect to="/" />
//         }
//     }

//     return (
//         <Layout
//             title="Signin"
//             description="Signup to Node React E-Commerce App "
//             className="container col-md-8 offset-md-2" >
//             {showLoading()}
//             {showError()}
//             {signUpForm()}
//             {redirectUser()}
//         </Layout>
//     )
// }

// export default Signin;


import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { fetchUser, logout } from '../actions/userActions'
import Layout from '../core/Layout';


class Signin extends React.Component {
    state = {
        email: "new@gmail.com",
        password: "1234567890",
        // email: "admin1@123.com",
        // password: "12345678",
    }

    // componentDidCatch() {
    //     if (this.props.user.loggedIn === true) {
    //         this.setState{
    //             email: "",
    //             password: "",
    //         }))
    //     }
    // }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.fetchUser(this.state)
    }

    render() {

        const redirectUser = () => {
            
            if (this.props.user.loggedIn === true) {
                return <Redirect to="/" />
            }
        }

        return (
            <Layout
                title="Signin"
                description="Signup to Node React E-Commerce App "
                className="container col-md-8 offset-md-2" >
                <div className="form-group m-4">
                    <form onSubmit={this.onSubmit}>
                        <h1 className="m-4">Signin Form</h1>
                        <div className="form-group m-4">
                            <label className="text-muted">Email : </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.handleOnChange}
                            />
                        </div>
                        <div className="form-group m-4">
                            <label className="text-muted">Password : </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.handleOnChange}
                            />
                        </div>
                        <button className="btn btn-success m-4">Submit</button>
                        <br />
                        {redirectUser()}

                        {/* {this.props.user.loggedIn === true && (
                            <h2 className="m-4">
                                <Link to="/">Login Successful !</Link>
                            </h2>
                        )}
                        {this.props.user.loggedIn === false && (
                            <Link to="/signup">
                                <button className="btn btn-primary m-4">Signup Form</button>
                            </Link>
                        )} */}
                    </form>
                </div >
            </Layout >
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)



import React from 'react'
import { connect } from 'react-redux'
import { Link , Redirect } from 'react-router-dom';
import { signUserUp, logout } from '../actions/userActions'
import Layout from '../core/Layout';


class Signup extends React.Component {
    state = {
        name: 'test',
        email: 'testasd@gmail.com',
        password: '1234567890',
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.signUserUp(this.state)
    }

    render() {
        const redirectUser = () => {
            if (this.props.user.submit === true) {
                return <Redirect to="/signin" />
            }
        }
        return (
            <Layout
                title="Signin"
                description="Signup to Node React E-Commerce App "
                className="container col-md-8 offset-md-2" >
                <div className="form-group m-4">
                    <form onSubmit={this.onSubmit}>
                        <h1 className="m-4">Signup Form</h1>
                        <div className="form-group m-4">
                            <label className="text-muted">Name : </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.handleOnChange}
                            />
                        </div>
                        <div className="form-group m-4">
                            <label className="text-muted">Email : </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.handleOnChange}
                            />
                        </div>
                        <div className="form-group m-4">
                            <label className="text-muted">Password : </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.handleOnChange}
                            />
                        </div>
                        <button className="btn btn-success m-4">Submit</button>
                        <br />
                        {redirectUser()}
                        {/* {this.props.user.submit === true && (
                            <Link to="/signin">
                                <button className="btn btn-primary m-4">Signin</button>
                            </Link>
                        )} */}
                    </form>
                </div >
            </Layout >
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)