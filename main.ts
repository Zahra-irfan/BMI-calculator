#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Hello user!\nWelcome to BMI (Body Mass Index) calculator [^-^]");
let bmi = await inquirer.prompt([
  {
    name: "weight",
    message: "Please enter your weight in Kilograms!",
    type: "number",
  },
  { name: "height", message: "Please enter your height!", type: "number" },
  {
    name: "unit",
    message: "Please select the unit you've entered your height in:",
    type: "list",
    choices: ["feet", "meters", "inches", "centimeters"],
  },
]);
if (bmi.height > 0 && bmi.weight > 0) {
  if (bmi.unit === "feet") {
    let heightMeters: number = bmi.height / 3.28084;
    let result = bmi.weight / heightMeters ** 2;
    console.log(`Your BMI (Body Mass Index) is: "${result.toFixed(2)}kg/m^2"`);
    if (result < 25 && result > 18.5) {
      console.log(
        "Your body mass index (BMI) shows that you are at a healthy weight! [*^-^*]"
      );
    } else if (result >= 30) {
      console.log(
        "According to your body mass index (BMI), you're obeese! [^~^']"
      );
    } else if (result < 18.5) {
      console.log(
        "Your body mass index (BMI) shows that you're underweight! [^~^']"
      );
    } else if (result > 25 && result < 30) {
      console.log(
        "Your body mass index shows that you're overweight but not obeese! [^-^]"
      );
    }
  } else if (bmi.unit === "meters") {
    let heightMeters: number = bmi.height;
    let result = bmi.weight / heightMeters ** 2;
    console.log(`Your BMI (Body Mass Index) is: "${result.toFixed(2)}kg/m^2"`);
    if (result < 25 && result > 18.5) {
      console.log(
        "Your body mass index (BMI) shows that you are at a healthy weight! [*^-^*]"
      );
    } else if (result >= 30) {
      console.log(
        "According to your body mass index (BMI), you're obeese! [^~^']"
      );
    } else if (result < 18.5) {
      console.log(
        "Your body mass index (BMI) shows that you're underweight! [^~^']"
      );
    } else if (result > 25 && result < 30) {
      console.log(
        "Your body mass index shows that you're overweight but not obeese! [^-^]"
      );
    }
  } else if (bmi.unit === "inches") {
    let heightMeters: number = bmi.height * 0.0254;
    let result = bmi.weight / heightMeters ** 2;
    console.log(`Your BMI (Body Mass Index) is: "${result.toFixed(2)}kg/m^2"`);
    if (result < 25 && result > 18.5) {
      console.log(
        "Your body mass index (BMI) shows that you are at a healthy weight! [*^-^*]"
      );
    } else if (result >= 30) {
      console.log(
        "According to your body mass index (BMI), you're obeese! [^~^']"
      );
    } else if (result < 18.5) {
      console.log(
        "Your body mass index (BMI) shows that you're underweight! [^~^']"
      );
    } else if (result > 25 && result < 30) {
      console.log(
        "Your body mass index shows that you're overweight but not obeese! [^-^]"
      );
    }
  } else {
    let heightMeters: number = bmi.height / 100;
    let result = bmi.weight / heightMeters ** 2;
    console.log(`Your BMI (Body Mass Index) is: "${result.toFixed(2)}kg/m^2"`);
    if (result < 25 && result > 18.5) {
      console.log(
        "Your body mass index (BMI) shows that you are at a healthy weight! [*^-^*]"
      );
    } else if (result >= 30) {
      console.log(
        "According to your body mass index (BMI), you're obeese! [^~^']"
      );
    } else if (result < 18.5) {
      console.log(
        "Your body mass index (BMI) shows that you're underweight! [^~^']"
      );
    } else if (result > 25 && result < 30) {
      console.log(
        "Your body mass index shows that you're overweight but not obeese! [^-^]"
      );
    }
  }
} else {
  console.log(
    "Please enter a value!\nYou can't leave the required information empty or zero."
  );
}
