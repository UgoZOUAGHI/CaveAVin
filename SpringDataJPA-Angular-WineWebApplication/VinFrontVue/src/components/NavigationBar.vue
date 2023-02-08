<template>

    <body>
        <nav class="navbar">
            <a href="#" class="logo">PolyVin</a>
            <div class="nav-lists">
                <ul>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Nos Producteurs</a>
                    </li>
                    <li class="nav-item">
                        <router-link to="/">Nos vins</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Connexion</a>
                    </li>
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
        data(){
            return{
                reveal_menu: '-100%'
            }
        },
        methods:{
            menuHamburger(){
                if(this.reveal_menu == '-100%'){
                    this.reveal_menu = '0%';
                }
                else{
                    this.reveal_menu = '-100%';
                } 
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
        margin-left: v-bind('reveal_menu');  /* bind du margin-left */
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