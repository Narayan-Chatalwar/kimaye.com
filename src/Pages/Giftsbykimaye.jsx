import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Giftsbykimaye = () => {

    const [freshcutssdata, setallfreshcutsdata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      axios
        .get("http://localhost:8080/giftsbykimaye")
        .then((res) => res.data)
        .then((data) => setallfreshcutsdata(data));
    }, []);
  
  
  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <div
          className="Link"
          style={{
            display: "flex",
            //   border: "1px solid",
            width: "fit-content",
            gap: "20px",
            margin: "auto",
            marginTop: "25px",
          }}
        >
          <p onClick={() => navigate("../allfruits")}>ALL FRUITS</p>
          <p onClick={() => navigate("../freshcuts")}> FRESH CUTS</p>
          <p onClick={() => navigate("../fruitcombos")}> FRUIT COMBOS</p>
          <p
            onClick={() => navigate("../giftsbykimaye")}
            style={{ textDecoration: "underline" }}
          >
            GIFTS BY KIMAYE
          </p>
        </div>
        <div className="MapBox">
          {freshcutssdata.map((el, idx) => (
            <div>
              <img
                className="Img"
                style={{ width: "100%", borderRadius: "30px", height: "80%" }}
                src={el.image}
                alt="broken"
              />
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "20px",

                  marginTop: "15px",
                }}
              >
                {el.title}
              </h1>
              <h3
                style={{
                  textAlign: "center",
                  color: "brown",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                ₹{el.price}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Giftsbykimaye;
