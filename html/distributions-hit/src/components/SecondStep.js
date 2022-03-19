import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const SecondStep = (props) => {
    // we're destructuring the user prop from the props object which we're passing in the route of the AppRouter.js 
    // file.Then we're using the defaultValues property to set the value for each input field.
    const { user } = props;
    // register - a function that we can assign it to each input field so that the react-hook-form can track the 
    // changes for the input field value
    // handleSubmit - the function we can call when the form is submitted
    // errors - will contain the validation errors, if any
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            first_name: user.first_name,
            last_name: user.last_name,
            age: user.age,
            gender: user.gender
        }
    });

    // for the push method, we've provided the route to which we need to redirect.
    const onSubmit = (data) => {
        props.updateUser(data);
        props.history.push('/third');
    };

    return (
        // Note that for each input field, we have given a unique name which is mandatory so react-hook-form can 
        // track the changing data.
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            <motion.div
                className="col-md-6 offset-md-3"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ stiffness: 150 }}
            >
                <Form.Group controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="first_name"
                        placeholder="Enter your first name"
                        autoComplete="off"
                        ref={register({
                            required: 'First name is required.',
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: 'First name should contain only characters.'
                            }
                        })}
                        className={`${errors.first_name ? 'input-error' : ''}`}
                    />
                    {errors.first_name && (
                        <p className="errorMsg">{errors.first_name.message}</p>
                    )}
                </Form.Group>

                <Form.Group controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="last_name"
                        placeholder="Enter your last name"
                        autoComplete="off"
                        ref={register({
                            required: 'Last name is required.',
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: 'Last name should contain only characters.'
                            }
                        })}
                        className={`${errors.last_name ? 'input-error' : ''}`}
                    />
                    {errors.last_name && (
                        <p className="errorMsg">{errors.last_name.message}</p>
                    )}
                </Form.Group>

                <Form.Group controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="number"
                        name="age"
                        placeholder="Enter your age"
                        autoComplete="off"
                        ref={register({
                            required: 'Age is required.',
                            pattern: {
                                value: /^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$/,
                                message: 'Age should be between 18 - 120.'
                            }
                        })}
                        className={`${errors.age ? 'input-error' : ''}`}
                    />
                    {errors.age && (
                        <p className="errorMsg">{errors.age.message}</p>
                    )}
                </Form.Group>

                <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                        as="select"
                        name="gender"
                        placeholder="Enter your gender"
                        autoComplete="off"
                        ref={register({
                            required: 'Gender is required.'
                        })}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Next
      </Button>
            </motion.div>
        </Form>
    );
};

export default SecondStep;