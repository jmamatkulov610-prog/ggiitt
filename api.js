const TOKEN =
"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTRiMWFkYmUwNGQ4Y2NjMzgwZjA1ODA2ODQxODhmNSIsIm5iZiI6MTY3NDc0MDM0OS42MjMwMDAxLCJzdWIiOiI2M2QyODI3ZDlmNTFhZjAwYjY3ZDIzMzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Pva231z7eYKVLeqZGVy9bay_m-IyYf55KDhx68Hv84k";

const BASE_URL = "https://api.themoviedb.org/3";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const BACKDROP_URL = "https://image.tmdb.org/t/p/original";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`
    }
};
