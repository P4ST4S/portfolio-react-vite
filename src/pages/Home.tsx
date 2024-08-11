import Typer from "../components/Typer";
import styles from "../styles/pages/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      HELLO!
      <h1 className={styles.title}>
        I'm <span>Antoine Rospars</span>
      </h1>
      <h2 className={styles.description}>
        <Typer />
      </h2>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonHire}>
          <span className={styles.buttonTitle}>HIRE ME</span>
        </button>
        <button className={styles.buttonWork}>
          <span className={styles.buttonTitle}>MY WORKS</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
