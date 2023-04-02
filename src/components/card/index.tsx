import { ContainerCard, Content } from "./style";
import { ResponseObject } from "../../Utils/type";
import keyboard from "../../assets/images/keyboard.png"

interface ICardProps {
    id: number;
    title: string;
    description: string;
    goToUrl: string;
  }



export const Card: React.FC<ICardProps> = ({title, description, goToUrl}: ICardProps) => {
    return (
       <ContainerCard to={goToUrl}>
        <Content>
        <img src={keyboard} alt="" />
            <h5>{title}</h5>
            <p>{description}</p>
            
        </Content>        
       </ContainerCard>
    )
}