const seriesByYear = [
  {
    title: "Semantic Error",
    year: "2022",
    image: "images/semantic-error.jpg",
    link: "semanticerror.html"
  },
  {
    title: "4 Minutes",
    year: "2024",
    image: "images/4 Minutes.jpeg",
    link: "4Minutes.html"
  },
  {
    title: "Until We Meet Again",
    year: "2024",
    image: "images/until-we-meet-again.jpg",
    link: "uwma.html"
  },
  {
    title: "Cherry Magic",
    year: "2024",
    image: "images/cherry-magic.jpg",
    link: "cherrymagic.html"
  }
];

const container = document.getElementById('seriesContainerYear');
const dropdown = document.getElementById('yearFilter');
const searchInput = document.getElementById('searchInput');

function renderSeries(filterYear = "All", searchTerm = "") {
  container.innerHTML = ''; // clear previous results

  const grouped = {};

  seriesByYear.forEach(series => {
    const titleMatch = series.title.toLowerCase().includes(searchTerm.toLowerCase());
    const yearMatch = (filterYear === "All" || series.year === filterYear);

    if (titleMatch && yearMatch) {
      if (!grouped[series.year]) grouped[series.year] = [];
      grouped[series.year].push(series);
    }
  });

  for (const year in grouped) {
    const section = document.createElement('section');
    const heading = document.createElement('h2');

    // Add flag emoji based on country
    const flagMap = {
      "2025": "",
      "2024": "",
      "2023": "",
      "2022": "",
      "2021": "",
      "2020": "",
      
    };

    heading.textContent = `${flagMap[year] || ''} ${year}`;
    section.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'grid-container';

    grouped[year].forEach(series => {
      const card = document.createElement('div');
      card.className = 'series-card';
      card.innerHTML = `
        <a href="${series.link}">
          <img src="${series.image}" alt="${series.title}">
        </a>
        <h3>${series.title}</h3>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  }
}

// Trigger re-render on filter or search
dropdown.addEventListener('change', () => {
  renderSeries(dropdown.value, searchInput.value);
});

searchInput.addEventListener('input', () => {
  renderSeries(dropdown.value, searchInput.value);
});

// Initial render
renderSeries();