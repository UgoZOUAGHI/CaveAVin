import axios from 'axios';

const BASE_URL = 'http://localhost:8090/api/v1/';
class WinesService{
    getWines(){
        return axios.get(BASE_URL + "wines");
    }
}

export default new WinesService();