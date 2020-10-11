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

// const { animals } = require('./data');
// const { employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  const animalsId = [];
  if (ids.length === 0) {
    return [];
  }
  ids.forEach(id => animalsId.push(data.animals.find(element => element.id === id)));
  return animalsId;
}

function animalsOlderThan(animal, age) {
  return data.animals.find(an => an.name === animal).residents.every(ag => ag.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return { };
  }
  return data.employees.filter(e => e.firstName === employeeName || e.lastName === employeeName)[0];
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
  const managerList = [];

  for (let i = 0; i < data.employees.length; i += 1) {
    for (let k = 0; k < data.employees[i].managers.length; k += 1) {
      managerList.push(data.employees[i].managers[k]);
    }
  }

  return managerList.some(e => e === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  if (species === undefined) {
    const list = { };
    for (let i = 0; i < data.animals.length; i += 1) {
      list[data.animals[i].name] = data.animals[i].residents.length;
    }
    return list;
  }
  return data.animals.find(e => e.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === {} || entrants === undefined) {
    return 0;
  }

  if (entrants.Adult === undefined) {
    entrants.Adult = 0;
  }
  if (entrants.Child === undefined) {
    entrants.Child = 0;
  }
  if (entrants.Senior === undefined) {
    entrants.Senior = 0;
  }

  const { Adult } = entrants;
  const { Child } = entrants;
  const { Senior } = entrants;

  return (Adult * data.prices.Adult) + (Child * data.prices.Child) + (Senior * data.prices.Senior);
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

function arred(num) {
  if (((num * 100) - parseInt(num * 100, 10)) >= 0.5) {
    return ((parseInt(num * 100, 10) + 1) / 100);
  }
  return (parseInt(num * 100, 10) / 100);
}

function increasePrices(percentage) {
  data.prices.Adult = arred(data.prices.Adult * (1 + (percentage / 100)));
  data.prices.Child = arred(data.prices.Child * (1 + (percentage / 100)));
  data.prices.Senior = arred(data.prices.Senior * (1 + (percentage / 100)));
}

function employeeCoverage(idOrName) {
  const obj = { };
  const i = idOrName;
  const e3 = data.employees.filter(e => e.firstName === i || e.lastName === i || e.id === i);
  let key;
  let value;
  if (idOrName === undefined) {
    data.employees.forEach((element) => {
      key = `${element.firstName} ${element.lastName}`;
      value = [];
      element.responsibleFor.forEach((element2) => {
        value.push(animalsByIds(element2)[0].name);
      });
      obj[key] = value;
    });
    return obj;
  }
  key = `${e3[0].firstName} ${e3[0].lastName}`;
  value = [];
  e3[0].responsibleFor.forEach((element4) => {
    value.push(animalsByIds(element4)[0].name);
  });
  obj[key] = value;
  return obj;
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
