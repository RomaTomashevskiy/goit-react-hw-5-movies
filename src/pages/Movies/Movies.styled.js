import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Item = styled.li`
    list-style:none;
    :not(:last-child){
        margin-bottom: 10px;
    }
`;

export const Link = styled(NavLink)`
    font-size: 20px; 
    font-weight: bold; 
    margin: 0 0 24px;

`;