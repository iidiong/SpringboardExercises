
it('should calculate the monthly rate correctly', () => {
  const values = { amount: 20000, years: 8, rate: 5.8 };
  expect(calculateMonthlyPayment(values)).toEqual("260.89");
});

it("should return a result with 2 decimal places", () => {
  const values = { amount: 30000, years: 9, rate: 4.8 };
  expect(calculateMonthlyPayment(values)).toEqual("342.63");
});
it("should return a result with 0 as amount", () => {
  const values = { amount: 0, years: 9, rate: 4.8 };
  expect(calculateMonthlyPayment(values)).toEqual("0.00");
});

it("should handle terribly high interest rates", () => {
  const values = {
    amount: 2000,
    years: 50,
    rate: 90
  };
  expect(calculateMonthlyPayment(values)).toEqual('150.00');
});
/// etc
