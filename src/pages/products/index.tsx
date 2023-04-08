import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Header } from "../../components/header";

interface Produto {
  id: number;
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  categoria: string;
}

const Products = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("http://localhost:3000/produtos");
      setProdutos(result.data);
    };
    fetchData();
  }, []);

  const handleCategoryFilter = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const filteredProdutos = selectedCategory
    ? produtos.filter((produto) => produto.categoria === selectedCategory)
    : produtos;

  return (
    <>
      <Header></Header>
      <div>
        <div>
          <button onClick={() => handleCategoryFilter("hardware")}>
            Hardware
          </button>
          <button onClick={() => handleCategoryFilter("Gadgets")}>
            Gadget
          </button>
          <button onClick={() => handleCategoryFilter("console")}>
            Console
          </button>
        </div>
        {filteredProdutos.map((produto) => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <img src={produto.foto} alt={produto.nome} />
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
            <p>{produto.categoria}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
