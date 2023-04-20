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



  return (
    <>
      <Header/>
      <aside>
        <ul>
          <li><a onClick={() => handleLinkClick("categorias")}>Categorias</a></li>
          <li><a onClick={() => handleLinkClick("cupons")}>Cupons</a></li>
          <li><a onClick={() => handleLinkClick("pedidos")}>Pedidos</a></li>
          <li><a onClick={() => handleLinkClick("produtos")}>Produtos</a></li>
          <li><a onClick={() => handleLinkClick("usuarios")}>Usuários</a></li>
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
        </>
    )
}
export default Admin;
