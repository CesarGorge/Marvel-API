import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-5 mx-5">
      <div className="container-fluid">
        <div className="d-flex">
          <Link to="/" class="navbar-brand p-0">
            <img
              src="https://res.cloudinary.com/dqzhscvpf/image/upload/v1675746318/marvel_logo_vkzviu.png"
              alt="marvel"
              style={{
                height: "56px",
                width: "124px",
              }}
            />
          </Link>
          <form className="d-flex mx-5 my-1" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar personaje..."
              aria-label="Search"
              style={{
                border: "1px solid lightgray",
                borderRadius: "29px",
                width: "435px",
                height: "46px",
              }}
            />
            <button className="btn" type="submit">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{
                  fontSize: "25px",
                  color: "gray",
                }}
              ></i>
            </button>
          </form>
        </div>
        <div className="d-flex my-2">
          <Link
            to="/personajes"
            className="nav-link active"
            aria-current="page"
            style={{
              color: "gray",
              fontSize: "20px",
            }}
          >
            Personajes
          </Link>
          <p
            className="nav-link active"
            style={{
              color: "gray",
              fontSize: "20px",
            }}
          >
            |
          </p>
          {localStorage.getItem("token") ? (
            <div className="dropdown me-1">
              <button
                className="btn dropdown-toggle bg-transparent text-center boton-profile-navbar"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={
                    store.usuario.info?.imagen
                      ? store.usuario.info.imagen
                      : "https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667342806/Animalium/Avatar_k0z1ns.png"
                  }
                  alt=""
                  className="d-flex justify-content-center text-center rounded-circle"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end dropdown-menu-start"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link to="/favoritos" className="dropdown-item">
                    Favoritos
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/login"
                    style={{ color: "#20C997" }}
                    onClick={() => {
                      actions.removeToken();
                    }}
                  >
                    <i className="fa-solid fa-right-from-bracket bg-transparent me-2"></i>
                    Cerrar sesion
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <React.Fragment>
              <Link
                to="/login"
                className="nav-link active"
                style={{
                  color: "black",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
              >
                Iniciar Sesión
              </Link>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};
