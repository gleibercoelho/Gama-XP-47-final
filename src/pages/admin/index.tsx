import { FC, useState } from 'react';
import UserTable from '../../components/adminfetch/user/get';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from '../../components/header';
import { NavLink } from 'react-router-dom';
import user from '../../store/modules/user';
import ProductsTable from '../../components/adminfetch/products/get';
import OrderList from '../../components/adminfetch/orders/get';
import CategoryList from '../../components/adminfetch/Category/get';
import CouponList from '../../components/adminfetch/cupon/get';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AdminDivMaster } from './style';

interface User {
  id: number;
  name: string;
  email: string;
  tipo: string;
}

const Admin: FC = () => {
  const [activeTab, setActiveTab] = useState("");
  const token = useSelector((state: any) => state.user.token || '');

  const handleLinkClick = (endpoint: string) => {
    setActiveTab(endpoint);
  };


  const tipo = useSelector((state: any) => state.user && state.user.tipo);
  const navigate = useNavigate();
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    if (tipo === user || !tipo) {
      // Redirect to login page if user is not logged in
      navigate('/');
    } 
  }, [tipo, shouldReload]);



  return (
    <>
      <Header/>
      <AdminDivMaster>
      <aside>
      <ul>
  <li><a className={activeTab === "categorias" ? "active" : ""} onClick={() => handleLinkClick("categorias")}>Categorias</a></li>
  <li><a className={activeTab === "cupons" ? "active" : ""} onClick={() => handleLinkClick("cupons")}>Cupons</a></li>
  <li><a className={activeTab === "pedidos" ? "active" : ""} onClick={() => handleLinkClick("pedidos")}>Pedidos</a></li>
  <li><a className={activeTab === "produtos" ? "active" : ""} onClick={() => handleLinkClick("produtos")}>Produtos</a></li>
  <li><a className={activeTab === "usuarios" ? "active" : ""} onClick={() => handleLinkClick("usuarios")}>Usuários</a></li>
</ul>

      </aside>
      <main>
        <h1>Painel de controle</h1>
        
        <div >
        {activeTab === "usuarios" && (
            // Render the content for the "Usuários" tab
            <div>
                            <h2>Usuários</h2>
                            <UserTable fetchData={() => fetchData("usuarios")} />
                            <NavLink to={"/admin/user"} ><button>Create new user</button></NavLink>
                            <NavLink to={"/admin/create"} ><button>Create new Admin</button></NavLink>
                            
                        </div>
                    )}
          {activeTab === "categorias" && (
            // Render the content for the "Categorias" tab
            <div>
              <h2>Categorias</h2>
              <CategoryList/>
            </div>
          )}
          {activeTab === "cupons" && (
            // Render the content for the "Cupons" tab
            <div>
              <h2>Cupons</h2>
              <CouponList/>
            </div>
          )}
          {activeTab === "pedidos" && (
            // Render the content for the "Pedidos" tab
            <div>
              <h2>Pedidos</h2>
              <OrderList/>
              <Link to={'/admin/orders'} ><button>Create New Order</button></Link>
            </div>
          )}
          {activeTab === "produtos" && (
            // Render the content for the "Produtos" tab
            <div>
              <h2>Produtos</h2>
              {<ProductsTable fetchDataProducts={() => fetchDataProducts("produtos")} />}
              <NavLink to={"/admin/products"} ><button>Create new product</button></NavLink>
                            
            </div>
          )}
          
                </div>
            </main>
        </AdminDivMaster>
        </>
    )
}
export default Admin;
