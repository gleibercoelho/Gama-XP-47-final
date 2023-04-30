import { FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../../../services/api';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { UpdateProductPage } from './style';


interface IProducts {
    id: number;
    nome: string;
    foto: File;
    preco: string;
    descricao: string;
    categoria: string;
    createdAt: string;
    updatedAt: string;
}


const UpdateProducts: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [products, setProducts] = useState<IProducts | null>(null);
    const [nome, setnome] = useState<string>('');
    const [foto, setFoto] = useState<File>();
    const [preco, setPreco] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [categoria, setCategoria] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const token = useSelector((state: any) => state.user.token || '');
    const navigate = useNavigate();

    const tipo = useSelector((state: any) => state.user && state.user.tipo);
  
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    if (tipo === "user" || !tipo) {
      // Redirect to login page if user is not logged in
      navigate('/');
    } 
  }, [tipo, shouldReload]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await api.get(`http://localhost:3000/produtos/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                setProducts(response.data);
                setnome(response.data.nome);
                setFoto(response.data.foto);
                setPreco(response.data.preco);
                setDescricao(response.data.descricao);
                setCategoria(response.data.categoria);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
                return;
            }
        };

        fetchProducts();
    }, [id]);




    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        try {
          setLoading(true);
          const formData = new FormData();
          formData.append("nome", nome);
          formData.append("preco", preco);
          formData.append("descricao", descricao);
          formData.append("categoria", categoria);
      
          if (foto) {
            formData.append("foto", foto);
          }
      
          await axios.put(`http://localhost:3000/produtos/${id}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          });
          // redirect to the products list page after successful update
          navigate("/admin");
        } catch (error) {
          console.log(error);
          alert("An error occurred while updating the product.");
        } finally {
          setLoading(false);
        }
      };
      




    if (loading) {
        return <p>Loading...</p>;
    }

    if (!products) {
        return <p>products not found</p>;
    }

    return (
        <UpdateProductPage>
            <form onSubmit={handleSubmit}>
                <h2>Update a product</h2>
                <label htmlFor="nome">nome:</label>
                <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(event) => setnome(event.target.value)}
                />
                <br />
                <label htmlFor="foto">Foto:</label>
                <input
                    type="file"
                    id="foto"
                    onChange={(event) => setFoto(event.target.files?.[0])}
                />
                <br />
                <label htmlFor="preco">Preco:</label>
                <input
                    id="preco"
                    value={preco}
                    onChange={(event) => setPreco(event.target.value)}
                />
                <br />
                <label htmlFor="descricao">Descricao:</label>
                <input
                    id="descricao"
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                />
                <br />
                <label htmlFor="categoria">Categoria:</label>
                <input
                    id="categoria"
                    value={categoria}
                    onChange={(event) => setCategoria(event.target.value)}
                />
                <br />
                <button type="submit">Update</button>
            </form>
            <div>
                <NavLink to="/admin" ><button>back to panel</button></NavLink>
            </div>

        </UpdateProductPage>

    );
};

export default UpdateProducts;
