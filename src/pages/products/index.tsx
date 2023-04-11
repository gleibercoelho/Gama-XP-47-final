import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Header } from "../../components/header";
import Pagination from "../../components/pagination";

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
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("http://localhost:3000/produtos");
      setProdutos(result.data);
    };
    fetchData();
  }, []);

  const handleCategoryFilter = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setOffset(0); // Reset the offset when the category changes
  };

  const filteredProdutos = selectedCategory
    ? produtos.filter((produto) => produto.categoria === selectedCategory)
    : produtos;

  const limit = 6;
  const total = filteredProdutos.length;
  const paginatedProdutos = filteredProdutos.slice(offset, offset + limit);

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
        {paginatedProdutos.map((produto) => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <img src={produto.foto} alt={produto.nome} />
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
            <p>{produto.categoria}</p>
          </div>
        ))}
      </div>
      <Pagination
        limit={limit}
        total={total}
        offset={offset}
        setOffset={setOffset}
      />
    </>
  );
};

export default Products;