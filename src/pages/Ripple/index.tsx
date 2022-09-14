

import styles from './styles.module.css'

export function Ripple() {


  return (
    <main className={styles.main}>
       <div className={styles.container}>
        <div className={styles.content}>
        <div>
            <button className={`${styles.button_base} ${styles.ripple}`}>Ripple Button</button>
            <button className={`${styles.button_base} ${styles.ripple}`}>Ripple Button</button>
            <button className={`${styles.button_base} ${styles.ripple}`}>Ripple Button</button>
          <a href='#' className={`${styles.link} ${styles.ripple}`}>teste</a>
          </div>
         {/* <h3>CSS Only Material Design Button Ripple Effect</h3>
          <p>I was looking at the Google Material Design stuff and wanted to see if I could approximate the click ripple effect using CSS only.<br />The requirements I had:</p>
          <ul>
            <li>CSS only</li>
            <li>No extra HTML elements</li>
            <li>No extra Javascript</li>
          </ul>
          <p>The result:</p>
          <div>
            <button className={styles.button_base, styles.ripple}>Ripple Button</button>
            <button className={styles.button_base, styles.ripple}>Ripple Button</button>
            <button className={styles.button_base, styles.ripple}>Ripple Button</button>
          <div>
          <p>Problems:</p>
          <ul>
            <li>To size and position the ripple, I had to use absolute fixed sizes and positioning, <br />so the scale and timing would be off if the element is much larger than a button</li>
            <li>No Javascript, so can't position the ripple at the click origin</li>
            <li>Browser compatibility? ¯\_(ツ)_/¯</li>
            <li>The click uses :focus, so it's only going through once</li>
          </ul>*/}
        </div>
      </div>
    </main>
  );
}
