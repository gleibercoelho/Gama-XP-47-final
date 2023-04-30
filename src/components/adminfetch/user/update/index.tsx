import { FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../../../services/api';
import { useSelector } from 'react-redux';
import { UpdateUserPage } from './style';
import { NavLink } from 'react-router-dom';


interface User {
    id: number;
    nome: string;
    email: string;
    senha: string; // add this line
  }
  

const UpdateUser: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [nome, setnome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
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
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await api.get(`http://localhost:3000/usuarios/${id}`,{
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            }
          })
        setUser(response.data);
        setnome(response.data.nome);
        setEmail(response.data.email);
        setTipo(response.data.tipo);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        return;
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      await api.put(`http://localhost:3000/usuarios/${id}`, {
        nome,
        email,
        senha,
      },{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });
      // redirect to the user list page after successful update
      navigate('/admin');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User not found</p>;
  }

  return (
  <UpdateUserPage>
    <form onSubmit={handleSubmit}>
      <h2>Update a  user</h2>
      <label htmlFor="nome">nome:</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setnome(event.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <label htmlFor="senha">Senha:</label>
      <input
        id="senha"
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
      />
        
      
      <br />
      <button type="submit">Update</button>
    </form>
    <NavLink to="/admin" ><button>Painel de Controle</button></NavLink>
    </UpdateUserPage>    
  );
};

export default UpdateUser;
