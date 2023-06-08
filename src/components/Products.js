import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getCats } from "../store/actionCreator";
import ProductCard from "./ProductCard";
import { Link, useSearchParams } from "react-router-dom";

export default function Products() {
  const productsData = useSelector((state) => state.productsData);
  const categoriesData = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const catFilter = searchParams.get("category");

  const filtered = catFilter
    ? productsData.products.filter((prod) => prod.category === catFilter)
    : productsData.products;

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  useEffect(() => {
    dispatch(getCats());
  }, []);

  const productsElements = filtered?.map((prod) => {
    return (
      <Link className="product-card--link" key={prod.id} to={`/products/${prod.id}`}>
        <ProductCard
          key={prod.id}
          img={prod.thumbnail}
          title={prod.title}
          desc={prod.description}
          price={prod.price}
        />
      </Link>
    );
  });

  const categoriesElements = categoriesData.map((cat) => {
    return (
      <button key={cat} className={catFilter == cat ? "active-filter" : "no-active"} onClick={() => setSearchParams({ category: cat })}>
        {cat}
      </button>
    );
  });

  return (
    <div className="Products sec-padding" id="products">
      <h2 className="main-title">Products</h2>
      <div className="products-filter">
        <button className={!catFilter ? "active-filter" : "no-active"} onClick={() => setSearchParams({})}>all</button>
        {categoriesElements}
      </div>
      <div className="products-grid ">{productsElements}</div>
    </div>
  );
}
