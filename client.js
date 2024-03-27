// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) { 
let bonusPercentage; //local varibale within the funciton

//Those who have a rating of a 2 or below should not receive a bonus.
//Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
//Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
//Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    bonusPercentage = .04;
  } else if (employee.reviewRating === 4) {
    bonusPercentage = .06;
  } else if ( employee.reviewRating === 5) {
    bonusPercentage = .01;
  }
  
// checking if the employee has 4 digits to their employee number to add 5% to their bonus
if (employee.employeeNumber.length === 4) {
  bonusPercentage += .05;
}

// If employee's annualSalary > 65000, subtract 1% from bonusPercentage:
//Number() converts a string number to a number value or non string number
if (Number(employee.annualSalary) > 65000) {
  bonusPercentage -= .01;
}


// Make sure employee bonuspercentage is between 0 and 13%
if (bonusPercentage > .13) {
  bonusPercentage = .13;
} else if (bonusPercentage < 0) {
  bonusPercentage = 0;
}

// calculate totalBonus
let totalBonus = Number(employee.annualSalary) * bonusPercentage;

// calculate totalCompensation
let totalCompensation = Number(employee.annualSalary) + totalBonus;

let runEachEmployee = {
  name: employee.name,
  bonusPercentage: bonusPercentage,
  totalCompensation: totalCompensation,
  totalBonus: totalBonus
}

// return new object with bonus results
return runEachEmployee;


};

for (let i = 0; i < employees.length; i++) { // loop through array called employees
  let result = calculateIndividualEmployeeBonus(employees[i]); //varibale that = runnning the function through each employee
   console.log(result); // log the result 
}



