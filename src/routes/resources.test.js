// third-party libraries
const assert = require("assert");
const request = require("supertest");

// express app
const app = require("../../index");

// assertions
describe("Server Resources", () => {
  describe("POST virtualMachines", () => {
    it("should return number of servers required", (done) => {
      let payload = {
        hostType: {
          CPU: 2,
          RAM: 32,
          HDD: 100,
        },
        virtualMachines: [
          {
            CPU: 1,
            RAM: 16,
            HDD: 10,
          },
          {
            CPU: 1,
            RAM: 16,
            HDD: 20,
          },
          {
            CPU: 2,
            RAM: 32,
            HDD: 100,
          },
          {
            CPU: 1,
            RAM: 16,
            HDD: 50,
          },
          {
            CPU: 1,
            RAM: 16,
            HDD: 50,
          },
        ],
      };

      request(app).post("/resources").send(payload).expect(200, done());
    });
  });
});
