import React from 'react';
import CardInfoTitle from '../styled_components/CardInfoTitle';
import LoadingSpinnerStyled from '../styled_components/LoadingSpinnerStyled';

function LoadingSpinner() {
  return (
    <>
      <LoadingSpinnerStyled />
      <CardInfoTitle mainTitle>
        LOADING...
      </CardInfoTitle>
    </>
  );
}

export default LoadingSpinner;
