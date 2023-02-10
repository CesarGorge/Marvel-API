import React, { useState, useEffect, useContext } from "react";

import { PersonajeCard } from "../component/personajeCard";

export const Personajes = () => {
  const [info, setInfo] = useState([]);

  console.log("cargando personajes...");

  useEffect(() => {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?limit=20&ts=1&apikey=7e2e38a077932ff852196c1a01cea5a5&hash=65556a4131afe8e71e3b6710c53da9fe"
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setInfo(data.data.results);
      })
      .catch(function (error) {
        console.log("Looks like there was a problem", error);
      });
  }, []);

  return (
    <div className="container personajes">
      <h1>Personajes</h1>
      <div className="container mt-5">
        <PersonajeCard info={info} />
      </div>
    </div>
  );
};
