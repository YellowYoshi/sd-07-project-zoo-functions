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
  // Código retirado da explicação do instrutor Murillo Wolf
  const { animals } = data;
  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const { animals } = data;
  const selectedAnimal = animals.find(element => element.name === animal);

  return selectedAnimal.residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  const { employees } = data;

  if (employeeName === undefined) {
    return {};
  }

  return employees.find(employee =>
  (employee.firstName === employeeName || employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = Object.assign(personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  const { employees } = data;

  return employees.some(manager => manager.managers.some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;

  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const { animals } = data;

  if (species === undefined) {
    const animalCounter = {};
    animals.forEach((element) => { animalCounter[element.name] = element.residents.length; });
    return animalCounter;
  }

  const selectedAnimal = animals.find(animal => animal.name === species);
  return selectedAnimal.residents.length;
}

function entryCalculator(entrants) {
  const { prices } = data;

  if (!entrants || entrants.length === 0) {
    return 0;
  }

  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultPrice = prices.Adult * Adult;
  const childPrice = prices.Child * Child;
  const seniorPrice = prices.Senior * Senior;
  const total = adultPrice + childPrice + seniorPrice;

  return total;
}

function retrieveAvailableLocations() {
  return ['NE', 'NW', 'SW', 'SE'];
}

function retrieveAnimalsByLocation(locations) {
  const animalsByLocation = {};
  const { animals } = data;

  locations.forEach((location) => {
    const filteredAnimalsByName = animals.filter(animal => animal.location === location)
    .map(animal => animal.name);
    animalsByLocation[location] = filteredAnimalsByName;
  });

  return animalsByLocation;
}

function retrieveAnimalsNameByLocation(locations, sorted, sex) {
  const { animals } = data;
  const animalsNameByLocation = {};

  locations.forEach((location) => {
    const filteredAnimalsName = animals.filter(animal => animal.location === location)
    .map((animal) => {
      const animalName = animal.name;
      const residents = animal.residents
      .filter((resident) => {
        const needFiltering = sex !== undefined;
        return needFiltering ? resident.sex === sex : true;
      })
      .map(resident => resident.name);

      if (sorted) {
        residents.sort();
      }
      return { [animalName]: residents };
    });
    animalsNameByLocation[location] = filteredAnimalsName;
  });

  return animalsNameByLocation;
}

function animalMap(options) {
  // Resolução a partir do plantão do instrutor Gabriel Oliva
  const locations = retrieveAvailableLocations();

  if (!options) {
    return retrieveAnimalsByLocation(locations);
  }

  const { includeNames = false, sorted = false, sex } = options;
  if (includeNames) {
    return retrieveAnimalsNameByLocation(locations, sorted, sex);
  }

  return retrieveAnimalsByLocation(locations);
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
