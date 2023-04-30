import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { api } from '../../../../services/api';
import { Link } from 'react-router-dom';
import { TabelaProdutos } from './style';

interface IProducts {
    id: number;
    nome: string;
    foto: string;
    preco: string;
    descricao: string;
    categoria: string;
    createdAt: string;
    updatedAt: string;
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(-2);

    return `${day}/${month}/${year}`;
}



const ProductsTable: FC = () => {
    const [products, setProducts] = useState<products[]>([]);
    const token = useSelector((state: any) => state.user.token || '');

    useEffect(() => {
        const fetchDataProducts = async () => {
            const response = await api.get('http://localhost:3000/produtos', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,

                }
            });
            const data = response.data;
            console.log("fetch data products")

            setProducts(data);
        };

        fetchDataProducts();
    }, []);

    return (
        <TabelaProdutos>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Foto</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                        <th>Criado</th>
                        <th>Atualizado</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.nome}</td>
                            <td><img src={product.foto} /></td>
                            <td>{product.preco}</td>
                            <td className='descricao'>{product.descricao}</td>
                            <td>{product.categoria}</td>
                            <td>{formatDate(product.createdAt)}</td>
                            <td>{formatDate(product.updatedAt)}</td>
                            <td>
                                <Link to={`/admin/products/${product.id}`}>
                                    <button>update</button>
                                </Link>
                                <button
                                    onClick={async () => {
                                        const confirmed = confirm('Are you sure you want to delete this product? This action cannot be undone.');
                                        if (confirmed) {
                                            await api.delete(`http://localhost:3000/produtos/${product.id}`, {
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    Authorization: `Bearer ${token}`,
                                                }
                                            });
                                            const updatedProducts = products.filter(p => p.id !== product.id);
                                            setProducts(updatedProducts);
                                        }
                                    }}

                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TabelaProdutos>
    );
};

export default ProductsTable;
