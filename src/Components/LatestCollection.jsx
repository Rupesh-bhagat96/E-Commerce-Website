import React, { useContext, useEffect, useState } from 'react'
import { ShopContex } from '../Context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems'

const LatestCollection = () => {
    const {products} = useContext(ShopContex)
    const [latest, setLatest] = useState([])

    useEffect(()=>{
        setLatest(products.slice(0,10))
    },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'} />     
            <p className='w-3/2 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Forever, known for it's quality. 
            </p>    
        </div>   

        {/* showing products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latest.map((item,index)=>(
                    <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>

    </div>
  )
}

export default LatestCollection
