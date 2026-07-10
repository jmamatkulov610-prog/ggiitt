
const trending = document.getElementById("trending");
const popular = document.getElementById("popular");
const topRated = document.getElementById("topRated");
const upcoming = document.getElementById("upcoming");

const hero = document.querySelector(".hero");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");


async function getTrending() {

    const res = await fetch(`${BASE_URL}/trending/movie/day`, options);

    const data = await res.json();

    createCards(data.results, trending);

    hero.style.backgroundImage =
        `url(${BACKDROP_URL}${data.results[0].backdrop_path})`;

}



async function getPopular() {

    const res = await fetch(`${BASE_URL}/movie/popular`, options);

    const data = await res.json();

    createCards(data.results, popular);

}


async function getTopRated() {

    const res = await fetch(`${BASE_URL}/movie/top_rated`, options);

    const data = await res.json();

    createCards(data.results, topRated);

}



async function searchMovie() {

    const text = searchInput.value.trim();

    if (text === "") return;

    const res = await fetch(
        `${BASE_URL}/search/movie?query=${encodeURIComponent(text)}`,
        options
    );

    const data = await res.json();

    createCards(data.results, trending);

}


function createCards(data, place) {

    place.innerHTML = "";

    data.forEach(movie => {

        place.innerHTML += `
<div class="card" onclick="openMovie(${movie.id})">

    <img src="${IMAGE_URL}${movie.poster_path}" alt="${movie.title}">

    <div class="percent">

        ${Math.round(movie.vote_average * 10)}%

    </div>

    <h3>${movie.title}</h3>

    <p>${movie.release_date}</p>

</div>

        `;

    });

}


searchBtn.onclick = searchMovie;

searchInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        searchMovie();

    }

});


getTrending();
getPopular();
getTopRated();
function openMovie(id){

    location.href = `movie.html?id=${id}`;

}

async function getLeaders(){

    const res = await fetch(`${BASE_URL}/person/popular`, options);

    const data = await res.json();

    const leaders = document.getElementById("leaders");

    leaders.innerHTML = "";

    data.results.slice(0,10).forEach(person=>{

        leaders.innerHTML += `
        
        <div class="leader">

            <img src="${IMAGE_URL}${person.profile_path}">

            <div class="leaderInfo">

                <h3>${person.name}</h3>

                <div class="green"></div>

                <div class="red"></div>

            </div>

        </div>

        `;

    });

}

getLeaders();