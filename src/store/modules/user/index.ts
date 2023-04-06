import {createSlice} from "@reduxjs/toolkit";

interface IUserState {
    token?: string,
    email?: string,
    isLogged: boolean;
    isAdminster: boolean;
}

const userReduce = createSlice({
    name: "user",
    initialState: {
        isLogged: false,
        isAdminister: false
    } as unknown as IUserState, 
    reducers: {
        setUser(state, action){
            Object.assign(state,{
                token: action.payload.token,
                email: action.payload.email,
                islogged: true,

            });
        },

        removeUser(state, action) {
            Object.assign(state, {
                token: undefined,
                email: undefined,
                isLogged: false,
            })
        }
    },
});

export const {setUser, removeUser} = userReduce.actions;
export default userReduce.reducer;