import React from "react";
import styled from "styled-components";
import food from "../assets/food.png";

function Navbar() {
  return (
    <Nav>
      <div className="brand">
        <img src={food} alt="food logo" width="32px" height='28' />
        <div className="toggle"></div>
      </div>
      <ul className="links">
        <a href="#home">
          <li className="active">Home</li>
        </a>
        <a href="#our services">
          <li>Services</li>
        </a>
        <a href="#portfolio">
          <li>Portfolio</li>
        </a>
        <a href="#testimonial">
          <li>Testimonial</li>
        </a>
        <a href="#products">
          <li>Products</li>
        </a>
        <a href="#newsletter">
          <li>Newsletter</li>
        </a>
      </ul>

    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 4vw;

  .brand {
    img {
      cursor: pointer;
      margin-top: 0.5rem;
    }
  .toggle {
    display: none;
  }
  }

  .links {
    display: flex;
    gap: 2rem;
    list-style: none;
      a {
        color: #0A2463;
        font-weight: 400;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing:0.2rem;
        transition: 0.1s ease-in-out;

        &:hover{
            color:#FFB997;
        }
      }
    
          .active{
              color:#FFB997;
          }
    
  }
`;
