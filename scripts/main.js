const seriesList = [
  {
    title: "4 Minutes",
    year: 2024,
    country: "Thailand",
    image: "images/4 Minutes.jpeg"
  },
  {
    title: "Big Dragon",
    year: 2018,
    country: "Thailand",
    image: "images/BIG DRAGON.jpeg"
  },
  {
    title: "Century of Love",
    year: 2024,
    country: "Thailand",
    image: "images/Century of Love.jpeg"
  },
  {
    title: "Jack & Joker",
    year: 2024,
    country: "Thailand",
    image: "images/Jack & Joker.jpeg"
  },
  {
    title: "Kidnap",
    year: 2024,
    country: "Thailand",
    image: "images/Kidnap.jpeg"
  },
  {
    title: "KinnPorsche the Series",
    year: 2024,
    country: "Thailand",
    image: "images/kinnporschetheseries.jpeg"
  },
  {
    title: "Love in The Air",
    year: 2022,
    country: "Thailand",
    image: "images/Love in the Air.jpeg"
  },
  {
    title: "My Golden Blood",
    year: 2025,
    country: "Thailand",
    image: "images/My golden blood.jpeg"
  },
  {
    title: "Only Friends",
    year: 2018,
    country: "Thailand",
    image: "images/Only friends.jpeg"
  },
  {
    title: "Our Skyy",
    year: 2018,
    country: "Thailand",
    image: "images/Our Skyy.jpeg"
  },
  {
    title: "Perfect 10 Liners",
    year: 2024,
    country: "Thailand",
    image: "images/PERFECT 10 LINERS (2024).jpeg"
  },
  {
    title: "Pit Babe",
    year: 2023,
    country: "Thailand",
    image: "images/Pit Babe (2023).jpeg"
  },
  {
    title: "Pit Babe 2",
    year: 2025,
    country: "Thailand",
    image: "images/Pit Babe (2023).jpeg"
  },
  {
    title: "Semantic Error",
    year: 2022,
    country: "South Korea",
    image: "images/semantic error.jpeg"
  },
  {
    title: "The Eclipse",
    year: 2023,
    country: "Thailand",
    image: "images/THE ECLIPSE🇹🇭.jpeg"
  },
  {
    title: "The Heart Killers",
    year: 2024,
    country: "Thailand",
    image: "images/THE HEART KILLERS.jpeg"
  },
  {
    title: "Top Form",
    year: 2025,
    country: "Thailand",
    image: "images/Top Form.jpeg"
  },
  {
    title: "Until We Meet Again",
    year: 2019,
    country: "Thailand",
    image: "images/Until We Meet Again The Series.jpeg"
  }
];

const seriesGrid = document.getElementById('seriesGrid');
const searchInput = document.getElementById('searchInput');

function displaySeries(series) {
  seriesGrid.innerHTML = '';
  series.forEach(item => {
    const card = document.createElement('div');
    card.className = 'series-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.country} · ${item.year}</p>
    `;
    seriesGrid.appendChild(card);
  });
}

// Initial display
displaySeries(seriesList);

// Search functionality
searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = seriesList.filter(s =>
    s.title.toLowerCase().includes(keyword)
  );
  displaySeries(filtered);
});
