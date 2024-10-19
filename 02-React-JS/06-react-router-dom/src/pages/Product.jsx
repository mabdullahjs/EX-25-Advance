import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const Product = () => {

    const [products, setProducts] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((res) => {
                console.log(res.products)
                setProducts(res.products)
            })
            .catch(err => {
                console.log(err)
                setError(true)
            }).finally(() => {
                setLoading(false)
            })
    }, [])
    return (
        <>
            <h1 className='text-center text-3xl'>Product</h1>
            {loading && <div className='flex h-[80vh] justify-center items-center'>
                <span className="loading loading-spinner text-primary loading-lg"></span>
            </div>}
            {error && <h1>Error occured</h1>}
            <div className='flex justify-center gap-5 flex-wrap m-5'>
                {products && products.map((item, index) => {
                    return <Card title={item.title} price={item.price} src={item.thumbnail} description={item.description} />
                })}
            </div>
        </>
    )
}

export default Product