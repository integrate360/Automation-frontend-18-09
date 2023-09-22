import React, { useEffect, useState } from "react";
import axios from "axios";

const HeaderAds = () => {
  const [ad, setAd] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const api = `${apiUrl}/api/headerads/allads`;

    axios.get(api).then((response) => {
      const latestAd = response.data;
      console.log('latestAd::: ', latestAd);
      setAd(latestAd);
    });
  }, []);

  return (
    <div className="header-ad">
      {ad ? (
        <div>
          {ad.name}
          <a href={ad.link} target="_blank" rel="noopener noreferrer">
          <img
            src={ad[0].image}
            alt="Ad"
            style={{ width: "1100px", height: "100px"}}
          />
          </a>
        </div>
      ) : (
        <p>Loading ad...</p>
      )}
    </div>
  );
};

export default HeaderAds;
