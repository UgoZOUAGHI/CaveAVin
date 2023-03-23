<template>
    <header>
        <h3>
            <strong>{{ StateUser.username }}</strong> Profile
        </h3>
    </header>
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
    <strong>Authorities:</strong>
    <ul>
        <li v-for="role in StateUser.roles" :key="role">{{ role }}
        </li>
    </ul>

    <div v-if="showProducteurInfo">
        <li class="nav-item">
            <strong> Les infos de mon domaine viticole : </strong>
        </li>
        <p>---</p>
        <p>
        <strong>Nom du domaine :</strong>
        {{ producteur.nom}}
        </p>
        <p>
        <strong>région viticole :</strong>
        {{ producteur.regionviticole}}
        </p>
        <p>
        <strong>Ville :</strong>
        {{ producteur.ville}}
        </p>
        <p>
        <strong> numéro fiscal :</strong>
        {{ producteur.numero_fiscal}}
        </p>
        <p>
        <strong>téléphone du domaine :</strong>
        {{ producteur.telephone}}
        </p>
        <button class="button button1" v-on:click="showInfo = true">
            Modifier mes infos
        </button>
    </div>
    <InfoProducteur v-if="showInfo" />
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
            producteur : []
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
    methods : {
        GetInfoProducteur(){
            ProducteurService.getProducteurById(this.StateUser.id).then((response) => {
                this.producteur = response.data;
            });
        }
    },
    created(){
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
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    width: 180px;
    margin-top: 30px;
}
</style>