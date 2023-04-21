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
    overflow: hidden;
    
        
    
    &:hover {
        box-shadow: 1px 5px 29px -13px rgba(37, 190, 68, 0.5);
    }
`;

export const Content = styled.div`
font-family: "roboto", sans-serif;
display: flex;
flex-direction: column;
text-shadow: {
               -1px -1px 0px #FFF, 
               -1px 1px 0px #FFF,                    
                1px -1px 0px #FFF,                  
                1px 0px 0px #FFF;
}

    h5 {
        font-weight: 700;
        font-size: 1.25rem;
        alig        
        color: white;
        position: relative;
        left: 40px;
        top: -40px;
    }
    p {
        font-weight: 700;
        font-size: 1rem;
        color: #fff;
        position: relative;
        left: 150px;
        top: -60px;
        
    }
    img{
        width: 140px;
        position: relative;
        left: 50px;
        top: 30px;
    }
`;