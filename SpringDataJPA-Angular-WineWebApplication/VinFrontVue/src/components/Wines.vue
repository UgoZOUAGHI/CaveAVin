<template>
    <br>
    <br>    
    <div >
        <div id="filtres">
        <h1 id="h1appelation" for="appelation">Appelation</h1>
        <select id="appelation" name="appelation" v-model='appelation'>
            <option v-for="laappelation in allappelations" v-bind:key="laappelation">{{ laappelation }}</option>
            <option value=""> </option>
        </select>
        </div>
        <div id="filtres">
        <h1 id="h1region" for="region">Région</h1>
        <select id="region" name="region" v-model='region'>
            <option v-for="laregion in allregions" v-bind:key="laregion">{{ laregion }}</option>
            <option value=""> </option>
        </select>
        </div>
        <div id="filtres">
        <h1 id="h1cepage" for="cepage">Cépage</h1>
        <select id="cepage" name="cepage" v-model='cepage'>
            <option v-for="lecepage in allcepages" v-bind:key="lecepage">{{ lecepage }}</option>
            <option value=""> </option>
        </select>
        </div>
        <div id="filtres">
        <h1 id="h1color" for="couleur">Couleur</h1>
        <select id="couleur" name="couleur" v-model="color">
            <option v-for="lacolor in allcolors" v-bind:key="lacolor">{{ lacolor }}</option>
            <option value=""> </option>
        </select>
        </div>  
        <label for="vol">Prix (entre 0 et 100):</label>
        <input type="range" v-model="range" min="0" max="100" step="1" />
        {{ this.range }}€

    </div>


    <div class="container">
        <table>
            <thead>
                <tr>
                    <!--<th> Wine id</th>-->
                    <th> Appelation</th>
                    <th> Région</th>
                    <th> Cépage</th>
                    <th> Couleur</th>
                    <th> Prix</th>

                </tr>
            </thead>
            <tbody v-for="wine in filterWines">
                <tr>
                    <td data-title="Appelation"> {{ wine.appelation }}</td>
                    <td data-title="Region"> {{ wine.region }}</td>
                    <td data-title="Cepage"> {{ wine.cepage }}</td>
                    <td data-title="Couleur"> {{ wine.couleur }}</td>
                    <td data-title="Couleur"> {{ wine.prix }} €</td>
                </tr>
            </tbody>
        </table>
    </div>
    <button :disabled="this.currentPage === 0" @click="changePage(false)">&larr;</button>
    {{ currentPage + 1 }} / {{ numberOfPages }}
    <button :disabled="this.currentPage + 1 >= numberOfPages" @click="changePage">&rarr;</button>
</template>


<script>

import WinesService from '../services/WinesService.js';
export default {
    name: 'WinesList',
    data() {
        return {
            range: '50',
            wines: [],
            allcolors: [],
            color: '',
            category: '',
            allcepages: [],
            cepage: '',
            allregions: [],
            region: '',
            allappelations: [],
            appelation: '',
            currentPage: 0,
            elementsPerPage: 5,
            winesSorted: [],
        }
    },
    methods: {
        getWines() {
            WinesService.getWines().then((response) => {
                this.wines = response.data;
            });
        },
        getWinesByColor() {
            WinesService.getWinesByColor(color).then((response) => {
                this.wines = response.data;
            });
        },
        getWinesByCepage() {
            WinesService.getWinesByCepage(cepage).then((response) => {
                this.wines = response.data;
            });
        },
        getAllCepages() {
            WinesService.getAllCepages().then((response) => {
                this.allcepages = response.data;
            });
        },
        getAllColors() {
            WinesService.getAllColors().then((response) => {
                this.allcolors = response.data;
            });
        },
        getAllRegions() {
            WinesService.getAllRegions().then((response) => {
                this.allregions = response.data;
            });
        },
        getAllAppelations() {
            WinesService.getAllAppelations().then((response) => {
                this.allappelations = response.data;
            });
        },
        filterWineByColor(wines) {
            return wines.filter(wine => !wine.couleur.indexOf(this.color));
        },
        filterWineByRegion(wines) {
            return wines.filter(wine => !wine.region.indexOf(this.region));
        },
        filterWineByPrix(wines) {
            return wines.filter(wine => (wine.prix > 0 && wine.prix < this.range) ? wine : '')
        },
        filterWineByCepage(wines) {
            return wines.filter(wine => !wine.cepage.indexOf(this.cepage));
        },
        filterWineByAppelation(wines) {
            return wines.filter(wine => !wine.appelation.indexOf(this.appelation));
            
        },
        changePage(next = true) {
            this.currentPage += next ? 1 : -1;
        },

    },
    computed: {
        filterWines() {
            
            this.numberOfPages = Math.ceil(this.filterWineByColor(this.filterWineByRegion(this.filterWineByCepage(this.filterWineByAppelation(this.filterWineByPrix(this.wines))))).length/this.elementsPerPage);
            
            return this.filterWineByColor(this.filterWineByRegion(this.filterWineByCepage(this.filterWineByAppelation(this.filterWineByPrix(this.wines))))).slice(
                this.currentPage * this.elementsPerPage,
                this.currentPage * this.elementsPerPage + this.elementsPerPage
            );         
        },
    },
    created() {
        this.getWines();
        this.getAllCepages();
        this.getAllColors();
        this.getAllRegions();
        this.getAllAppelations();
    }
}

</script>


<style>

#filtres{
    display: inline-block;
    margin-left: 1.5%;
}
.container {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2%;
}

table {

    margin: auto auto;
    text-align: center;
    width: 100%;
    max-width: 100%;
    border-collapse: collapse;
    border: 1px solid
}

thead {

    background-color: darkred;
    color: white
}

th,
td {
    padding: 5px 10px;
}

tbody tr:nth-child(even) {

    background-color: #ddd
}

@media only screen and (max-width: 800px) {

    table,
    thead,
    tbody,
    th,
    td,
    tr {

        display: block
    }

    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    td {
        position: relative;
        padding-left: 50%;
        white-space: normal;
        text-align: left
    }

    td:before {

        position: absolute;
        top: 6px;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        font-weight: bold;
        white-space: nowrap;
        text-align: left;
        content: attr(data-title)
    }
}

option,
#h1,
#h1region,
#h1color,
#h1cepage,
#h1appelation,
select {
    font-size: 110%;
    margin-left: 5%;

}

ul {
    display: table-cell;
}
</style>