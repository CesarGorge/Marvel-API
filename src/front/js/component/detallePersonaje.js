import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const DetallePersonajes = () => {
  const [infopers, setInfopers] = useState([]);
  const params = useParams();
  console.log("cargando personaje...");

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${params.id}?limit=20&ts=1&apikey=7e2e38a077932ff852196c1a01cea5a5&hash=65556a4131afe8e71e3b6710c53da9fe`
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(function (dato) {
        console.log(dato);
        setInfopers(dato.data.results);
      })
      .catch(function (error) {
        console.log("Looks like there was a problem", error);
      });
  }, []);

  return (
    <div className="container">
      {infopers.map((item, index) => (
        <div key={index} className="container d-flex justify-content-center">
          <div
            className="card personajesCard mb-3 "
            style={{
              width: "800px",
            }}
          >
            <div class="row g-0">
              <div class="col-md-5">
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  className="card-img-top object-fit-cover"
                  style={{
                    height: "418.5px",
                    borderRadius: "10px",
                    borderBottomRightRadius: "0px",
                    borderTopRightRadius: "0px",
                  }}
                  alt="img"
                />
              </div>
              <div class="col-md-6">
                <div className="card-body  ">
                  <h5 className="card-title">{item.name}</h5>
                  {item.description ? (
                    <p className="card-text">{item.description}</p>
                  ) : (
                    <p className="card-text">
                      No tiene descripcion, Thanos ha acado con ella!{" "}
                    </p>
                  )}
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
