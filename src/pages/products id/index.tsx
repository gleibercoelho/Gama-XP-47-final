import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import React, { useState, useEffect } from "react";
import { Header } from "../../components/header";
import Footer from "../../components/footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cart";
import { DivMaster } from "./style";
import { FotoProductDiv } from "./style";

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
      <DivMaster>
        <FotoProductDiv>
          <img src={product.foto} alt={product.nome} />
        </FotoProductDiv>
        <div>
          <h2>{product.nome}</h2>

          <p>Detalhes do produto: Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Illum ratione esse aliquid perferendis ea accusantium
             sapiente magnam. Voluptate quo et maiores. Molestiae facere exercitationem
              recusandae vel blanditiis voluptatum suscipit a mollitia itaque tempore laboriosam
               similique quod necessitatibus amet officiis, quibusdam voluptatibus eveniet numquam
                nisi eum in inventore veritatis repellat? Sequi. {product.descricao}</p>
          <h3>RS {product.preco},00</h3>
          {/* add any other product details you want to display */}
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </DivMaster>
      <Footer />
    </>
  );
};

export default ProductDetail;
