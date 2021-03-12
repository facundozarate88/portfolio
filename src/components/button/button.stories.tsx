import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button from './button';
import ButtonProps, { ButtonSize } from './button.types';

export default {
  title: 'Portfolio/Button',
  component: Button,
  args: {
    label: 'Button',
    primary: true,
    size: ButtonSize.Medium
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          ButtonSize.Small,
          ButtonSize.Medium,
          ButtonSize.Large
        ],
      },
    },
  },
  decorators: [(Story) => <div style={{ margin: '1em' }}><Story /></div>]
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
  primary: true,
  size: ButtonSize.Medium,
}

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'Button',
  primary: false,
}
