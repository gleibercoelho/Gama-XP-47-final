import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/modules/user";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

export default function Login(props: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  /*const submit = async (event: FormEvent) => {
    event.preventDefault(response.data);
    try{
      const response = await login({email,senha});
      console.log(response.data)
      dispatch(setUser({
        token: response.data,
        email, 
      }))
      alert("deu certo");
    }
    catch (error) {
      alert ("Deu algo errado"");
    }
  }
  */

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      const { token } = data;
      props.onLogin(email, token);
      setEmail("");
      setPassword("");
      dispatch(setUser({
        token: response.data,
        email, 
      }))
    } else {
      // Handle login error
      console.error("Failed to login:", data.error);
    }
  }
  return (
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
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}