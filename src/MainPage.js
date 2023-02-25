import React, { useEffect, useState } from "react";
import { fetchCall } from "./fetchCall"

import LeadSchema from "./schema";


const MainPage = (props) => {
  const [data, setData] = useState();
  const [allKeys, setAllKeys] = useState(Object.keys(LeadSchema.schema.properties));

  const getAllData = async () => {
    try {
      const responseData = await fetchCall("all", "GET",);
      setData(responseData)
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  const deleteUser = async (email) => {
    let payload = { email };
    await fetchCall(email, "DELETE", payload);
    getAllData();
  }


  return <div>
    <table className="table table-dark">
      <thead>
        <th >#</th>
        {allKeys.length > 0 && allKeys.map((title) => {
          return <td className="table-active text-uppercase">{title}</td>
        })}
      </thead>
      <tbody>
        {data?.length > 0 && data.map((dat, i) => {
          return (
            <tr key={i}>
              <th >{i}</th>
              {allKeys.length > 0 && allKeys.map((title, i) => {
                return <td className="table-active">{dat[allKeys[i]]}</td>
              })}
              <td>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button type="button" className="btn btn-danger" onClick={() => deleteUser(dat.email)}>DELETE</button>
                  <button type="button" className="btn btn-warning">UPDATE</button>
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
