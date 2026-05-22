import Product from './Product.jsx'
import data from './data/data.js'

function ProductsPage() {

    return (
        <>
            <div className="flex flex-wrap gap-2 max-w-250 mx-4">
                {data.map((item) => (
                    <Product
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />))}
            </div>
        </>
    )
}

export default ProductsPage