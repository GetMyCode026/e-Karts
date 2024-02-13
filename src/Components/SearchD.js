import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';


function SearchD( cart , setCart) {

const {term} = useParams()
const [filterData , setFilterData] = useState([])

useEffect (()=>{
    const filteredData =() =>{
        const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
        setFilterData(data)

    }
 filteredData()

} , [term])
    return (
        <div>
            <Product cart={cart} setCart={setCart} items={filterData}/>
        </div>
    );
}

export default SearchD;