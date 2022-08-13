const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-type': 'application/json;charse=utf-8',
    },
    params: {
        'api_key': API_KEY,
    }
});

async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day');
    const movies = data.results;

    trendingMoviesPreviewList.innerHTML = "";
    movies.forEach(movie => {
        //We acces to the article of the html trhough the #trendingPreview id.

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + movie.poster_path,);

        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);
        //After this we will get the trending movies


    });
}

async function getCategoriesPreview() {
    const { data } = await api('genre/movie/list');//we get the api
    const categories = data.genres;

    
    categoriesPreviewList.innerHTML = "";
    categories.forEach(category => {
        //We acces to the article of the html trhough the #trendingPreview id.

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        categoryTitle.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`;
        });
        const categoryTitleText = document.createTextNode(category.name);
        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesPreviewList.appendChild(categoryContainer);
      
    });
}


async function getMoviesByCategory() {
    const { data } = await api('trending/movie/day');
    const movies = data.results;

    trendingMoviesPreviewList.innerHTML = "";
    movies.forEach(movie => {
        //We access to the article of the html trhough the #trendingPreview id.

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + movie.poster_path,);

        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);
        //After this we will get the trending movies


    });
}
