window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);


function navigator() {
    console.log({ location });
    if(location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('search=')){
        searchPage();
    } else if (location.hash.startsWith('#movie=')){
        movieDetailsPage();
    } else if (location.hash.startsWith('#category=')){
        categoriesPage();
    } else {
        homePage();
    }
}

function trendsPage() {
    console.log('trends');
}
function searchPage() {
    console.log('search');
}
function  movieDetailsPage() {
    console.log('movie details');
}
function categoriesPage() {
    console.log('categories');
}
function homePage() {
    getTrendingMoviesPreview();
    getTCategoriesPreview();
}