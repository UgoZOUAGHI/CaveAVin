import axios from 'axios';

const CONST_URL = 'http://localhost:8090/api/v1/';

class ProducteurService {

    addProducteurInfo(producteur) {
        return axios.post(CONST_URL + 'producteur', {
            idcompte: producteur.idcompte,
            nom: producteur.nom,
            numero_fiscal: producteur.numero_fiscal,
            regionviticole: producteur.regionviticole,
            telephone: producteur.telephone,
            ville: producteur.ville,
            rue: producteur.rue,
            numero_rue : producteur.numero_rue,
            code_postal: producteur.code_postal,
            lat: producteur.lat,
            lon : producteur.lon
        });
    }

    modifProducteurInfo(idcompte, producteur) {
        return axios.put(CONST_URL + 'producteur/' + idcompte, {
            nom: producteur.nom,
            numero_fiscal: producteur.numero_fiscal,
            regionviticole: producteur.regionviticole,
            telephone: producteur.telephone,
            ville: producteur.ville,
            rue: producteur.rue,
            numero_rue : producteur.numero_rue,
            code_postal: producteur.code_postal,
            lat : producteur.lat,
            lon : producteur.lon
        });
    }

    getProducteurs(){
        return axios.get(CONST_URL + 'producteurs/')
    }

    getProducteurById(idcompte) {
        return axios.get(CONST_URL + 'producteur/' + idcompte)
    }

    getWinesByIdCompte(idcompte) {
        return axios.get(CONST_URL + "compte/" + idcompte)
    }

    modifWinesById(id,wine) {
        return axios.put(CONST_URL + 'wines/' + id, {
            appelation: wine.appelation,
            couleur: wine.couleur,
            cepage: wine.cepage,
            contenance: wine.contenance,
            prix: wine.prix,
            degre_alcool: wine.degre_alcool,
            description: wine.description,
        });
    }
    addWine(wine)
    {
        console.log(wine)
        return axios.post(CONST_URL + 'wines',{
            idCompte: wine.id_compte,
            appelation: wine.appelation,
            couleur: wine.couleur,
            cepage: wine.cepage,
            contenance: wine.contenance,
            prix: wine.prix,
            degre_alcool: wine.degre_alcool,
            description: wine.description,
            region:wine.region,
        });

    }
    deleteWine(id)
    {
        return axios.delete(CONST_URL + 'wines/'+ id);
    }
};

export default new ProducteurService(); 