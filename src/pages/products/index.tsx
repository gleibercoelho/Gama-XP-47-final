import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Header } from "../../components/header";
import Pagination from "../../components/pagination";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("http://localhost:3000/produtos");
      setProdutos(result.data);
    };
    fetchData();
  }, []);

  const handleCategoryFilter = (categoryName: string) => {
    let newSelectedCategories: string[];
    if (selectedCategories.includes(categoryName)) {
      newSelectedCategories = selectedCategories.filter(
        (category) => category !== categoryName
      );
    } else {
      newSelectedCategories = [...selectedCategories, categoryName];
    }
    setSelectedCategories(newSelectedCategories);
    setOffset(0); // Reset the offset when the category changes
  };

  const showAllProducts = () => {
    setSelectedCategories([]);
    setOffset(0);
  }

  const filteredProdutos = selectedCategories.length > 0
    ? produtos.filter((produto) => selectedCategories.includes(produto.categoria))
    : produtos;

  const limit = 6;
  const total = filteredProdutos.length;
  const paginatedProdutos = filteredProdutos.slice(offset, offset + limit);

  return (
    <>
      <Header></Header>
      <div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.length === 0}
              onChange={showAllProducts}
            />
            Toda loja
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes("hardware")}
              onChange={() => handleCategoryFilter("hardware")}
            />
            Hardware
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes("Gadgets")}
              onChange={() => handleCategoryFilter("Gadgets")}
            />
            Gadget
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes("console")}
              onChange={() => handleCategoryFilter("console")}
            />
            Console
          </label>
        </div>
        {paginatedProdutos.map((produto) => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <Link to={`/products/${produto.id}`}>
              <img src={produto.foto} alt={produto.nome} />
            </Link>
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
      <Footer/>
    </>
  );
};

export default Products;
