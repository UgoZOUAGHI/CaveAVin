import axios from 'axios';

const BASE_URL = 'http://localhost:8090/api/v1/wines';
class WinesService{
    getWines(){
        return axios.get(BASE_URL);
    }
}

export default new WinesService();