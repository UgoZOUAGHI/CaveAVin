<template>
  <div id="map">
    <l-map :zoom="zoom" :center="center" style="height: 100%; width: 100%" @update:center="centerUpdate"
      @update:zoom="zoomUpdate">

      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution=OpenStreetMap />

      <!-- <l-polygon  /> -->

      />
      <l-geo-json :geojson="geojsonData" :options="options" v-on:click="zoomToFeature" />
    </l-map>

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
      options: {
        style: function (feature) {
          switch (feature.properties.Bassin) {
            case 'CHAMPAGNE': return { fillColor: "#ff0000", fillOpacity: 1 };
            case 'ARMAGNAC': return { fillcolor: "#0000ff" };
          }
        },
        onEachFeature: function onEachFeature(feature, layer) {
          // does this feature have a property named popupContent?
          if (feature.properties.Bassin != "") {
            layer.bindPopup("Nom : " + feature.properties.Bassin);
          } else {
            layer.bindPopup("NA");
          }
          layer.on(
            'mouseover', function () {
              this.setStyle({
                weight: 2,
                color: 'darkred',
                dashArray: '1',
                fillOpacity: 0.3,
              });
            });
          layer.on(
            'mouseout', function () {
              this.setStyle({
                weight: 2,
                color: '#3388ff',
                dashArray: '',
                fillOpacity: 0.2,
              });
            });
        },
      },
      map: null,
    };
  },

  methods: {
    async fetchGeoJSON() {
      const response = await fetch("https://static.data.gouv.fr/resources/cartes-des-grandes-regions-productrices-de-vins-aop-en-france/20210826-082459/bassinsviticolesfranceaop.geojson");
      const data = await response.json();
      this.geojsonData = data;
    },
    // highlightFeature(e) {
    //   const layer = e.target;
    //   layer.setStyle({
    //     weight: 4,
    //     color: '#666',
    //     fillOpacity: 0.5
    //   });
    // },
    // resetHighlight(e) {
    //   const layer = e.target;
    //   layer.setStyle({
    //     weight: 2,
    //     color: 'blue',
    //     dashArray: '3',
    //     fillOpacity: 0.5,
    //   });
    // },
    zoomToFeature(e) {
      this.$refs.map.mapObject.fitBounds(e.target.getBounds());
    },
    centerUpdate(newCenter) {
      this.center = newCenter;
    },
    zoomUpdate(newZoom) {
      this.zoom = newZoom;
    },
  },
  async created() {
    this.fetchGeoJSON();
  }
};
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

