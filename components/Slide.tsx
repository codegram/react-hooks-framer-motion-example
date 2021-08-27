import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useAnimateOnEnterView } from "../hooks/useAnimateOnEnterView";

export const Slide: React.FC = (props) => {
  let { ref, controls } = useAnimateOnEnterView();

  return (
    <section className={styles.section}>
      <motion.h1
        ref={ref}
        initial={{ scale: 0, opacity: 0 }}
        animate={controls}
        transition={{ type: "spring", duration: 1, delay: 0.1 }}
      >
        {props.children}
      </motion.h1>
    </section>
  );
};
