import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers",
        );
        setData(reponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erreur :", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>chargement en cours</p>;
  }
  return (
    <div className="offer-page">
      <div className="offer-image-container">
        {data.product_image && (
          <img src={data.product_image.secure_url} alt={data.product_name} />
        )}
      </div>
      <div className="offer-infos-container">
        <p className="offer-price">{data.product_price} € </p>
        <div className="offer-detals-list">
          {data.product_details &&
            data.product_details.map((detail, index) => {
              const keyName = Object.keys(detail)[0];
              return (
                <div key={index} className="detail-row">
                  <span className="detail-key">{keyname}</span>
                  <span className="detail-value">{detail[keyName]}</span>
                </div>
              );
            })}
        </div>
        <div className="offer-description-section">
          <p className="offer-title">{data.product_name}</p>
          <p className="offer-description">{data.product_description}</p>
        </div>
        {data.owner && (
          <div className="offer-owner">
            {data.owner.account.avatar && (
              <img
                src={data.owner.account.avatar.secure_url}
                alt={data.owner.account.username}
              />
            )}
            <span>{data.owner.account.username}</span>
          </div>
        )}
        <button className="buy-btn">Acheter</button>
      </div>
    </div>
  );
};

export default Offer;
