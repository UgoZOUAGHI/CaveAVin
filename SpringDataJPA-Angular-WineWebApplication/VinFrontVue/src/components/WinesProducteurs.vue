<template>
    <div class="container">

        <table>
            <thead>
                <tr>
                    <!--<th> Wine id</th>-->
                    <th>Région</th>
                    <th>Appellation</th>
                    <th>Couleur</th>
                    <th>Cépage</th>
                    <th>Description</th>    
                    <th>Contenance</th>
                    <th>Prix (€)</th>
                    <th>Degré d'alcool</th>
                    <th></th>
                    <th></th>
                </tr>   

            </thead>

            <tbody>
                <tr v-for="(wine , index ) in wines" :key="wine.idVin">
                    <td data-title="Region"> {{ wine.region }}</td>
                    <td data-title="Appelation"> {{ wine.appelation }}</td>
                    <td data-title="Couleur"> {{ wine.couleur }}</td>
                    <td data-title="Cépage"> {{ wine.cepage }}</td>
                    <td data-title="Description"> {{ wine.description }}</td>
                    <td data-title="Contenance"> {{ wine.contenance }} mL</td>
                    <td data-title="Prix"> {{ wine.prix }} €</td>
                    <td data-title="Degré Alcool"> {{ wine.degre_alcool }}°</td>
                    <td><button id="button"  v-on:click="modifToInput(wine)">Modifier</button></td>
                    <td><button id="button" v-on:click="deleteWine(wine,index)">Supprimer</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import ProducteurService from '@/services/ProducteurService';
export default {
    name: 'WinesProducteurs',
    data() {
        return {
            wines: [],
        }

    },
    computed: {
        StateUser() {
            return this.$store.state.auth.user;
        },
    },
    methods: {
        getWinesByProductor() {
            ProducteurService.getWinesByIdCompte(this.StateUser.id).then((response) => {
                this.wines = response.data;
            });
        },
        modifToInput(wine){
            const input = {
                idVin : wine.id,
                inputAppelation : wine.appelation,
                inputRegion : wine.region,
                inputCouleur : wine.couleur ,
                inputCepage : wine.cepage,
                inputDescription : wine.description,
                inputContenance : wine.contenance,
                inputPrix  : wine.prix,
                inputDegAlcool : wine.degre_alcool,
                state : true
            }
            this.$emit('modifToInput',input)
        },
        deleteWine(wine,index)
        {
            console.log(wine.id)
            ProducteurService.deleteWine(wine.id);
            this.wines.splice(index, 1);

        }

    },
    mounted(){
        this.getWinesByProductor();
    },
    created() {
        this.getWinesByProductor();
    }
}

</script>
<style>
#button {
    background-color: darkred;
    /* Green */
    border: 2px solid rgba(255, 255, 255, 0.1);
    color: white;
    padding: 10px 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    width: 130px;
    margin-top: 30px;
    border-radius: 5px;
    font-weight: 800;
    font-size: 18px;
}

</style>