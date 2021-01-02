import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import { signUserUp } from '../actions/userActions';
// import { signup } from '../auth/index';


const Signup = () => {
    const [values, setValues] = useState({
        name: 'test01',
        email: 'testccasd@gmail.com',
        password: '12345678',
    });
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer)

    const { name, email, password } = values

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values });
        dispatch(signUserUp(values))
    }

    const signUpForm = () => (
        <form>
            <div className="form-group m-4">
                <label className="text-muted">Name : </label>
                <input
                    placeholder="Please Enter User Name "
                    onChange={handleChange('name')}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>
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
            {user.submit === true && (
                <div className="alert alert-info">
                    New Account is created. Please <Link to="/signin">Signin</Link>
                </div>
            )
            }
        </form>
    );
    return (
        <Layout
            title="Signup"
            description="Signup to Node React E-Commerce App"
            className="container col-md-8 offset-md-2" >
            {signUpForm()}

            {/* {JSON.stringify(values)} */}
        </Layout>
    )
}

export default Signup;