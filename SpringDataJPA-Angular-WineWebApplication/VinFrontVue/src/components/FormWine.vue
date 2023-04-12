<template>
    <form class="formWine" @submit.prevent="ModifProducteur">
        <div class="form3">
            <label class="formWine" for="région">région :</label>
            <input class="formWine" type="text" v-model="producteur.regionviticole" placeholder="région">
            <label class="formWine" for="appelation">appelation :</label>
            <input class="formWine" type="text" v-model="inputAppelation" placeholder="appellation">
        </div>
        <div class="form3">
            <label class="formWine" for="couleur">couleur :</label>
            <input class="formWine" id="couleur" type="text" v-model="inputCouleur" placeholder="couleur">
            <label class="formWine" for="cépage">cépage :</label>
            <input class="formWine" type="text" v-model="inputCepage" placeholder="cépage">
        </div>
        <div id="description">
            <label class="formWine" for="description">description :</label>
            <textarea class="description" type="text" v-model="inputDescription" placeholder="description"></textarea>
        </div>
        <div class="form3">
            <label class="formWine" for="contenance">contenance :</label>
            <input class="formWine" type="number" v-model="inputContenance" placeholder="contenance" min="0" max="10000" step=0.01>

            <label class="formWine" for="prix">prix :</label>
            <input class="formWine" type="number" v-model="inputPrix" placeholder="prix" min="0" max="1000000" step=0.01>
        </div>
        <div class="form3">
            <label class="formWine" for="degre_alcool">degré d'alcool :</label>
            <input class="formWine" type="number" v-model="inputDegAlcool" placeholder="degré d'alcool" min="0" max="95" step=0.01>

            <button class="formWine" v-on:click="modifWinesById()">
                Valider
            </button>
        </div>
    </form>
</template>

<script>

import ProducteurService from '../services/ProducteurService.js';
export default {
    name: 'FormWine',
    props: ['input'],
    data() {
        return {
            wines: [],
            producteur: [],
            inputAppelation: this.input.inputAppelation,
            inputRegion: this.input.inputRegion,
            inputCouleur: this.input.inputCouleur,
            inputCepage: this.input.inputCepage,
            inputDescription: this.input.inputDescription,
            inputContenance: this.input.inputContenance,
            inputPrix: this.input.inputPrix,
            inputDegAlcool: this.input.inputDegAlcool,
            idVin: this.input.idVin
        }
    },
    computed: {
        StateUser() {
            return this.$store.state.auth.user;
        },
        
    },
    methods: {
        modifWinesById() {
            const wine = {
                id_compte: this.StateUser.id,
                idVin: this.idVin,
                appelation: this.inputAppelation,
                couleur: this.inputCouleur,
                cepage: this.inputCepage,
                contenance: this.inputContenance,
                prix: this.inputPrix,
                degre_alcool: this.inputDegAlcool,
                description: this.inputDescription,
                region: this.producteur.regionviticole,
            };
            if (wine.idVin == undefined) {
                ProducteurService.addWine(wine);
                const state = { state: false }
                console.log(wine.region)
                this.$emit('modifWinesById', state)
            }
            if (wine.idVin != undefined) {
                console.log(wine.idVin)
                ProducteurService.modifWinesById(wine.idVin, wine);
                const state = { state: false }
                this.$emit('modifWinesById', state)
            }
        },
        ValidateInput(value) {
            if (value.length < 2) {
                this.msg['appelation'] = 'Il doit y avoir au moins 2 caractères';
                //this.disabled = [true, this.disabled[1], this.disabled[2], this.disabled[3]];
            } else {
                this.msg['appelation'] = '';
                //this.disabled = [false, this.disabled[1], this.disabled[2], this.disabled[3]];
            };

        },
    },

    watch: {
        inputAppelation(value) {
            this.inputAppelation = value;
            this.ValidateInput(value);
        },
        inputCouleur(value) {
            this.inputCouleur = value;
            this.ValidateInput(value);
        },
        inputCepage(value) {
            this.inputCepage = value; 
            this.ValidateInput(value);
        },
        inputDescription(value) {
            this.inputDescription = value;
        },
        // inputContenance(value){
        //     this.inputContenance = value;
        // },
        // inputPrix(value){
        //     this.inputPrix = value;
        // },
        // inputDegAlcool(value){
        //     this.inputDegAlcool = value;
        // },
    },
    created(){
        ProducteurService.getProducteurById(this.StateUser.id).then((response) => {
                this.producteur = response.data;
            });
    }
}

</script>

<style>
form.formWine {
    width: 800px;
    height: 500px;
    background-color: darkred;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 5px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    margin-top: 5%;
}

form.formWine * {
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

label.formWine {
    margin-top: 30px;
    font-size: 16px;
    font-weight: 800;
    margin-left: 20px;
}

div.form3 {
    margin-top: 15px;
    display: block;
    text-align: right;
    margin-right: 70px;
}

input.formWine {
    height: 50px;
    width: 30%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 600;

}

textarea.description {
    height: 100px;
    width: 90%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 600;
    resize: none;

}

button.formWine {
    margin-left: 70px;
    width: 30%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 800;
    border-radius: 5px;
    cursor: pointer;
}

#description {
    margin-top: 15px;
}

#couleur {
    margin-right: 29px;
}
</style>