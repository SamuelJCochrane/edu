import React from 'react';

export default class Header extends React.PureComponent {

    render() {
        const {
            title,
            subtitle,
        } = this.props;

        return (
            <div className="header">
                <div className="title-wrapper">
                    {!!title && <h1>{title}</h1>}
                    {!!subtitle && <h2>{subtitle}</h2>}
                </div>
            </div>
        )
    }
}