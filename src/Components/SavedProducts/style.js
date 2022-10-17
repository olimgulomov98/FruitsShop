import styled from "styled-components";
import {ReactComponent as heart} from '../../assets/icons/heart.svg'
import {ReactComponent as heartred} from '../../assets/icons/heart-red.svg'
import {ReactComponent as bookmarkwhite} from '../../assets/icons/bookmark-false.svg'
import {ReactComponent as bookmarkblack} from '../../assets/icons/bookmark-true.svg'

const Container = styled.div`
    width: 100%;
    margin: 30px 0px 30px 0px;
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 30px;
    color: #46A358;
`

const Card = styled.div`
    /* width: 300px; */
    padding: 20px;
    border: 1px solid #999999;
    border-radius: 30px;
    transition: all .3s ease-in-out;
    position: relative;
  
    :hover {
        transform: scale(0.97);
    }
`

Card.ImageWrapper = styled.div`
    width: 100%;
    height: 120px;
    overflow: hidden;
    background: #777;
`

Card.Img = styled.img`
    width: 100%;
    height: 100%;
`

Card.Title = styled.h4`
    padding: 0;
    margin: 0;
    margin-top: 10px;
    font-size: 18px;
`

Card.Price = styled.h5`
    padding: 0;
    font-size: 14px;
    margin: 10px 0px;
    color: #46A358;
    font-weight: 700;

`

Card.PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

Card.OriginalPrice = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #A5A5A5;
    text-decoration: line-through;
`

Card.Discount = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 15px;
    background: #46A358;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
    color: #FFFFFF;
`

export {Container, Title, Card}