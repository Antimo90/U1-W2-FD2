/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

const printPets = function (print) {
  const result = [];
  for (let i = 0; i < print.length; i++) {
    result.push(pets[i]);
  }
  return result;
};
console.log(printPets(pets));

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const putInOrder = function (arr) {
  return arr.sort();
};
console.log(putInOrder(pets));
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const putReverse = function (arr) {
  return arr.reverse();
};
console.log(putReverse(pets));
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const changeFirstElement = function (newElement) {
  pets[0] = newElement;
  return pets;
};
console.log(changeFirstElement("bird"));
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const myLicensePlates = ["AA123BB", "CC456DD", "EE789FF", "GG012HH", "JJ345KK"];

const assignLicensePlatesToCars = function (carsArray) {
  for (let i = 0; i < carsArray.length; i++) {
    const car = carsArray[i];
    const licensePlateForThisCar = myLicensePlates[i];
    car.licensePlate = licensePlateForThisCar;
  }
  return carsArray;
};

console.log(assignLicensePlatesToCars(cars));

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: "Fiat",
  model: "Tipo",
  color: "grey",
  trims: ["street", "cross", "sport"],
};

const addCar = function (carToAdd) {
  cars.push(carToAdd);
  for (let i = 0; i < cars.length; i++) {
    const currentCar = cars[i];
    if (
      currentCar.trims &&
      Array.isArray(currentCar.trims) &&
      currentCar.trims.length > 0
    ) {
      currentCar.trims.pop();
    }
  }
  return cars;
};
console.log(addCar(newCar));
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

const getFirstElementsTrims = function (carsArray) {
  const resultTrims = [];
  for (let i = 0; i < carsArray.length; i++) {
    const currentCar = carsArray[i];
    if (
      currentCar.trims &&
      Array.isArray(currentCar.trims) &&
      currentCar.trims.length > 0
    ) {
      const firstTrim = currentCar.trims[0];
      resultTrims.push(firstTrim);
    }
  }
  return resultTrims; //
};
console.log(getFirstElementsTrims(cars));

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
const checkFirstLetter = function (carsArray) {
  for (let i = 0; i < carsArray.length; i++) {
    const currentCar = carsArray[i];
    if (
      currentCar.color &&
      typeof currentCar.color === "string" &&
      currentCar.color.length > 0
    ) {
      const firstLetter = currentCar.color.charAt(0).toLowerCase();
      if (firstLetter === "b") {
        console.log("Fizz");
      } else {
        console.log("Buzz");
      }
    }
  }
};

checkFirstLetter(cars);
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let x = 0;
while (x < numericArray.length && numericArray[x] !== 32) {
  console.log(numericArray[x]);
  x++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const positionsLetters = function (charsToProcess) {
  const resultArray = [];
  for (let i = 0; i < charsToProcess.length; i++) {
    const char = charsToProcess[i].toLowerCase();
    let position = 0;

    switch (char) {
      case "d":
        position = 1;
        break;
      case "g":
        position = 2;
        break;
      case "n":
        position = 3;
        break;
      case "u":
        position = 4;
        break;
      case "z":
        position = 5;
        break;
      default:
        console.log(
          `Il carattere '${char}' non rientra nelle prime 5 lettere (a-e). Posizione: 0.`
        );
    }
    resultArray.push(position);
  }
  return resultArray;
};

console.log(positionsLetters(charactersArray));
