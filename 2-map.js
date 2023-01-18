// On initialise la latitude et la longitude (centre de la carte)
var lat = 46.54;
var lon = 2.67;
var macarte = null;
// Fonction d'initialisation de la carte

function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 6);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
    //Ajout des régions grâce au fichier Json contenant les coordonnées gps des contours
    L.geoJson(statesData).addTo(macarte);
}

window.onload = function(){
// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
initMap(); 
};
