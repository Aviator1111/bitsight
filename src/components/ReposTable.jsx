import React from "react";
import "./Table.css";

export const ReposTable = ({ title, data }) => {
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
          {data.map(repo => {
            const { id, name, description, stars } = repo;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{stars}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
