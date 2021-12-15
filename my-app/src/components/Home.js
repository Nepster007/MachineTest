import React, { useState } from "react";
import { Card, Dropdown, DropdownButton } from "react-bootstrap";
import { Info } from "./Info";

export const Home = () => {
  const [input, setInput] = useState("ReactJS");

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.name);
  };

  return (
    <>
      <DropdownButton
        id="dropdown-basic-button"
        style={{ margin: "50px 100px" }}
        title={input}
      >
        <Dropdown.Item name="ReactJS" onClick={handleInput}>
          ReactJS
        </Dropdown.Item>
        <Dropdown.Item name="Angular" onClick={handleInput}>
          Angular
        </Dropdown.Item>
        <Dropdown.Item name="HTML" onClick={handleInput}>
          HTML
        </Dropdown.Item>
      </DropdownButton>

      <Card style={{ width: "75%", marginLeft: "100px" }}>
        <Card.Body>
          <Card.Title>{input}</Card.Title>
          <Card.Text>
            <Info data={input} />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
