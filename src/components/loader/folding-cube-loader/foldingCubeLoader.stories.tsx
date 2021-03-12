import React from 'react';
import Loader from '../loader';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LoaderProps, LoaderType } from '../loader.types';
import { Size } from '../../../types/common.types';

export default {
  title: 'Portfolio/Loader/FoldingCube',
  component: Loader,
  args: {
    type: LoaderType.FoldingCube,
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

/* Folding Cube */
export const FoldingCubeSmall = Template.bind({});

FoldingCubeSmall.args = {
  size: Size.Small,
};

export const FoldingCubeMedium = Template.bind({});

FoldingCubeMedium.args = {
  size: Size.Medium,
};

export const FoldingCubeLarge = Template.bind({});

FoldingCubeLarge.args = {
  size: Size.Large,
};
