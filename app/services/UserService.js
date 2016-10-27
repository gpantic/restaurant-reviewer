import axios from 'axios';
import config from '../config/config';


class UserService {
    get() {
        return axios.get(config.url + 'user').then(res => {
            return res.data;
        });
    }
}

export default new UserService;