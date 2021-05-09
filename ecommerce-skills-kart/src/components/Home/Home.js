import React from 'react'
import {useState} from "react"
import './Home.css';
import Shop from "../Shop";
import { Navigate, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

 export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="App">
            <div className="shortcut-shop">
                <span>Bestsellers at 50% off. Offer for Lockdown 2.0 , <NavLink style={{color: "#4CAF50"}}to="/shop">Shop Now</NavLink>.</span>
            </div>
            <div className="header-image-main">
            <div className="home-main"  />
            <h2 className="main-head-img">LEARN & GROW</h2>
            <h3 className="main-subhead-img">UPTO <span className="offer-text"> 50% OFF</span>  on various skills</h3>
           
            <button onClick={() => navigate("/shop")} className="shop-btn">Shop </button>
        
            </div>
          
               <br />
               <br />
               <br />

            <div className="skills-category-main">
                <h1 class="heading-skills-categories">Choose Your Skillset</h1>
            </div>
            <br />

           
  <div className="three-grids">
  <div className="grid1-img">
  <figure className="snip1402">
    <img src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" class="G-img1" alt="coding" />
    <figcaption>
    <h3>Programming</h3>
    <hr />
    <p>Only drug which is healthy and mind refreshing . It let's you feel proud on your self when you program something really good.</p>
  </figcaption>
  </figure>
    <h3 className="grid1 grid-head" style={{textAlign: "left",position: "relative" , left: "15px" }}>Programming</h3>
    <p style={{ textAlign: "left", position: "relative" , top: "-10px" , left: "15px"}}>Build / Improve your logics by <br />  books and courses</p>
    <p style={{textAlign: "left", position: "relative" , top: "-10px" ,left: "15px", fontSize: "1rem" , fontWeight: "500" }} ><strong>+</strong> EXPLORE</p>
  </div>

  
   <div className="grid2-img">
   <figure className="snip1402">
    <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="G-img2" alt="laptop" />
    <figcaption>
    <h3>Design</h3>
    <hr />
    <p>Design involves putting yourself in the shoes of the user, whether it is a customer or a learner. </p>
  </figcaption>
  </figure>
    <h3 className="grid2 grid-head" style={{textAlign: "left",position: "relative" , left: "15px"}}>Designing</h3>
    <p style={{ textAlign: "left", position: "relative" , top: "-10px" , left: "15px"}}>Be more creative & Improve <br /> your user's experience</p>
    <p style={{textAlign: "left", position: "relative" , top: "-10px" ,left: "15px", fontSize: "1rem" , fontWeight: "500" }} ><strong>+</strong> EXPLORE</p>
  </div>
  
   <div className="grid3-img">
   <figure className="snip1402">
    <img src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="G-img2" alt="desktop" />
    <figcaption>
    <h3>Content & Copywriting </h3>    
    <hr />
    <p>The best copywriting fuses the products and ideology of a brand together to create branding.</p>
  </figcaption>
  </figure>
    <h3 className="grid3 grid-head" style={{textAlign: "left",position: "relative" , left: "15px"}}>Content / copywriting</h3>
    <p style={{ textAlign: "left", position: "relative" , top: "-10px" , left: "15px"}}>Optimize your content marketing <br />strategy in 2021 and get more clients</p>
    <p style={{textAlign: "left", position: "relative" , top: "-10px" ,left: "15px", fontSize: "1rem" , fontWeight: "500" }} ><strong>+</strong> EXPLORE</p>
  </div>

  <div className="grid4-img">
  <figure className="snip1402">
    <img src="  https://images.unsplash.com/photo-1565221287653-9a2713dbe4ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80
" class="G-img3" alt="desktop" />
 <figcaption>
    <h3>Editing & Filmaking</h3>
    <hr />
    <p>The key to blending images and sounds to make us feel emotionally connected & sometimes truly there in film .</p>
  </figcaption>
  </figure>
<h3 className="grid4 grid-head"  style={{textAlign: "left",position: "relative" , left: "15px"}}>Editing & FilmMaking</h3>
    <p style={{ textAlign: "left", position: "relative" , top: "-10px" , left: "15px"}}>Get 10x better at your storytelling <br />& establishing a proper engagement </p>
    <p style={{textAlign: "left", position: "relative" , top: "-10px" ,left: "15px", fontSize: "1rem" , fontWeight: "500" }} ><strong>+</strong> EXPLORE</p>
  </div>
</div>

<div>
      <footer className="footer">
        <div className="footer-header">Made with❤️ by Anjali Rohira !</div>
        <ul className="list-non-bullet">
            <li className="social-media-icons">
                <a target="_blank" className="link" href="https://github.com/rohiraanjali"><i className="fab fa-github" aria-hidden="true"></i></a>
            </li>
            <li className="social-media-icons">
                <a target="_blank" className="link" href="https://twitter.com/anjali_rohira"><i className="fab fa-twitter"></i></a>
            </li>
            <li class="social-media-icons">
                <a target="_blank" className="link" href="https://www.linkedin.com/in/anjali-rohira-886a52187/"><i className="fab fa-linkedin-in"></i></a>
            </li>
         
           </ul>
           <div className="footer-text">© 2021 <span style={{color: "rgb(76, 175, 80)"}}>Skills-Kart</span></div>
    
    </footer>
 
</div>
   

        </div>
    )
}

export default Home;
