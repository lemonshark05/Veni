import React, { useState } from 'react';
import './App.css';
import TrippinOnCats from './components/TrippinOnCats'; 

function App() {
  const [catHistory, setCatHistory] = useState([])
  const [bannedAttributes, setBannedAttributes] = useState([]);

  return (
    <div id="root"> 
    <div>

      {/* Ban List Sidebar */}
      <div className="sideNav">
        <h2>Ban List</h2>
        <h4>Select an attribute in your listing to ban it</h4>
        <ul>
          {bannedAttributes.map((attr, index) => (
            <li className="attribute-buttons" key={index}>{attr}</li>
          ))}
        </ul>
      </div>

      {/* Trippin' on Cats Section */}
      {/* <TrippinOnCats /> */}
      <TrippinOnCats catHistory={catHistory} setCatHistory={setCatHistory} setBannedAttributes={setBannedAttributes}/>

      {/* History Sidebar */}
      <div className="history-sidebar">
        <h2>Who have we seen so far?</h2>
        <div className="history-container">
          {catHistory.map((cat, index) => (
            <li key={index}>
              <img
                className="cat-pic"
                src={cat.url}
                alt="random image from Cat API"
                width="50"
                height="50"
              />
              <p> A {cat.breeds[0].name} cat from {cat.breeds[0].origin}</p>
            </li>
          ))}
        </div>
      </div>

    </div>
    </div>
  );
}

export default App;