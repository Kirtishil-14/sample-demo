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
const Home = () => {
  const navigate = useNavigate();
  const showClick = () => {
    navigate("/show");
  };

  const [formData, setFormData] = useState({});
  console.log("formData------>", formData);
  return (
    <div className="App">
      <button
        disabled={!Object.entries(formData).length > 0}
        type="button"
        className="btn btn-secondary mr-5"
        onClick={() => navigate("/show", {
          state: formData
        })}
        style={{ float: "right" }}
      >
        Show
      </button>
      <div className="uniforms">
        <AutoForm
          schema={LeadSchema}
          onSubmit={(e) => {
            console.log("e-> ", e.data);
            setFormData(e)
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
