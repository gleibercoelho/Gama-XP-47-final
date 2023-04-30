import styled from 'styled-components';

interface ICardBoxProps {
    backgroundColor: string;
    

}

export const CardBox = styled.div<ICardBoxProps>`

background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(184,181,181,0.1) 60%);
background-color: ${(props) => props.backgroundColor};
width: 25vw;
height: 10.625rem;
margin: .625rem;
border-radius:1.25rem;
padding-left: 1.25rem;
padding-top: 1.875rem;
overflow: hidden;
font-family: "roboto", sans-serif;



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
 width: 10.625rem;
 height: 10.625rem;
 position: relative;
    right: -45%;
    top: -100%;
    z-index: 1;
}

@media (max-width: 768px) {
        width: 100%;
        height: 8.125rem;
        margin: 0.3125rem;
        padding-left: 0.625rem;
        padding-top: 1.25rem;

        h3 {
            font-size: 0.75rem;
        }

        h2 {
            font-size: 1.5625rem;
        }

        h1 {
            font-size: 2.5rem;
        }

        img {
            width: 8.125rem;
            height: 8.125rem;
            right: -40%;
            top: -90%;
        }
    }

    @media (max-width: 1200px) {
        width: 20vw;
        height: 12.5rem;
        margin: 1rem;
        padding-left: 1.875rem;
        padding-top: 2.5rem;

        h3 {
            font-size: 1rem;
        }

        h2 {
            font-size: 2.5rem;
        }

        h1 {
            font-size: 4.0625rem;
        }

        img {
            width: 12.5rem;
            height: 12.5rem;
            right: -35%;
            top: -110%;
        }
    }

`