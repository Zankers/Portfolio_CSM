window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   var button = document.getElementById("convertButton");
   button.addEventListener("click", buttonHandler);

   var celInput = document.getElementById("cInput");
   var fahInput = document.getElementById("fInput");
   celInput.addEventListener("input", inputHandler);
   fahInput.addEventListener("input", inputHandler)
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return ((degreesCelsius * 9) / 5) + 32;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return ((degreesFahrenheit - 32) * 5) / 9;
}

function buttonHandler() {
   var celsius = document.getElementById("cInput");
   var fahren = document.getElementById("fInput");

   if(celsius.value !== "") {
      if(!testInput(celsius.value)) {
         return;
      }
      fahren.value = convertCtoF(celsius.value);
   }
   else if(fahren.value !== "") {
      if(!testInput(fahren.value)) {
         return;
      }
      celsius.value = convertFtoC(fahren.value);
   }

   imgVal = fahren.value;
   var image = document.getElementById("weatherImage");
   if(imgVal < 32) {
      image.src = "cold.png";
   }
   else if(imgVal > 50) {
      image.src = "warm.png";
   }
   else {
      image.src = "cool.png";
   }
}

function inputHandler(event) {
   if(event.target.id === "cInput") {
      document.getElementById("fInput").value = "";
   }
   if(event.target.id === "fInput") {
      document.getElementById("cInput").value = "";
   }
}

function errorInput(value) {
   errorMessage = document.getElementById("errorMessage");
   if(value == "") {
      errorMessage.textContent = "";
   }
   else {
      errorMessage.textContent = value + " is not a number";
   }
}

function testInput(value) {
   var testing = value;
   console.log("Testing: " + testing);
   if(isNaN(parseFloat(value))) {
      errorInput(testing);
      return false
   }
   else {
      errorInput("");
      return true;
   }
}
