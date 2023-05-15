import React from "react";
// import { render } from 'react-dom'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Button from "./Button";
import { deleteuser } from "./userSlice";
import "./css/user.css";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handeldelUser = (id) => {
    dispatch(deleteuser({ id }));
  };
  const render = () =>
    users.map((user) => (
      <div className="user" key={user.id}>
        <div className="user2">
          <h3 className="userli">{user.name}</h3>

          <span className="userli1">{user.email}</span>
          <div id="link">
            <Link to={`edit_user/${user.id}`}>
              <button id="btn">Edit</button>
            </Link>
            <button id="btn" onClick={() => handeldelUser(user.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    ));
  return (
    <div>
      <Link to="/Add_user">
        {/* <Button id="Add_user" className="btn btn-primary">
          Add user
        </Button> */}
        <button id="Add_user">Add user </button>
      </Link>
      <div>{users.length ? render() : <p id="No_user">No user</p>}</div>
    </div>
  );
};

export default User;
