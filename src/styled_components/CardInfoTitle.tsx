import styled from 'styled-components';
import { ISettingsProps } from '../models/SettingProps';
import { ICardInfoTitleProps } from '../models/CardInfoTitleProps';

const CardInfoTitle = styled.h3<ICardInfoTitleProps>`
     margin-bottom: 0;
     color: ${({ theme }: ISettingsProps) => theme.textColors.secondaryColor};
     font-size: ${(props) => (props.mainTitle ? '1.5rem' : '1.1rem')};
`;

export default CardInfoTitle;
