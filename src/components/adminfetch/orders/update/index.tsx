import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../../../services/api";
import { useSelector } from "react-redux";

function UpdateOrder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pedido, setPedido] = useState({});
  const [valor, setValor] = useState("");
  const token = useSelector((state: any) => state.user.token || '');


  const tipo = useSelector((state: any) => state.user && state.user.tipo);
  
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    if (tipo === "user" || !tipo) {
      // Redirect to login page if user is not logged in
      navigate('/');
    } 
  }, [tipo, shouldReload]);

  useEffect(() => {
    api.get(`http://localhost:3000/pedidos/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    }).then((response) => {
      setPedido(response.data);
      setValor(response.data.valor);
    });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    api.put(`http://localhost:3000/pedidos/${id}`, { valor }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        console.log(response.data);
        navigate("/admin");
        console.log(repsonse.status)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Edit Pedido {id}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Valor:
          <input
            type="number"
            value={valor}
            onChange={(event) => setValor(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateOrder;
