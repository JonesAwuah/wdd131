document.getElementById('lastModified').textContent = document.lastModified;

const temp = 28; // Example Celsius
const windSpeed = 10; // km/h

document.getElementById('temp').textContent = temp;
document.getElementById('wind-speed').textContent = windSpeed;

function calculateWindChill(t, s) {
  if (t <= 10 && s > 4.8) {
    const chill =
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(s, 0.16) +
      0.3965 * t * Math.pow(s, 0.16);
    return chill.toFixed(1);
  }
  return 'N/A';
}

document.getElementById('wind-chill').textContent = calculateWindChill(temp, windSpeed);
