import { useNavigate, useRouteError } from "react-router-dom";
import React, { type JSX } from "react";
import isErrorWithMessage from "../utils/isErrorWithMessage";

function Error(): JSX.Element {
  const navigate = useNavigate();
  const error = useRouteError();

  const errorMessage = isErrorWithMessage(error)
    ? error.data || error.message
    : "Unknown error occurred.";

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorMessage}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
