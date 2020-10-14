import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Reigningeddie"
          src="/static/images/avatar/1.jpg" 
        />
        <h3>Reigningeddie</h3>
      </div>

      <img className="post__image" src="https://miro.medium.com/max/875/1*P5WKQdrZ4cl-arUrW3JrvQ.jpeg"/>

      <h4 className="post__text"><strong>Reigningeddie</strong> Cloning instagram through React is much harder than I expected.</h4>
    </div>
  )
}

export default Post