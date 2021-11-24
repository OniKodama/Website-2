import styled from 'styled-components/macro'

export const Section = styled.section`
    background: #f9f9f9;
    height: 785px;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
    flex-direction: column;
`;

export const Title = styled.h1`
    display: flex;
    text-align: center;
    font-size: 43px;
    margin-bottom: 75px;
    padding: 20px 0;
    line-height: 43px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    background: #4169E1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    margin: 20px;
    padding: 10px 65px;
    position: relative;
    z-index: 10;
    border-radius: 50px;

    &:hover {
        transition: 0.8s ease;
        box-shadow: 0 0 10px;
        background: #ff4e41;
    }
`;

export const Title1 = styled.p`
    color: white;
    float: left;
    

`;
export const Desc = styled.p`
    color: white;
`;
