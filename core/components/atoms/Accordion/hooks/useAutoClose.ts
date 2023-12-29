import { AccordionItemProps } from "..";
import { useAtom } from "jotai";
import { StorageAccordionAtom } from "../jotai/storage";

export const useAutoClose = (props: AccordionItemProps) => {
  const { autoClose, hash, hashItem, open } = props;

  const [storage, setStorage] = useAtom(StorageAccordionAtom);

  const ChangeStorage = (value: boolean, hashItemTemp?: string | null) => {
    setStorage((prev) => ({
      ...prev,
      [hashItemTemp ?? hashItem ?? ""]: value,
    }));
  };

  const onClick = () => {
    if (!hash) return;
    const section = document.querySelector(`[data-hash="${hash}"]`);
    const details = section?.querySelectorAll("details");
    const detail = document.querySelector(
      `[data-hash-item="${hashItem}"]`
    ) as HTMLDetailsElement;

    if (!detail) return;

    details?.forEach((detail) => {
      if (!autoClose) return;
      SwitchObject["close"](detail);
      const hashItemTemp = detail.getAttribute("data-hash-item");
      ChangeStorage(false, hashItemTemp);
    });

    const value = storage[hashItem ?? ""] ?? open;
    const nextValue = !value;
    const nextStatus = nextValue ? "open" : "close";

    SwitchObject[nextStatus](detail);
    ChangeStorage(nextValue);
    ChangeParagraphHeight(detail);
  };

  return {
    onClick,
  };
};

const SwitchObject = {
  open: (detail: HTMLDetailsElement) => {
    detail.setAttribute("open", "true");
  },
  close: (detail: HTMLDetailsElement) => {
    detail.removeAttribute("open");
  },
};

const ChangeParagraphHeight = (detail: HTMLDetailsElement) => {
  const paragraph = detail.querySelector("p");
  if (!paragraph) return;
  const isOpen = typeof detail.getAttribute("open") === "string";
  paragraph.style.maxHeight = isOpen ? `${paragraph.scrollHeight}px` : "0px";
  paragraph.style.opacity = isOpen ? "1" : "0";
  paragraph.style.animation = "all 0.8s ease-in-out";
};
