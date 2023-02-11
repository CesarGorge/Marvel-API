import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const FormRegistro = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  let navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          nombre: nombre,
          apellido: apellido,
        }),
      });
      if (!response.ok) {
        alert("Error al crear el usuario");
        return;
      }
      alert("Usuario creado");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-fluid">
      <div className="container p-2 w-50 bg-light mt-3 rounded shadow bg-form">
        <div className="row justify-content-center">
          <div className="col-8 p-5 rounded">
            <h2
              className="fw-bold text-center"
              style={{
                fontSize: "32px",
                fontWeight: "500",
              }}
            >
              Registro
            </h2>
            <h6
              className="fw-bold text-center py-2"
              style={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              ¡Qué placer tenerte en nuestra comunidad!
            </h6>
            <form action="#" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nnputname4" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname4"
                  aria-describedby="emailHelp"
                  value={nombre}
                  onChange={(event) => {
                    setNombre(event.target.value);
                  }}
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
                <label htmlFor="inputapellido4" className="form-label mt-2">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputapellido4"
                  aria-describedby="emailHelp"
                  value={apellido}
                  onChange={(event) => {
                    setApellido(event.target.value);
                  }}
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
                <label htmlFor="nputemail4" className="form-label mt-2">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputemail4"
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
              <div className="mb-4">
                <label htmlFor="Password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="Password"
                  className="form-control"
                  id="inputpassword4"
                  aria-describedby="emailHelp"
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
                <label htmlFor="inputpassword4" className="form-label mt-2">
                  Repetir contraseña
                </label>
                <input
                  type="Password"
                  className="form-control"
                  id="inputpassword4"
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
                  Crear Cuenta
                </button>
                <div className="col  text-center mt-5">
                  ¿Ya tienes una cuenta?
                  <Link
                    to="/login"
                    style={{ color: "red", textDecoration: "none" }}
                    className="ms-1"
                  >
                    Registrate
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
