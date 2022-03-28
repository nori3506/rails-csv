import { UsersState } from "./userSlice";

const API_URL = "http://localhost:3000";

export const fetchUsers = async () => {
  console.log("aaaaaaaaaa");
  return fetch(`${API_URL}/users.json`, {
    method: "GET",
    headers: {
      "Content-Type": "applicaiton/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error:", error);
      return {} as UsersState;
    });
};

export const createUsers = async (props: any) => {
  const formData = new FormData();
  formData.append("file", props);

  return fetch(`${API_URL}/users.json`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status !== "ok") {
        throw Error(data.message);
      }
      return data;
    })
    .catch((error) => {
      console.log("Error:", error);
      return {} as UsersState;
    });
};
