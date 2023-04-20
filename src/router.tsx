import { Route, Routes } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import { Home } from "./pages/home";
import Login from "./pages/login";
import Products from "./pages/products";
import ProductDetail from "./pages/products id";
import CartPage from "./pages/cart";
import ProfilePage from "./pages/user";
import SignUp from "./pages/signup";
import CheckOut from "./pages/checkout";
import Admin from "./pages/admin";
import AdminUserUpdate from "./pages/admin/Users/adminUserUpdate";
import AdminNewUser from "./pages/admin/Users/adminUserCreate";
import AdminCreate from "./pages/admin/Users/adminCreate"
import AdminProductsUpdate from "./pages/admin/products";
import AdminProductsCreate from "./pages/admin/products/adminProductsCreate";
import AdminPedidosUpdate from "./pages/admin/orders/AdminOdersUpdate";
import AdminPedidosCreate from "./pages/admin/orders/adminOrderCreate";



interface RouterProps {
    onLogin: (username: string, email: string) => void;
  }

export default function Router({ onLogin }: RouterProps) {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login onLogin={onLogin} />}/>
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/user" element={<ProfilePage/>} />
            <Route path="/signup" element={< SignUp />} />
            <Route path="/checkout" element={<CheckOut/>} />
            <Route path="/admin" element={< Admin/>} />
            <Route path="/admin/user/:id" element={< AdminUserUpdate/>}/>
            <Route path="/admin/user" element={<AdminNewUser/>} />
            <Route path="/admin/create" element={<AdminCreate/>} />
            <Route path="/admin/products/:id" element={< AdminProductsUpdate/>}/>
            <Route path="/admin/products" element={< AdminProductsCreate/>}/>
            <Route path="/admin/orders/:id" element={< AdminPedidosUpdate />}/>
            <Route path="/admin/orders" element={< AdminPedidosCreate />}/>

        </Routes>
        </BrowserRouter>
    )
}