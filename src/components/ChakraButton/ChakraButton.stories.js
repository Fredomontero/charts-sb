import React from 'react';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Chakra/Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Success = Template.bind({});
Success.args = {
  background: '#00ff00',
  color: '#000',
  children: 'Success',
  size: 'sm'
}

export const Danger = Template.bind({});
Danger.args = {
  colorScheme: 'red',
  color: '#000',
  children: 'Danger'
}