import React, { useState } from "react";
import "./styles.css";
import {
  AutoForm,
  AutoFields,
  ErrorsField,
  SubmitField,
} from "uniforms-bootstrap4";
import { useNavigate } from "react-router-dom";
import LeadSchema from "./schema";
import { fetchCall } from "./fetchCall"

const Home = () => {
  const navigate = useNavigate();
  const showClick = () => {
    navigate("/show");
  };


  const submitData = async (data) => {
    if (Object.entries(data).length > 0) {
      try {
        await fetchCall("", "PUT", data);
        window.reload();
      } catch (error) {
        console.log("error: ", error);
      }

    }
  }

  return (
    <div className="App">
      <button
        type="button"
        className="btn btn-secondary mr-5"
        onClick={() => navigate("/show")}
        style={{ float: "right" }}
      >
        Show
      </button>
      <div className="uniforms">
        <AutoForm
          schema={LeadSchema}
          onSubmit={(e) => {
            submitData(e);
          }}
        >
          <h1 style={{ textAlign: "center" }}>Dynamic Form</h1>
          <AutoFields />
          <ErrorsField />
          <SubmitField />
        </AutoForm>
      </div>
    </div>
  );
};

export default Home;
