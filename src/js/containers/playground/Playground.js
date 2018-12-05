import React from "react";
import { Area, Header, Electron, Shell, SVG } from "../../components";

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
                        <SVG
                            height="500px"
                            width="500px"
                            >
                            <SVG 
                                className="test rotating-around-center"
                                x="150px"
                                y="150px"
                            >
                                <Shell />
                                <Electron />
                            </SVG>
                        </SVG>
                    </Area>
                </div>
            </div>
        );
    }
}