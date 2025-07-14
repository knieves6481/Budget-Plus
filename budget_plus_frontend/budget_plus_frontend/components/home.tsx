import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../src/home.css"

const categories = ['Tools', 'Books', 'Electronics', 'Clothing'];

 const Home: React.FC = () => {
      
  
  
  
      return (
        <div>
          <h1>Select Purchase Category</h1>
          <h3>Categories</h3>
      <ul className = "Categories">
        {categories.map((cat) => (
          <li key={cat} >
            <Link to={`/category/${cat.toLowerCase()}`} className = "Box">{cat}</Link>
          </li>
        ))}
      </ul>
        </div>
      );



      
    };

    export default Home;