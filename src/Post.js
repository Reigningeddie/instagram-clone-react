import React from 'react';
import './Post.css';

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>
      {/* header -> avatar + username */}

      <img className="post__image" src="https://miro.medium.com/max/875/1*P5WKQdrZ4cl-arUrW3JrvQ.jpeg"/>
      {/* image */}

      <h4>Reigningeddie: Cloning instagram through React is much harder than I expected.</h4>
      {/* username + caption */}
    </div>
  )
}

export default Post