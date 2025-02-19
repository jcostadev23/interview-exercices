const { activeUsers, usersActive } = require("./filterAndModify");

describe("Passing a list of users should check if is active and return is name", () => {
  const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Carlos", active: true },
    { name: "Daniel", active: false },
  ];
  const result = ["Alice", "Carlos"];

  test("Assuming its always a user", () => {
    expect(activeUsers(users)).toStrictEqual(result);
  });

  test("Assuming its always a user", () => {
    expect(usersActive(users)).toStrictEqual(result);
  });
});
