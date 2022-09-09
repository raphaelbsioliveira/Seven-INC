import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Home = () => {
  const history = useHistory();
  const [users, setUser] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(
      `https://60decafeabbdd9001722d05c.mockapi.io/users/${id}`
    );
    loadUsers();
  };

  const loadUsers = async () => {
    const result = await axios.get(
      `https://60decafeabbdd9001722d05c.mockapi.io/users`
    );
    setUser(result.data);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell>E-mail</StyledTableCell>
            <StyledTableCell>Telefone</StyledTableCell>
            <StyledTableCell >Salário</StyledTableCell>
            <StyledTableCell>Data da Contratação</StyledTableCell>
            <StyledTableCell align="center">Ação</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {users.map((user) => (
            <StyledTableRow>
              <StyledTableCell>{user.name}</StyledTableCell>
              <StyledTableCell>{user.email}</StyledTableCell>
              <StyledTableCell>{user.phone}</StyledTableCell>
              <StyledTableCell>{user.salary}</StyledTableCell>
              <StyledTableCell>{user.created_at}</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  onClick={() => history.push(`/user/${user.id}`)}
                >
                  <b>Informações</b>
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => history.push(`/edituser/${user.id}`)}
                >
                  <b>Editar</b>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUser(user.id)}
                >
                  <b>Deletar</b>
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;
