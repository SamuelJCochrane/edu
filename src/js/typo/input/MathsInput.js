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

        const mathsInputEl = document.getElementsByClassName('maths-input__input-el')[0];
        const config = {
            supSubsRequireOperand: true,
            maxDepth: 2,
            handlers: {
                edit: (test) => {
                    console.log('test', test.latex());
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
            <div className="maths-input">
                {/* <div>{this.state.latex}</div> */}
                <div className="maths-input__input-el" />
                <div className="maths-input__buttons">
                    <button 
                        className="maths-input__buttons--sqrt" 
                        onClick={() => this.mathField.write('\\sqrt{}').focus().keystroke("Left")} 
                    >
                        SQRT
                    </button>
                    <button 
                        className="maths-input__buttons--expo" 
                        onClick={() => this.mathField.write('^{}').focus().keystroke("Left")} 
                    >
                        EXPO
                    </button>
                    <button 
                        className="maths-input__buttons--frac" 
                        onClick={() => this.mathField.write('\\frac{}{}').focus().keystroke("Left").keystroke("Left")} 
                    >
                        FRAC
                    </button>
                </div>
            </div>
        )
    }
}