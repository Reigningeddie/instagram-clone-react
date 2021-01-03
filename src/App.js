import React from 'react';
import './App.css';
import Post from './Post'; 

function App() {
  return (
    <div className="App">

      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <h1>In order to hack Instagram you first need to learn the code inside and out. be the APP. 📸!</h1>

      <Post imageUrl="https://miro.medium.com/max/875/1*P5WKQdrZ4cl-arUrW3JrvQ.jpeg" />
      <Post />
      <Post />

    </div>
  );
}

export default App;
