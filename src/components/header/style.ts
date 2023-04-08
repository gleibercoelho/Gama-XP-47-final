import styled from 'styled-components';



export const HeaderBox = styled.div`
display: flex;
flex-direction: row;
width: 100wh;
font-family: "roboto", sans-serif;
justify-content: space-between;
img{
    width: 60px;
}
a{
   text-decoration: none;
   cursor: pointer;
   
}
 ul{
    display: flex;
    flex-direction: row;    
    width: 80vw; 
    padding: 0;
    font-size: 25px;
    font-weight: 700;
    color: var(--grey-600);
    padding-top: 12px; 
    

    li{
    width: 100%;
    list-style: none;
    
    
 }
 }
 h2{
    padding: 0;
    padding-right: 15px;
    margin: 0; 
    font-size: 25px;
    font-weight: 700;
    color: var(--grey-600);
    padding-top: 12px; 
 }

`