import styles from "./style";
import {Footer, Navbar } from './components';

const Final = () => (
  <div className="bg-emerald-900 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-teal-50 w-full ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>
  </div>
);

export default Final;