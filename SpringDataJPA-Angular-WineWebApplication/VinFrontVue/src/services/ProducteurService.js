import axios from 'axios';

const CONST_URL = 'http://localhost:8090/api/v1/';

class ProducteurService{

    addProducteurInfo(producteur){
        return axios.post(CONST_URL + 'producteur',{
            idcompte : producteur.idcompte,
            nom : producteur.nom,
            numero_fiscal : producteur.numero_fiscal,
            regionviticole : producteur.regionviticole,
            telephone : producteur.telephone,
            ville : producteur.ville
        });
    }
    modifProducteurInfo(idcompte,producteur){
        return axios.put(CONST_URL + 'producteur/' + idcompte,{
            nom : producteur.nom,
            numero_fiscal : producteur.numero_fiscal,
            regionviticole : producteur.regionviticole,
            telephone : producteur.telephone,
            ville : producteur.ville
        });
    }
    getProducteurById(idcompte){
        return axios.get(CONST_URL + 'producteur/' + idcompte)
    }
};

export default new ProducteurService(); 