import React from 'react';
import Loader from './loader';
import { LoaderProps, LoaderType } from './loader.types';
import { Size } from '../../types/common.types';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Portfolio/Loader/Default',
  component: Loader,
  args: {
    type: LoaderType.Default,
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

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

/* Default Spinner */
export const DefaultSpinnerSmall = Template.bind({});

DefaultSpinnerSmall.args = {
  size: Size.Small,
};

export const DefaultSpinnerMedium = Template.bind({});

DefaultSpinnerMedium.args = {
  size: Size.Medium,
};

export const DefaultSpinnerLarge = Template.bind({});

DefaultSpinnerLarge.args = {
  size: Size.Large,
};
