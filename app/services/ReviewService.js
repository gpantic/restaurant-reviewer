import axios from 'axios';
import config from '../config/config';


class ReviewService {
    get() {
        return axios.get(config.url + 'review').then(res => {
            return res.data;
        });
    }
    post(data) {
        return axios.post(config.url + 'review', data).then(res => {
            return res.data;
        });
    }
    put(id, data) {
        return axios.put(config.url + 'review/' + id, data);
    }
    delete(id) {
        return axios.delete(config.url + 'review/' + id);
    }
}

export default new ReviewService;