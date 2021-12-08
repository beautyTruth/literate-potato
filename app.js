// const celciusInput = document.querySelector("#celcius");
// const fahrenheitInput = document.querySelector("#fahrenheit");
// const kelvinInput = document.querySelector("#kelvin");
// const tempInputs = document.querySelectorAll("input");

// tempInputs.forEach(function (input) {
//   input.addEventListener("input", function (e) {
//     let tempValue = parseInt(e.target.value);
//     let inputName = e.target.name;

//     if (e.target.value == "") {
//       celciusInput.value = null;
//       fahrenheitInput.value = null;
//       kelvinInput.value = null;

//       return;
//     }

//     if (inputName === "celcius") {
//       // Celcius to Fahrenheit
//       let fahrenheitValue = tempValue * 1.8 + 32;
//       fahrenheitInput.value = fahrenheitValue.toFixed(2);

//       // Celcius to kelvin
//       let kelvinValue = tempValue + 273.15;
//       kelvinInput.value = kelvinValue.toFixed(2);
//     } else if (inputName === "fahrenheit") {
//       // Fahrenheit to Celcius
//       let celciusValue = (tempValue - 32) / 1.8;
//       celciusInput.value = celciusValue.toFixed(2);

//       // Fahrenheit to kelvin
//       let kelvinValue = (tempValue - 32) / 1.8 + 273.15;
//       kelvinInput.value = kelvinValue.toFixed(2);
//     } else if (inputName === "kelvin") {
//       // Kelvin to Celcius
//       let celciusValue = tempValue - 273.15;
//       celciusInput.value = celciusValue.toFixed(2);

//       // Kelvin to Fahrenheit
//       let fahrenheitValue = (tempValue - 273.15) * 1.8 + 32;
//       fahrenheitInput.value = fahrenheitValue.toFixed(2);
//     }
//   });
// });

// Do something today that your future self will thank you for.

/*
my code below
*/

const celsiusInput = document.querySelector("#celsius");
const fahrenheitInput = document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");
const tempInputs = document.querySelectorAll("input");
// const h1 = document.querySelector(".title");

tempInputs.forEach((boobies) => {
  boobies.addEventListener("input", (e) => {
    let temperatureValue = parseInt(e.target.value);
    let inputName = e.target.name;

    if (e.target.value == "") {
      kelvinInput.value = null;
      fahrenheitInput.value = null;
      celsiusInput.value = null;
      return;
    }

    if (inputName === "celsius") {
      let fahrenheitValue = temperatureValue * 1.8 + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);

      let kelvinValue = temperatureValue + 273.15;
      kelvinInput.value = kelvinValue.toFixed(2);
    } else if (inputName === "fahrenheit") {
      let celsiusValue = (temperatureValue - 32) / 1.8;
      celsiusInput.value = celsiusValue.toFixed(2);

      let kelvinValue = (temperatureValue - 32) / 1.8 + 273.15;
      kelvinInput.value = kelvinValue.toFixed(2);
    } else if (inputName === "kelvin") {
      let celsiusValue = temperatureValue - 273.15;
      celsiusInput.value = celsiusValue.toFixed(2);

      let fahrenheitValue = (temperatureValue - 273.15) * 1.8 + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
  });
});

// h1.addEventListener("click", (e) => {
//   document.body.style.backgroundColor = "black";
// });
