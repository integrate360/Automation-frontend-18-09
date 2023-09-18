import React, { useEffect, useState } from "react";
import axios from "axios";

const HeaderAds = () => {
  const [ad, setAd] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    // Define your API URL here
    const api = `${apiUrl}/api/headerads/allads`;

    // Fetch the latest ad
    axios.get(api).then((response) => {
      // Assuming your API returns ad data in the response.data object
      const latestAd = response.data;
      console.log('latestAd::: ', latestAd);

      // Set the ad in the state
      setAd(latestAd);
    });
  }, []);

  return (
    <div className="header-ad">
      {ad ? (
        <div>
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
