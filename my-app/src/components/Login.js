import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
    console.log(password);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        user: userName,
        password: password,
      })
    );
    window.location.href = `${window.location.href}home`;
  };
  return (
    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group" onSubmit={handleSubmit}>
          <label>User Name</label>
          <input
            type="text"
            className="w-25 form-control"
            id="exampleInputEmail1"
            placeholder="UserName"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="w-25 form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
