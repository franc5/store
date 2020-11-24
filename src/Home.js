import styles from './Home.module.css';
import Button from './Button';

export default function Home() {
  return (
    <div className={styles.placeholderContainer}>
      Placeholder App 
    </div>,
    <Button 
      onClick={e => console.log(e)}
      label="Button"
      color="#6200ee"
    />
  );
}
