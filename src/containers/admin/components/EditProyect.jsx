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
import {  } from "../../../actions/proyectosAction";
import {setearArray} from "./function";

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
  const [lenguajes] = useState(proedit.lenguajes);
 
  useEffect(() => {
    if (!proedit) return;
        setProyecto({
            ...proyecto,
            nombre: proedit.nombre,
            descripcion: proedit.descripcion,
            proyectURL: proedit.proyectURL,
            gitURL: proedit.gitURL,
          });
        setImage({file: proedit.imageURL}); 
        
        for(let i = 0; i < lenguajes.length; i++ ){
           const name = lenguajes[i]
                setCheck({...check, [name]: true})
                console.log(check)
           }
           console.log(check)
  }, [proedit]);

  const handleCheck = (lgt) => {
    let result = lenguajes.indexOf(lgt);

    if (result !== -1) {
      lenguajes.splice(result, 1);
    } else {
      lenguajes.push(lgt);
    }
    console.log(lenguajes)
  };
  const changeProyecto = (e) => {
    setProyecto({ ...proyecto, [e.target.name]: e.target.value });
  };
  const onsubmitproyecto = (e) => {
    e.preventDefault();
    
    
    history.push("/admin/");
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
                          name="react"
                          checked={check.react}
                          onChange={() => handleCheck("react")}
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
                          onChange={() => handleCheck("js")}
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
                          onChange={() => handleCheck("redux")}
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
                          onChange={() => handleCheck("node")}
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
                          onChange={() => handleCheck("mongo")}
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
                          onChange={() => handleCheck("html")}
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
                          onChange={() => handleCheck("css")}
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
                          onChange={() => handleCheck("firebase")}
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
                          onChange={() => handleCheck("bt4")}
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
                          onChange={() => handleCheck("mysql")}
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
