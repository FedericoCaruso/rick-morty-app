import React, {
  createContext, useContext, useEffect, useMemo, useReducer,
} from 'react';
import { ICharactersInfos } from '../models/CharacterInfos';
import { IContextProps } from '../models/ContextProps';
import { IContext } from '../models/Context';
import { IEpisodes } from '../models/Episodes';
import { ILocationsAndOrigins } from '../models/LocationsAndOrigins';
import { contextActions } from '../models/ContextActions';
import callAnyApi from '../service/callAnyApi';
import getCharachters from '../service/getCharachters';

const initialState: IContext = {
  nextPage: 'https://rickandmortyapi.com/api/character/?page=1',
  prevPage: '',
  isLoading: false,
  lastPage: 0,
  currentPage: 1,
  charachters: [],
};

/* i created two differents models for the reducer's and for context's initial state
because i had problems passing everything from the reducer */
const contextInitialState = {} as IContextProps;
const ThemeContext = createContext(contextInitialState);
export const useContextTheme = () => useContext(ThemeContext);

const contextReducer = (state:IContext, action:contextActions) => {
  switch (action.type) {
    case 'isLoading': {
      return {
        ...state,
        isLoading: true,
        lastPage: action.payload.info.pages,
        nextPage: action.payload.info.next,
        prevPage: action.payload.info.prev,
        charachters: [],
      };
    }
    case 'isReady': {
      return {
        ...state,
        isLoading: false,
        charachters: action.payload,
      };
    }
    case 'addNextPageCount': {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }
    case 'addPrevPageCount': {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }
    default:
      return state;
  }
};

const contextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  const { prevPage, nextPage } = state;

  /* when the component start loading it may get an option param that will allow to understand
  which is right api that need to be called. the result is then stored into an array and returned */
  const getCharsHandler = async (target?:string) => {
    const nextApiCall = target === 'prevPage' ? prevPage : nextPage;
    const response = await getCharachters(nextApiCall);
    const arrayOfChars:ICharactersInfos[] = response.results.map((char) => char);
    dispatch({ type: 'isLoading', payload: response });
    return arrayOfChars;
  };

  // simple utils function that performs a fetchl
  const callNextApi = async (url:string) => {
    const callApi = await callAnyApi(url);
    return callApi;
  };

  /* this is the function in which every other function is called in order.
  first i get the chars, then for every char i permofer others three api call
  in order to get the location, origin and episode. */
  const getAllCharsInformations = async (target?:string) => {
    const charsToCallApiFor = await getCharsHandler(target);

    const getCharsDetails = charsToCallApiFor.map(async (char) => {
      const charI:ICharactersInfos = char;
      const charLocation:ILocationsAndOrigins = await callNextApi(char.location.url);
      const charOrigin:ILocationsAndOrigins = await callNextApi(char.origin.url);

      const getCharsEpisode = char.episode.map(async (episode) => {
        const charEpisodes:IEpisodes = await callNextApi(episode);
        return charEpisodes;
      });

      const charsEpisodes = await Promise.all(getCharsEpisode);

      return {
        charI,
        charLocation,
        charOrigin,
        charsEpisodes,
      };
    });

    const charsDetails = await Promise.all(getCharsDetails);

    dispatch({ type: 'isReady', payload: charsDetails });
    window.scroll({ top: 0, left: 0 });
  };

  /* function that is called whenever the prev or next button are pressed.
  used to increment or decrement the counter of the current page */
  const nextPrevPageHandler = (target?:string) => {
    if (target === 'prevPage') {
      dispatch({ type: 'addPrevPageCount' });
    } else {
      dispatch({ type: 'addNextPageCount' });
    }
    getAllCharsInformations(target);
  };

  useEffect(() => {
    getAllCharsInformations();
  }, []);

  const context = useMemo(() => ({ ...state, nextPrevPageHandler }), [state]);
  return (
    <ThemeContext.Provider value={context}>
      {children}
    </ThemeContext.Provider>
  );
};

export default contextProvider;
