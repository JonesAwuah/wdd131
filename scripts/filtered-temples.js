const temples = [
  {
    templeName: "California USA Temple",
    location: "California, USA",
    dedicated: "1984, July, 7",
    area: 19000,
    imageUrl: "images/California.webp"
  },
  {
    templeName: "Cardston Canada Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26",
    area: 88000,
    imageUrl: "images/Canada.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 100000,
    imageUrl: "images/Italy.webp"
  },
  {
    templeName: "Madrid Spain Temple",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 45000,
    imageUrl: "images/Spain.jpeg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "images/Accra.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919, November, 27",
    area: 42000,
    imageUrl: "images/Hawaii.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52000,
    imageUrl: "images/Japan.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 9200,
    imageUrl: "images/France.jpg"
  },
  {
    templeName: "Londrina Brazil Temple",
    location: "Londrina, Brazil",
    dedicated: "2000, December, 17",
    area: 10500,
    imageUrl: "images/Brazil.jpg"
  },
  {
    templeName: "Guadalajara Mexico Temple",
    location: "Guadalajara, Mexico",
    dedicated: "2001, April, 29",
    area: 11000,
    imageUrl: "images/Mexico.webp"
  },
  {
    templeName: "Adelaide Australia Temple",
    location: "Adelaide, Australia",
    dedicated: "2000, June, 15",
    area: 10700,
    imageUrl: "images/Australia.jpg"
  },
  {
    templeName: "London England Temple",
    location: "London, England, UK",
    dedicated: "1958, September, 7",
    area: 42000,
    imageUrl: "images/England.jpg"
  },
  {
    templeName: "Kinshasa DRC Temple",
    location: "Kinshasa, DRC",
    dedicated: "2019, April, 14",
    area: 9600,
    imageUrl: "images/Congo.jpg"
  },
  {
    templeName: "Colonia Juárez Mexico Temple",
    location: "Colonia Juárez, Mexico",
    dedicated: "1999, March, 6",
    area: 6800,
    imageUrl: "images/Mexico_Colonia.jpg"
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio, USA",
    dedicated: "1836, March, 27",
    area: 24000, 
    imageUrl: "images/Kirtland.jpg",
    note: "Now owned by the Community of Christ"
  },
  {
    templeName: "Nauvoo Temple (original)",
    location: "Nauvoo, Illinois, USA",
    dedicated: "1846, May, 1",
    area: 54000, 
    imageUrl: "images/Nauvoo.jpg",
    note: "Destroyed by arson and tornado; rebuilt in 2002"
  },
  {
    templeName: "St. George Utah Temple",
    location: "St. George, Utah, USA",
    dedicated: "1877, April, 6",
    area: 110000,
    imageUrl: "images/St_George_Utah.jpg"
  },
  {
    templeName: "Logan Utah Temple",
    location: "Logan, Utah, USA",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl: "images/Logan.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, USA",
    dedicated: "1888, May, 21",
    area: 100373,
    imageUrl: "images/Manti.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/Salt_Lake.jpg"
  }
];

// Select the container
const templeContainer = document.getElementById("templeContainer");

// Display function
function displayTemples(templesList) {
  templeContainer.innerHTML = "";
  templesList.forEach(temple => {
    const card = document.createElement("div");
    card.className = "temple-card";
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <img src="${temple.imageUrl}" loading="lazy" alt="${temple.templeName}">
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;
    templeContainer.appendChild(card);
  });
}

// Filtering function
function filterTemples(filter) {
  let filtered = [];

  switch (filter) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

// Navigation filter buttons
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = e.target.getAttribute("data-filter");
    filterTemples(filter);
  });
});

// Footer info
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger toggle
const menuButton = document.getElementById("menu");
const nav = document.getElementById("nav");
menuButton.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Initial load
displayTemples(temples);
