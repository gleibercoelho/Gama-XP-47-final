import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import Footer from "../../components/footer";

export default function SignUp() {
    const navigate = useNavigate();

    const handleSubmitSignUp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const name = event.currentTarget.name.value;
        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;

        const user = { nome: name, email, senha: password };

        api.post('http://localhost:3000/usuarios', user)
            .then(response => {
                if (response.status = 201) {
                    alert('Sign up successful!');
                    navigate('/login');
                } else {
                    throw new Error('Error signing up');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <>
        <Header/>
            <form onSubmit={handleSubmitSignUp}>
                <label htmlFor="name-input">Name:</label>
                <input type="text" id="name-input" name="name" required />

                <label htmlFor="email-input">Email:</label>
                <input type="email" id="email-input" name="email" required />

                <label htmlFor="password-input">Password:</label>
                <input type="password" id="password-input" name="password" required />

                <button type="submit">Sign up</button>
            </form>
            <Footer/>
        </>
    )
};
