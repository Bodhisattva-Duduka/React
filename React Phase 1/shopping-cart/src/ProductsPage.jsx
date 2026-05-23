import { useState } from 'react'
import Product from './Product.jsx'
import data from './data/data.js'

function ProductsPage({products, setProducts}) {

    return (
        <>
            <h1>{products}</h1>
            <div className="flex flex-wrap gap-2 max-w-250 mx-4">
                {data.map((item) => (
                    <Product
                        key={item.id}
                        products={products}
                        setProducts={setProducts}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />))}
            </div>
        </>
    )
}

export default ProductsPage