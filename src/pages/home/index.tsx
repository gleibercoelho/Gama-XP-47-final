import { ContainerHome, ContentBanner, ContentCards, Um, Vitrine } from "./style"
import { Header } from "../../components/header";
import headphone from "../../assets/images/headphone.png";
import { CardUm } from "../../components/cardUm";
import { CardDois } from "../../components/cardDois";
import earphone from "../../assets/images/earphone.png"
import smartwatch from "../../assets/images/smartwatch.png"
import laptop from "../../assets/images/laptop.png"
import console from "../../assets/images/console.png"
import oculus from "../../assets/images/oculus.png"
import speaker from "../../assets/images/speaker.png"
import { Card } from "../../components/card";
import { useEffect, useState } from "react";
import { ResponseObject } from "../../Utils/type";
import Footer from "../../components/footer";



export function Home() {

    const [responseArray, setResponseArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("http://localhost:3000/produtos");
                const data = await response.json();
                setResponseArray(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setErrorMessage(`Error: falha ao carregar os dados`);
                console.error(new Error(`Error: ${error.message}`));
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div className="loading"><h2>Loading...</h2></div>;
    }

    if (console && console.error) {
        console.error(new Error(`Error: ${error.message}`));
    }

    const colors = ["rgb(37, 190, 68)", "red", "orange", "#f5de0c", "pink", "blue"];


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
                <ContentCards  >
                    <CardDois backgroundColor="rgb(37, 190, 68)" h3="Trend" img={laptop} h2="Devices" h1="Macbook" />
                    <CardUm backgroundColor="red" h3="Now" img={smartwatch} h2="Wear" h1="Gadget" />
                    <CardUm backgroundColor="orange" h3="Play" img={oculus} h2="Game" h1="Oculus" />
                    <CardUm backgroundColor="#f5de0c" h3="Enjoy" img={earphone} h2="with" h1="Earphone" />
                    <CardUm backgroundColor="pink" h3="Now" img={speaker} h2="Amazing" h1="Speaker" />
                    <CardDois backgroundColor="blue" h3="Best" img={console} h2="Gaming" h1="Console" />

                </ContentCards>
                <Vitrine>
                    <div>
                        <h1>BEST SELLER PRODUCTS</h1>
                        <span>BUY IT NOW</span>
                    </div>
                    {isLoading ? (
                        <div className="loading"><h2>Loading products...</h2></div>
                    ) : errorMessage ? (
                        <div className="loading"><h2>{errorMessage}</h2></div>
                    ) : (
                        <section>
                            {responseArray.slice(0, 8).map((item: ResponseObject) => (
                                <Card
                                    key={item.id}
                                    style={{
                                        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                                    }}
                                    id={item.id}
                                    nome={item.nome}
                                    preco={`R$ ${item.preco}.00 `}
                                    goToUrl={`/products/${item.id}`}
                                    img={item.foto}
                                />
                            ))}
                        </section>
                    )}
                </Vitrine>
                <Footer className="footerHome" />
            </ContainerHome>
        </>
    )
}