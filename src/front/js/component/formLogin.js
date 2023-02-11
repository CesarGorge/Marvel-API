import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const FormLogin = (props) => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        alert("Error iniciando sesión");
        return;
      }
      alert("User authenticated");
      const body = await response.json();
      console.log(body);

      localStorage.setItem("token", body.token);
      localStorage.setItem("id", body.id);

      actions.setAutUsuario(body);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-fluid">
      <div className="container p-2 w-50 bg-light mt-3 rounded shadow bg-form">
        <div className="row justify-content-center ">
          <div className="col-8 p-5 rounded">
            <h2
              className="fw-bold text-center py-2"
              style={{
                fontSize: "32px",
                fontWeight: "500",
              }}
            >
              Ingresa a tu cuenta
            </h2>
            <h6
              className="fw-bold text-center py-2"
              style={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Qué gusto tenerte de vuelta
            </h6>
            <form action="#" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
              </div>
              <div className="mb-1">
                <label htmlFor="inputPassword4" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
              </div>
              {/*<div className="mb-3">
                <span>
                  <a
                    href="#"
                    style={{
                      color: "#20C997",
                      float: "right",
                      textDecoration: "underline",
                    }}
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </span>
                  </div>*/}
              <br></br>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-success bg-dark"
                  style={{
                    borderRadius: "29px",
                    border: "none",
                    color: "white",
                  }}
                >
                  Ingresar
                </button>
              </div>
            </form>

            <div className="col  text-center mt-5">
              ¿Aun no tienes una cuenta?
              <Link
                to="/registro"
                style={{ color: "red", textDecoration: "none" }}
                className="ms-1"
              >
                Registrate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
