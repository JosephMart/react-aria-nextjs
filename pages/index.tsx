import type { NextPage } from "next";
import TooltipTrigger from "../components/TooltipTrigger";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TooltipTrigger />
    </div>
  );
};

export default Home;
