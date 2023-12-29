import { atom } from "jotai";

export type Storage = Record<string, boolean>;

export const StorageAccordionAtom = atom({} as Storage);
