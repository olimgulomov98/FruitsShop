import React, { useContext } from 'react'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { Products } from '../Components/Products'
import { Container } from './style'
import { FlowerContext } from '../context/Flowers'
import {AddedProducts} from '../Components/AddedProducts'
import { LikedProducts } from '../Components/LikedProducts'
import { SavedProducts } from '../Components/SavedProducts'
 
export const Root = () => {
  const [state, dispatch] = useContext(FlowerContext)
  
  return (
    <Container>
        <Navbar />
        {
                state.basket ? (
                    
                    <AddedProducts />
   
                ) : 
                (
                  <div>
                    <LikedProducts />
                    <SavedProducts />
                    <Products />
                  </div>
                    
                )
        }
        
        <Footer />
    </Container>
  )
}
