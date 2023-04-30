import styled from 'styled-components'




export const ContainerHome = styled.div`
 

`
export const ContentBanner = styled.div`
background: rgb(220,221,221);
background: linear-gradient(90deg, rgba(220,221,221,1) 0%, rgba(184,181,181,0.8465511204481793) 50%);
height: 18.125rem;
border-radius: 1.25rem;
margin: 1.25rem;
overflow: hidden;
font-family: "roboto", sans-serif;


h3{
    font-weight: 400;
    font-size: 1.5625rem;
    padding: 0;
    margin: 0;
}
h2{
    font-weight: 500;
    font-size: 4.0625rem;
    padding: 0;
    margin: 0;
}

h1{
    font-weight: 800;
    font-size: 12.5rem;
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

@media only screen and (min-width: 769px) and (max-width: 1200px) {
    padding-left: 5%;
  
  h1{
      font-size: 7.5rem;
    }

    h3{
      margin-top: 1.875rem
    }
    img {
      max-width: 20rem;
      max-height: 20rem;
      left: 25%;
      top: -80%;
    }
  }
    @media only screen and (max-width: 768px){
    padding-left: 0;
    text-align: flex-start;

    h1 {
      font-size: 3.5rem;
    }

    img {
      max-width: 15rem;
      max-height: 15rem;
      left: 25%;
      top: -50%;
    }
  }

`
export const ContentCards = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`
export const Vitrine = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-around;
div.loading{
    align-items: center;
    margin: 3.125rem;
}
div{
    
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    h1{
        font-weight: 700;
        font-size: 3.125rem;
        margin-top: 3.125rem;
        text-align: center;
    }
    span{
        font-weight: 500;
        font-size: 1.875rem;
        margin-bottom: 3.125rem;
        text-align: center;
    }
}
section{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 1.25rem;

}

`

export const Um = styled.div`
background-color: blue;

h3{
    font-size: 2.5rem;
    color: black;
}

@media (max-width: 768px) {
  div.footerHome {
    margin-top: 3.125rem;
  }
}

`
        
