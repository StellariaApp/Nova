import { useAtom } from "jotai";
import { StorageAccordionAtom } from "../jotai/storage";

type Props<T = {}> = T & {
  hashItem?: string;
  open?: boolean;
};

const useOpen = <T = {}>(props: Props<T>) => {
  const { hashItem } = props;

  const [storage] = useAtom(StorageAccordionAtom);
  const open = storage[hashItem ?? ""] ?? props.open ?? false;

  return {
    ...props,
    open,
  };
};

export default useOpen;
