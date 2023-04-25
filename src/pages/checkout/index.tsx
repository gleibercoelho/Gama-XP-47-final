import { Header } from "../../components/header";
import Footer from "../../components/footer";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CheckouDiv, CheckoutPage } from "./style";

interface Pedido {
    id: number;
    usuario_id: number;
    valor: number;
    cupom: string | null;
    createdAt: string;
    updatedAt: string;
    Produtos: Produto[];
}

interface Produto {
    id: number;
    nome: string;
    foto: string;
    preco: number;
    descricao: string;
    categoria: number;
    createdAt: string;
    updatedAt: string;
    DetalhesPedido: DetalhesPedido;
}

interface DetalhesPedido {
    pedido_id: number;
    produto_id: number;
    quantidade: number;
    createdAt: string;
    updatedAt: string;
}

export default function CheckOut() {

    const location = useLocation();
    const pedidoId = new URLSearchParams(location.search).get("id");
    const token = useSelector((state: any) => state.user.token || '');

    const [order, setOrder] = useState<Pedido | null>(null);

    useEffect(() => {
        async function fetchOrderData() {
            try {
                const response = await fetch(`http://localhost:3000/pedidos/${pedidoId}`, {
                    headers: {
                        "Content-Type": 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch order data");
                }
                const data = await response.json();
                setOrder(data);
            } catch (error) {
                console.log(error);
            }
        }

        if (pedidoId) {
            fetchOrderData();
        }
    }, [pedidoId]);

    // render the checkout page with order data
    return (
        <CheckoutPage>
            <Header />
            <CheckouDiv>
                {order ? (
                    <div className="title">
                        <h2>Detalhes do pedido</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Pedido ID</th>
                                    <th>Cliente ID</th>
                                    <th>Total do pedido</th>
                                    <th>Data da Compra</th>
                                    <th>Produtos</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{order.id}</td>
                                    <td>{order.usuario_id}</td>
                                    <td>R${order.valor}.00  </td>
                                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Nome do Produto</th>
                                                    <th>Quantidade</th>
                                                    <th>Foto</th>
                                                    <th>Preço Unitário</th>
                                                    <th>Preço Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {order.Produtos.map((produto) => (
                                                    <tr key={produto.id}>
                                                        <td>{produto.nome}</td>
                                                        <td>{produto.DetalhesPedido.quantidade}</td>
                                                        <td>
                                                            <img src={produto.foto} alt={produto.nome} />
                                                        </td>
                                                        <td>R${produto.preco}.00</td>
                                                        <td>R${produto.preco * produto.DetalhesPedido.quantidade}.00</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </CheckouDiv>
            <div className="botoes">
            <NavLink to="/user"> <button>perfil</button> </NavLink>
                <NavLink to="/"> <button>Voltar para loja</button> </NavLink>
                
            </div>
            <Footer />
        </CheckoutPage>
    );
}
