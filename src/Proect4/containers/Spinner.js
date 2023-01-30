import Spinner from "react-bootstrap/Spinner";

function BasicExample() {
  return (
    <div className="text-center aline-middle">
      <Spinner className="aline-middle" animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
    </div>
  );
}

export default BasicExample;
