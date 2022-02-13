import { ICharachters } from './Characters';

export interface IContext {
    nextPage: string;
    prevPage: string;
    isLoading: boolean;
    lastPage: number;
    currentPage: number;
    charachters: ICharachters[];
}
