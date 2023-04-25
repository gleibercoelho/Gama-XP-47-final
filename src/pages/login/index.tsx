import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../../store/modules/user";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Header } from "../../components/header";
import Footer from "../../components/footer";
import { LoginDivMaster, BannerLogin, MainDivLogin } from "./style";
import smartwatch from "../../assets/images/smartwatch.png";
import {Key, SignIn } from "@phosphor-icons/react";
import logo from "../../assets/images/logo.png"



interface LoginProps {
  onLogin: (email: string, senha: string) => void;
}

export default function Login(props: LoginProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((store: RootStore) => store.userReduce)
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUser({
      token: undefined,
      email: undefined,
      tipo: undefined,
      nome: undefined,
      id: null,
    }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    });
    const data = await response.json();
    if (response.ok) {
      const { token } = data;
      props.onLogin(email, token);
      setEmail("");
      setSenha("");
      dispatch(setUser({
        token: data.token,
        email: email,
        tipo: data.tipo,
        nome: data.nome,
        id: data.id,
      }))
      navigate("/")
      console.log("logado com sucesso");
    } else {
      // Handle login error
      console.error("Failed to login:", data.error);
    }
  }

  return (
    <>
    
      <Header />
      <MainDivLogin>
      <LoginDivMaster>
        <div className="welcome">
          <p>Que bom vê lo de novo!</p>
          <img src={logo} alt="" />
        </div>

        <form onSubmit={handleSubmit}>
          <label>Email:
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Digite seu email"
            />
          </label>
          <br />
          <label>Senha:
            <input
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              placeholder="Digite sua senha"
            />
          </label>
          <br />
          <button type="submit">Login {<Key size={16} color="#ffffff" />}</button>
          <div>
            <p>Não tem conta? Se inscreva:</p>
            <NavLink to="/signup"><button>Inscreva-se <SignIn size={16} color="#ffffff" /></button></NavLink>

          </div>
        </form>
      </LoginDivMaster>
      <BannerLogin>
        <h3>Now</h3>
        <h2>Wear</h2>
        <h1>Gadgets</h1>
        <img src={smartwatch} alt="" />
      </BannerLogin>
      </MainDivLogin>
      <Footer />

    </>
  );
}



