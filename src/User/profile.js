import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../core/Layout';
import { Redirect , Link } from 'react-router-dom';
import { read, update, updateUser } from './apiUser';

const Profile = ({ match }) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        error: false,
        success: false
    });

    const token = localStorage.getItem('token')
    const userReducer = useSelector(state => state.userReducer)

    let userId = userReducer.user._id

    const { name, email, success } = values;

    // Getting Old Values 
    const init = userId => {
        read(userId, token)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: true });
                    alert(data.error);
                } else {
                    setValues({ ...values, name: data.name, email: data.email });
                }
            });
    };

    useEffect(() => {
        init(userId);
    }, []);

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
        update(userId, token, { name, email })
            .then(data => {
                console.log("update Data :------------>", data)
                if (data.error) {
                    alert(data.error);
                } else {
                    setValues({
                        ...values,
                        name: data.name,
                        email: data.email,
                        success: true
                    });
                    console.log("success :------->", success)
                }
            });
    };

    const redirectUser = success => {
        if (success) {
            <Redirect to="/user/dashboard" />;
        }
    };

    const profileUpdate = (name, email) => (
        <form className="m-4">
            <div className="form-group m-4">
                <label className="text-muted">Name</label><br /><br />
                <input type="text" onChange={handleChange('name')} className="form-control" value={name} />
            </div>
            <div className="form-group m-4">
                <label className="text-muted">Email</label><br /><br />
                <input type="email" onChange={handleChange('email')} className="form-control" value={email} />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary m-4">
                Submit
            </button>
        </form>
    );

    return (
        <Layout title="Profile" description="Update your profile" className="container-fluid">
            <h2 className="m-4">Profile update</h2>
            {profileUpdate(name, email)}
            {redirectUser(success)}
        </Layout>
    );
};

export default Profile;