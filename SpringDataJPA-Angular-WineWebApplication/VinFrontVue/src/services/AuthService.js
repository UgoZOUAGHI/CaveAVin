import axios from 'axios';

const CONST_URL = 'http://localhost:8090/api/v1/';
class UserService {
  login(user) {
    return axios
      .post(CONST_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios
      .post(CONST_URL + 'users', {
        user_name: user.username,
        email_id: user.email,
        password: user.password
      });
  }
};

export default new UserService();