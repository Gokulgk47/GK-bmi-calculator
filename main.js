function displayResult() {
  const age = document.getElementById("age").value;
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!age || !height || !weight || height <= 0 || weight <= 0) {
    result.textContent = "Please enter valid age, height and weight.";
    return;
  }

  const heightInMetres = height / 100;
  const bmi = weight / (heightInMetres * heightInMetres);

  let category;
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  result.textContent = `Your BMI is ${bmi.toFixed(1)} (${category})`;
}

function clearDisplay() {
  document.getElementById("result").textContent = "";
}