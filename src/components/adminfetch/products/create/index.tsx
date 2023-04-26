import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../../../services/api';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface ProductForm {
    nome: string;
    foto: string;
    preco: string;
    descricao: string;
    categoria: string;
}

const ProductsCreate: FC = () => {
    const [productForm, setProductForm] = useState<ProductForm>({ nome: '', foto: '', preco: '', descricao: '', categoria: '' });
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
        const formData = new FormData();
        formData.append('nome', productForm.nome);
        formData.append('preco', productForm.preco);
        formData.append('descricao', productForm.descricao);
        formData.append('categoria', productForm.categoria);
        formData.append('foto', productForm.foto);

        try {
            const response = await api.post('http://localhost:3000/produtos', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
            });
            const newProduct = response.data;
            console.log('New product:', newProduct);
            // dispatch action to update state with new product
            navigate('/admin');
        } catch (error) {
            console.error(error);
        }
    };

    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProductForm({ ...productForm, [name]: value });
    };

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setProductForm({ ...productForm, foto: file });
      };
      


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="nome" id="name" value={productForm.nome} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="foto">Photo:</label>
                <input type="file" name="foto" id="foto" onChange={handlePhotoChange} accept="image/*" required />
            </div>

            <div>
                <label htmlFor="price">Price:</label>
                <input type="text" name="preco" id="price" value={productForm.preco} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" name="descricao" id="description" value={productForm.descricao} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <input type="text" name="categoria" id="category" value={productForm.categoria} onChange={handleChange} required />
            </div>
            <button type="submit">Create product</button>
        </form>
    );
};

export default ProductsCreate;
