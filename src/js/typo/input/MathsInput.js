import React from 'react';
import PropTypes from 'prop-types';

export default class MathsInput extends React.PureComponent {
    static propTypes = {
        handleChange: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.mathField = null;

        this.state = {
            latex: null,
        }
    }
    
    componentDidMount() {
        const MQ = window.MathQuill.getInterface(2);

        const mathsInputEl = document.getElementById('maths-input')
        const config = {
            supSubsRequireOperand: true,
            maxDepth: 2,
            handlers: {
                edit: () => {
                    this.setState({ latex: this.mathField.latex() })
                    if (this.props.handleChange) {
                        this.props.handleChange(this.mathField.latex())
                    }
                },
            }
        }
        this.mathField = MQ.MathField(mathsInputEl, config);
    }

    render() {

        return (
            <div className="">
                <div id="maths-input" />
                <div>{this.state.latex}</div>
                <button onClick={() => this.mathField.write('\\sqrt{}')}>One</button>
            </div>
        )
    }
}