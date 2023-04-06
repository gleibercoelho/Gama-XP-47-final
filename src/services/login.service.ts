import { api } from "./api";

interface LoginPayload {
    email: string;
    senha: string;
}

export function fetchLogin(payload: LoginPayload) {
    return api.post("/login", payload)
        .then(response => {
            const token = response.data.token; 
            localStorage.setItem('token', token); 
            return response.data; 
        })
        .catch(error => {
           
            console.error('Login failed:', error);
            throw error; 
        });
}