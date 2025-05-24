document.getElementById('lastModified').textContent = document.lastModified;

const temp = 28; // Simulated temperature in Celsius
const windSpeed = 10; // Simulated wind speed in km/h

document.getElementById('temp').textContent = temp;
document.getElementById('wind-speed').textContent = windSpeed;

function calculateWindChill(t, s) {
  if (t <= 10 && s > 4.8) {
    return (
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(s, 0.16) +
      0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1);
  } else {
    return 'N/A';
  }
}

document.getElementById('wind-chill').textContent = calculateWindChill(temp, windSpeed);
