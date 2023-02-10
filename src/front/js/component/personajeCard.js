import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const PersonajeCard = ({ info }) => {
  return (
    <div className="row">
      {info.map((item, index) => (
        <div key={index} className="col">
          <div className="card personajesCard mb-4">
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              className="card-img-top"
              style={{
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                borderBottomRightRadius: "0px",
                borderBottomLeftRadius: "0px",
              }}
              alt="img"
            />
            <div className="card-body  ">
              <h5 className="card-title">{item.name}</h5>
              <div className="btn-explorar mt-4">
                <Link to={`/personaje/${item.id}`}>
                  <button
                    type="button"
                    className="btn-explorar bg-dark mt-0"
                    style={{
                      width: "110px",
                      height: "40px",
                      borderRadius: "29px",
                      border: "none",
                      color: "white",
                    }}
                  >
                    Detalle
                  </button>
                </Link>
              </div>
            </div>
            <div />
          </div>
        </div>
      ))}
    </div>
  );
};
