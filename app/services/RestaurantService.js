import axios from 'axios';
import config from '../config/config';


class RestaurantService {
    get() {
        return axios.get(config.url + 'restaurant').then(res => {
            return res.data;
        });
    }
}

export default new RestaurantService;