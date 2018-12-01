import React from 'react';

export default class SVG extends React.PureComponent {

    render() {

        const {
            width,
            height,
        } = this.props;

        return (
            <div className="svg">
                <svg width={width} height={height}>
                    <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
                </svg>
            </div>
        )
    }
}