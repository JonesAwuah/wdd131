// News
  document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("newsSearch");
  const newsCards = document.querySelectorAll(".news-card");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();

    newsCards.forEach(card => {
      const tags = card.getAttribute("data-tags");
      const match = tags.includes(query);
      card.style.display = match || query === "" ? "block" : "none";
    });
  });
});
