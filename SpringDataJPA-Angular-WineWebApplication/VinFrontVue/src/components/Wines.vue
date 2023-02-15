<template>
    <div class="container">
        <table>
            <thead>
                <tr>
                    <th> Wine Id</th>
                    <th> Wine appelation</th>
                    <th> Wine region</th>
                    <th> Wine cepage</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="wine in wines" v-bind:key="wine.id">
                    <td data-title="id"> {{ wine.id }}</td>
                    <td data-title="appelation"> {{ wine.appelation }}</td>
                    <td data-title="region"> {{ wine.region }}</td>
                    <td data-title="cepage"> {{ wine.cepage }}</td>
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
        }
    },
    methods: {
        getWines() {
            WinesService.getWines().then((response) => {
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
.container{
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
</style>