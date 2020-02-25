import axios from 'axios';
import config from '../../common/config/api.config';

const api = `${config.protocol}://${config.host}/api`;

class TodoService {
    static getAll() {
        return axios.get(`${api}/all`)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log('Cannot fetch', err)
            })
    }

    static add(text) {
        return axios.post(`${api}`, {
            text,
            toggle: false
        })
            .then((res) => {
                return res;
            })
            .catch((error) => {
                console.log(error)
            })
    }

    static toggle(id) {
        return axios.put(`${api}/${id}/toggle`)
            .then((res) => {
                return res;
            })
            .catch((error) => {
                console.log('Cannot toggle', error)
            })
    }

    static update(id, text){
        return axios.put(`${api}/${id}`, { text })
            .then((res) => {
                return res;
            })
            .catch((error)=> {
                console.log('Cannot update', error)
            })
    }

    static remove(id) {
        return axios.delete(`${api}/${id}`)
            .then((res) => {
                return res;
            })
            .catch((error) => {
                console.log('Cannot remove', error)
            })
    }
}

export default TodoService;
