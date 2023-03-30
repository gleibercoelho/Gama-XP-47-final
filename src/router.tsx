import { Route, Routes } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import { Home } from "./pages/home";

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}