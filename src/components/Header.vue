<template>
  <header id="header">
    <router-link to="/" exact>Filmaria</router-link>
    <router-link custom v-slot="{ navigate }" to="/my-movies"
      ><button class="my-movies" @click="navigate">
        MEUS FILMES
      </button></router-link
    >
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  background-color: var(--primary-color);
}

#header a {
  text-decoration: none;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
}

#header a:active {
  color: var(--secondary-color);
}

#header button {
  cursor: pointer;
  border: 0;
  background-color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  font-weight: bold;
}
</style>
