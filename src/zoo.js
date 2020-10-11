/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const { animals } = data;
const { employees } = data;
const { prices } = data;

function animalsByIds(...ids) {
  const localeByAnimalid = ids.map((idFind) => {
    const animalLocalized = animals.find(animal => animal.id === idFind);
    return animalLocalized;
  });
  return localeByAnimalid;
}

function animalsOlderThan(animal, age) {
  const verifyName = animals.find((animalNameCheck) => {
    const specie = animalNameCheck.name === animal;
    return specie;
  });
  let checkAge = verifyName.residents;
  checkAge = checkAge.every(animalAge => animalAge.age >= age);
  return checkAge;
}

function employeeByName(employeeName) {
  if (typeof (employeeName) === 'undefined') return {};
  const employeeLocalized = employees.find((employee) => {
    let returnEmployeeLocalized;
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      returnEmployeeLocalized = employee;
    }
    return returnEmployeeLocalized;
  });
  return employeeLocalized;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo, ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployeer = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployeer);
  return data.employees;
}

function animalCount(species) {
  const allAnimals = {};
  if (typeof (species) === 'undefined') {
    animals.forEach(({ name, residents }) => {
      allAnimals[name] = residents.length;
    });
    return allAnimals;
  }
  const animalLocale = animals.find(({ name }) => name === species).residents.length;
  return animalLocale;
}

function entryCalculator(entrants) {
  if (typeof (entrants) === 'undefined' || Object.keys(entrants).length === 0) return 0;
  const valueAllEntrants = Object.entries(entrants)
  .reduce((accumulator, valueActual) => accumulator + (prices[valueActual[0]] * valueActual[1]), 0);
  return valueAllEntrants;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
