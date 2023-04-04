<template>
    <body>
        <nav class="navbar">
            <router-link to="/" class="logo">PolyVin</router-link>
            <div class="nav-lists">
                <ul>
                    <li class="nav-item">
                        <router-link to="/carte" @click="menuHamburger">Carte des vignobles</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/producteurs" @click="menuHamburger">Les Producteurs</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/vins" @click="menuHamburger">Nos Vins</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link to="/about" @click="menuHamburger">About</router-link>
                    </li> -->
                    <div v-if="!StateUser">
                        <li class="nav-item">
                            <router-link to="/connexion" @click="menuHamburger">Connexion</router-link>
                        </li>
                    </div>
                    <div v-if="ShowProducteurContent" >
                        <li class="nav-item">
                            <router-link to="/vinsproducteurs" @click="menuHamburger">
                                Mes Vins
                            </router-link>
                        </li>
                    </div>
                    <div v-if="StateUser" >
                        <li class="nav-item">
                            <router-link to="/profile" @click="menuHamburger">
                                {{ StateUser.username }}
                            </router-link>
                        </li>
                    </div>
                    <div v-if="StateUser" >

                        <li class="nav-item">
                            <a id='logout' @click="menuHamburger" @click.prevent="logOut">Déconnexion</a>
                        </li>
                    </div>
                </ul>
            </div>
            <img alt="logo" @click="menuHamburger" src="@/assets/menu-btn.png" class="menu-hamburger">

        </nav>
    </body>
</template>


<script>
/*const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-lists")
menuHamburger.addEventListener('click', () => {
navLinks.classList.toggle('mobile-menu')
})*/
export default {
    data() {
        return {
            reveal_menu: '-100%'
        }
    },
    computed: {
        StateUser() {
            return this.$store.state.auth.user;
        },
        ShowProducteurContent() {
            if (this.StateUser && this.StateUser['roles']) {
                return this.StateUser['roles'].includes('ROLE_PRODUCTEUR');
            }

            return false;
        },
        
    },
    methods: {
        menuHamburger() {
            if (this.reveal_menu == '-100%') {
                this.reveal_menu = '0%';
            }
            else if (this.reveal_menu == '0%') {
                this.reveal_menu = '-100%';
            }
        },
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');

* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
}


body {
    font-size: 100%;
    font-family: 'Poppins';
}

.navbar {
    /*position: absolute;*/
    padding: 50px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    background-color: darkred;
}

.navbar a {
    color: whitesmoke;
}

.navbar router-link {
    color: whitesmoke;
}

.navbar .logo {
    font-size: 2em;
    font-weight: bold;
}

.navbar .nav-lists ul {
    display: flex;
    margin-right: 0px;
}

.navbar .nav-lists ul li {
    margin: 0 40px;
}

.navbar .menu-hamburger {
    display: none;
    position: absolute;
    top: 50px;
    right: 50px;
    width: 35px;
}

#logout {
    cursor: pointer;
}


@media screen and (max-width: 900px) {

    .navbar .menu-hamburger {
        display: block;
        position: absolute;
        top: 40px;
        right: 50px;
    }

    .navbar .logo {
        position: absolute;
        top: 28px;
        left: 50px;
    }

    .nav-lists {
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: darkred;
        margin-left: v-bind('reveal_menu');
        /* bind du margin-left */
        transition: all 0.5s ease;
    }


    .nav-lists ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .navbar .nav-lists ul li {
        margin: 3px 0;
    }

}
</style>