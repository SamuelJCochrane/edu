import React from 'react';
import PropTypes from 'prop-types';
import katex from 'katex';

export default (Component, { displayMode }) => {
    class MathComponent extends React.Component {
        constructor(props) {
            super(props);

            this.usedProp = props.math ? 'math' : 'children';

            this.state = this.createNewState(null, props);
        }

        componentWillReceiveProps() {
            this.setState(this.createNewState);
        }

        shouldComponentUpdate(nextProps) {
            return nextProps[this.usedProp] !== this.props[this.usedProp];
        }

        createNewState(prevState, props) {
            try {
                const html = this.generateHtml(props);

                return { html, error: undefined };
            } catch (error) {
                if (error instanceof katex.ParseError || error instanceof TypeError) {
                    return { error };
                }

                throw error;
            }
        }

        generateHtml(props) {
            const { errorColor, renderError } = props;

            return katex.renderToString(props[this.usedProp], {
                displayMode,
                errorColor,
                throwOnError: !!renderError
            });
        }

        render() {
            const { error, html } = this.state;

            if (error) {
                console.warn(error.message);
                return null;
            }

            return <Component html={html} />;
        }
    }

    MathComponent.propTypes = {
        children: PropTypes.string,
        errorColor: PropTypes.string,
        math: PropTypes.string,
    };

    return MathComponent;
};