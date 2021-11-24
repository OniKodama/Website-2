import styled from "styled-components";

export const Section = styled.section`
    background: #fff;
    height: 785px;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
`;
export const Title = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 43px;
    font-weight: 700;
    line-height: 43px;
    margin: 10px;
    padding-top: 10px;
    
`;
export const Column1 = styled.div` 
    margin-bottom: 15px;
    margin-left: 150px;
    padding: 0 15px;
    grid-area: col1;
    float: left; 
    
`;
export const Column2 = styled.div` 
    margin-bottom: 15px;
    margin-right: 150px;
    padding: 0 15px;
    grid-area: col2;
    float: right; 
    
`;
export const Container = styled.div`
    width: 400px;
    height: 150px;
    background:  #4169E1;
    border-radius: 19px;
    margin: 30px;
    /* box-shadow: 0 0 10px 0.5px; */

    &:hover {
        transition: 0.8s ease;
        box-shadow: 0 0 10px;
        background: #ff4e41;
    }
`;

export const Title1 = styled.p`
    padding: 20px;
    font-size: 25px;
    color: #fff;
`;

export const Desc = styled.p`
    padding: 20px;
    color: gray;
    color: #fff;
`;

export const DescBot = styled.p`
    float: left;
    margin: 20px 20px;
    color: gray;
    font-size: 15px;
`;
export const DescBot1 = styled.p`
    float: left;
    margin: 5px 20px;
    color: gray;
    font-size: 15px;
`;