/////////////////////////////////////////
/* LIVE TIME */

// Function to update the current time
function currentTime() {
  // Get the current date and time
  const now = new Date();

  // Get the current hour and pad it with leading zeros if necessary
  const hours = String(now.getHours()).padStart(2, "0");

  // Get the current minute and pad it with leading zeros if necessary
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // Get the current second and pad it with leading zeros if necessary
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Format the time as a string in the "HH:MM:SS" format
  const time = `${hours}:${minutes}:${seconds}`;

  // Update the text content of the element with the id "clock" to display the current time
  document.getElementById("clock").textContent = time;
}

// Call the currentTime function every 1000 milliseconds (1 second)
setInterval(currentTime, 1000);


