import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../../../services/api';
import { useNavigate }  from 'react-router-dom';
import { useEffect } from 'react';
;

interface UserForm {
  nome: string;
  email: string;
  senha: string;
}

const AdminNewCreate: FC = () => {
  const [userForm, setUserForm] = useState<UserForm>({ nome: '', email: '', senha: '' });
  const token = useSelector((state: any) => state.user.token || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tipo = useSelector((state: any) => state.user && state.user.tipo);
  
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    if (tipo === "user" || !tipo) {
      // Redirect to login page if user is not logged in
      navigate('/');
    } 
  }, [tipo, shouldReload]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await api.post('http://localhost:3000/usuariosadmin', userForm, {
        headers: {
          "Content-Type": "application/json",
          Authorization:  `bearer ${token}`
        }
      });
      const newUser = response.data;
      console.log('New user:', newUser);
      // dispatch action to update state with new user
      navigate('/admin/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserForm({ ...userForm, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="nome" id="name" value={userForm.nome} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={userForm.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="senha" id="password" value={userForm.senha} onChange={handleChange} required />
      </div>
      <button type="submit">Create user</button>
    </form>
  );
};

export default AdminNewCreate;
