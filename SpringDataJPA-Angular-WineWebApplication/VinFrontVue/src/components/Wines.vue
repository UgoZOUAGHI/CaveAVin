<template>
    <ul>

        <h1 id="color" for="couleur">Filtrage par : Couleur</h1>
        <select id="couleur" name="couleur" v-model="color">
            <option value="Rouge">Rouge</option>
            <option value="Rosé">Rosé</option>
            <option value="Blanc">Blanc</option>
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
            <tbody v-for="wine in wines" v-bind:key="wine.id">
                
                <tr v-if="wine.couleur == color">
                    
                    <!--<td data-title="Id"> {{ wine.id }}</td>-->
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
            color: '',
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
        }
    },
    created() {
        this.getWines();
    }
}

</script>

<style>
.container {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
}

table {

    margin: 1rem auto;
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
    padding: 8px 0
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
#color,
#filtragepar {
    font-size: 125%;
    margin-left: -75%;

}

select {
    font-size: 112%;
    margin-left: -67.5%;

}
</style>