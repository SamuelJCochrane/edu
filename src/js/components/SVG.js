import React from 'react';
import classNames from 'classnames';

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

        const classList = classNames({
            svg: true,
            [className]: !!className,
        })

        return (
            <svg className={classList} width={width} height={height} x={x} y={y}>
                {children}
            </svg>
        )
    }
}