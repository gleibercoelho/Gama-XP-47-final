import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../../store/modules/user";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Header } from "../../components/header";

interface LoginProps {
  onLogin: (email: string, senha: string) => void;
}

export default function Login(props: LoginProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((store: RootStore) => store.userReduce )

  const handleLogout = () => {
    dispatch(removeUser({
      token: undefined,
      email: undefined,
      tipo: undefined,
      nome: undefined
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
        nome: data.nome
      }))
      console.log("logado com sucesso");
    } else {
      // Handle login error
      console.error("Failed to login:", data.error);
    }
  }

  return (
    <>
    <Header/>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          senha:
          <input
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        <button onClick={handleLogout}>Logout</button>
      </form>
      <NavLink to={"/"}> <button> home</button></NavLink>
    </>
  );
}



