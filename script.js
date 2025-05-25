const movies = [
  {
    title: "Patton Oswalt: Annihilation",
    year: 2017,
    duration: "1 hr 6 min",
    rating: 7.4,
    genres: ["Uncategorized"]
  },
  {
    title: "New York Doll",
    year: 2005,
    duration: "1 hr 15 min",
    rating: 7.9,
    genres: ["Documentary", "Music"]
  },
  {
    title: "Mickey’s Magical Christmas",
    year: 2001,
    duration: "1 hr 5 min",
    rating: 6.8,
    genres: ["Adventure", "Animation", "Comedy"]
  },
  {
    title: "And Then I Go",
    year: 2017,
    duration: "1 hr 39 min",
    rating: 7.6,
    genres: ["Drama"]
  },
  {
    title: "An Extremely Goofy Movie",
    year: 2000,
    duration: "1 hr 19 min",
    rating: 6.4,
    genres: ["Animation", "Comedy", "Family"]
  },
  // Peter Rabbit x10
  ...Array(10).fill({
    title: "Peter Rabbit",
    year: 2018,
    duration: "1 hr 35 min",
    rating: 6.6,
    genres: ["Adventure", "Animation", "Comedy"]
  })
];

function createMovieCard(movie) {
  return `
    <div class="movie-card">
      <img src="./детпул.jpg" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.rating} | ${movie.year} | ${movie.duration}</p>
      <p>${movie.genres.join(' ')}</p>
      <button class="info-btn" onclick="alert('More info about ${movie.title}')">More info</button>
    </div>
  `;
}

function displayMovies(movieList) {
  const container = document.getElementById("moviesContainer");
  container.innerHTML = movieList.map(createMovieCard).join("");
}

function filterMovies() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const genreFilter = document.getElementById("genreFilter").value;
  const sortOption = document.getElementById("sort").value;

  let filtered = movies.filter(movie => {
    const matchTitle = movie.title.toLowerCase().includes(searchInput);
    const matchGenre = genreFilter === "All" || movie.genres.includes(genreFilter);
    return matchTitle && matchGenre;
  });

  if (sortOption === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "year") {
    filtered.sort((a, b) => b.year - a.year);
  }

  displayMovies(filtered);
}

window.onload = () => {
  displayMovies(movies);
};
function createMovieCard(movie) {
  return `
    <div class="movie-card">
      <a href="https://www.google.com/search?q=${encodeURIComponent(movie.title + ' trailer')}" target="_blank">
        <img src="./детпул.jpg" alt="${movie.title}">
      </a>
      <h3>${movie.title}</h3>
      <p>${movie.rating} | ${movie.year} | ${movie.duration}</p>
      <p>${movie.genres.join(' ')}</p>
      <button class="info-btn" onclick="alert('More info about ${movie.title}')">More info</button>
    </div>
  `;
}

function resetFilters() {
  document.getElementById("searchInput").value = "";
  document.getElementById("genreFilter").value = "All";
  document.getElementById("sort").value = "default";
  displayMovies(movies);
}


