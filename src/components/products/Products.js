import React, { useState } from "react";
import { Card, CardFooter } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { createContext, useReducer, useContext } from "react";
import Reducer from "../Reducers/ProductReducer";
import "../../css/style.css";
import Cart from "../ShoppingCart/Cart";

import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../../store/store";

const Makeup = require("../../img/Makeup.jpg");
const HeadPhone = require("../../img/headphone.jpg");
const moto = require("../../img/moto.jpg");
const perfume = require("../../img/perfume.jpg");
const shampoo = require("../../img/Shampoo.jpg");
const watch = require("../../img/watch.jpg");
const chair = require("../../img/chair.jpg");
const tshirt = require("../../img/T-shirt.jpg");
const yogart = require("../../img/yogart.jpg");
const milk = require("../../img/Milk.jpg");

export const AppContext = createContext();

export default function Product() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance);

  const products = [
    {
      id: 1,
      title: "Make up",
      description:
        "A subset of cosmetics is called (make-up) which refers primarily to coloring products intended to alter the user's appearance",
      price: 10,
      image: Makeup,
      colors: ["red", "green", "blue"],
    },
    {
      id: 2,
      title: "Head Phones",
      description:
        "They are electroacoustic transducers, which convert an electrical signal to a corresponding sound",
      price: 15,
      image: HeadPhone,
      colors: ["Red", "Green", "Blue"],
    },
    {
      id: 3,
      title: "Moto",
      description:
        "A motorcycle is a two-wheeled vehicle with an engine. Motorcycles are bigger, heavier, and much faster than bicycles",
      price: 221,
      image: moto,
      colors: ["Red", "Green", "Blue"],
    },
    {
      id: 4,
      title: "Perfume",
      description:
        "A perfume is a liquid mixture used to emit a pleasant odour. It is formed from fragrant essential oils from plants ",
      price: 48,
      image: perfume,
      colors: ["Red", "Green", "Blue"],
    },
    {
      id: 5,
      title: "shampoo",
      description:
        "Hair shampoo is a hair care product comprising among other things of synthetic detergents designed to remove sebum and environmental dirt",
      price: 18.5,
      image: shampoo,
      colors: ["Red", "Green", "Blue"],
    },
    {
      id: 6,
      title: "Watch",
      description:
        "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions ",
      price: 22.1,
      image: watch,
      colors: ["Red", "Green", "Blue"],
    },
    {
      id: 7,
      title: "Chair yoga",
      description:
        "Chair yoga allows you to perform yoga poses while seated or using a chair for balance. Chair-based yoga offers alot of benefits",
      price: 30,
      image: chair,
      colors: ["Red", "Green", "Blue"],
    },
    {
      id: 8,
      title: "T-Shirt",
      description:
        "a lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment",
      price: 60,
      image: tshirt,
      colors: ["Red", "Green", "Blue"],
    },
    {
      id: 9,
      title: "Yogart",
      description:
        "Yogurt is a fermented milk product and as such is a means of preserving the nutrients in milk. A wide variety of yogurts are now available around the world",
      price: 2.5,
      image: yogart,
      colors: ["Red", "Green", "Blue"],
    },
    {
      id: 10,
      title: "Milk",
      description:
        "A white liquid produced by the mammary glands of female mammals for feeding their young beginning immediately after birth.",
      price: 0.5,
      image: milk,
      colors: ["Red", "Green", "Blue"],
    },
    //
  ];

  const buyActionProcess = (product) => {
    dispatch({ type: "ADD", payload: product.price });
  };

  return (
    <Provider store={store}>
      <div>
        <div className="products">
          <div className="row">
            {products.map((product) => (
              <Card key={product.id} style={{ width: "18rem", margin: "20px" }}>
                <Card.Header>
                  <h4>{product.title}</h4>
                </Card.Header>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "100%", height: "150px" }}
                />
                <Card.Body style={{ width: "100%" }}>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text style={{ color: "red" }}>
                    Price: ${product.price}
                  </Card.Text>
                </Card.Body>
                <CardFooter>
                  <button
                    className="cart-button"
                    style={{ width: "15rem" }}
                    onClick={() => buyActionProcess(product)}
                  >
                    Buy Product
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Provider>
  );
}
