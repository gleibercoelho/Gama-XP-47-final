import { Keyhole, ShoppingCart, ClipboardText, GameController, Desktop } from "@phosphor-icons/react";
import logo from "../../assets/images/logo.png"
import { HeaderBox } from "./style";

export function Header() {

    return (

        <HeaderBox>
            <img src={logo} alt="" />
            <ul>
                <li>Home<Desktop size={25} color="#d2f910" /></li>
                <li>Produtos <GameController size={25} color="#080808" /> </li>
                <li>Pedidos <ClipboardText size={25} color="#0c08fd" /> </li>
                <li>Carrinho <ShoppingCart size={25} color="#fd0808" /></li>


            </ul>
            <h2>Login <Keyhole size={25} color="#15ad43" /> </h2>
        </HeaderBox>
    )
}