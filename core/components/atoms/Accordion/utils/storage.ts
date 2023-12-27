import { ArgsStorage, Storage } from "../jotai/storage";

export const NewStorageToggle = (storage: Storage, args: ArgsStorage) => {
  const { hash = "", hashId = "", autoClose = false } = args;

  const elements = document.querySelectorAll(
    `[data-accordion-item-hash="${hash}"]`
  );

  const newStorageHash = storage[hash] ?? {};

  elements.forEach((element) => {
    const elementId = element.getAttribute("data-accordion-item-hash-id") ?? "";
    const value =
      Boolean(element.getAttribute("open")) ??
      newStorageHash[elementId] ??
      false;
    const nextValue = elementId === hashId ? !value : autoClose ? false : value;

    const isClose = nextValue ? "true" : "false";

    const SwitchObject = {
      true: () => {
        element.setAttribute("open", "true");
        newStorageHash[elementId] = true;
        const paragraph = element.querySelector("p");
        if (!paragraph) return;
        paragraph.style.maxHeight = `${paragraph.scrollHeight}px`;
      },
      false: () => {
        element.removeAttribute("open");
        newStorageHash[elementId] = false;
        const paragraph = element.querySelector("p");
        if (!paragraph) return;
        paragraph.style.maxHeight = "0px";
      },
    };

    return SwitchObject[isClose]();
  });

  const newStorage = {
    ...storage,
    [hash]: newStorageHash,
  };

  return newStorage;
};
