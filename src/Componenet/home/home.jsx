import React from 'react'
import { Link } from 'react-router-dom';
import MyDocument from '../Doc/document';


const Home = () => {
  return (
    <div>
      <h1>Documents</h1>
      <span></span>
      <ul>
      <li><Link to={<MyDocument />}>Sample document 1.pdf</Link></li>
      <li><a href='./'>Sample document 2.pdf</a></li>
      <li><a href='./'>Sample document 3.pdf</a></li>
      </ul>
    </div>
  )
}

export default Home;
