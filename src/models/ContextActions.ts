import { RootObject } from './CharacterInfos';
import { ICharachters } from './Characters';

export type contextActions =
  | {type: 'isLoading'; payload: RootObject }
  | {type: 'isReady'; payload: ICharachters[] }
  | {type: 'addNextPageCount'; }
  | {type: 'addPrevPageCount'; };
