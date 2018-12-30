import React from "react";
import { InlineMaths } from "../../typo/katex";
import { MathsInput } from "../../typo/input";
import { Area, Header, SVG } from "../../components";

export default class Playground extends React.PureComponent {

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
                        <MathsInput />
                    </Area>
                </div>
            </div>
        );
    }
}