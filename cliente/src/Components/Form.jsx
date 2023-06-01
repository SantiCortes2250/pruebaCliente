import axios from "axios";
import React, { useEffect, useState } from "react";
import { enviarDatos } from "../Helpers/api";
import Alerta from "./Alerta";
import style from "../styles/form.module.css";
import Exito from "./Exito";

const Form = () => {
  const [paises, setPaises] = useState();

  const [usuario, setUsuario] = useState({
    nombre: "",
    pais: "",
  });

  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);

  const { nombre, pais } = usuario;

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    enviarDatos(usuario);
    setExito(true);

    setTimeout(() => {
      setExito(false);
    }, 4000);

    setUsuario({
      nombre: "",
      pais: "",
    });
  };

  useEffect(() => {
    let URL = "https://restcountries.com/v3.1/all";

    const traerPaises = async () => {
      const res = await axios.get(URL);
      setPaises(res.data);
    };

    traerPaises();
  }, []);

  return (
    <div className={style.container_form}>
      <Exito exito={exito} setExito={setExito} />
      <form onSubmit={handleSubmit} className={style.form}>
        <label>Nombre Completo</label>
        <input
          type="text"
          onChange={handleChange}
          name="nombre"
          autoComplete="off"
          value={nombre}
        />
        <label>Pais</label>

        <select id="" onChange={handleChange} name="pais" value={pais}>
          <option value="">--Select--</option>
          {paises?.map((element) => (
            <option key={element.name.official} value={element.name.common}>
              {element.name.common}
            </option>
          ))}
        </select>
        <button>Enviar</button>
      </form>
      {error ? <Alerta mensaje="Todos los campos son obligatorios" /> : null}
    </div>
  );
};

export default Form;
