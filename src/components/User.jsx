import React from "react";
import { connect } from "react-redux";
import { UsersTable } from "./UsersTable";
import { getProlificUsers } from "../store/actions";
import "./User.css";

const Users = ({ users, getUsers }) => {
  return (
    <div>
      <UsersTable title="Git Hub Prolific Users" data={users} />
      <button id="prolific_users" onClick={getUsers}>
        Refresh Users
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getProlificUsers());
    }
  };
};
export const ConnectedUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
