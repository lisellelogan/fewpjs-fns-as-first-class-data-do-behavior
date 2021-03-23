/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  // takes in argument of a string
  // turn string into integer
  const hour = parseInt(time, 10);
  // if the time is earlier => 12 return "Good Morning"
  if (hour < 12) return "Good Morning";
  // if the time is between 12pm and 5pm => return "Good Afternoon"
  else if (hour > 17) return "Good Evening";
  // if the time is later than 5pm => return "Good Evening"
  else  return "Good Afternoon";
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  // takes argument of string
  // should update text inside greeting node with content of argument
  // does not return anything
  document.getElementById('greeting').innerText = message;
}