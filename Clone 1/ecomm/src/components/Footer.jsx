import React from "react";
import play from "../assets/play-store.svg";
import ios from "../assets/app-store.svg";
import huawei from "../assets/huawei-store.svg";
import boltFood from "../assets/bolt-food-logo.svg";
import face from "../assets/facebook-logo.svg";
import inst from "../assets/instagram-logo.svg";
import twit from "../assets/twitter-logo.svg";
import drop from "../assets/facebook-logo.svg";
import styled from "styled-components";
import dropdown from "../assets/angle-up-down.svg";
function Footer() {
  return (
    <Section>
      <div className="boltfood">
        <img src={boltFood} alt="Bolt Food" height="40" />
      </div>
      <div className="container">
        <div className="footerStore">
          <a href="#">
            <img src={play} alt=" " width="150" height="50" />
          </a>
          <a href="#">
            <img src={ios} alt=" " width="150" height="50" />
          </a>
          <a href="#">
            <img src={huawei} alt=" " width="150" height="50" />
          </a>
        </div>
        <div className="options">
          <label for="language-moblie">Language</label>
          <select id="language-mobile">
            <option value="az-AZ">Azərbaycanca</option>
            <option value="cs-CZ">Čeština</option>
            <option value="da-DK">Dansk</option>
            <option value="et-EE">Eesti</option>
            <option selected="English" value="en-US">
              English
            </option>
            <option value="hr-HR">Hrvatski</option>
            <option value="lv-LV">Latviešu</option>
            <option value="lt-LT">Lietuvių</option>
            <option value="hu-HU">Magyar</option>
            <option value="nl-NL">Nederlands</option>
            <option value="no-NO">Norsk</option>
            <option value="pl-PL">Polski</option>
            <option value="pt-PT">Português</option>
            <option value="ro-RO">Română</option>
            <option value="sk-SK">Slovenčina</option>
            <option value="sv-SE">Svenska</option>
            <option value="el-GR">Ελληνικά</option>
            <option value="ru-RU">Русский</option>
            <option value="uk-UA">Українська</option>
            <option value="ka-GE">ქართული</option>
          </select>
        </div>
        <div className="courier">
        <a href="#"><h4>Courier Sign-up</h4></a>
        <a href="#"><h4>Restaurant Sign-up</h4></a>
        <a href="#"><h4>Careers Sign-up</h4></a>
        </div>
        <div className="enquiry">
          <a href="#"><p>Support & FAQ</p></a>
          <a href="#"><p> Press</p></a>
          <a href="#"><p>Blog</p></a>
          <a href="#"><p>Contacts</p></a>
          <a href="#"><p>Legal</p></a>
        </div>
        <div className="socials">
          <a href="#">
            {" "}
            <img src={drop} alt="facebook" />
          </a>
          <a href="#">
            {" "}
            <img src={inst} alt="instagram" />
          </a>
          <a href="#">
            {" "}
            <img src={twit} alt="twitter" />
          </a>
          <div className="options">
          <label for="language-moblie">Language</label>
          <select id="language-mobile">
            <option value="az-AZ">Azərbaycanca</option>
            <option value="cs-CZ">Čeština</option>
            <option value="da-DK">Dansk</option>
            <option value="et-EE">Eesti</option>
            <option selected="English" value="en-US">
              English
            </option>
            <option value="hr-HR">Hrvatski</option>
            <option value="lv-LV">Latviešu</option>
            <option value="lt-LT">Lietuvių</option>
            <option value="hu-HU">Magyar</option>
            <option value="nl-NL">Nederlands</option>
            <option value="no-NO">Norsk</option>
            <option value="pl-PL">Polski</option>
            <option value="pt-PT">Português</option>
            <option value="ro-RO">Română</option>
            <option value="sk-SK">Slovenčina</option>
            <option value="sv-SE">Svenska</option>
            <option value="el-GR">Ελληνικά</option>
            <option value="ru-RU">Русский</option>
            <option value="uk-UA">Українська</option>
            <option value="ka-GE">ქართული</option>
          </select>
        </div>
        </div>
      </div>
      <div className="boltTech">
        <p>© 2022 Bolt Technology OÜ</p>
      </div>
    </Section>
  );
}

export default Footer;

const Section = styled.footer`
  ${"" /* background-image: url('../assets/hero-image.jpeg'); */}
  background:#F4F4F6;
  padding-top: 3rem;
  position: relative;
  ${'' /* padding-left:6rem;
  padding-bottom:1.5rem; */}
  .boltfood {
    margin-bottom: 2rem;
    padding-left:5rem;
    overflow:hidden;
    img {
      height: 2.7rem;

    }
  }
  .container {
    max-width:1400px;
    display: flex;
    justify-content:space-between;
    ${'' /* grid-template-columns: repeat(5, 1fr); */}
    ${'' /* gap: 6rem; */}
    ${'' /* border:1px dashed green; */}
    margin-top:-1rem;
    padding-left:4rem;
   margin:0 auto;

    .footerStore {
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
      margin-top:0rem;
      padding-left:2rem;
      img {
        margin-top: 0.4rem;
        object-fit: contain;
      }
    }
    .options {
      display:none;
      position: relative;

      label {
        font-weight: 500;
      }

      select {
        max-width: 400px;
        padding: 0.9rem 0.3rem;
        width: 180px;
        background: #f4f4f6;
        border-color: gray;
        appearance: none;
      }
      ${'' /* .options::after {
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #f00;
        position: absolute;
        top: 40%;
        right: 5px;
        content: "";
        z-index: 98;
      } */}
    }
    .courier{
      width:159px;
      margin-top:12px;
      margin-left:-4rem;
      a{
        text-decoration:none;
        color: black;
      }
      h4{
        ${'' /* border:1px dashed green; */}
        padding:0.4rem;
        margin-bottom:5px;
        font-size:1.05rem;
        font-weight:600;
        &:hover{
          color:gray;
        }
      }
    }
    .enquiry{
      margin-top:10px;
      width:120px;
      margin-left:-4rem;
      a{
        text-decoration:none;
      }
      p{
        height:30px;
        ${'' /* border:1px dashed green; */}
        padding:0.6rem;
        margin-bottom:9px;
        font-size:0.95rem;
        color:gray;
        overflow:hidden;
        &:hover{
          color:black;
        }
      }
      
    }
  }
  .boltTech{
    padding:2rem;
    margin-left:40px;
    color:gray;
    margin-bottom:1.6rem;
  }
  .socials{
    ${'' /* border:1px dashed pink; */}
    margin-right:8rem;
    ${'' /* display:flex;
    justify-content:center; */}
    flex-wrap:nowrap;

    .options{
      display:block;
      margin-top:3rem;
      width:200px;
    }
    
    img{
      margin-right:14px;

    }
  }

  @media screen and (min-width: 650px) and (max-width: 940px) {
    .container{
      flex-direction:column; 
      
      .footerStore{
        flex-direction:row;
        justify-content:flex-start;
      }
    }
        background:red;
        padding-top: 0rem;
  }
`;
