// 1. List of your BL series
const seriesList = [
  ////////////// THAILAND \\\\\\\\\\\\
  {
    title: "2gether",
    country: "Thailand",
    image: "images/series/2gether.jpeg",
    link: "seriespages/2gether.html"
  },
  ////////////// SOUTH KOREA \\\\\\\\\\\\
  {
    title: "A Breeze of Love",
    country: "South Korea",
    image: "images/series/A Breeze of Love.jpeg",
    link: "seriespages/ABreezeofLove.html"
  },
  ////////////// TAIWAN \\\\\\\\\\\\
  {
    title: "About Youth",
    country: "Taiwan",
    image: "images/series/About Youth.jpeg",
    link: "seriespages/About Youth.html"
  },
  ////////////// JAPAN \\\\\\\\\\\\
  {
    title: "Although I Love You, And You?",
    country: "Japan",
    image: "images/series/Although I Love You And You.jpeg",
    link: "seriespages/AlthoughILoveYou,AndYou?.html"
  },
  ////////////// PHLLPINES \\\\\\\\\\\\
  {
    title: "Gameboys",
    country: "Phillipines",
    image: "images/series/gameboys.jpeg",
    link: "seriespages/gameboys.html"
  },
  ////////////// CHINA \\\\\\\\\\\\
  {
    title: "Addicted",
    country: "China ",
    image: "images/series/Addicted.jpeg",
    link: "seriespages/Addicted.html"
  },

  /*****************- REST -****************/
  {
    title: "(Still) 2gether",
    country: "Thailand",
    image: "images/series/(Still) 2gether.jpeg",
    link: "seriespages/(Still)2gether.html"
  },
  {
    title: "2 Moons",
    country: "Thailand",
    image: "images/series/2 Moons.jpeg",
    link: "seriespages/2Moons.html"
  },
  {
    title: "2 Moons 2",
    country: "Thailand",
    image: "images/series/2Moons2.jpeg",
    link: "seriespages/2Moons2.html"
  },
  {
    title: "2 Moons: The Ambassador",
    country: "Thailand",
    image: "images/series/2 Moons The Ambassador.jpeg",
    link: "seriespages/2MoonsTheAmbassador.html"
  },
  {
    title: "4 Minutes",
    country: "Thailand",
    image: "images/series/4 Minutes.jpeg",
    link: "seriespages/4minutes.html"
  },
  {
    title: "7 Days Before Valentine",
    country: "Thailand",
    image: "images/series/7 Days Before Valentine.jpeg",
    link: "seriespages/7DaysBeforeValentine.html"
  },
  {
    title: "21 Days Theory",
    country: "Thailand",
    image: "images/series/21 Days Theory.jpeg",
    link: "seriespages/21DaysTheory.html"
  },
  {
    title: "180 Degree Longitude Passes Through Us",
    country: "Thailand",
    image: "images/series/180 Degrees Longitude Between Us.jpeg",
    link: "seriespages/180DegreeLongitudePassesThroughUs.html"
  },
  {
    title: "609 Bedtime Story",
    country: "Thailand",
    image: "images/series/609 Bedtime Story.jpeg",
    link: "seriespages/609BedtimeStory.html"
  },
  {
    title: "1000 Stars",
    country: "Thailand",
    image: "images/series/4 Minutes.jpeg",
    link: "seriespages/1000Stars.html"
  },
  {
    title: "1000 Years Old",
    country: "Thailand",
    image: "images/series/1000 Years Old 2023.jpeg",
    link: "seriespages/1000YearsOld.html"
  },
  {
    title: "A Boss And A Babe",
    country: "Thailand",
    image: "images/series/A Boss And A Babe.jpeg",
    link: "seriespages/ABossAndABabe.html"
  },
  {
    title: "Addicted Heroin",
    country: "Thailand",
    image: "images/series/Addicted Heroin.jpeg",
    link: "seriespages/AddictedHeroin.html"
  },
  {
    title: "AiLongNhai",
    country: "Thailand",
    image: "images/series/AiLongNhai.jpeg",
    link: "seriespages/AiLongNhai.html"
  },
  {
    title: "All The Liquors",
    country: "South Korea",
    image: "images/series/All The Liquors.jpeg",
    link: "seriespages/AllTheLiquors.html"
  },
  {
    title: "A Man Who Defies The World Of BL",
    country: "Japan",
    image: "images/series/A Man Who Defies The World Of BL.jpeg",
    link: "seriespages/AManWhoDefiesTheWorldOfBL.html"
  },
  {
    title: "Anti Reset",
    country: "Taiwan",
    image: "images/series/Anti Reset.jpeg",
    link: "seriespages/AntiReset.html"
  },
  {
    title: "A Perfect Match",
    country: "Taiwan",
    image: "images/series/A Perfect Match.jpeg",
    link: "seriespages/A Perfect Match.html"
  },
  {
    title: "A Secretly Love",
    country: "Thailand",
    image: "images/series/A Secretly Love.jpeg",
    link: "seriespages/ASecretlyLove.html"
  },
  {
    title: "A Shoulder to Cry On",
    country: "South Korea",
    image: "images/series/A Shoulder to Cry On.jpeg",
    link: "seriespages/AShouldertoCryOn.html"
  },
  {
    title: "At 25:00, In Akasaka",
    country: "Japan",
    image: "images/series/At 2500, In Akasaka.jpeg",
    link: "seriespages/At25:00,InAkasaka.html"
  },
  {
    title: "Bad Buddy",
    country: "Thailand",
    image: "images/series/Bad Buddy.jpeg",
    link: "seriespages/BadBuddy.html"
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