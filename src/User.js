import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    document: "",
    email: "",
    phone: "",
    birth_date: "",
    salary: "",
    created_at: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(
      `https://60decafeabbdd9001722d05c.mockapi.io/users/${id}`
    );
    setUser(res.data);
  };
  return (
    <div className="App">
      <div className="Information">
        <h1 className="titleForm">Id: {user.id}</h1>
        <ul className="boxIformation">
          <li className="userInformation">Nome: {user.name}</li>
          <li className="userInformation">CPF: {user.document}</li>
          <li className="userInformation">E-mail: {user.email}</li>
          <li className="userInformation">Telefone: {user.phone}</li>
          <li className="userInformation">
            Data de Nascimento: {user.birth_date}
          </li>
          <li className="userInformation">Salário: R$ {user.salary}</li>
          <li className="userInformation">
            Data de Contratação: {user.birth_date}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
