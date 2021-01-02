import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import { fetchProduct } from '../actions/productActions'

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([])
    const [productsByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState(false)

    const dispatch = useDispatch()

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProductsBySell(data)
            }
        })
    }

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProductsByArrival(data)
            }
        })
    }

    useEffect(() => {
        dispatch(fetchProduct())
        loadProductsByArrival()
        loadProductsBySell()
    }, [])


    return (
        <Layout
            title="Home Page"
            description="Node React E-Commerce App"
            className="container-fluid" >
            <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card
                            product={product}
                            showCartTime={false} />
                    </div>
                ))}
            </div>
            <h2 className="mb-4">Best Sellers</h2>
            <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card
                            product={product}
                            showCartTime={false}
                        />
                    </div>
                ))}
            </div>
        </Layout>
    )
}
export default Home;