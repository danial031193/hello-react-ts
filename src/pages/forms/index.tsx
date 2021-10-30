import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ControlledForm from './controlled';
import UncontrolledForm from './uncontrolled';

const Forms: FC = () => {
  const location = useLocation<{ from?: string }>();

  return (
    <>
      <Link to="/">Go to home page</Link>
      <br />
      <p>Navigated from {location.state?.from ?? ''}</p>
      <br />
      Controlled Form
      <ControlledForm />
      <br />
      Uncontrolled Form
      <UncontrolledForm />
    </>
  );
};

export default Forms;
