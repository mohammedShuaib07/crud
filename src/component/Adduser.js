import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Textfield from "./Textfield";
import { addUser } from "./userSlice";

const Adduser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handelAdduser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };
  return (
    <div id="Add_user1">
      <Textfield
        lable="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "name" }}
      />

      <br></br>
      <Textfield
        lable="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "text", placeholder: "Email" }}
      />
      <button id="Adduser" onClick={handelAdduser}>
        submit
      </button>
    </div>
  );
};

export default Adduser;
