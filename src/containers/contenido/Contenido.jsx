import React, { Fragment } from "react";
import { Cover, JobExperience, Knowledge, Proyects, About } from "../";

const Contenido = () => {
  return (
    <Fragment>
      <Cover />
      <About />
      <JobExperience />
      <Knowledge />
      <Proyects />
    </Fragment>
  );
};

export default Contenido;
