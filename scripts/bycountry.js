// 1. List of your BL series
const seriesList = [
////////////// THAILAND \\\\\\\\\\\\
  {
    title: "4 Minutes",
    country: "Thailand",
    image: "images/4 Minutes.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "Bad Buddy",
    country: "Thailand",
    image: "images/bad-buddy.jpg",
    link: "badbuddy.html"
  },
  {
    title: "Big Dragon",
    country: "Thailand",
    image: "images/BIG DRAGON.jpeg",
    link: "BigDragon.html"
  },
  {
    title: "Century of Love",
    country: "Thailand",
    image: "images/Century of Love.jpeg",
    link: "CenturyofLove.html"
  },
  {
    title: "Jack & Joker",
    country: "Thailand",
    image: "images/Jack & Joker.jpeg",
    link: "j&j.html"
  },
  {
    title: "Kidnap",
    country: "Thailand",
    image: "images/Kidnap.jpeg",
    link: "kidnap.html"
  },
  {
    title: "KinnPorsche the Series",
    country: "Thailand",
    image: "images/kinnporschetheseries.jpeg",
    link: "KinnPorsche.html"
  },
  {
    title: "Love in The Air",
    country: "Thailand",
    image: "images/Love in the Air.jpeg",
    link: "LITA.html"
  },
  {
    title: "My Golden Blood",
    country: "Thailand",
    image: "images/My golden blood.jpeg",
    link: "MyGoldenBlood.html"
  },
  {
    title: "Only Friends",
    country: "Thailand",
    image: "images/Only friends.jpeg",
    link: "OnlyFriends.html"
  },
  {
    title: "Our Skyy",
    country: "Thailand",
    image: "images/Our Skyy.jpeg",
    link: "OurSkyy.html"
  },
  {
    title: "Perfect 10 Liners",
    country: "Thailand",
    image: "images/PERFECT 10 LINERS (2024).jpeg",
    link: "p10L.html"
  },
  {
    title: "Pit Babe",
    country: "Thailand",
    image: "images/Pit Babe (2023).jpeg",
    link: "Pitbabe.html"
  },
  {
    title: "Pit Babe 2",
    country: "Thailand",
    image: "images/Pit Babe (2023).jpeg",
    link: "Pitbabe2.html"
  },
  {
    title: "The Eclipse",
    country: "Thailand",
    image: "images/THE ECLIPSE🇹🇭.jpeg",
    link: "theeclipse.html"
  },
  {
    title: "The Heart Killers",
    country: "Thailand",
    image: "images/THE HEART KILLERS.jpeg",
    link: "THK.html"
  },
  {
    title: "Top Form",
    country: "Thailand",
    image: "images/Top Form.jpeg",
    link: "topform"
  },
  {
    title: "#",
    country: "Thailand",
    image: "#",
    link: "#"
  },
  {
    title: "Until We Meet Again",
    country: "Thailand",
    image: "images/until-we-meet-again.jpg",
    link: "uwma.html"
  },
  
////////////// SOUTH KOREA \\\\\\\\\\\\

  {
    title: "Semantic Error",
    country: "South Korea",
    image: "images/semantic error.jpeg",
    link: "semanticerror.html"
  },


////////////// JAPAN \\\\\\\\\\\\


  {
    title: "Cherry Magic",
    country: "Japan",
    image: "images/cherry-magic.jpg",
    link: "cherrymagic.html"
  },

////////////// TAIWAN \\\\\\\\\\\\

  {
    title: "Fight for You",
    country: "Taiwan",
    image: "images/semantic error.jpeg",
    link: "semanticerror.html"
  },
    
];

const container = document.getElementById('seriesContainer');
const dropdown = document.getElementById('countryFilter');
const searchInput = document.getElementById('searchInput');

function renderSeries(filterCountry = "All", searchTerm = "") {
  container.innerHTML = ''; // clear previous results

  const grouped = {};

  seriesList.forEach(series => {
    const titleMatch = series.title.toLowerCase().includes(searchTerm.toLowerCase());
    const countryMatch = (filterCountry === "All" || series.country === filterCountry);

    if (titleMatch && countryMatch) {
      if (!grouped[series.country]) grouped[series.country] = [];
      grouped[series.country].push(series);
    }
  });

  for (const country in grouped) {
    const section = document.createElement('section');
    const heading = document.createElement('h2');

    // Add flag emoji based on country
    const flagMap = {
      "Thailand": "🇹🇭",
      "South Korea": "🇰🇷",
      "Japan": "🇯🇵"
    };

    heading.textContent = `${flagMap[country] || ''} ${country}`;
    section.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'grid-container';

    grouped[country].forEach(series => {
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