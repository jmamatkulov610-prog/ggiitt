const params = new URLSearchParams(location.search);

const id = params.get("id");

async function getMovie() {

    const res = await fetch(`${BASE_URL}/movie/${id}`, options);

    const movie = await res.json();

const movieBox = document.getElementById("movie");

movieBox.innerHTML = `
<div class="movie-banner" style="background-image:url(${BACKDROP_URL}${movie.backdrop_path})">

    <div class="overlay">

        <div class="container detail">

            <img class="poster"
            src="${IMAGE_URL}${movie.poster_path}">

            <div class="info">

                <h1>${movie.title}</h1>

                <p><b>Release:</b> ${movie.release_date}</p>

                <p><b>Language:</b> ${movie.original_language.toUpperCase()}</p>

                <p><b>Rating:</b>  ${movie.vote_average.toFixed(1)}</p>

                <p><b>Runtime:</b> ${movie.runtime} min</p>

                <p>${movie.overview}</p>

            </div>

        </div>

    </div>

</div>
`;

}

getMovie();
movieBox.innerHTML = `
<div class="movie-banner" style="background-image:url(${BACKDROP_URL}${movie.backdrop_path})">

    <div class="overlay">

        <div class="container detail">

            <img class="poster"
            src="${IMAGE_URL}${movie.poster_path}">

            <div class="info">

                <h1>${movie.title}</h1>

                <p><b>Release:</b> ${movie.release_date}</p>

                <p><b>Language:</b> ${movie.original_language.toUpperCase()}</p>

                <p><b>Rating:</b>  ${movie.vote_average.toFixed(1)}</p>

                <p><b>Runtime:</b> ${movie.runtime} min</p>

                <p>${movie.overview}</p>

            </div>

        </div>

    </div>

</div>
`;

getMovie();
