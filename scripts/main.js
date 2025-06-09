const seriesList = [
  {
    title: "4 Minutes",
    year: 2024,
    country: "Thailand",
    image: "images/4 Minutes.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "Big Dragon",
    year: 2018,
    country: "Thailand",
    image: "images/BIG DRAGON.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "Century of Love",
    year: 2024,
    country: "Thailand",
    image: "images/Century of Love.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "Jack & Joker",
    year: 2024,
    country: "Thailand",
    image: "images/Jack & Joker.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "Kidnap",
    year: 2024,
    country: "Thailand",
    image: "images/Kidnap.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "KinnPorsche the Series",
    year: 2024,
    country: "Thailand",
    image: "images/kinnporschetheseries.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "Love in The Air",
    year: 2022,
    country: "Thailand",
    image: "images/Love in the Air.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "My Golden Blood",
    year: 2025,
    country: "Thailand",
    image: "images/My golden blood.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "NOT ME ",
    year: 2021,
    country: "Thailand",
    image: "images/Not Me -Series.jpeg",
    link: "seriespages/notme.html"
  },
  {
    title: "Only Friends",
    year: 2018,
    country: "Thailand",
    image: "images/Only friends.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "Our Skyy",
    year: 2018,
    country: "Thailand",
    image: "images/Our Skyy.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "Perfect 10 Liners",
    year: 2024,
    country: "Thailand",
    image: "images/PERFECT 10 LINERS (2024).jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "Pit Babe",
    year: 2023,
    country: "Thailand",
    image: "images/Pit Babe (2023).jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "Pit Babe 2",
    year: 2025,
    country: "Thailand",
    image: "images/Pit Babe (2023).jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "Semantic Error",
    year: 2022,
    country: "South Korea",
    image: "images/semantic error.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "The Eclipse",
    year: 2023,
    country: "Thailand",
    image: "images/THE ECLIPSE🇹🇭.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "The Heart Killers",
    year: 2024,
    country: "Thailand",
    image: "images/THE HEART KILLERS.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "Top Form",
    year: 2025,
    country: "Thailand",
    image: "images/Top Form.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "Until We Meet Again",
    year: 2019,
    country: "Thailand",
    image: "images/Until We Meet Again The Series.jpeg",
    link: "seriespages/4minutes.html"
  }
];

const seriesGrid = document.getElementById('seriesGrid');
const searchInput = document.getElementById('searchInput');

function displaySeries(series) {
  seriesGrid.innerHTML = '';
  series.forEach(item => {
    const card = document.createElement('div');
    card.className = 'series-card';

    const imgHTML = `<img src="${item.image}" alt="${item.title}">`;
    const linkStart = item.link ? `<a href="${item.link}">` : '';
    const linkEnd = item.link ? `</a>` : '';

    card.innerHTML = `
      ${linkStart}${imgHTML}${linkEnd}
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
