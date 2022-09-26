import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/news/${item._id}`}>
        <div className="image-container">
          <img src={`http://localhost:8080/${item.newsImage}`} alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h5>{item.title}</h5>
          </div>

          <div className="date">
            <p>{item.date}</p>
          </div>

          <div className="text">
            <p>{item.description}</p>
          </div>
        </div>
      </Link>
      <div className="btn">
        <button>
          <a>READ MORE</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
