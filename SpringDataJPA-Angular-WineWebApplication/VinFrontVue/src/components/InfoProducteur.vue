<template>
    <form @submit.prevent="ModifProducteur">

        <label for="username">nom du domaine :</label>
        <input v-model="nom" type="text" placeholder="example" id="username">

        <label for="password">numéro fiscal :</label>
        <input v-model="numero_fiscal" type="text" placeholder="********" id="password">

        <label for="password">région viticole :</label>
        <input v-model="regionviticole" type="text" placeholder="********" id="password">

        <label for="password">téléphone :</label>
        <input v-model="telephone" type="text" placeholder="********" id="password">

        <label for="password">ville :</label>
        <input v-model="ville" type="text" placeholder="Ville" id="password">

        <button @click="CloseFormulaire">
            Valider
        </button>
    </form>
</template>

<script>

import ProducteurService from '../services/ProducteurService.js';
export default {
    name: 'InfoProducteur',
    data() {
        return {
            idcompte: "",
            regionviticole: "",
            ville: "",
            nom: "",
            numero_fiscal: "",
            telephone: "",
            producteur: [],
        };
    },
    computed: {
        StateUser() {
            return this.$store.state.auth.user;
        },
    },
    methods: {

        ModifProducteur() {
            const producteur = {
                idcompte: this.StateUser.id,
                nom: this.nom,
                numero_fiscal: this.numero_fiscal,
                regionviticole: this.regionviticole,
                telephone: this.telephone,
                ville: this.ville
            };
            ProducteurService.getProducteurById(producteur.idcompte).then((response) => {
                this.producteur = response.data;
            });
            if(producteur != null && producteur.nom != "" && producteur.numero_fiscal != "" && producteur.regionviticole != "" && producteur.telephone != "" && producteur.ville != "")
            {
                ProducteurService.modifProducteurInfo(producteur.idcompte, producteur);
            }
            else{
                ProducteurService.addProducteurInfo(producteur).then((response) => {
                this.producteur = response.data;
            });
            }  
        },
        CloseFormulaire() {
            window.location.reload();
        },


    }

}

</script>

<style></style>