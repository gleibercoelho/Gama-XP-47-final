import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../../components/header';
import Footer from '../../components/footer';
import { api } from '../../services/api';
import { removeUser } from '../../store/modules/user';
import { AnyAction } from 'redux';
import { useNavigate } from 'react-router-dom';
import { UserDivMaster } from './style';





interface IUser {
  id: number;
  nome: string;
  email: string;
  createdat: string;
}

interface UserData {
  id: number;
  nome: string;
  email: string;
  createdat: string;
}

const ProfilePage = () => {
  const [user, setUser] = useState<UserData>();
  const isLogged = useSelector((state: any) => state.user.isLogged);
  const userId = useSelector((state: any) => state.user.id || '');
  const token = useSelector((state: any) => state.user.token || '');
  const [fetchedUserData, setFetchedUserData] = useState<UserData>();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [shouldReload, setShouldReload] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [showTable, setShowTable] = useState(false);





  //get user by id data
  const fetchUser = async () => {
    try {
      const response = await api.get(`http://localhost:3000/usuarios/?id=${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      })
      const userData = response.data.find((user: IUser) => user.id === userId);
      setFetchedUserData(userData);
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!isLogged) {
      // Redirect to login page if user is not logged in
      navigate('/login');
    } else {
      // Fetch user information by ID from endpoint
      fetchUser();
      return
    }
  }, [isLogged, userId, shouldReload]);


  const updateUser = (id: number, nome: string, email: string): AnyAction => {
    return {
      type: 'UPDATE_USER',
      payload: { id, nome, email }
    }
  }
  // put user

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const requestBody = {};
      if (newName) {
        requestBody['nome'] = newName;
      }
      if (newEmail) {
        requestBody['email'] = newEmail;
      }
      if (newPassword) {
        requestBody['senha'] = newPassword;
      }
      const response = await api.put(
        `http://localhost:3000/usuarios/${userId}`,
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.statusText);
      if (newName || newEmail) {
        // Dispatch the action to update the user in Redux store
        dispatch(updateUser(userId, newName || user?.nome || '', newEmail || user?.email || ''));
        setUser({ ...user, nome: newName, email: newEmail });
        // Fetch the user information again with the updated data
        fetchUser();
      }
      setShowUpdateForm(false);
    } catch (error) {
      console.error(error);
    }
  };


  //get pedidos



  const fetchOrders = () => {
    fetch(`http://localhost:3000/pedidosusuario/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        setShowTable(true); // show the table after orders are fetched
      })
      .catch((error) => console.log(error));
  };



  // delete user

  const handleLogout = () => {
    event?.preventDefault();
    dispatch(removeUser({
      token: undefined,
      email: undefined,
      tipo: undefined,
      nome: undefined,
      id: null,
    }));
  };

  const deleteProfileButton = document.getElementById('delete-profile-button');
  if (deleteProfileButton) {
    deleteProfileButton.addEventListener('click', () => {
      const confirmed = confirm('Are you sure you want to delete your profile? This action cannot be undone.');
      if (confirmed) {
        api.delete(`http://localhost:3000/usuarios/${userId}`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
          .then(response => {
            if (response.status = 204) {
              alert("User profile deleted successfully");
              handleLogout();
              navigate('/login');

            } else {
              // Handle error response
              console.error('Error deleting user profile');
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    });
  }

  return (
    <>
      <Header />
      <UserDivMaster>
        {user ? (
          <div>
            <h1>Nome: {fetchedUserData?.nome}</h1>
            <p>Email: {fetchedUserData?.email}</p>
            {showUpdateForm && (
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={newName} onChange={(event) => setNewName(event.target.value)} />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={newEmail} onChange={(event) => setNewEmail(event.target.value)} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} />
                <button /* onClick={() => {
                  fetchUser();
                 
                    setShowUpdateForm(!showUpdateForm);
                  }
                } */ type="submit">Atualizar!</button>
              </form>
            )}
            <button onClick={() => setShowUpdateForm(!showUpdateForm)}>Atualizar meu perfil</button>
            <button onClick={fetchOrders}>Minhas Compras</button>
            <button id='delete-profile-button'>deletar minha conta</button>
            <div id="pedido-container">
              {showTable && ( // conditionally render the table HTML
                <table>
                  <thead>
                    <tr>
                      <th>Pedido ID</th>
                      <th>Cliente ID</th>
                      <th>Total da compra</th>
                      <th>Data da compra</th>
                      <th>Produtos</th>

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
                                <th>Nome Produto</th>
                                <th>Quantidade</th>
                                <th>foto</th>
                                <th>Preço unitário</th>
                                <th>Preço parcial</th>
                              </tr>
                            </thead>
                            <tbody>
                              {order.Produtos.map((produto) => (
                                <tr key={produto.id}>
                                  <td>{produto.nome}</td>
                                  <td>{produto.DetalhesPedido.quantidade}</td>
                                  <td>
                                    <img src={`http://localhost:3000/imagens/${produto.foto}`} alt={produto.nome} />
                                  </td>
                                  <td>{produto.preco}</td>
                                  <td>{produto.preco * produto.DetalhesPedido.quantidade}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div>
              
            </div>
          </div>
        ) : (
          <p>Loading user information...</p>
        )}
      </UserDivMaster>
      <Footer />
    </>
  );


};

export default ProfilePage;
