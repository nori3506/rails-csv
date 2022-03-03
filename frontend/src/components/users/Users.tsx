import React, { useEffect } from "react";
const API_URL = "http://localhost:3000";

export const Users = () => {
  useEffect(() => {
    fetch(`${API_URL}/users.json`, {
      method: "GET",
      headers: {
        "Content-Type": "applicaiton/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log("Error:", error);
        return {};
      });
  }, []);

  return (
    <h1>Users</h1>
    // <p>{user info}</p>
  );
};
