import React from 'react';

export default class SVG extends React.PureComponent {

    render() {

        const {
            children,
            className,
            height,
            width,
            x,
            y,
        } = this.props;

        return (
            <svg className={`svg ${!!className ? className : ''}`} width={width} height={height} x={x} y={y}>
                {children}
            </svg>
        )
    }
}