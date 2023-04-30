import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import Footer from "../../components/footer";
import {BannerSignIn, SignInDivMaster, MainDivSignIn} from "./style"
import logo from "../../assets/images/logo.png"
import { LockKeyOpen } from "@phosphor-icons/react";
import gameboy from "../../assets/images/gameboy.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
                    toast.success('Sign up successful!');
                    setTimeout(() => {
                        
                        navigate('/login');
                      }, 2000);
                } else {
                    throw new Error('Error signing up');
                    toast.error('Error signing up');
                }
            })
            .catch(error => {
                console.error(error);
                toast.error('Error signing up');
            });
    };

    return (
        <>
        
        <ToastContainer />
        
        <Header/>
        <MainDivSignIn>
        
            <BannerSignIn>
            <h3>Play</h3>
        <h2>Pure</h2>
        <h1>Nostalgia</h1>
        <img src={gameboy} alt="" />
            </BannerSignIn>
            <SignInDivMaster>
            <div className="welcome">
                <p>
                    Inscreva-se
                </p>
                <img src={logo} alt="" />
            </div>
        
            <form onSubmit={handleSubmitSignUp}>
                <label htmlFor="name-input">Nome:</label>
                <input type="text" id="name-input" name="name" required placeholder="Escreva seu nome" />

                <label htmlFor="email-input">Email:</label>
                <input type="email" id="email-input" name="email" required placeholder="Escreva seu email"/>

                <label htmlFor="password-input">Senha:</label>
                <input type="password" id="password-input" name="password" required placeholder="Escreva seu senha"/>

                <button type="submit">Inscrever{<LockKeyOpen size={16} color="#ffffff" />} </button>
            </form>
            
            </SignInDivMaster>
            </MainDivSignIn>
            <Footer/>
            
        </>
    )
};
