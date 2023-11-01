import { Dictionary } from '../constants/dictionary';
import type { DictionaryItem } from '../constants/dictionary';

type DictionaryItemWithFullPath = DictionaryItem & {
  fullPath: string;
};

export const findDictionary = (paths: string[]) => {
  const dictiopnary = paths.reduce(
    (acc, path) => {
      const dictionary = acc.dictionary.find(
        (item) => item.path?.substring(1) === path
      );
      if (!dictionary) return acc;

      const parent = acc.find;
      const dictionaryItem = {
        ...dictionary,
        fullPath: `${parent?.path ?? ''}${dictionary.path ?? ''}`
      } as DictionaryItemWithFullPath;

      return {
        find: dictionaryItem,
        dictionary: dictionary.paths ?? []
      };
    },
    {
      find: null as DictionaryItemWithFullPath | null,
      dictionary: Dictionary
    }
  );

  return dictiopnary.find;
};
