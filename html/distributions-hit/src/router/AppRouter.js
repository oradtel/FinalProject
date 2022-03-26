import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstStep from '../components/FirstStep';
import Header from '../components/Header';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';
import Disagree from '../components/Disagree';
import Introduction from '../components/Introduction';
import Instructions from '../components/Instructions';
import Example from '../components/Example';
import Experiment from '../components/Experiment';

const AppRouter = () => {
    // we will store the user-entered data in each step in the user state that's an object.
    const [user, setUser] = useState({});

    // we're passing data to update the user state
    const updateUser = (data) => {
        // we're first spreading out the user object values using the prevUser variable and then spreading out the data 
        // object so the resulting object will be the merging of two objects.
        setUser((prevUser) => ({ ...prevUser, ...data }));
    };

    const resetUser = () => {
        setUser({});
    };

    var csv = require('jquery-csv');

    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route
                        render={(props) => (
                            <Introduction {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/"
                        exact={true}
                    />
                    <Route
                        // pass the user and updateUser as props to the components connected to the route
                        render={(props) => (
                            <FirstStep {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/first"
                    />
                    <Route
                        render={(props) => (
                            <SecondStep {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/second"
                    />
                    <Route
                        // Note that we're not passing the updateUser prop to the ThirdStep component route, because when 
                        // we submit the form from step 3, we will be saving all the data directly into the database.
                        render={(props) => (
                            <ThirdStep
                                {...props}
                                user={user}
                                updateUser={updateUser}
                                resetUser={resetUser}
                            />
                        )}
                        path="/third"
                    />
                    <Route
                        render={(props) => (
                            <Disagree {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/disagree"
                    />
                    <Route
                        render={(props) => (
                            <Instructions {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/instructions"
                    />
                    <Route
                        render={(props) => (
                            <Example {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/example"
                    />
                    <Route
                        render={(props) => (
                            <Experiment {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/experiment"
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;