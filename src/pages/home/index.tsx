import { ContainerHome, ContentBanner, ContentCards, Footer, Um } from "./style"
import { Header } from "../../components/header";
import headphone from "../../assets/images/headphone.png";
import { CardUm } from "../../components/cardUm";
import earphone from "../../assets/images/earphone.png"
import smartwatch from "../../assets/images/smartwatch.png"
import laptop from "../../assets/images/laptop.png"
import console from "../../assets/images/console.png"
import oculus from "../../assets/images/oculus.png"
import speaker from "../../assets/images/speaker.png"
export function Home() {

    return (
        <>
            <Header />
            <ContainerHome>
                <ContentBanner>
                    <h3>Beats Solo</h3>
                    <h2>wireless</h2>
                    <h1>HEADPHONE</h1>
                    <img src={headphone} alt="" />
                </ContentBanner>
                <ContentCards>
                   
                    
                    <CardUm backgroundColor="red" minWidth="20vw" h3="Enjoy" img={earphone} h2="with" h1="Earphone" /> 
                    <CardUm backgroundColor="yellow" minWidth="20vw"  h3="Now" img={smartwatch} h2="Wear" h1="Gadget" /> 
                    <CardUm backgroundColor="green" minWidth="40vw"  h3="Trend" img={laptop} h2="Devices" h1="Laptop" /> 
                    <CardUm backgroundColor="blue" minWidth="40vw"  h3="Bost" img={console} h2="Gaming" h1="Console" /> 
                    <CardUm backgroundColor="orange" minWidth="20vw"  h3="Play" img={oculus} h2="Game" h1="Oculus" /> 
                    <CardUm backgroundColor="grey" minWidth="20vw"  h3="Now" img={speaker} h2="Amazing" h1="Speaker" /> 
                   
                    </ContentCards>
                <Footer></Footer>
            </ContainerHome>
        </>
    )
}