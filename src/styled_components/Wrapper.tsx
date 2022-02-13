import styled from 'styled-components';
import { ISettingsProps } from '../models/SettingProps';

const Wrapper = styled.article`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    background-color: ${({ theme }: ISettingsProps) => theme.backgroundColors.secondaryColor};
    border-radius: 15px;

    img {
        width: 100%;
    }

    @media only screen and (max-width: 327px) {
        max-width: 240px;
    }
`;

export default Wrapper;
