import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import React, { useState, useEffect } from "react";
import { Header } from "../../components/header";
import Footer from "../../components/footer";
import { addItem, removeItem } from "../../store/modules/cart";
import { connect } from "react-redux";
import { RootState } from "../../store";
import RouteComponentProps from "react-router-dom";

interface Props extends RouteComponentProps<{ productId: string }> {
  addItem: typeof addItem;
  removeItem: typeof removeItem;
  product: Produto | null;
}



interface Props {
  addItem: typeof addItem;
  removeItem: typeof removeItem;
  product: Produto | null;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}



interface Produto {
  id: string | any;
  nome: string;
  foto: string;
  descricao: string;
  preco: number;
  categoria: string;
  button: string;
}


const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Produto | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await api.get(`http://localhost:3000/produtos/${productId}`);
      setProduct({ ...result.data, id: result.data.id });
    };
    fetchProduct();
  }, [productId]);

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
        <button onClick={() => addItem({ id: parseInt(product.id), quantity: 1 })}>Add to Cart</button>
        <button onClick={() => removeItem({ id: parseInt(product.id), quantity: -1 })}>remove from Cart</button>



      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state: RootState, ownProps: Props) => ({
  product: state.products.find((p) => p.id === parseInt(ownProps.match.params.productId)) || null,
});




export default connect(mapStateToProps, { addItem, removeItem })(ProductDetail);