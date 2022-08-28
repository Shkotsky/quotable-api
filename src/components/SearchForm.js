import React from "react";
import Form from "react-bootstrap/Form";

function SearchForm({ getQuote, handleSubmit, search }) {
  return (
    <Form.Control
      className="form-control d-flex mx-auto my-5 w-75"
      placeholder="Search for your favorite quote..."
      type="text"
      onSubmit={handleSubmit}
      onChange={(e) => getQuote(e.target.value)}
      value={search !== "a" ? search : ""}
    />
  );
}

export default SearchForm;
