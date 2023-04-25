import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCard = styled(Link)`
display: flex;

    width: 270px;
    height: 150px;    
    text-decoration: none;
    background: linear-gradient(90deg, rgba(255,255,255,0.5) 10%, rgba(184,181,181,0.6) 40%);
    background: green;
    border-radius: 20px;    
    margin: 10px;
    
    
        
    
    &:hover {
       
    }
`;

export const Content = styled.div`
font-family: "roboto", sans-serif;
display: flex;
flex-direction: row;
align-items: center;


    h5 {
        font-weight: 700;
        font-size: 1.25rem; 
        color: white;
        z-index: 1;
        margin-bottom: 100px;

        
        
    }
    p {
        font-weight: 700;
        font-size: 1rem;
        color: #fff;
        z-index: 1;
        margin-left: 160px;
        margin-bottom: 150px;
        
        
        
    }
    img{
        width: 140px;
        height: 150px;        
        object-fit: contain;
        z-index: 0;
        position: relative;
        top: 150px;
    }
`;