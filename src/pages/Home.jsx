import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers",
        );
        console.log("Données reçues de l'API :", reponse.data);
        setData(reponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erreur :", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <p>chargement en cours...</p>;
  }
  return (
    <div className="home container">
      <div className="offers-grid">
        {data.offers.map((offer) => {
          return (
            <Link to={`/offer/${offer._id}`} key={offer._id}>
              <p>{offer.product_name}</p>
              {offer.product_image && (
                <img src="{offer.product_image" alt={offer.product_name} />
              )}
              <div className="offer-details">
                {offer.product_details.map((detail, index) => {
                  return <span key={index}>{Object.values(detail)[0]} </span>;
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
