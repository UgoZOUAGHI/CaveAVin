import axios from 'axios';

const LOGIN_URL = 'http://localhost:8090/api/v1/';
class UserService{
    Login(user_info){
        return axios.post(LOGIN_URL + 'login/',user_info).then(response => response.data);
    };
    SignUp(user_info) {
        return axios
          .post(url + 'users/', user_info)
          .then(response => response.data);
      }
};  

export default new UserService();