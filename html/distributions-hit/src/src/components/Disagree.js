import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Disagree = (props) => {

    return (
        <Form className="input-form">
            <motion.div
                className="col-md-6 offset-md-3"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ stiffness: 150 }}
            >
                <Form.Group controlId="disagree">
                    <Form.Label><h2 style={{ width: '1000px', textAlign: 'left' }}>Thank You for Your Time</h2></Form.Label>
                </Form.Group>

            </motion.div>
        </Form>
    );
};

export default Disagree;