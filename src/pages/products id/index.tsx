import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import React, { useState, useEffect } from "react";
import { Header } from "../../components/header";
import Footer from "../../components/footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cart";

interface Produto {
  nome: string;
  foto: string;
  descricao: string;
  preco: number;
  categoria: string;
  // add any other properties you want to include in the product object
}

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Produto | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await api.get(`http://localhost:3000/produtos/${productId}`);
      setProduct(result.data);
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div>
        <h2>{product.nome}</h2>
        <img src={product.foto} alt={product.nome} />
        <p>{product.descricao}</p>
        <p>{product.preco}</p>
        <p>{product.categoria}</p>
        {/* add any other product details you want to display */}
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
