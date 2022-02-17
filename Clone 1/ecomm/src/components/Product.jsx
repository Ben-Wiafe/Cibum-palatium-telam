import React from "react";
import styled from "styled-components";
import product1 from "../assets/1.jpg";
import product2 from "../assets/2.jpg";
import product3 from "../assets/3.jpg";
import product4 from "../assets/4.jpg";
import product5 from "../assets/5.jpg";
import { TitleSytles, imageZoomEffect } from "./ReusableStyles";

function Product() {
  const data = [
    {
      image: product1,
      name: "Magaretta Steak",
      price: "$90/pcs",
    },
    {
      image: product2,
      name: "Bana-crunch",
      price: "$30/pcs",
    },

    { image: product3, name: "Pizza slice", price: "$100/pcs" },
    { image: product4, name: "Egg & Bread", price: "$110/pcs" },
    { image: product5, name: "Yam soup", price: "$210/pcs" },
  ];
  return (
    <Section>
      <div className="title">
        <h1>
          <span>Favourite </span>All the time!
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="Product" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>
                Consequat consequat velit elit nulla anim reprehenderit veniam
                amet anim irure sunt.
              </p>
              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Product;

const Section = styled.section`
  ${TitleSytles};
  .products {
    display: grid;
    
    grid-template-columns: repeat(5, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
      justify-content:center;

      h3 {
        color: #ffb997;
      }

      p {
        letter-spacing:0.1rem;
        line-height:1.5rem;
        font-size:1.1rem;
        text-align:center;
      }
      button{
          padding:1rem 4rem;
          border:none;
          background:linear-gradient(to right, #FFB997, #e85d05);
          border-radius:4rem;
          font-size:1.3rem;
          color:white;

          &:hover{
            background:linear-gradient(to left, #FFB997, #e85d05);

          }
        }
      ${imageZoomEffect}

      .image {
        max-height: 20rem;
        overflow:hidden;
        border-radius:1rem;

        img {
          height: 21rem;
          width:15rem
        }
       
      }
    }
  }
`;
