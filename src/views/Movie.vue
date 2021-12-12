<template>
  <div class="movie">
    <Loading v-if="isLoading" />
    <div v-else class="container">
      <h2>{{ details.nome }}</h2>
      <img :src="details.foto" :alt="details.nome" />
      <h3>Sinopse</h3>
      <p>{{ details.sinopse }}</p>

      <div class="buttons">
        <router-link custom v-slot="{ navigate }" to="/"
          ><button @click="navigate">Ver mais filmes</button></router-link
        >
        <button @click="isSaved ? removeMovie() : saveMovie()">
          {{ isSaved ? 'Remover' : 'Salvar' }}
        </button>
        <button>
          <a
            :href="`https://youtube.com/results?search_query=Trailer ${details.nome}`"
            target="blank"
            >Trailer</a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../services/api';
import moviesStore from '../store/movies';
import Loading from '../components/Loading.vue';

export default {
  name: 'Movie',
  components: {
    Loading,
  },
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      details: null,
      isLoading: true,
      isSaved: false,
    };
  },
  async created() {
    const { data } = await api.get(`?api=filmes/${this.id}`);
    this.details = data;
    this.isLoading = false;
    this.isSaved = moviesStore.getIsAlreadySaved(this.details.id);
  },
  methods: {
    saveMovie() {
      moviesStore.saveMovie(this.details);
      this.isSaved = true;
    },
    removeMovie() {
      moviesStore.removeMovie(this.details.id);
      this.isSaved = false;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 900px;
  margin-top: 30px;
}

h2 {
  color: #fff;
  margin-bottom: 0px;
  background: var(--secondary-color);
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.container img {
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

button {
  margin-right: 5px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  border: 0;
  padding: 12px;
  font-size: 20px;
  transition: all 0.5s;
  outline: none;
}
button:not(:disabled):hover {
  background: var(--primary-color);
  color: #fff;
}
button:disabled {
  cursor: not-allowed;
}

a {
  text-decoration: none;
  color: #000;
  transition: all 0.5s;
}

a:hover {
  color: #fff;
}
</style>
