import React from 'react';
import PropTypes from 'prop-types'

export default class Header extends React.PureComponent {

    static propTypes = {
        question: PropTypes.number.isRequired,
        subtitle: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        totalQuestions: PropTypes.number.isRequired,
    }

    render() {
        const {
            question,
            subtitle,
            title,
            totalQuestions,
        } = this.props;

        return (
            <div className="header">
                <div className="title-wrapper">
                    {!!title && <span className="title l">{title}</span>}
                    {!!subtitle && <span className="title">{subtitle}</span>}
                </div>
                <div className="info-wrapper">
                    <div className="questions">
                        {question} of {totalQuestions}
                    </div>
                    <div className="actions">
                        <button className="btn btn-outline-danger">Quit</button>
                    </div>
                </div>
            </div>
        )
    }
}