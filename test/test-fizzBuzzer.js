const { expect } = require("chai");

expect(1).to.equal(1);

const fizzBuzz = require("../fizzBuzzer");

describe("fizzBuzzer", function() {
  it("should return 'fizz-buzz'", function() {
    expect(fizzBuzz(15)).to.equal("fizz-buzz");
    expect(fizzBuzz(30)).to.equal("fizz-buzz");
  });

  it("should return 'buzz'", function() {
    expect(fizzBuzz(5)).to.equal("buzz");
    expect(fizzBuzz(10)).to.equal("buzz");
  });

  it("should return 'fizz'", function() {
    expect(fizzBuzz(3)).to.equal("fizz");
    expect(fizzBuzz(6)).to.equal("fizz");
  });

  it("should return the number we passed in", function() {
    expect(fizzBuzz(14)).to.equal(14);
  });
});
