import React, { useContext } from 'react'
import { FlowerContext } from '../../context/Flowers'
import {Container, Title, Wrapper, Card} from './style'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

export const SavedProducts = () => {
    const [state, dispatch] = useContext(FlowerContext)
    
  return (
    <Container>
        {
            state.savedProducts.length > 0 ? <Title>Products you saved</Title> : <div></div>
        }
        
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            
            {
                state.savedProducts.map((value) => {
                    return(
                        <SwiperSlide>
                                    
                            <Card key={value.id}>
                                {
                                    value.discount && <Card.Discount>{value.discount}% OFF</Card.Discount>
                                }

                                <Card.ImageWrapper>
                                    <Card.Img src={value.img} />
                                </Card.ImageWrapper>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.PriceWrapper>
                                    <Card.Price>$
                                        {
                                            value.discount === null ? value.price : value.price - (value.discount / 100 * value.price)  
                                        }
                                    </Card.Price>
                                        {
                                            value.discount && <Card.OriginalPrice>${value.price}</Card.OriginalPrice>
                                        }    
                                </Card.PriceWrapper>
                            </Card>
                        </SwiperSlide>
                    )
                        
                })
            }   
        </Swiper>
    </Container>
  )
}