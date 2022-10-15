import React, { useContext } from 'react'
import {FlowerContext} from '../../context/Flowers'
import { Card, Container, Title, Wrapper } from './style'

export const Products = () => {

    const [state, dispatch] = useContext(FlowerContext)

    
  return (
    <Container>
        <Title>Products</Title>
        <Wrapper>
                {
                    state.data.map((value) => {
                        return(
                            <Card key={value.id}>
                                {
                                    value.discount && <Card.Discount>{value.discount}% OFF</Card.Discount>
                                }
                                
                                <Card.HeartIconWrapper>
                                    {
                                        value.like ? <Card.HeartRed /> : <Card.Heart onClick={() => dispatch({type: 'heart', payload: {id: value.id}})} />
                                    }
                                    
                                    
                                </Card.HeartIconWrapper>
                                <Card.ImageWrapper>
                                    <Card.Img src={value.img} />
                                </Card.ImageWrapper>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.PriceWrapper>
                                    <Card.Price>${
                                        value.discount === null ? value.price : value.price - (value.discount / 100 * value.price)  
                                    }</Card.Price>
                                    {
                                        value.discount && <Card.OriginalPrice>${value.price}</Card.OriginalPrice>
                                    }
                                    
                                </Card.PriceWrapper>
                                <Card.Footer>
                                    {
                                        value.addtocart ? <Card.Button onClick={() => dispatch({type:'cancel', payload: {id: value.id}})} >Cancel</Card.Button> : <Card.Button onClick={() => dispatch({type:'add', payload: {id: value.id}})}>Add To Card</Card.Button>
                                    }
                                    
                                     
                                    <Card.BookmarkWhite />
                                    {/* <Card.BookmarkBlack /> */}
                                </Card.Footer>
                            </Card>
                        )
                    
                    })
                }

        </Wrapper>
    </Container>
  )
}
