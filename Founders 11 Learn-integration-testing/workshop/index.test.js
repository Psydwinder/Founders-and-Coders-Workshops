/*
test("Can add numbers", () => {
  equal(calculate(1, "+", 2), 3);
  equal(calculate(1000, "+", 1.5), 1001.5);
});

test("Can subtract numbers", () => {
  equal(calculate(3, "-", 2), 1);
  equal(calculate(1000, "-", 1.5), 998.5);
});

test("Can divide numbers", () => {
  equal(calculate(10, "/", 2), 5);
  equal(calculate(10, "/", 4), 2.5);
});

test("Can multiply numbers", () => {
  equal(calculate(3, "*", 2), 6);
  equal(calculate(2.5, "*", 5), 12.5);
});

test("Errors for invalid sign", () => {
  equal(calculate(4, "$", 2), "Please enter a valid sign (+, -, *, /)");
});

test("Can add string numbers", () => {
  equal(calculate("1", "+", "2"), 3);
});
*/

test("calculator multiplies numbers and updates the page correctly", () => {
  const aInput = document.getElementById("a");
  const signInput = document.querySelector("select");
  const bInput = document.getElementById("b");

  aInput.value = "2";
  signInput.value = "*";
  bInput.value = "3";

  const submitButton = document.getElementById("submit");
  submitButton.click();

  const result = document.getElementById("result");
  equal(result.textContent, "6");

  result.textContent = "";
});
