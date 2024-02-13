import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

// import { Button, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function Product({items , cart , setCart}) {
    const addToCart = ( id,title,price,description,imgSrc)=>{
        const obj = {
            id,title,price,description,imgSrc
        }
      setCart([...cart, obj])
    //   console.warn(cart)
      toast.success('yeh-! item added Successfully!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
    }
    return (
        <>
        <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
            <div className='container my-4'>
                <div className='row'>


                    {
                        items.map((product) => {
                            return (
                                <>
                                    <div key={product.id} className='col-lg-4 col-md- 6 text-center my-3' >
                                        
                                        <div class="card" style={{ width: '18rem' }}>
                                            <Link to={`/product/${product.id}`}
                                            style={{
                                                display:'flex',
                                                justifyContent:'center',
                                                alignItems:'center'
                                            }}>
                                            <img src={product.imgSrc} class="card-img-top" alt="..." />
                                            </Link>
                                                <div class="card-body">
                                                    <h5 class="card-title">{product.title}</h5>
                                                    <p class="card-text">{product.description}</p>
                                                    <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
                                                <button 
                                                onClick={()=>addToCart(product.id,product.title,product.price,product.description,product.imgSrc)}
                                                className="btn btn-warning">Add to Cart</button>
                                                </div>
                                        </div>


                                    </div>
                                </>
                            )
                        })
                    }

                </div>

            </div>


        </>
    );
}

export default Product;