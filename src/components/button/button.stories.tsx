import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './button';

export default {
    title: 'Portfolio/Button',
    component: Button,
    decorators: [(Story) => <div style={{ margin: '1em'}}><Story /></div>]
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Button',
    primary: true,
}

export const Secondary = Template.bind({});

Secondary.args = {
    label: 'Button',
    primary: false,
}