
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:10000, years: 5, rate: 2.5})).toEqual('177.47');
  expect(calculateMonthlyPayment({amount:5000, years: 10, rate: 6.5})).toEqual('56.77');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:50000, years: 6, rate: 1.5})).toEqual('726.60');
});

it('should return error message when entered falsly', function(){
  expect(calculateMonthlyPayment({amount: 'one hundred thousand', years: 5, rate: 2})).toBe('We Only Accept Numbers');
  expect(calculateMonthlyPayment({amount: 100000, years: 'five', rate: 2})).toBe('We Only Accept Numbers');
  expect(calculateMonthlyPayment({amount: 100000, years: 5, rate: 'two'})).toBe('We Only Accept Numbers');
})
