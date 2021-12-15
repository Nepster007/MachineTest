import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, InputGroup, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
export const Task = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/todos").then((res) => {
      setData(res.data.slice(0, 30));
      setLoading(true);
      console.log();
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    if (input !== "") {
      setData([...data, input]);
      document.getElementById("text-input").value = "";
    } else {
      alert("add a task");
    }
  };

  const handleDelete = (e) => {
    console.log(e);
    setData((data) => {
      return data.filter((val) => {
        return val.id !== e;
      });
    });
  };
  return (
    <>
      {loading ? (
        <ListGroup>
          <InputGroup className="w-25 mb-3">
            <FormControl
              placeholder="Add New Task"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              id="text-input"
              onChange={(e) => {
                setInput({ title: e.target.value, id: data.length + 1 });
              }}
            />
            <Button
              id="button-addon2"
              onClick={addTodo}
              style={{ marginLeft: "25px" }}
            >
              Add Task
            </Button>
          </InputGroup>
          {data.map((e, i) => {
            return (
              <ListGroup.Item key={i}>
                <div className="d-flex bd-highlight" id="task">
                  <div className="p-3 bd-highlight" style={{ width: "20px" }}>
                    {e.id}
                  </div>
                  <div className="w-50 p-3">{e.title}</div>
                  <div className="w-25 p-3">
                    {e.completed ? "false" : "true"}
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(e.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};
