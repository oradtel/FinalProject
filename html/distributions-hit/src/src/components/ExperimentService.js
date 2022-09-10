import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

class ExperimentSrvice {
    constructor() {
        this.data = null;
      }
    async getData() {
        if (this.data!=null){
            return this.data.data;
        }
        try {
            this.data = await axios.get(`${BASE_API_URL}/experimentdata`);
            return this.data.data;

        } catch (err) {
            console.log(err);
        }
    }

};

const experimentService = new ExperimentSrvice();
export default experimentService;
