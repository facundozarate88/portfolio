import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Carousel from './carousel';

export default {
    title: 'Portfolio/Carousel',
    component: Carousel,
    decorators: [(Story) => <div style={{ margin: '1em'}}><Story /></div>]
} as Meta;

const Template: Story = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});