import { CardBox } from "./style"

interface ICardUm {
    
        h3: string;
        h2: string;
        h1: string;        
        img: string;
        backgroundColor: string;
        minWidth: string;
       
        
    
}

export function CardUm ({h2, h1, h3, img, backgroundColor, minWidth}: ICardUm) {
    return (
        <CardBox backgroundColor={backgroundColor} minWidth={minWidth} >
            
            <h3>{h3}</h3> 
            <h2>{h2}</h2>
            <h1>{h1}</h1>
            <img src={img} alt="" />
            
            </CardBox>
        
        
    )
}