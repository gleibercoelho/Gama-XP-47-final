import { Keyhole, ShoppingCart, User, GameController, Desktop, SignOut } from "@phosphor-icons/react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
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
    const cartTotalQuantity = useSelector(state => state.cart.cartTotalQuantity);;


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(removeUser({}));
    };
   
    const handleOrdersClick = () => {
        if (isLogged) {
            navigate('/user');
        } else {
            confirmAlert({
                title: 'Confirmar',
                message: 'Você precisa estar logado para acessar esta página. Deseja fazer login agora?',
                buttons: [
                    {
                        label: 'Sim',
                        onClick: () => handleConfirmOrdersClick(true)
                    },
                    {
                        label: 'Não',
                        onClick: () => handleConfirmOrdersClick(false)
                    }
                ]
            });
        }
    };

    const handleConfirmOrdersClick = (confirmed: boolean) => {
        if (confirmed) {
            navigate('/login');
        } else {
            // do nothing
        }
    };



    const confirmLogout = () => {
        confirmAlert({
            title: 'Confirmar Logout',
            message: 'Você tem certeza que deseja sair?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => handleLogout()
                },
                {
                    label: 'Não',
                    onClick: () => { }
                }
            ]
        });
    }

    return (
        <HeaderBox>
            <img src={logo} alt="" />
            <ul>
                <li><NavLink to="/">Home<Desktop size={25} color="#d2f910" /></NavLink></li>
                <li><NavLink to="/products">Produtos <GameController size={25} color="#080808" /></NavLink></li>
                <li onClick={handleOrdersClick}> Perfil<User size={25} color="#0c08fd" /></li>
                <li>
                    <NavLink to="/cart">Carrinho
                    <ShoppingCart size={25} color="#f00b0b" />
                        <span>{cartTotalQuantity > 0 && <span>{cartTotalQuantity}</span>}</span>
                    </NavLink>
                </li>

                {isLogged ? (
                    <>
                        <li className="nome">Olá, {name}!</li>
                        <li onClick={confirmLogout}>Logout <SignOut size={25} color="#15ad43" /></li>
                    </>
                ) : (
                    <NavLink to="/login">
                        <li>Login <Keyhole size={25} color="#15ad43" /></li>
                    </NavLink>
                )}
            </ul>
        </HeaderBox>
    );
}
