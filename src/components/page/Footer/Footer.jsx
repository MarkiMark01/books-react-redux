import styles from "./stylesFooter.module.scss";

const Footer = () => {
  return (
    <footer>
      <section className={styles.foot}></section>
      <main className={styles.footer}>
        <section>2024 &copy; by Markiyan Marych</section>
      </main>
    </footer>
  );
};
export default Footer;
