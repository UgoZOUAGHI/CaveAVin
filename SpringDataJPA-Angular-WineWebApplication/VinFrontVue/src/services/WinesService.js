import axios from 'axios';

const BASE_URL = 'http://localhost:8090/api/v1/';
class WinesService{
    getWines(){
        return axios.get(BASE_URL + "wines");
    }
    getWinesByColor(color){
        return axios.get(BASE_URL + "wines" + "/" + color);
    }
}

export default new WinesService();
