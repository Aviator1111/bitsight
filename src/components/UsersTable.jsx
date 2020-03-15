import React from "react";
import "./Table.css";

export const UsersTable = ({ title, data }) => {
  const header = Object.keys(data[0]);
  return (
    <div>
      <h1 className="title">{title}</h1>
      <table className="table">
        <tbody>
          <tr>
            {header.map((key, index) => {
              return <th key={index}>{key.toUpperCase()}</th>;
            })}
          </tr>
          {data.map(user => {
            const { id, login, avatar, followers } = user;
            return (
              <tr key={login}>
                <td>{id}</td>
                <td>
                  <img src={avatar} alt={login} />
                </td>
                <td>{login}</td>
                <td>{followers}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
