import { RootObject } from '../models/CharacterInfos';

const getCharachters = async (endpoint:string) => {
  const response = await fetch(endpoint);
  const result:RootObject = await response.json();
  return result;
};

export default getCharachters;
