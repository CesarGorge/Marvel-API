import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="container d-flex hero">
      <div className="row col-8">
        <h1 className="parrafo1 m-0">
          ¡Descubre tus personajes favoritos de Marvel!
        </h1>
        <h2 className="parrafo2 mt-4 col-8">
          Explora los personajes de Marvel, agrégalos a tus favoritos y conoce
          más sobre ellos.
        </h2>
        <div className="btn-explorar mt-4">
          <Link to="/personajes">
            <button
              type="button"
              className="btn-explorar bg-dark"
              style={{
                width: "174px",
                height: "47px",
                borderRadius: "29px",
                border: "none",
                color: "white",
              }}
            >
              Explorar
            </button>
          </Link>
        </div>
      </div>

      <img
        src="https://res.cloudinary.com/dqzhscvpf/image/upload/v1675746362/pngwing.com_xap621.png"
        alt="hulk"
        style={{
          width: "376px",
          height: "402px",
          position: "absolute",
          left: "955px",
          top: "229px",
        }}
      />
    </div>
  );
};
