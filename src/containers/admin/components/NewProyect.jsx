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
import { useHistory } from "react-router-dom";
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
  const handleCheck = (lgt) => {
    // setCheck({ ...check, [e.target.name]: e.target.checked });
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
      guardarProyectoAction({
        nombre,
        descripcion,
        proyectoURL,
        gitURL,
        lenguajes,
        imageURL,
      })
    );
    history.push("/admin");
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
