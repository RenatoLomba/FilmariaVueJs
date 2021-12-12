<template>
  <div class="my-movies">
    <h1>Meus filmes</h1>

    <span v-if="myMovies.length <= 0"
      >Você não possui nenhum filme salvo :(</span
    >
    <ul v-else>
      <li v-for="mov in myMovies" :key="mov.id">
        <span>{{ mov.nome }}</span>
        <div>
          <router-link custom v-slot="{ navigate }" :to="`/movie/${mov.id}`"
            ><button @click="navigate">Ver detalhes</button></router-link
          >
          <button @click="removeMovie(mov.id)">Excluir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import moviesStore from '../store/movies';

export default {
  name: 'MyMovies',
  data() {
    return {
      myMovies: [],
    };
  },
  created() {
    this.myMovies = moviesStore.getSavedMovies();
  },
  methods: {
    removeMovie(id) {
      this.myMovies = moviesStore.removeMovie(id);
    },
  },
};
</script>

<style scoped>
.my-movies {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  margin-top: 30px;
}

ul li {
  min-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  font-size: 25px;
}

button + button {
  margin-left: 10px;
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
</style>
