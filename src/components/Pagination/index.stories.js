import React from 'react';
import Pagination from './';

export default {
  title: 'Pagination',
  component: Pagination,
};

const Template = args => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalPages: 5,
  onPageSelected: pageNumber => console.log(pageNumber)
};
