import styled from 'styled-components'
import BgImg from '../../images/bg-image-2.png';


export const Section = styled.section`
    background-image: url(${BgImg}); 
    height: 785px;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
`;
export const Content = styled.div`
    width: 100%;
    height: 100px;
`;
export const Left = styled.div`
    padding-left: 220px;
    height: 100px;
`;
export const Title = styled.h1`
    font-size: 35px;
    color: #04050a;
    font-weight: 400;
    
`;
export const Desc = styled.p`
    width: 472px;
    font-size: 20px;
    color: black;
    line-height: 30px;
    margin-top: 58px;
`;
export const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    margin-top: 58px;
    width: 371px;
    height: 71px;
    line-height: 71px;
    font-size: 22px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    background: #0546d6;
    text-decoration: none;
    

    &:hover {
        transition: 0.8s ease;
        box-shadow: 0 15px 14px rgb(0 42 177 / 20%);
    }
        
`;