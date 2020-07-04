import React, { Fragment, useState } from "react";
import "./style.css";
import {
  Grid,
  Button,
  Typography,
  TextField,
  makeStyles,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import {useHistory, useRouteMatch} from "react-router-dom"
import { guardarProyectoAction } from "../../../actions/proyectosAction";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
  textfield: {
    margin: "20px 0",
    padding: "0 15px",
  },
  input: {
    display: "none",
  },
}));
const NewProyect = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const classes = useStyle();
  const [image, setImage] = useState({ file: null, imageURL: "" });
  const { imageURL } = image;
  const [check, setCheck] = useState({
    react: false,
    js: false,
    redux: false,
    node: false,
    mongo: false,
    html: false,
    css: false,
    firebase: false,
    bt4: false,
    mysql: false,
  });
  const [proyecto, setProyecto] = useState({
    nombre: "",
    descripcion: "",
    proyectoURL: "",
    gitURL: "",
  });
  const { nombre, descripcion, proyectoURL, gitURL } = proyecto;
  const [lenguajes] = useState([]);
  const changeFile = (event) => {
    setImage({
      file: URL.createObjectURL(event.target.files[0]),
      imageURL: event.target.files[0],
    });
  };
  const handleCheck = (e) => {
    setCheck({ ...check, [e.target.name]: e.target.checked });
  };
  const changeProyecto = (e) => {
    setProyecto({ ...proyecto, [e.target.name]: e.target.value });
  };
  const onsubmitproyecto = (e) => {
    e.preventDefault();
    if (check.react) {
      lenguajes.push("react");
    }
    if (check.js) {
      lenguajes.push("js");
    }
    if (check.redux) {
      lenguajes.push("redux");
    }
    if (check.node) {
      lenguajes.push("node");
    }
    if (check.mongo) {
      lenguajes.push("mongo");
    }
    if (check.html) {
      lenguajes.push("html");
    }
    if (check.css) {
      lenguajes.push("css");
    }
    if (check.firebase) {
      lenguajes.push("firebase");
    }
    if (check.bt4) {
      lenguajes.push("bt4");
    }
    if (check.mysql) {
      lenguajes.push("mysql");
    }
    dispatch(
      guardarProyectoAction({
        nombre,
        descripcion,
        proyectoURL,
        gitURL,
        lenguajes,
        imageURL,
      })
    );
    history.push("/admin/")
  };
  return (
    <Fragment>
      <Grid container justify="center" className={classes.root}>
        <Typography variant="h4">Nuevo Proyecto</Typography>
        <Grid item xs={12} sm={12} md={10}>
          <form onSubmit={onsubmitproyecto}>
            <Grid container justify="center">
              <Grid item xs={12} sm={10} md={8}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    className={classes.textfield}
                  >
                    <TextField
                      fullWidth
                      label="Nombre"
                      name="nombre"
                      onChange={changeProyecto}
                    ></TextField>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    className={classes.textfield}
                  >
                    <TextField
                      fullWidth
                      id="outlined-textarea"
                      label="Descripción"
                      multiline
                      name="descripcion"
                      rows={2}
                      onChange={changeProyecto}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    className={classes.textfield}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="react"
                          checked={check.react}
                          onChange={handleCheck}
                        />
                      }
                      label="React"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    className={classes.textfield}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="js"
                          checked={check.js}
                          onChange={handleCheck}
                        />
                      }
                      label="JavaScript"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    className={classes.textfield}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="redux"
                          checked={check.redux}
                          onChange={handleCheck}
                        />
                      }
                      label="Redux"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    className={classes.textfield}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="node"
                          checked={check.node}
                          onChange={handleCheck}
                        />
                      }
                      label="NodeJS"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    className={classes.textfield}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="mongo"
                          checked={check.mongo}
                          onChange={handleCheck}
                        />
                      }
                      label="MongoDB"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    className={classes.textfield}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="html"
                          checked={check.html}
                          onChange={handleCheck}
                        />
                      }
                      label="Html5"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    className={classes.textfield}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="css"
                          checked={check.css}
                          onChange={handleCheck}
                        />
                      }
                      label="Css3"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    className={classes.textfield}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="firebase"
                          checked={check.firebase}
                          onChange={handleCheck}
                        />
                      }
                      label="Firebase"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    className={classes.textfield}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="bt4"
                          checked={check.bt4}
                          onChange={handleCheck}
                        />
                      }
                      label="Bootstrap4"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    className={classes.textfield}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="mysql"
                          checked={check.mysql}
                          onChange={handleCheck}
                        />
                      }
                      label="MySql"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.textfield}
                  >
                    <TextField
                      fullWidth
                      label="Git URL"
                      name="gitURL"
                      onChange={changeProyecto}
                    ></TextField>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.textfield}
                  >
                    <TextField
                      fullWidth
                      label="Proyecto URL"
                      name="proyectoURL"
                      onChange={changeProyecto}
                    ></TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={10} md={4}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12}>
                    <div className="container-uploadfile">
                      <div className="container-image">
                        {image.file ? (
                          <img
                            className="image"
                            alt="proyecto"
                            src={image.file}
                          ></img>
                        ) : (
                          <div className="cont-image-null"></div>
                        )}
                      </div>
                      <div className="container-foto">
                        <input
                          accept="image/*"
                          className={classes.input}
                          id="contained-button-file"
                          type="file"
                          onChange={changeFile}
                        />
                        <label htmlFor="contained-button-file">
                          <Button
                            variant="contained"
                            color="primary"
                            component="span"
                          >
                            Subir
                          </Button>
                        </label>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <div className="cont-guardarbtn">
              <Button type="submit" variant="contained" color="primary">
                Guardar
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default NewProyect;
