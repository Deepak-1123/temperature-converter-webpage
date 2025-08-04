function convertTemp() {
  const input = parseFloat(document.getElementById("inputTemp").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(input)) {
    resultDiv.textContent = "Please enter a valid number!";
    resultDiv.style.color = "red";
    return;
  }

  let result;

  // Convert from -> Celsius
  let tempInCelsius;
  switch (from) {
    case "celsius":
      tempInCelsius = input;
      break;
    case "fahrenheit":
      tempInCelsius = (input - 32) * 5 / 9;
      break;
    case "kelvin":
      tempInCelsius = input - 273.15;
      break;
  }

  // Convert Celsius -> to
  switch (to) {
    case "celsius":
      result = tempInCelsius;
      break;
    case "fahrenheit":
      result = (tempInCelsius * 9 / 5) + 32;
      break;
    case "kelvin":
      result = tempInCelsius + 273.15;
      break;
  }

  resultDiv.style.color = "#222";
  resultDiv.textContent = `Converted Temperature: ${result.toFixed(2)}° ${unitLabel(to)}`;
}

function unitLabel(unit) {
  switch (unit) {
    case "celsius": return "C";
    case "fahrenheit": return "F";
    case "kelvin": return "K";
  }
}
