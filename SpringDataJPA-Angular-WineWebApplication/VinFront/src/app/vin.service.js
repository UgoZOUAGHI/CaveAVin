"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VinService = void 0;
var core_1 = require("@angular/core");
var user_1 = require("./user");
var VinService = /** @class */ (function () {
    function VinService(httpClient) {
        this.httpClient = httpClient;
        this.parametre = 11;
        this.baseURL = "http://localhost:8080/api/v1/wines";
        this.base = "http://localhost:8080/api/v1/vin";
        this.base2 = " http://localhost:8080/api/v1/vin";
        this.base1 = "http://localhost:8080/api/v1/compte";
        this.base3 = "http://localhost:8080/api/v1/producteur";
        this.base4 = "http://localhost:8080/api/v1/region";
        this.base5 = "http://localhost:8080/api/v1/filtre";
        this.base6 = "http://localhost:8080/api/v1/filtre2";
        this.base7 = "http://localhost:8080/api/v1/filtre1";
        this.base8 = "http://localhost:8080/api/v1/ProducteurRegion";
        this.base9 = "http://localhost:8080/api/v1/Producteurs";
        this.base10 = "http://localhost:8080/api/v1/UserById";
        this.sharedUser = new user_1.User();
    }
    VinService.prototype.getVinsList = function () {
        return this.httpClient.get("".concat(this.baseURL));
    };
    VinService.prototype.createVin = function (vin) {
        return this.httpClient.post("".concat(this.baseURL), vin);
    };
    VinService.prototype.getVinById = function (id) {
        return this.httpClient.get("".concat(this.baseURL, "/").concat(id));
    };
    VinService.prototype.updateVin = function (id, vin) {
        return this.httpClient.put("".concat(this.baseURL, "/").concat(id), vin);
    };
    VinService.prototype.deleteVin = function (id) {
        return this.httpClient["delete"]("".concat(this.baseURL, "/").concat(id));
    };
    VinService.prototype.loginUserFromRemote = function (user) {
        return this.httpClient.post("http://localhost:8080/api/v1/login", user);
    };
    VinService.prototype.RegisterUserFromRemote = function (user) {
        return this.httpClient.post("http://localhost:8080/api/v1/users", user);
    };
    VinService.prototype.RechercheParCouleur = function (couleur) {
        return this.httpClient.get(("".concat(this.base, "/").concat(couleur)));
    };
    VinService.prototype.RechercheParIdCompte = function (idcompte) {
        return this.httpClient.get(("".concat(this.base1, "/").concat(idcompte)));
    };
    VinService.prototype.AddProducteur = function (producteur) {
        return this.httpClient.post("http://localhost:8080/api/v1/producteur", producteur);
    };
    VinService.prototype.RechercheParCouleurCompte = function (couleur, id) {
        return this.httpClient.get(("".concat(this.base, "/").concat(couleur, "/").concat(id)));
    };
    VinService.prototype.RechercheProducteurParIdCompte = function (idcompte) {
        return this.httpClient.get(("".concat(this.base3, "/").concat(idcompte)));
    };
    VinService.prototype.RechercheRegion = function (region) {
        return this.httpClient.get("https://nominatim.openstreetmap.org/search?q=".concat(region, "&format=json&addressdetails=1&limit=1&polygon_svg=1"));
    };
    VinService.prototype.RechercheVinByRegion = function (region) {
        return this.httpClient.get(("".concat(this.base4, "/").concat(region)));
    };
    VinService.prototype.RecherchePrix = function (prix) {
        return this.httpClient.get(("".concat(this.base5, "/").concat(prix)));
    };
    VinService.prototype.RechercheRegionPrix = function (region, prix) {
        return this.httpClient.get(("".concat(this.base6, "/").concat(region, "/").concat(prix)));
    };
    VinService.prototype.RechercheCouleurPrix = function (couleur, prix) {
        return this.httpClient.get(("".concat(this.base7, "/").concat(couleur, "/").concat(prix)));
    };
    VinService.prototype.RechercheCouleurRegion = function (couleur, region) {
        return this.httpClient.get(("".concat(this.base5, "/").concat(couleur, "/").concat(region)));
    };
    VinService.prototype.RechercheCouleurRegionPrix = function (couleur, region, prix) {
        return this.httpClient.get(("".concat(this.base5, "/").concat(couleur, "/").concat(region, "/").concat(prix)));
    };
    VinService.prototype.RechercheProducteurRegionViticole = function (regionviticole) {
        return this.httpClient.get(("".concat(this.base8, "/").concat(regionviticole)));
    };
    VinService.prototype.getProduteurs = function () {
        return this.httpClient.get(("".concat(this.base9)));
    };
    VinService.prototype.getUserById = function (id) {
        return this.httpClient.get(("".concat(this.base10, "/").concat(id)));
    };
    VinService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], VinService);
    return VinService;
}());
exports.VinService = VinService;
