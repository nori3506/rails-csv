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
      console.log(data);
    })
    .catch((error) => {
      console.log("Error:", error);
      return {};
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
