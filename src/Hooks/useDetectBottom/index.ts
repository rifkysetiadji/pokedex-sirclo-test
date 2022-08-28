import { useEffect, useState, useMemo } from "react";
export const useDetectBottom = (ref: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting)),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return { isVisible };
};
