import styled from 'styled-components'




export const ContainerHome = styled.div`
 

`
export const ContentBanner = styled.div`
background: rgb(220,221,221);
background: linear-gradient(90deg, rgba(220,221,221,1) 0%, rgba(184,181,181,0.8465511204481793) 50%);
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
    
    
}

`
export const ContentCards = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`
export const Footer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-around;
div{
    
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    h1{
        font-weight: 700;
        font-size: 50px;
        margin-top: 50px;
    }
    span{
        font-weight: 500;
        font-size: 30px;
        margin-bottom: 50px;
        text-align: center;
    }
}
section{
    display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
}

`

export const Um = styled.div`
background-color: blue;

h3{
    font-size: 40px;
    color: black;
}
`
        
