import React, { Fragment, useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editarProyectoAction } from "../../../actions/proyectosAction";

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
const EditProyect = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const classes = useStyle();
  const [image, setImage] = useState({ file: null, imageURL: "" });
  const { imageURL } = image;
  const [react, setReact] = useState(false);
  const [js, setJs] = useState(false);
  const [redux, setRedux] = useState(false);
  const [node, setNode] = useState(false);
  const [mongo, setMongo] = useState(false);
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [firebase, setFirebase] = useState(false);
  const [bt4, setBt4] = useState(false);
  const [mysql, setMysql] = useState(false);
  const [proyecto, setProyecto] = useState({
    nombre: "",
    descripcion: "",
    proyectURL: "",
    gitURL: "",
  });
  const { nombre, descripcion, proyectURL, gitURL } = proyecto;
  const changeFile = (event) => {
    setImage({
      file: URL.createObjectURL(event.target.files[0]),
      imageURL: event.target.files[0],
    });
  };
  const proedit = useSelector((state) => state.proyectos.proyectoeditar);
  const { _id } = proedit;

  const [lenguajes] = useState([]);

  useEffect(() => {
    if (!proedit) return;
    setProyecto({
      ...proyecto,
      nombre: proedit.nombre,
      descripcion: proedit.descripcion,
      proyectURL: proedit.proyectURL,
      gitURL: proedit.gitURL,
    });
    setImage({ file: proedit.imageURL, imageURL: proedit.imageURL });
    for (let i = 0; i < proedit.lenguajes.length; i++) {
      const name = proedit.lenguajes[i];
      lenguajes.push(name);
    }

    for (let i = 0; i < lenguajes.length; i++) {
      if (lenguajes[i] === "react") {
        setReact(true);
      }
      if (lenguajes[i] === "js") {
        setJs(true);
      }
      if (lenguajes[i] === "redux") {
        setRedux(true);
      }
      if (lenguajes[i] === "node") {
        setNode(true);
      }
      if (lenguajes[i] === "mongo") {
        setMongo(true);
      }
      if (lenguajes[i] === "html") {
        setHtml(true);
      }
      if (lenguajes[i] === "css") {
        setCss(true);
      }
      if (lenguajes[i] === "firebase") {
        setFirebase(true);
      }
      if (lenguajes[i] === "bt4") {
        setBt4(true);
      }
      if (lenguajes[i] === "mysql") {
        setMysql(true);
      }
    }
  }, [proedit]);

  const handleCheck = (lgt) => {
    let result = lenguajes.indexOf(lgt);

    if (result !== -1) {
      lenguajes.splice(result, 1);
    } else {
      lenguajes.push(lgt);
    }
  };
  const changeProyecto = (e) => {
    setProyecto({ ...proyecto, [e.target.name]: e.target.value });
  };
  const onsubmitproyecto = (e) => {
    e.preventDefault();
    dispatch(
      editarProyectoAction({
        nombre,
        descripcion,
        proyectURL,
        gitURL,
        lenguajes,
        imageURL,
        _id,
      })
    );
    history.push("/admin");
  };
  return (
    <Fragment>
      <Grid container justify="center" className={classes.root}>
        <Typography variant="h4">Editar Proyecto</Typography>
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
                      value={nombre}
                      id="nombre-textfield"
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
                      defaultValue={descripcion}
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
                          checked={react}
                          name="react"
                          onChange={() => setReact(!react)}
                          onClick={() => handleCheck("react")}
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
                          checked={js}
                          onChange={() => setJs(!js)}
                          onClick={() => handleCheck("js")}
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
                          checked={redux}
                          onChange={() => setRedux(!redux)}
                          onClick={() => handleCheck("redux")}
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
                          checked={node}
                          onChange={() => setNode(!node)}
                          onClick={() => handleCheck("node")}
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
                          checked={mongo}
                          onChange={() => setMongo(!mongo)}
                          onClick={() => handleCheck("mongo")}
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
                          checked={html}
                          onChange={() => setHtml(!html)}
                          onClick={() => handleCheck("html")}
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
                          checked={css}
                          onChange={() => setCss(!css)}
                          onClick={() => handleCheck("css")}
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
                          checked={firebase}
                          onChange={() => setFirebase(!firebase)}
                          onClick={() => handleCheck("firebase")}
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
                          checked={bt4}
                          onChange={() => setBt4(!bt4)}
                          onClick={() => handleCheck("bt4")}
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
                          checked={mysql}
                          onChange={() => setMysql(!mysql)}
                          onClick={() => handleCheck("mysql")}
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
                      value={gitURL}
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
                      value={proyectURL}
                      label="Proyecto URL"
                      name="proyectURL"
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

export default EditProyect;
