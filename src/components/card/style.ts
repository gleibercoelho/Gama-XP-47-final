import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCard = styled(Link)`
display: flex;

    width: 270px;
    height: 150px;    
    text-decoration: none;
    background: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(184,181,181,0.1) 60%);
    background: grey;
    border-radius: 20px;    
    margin: 10px;
    
    
        
    
    &:hover {
        box-shadow: 1px 5px 29px -13px rgba(37, 190, 68, 0.5);
    }
`;

export const Content = styled.div`
font-family: "roboto", sans-serif;
display: flex;
flex-direction: column;

    h5 {
        font-weight: 700;
        font-size: 1.25rem;        
        color: black;
        position: relative;
left: 40px;
top: -80px;
    }
    p {
        font-weight: 700;
        font-size: 1rem;
        color: #fff;
        position: relative;
left: 150px;
top: -100px;
        
    }
    img{
        width: 200px;        
        position: relative;
        left: 15%;
        top: -40px;
    }
`;