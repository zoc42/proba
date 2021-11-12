import React from 'react'
import './App.css'

const App = () => {
    return (
      <div className="wrapper">
      <div className="multi_color_border"></div>
      <div className="top_nav">
          <div className="left">
            <div className="logo"><p><span>Coding</span>Market</p></div>
            <div className="search_bar">
                <input type="text" placeholder="Search" />
            </div>
        </div> 
        <div className="right">
          <ul>
            <li><a href="#">Whats Next</a></li>
            <li><a href="#">LogIn</a></li>
            <li><a href="#">SignUp</a></li>
            <li><a href="#">Post a Job</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom_nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Writing</a></li>
          <li><a href="#">Design</a></li>
          <li><a href="#">Marketing</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Map</a></li>
          <li><a href="#">Articles</a></li>
        </ul>
    </div>
    
    <div className="banner">
      <img src="https://i.imgur.com/iFaKR9k.png" alt="banner_img" />
    </div>
  </div>
    )
}

export default App
