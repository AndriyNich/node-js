// const mongoose = require("mongoose");
// require("dotenv").config();
// const express = require("express");

//const { describe, test, beforeAll, afterAll } = require("jest");

// const login = require("./login");
// const { error } = require("console");

// const app = express();

// const router = express.Router();
// router.post("/login", login);

// app.use("/api/users", router);
// // app.post("/api/users/login", login);

// const { DB_HOST, PORT } = process.env;

// mongoose.set("strictQuery", true);

// const body = { email: "mango8@gmail.com", password: "123457" };

// describe("test login controller", () => {
//   beforeAll(() => {
//     mongoose
//       .connect(DB_HOST)
//       .then(() => {
//         console.log("Database connection successfull");
//         app.listen(PORT, () => {
//           console.log("Start");
//         });
//       })
//       .catch((error) => {
//         console.log(`Err: ${error.message}`);
//         process.exit(1);
//       });
//   });

//   afterAll(() => {
//     console.log("End");
//   });

//   test("login user and return token", async () => {
//     // const response = await request(app).post("/api/users/login").send(body);
//     // console.log(response.status);
//     console.log("test");
//   });
// });

// =--
// const request = require("supertest");
// const app = require("../../app");

// describe("totdos API", () => {
//   test("login user and return token", async () => {
//     const response = await request(app)
//       .post("/api/users/login")
//       .send({ email: "mango8@gmail.com", password: "123457" });

//     console.log(response.status);
//     // console.log("test");
//   });

// });

const request = require("supertest");
const mongoose = require("mongoose");
require("dotenv").config();
const app = require("../../app");

const { DB_HOST, PORT } = process.env;

describe("POST /api/users/login", () => {
  beforeAll(() => {
    mongoose.set("strictQuery", true);

    mongoose.connect(DB_HOST).then(() => {
      app.listen(PORT, () => {});
    });
  });

  it("should return token and user", async () => {
    const testUser = {
      email: "mango8@gmail.com",
      password: "123457",
    };

    const res = await request(app).post("/api/users/login").send(testUser);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        token: expect.any(String),
        user: expect.objectContaining({
          email: expect.any(String),
          subscription: expect.any(String),
        }),
      })
    );

    const { email } = res.body?.user;

    expect(email).toBe(testUser.email);
  });

  it("should return 'Email or password is wrong'", async () => {
    const testUser = {
      email: "mango8@gmail.com",
      password: "123456",
    };

    const res = await request(app).post("/api/users/login").send(testUser);

    expect(res.statusCode).toBe(401);
    expect(res.body).toEqual(
      expect.objectContaining({
        message: expect.any(String),
      })
    );

    const { message } = res.body;
    expect(message).toBe("Email or password is wrong");
  });

  it("should return login validation error", async () => {
    const testUser = {
      email: "mango8@gmail.com",
      password: "12345",
    };

    const res = await request(app).post("/api/users/login").send(testUser);

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual(
      expect.objectContaining({
        message: expect.any(String),
      })
    );
  });
});
