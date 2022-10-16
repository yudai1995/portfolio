import { RefObject, useCallback, useRef } from "react";

export const useScroll = (): [RefObject<HTMLDivElement>, () => void] => {
  const refAnker = useRef<HTMLDivElement>(null);
  const onScroll = useCallback(() => {
    refAnker?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  return [refAnker, onScroll];
};