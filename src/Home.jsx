import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://last-airbender-api.fly.dev/api/v1/characters")
      .then((res) => {
        // Pick the first character who is not Chong
        const character = res.data.find(c => c.name !== "Chong");

        if (character) {
          setData({
            name: character.name,
            affiliation: character.affiliation || "Not available",
            profession: character.profession || "Not available",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data) {
    return <p style={{ textAlign: "center", padding: "20px" }}>Loading...</p>;
  }

  return (
    <div style={{ backgroundColor: "#f9f9f9", color: "#2c3e50", padding: "20px", textAlign: "center" }}>
      <h1>{data.name}</h1>
      <p><strong>Affiliation:</strong> {data.affiliation}</p>
      <p><strong>Profession:</strong> {data.profession}</p>
    </div>
  );
};

export default Home;
