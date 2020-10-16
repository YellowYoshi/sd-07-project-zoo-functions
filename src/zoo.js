const { animals } = require('./data');
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

function animalsByIds(...ids) {
  let response;
  if (ids.length > 1) {
    response = animals.filter((animal, posicao) => animal.id === ids[posicao]);
  }
  if (ids.length === 1) {
    response = [animals.find(animal => animal.id === ids[0])];
  }
  if (ids.length === 0) {
    response = ids;
  }
  return response;
}

function animalsOlderThan(animal, age) {
  return animals.find(animalElement => animalElement.name === animal)
  .residents.every(residentElement => residentElement.age >= age);
}

function employeeByName(employeeName) {
  let response;
  if (employeeName === undefined) {
    response = {};
  } else {
    response = data.employees.find((element) => {
      let response2;
      if (element.firstName === employeeName || element.lastName === employeeName) {
        response2 = true;
      } else {
        response2 = false;
      }
      return response2;
    });
  }
  return response;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  let response;
  const managers = data.employees.find(employee => employee.managers.includes(id));
  if (managers !== undefined) {
    response = true;
  } else {
    response = false;
  }
  return response;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
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
