import styled from "styled-components";
import {ReactComponent as heart} from '../../assets/icons/heart.svg'
import {ReactComponent as heartred} from '../../assets/icons/heart-red.svg'
import {ReactComponent as bookmarkwhite} from '../../assets/icons/bookmark-false.svg'
import {ReactComponent as bookmarkblack} from '../../assets/icons/bookmark-true.svg'

const Container = styled.div`
    width: 100%;
    margin: 0px 0px 100px 0px;
    padding: 0px 130px;
    min-height: calc(100vh - 80px);

    @media (max-width: 1600px) {
        padding: 0px 80px;
    }

    @media (max-width: 1500px) {
        padding: 0px 50px;
    }

    @media (max-width: 1000px) {
        padding: 0px 70px;
    }
    @media (max-width: 700px) {
        padding: 0px 130px;
    }

    @media (max-width: 600px) {
        padding: 0px 80px;
    }
    @media (max-width: 500px) {
        padding: 0px 50px;
    }
    @media (max-width: 400px) {
        padding: 0px 30px;
    }
    @media (max-width: 330px) {
        padding: 0px 20px;
    }
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 30px;
    color: #46A358;
`

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
    box-sizing: border-box;
    @media (max-width: 1600px) {
        grid-gap: 30px;
    }

    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 25px;
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 35px;
    }
    @media (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 35px;
    }
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

Card.HeartIconWrapper = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

Card.Heart = styled(heart)`
    width: 20px;
    height: 20px;
`

Card.HeartRed = styled(heartred)`
    width: 24px;
    height: 24px;
`

Card.BookmarkWhite = styled(bookmarkwhite)`
    width: 25px;
    height: 25px;
`

Card.BookmarkBlack = styled(bookmarkblack)`
    width: 25px;
    height: 25px;
`

Card.ImageWrapper = styled.div`
    width: 100%;
    height: 300px;
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
    font-size: 24px;
`

Card.Price = styled.h5`
    padding: 0;
    font-size: 20px;
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
    font-size: 18px;
    line-height: 16px;
    color: #A5A5A5;
    text-decoration: line-through;
`

Card.Button = styled.button`
    width: 100%;
    height: 40px;
    background: #46A358;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border: none;
    font-weight: 700;
    transition: transform .3s ease-in-out;
    border-radius: 10px;

    :active {
        background: #fff;
        color:#111;
    }
`

Card.Discount = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 29px;
    background: #46A358;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
`

export {Container, Title, Wrapper, Card}