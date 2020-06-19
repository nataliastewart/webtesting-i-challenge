const enhancer = require("./enhancer.js");
// tet saway!
describe("enhancer", function () {
  it("should run test using it()", function () {
    expect(true).toBe(true);
  });

  describe("repair()", function () {
    //setup - Arrange
    const expected = 100;
    const a = 50;
    const b = 50;

    //execution of SUT(System Under Test) - Act
    const actual = enhancer.repair(a, b);

    //assertions - Assert
    expect(actual).toBe(expected);
  });
});
