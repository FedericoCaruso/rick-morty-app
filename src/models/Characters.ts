import { ICharactersInfos } from './CharacterInfos';
import { ILocationsAndOrigins } from './LocationsAndOrigins';
import { IEpisodes } from './Episodes';

export interface ICharachters {
    charI: ICharactersInfos;
    charLocation: ILocationsAndOrigins;
    charOrigin: ILocationsAndOrigins;
    charsEpisodes: IEpisodes[];
}
