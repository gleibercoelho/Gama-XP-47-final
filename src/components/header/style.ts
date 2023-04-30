import styled from 'styled-components';



export const HeaderBox = styled.div`
display: flex;
flex-direction: row;
width: 100wh;
font-family: "roboto", sans-serif;
justify-content: space-evenly;
img{
    width: 3.75rem;
    object-fit: contain;
}
a{
   display:flex;
        flex-direction: row;
   text-decoration: none;
   cursor: pointer;
   
}
 ul{
    display: flex;
    flex-direction: row;    
    width: 80vw; 
    padding: 0;
    font-size: 1.5625rem;
    font-weight: 700;
    color: var(--grey-600);
    padding-top: .75rem; 
    

    li{
    width: 100%;
    list-style: none;
    cursor: pointer;
    display:flex;
        flex-direction: row;
        color:rgb(85, 26, 193);
    
    
 }
 li.nome{
   cursor: default;
 }
 }
 h2{
    padding: 0;
    padding-right: .9375rem;
    margin: 0; 
    font-size: 1.5625rem;
    font-weight: 700;
    color: var(--grey-600);
    padding-top: .75rem; 
 }

`