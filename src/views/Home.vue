<template>
  <div id="home">
    <div class="movies-list">
      <Loading v-if="isLoading" />
      <article v-else class="movie-item" v-for="mov in movies" :key="mov.id">
        <strong>{{ mov.nome }}</strong>
        <img :src="mov.foto" :alt="mov.nome" />
        <router-link :to="`/movie/${mov.id}`">Acessar</router-link>
      </article>
    </div>
  </div>
</template>

<script>
import { api } from '../services/api';
import Loading from '../components/Loading.vue';

export default {
  name: 'Home',
  components: {
    Loading,
  },
  data() {
    return {
      movies: [],
      isLoading: true,
    };
  },
  async created() {
    const { data } = await api.get('?api=filmes');
    this.movies = data;
    this.isLoading = false;
  },
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
}

.movies-list {
  margin: 15px;
}

.movies-list article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 15px;
  padding: 15px;
  border-radius: 5px;
}

.movies-list strong {
  padding-bottom: 15px;
  font-size: 20px;
}

img {
  max-height: 350px;
  width: 900px;
}

.movies-list article a {
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  background-color: var(--primary-color);
  width: 100%;
  height: 40px;
  margin-top: -30px;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.movies-list article a:active {
  color: var(--secondary-color);
}
</style>
