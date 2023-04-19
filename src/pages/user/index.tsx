import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../../components/header';
import Footer from '../../components/footer';
import { RootState } from '../../store';
import { api } from '../../services/api';
import { setUser, removeUser } from '../../store/modules/user';
import { AnyAction } from 'redux';
import { useNavigate } from 'react-router-dom';




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

function renderPedidos(pedidos) {
  const pedidoList = document.createElement('ul');

  pedidos.forEach(pedido => {
    const pedidoItem = document.createElement('li');

    const pedidoValor = document.createElement('p');
    pedidoValor.innerText = `Total amount: ${pedido.valor}`;

    const pedidoData = document.createElement('p');
    pedidoData.innerText = `Data da compra: ${new Date(pedido.createdAt).toLocaleDateString()}`;

    const produtosList = document.createElement('ul');
    pedido.Produtos.forEach(produto => {
      const produtoItem = document.createElement('li');

       const produtoFoto = document.createElement('img');
       produtoFoto.src = `/assets/${produto.foto}`;

      const produtoNome = document.createElement('p');
      produtoNome.innerText = `Nome: ${produto.nome}`;

      const produtoPreco = document.createElement('p');
      produtoPreco.innerText = `Preço unitário: ${produto.preco}`;

      const detalhePedido = produto.DetalhesPedido;
      const detalhePedidoQuantidade = document.createElement('p');
      detalhePedidoQuantidade.innerText = `Quantidade: ${detalhePedido.quantidade}`;

      const partialAmount = produto.preco * detalhePedido.quantidade;
      const partialAmountElement = document.createElement('p');
      partialAmountElement.innerText = `Partial amount: ${partialAmount}`;

      produtoItem.append(produtoFoto, produtoNome, produtoPreco, detalhePedidoQuantidade, partialAmountElement);
      produtosList.appendChild(produtoItem);
    });

    pedidoItem.append(pedidoValor, pedidoData, produtosList);
    pedidoList.appendChild(pedidoItem);
  });

  return pedidoList;
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



  interface Pedido {
    id: number;
    usuario_id: number;
    cupom: string;
    valor: number;
    createdAt: string;
    updatedAt: string;
    Produtos: Produto[];
  }

  const fetchButton = document.getElementById('fetch-button');
  if (fetchButton) {
    let isDataRendered = false;

    fetchButton.addEventListener('click', () => {
      fetch(`http://localhost:3000/pedidos/?usuario_id=${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const filteredData = data.filter((pedido: Pedido) => {
            return pedido.usuario_id === userId &&
              pedido.Produtos.some(produto => produto.DetalhesPedido && produto.DetalhesPedido.quantidade > 0);
          });

          const pedidoList = renderPedidos(filteredData);
          const pedidoContainer = document.getElementById('pedido-container');
          if (pedidoContainer) {
            if (isDataRendered) {
              pedidoContainer.innerHTML = '';
              isDataRendered = false;
              fetchButton.textContent = 'Show My Orders';
            } else {
              pedidoContainer.appendChild(pedidoList);
              isDataRendered = true;
              fetchButton.textContent = 'Hide My Orders';
            }
          }
        })
        .catch(error => {
          console.error(error);
          // Display error message to the user
          const errorMessage = document.createElement('p');
          errorMessage.textContent = 'An error occurred while fetching orders. Please try again later.';
          const pedidoContainer = document.getElementById('pedido-container');
          pedidoContainer?.appendChild(errorMessage);
        });
    });
  }


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
      <div>
        {user ? (
          <div>
            <h1>{fetchedUserData?.nome}</h1>
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
                } */ type="submit">Update Profile</button>
              </form>
            )}
            <button onClick={() => setShowUpdateForm(!showUpdateForm)}>Update Profile</button>
            <button id="fetch-button">Meus pedidos</button>
            <div id="pedido-container">
              <ul>{renderPedidos}</ul>
            </div>
            <div>
              <button id='delete-profile-button'>deletar minha conta</button>
            </div>
          </div>
        ) : (
          <p>Loading user information...</p>
        )}
      </div>
      <Footer />
    </>
  );


};

export default ProfilePage;
