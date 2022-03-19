import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// destructuring the location property from the props object and then the pathname property from the location property
const Progress = ({ location: { pathname } }) => {
    const isFirstStep = pathname === '/first';
    const isSecondStep = pathname === '/second';
    const isThirdStep = pathname === '/third';

    return (
        <React.Fragment>
            <div className="steps">
                <div className={`${isFirstStep ? 'step active' : 'step'}`}>
                    <div>1</div>
                    <div>
                        {isSecondStep || isThirdStep ? (
                            <Link to="/">Step 1</Link>
                        ) : (
                            'Step 1'
                        )}
                    </div>
                </div>
                <div className={`${isSecondStep ? 'step active' : 'step'}`}>
                    <div>2</div>
                    <div>{isThirdStep ? <Link to="/second">Step 2</Link> : 'Step 2'}</div>
                </div>
                <div className={`${pathname === '/third' ? 'step active' : 'step'}`}>
                    <div>3</div>
                    <div>Step 3</div>
                </div>
            </div>
        </React.Fragment>
    );
};

// when we pass the Progress component to the withRouter component we'll get access to the history, location and match props inside the Progress component.
export default withRouter(Progress);