import styles from './Home.module.css';
import Input from './components/Input' ;
import Select from './components/Select';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import ItemList from './components/ItemList';

export default function Home() {

  const options = [
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
        options = {options}
        onChange={(id, name) => console.log("Id:" + id,"Name:" + name)}
        defaultValue={2}
      />
      <Checkbox
        label="Label"
        onChange={checked => console.log(checked)}
      />
      <ItemList
        image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0cc7p67e4tYtHqttNxaCbNB271tfgkHzlw&usqp=CAU"
        title= "Smart TV edge NTV43HD LED Full HD 43"
        price={4500.00}
      />
    </>
  );
}
