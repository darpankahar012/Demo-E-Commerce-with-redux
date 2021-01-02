import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import { fetchUser } from '../actions/userActions';

const Signin = () => {
    const [values, setValues] = useState({
        email: 'new@gmail.com',
        password: '1234567890',
        loading: false,
    });
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer)

    const { email, password, loading } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, loading: true });
        dispatch(fetchUser(values))
    }

    // const showLoading = () => (
    //     loading && (<div className="alert alert-info">
    //         <h2>Loading...</h2>
    //     </div>)
    // );
    const signUpForm = () => (
        <form>
            <div className="form-group m-4">
                <label className="text-muted">Email : </label>
                <input
                    placeholder="Please Enter Email Address "
                    onChange={handleChange('email')}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>
            <div className="form-group m-4">
                <label className="text-muted">Password : </label>
                <input
                    placeholder="Please Enter Password"
                    onChange={handleChange('password')}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>
            <button onClick={clickSubmit} className="btn btn-success  m-4">Submit</button>
        </form>
    );

    if (user.loggedIn === true) {
        return <Redirect to="/" />
    }

    return (
        <Layout
            title="Signin"
            description="Signup to Node React E-Commerce App "
            className="container col-md-8 offset-md-2" >
            {/* {showLoading()} */}
            {signUpForm()}
        </Layout>
    )
}

export default Signin;


// import React from 'react'
// import { connect } from 'react-redux'
// import { Link, Redirect } from 'react-router-dom';
// import { fetchUser, logout } from '../actions/userActions'
// import Layout from '../core/Layout';


// class Signin extends React.Component {
//     state = {
//         email: "new@gmail.com",
//         password: "1234567890",
//         // email: "admin1@123.com",
//         // password: "12345678",
//     }

//     // componentDidCatch() {
//     //     if (this.props.user.loggedIn === true) {
//     //         this.setState{
//     //             email: "",
//     //             password: "",
//     //         }))
//     //     }
//     // }

//     handleOnChange = (e) => {
//         e.persist();
//         this.setState(() => ({
//             [e.target.name]: e.target.value
//         }))
//     }

//     onSubmit = (e) => {
//         e.preventDefault()
//         this.props.fetchUser(this.state)
//     }

//     render() {

//         const redirectUser = () => {

//             if (this.props.user.loggedIn === true) {
//                 return <Redirect to="/" />
//             }
//         }

//         return (
//             <Layout
//                 title="Signin"
//                 description="Signup to Node React E-Commerce App "
//                 className="container col-md-8 offset-md-2" >
//                 <div className="form-group m-4">
//                     <form onSubmit={this.onSubmit}>
//                         <h1 className="m-4">Signin Form</h1>
//                         <div className="form-group m-4">
//                             <label className="text-muted">Email : </label>
//                             <input
//                                 type="text"
//                                 name="email"
//                                 placeholder="email"
//                                 className="form-control"
//                                 value={this.state.email}
//                                 onChange={this.handleOnChange}
//                             />
//                         </div>
//                         <div className="form-group m-4">
//                             <label className="text-muted">Password : </label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="password"
//                                 className="form-control"
//                                 value={this.state.password}
//                                 onChange={this.handleOnChange}
//                             />
//                         </div>
//                         <button className="btn btn-success m-4">Submit</button>
//                         <br />
//                         {redirectUser()}

//                         {/* {this.props.user.loggedIn === true && (
//                             <h2 className="m-4">
//                                 <Link to="/">Login Successful !</Link>
//                             </h2>
//                         )}
//                         {this.props.user.loggedIn === false && (
//                             <Link to="/signup">
//                                 <button className="btn btn-primary m-4">Signup Form</button>
//                             </Link>
//                         )} */}
//                     </form>
//                 </div >
//             </Layout >
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         user: state.userReducer
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
//         logout: () => dispatch(logout())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Signin)



// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { connect } from 'react-redux'
// import { Link, Redirect } from 'react-router-dom';
// import { fetchUser, logout } from '../actions/userActions'
// import Layout from '../core/Layout';


// const Signin = () => {
//     // state = {
//     //     email: "new@gmail.com",
//     //     password: "1234567890",
//     //     // email: "admin1@123.com",
//     //     // password: "12345678",
//     // }
//     const [values, setValues] = useState({
//         email: "new@gmail.com",
//         password: "1234567890",
//         // email: "admin1@123.com",
//         // password: "12345678",
//     });

//     const dispatch = useDispatch()
//     const user = useSelector(state => state.userReducer)
//     const userId = user.user._id

//     // componentDidCatch() {
//     //     if (this.props.user.loggedIn === true) {
//     //         this.setState{
//     //             email: "",
//     //             password: "",
//     //         }))
//     //     }
//     // }

//     const handleChange = name => e => {
//         setValues({ ...values, error: false, [name]: e.target.value });
//     };

//     const clickSubmit = (e) => {
//         e.preventDefault()
//         dispatch(fetchUser(values))
//         // this.props.fetchUser(this.state)
//     }



//     const redirectUser = () => {
//         if (this.props.user.loggedIn === true) {
//             return <Redirect to="/" />
//         }
//     }

//     return (
//         <Layout
//             title="Signin"
//             description="Signup to Node React E-Commerce App "
//             className="container col-md-8 offset-md-2" >
//             <div className="form-group m-4">
//                 <form>
//                     <h1 className="m-4">Signin Form</h1>
//                     <div className="form-group m-4">
//                         <div>
//                             <label className="text-muted">Email</label><br /><br />
//                             <input type="email"
//                                 onChange={handleChange('email')}
//                                 className="form-control"
//                                 value={email} />
//                         </div>
//                         <div className="form-group m-4">
//                             <label className="text-muted">Password</label><br /><br />
//                             <input type="password"
//                                 onChange={handleChange('password')}
//                                 className="form-control"
//                                 value={password} />
//                         </div>
//                         <button onClick={clickSubmit} className="btn btn-primary m-4">
//                             Submit
//                         </button>
//                     </div>
//                     <br />
//                     {redirectUser()}

//                     {/* {this.props.user.loggedIn === true && (
//                             <h2 className="m-4">
//                                 <Link to="/">Login Successful !</Link>
//                             </h2>
//                         )}
//                         {this.props.user.loggedIn === false && (
//                             <Link to="/signup">
//                                 <button className="btn btn-primary m-4">Signup Form</button>
//                             </Link>
//                         )} */}
//                 </form>
//             </div >
//         </Layout >
//     )
// }

// export default Signin