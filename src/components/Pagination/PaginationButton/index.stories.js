import React from 'react';
import PaginationButton from './';

export default {
  title: 'PaginationButton',
  component: PaginationButton,
};

const Template = args => <PaginationButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 1,
};
