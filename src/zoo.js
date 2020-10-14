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
  // seu código aqui
  return ids.map((id) => {
    const animalId = data.animals.find(animal => animal.id === id);
    return animalId;
  });
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalData = data.animals.find(item => item.name === animal);
  const ageOfAnimals = animalData.residents.every(item2 => item2.age >= age);
  return ageOfAnimals;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const findEmployees = data.employees.find(item =>
    item.firstName === employeeName || item.lastName === employeeName);
  return findEmployees;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
  /* const managerVerify = data.employees.some(item => item.managers.includes(id));
  return managerVerify; */
  const managerVerify = data.employees.some((item, index) => item.managers[index] === id);
  return managerVerify;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({ id,
    firstName,
    lastName,
    managers,
    responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (typeof species === 'undefined') {
    const newObj = data.animals.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, {});
    return newObj;
  }
  const specie = data.animals.find(animal => animal.name === species);
  return specie.residents.length;
}

function entryCalculator(...entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined') {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const {Adult, Child, Senior} = data.prices;
  let totalValue = 0;
  return entrants.map(value => {
    if(value.Adult) {
      totalValue += value.Adult * Adult;
    }
    if(value.Child) {
      totalValue += value.Child * Child;
    }
    if(value.Senior) {
      totalValue += value.Senior * Senior;
    }
    return totalValue;
  });
  
  /* const adult = Object.keys(entrants).find(item => item === 'Adult');
  const child = Object.keys(entrants).find(item => item === 'Child');
  const senior = Object.keys(entrants).find(item => item === 'Senior');
  
  if (adult === true && child === true && senior === true) {
    const {Adult, Child, Senior} = entrants;
    return Adult * 49.99 + Child * 20.99 + Senior * 24.99;
  }
  
  if (child === true && senior === true) {
    const {Child, Senior} = entrants;
    return Child * 20.99 + Senior * 24.99;
  }
  if (child === true && adult === true) {
    const {Child, Adult} = entrants;
    return Adult * 49.99 + Child * 20.99;
  }
  if (senior === true && adult === true) {
    const {Senior, Adult} = entrants;
    return Adult * 49.99 + Senior * 24.99;
  }
  if (senior === true) {
    const {Senior} = entrants;
    return Senior * 24.99;
  }
  if (adult === true) {
    const {Adult} = entrants;
    return Adult * 49.99;
  }
  if (child === true) {
    const {Child} = entrants;
    return Child * 20.99;
  }   */
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
