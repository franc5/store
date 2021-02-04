import React from 'react';
import ItemList from './';

export default {
  title: 'ItemList',
  component: ItemList,
};

const Template = args => <ItemList {...args} />

export const Default = Template.bind({});

Default.args = {
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFd9QvX_T9YmOMiQN144FIgdQgzwHYmRcx0A&usqp=CAU',
  title: 'Husqvarna Svartpilen 401 50% 18 Cuotas Tasa 0% Palermo Bikes',
  price: 4500,
};