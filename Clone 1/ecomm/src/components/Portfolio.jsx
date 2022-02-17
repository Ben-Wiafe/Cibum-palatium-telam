import React from 'react';
import backg from '../assets/fruit.jpeg';
import styled from "styled-components";

function Portfolio() {
  return (
    <Section id='portfolio'>
        <div className='background'>
        <img src={backg} alt='portfolio background'/>
        </div>
        <div className='content'>
          <h1>Buy Premium Pan Free Hand Toast!</h1>
          <h2>Ea proident ipsum proident magna exercitation qui consectetur labore esse laboris.Adipisicing exercitation </h2>
        <button>Buy Now</button>
        </div>
      
    </Section>
  )
}

export default Portfolio;

const Section = styled.section`
position:relative;
height:80vh;
border-radius:5rem;
&:hover{
  .background{
    img{
    
      transform: scale(1.2)
    }
  }
}
.background{
  height:100%;
  max-width:100%;
  overflow:hidden;
  border-radius:1rem;
  

  img{
    width:100%;
    object-fit:cover;
    filter: brightness(60%);
    height:100%;
    transition: 0.6s ease-in-out;

    &:hover{
      filter:brightness(80%);
      transition: 0.3s;

    }
  }
}
.content{
  position:absolute;
  top:20%;
  left:10%;
  color:white;
  display:flex;
  flex-direction:column;
  gap:1rem;
  justify-content:center;
  align-items:flex-start;

h1{
  font-size:3.5rem;
  width:50%;
  font-family:poppins;
}
h2{
  width:60%;
  font-family:poppins;
}
button{
  border:none;
  padding:1rem 4rem;
  border-radius:4rem;
  font-size:1.3rem;
  cursor:pointer;
  background:linear-gradient(to right, #FFB997, #e85d05);
  &:hover {
    background:linear-gradient(to left, #FFB997, #e85d05);
  }
  }
}


`;
