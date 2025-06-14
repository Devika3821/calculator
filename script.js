// Function to append clicked value to the display
function append(value) {
  document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById("display").value = '';
}

// Function to calculate square
function square() {
  let display = document.getElementById("display");
  let num = parseFloat(display.value);
  display.value = num * num;
}

// Function to calculate final result
function calculate() {
  let display = document.getElementById("display");
  try {
    // Using eval is fine here since input is controlled via buttons
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
