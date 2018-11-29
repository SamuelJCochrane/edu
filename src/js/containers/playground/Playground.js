import React from 'react';
import { Header } from '../../components';

export default class Playground extends React.PureComponent {

    render() {
        return (
            <div className="playground">
                <Header 
                    title="Chemistry"
                    subtitle="What the fuck is a mole?"
                />
                PLAYGROUND
            </div>
        )
    }
}