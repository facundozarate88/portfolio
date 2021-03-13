import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Carousel from './carousel';
import { SwiperOptions } from 'swiper';

export default {
  title: 'Portfolio/Carousel',
  component: Carousel,
  args: {
    pagination: false,
    navigation: false,
  },
  decorators: [(Story) => <div style={{ margin: '1em' }}><Story /></div>]
} as Meta;

const Template: Story<SwiperOptions> = (args) => <Carousel {...args} />;

export const Standard = Template.bind({});

export const Paginated = Template.bind({});

Paginated.args = {
  pagination: true
};

export const Navigated = Template.bind({});

Navigated.args = {
  navigation: true
};
