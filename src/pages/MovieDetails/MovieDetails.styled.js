import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Box = styled.div`
margin-top:20px;
display: flex;

`;


export const Title = styled.h1`
 
    font-size: 50px;
    line-height: 50px;
    font-style: normal;
    color: #000000;
    font-weight: 700;

`;


export const Data = styled.span`
    margin-left:15px;
    color: #000000;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    font-style: normal;
`; 


export const UserScore = styled.p`

    color: #000000;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    font-style: normal;
`;





export const OverviewTitle = styled.h1`
    display:inline-block;

    font-size: 40px;
    line-height: 40px;
    font-style: normal;
    color: #000000;
    text-align: center;
    font-weight: 700;

`;

export const Overview = styled.p`

`;

export const BoxOverview = styled.div`
    margin-left:40px;
`; 

export const GenresList = styled.ul`
    display: flex;
`;

export const Item = styled.li`
 
list-style: none;

:not(:last-child){
     margin-right:15px;
}
`;



export const Information = styled(NavLink)`
    display:inline-block;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    padding:5px;
    display:block;
`;