import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Instructions from '../components/Instructions';

const ExpRouter = () => {
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

    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route
                        render={(props) => (
                            <Instructions {...props} user={user} updateUser={updateUser} />
                        )}
                        path="/instructions"
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default ExpRouter;