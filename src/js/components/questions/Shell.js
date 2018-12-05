import React from 'react';

export default class Shell extends React.PureComponent {

    render() {
        return (
            <React.Fragment>
                <circle className="shell" cx="130" cy="150" r="100" strokeWidth="2" fill="none"/>
                <circle className="shell-edge" cx="130" cy="150" r="120" strokeWidth="20" fill="none" />
            </React.Fragment>
        )
    }
}