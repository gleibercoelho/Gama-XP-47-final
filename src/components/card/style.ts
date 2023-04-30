import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCard = styled(Link)`
display: flex;

    width: 16.875rem;
    height: 9.375rem;    
    text-decoration: none;
    background: linear-gradient(90deg, rgba(255,255,255,0.5) 10%, rgba(184,181,181,0.6) 40%);
    background: green;
    border-radius: 1.25rem;    
    margin: .625rem;
    
    
        
    
    &:hover {
       transform: scale(1.1)
    }
`;

export const Clearfix = styled.div`
clear: both;
`;

export const Content = styled.div`
font-family: "roboto", sans-serif;
display: flex;
flex-direction: row;
align-items: center;


    h5 {
        font-weight: 700;
        font-size: 1.25rem;
        position: relative; 
        color: white;
        z-index: 1;
        bottom: 7.5rem;
        left: 3.125rem;
        pointer-events: none;
        cursor: default; 
        -webkit-text-stroke: .0063rem black;
        
    }

    p {
        
        font-weight: 700;
        font-size: 1rem;
        position: relative;
        color: black;
        z-index: 1;
        left: 8.125rem;
        bottom: 2.5rem;
        pointer-events: none; 
        cursor: default;   
        -webkit-text-stroke: .0063rem white;    
    }

    img{
        width: 8.75rem;
        height: 9.375rem;        
        object-fit: contain;
        z-index: 0;
        position: relative;
        top: 1.5625rem;
        left: 40px;
        pointer-events: none;
        cursor: default;
    }
`;

  