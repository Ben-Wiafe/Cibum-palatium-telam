import React from 'react';
import styled from 'styled-components';
import backImage from '../assets/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg';
import herodesign from "../assets/herodesign.png";


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

            h1{
                color:green;
                position:absolute;
                top:14vh;
                left:18vh;
                font-size:3.5rem;
            }
            span{
                display:block;
                font-size:4.5vw;
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

    }
`;