<template>
  <div id="cssmap">
    <l-map ref="map" :zoom="zoom" :center="center" style="height: 100%; width: 100%" @update:center="centerUpdate"
      @update:zoom="zoomUpdate">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution=OpenStreetMap />
      <div v-if="show">
        <l-geo-json :geojson="geojsonData" :options="options" :options-style="styleFunction" />
      </div>
      <div v-if="show_prods">
        <div v-for="prods in producteurs">
          <div v-if="prods.lat != 0 && prods.lon != 0">
            <l-marker :lat-lng="[prods.lat, prods.lon]"></l-marker>
          </div>
        </div>
      </div>
      <l-control>
        <div class="Info-control">
          <b> {{ bassin_hover }} </b>
          <div>
            <label for="checkbox">Régions viticoles</label>
            <input id="checkbox" v-model="show" type="checkbox">
          </div>
          <div>
            <label for="checkbox">Producteurs</label>
            <input id="checkbox" v-model="show_prods" type="checkbox">
          </div>

        </div>
        <div>
        </div>
      </l-control>
    </l-map>

  </div>
</template>

<script>
import ProducteurService from '../services/ProducteurService.js';
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LControl,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
  LGeoJson,
} from "@vue-leaflet/vue-leaflet";

import "leaflet/dist/leaflet.css";
import { CLOSING } from 'ws';

export default {
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LControl,
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
      show: true,
      show_prods: true,
      map: null,
      coord_prods: [],
      test_adresse: '31 Rue de la Concorde, 31000 Toulouse',
      zoom: 6,
      center: [46.54, 2.67],
      geojsonData: null,
      bassin_hover: 'Pas au dessus d\'une région',
      current_Bassin: '',
      markerLatLng: [44.8411019, -0.5742486],
      region: [],
      producteurs: []
    };
  },

  methods: {
    async fetchGeoJSON() {
      const response = await fetch("https://static.data.gouv.fr/resources/cartes-des-grandes-regions-productrices-de-vins-aop-en-france/20210826-082459/bassinsviticolesfranceaop.geojson");
      const data = await response.json();
      this.geojsonData = data;
    },
    centerUpdate(newCenter) {
      this.center = newCenter;
    },
    zoomUpdate(newZoom) {
      this.zoom = newZoom;
    },
    EmitData(data) {
      this.$store.commit('prend_valeur', data);
      console.log(this.$store.region);
    },
    getProducteurs() {
      ProducteurService.getProducteurs().then((response) => {
        this.producteurs = response.data;
        console.log(this.producteurs);
      });

    },
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction
      };
    },
    styleFunction() {
      return () => {
        return {
          weight: 2,
          color: '#B22222',
          dashArray: '',
          fillOpacity: 0.2,
        };
      };
    },
    onEachFeatureFunction() {
      var self = this
      this.map = this.$refs.map.leafletObject
      return (feature, layer) => {
        layer.on(
          'mouseover', function () {
            this.setStyle({
              weight: 2,
              color: '#3388ff',
              dashArray: '1',
              fillOpacity: 0.3,
            });
            self.bassin_hover = 'Région : ' + feature.properties.Bassin;
          });
        layer.on(
          'mouseout', function () {
            this.setStyle({
              weight: 2,
              color: '#B22222',
              dashArray: '',
              fillOpacity: 0.2,
            });
            self.bassin_hover = 'Pas au dessus d\'une région';

          });
        layer.on('click', function () {
          var bounds = layer.getBounds(feature.properties)
          self.map.fitBounds(bounds)
        });
      };
    },
  },

  async created() {
    this.getProducteurs();
    this.fetchGeoJSON();
    // this.FindAddress();
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

#cssmap {
  height: 80vh;
  width: 100%;
  text-align: center;
  padding: 10px;
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

.Info-control {
  background-color: darkred;
  padding: 7px;
  border-radius: 10px;
}

.Info-control b {
  color: white;
}

.Info-control label {
  color: white;
  margin-right: 2px;
}

.Info-control input {
  color: white;
  margin-top: 4px;
}
</style>

