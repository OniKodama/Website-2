import styled from 'styled-components/macro'
import LgImg from '../../images/WebullLogo.png'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    z-index: 20;
    background: #fff;
`;
export const NavbarWrap = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    z-index: 20;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;
export const Logo = styled.img`
    width: 128px;
    height: 50px;
    background: url (${LgImg}) 0 45% no-repeat;
    background-size: 100% 100;
    cursor: pointer;
`;
export const Nav = styled.nav`
    flex: 1;
    position: relative;
    padding-left: 50px;
`;
export const NavLink = styled(Link)`
    color: #000;
    padding: 0 15px;
    font-size: 16px;
    line-weight: 80px;
    font-weight: 700;
    text-decoration: none;

    &:hover {
        transition: 0.8s ease;
        color: blue;
    }
`;
export const Search = styled.div`
    right: 235px;
    position: absolute;
`;
export const SearchWrap = styled.div`
    width: 220px;
    height: 36px;
    position: relative;
    box-sizing: border-box;
    background: rgba(179, 191, 201, 0.15);
    line-height: 33px;
    padding-left: 37px;
    border-radius: 19px;
`;
export const Input = styled.input`
    color: black;
    width: 196px;
    border: transparent;
    font-size: 12px;
    background: transparent;
    outline: none;

    &::placeholder {
        color: #d1d8de;
    } 
`;
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const Button = styled.div`
    width: 110px;
    color: #fff;
    cursor: pointer;
    height: 36px;
    font-size: 16px;
    box-sizing: border-box; 
    background: #007cff;
    text-align: center;
    line-height: 36px;
    border-radius: 21px; 

    &:hover {
        transition: 0.8s ease;
        color: blue;
    }
`;