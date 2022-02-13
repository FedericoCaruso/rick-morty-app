import styled from 'styled-components';
import { ISettingsProps } from '../models/SettingProps';

const Body = styled.main`
    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background-color: ${({ theme }: ISettingsProps) => theme.backgroundColors.mainColor};
    line-height: 2rem;
    color: ${({ theme }: ISettingsProps) => theme.textColors.mainColor};
    padding-bottom: 125px;
`;

export default Body;
