import express from "express";

const app = express();

export default app;

import employees from "./db/employees.js";

app.route("/").get((request, response) => {
  response.send("Hello world!");
});

app.route("/employees/random").get((req, res) => {
  let randomIdx = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIdx]);
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;

  let found = false;
  let idx = -1;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === Number(id)) {
      found = true;
      idx = i;
      console.log("found");
    }
  }

  if (found === true) {
    res.send(employees[idx]);
  } else {
    res.status(404).send(null);
  }
});
