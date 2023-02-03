import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const AddCity = () => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        className="input-box"
        placeholder="Enter a City"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button
        className="btn-addCity"
        variant="outline-secondary"
        id="button-addon2"
      >
        Add City
      </Button>
    </InputGroup>
  );
};

export default AddCity;
