import React, { useState, useEffect } from 'react';
import './TrippinOnCats.css';

const TrippinOnCats = ({ catHistory, setCatHistory, setBannedAttributes }) => {
  const [catData, setCatData] = useState(null);

  const fetchData = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_4L450YR75W3BYo7Idc68Yq9vzXNi4Qf3dyHOz2GxvIoptKBqZUiEwy6lRb4MNOdt');
    const data = await response.json();
    setCatData(data[0]);
    setCatHistory([...catHistory, data[0]]);
  };

  useEffect(() => {
    fetchData(); // Fetch data initially
  }, []);
  return (
    <div className="whole-page">
      <h1>Trippin' on Cats</h1>
      <h3>Discover cats from your wildest dreams!</h3>
      <span>😺😸😹😻😼😽🙀😿😾</span>
      <br />
      <br />
      <div className="discover-container">
        <div className="listing-container">
          <h2>{catData ? catData.breeds[0].name : ''}</h2>
          <div className="buttons">
          <button type="attribute" className="attribute-buttons" onClick={() => setBannedAttributes(prev => [...prev, catData.breeds[0].alt_names])}>
              {catData ? catData.breeds[0].alt_names: 'Loading...'}
          </button>
          <button type="attribute" className="attribute-buttons" onClick={() => setBannedAttributes(prev => [...prev, catData.breeds[0].weight.imperial+" lbs"])}>
              {catData ? catData.breeds[0].weight.imperial+" lbs" : 'Loading...'}
          </button>
          <button type="attribute" className="attribute-buttons" onClick={() => setBannedAttributes(prev => [...prev, catData.breeds[0].origin])}>
              {catData ? catData.breeds[0].origin : 'Loading...'}
          </button>
          <button type="attribute" className="attribute-buttons" onClick={() => setBannedAttributes(prev => [...prev, catData.breeds[0].weight.metric])}>
              {catData ? catData.breeds[0].weight.metric+" years" : 'Loading...'}
          </button>
            <br />
            <br />
          </div>
          <img
            className="cat-pic"
            src={catData ? catData.url : ''}
            alt="random image from Cat API"
            height="250px"
            width="250px"
          />
        </div>
        <br />
        <button onClick={fetchData} type="discover" className="discover-btn">🔀 Discover!</button>
      </div>
    </div>
  );
};

export default TrippinOnCats;
