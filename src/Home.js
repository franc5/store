import styles from './Home.module.css';
import Input from './Input' ;
import Button from './Button';

export default function Home() {
  return (
    <>
      <div className={styles.placeholderContainer}>
        Placeholder App 
      </div>
      <Button color="red" onClick={e => console.log(e)}>
        Button
      </Button>
      <Input
        placeholder="Label"
        onChange={value => console.log(value)}
      />
    </>
  );
}
