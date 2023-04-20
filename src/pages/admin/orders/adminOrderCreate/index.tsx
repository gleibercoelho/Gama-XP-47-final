import CreateOrder from "../../../../components/adminfetch/orders/create";
import { Header } from "../../../../components/header";
import { Link } from "react-router-dom";

export default function AdminPedidosCreate() {
    return (
        <>
        <Header/>
        <CreateOrder/>
        <div>
            <Link to={"/admin"} ><button>back to admin</button></Link>
        </div>
        </>)
}