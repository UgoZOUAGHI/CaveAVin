import axios from 'axios';

const BASE_URL = 'http://localhost:8090/api/v1/';
class WinesService{
    getWines(){
        return axios.get(BASE_URL + "wines");
    }
    getWinesByColor(color){
        return axios.get(BASE_URL + "wines" + "/" + color);
    }
    getWinesByCepage(cepage){
        return axios.get(BASE_URL + "wines" + "/" + cepage);
    }
    getWinesByRegion(region){
        return axios.get(BASE_URL + "wines" + "/" + region);
    }
    getAllCepages(){
        return axios.get(BASE_URL + "wines/allcepages")
    }
    getAllColors(){
        return axios.get(BASE_URL + "wines/allcolors")
    }
    getAllRegions(){
        return axios.get(BASE_URL + "wines/allregions")
    }
    getAllAppelations(){
        return axios.get(BASE_URL + "wines/allappelations")
    }
}

export default new WinesService();