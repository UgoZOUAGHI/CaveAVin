<template>
    <form @submit.prevent="ModifProducteur">

        <div class="form2">

            <label class="form" for="username">nom du domaine :</label>
            <input class="form" v-model="nom" type="text" placeholder="example" id="username">

            <label class="form" for="password">numéro fiscal :</label>
            <input class="form" v-model="numero_fiscal" type="text" placeholder="********" id="password">


            <label class="form" for="password">région viticole :</label>
            <input class="form" v-model="regionviticole" type="text" placeholder="votre région" id="password">

        </div>

        <div class="form2">
            <label class="form" for="password">téléphone :</label>
            <input class="form" v-model="telephone" type="text" placeholder="06********" id="password">

            <label class="form" for="password">ville :</label>
            <input class="form" v-model="ville" type="text" placeholder="Ville" id="password">

            <button class="form" @click="CloseFormulaire">
                Valider
            </button>
        </div>
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
            if (producteur != null && producteur.nom != "" && producteur.numero_fiscal != "" && producteur.regionviticole != "" && producteur.telephone != "" && producteur.ville != "") {
                ProducteurService.modifProducteurInfo(producteur.idcompte, producteur);
            }
            else {
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

<style>
*,
*:before,
*:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

form.inscription {
    width: 450px;
    height: 450x;
    background-color: darkred;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
    margin-top: 5%;
}

form.inscription * {
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

form.inscription h3 {
    font-size: 32px;
    font-weight: 800;
    line-height: 42px;
    text-align: center;
}

form.inscription h1 {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    text-align: center;
}

.radiobutton {
    display: flex;
    align-items: center;

}

.increase {
    width: 20px;
    height: 20px;
    margin-right: 0px;
    margin-top: 30px;
}

.textc {
    margin-right: 50px;
}

label.form {
    margin-top: 30px;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 800;
}

input.form {
    height: 50px;
    width: 15%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-right: 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 600;
}

input.form::placeholder {
    color: #000000;
}

button.form {
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
</style>