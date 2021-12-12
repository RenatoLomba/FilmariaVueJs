import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import MyMovies from '../views/MyMovies.vue'
import ErrorPage from '../views/Error.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie,
    props: true,
  },
  {
    path: '/my-movies',
    name: 'MyMovies',
    component: MyMovies,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
