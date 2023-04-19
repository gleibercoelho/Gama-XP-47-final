import { Keyhole, ShoppingCart, ClipboardText, GameController, Desktop } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { FooterBox } from "./style";
import { useSelector } from "react-redux";

export function Footer() {

  const tipo = useSelector((state: any) => state.user && state.user.tipo);



  return (
    <FooterBox>
      <ul>
        <li><NavLink to="/">Home <Desktop size={25} color="#d2f910" /></NavLink></li>
        <li><NavLink to="/products">Produtos <GameController size={25} color="#080808" /></NavLink></li>
        <li><NavLink to="/cart">Carrinho <ShoppingCart size={25} color="#fd0808" /></NavLink></li>
        <li><NavLink to="/user">Perfil <ClipboardText size={25} color="#0c08fd" /></NavLink></li>
        {tipo === "admin" ? (
  <li><NavLink to="/admin">Admin Login <Keyhole size={25} color="#15ad43" /></NavLink></li>
) : (
  null
)}


      </ul>
    </FooterBox>
  );
}

export default Footer;
