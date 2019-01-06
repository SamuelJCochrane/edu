import React from 'react';
import PropTypes from 'prop-types';

export default class Keyboard extends React.PureComponent {

    static propTypes = {
        mathsField: PropTypes.any.isRequired,
        handleSubmit: PropTypes.func,
    }

    render() {
        const { 
            handleSubmit,
            mathsField,
        } = this.props;

        return (
            <div className="maths-input__buttons">
                <button
                    className="maths-input__buttons--sqrt"
                    onClick={() => mathsField.write('\\sqrt{}').focus().keystroke("Left")}
                >
                    SQRT
                        </button>
                <button
                    className="maths-input__buttons--expo"
                    onClick={() => mathsField.write('^{}').focus().keystroke("Left")}
                >
                    EXPO
                        </button>
                <button
                    className="maths-input__buttons--frac"
                    onClick={() => mathsField.write('\\frac{}{}').focus().keystroke("Left").keystroke("Left")}
                >
                    FRAC
                        </button>
                <button
                    className="maths-input__buttons--frac"
                    onClick={() => mathsField.write('\\divide').focus()}
                >
                    DIVIDE
                        </button>
                <button
                    className="maths-input__buttons--frac"
                    onClick={() => mathsField.write('\\times').focus()}
                >
                    MULTIPLY
                        </button>
                <button
                    className="maths-input__buttons--frac"
                    onClick={() => mathsField.write('+').focus()}
                >
                    ADD
                        </button>
                <button
                    className="maths-input__buttons--frac"
                    onClick={() => mathsField.write('-').focus()}
                >
                    SUBTRACT
                        </button>
                <button
                    className="maths-input__buttons--frac"
                    onClick={() => mathsField.write('\\left(\\right)').focus().keystroke("Left")}
                >
                    {"()"}
                </button>
                <button onClick={() => console.log(mathsField.__controller.cursor.selection)}>TEST</button>
                <button
                    className="maths-input__buttons--submit"
                    onClick={this.props.handleSubmit}
                >
                    Submit
                </button>
            </div>
        )
    }
}