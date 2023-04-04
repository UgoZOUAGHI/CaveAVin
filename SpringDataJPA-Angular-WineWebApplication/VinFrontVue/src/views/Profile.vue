<template>
    <header>
        <br>
        <h3>
            <strong>{{ StateUser.username }}</strong> Profile
        </h3>
    </header>
    <br>
    <p>
        <strong>Token:</strong>
        {{ StateUser.accessToken.substring(0, 20) }} ... {{ StateUser.accessToken.substr(StateUser.accessToken.length
            -
            20) }}
    </p>
    <p>
        <strong>Id:</strong>
        {{ StateUser.id }}
    </p>
    <p>
        <strong>Email:</strong>
        {{ StateUser.email }}
    </p>
    <br>
    <strong>Authorities:</strong>
    <ul id="role2">
        <li id="role" v-for="role in StateUser.roles" :key="role">
            <strong> {{ role }} </strong>
        </li>
    </ul>
    <br>
    <br>

    <div v-if="showProducteurInfo">
        <li class="nav-item">
            <strong> Les infos de mon domaine viticole : </strong>
        </li>
        <p>---</p>
        <p>
            <strong>Nom du domaine :</strong>
            {{ producteur.nom }}
        </p>
        <p>
            <strong>région viticole :</strong>
            {{ producteur.regionviticole }}
        </p>
        <p>
            <strong>Ville :</strong>
            {{ producteur.ville }}
        </p>
        <p>
            <strong> numéro fiscal :</strong>
            {{ producteur.numero_fiscal }}
        </p>
        <p>
            <strong>téléphone du domaine :</strong>
            {{ producteur.telephone }}
        </p>
        <div v-if="!showInfo">
            <button class="button button1" v-on:click="showInfo = true">
                Modifier mes infos
            </button>
        </div>
        <div v-if="showInfo">
            <button class="button button1" v-on:click="showInfo = false">
                Cacher le formulaire
            </button>
        </div>
    </div>
    <div class="form-2">
        <InfoProducteur v-if="showInfo" />
    </div>
</template>

<script>
import InfoProducteur from '/src/components/InfoProducteur.vue'
import ProducteurService from '../services/ProducteurService.js';
export default {
    name: 'Profile',
    components: {
        InfoProducteur
    },
    data() {
        return {
            role_producteur: false,
            showInfo: false,
            producteur: []
        }

    },
    computed: {
        StateUser() {
            return this.$store.state.auth.user;
        },
        showProducteurInfo() {
            if (this.StateUser && this.StateUser['roles']) {
                return this.StateUser['roles'].includes('ROLE_PRODUCTEUR');
            }

            return false;
        },

    },
    mounted() {
        if (!this.StateUser) {
            this.$router.push('/connexion');
        }
    },
    methods: {
        GetInfoProducteur() {
            ProducteurService.getProducteurById(this.StateUser.id).then((response) => {
                this.producteur = response.data;
            });
        }
    },
    created() {
        this.GetInfoProducteur();
    }
};

</script>

<style>
.button {
    background-color: darkred;
    /* Green */
    border: 2px solid rgba(255, 255, 255, 0.1);
    color: white;
    padding: 15px 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    width: 180px;
    margin-top: 30px;
    border-radius: 5px;
    font-weight: 800;
    font-size: 18px;
}

.form-2 {
    margin-top: 2%;
}

#role {
    text-align: center;
    margin: auto;
}

#role2 {
    align-items: center;
    display: flex;
}</style>