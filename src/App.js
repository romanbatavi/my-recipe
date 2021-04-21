import React, {useEffect, useState} from "react";
// import logo from './logo.svg';
import './App.css';

const App = () => {
  const APP_ID = '669c50ff';
  const APP_KEY = 'a48f6771b754b5fa85f57ee5fde64531';

  useEffect (() => {

  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <h1 onClick ={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;
