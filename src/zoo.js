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
  return data.animals.filter((animal, count) => animal.id === ids[count]);
}

function animalsOlderThan(animal, age) {
  const selectedAnimal = data.animals.filter(anim => anim.name === animal);
  const selectedAnimalContent = selectedAnimal[0].residents;
  return selectedAnimalContent.every(anim => item.age > age);
}

function employeeByName(employeeName) {
  const name = employeeName;
  if (name !== undefined) {
    return data.employees.find(item => item.firstName === name || item.lastName === name);
  }
  return ({});
}

function createEmployee(personalInfo, associatedWith) {
  return ({ ...personalInfo, ...associatedWith });
}

function isManager(id) {
  const getId = (data.employees.map(item => item.managers)).flat();
  return getId.some(item => item === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function animalCount(species) {
  if (species !== undefined) {
    return data.animals.find(item => item.name === species).residents.length;
  }
  return data.animals.reduce((acc, item) => {
    acc[item.name] = item.residents.length;
    return acc;
  }, {});
}

function entryCalculator(entrants) {
  if (entrants !== undefined && entrants !== {}) {
    const entrantsKeys = Object.keys(entrants);
    return entrantsKeys.reduce((acc, key) => {
      acc += entrants[key] * data.prices[key];
      return acc;
    }, 0);
  }
  return 0;
}

function animalMap(options) {
  // seu código aqui
}

function buildSchedule() {
  const keys = Object.keys(data.hours);
  const calendar = keys.reduce((acc, key) => {
    acc[key] = `Open from ${data.hours[key].open}am until ${(data.hours[key].close) - 12}pm`;
    return acc;
  }, {});
  calendar.Monday = 'CLOSED';
  return calendar;
}
function schedule(dayName) {
  if (dayName === undefined) return buildSchedule();
  return { [dayName]: buildSchedule()[dayName] };
}

function oldestFromFirstSpecies(id) {
  const getEmployee = data.employees.find(employee => employee.id === id);
  const getAnimals = data.animals.find(anim => anim.id === getEmployee.responsibleFor[0]).residents;
  const oldestAnimal = getAnimals.sort((item1, item2) => item2.age - item1.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

function increasePrices(percentage) {
  const keys = Object.keys(data.prices);
  keys.forEach((key) => {
    const newValue = data.prices[key] + (data.prices[key] * (percentage / 100));
    data.prices[key] = Math.round(newValue * 100) / 100;
  });
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
