import styled from 'styled-components';

interface ICardBoxDoisProps {
    backgroundColor: string;
    

}

export const CardBoxDois = styled.div<ICardBoxDoisProps>`

background: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(184,181,181,0.1) 60%);
background-color: ${(props) => props.backgroundColor};
width: 40vw;
height: 10.625rem;
margin: .625rem;
border-radius:1.25rem;
padding-left: 1.25rem;
padding-top: 1.875rem;
overflow: hidden;
font-family: "roboto", sans-serif;
z-index:1;



h3{
    font-weight: 400;
    font-size: .9375rem;
    padding: 0;
    margin: 0;
}
h2{
    font-weight: 500;
    font-size: 2.1875rem;
    padding: 0;
    margin: 0;
}

h1{
    font-weight: 800;
    font-size: 3.125rem;
    color: #fff;
    padding: 0;
    margin: 0;
    position: relative;
    z-index: 2;
}
img{
 width: 21.875rem;
 height: 13.75rem;
 position: relative;
    right: -23%;
    top: -135%;
    z-index: 1;
}

@media screen and (max-width: 768px) and (max-width: 1200px) {
    width: 100%;
    max-width: 47rem;
    height: 8.125rem;
    margin: 0.5rem auto;
    padding-left: 1rem;
    padding-top: 1.25rem;

    h2 {
      font-size: 1.875rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    img {
      width: 17.75rem;
      height: 11.875rem;
      right: -16%;
      top: -155%;
    }
  }

`