import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';


const AdminDashboard = () => {

    const userReducer = useSelector(state => state.userReducer)

    const adminLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">Create category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/product">Create Product</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/orders">View Orders</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/products">Manage Product</Link>
                    </li>
                </ul>
            </div>
        )
    }
    const adminInfo = () => {
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
        <Layout title="DashBoard" description={`Hello ${userReducer.user.name}`} className="container-fluid">

            <div className="row">
                <div className="col-3">
                    {adminLinks()}
                </div>
                <div className="col-9">
                    {adminInfo()}
                </div>

            </div>

        </Layout>
    )

}

export default AdminDashboard;