import React from 'react';
import PropTypes from 'prop-types';
import createMathsComponent from './createMathsComponent';

const BlockMaths = ({ html }) => {
  return <div dangerouslySetInnerHTML={{__html: html}} />;
};

BlockMaths.propTypes = {
  html: PropTypes.string.isRequired
};

export default createMathsComponent(BlockMaths, { displayMode: true });