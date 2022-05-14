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
import Experiment2 from '../components/Experiment2';
import Experiment3 from '../components/Experiment3';
import Experiment4 from '../components/Experiment4';
import Experiment5 from '../components/Experiment5';
import Experiment6 from '../components/Experiment6';
import Experiment7 from '../components/Experiment7';
import Experiment8 from '../components/Experiment8';
import Experiment9 from '../components/Experiment9';
import Experiment10 from '../components/Experiment10';
import Feedback from '../components/Feedback';

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


    // // we will store the user-entered data in each step in the user state that's an object.
    // const [expData, setExpData] = useState({});

    // // we're passing data to update the user state
    // const updateExpData = (data) => {
    //     // we're first spreading out the user object values using the prevUser variable and then spreading out the data 
    //     // object so the resulting object will be the merging of two objects.
    //     setExpData((prevExpData) => ({ ...prevExpData, ...data }));
    // };

    // const resetExpData = () => {
    //     setExpData({});
    // };


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
                                updateUser={updateUser}                            />
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
                    <Route
                        render={(props) => (
                            <Experiment2 {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/experiment2"
                    />
                    <Route
                        render={(props) => (
                            <Experiment3 {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/experiment3"
                    />
                    <Route
                        render={(props) => (
                            <Experiment4 {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/experiment4"
                    />
                    <Route
                        render={(props) => (
                            <Experiment5 {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/experiment5"
                    />
                    <Route
                        render={(props) => (
                            <Experiment6 {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/experiment6"
                    />
                    <Route
                        render={(props) => (
                            <Experiment7 {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/experiment7"
                    />
                    <Route
                        render={(props) => (
                            <Experiment8 {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/experiment8"
                    />
                    <Route
                        render={(props) => (
                            <Experiment9 {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/experiment9"
                    />
                    <Route
                        render={(props) => (
                            <Experiment10 {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/experiment10"
                    />
                    <Route
                        render={(props) => (
                            <Feedback {...props} user={user} updateUser={updateUser} resetUser={resetUser} />
                        )}
                        path="/feedback"
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;