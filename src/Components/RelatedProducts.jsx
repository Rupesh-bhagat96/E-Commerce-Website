import React, { useContext, useEffect, useState } from 'react'
import { ShopContex } from '../Context/ShopContext'
import ProductItems from './ProductItems'
import Title from './Title'

const RelatedProducts = ( {category, subCategory}) => {
    const {products} = useContext(ShopContex)
    const [related, setRelated] = useState([])

    useEffect(()=>{
        if(products.length > 0){

            let productsCopy = products.slice()

            productsCopy = productsCopy.filter((item) => category === item.category)
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)

            setRelated(productsCopy.slice(0,5))
            
        }
    },[products])

  return (
    <div className='my-10'>
    <div className='text-center py-2 text-3xl'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />     
           
    </div>   

    {/* showing products */}
    <div onClick={()=>{window.scrollTo({top:0,behavior:'smooth'})}} className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
           related.map((item,index)=>(
               <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
    </div>

</div>
  )
}

export default RelatedProducts
