import { FC, useState } from 'react';
import Category from '../../components/category';
import UserTable from '../../components/adminfetch/user/get';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from '../../components/header';
import UpdateUser from '../../components/adminfetch/user/update';

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
          <category name="categorias"><Link onClick={() => handleLinkClick("categorias")}>Categorias</Link></category>
          <category name="cupons" ><Link onClick={() => handleLinkClick("cupons")}>Cupons</Link></category>
          <category name="pedidos"><Link onClick={() => handleLinkClick("pedidos")}>Pedidos</Link></category>
          <category name="produtos" ><Link onClick={() => handleLinkClick("produtos")}>Produtos</Link></category>
          <category name="usuarios"><Link onClick={() => handleLinkClick("usuarios")}>Usuários</Link></category>
        </ul>
      </aside>
      <main>
        <h1>Painel de controle</h1>
        <a >Novo Evento</a>
        <div >
        {activeTab === "usuarios" && (
            // Render the content for the "Usuários" tab
            <div>
                            <h2>Usuários</h2>
                            <UserTable fetchData={() => fetchData("usuarios")} />
                            
                            
                        </div>
                    )}
          {activeTab === "categorias" && (
            // Render the content for the "Categorias" tab
            <div>
              <h2>Categorias</h2>
            </div>
          )}
          {activeTab === "cupons" && (
            // Render the content for the "Cupons" tab
            <div>
              <h2>Cupons</h2>
              {/* Render the data for the "Cupons" tab */}
            </div>
          )}
          {activeTab === "pedidos" && (
            // Render the content for the "Pedidos" tab
            <div>
              <h2>Pedidos</h2>
              {/* Render the data for the "Pedidos" tab */}
            </div>
          )}
          {activeTab === "produtos" && (
            // Render the content for the "Produtos" tab
            <div>
              <h2>Produtos</h2>
              {/* Render the data for the "Produtos" tab */}
            </div>
          )}
          
                </div>
            </main>
        </>
    )
}
export default Admin;
