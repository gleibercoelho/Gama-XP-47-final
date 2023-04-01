import { CardBoxDois } from "./style"

interface ICardDois {
    
        h3: string;
        h2: string;
        h1: string;        
        img: string;
        backgroundColor: string;
        
       
        
    
}

export function CardDois ({h2, h1, h3, img, backgroundColor}: ICardDois) {
    return (
        <CardBoxDois backgroundColor={backgroundColor} >
            
            <h3>{h3}</h3> 
            <h2>{h2}</h2>
            <h1>{h1}</h1>
            <img src={img} alt="" />
            
            </CardBoxDois>
        
        
    )
}