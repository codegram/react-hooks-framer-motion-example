import { useAnimation } from "framer-motion";
import { useInView } from "react-hook-inview";
import { useEffect } from "react";

export function useAnimateOnEnterView() {
  let controls = useAnimation();

  let [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start({ scale: 1, opacity: 1 });
  }, [inView, controls]);

  return {
    ref,
    controls,
  };
}