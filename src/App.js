import React from "react";
// import logo from './logo.svg';
import './App.css';

const App = () => {
  const APP_ID = '669c50ff';
  const APP_KEY = 'a48f6771b754b5fa85f57ee5fde64531';

  const exapleReq = 
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  return (
    <div className="APP">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default App;
