//@@viewOff:const
//@@viewOff:const

//@@viewOn:helpers
/**
 * Returns random number in range <min,max>
 *
 * @param {number} min min value
 * @param {number} max max value
 * @return {number} random number
 **/
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
   * slouzi na overeni vstupu, jestli ma definovane datove typy, vlastnosti a definovane rozsahy
   * 
   * @param {dtoIn} vstupni hodnoty k validaci
   * {
    "count": vetsi nez nula, mensi nez 10000,
    "age": {
      "min": nejmene 18,
      "max": nejvic 70
    }
  }
   * @return {bool} true, false
  **/
function validate(dtoIn) {
  if (isNan(dtoIn[count])) {
    // pokud se nejedna o cislo
    throw "count není číslo";
  } else if (dtoIn[count] <= 0 && dtoIn[count] > 1000) {
    // pokud cislo neni mezi 1-1000
    throw "count není v platném rozmezí (1-1000)";
  } else if (isNan(dtoIn[(age, min)])) {
    // pokud se nejedna o cislo
    throw "Minimální věk není číslo";
  } else if (dtoIn[(age, min)] < 18) {
    // pokud je min vek mensi nez 18
    throw "Minimální věk není platný (menší než 18)";
  } else if (isNan(dtoIn[(age, max)])) {
    // pokud se nejedna o cislo
    throw "Maximální věk není číslo";
  } else if (dtoIn[(age, max)] > 70) {
    // pokud je max vek vetsi nez 70
    throw "Maximální věk není platný (více než 70let)";
  }
}
/**
 * vrati workload, hodnoty 10, 20, 30 nebo 40
 *
 * @return {int} 10, 20, 30 nebo 40
 **/
function getRandomWorkload() {}

/**
 * slouzi k vytvoreni zakladu osoby
 *
 * @return {Person}
 **/
function getRandomPerson() {}

/**
 * vrati birthdate podle definovaneho veku
 * @param {number} ageMin min value
 * @param {number} ageMax max value
 * @return {text} datum ve formátu ISO Date-Time YYYY-MM-DDTHH:MM:SSZ (např. 1981-10-28T23:00:00.000Z)
 **/
function getRandomBirthdate(ageMin, ageMax) {}

//@@viewOff:helpers

//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * {
    "count": 50,
    "age": {
      "min": 19,
      "max": 35
    }
  }
 * @return {array} output data
**/
function main(dtoIn = {}) {
  //validace vstupu
  if (!validate(dtoIn)) {
    return;
  }

  dtoIn = {
    count: 50,
    age: {
      min: 18,
      max: 55,
    },
  };

  //vytvoreni seznamu osob (iterace podle count)
  for (var i = 0; i < dtoIn.count; i++) {
    let person = getRandomPerson();
    let personWithDetails = new Person(
      dtoIn.age.min,
      dtoIn.age.max,
      persons.gender
    );
  }

  //getRandomPerson a pak construktor te tridy

  //zapsani seznamu osob

  //console.log('test');
}
//@@viewOff:main

class Person {
  generateDetails(ageMin, ageMax) {
    // pracovní úvazek - číslo 10, 20, 30 nebo 40
    this.workload = getRandomWorkload();

    // datum narození ve formátu ISO Date-Time YYYY-MM-DDTHH:MM:SSZ (např. 1981-10-28T23:00:00.000Z)
    this.birthdate = getRandomBirthdate(ageMin, ageMax);
  }

  constructor(gender, name, surname) {
    // pohlaví, hodnota "male" nebo "female"
    this.gender = gender;

    // jméno
    this.name = name;

    // příjmení
    this.surname = surname;
  }
}
