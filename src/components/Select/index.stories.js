import React from 'react';
import Select from './';

export default {
  title: 'Select',
  component: Select,
};

const Template = args => <Select {...args} />

export const Default = Template.bind({});

Default.args = {
  options: [
    {id: "option1", name: "Option 1"},
    {id: "option2", name: "Option 2"},
    {id: "option3", name: "Option 3"},
  ],
  label: 'Select your option: ',
};