import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const FirstStep = (props) => {
    const { user } = props;
    const has_agreed = {
        agree: 1
    };
    const { register, handleSubmit, errors } = useForm({});

    // navigate to the ThirdStep component
    const onSubmit = (data) => {
        props.updateUser(data);
        if (has_agreed.agree === 1) {
            props.history.push('/second');
        }
        else {
            props.history.push('/disagree');
        }
    };

    return (
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            <motion.div
                className="col-md-6 offset-md-3"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ stiffness: 150 }}
            >
                <Form.Group controlId="inform">
                    <Form.Label><h2>Informed Consent</h2></Form.Label>
                    <Form.Text id="informText" as="big">
                        <div align="left" style={{ width: '1000px', textAlign:'center' }}>Dear participant,
                        Thank you for accepting this HIT. This study is being done by Prof. David Sarne and lab members from Bar-Ilan University, and was approved by the Institutional Review Board (IRB) of Bar-Ilan University.

                        The purpose of this research is to study human behavior. The time the experiment will take and the reward for completing it are specified in the HIT description.

                        You may not directly benefit from this research; however, we hope that your participation in the study will help in better understanding some aspects of human behavior, leading to the development of better and more effective tools and methods for humanity.

                        We believe there are no known risks associated with this research study; however, as with any online related activity the risk of a breach of confidentiality is always possible. To the best of our ability your answers in this study will remain confidential. We will minimize any risks by storing all data in a secured server. To save your anonymity, your MTurk Worker ID will be used only to distribute payment to you.

                        Your participation in this study is completely voluntary and you can withdraw at any time. There will be no penalty for withdrawal (though you will not complete the HIT and get paid).

                        We sincerely appreciate your consideration and participation in this study.

                        If you encounter any technical problem with the HIT, or have any questions or comments, please contact us by sending an email using the MTurk system. If you have research-related questions or want clarification regarding this research and/or your participation, please contact Prof. David Sarne at david.sarne@biu.ac.il

                        By clicking "I agree" below you are indicating that you are at least 18 years old, have read and understood this consent form and agree to participate in this research study. It is advisable that you print a copy of this page for your records.
                        </div>
                     </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => (has_agreed.agree = 1)}>
                    I Agree
                </Button>
                <Button variant="primary" type="submit" onClick={() => (has_agreed.agree = 0)}>
                    I Do Not Agree
                </Button>
            </motion.div>
        </Form>
    );
};

export default FirstStep;