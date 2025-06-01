// Update last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Simulated weather values
const temp = 8; // Celsius
const windSpeed = 10; // km/h

// Display in DOM
document.getElementById('temp').textContent = temp;
document.getElementById('wind-speed').textContent = windSpeed;

// Wind chill function using one line of code
function calculateWindChill(t, s) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

// Apply wind chill conditionally
const windChill = (temp <= 10 && windSpeed > 4.8) ? `${calculateWindChill(temp, windSpeed)} °C` : "N/A";
document.getElementById('wind-chill').textContent = windChill;

