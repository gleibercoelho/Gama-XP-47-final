import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "../../../../services/api";
import { useEffect } from "react";
import { CreateOrderPage } from "./style";
import { NavLink } from "react-router-dom";

function CreateOrder() {
  const [productList, setProductList] = useState([
    { idproduto: "", quantidade: "" },
  ]);
  const [couponName, setCouponName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const token = useSelector((state: any) => state.user.token || '');
  const navigate = useNavigate();

  const tipo = useSelector((state: any) => state.user && state.user.tipo);
  
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    if (tipo === "user" || !tipo) {
      // Redirect to login page if user is not logged in
      navigate('/');
    } 
  }, [tipo, shouldReload]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const requestBody = {
        listaprodutos: productList,
        nomeCupom: couponName || undefined,
      };
      await api.post("/pedidos", requestBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin/orders");
    } catch (error) {
      console.error("Error creating order", error);
      setErrorMessage("An error occurred while creating the order.");
    }
  };

  
  

  const handleProductListChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...productList];
    list[index][name] = value;
    setProductList(list);
  };

  const addProductField = () => {
    setProductList([...productList, { idproduto: "", quantidade: "" }]);
  };

  const removeProductField = (index) => {
    const list = [...productList];
    list.splice(index, 1);
    setProductList(list);
  };

  return (
    <CreateOrderPage>
      <h2>Create Order</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="couponName">Coupon Name:</label>
          <input
            type="text"
            id="couponName"
            name="couponName"
            value={couponName}
            onChange={(e) => setCouponName(e.target.value)}
          />
        </div>
        <div>
          <h3>Product List:</h3>
          {productList.map((product, index) => (
            <div key={index}>
              <label htmlFor={`productId-${index}`}>Product ID:</label>
              <input
                type="number"
                id={`productId-${index}`}
                name="idproduto"
                value={product.idproduto}
                onChange={(e) => handleProductListChange(e, index)}
                required
              />
              <label htmlFor={`productQuantity-${index}`}>Quantity:</label>
              <input
                type="number"
                id={`productQuantity-${index}`}
                name="quantidade"
                value={product.quantidade}
                onChange={(e) => handleProductListChange(e, index)}
                required
              />
              {index > 0 && (
                <button type="button" onClick={() => removeProductField(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addProductField}>
            Add Product
          </button>
        </div>
        <button type="submit">Create Order</button>
      </form>
      <NavLink to="/admin" ><button>Painel de Controle</button></NavLink>
    </CreateOrderPage>
  );
}

export default CreateOrder;
