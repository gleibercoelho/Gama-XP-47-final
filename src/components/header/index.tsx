import { Keyhole, ShoppingCart, ClipboardText, GameController, Desktop } from "@phosphor-icons/react";
import logo from "../../assets/images/logo.png"
import { HeaderBox } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../store/modules/user";
import { NavLink, useNavigate } from "react-router-dom";

interface IUserState {
    token?: string,
    email?: string,
    name?: string,
    isLogged: boolean;
    isAdminster: boolean;
}

export function Header() {
    
    const isLogged = useSelector((state: any) => state.user && state.user.isLogged);
    const name = useSelector((state: any) => state.user.name || '');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(removeUser({}));
    };

    const handleOrdersClick = () => {
        if (isLogged) {
            navigate('/orders');
        } else {
            navigate('/login');
        }
    }

    return (
        <HeaderBox>
            <img src={logo} alt="" />
            <ul>
                <li><NavLink to="/">Home<Desktop size={25} color="#d2f910" /></NavLink></li>
                <li><NavLink to="/products">Produtos <GameController size={25} color="#080808" /></NavLink></li>
                <li><button onClick={handleOrdersClick}>Pedidos <ClipboardText size={25} color="#0c08fd" /></button></li>
                <li><NavLink to="/cart">Carrinho <ShoppingCart size={25} color="#fd0808" /></NavLink></li>
            </ul>
            {isLogged ? (
                <>
                <h2>Olá, {name}!</h2>
                <h2 onClick={handleLogout}>Logout <Keyhole size={25} color="#15ad43" /></h2>
                </>
            ) : (
                <NavLink to="/login">
                    <h2>Login <Keyhole size={25} color="#15ad43" /></h2>
                </NavLink>
            )}
        </HeaderBox>
    );
}
