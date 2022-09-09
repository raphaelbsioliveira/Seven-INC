import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    document: "",
    email: "",
    phone: "",
    birth_date: "",
    salary: "",
    created_at: "",
  });

  const { name, document, email, phone, birth_date, salary, created_at } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://60decafeabbdd9001722d05c.mockapi.io/users", user);
    history.push("/");
    alert("Cadastrado!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Formik
          initialValues={{
            name: "",
            document: "",
            email: "",
            phone: "",
            birth_date: "",
            salary: "",
            created_at: "",
          }}
        >
          {(formik) => (
            <form onSubmit={(e) => onSubmit(e)} className="boxForm">
              <h2 className="titleForm">Formulário de Cadastro</h2>
              <div>
                <TextField
                  name="name"
                  label="Nome"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div>
                <TextField
                  name="document"
                  label="CPF"
                  value={document}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div>
                <TextField
                  name="email"
                  label="E-mail"
                  type="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div>
                <TextField
                  name="phone"
                  label="Telefone"
                  value={phone}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div>
                <TextField
                  name="birth_date"
                  label="Data de nascimento"
                  value={birth_date}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div>
                <TextField
                  name="salary"
                  label="Salário"
                  value={salary}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div>
                <TextField
                  name="created_at"
                  label="Data de contratação"
                  value={created_at}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <br />
              <Button variant="contained" color="primary" type="submit">
                <b>Cadastrar</b>
              </Button>
            </form>
          )}
        </Formik>
      </header>
    </div>
  );
};

export default AddUser;
