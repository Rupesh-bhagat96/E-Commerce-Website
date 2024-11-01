import { createContext, useState } from "react";
import { products } from "../assets/assets";


export const ShopContex = createContext();

const ShopContexProvider = (props) => {
    const currency ="$";
    const delivery_fee =10
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)

    const value = {
        products,currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch

    }
    return(
        <ShopContex.Provider value={value}>
            {props.children}
        </ShopContex.Provider>
    )
}

export default ShopContexProvider