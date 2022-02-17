import React from 'react';
import styled from 'styled-components';
import backImage from '../assets/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg';
import herodesign from "../assets/herodesign-removebg-preview.png";


function Hero() {
  return (
   <Section id='home'>
    <div className='background'>
        <img src={backImage} alt='Background image'/>
        </div>
        <div className='content'>
            <div className='sale'>
                <img src={herodesign} alt="Hero design"/>
                <h1>BIG SALE <span>50% OFF</span></h1>
            </div>
            <div className='info'>
                <h2>RETAILER</h2>
                <em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque condimentum eros ac</em>
                <button>ORDER NOW</button>
            </div>
        </div>
    
   </Section>
  )
}

export default Hero;

const Section = styled.section`
    height:90vh;
    width:100vw;
    position:relative;

    .background{
        height:100%;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
            filter:brightness(70%);
        }
    }
    .content{
        position:absolute;
        top:0;
        display:flex;
        align-items:center;
        justify-content:space-between;
        height:100%;
        width:100%;
    
        .sale{
            position:relative;
            left:5%;

            h1{ 
                color:white;
                position:absolute;
                top:21vh;
                left:17vh;
                font-size:4.5rem;
            }   
            span{
                display:block;
                
            }
            
        }
        .info{
            display:flex;
            flex-direction:column;
            position:absolute;
            top:40%;
            right:10%;
            align-items:flex-end;
            gap:1rem
        }
        img{
            width:100%;
            height:65vh;
            filter: brightness(90%)
        }
        h2{
            color:#FFB997;
            font-size:4rem;
            letter-spacing:0.5rem;
            font-family:roboto;
        }
        em{
            color:white;
            font-size:1.1rem;
            width:60%;
            text-align: end;
            font-family: poppins;
            letter-spacing: 0.1rem;
        }
        button{
            font-size:1.5rem;
            background:#0A2463;
            letter-spacing:0.2rem;
            border:none;
            padding:1.2rem 2rem;
            border-radius:10px;
            color:white;
            font-weight:600;
            cursor:pointer;
            transition: 0.3s ease-in-out;
            &:hover{
                background: #FFB997;
            }

        }
    }
`;
