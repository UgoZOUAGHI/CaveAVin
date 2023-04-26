<template>
  <br>
  <h1> Bienvenue sur Polyvin </h1>
  <br>
  <h2> Site web référençant les vins et producteurs de France</h2>
  <br>
  <img src="../assets/DALLE_2023-04-12_14.30.38_-_make_a_home_picture_for_a_website_who_list_wines_from_france_with_red_color.png">
  <br>
  <br>
  <div v-if="!StateUser">
  <button id="button2" v-on:click="Connexion()">N'attends pas Connecte-toi !</button>
  </div>
  <div v-if="StateUser">
  <button id="button2" v-on:click="Profil()">Consulte ton Profil</button>
  </div>
</template>


<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    Connexion() {
        this.$router.push('/connexion')
    },
    Profil() {
        this.$router.push('/profile')
    }
  },
  computed: {
    StateUser() {
      return this.$store.state.auth.user;
    },
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#button2 {
    background-color: darkred;
    /* Green */
    border: 2px solid rgba(255, 255, 255, 0.1);
    color: white;
    padding: 12px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    width: 20 0px;
    margin-top: 30px;
    border-radius: 5px;
    font-weight: 800;
    font-size: 18px;
}

img {
  width: 25%;
  height: 25%;
}
</style>