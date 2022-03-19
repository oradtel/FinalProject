import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

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
            Swal.fire({
                title: 'Note',
                icon: 'info',
                html:
                    '<ul><li>Please note that you can participate in this HIT only once.</li><li>You will not be able to start the HIT again or open it in another window/tab.</li><li>Please do NOT click the refresh button or the back button while participating in this HIT.</li></ul>',
                showCloseButton: false,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Got it!',
                confirmButtonAriaLabel: 'Thumbs up, great!'
            })
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
                        <p style={{ width: '1000px', textAlign: 'left', position: 'relative', right: '370px', color: 'black'  }}>
                            Dear participant,
                        </p>
                        <p style={{ width: '1000px', textAlign: 'left', position: 'relative', right: '370px', color: 'black'  }}>
                            This study is being carried out by students from the lab of Prof. David Sarne at Bar-Ilan University. 
                            The objective of this study is to learn user preference. 
                            You may not directly benefit from the results of this study. 
                            However, we hope that your participation in the study will help to understand better some aspects of human decision-making, leading to the development of more effective tools and methods for product evaluation.
                        </p>
                        <p style={{ width: '1000px', textAlign: 'left', position: 'relative', right: '370px', color: 'black'  }}>
                            We believe there is no risk associated with this study. As with any online related activity, there may be a risk of a breach of confidentiality. To the best of our ability, your answers in this study will remain confidential. We minimize risks by storing all the data in a secured server. All the results will be reported based on the data collected from all users - no specific data of any single user will be disclosed whatsoever (anonymous).
                        </p>
                        <p style={{ width: '1000px', textAlign: 'left', position: 'relative', right: '370px', color: 'black'  }}>
                            Your participation in this study is voluntary, and you can withdraw at any time. There will be no penalty for withdrawal (though you will not complete the HIT and get paid).
                        </p>
                        <p style={{ width: '1000px', textAlign: 'left', position: 'relative', right: '370px', color: 'black'  }}>
                            We sincerely appreciate your participation in this study.
                        </p>
                        <p style={{ width: '1000px', textAlign: 'left', position: 'relative', right: '370px', color: 'black'  }}>
                            If you encounter any technical problem with the HIT or have any questions or comments, please contact us by sending an email using the AMT system. If you want clarification regarding this research or your participation, please contact Moshe Hanukoglu at moshe.hanu@gmail.com.
                        </p>
                        <p style={{ width: '1000px', textAlign: 'left', position: 'relative', right: '370px', color: 'black'  }}>
                            By clicking the "I agree" button, you confirm that you are at least 18 years old, have read and understood this consent form, and agree to participate in this research. It is advised that you print a copy of this page for your records.
                        </p>
                        <br></br>
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