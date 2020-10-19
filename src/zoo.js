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

// Funcao animalsByIds:
// Para implementar esta funcao, consultei o repositorio do colega Ygor Fonseca.

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  const animalsId = [];
  ids.forEach((id) => {
    animalsId.push(animals.find(animal => animal.id === id));
  });
  return animalsId;
}

function animalsOlderThan(animal, age) {
  return animals.find(specie => specie.name === animal)
  .residents.every(resident => resident.age > age);
}

// Funcao animalsByIds:
// Para implementar esta funcao, consultei o repositorio do colega Pedro Marques.

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(
    ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

// Funcao isManager:
// Para implementar esta funcao, consultei o repositorio do colega Pedro Marques.
function isManager(id) {
  return employees.some(({ managers }) => {
    managers.includes(id);
    return managers.includes(id);
  });
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id, firstName, lastName, managers, responsibleFor,
  };
  employees.push(newEmployee);
}

// Funcao animalCount:
// Para implementar esta funcao, consultei o repositorio do colega Pedro Marques.
function animalCount(species) {
  let result = {};
  animals.forEach(({ name, residents }) => {
    if (species === undefined) {
      result[name] = residents.length;
    }
    if (species === name) {
      result = residents.length;
    }
  });
  return result;
}

function entryCalculator(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  } else {
    const total = (Senior * 24.99) + (Adult * 49.99) + (Child * 20.99);
    return total;
  }
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
