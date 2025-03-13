import request from "supertest";

import app from "../../../../src/shared/infra/http/app";

describe("CreateCategoryController", async () => {
  it("should be able to create a new category", async () => {
    const response = await request(app).post("/categories").send({
      name: "Category Supertest",
      description: "Category Supertest Description",
    });

    expect(response.status).toBe(201);
  });
});
