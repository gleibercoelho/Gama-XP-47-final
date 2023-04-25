import { ContainerCard, Content } from "./style";
import { ResponseObject } from "../../Utils/type";

interface ICardProps {
  id: string;
  key: string;
  nome: string;
  preco: string;
  img: string;
  goToUrl: string;
  style: string;
}

export const Card: React.FC<ICardProps> = ({ id, key, nome, preco, img, goToUrl, style }: ICardProps) => {
  return (
    <ContainerCard to={goToUrl} key={key} id={id}  style={style}>
      <Content>
        <img src={img} alt={nome} />
        <h5>{nome}</h5>
        <p>{preco}</p>
      </Content>
    </ContainerCard>
  );
};
