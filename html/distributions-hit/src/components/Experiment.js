import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ChartModel from './ChartModel';

const Experiment = (props) => {

    const { handleSubmit } = useForm({});

    let { PythonShell } = require('python-shell');

    PythonShell.run("../../scripts/test.py", null, function (err, results) {
        console.log(results);
    })

    const data1 = [
        {
            "name": "1 star",
            "percentage": 1
        },
        {
            "name": "2 stars",
            "percentage": 3
        },
        {
            "name": "3 stars",
            "percentage": 9
        },
        {
            "name": "4 stars",
            "percentage": 27
        },
        {
            "name": "5 stars",
            "percentage": 60
        }
    ];

    const data2 = [
        {
            "name": "1 star",
            "percentage": 0
        },
        {
            "name": "2 stars",
            "percentage": 10
        },
        {
            "name": "3 stars",
            "percentage": 1
        },
        {
            "name": "4 stars",
            "percentage": 39
        },
        {
            "name": "5 stars",
            "percentage": 50
        }
    ];

    const onSubmit = (data) => {
        props.updateUser(data);
        props.history.push('/first');
    };

    return (
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            <motion.div
                className="col-md-6 offset-md-3"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ stiffness: 150 }}
            >
                <Form.Group controlId="experiment">
                    <Form.Label><h2><u>Experiment</u></h2></Form.Label>
                    <Form.Text as="big">
                        <p style={{ width: '1000px', textAlign: 'center', position: 'relative', right: '400px', color: 'black' }}>
                            You are interested in buying a HEADPHONE and just found two models that fully comply with your requirements (and cost exactly the same).
                        </p>
                    </Form.Text>
                </Form.Group>
                <br />
                <table style={{ width: '1000px', textAlign: 'center', position: 'relative', right: '700px', color: 'black' }}>
                    <tr>
                        <td><ChartModel data={data1} /></td>
                        <td><ChartModel data={data2} /></td>
                    </tr>
                    <tr>
                        <td><
                            Button style={{ textAlign: 'center', position: 'relative', left: '50px' }} >
                                This is my pick
                            </Button>
                        </td>
                        <td>
                            <Button style={{ textAlign: 'center', position: 'relative', left: '50px' }}>
                                This is my pick
                            </Button>
                        </td>
                    </tr>
                </table>
                <br /><br /><br />
                <Button style={{ textAlign: 'center', position: 'relative' }} variant="primary" type="submit">
                    Start Experiment
                </Button>
            </motion.div>
        </Form>
    );
};

export default Experiment;