import styled from "styled-components";

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
    width: 100%;
    padding: 20px;
    border: 1px solid #999999;
    border-radius: 30px;
    transition: all .3s ease-in-out;
    position: relative;

    @media (max-width: 530px) {
        padding: 10px;
    }

    :hover {
        transform: scale(0.97);
    }
`

Card.ImageWrapper = styled.div`
    width: 100%;
    height: 100px;
    overflow: hidden;
    background: #777;

    @media (max-width: 530px) {
        height: 80px;
    }
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

    @media (max-width: 530px) {
        font-size: 14px;
    }
    @media (max-width: 390px) {
        font-size: 11px;
    }
`

Card.Price = styled.h5`
    padding: 0;
    font-size: 14px;
    margin: 10px 0px;
    color: #46A358;
    font-weight: 700;

    @media (max-width: 530px) {
        font-size: 12px;
    }
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

    @media (max-width: 430px) {
        font-size: 12px;
        line-height: 15px;
    }
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
    
    @media (max-width: 530px) {
        width: 35px;
        height: 10px;
        font-size: 7px;
        line-height: 8px;
        top: 15px;
        left: 10px;
    }
`

export {Container, Title, Card}