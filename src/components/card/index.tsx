import { ContainerCard, Content } from "./style";
import { ResponseObject } from "../../Utils/type";

interface ICardProps {
  id: string;
  nome: string;
  preco: string;
  img: string;
  goToUrl: string;
}

export const Card: React.FC<ICardProps> = ({ id, nome, preco, img, goToUrl }: ICardProps) => {
  return (
    <ContainerCard to={goToUrl} id={id}>
      <Content>
        <img src={img} alt={nome} />
        <h5>{nome}</h5>
        <p>{preco}</p>
      </Content>
    </ContainerCard>
  );
};
