import React, { useEffect, useState } from 'react';
import { items } from './Data';
import { useParams } from 'react-router-dom';
import Product from './Product';




function ProductD({ cart, setCart }) {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [relatedProduct, setRelatedProduct] = useState([])

    useEffect(() => {
        const filterProduct = items.filter((product) => product.id == id)
        // console.log(filterProduct)
        setProduct(filterProduct[0])

        const relatedProduct = items.filter((p) => p.category === product.category)
        setRelatedProduct(relatedProduct)

    }, [id, product.category])

    const addToCart = (id, title, price, description, imgSrc) => {
        const obj = {
            id, title, price, description, imgSrc
        }
        setCart([...cart, obj])
        //   console.warn(cart)
        
           
    }



    return (

        <>





            <div className='container con'>
                <div className='img'>
                    <img src={product.imgSrc} alt='' />
                </div>
                <div className='text-center'>
                    <h1 class="card-title">{product.title}</h1>
                    <p class="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
                    <button
                        onClick={() => addToCart(product.id, product.title, product.price, product.description, product.imgSrc)}
                        className="btn btn-warning">Add to Cart</button>
                </div>
            </div>
            <Product cart={cart} setCart={setCart} items={relatedProduct} />
        </>
    );
}

export default ProductD;