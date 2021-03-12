import React from 'react';
import Loader from '../loader';
import { LoaderProps, LoaderType } from '../loader.types';
import { Size } from '../../../types/common.types';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Portfolio/Loader/ChaseDot',
  component: Loader,
  args: {
    type: LoaderType.ChaseDot,
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

/* Chase Loader Spinner */
export const ChaseDotSmall = Template.bind({});

ChaseDotSmall.args = {
  size: Size.Small,
}

export const ChaseDotMedium = Template.bind({});

ChaseDotMedium.args = {
  size: Size.Medium,
}

export const ChaseDotLarge = Template.bind({});

ChaseDotLarge.args = {
  size: Size.Large,
}
