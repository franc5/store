import styles from './Home.module.css';
import Input from './Input' ;
import Button from './Button';
import Select from './Select';

export default function Home() {

  const Options = [
    {id: "option1", name: "Option 1"},
    {id: "option2", name: "Option 2"},
    {id: "option3", name: "Option 3"},
  ];
  
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
      <Select 
        label= "Select your option:  "
        options = {Options}
        onChange={(id, name) => console.log("Id:" + id,"Name:" + name)}
        defaultValue={Options[2].name}
      />
    </>
  );
}
