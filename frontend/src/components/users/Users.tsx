import React, { useEffect, useState } from "react";
import User from "./User";
const API_URL = "http://localhost:3000";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/users.json`, {
      method: "GET",
      headers: {
        "Content-Type": "applicaiton/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error:", error);
        return {};
      });
  }, []);

  return (
    <div className="">
      <h1>Users List</h1>
      {users.length > 0 ? (
        users.map((user) => <User user={user} />)
      ) : (
        <>No User Data Exist</>
      )}
    </div>
  );
};

export default Users;
