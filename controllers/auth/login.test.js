const express = require("express");
const request = require("supertest");
// const { describe, test, beforeAll, afterAll } = require("jest");

const login = require("./login");

const app = express();

const router = express.Router();
router.post("/login", login);

app.use("/api/users", router);
// app.post("/api/users/login", login);

const body = { email: "mango8@gmail.com", password: "123457" };

describe("test login controller", () => {
  beforeAll(() => {
    app.listen(3000);
    console.log("Start");
  });

  afterAll(() => {
    app.done();
    console.log("End");
  });

  test("login user and return token", async () => {
    const response = await request(app).post("/api/users/login").send(body);
    console.log(response.status);
  });
});
