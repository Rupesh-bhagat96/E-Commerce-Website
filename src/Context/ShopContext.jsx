import { createContext } from "react";
import { products } from "../assets/assets";


export const ShopContex = createContext();

const ShopContexProvider = (props) => {
    const currency ="$";
    const delivery_fee =10

    const value = {
        products,currency,delivery_fee

    }
    return(
        <ShopContex.Provider value={value}>
            {props.children}
        </ShopContex.Provider>
    )
}

export default ShopContexProvider