import Board from "@/components/Board";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Board/>
      </div>
    </>
  );
}