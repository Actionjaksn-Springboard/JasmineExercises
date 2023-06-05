window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let inputs = { amount: 10000, years: 5, rate: 2.5 };
  let amount = document.getElementById('loan-amount');
  amount.value = inputs.amount; 
  let years = document.getElementById('loan-years');
  years.value = inputs.years;
  let rates = document.getElementById('loan-rate');
  rates.value = inputs.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = (values.rate / 100) / 12;
  let n = Math.floor(values.years * 12);
  if(isNaN(Number(p))){
    return 'We Only Accept Numbers';
  } else if (isNaN(Number(values.rate))){
    return 'We Only Accept Numbers';
  } else if (isNaN(Number(values.years))){
    return 'We Only Accept Numbers';
  }
  return ((p * i)/ (1 - Math.pow((1 + i ), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = monthly;
}
