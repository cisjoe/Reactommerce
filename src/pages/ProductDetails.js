import Carousel from "react-bootstrap/Carousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import action, { fetchProducts } from "../store/actionCreator";
import * as ReactDOMServer from "react-dom/server";

export default function ProductDetails() {
  const productsData = useSelector((state) => state.productsData);
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    productsData.products.forEach((prod) => {
      if (+prod.id === +params.id) {
        dispatch(action("selected-product", prod));
      }
    });
  }, [params.id, dispatch, productsData.products]);

  function htmlMaker(index) {
    return ReactDOMServer.renderToStaticMarkup(
      <img
        className="d-block w-100"
        src={selectedProduct.images[index] || ""}
        alt="First slide"
      />
    );
  }

  setTimeout(() => {
    const slide1 = document.querySelector(
      ".carousel-indicators button[aria-label='Slide 1']"
    );

    const slide2 = document.querySelector(
      ".carousel-indicators button[aria-label='Slide 2']"
    );

    const slide3 = document.querySelector(
      ".carousel-indicators button[aria-label='Slide 3']"
    );

    const slide4 = document.querySelector(
      ".carousel-indicators button[aria-label='Slide 4']"
    );

    slide1.innerHTML = htmlMaker(0);
    slide2.innerHTML = htmlMaker(1);
    slide3.innerHTML = htmlMaker(2);
    slide4.innerHTML = htmlMaker(3);
  }, 0);

  function addToCartBtn() {
    document
      .querySelector("nav .navbar-nav .nav-item a.cartICOLink .cartICO")
      .classList.add("addedToCart");
    setTimeout(() => {
      document
        .querySelector("nav .navbar-nav .nav-item a.cartICOLink .cartICO")
        .classList.remove("addedToCart");
    }, 2000);

    document
      .querySelector("nav .navbar-nav .nav-item a span.num-of-cart-items")
      .classList.add("addedToCartSpan");
    setTimeout(() => {
      document
        .querySelector("nav .navbar-nav .nav-item a span.num-of-cart-items")
        .classList.remove("addedToCartSpan");
    }, 2000);

    dispatch(action("add-to-cart", selectedProduct));
  }

  return (
    <div className="ProductDetails sec-padding">
      <div className="left-section">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={selectedProduct.images[0]}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={selectedProduct.images[1]}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={selectedProduct.images[2]}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={selectedProduct.images[3]}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>

        <h1 className="product-details--title">{selectedProduct.title}</h1>
        <span className="product-details--brand">{selectedProduct.brand}</span>
      </div>
      <div className="right-section">
        <p className="product-details--desc">{selectedProduct.description}</p>
        <span className="product-details--price">${selectedProduct.price}</span>
        <div className="rating-stock--holder">
          <span className="product-details--rating">
            Rating: {selectedProduct.rating}
          </span>
          <span className="product-details--stock">
            {selectedProduct.stock} In Stock
          </span>
        </div>

        <button className="add-to-cart--btn" onClick={addToCartBtn}>
          add to cart
        </button>
      </div>
    </div>
  );
}
