import {createSlice} from "@reduxjs/toolkit";

interface IUserState {
    token?: string,
    email?: string,
    name?: string,
    isLogged: boolean,
    tipo?: string,
    id?: number,
}

const userReduce = createSlice({
    name: "user",
    initialState: {
        isLogged: false,
        tipo: undefined,
        id: null,
    } as unknown as IUserState, 
    reducers: {
        setUser(state, action){
            Object.assign(state,{
                id: action.payload.id,
                token: action.payload.token,
                email: action.payload.email,
                name: action.payload.nome,
                isLogged: true,
                tipo: action.payload.tipo,
                
            });
        },

        removeUser(state, action) {
            event?.preventDefault()
            Object.assign(state, {
                token: undefined,
                email: undefined,
                nome: undefined,
                isLogged: false,
                tipo: undefined,
                id: null,
            })
        }
    },
});

export const {setUser, removeUser} = userReduce.actions;
export default userReduce.reducer;