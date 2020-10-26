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

function animalsByIds(ids) {
  if (ids.length === 0) return [];
  return data.animals.filter(animal => ids.some(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  return data.animals.some(specie => specie.name === animal &&
    specie.residents.every(resident => resident.age >= age,
  ));
}

function employeeByName(employeeName) {
  return employeeName === undefined ? {} :
  data.employees.find(employee =>
    employee.firstName === employeeName ||
    employee.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(employee =>
    employee.managers.some(idManager => idManager === id),
  );
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (species === undefined) {
    return data.animals.reduce((amountOfAnimals, animals) => {
      amountOfAnimals[animals.name] = animals.residents.length;
      return amountOfAnimals;
    }, {});
  }
  return data.animals.reduce((accumulator, animal) => {
    if (animal.name === species) {
      accumulator = animal.residents.length;
    }
    return accumulator;
  }, 0);
}

function entryCalculator(entrants) {
  const arrayEntrants = Object.entries(entrants);
  if (entrants === undefined || arrayEntrants.length === 0) return 0;
  return arrayEntrants.reduce((totalPayable, entrant) => {
    totalPayable += entrant[1] * data.prices[entrant[0]];
    return totalPayable;
  }, 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const arrayHours = Object.entries(data.hours);
  return arrayHours.reduce((report, daysHour) => {
    const message = `Open from ${daysHour[1].open}am until ${
      daysHour[1].close - 12}pm`;
    if (daysHour[1].open === 0 && dayName === undefined) {
      report[daysHour[0]] = 'CLOSED';
    } else if (daysHour[1].open !== 0 && dayName === undefined) {
      report[daysHour[0]] = message;
    } else if (daysHour[1].open === 0 && daysHour[0] === dayName) {
      report[daysHour[0]] = 'CLOSED';
    } else if (daysHour[1].open !== 0 && daysHour[0] === dayName) {
      report[daysHour[0]] = message;
    }
    return report;
  }, {});
}

function oldestFromFirstSpecies(id) {
  const idFirstAnimal = data.employees.find(employee => employee.id === id)
  .responsibleFor[0];
  const firstSpecieResident = data.animals.find(
    animals => animals.id === idFirstAnimal).residents;
  let innitialAge = 0;
  return firstSpecieResident.reduce((olderAnimal, { name, sex, age }) => {
    if (age > innitialAge) {
      olderAnimal.splice(0, 3);
      olderAnimal.push(name, sex, age);
      innitialAge = age;
    }
    return olderAnimal;
  }, []);
}

function increasePrices(percentage) {
  const { Adult, Child, Senior } = data.prices;
  const roundPrices = (number) => {
    number = Math.round(number * 100) / 100;
    return number;
  };
  data.prices.Adult = roundPrices(Adult + (Adult * (percentage / 100)));
  data.prices.Child = roundPrices(Child + (Child * (percentage / 100)));
  data.prices.Senior = roundPrices(Senior + (Senior * (percentage / 100)));
}

function employeeCoverage(idOrName) {
  return data.employees.reduce(
    (report, { firstName, lastName, id, responsibleFor }) => {
      const arrayNameAnimals = [];
      responsibleFor.forEach((ids) => {
        const nameAnimal = data.animals.filter(animal => ids === animal.id);
        arrayNameAnimals.push(nameAnimal[0].name);
      });
      if (idOrName === undefined) {
        report[`${firstName} ${lastName}`] = arrayNameAnimals;
      } else if (idOrName === firstName) {
        report[`${firstName} ${lastName}`] = arrayNameAnimals;
      } else if (idOrName === lastName) {
        report[`${firstName} ${lastName}`] = arrayNameAnimals;
      } else if (idOrName === id) {
        report[`${firstName} ${lastName}`] = arrayNameAnimals;
      }
      return report;
    },
    {},
  );
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
