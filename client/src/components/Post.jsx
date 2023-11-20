import React from "react";
import "../App.css";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img src="\public\main.png"></img>
      </div>
      <div className="texts">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          temporibus eum nostrum incidunt quas totam alias iusto officiis iste
          expedita!
        </h2>
        <p className="info">
          <a className="author">Yunus Emre Uyanık</a>
          <time>20/11/2023 14:57</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus quis blanditiis ad qui a, earum nesciunt rerum deleniti
          facere ea.
        </p>
      </div>
    </div>
  );
};

export default Post;
