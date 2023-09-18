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
          <img
            src={ad[0].image}
            alt="Ad"
            style={{ width: "900px", height: "80px", marginTop:"20px"}}
          />
        </div>
      ) : (
        <p>Loading ad...</p>
      )}
    </div>
  );
};

export default HeaderAds;
