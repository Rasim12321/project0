import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function BasicExample3(props) {
  const navigate = useNavigate();

  return (
    <Card
      //   bg="light"
      style={{
        background: "rgb(231, 212, 246)",
        width: "18rem",
        margin: "20px auto",
        border: "black solid 2px",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <Card.Img
        style={{ height: "auto" }}
        variant="top"
        src={props.countryInfo.flag}
      />
      <Card.Body>
        <Card.Title>
          <p>country: {props.countryInfo.name}</p>
          <p>capital : {props.countryInfo.capital}</p>
          <p>area : {props.countryInfo.area}</p>
          <p>population : {props.countryInfo.population}</p>
        </Card.Title>
        <Button
          style={{ display: "block", margin: "auto" }}
          variant="primary"
          className="text-center"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample3;
