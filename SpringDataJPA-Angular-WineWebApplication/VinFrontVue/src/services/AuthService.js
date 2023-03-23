import axios from 'axios';

const CONST_URL = 'http://localhost:8090/api/auth/';
class AuthService {
    Login(user) {
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
    Logout() {
        localStorage.removeItem('user');
    }
    SignUp(user) {
        return axios.post(CONST_URL + 'register', {
            username: user.username,
            email: user.email,
            password: user.password,
            role : [user.role]
        });
    }

};

export default new AuthService();