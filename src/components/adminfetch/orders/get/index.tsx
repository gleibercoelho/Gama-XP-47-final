import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PedidosTable } from "./style";
import { api } from "../../../../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


interface Order {
    id: number;
    usuario_id: number;
    valor: number;
    createdAt: string;
    Produtos: {
      id: number;
      nome: string;
      foto: string;
      preco: number;
      DetalhesPedido: {
        quantidade: number;
      };
    }[];
  }
  


function OrderList() {
    
    const [orders, setOrders] = useState<Order[]>([]);
    const token = useSelector((state: any) => state.user.token || '');
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://localhost:3000/pedidos", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            }
        })
            .then((response) => response.json())
            .then((data) => setOrders(data))
            .catch((error) => console.log(error));
    }, []);


    const handleDelete = async (orderId) => {
        const confirmed = confirm('Are you sure you want to delete this product? This action cannot be undone.');
        if (confirmed) {
            try {
                await api.delete(`http://localhost:3000/pedidos/${orderId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    }
                });
                setOrders(orders.filter((order) => order.id !== orderId));
            } catch (error) {
                console.error('Error deleting order', error);
            }
        }
    };

    

    return (
        <PedidosTable>
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
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
                                <td>
                                    <Link to={`/admin/orders/${order.id}`}>
                                        <button>update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(order.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </PedidosTable>
    );
}

export default OrderList;
