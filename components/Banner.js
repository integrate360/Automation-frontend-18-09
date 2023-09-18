import React from 'react';

function Banner({ imageUrl, altText }) {
  return (
    <div className="banner">
      <img src="https://wwwd601d2yq4c.cdn.e2enetworks.net/banner/magazine-banner-hp.jpeg" alt="Video" style={{width:"100%", height:"190px", objectFit: "contain"}}/>
    </div>
  );
}

export default Banner;
