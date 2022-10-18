import { useReducer } from "react";
import { createContext } from "react";
import { data } from "../utils/data";
import { reducer } from "./reducer";

export const FlowerContext = createContext();

const FlowersContext = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {
        data: localStorage.getItem('flowers') ? JSON.parse(localStorage.getItem('flowers')) : data,
        likedProducts: localStorage.getItem('likedProducts') ? JSON.parse(localStorage.getItem('likedProducts')) : [],
        savedProducts: localStorage.getItem('savedProducts') ? JSON.parse(localStorage.getItem('savedProducts')) : [],
        products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
        basket: false
    })

    localStorage.setItem("flowers", JSON.stringify(state.data))
    localStorage.setItem("likedProducts", JSON.stringify(state.likedProducts))
    localStorage.setItem("savedProducts", JSON.stringify(state.savedProducts))
    localStorage.setItem("products", JSON.stringify(state.products))

    return(
        <FlowerContext.Provider value={[state, dispatch]}>
            {children}
        </FlowerContext.Provider>
    )
}

export default FlowersContext