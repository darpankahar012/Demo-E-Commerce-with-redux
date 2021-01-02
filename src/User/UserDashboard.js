import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../core/Layout';


const Dashboard = () => {

    const userReducer = useSelector(state => state.userReducer)

    const userLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/cart">MY Cart</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to={`/profile/${userReducer.user._id}`}>Update Profile</Link>
                    </li>
                </ul>
            </div>
        )
    }
    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{userReducer.user.name}</li>
                    <li className="list-group-item">{userReducer.user.email}</li>
                    <li className="list-group-item">{userReducer.user.role === 1 ? 'Admin' : 'User'}
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <Layout title="Dashboard" description={`Hello ${userReducer.user.name} `} className="container-fluid">

            <div className="row">
                <div className="col-3">
                    {userLinks()}
                </div>
                <div className="col-9">
                    {userInfo()}
                </div>

            </div>

        </Layout>
    )

}

export default Dashboard;