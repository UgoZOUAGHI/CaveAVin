<template>
    <br>
    <br>
    <br>
    <div >
        <div id="filtres">
        <h1 id="h1region" for="region">Région</h1>
        <select id="region" name="region" v-model='region'>
            <option v-for="laregion in allregions" v-bind:key="laregion">{{ laregion }}</option>
            <option value=""> </option>
        </select>
        </div>
        <div id="filtres">
        <h1 id="h1region" for="region">Ville</h1>
        <input type="text" v-model="ville" placeholder="Filter By Ville"/>
        </div>
        
    </div>
    <div class="container">

        <table>
            <thead>
                <tr>
                    <th> Nom de Domaine</th>
                    <th> Région Viticole</th>
                    <th> Ville</th>
                    <th> Adresse</th>
                    <th> Téléphone</th>
                </tr>

            </thead>

            <tbody v-for="prod in filterProducteurs">
                <tr>
                    <td data-title="Nom de Domaine"> {{ prod.nom }}</td>
                    <td data-title="Région Viticole"> {{ prod.regionviticole }}</td>
                    <td data-title="Ville"> {{ prod.ville }}</td>
                    <td data-title="Adresse"> {{ prod.numero_rue }} {{ prod.rue }}, {{ prod.code_postal }}</td>
                    <td data-title="Téléphone"> +33 0{{ prod.telephone }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <button :disabled="this.currentPage === 0" @click="changePage(false)">&larr;</button>
    {{ currentPage + 1 }} / {{ numberOfPages }}
    <button :disabled="this.currentPage + 1 >= numberOfPages" @click="changePage">&rarr;</button>
</template>

<script>
import ProducteurService from '../services/ProducteurService.js';
import WinesService from '../services/WinesService.js';
export default {

    name: 'WinesList',
    data() {
        return {
            producteurs: [],
            currentPage: 0,
            elementsPerPage: 5,
            allregions: [],
            region: '',
            ville:'',
        }
    },
    methods: {
        getProducteurs() {
            ProducteurService.getProducteurs().then((response) => {
                this.producteurs = response.data;
            });
        },
        filterProducteurByRegion(producteurs) {
            return producteurs.filter(producteur => !producteur.regionviticole.indexOf(this.region));
        },
        filterProducteurByVille: function(producteurs) {
            return producteurs.filter(producteur => !producteur.ville.indexOf(this.ville))
        },
        getAllRegions() {
            WinesService.getAllRegions().then((response) => {
                this.allregions = response.data;
            });
        },
        changePage(next = true) {
            this.currentPage += next ? 1 : -1;
        },
    },
    computed: {
        filterProducteurs() { 
            this.numberOfPages = Math.ceil(this.filterProducteurByVille(this.filterProducteurByRegion(this.producteurs)).length/this.elementsPerPage);
            
            return this.filterProducteurByRegion(this.filterProducteurByVille(this.producteurs)).slice(
                this.currentPage * this.elementsPerPage,
                this.currentPage * this.elementsPerPage + this.elementsPerPage
            );         
        },
    },
    created() {
        this.getProducteurs();
        this.getAllRegions();
    }
}

</script>

<style></style>
