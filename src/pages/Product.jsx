import React, { useContext } from "react";
import StyleObj from "../style.module.css";
import { useState, useEffect } from "react";
import { usePaginationContext } from "../context/PaginationContext.jsx";
import useFetchList from "../helper/useFetchList.js";
import ProductList from "../Component/ProductList.jsx";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const productUrl = "https://fakestoreapi.com/products";
const categoryUrl = "https://fakestoreapi.com/products/categories";
function Product() {
  const { pageNum, setPageNum, pageSize, setPageSize } = usePaginationContext();
  const [productList, productLoader] = useFetchList(productUrl);
  const [categoryList, categoryLoader] = useFetchList(categoryUrl);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDir, setSortDir] = useState(0);
  const [category, setCategory] = useState("all");
  let filteredList = productList;
  if (searchTerm != "") {
    const searchedText = searchTerm.toLowerCase();
    filteredList = filteredList.filter((product) => {
      let productTitle = product.title.toLowerCase();
      return productTitle.includes(searchedText);
    });
    console.log(filteredList);
  }
  if (sortDir != 0) {
    if (sortDir == 1) {
      filteredList.sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      filteredList.sort((a, b) => {
        return b.price - a.price;
      });
    }
  }
  if (category != "all") {
    filteredList = filteredList.filter((product) => {
      return product.category == category;
    });
  }

  let sidx = (pageNum - 1) * pageSize;
  let eidx = sidx + pageSize;
  let paginatedList = filteredList.slice(sidx, eidx);
  let totalPages = Math.ceil(filteredList.length / pageSize);
  console.log(totalPages);

  return (
    <>
      <header className={StyleObj.nav_wrapper}>
        <div className={StyleObj.search_sortWrapper}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></input>

          <div className={StyleObj.icons_container}>
            <ArrowCircleUpIcon
              fontSize="large"
              style={{ color: "white" }}
              onClick={() => {
                setSortDir(1);
              }}
            ></ArrowCircleUpIcon>
            <ArrowCircleDownIcon
              fontSize="large"
              style={{ color: "white" }}
              onClick={() => {
                setSortDir(-1);
              }}
            ></ArrowCircleDownIcon>
          </div>
        </div>
      </header>
      <div className={StyleObj.categories_wrapper}>
        <button
          className={StyleObj.category_option}
          onClick={() => {
            setCategory("all");
            setPageNum(1);
          }}
        >
          All
        </button>
        {categoryList.map((category, idx) => (
          <button
            key={idx}
            className={StyleObj.category_option}
            onClick={() => {
              setCategory(category);
              setPageNum(1);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      {productLoader && <div className={StyleObj.loader}></div>}
      <main className={StyleObj.product_wrapper}>
        {paginatedList.map((product) => {
          return <ProductList key={product.id} product={product}></ProductList>;
        })}
      </main>
      <div className={StyleObj.pagination}>
        <button
          onClick={() => {
            if (pageNum == 1) return;
            setPageNum(pageNum - 1);
          }}
        >
          <ArrowLeftIcon></ArrowLeftIcon>
        </button>
        <p>{pageNum}</p>
        <button
          onClick={() => {
            if (pageNum == totalPages) return;
            setPageNum(pageNum + 1);
          }}
        >
          <ArrowRightIcon></ArrowRightIcon>
        </button>
      </div>
    </>
  );
}

export default Product;
