import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
// get a list of available countries, cities, and states 
import csc from 'country-state-city';
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const ThirdStep = (props) => {
    // countries, states and cities are declared in the state that will store the list of countries, states and cities, respectively, coming from the API
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    // keep track of when the data is loading
    const [isLoading, setIsLoading] = useState(false);

    // contain the selected value when the user selects a particular dropdown value.
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    // make an API call to get the list of countries
    // we've passed an empty array [] as the second argument to the useEffect hook so the hook will be called only once when the component is mounted.
    useEffect(() => {
        const getCountries = async () => {
            try {
                // indicate that data is loading
                setIsLoading(true);
                // get a list of available countries
                const result = await csc.getAllCountries();
                let allCountries = [];
                // using the array map method to filter out only isoCode and name properties
                // The code after the ? will be executed only if the previous reference is not undefined or null
                allCountries = result?.map(({ isoCode, name }) => ({
                    isoCode,
                    name
                }));
                // renaming the isoCode property to firstCountry just to identify that it's the first country from the list
                // We're also assigning a default empty object so that if the allCountries array is empty we won't get an error
                const [{ isoCode: firstCountry } = {}] = allCountries;
                setCountries(allCountries);
                setSelectedCountry(firstCountry);
                setIsLoading(false);
            } catch (error) {
                setCountries([]);
                setIsLoading(false);
            }
        };

        getCountries();
    }, []);

    useEffect(() => {
        const getStates = async () => {
            try {
                const result = await csc.getStatesOfCountry(selectedCountry);
                let allStates = [];
                allStates = result?.map(({ isoCode, name }) => ({
                    isoCode,
                    name
                }));
                console.log({ allStates });
                const [{ isoCode: firstState = '' } = {}] = allStates;
                setCities([]);
                setSelectedCity('');
                setStates(allStates);
                setSelectedState(firstState);
            } catch (error) {
                setStates([]);
                setCities([]);
                setSelectedCity('');
            }
        };

        getStates();
    }, [selectedCountry]);

    useEffect(() => {
        const getCities = async () => {
            try {
                const result = await csc.getCitiesOfState(
                    selectedCountry,
                    selectedState
                );
                let allCities = [];
                allCities = result?.map(({ name }) => ({
                    name
                }));
                const [{ name: firstCity = '' } = {}] = allCities;
                setCities(allCities);
                setSelectedCity(firstCity);
            } catch (error) {
                setCities([]);
            }
        };

        getCities();
    }, [selectedState]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = props;
            const updatedData = {
                // find out the actual names related to that country and state code
                country: countries.find(
                    (country) => country.isoCode === selectedCountry
                )?.name,
                state:
                    states.find((state) => state.isoCode === selectedState)?.name || '',
                city: selectedCity
            };

            // we're passing the data to the /register API in the JSON format.
            await axios.post(`${BASE_API_URL}/register`, {
                ...user,
                ...updatedData
            });

            Swal.fire('Awesome!', "You're successfully registered!", 'success').then(
                (result) => {
                    if (result.isConfirmed || result.isDismissed) {
                        props.resetUser();
                        props.history.push('/');
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
        <Form className="input-form" onSubmit={handleSubmit}>
            <motion.div
                className="col-md-6 offset-md-3"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ stiffness: 150 }}
            >
                <Form.Group controlId="country">
                    {isLoading && (
                        <p className="loading">Loading countries. Please wait...</p>
                    )}
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        as="select"
                        name="country"
                        value={selectedCountry}
                        onChange={(event) => setSelectedCountry(event.target.value)}
                    >
                        {countries.map(({ isoCode, name }) => (
                            <option value={isoCode} key={isoCode}>
                                {name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        as="select"
                        name="state"
                        value={selectedState}
                        onChange={(event) => setSelectedState(event.target.value)}
                    >
                        {states.length > 0 ? (
                            states.map(({ isoCode, name }) => (
                                <option value={isoCode} key={isoCode}>
                                    {name}
                                </option>
                            ))
                        ) : (
                                <option value="" key="">
                                    No state found
                                </option>
                            )}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        as="select"
                        name="city"
                        value={selectedCity}
                        onChange={(event) => setSelectedCity(event.target.value)}
                    >
                        {cities.length > 0 ? (
                            cities.map(({ name }) => (
                                <option value={name} key={name}>
                                    {name}
                                </option>
                            ))
                        ) : (
                                <option value="">No cities found</option>
                            )}
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </motion.div>
        </Form>
    );
};

export default ThirdStep;