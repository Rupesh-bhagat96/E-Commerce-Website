import React, {useContext, useEffect, useState} from 'react'
import { ShopContex } from '../Context/ShopContext'
import ProductItems from './ProductItems'
import Title from './Title'

const BestSeller = () => {
  const {products} = useContext(ShopContex)
  const [bestseller, SetBestSeller] = useState([])

  useEffect(()=>{
    const bestProducts = products.filter((item)=>(item.bestseller))
    SetBestSeller(bestProducts.slice(0,5))
  },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'BEST'} text2={'SELLER'} />     
            <p className='w-3/2 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Forever, Our top products. 
            </p>    
        </div>   

        {/* showing products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
               bestseller.map((item,index)=>(
                   <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>

    </div>
  
  )
}

export default BestSeller
