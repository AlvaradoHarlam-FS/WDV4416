// Requirements
/** TDD - create tests for a module that will:
 * 1. Obscure a credit card (CC) number except the last 4 digits
 * 2. Test function that obscures CC numbers between 12-16 digits
 */
const obscureNum = require("./creditcard");

describe("Obscure Card Number Test", () => {
  test("As a user, I want to obscure CC numbers between digit lengths of 12 and 16.", () => {
    expect(obscureNum("12345678901234")).toEqual("XXXXXXXXXX1234");
    expect(obscureNum("1234567890123")).toHaveLength(13);
    expect(obscureNum("123456789012")).not.toEqual("Invalid Credit Card");
  });
  test("As a user, I want to invalidate a CC number with length less than 12 or greater than 16.", () => {
    expect(obscureNum("123456789")).toEqual("Invalid Credit Card");
    expect(obscureNum("12345678901234567")).not.toEqual("XXXXXXXXXXXXX4567");
  });
});