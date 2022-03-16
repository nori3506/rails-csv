import React from "react";

export const User = (props: any) => {
  const { user } = props;
  return (
    <div>
      <div className="">
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender ? "Male" : "Female"}</p>
        <p>Hobby: {user.hobby}</p>
      </div>
    </div>
  );
};

export default User;
