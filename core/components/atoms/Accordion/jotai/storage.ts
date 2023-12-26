import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

type Storage = Record<string, Record<string, boolean>>;

type ArgsStorage = {
  id: string;
  key: string;
};

export const storageCollectorAtom = atom(
  () => ({} as Storage),
  (get, set, update) => {
    const storage = get(storageCollectorAtom);
    const { id, key } = update as ArgsStorage;
    const newValue = {
      ...storage,
      [id]: {
        ...storage[id],
        [key]: !storage[id]?.[key],
      },
    };
    set(storageCollectorAtom, newValue);
  }
);

export const storageAtom = atomFamily((args: ArgsStorage) =>
  atom(
    (get) => get(storageCollectorAtom)[args.id]?.[args.key] ?? false,
    (_, set) => set(storageCollectorAtom, args)
  )
);
