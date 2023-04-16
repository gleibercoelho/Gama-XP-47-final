import { configureStore, combineReducers} from '@reduxjs/toolkit';
import userReducer from './modules/user';
import cartSlice from "./modules/cart"

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartSlice
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
