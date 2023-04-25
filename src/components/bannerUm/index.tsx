import { BannerUmDiv } from "./style"

interface IBannerNUmProps {
    h3: string;
    h2: string;
    h1: string;
    img: string;
    backgroundColor: string;
    
  }

export const BannerNUm: React.FC<IBannerNUmProps> = ({ h3, h2, h1, img, backgroundColor}: IBannerNUmProps) =>{

    return (
        <BannerUmDiv backgroundColor={backgroundColor}>
            <h3>{h3}</h3>
            <h2>{h2}</h2>
            <h1>{h1}</h1>
            <img src={img} alt="" />
        </BannerUmDiv>)

}