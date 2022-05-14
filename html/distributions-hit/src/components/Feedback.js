import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';
import Swal from 'sweetalert2';

const Feedback = (props) => {
    // we're destructuring the user prop from the props object which we're passing in the route of the AppRouter.js 
    // file.Then we're using the defaultValues property to set the value for each input field.
    const { user } = props;


    var considerations;
    var choice_affect;
    var average_ratings;
    var useful_information;
    var technical_issues;
    function setConsiderations(answer){
        considerations=answer;
    }
    function setChoice_affect(answer){
        choice_affect=answer;
    }
    function setAverage_ratings(answer){
        average_ratings=answer;
    }
    function setUseful_information(answer){
        useful_information=answer;
    }
    function setTechnical_issues(answer){
        technical_issues=answer;
    }
    // register - a function that we can assign it to each input field so that the react-hook-form can track the 
    // changes for the input field value
    // handleSubmit - the function we can call when the form is submitted
    // errors - will contain the validation errors, if any

    // for the push method, we've provided the route to which we need to redirect.
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = props;
            // var choice;
            // if (isPicked1.picked){
            //     choice={choicePicked10:ID1,choiceNotPicked10:ID2};
            // }else{
            //     choice={choicePicked10:ID2,choiceNotPicked10:ID1};
            // }
           
            const updatedData =  {considerations:considerations,
                choice_affect: choice_affect,
                average_ratings: average_ratings,
                useful_information: useful_information,
                technical_issues: technical_issues};

            // we're passing the data to the /register API in the JSON format.
            await axios.post(`${BASE_API_URL}/register`, {
                ...user,
                ...updatedData
            });

            Swal.fire('Awesome!', "You're successfully did it!", 'success').then(
                (result) => {
                    if (result.isConfirmed || result.isDismissed) {
                        props.resetUser();
                        props.history.push('/disagree');
                    }
                }
            );

        } catch (error) {
            if (error.response) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                });
                console.log('error', error.response.data);
            }
        }
    };

    return (
        // Note that for each input field, we have given a unique name which is mandatory so react-hook-form can 
        // track the changing data.
        <Form className="input-form" onSubmit={handleSubmit}>
            <motion.div
                className="col-md-6 offset-md-3"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ stiffness: 150 }}
            >
                <Form.Label style={{ width: '100%',left: '27%', display: 'flex', textAlign: 'center', position: 'relative'}}><h1><u>Questions</u></h1></Form.Label>
                <Form.Group controlId="considerations">
                    <Form.Label style={{ width: '200%',right: '35%', display: 'flex', textAlign: 'center', position: 'relative'}}>What were your considerations when choosing between the two products?</Form.Label>
                    <Form.Control
                        type="text"
                        name="considerations"
                        value={considerations}
                        onChange={(event)=>setConsiderations(event.target.value)}
                        placeholder="Your answer"
                        autoComplete="off"
                        as='textarea' rows={3}
                    />

                </Form.Group>

                <Form.Group controlId="choice_affect">
                    <Form.Label style={{ width: '200%',right: '35%', display: 'flex', position: 'relative'}}>How did the rating distributions affect your choice?</Form.Label>
                    <Form.Control
                        type="text"
                        name="choice_affect"
                        value={choice_affect}
                        onChange={(event)=>setChoice_affect(event.target.value)}
                        placeholder="Your answer"
                        autoComplete="off"
                        as='textarea' rows={3}
                    />

                </Form.Group>

                <Form.Group controlId="average_ratings">
                    <Form.Label style={{ width: '200%',right: '35%', display: 'flex', textAlign: 'left', position: 'relative'}}>Are the rating distributions important for choosing or could you settle for average ratings?</Form.Label>
                    <Form.Control
                        type="text"
                        name="average_ratings"
                        value={average_ratings}
                        onChange={(event)=>setAverage_ratings(event.target.value)}
                        placeholder="Your answer"
                        autoComplete="off"
                        as='textarea' rows={3}
                    />

                </Form.Group>

                <Form.Group controlId="useful_information">
                    <Form.Label style={{ width: '200%',right: '35%', display: 'flex', textAlign: 'left', position: 'relative'}}>What other information can be useful when choosing between the two products?</Form.Label>
                    <Form.Control
                        type="text"
                        name="useful_information"
                        value={useful_information}
                        onChange={(event)=>setUseful_information(event.target.value)}
                        placeholder="Your answer"
                        autoComplete="off"
                        as='textarea' rows={3}
                    />

                </Form.Group>
                
                <Form.Group controlId="technical_issues">
                    <Form.Label style={{ width: '200%',right: '35%', display: 'flex', textAlign: 'center', position: 'relative'}}>Did you encounter any technical issues during the HIT?</Form.Label>
                    <Form.Control
                        type="text"
                        name="technical_issues"
                        value={technical_issues}
                        onChange={(event)=>setTechnical_issues(event.target.value)}
                        placeholder="Your answer"
                        autoComplete="off"
                        as='textarea' rows={3}
                    />

                </Form.Group>
                


                <Button variant="primary" type="submit">
                    Done
      </Button>
            </motion.div>
        </Form>
    );
};

export default Feedback;