<template>

	<div id = "map">
	 <l-map
		:zoom = 6
		:center="[46.54, 2.67]"
	>
	<l-tile-layer
	  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	  attribution = OpenStreetMap
	/>
	<l-geo-json
		v-if="show"
		:geojson="polygonsGeoJSON"
		:options="options"
		:options-style="styleFunction"
		/>
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
  };
},

computed: {
  options() {
	return {
		onEachFeature: this.onEachFeatureFunction

	}
  },
},

methods: {
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
body
{
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
#map {  height: 600px; width: 100%; text-align: center;}
        .info { padding    : 6px 8px; font: 14px/16px Arial, Helvetica, sans-serif; background: white; background: rgba(255,255,255,0.8); box-shadow: 0 0 15px rgba(0,0,0,0.2); border-radius: 5px; } 
        .info h4 { margin: 0 0 5px; color: #777; }
        .legend { text-align: left; line-height: 18px; color: #555; } 
        .legend i { width: 18px; height: 18px; float: left; margin-right: 8px; opacity: 0.7; }
</style>

