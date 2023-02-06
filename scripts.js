"use strict";

let input = document.querySelector("#inputString");
let dropdownChoice = document.querySelector("#fatStringTransformer");
let output = document.querySelector("#outputString");
let inputString = "";
let dropdownValue = "";
input.addEventListener("input", () => {
  inputString = input.value;
  console.log(inputString);
});
dropdownChoice.addEventListener("input", () => {
  dropdownValue = dropdownChoice.value;
  console.log(dropdownValue);
});

document.querySelector("#transformString").addEventListener("click", () => {
  generateOutput(inputString, dropdownValue);
});
function generateOutput(inputString, dropdownValue) {
  if (dropdownValue === "1") {
    inputString.split(" ");
    output.value = `${
      inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
    }`;
  } else if (dropdownValue === "2") {
    //make substring staring fro index[0] until " ";
    output.value = `${inputString.substring(0, inputString.indexOf(" "))}`;
  } else if (dropdownValue === "3") {
    output.value = `${
      inputString.substring(0, inputString.indexOf(" ")).length
    }`;
  } else if (dropdownValue === "4") {
    output.value = `${inputString.substring(
      inputString.indexOf(" ") + 1, //takes the first instance of param +1 (så we start at index[1])
      inputString.lastIndexOf(" ") //reads the last index of params
    )}`;
  } else if (dropdownValue === "5") {
    if (inputString.includes(".jpg")) {
      output.value = `${inputString}` + " is .jpg";
    } else if (inputString.includes(".png")) {
      output.value = `${inputString}` + " is .png";
    } else {
      output.value = "this is not a valid file";
    }
  } else if (dropdownValue === "6") {
    //repeat takes an int, in this case. .length. of the input.
    //since . repeat is a string method, string: "*" "replaces" the input's char
    output.value = `${"*".repeat(inputString.length)}`;
  } else if (dropdownValue === "7") {
    //substring(start, end (index not incl))
    output.value = `${
      inputString.substring(0, 2).toLowerCase() +
      inputString[2].toUpperCase() +
      inputString.slice(3).toLowerCase()
    }`;
  } else if (dropdownValue === "8") {
    if (inputString.includes(" ")) {
      output.value =
        inputString.substring(0, inputString.indexOf(" ") + 1).toLowerCase() +
        inputString[inputString.indexOf(" ") + 1].toUpperCase() +
        inputString.substring(inputString.indexOf(" ") + 2).toLowerCase();
    } else if (inputString.includes("-")) {
      output.value =
        inputString.substring(0, inputString.indexOf("-") + 1).toLowerCase() +
        inputString[inputString.indexOf("-") + 1].toUpperCase() +
        inputString.substring(inputString.indexOf("-") + 2).toLowerCase();
    }
  } else {
    alert("choose an option that is not blank");
  }
} //for multiple spaces or hyphens, make for/while loop to find occurences of them and replaceAll potentially
