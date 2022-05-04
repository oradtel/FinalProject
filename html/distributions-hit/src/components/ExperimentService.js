import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

class ExperimentSrvice {

    async getData() {
        try {
            const data = await axios.get(`${BASE_API_URL}/experimentdata`);
            return data.data;

        } catch (err) {
            console.log(err);
        }
    }

};

const experimentService = new ExperimentSrvice();
export default experimentService;
