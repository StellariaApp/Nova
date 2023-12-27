import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { NewStorageToggle } from "../utils/storage";

export type Storage = Record<string, Record<string, boolean>>;

export type ArgsStorage = {
  open?: boolean;
  autoClose?: boolean;
  hash?: string;
  hashId?: string;
};

const StorageAtom = atom({} as Storage, (get, set, update) => {
  const storage = get(StorageAtom);

  const newStorage = NewStorageToggle(storage, update as ArgsStorage);

  set(StorageAtom, newStorage);
});

export const StorageAccordionAtom = atomFamily((args: ArgsStorage) => {
  const { hash = "", hashId = "" } = args;

  return atom(
    (get) => get(StorageAtom)[hash]?.[hashId] ?? args?.open ?? false,
    (_, set) => set(StorageAtom, args)
  );
});
