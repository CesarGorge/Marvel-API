import React from "react";
import { Link } from "react-router-dom";

export const ModalLogin = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">
              ¡Inicia sesión para poder continuar!
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body fs-6 ">
            Para explorar los personajes y conocer mas sobre ellos es necesario
            iniciar sesión{" "}
          </div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-primary bg-dark"
              data-bs-dismiss="modal"
              style={{
                width: "150px",
                height: "40px",
                borderRadius: "29px",
                border: "none",
                color: "white",
              }}
            >
              <Link
                to="/login"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Iniciar Sesión
              </Link>
            </button>
            <div
              className="col-10 text-center mt-3 fs-6"
              data-bs-dismiss="modal"
            >
              ¿No tienes cuenta aún?
              <Link
                to="/registro"
                style={{
                  color: "red",
                  marginLeft: "5px",
                  textDecoration: "none",
                }}
              >
                Regístrate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
