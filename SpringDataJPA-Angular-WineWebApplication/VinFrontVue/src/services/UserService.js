import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/UserById';
class Userservice{
    getUserById(id){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new EmployeeService();