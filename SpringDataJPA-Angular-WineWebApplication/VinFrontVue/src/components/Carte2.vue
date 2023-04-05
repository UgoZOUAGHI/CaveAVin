<template>
    <div id="mapContainer">


    </div>
</template>

<script>

import {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
    LGeoJson,
} from "@vue-leaflet/vue-leaflet";
import { latLng } from "leaflet";

import "leaflet/dist/leaflet.css";

export default {
    name: "LeafletMap",
    components: {
        LMap,
        LIcon,
        LTileLayer,
        LMarker,
        LControlLayers,
        LTooltip,
        LPopup,
        LPolyline,
        LPolygon,
        LRectangle,
        LGeoJson,
        LControlLayers
    },

    data() {

        return {
            zoom: 6,
            center: [46.54, 2.67],
            geojsonData: null,
            tabPolygons: [],
            options: {
                zoomSnap: 0.5
            },
            map: null
        };
    },
    methods:
    {
        async fetchGeoJSON(){
            const response = await fetch("https://static.data.gouv.fr/resources/cartes-des-grandes-regions-productrices-de-vins-aop-en-france/20210826-082459/bassinsviticolesfranceaop.geojson");
            const data = await response.json();
            L.geoJSON(data, {
                style: function (feature) {
                    switch (feature.properties.party) {
                        case 'ARMAGNAC': return { color: "#ff0000" };
                        case 'CHAMPAGNE': return { color: "#0000ff" };
                    }
                }
            }).addTo(this.map)
        },
        highlightFeature(e) {
            const layer = e.target;
            layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.7,
            });
        },
    },
    async mounted() {
        this.map = L.map("mapContainer").setView([46.05, 11.05], 5);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);
        var customPane = this.map.createPane("customPane");
        customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
        this.fetchGeoJSON()
        this.highlightFeature()
    }   

    // methods: {
    //         async fetchGeoJSON() {
    //             const response = await fetch("https://static.data.gouv.fr/resources/cartes-des-grandes-regions-productrices-de-vins-aop-en-france/20210826-082459/bassinsviticolesfranceaop.geojson");
    //             const data = await response.json();
    //             L.geoJSON(data, {
    //                 style: function (feature) {
    //                     switch (feature.properties.party) {
    //                         case 'ARMAGNAC': return { color: "#ff0000" };
    //                         case 'CHAMPAGNE': return { color: "#0000ff" };
    //                     }
    //                 }
    //             }).addTo(this.map)
    //             this.geojsonData = data;
    //             this.tabPolygons.append(response)
    //         },
    //         highlightFeature(e) {
    //             const layer = e.target;
    //             layer.setStyle({
    //                 weight: 5,
    //                 color: '#666',
    //                 dashArray: '',
    //                 fillOpacity: 0.7,
    //             });
    //         },
    //         resetHighlight(e) {
    //             const layer = e.target;
    //             layer.setStyle({
    //                 weight: 2,
    //                 color: 'blue',
    //                 dashArray: '3',
    //                 fillOpacity: 0.5,
    //             });
    //         },
    //         zoomToFeature(e) {
    //             this.$refs.map.mapObject.fitBounds(e.target.getBounds());
    //         },
    //         centerUpdate(newCenter) {
    //             this.center = newCenter;
    //         },
    //         zoomUpdate(newZoom) {
    //             this.zoom = newZoom;
    //         },
    // },
    //     async created() {
    //         this.fetchGeoJSON();
    //     }
    // };
}
</script>


<style>
html {
    width: 100%;
    height: 100%;
    margin: 0;
    text-align: center;
}

body {
    width: 100%;
    height: 100%;
    margin: 0;
    text-align: center;
}

.leaflet-container {
    height: 1000px;
    width: 2000px;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    text-align: center;
}

#map {
    height: 600px;
    width: 100%;
    text-align: center;
}

.info {
    padding: 6px 8px;
    font: 14px/16px Arial, Helvetica, sans-serif;
    background: white;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.info h4 {
    margin: 0 0 5px;
    color: #777;
}

.legend {
    text-align: left;
    line-height: 18px;
    color: #555;
}

.legend i {
    width: 18px;
    height: 18px;
    float: left;
    margin-right: 8px;
    opacity: 0.7;
}
</style>

