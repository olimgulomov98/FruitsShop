import React, { useContext } from 'react'
import { FlowerContext } from '../../context/Flowers'
import {Container, Title, Wrapper, Card} from './style'

export const SavedProducts = () => {
    const [state, dispatch] = useContext(FlowerContext)
    
  return (
    <Container>
        <Title>Products you saved</Title>
        <Wrapper>
                {
                    state.savedProducts.map((value) => {
                        return(
                            <Card key={value.id}>
                                {
                                    value.discount && <Card.Discount>{value.discount}% OFF</Card.Discount>
                                }

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
                            </Card>
                        )
                    
                    })
                }

        </Wrapper>
    </Container>
  )
}