import React from "react";
import styled from "styled-components";
import avatar from "../assets/chef.png";
import {TitleSytles, imageZoomEffect} from './ReusableStyles';
function Testimonial() {
  return (
    <Section id="testimonial">
      <div className="container">
        <div className="title">
          <h1>
            {" "}
            <span>What</span> Customers say
          </h1>
        </div>
        <div className="testimonials">
          <div className="testimonial">
          <div className="image">
          <img src={avatar} alt="testimonial" />
        </div>
        <p>
            Amet excepteur est et officia nostrud sunt labore.
            <span>Ea ex id deserunt</span> excepteur nisi.
          </p>
          </div>
          <div className="testimonial">
          <div className="image">
          <img src={avatar} alt="testimonial" />
        </div>
        <p>
            Amet excepteur est et officia nostrud sunt labore.
            <span>Ea ex id deserunt</span> excepteur nisi.
          </p>
          </div>
          <div className="testimonial">
          <div className="image">
          <img src={avatar} alt="testimonial" />
        </div>
        <p>
            Amet excepteur est et officia nostrud sunt labore.
            <span>Ea ex id deserunt</span> excepteur nisi.
          </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Testimonial;

const Section = styled.section`
  margin: 5vw;
  background:linear-gradient(to left, #FFB997, #e85d05);
  border-radius:1.5rem;
  padding:0.2rem;
  position:relative;

  .container{
    background:white;
    margin:0.5rem;
    border-radius:1rem;
    padding-bottom:4vw;
    padding-top:1vw;
    ${TitleSytles};
  }
.title{
  position:absolute;
  background:white;
  left:27%;
  top:-1.5rem;
  padding:0 2rem;
}
.testimonials{
  display:flex;
  justify-content: space-between;
  align-items:center;
  gap:6vw;
  background-color: white;
  margin-top:3vw;

  .testimonial{
    ${imageZoomEffect}
    padding:0 4vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    gap:1rem;
    
    .image{
      img{
        width:10rem;
        object-fit: contain;
        max-height:10rem;
        border-radius:10rem;
        overflow:hidden;  
      }
    }

    p{
      font-size:1.1rem;
      line-height:2rem;
      letter-spacing:0.1rem;
    }
    span{
      color:#FFB997;
    }
  }
}
`;
