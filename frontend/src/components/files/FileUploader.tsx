import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserAsync } from "../../features/users/userSlice";

const FileUploader = (props: any): any => {
  const dispatch = useDispatch();
  const fileHandler = (e: any) => {
    dispatch(createUserAsync(e.target.files[0]));
  };

  return (
    <>
      <p>Please attach only 1 vaild CSV file</p>
      <input
        type="file"
        name="file"
        id="file"
        onChange={fileHandler}
        onClick={(e: any) => {
          // valueを初期化する
          e.target.value = "";
        }}
      />
    </>
  );
};

export default FileUploader;
