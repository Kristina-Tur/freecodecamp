// Write function bmi that calculates body mass index(bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmiR = weight / Math.pow(height, 2);
  while (bmiR > 0) {
    if (bmiR <= 18.5) {
      return "Underweight";
    }
    if (bmiR <= 25.0) {
      return "Normal";
    }
    if (bmiR <= 30.0) {
      return "Overweight";
    }
    if (bmiR > 30) {
      return "Obese";
    }
  }
}