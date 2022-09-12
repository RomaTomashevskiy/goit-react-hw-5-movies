import  styled  from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
display: flex;
margin-left :100px;
`;


export const Link = styled(NavLink)`
    padding: 15px;
    color: black;
    list-style: none;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.16;
    line-height: 1.14;
    letter-spacing: 0.09em;
    transition-duration: 250ms;
    cursor: pointer;

      &.active {
    color: white;
    background-color: orangered;
  }

  &:not(:last-child) {
     margin-right: 50px;
 }

  &:hover{  
    color: rgb(156, 3, 3); 
}`;
