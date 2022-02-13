import React, { useMemo } from 'react';
import Body from '../styled_components/Body';
import Header from './Header';
import Card from './Card';
import PaginationWrapper from '../styled_components/Pagination';
import CustomButton from '../styled_components/CustomButton';
import LoadingSpinner from './LoadingSpinner';
import { useContextTheme } from '../context/ThemeContext';

// Elsint doesn't allow me to write arrow functions. i didn't know how to fix this behaviour
function Charachter() {
  const contextProps = useContextTheme();

  const {
    isLoading,
    lastPage,
    currentPage,
    charachters,
    nextPrevPageHandler,
  } = contextProps;

  /* those are simple functions which job is to determine whatever
  the prev and next button should be disabled.  */
  const isPrevDisabled = useMemo(() => currentPage === 1, [currentPage]);
  const isNextDisabled = useMemo(() => currentPage === lastPage, [currentPage]);

  return (
    <Body>
      <Header title="RICK AND MORTY" subtitle="(The Hidden Charachters!)" />
      {
        isLoading && <LoadingSpinner />
      }
      {
        charachters?.length ? charachters?.map((char) => <Card char={char} key={char.charI.id} />) : ''
      }
      <PaginationWrapper>
        <CustomButton
          disabled={isPrevDisabled}
          onClick={() => nextPrevPageHandler('prevPage')}
        >
          PREV
        </CustomButton>
        <p>{currentPage}</p>
        <CustomButton
          disabled={isNextDisabled}
          onClick={() => nextPrevPageHandler('nextPage')}
        >
          NEXT
        </CustomButton>
      </PaginationWrapper>
    </Body>
  );
}

export default Charachter;
