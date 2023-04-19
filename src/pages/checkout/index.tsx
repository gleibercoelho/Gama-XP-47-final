import { Header } from "../../components/header";
import Footer from "../../components/footer";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

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
        <>
        <Header/>
        <div>
        {order ? (
            <div>
                <h2>Order Details</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer ID</th>
                            <th>Total amount</th>
                            <th>Order date</th>
                            <th>Products</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{order.id}</td>
                            <td>{order.usuario_id}</td>
                            <td>{order.valor}</td>
                            <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                            <td>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product name</th>
                                            <th>Quantity</th>
                                            <th>Photo</th>
                                            <th>Unit price</th>
                                            <th>Total price</th>
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
                                                <td>{produto.preco}</td>
                                                <td>{produto.preco * produto.DetalhesPedido.quantidade}</td>
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
    </div>
    <div>
       <NavLink to="/"> <button>Voltar para loja</button> </NavLink>
       <NavLink to="/user"> <button>perfil</button> </NavLink>
    </div>
    <Footer/>
    </>
    );
}
