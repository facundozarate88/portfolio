import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button from './button';
import ButtonProps from './button.types';
import { Size } from '../../types/common.types';

export default {
  title: 'Portfolio/Button',
  component: Button,
  args: {
    label: 'Button',
    primary: true,
    disabled: false,
    size: Size.Medium
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: { ...Size },
      },
    },
  },
  decorators: [(Story) => <div style={{ margin: '1em' }}><Story /></div>]
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  primary: false,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
