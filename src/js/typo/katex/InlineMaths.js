import React from 'react';
import PropTypes from 'prop-types';
import createMathsComponent from './createMathsComponent';

const InlineMaths = ({ html }) => {
  return <span dangerouslySetInnerHTML={{__html: html}} />;
};

InlineMaths.propTypes = {
  html: PropTypes.string.isRequired
};

export default createMathsComponent(InlineMaths, { displayMode: false });