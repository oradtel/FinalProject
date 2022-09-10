import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Introduction = (props) => {

    const { register, handleSubmit, errors } = useForm({});
    props.updateRegister(true);
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
                <Form.Group controlId="introduction">
                    <Form.Label><h2><u>Introduction</u></h2></Form.Label>
                    <Form.Text as="big">
                        <p style={{width: '1000px', textAlign: 'center', position: 'relative', right: '400px', color: 'black' }}>
                            Dear participant,
                            Thank you for your interest in this study, designed to learn about user preferences of product ratings.
                            In the next screen you will be asked to provide your consent to participate in the study.
                        </p>
                        <p style={{ width: '1000px', textAlign: 'center', position: 'relative', right: '400px', color: 'black'  }}>Dear participant,
                        You'll then be presented with a sample question and instructions.
                        Answering the entire series of questions will typically take less than 15 minutes.
                        </p>
                    </Form.Text>
                </Form.Group>
                <Button style={{ textAlign: 'center', position: 'relative', left: '50px' }} variant="primary" type="submit">
                    Got It!
                </Button>
            </motion.div>
        </Form>
    );
};

export default Introduction;