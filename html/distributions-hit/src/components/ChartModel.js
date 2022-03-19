import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { withRouter } from 'react-router-dom';

const ChartModel = () => {
    const data = [
        {
            "name": "1",
            "percentage": 1
        },
        {
            "name": "2",
            "percentage": 3
        },
        {
            "name": "3",
            "percentage": 9
        },
        {
            "name": "4",
            "percentage": 27
        },
        {
            "name": "5",
            "percentage": 60
        }
    ];

    return (
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="percentage" fill="#8884d8" />
        </BarChart>
    );
};

export default withRouter(ChartModel);
