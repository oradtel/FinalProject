import React from 'react';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ChartModel from './ChartModel';
import experimentService from './ExperimentService';

const Experiment8 = (props) => {
    const isPicked1 = {
        picked: 0
    };
    var tmpData1, tmpData2;
    const [data1, setData1] = useState(0);
    const [data2, setData2] = useState(0);
    const [ID1, setID1] = useState(0);
    const [ID2, setID2] = useState(0);
    const { handleSubmit } = useForm({});


    useEffect(() => {
        (async () => {
            const data = await experimentService.getData();
            //console.log(10, data)
            let rowFromService1 = await getMyRow(7, 0, data);
            let rowFromService2 = await getMyRow(7, 5, data);
            var rowID1=rowFromService1[5] + 'start';
            var rowID2=rowFromService2[5] + 'end';
            setID1(rowID1);
            setID2(rowID2);
            //console.log("3. this is rowFromService from getMyRow");
            //console.log(rowFromService);
            setData(rowFromService1, rowFromService2);
            //console.log("This is data1");
            //console.log(data1);
        })();
    }, [])

    useEffect(() => {
        window.addEventListener("popstate", e => {
            // Nope, go back to your page
            props.history.go(1);
        });
    }, []);

    function setData(rowFromService1, rowFromService2) {
        tmpData1 = [
            {
                "name": "1 star",
                "percentage": rowFromService1[0]
            },
            {
                "name": "2 stars",
                "percentage": rowFromService1[1]
            },
            {
                "name": "3 stars",
                "percentage": rowFromService1[2]
            },
            {
                "name": "4 stars",
                "percentage": rowFromService1[3]
            },
            {
                "name": "5 stars",
                "percentage": rowFromService1[4]
            }
        ];

        setData1(tmpData1);

        tmpData2 = [
            {
                "name": "1 star",
                "percentage": rowFromService2[0]
            },
            {
                "name": "2 stars",
                "percentage": rowFromService2[1]
            },
            {
                "name": "3 stars",
                "percentage": rowFromService2[2]
            },
            {
                "name": "4 stars",
                "percentage": rowFromService2[3]
            },
            {
                "name": "5 stars",
                "percentage": rowFromService2[4]
            }
        ];

        setData2(tmpData2);
    }
    
    const onSubmit = (data) => {
        var choice;
        if (isPicked1.picked){
            choice={choicePicked8:ID1,choiceNotPicked8:ID2};
        }else{
            choice={choicePicked8:ID2,choiceNotPicked8:ID1};
        }
        props.updateUser(choice);
        props.history.push('/experiment9');
    };


    const getMyRow = (rowNumber, offset, data) => {
        var row = [];

        for (var i = 0 + offset; i < offset + 5; i++) {
            row.push(parseInt(data[rowNumber][i]));
        }
        var rowID=data[rowNumber][10];
        row.push(rowID);
        console.log("this is row from getMyRow");
        console.log(row);
        return row;
    }


    console.log("return");

    return (
        <div>
            <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
                <motion.div
                    className="col-md-6 offset-md-3"
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ stiffness: 150 }}
                >
                    <Form.Group controlId="experiment">
                    <Form.Label style={{ width: '100%',left: '27%', display: 'flex', textAlign: 'center', position: 'relative'}}><h2><u>Experiment #8</u></h2></Form.Label>
                        <Form.Text as="big">
                            <p style={{ width: '200%',right: '45%', position: 'relative', color: 'black' }}>
                                You are interested in buying a HEADPHONE and just found two models that fully comply with your requirements (and cost exactly the same).
                            </p>
                        </Form.Text>
                    </Form.Group>
                    <br />
                    <div style={{width: '100%', display: 'flex', justifyContent: "center"}}>

                    <table style={{ width: '100%', textAlign: 'center', position: 'relative', color: 'black' }}>
                        <tbody>
                            <tr>
                                <td><ChartModel data={data1} /></td>
                                <td><ChartModel data={data2} /></td>
                            </tr>
                            <tr>
                                <td><
                                    Button style={{ textAlign: 'center', position: 'relative', left: '50px' }} variant="primary" type="submit" onClick={() => (isPicked1.picked = 1)}>
                                    This is my pick
                                </Button>
                                </td>
                                <td>
                                    <Button style={{ textAlign: 'center', position: 'relative', left: '50px' }} variant="primary" type="submit" onClick={() => (isPicked1.picked = 0)}>
                                        This is my pick
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </motion.div>
            </Form>
        </div>
    );
};

export default Experiment8;