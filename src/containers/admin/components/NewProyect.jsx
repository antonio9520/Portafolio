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
import foto from "../../../resources/img/laptop2.jpg";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
  textfield: {
    margin: "20px 0",
    padding: "0 15px",
  },
  input: {
      display: "none"
  }
}));
const NewProyect = () => {
  const classes = useStyle();
  const [image, setImage] = useState({file: null});

  const changeFile = (event) => {
    setImage({ file: URL.createObjectURL(event.target.files[0]) })
  }
  return (
    <Fragment>
      <Grid container justify="center" className={classes.root}>
        <Typography variant="h4">Nuevo Proyecto</Typography>
        <Grid item xs={12} sm={12} md={10}>
          <form>
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
                    <TextField fullWidth label="Nombre"></TextField>
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
                      rows={2}
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
                      control={<Checkbox name="checkedA" />}
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
                      control={<Checkbox name="checkedA" />}
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
                      control={<Checkbox name="checkedA" />}
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
                      control={<Checkbox name="checkedA" />}
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
                      control={<Checkbox name="checkedA" />}
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
                      control={<Checkbox name="checkedA" />}
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
                      control={<Checkbox name="checkedA" />}
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
                      control={<Checkbox name="checkedA" />}
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
                      control={<Checkbox name="checkedA" />}
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
                      control={<Checkbox name="checkedA" />}
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
                    <TextField fullWidth label="Git URL"></TextField>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.textfield}
                  >
                    <TextField fullWidth label="Proyecto URL"></TextField>
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
              <Button variant="contained" color="primary">Guardar</Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default NewProyect;
