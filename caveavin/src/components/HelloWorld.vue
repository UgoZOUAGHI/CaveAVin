<template>

  <nav>
    <div class="logo">Wine Enthusiasts</div>
    <ul class="nav-links">
      <li><a href="home" @click="selected = 'home'">Accueil</a></li>
      <li><a href="map" @click="selected = 'map'">Carte</a></li>
      <li><a href="producers" @click="selected = 'producers'">Producteurs</a></li>
      <li><a href="wines" @click="selected = 'wines'">Vins</a></li>

    </ul>
  </nav>


  <div class="menu">
    <div class="menu-item" v-for="wine in wines" :key="wine.id">
      <img :src="wine.image" alt="Wine" />
      <h3>{{ wine.name }}</h3>
      <p>{{ wine.description }}</p>
      <i class="fas fa-glass-cheers"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "WineMenu",
  data() {
    return {
      selected: "home",
      wines: [
        {
          id: 1,
          name: "Cabernet Sauvignon",
          description: "A full-bodied red wine with notes of black currant, black cherry, and cassis.",
          image: "https://rouenseafarerscentre.fr/wp-content/uploads/2022/09/Bouteille-vin-rouge.jpg"
        },
        {
          id: 2,
          name: "Chardonnay",
          description: "A medium-bodied white wine with notes of green apple, pear, and citrus.",
          image: "https://rouenseafarerscentre.fr/wp-content/uploads/2022/09/Bouteille-vin-rouge.jpg"
        },
        {
          id: 3,
          name: "Pinot Noir",
          description: "A light-bodied red wine with notes of cherry, strawberry, and raspberry.",
          image: "https://rouenseafarerscentre.fr/wp-content/uploads/2022/09/Bouteille-vin-rouge.jpg"
        }
      ]
    };
  }
};

</script>

<style>
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px;
}

.menu-item {
  width: 30%;
  text-align: center;
  margin-bottom: 50px;
}

.menu-item img {
  width: 50%;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.menu-item h3 {
  margin-top: 25px;
}

.menu-item p {
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
}

.menu-item i {
  font-size: 36px;
  color: #888;
  margin-top: 25px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #333;
  color: #fff;
}

.logo {
  font-size: 36px;
  margin: 0;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

.nav-links a.active {
  font-weight: bold;
}
</style>