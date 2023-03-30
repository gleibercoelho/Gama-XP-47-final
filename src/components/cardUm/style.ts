import styled from 'styled-components';

interface ICardBoxProps {
    backgroundColor: string;
    minWidth: string

}

export const CardBox = styled.div<ICardBoxProps>`

background-color: ${(props) => props.backgroundColor};
min-width: ${(props) => props.minWidth};
height: 30vh;
margin: 20px;
border-radius:20px;

padding-left: 20px;
padding-top: 30px;
overflow: hidden;
font-family: "roboto", sans-serif;



h3{
    font-weight: 400;
    font-size: 15px;
    padding: 0;
    margin: 0;
}
h2{
    font-weight: 500;
    font-size: 35px;
    padding: 0;
    margin: 0;
}

h1{
    font-weight: 800;
    font-size: 50px;
    color: #fff;
    padding: 0;
    margin: 0;
}
img{
 width: 170px;
 height: 170px;
 position: relative;
    right: -45%;
    top: -100%;
    z-index: 1;
}


`