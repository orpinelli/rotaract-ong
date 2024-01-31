import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className={styles.main}>
      <Search/>
      <br/>   <br/>   <br/>
      <Card/>
    </main>
  );
}
