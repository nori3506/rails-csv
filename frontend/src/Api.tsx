const API_URL = "http://localhost:3000";

export const createUsers = (props: any): any => {
  const formData = new FormData();
  formData.append("file", props);

  fetch(`${API_URL}/users.json`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.ok) {
        throw Error(data.message);
      }
      return "ok";
    })
    .catch((error) => {
      console.log("Error:", error.message);
      return error;
    });
};

export const fetchUsers = async () => {
  await fetch(`${API_URL}/users.json`, {
    method: "GET",
    headers: {
      "Content-Type": "applicaiton/json",
    },
  });
};
