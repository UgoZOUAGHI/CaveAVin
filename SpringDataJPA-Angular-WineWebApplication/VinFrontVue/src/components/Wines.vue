<template>
    <ul>        

        <h1 id="h1appelation" for="appelation">Filtrage par : Appelation</h1>
        <select id="appelation" name="appelation" v-model='region'>
            <option v-for="laappelation in allappelations" v-bind:key="laappelation">{{laappelation}}</option>
            <option value="no-appelation">  </option>
        </select>

        <h1 id="h1region" for="region">Filtrage par : Région</h1>
        <select id="region" name="region" v-model='region'>
            <option v-for="laregion in allregions" v-bind:key="laregion">{{laregion}}</option>
            <option value="no-region">  </option>
        </select>

        <h1 id="h1cepage" for="cepage">Filtrage par : Cépage</h1>
        <select id="cepage" name="cepage" v-model='cepage'>
            <option v-for="lecepage in allcepages" v-bind:key="lecepage">{{lecepage}}</option>
            <option value="no-cepage">  </option>
        </select>

        <h1 id="h1color" for="couleur">Filtrage par : Couleur</h1>
        <select id="couleur" name="couleur" v-model="color">
            <option v-for="lacolor in allcolors" v-bind:key="lacolor">{{lacolor}}</option>
            <option value="no-color">  </option>
        </select>      

    </ul>


    <div class="container">

        <table>
            <thead>
                <tr>
                    <!--<th> Wine id</th>-->
                    <th> Wine appelation</th>
                    <th> Wine region</th>
                    <th> Wine cepage</th>
                    <th> Wine color</th>
                </tr>

            </thead>

            <tbody v-for="wine in wines"  v-bind:key="wine.id ">

                <tr v-if="wine.couleur == color">
                    <td data-title="Appelation"> {{ wine.appelation }}</td>
                    <td data-title="Region"> {{ wine.region }}</td>
                    <td data-title="Cepage"> {{ wine.cepage }}</td>
                    <td data-title="Couleur"> {{ wine.couleur }}</td>
                </tr>

                <tr v-if="wine.cepage == cepage">
                    <td data-title="Appelation"> {{ wine.appelation }}</td>
                    <td data-title="Region"> {{ wine.region }}</td>
                    <td data-title="Cepage"> {{ wine.cepage }}</td>
                    <td data-title="Couleur"> {{ wine.couleur }}</td>
                </tr>


                    
            </tbody>
        </table>
    </div>
</template>


<script>

import WinesService from '../services/WinesService.js';
export default {
    name: 'WinesList',
    data() {
        return {
            wines: [],
            allcolors: [],
            color: '',
            allcepages: [],
            cepage : '',
            allregions: [],
            region: '',
            allappelations: [],
            appelation:''
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
        getAllCepages(){
            WinesService.getAllCepages().then((response) => {
                this.allcepages = response.data;
            });
        },
        getAllColors(){
            WinesService.getAllColors().then((response) => {
                this.allcolors = response.data;
            });
        },
        getAllRegions(){
            WinesService.getAllRegions().then((response) => {
                this.allregions = response.data;
            });
        },
        getAllAppelations(){
            WinesService.getAllAppelations().then((response) => {
                this.allappelations = response.data;
            });
        }
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
select{
    font-size: 110%; 
    margin-left: 5%;   

}

ul{
    display: table-cell;
}


</style>