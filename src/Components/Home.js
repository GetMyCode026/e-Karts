import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { items } from './Data';
import { FaCartArrowDown } from "react-icons/fa6";



function Home({ setData, cart }) {
    const location = useLocation()
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")



    const filterByCatagory = (category) => {
        const element = items.filter((product) => product.category === category)
        setData(element)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/searchD/${searchTerm}`)
    }

    return (
        <>
            <header className='sticky-top '>
                <div className='row'>
                    <div className='col'>
                    <div className='navbar'>
                    <Link to={'/'} onClick={() => setData(items)} className='brand'>e-Shopping</Link>

                    <form onSubmit={handleSubmit} className='search-bar'>
                        <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search Product' />
                    </form>

                    <Link to={'/Cart'} className='Kart'>
                        <button type="button" className="btn btn-primary position-relative">
                            <FaCartArrowDown style={{fontSize: "1.5rem"}}/>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    </Link>

                </div>

                    </div>
                </div>

              

                {
                    location.pathname == '/' &&
               
                <div className='nav-second'>
                    <div className='item'>Filter now {"->"} </div>
                    <div onClick={() => filterByCatagory('mobiles')}
                        className='item'>Mobile</div>
                    <div onClick={() => filterByCatagory('laptops')}
                        className='item'>LapTop</div>
                    <div onClick={() => filterByCatagory('tablets')}
                        className='item'>Tablets</div>
                    <div className='item'>Watches</div>
                </div>
}

            </header>
        </>
    );
}

export default Home;