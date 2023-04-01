import { ArrowCircleRight } from "@phosphor-icons/react";
import { ContainerCard, Content } from "./style";
import { ResponseObject } from "../../Utils/type";

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
            <h5>{title}</h5>
            <p>{description}</p>
        </Content>
        <ArrowCircleRight size={25} color="#134e87" />
       </ContainerCard>
    )
}