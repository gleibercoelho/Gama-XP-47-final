import styled from "styled-components"
interface IBannerNUmProps {
    backgroundColor: string;
}

export const BannerUmDiv = styled.div<IBannerNUmProps>`
background: rgb(220,221,221);
background-color: ${(props) => props.backgroundColor};
height: 290px;
border-radius: 20px;
margin: 20px;
overflow: hidden;
font-family: "roboto", sans-serif;
padding-left: 8%;


h3{
    font-weight: 400;
    font-size: 25px;
    padding: 0;
    margin: 0;
}
h2{
    font-weight: 500;
    font-size: 65px;
    padding: 0;
    margin: 0;
}

h1{
    font-weight: 800;
    font-size: 11rem;
    color: #fff;
    padding: 0;
    margin: 0;
}

img{
    max-width: 25rem;
    max-height: 25rem;
    position: relative;
    left: 37%;
    top: -130%;
    z-index: 1;
    object-fit: contain;
    
    
}

`