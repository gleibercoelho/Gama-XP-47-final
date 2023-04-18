import { Route, Routes } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import { Home } from "./pages/home";
import Login from "./pages/login";
import Products from "./pages/products";
import ProductDetail from "./pages/products id";
import CartPage from "./pages/cart";
import ProfilePage from "./pages/user";

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

        </Routes>
        </BrowserRouter>
    )
}