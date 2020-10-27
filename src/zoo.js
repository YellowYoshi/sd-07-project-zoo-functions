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
// const { animals } = require('./data');
// const { animals } = require('./data');
// const { animals, employees } = require('./data');

// troquei o find pelo filter conforme visto no PR https://github.com/tryber/sd-07-project-zoo-functions/blob/b32b8ea4021741b40898532cb96353589bf71e60/src/zoo.js
function animalsByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return data.animals.filter(element => ids.includes(element.id));
}

function animalsOlderThan(animal, age) {
  const speciesObj = data.animals.find(element => animal.includes(element.name));
  return speciesObj.residents.every(element => element.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(element =>
    employeeName.includes(element.firstName) || employeeName.includes(element.lastName));
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  const employeeArrays = data.employees;
  return employeeArrays.some(element => element.managers.find(givenId => givenId === id));
}

// Detalhe dos parametros 'managers' e 'responsible for' serem '= []' consultado no código do github https://github.com/tryber/sd-07-project-zoo-functions/blob/b32b8ea4021741b40898532cb96353589bf71e60/src/zoo.js

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employeeObj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(employeeObj);
}

function animalCount(species) {
  if (!species) {
    let animalsObj = {};
    data.animals.map((element) => {
      const speciesName = element.name;
      const animalsCount = element.residents.length;
      animalsObj = Object.assign(animalsObj, {
        [speciesName]: animalsCount,
      });
      return animalsObj;
    });
    return animalsObj;
  }
  return data.animals.find(element => element.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  } else if (entrants === {}) {
    return 0;
  }
  let valueCount = 0;
  Object.keys(entrants).map((element) => {
    if (element === 'Adult') {
      valueCount += (entrants[element] * data.prices.Adult);
    } else if (element === 'Senior') {
      valueCount += (entrants[element] * data.prices.Senior);
    } else if (element === 'Child') {
      valueCount += (entrants[element] * data.prices.Child);
    }
    return valueCount;
  });
  return valueCount;
}


function animalMap(options) {

}

// Função abaixo foi refeita diversas vezes.
// Por fim, cabei adotando o mesmo método que o verificado no PR:
// https://github.com/tryber/sd-06-project-zoo-functions/blob/07bc894cc64fe2727dee86a4f9ff833063f85635/src/zoo.js

function schedule(dayName) {
  const dailySchedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) {
    return dailySchedule;
  }
  const daySchedule = {};
  daySchedule[dayName] = dailySchedule[dayName];
  return daySchedule;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
const increasePercentage = percentage / 100;
Object.keys(data.prices).forEach((element) => {
  let newPrice = data.prices[element];
  newPrice += newPrice * increasePercentage;
  newPrice = Math.ceil(newPrice * 100);
  newPrice = newPrice / 100;
  data.prices[element] = newPrice;
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
