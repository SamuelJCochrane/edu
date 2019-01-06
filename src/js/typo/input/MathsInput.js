import React from 'react';
import PropTypes from 'prop-types';
import Keyboard from './Keyboard';

export default class MathsInput extends React.PureComponent {
    static propTypes = {
        handleChange: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.mathsField = null;

        this.state = {
            latex: null,
            mathsFieldGenerated: false,
        }
    }
    
    componentDidMount() {
        const MQ = window.MathQuill.getInterface(2);

        const mathsInputEl = document.getElementsByClassName('maths-input__input-el')[0];
        const config = {
            supSubsRequireOperand: true,
            maxDepth: 2,
            handlers: {
                edit: () => {
                    this.setState({ latex: this.mathsField.latex() })
                    if (this.props.handleChange) {
                        this.props.handleChange(this.mathsField.latex())
                    }
                }
            }
        }
        
        this.mathsField = MQ.MathField(mathsInputEl, config);
        this.setState({ mathsFieldGenerated: true });
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.mathsField.latex());
    }

    render() {

        return (
            <div className="maths-input">
                {/* <div>{this.state.latex}</div> */}
                <div className="maths-input__input-el"/>
                {this.state.mathsFieldGenerated &&
                    <Keyboard 
                        handleSubmit={this.handleSubmit}
                        mathsField={this.mathsField}
                    />
                }
            </div>
        )
    }
}