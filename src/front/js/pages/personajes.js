import React, { useState, useEffect } from "react";
import { PersonajeCard } from "../component/personajeCard";

export const Personajes = () => {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [busqueda, Setbusqueda] = useState([]);
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = info.filter((elemento) => {
      if (
        typeof elemento.name === "string" &&
        elemento.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });

    Setbusqueda(resultadosBusqueda);
  };

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
      <div className="container d-flex">
        <h1>Personajes</h1>
        <form className="d-flex mx-5 my-1" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar personaje..."
            aria-label="Search"
            value={search}
            onChange={searcher}
            style={{
              border: "1px solid lightgray",
              borderRadius: "29px",
              width: "435px",
              height: "46px",
            }}
          />
          <i
            className="fa-solid fa-magnifying-glass pt-2 "
            style={{
              fontSize: "25px",
              color: "gray",
              paddingLeft: "6px",
            }}
          ></i>
        </form>
      </div>
      <div className="container mt-5">
        <PersonajeCard info={busqueda.length ? busqueda : info} />
      </div>
    </div>
  );
};
