import React from 'react';
import Wrapper from '../styled_components/Wrapper';
import CardInfo from '../styled_components/CardInfo';
import CardInfoTitle from '../styled_components/CardInfoTitle';
import { ICardProps } from '../models/CardProps';
import CardInfoDesc from '../styled_components/CardInfoDesc';
import CardInfoScroll from '../styled_components/CardInfoScroll';

function Card(props:ICardProps) {
  const { char } = props;
  const {
    charI,
    charLocation,
    charOrigin,
    charsEpisodes,
  } = char;

  /* There are some cases like the location and the origin api that can lead,
  to an unwanted result so in order to avoid that i created this simple function
  that that will return true if the api's result is an obj */
  const checkIfUndefined = (value:object) => typeof value !== 'string' || false;

  const locationIsAvaiable = checkIfUndefined(charLocation);
  const originIsAvaiable = checkIfUndefined(charOrigin);

  // in order to store the informations in a cleaner way i created some costants
  const desc = `${charI.gender} - ${charI.species} - ${charI.status} `;

  const location = locationIsAvaiable
    ? `${charLocation.name} - ${charLocation.type} - ${charLocation.dimension} - ${charLocation.residents?.length} residents`
    : 'Not avaiable!';

  const origin = originIsAvaiable
    ? `${charOrigin.name} - ${charOrigin.type} - ${charOrigin?.dimension} - ${charOrigin.residents?.length} residents`
    : 'Not avaiable!';

  const episodes = charsEpisodes.map((episode, index) => `${episode.name} ${charsEpisodes.length !== index + 1 ? '-' : ''} `);

  return (
    <Wrapper>
      <img src={charI.image} alt={charI.name} style={{ borderRadius: '15px 15px 0 0' }} />
      <CardInfo>
        <CardInfoTitle mainTitle>{charI.name}</CardInfoTitle>
        <CardInfoDesc>
          {desc}
        </CardInfoDesc>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Location</CardInfoTitle>
        <CardInfoDesc>
          {location}
        </CardInfoDesc>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Origin</CardInfoTitle>
        <CardInfoDesc>
          {origin}
        </CardInfoDesc>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Episodes</CardInfoTitle>
        <CardInfoScroll>
          <CardInfoDesc>
            {episodes}
          </CardInfoDesc>
        </CardInfoScroll>
      </CardInfo>
    </Wrapper>
  );
}

export default Card;
