import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { api } from '../../../../services/api';
import { CategoriasTable } from './style';

interface Category {
  id: number;
  nome: string;
}

function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const token = useSelector((state: any) => state.user.token || '');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get('/categorias', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories', error);
    }
  };

  const handleDelete = async (categoryId: number) => {
    const confirmed = confirm('Are you sure you want to delete this category? This action cannot be undone.');
    if (confirmed) {
      try {
        await api.delete(`/categorias/${categoryId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories(categories.filter((category) => category.id !== categoryId));
      } catch (error) {
        console.error('Error deleting category', error);
      }
    }
  };

  const handleCreate = async () => {
    try {
      const response = await api.post('/categorias', { nome: newCategoryName }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories([...categories, response.data]);
      setNewCategoryName('');
    } catch (error) {
      console.error('Error creating category', error);
    }
  };

  return (
    <CategoriasTable>
      <div>
        
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.nome}</td>
                <td>
                  <button onClick={() => handleDelete(category.id)}>Delete</button>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
        <div>
          <h2>Create Category</h2>
          <input type="text" value={newCategoryName} onChange={(event) => setNewCategoryName(event.target.value)} />
          <button onClick={handleCreate}>Create</button>
        </div>
      </div>
    </CategoriasTable>
  );
}

export default CategoryList;
