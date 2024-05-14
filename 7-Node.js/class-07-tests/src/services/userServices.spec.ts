import { describe, expect, it } from "vitest";
import { userServices } from "./userServices";
import { userRepositoryInMemory } from "../repositories/userRepositoryInMemory";

describe("teste user creat function", () => {
  it("should creat a user", async () => {
    const user = {
      id: "1",
      name: "Wellington Torquato",
      email: "torquatojucas@gmail.com",
    };

    const userCreated = await userServices.create(user, userRepositoryInMemory);

    expect(userCreated).toHaveProperty("id");
  });
});
