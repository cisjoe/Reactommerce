import Carousel from "react-bootstrap/Carousel";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../store/actionCreator";
import slide1 from "../assets/images/slide-1.jpg";
import slide2 from "../assets/images/slide-2.png";
import slide3 from "../assets/images/slide-3.png";
import { Link } from "react-router-dom";
import ToUp from "../components/ToUp";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    ToUp(
      "32",
      "32",
      "8",
      "8",
      "24",
      "right",
      "24",
      "var(--main-color)",
      "",
      "var(--background-color)"
    );
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productsData = useSelector((state) => state.productsData);

  let randomNum = Math.floor(Math.random() * productsData.products.length);

  return (
    <div className="Home">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>CREATIVITY STARTS HERE</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
          <Carousel.Caption>
            <h3>MEN & MAGNIFICENT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
          <Carousel.Caption>
            <h3>THINK DIFFERENT</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="deals sec-padding" id="deals">
        <h2 className="main-title">Hot Deals</h2>
        <div className="deals-grid">
          <div className="main-img">
            <Link to={`/products/${randomNum + 1}`}>
              <img src={productsData.products[randomNum]?.thumbnail} />
              <h4 className="deal-title">
                {productsData.products[randomNum]?.title}
              </h4>
            </Link>{" "}
          </div>

          <div className="sec-imgs">
            <div className="row">
              <div className="col">
                <Link to={`/products/${randomNum + 3}`}>
                  <img src={productsData.products[randomNum + 2]?.thumbnail} />
                  <h4 className="deal-title">
                    {productsData.products[randomNum + 2]?.title}
                  </h4>
                </Link>
              </div>
              <div className="col">
                <Link to={`/products/${randomNum + 7}`}>
                  <img src={productsData.products[randomNum + 6]?.thumbnail} />
                  <h4 className="deal-title">
                    {productsData.products[randomNum + 6]?.title}
                  </h4>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link to={`/products/${randomNum + 10}`}>
                  <img src={productsData.products[randomNum + 9]?.thumbnail} />
                  <h4 className="deal-title">
                    {productsData.products[randomNum + 9]?.title}
                  </h4>
                </Link>
              </div>
              <div className="col">
                <Link to={`/products/${randomNum + 5}`}>
                  <img src={productsData.products[randomNum + 4]?.thumbnail} />
                  <h4 className="deal-title">
                    {productsData.products[randomNum + 4]?.title}
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Products />
    </div>
  );
}
