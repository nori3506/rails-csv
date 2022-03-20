import PropTypes from "prop-types";

function FileUploader(props: any) {
  return (
    <>
      <input type="file" name="file" id="file" />
    </>
  );
}

FileUploader.propTypes = {};

export default FileUploader;
