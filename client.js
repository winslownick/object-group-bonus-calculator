var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

function calcBonus (obj) {

  function bonusPercent(obj) {
    if (obj.reviewRating <= 2 ) {
      return  0;
  } else if (obj.reviewRating === 3) {
      return 4;
  } else if (obj.reviewRating === 4) {
      return  6;
  } else  if (obj.reviewRating === 5) {
      return 10;
  }//Calculates rating bonus
}

  function loyaltyBonus (obj) {
    if (obj.employeeNumber.length === 4) {
      return 5;
  } else {
      return 0;
  }//Caclulates loyaltyBonus
}

function salarySize (obj) {
    if (obj.annualSalary > '65000') {
      return 1;
    } else {
      return 0;
    }//Calculates salary deduction
}
var total = bonusPercent(obj) + loyaltyBonus(obj) - salarySize(obj);

 if (total > 13){
   total = 13;
 } else if (total === -1) {
   total = 0;
 }
 //Keeps bonus from going over 13
return total;
}//calculates total bonus percent
function totalBonus(bonusPercent, annualSalary){
  return Math.round((bonusPercent/100)*annualSalary);
}//calculates total bonus $

function totalComp(totalBonus, annualSalary){
  return (totalBonus + parseInt(annualSalary));
}

function employeeInfo( name, bonusPercent, totalComp, totalBonus ){
  this.name = name;
  this.bonusPercent = bonusPercent;
  this.totalComp = totalComp;
  this.totalBonus = totalBonus;
};//new object creator

function bonusForEmployee(obj) {
var bonusInfo = new employeeInfo ( obj.name, calcBonus(obj),
totalComp(totalBonus( calcBonus(obj),
  obj.annualSalary) , obj.annualSalary), totalBonus( calcBonus(obj),
  obj.annualSalary) );
return bonusInfo;
}

function bonusForEmployees (arr) {
  var arrayOfEmployees = [];
  for (var i = 0; i <arr.length; i++) {
    arrayOfEmployees.push(bonusForEmployee(arr[i]));
  } return arrayOfEmployees;
}

var boneObjs = bonusForEmployees(employees);
console.log( boneObjs);

function showData () {
  $ ('#output').toggle();
}
var wrapper = $ ('#output'), container;
for (var key in boneObjs) {
  container = $('<div id="output" class = "container"></div>');
  wrapper.append(container);
  container.append('<div class="name">' + boneObjs[key].name+ '</div>');
  container.append('<div class="bonusPercent">'+ 'Bonus Percentage: ' + boneObjs[key].bonusPercent +
 '</div>');
  container.append('<div class = "totalComp">' +'Total Compensation: $' + boneObjs[key].totalComp + '</div>');
  container.append('<div class = "totalBonus">' +'Total Bonus: $' + boneObjs[key].totalBonus + '</div>');
}

function onReady () {
  console.log('page ready');
  $('#output').hide();
  $('#showData').on('click', showData );
}
