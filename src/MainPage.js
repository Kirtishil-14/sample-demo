import React from "react";
import { useLocation } from "react-router-dom";

const data = [
  {
    name: 'Sujit Mandal',
    email: 'msujit017@gmail.com',
    phone: 8779957294,
    developer: 'frontend',
    message: ''
  },
  {
    name: 'Sujit Mandal',
    email: 'msujit017@gmail.com',
    phone: 8779957294,
    developer: 'frontend',
    message: ''
  },
  {
    name: 'Sujit Mandal',
    email: 'msujit017@gmail.com',
    phone: 8779957294,
    developer: 'frontend',
    message: ''
  },
  {
    name: 'Sujit Mandal',
    email: 'msujit017@gmail.com',
    phone: 8779957294,
    developer: 'frontend',
    message: ''
  },
  {
    name: 'Sujit Mandal',
    email: 'msujit017@gmail.com',
    phone: 8779957294,
    developer: 'frontend',
    message: ''
  },

];

const MainPage = (props) => {
  const { state } = useLocation();

  return <div>
    <table className="table table-dark">
      <thead>
        <th >#</th>
        <td className="table-active">Name</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Developer</td>
        <td>Message</td>
        <td>Options</td>
      </thead>
      <tbody>
        {data.map((dat, i) => {
          return (
            <tr key={i}>
              <th >{i}</th>
              <td className="table-active">{dat.name}</td>
              <td>{dat.email}</td>
              <td>{dat.phone}</td>
              <td>{dat.developer}</td>
              <td>{dat.message}</td>
              <td>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button type="button" class="btn btn-danger">DELETE</button>
                  <button type="button" class="btn btn-warning">UPDATE</button>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>;
};

export default MainPage;
