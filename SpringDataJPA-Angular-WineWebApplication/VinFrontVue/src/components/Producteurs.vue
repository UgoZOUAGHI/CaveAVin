<template>
    <div class="container">

        <table>
            <thead>
                <tr>
                    <th> Nom de Domaine</th>
                    <th> Région Viticole</th>
                    <th> Ville</th>
                    <th> Téléphone</th>
                </tr>

            </thead>

            <tbody v-for="prod in producteurs" v-bind:key="prod.id">
                <tr>
                    <td data-title="Nom de Domaine"> {{ prod.nom }}</td>
                    <td data-title="Région Viticole"> {{ prod.regionviticole }}</td>
                    <td data-title="Ville"> {{ prod.ville }}</td>
                    <td data-title="Téléphone"> +33 0{{ prod.telephone }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ProducteurService from '../services/ProducteurService.js';
export default {

    name: 'WinesList',
    data() {
        return {
            producteurs: [],
        }
    },
    methods: {
        getProducteurs() {
            ProducteurService.getProducteurs().then((response) => {
                this.producteurs = response.data;
            });
        }

    },
    created() {
        this.getProducteurs();
    }
}

</script>

<style></style>
