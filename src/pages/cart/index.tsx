import { useSelector, useDispatch } from "react-redux";
import {  addToCart,  decreaseCart, removeFromCart,  clearCart,} from "../../store/modules/cart";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Header } from "../../components/header";
import { RootState } from "../../store";

interface Produto {
  id: number;
  nome: string;
  foto: string;
  descricao: string;
  preco: number;
  categoria: string;
}

function CartPage() {
  const [coupon, setCoupon] = useState("");
  
  const cart = useSelector((state) => state.cart);
  const token = useSelector((state: any) => state.user.token || '');
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productIds = cart.cartItems.map((item) => item.id);
      const result = await api.get(
        `http://localhost:3000/produtos?ids=${productIds.join(",")}`
      );
      setProducts(result.data);
    };
    if (cart.cartItems.length > 0) {
      fetchProducts();
    }
  }, [cart]);
  
 
  async function handleCheckout(coupon: string) {    
    await sendCartData(cart, token, coupon);
    console.log(token);
  }

  async function sendCartData(cart: RootState["cart"], token: string, coupon: string) {
    try {
      const response = await api.post(
        "http://localhost:3000/pedidos",
        {
          listaprodutos: cart.cartItems.map(item => {
            return { idproduto: item.id, quantidade: item.cartQuantity };
          }),
          nomeCupom: coupon,
        },
        {
          headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  

  function handleIncrease(product) {
    dispatch(addToCart(product));
  }

  function handleDecrease(product) {
    const item = cart.cartItems.find((item) => item.id === product.id);
    if (item.cartQuantity > 1) {
      dispatch(decreaseCart(product));
    }
  }

  function handleRemove(product) {
    dispatch(removeFromCart(product));
  }

  function handleClearCart() {
    dispatch(clearCart());
  }

  function getProductPrice(id: number): number {
    const product = products.find((p) => p.id === id);
    if (product) {
      return product.preco;
    }
    return 0;
  }

  function getProductTotalPrice(id: number): number {
    const item = cart.cartItems.find((i) => i.id === id);
    if (item) {
      return item.cartQuantity * getProductPrice(id);
    }
    return 0;
  }

 
  const [couponError, setCouponError] = useState(null);

 
  async function handleVerifyCoupon(coupon: string) {
    event?.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/cupons?nome=${coupon}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log("Coupon found");
        setCouponError(null);
      } else {
        console.log("Coupon not found");
        setCouponError("Invalid coupon");
      }
    } catch (error) {
      console.log(error);
      setCouponError("Error verifying coupon");
    }
  };

  return (
    <>
      <Header />
      <div>
        <h1>Cart Page</h1>
        {cart.cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.cartItems.map((item) => {
                  const product = products.find((p) => p.id === item.id);
                    if (!product) return null;
                    const unitPrice = getProductPrice(item.id);
                    const totalProductPrice = getProductTotalPrice(item.id);
                    return (
                      <tr key={product.id}>
                        <td>{product.nome}</td>
                        <td>${unitPrice.toFixed(2)}</td>
                        <td>
                          <button onClick={() => handleDecrease(product)}>
                            -
                          </button>
                          {item.cartQuantity}
                          <button onClick={() => handleIncrease(product)}>
                            +
                          </button>
                        </td>
                        <td>${totalProductPrice.toFixed(2)}</td>
                        <td>
                          <button onClick={() => handleRemove(product)}>X</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4" className="total">
                      Total Quantity: {cart.cartTotalQuantity} | Total Amount: $
                      {cart.cartTotalAmount.toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
              <form>
        <label>
          Coupon code:
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
        </label>
        <button type="button" onClick={() => handleVerifyCoupon(coupon)}>
          Verify
        </button>
        {couponError && <p>{couponError}</p>}
      </form>
              <button onClick={handleClearCart}>Clear Cart</button>
              <button onClick={() => handleCheckout(coupon)}>Check out</button>
              
              
            </>
          )}
        </div>
      </>
    );
  }
  
  export default CartPage;
  