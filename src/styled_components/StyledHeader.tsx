import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 327px) {
       h1{
          font-size: 1.6rem;
       }
    }
`;

export default StyledHeader;
