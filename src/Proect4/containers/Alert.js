import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
function BasicExample2() {
  const navigate = useNavigate();
  return (
    <>
      <Alert variant="danger">ERROR: No Country INFO found</Alert>
      <Button
        style={{ display: "block", margin: "auto" }}
        variant="primary"
        className="center"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
    </>
  );
}

export default BasicExample2;
