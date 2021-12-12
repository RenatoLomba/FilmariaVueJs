export default {
  saveMovie(movie) {
    const movies = this.getSavedMovies();
    const hasMovie = this.getIsAlreadySaved(movie.id);

    if (hasMovie) return;

    movies.push(movie);
    localStorage.setItem('@filmaria/my-movies', JSON.stringify(movies));
  },
  removeMovie(id) {
    const movies = this.getSavedMovies();
    const newMovies = movies.filter((m) => m.id !== id);
    localStorage.setItem('@filmaria/my-movies', JSON.stringify(newMovies));

    return newMovies;
  },
  getSavedMovies() {
    const list = localStorage.getItem('@filmaria/my-movies');
    return JSON.parse(list) || [];
  },
  getIsAlreadySaved(id) {
    const movies = this.getSavedMovies();
    return movies.some((m) => m.id === id);
  },
};
