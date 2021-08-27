import { Slide } from "../components/Slide";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Slide>Hello!</Slide>
      <Slide>Are</Slide>
      <Slide>You</Slide>
      <Slide>Ready</Slide>
      <Slide>For</Slide>
      <Slide>The</Slide>
      <Slide>Weekend?</Slide>
    </div>
  );
}
