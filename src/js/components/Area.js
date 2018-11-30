import React from 'react';

export default class Area extends React.PureComponent {

    render() {
        const {
            question,
            questionSub,
            answers,
        } = this.props;
        
        return (
            <div className="area">
                <div className="question">
                    <span>{question}</span>
                </div>
                {!!question && 
                    <div className="question-sub">
                        {questionSub}
                    </div>
                }
                <div className="answers">
                    {answers}
                </div>
            </div>
        )
    }
}