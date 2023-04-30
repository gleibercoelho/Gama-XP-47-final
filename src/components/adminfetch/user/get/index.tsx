import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { api } from '../../../../services/api';
import { Link } from 'react-router-dom';
import { UsersTable } from './style';

interface User {
  id: number;
  nome: string;
  email: string;
  tipo: string;
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



const UserTable: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const token = useSelector((state: any) => state.user.token || '');

  useEffect(() => {
    const fetchDataUser = async () => {
      const response = await api.get('http://localhost:3000/usuarios', {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });
      const data = response.data;
      console.log("fetch data user")

      setUsers(data);
    };

    fetchDataUser();
  }, []);

  return (
    <UsersTable>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>tipo</th>
          <th>Criado</th>
          <th>Atualizado</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nome}</td>
            <td>{user.email}</td>
            <td>{user.tipo}</td>
            <td>{formatDate(user.createdAt)}</td>
            <td>{formatDate(user.updatedAt)}</td>


            <td>
              <Link to={`/admin/user/${user.id}`}>
                <button>update</button>
              </Link>
              <button
                onClick={async () => {
                  const confirmed = confirm('Are you sure you want to delete your profile? This action cannot be undone.');
                  if (confirmed) {
                    await api.delete(`http://localhost:3000/usuarios/${user.id}`, {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                      }
                    });
                    const updatedUsers = users.filter(u => u.id !== user.id);
                    setUsers(updatedUsers);
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
    </UsersTable>
  );
};

export default UserTable;
