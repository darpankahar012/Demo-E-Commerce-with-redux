import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Card from './Card';
import { getFilteredProducts } from './apiCore';

const Shop = () => {

    const [error, setError] = useState(false)
    
    const [filteredResults, setFilteredResults] = useState([])
    
    const loadFiltersResults = () => {
        getFilteredProducts().then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setFilteredResults(data.data)
            }
        })
    }

    useEffect(() => {
        loadFiltersResults()
    }, []);

    return (
        <Layout
            title="Shop Page"
            description="Search and find Mobile of your Choice"
            className="container-fluid" >
            <div className="row">
                <div
                    className="col-8">
                    <h2 className="mr-4">Products</h2>
                    <div className="row">
                        {filteredResults.map((product, i) => (
                            <div key={i} className="col-4 mb-3">
                                <Card product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Shop;
