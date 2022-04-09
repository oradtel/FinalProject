import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';
class ExperimentModel {
    constructor(){
        try {
            axios.get(`${BASE_API_URL}/experimentdata`).then(res => {
                this.modelData=res.data;
            });
        } catch(err) {
            console.log(err);
        }
    }
    
    static getRow(rowNumber){
        var row=[];
        for (var i=0;i < 5;i++){
            row.push(this.modelData[rowNumber][i]);
        }
        return row;
    }
};

export default withRouter(ExperimentModel);
