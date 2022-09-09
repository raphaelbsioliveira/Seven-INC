import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://60decafeabbdd9001722d05c.mockapi.io/users/${id}`,
      user
    );
    history.push("/");
    alert("Alteração Realizada!")
  };

  const loadUser = async () => {
    const result = await axios.get(
      `https://60decafeabbdd9001722d05c.mockapi.io/users/${id}`
    );
    setUser(result.data);
  };
  return (
    <div className="">
      <div className="updateInformation">        
        <form onSubmit={(e) => onSubmit(e)} className="boxFormUpdate">
        <h2 className="textUpdate">Editar informações do Formulário</h2>
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
            <b>Salvar</b>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
