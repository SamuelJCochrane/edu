import React from "react";
import { Area, Header, SVG } from "../../components";
import { default as Test } from "../../questions/Test";

export default class Playground extends React.PureComponent {
    render() {
        return (
            <div className="page">
                <div className="page-header">
                    <Header
                        title="Chemistry"
                        subtitle="What the fuck is a mole?"
                        question={10}
                        totalQuestions={20}
                    />
                </div>
                <div className="page-inner centered">
                    <Area 
                        question="Example question"
                    >
                        <Test />
                    </Area>
                </div>
            </div>
        );
    }
}
