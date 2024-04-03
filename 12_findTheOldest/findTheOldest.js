const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const currentYear = new Date().getFullYear();
    const oldestAge =
      ("yearOfDeath" in oldest ? oldest.yearOfDeath : currentYear) -
      oldest.yearOfBirth;
    const currentAge =
      ("yearOfDeath" in currentPerson
        ? currentPerson.yearOfDeath
        : currentYear) - currentPerson.yearOfBirth;
    return oldestAge > currentAge ? oldest : currentPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
