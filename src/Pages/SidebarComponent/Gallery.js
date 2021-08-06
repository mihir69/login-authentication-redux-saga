import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('https://breakingbadapi.com/api/characters')
      .then((res) => {
        console.log(res.data);
        setImages(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ display: 'inline-block' }}>
      {images.map((item) => (
        <img
          style={{ margin: '20px', height: '500px', width: '500px' }}
          src={item.img}
          alt={item.name}
        />
      ))}
    </div>
  );
}

export default Gallery;
