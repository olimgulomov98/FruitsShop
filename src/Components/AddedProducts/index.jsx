import React, { useContext, useState } from 'react'
import { FlowerContext } from '../../context/Flowers'
import { Container, Product } from './style'

export const AddedProducts = () => {
    const [state, dispatch] = useContext(FlowerContext)
    var totalPrice = 0
    
  return (
    <Container>
        <Container.Title>Added Products</Container.Title>
        <Container.Wrapper>
            
                        <Product>
                            <Product.Table border='1'>
                                <Product.Thead>
                                    <Product.Tr>
                                        <Product.Th>Product</Product.Th>
                                        <Product.Th>Title</Product.Th>
                                        <Product.Th>Price</Product.Th>
                                        <Product.Th>Quantity</Product.Th>
                                        <Product.Th>Total</Product.Th>
                                        <Product.Th>Action</Product.Th>
                                    </Product.Tr>
                                </Product.Thead>
                                <Product.Tbody>
                                {   
                                    state.products.length ? (
                                        state.products.map((value) => {
                                            {
                                                value.discount === null ? totalPrice += value.quantity * value.price : totalPrice += ((value.price - (value.discount / 100 * value.price)) * value.quantity)
                                            }
                                        
                                             
                                
                                            return(
                                                <Product.Tr  key={value.id}>
                                                    <Product.Td>
                                                        <Product.ImageWrapper>
                                                            <Product.Img src={value.img} />
                                                        </Product.ImageWrapper>
                                                    </Product.Td>
                                                    <Product.Td>
                                                        <Product.Title>{value.title}</Product.Title>
                                                    </Product.Td>
                                                    <Product.Td>
                                                        <Product.Price>${
                                                            value.discount === null ? value.price : value.price - (value.discount / 100 * value.price)
                                                        }</Product.Price>
                                                    </Product.Td>
                                                    <Product.Td>
                                                        <Product.Quantity>
                                                            <Product.IconWrapper onClick={() => dispatch({type: 'minus', payload: {id: value.id}})}>
                                                                <Product.Minus />
                                                            </Product.IconWrapper>
                                                            <Product.Quantity>{value.quantity}</Product.Quantity>
                                                            <Product.IconWrapper onClick={() => dispatch({type: 'plus', payload: {id: value.id}})}>
                                                                <Product.Plus />
                                                            </Product.IconWrapper>
                                                        </Product.Quantity>
                                                    </Product.Td>
                                                    <Product.Td>
                                                        <Product.Total>${
                                                            value.discount === null ? value.price * value.quantity : ((value.price - (value.discount / 100 * value.price)) * value.quantity).toFixed(2)
                                                        }</Product.Total>
                                                    </Product.Td>
                                                    <Product.Td>
                                                        <Product.TrashContainer>
                                                            <Product.Trash onClick={() => dispatch({type: 'delete', payload: {userId: value.id}})}/>
                                                        </Product.TrashContainer>
                                                    </Product.Td>
                                                </Product.Tr>
                                         )
                                        })
                                    ) : <h4>No Data</h4>    
                                }
                                </Product.Tbody>
                            </Product.Table>

                        </Product>
                   
            <Product.TotalPrice>Total: ${totalPrice.toFixed(2)}</Product.TotalPrice>
            <Product.Buy>Buy</Product.Buy>
        </Container.Wrapper>
    </Container>
  )
}
