import { ICharachters } from './Characters';

export interface IContextProps {
    nextPage: string;
    prevPage: string;
    isLoading: boolean;
    lastPage: number;
    currentPage: number;
    charachters: ICharachters[];
    nextPrevPageHandler: Function;
  }
