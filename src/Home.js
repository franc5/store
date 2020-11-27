import styles from './Home.module.css';
import Button from './Button';

export default function Home() {
  return (
    <div className={styles.placeholderContainer}>
      Placeholder App 
    </div>,
    <Button color="red" onClick={e => console.log(e)}>
      Button
    </Button>
  );
}
