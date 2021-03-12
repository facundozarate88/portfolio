import React from 'react';
import Loader from '../loader';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Size } from '../../../types/common.types';
import { LoaderProps, LoaderType } from '../loader.types';

export default {
  title: 'Portfolio/Loader/Bounce',
  component: Loader,
  args: {
    type: LoaderType.Bounce,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: { ...Size },
      },
    },
    type: {
      control: {
        type: 'select',
        options: { ...LoaderType }
      }
    },
    color: { control: 'color', defaultValue: '#2f89d3' }
  },
  decorators: [(Story) => <div style={{ margin: '1em' }}><Story /></div>]
} as Meta;


const Template: Story<LoaderProps> = args => <Loader {...args} />;

/* Bounce Spinner */
export const BounceSpinnerSmall = Template.bind({});

BounceSpinnerSmall.args = {
  size: Size.Small,
};

export const BounceSpinnerMedium = Template.bind({});

BounceSpinnerMedium.args = {
  size: Size.Medium,
};

export const BounceSpinnerLarge = Template.bind({});

BounceSpinnerLarge.args = {
  size: Size.Large,
};
