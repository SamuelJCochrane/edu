import React from "react";
import { InlineMaths } from "../../typo/katex";
import { MathsInput } from "../../typo/input";
import { Area, Header } from "../../components";
import utils from '../../typo/utils';

export default class Playground extends React.PureComponent {

    handleSubmit = (latex) => {
        console.log(utils.removeSpaces(latex));
    }

    render() {
        return (
            <div className="page">
                <div className="page-header">
                    <Header
                        title="Algebra"
                        subtitle="Subtitle"
                        question={10}
                        totalQuestions={20}
                    />
                </div>
                <div className="page-inner centered">
                    <Area
                        question={<React.Fragment><span>Expand </span><InlineMaths>(a + b) \times 3</InlineMaths></React.Fragment>}
                    >
                        <MathsInput 
                            handleSubmit={this.handleSubmit}
                        />
                    </Area>
                </div>
            </div>
        );
    }
}