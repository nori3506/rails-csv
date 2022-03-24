import { useState } from "react";
import { createUsers } from "../../Api";

const FileUploader = (props: any): any => {
  const [attachedFile, setAttachedFile] = useState("");
  const fileHandler = (e: any): any => {
    setAttachedFile(e.target.value);
    createUsers(e.target.files[0]);
  };

  return (
    <>
      <p>Please attach only 1 vaild CSV file</p>
      <input type="file" name="file" id="file" onChange={fileHandler} />
    </>
  );
};

export default FileUploader;
